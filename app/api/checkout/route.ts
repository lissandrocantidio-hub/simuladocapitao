import { PaymentProvider, PurchaseStatus } from '@prisma/client'
import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'
import { authOptions } from '@/lib/auth'
import { accessPlan } from '@/lib/billing'
import { getAppliedCoupon, getCheckoutPricing, normalizeCouponCode } from '@/lib/checkout-offers'
import { prisma } from '@/lib/db'
import { getMercadoPagoPreferenceClient } from '@/lib/mercadopago'

export async function POST(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session?.user?.id || !session.user.email) {
    return NextResponse.json({ error: 'Voce precisa entrar para comprar.' }, { status: 401 })
  }

  if (!process.env.MERCADOPAGO_ACCESS_TOKEN) {
    return NextResponse.json(
      { error: 'Configure MERCADOPAGO_ACCESS_TOKEN antes de ativar o checkout.' },
      { status: 500 }
    )
  }

  const body = (await request.json().catch(() => ({}))) as { couponCode?: string }
  const couponCode = normalizeCouponCode(body.couponCode)
  if (couponCode && !getAppliedCoupon(couponCode)) {
    return NextResponse.json({ error: 'Cupom invalido.' }, { status: 400 })
  }

  const pricing = getCheckoutPricing(couponCode)
  const { origin } = new URL(request.url)
  const purchase = await prisma.purchase.create({
    data: {
      userId: session.user.id,
      provider: PaymentProvider.MERCADO_PAGO,
      status: PurchaseStatus.PENDING,
      amountCents: pricing.finalPriceCents,
      currency: accessPlan.currency,
      planCode: accessPlan.code,
      metadata: {
        couponCode: pricing.coupon?.code ?? null,
        originalPriceCents: pricing.originalPriceCents,
        finalPriceCents: pricing.finalPriceCents,
      },
    },
  })

  try {
    const preferenceClient = getMercadoPagoPreferenceClient()
    const response = await preferenceClient.create({
      body: {
        items: [
          {
            id: accessPlan.code,
            title: accessPlan.name,
            description: accessPlan.description,
            quantity: 1,
            unit_price: pricing.finalPriceCents / 100,
            currency_id: accessPlan.currency,
          },
        ],
        payer: {
          email: session.user.email,
        },
        payment_methods: {
          default_payment_method_id: 'pix',
        },
        back_urls: {
          success: `${origin}/minha-conta?checkout=success`,
          pending: `${origin}/minha-conta?checkout=pending`,
          failure: `${origin}/comprar?checkout=failure`,
        },
        auto_return: 'approved',
        external_reference: purchase.id,
        notification_url: `${origin}/api/webhooks/mercadopago`,
        statement_descriptor: 'SIMULADO CAP',
      },
    })

    await prisma.purchase.update({
      where: { id: purchase.id },
      data: {
        providerCheckoutId: response.id ?? undefined,
        providerReference: purchase.id,
        metadata: {
          initPoint: response.init_point ?? null,
          sandboxInitPoint: response.sandbox_init_point ?? null,
          couponCode: pricing.coupon?.code ?? null,
          originalPriceCents: pricing.originalPriceCents,
          finalPriceCents: pricing.finalPriceCents,
        },
      },
    })

    return NextResponse.json({
      initPoint: response.init_point ?? response.sandbox_init_point ?? null,
    })
  } catch {
    await prisma.purchase.update({
      where: { id: purchase.id },
      data: {
        status: PurchaseStatus.CANCELLED,
      },
    })

    return NextResponse.json(
      { error: 'Nao foi possivel iniciar o checkout agora.' },
      { status: 500 }
    )
  }
}
