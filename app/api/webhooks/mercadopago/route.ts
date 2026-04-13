import { PurchaseStatus } from '@prisma/client'
import { NextResponse } from 'next/server'
import { accessPlan, grantPlanAccess } from '@/lib/access'
import { prisma } from '@/lib/db'
import { getMercadoPagoPaymentClient } from '@/lib/mercadopago'

function mapPaymentStatus(status?: string) {
  switch (status) {
    case 'approved':
      return PurchaseStatus.APPROVED
    case 'rejected':
      return PurchaseStatus.REJECTED
    case 'cancelled':
      return PurchaseStatus.CANCELLED
    case 'refunded':
      return PurchaseStatus.REFUNDED
    default:
      return PurchaseStatus.PENDING
  }
}

export async function POST(request: Request) {
  if (!process.env.MERCADOPAGO_ACCESS_TOKEN) {
    return NextResponse.json({ ok: true })
  }

  const { searchParams } = new URL(request.url)
  const topic = searchParams.get('topic') ?? searchParams.get('type')
  const paymentId =
    searchParams.get('data.id') ??
    searchParams.get('id') ??
    request.headers.get('x-payment-id')

  if (topic !== 'payment' || !paymentId) {
    return NextResponse.json({ ok: true })
  }

  try {
    const paymentClient = getMercadoPagoPaymentClient()
    const payment = await paymentClient.get({ id: paymentId })

    if (!payment.external_reference) {
      return NextResponse.json({ ok: true })
    }

    const status = mapPaymentStatus(payment.status)
    const purchase = await prisma.purchase.update({
      where: { id: payment.external_reference },
      data: {
        providerPaymentId: String(payment.id),
        status,
        metadata: {
          paymentStatus: payment.status ?? null,
          statusDetail: payment.status_detail ?? null,
          paymentTypeId: payment.payment_type_id ?? null,
          paidAmount: payment.transaction_amount ?? null,
        },
      },
    })

    if (status === PurchaseStatus.APPROVED && purchase.planCode === accessPlan.code) {
      const existingAccess = await prisma.accessGrant.findFirst({
        where: {
          userId: purchase.userId,
          planCode: accessPlan.code,
          expiresAt: {
            gt: new Date(),
          },
        },
      })

      if (!existingAccess) {
        await grantPlanAccess(purchase.userId)
      }
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
