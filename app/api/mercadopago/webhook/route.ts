import { createHmac, timingSafeEqual } from 'crypto'
import { NextResponse } from 'next/server'
import {
  markConfirmationEmailResult,
  processApprovedMercadoPagoPayment,
  recordMercadoPagoWebhookEvent,
  shouldSendConfirmationEmail,
} from '@/lib/payment-access'
import { getCheckoutPricing } from '@/lib/checkout-offers'
import { sendMetaPurchaseEvent } from '@/lib/meta-conversions'
import { getMercadoPagoPaymentClient } from '@/lib/mercadopago'
import {
  sendPurchaseAdminNotificationEmail,
  sendPurchaseConfirmationEmail,
} from '@/lib/purchase-confirmation-email'
import { isTrackingAuditLogsEnabled, trackingAuditLog } from '@/lib/tracking-audit'

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

function getSignaturePart(signature: string, key: string) {
  return signature
    .split(',')
    .map((part) => part.trim().split('='))
    .find(([partKey]) => partKey === key)?.[1]
}

function safeCompare(left: string, right: string) {
  const leftBuffer = Buffer.from(left)
  const rightBuffer = Buffer.from(right)

  return leftBuffer.length === rightBuffer.length && timingSafeEqual(leftBuffer, rightBuffer)
}

function isValidMercadoPagoSignature(input: {
  paymentId: string | null
  requestId: string | null
  signature: string | null
}) {
  const secret = process.env.MERCADOPAGO_WEBHOOK_SECRET

  if (!secret) {
    return true
  }

  const ts = input.signature ? getSignaturePart(input.signature, 'ts') : null
  const signatureHash = input.signature ? getSignaturePart(input.signature, 'v1') : null

  if (!input.paymentId || !input.requestId || !ts || !signatureHash) {
    return false
  }

  const manifest = `id:${input.paymentId};request-id:${input.requestId};ts:${ts};`
  const expectedHash = createHmac('sha256', secret).update(manifest).digest('hex')

  return safeCompare(expectedHash, signatureHash)
}

function readMetadataValue(metadata: unknown, key: string) {
  if (!metadata || typeof metadata !== 'object' || !(key in metadata)) {
    return null
  }

  const value = (metadata as Record<string, unknown>)[key]
  return typeof value === 'string' ? value : null
}

function getPaymentEmail(payment: {
  metadata?: unknown
  payer?: { email?: string | null } | null
  external_reference?: string | null
}) {
  return (
    readMetadataValue(payment.metadata, 'email') ??
    payment.payer?.email ??
    payment.external_reference ??
    null
  )
}

