import { NextResponse } from 'next/server'
import { z } from 'zod'
import { getAppliedCoupon, getCheckoutPricing, normalizeCouponCode } from '@/lib/checkout-offers'
import { createPendingPaymentAccess, checkoutProduct } from '@/lib/payment-access'
import { getMercadoPagoPreferenceClient } from '@/lib/mercadopago'

const payloadSchema = z.object({
  email: z.string().email(),
  couponCode: z.string().optional(),
})

function getBaseUrl(request: Request) {
  if (process.env.NEXT_PUBLIC_APP_URL) {
    return process.env.NEXT_PUBLIC_APP_URL
  }

  if (process.env.APP_URL) {
    return process.env.APP_URL
  }

  const { origin } = new URL(request.url)
  return origin
}

export async function POST(request: Request) {
  if (!process.env.MERCADOPAGO_ACCESS_TOKEN) {
    return NextResponse.json(
      { error: 'Configure MERCADOPAGO_ACCESS_TOKEN para criar o checkout.' },
      { status: 500 }
    )
  }

  try {
    const body = await request.json()
    const parsed = payloadSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json({ error: 'Informe um e-mail valido.' }, { status: 400 })
    }

    const email = parsed.data.email.toLowerCase().trim()
    const couponCode = normalizeCouponCode(parsed.data.couponCode)
    if (couponCode && !getAppliedCoupon(couponCode)) {
      return NextResponse.json({ error: 'Cupom invalido.' }, { status: 400 })
    }

    const pricing = getCheckoutPricing(couponCode)
    await createPendingPaymentAccess(email)

    const baseUrl = getBaseUrl(request)
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
          couponCode: pricing.coupon?.code ?? null,
          originalPriceCents: pricing.originalPriceCents,
          finalPriceCents: pricing.finalPriceCents,
        },
        external_reference: email,
        back_urls: {
          success: `${baseUrl}/compra-concluida?status=success&email=${encodeURIComponent(email)}`,
          pending: `${baseUrl}/compra-concluida?status=pending&email=${encodeURIComponent(email)}`,
          failure: `${baseUrl}/compra-concluida?status=failure&email=${encodeURIComponent(email)}`,
        },
        auto_return: 'approved',
        notification_url: `${baseUrl}/api/mercadopago/webhook`,
      },
    })

    return NextResponse.json({
      init_point: response.init_point ?? response.sandbox_init_point ?? null,
    })
  } catch {
    return NextResponse.json(
      { error: 'Nao foi possivel criar a preference agora.' },
      { status: 500 }
    )
  }
}
