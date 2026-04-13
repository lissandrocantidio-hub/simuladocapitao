import Link from 'next/link'
import CheckoutProForm, { type CheckoutStatus } from '@/app/components/CheckoutProForm'
import { getCurrentAccessSnapshot } from '@/lib/access'
import { supportEmail } from '@/lib/checkout-offers'
import { getPaymentAccessByEmail, hasGrantedAccess } from '@/lib/payment-access'

type CompraConcluidaPageProps = {
  searchParams?: Promise<{
    email?: string
    source?: string
    status?: string
  }>
}

export default async function CompraConcluidaPage({ searchParams }: CompraConcluidaPageProps) {
  const resolved = searchParams ? await searchParams : undefined
  const email = resolved?.email?.toLowerCase().trim() ?? ''
  const source = resolved?.source ?? ''
  const checkoutStatus: CheckoutStatus =
    resolved?.status === 'success' || resolved?.status === 'pending' || resolved?.status === 'failure'
      ? { type: resolved.status, email }
      : undefined

  const hasEmailAccess = email ? await hasGrantedAccess(email) : false
  const emailAccessRecord = email ? await getPaymentAccessByEmail(email) : null
  const { user, hasAccess: hasAccountAccess } = await getCurrentAccessSnapshot()
  const hasAccess = hasEmailAccess || hasAccountAccess

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-8 md:px-8 lg:px-10">
      <section className="grid gap-6 rounded-[2.5rem] border border-line bg-surface p-8 shadow-[0_28px_90px_rgba(16,32,51,0.12)] md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5">
          <span className="inline-flex rounded-full bg-accent-soft px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            Compra concluida
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950">
            Retorno do checkout
          </h1>
          <p className="max-w-2xl text-base leading-8 text-slate-700">
            Esta e a pagina de confirmacao da compra. Ela centraliza o retorno do Mercado Pago e
            ajuda a reativar o acesso automaticamente.
          </p>

          <div className="rounded-2xl border border-line bg-white/75 px-4 py-4 text-sm text-slate-700">
            <p className="font-semibold text-slate-950">URL de conversao para Google Ads</p>
            <p className="mt-2 break-all">https://simuladocapitao.com.br/compra-concluida</p>
          </div>

          <div className="rounded-2xl border border-line bg-white/75 px-4 py-4 text-sm text-slate-700">
            <p className="font-semibold text-slate-950">Suporte e atendimento</p>
            <p className="mt-2">
              <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
            </p>
          </div>
        </div>

        <div className="grid gap-4 rounded-[2rem] border border-line bg-white/80 p-6 shadow-sm">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Status</p>
            <strong className="mt-2 block text-3xl text-slate-950">
              {hasAccess ? 'Acesso identificado' : 'Aguardando liberacao'}
            </strong>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              {checkoutStatus?.type === 'success'
                ? 'O checkout retornou como aprovado. Se o webhook ja processou o pagamento, o acesso pode ser reativado agora.'
                : checkoutStatus?.type === 'pending'
                  ? 'O pagamento ainda esta pendente. Assim que houver aprovacao, o acesso sera liberado.'
                  : checkoutStatus?.type === 'failure'
                    ? 'O pagamento foi cancelado ou recusado. Voce pode tentar novamente abaixo.'
                    : 'Use os botoes abaixo para concluir a ativacao do acesso.'}
            </p>
          </div>

          {email ? (
            <div className="rounded-2xl border border-line bg-slate-50 px-4 py-4 text-sm text-slate-700">
              <p className="font-semibold text-slate-950">Acompanhamento por e-mail</p>
              <p className="mt-2">E-mail: {email}</p>
              <p>Status do pagamento: {emailAccessRecord?.status ?? 'sem registro'}</p>
              <p>Acesso liberado: {hasEmailAccess ? 'sim' : 'nao'}</p>
            </div>
          ) : null}

          {source === 'account' && user ? (
            <div className="rounded-2xl border border-line bg-slate-50 px-4 py-4 text-sm text-slate-700">
              <p className="font-semibold text-slate-950">Conta identificada</p>
              <p className="mt-2">{user.email}</p>
              <p>Status do acesso premium: {hasAccountAccess ? 'ativo' : 'aguardando confirmacao'}</p>
            </div>
          ) : null}

          {email ? (
            <CheckoutProForm
              initialEmail={email}
              checkoutStatus={checkoutStatus}
              accessGranted={hasEmailAccess}
            />
          ) : (
            <div className="grid gap-3">
              <Link
                href="/minha-conta"
                className="rounded-full bg-slate-950 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-900"
              >
                Ir para minha conta
              </Link>
              <Link
                href="/comprar"
                className="rounded-full border border-line px-6 py-3 text-center text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                Voltar ao checkout
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
