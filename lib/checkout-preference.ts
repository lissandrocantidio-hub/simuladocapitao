import { normalizeCouponCode } from '@/lib/checkout-offers'
import { resolveAppliedCoupon, resolveCheckoutPricing } from '@/lib/coupons'
import { getMercadoPagoPreferenceClient } from '@/lib/mercadopago'
import { checkoutProduct, createPendingPaymentAccess } from '@/lib/payment-access'
import { sendPendingCheckoutEmail } from '@/lib/purchase-confirmation-email'

export function getCheckoutBaseUrl(requestUrl?: string) {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL
  }

  if (process.env.NEXT_PUBLIC_APP_URL) {
    return process.env.NEXT_PUBLIC_APP_URL
  }

  if (process.env.APP_URL) {
    return process.env.APP_URL
  }

  if (requestUrl) {
    return new URL(requestUrl).origin
  }

  return 'https://simuladocapitao.com.br'
}

export async function createCheckoutPreference(input: {
  email: string
  baseUrl: string
  nextPath: string
  couponCode?: string | null
}) {
  const email = input.email.toLowerCase().trim()
  const couponCode = normalizeCouponCode(input.couponCode)

  if (couponCode && !(await resolveAppliedCoupon(couponCode))) {
    return { ok: false as const, error: 'Cupom invalido.' }
  }

  const pricing = await resolveCheckoutPricing(couponCode)
  await createPendingPaymentAccess(email)

  const preferenceClient = getMercadoPagoPreferenceClient()
  const response = await preferenceClient.create({
    body: {
      items: [
        {
          id: 'acesso-simulado-capitao-amador',
          title: checkoutProduct.title,
          description: checkoutProduct.description,
          quantity: 1,
          unit_price: pricing.finalPriceCents / 100,
          currency_id: checkoutProduct.currency,
        },
      ],
      payer: {
        email,
      },
      payment_methods: {
        default_payment_method_id: 'pix',
      },
      metadata: {
        email,
        product: checkoutProduct.title,
        access_days: 90,
        coupon: pricing.coupon?.code ?? null,
        value: pricing.finalPriceCents / 100,
        couponCode: pricing.coupon?.code ?? null,
        originalPriceCents: pricing.originalPriceCents,
        finalPriceCents: pricing.finalPriceCents,
      },
      external_reference: email,
      back_urls: {
        success: `${input.baseUrl}/compra-concluida?status=success&email=${encodeURIComponent(email)}&next=${encodeURIComponent(input.nextPath)}`,
        pending: `${input.baseUrl}/compra-concluida?status=pending&email=${encodeURIComponent(email)}&next=${encodeURIComponent(input.nextPath)}`,
        failure: `${input.baseUrl}/compra-concluida?status=failure&email=${encodeURIComponent(email)}&next=${encodeURIComponent(input.nextPath)}`,
      },
      auto_return: 'approved',
      notification_url: `${input.baseUrl}/api/mercadopago/webhook`,
    },
  })

  return {
    ok: true as const,
    checkoutUrl: response.init_point ?? response.sandbox_init_point ?? null,
    pricing,
  }
}

export async function createCheckoutPreferenceAndSendEmail(input: {
  email: string
  baseUrl: string
  nextPath: string
  couponCode?: string | null
}) {
  const preference = await createCheckoutPreference(input)

  if (!preference.ok) {
    return preference
  }

  if (!preference.checkoutUrl) {
    return { ok: false as const, error: 'Nao foi possivel gerar o link de checkout.' }
  }

  const emailResult = await sendPendingCheckoutEmail({
    buyerEmail: input.email.toLowerCase().trim(),
    checkoutUrl: preference.checkoutUrl,
    coupon: preference.pricing.coupon,
    originalPriceCents: preference.pricing.originalPriceCents,
    finalPriceCents: preference.pricing.finalPriceCents,
  })

  if (!emailResult.ok) {
    return {
      ok: false as const,
      error: emailResult.error ?? 'Nao foi possivel enviar o e-mail.',
      skipped: emailResult.skipped,
    }
  }

  return {
    ok: true as const,
    checkoutUrl: preference.checkoutUrl,
  }
}
