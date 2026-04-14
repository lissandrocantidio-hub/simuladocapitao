import { prisma } from '@/lib/db'
import { accessPlan } from '@/lib/billing'

export const checkoutProduct = {
  title: 'Acesso Simulado Capitão Amador',
  description: 'Acesso premium completo por 90 dias mediante pagamento aprovado.',
  priceCents: 3990,
  currency: 'BRL',
} as const

export type PaymentAccessSnapshot = {
  email: string
  paymentId: string | null
  status: string
  accessGranted: boolean
  confirmationEmailSentAt: Date | null
  confirmationEmailSentForPaymentId: string | null
  confirmationEmailLastError: string | null
  createdAt: Date
  updatedAt: Date
}

export async function createPendingPaymentAccess(email: string) {
  return prisma.paymentAccess.upsert({
    where: { email },
    update: {
      status: 'pending',
      accessGranted: false,
      paymentId: null,
    },
    create: {
      email,
      status: 'pending',
      accessGranted: false,
    },
  })
}

export async function markPaymentAccessStatus(input: {
  email: string
  paymentId: string | null
  status: string
  accessGranted: boolean
}) {
  return prisma.paymentAccess.upsert({
    where: { email: input.email },
    update: {
      paymentId: input.paymentId,
      status: input.status,
      accessGranted: input.accessGranted,
    },
    create: {
      email: input.email,
      paymentId: input.paymentId,
      status: input.status,
      accessGranted: input.accessGranted,
    },
  })
}

export async function recordMercadoPagoWebhookEvent(input: {
  topic?: string | null
  action?: string | null
  paymentId?: string | null
  email?: string | null
  rawPayload?: unknown
}) {
  return prisma.mercadoPagoWebhookEvent.create({
    data: {
      topic: input.topic ?? null,
      action: input.action ?? null,
      paymentId: input.paymentId ?? null,
      email: input.email ?? null,
      rawPayload: input.rawPayload as object | undefined,
    },
  })
}

export async function grantAccessForApprovedPayment(input: {
  email: string
  paymentId: string | null
  status: string
}) {
  return markPaymentAccessStatus({
    email: input.email,
    paymentId: input.paymentId,
    status: input.status,
    accessGranted: input.status === 'approved',
  })
}

export async function getPaymentAccessByEmail(email: string): Promise<PaymentAccessSnapshot | null> {
  return prisma.paymentAccess.findUnique({
    where: { email },
    select: {
      email: true,
      paymentId: true,
      status: true,
      accessGranted: true,
      confirmationEmailSentAt: true,
      confirmationEmailSentForPaymentId: true,
      confirmationEmailLastError: true,
      createdAt: true,
      updatedAt: true,
    },
  })
}

export function getPaymentAccessExpiration(access: Pick<PaymentAccessSnapshot, 'updatedAt'>) {
  const expiresAt = new Date(access.updatedAt)
  expiresAt.setDate(expiresAt.getDate() + accessPlan.durationDays)
  return expiresAt
}

export function isPaymentAccessActive(access: PaymentAccessSnapshot | null) {
  if (!access?.accessGranted) {
    return false
  }

  return getPaymentAccessExpiration(access) > new Date()
}

export async function getActivePaymentAccessByEmail(email: string) {
  const access = await getPaymentAccessByEmail(email)
  return isPaymentAccessActive(access) ? access : null
}

export async function hasGrantedAccess(email: string) {
  const access = await getPaymentAccessByEmail(email)
  return isPaymentAccessActive(access)
}

export async function markConfirmationEmailResult(input: {
  email: string
  paymentId: string | null
  success: boolean
  error?: string | null
}) {
  return prisma.paymentAccess.update({
    where: { email: input.email },
    data: {
      confirmationEmailSentAt: input.success ? new Date() : undefined,
      confirmationEmailSentForPaymentId: input.success ? input.paymentId : undefined,
      confirmationEmailLastError: input.success ? null : (input.error ?? 'email-send-failed'),
    },
  })
}

export function shouldSendConfirmationEmail(
  access: Pick<PaymentAccessSnapshot, 'accessGranted' | 'paymentId' | 'confirmationEmailSentForPaymentId'>
) {
  if (!access.accessGranted || !access.paymentId) {
    return false
  }

  return access.confirmationEmailSentForPaymentId !== access.paymentId
}
