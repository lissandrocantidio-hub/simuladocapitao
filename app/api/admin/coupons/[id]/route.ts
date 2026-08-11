import { Prisma } from '@prisma/client'
import { NextResponse } from 'next/server'
import { z } from 'zod'
import { isAdminEmail } from '@/lib/admin'
import { setCouponActiveState } from '@/lib/coupons'
import { getCurrentUser } from '@/lib/auth'

const updateCouponStateSchema = z.object({
  isActive: z.boolean(),
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

export async function PATCH(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const denied = await ensureAdmin()

  if (denied) {
    return denied
  }

  const { id } = await context.params
  const body = (await request.json().catch(() => ({}))) as unknown
  const parsed = updateCouponStateSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json({ error: 'Dados invalidos para atualizar cupom.' }, { status: 400 })
  }

  try {
    const coupon = await setCouponActiveState(id, parsed.data.isActive)
    return NextResponse.json({ coupon })
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
      return NextResponse.json({ error: 'Cupom nao encontrado.' }, { status: 404 })
    }

    return NextResponse.json({ error: 'Nao foi possivel atualizar o cupom.' }, { status: 500 })
  }
}
