import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/db'

export async function POST(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session?.user?.id) {
    return new NextResponse(null, { status: 204 })
  }

  let lastSeenPath: string | undefined

  try {
    const body = (await request.json()) as { path?: unknown }

    if (typeof body.path === 'string' && body.path.startsWith('/')) {
      lastSeenPath = body.path.slice(0, 240)
    }
  } catch {
    lastSeenPath = undefined
  }

  await prisma.user.update({
    where: { id: session.user.id },
    data: {
      lastSeenAt: new Date(),
      lastSeenPath,
    },
  })

  return new NextResponse(null, { status: 204 })
}
