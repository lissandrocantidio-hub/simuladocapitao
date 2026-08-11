import 'server-only'

import { subjectLabels } from '@/app/lib/simulations'
import { allQuestions } from '@/data/questions'
import type { QuestionOptionKey } from '@/types/questions'

type StoredAttempt = {
  id: string
  presetTitle: string
  subjectLabels: string[]
  questionCount: number
  correctCount: number
  scoreRatio: number
  wrongTopics: string[]
  answers: unknown
  createdAt: Date
}

type Trend = 'up' | 'down' | 'steady'

export type StudentProgressOverview = {
  totalAttempts: number
  totalQuestions: number
  answeredQuestions: number
  uniqueQuestionsPracticed: number
  correctAnswers: number
  overallAccuracy: number
  subjectsStarted: number
  subjectsTracked: number
  recentAverageScore: number | null
  previousAverageScore: number | null
  trend: Trend
  trendDelta: number | null
  activeDays: number
  currentStreakDays: number
  averageCoverage: number
  readinessScore: number
  readinessLabel: string
  consistencyLabel: string
  nextMilestoneLabel: string
}

export type SubjectProgressItem = {
  subject: string
  label: string
  attemptsCount: number
  answeredQuestions: number
  uniqueQuestionsPracticed: number
  correctAnswers: number
  wrongAnswers: number
  accuracy: number
  coverage: number
  totalAvailableQuestions: number
  latestActivityAt: string | null
  statusLabel: string
}

export type TopicProgressItem = {
  subject: string
  subjectLabel: string
  topic: string
  answeredQuestions: number
  correctAnswers: number
  wrongAnswers: number
  accuracy: number
}

export type StudentProgressSummary = {
  overview: StudentProgressOverview
  subjects: SubjectProgressItem[]
  weakTopics: TopicProgressItem[]
  strongTopics: TopicProgressItem[]
  recommendation: {
    title: string
    description: string
    href: string
    ctaLabel: string
  } | null
}

type MutableSubjectStats = {
  subject: string
  label: string
  attemptsCount: number
  answeredQuestions: number
  correctAnswers: number
  wrongAnswers: number
  uniqueQuestionIds: Set<number>
  latestActivityAt: Date | null
}

type MutableTopicStats = {
  subject: string
  subjectLabel: string
  topic: string
  answeredQuestions: number
  correctAnswers: number
  wrongAnswers: number
}

const validOptions = new Set<QuestionOptionKey>(['A', 'B', 'C', 'D', 'E'])
const questionsById = new Map(allQuestions.map((question) => [question.id, question]))
const totalQuestionsBySubject = allQuestions.reduce<Map<string, number>>((counts, question) => {
  counts.set(question.subject, (counts.get(question.subject) ?? 0) + 1)
  return counts
}, new Map())

function parseAnswers(answers: unknown): Array<[number, QuestionOptionKey]> {
  if (!answers || typeof answers !== 'object' || Array.isArray(answers)) {
    return []
  }

  const parsed: Array<[number, QuestionOptionKey]> = []

  for (const [rawId, rawValue] of Object.entries(answers)) {
    const questionId = Number(rawId)

    if (!Number.isInteger(questionId) || !validOptions.has(rawValue as QuestionOptionKey)) {
      continue
    }

    parsed.push([questionId, rawValue as QuestionOptionKey])
  }

  return parsed
}

function createSubjectStats(subject: string): MutableSubjectStats {
  return {
    subject,
    label: subjectLabels[subject] ?? subject,
    attemptsCount: 0,
    answeredQuestions: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    uniqueQuestionIds: new Set<number>(),
    latestActivityAt: null,
  }
}

function updateLatestActivity(current: Date | null, next: Date) {
  if (!current || current < next) {
    return next
  }

  return current
}

