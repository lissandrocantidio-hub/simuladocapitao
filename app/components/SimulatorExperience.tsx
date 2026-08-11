'use client'

import Link from 'next/link'
import { useEffect, useMemo, useRef, useState } from 'react'
import { allQuestions } from '@/data/questions'
import { resolveEffectivePool } from '@/app/lib/simulation-selection'
import type { SimulationPreset } from '@/app/lib/simulations'
import { formatStudyLabel } from '@/lib/study-labels'
import type { Question, QuestionOptionKey } from '@/types/questions'
import QuestionStatement from './QuestionStatement'

type SimulatorExperienceProps = {
  preset: SimulationPreset
}

type SimulatorSession = {
  questions: Question[]
  answers: Record<number, QuestionOptionKey>
  submitted: boolean
  timeLeft: number
}

const recentQuestionHistoryLimit = 25

function getRecentHistoryStorageKey(preset: SimulationPreset) {
  return `simulator-recent-questions:${preset.href}`
}

function readRecentQuestionHistory(preset: SimulationPreset): number[] {
  if (typeof window === 'undefined') {
    return []
  }

  try {
    const raw = window.localStorage.getItem(getRecentHistoryStorageKey(preset))

    if (!raw) {
      return []
    }

    const parsed = JSON.parse(raw)

    return Array.isArray(parsed) ? parsed.filter((value): value is number => typeof value === 'number') : []
  } catch {
    return []
  }
}

function writeRecentQuestionHistory(preset: SimulationPreset, questionIds: number[]) {
  if (typeof window === 'undefined') {
    return
  }

  try {
    const nextHistory = [...new Set([...questionIds, ...readRecentQuestionHistory(preset)])].slice(
      0,
      recentQuestionHistoryLimit
    )

    window.localStorage.setItem(getRecentHistoryStorageKey(preset), JSON.stringify(nextHistory))
  } catch {
    // Best-effort only: simulator generation must keep working even if storage fails.
  }
}

type SelectionConfig = {
  maxPerConcept: number
  blockSameGroup: boolean
}

type SelectionState = {
  usedGroups: Set<string>
  conceptCounts: Map<string, number>
  selectedIds: Set<number>
}

type RecentQuestionContext = {
  ids: Set<number>
  conceptKeys: Set<string>
  groupKeys: Set<string>
}

type SelectionFreshness = 'avoid-recent-context' | 'allow-recent-context' | 'allow-recent-ids'

type AttemptSaveStatus = 'idle' | 'saving' | 'saved' | 'login-required' | 'error'

const selectionConfig: SelectionConfig = {
  maxPerConcept: 3,
  blockSameGroup: true,
}

function shuffle<T>(items: T[]): T[] {
  return [...items].sort(() => Math.random() - 0.5)
}

