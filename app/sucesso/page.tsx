import Link from 'next/link'
import MetaPurchaseEvent from '@/app/components/MetaPurchaseEvent'

export default function SucessoPage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-4 py-8 md:px-8 lg:px-10">
      <MetaPurchaseEvent />
      <section className="rounded-[2.5rem] border border-line bg-surface p-8 shadow-[0_28px_90px_rgba(16,32,51,0.12)]">
        <span className="inline-flex rounded-full bg-accent-soft px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
          Compra aprovada
        </span>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950">
          Pagamento confirmado
        </h1>
        <p className="mt-4 text-base leading-8 text-slate-700">
          Seu acesso premium foi confirmado. Voce ja pode entrar na sua conta e continuar o treino.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/minha-conta"
            className="rounded-full bg-slate-950 px-6 py-3 text-center text-sm font-semibold !text-white transition hover:bg-slate-900 hover:!text-white visited:!text-white focus-visible:!text-white"
            style={{ color: '#ffffff', WebkitTextFillColor: '#ffffff' }}
          >
            Ir para minha conta
          </Link>
          <Link
            href="/prova-marinha"
            className="rounded-full border border-line px-6 py-3 text-center text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
          >
            Abrir simulado
          </Link>
        </div>
      </section>
    </main>
  )
}
