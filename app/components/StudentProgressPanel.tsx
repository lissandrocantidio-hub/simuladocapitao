import Link from 'next/link'
import type { StudentProgressSummary } from '@/lib/student-progress'
import { formatStudyLabel } from '@/lib/study-labels'

type StudentProgressPanelProps = {
  summary: StudentProgressSummary
}

function formatPercent(value: number) {
  return `${Math.round(value * 100)}%`
}

function formatDate(value: string | null) {
  if (!value) {
    return '-'
  }

  return new Intl.DateTimeFormat('pt-BR').format(new Date(value))
}

function getBarWidth(value: number) {
  if (value <= 0) {
    return '0%'
  }

  return `${Math.max(8, Math.round(value * 100))}%`
}

function getTrendLabel(
  trend: StudentProgressSummary['overview']['trend'],
  trendDelta: number | null
) {
  if (trend === 'up' && trendDelta !== null) {
    return `Subindo ${Math.round(trendDelta * 100)} pontos nas últimas tentativas`
  }

  if (trend === 'down' && trendDelta !== null) {
    return `Caindo ${Math.round(Math.abs(trendDelta) * 100)} pontos nas últimas tentativas`
  }

  if (trendDelta !== null) {
    return 'Ritmo estável entre os blocos recentes'
  }

  return 'A tendência aparece depois de mais histórico'
}

function getLearningTone(overallAccuracy: number) {
  const precisionPercent = Math.round(overallAccuracy * 100)

  if (precisionPercent > 70) {
    return {
      panel: 'border-emerald-300 bg-emerald-50 text-emerald-950 shadow-[0_22px_60px_rgba(16,185,129,0.18)]',
      eyebrow: 'text-emerald-700',
      body: 'text-emerald-800',
      scoreCard: 'border-emerald-300 bg-white text-emerald-950',
      metricCard: 'border-emerald-200 bg-white/85',
      metricLabel: 'text-emerald-700',
      metricValue: 'text-emerald-950',
    }
  }

  if (precisionPercent >= 55) {
    return {
      panel: 'border-amber-300 bg-amber-50 text-amber-950 shadow-[0_22px_60px_rgba(245,158,11,0.18)]',
      eyebrow: 'text-amber-700',
      body: 'text-amber-800',
      scoreCard: 'border-amber-300 bg-white text-amber-950',
      metricCard: 'border-amber-200 bg-white/90',
      metricLabel: 'text-amber-700',
      metricValue: 'text-amber-950',
    }
  }

  return {
    panel: 'border-rose-300 bg-rose-50 text-rose-950 shadow-[0_22px_60px_rgba(244,63,94,0.18)]',
    eyebrow: 'text-rose-700',
    body: 'text-rose-800',
    scoreCard: 'border-rose-300 bg-white text-rose-950',
    metricCard: 'border-rose-200 bg-white/90',
    metricLabel: 'text-rose-700',
    metricValue: 'text-rose-950',
  }
}

