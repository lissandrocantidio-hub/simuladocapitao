'use client'

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { allQuestions } from '@/data/questions'
import type { SimulationPreset } from '@/app/lib/simulations'
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

type SelectionConfig = {
  maxPerConcept: number
  blockSameGroup: boolean
}

type SelectionState = {
  usedGroups: Set<string>
  conceptCounts: Map<string, number>
  selectedIds: Set<number>
}

const selectionConfig: SelectionConfig = {
  maxPerConcept: 1,
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

function canSelectQuestion(
  question: Question,
  state: SelectionState,
  config: SelectionConfig,
  relaxConceptLimit: boolean
) {
  if (state.selectedIds.has(question.id)) {
    return false
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
  relaxConceptLimit: boolean
) {
  const selected: Question[] = []

  for (const question of shuffle(candidates)) {
    if (selected.length >= limit) {
      break
    }

    if (!canSelectQuestion(question, state, config, relaxConceptLimit)) {
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
  config: SelectionConfig
) {
  const strictSelection = takeQuestions(candidates, limit, state, config, false)

  if (strictSelection.length >= limit) {
    return strictSelection
  }

  const remaining = candidates.filter((question) => !state.selectedIds.has(question.id))
  const relaxedSelection = takeQuestions(
    remaining,
    limit - strictSelection.length,
    state,
    config,
    true
  )

  return [...strictSelection, ...relaxedSelection]
}

function buildSimulation(preset: SimulationPreset): Question[] {
  const fixedSimulation = buildFixedSimulation(preset)

  if (fixedSimulation) {
    return fixedSimulation
  }

  const pool = getPool(preset.subjects)

  if (pool.length <= preset.questionCount) {
    return shuffle(pool)
  }

  const perSubject = Math.max(1, Math.floor(preset.questionCount / preset.subjects.length))
  const state: SelectionState = {
    usedGroups: new Set<string>(),
    conceptCounts: new Map<string, number>(),
    selectedIds: new Set<number>(),
  }
  const selected = preset.subjects.flatMap((subject) =>
    selectQuestions(
      pool.filter((question) => question.subject === subject),
      perSubject,
      state,
      selectionConfig
    )
  )

  if (selected.length >= preset.questionCount) {
    return shuffle(selected).slice(0, preset.questionCount)
  }

  const missing = preset.questionCount - selected.length
  const remainder = selectQuestions(
    pool.filter((question) => !state.selectedIds.has(question.id)),
    missing,
    state,
    selectionConfig
  )

  return shuffle([...selected, ...remainder.slice(0, missing)])
}

function createSession(preset: SimulationPreset): SimulatorSession {
  return {
    questions: buildSimulation(preset),
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
  const { questions, answers, submitted, timeLeft } = session
  const hasFinished = submitted || timeLeft === 0

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

  function handleRestart() {
    setSession(createSession(preset))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-4 py-8 md:px-8 lg:px-10">
      <section className="overflow-hidden rounded-[2rem] border border-line bg-surface shadow-[0_24px_80px_rgba(16,32,51,0.10)] backdrop-blur">
        <div className="grid gap-6 px-6 py-8 md:grid-cols-[1.6fr_1fr] md:px-8">
          <div className="space-y-4">
            <span className="inline-flex rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {preset.badge}
            </span>
            <div className="space-y-2">
              <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                {preset.title}
              </h1>
              <p className="max-w-2xl text-sm leading-7 text-slate-700 md:text-base">
                {preset.description}
              </p>
            </div>
          </div>

          <div className="grid gap-3 rounded-[1.5rem] border border-white/60 bg-white/70 p-4 text-sm text-slate-700">
            <div className="flex items-center justify-between rounded-2xl bg-slate-900 px-4 py-3 text-white">
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
          <section className="grid gap-5">
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
                    <span>{question.topic}</span>
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
            <div className="sticky bottom-4 z-10 flex flex-col gap-3 rounded-[1.75rem] border border-slate-900 bg-slate-900 p-4 text-white shadow-2xl md:flex-row md:items-center md:justify-between">
              <p className="text-sm text-slate-200">
                Você respondeu {answeredCount} de {questions.length} questões.
              </p>
              <button
                type="button"
                onClick={handleSubmit}
                className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
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
                </div>

                <div className="rounded-[1.5rem] border border-line bg-white p-5">
                  <p className="text-sm font-semibold text-slate-900">Tópicos para revisar</p>
                  {wrongQuestions.length > 0 ? (
                    <ul className="mt-3 space-y-3 text-sm text-slate-700">
                      {wrongQuestions.map((question) => (
                        <li key={question.id} className="rounded-2xl bg-slate-50 px-4 py-3">
                          <strong className="block text-slate-900">{question.topic}</strong>
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
                  onClick={handleRestart}
                  className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-strong"
                >
                  {preset.fixedQuestionIds?.length ? 'Refazer demo' : 'Gerar novo simulado'}
                </button>
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
