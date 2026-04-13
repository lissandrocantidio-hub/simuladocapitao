import { NextResponse } from 'next/server'
import { z } from 'zod'
import { hasGrantedAccess } from '@/lib/payment-access'

const sessionSchema = z.object({
  email: z.string().email(),
})

const accessCookieName = 'simulado_access_email'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = sessionSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json({ error: 'Informe um e-mail valido.' }, { status: 400 })
    }

    const email = parsed.data.email.toLowerCase().trim()
    const granted = await hasGrantedAccess(email)

    if (!granted) {
      return NextResponse.json({ granted: false }, { status: 403 })
    }

    const response = NextResponse.json({ granted: true })
    response.cookies.set(accessCookieName, email, {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 24 * 30,
    })

    return response
  } catch {
    return NextResponse.json({ error: 'Nao foi possivel ativar a sessao.' }, { status: 500 })
  }
}
