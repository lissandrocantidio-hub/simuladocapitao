import { Suspense } from 'react'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import AdminStudentSummaryClient from '@/app/components/AdminStudentSummaryClient'
import AccountActions from '@/app/components/AccountActions'
import PerformanceHistoryPanel from '@/app/components/PerformanceHistoryPanel'
import StudentProgressPanel from '@/app/components/StudentProgressPanel'
import { getAdminStudentSummary, isAdminEmail } from '@/lib/admin'
import { buildStudentProgressSummary } from '@/lib/student-progress'
import { getCurrentAccessSnapshot } from '@/lib/access'
import { accessPlan, formatPriceInReais } from '@/lib/billing'
import { supportEmail } from '@/lib/checkout-offers'
import { prisma } from '@/lib/db'
import { getPaymentAccessByEmail, getPaymentAccessExpiration } from '@/lib/payment-access'

function LoadingCard({ title }: { title: string }) {
  return (
    <section className="rounded-[2rem] border border-line bg-surface-strong p-6 shadow-[0_18px_40px_rgba(16,32,51,0.08)]">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{title}</p>
        <div className="h-8 w-48 rounded-xl bg-slate-200/70" />
        <div className="h-4 w-full rounded-xl bg-slate-100" />
        <div className="h-4 w-5/6 rounded-xl bg-slate-100" />
      </div>
    </section>
  )
}

async function AdminSummarySection({ email }: { email: string }) {
  if (!isAdminEmail(email)) {
    return null
  }

  const adminSummary = await getAdminStudentSummary()

  return <AdminStudentSummaryClient initialSummary={adminSummary} />
}

async function PurchaseHistorySection({ userId, email }: { userId: string; email: string }) {
  const [purchases, paymentAccessRecord] = await Promise.all([
    prisma.purchase.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: 5,
    }),
    getPaymentAccessByEmail(email),
  ])

  return (
    <section className="rounded-[2rem] border border-line bg-surface-strong p-6 shadow-[0_18px_40px_rgba(16,32,51,0.08)]">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Compras recentes
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
            Historico
          </h2>
        </div>
      </div>

      {purchases.length > 0 || paymentAccessRecord ? (
        <div className="mt-6 grid gap-3">
          {purchases.map((purchase) => (
            <article
              key={purchase.id}
              className="flex flex-col gap-2 rounded-2xl border border-line bg-white p-4 text-sm text-slate-700 md:flex-row md:items-center md:justify-between"
            >
              <div>
                <p className="font-semibold text-slate-950">{purchase.planCode}</p>
                <p>{new Intl.DateTimeFormat('pt-BR').format(purchase.createdAt)}</p>
              </div>
              <div className="font-semibold text-slate-900">
                {formatPriceInReais(purchase.amountCents)} · {purchase.status}
              </div>
            </article>
          ))}
          {!purchases.length && paymentAccessRecord ? (
            <article className="flex flex-col gap-2 rounded-2xl border border-line bg-white p-4 text-sm text-slate-700 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-semibold text-slate-950">{accessPlan.code}</p>
                <p>{new Intl.DateTimeFormat('pt-BR').format(paymentAccessRecord.updatedAt)}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-slate-500">
                  Pagamento identificado pelo e-mail do checkout
                </p>
              </div>
              <div className="font-semibold text-slate-900">
                {formatPriceInReais(accessPlan.priceCents)} · {paymentAccessRecord.status}
              </div>
            </article>
          ) : null}
        </div>
      ) : (
        <p className="mt-6 text-sm leading-7 text-slate-700">
          Sua conta ainda nao tem compras registradas.
        </p>
      )}
    </section>
  )
}

async function ProgressSections({ userId }: { userId: string }) {
  const attempts = await prisma.simulationAttempt.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
    take: 24,
  })

  const progressSummary = buildStudentProgressSummary(attempts)

  return (
    <>
      <StudentProgressPanel summary={progressSummary} />

      <PerformanceHistoryPanel
        attempts={attempts.map((attempt) => ({
          id: attempt.id,
          presetHref: attempt.presetHref,
          presetTitle: attempt.presetTitle,
          scoreRatio: attempt.scoreRatio,
          correctCount: attempt.correctCount,
          questionCount: attempt.questionCount,
          wrongTopics: attempt.wrongTopics,
          createdAt: attempt.createdAt.toISOString(),
        }))}
      />
    </>
  )
}

export default async function MinhaContaPage() {
  const { user, accessGrant, emailAccess, hasAccess } = await getCurrentAccessSnapshot()

  if (!user?.id || !user.email) {
    redirect('/login?next=/minha-conta')
  }

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-8 md:px-8 lg:px-10">
      <Suspense fallback={null}>
        <AdminSummarySection email={user.email} />
      </Suspense>

      <section className="grid gap-6 rounded-[2.5rem] border border-line bg-surface p-8 shadow-[0_28px_90px_rgba(16,32,51,0.12)] md:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <span className="inline-flex rounded-full bg-accent-soft px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            Minha conta
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950">{user.name}</h1>
          <p className="text-base leading-8 text-slate-700">{user.email}</p>
        </div>

        <div className="grid gap-4 rounded-[2rem] border border-line bg-white/80 p-6 shadow-sm">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Status do acesso</p>
            <strong className="mt-2 block text-3xl text-slate-950">
              {hasAccess ? 'Premium ativo' : 'Sem acesso ativo'}
            </strong>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              {hasAccess && (accessGrant || emailAccess)
                ? `Valido ate ${new Intl.DateTimeFormat('pt-BR').format(
                    accessGrant?.expiresAt ?? getPaymentAccessExpiration(emailAccess!)
                  )}.`
                : `Plano disponivel por ${formatPriceInReais(accessPlan.priceCents)}.`}
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              Suporte e atendimento: <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
            </p>
            {!accessGrant && emailAccess ? (
              <p className="mt-2 text-sm leading-7 text-slate-700">
                Pagamento identificado pelo e-mail do checkout.
              </p>
            ) : null}
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href={hasAccess ? '/prova-marinha' : '/comprar'}
              className="rounded-full bg-slate-950 px-6 py-3.5 text-lg font-semibold !text-white transition hover:bg-slate-800 hover:!text-white visited:!text-white focus-visible:!text-white"
            >
              {hasAccess ? 'Abrir Capitao' : 'Ativar acesso'}
            </Link>
            {hasAccess ? (
              <>
                <Link
                  href="/simulado-arrais"
                  className="rounded-full border border-line px-6 py-3.5 text-base font-semibold text-slate-900 transition hover:bg-white"
                >
                  Abrir Arrais
                </Link>
                <Link
                  href="/simulado-mestre"
                  className="rounded-full border border-line px-6 py-3.5 text-base font-semibold text-slate-900 transition hover:bg-white"
                >
                  Abrir Mestre
                </Link>
              </>
            ) : null}
            {isAdminEmail(user.email) ? (
              <Link
                href="/admin"
                className="rounded-full border border-amber-300 bg-amber-50 px-6 py-3.5 text-base font-semibold text-amber-900 transition hover:bg-amber-100"
              >
                Painel admin
              </Link>
            ) : null}
            <AccountActions />
          </div>
        </div>
      </section>

      <Suspense fallback={<LoadingCard title="Compras recentes" />}>
        <PurchaseHistorySection userId={user.id} email={user.email} />
      </Suspense>

      <Suspense
        fallback={
          <>
            <LoadingCard title="Avanco do aluno" />
            <LoadingCard title="Evolucao nos simulados" />
          </>
        }
      >
        <ProgressSections userId={user.id} />
      </Suspense>
    </main>
  )
}
