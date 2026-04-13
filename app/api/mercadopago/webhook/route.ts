import { NextResponse } from 'next/server'
import {
  grantAccessForApprovedPayment,
  recordMercadoPagoWebhookEvent,
} from '@/lib/payment-access'
import { getMercadoPagoPaymentClient } from '@/lib/mercadopago'

function extractPaymentId(searchParams: URLSearchParams, body: Record<string, unknown>) {
  const bodyData = body.data

  if (typeof bodyData === 'object' && bodyData && 'id' in bodyData && bodyData.id != null) {
    return String(bodyData.id)
  }

  return (
    searchParams.get('data.id') ??
    searchParams.get('id') ??
    (typeof body['data.id'] === 'string' ? body['data.id'] : null) ??
    null
  )
}

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url)
  const body = ((await request.json().catch(() => ({}))) ?? {}) as Record<string, unknown>
  const topic =
    searchParams.get('topic') ??
    searchParams.get('type') ??
    (typeof body.type === 'string' ? body.type : null)
  const action = typeof body.action === 'string' ? body.action : null
  const paymentId = extractPaymentId(searchParams, body)

  await recordMercadoPagoWebhookEvent({
    topic,
    action,
    paymentId,
    rawPayload: body,
  })

  if (!process.env.MERCADOPAGO_ACCESS_TOKEN || topic !== 'payment' || !paymentId) {
    return NextResponse.json({ received: true })
  }

  try {
    const paymentClient = getMercadoPagoPaymentClient()
    const payment = await paymentClient.get({ id: paymentId })
    const email =
      (typeof payment.metadata?.email === 'string' ? payment.metadata.email : null) ??
      payment.payer?.email ??
      (typeof payment.external_reference === 'string' ? payment.external_reference : null)

    await recordMercadoPagoWebhookEvent({
      topic,
      action,
      paymentId: String(payment.id ?? paymentId),
      email,
      rawPayload: {
        fetchedPaymentStatus: payment.status ?? null,
        externalReference: payment.external_reference ?? null,
      },
    })

    if (email && payment.status) {
      await grantAccessForApprovedPayment({
        email: email.toLowerCase().trim(),
        paymentId: String(payment.id ?? paymentId),
        status: payment.status,
      })
    }

    return NextResponse.json({ received: true })
  } catch {
    return NextResponse.json({ received: false }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ ok: true, route: '/api/mercadopago/webhook' })
}
