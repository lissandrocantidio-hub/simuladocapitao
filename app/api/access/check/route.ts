import { NextResponse } from 'next/server'
import { getPaymentAccessByEmail, isPaymentAccessActive } from '@/lib/payment-access'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const email = searchParams.get('email')?.toLowerCase().trim()

  if (!email) {
    return NextResponse.json({ granted: false, error: 'Informe um e-mail.' }, { status: 400 })
  }

  const access = await getPaymentAccessByEmail(email)

  return NextResponse.json({
    granted: isPaymentAccessActive(access),
    status: access?.status ?? null,
  })
}
