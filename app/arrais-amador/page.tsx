import type { Metadata } from 'next'
import Link from 'next/link'
import { simulationPresets } from '@/app/lib/simulations'
import { allQuestions } from '@/data/questions'
import { formatPriceInReais } from '@/lib/billing'
import { getCheckoutPricing, launchCoupon, supportEmail } from '@/lib/checkout-offers'

export const metadata: Metadata = {
  title: 'Simulado Arrais-Amador | Simulado Capitao',
  description:
    'Treine para a prova de Arrais-Amador com simulados focados, acesso por 90 dias e liberacao automatica apos o pagamento.',
}

const arraisTopics = [
  'RIPEAM e prioridades',
  'Balizamento e sinais',
  'Manobras e seguranca',
  'Termos nauticos',
  'VHF e comunicacao',
  'Bases de navegacao',
]

export default function ArraisAmadorPage() {
  const arraisPreset = simulationPresets.find((preset) => preset.href === '/simulado-arrais')
  const arraisQuestionCount = allQuestions.filter((question) => question.subject === 'arrais-amador').length
  const arraisTopicCount = new Set(
    allQuestions
      .filter((question) => question.subject === 'arrais-amador')
      .map((question) => question.topic)
  ).size
  const pricing = getCheckoutPricing(launchCoupon.code)
  const arraisHighlights = [
    `${arraisQuestionCount} questoes organizadas para Arrais-Amador`,
    `${arraisTopicCount} temas cobrados com foco em prova e navegacao segura`,
    'Acesso por 90 dias para repetir simulados e acompanhar sua evolucao',
  ]

  const arraisSteps = [
    'Voce entra, escolhe o treino e responde como se ja estivesse na prova.',
    'Cada questao vem com correcao para mostrar o motivo da resposta certa e onde voce esta errando.',
    'Voce repete os simulados com mais clareza, mais criterio e mais confianca para o exame.',
  ]

  const arraisReasons = [
    {
      title: 'Conteúdo organizado para aprender mais rápido',
      description:
        'Nao e so um monte de perguntas. Voce treina com um banco amplo, organizado e pensado para transformar erro em aprendizado.',
    },
    {
      title: 'Treino com cara de prova',
      description:
        'O simulado aproxima voce do estilo de cobranca, da tomada de decisao e do ritmo que aparece no exame.',
    },
    {
      title: 'Mais seguranca para estudar',
      description:
        'Com quantidade, foco e utilidade pratica, voce entende melhor onde esta errando e ganha mais seguranca para a prova.',
    },
  ]

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-8 md:px-8 lg:px-10">
      <section className="grid gap-6 rounded-[2.5rem] border border-line bg-surface p-5 shadow-[0_28px_90px_rgba(16,32,51,0.12)] sm:p-6 md:grid-cols-[1.12fr_0.88fr] md:p-8">
        <div className="space-y-6">
          <span className="inline-flex rounded-full bg-accent-soft px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            Simulado Arrais-Amador
          </span>

          <div className="space-y-4">
            <h1 className="max-w-full text-[2.5rem] leading-[1.02] font-semibold tracking-tight text-slate-950 sm:max-w-3xl sm:text-5xl md:text-6xl">
              Passe na prova de Arrais-Amador treinando do jeito certo e sem adiar a decisao
            </h1>
            <p className="max-w-2xl text-base leading-8 text-slate-700 md:text-lg">
              Treine com questoes comentadas, revise os temas mais cobrados e acompanhe sua evolucao
              em um banco organizado para quem quer chegar mais confiante ao exame.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-amber-200 bg-[linear-gradient(135deg,rgba(255,248,225,0.98),rgba(255,255,255,0.95))] p-5 shadow-[0_14px_36px_rgba(217,119,6,0.10)]">
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-rose-700">
                Desconto ativo
              </span>
              <span className="inline-flex rounded-full border border-amber-200 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-800">
                Oferta especial por tempo limitado
              </span>
            </div>
            <p className="mt-3 text-lg font-semibold text-slate-950">
              Entre agora no treino de Arrais e comece a revisar com quantidade, foco e utilidade real para a prova.
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              A compra libera 90 dias de acesso para revisar, repetir simulados e evoluir com mais metodo, sem estudar no escuro.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/comprar?next=%2Fsimulado-arrais"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-3.5 text-center text-base font-semibold !text-white shadow-[0_10px_24px_rgba(2,6,23,0.24)] ring-1 ring-slate-950/90 transition hover:bg-slate-900 hover:!text-white visited:!text-white focus-visible:!text-white"
            >
              Comecar Arrais por {formatPriceInReais(pricing.finalPriceCents)}
            </Link>
            <Link
              href="/comprar?next=%2Fsimulado-arrais"
              className="inline-flex items-center justify-center rounded-full border border-line bg-white px-6 py-3 text-center text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              Garantir desconto com {launchCoupon.code}
            </Link>
          </div>

          <ul className="grid gap-3 md:grid-cols-3">
            {arraisHighlights.map((item) => (
              <li key={item} className="rounded-2xl border border-line bg-white/70 px-4 py-4 text-sm text-slate-700">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-4 rounded-[2rem] border border-line bg-white/80 p-6 shadow-sm">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Produto em destaque</p>
            <strong className="mt-2 block text-3xl text-slate-950">
              {arraisPreset?.title ?? 'Arrais-Amador'}
            </strong>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              {arraisPreset?.description ??
                'Treino focado para quem quer passar na prova de Arrais-Amador.'}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-line bg-slate-50 px-4 py-4 text-center">
              <p className="text-3xl font-semibold tracking-tight text-slate-950">{arraisQuestionCount}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-500">questoes</p>
            </div>
            <div className="rounded-2xl border border-line bg-slate-50 px-4 py-4 text-center">
              <p className="text-3xl font-semibold tracking-tight text-slate-950">{arraisTopicCount}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-500">temas</p>
            </div>
            <div className="rounded-2xl border border-line bg-slate-50 px-4 py-4 text-center">
              <p className="text-3xl font-semibold tracking-tight text-slate-950">90 dias</p>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-500">de acesso</p>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-emerald-200 bg-emerald-50 px-5 py-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-900">
              Oferta de lancamento
            </p>
            <p className="mt-2 text-lg text-slate-500 line-through">
              {formatPriceInReais(pricing.originalPriceCents)}
            </p>
            <p className="mt-1 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              {formatPriceInReais(pricing.finalPriceCents)}
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              Use o cupom {launchCoupon.code} para aproveitar o desconto e entrar hoje no acesso completo.
            </p>
          </div>

          <Link
            href="/comprar?next=%2Fsimulado-arrais"
            className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold !text-white transition hover:bg-slate-900 hover:!text-white visited:!text-white focus-visible:!text-white"
          >
            Ir para o checkout do Arrais
          </Link>

          <div className="rounded-2xl border border-line bg-slate-50 px-4 py-4 text-sm text-slate-700">
            <p className="font-semibold text-slate-950">Acesso online imediato</p>
            <p className="mt-2">Disponivel para estudar no celular ou no computador, onde e quando voce quiser.</p>
          </div>

          <p className="text-sm leading-7 text-slate-700">
            Suporte e atendimento: <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
          </p>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[2.25rem] border border-slate-800 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.12),transparent_32%),linear-gradient(180deg,#09111f_0%,#0f172a_100%)] p-6 text-white shadow-[0_28px_70px_rgba(2,6,23,0.22)] md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            O que voce encontra
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Um caminho direto para estudar o que mais pesa na prova e chegar confiante
          </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-slate-300">
            O treino combina volume, foco e criterio em um banco que ajuda voce a revisar conteudo,
            testar decisao e chegar mais confiante para a prova de Arrais-Amador.
            </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {arraisTopics.map((topic) => (
              <div key={topic} className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4">
                <p className="font-semibold text-white">{topic}</p>
                <p className="mt-1 text-sm leading-7 text-slate-300">
                  Conteudo presente no treino para aproximar voce do estilo da prova e da rotina
                  de navegacao segura.
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5">
          <article className="rounded-[2.25rem] border border-line bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,252,1))] p-6 shadow-[0_18px_44px_rgba(16,32,51,0.08)] md:p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Por que esse acesso ajuda
            </p>
            <div className="mt-5 grid gap-3">
              {arraisReasons.map((reason) => (
                <div key={reason.title} className="rounded-2xl border border-slate-200 bg-white px-4 py-4">
                  <p className="font-semibold text-slate-950">{reason.title}</p>
                  <p className="mt-1 text-sm leading-7 text-slate-700">{reason.description}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[2.25rem] border border-line bg-surface-strong p-6 shadow-[0_18px_44px_rgba(16,32,51,0.08)] md:p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Como funciona
            </p>
            <div className="mt-5 grid gap-3">
              {arraisSteps.map((step, index) => (
                <div key={step} className="rounded-2xl border border-slate-200 bg-white px-4 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Etapa {index + 1}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-700">{step}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[2.25rem] border border-amber-300/70 bg-[linear-gradient(135deg,rgba(255,248,225,0.98),rgba(255,255,255,1))] p-6 shadow-[0_24px_56px_rgba(217,119,6,0.16)] md:p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-800">
              Pronto para comecar
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Garanta seu acesso e comece agora uma preparacao mais objetiva para passar
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              O simulado de Arrais-Amador foi organizado para deixar sua preparacao mais objetiva,
              com revisao clara, treino recorrente e acesso simples ao conteudo.
            </p>

            <p className="mt-3 text-sm text-slate-600">
              O checkout continua centralizado no fluxo atual, com liberacao automatica apos a
              aprovacao do pagamento e sem depender de confirmacao manual.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/comprar?next=%2Fsimulado-arrais"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-4 text-base font-semibold !text-white shadow-[0_14px_30px_rgba(2,6,23,0.24)] ring-1 ring-slate-950/90 transition hover:bg-slate-900 hover:!text-white visited:!text-white focus-visible:!text-white"
              >
                Ir para o checkout de Arrais
              </Link>
              <Link
                href="/simulado-arrais"
                className="inline-flex items-center justify-center rounded-full border border-line bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                Ver como funciona
              </Link>
            </div>

            <p className="mt-4 text-sm font-medium text-slate-800">
              Se voce quer estudar com mais metodo e menos improviso, esse acesso foi feito para voce.
            </p>
          </article>
        </div>
      </section>
    </main>
  )
}
