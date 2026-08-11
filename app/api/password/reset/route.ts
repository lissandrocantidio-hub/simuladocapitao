import { createHash } from 'crypto'
import { hash } from 'bcryptjs'
import { NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/db'

const resetPasswordSchema = z.object({
  token: z.string().min(20, 'Link invalido.'),
  password: z
    .string()
    .min(6, 'A senha precisa ter pelo menos 6 caracteres.')
    .max(100, 'Senha muito longa.'),
})

function hashToken(token: string) {
  return createHash('sha256').update(token).digest('hex')
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  const parsed = resetPasswordSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? 'Dados invalidos.' },
      { status: 400 }
    )
  }

  const tokenRecord = await prisma.passwordResetToken.findUnique({
    where: { tokenHash: hashToken(parsed.data.token) },
    select: {
      id: true,
      userId: true,
      expiresAt: true,
      usedAt: true,
    },
  })

  if (!tokenRecord || tokenRecord.usedAt || tokenRecord.expiresAt <= new Date()) {
    return NextResponse.json(
      { error: 'Esse link expirou ou ja foi usado. Solicite um novo link.' },
      { status: 400 }
    )
  }

  const passwordHash = await hash(parsed.data.password, 12)

  await prisma.$transaction([
    prisma.user.update({
      where: { id: tokenRecord.userId },
      data: { passwordHash },
    }),
    prisma.passwordResetToken.update({
      where: { id: tokenRecord.id },
      data: { usedAt: new Date() },
    }),
    prisma.passwordResetToken.updateMany({
      where: {
        userId: tokenRecord.userId,
        usedAt: null,
        id: { not: tokenRecord.id },
      },
      data: { usedAt: new Date() },
    }),
  ])

  return NextResponse.json({ ok: true })
}
