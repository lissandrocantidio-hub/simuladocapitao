'use client'

import { useMemo, useState } from 'react'
import { formatStudyLabel } from '@/lib/study-labels'

type AttemptSummary = {
  id: string
  presetHref: string
  presetTitle: string
  scoreRatio: number
  correctCount: number
  questionCount: number
  wrongTopics: string[]
  createdAt: string
}

type PerformanceHistoryPanelProps = {
  attempts: AttemptSummary[]
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat('pt-BR').format(new Date(value))
}

function buildPolylinePoints(values: number[]) {
  if (values.length === 1) {
    return '24,96'
  }

  return values
    .map((value, index) => {
      const x = 24 + index * (272 / (values.length - 1))
      const y = 132 - value * 1.08

      return `${x},${y}`
    })
    .join(' ')
}

function buildAreaPoints(points: string) {
  if (!points) {
    return ''
  }

  const pointList = points.split(' ')

  return `24,132 ${pointList.join(' ')} 296,132`
}

function getPerformanceTone(scoreRatio: number) {
  if (scoreRatio >= 0.8) {
    return {
      badge: 'Resultado forte',
      className: 'bg-emerald-50 text-emerald-700',
    }
  }

  if (scoreRatio >= 0.6) {
    return {
      badge: 'Bom caminho',
      className: 'bg-sky-50 text-sky-700',
    }
  }

  return {
    badge: 'Precisa revisar',
    className: 'bg-amber-50 text-amber-700',
  }
}

