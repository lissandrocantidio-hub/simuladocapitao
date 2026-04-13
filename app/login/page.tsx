import { redirect } from 'next/navigation'
import LoginForm from '@/app/components/LoginForm'
import { getCurrentUser } from '@/lib/auth'

export default async function LoginPage() {
  const user = await getCurrentUser()

  if (user) {
    redirect('/minha-conta')
  }

  return (
    <main className="mx-auto flex min-h-[calc(100vh-80px)] w-full max-w-6xl items-center px-4 py-10 md:px-8 lg:px-10">
      <section className="grid w-full gap-8 rounded-[2.5rem] border border-line bg-surface p-8 shadow-[0_28px_90px_rgba(16,32,51,0.12)] md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5">
          <span className="inline-flex rounded-full bg-accent-soft px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            Area do aluno
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950">
            Entre para continuar seus simulados
          </h1>
          <p className="max-w-xl text-base leading-8 text-slate-700">
            Somente o simulado geral demo continua aberto gratuitamente. O modo prova e todos os
            blocos por materia ficam liberados apenas com acesso premium ativo.
          </p>
        </div>

        <div className="rounded-[2rem] border border-line bg-white/80 p-6 shadow-sm">
          <LoginForm />
        </div>
      </section>
    </main>
  )
}
