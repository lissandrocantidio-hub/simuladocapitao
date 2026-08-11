import type { AdminStudentSummary } from '@/lib/admin'

type AdminStudentSummaryPanelProps = {
  summary: AdminStudentSummary
  onlineFilter: 'all' | 'premium'
  onOnlineFilterChange: (filter: 'all' | 'premium') => void
}

function formatPercent(part: number, total: number) {
  if (total <= 0) {
    return '0%'
  }

  return `${Math.round((part / total) * 100)}%`
}

function formatLastSeen(lastSeenAt: string) {
  const lastSeenDate = new Date(lastSeenAt)
  const diffMs = Date.now() - lastSeenDate.getTime()
  const diffMinutes = Math.max(0, Math.floor(diffMs / 60000))

  if (diffMinutes <= 1) {
    return 'ativo agora'
  }

  return `ativo ha ${diffMinutes} min`
}

function formatDateTime(value: string | null) {
  if (!value) {
    return 'Sem registro'
  }

  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(new Date(value))
}

function formatPlanExpiration(value: string | null) {
  if (!value) {
    return 'Sem plano'
  }

  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short',
  }).format(new Date(value))
}

export default function AdminStudentSummaryPanel({
  summary,
  onlineFilter,
  onOnlineFilterChange,
}: AdminStudentSummaryPanelProps) {
  const visibleOnlineStudents =
    onlineFilter === 'premium'
      ? summary.onlineStudents.filter((student) => student.hasActiveAccess)
      : summary.onlineStudents

  return (
    <section className="rounded-[2rem] border border-amber-200 bg-[linear-gradient(180deg,rgba(255,251,235,1),rgba(255,255,255,1))] p-6 shadow-[0_18px_40px_rgba(16,32,51,0.08)]">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
            Visao administrativa
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
            Base de alunos
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-700">
            Resumo rapido para acompanhar quantos alunos ja se cadastraram e quantos estao ativos no produto.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        <article className="rounded-2xl border border-amber-100 bg-white p-4">
          <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Total de alunos</p>
          <strong className="mt-2 block text-3xl text-slate-950">{summary.totalUsers}</strong>
        </article>
        <article className="rounded-2xl border border-amber-100 bg-white p-4">
          <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Novos nos ultimos 7 dias</p>
          <strong className="mt-2 block text-3xl text-slate-950">{summary.newUsersLast7Days}</strong>
        </article>
        <article className="rounded-2xl border border-amber-100 bg-white p-4">
          <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Novos nos ultimos 30 dias</p>
          <strong className="mt-2 block text-3xl text-slate-950">{summary.newUsersLast30Days}</strong>
        </article>
        <article className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4">
          <p className="text-xs uppercase tracking-[0.16em] text-emerald-700">Alunos online agora</p>
          <strong className="mt-2 block text-3xl text-slate-950">{summary.onlineUsers}</strong>
          <p className="mt-1 text-sm text-slate-600">atividade detectada nos ultimos 5 minutos</p>
        </article>
        <article className="rounded-2xl border border-amber-100 bg-white p-4">
          <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Ja fizeram simulados</p>
          <strong className="mt-2 block text-3xl text-slate-950">{summary.usersWithAttempts}</strong>
          <p className="mt-1 text-sm text-slate-600">
            {formatPercent(summary.usersWithAttempts, summary.totalUsers)} da base cadastrada
          </p>
        </article>
        <article className="rounded-2xl border border-amber-100 bg-white p-4">
          <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Com compras registradas</p>
          <strong className="mt-2 block text-3xl text-slate-950">{summary.usersWithPurchases}</strong>
          <p className="mt-1 text-sm text-slate-600">
            {formatPercent(summary.usersWithPurchases, summary.totalUsers)} da base cadastrada
          </p>
        </article>
        <article className="rounded-2xl border border-amber-100 bg-white p-4">
          <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Acessos ativos</p>
          <strong className="mt-2 block text-3xl text-slate-950">{summary.activeAccessGrants}</strong>
          <p className="mt-1 text-sm text-slate-600">
            acessos ativos pelo grant legado ou pelo checkout por e-mail
          </p>
        </article>
      </div>

      <section className="mt-6 rounded-[1.5rem] border border-emerald-100 bg-white p-5">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-900">Alunos online agora</p>
            <p className="text-sm text-slate-600">
              Lista atualizada automaticamente com base na atividade recente.
            </p>
          </div>
          <div className="flex flex-col gap-2 md:items-end">
            <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
              atualizacao a cada 60 segundos
            </p>
            <div className="flex rounded-full border border-line bg-slate-50 p-1 text-xs font-semibold text-slate-700">
              <button
                type="button"
                onClick={() => onOnlineFilterChange('all')}
                className={`rounded-full px-3 py-2 transition ${
                  onlineFilter === 'all' ? 'bg-slate-950 text-white' : 'hover:bg-white'
                }`}
              >
                Todos online
              </button>
              <button
                type="button"
                onClick={() => onOnlineFilterChange('premium')}
                className={`rounded-full px-3 py-2 transition ${
                  onlineFilter === 'premium' ? 'bg-emerald-700 text-white' : 'hover:bg-white'
                }`}
              >
                So premium
              </button>
            </div>
          </div>
        </div>

        {visibleOnlineStudents.length > 0 ? (
          <div className="mt-4 grid gap-3">
            {visibleOnlineStudents.map((student) => (
              <article
                key={student.id}
                className="flex flex-col gap-2 rounded-2xl border border-emerald-100 bg-emerald-50/40 px-4 py-3 text-sm text-slate-700 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-semibold text-slate-950">{student.name}</p>
                    {student.hasActiveAccess ? (
                      <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                        Premium ativo
                      </span>
                    ) : (
                      <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
                        Sem premium ativo
                      </span>
                    )}
                  </div>
                  <p>{student.email}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-slate-500">
                    Ultima pagina: {student.lastSeenPath ?? 'nao identificada'}
                  </p>
                </div>
                <div className="text-sm text-slate-600 md:text-right">
                  <p className="font-medium text-emerald-700">{formatLastSeen(student.lastSeenAt)}</p>
                  <p>
                    {new Intl.DateTimeFormat('pt-BR', {
                      dateStyle: 'short',
                      timeStyle: 'short',
                    }).format(new Date(student.lastSeenAt))}
                  </p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="mt-4 text-sm leading-7 text-slate-700">
            {onlineFilter === 'premium'
              ? 'Nenhum aluno premium com atividade detectada nos ultimos 5 minutos.'
              : 'Nenhum aluno com atividade detectada nos ultimos 5 minutos.'}
          </p>
        )}
      </section>

      <section className="mt-6 rounded-[1.5rem] border border-slate-200 bg-white p-5">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-900">Relação de alunos</p>
            <p className="text-sm text-slate-600">
              Nome, e-mail, expiração do plano e última atividade registrada.
            </p>
          </div>
          <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
            {summary.students.length} alunos
          </p>
        </div>

        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-0 text-left text-sm">
            <thead>
              <tr className="text-xs uppercase tracking-[0.14em] text-slate-500">
                <th className="border-b border-slate-200 px-3 py-3 font-semibold">Aluno</th>
                <th className="border-b border-slate-200 px-3 py-3 font-semibold">E-mail</th>
                <th className="border-b border-slate-200 px-3 py-3 font-semibold">Plano</th>
                <th className="border-b border-slate-200 px-3 py-3 font-semibold">Expira em</th>
                <th className="border-b border-slate-200 px-3 py-3 font-semibold">Última atividade</th>
              </tr>
            </thead>
            <tbody>
              {summary.students.map((student) => (
                <tr key={student.id} className="align-top text-slate-700">
                  <td className="border-b border-slate-100 px-3 py-3 font-semibold text-slate-950">
                    {student.name}
                  </td>
                  <td className="border-b border-slate-100 px-3 py-3">{student.email}</td>
                  <td className="border-b border-slate-100 px-3 py-3">
                    {student.hasActiveAccess ? (
                      <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                        Ativo
                      </span>
                    ) : (
                      <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
                        Sem ativo
                      </span>
                    )}
                  </td>
                  <td className="border-b border-slate-100 px-3 py-3">
                    {formatPlanExpiration(student.planExpiresAt)}
                  </td>
                  <td className="border-b border-slate-100 px-3 py-3">
                    <p>{formatDateTime(student.lastActivityAt)}</p>
                    {student.lastActivityPath ? (
                      <p className="mt-1 text-xs uppercase tracking-[0.12em] text-slate-500">
                        {student.lastActivityPath}
                      </p>
                    ) : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  )
}