function getTrend(recentAverageScore: number | null, previousAverageScore: number | null) {
  if (recentAverageScore === null || previousAverageScore === null) {
    return {
      trend: 'steady' as Trend,
      trendDelta: null,
    }
  }

  const trendDelta = recentAverageScore - previousAverageScore

  if (trendDelta >= 0.03) {
    return { trend: 'up' as Trend, trendDelta }
  }

  if (trendDelta <= -0.03) {
    return { trend: 'down' as Trend, trendDelta }
  }

  return {
    trend: 'steady' as Trend,
    trendDelta,
  }
}

function getStatusLabel(accuracy: number, coverage: number, answeredQuestions: number) {
  if (answeredQuestions < 5) {
    return 'Início'
  }

  if (accuracy >= 0.8 && coverage >= 0.2) {
    return 'Muito bom'
  }

  if (accuracy >= 0.65 || coverage >= 0.1) {
    return 'Em progresso'
  }

  return 'Revisar'
}

function getAttemptDayKey(value: Date) {
  return value.toISOString().slice(0, 10)
}

function getActiveDays(attempts: StoredAttempt[]) {
  return new Set(attempts.map((attempt) => getAttemptDayKey(attempt.createdAt))).size
}

function getCurrentStreakDays(attempts: StoredAttempt[]) {
  const orderedDayKeys = Array.from(
    new Set(attempts.map((attempt) => getAttemptDayKey(attempt.createdAt)))
  ).sort((left, right) => right.localeCompare(left))

  if (orderedDayKeys.length === 0) {
    return 0
  }

  let streak = 1

  for (let index = 1; index < orderedDayKeys.length; index += 1) {
    const previous = new Date(`${orderedDayKeys[index - 1]}T00:00:00.000Z`)
    const current = new Date(`${orderedDayKeys[index]}T00:00:00.000Z`)
    const difference = previous.getTime() - current.getTime()

    if (difference === 24 * 60 * 60 * 1000) {
      streak += 1
      continue
    }

    break
  }

  return streak
}

function getReadinessScore(overallAccuracy: number, averageCoverage: number, totalAttempts: number) {
  if (totalAttempts === 0) {
    return 0
  }

  const accuracyWeight = overallAccuracy * 0.65
  const coverageWeight = averageCoverage * 0.35

  return Math.round((accuracyWeight + coverageWeight) * 100)
}

function getReadinessLabel(readinessScore: number) {
  if (readinessScore >= 80) {
    return 'Aprendizado consolidado'
  }

  if (readinessScore >= 65) {
    return 'Bom aprendizado'
  }

  if (readinessScore >= 45) {
    return 'Aprendizado em construção'
  }

  return 'Aprendizado inicial'
}

function getConsistencyLabel(activeDays: number, currentStreakDays: number, totalAttempts: number) {
  if (totalAttempts === 0) {
    return 'Sem histórico ainda'
  }

  if (currentStreakDays >= 4 || activeDays >= 7) {
    return 'Constância muito boa'
  }

  if (currentStreakDays >= 2 || activeDays >= 4) {
    return 'Boa frequência'
  }

  return 'Precisa ganhar ritmo'
}

function getNextMilestoneLabel(averageCoverage: number, overallAccuracy: number, totalAttempts: number) {
  if (totalAttempts < 3) {
    return 'Feche mais 2 simulados para formar uma leitura confiável'
  }

  if (averageCoverage < 0.18) {
    return 'Amplie a cobertura das matérias antes de acelerar o ritmo'
  }

  if (overallAccuracy < 0.65) {
    return 'Revise os tópicos com mais erro e busque voltar para 65%+'
  }

  if (overallAccuracy < 0.8) {
    return 'Consolide o aproveitamento e empurre a média para a faixa de 80%'
  }

  return 'Mantenha a consistência e faça simulados completos para sustentar o nível'
}

function getRecommendationHref(subject: string | null | undefined) {
  if (subject === 'arrais-amador') {
    return '/simulado-arrais'
  }

  if (subject === 'mestre-amador') {
    return '/simulado-mestre'
  }

  return '/prova-marinha'
}