export default function StudentProgressPanel({ summary }: StudentProgressPanelProps) {
  const { overview, subjects, weakTopics, strongTopics, recommendation } = summary
  const learningTone = getLearningTone(overview.overallAccuracy)

  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-line/70 bg-[linear-gradient(180deg,#fcfdfd_0%,#f7faf9_100%)] p-7 shadow-[0_14px_34px_rgba(15,23,42,0.06)] md:p-8">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-14 -top-16 h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.10)_0%,rgba(56,189,248,0)_72%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -bottom-20 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.08)_0%,rgba(16,185,129,0)_74%)]"
      />

      <div className="relative z-10">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Avanço do aluno
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
            Painel de aprendizado
          </h2>
          <p className="mt-2 max-w-3xl text-[15px] leading-8 text-slate-600">
            Um retrato mais claro do aprendizado: ritmo, consistência, cobertura e próximo passo.
          </p>
        </div>

        <div className="rounded-[1.5rem] border border-line/80 bg-white/85 px-5 py-4 text-sm text-slate-600 shadow-[0_4px_14px_rgba(15,23,42,0.05)] backdrop-blur-sm">
          <p className="font-semibold text-slate-800">Leitura recente</p>
          <p className="mt-1 leading-7">{getTrendLabel(overview.trend, overview.trendDelta)}</p>
        </div>
      </div>

      <div className="mt-7 grid gap-4 md:grid-cols-3">
        <article className="rounded-[1.5rem] border border-slate-200/90 bg-white px-5 py-5 shadow-[0_4px_12px_rgba(15,23,42,0.05)]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Aprendizado</p>
          <strong className="mt-2 block text-3xl text-slate-900">{overview.readinessScore}</strong>
          <p className="mt-1 text-sm leading-7 text-slate-600">{overview.readinessLabel}</p>
        </article>

        <article className="rounded-[1.5rem] border border-slate-200/90 bg-white px-5 py-5 shadow-[0_4px_12px_rgba(15,23,42,0.05)]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Consistência</p>
          <strong className="mt-2 block text-xl text-slate-900">{overview.consistencyLabel}</strong>
          <p className="mt-1 text-sm leading-7 text-slate-600">
            {overview.activeDays} dias ativos e {overview.currentStreakDays} dia
            {overview.currentStreakDays === 1 ? '' : 's'} em sequência
          </p>
        </article>

        <article className="rounded-[1.5rem] border border-slate-200/90 bg-white px-5 py-5 shadow-[0_4px_12px_rgba(15,23,42,0.05)]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Próximo marco</p>
          <strong className="mt-2 block text-xl text-slate-900">Foco de agora</strong>
          <p className="mt-1 text-sm leading-7 text-slate-600">{overview.nextMilestoneLabel}</p>
        </article>
      </div>

      {overview.totalAttempts > 0 ? (
        <>
          <div className="mt-7 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
            <article className={`rounded-[1.75rem] border p-6 backdrop-blur-[1px] shadow-[0_8px_22px_rgba(15,23,42,0.08)] ${learningTone.panel}`}>
              <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className={`text-sm font-semibold uppercase tracking-[0.18em] ${learningTone.eyebrow}`}>
                    Seu aprendizado
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
                    {overview.readinessLabel}
                  </h3>
                  <p className={`mt-3 max-w-xl text-sm leading-7 ${learningTone.body}`}>
                    {overview.nextMilestoneLabel}
                  </p>
                </div>

                <div className={`min-w-[210px] rounded-[1.5rem] border px-5 py-4 shadow-[0_4px_12px_rgba(15,23,42,0.06)] ${learningTone.scoreCard}`}>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em]">Aprendizado</p>
                  <p className="mt-2 text-4xl font-semibold">{overview.readinessScore}</p>
                  <p className="mt-1 text-sm">Índice de aprendizado atual</p>
                </div>
              </div>

              <div className="mt-6 grid gap-3 md:grid-cols-4">
                <article className={`rounded-2xl border p-4 shadow-[0_3px_10px_rgba(15,23,42,0.05)] ${learningTone.metricCard}`}>
                  <p className={`text-xs uppercase tracking-[0.16em] ${learningTone.metricLabel}`}>Precisão</p>
                  <strong className={`mt-2 block text-2xl ${learningTone.metricValue}`}>
                    {formatPercent(overview.overallAccuracy)}
                  </strong>
                </article>
                <article className={`rounded-2xl border p-4 shadow-[0_3px_10px_rgba(15,23,42,0.05)] ${learningTone.metricCard}`}>
                  <p className={`text-xs uppercase tracking-[0.16em] ${learningTone.metricLabel}`}>
                    Cobertura média
                  </p>
                  <strong className={`mt-2 block text-2xl ${learningTone.metricValue}`}>
                    {formatPercent(overview.averageCoverage)}
                  </strong>
                </article>
                <article className={`rounded-2xl border p-4 shadow-[0_3px_10px_rgba(15,23,42,0.05)] ${learningTone.metricCard}`}>
                  <p className={`text-xs uppercase tracking-[0.16em] ${learningTone.metricLabel}`}>
                    Dias ativos
                  </p>
                  <strong className={`mt-2 block text-2xl ${learningTone.metricValue}`}>
                    {overview.activeDays}
                  </strong>
                </article>
                <article className={`rounded-2xl border p-4 shadow-[0_3px_10px_rgba(15,23,42,0.05)] ${learningTone.metricCard}`}>
                  <p className={`text-xs uppercase tracking-[0.16em] ${learningTone.metricLabel}`}>Sequência</p>
                  <strong className={`mt-2 block text-2xl ${learningTone.metricValue}`}>
                    {overview.currentStreakDays} dia{overview.currentStreakDays === 1 ? '' : 's'}
                  </strong>
                </article>
              </div>
            </article>

            <article className="rounded-[1.75rem] border border-line bg-white/95 p-6 shadow-[0_8px_22px_rgba(15,23,42,0.06)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                    Próximo passo
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                    Direção clara para estudar melhor
                  </h3>
                </div>
                <span className="rounded-full border border-slate-200 bg-slate-50/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
                  {overview.consistencyLabel}
                </span>
              </div>

              {recommendation ? (
                <>
                  <div className="mt-5 rounded-[1.5rem] border border-amber-200/80 bg-[linear-gradient(135deg,rgba(255,251,235,1),rgba(255,255,255,1))] p-5 shadow-[0_3px_10px_rgba(245,158,11,0.08)]">
                    <p className="text-lg font-semibold text-slate-900">{recommendation.title}</p>
                    <p className="mt-2 text-sm leading-8 text-slate-600">
                      {recommendation.description}
                    </p>
                  </div>

                  <Link
                    href={recommendation.href}
                    className="mt-5 inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#0f172a,#111827)] px-5 py-3 text-sm font-semibold !text-white shadow-[0_8px_18px_rgba(15,23,42,0.20)] transition hover:brightness-110 hover:!text-white visited:!text-white focus-visible:!text-white"
                  >
                    {recommendation.ctaLabel}
                  </Link>
                </>
              ) : (
                <p className="mt-5 text-sm leading-7 text-slate-700">
                  Finalize seus primeiros simulados logado para destravar recomendações personalizadas.
                </p>
              )}

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <article className="rounded-2xl border border-line bg-slate-50 p-4 shadow-[0_3px_10px_rgba(15,23,42,0.05)]">
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Tentativas</p>
                  <strong className="mt-2 block text-2xl text-slate-950">{overview.totalAttempts}</strong>
                  <p className="mt-1 text-sm text-slate-600">
                    {overview.answeredQuestions} respostas registradas
                  </p>
                </article>
                <article className="rounded-2xl border border-line bg-slate-50 p-4 shadow-[0_3px_10px_rgba(15,23,42,0.05)]">
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Questões praticadas</p>
                  <strong className="mt-2 block text-2xl text-slate-950">
                    {overview.uniqueQuestionsPracticed}
                  </strong>
                  <p className="mt-1 text-sm text-slate-600">
                    {overview.subjectsStarted}/{overview.subjectsTracked} matérias com histórico
                  </p>
                </article>
              </div>
            </article>
          </div>

          <div className="mt-7 grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
            <article className="rounded-[1.75rem] border border-line bg-white/95 p-5 shadow-[0_8px_20px_rgba(15,23,42,0.06)]">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-slate-950">Mapa por matéria</p>
                  <p className="mt-1 text-sm text-slate-600">
                    Onde o aluno já construiu base e onde ainda vale insistir.
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-4">
                {subjects.map((subject) => (
                  <article key={subject.subject} className="rounded-2xl border border-line bg-slate-50 p-4 transition-all duration-200 hover:border-slate-300 hover:bg-white hover:shadow-[0_4px_12px_rgba(15,23,42,0.06)]">
                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                      <div>
                        <p className="font-semibold text-slate-950">{subject.label}</p>
                        <p className="mt-1 text-sm text-slate-600">
                          {subject.attemptsCount} simulados · última prática em {formatDate(subject.latestActivityAt)}
                        </p>
                      </div>
                      <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                        {subject.statusLabel}
                      </span>
                    </div>

                    <div className="mt-4 grid gap-3 md:grid-cols-3">
                      <div>
                        <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Cobertura</p>
                        <p className="mt-1 text-lg font-semibold text-slate-950">
                          {formatPercent(subject.coverage)}
                        </p>
                        <p className="text-sm text-slate-600">
                          {subject.uniqueQuestionsPracticed} de {subject.totalAvailableQuestions} questões
                        </p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Aproveitamento</p>
                        <p className="mt-1 text-lg font-semibold text-slate-950">
                          {formatPercent(subject.accuracy)}
                        </p>
                        <p className="text-sm text-slate-600">
                          {subject.correctAnswers} acertos em {subject.answeredQuestions} respostas
                        </p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Erros acumulados</p>
                        <p className="mt-1 text-lg font-semibold text-slate-950">{subject.wrongAnswers}</p>
                        <p className="text-sm text-slate-600">pontos para revisar nessa matéria</p>
                      </div>
                    </div>

                    <div className="mt-4 space-y-3">
                      <div>
                        <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.14em] text-slate-500">
                          <span>Cobertura do banco</span>
                          <span>{formatPercent(subject.coverage)}</span>
                        </div>
                        <div className="h-2 rounded-full bg-slate-200">
                          <div
                            className="h-2 rounded-full bg-slate-900"
                            style={{ width: getBarWidth(subject.coverage) }}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.14em] text-slate-500">
                          <span>Aproveitamento</span>
                          <span>{formatPercent(subject.accuracy)}</span>
                        </div>
                        <div className="h-2 rounded-full bg-emerald-100">
                          <div
                            className="h-2 rounded-full bg-emerald-600"
                            style={{ width: getBarWidth(subject.accuracy) }}
                          />
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </article>

            <div className="grid gap-6">
              <article className="rounded-[1.75rem] border border-line bg-white/95 p-5 shadow-[0_8px_20px_rgba(15,23,42,0.06)]">
                <p className="text-sm font-semibold text-slate-950">Revisar agora</p>
                <p className="mt-1 text-sm text-slate-600">
                  Os tópicos que mais merecem um novo ciclo de estudo.
                </p>
                {weakTopics.length > 0 ? (
                  <div className="mt-4 grid gap-3">
                    {weakTopics.map((topic) => (
                      <article key={`${topic.subject}-${topic.topic}`} className="rounded-2xl border border-rose-100 bg-rose-50 px-4 py-3">
                        <p className="font-semibold text-slate-950">{formatStudyLabel(topic.topic)}</p>
                        <p className="mt-1 text-sm text-slate-700">{topic.subjectLabel}</p>
                        <p className="mt-2 text-sm text-rose-700">
                          {topic.wrongAnswers} erros · {formatPercent(topic.accuracy)} de acerto
                        </p>
                      </article>
                    ))}
                  </div>
                ) : (
                  <p className="mt-4 text-sm leading-7 text-slate-700">
                    Ainda não há erros suficientes para destacar um foco de revisão.
                  </p>
                )}
              </article>

              <article className="rounded-[1.75rem] border border-line bg-white/95 p-5 shadow-[0_8px_20px_rgba(15,23,42,0.06)]">
                <p className="text-sm font-semibold text-slate-950">Pontos fortes</p>
                <p className="mt-1 text-sm text-slate-600">
                  Onde o aluno já está respondendo com mais firmeza.
                </p>
                {strongTopics.length > 0 ? (
                  <div className="mt-4 grid gap-3">
                    {strongTopics.map((topic) => (
                      <article key={`${topic.subject}-${topic.topic}`} className="rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3">
                        <p className="font-semibold text-slate-950">{formatStudyLabel(topic.topic)}</p>
                        <p className="mt-1 text-sm text-slate-700">{topic.subjectLabel}</p>
                        <p className="mt-2 text-sm text-emerald-700">
                          {topic.correctAnswers} acertos · {formatPercent(topic.accuracy)} de aproveitamento
                        </p>
                      </article>
                    ))}
                  </div>
                ) : (
                  <p className="mt-4 text-sm leading-7 text-slate-700">
                    Os destaques positivos aparecem quando houver repetição suficiente em um tópico.
                  </p>
                )}
              </article>
            </div>
          </div>
        </>
      ) : (
        <p className="mt-6 text-sm leading-7 text-slate-700">
          O painel de progresso aparece assim que o aluno finalizar os primeiros simulados logado.
        </p>
      )}
      </div>
    </section>
  )
}

