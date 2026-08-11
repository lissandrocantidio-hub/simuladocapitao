import { createHash, randomBytes } from 'crypto'
import { NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/db'
import { sendPasswordResetEmail } from '@/lib/password-reset-email'

const forgotPasswordSchema = z.object({
  email: z.string().email('Informe um e-mail valido.'),
})

function hashToken(token: string) {
  return createHash('sha256').update(token).digest('hex')
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  const parsed = forgotPasswordSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? 'Dados invalidos.' },
      { status: 400 }
    )
  }

  const email = parsed.data.email.toLowerCase().trim()
  const user = await prisma.user.findUnique({
    where: { email },
    select: {
      id: true,
      email: true,
      name: true,
    },
  })

  if (user) {
    const token = randomBytes(32).toString('hex')
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000)

    await prisma.passwordResetToken.create({
      data: {
        userId: user.id,
        tokenHash: hashToken(token),
        expiresAt,
      },
    })

    const emailResult = await sendPasswordResetEmail({
      to: user.email,
      name: user.name,
      token,
    })

    if (!emailResult.skipped && !emailResult.ok) {
      console.error('[password-reset] reset email failed', {
        userId: user.id,
        error: emailResult.error,
      })
    }
  }

  return NextResponse.json({
    ok: true,
    message: 'Se esse e-mail estiver cadastrado, enviaremos um link para redefinir a senha.',
  })
}
