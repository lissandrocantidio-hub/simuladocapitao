import Link from 'next/link'
import { simulationPresets, subjectLabels } from '@/app/lib/simulations'
import { allQuestions } from '@/data/questions'
import { formatPriceInReais } from '@/lib/billing'
import { premiumPaths } from '@/lib/access'
import { getCheckoutPricing, launchCoupon } from '@/lib/checkout-offers'

const valuePropsBase = [
  {
    description: 'Treine com questões no estilo da prova da Marinha.',
  },
  {
    title: 'Correção explicada',
    description: 'Entenda seus erros e saiba exatamente onde melhorar.',
  },
  {
    title: 'Ritmo da prova real',
    description: 'Cronômetro e simulados pensados para o tempo do exame.',
  },
  {
    title: 'No celular ou computador',
    description: 'Estude onde for mais fácil, sem depender de material solto.',
  },
]

const learningSteps = [
  {
    title: 'Você faz o simulado',
    description: 'Escolhe a prova, inicia o treino e responde como se já estivesse no exame.',
  },
  {
    title: 'Vê onde está errando',
    description: 'A correção mostra o que você já domina e o que ainda precisa revisar.',
  },
  {
    title: 'Volta mais preparado',
    description: 'Cada tentativa deixa você mais seguro para o dia da prova.',
  },
]

const objections = [
  'Não precisa estudar horas sem direção.',
  'Você treina direto no que mais cai.',
  'Ideal para quem está começando e quer ganhar confiança.',
]

