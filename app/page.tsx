import Link from 'next/link'
import { simulationPresets, subjectLabels } from '@/app/lib/simulations'
import { allQuestions } from '@/data/questions'
import { premiumPaths } from '@/lib/access'

const highlights = [
  'Cronometro automatico para treinar pressao de prova',
  'Correcao comentada logo apos finalizar',
  'Questoes separadas por materia e por estilo de prova',
]

export default function Home() {
  const subjects = Array.from(new Set(allQuestions.map((question) => question.subject)))

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-10 px-4 py-8 md:px-8 lg:px-10">
      <section className="overflow-hidden rounded-[2.5rem] border border-line bg-surface shadow-[0_28px_90px_rgba(16,32,51,0.12)] backdrop-blur">
        <div className="grid gap-10 px-6 py-8 md:grid-cols-[1.25fr_0.85fr] md:px-8 md:py-10">
          <div className="space-y-6">
            <span className="inline-flex rounded-full bg-accent-soft px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
              Plataforma de treino
            </span>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
                Simulado online para a prova de Capitao Amador
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-700 md:text-lg">
                Teste a plataforma no demo gratuito e desbloqueie a versao premium para acessar
                modo prova, simulados por materia e a experiencia completa.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/simulado"
                className="rounded-full bg-slate-950 px-7 py-3.5 text-base font-semibold !text-white shadow-[0_10px_24px_rgba(2,6,23,0.24)] ring-1 ring-slate-950/90 transition hover:bg-slate-900 hover:!text-white visited:!text-white focus-visible:!text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              >
                Testar demo gratuita
              </Link>
              <Link
                href="/comprar"
                className="rounded-full border border-line px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-white"
              >
                Desbloquear premium
              </Link>
            </div>

            <ul className="grid gap-3 text-sm text-slate-700 md:grid-cols-3">
              {highlights.map((item) => (
                <li key={item} className="rounded-2xl border border-line bg-white/65 px-4 py-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-4 rounded-[2rem] bg-slate-950 p-5 text-white">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Banco disponivel</p>
              <strong className="mt-2 block text-5xl">{allQuestions.length}</strong>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Questoes prontas para treino, com foco em temas recorrentes da prova.
              </p>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {subjects.map((subject) => (
                <div key={subject} className="rounded-2xl bg-white/8 px-4 py-4">
                  <p className="text-sm font-semibold text-white">
                    {subjectLabels[subject] ?? subject}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-400">
                    {allQuestions.filter((question) => question.subject === subject).length} questoes
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Escolha seu treino
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
              Modos prontos para estudar
            </h2>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {simulationPresets.map((preset) => (
            <Link
              key={preset.href}
              href={premiumPaths.has(preset.href) ? '/comprar' : preset.href}
              className="group rounded-[2rem] border border-line bg-surface-strong p-6 shadow-[0_18px_40px_rgba(16,32,51,0.08)] transition hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(16,32,51,0.12)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                      {preset.badge}
                    </span>
                    <span className="inline-flex rounded-full border border-line bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                      {premiumPaths.has(preset.href) ? 'Premium' : 'Demo gratis'}
                    </span>
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold text-slate-950">{preset.title}</h3>
                </div>
                <span className="rounded-full border border-line px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {preset.durationMinutes} min
                </span>
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-700">{preset.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {preset.subjects.map((subject) => (
                  <span
                    key={subject}
                    className="rounded-full bg-slate-100 px-3 py-2 text-xs font-medium text-slate-600"
                  >
                    {subjectLabels[subject] ?? subject}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between text-sm text-slate-600">
                <span>{preset.questionCount} questoes</span>
                <span className="font-semibold text-accent transition group-hover:text-accent-strong">
                  {premiumPaths.has(preset.href) ? 'Desbloquear' : 'Abrir demo'}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
