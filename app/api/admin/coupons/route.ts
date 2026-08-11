import { Prisma } from '@prisma/client'
import { NextResponse } from 'next/server'
import { z } from 'zod'
import { isAdminEmail } from '@/lib/admin'
import { createCoupon, listCoupons } from '@/lib/coupons'
import { getCurrentUser } from '@/lib/auth'

const createCouponSchema = z.object({
  code: z.string().min(3).max(40),
  percentOff: z.number().int().min(1).max(99),
  description: z.string().max(200).optional(),
  isActive: z.boolean().optional(),
})

async function ensureAdmin() {
  const user = await getCurrentUser()

  if (!user?.id) {
    return NextResponse.json({ error: 'Nao autenticado.' }, { status: 401 })
  }

  if (!isAdminEmail(user.email)) {
    return NextResponse.json({ error: 'Acesso negado.' }, { status: 403 })
  }

  return null
}

export async function GET() {
  const denied = await ensureAdmin()

  if (denied) {
    return denied
  }

  const coupons = await listCoupons()
  return NextResponse.json({ coupons })
}

export async function POST(request: Request) {
  const denied = await ensureAdmin()

  if (denied) {
    return denied
  }

  const body = (await request.json().catch(() => ({}))) as unknown
  const parsed = createCouponSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json({ error: 'Dados invalidos para criar cupom.' }, { status: 400 })
  }

  try {
    const coupon = await createCoupon({
      code: parsed.data.code,
      percentOff: parsed.data.percentOff,
      description: parsed.data.description ?? null,
      isActive: parsed.data.isActive ?? true,
    })

    return NextResponse.json({ coupon }, { status: 201 })
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
      return NextResponse.json({ error: 'Ja existe um cupom com esse codigo.' }, { status: 409 })
    }

    return NextResponse.json({ error: 'Nao foi possivel criar o cupom.' }, { status: 500 })
  }
}
