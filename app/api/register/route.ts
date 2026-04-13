import { hash } from 'bcryptjs'
import { NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/db'

const registerSchema = z.object({
  name: z.string().min(2, 'Informe seu nome.'),
  email: z.string().email('Informe um e-mail valido.'),
  password: z
    .string()
    .min(6, 'A senha precisa ter pelo menos 6 caracteres.')
    .max(100, 'Senha muito longa.'),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = registerSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? 'Dados invalidos.' },
        { status: 400 }
      )
    }

    const email = parsed.data.email.toLowerCase().trim()
    const existingUser = await prisma.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      return NextResponse.json(
        { error: 'Ja existe uma conta com esse e-mail.' },
        { status: 409 }
      )
    }

    const passwordHash = await hash(parsed.data.password, 12)

    const user = await prisma.user.create({
      data: {
        name: parsed.data.name.trim(),
        email,
        passwordHash,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    })

    return NextResponse.json({ user }, { status: 201 })
  } catch {
    return NextResponse.json(
      { error: 'Nao foi possivel criar a conta agora.' },
      { status: 500 }
    )
  }
}
