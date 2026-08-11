import { accessPlan, checkoutCoupons, launchCoupon, supportEmail } from '@/lib/billing'

export { launchCoupon, supportEmail }

export type AppliedCoupon = {
  code: string
  percentOff: number
  discountCents: number
}

export function normalizeCouponCode(code?: string | null) {
  if (!code) {
    return ''
  }

  return code
    .trim()
    .toUpperCase()
    .replace(/[\s-]+/g, '_')
    .replace(/[^A-Z0-9_]/g, '')
}

export function getAppliedCoupon(code?: string | null): AppliedCoupon | null {
  const normalizedCode = normalizeCouponCode(code)
  const matchedCoupon = checkoutCoupons.find((coupon) => coupon.code === normalizedCode)

  if (!matchedCoupon) {
    return null
  }

  const discountCents = Math.round((accessPlan.priceCents * matchedCoupon.percentOff) / 100)

  return {
    code: matchedCoupon.code,
    percentOff: matchedCoupon.percentOff,
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
