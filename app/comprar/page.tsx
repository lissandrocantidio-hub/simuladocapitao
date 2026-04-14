import CheckoutProForm, { type CheckoutStatus } from '@/app/components/CheckoutProForm'
import { formatPriceInReais } from '@/lib/billing'
import { getCheckoutPricing, launchCoupon, supportEmail } from '@/lib/checkout-offers'
import { sanitizeNextPath } from '@/lib/navigation'
import { checkoutProduct, getPaymentAccessByEmail, hasGrantedAccess } from '@/lib/payment-access'

type ComprarPageProps = {
  searchParams?: Promise<{
    email?: string
    next?: string
    status?: string
  }>
}

export default async function ComprarPage({ searchParams }: ComprarPageProps) {
  const resolved = searchParams ? await searchParams : undefined
  const email = resolved?.email?.toLowerCase().trim() ?? ''
  const nextPath = sanitizeNextPath(resolved?.next)
  const checkoutStatus: CheckoutStatus =
    resolved?.status === 'success' || resolved?.status === 'pending' || resolved?.status === 'failure'
      ? { type: resolved.status, email }
      : undefined

  const launchPricing = getCheckoutPricing(launchCoupon.code)
  const hasAccess = email ? await hasGrantedAccess(email) : false
  const accessRecord = email ? await getPaymentAccessByEmail(email) : null

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-8 md:px-8 lg:px-10">
      <section className="grid gap-6 rounded-[2.5rem] border border-line bg-surface p-8 shadow-[0_28px_90px_rgba(16,32,51,0.12)] md:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-5">
          <span className="inline-flex rounded-full bg-accent-soft px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            Checkout Pro
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950">
            Desbloqueie o acesso completo
          </h1>
          <p className="max-w-2xl text-base leading-8 text-slate-700">
            Informe o e-mail do aluno, abra o checkout do Mercado Pago e deixe o webhook liberar o
            acesso automaticamente quando o pagamento for aprovado.
          </p>

          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-4 text-sm text-emerald-950">
            <p className="font-semibold">Promocao de lancamento ativa</p>
            <p className="mt-1">
              Use o cupom {launchCoupon.code} e pague{' '}
              {formatPriceInReais(launchPricing.finalPriceCents)} em vez de{' '}
              {formatPriceInReais(launchPricing.originalPriceCents)}.
            </p>
          </div>

          <ul className="grid gap-3 text-sm text-slate-700 md:grid-cols-3">
            <li className="rounded-2xl border border-line bg-white/65 px-4 py-4">
              90 dias de acesso premium
            </li>
            <li className="rounded-2xl border border-line bg-white/65 px-4 py-4">
              Simulados por materia
            </li>
            <li className="rounded-2xl border border-line bg-white/65 px-4 py-4">
              Pix priorizado no checkout
            </li>
          </ul>
        </div>

        <div className="grid gap-4 rounded-[2rem] border border-line bg-white/80 p-6 shadow-sm">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Produto</p>
            <strong className="mt-2 block text-3xl text-slate-950">{checkoutProduct.title}</strong>
            <p className="mt-2 text-sm leading-7 text-slate-700">{checkoutProduct.description}</p>
            <p className="mt-4 text-sm uppercase tracking-[0.2em] text-slate-500">Valor</p>
            <strong className="mt-2 block text-4xl text-slate-950">
              {formatPriceInReais(checkoutProduct.priceCents)}
            </strong>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              Pagamento unico com acesso premium por 90 dias.
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              Com o cupom {launchCoupon.code}, o valor cai para{' '}
              {formatPriceInReais(launchPricing.finalPriceCents)}.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              Suporte e atendimento: <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
            </p>
          </div>

          <CheckoutProForm
            initialEmail={email}
            checkoutStatus={checkoutStatus}
            accessGranted={hasAccess}
            nextPath={nextPath}
          />


          {email ? (
            <div className="rounded-2xl border border-line bg-slate-50 px-4 py-4 text-sm text-slate-700">
              <p className="font-semibold text-slate-950">Status atual do e-mail</p>
              <p className="mt-2">E-mail: {email}</p>
              <p>Status: {accessRecord?.status ?? 'sem registro'}</p>
              <p>Acesso liberado: {hasAccess ? 'sim' : 'nao'}</p>
            </div>
          ) : null}
        </div>
      </section>
    </main>
  )
}
