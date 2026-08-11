import { NextResponse } from 'next/server'
import { z } from 'zod'
import {
  createCheckoutPreferenceAndSendEmail,
  getCheckoutBaseUrl,
} from '@/lib/checkout-preference'
import { isAdminEmail, listPendingPaymentAccesses } from '@/lib/admin'
import { getCurrentUser } from '@/lib/auth'
import { sanitizeNextPath } from '@/lib/navigation'

const resendSchema = z.object({
  emails: z.array(z.string().email()).min(1).max(25),
  nextPath: z.string().optional(),
  couponCode: z.string().optional(),
  allowManualEmails: z.boolean().optional(),
})

async function ensureAdmin() {
  const user = await getCurrentUser()

  if (!user?.id) {
    return NextResponse.json({ error: 'Não autenticado.' }, { status: 401 })
  }

  if (!isAdminEmail(user.email)) {
    return NextResponse.json({ error: 'Acesso negado.' }, { status: 403 })
  }

  return null
}

export async function GET() {
  const denied = await ensureAdmin()

  if (denied) {
    return denied
  }

  const pendingPayments = await listPendingPaymentAccesses()
  return NextResponse.json({ pendingPayments })
}

export async function POST(request: Request) {
  const denied = await ensureAdmin()

  if (denied) {
    return denied
  }

  if (!process.env.MERCADOPAGO_ACCESS_TOKEN) {
    return NextResponse.json(
      { error: 'Configure MERCADOPAGO_ACCESS_TOKEN para criar o checkout.' },
      { status: 500 }
    )
  }

  const body = (await request.json().catch(() => ({}))) as unknown
  const parsed = resendSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json({ error: 'Informe de 1 a 25 e-mails válidos.' }, { status: 400 })
  }

  const baseUrl = getCheckoutBaseUrl(request.url)
  const nextPath = sanitizeNextPath(parsed.data.nextPath)
  const uniqueEmails = [...new Set(parsed.data.emails.map((email) => email.toLowerCase().trim()))]
  const currentPendingPayments = await listPendingPaymentAccesses()
  const pendingEmails = new Set(currentPendingPayments.map((payment) => payment.email))

  const results = []

  for (const email of uniqueEmails) {
    if (!parsed.data.allowManualEmails && !pendingEmails.has(email)) {
      console.warn('[admin:pending-payments] skipped non-pending email', {
        email: email.replace(/^(.{2}).*(@.*)$/, '$1***$2'),
      })
      results.push({
        email,
        ok: false,
        error: 'Este e-mail não está pendente.',
      })
      continue
    }

    try {
      const result = await createCheckoutPreferenceAndSendEmail({
        email,
        baseUrl,
        nextPath,
        couponCode: parsed.data.couponCode,
      })

      console.log('[admin:pending-payments] resend result', {
        email: email.replace(/^(.{2}).*(@.*)$/, '$1***$2'),
        ok: result.ok,
        error: result.ok ? null : result.error,
      })

      results.push({
        email,
        ok: result.ok,
        error: result.ok ? null : result.error,
      })
    } catch {
      console.error('[admin:pending-payments] resend failed unexpectedly', {
        email: email.replace(/^(.{2}).*(@.*)$/, '$1***$2'),
      })
      results.push({
        email,
        ok: false,
        error: 'Não foi possível reenviar agora.',
      })
    }
  }

  const sentCount = results.filter((result) => result.ok).length
  const pendingPayments = await listPendingPaymentAccesses()

  return NextResponse.json({
    sentCount,
    failedCount: results.length - sentCount,
    results,
    pendingPayments,
  })
}