export function buildStudentProgressSummary(attempts: StoredAttempt[]): StudentProgressSummary {
  const orderedAttempts = [...attempts].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
  const subjectStats = new Map<string, MutableSubjectStats>()
  const topicStats = new Map<string, MutableTopicStats>()
  const uniqueQuestionsPracticed = new Set<number>()

  let answeredQuestions = 0
  let correctAnswers = 0
  let totalQuestions = 0

  for (const attempt of orderedAttempts) {
    totalQuestions += attempt.questionCount
    correctAnswers += attempt.correctCount

    for (const subject of new Set(attempt.subjectLabels)) {
      const stats = subjectStats.get(subject) ?? createSubjectStats(subject)
      stats.attemptsCount += 1
      stats.latestActivityAt = updateLatestActivity(stats.latestActivityAt, attempt.createdAt)
      subjectStats.set(subject, stats)
    }

    for (const [questionId, selectedAnswer] of parseAnswers(attempt.answers)) {
      const question = questionsById.get(questionId)

      if (!question) {
        continue
      }

      answeredQuestions += 1
      uniqueQuestionsPracticed.add(question.id)

      const subject = question.subject
      const stats = subjectStats.get(subject) ?? createSubjectStats(subject)
      const isCorrect = question.correct === selectedAnswer

      stats.answeredQuestions += 1
      stats.uniqueQuestionIds.add(question.id)
      stats.latestActivityAt = updateLatestActivity(stats.latestActivityAt, attempt.createdAt)

      if (isCorrect) {
        stats.correctAnswers += 1
      } else {
        stats.wrongAnswers += 1
      }

      subjectStats.set(subject, stats)

      const topicKey = `${subject}::${question.topic}`
      const topic = topicStats.get(topicKey) ?? {
        subject,
        subjectLabel: subjectLabels[subject] ?? subject,
        topic: question.topic,
        answeredQuestions: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
      }

      topic.answeredQuestions += 1

      if (isCorrect) {
        topic.correctAnswers += 1
      } else {
        topic.wrongAnswers += 1
      }

      topicStats.set(topicKey, topic)
    }
  }

  const subjects = Array.from(subjectStats.values())
    .map((stats) => {
      const totalAvailableQuestions = totalQuestionsBySubject.get(stats.subject) ?? 0
      const accuracy =
        stats.answeredQuestions > 0 ? stats.correctAnswers / stats.answeredQuestions : 0
      const coverage =
        totalAvailableQuestions > 0 ? stats.uniqueQuestionIds.size / totalAvailableQuestions : 0

      return {
        subject: stats.subject,
        label: stats.label,
        attemptsCount: stats.attemptsCount,
        answeredQuestions: stats.answeredQuestions,
        uniqueQuestionsPracticed: stats.uniqueQuestionIds.size,
        correctAnswers: stats.correctAnswers,
        wrongAnswers: stats.wrongAnswers,
        accuracy,
        coverage,
        totalAvailableQuestions,
        latestActivityAt: stats.latestActivityAt?.toISOString() ?? null,
        statusLabel: getStatusLabel(accuracy, coverage, stats.answeredQuestions),
      }
    })
    .sort((left, right) => {
      if (right.coverage !== left.coverage) {
        return right.coverage - left.coverage
      }

      if (right.accuracy !== left.accuracy) {
        return right.accuracy - left.accuracy
      }

      return left.label.localeCompare(right.label, 'pt-BR')
    })

  const topicItems = Array.from(topicStats.values()).map((topic) => ({
    ...topic,
    accuracy: topic.answeredQuestions > 0 ? topic.correctAnswers / topic.answeredQuestions : 0,
  }))

  const weakTopics = topicItems
    .filter((topic) => topic.wrongAnswers > 0)
    .sort((left, right) => {
      if (right.wrongAnswers !== left.wrongAnswers) {
        return right.wrongAnswers - left.wrongAnswers
      }

      if (left.accuracy !== right.accuracy) {
        return left.accuracy - right.accuracy
      }

      return right.answeredQuestions - left.answeredQuestions
    })
    .slice(0, 6)

  const strongTopics = topicItems
    .filter((topic) => topic.answeredQuestions >= 2)
    .sort((left, right) => {
      if (right.accuracy !== left.accuracy) {
        return right.accuracy - left.accuracy
      }

      if (right.correctAnswers !== left.correctAnswers) {
        return right.correctAnswers - left.correctAnswers
      }

      return left.topic.localeCompare(right.topic, 'pt-BR')
    })
    .slice(0, 4)

  const recentAttempts = orderedAttempts.slice(0, 5)
  const previousAttempts = orderedAttempts.slice(5, 10)
  const recentAverageScore =
    recentAttempts.length > 0
      ? recentAttempts.reduce((sum, attempt) => sum + attempt.scoreRatio, 0) / recentAttempts.length
      : null
  const previousAverageScore =
    previousAttempts.length > 0
      ? previousAttempts.reduce((sum, attempt) => sum + attempt.scoreRatio, 0) / previousAttempts.length
      : null
  const { trend, trendDelta } = getTrend(recentAverageScore, previousAverageScore)
  const activeDays = getActiveDays(orderedAttempts)
  const currentStreakDays = getCurrentStreakDays(orderedAttempts)
  const averageCoverage =
    subjects.length > 0
      ? subjects.reduce((sum, subject) => sum + subject.coverage, 0) / subjects.length
      : 0
  const overallAccuracy = answeredQuestions > 0 ? correctAnswers / answeredQuestions : 0
  const readinessScore = getReadinessScore(overallAccuracy, averageCoverage, orderedAttempts.length)
  const readinessLabel = getReadinessLabel(readinessScore)
  const consistencyLabel = getConsistencyLabel(activeDays, currentStreakDays, orderedAttempts.length)
  const nextMilestoneLabel = getNextMilestoneLabel(
    averageCoverage,
    overallAccuracy,
    orderedAttempts.length
  )

  const weakestSubject =
    subjects.length > 0
      ? [...subjects].sort((left, right) => {
          if (left.answeredQuestions === 0 && right.answeredQuestions > 0) {
            return -1
          }

          if (right.answeredQuestions === 0 && left.answeredQuestions > 0) {
            return 1
          }

          if (left.accuracy !== right.accuracy) {
            return left.accuracy - right.accuracy
          }

          if (left.coverage !== right.coverage) {
            return left.coverage - right.coverage
          }

          return left.label.localeCompare(right.label, 'pt-BR')
        })[0]
      : null

  const topWeakTopic = weakTopics[0] ?? null
  const recommendation =
    weakestSubject && orderedAttempts.length > 0
      ? {
          title: topWeakTopic
            ? `Priorize ${topWeakTopic.topic}`
            : `Volte para ${weakestSubject.label}`,
          description: topWeakTopic
            ? `Seu ponto mais sensível hoje está em ${topWeakTopic.subjectLabel}. Vale revisar esse tópico e depois repetir um simulado focado para consolidar a melhora.`
            : `Seu menor aproveitamento hoje está em ${weakestSubject.label}. Um novo ciclo de treino nessa matéria tende a gerar o próximo salto de evolução.`,
          href: getRecommendationHref(topWeakTopic?.subject ?? weakestSubject.subject),
          ctaLabel: topWeakTopic
            ? `Treinar ${topWeakTopic.subjectLabel}`
            : `Abrir ${weakestSubject.label}`,
        }
      : null

  return {
    overview: {
      totalAttempts: orderedAttempts.length,
      totalQuestions,
      answeredQuestions,
      uniqueQuestionsPracticed: uniqueQuestionsPracticed.size,
      correctAnswers,
      overallAccuracy,
      subjectsStarted: subjects.filter((subject) => subject.answeredQuestions > 0).length,
      subjectsTracked: subjects.length,
      recentAverageScore,
      previousAverageScore,
      trend,
      trendDelta,
      activeDays,
      currentStreakDays,
      averageCoverage,
      readinessScore,
      readinessLabel,
      consistencyLabel,
      nextMilestoneLabel,
    },
    subjects,
    weakTopics,
    strongTopics,
    recommendation,
  }
}

