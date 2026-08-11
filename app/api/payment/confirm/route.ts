import { NextResponse } from 'next/server'
import { getMercadoPagoPaymentClient } from '@/lib/mercadopago'
import { isTrackingAuditLogsEnabled, trackingAuditLog } from '@/lib/tracking-audit'

function readMetadataEmail(metadata: unknown) {
  if (!metadata || typeof metadata !== 'object' || !('email' in metadata)) {
    return null
  }

  const email = (metadata as Record<string, unknown>).email
  return typeof email === 'string' ? email.toLowerCase().trim() : null
}

function getPaymentEmail(payment: {
  metadata?: unknown
  payer?: { email?: string | null } | null
  external_reference?: string | null
}) {
  return (
    readMetadataEmail(payment.metadata) ??
    payment.payer?.email?.toLowerCase().trim() ??
    payment.external_reference?.toLowerCase().trim() ??
    null
  )
}

export async function GET(request: Request) {
  const auditLogsEnabled = isTrackingAuditLogsEnabled()
  console.log(`Tracking audit mode: ${auditLogsEnabled ? 'ON' : 'OFF'}`)
  if (!process.env.MERCADOPAGO_ACCESS_TOKEN) {
    return NextResponse.json(
      { error: 'MERCADOPAGO_ACCESS_TOKEN is not configured' },
      { status: 500 }
    )
  }

  const { searchParams } = new URL(request.url)
  const paymentId = searchParams.get('payment_id') ?? searchParams.get('collection_id')
  const email = searchParams.get('email')?.toLowerCase().trim()
  trackingAuditLog('info', '[tracking:audit:confirm] request-received', {
    payment_id: paymentId,
    email,
  }, auditLogsEnabled)

  if (!paymentId) {
    return NextResponse.json({ error: 'payment_id is required' }, { status: 400 })
  }

  if (!email) {
    return NextResponse.json({ error: 'email is required' }, { status: 400 })
  }

  try {
    const paymentClient = getMercadoPagoPaymentClient()
    const payment = await paymentClient.get({ id: paymentId })
    const confirmedPaymentId = String(payment.id ?? paymentId)
    const paymentEmail = getPaymentEmail(payment)
    const status = payment.status ?? null
    const approved = status === 'approved'
    const eventId = `mp_${confirmedPaymentId}`
    const value = Number(payment.transaction_amount ?? 0)
    const currency = payment.currency_id ?? 'BRL'

    if (!paymentEmail || paymentEmail !== email) {
      console.warn('[payment:confirm] payment email mismatch', {
        paymentId: confirmedPaymentId,
      })
      trackingAuditLog('warn', '[tracking:audit:confirm] email-mismatch', {
        payment_id: paymentId,
        paymentId: confirmedPaymentId,
        emailReceived: email,
        paymentEmail,
        status,
        approvedFinal: approved,
        eventId,
      }, auditLogsEnabled)
      return NextResponse.json({ error: 'Pagamento nao corresponde ao e-mail informado.' }, { status: 403 })
    }

    trackingAuditLog('info', '[tracking:audit:confirm] payment-confirmed', {
      payment_id: paymentId,
      paymentId: confirmedPaymentId,
      emailReceived: email,
      statusConsulted: status,
      approvedFinal: approved,
      eventId,
    }, auditLogsEnabled)

    return NextResponse.json(
      {
        approved,
        value,
        currency,
        paymentId: confirmedPaymentId,
        eventId,
      },
      {
        headers: {
          'Cache-Control': 'no-store',
        },
      }
    )
  } catch (error) {
    console.error('[payment:confirm] failed to confirm payment', error)
    return NextResponse.json({ error: 'Nao foi possivel confirmar o pagamento.' }, { status: 502 })
  }
}
