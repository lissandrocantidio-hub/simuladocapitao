'use client'

import { useEffect, useMemo, useState } from 'react'
import type { AdminPendingPaymentAccess } from '@/lib/admin'

type AdminPendingPaymentsManagerProps = {
  initialPendingPayments: AdminPendingPaymentAccess[]
}

type ResendResponse = {
  error?: string
  sentCount?: number
  failedCount?: number
  pendingPayments?: AdminPendingPaymentAccess[]
  results?: Array<{
    email: string
    ok: boolean
    error: string | null
  }>
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

export default function AdminPendingPaymentsManager({
  initialPendingPayments,
}: AdminPendingPaymentsManagerProps) {
  const [pendingPayments, setPendingPayments] = useState(initialPendingPayments)
  const [selectedEmails, setSelectedEmails] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [couponCode, setCouponCode] = useState('LANCAMENTO20')
  const [manualEmailsText, setManualEmailsText] = useState('')

  useEffect(() => {
    setPendingPayments(initialPendingPayments)
    setSelectedEmails((current) =>
      current.filter((email) =>
        initialPendingPayments.some((payment) => payment.email === email)
      )
    )
  }, [initialPendingPayments])

  const allEmails = useMemo(
    () => pendingPayments.map((payment) => payment.email),
    [pendingPayments]
  )
  const allSelected = allEmails.length > 0 && selectedEmails.length === allEmails.length

  function toggleEmail(email: string) {
    setSelectedEmails((current) =>
      current.includes(email)
        ? current.filter((item) => item !== email)
        : [...current, email]
    )
  }

  function toggleAll() {
    setSelectedEmails(allSelected ? [] : allEmails)
  }

  async function refreshPendingPayments() {
    const response = await fetch('/api/admin/pending-payments', {
      cache: 'no-store',
      credentials: 'same-origin',
    })

    if (!response.ok) {
      return
    }

    const data = (await response.json()) as { pendingPayments?: AdminPendingPaymentAccess[] }
    setPendingPayments(data.pendingPayments ?? [])
  }

  async function handleResend() {
    setError('')
    setSuccess('')

    const manualEmails = manualEmailsText
      .split(/[\s,;]+/)
      .map((email) => email.trim().toLowerCase())
      .filter(Boolean)
    const targetEmails = [...new Set([...selectedEmails, ...manualEmails])]

    if (targetEmails.length === 0) {
      setError('Selecione pelo menos um e-mail.')
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/admin/pending-payments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          emails: targetEmails,
          nextPath: '/comprar',
          couponCode: couponCode.trim() || undefined,
          allowManualEmails: manualEmails.length > 0,
        }),
      })

      const data = (await response.json().catch(() => ({}))) as ResendResponse

      if (!response.ok) {
        setError(data.error ?? 'Não foi possível reenviar os e-mails.')
        return
      }

      setPendingPayments(data.pendingPayments ?? [])
      setSelectedEmails([])
      setManualEmailsText('')

      if ((data.failedCount ?? 0) > 0) {
        const failedEmails =
          data.results
            ?.filter((result) => !result.ok)
            .map((result) => `${result.email}: ${result.error ?? 'falha'}`)
            .join('; ') ?? ''
        setError(`Alguns envios falharam. ${failedEmails}`)
      }

      setSuccess(`${data.sentCount ?? 0} e-mail(s) enviado(s) com novo link de pagamento.`)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="rounded-[2rem] border border-sky-200 bg-[linear-gradient(180deg,rgba(240,249,255,1),rgba(255,255,255,1))] p-6 shadow-[0_18px_40px_rgba(16,32,51,0.08)]">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
            Pagamentos pendentes
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
            Reenvio de checkout
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-700">
            Gere um novo link do Mercado Pago e envie outro e-mail para alunos que ainda não
            concluíram o pagamento. Você também pode colar e-mails avulsos para campanhas com cupom.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <label className="flex min-w-44 flex-col gap-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
            Cupom
            <input
              value={couponCode}
              onChange={(event) => setCouponCode(event.target.value.toUpperCase())}
              className="rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold normal-case tracking-normal text-slate-900 outline-none transition focus:border-sky-500"
              placeholder="Sem cupom"
            />
          </label>
          <button
            type="button"
            onClick={() => {
              void refreshPendingPayments()
            }}
            className="rounded-full border border-line px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-white"
          >
            Atualizar
          </button>
          <button
            type="button"
            onClick={() => {
              void handleResend()
            }}
            disabled={isSubmitting || selectedEmails.length === 0}
            className="rounded-full bg-sky-700 px-5 py-2 text-sm font-semibold text-white transition hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting
              ? 'Enviando...'
              : `Reenviar ${selectedEmails.length > 0 ? `(${selectedEmails.length})` : ''}`}
          </button>
        </div>
      </div>

      {error ? <p className="mt-3 text-sm text-rose-700">{error}</p> : null}
      {success ? <p className="mt-3 text-sm text-sky-700">{success}</p> : null}

      <label className="mt-5 grid gap-2 text-sm font-medium text-slate-800">
        E-mails avulsos
        <textarea
          value={manualEmailsText}
          onChange={(event) => setManualEmailsText(event.target.value)}
          className="min-h-24 rounded-2xl border border-sky-100 bg-white px-4 py-3 text-sm outline-none transition focus:border-sky-500"
          placeholder="Cole um ou mais e-mails separados por vírgula, espaço ou quebra de linha."
        />
        <span className="text-xs font-normal text-slate-500">
          Use este campo quando o aluno aparece na base, mas não aparece em pagamentos pendentes.
        </span>
      </label>

      <div className="mt-5 overflow-x-auto rounded-2xl border border-sky-100 bg-white">
        {pendingPayments.length === 0 ? (
          <p className="px-4 py-4 text-sm text-slate-700">
            Nenhum pagamento pendente encontrado agora.
          </p>
        ) : (
          <table className="min-w-full border-separate border-spacing-0 text-left text-sm">
            <thead>
              <tr className="text-xs uppercase tracking-[0.14em] text-slate-500">
                <th className="border-b border-slate-200 px-3 py-3 font-semibold">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" checked={allSelected} onChange={toggleAll} />
                    Selecionar
                  </label>
                </th>
                <th className="border-b border-slate-200 px-3 py-3 font-semibold">E-mail</th>
                <th className="border-b border-slate-200 px-3 py-3 font-semibold">Status</th>
                <th className="border-b border-slate-200 px-3 py-3 font-semibold">
                  Atualizado em
                </th>
                <th className="border-b border-slate-200 px-3 py-3 font-semibold">Criado em</th>
              </tr>
            </thead>
            <tbody>
              {pendingPayments.map((payment) => (
                <tr key={payment.id} className="align-top text-slate-700">
                  <td className="border-b border-slate-100 px-3 py-3">
                    <input
                      type="checkbox"
                      checked={selectedEmails.includes(payment.email)}
                      onChange={() => toggleEmail(payment.email)}
                    />
                  </td>
                  <td className="border-b border-slate-100 px-3 py-3 font-semibold text-slate-950">
                    {payment.email}
                  </td>
                  <td className="border-b border-slate-100 px-3 py-3">
                    <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-700">
                      {payment.status}
                    </span>
                  </td>
                  <td className="border-b border-slate-100 px-3 py-3">
                    {formatDateTime(payment.updatedAt)}
                  </td>
                  <td className="border-b border-slate-100 px-3 py-3">
                    {formatDateTime(payment.createdAt)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  )
}
