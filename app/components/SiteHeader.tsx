import { Suspense } from 'react'
import Link from 'next/link'
import { getCurrentUser } from '@/lib/auth'

async function AccountLink() {
  const user = await getCurrentUser()

  if (user) {
    return (
      <Link
        href="/minha-conta"
        className="whitespace-nowrap rounded-full border border-line px-3 py-2 text-center transition hover:bg-white md:px-4"
      >
        <span className="md:hidden">Conta</span>
        <span className="hidden md:inline">Minha conta</span>
      </Link>
    )
  }

  return (
    <Link
      href="/login"
      className="rounded-full border border-slate-300 bg-slate-900 px-3 py-2 text-center text-xs font-semibold !text-white transition hover:bg-slate-800 hover:!text-white visited:!text-white focus-visible:!text-white md:px-5 md:py-2.5 md:text-base"
      style={{ color: '#ffffff', WebkitTextFillColor: '#ffffff' }}
    >
      Entrar
    </Link>
  )
}

function AccountLinkFallback() {
  return (
    <Link
      href="/login"
      className="rounded-full border border-slate-300 bg-slate-900 px-3 py-2 text-center text-xs font-semibold !text-white transition hover:bg-slate-800 hover:!text-white visited:!text-white focus-visible:!text-white md:px-5 md:py-2.5 md:text-base"
      style={{ color: '#ffffff', WebkitTextFillColor: '#ffffff' }}
    >
      Entrar
    </Link>
  )
}

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-[rgba(255,250,241,0.96)] backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-stretch gap-3 px-3 py-3 md:flex-row md:items-center md:justify-between md:gap-4 md:px-8 md:py-4 lg:px-10">
        <Link
          href="/"
          className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-900 md:flex-none md:text-base"
        >
          Simulado Capitão
        </Link>

        <div className="flex w-full flex-col gap-2 md:min-w-0 md:flex-1 md:flex-row md:items-center md:justify-end md:gap-2 lg:gap-3">
          <nav className="grid w-full min-w-0 grid-cols-3 gap-2 text-xs font-medium text-slate-700 sm:grid-cols-5 md:flex md:w-auto md:min-w-0 md:flex-wrap md:items-center md:justify-end md:gap-2 md:text-sm lg:flex-nowrap lg:gap-3">
            <Link
              href="/simulado"
              className="whitespace-nowrap rounded-full px-2.5 py-2 text-center transition hover:bg-white/70 md:px-4"
            >
              <span className="md:hidden">Demo</span>
              <span className="hidden md:inline">Demo Capitão</span>
            </Link>
            <Link
              href="/prova-marinha"
              className="whitespace-nowrap rounded-full border border-amber-200 bg-amber-50 px-2.5 py-2 text-center font-semibold text-amber-900 transition hover:border-amber-300 hover:bg-amber-100 md:px-4"
            >
              <span className="md:hidden">Capitão</span>
              <span className="hidden md:inline">Capitão-Amador</span>
            </Link>
            <Link
              href="/arrais-amador"
              className="whitespace-nowrap rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-2 text-center font-semibold text-emerald-900 transition hover:border-emerald-300 hover:bg-emerald-100 md:px-4"
            >
              <span className="md:hidden">Arrais</span>
              <span className="hidden md:inline">Arrais-Amador</span>
            </Link>
            <Link
              href="/mestre-amador"
              className="whitespace-nowrap rounded-full border border-sky-200 bg-sky-50 px-2.5 py-2 text-center font-semibold text-sky-900 transition hover:border-sky-300 hover:bg-sky-100 md:px-4"
            >
              <span className="md:hidden">Mestre</span>
              <span className="hidden md:inline">Mestre-Amador</span>
            </Link>
            <Link
              href="/comprar"
              className="whitespace-nowrap rounded-full border border-accent/20 bg-accent-soft px-3 py-2 text-center text-accent transition hover:border-accent/40 md:px-4"
            >
              <span className="md:hidden">Acesso</span>
              <span className="hidden md:inline">Desbloquear acesso</span>
            </Link>
          </nav>

          <div className="flex justify-end md:flex-none">
            <Suspense fallback={<AccountLinkFallback />}>
              <AccountLink />
            </Suspense>
          </div>
        </div>
      </div>
    </header>
  )
}
