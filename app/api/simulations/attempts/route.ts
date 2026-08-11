import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { z } from 'zod'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/db'

const attemptSchema = z.object({
  presetHref: z.string().min(1),
  presetTitle: z.string().min(1),
  subjectLabels: z.array(z.string().min(1)).min(1),
  questionCount: z.number().int().positive(),
  correctCount: z.number().int().nonnegative(),
  scoreRatio: z.number().min(0).max(1),
  timeLeftSeconds: z.number().int().nonnegative(),
  wrongTopics: z.array(z.string().min(1)).max(50),
  questionIds: z.array(z.number().int().positive()).min(1).max(200),
  answers: z.record(z.string(), z.enum(['A', 'B', 'C', 'D', 'E'])).optional(),
})

const recentQuestionHistoryLimit = 25

function extractAnsweredQuestionIds(answers: unknown) {
  if (!answers || typeof answers !== 'object' || Array.isArray(answers)) {
    return []
  }

  return Object.keys(answers)
    .map((key) => Number(key))
    .filter((value) => Number.isInteger(value) && value > 0)
}

export async function GET(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session?.user?.id) {
    return NextResponse.json({ recentQuestionIds: [] })
  }

  const { searchParams } = new URL(request.url)
  const presetHref = searchParams.get('presetHref')

  if (!presetHref) {
    return NextResponse.json({ recentQuestionIds: [] })
  }

  const attempts = await prisma.simulationAttempt.findMany({
    where: {
      userId: session.user.id,
      presetHref,
    },
    orderBy: {
      createdAt: 'desc',
    },
    take: 20,
    select: {
      questionIds: true,
      answers: true,
    },
  })

  const recentQuestionIds: number[] = []
  const seen = new Set<number>()

  for (const attempt of attempts) {
    const attemptQuestionIds =
      attempt.questionIds.length > 0 ? attempt.questionIds : extractAnsweredQuestionIds(attempt.answers)

    for (const questionId of attemptQuestionIds) {
      if (seen.has(questionId)) {
        continue
      }

      recentQuestionIds.push(questionId)
      seen.add(questionId)

      if (recentQuestionIds.length >= recentQuestionHistoryLimit) {
        return NextResponse.json({ recentQuestionIds })
      }
    }
  }

  return NextResponse.json({ recentQuestionIds })
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await request.json().catch(() => null)
  const parsed = attemptSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid attempt payload' }, { status: 400 })
  }

  const attempt = await prisma.simulationAttempt.create({
    data: {
      userId: session.user.id,
      presetHref: parsed.data.presetHref,
      presetTitle: parsed.data.presetTitle,
      subjectLabels: parsed.data.subjectLabels,
      questionCount: parsed.data.questionCount,
      correctCount: parsed.data.correctCount,
      scoreRatio: parsed.data.scoreRatio,
      timeLeftSeconds: parsed.data.timeLeftSeconds,
      wrongTopics: parsed.data.wrongTopics,
      questionIds: parsed.data.questionIds,
      answers: parsed.data.answers,
    },
    select: {
      id: true,
    },
  })

  return NextResponse.json({ ok: true, id: attempt.id })
}
