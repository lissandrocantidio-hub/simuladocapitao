import { AccessGrantStatus, PurchaseStatus } from '@prisma/client'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { getCurrentUser } from '@/lib/auth'
import { prisma } from '@/lib/db'
import { hasGrantedAccess } from '@/lib/payment-access'
import { simulationPresets } from '@/app/lib/simulations'

export const accessPlan = {
  code: 'premium-180d',
  name: 'Acesso completo por 180 dias',
  description: 'Libera todos os simulados premium por 180 dias corridos.',
  durationDays: 180,
  priceCents: 3900,
  currency: 'BRL',
} as const

export const freePaths = new Set(['/simulado'])

export const premiumPaths = new Set(
  simulationPresets.map((preset) => preset.href).filter((pathname) => !freePaths.has(pathname))
)

export function formatPriceInReais(amountCents: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(amountCents / 100)
}

export function addDays(date: Date, days: number) {
  const nextDate = new Date(date)
  nextDate.setDate(nextDate.getDate() + days)
  return nextDate
}

export async function getLatestAccessGrant(userId: string) {
  return prisma.accessGrant.findFirst({
    where: { userId },
    orderBy: { expiresAt: 'desc' },
  })
}

export async function getActiveAccessGrant(userId: string) {
  return prisma.accessGrant.findFirst({
    where: {
      userId,
      status: AccessGrantStatus.ACTIVE,
      expiresAt: {
        gt: new Date(),
      },
    },
    orderBy: { expiresAt: 'desc' },
  })
}

export async function getCurrentAccessSnapshot() {
  const user = await getCurrentUser()

  if (!user?.id) {
    return {
      user: null,
      accessGrant: null,
      hasAccess: false,
    }
  }

  const accessGrant = await getActiveAccessGrant(user.id)

  return {
    user,
    accessGrant,
    hasAccess: Boolean(accessGrant),
  }
}

export async function requirePremiumAccess(pathname: string) {
  const cookieStore = await cookies()
  const emailFromCookie = cookieStore.get('simulado_access_email')?.value?.toLowerCase().trim()

  if (emailFromCookie && (await hasGrantedAccess(emailFromCookie))) {
    return {
      email: emailFromCookie,
      accessGranted: true,
    }
  }

  const user = await getCurrentUser()

  if (!user?.id) {
    redirect(`/comprar?next=${encodeURIComponent(pathname)}`)
  }

  const activeAccess = await getActiveAccessGrant(user.id)

  if (activeAccess) {
    return {
      user,
      accessGrant: activeAccess,
    }
  }

  const latestAccess = await getLatestAccessGrant(user.id)

  if (latestAccess) {
    redirect(`/acesso-expirado?next=${encodeURIComponent(pathname)}`)
  }

  redirect(`/comprar?next=${encodeURIComponent(pathname)}`)
}

export async function markExpiredAccessGrants(userId: string) {
  await prisma.accessGrant.updateMany({
    where: {
      userId,
      status: AccessGrantStatus.ACTIVE,
      expiresAt: {
        lte: new Date(),
      },
    },
    data: {
      status: AccessGrantStatus.EXPIRED,
    },
  })
}

export async function grantPlanAccess(userId: string) {
  await markExpiredAccessGrants(userId)

  const now = new Date()
  const latestGrant = await getLatestAccessGrant(userId)
  const baseDate = latestGrant && latestGrant.expiresAt > now ? latestGrant.expiresAt : now

  return prisma.accessGrant.create({
    data: {
      userId,
      planCode: accessPlan.code,
      startsAt: now,
      expiresAt: addDays(baseDate, accessPlan.durationDays),
      status: AccessGrantStatus.ACTIVE,
    },
  })
}

export async function syncApprovedPurchaseAccess(userId: string) {
  const approvedPurchase = await prisma.purchase.findFirst({
    where: {
      userId,
      planCode: accessPlan.code,
      status: PurchaseStatus.APPROVED,
    },
    orderBy: { updatedAt: 'desc' },
  })

  if (!approvedPurchase) {
    return null
  }

  const currentAccess = await getActiveAccessGrant(userId)

  if (currentAccess) {
    return currentAccess
  }

  return grantPlanAccess(userId)
}