export default function Home() {
  const subjectCountMap = allQuestions.reduce<Record<string, number>>((acc, question) => {
    acc[question.subject] = (acc[question.subject] ?? 0) + 1
    return acc
  }, {})

  const pricing = getCheckoutPricing(launchCoupon.code)
  const totalQuestionCount = allQuestions.length
  const arraisQuestionCount = subjectCountMap['arrais-amador'] ?? 0
  const mestreQuestionCount = subjectCountMap['mestre-amador'] ?? 0
  const capitaoQuestionCount = subjectCountMap['capitao-amador'] ?? 0
  const availableCountByPath: Record<string, number> = {
    '/prova-marinha': capitaoQuestionCount,
    '/simulado-arrais': arraisQuestionCount,
    '/simulado-mestre': mestreQuestionCount,
  }
  const valueProps = [
    {
      title: `${totalQuestionCount} questões reais`,
      description: valuePropsBase[0].description,
    },
    ...valuePropsBase.slice(1),
  ]

  const featuredPresets = [
    ...simulationPresets.filter((preset) => preset.href === '/prova-marinha'),
    ...simulationPresets.filter((preset) => preset.href === '/simulado-arrais'),
    ...simulationPresets.filter((preset) => preset.href === '/simulado-mestre'),
    ...simulationPresets.filter(
      (preset) =>
        preset.href !== '/prova-marinha' &&
        preset.href !== '/simulado-arrais' &&
        preset.href !== '/simulado-mestre'
    ),
  ]

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-10 px-4 py-8 md:px-8 lg:px-10">
      <section className="min-w-0 overflow-hidden rounded-[2rem] border border-line bg-surface shadow-[0_28px_90px_rgba(16,32,51,0.12)] md:rounded-[2.5rem]">
        <div className="grid min-w-0 gap-8 px-5 py-8 md:grid-cols-[1.15fr_0.85fr] md:px-8 md:py-10">
          <div className="min-w-0 space-y-6">
            <span className="inline-flex rounded-full bg-accent-soft px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
              Simulados para prova da Marinha
            </span>

            <div className="space-y-4">
              <h1 className="max-w-[calc(100vw-5rem)] text-3xl font-semibold tracking-tight text-slate-950 sm:max-w-3xl sm:text-5xl md:text-6xl">
                Passe na prova da Marinha treinando como na prova real
              </h1>
              <p className="max-w-[calc(100vw-5rem)] text-base leading-8 text-slate-700 sm:max-w-2xl md:text-lg">
                Treine com questões reais, correção explicada, cronômetro no ritmo da prova e
                acesso direto no celular. Escolha Capitão, Arrais ou Mestre e entre no simulado
                certo para a sua prova.
              </p>
            </div>

            <div className="flex max-w-[calc(100vw-5rem)] flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap">
              <Link
                href="/comprar?next=%2Fsimulado-arrais"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-4 text-base font-semibold !text-white shadow-[0_14px_30px_rgba(2,6,23,0.24)] ring-1 ring-slate-950/90 transition hover:bg-slate-900 hover:!text-white visited:!text-white focus-visible:!text-white"
              >
                Começar agora por {formatPriceInReais(pricing.finalPriceCents)}
              </Link>
              <Link
                href="/prova-marinha"
                className="inline-flex items-center justify-center rounded-full border border-amber-200 bg-amber-50 px-6 py-4 text-base font-semibold text-amber-950 transition hover:border-amber-300 hover:bg-amber-100"
              >
                Fazer Simulado Capitão
              </Link>
              <Link
                href="/simulado"
                className="inline-flex items-center justify-center rounded-full border border-line bg-white px-6 py-4 text-base font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                Testar demo grátis
              </Link>
            </div>

            <div className="rounded-[1.75rem] border border-amber-200 bg-[linear-gradient(135deg,rgba(255,248,225,0.98),rgba(255,255,255,0.94))] p-5 shadow-[0_14px_36px_rgba(217,119,6,0.10)]">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-rose-700">
                  Oferta de lançamento
                </span>
                <span className="inline-flex rounded-full border border-amber-200 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-800">
                  Cupom {launchCoupon.code}
                </span>
              </div>
              <p className="mt-3 text-lg font-semibold text-slate-950">
                Entre agora, pague menos e use os próximos 90 dias para saber quando você está
                pronto para passar.
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                De {formatPriceInReais(pricing.originalPriceCents)} por{' '}
                {formatPriceInReais(pricing.finalPriceCents)} com acesso liberado logo após a
                aprovação do pagamento.
              </p>
            </div>
          </div>

          <div className="grid gap-4 rounded-[2rem] bg-slate-950 p-5 text-white">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">O que você recebe</p>
              <strong className="mt-2 block text-5xl">{totalQuestionCount}</strong>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Questões organizadas por assunto, com foco em prova, revisão e evolução real para Arrais, Mestre e Capitão.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/8 px-4 py-4">
                <p className="text-sm font-semibold text-white">Arrais-Amador</p>
                <p className="mt-1 text-sm leading-7 text-slate-300">
                  {arraisQuestionCount} questões para quem quer entrar mais preparado e estudar com direção.
                </p>
              </div>
              <div className="rounded-2xl bg-white/8 px-4 py-4">
                <p className="text-sm font-semibold text-white">Mestre-Amador</p>
                <p className="mt-1 text-sm leading-7 text-slate-300">
                  {mestreQuestionCount} questões para subir de nível com mais segurança e repertório.
                </p>
              </div>
              <div className="rounded-2xl bg-white/8 px-4 py-4">
                <p className="text-sm font-semibold text-white">Capitao-Amador</p>
                <p className="mt-1 text-sm leading-7 text-slate-300">
                  {capitaoQuestionCount} questões para treinar as matérias mais cobradas com profundidade.
                </p>
              </div>
              <div className="rounded-2xl bg-white/8 px-4 py-4">
                <p className="text-sm font-semibold text-white">Acesso por 90 dias</p>
                <p className="mt-1 text-sm leading-7 text-slate-300">
                  Estude no seu ritmo, refaça simulados e acompanhe sua evolução.
                </p>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] px-4 py-4 text-sm leading-7 text-slate-300">
              Pare de estudar no escuro. Treine, corrija seus erros e descubra, mais rápido, se
              você está pronto para a prova.
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {valueProps.map((item) => (
          <article
            key={item.title}
            className="rounded-[1.75rem] border border-line bg-white/85 px-5 py-5 shadow-[0_16px_38px_rgba(16,32,51,0.08)]"
          >
            <p className="text-lg font-semibold text-slate-950">{item.title}</p>
            <p className="mt-2 text-sm leading-7 text-slate-700">{item.description}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.04fr_0.96fr]">
        <article className="rounded-[2.25rem] border border-line bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,252,1))] p-6 shadow-[0_18px_44px_rgba(16,32,51,0.08)] md:p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Como funciona
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Você treina, entende seus erros e chega mais preparado para a prova
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-8 text-slate-700">
            Sem complicação. O simulador foi feito para mostrar o que mais cai, onde você está
            errando e o quanto falta para ganhar confiança.
          </p>

          <div className="mt-6 grid gap-3">
            {learningSteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-[0_6px_20px_rgba(15,23,42,0.04)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Passo {index + 1}
                </p>
                <p className="mt-2 font-semibold text-slate-950">{step.title}</p>
                <p className="mt-1 text-sm leading-7 text-slate-700">{step.description}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-[2.25rem] border border-slate-800 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.12),transparent_32%),linear-gradient(180deg,#09111f_0%,#0f172a_100%)] p-6 text-white shadow-[0_28px_70px_rgba(2,6,23,0.22)] md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Por que isso funciona
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Pare de estudar sem saber se está pronto
          </h2>
          <p className="mt-3 max-w-xl text-base leading-8 text-slate-300">
            Aqui, você treina no formato da prova, corrige seus erros e ganha segurança antes do
            exame. É simples, direto e feito para quem quer passar.
          </p>

          <div className="mt-6 grid gap-3">
            {objections.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 text-sm leading-7 text-slate-200"
              >
                {item}
              </div>
            ))}
          </div>

          <Link
            href="/comprar?next=%2Fsimulado-arrais"
            className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold !text-slate-950 shadow-[0_10px_24px_rgba(255,255,255,0.12)] transition hover:bg-slate-100 hover:!text-slate-950 visited:!text-slate-950 focus-visible:!text-slate-950"
          >
            Começar por Arrais-Amador
          </Link>
        </article>
      </section>

      <section className="space-y-5">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Para qual prova você está se preparando?
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Escolha sua prova e comece pelo caminho certo
          </h2>
          <p className="mt-3 text-base leading-8 text-slate-700">
            Arrais é a melhor porta de entrada para quem está chegando agora. Mestre e Capitão
            continuam disponíveis para quem já quer avançar.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.9fr_0.9fr]">
          <article className="rounded-[2rem] border-2 border-emerald-300/60 bg-[linear-gradient(135deg,rgba(214,241,235,0.92),rgba(255,250,241,0.98))] p-6 shadow-[0_24px_60px_rgba(16,120,108,0.14)]">
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex rounded-full bg-slate-950 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                Arrais-Amador
              </span>
              <span className="inline-flex rounded-full border border-emerald-200 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-800">
                Melhor porta de entrada
              </span>
            </div>

            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
              Comece por Arrais e treine no que realmente mais cai
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              Ideal para quem quer sair do básico, entender o estilo da prova e ganhar confiança
              mais rápido.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              <div className="rounded-2xl border border-white/70 bg-white/75 px-4 py-4">
                <p className="text-sm font-semibold text-slate-950">Questões focadas</p>
                <p className="mt-1 text-sm leading-7 text-slate-700">
                  {arraisQuestionCount} questões com foco em manobras, RIPEAM, balizamento, VHF e tomada de decisão.
                </p>
              </div>
              <div className="rounded-2xl border border-white/70 bg-white/75 px-4 py-4">
                <p className="text-sm font-semibold text-slate-950">Bom para iniciantes</p>
                <p className="mt-1 text-sm leading-7 text-slate-700">
                  Ajuda quem está começando a estudar sem ficar perdido no conteúdo.
                </p>
              </div>
              <div className="rounded-2xl border border-white/70 bg-white/75 px-4 py-4">
                <p className="text-sm font-semibold text-slate-950">Comece rápido</p>
                <p className="mt-1 text-sm leading-7 text-slate-700">
                  Entre agora e comece a treinar em poucos minutos.
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/comprar?next=%2Fsimulado-arrais"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-4 text-base font-semibold !text-white shadow-[0_14px_30px_rgba(2,6,23,0.24)] ring-1 ring-slate-950/90 transition hover:bg-slate-900 hover:!text-white visited:!text-white focus-visible:!text-white"
              >
                Começar por Arrais
              </Link>
              <Link
                href="/arrais-amador"
                className="inline-flex items-center justify-center rounded-full border border-line bg-white px-6 py-4 text-base font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                Ver detalhes
              </Link>
            </div>
          </article>

          <article className="rounded-[2rem] border border-line bg-surface-strong p-6 shadow-[0_18px_40px_rgba(16,32,51,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-800">
              Mestre-Amador
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
              Para quem já quer um preparo mais completo
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              Treino focado em navegação costeira, meteorologia, manobras e leitura de situações.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              {mestreQuestionCount} questões dedicadas ao conteúdo de Mestre-Amador.
            </p>
            <Link
              href="/mestre-amador"
              className="mt-6 inline-flex items-center justify-center rounded-full border border-sky-200 bg-white px-5 py-3 text-sm font-semibold text-sky-900 transition hover:bg-sky-50"
            >
              Conhecer Mestre
            </Link>
          </article>

          <article className="rounded-[2rem] border border-line bg-surface-strong p-6 shadow-[0_18px_40px_rgba(16,32,51,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Capitão-Amador
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
              Para quem quer treinar as matérias mais exigidas
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              Simulados para astronomia, meteorologia, navegação, comunicações, sobrevivência e
              estabilidade.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              {capitaoQuestionCount} questões para revisar os temas mais cobrados.
            </p>
            <Link
              href="/prova-marinha"
              className="mt-6 inline-flex items-center justify-center rounded-full border border-line bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              Fazer Simulado Capitão
            </Link>
          </article>
        </div>
      </section>

      <section className="rounded-[2.25rem] border border-amber-300/70 bg-[linear-gradient(135deg,rgba(255,248,225,0.98),rgba(255,255,255,1))] p-6 shadow-[0_24px_56px_rgba(217,119,6,0.16)] md:p-7">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-rose-700">
                Oferta de lançamento ativa
                </span>
                <span className="inline-flex rounded-full border border-amber-200 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-800">
                  90 dias de acesso
                </span>
              </div>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Se você quer passar na prova, comece a treinar hoje
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-8 text-slate-700">
              Questões reais, correção explicada, treino no celular e simulados no ritmo da prova.
              Tudo para você estudar com mais clareza e menos tentativa no escuro.
            </p>
          </div>

          <div className="grid gap-4 rounded-[1.8rem] border border-white/70 bg-white/80 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-800">
                Comece hoje
              </p>
              <p className="mt-2 text-lg text-slate-500 line-through">
                {formatPriceInReais(pricing.originalPriceCents)}
              </p>
              <p className="mt-1 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                {formatPriceInReais(pricing.finalPriceCents)}
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                Use o cupom {launchCoupon.code} e garanta 90 dias para treinar como na prova real.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white/85 px-4 py-4 text-center">
                <p className="text-3xl font-semibold tracking-tight text-slate-950">{totalQuestionCount}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-500">
                  questões no banco
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white/85 px-4 py-4 text-center">
                <p className="text-3xl font-semibold tracking-tight text-slate-950">90 dias</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-500">
                  de acesso
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white/85 px-4 py-4 text-center">
                <p className="text-3xl font-semibold tracking-tight text-slate-950">Celular</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-500">
                  treino onde quiser
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/comprar?next=%2Fsimulado-arrais"
                className="inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-7 py-4 text-base font-semibold !text-white shadow-[0_14px_30px_rgba(2,6,23,0.24)] ring-1 ring-slate-950/90 transition hover:bg-slate-900 hover:!text-white visited:!text-white focus-visible:!text-white"
              >
                Começar agora por {formatPriceInReais(pricing.finalPriceCents)}
              </Link>
              <Link
                href="/simulado"
                className="inline-flex w-full items-center justify-center rounded-full border border-line bg-white px-7 py-4 text-base font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                Testar demo grátis
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Escolha seu treino
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
            Escolha como você quer estudar
          </h2>
          <p className="mt-3 text-base leading-8 text-slate-700">
            Você pode testar a demo grátis, fazer simulados completos ou revisar por matéria.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {featuredPresets.map((preset) => {
            const isArrais = preset.href === '/simulado-arrais'
            const isMestre = preset.href === '/simulado-mestre'
            const isFeaturedCertification = isArrais || isMestre

            return (
              <Link
                key={preset.href}
                href={
                  premiumPaths.has(preset.href)
                    ? `/comprar?next=${encodeURIComponent(preset.href)}`
                    : preset.href
                }
                className={`group rounded-[2rem] p-6 transition hover:-translate-y-1 ${
                  isFeaturedCertification
                    ? 'border-2 border-accent/30 bg-[linear-gradient(135deg,rgba(214,241,235,0.85),rgba(255,250,241,0.98))] shadow-[0_24px_60px_rgba(16,120,108,0.14)]'
                    : 'border border-line bg-surface-strong shadow-[0_18px_40px_rgba(16,32,51,0.08)] hover:shadow-[0_24px_50px_rgba(16,32,51,0.12)]'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap gap-2">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${
                          isFeaturedCertification
                            ? 'bg-slate-950 text-white'
                            : 'bg-accent-soft text-accent'
                        }`}
                      >
                        {preset.badge}
                      </span>
                      <span className="inline-flex rounded-full border border-line bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                        {premiumPaths.has(preset.href) ? 'Premium' : 'Grátis'}
                      </span>
                    </div>
                    <h3
                      className={`mt-4 font-semibold text-slate-950 ${
                        isFeaturedCertification ? 'text-3xl' : 'text-2xl'
                      }`}
                    >
                      {preset.title}
                    </h3>
                  </div>
                  <span className="rounded-full border border-line px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {preset.durationMinutes} min
                  </span>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-700">{preset.description}</p>

                {isArrais ? (
                  <p className="mt-4 rounded-2xl border border-white/70 bg-white/70 px-4 py-3 text-sm font-medium text-slate-800">
                    Questões focadas para quem quer ganhar confiança logo no início do estudo.
                  </p>
                ) : null}

                {isMestre ? (
                  <p className="mt-4 rounded-2xl border border-white/70 bg-white/70 px-4 py-3 text-sm font-medium text-slate-800">
                    Questões para quem quer um treino mais completo e mais exigente.
                  </p>
                ) : null}

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
                  <span>
                    {availableCountByPath[preset.href]
                      ? `${availableCountByPath[preset.href]} no banco`
                      : `${preset.questionCount} questões`}
                  </span>
                  <span className="font-semibold text-accent transition group-hover:text-accent-strong">
                    {premiumPaths.has(preset.href) ? 'Desbloquear acesso' : 'Abrir demo grátis'}
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </section>
    </main>
  )
}
