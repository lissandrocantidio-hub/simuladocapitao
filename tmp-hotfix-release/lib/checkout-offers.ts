import { accessPlan, launchCoupon, supportEmail } from '@/lib/billing'

export { launchCoupon, supportEmail }

export type AppliedCoupon = {
  code: string
  percentOff: number
  discountCents: number
}

export function normalizeCouponCode(code?: string | null) {
  return code?.trim().toUpperCase() ?? ''
}

export function getAppliedCoupon(code?: string | null): AppliedCoupon | null {
  const normalizedCode = normalizeCouponCode(code)

  if (normalizedCode !== launchCoupon.code) {
    return null
  }

  const discountCents = Math.round((accessPlan.priceCents * launchCoupon.percentOff) / 100)

  return {
    code: launchCoupon.code,
    percentOff: launchCoupon.percentOff,
    discountCents,
  }
}

export function getCheckoutPricing(code?: string | null) {
  const coupon = getAppliedCoupon(code)
  const finalPriceCents = coupon
    ? Math.max(0, accessPlan.priceCents - coupon.discountCents)
    : accessPlan.priceCents

  return {
    originalPriceCents: accessPlan.priceCents,
    finalPriceCents,
    coupon,
  }
}
