import { NextResponse } from 'next/server'
import { getAdminStudentSummary, isAdminEmail } from '@/lib/admin'
import { getCurrentUser } from '@/lib/auth'

export async function GET() {
  const user = await getCurrentUser()

  if (!user?.id) {
    return NextResponse.json({ error: 'Nao autenticado.' }, { status: 401 })
  }

  if (!isAdminEmail(user.email)) {
    return NextResponse.json({ error: 'Acesso negado.' }, { status: 403 })
  }

  const summary = await getAdminStudentSummary()

  return NextResponse.json(summary)
}