export async function POST(request: Request) {
  const auditLogsEnabled = isTrackingAuditLogsEnabled()
  console.log(`Tracking audit mode: ${auditLogsEnabled ? 'ON' : 'OFF'}`)
  const { searchParams } = new URL(request.url)
  const body = ((await request.json().catch(() => ({}))) ?? {}) as Record<string, unknown>
  const topic =
    searchParams.get('topic') ??
    searchParams.get('type') ??
    (typeof body.type === 'string' ? body.type : null)
  const action = typeof body.action === 'string' ? body.action : null
  const paymentId = extractPaymentId(searchParams, body)
  trackingAuditLog('info', '[tracking:audit:webhook] request-received', {
    paymentId,
    topic,
    action,
  }, auditLogsEnabled)
  const signatureIsValid = isValidMercadoPagoSignature({
    paymentId,
    requestId: request.headers.get('x-request-id'),
    signature: request.headers.get('x-signature'),
  })

  if (!signatureIsValid) {
    console.warn('[mercadopago:webhook] invalid webhook signature', { paymentId })
    return NextResponse.json({ received: false }, { status: 401 })
  }

  await recordMercadoPagoWebhookEvent({
    topic,
    action,
    paymentId,
    rawPayload: body,
  })

  if (!process.env.MERCADOPAGO_ACCESS_TOKEN) {
    console.warn('[mercadopago:webhook] MERCADOPAGO_ACCESS_TOKEN is not configured')
    return NextResponse.json({ received: true })
  }

  if (topic !== 'payment' || !paymentId) {
    return NextResponse.json({ received: true })
  }

  try {
    const paymentClient = getMercadoPagoPaymentClient()
    const payment = await paymentClient.get({ id: paymentId })
    const status = payment.status ?? null
    const confirmedPaymentId = String(payment.id ?? paymentId)
    const email = getPaymentEmail(payment)
    const eventId = `mp_${confirmedPaymentId}`

    trackingAuditLog('info', '[tracking:audit:webhook] payment-fetched', {
      paymentId: confirmedPaymentId,
      status,
      email,
      eventId,
    }, auditLogsEnabled)

    await recordMercadoPagoWebhookEvent({
      topic,
      action,
      paymentId: confirmedPaymentId,
      email,
      rawPayload: {
        fetchedPaymentStatus: status,
        externalReference: payment.external_reference ?? null,
        transactionAmount: payment.transaction_amount ?? null,
        currencyId: payment.currency_id ?? null,
      },
    })

    if (status !== 'approved') {
      console.info('[mercadopago:webhook] ignored non-approved payment', {
        paymentId: confirmedPaymentId,
        status,
      })
      return NextResponse.json({ received: true })
    }

    if (!email) {
      console.warn('[mercadopago:webhook] approved payment without buyer email', {
        paymentId: confirmedPaymentId,
      })
      return NextResponse.json({ received: true })
    }

    const amount = Number(payment.transaction_amount ?? 0)
    const currency = payment.currency_id ?? 'BRL'
    const processedPayment = await processApprovedMercadoPagoPayment({
      email,
      paymentId: confirmedPaymentId,
      status: 'approved',
      amount,
      currency,
      eventId,
    })

    if (!processedPayment.isNewPayment) {
      console.info('[mercadopago:webhook] duplicate approved payment ignored', {
        paymentId: confirmedPaymentId,
        eventId,
      })
      trackingAuditLog('info', '[tracking:audit:webhook] duplicate-ignored', {
        paymentId: confirmedPaymentId,
        status,
        email,
        eventId,
      }, auditLogsEnabled)
      return NextResponse.json({ received: true, eventId })
    }

    trackingAuditLog('info', '[tracking:audit:webhook] access-released', {
      paymentId: confirmedPaymentId,
      status,
      email: processedPayment.access.email,
      eventId,
      accessGranted: processedPayment.access.accessGranted,
      releasedAt: processedPayment.access.updatedAt.toISOString(),
    }, auditLogsEnabled)

    const metaResult = await sendMetaPurchaseEvent({
      email,
      eventId,
      value: amount,
      currency,
    })

    if (!metaResult.ok) {
      console.error('[mercadopago:webhook] Meta CAPI Purchase failed', {
        paymentId: confirmedPaymentId,
        eventId,
        error: metaResult.error,
      })
    }

    const purchaseAlertResult = await sendPurchaseAdminNotificationEmail({
      buyerEmail: processedPayment.access.email,
      paymentId: processedPayment.access.paymentId,
      amountCents: Math.round(amount * 100),
      currency,
    })

    if (!purchaseAlertResult.skipped && !purchaseAlertResult.ok) {
      console.error('[mercadopago:webhook] purchase alert email failed', {
        paymentId: confirmedPaymentId,
        eventId,
        error: purchaseAlertResult.error,
      })
    }

    if (shouldSendConfirmationEmail(processedPayment.access)) {
      const couponCode =
        readMetadataValue(payment.metadata, 'coupon') ??
        readMetadataValue(payment.metadata, 'couponCode')
      const pricing = getCheckoutPricing(couponCode)
      const emailResult = await sendPurchaseConfirmationEmail({
        buyerEmail: processedPayment.access.email,
        paymentId: processedPayment.access.paymentId,
        amountCents: Math.round(amount * 100) || pricing.finalPriceCents,
      })

      if (!emailResult.skipped) {
        await markConfirmationEmailResult({
          email: processedPayment.access.email,
          paymentId: processedPayment.access.paymentId,
          success: emailResult.ok,
          error: emailResult.ok ? null : emailResult.error,
        })
      }
    }

    return NextResponse.json({ received: true, eventId })
  } catch (error) {
    console.error('[mercadopago:webhook] failed to process webhook', error)
    return NextResponse.json({ received: false }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ ok: true, route: '/api/mercadopago/webhook' })
}
