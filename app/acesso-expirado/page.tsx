import Link from 'next/link'

export default function AcessoExpiradoPage() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-4 py-8 md:px-8 lg:px-10">
      <section className="rounded-[2.5rem] border border-line bg-surface p-8 text-center shadow-[0_28px_90px_rgba(16,32,51,0.12)]">
        <span className="inline-flex rounded-full bg-accent-soft px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
          Acesso expirado
        </span>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950">
          Seu periodo premium terminou
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-700">
          Entre novamente no checkout para renovar por mais 180 dias e continuar usando todos os
          simulados fechados.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/comprar"
            className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-900"
          >
            Renovar acesso
          </Link>
          <Link
            href="/simulado"
            className="rounded-full border border-line px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-white"
          >
            Voltar ao demo
          </Link>
        </div>
      </section>
    </main>
  )
}