function formatTime(totalSeconds: number): string {
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60

  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

function getTimerTone(totalSeconds: number) {
  if (totalSeconds <= 5 * 60) {
    return {
      timerCard: 'bg-red-700 text-white',
      actionBar: 'border-red-800 bg-red-700 text-white',
      mutedText: 'text-red-50',
      button: 'bg-white text-red-800 hover:bg-red-50',
    }
  }

  if (totalSeconds <= 10 * 60) {
    return {
      timerCard: 'bg-amber-400 text-slate-950',
      actionBar: 'border-amber-500 bg-amber-400 text-slate-950',
      mutedText: 'text-slate-900',
      button: 'bg-slate-950 text-white hover:bg-slate-800',
    }
  }

  return {
    timerCard: 'bg-slate-900 text-white',
    actionBar: 'border-slate-900 bg-slate-900 text-white',
    mutedText: 'text-slate-200',
    button: 'bg-white text-slate-900 hover:bg-slate-100',
  }
}

function getPool(subjects: string[]) {
  return allQuestions.filter((question) => subjects.includes(question.subject))
}

function buildFixedSimulation(preset: SimulationPreset): Question[] | null {
  if (!preset.fixedQuestionIds || preset.fixedQuestionIds.length === 0) {
    return null
  }

  const questionsById = new Map(allQuestions.map((question) => [question.id, question]))
  const fixedQuestions = preset.fixedQuestionIds
    .map((questionId) => questionsById.get(questionId))
    .filter((question): question is Question => question !== undefined)

  if (fixedQuestions.length === 0) {
    return null
  }

  return fixedQuestions.slice(0, preset.questionCount)
}

function mergeQuestionPools(primary: Question[], secondary: Question[]) {
  const merged = [...primary]
  const seenIds = new Set(primary.map((question) => question.id))

  for (const question of secondary) {
    if (seenIds.has(question.id)) {
      continue
    }

    merged.push(question)
    seenIds.add(question.id)
  }

  return merged
}

function canSelectQuestion(
  question: Question,
  state: SelectionState,
  config: SelectionConfig,
  relaxConceptLimit: boolean,
  recentContext: RecentQuestionContext,
  freshness: SelectionFreshness
) {
  if (state.selectedIds.has(question.id)) {
    return false
  }

  if (freshness !== 'allow-recent-ids' && recentContext.ids.has(question.id)) {
    return false
  }

  if (freshness === 'avoid-recent-context') {
    if (question.groupKey && recentContext.groupKeys.has(question.groupKey)) {
      return false
    }

    if (question.conceptKey && recentContext.conceptKeys.has(question.conceptKey)) {
      return false
    }
  }

  if (config.blockSameGroup && question.groupKey && state.usedGroups.has(question.groupKey)) {
    return false
  }

  if (!relaxConceptLimit && question.conceptKey) {
    const currentCount = state.conceptCounts.get(question.conceptKey) ?? 0

    if (currentCount >= config.maxPerConcept) {
      return false
    }
  }

  return true
}

function registerQuestion(question: Question, state: SelectionState) {
  state.selectedIds.add(question.id)

  if (question.groupKey) {
    state.usedGroups.add(question.groupKey)
  }

  if (question.conceptKey) {
    state.conceptCounts.set(question.conceptKey, (state.conceptCounts.get(question.conceptKey) ?? 0) + 1)
  }
}

function takeQuestions(
  candidates: Question[],
  limit: number,
  state: SelectionState,
  config: SelectionConfig,
  relaxConceptLimit: boolean,
  recentContext: RecentQuestionContext,
  freshness: SelectionFreshness
) {
  const selected: Question[] = []

  for (const question of shuffle(candidates)) {
    if (selected.length >= limit) {
      break
    }

    if (!canSelectQuestion(question, state, config, relaxConceptLimit, recentContext, freshness)) {
      continue
    }

    selected.push(question)
    registerQuestion(question, state)
  }

  return selected
}

function selectQuestions(
  candidates: Question[],
  limit: number,
  state: SelectionState,
  config: SelectionConfig,
  recentContext: RecentQuestionContext
) {
  const selected: Question[] = []
  const passes: Array<{ relaxConceptLimit: boolean; freshness: SelectionFreshness }> = [
    { relaxConceptLimit: false, freshness: 'avoid-recent-context' },
    { relaxConceptLimit: true, freshness: 'avoid-recent-context' },
    { relaxConceptLimit: false, freshness: 'allow-recent-context' },
    { relaxConceptLimit: true, freshness: 'allow-recent-context' },
    { relaxConceptLimit: true, freshness: 'allow-recent-ids' },
  ]

  for (const pass of passes) {
    if (selected.length >= limit) {
      break
    }

    selected.push(
      ...takeQuestions(
        candidates,
        limit - selected.length,
        state,
        config,
        pass.relaxConceptLimit,
        recentContext,
        pass.freshness
      )
    )
  }

  return selected
}

function buildRecentQuestionContext(questionIds: number[]): RecentQuestionContext {
  const ids = new Set(questionIds)
  const conceptKeys = new Set<string>()
  const groupKeys = new Set<string>()

  for (const question of allQuestions) {
    if (!ids.has(question.id)) {
      continue
    }

    if (question.conceptKey) {
      conceptKeys.add(question.conceptKey)
    }

    if (question.groupKey) {
      groupKeys.add(question.groupKey)
    }
  }

  return { ids, conceptKeys, groupKeys }
}

function getSubjectQuotas(subjects: string[], questionCount: number, candidates: Question[]) {
  const quotas = new Map<string, number>()
  const baseQuota = Math.floor(questionCount / subjects.length)
  let remaining = questionCount

  for (const subject of subjects) {
    const availableCount = candidates.filter((question) => question.subject === subject).length
    const quota = Math.min(baseQuota, availableCount)
    quotas.set(subject, quota)
    remaining -= quota
  }

  const subjectsByAvailability = [...subjects].sort((a, b) => {
    const availableA = candidates.filter((question) => question.subject === a).length - (quotas.get(a) ?? 0)
    const availableB = candidates.filter((question) => question.subject === b).length - (quotas.get(b) ?? 0)
    return availableB - availableA
  })

  while (remaining > 0) {
    let distributed = false

    for (const subject of subjectsByAvailability) {
      const currentQuota = quotas.get(subject) ?? 0
      const availableCount = candidates.filter((question) => question.subject === subject).length

      if (currentQuota >= availableCount) {
        continue
      }

      quotas.set(subject, currentQuota + 1)
      remaining -= 1
      distributed = true

      if (remaining <= 0) {
        break
      }
    }

    if (!distributed) {
      break
    }
  }

  return quotas
}

function buildSimulation(preset: SimulationPreset, serverRecentQuestionIds: number[] = []): Question[] {
  const fixedSimulation = buildFixedSimulation(preset)

  if (fixedSimulation) {
    return fixedSimulation
  }

  const pool = getPool(preset.subjects)
  const recentQuestionContext = buildRecentQuestionContext([
    ...serverRecentQuestionIds,
    ...readRecentQuestionHistory(preset),
  ])
  const effectivePool = resolveEffectivePool(pool, preset.priorityQuestionIds, preset.questionCount)

  if (effectivePool.length <= preset.questionCount) {
    return shuffle(effectivePool)
  }

  const subjectQuotas = getSubjectQuotas(preset.subjects, preset.questionCount, effectivePool)
  const state: SelectionState = {
    usedGroups: new Set<string>(),
    conceptCounts: new Map<string, number>(),
    selectedIds: new Set<number>(),
  }
  const selected = preset.subjects.flatMap((subject) =>
    selectQuestions(
      effectivePool.filter((question: Question) => question.subject === subject),
      subjectQuotas.get(subject) ?? 0,
      state,
      selectionConfig,
      recentQuestionContext
    )
  )

  if (selected.length >= preset.questionCount) {
    return shuffle(selected).slice(0, preset.questionCount)
  }

  const missing = preset.questionCount - selected.length
  const remainder = selectQuestions(
    effectivePool.filter((question: Question) => !state.selectedIds.has(question.id)),
    missing,
    state,
    selectionConfig,
    recentQuestionContext
  )

  return shuffle([...selected, ...remainder.slice(0, missing)])
}

function createSession(
  preset: SimulationPreset,
  questions = buildSimulation(preset),
  shouldWriteHistory = true
): SimulatorSession {
  if (shouldWriteHistory) {
    writeRecentQuestionHistory(
      preset,
      questions.map((question) => question.id)
    )
  }

  return {
    questions,
    answers: {},
    submitted: false,
    timeLeft: preset.durationMinutes * 60,
  }
}

function getFeedbackTone(scoreRatio: number, passRate: number) {
  if (scoreRatio >= passRate + 0.15) {
    return 'Excelente ritmo. Você já está bem perto do padrão de prova.'
  }

  if (scoreRatio >= passRate) {
    return 'Bom resultado. Vale revisar os erros para consolidar a aprovação.'
  }

  return 'Boa base para revisão. Refazer o simulado depois dos tópicos errados tende a render bastante.'
}

export default function SimulatorExperience({
  preset,
}: SimulatorExperienceProps) {
  const [session, setSession] = useState<SimulatorSession>(() => createSession(preset))
  const [attemptSaveStatus, setAttemptSaveStatus] = useState<AttemptSaveStatus>('idle')
  const hasSavedAttemptRef = useRef(false)
  const hasLoadedServerHistoryRef = useRef(false)
  const { questions, answers, submitted, timeLeft } = session
  const hasFinished = submitted || timeLeft === 0
  const timerTone = getTimerTone(timeLeft)

  useEffect(() => {
    let isActive = true

    async function loadServerQuestionHistory() {
      try {
        const response = await fetch(`/api/simulations/attempts?presetHref=${encodeURIComponent(preset.href)}`)

        if (!response.ok) {
          return
        }

        const data = (await response.json()) as { recentQuestionIds?: number[] }
        const recentQuestionIds = Array.isArray(data.recentQuestionIds)
          ? data.recentQuestionIds.filter((value): value is number => typeof value === 'number')
          : []

        if (!isActive || hasLoadedServerHistoryRef.current || recentQuestionIds.length === 0) {
          return
        }

        hasLoadedServerHistoryRef.current = true
        setSession((current) => {
          if (current.submitted || Object.keys(current.answers).length > 0) {
            return current
          }

          return createSession(preset, buildSimulation(preset, recentQuestionIds))
        })
      } catch {
        // Local rotation remains available when the server history cannot be loaded.
      }
    }

    void loadServerQuestionHistory()

    return () => {
      isActive = false
    }
  }, [preset])

  useEffect(() => {
    if (hasFinished) {
      return
    }

    const timerId = window.setInterval(() => {
      setSession((current) => ({
        ...current,
        timeLeft: Math.max(0, current.timeLeft - 1),
      }))
    }, 1000)

    return () => window.clearInterval(timerId)
  }, [hasFinished])

  const answeredCount = Object.keys(answers).length

  const score = useMemo(
    () => questions.filter((question) => answers[question.id] === question.correct).length,
    [answers, questions]
  )

  const scoreRatio = questions.length > 0 ? score / questions.length : 0
  const isApproved = questions.length > 0 ? scoreRatio >= preset.passRate : false

  const wrongQuestions = useMemo(
    () =>
      hasFinished
        ? questions.filter((question) => answers[question.id] !== question.correct)
        : [],
    [answers, hasFinished, questions]
  )

  useEffect(() => {
    if (!hasFinished || questions.length === 0 || hasSavedAttemptRef.current) {
      return
    }

    const correctCount = questions.filter((question) => answers[question.id] === question.correct).length
    const wrongTopics = Array.from(
      new Set(questions.filter((question) => answers[question.id] !== question.correct).map((question) => question.topic))
    )

    let isActive = true
    hasSavedAttemptRef.current = true

    async function saveAttempt() {
      setAttemptSaveStatus('saving')

      try {
        const response = await fetch('/api/simulations/attempts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            presetHref: preset.href,
            presetTitle: preset.title,
            subjectLabels: preset.subjects,
            questionCount: questions.length,
            correctCount,
            scoreRatio: questions.length > 0 ? correctCount / questions.length : 0,
            timeLeftSeconds: timeLeft,
            wrongTopics,
            questionIds: questions.map((question) => question.id),
            answers,
          }),
        })

        if (!isActive) {
          return
        }

        if (response.status === 401) {
          setAttemptSaveStatus('login-required')
          return
        }

        setAttemptSaveStatus(response.ok ? 'saved' : 'error')
      } catch {
        if (isActive) {
          setAttemptSaveStatus('error')
        }
      }
    }

    void saveAttempt()

    return () => {
      isActive = false
    }
  }, [answers, hasFinished, preset.href, preset.subjects, preset.title, questions, timeLeft])

  function handleAnswer(questionId: number, option: QuestionOptionKey) {
    if (hasFinished) {
      return
    }

    setSession((current) => ({
      ...current,
      answers: {
        ...current.answers,
        [questionId]: option,
      },
    }))
  }

  function handleSubmit() {
    setSession((current) => ({
      ...current,
      submitted: true,
    }))
  }

  function resetAttempt(nextQuestions: Question[]) {
    setSession(createSession(preset, nextQuestions))
    hasSavedAttemptRef.current = false
    setAttemptSaveStatus('idle')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleRetrySameQuestions() {
    resetAttempt(questions)
  }

  function handleGenerateNewSimulation() {
    resetAttempt(buildSimulation(preset))
  }

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-4 pb-28 pt-8 md:px-8 md:pb-8 lg:px-10">
      <section className="overflow-hidden rounded-[2rem] border border-line bg-surface shadow-[0_24px_80px_rgba(16,32,51,0.10)] backdrop-blur">
        <div className="grid gap-6 px-6 py-8 md:grid-cols-[1.6fr_1fr] md:px-8">
          <div className="space-y-4">
            <span className="inline-flex rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {preset.badge}
            </span>
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Prova: {preset.certification}
              </p>
              <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                {preset.title}
              </h1>
              <p className="max-w-2xl text-sm leading-7 text-slate-700 md:text-base">
                {preset.description}
              </p>
            </div>
          </div>

          <div className="grid gap-3 rounded-[1.5rem] border border-white/60 bg-white/70 p-4 text-sm text-slate-700">
            <div className={`flex items-center justify-between rounded-2xl px-4 py-3 ${timerTone.timerCard}`}>
              <span>Cronômetro</span>
              <strong>{formatTime(timeLeft)}</strong>
            </div>
            <div className="flex items-center justify-between rounded-2xl border border-line px-4 py-3">
              <span>Questões</span>
              <strong>{questions.length}</strong>
            </div>
            <div className="flex items-center justify-between rounded-2xl border border-line px-4 py-3">
              <span>Respondidas</span>
              <strong>{answeredCount}</strong>
            </div>
            <div className="flex items-center justify-between rounded-2xl border border-line px-4 py-3">
              <span>Aproveitamento mínimo</span>
              <strong>{Math.round(preset.passRate * 100)}%</strong>
            </div>
          </div>
        </div>
      </section>

      {questions.length === 0 ? (
        <section className="rounded-[2rem] border border-line bg-surface-strong p-8 text-slate-700 shadow-sm">
          Ainda não há questões suficientes para este modo.
        </section>
      ) : (
        <>
          <section className={`grid gap-5 ${!hasFinished ? 'pb-28 md:pb-12' : ''}`}>
            {questions.map((question, index) => {
              const selectedAnswer = answers[question.id]
              const isCorrect = selectedAnswer === question.correct

              return (
                <article
                  key={question.id}
                  className="rounded-[2rem] border border-line bg-surface-strong p-6 shadow-[0_18px_40px_rgba(16,32,51,0.08)]"
                >
                  <div className="mb-5 flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                    <span>Questão {index + 1}</span>
                    <span>{question.exam}</span>
                    <span>{formatStudyLabel(question.topic)}</span>
                  </div>

                  <div className="text-lg font-semibold leading-8 text-slate-900">
                    <QuestionStatement statement={question.statement} className="[&_*]:text-inherit" />
                  </div>

                  {question.attachments && question.attachments.length > 0 ? (
                    <div className="mt-4 rounded-2xl border border-dashed border-accent/30 bg-accent-soft/40 p-4">
                      <p className="text-sm font-semibold text-accent">
                        Material de apoio para esta questão
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {question.attachments.map((attachment) => (
                          <a
                            key={attachment.path}
                            href={attachment.path}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-full border border-accent/30 bg-white px-4 py-2 text-sm font-medium text-slate-800 transition hover:border-accent hover:text-accent"
                          >
                            {attachment.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : null}

                  <div className="mt-6 grid gap-3">
                    {Object.entries(question.options).map(([key, value]) => {
                      const option = key as QuestionOptionKey
                      const isSelected = selectedAnswer === option
                      const isCorrectOption = hasFinished && question.correct === option
                      const isWrongSelection = hasFinished && isSelected && !isCorrect

                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => handleAnswer(question.id, option)}
                          disabled={hasFinished}
                          className={`rounded-2xl border px-4 py-4 text-left text-sm leading-7 transition ${
                            isCorrectOption
                              ? 'border-emerald-500 bg-emerald-50 text-emerald-950'
                              : isWrongSelection
                                ? 'border-rose-500 bg-rose-50 text-rose-950'
                                : isSelected
                                  ? 'border-accent bg-accent-soft text-slate-900'
                                  : 'border-line bg-white text-slate-800 hover:border-accent/50 hover:bg-accent-soft/30'
                          } ${hasFinished ? 'cursor-default' : ''}`}
                        >
                          <strong className="mr-2">{option}.</strong>
                          {value}
                        </button>
                      )
                    })}
                  </div>

                  {hasFinished ? (
                    <div className="mt-6 rounded-2xl bg-slate-100 p-4 text-sm leading-7 text-slate-700">
                      <p>
                        <strong>Sua resposta:</strong> {selectedAnswer ?? 'Não respondeu'}
                      </p>
                      <p>
                        <strong>Gabarito:</strong> {question.correct}
                      </p>
                      <p>
                        <strong>Comentário:</strong>{' '}
                        <span className="whitespace-pre-line">{question.explanation}</span>
                      </p>
                    </div>
                  ) : null}
                </article>
              )
            })}
          </section>

          {!hasFinished ? (
            <div
              className={`sticky bottom-3 z-10 flex flex-col gap-3 rounded-[1.5rem] border p-3 shadow-2xl transition-colors duration-500 sm:p-4 md:bottom-4 md:flex-row md:items-center md:justify-between ${timerTone.actionBar}`}
            >
              <div className="flex flex-col gap-1 text-sm">
                <p className={timerTone.mutedText}>
                  Você respondeu {answeredCount} de {questions.length} questões.
                </p>
                <p className="font-semibold">Cronômetro: {formatTime(timeLeft)}</p>
              </div>
              <button
                type="button"
                onClick={handleSubmit}
                className={`min-h-11 rounded-full px-5 py-3 text-sm font-semibold transition ${timerTone.button}`}
              >
                Finalizar simulado
              </button>
            </div>
          ) : (
            <section className="rounded-[2rem] border border-line bg-surface-strong p-6 shadow-[0_18px_40px_rgba(16,32,51,0.08)]">
              <div className="grid gap-6 md:grid-cols-[1.4fr_1fr]">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Resultado final
                    </p>
                    <h2 className="text-3xl font-semibold text-slate-900">
                      {score} de {questions.length} acertos
                    </h2>
                    <p className="text-base leading-7 text-slate-700">
                      {getFeedbackTone(scoreRatio, preset.passRate)}
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl border border-line bg-white p-4">
                      <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                        Aproveitamento
                      </p>
                      <strong className="mt-2 block text-2xl text-slate-900">
                        {Math.round(scoreRatio * 100)}%
                      </strong>
                    </div>
                    <div className="rounded-2xl border border-line bg-white p-4">
                      <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                        Status
                      </p>
                      <strong
                        className={`mt-2 block text-2xl ${
                          isApproved ? 'text-emerald-700' : 'text-rose-700'
                        }`}
                      >
                        {isApproved ? 'Aprovado' : 'Revisar'}
                      </strong>
                    </div>
                    <div className="rounded-2xl border border-line bg-white p-4">
                      <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                        Tempo restante
                      </p>
                      <strong className="mt-2 block text-2xl text-slate-900">
                        {formatTime(timeLeft)}
                      </strong>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-line bg-white p-4 text-sm leading-7 text-slate-700">
                    {attemptSaveStatus === 'saving' ? (
                      <p>Salvando sua tentativa no historico...</p>
                    ) : null}
                    {attemptSaveStatus === 'saved' ? (
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <p className="font-medium text-emerald-700">
                          Tentativa salva. Sua evolucao ja foi atualizada em Minha conta.
                        </p>
                        <Link
                          href="/minha-conta"
                          className="inline-flex items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-100"
                        >
                          Ver minha evolucao
                        </Link>
                      </div>
                    ) : null}
                    {attemptSaveStatus === 'login-required' ? (
                      <p>
                        Esta tentativa nao foi salva porque voce nao esta logado. Entre na conta antes
                        de finalizar para registrar sua evolucao.
                      </p>
                    ) : null}
                    {attemptSaveStatus === 'error' ? (
                      <p>
                        Nao consegui salvar esta tentativa agora. Confira sua conexao e tente novamente
                        logado.
                      </p>
                    ) : null}
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-line bg-white p-5">
                  <p className="text-sm font-semibold text-slate-900">Tópicos para revisar</p>
                  {wrongQuestions.length > 0 ? (
                    <ul className="mt-3 space-y-3 text-sm text-slate-700">
                      {wrongQuestions.map((question) => (
                        <li key={question.id} className="rounded-2xl bg-slate-50 px-4 py-3">
                          <strong className="block text-slate-900">{formatStudyLabel(question.topic)}</strong>
                          {question.exam}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-3 text-sm leading-7 text-slate-700">
                      Excelente. Você fechou este simulado sem erros.
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={handleRetrySameQuestions}
                  className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-strong"
                >
                  {preset.fixedQuestionIds?.length ? 'Refazer demo' : 'Tentar novamente'}
                </button>
                {!preset.fixedQuestionIds?.length ? (
                  <button
                    type="button"
                    onClick={handleGenerateNewSimulation}
                    className="rounded-full border border-line bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                  >
                    Gerar novo simulado
                  </button>
                ) : null}
                <Link
                  href="/"
                  className="rounded-full border border-line px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-white"
                >
                  Voltar ao início
                </Link>
              </div>
            </section>
          )}
        </>
      )}
    </main>
  )
}
