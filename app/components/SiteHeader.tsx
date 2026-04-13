import Link from 'next/link'
import { getCurrentUser } from '@/lib/auth'

export default async function SiteHeader() {
  const user = await getCurrentUser()

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-[rgba(255,250,241,0.82)] backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 md:px-8 lg:px-10">
        <Link href="/" className="font-semibold uppercase tracking-[0.18em] text-slate-900">
          Simulado Capitao
        </Link>

        <nav className="flex items-center gap-3 text-sm font-medium text-slate-700">
          <Link href="/simulado" className="rounded-full px-4 py-2 transition hover:bg-white/70">
            Demo
          </Link>
          <Link
            href="/comprar"
            className="rounded-full border border-accent/20 bg-accent-soft px-4 py-2 text-accent transition hover:border-accent/40"
          >
            Desbloquear acesso
          </Link>
          {user ? (
            <Link
              href="/minha-conta"
              className="rounded-full border border-line px-4 py-2 transition hover:bg-white"
            >
              Minha conta
            </Link>
          ) : (
            <Link
              href="/login"
              className="rounded-full border border-line px-4 py-2 transition hover:bg-white"
            >
              Entrar
            </Link>
          )}
        </nav>
      </div>
    </header>
  )
}