export default function PerformanceHistoryPanel({ attempts }: PerformanceHistoryPanelProps) {
  const [selectedPreset, setSelectedPreset] = useState('all')

  const filters = useMemo(() => {
    const items = new Map<string, string>()

    for (const attempt of attempts) {
      if (!items.has(attempt.presetHref)) {
        items.set(attempt.presetHref, attempt.presetTitle)
      }
    }

    return [{ href: 'all', title: 'Todos' }, ...Array.from(items.entries()).map(([href, title]) => ({ href, title }))]
  }, [attempts])

  const filteredAttempts = useMemo(() => {
    if (selectedPreset === 'all') {
      return attempts
    }

    return attempts.filter((attempt) => attempt.presetHref === selectedPreset)
  }, [attempts, selectedPreset])

  const totalAttempts = filteredAttempts.length
  const averageScore =
    totalAttempts > 0
      ? Math.round((filteredAttempts.reduce((sum, attempt) => sum + attempt.scoreRatio, 0) / totalAttempts) * 100)
      : 0
  const bestScore =
    totalAttempts > 0 ? Math.round(Math.max(...filteredAttempts.map((attempt) => attempt.scoreRatio)) * 100) : 0
  const latestAttempt = filteredAttempts[0] ?? null
  const previousAttempt = filteredAttempts[1] ?? null
  const latestScore = latestAttempt ? Math.round(latestAttempt.scoreRatio * 100) : 0
  const scoreDelta =
    latestAttempt && previousAttempt
      ? Math.round((latestAttempt.scoreRatio - previousAttempt.scoreRatio) * 100)
      : null
  const chartAttempts = [...filteredAttempts].reverse().slice(-8)
  const chartValues = chartAttempts.map((attempt) => Math.round(attempt.scoreRatio * 100))
  const polylinePoints = chartValues.length > 0 ? buildPolylinePoints(chartValues) : ''
  const areaPoints = polylinePoints ? buildAreaPoints(polylinePoints) : ''

  return (
    <section className="rounded-[2rem] border border-line bg-surface-strong p-6 shadow-[0_18px_40px_rgba(16,32,51,0.08)]">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Evolucao nos simulados
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">Desempenho recente</h2>
          <p className="mt-2 text-sm leading-7 text-slate-700">
            O aluno consegue enxergar se esta repetindo nota, ganhando consistencia ou destravando de verdade.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter.href}
              type="button"
              onClick={() => setSelectedPreset(filter.href)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                selectedPreset === filter.href
                  ? 'bg-slate-950 text-white'
                  : 'border border-line bg-white text-slate-700 hover:bg-slate-50'
              }`}
            >
              {filter.title}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 rounded-[1.5rem] border border-slate-200 bg-white px-5 py-4 text-sm text-slate-700">
        <p className="font-semibold text-slate-950">Leitura rapida</p>
        <p className="mt-1 leading-6">
          {latestAttempt
            ? scoreDelta === null
              ? `Seu ultimo simulado ficou em ${latestScore}% e ja entrou no historico.`
              : scoreDelta >= 0
                ? `Seu ultimo simulado ficou em ${latestScore}% e voce subiu ${scoreDelta} pontos em relacao ao anterior.`
                : `Seu ultimo simulado ficou em ${latestScore}% e caiu ${Math.abs(scoreDelta)} pontos em relacao ao anterior.`
            : 'Assim que voce finalizar simulados logado, o historico recente aparecera aqui.'}
        </p>
      </div>

      {filteredAttempts.length > 0 ? (
        <>
          <div className="mt-6 grid gap-3 md:grid-cols-4">
            <article className="rounded-2xl border border-line bg-white p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Tentativas</p>
              <strong className="mt-2 block text-3xl text-slate-950">{totalAttempts}</strong>
            </article>
            <article className="rounded-2xl border border-line bg-white p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Media atual</p>
              <strong className="mt-2 block text-3xl text-slate-950">{averageScore}%</strong>
            </article>
            <article className="rounded-2xl border border-line bg-white p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Melhor nota</p>
              <strong className="mt-2 block text-3xl text-slate-950">{bestScore}%</strong>
            </article>
            <article className="rounded-2xl border border-line bg-white p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Ultimo resultado</p>
              <strong className="mt-2 block text-3xl text-slate-950">{latestScore}%</strong>
              <p className="mt-1 text-sm text-slate-600">
                {scoreDelta === null
                  ? formatDate(latestAttempt!.createdAt)
                  : scoreDelta >= 0
                    ? `+${scoreDelta} pts vs anterior`
                    : `${scoreDelta} pts vs anterior`}
              </p>
            </article>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <article className="rounded-[1.75rem] border border-line bg-white p-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-slate-950">Grafico de evolucao</p>
                  <p className="mt-1 text-sm text-slate-600">
                    Ultimas {chartAttempts.length} tentativas do filtro selecionado.
                  </p>
                </div>
                <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  {selectedPreset === 'all' ? 'Visao geral' : 'Filtro ativo'}
                </span>
              </div>

              <div className="mt-5 rounded-[1.5rem] border border-line bg-[linear-gradient(180deg,rgba(219,234,254,0.42),rgba(255,255,255,0.95))] p-4">
                <svg viewBox="0 0 320 160" className="h-52 w-full">
                  <defs>
                    <linearGradient id="historyAreaFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgba(14,116,144,0.35)" />
                      <stop offset="100%" stopColor="rgba(14,116,144,0.02)" />
                    </linearGradient>
                  </defs>
                  <line x1="24" y1="132" x2="296" y2="132" stroke="rgba(16,32,51,0.18)" strokeWidth="1" />
                  <line x1="24" y1="24" x2="24" y2="132" stroke="rgba(16,32,51,0.18)" strokeWidth="1" />
                  {[25, 50, 75, 100].map((tick) => {
                    const y = 132 - tick * 1.08

                    return (
                      <g key={tick}>
                        <line
                          x1="24"
                          y1={y}
                          x2="296"
                          y2={y}
                          stroke="rgba(16,32,51,0.08)"
                          strokeWidth="1"
                          strokeDasharray="4 4"
                        />
                        <text x="4" y={y + 4} fontSize="10" fill="rgba(16,32,51,0.55)">
                          {tick}
                        </text>
                      </g>
                    )
                  })}

                  {areaPoints ? <polygon points={areaPoints} fill="url(#historyAreaFill)" /> : null}

                  {polylinePoints ? (
                    <>
                      <polyline
                        fill="none"
                        stroke="rgb(14,116,144)"
                        strokeWidth="4"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        points={polylinePoints}
                      />
                      {chartAttempts.map((attempt, index) => {
                        const value = Math.round(attempt.scoreRatio * 100)
                        const x = chartAttempts.length === 1 ? 24 : 24 + index * (272 / (chartAttempts.length - 1))
                        const y = 132 - value * 1.08

                        return (
                          <g key={attempt.id}>
                            <circle cx={x} cy={y} r="5" fill="rgb(14,116,144)" />
                            <text x={x} y="150" textAnchor="middle" fontSize="10" fill="rgba(16,32,51,0.6)">
                              {index + 1}
                            </text>
                          </g>
                        )
                      })}
                    </>
                  ) : null}
                </svg>
              </div>
            </article>

            <article className="rounded-[1.75rem] border border-line bg-white p-5">
              <p className="text-sm font-semibold text-slate-950">Historico recente</p>
              <p className="mt-1 text-sm text-slate-600">
                Cada tentativa mostra resultado e o que vale revisar logo em seguida.
              </p>
              <div className="mt-4 grid gap-3">
                {filteredAttempts.map((attempt) => {
                  const tone = getPerformanceTone(attempt.scoreRatio)

                  return (
                    <article key={attempt.id} className="rounded-2xl border border-line bg-slate-50 px-4 py-3 text-sm text-slate-700">
                      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                        <div>
                          <p className="font-semibold text-slate-950">{attempt.presetTitle}</p>
                          <p>{formatDate(attempt.createdAt)}</p>
                        </div>
                        <div className="flex flex-col items-start gap-2 md:items-end">
                          <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] ${tone.className}`}>
                            {tone.badge}
                          </span>
                          <div className="font-semibold text-slate-900">
                            {attempt.correctCount}/{attempt.questionCount} · {Math.round(attempt.scoreRatio * 100)}%
                          </div>
                        </div>
                      </div>
                      {attempt.wrongTopics.length > 0 ? (
                        <p className="mt-2 leading-6 text-slate-700">
                          Revisar: {attempt.wrongTopics.slice(0, 4).map(formatStudyLabel).join(', ')}
                          {attempt.wrongTopics.length > 4 ? '...' : ''}
                        </p>
                      ) : (
                        <p className="mt-2 leading-6 text-emerald-700">Simulado concluido sem erros.</p>
                      )}
                    </article>
                  )
                })}
              </div>
            </article>
          </div>
        </>
      ) : (
        <p className="mt-6 text-sm leading-7 text-slate-700">
          Quando voce finalizar simulados logado, suas notas aparecerao aqui para acompanhar a evolucao.
        </p>
      )}
    </section>
  )
}
