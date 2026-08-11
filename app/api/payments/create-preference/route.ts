import { NextResponse } from 'next/server'
import { z } from 'zod'
import { createCheckoutPreference, getCheckoutBaseUrl } from '@/lib/checkout-preference'
import { sanitizeNextPath } from '@/lib/navigation'
import { sendPendingCheckoutEmail } from '@/lib/purchase-confirmation-email'

const payloadSchema = z.object({
  email: z.string().email(),
  couponCode: z.string().optional(),
  nextPath: z.string().optional(),
})

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
    const nextPath = sanitizeNextPath(parsed.data.nextPath)

    const result = await createCheckoutPreference({
      email,
      baseUrl: getCheckoutBaseUrl(request.url),
      nextPath,
      couponCode: parsed.data.couponCode,
    })

    if (!result.ok) {
      if (result.error === 'Cupom invalido.') {
        return NextResponse.json({ error: result.error }, { status: 400 })
      }

      return NextResponse.json({ error: result.error }, { status: 400 })
    }

    if (result.checkoutUrl) {
      try {
        await sendPendingCheckoutEmail({
          buyerEmail: email,
          checkoutUrl: result.checkoutUrl,
          coupon: result.pricing.coupon,
          originalPriceCents: result.pricing.originalPriceCents,
          finalPriceCents: result.pricing.finalPriceCents,
        })
      } catch (error) {
        console.error('[payments:create-preference] failed to send pending checkout email', error)
      }
    }

    return NextResponse.json({
      init_point: result.checkoutUrl,
    })
  } catch {
    return NextResponse.json(
      { error: 'Nao foi possivel criar a preference agora.' },
      { status: 500 }
    )
  }
}
