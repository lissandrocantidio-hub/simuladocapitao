import Link from 'next/link'
import { redirect } from 'next/navigation'
import AccountActions from '@/app/components/AccountActions'
import { getCurrentAccessSnapshot } from '@/lib/access'
import { accessPlan, formatPriceInReais } from '@/lib/billing'
import { supportEmail } from '@/lib/checkout-offers'
import { prisma } from '@/lib/db'

export default async function MinhaContaPage() {
  const { user, accessGrant, hasAccess } = await getCurrentAccessSnapshot()

  if (!user?.id) {
    redirect('/login?next=/minha-conta')
  }

  const purchases = await prisma.purchase.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: 'desc' },
    take: 5,
  })

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-8 md:px-8 lg:px-10">
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
              {hasAccess && accessGrant
                ? `Valido ate ${new Intl.DateTimeFormat('pt-BR').format(accessGrant.expiresAt)}.`
                : `Plano disponivel por ${formatPriceInReais(accessPlan.priceCents)}.`}
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              Suporte e atendimento: <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href={hasAccess ? '/prova-marinha' : '/comprar'}
              className="rounded-full bg-slate-950 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-slate-800"
            >
              {hasAccess ? 'Abrir prova premium' : 'Ativar acesso'}
            </Link>
            <AccountActions />
          </div>
        </div>
      </section>

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

        {purchases.length > 0 ? (
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
          </div>
        ) : (
          <p className="mt-6 text-sm leading-7 text-slate-700">
            Sua conta ainda nao tem compras registradas.
          </p>
        )}
      </section>
    </main>
  )
}
