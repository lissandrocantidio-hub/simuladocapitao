import Link from 'next/link'
import { redirect } from 'next/navigation'
import AdminCouponsManager from '@/app/components/AdminCouponsManager'
import AdminPendingPaymentsManager from '@/app/components/AdminPendingPaymentsManager'
import AdminStudentSummaryClient from '@/app/components/AdminStudentSummaryClient'
import { getAdminStudentSummary, isAdminEmail, listPendingPaymentAccesses } from '@/lib/admin'
import { getCurrentUser } from '@/lib/auth'
import { listCoupons } from '@/lib/coupons'

export default async function AdminPage() {
  const user = await getCurrentUser()

  if (!user?.id) {
    redirect('/login?next=/admin')
  }

  if (!isAdminEmail(user.email)) {
    return (
      <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-6 px-4 py-8 md:px-8 lg:px-10">
        <section className="rounded-[2rem] border border-line bg-surface-strong p-8 shadow-[0_18px_40px_rgba(16,32,51,0.08)]">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Painel administrativo
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
            Acesso nao habilitado
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700">
            O e-mail {user.email} esta logado, mas nao esta listado em ADMIN_EMAILS. Adicione
            esse e-mail na variavel de ambiente para liberar a visao administrativa.
          </p>
          <Link
            href="/minha-conta"
            className="mt-6 inline-flex rounded-full border border-line px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-white"
          >
            Voltar para Minha conta
          </Link>
        </section>
      </main>
    )
  }

  const summary = await getAdminStudentSummary()
  const coupons = await listCoupons()
  const pendingPayments = await listPendingPaymentAccesses()

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-6 px-4 py-8 md:px-8 lg:px-10">
      <AdminStudentSummaryClient initialSummary={summary} />
      <AdminPendingPaymentsManager initialPendingPayments={pendingPayments} />
      <AdminCouponsManager initialCoupons={coupons} />
    </main>
  )
}
