import { accessPlan } from '@/lib/billing'
import { getAppliedCoupon, normalizeCouponCode } from '@/lib/checkout-offers'
import { prisma } from '@/lib/db'

export type ResolvedCoupon = {
  code: string
  percentOff: number
  discountCents: number
}

function clampPercentOff(percentOff: number) {
  return Math.max(1, Math.min(99, Math.round(percentOff)))
}

export async function resolveAppliedCoupon(code?: string | null): Promise<ResolvedCoupon | null> {
  const normalizedCode = normalizeCouponCode(code)

  if (!normalizedCode) {
    return null
  }

  const fallbackCoupon = getAppliedCoupon(normalizedCode)

  try {
    const coupon = await prisma.coupon.findUnique({
      where: { code: normalizedCode },
      select: {
        code: true,
        percentOff: true,
        isActive: true,
      },
    })

    if (!coupon) {
      return fallbackCoupon
    }

    if (!coupon.isActive) {
      return null
    }

    const safePercentOff = clampPercentOff(coupon.percentOff)
    const discountCents = Math.round((accessPlan.priceCents * safePercentOff) / 100)

    return {
      code: coupon.code,
      percentOff: safePercentOff,
      discountCents,
    }
  } catch {
    if (!fallbackCoupon) {
      return null
    }

    const safePercentOff = clampPercentOff(fallbackCoupon.percentOff)
    const discountCents = Math.round((accessPlan.priceCents * safePercentOff) / 100)

    return {
      code: fallbackCoupon.code,
      percentOff: safePercentOff,
      discountCents,
    }
  }
}

export async function resolveCheckoutPricing(code?: string | null) {
  const coupon = await resolveAppliedCoupon(code)
  const finalPriceCents = coupon
    ? Math.max(0, accessPlan.priceCents - coupon.discountCents)
    : accessPlan.priceCents

  return {
    originalPriceCents: accessPlan.priceCents,
    finalPriceCents,
    coupon,
  }
}

export async function listCoupons() {
  try {
    return await prisma.coupon.findMany({
      orderBy: [{ isActive: 'desc' }, { createdAt: 'desc' }],
      select: {
        id: true,
        code: true,
        percentOff: true,
        description: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
      },
    })
  } catch {
    return []
  }
}

export async function createCoupon(input: {
  code: string
  percentOff: number
  description?: string | null
  isActive: boolean
}) {
  const normalizedCode = normalizeCouponCode(input.code)

  return prisma.coupon.create({
    data: {
      code: normalizedCode,
      percentOff: input.percentOff,
      description: input.description?.trim() || null,
      isActive: input.isActive,
    },
    select: {
      id: true,
      code: true,
      percentOff: true,
      description: true,
      isActive: true,
      createdAt: true,
      updatedAt: true,
    },
  })
}

export async function setCouponActiveState(id: string, isActive: boolean) {
  return prisma.coupon.update({
    where: { id },
    data: { isActive },
    select: {
      id: true,
      code: true,
      percentOff: true,
      description: true,
      isActive: true,
      createdAt: true,
      updatedAt: true,
    },
  })
}
