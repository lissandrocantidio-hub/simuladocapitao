'use client'

import Link from 'next/link'
import { FormEvent, useEffect, useState } from 'react'

export type CheckoutStatus =
  | {
      type: 'success' | 'pending' | 'failure'
      email?: string
    }
  | undefined

export default function CheckoutProForm({
  initialEmail = '',
  checkoutStatus,
  accessGranted = false,
}: {
  initialEmail?: string
  checkoutStatus?: CheckoutStatus
  accessGranted?: boolean
}) {
  const [email, setEmail] = useState(initialEmail)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [sessionReady, setSessionReady] = useState(false)

  useEffect(() => {
    if (!accessGranted || !initialEmail) {
      return
    }

    let cancelled = false

    async function activateSession() {
      const response = await fetch('/api/access/session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: initialEmail }),
      })

      if (!cancelled && response.ok) {
        setSessionReady(true)
      }
    }

    void activateSession()

    return () => {
      cancelled = true
    }
  }, [accessGranted, initialEmail])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')
    setIsLoading(true)

    const response = await fetch('/api/payments/create-preference', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })

    const data = (await response.json().catch(() => ({}))) as {
      error?: string
      init_point?: string | null
    }

    setIsLoading(false)

    if (!response.ok || !data.init_point) {
      setError(data.error ?? 'Nao foi possivel iniciar o checkout.')
      return
    }

    window.location.href = data.init_point
  }

  return (
    <div className="grid gap-4">
      {checkoutStatus?.type === 'success' ? (
        <p className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
          Pagamento retornou como aprovado para {checkoutStatus.email ?? 'seu e-mail'}. O webhook
          agora fara a liberacao automatica.
        </p>
      ) : null}

      {checkoutStatus?.type === 'pending' ? (
        <p className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          O pagamento ficou pendente. Assim que o Mercado Pago aprovar, o webhook libera o acesso.
        </p>
      ) : null}

      {checkoutStatus?.type === 'failure' ? (
        <p className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-900">
          O checkout foi cancelado ou recusado. Voce pode tentar novamente abaixo.
        </p>
      ) : null}

      {accessGranted ? (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
          <p className="font-semibold">Acesso liberado para {initialEmail}.</p>
          <p className="mt-1">
            {sessionReady
              ? 'Este navegador ja pode abrir o conteudo premium.'
              : 'Ativando acesso neste navegador...'}
          </p>
          {sessionReady ? (
            <div className="mt-3 flex flex-wrap gap-2">
              <Link
                href="/prova-marinha"
                className="rounded-full border border-emerald-300 bg-white px-4 py-2 font-semibold transition hover:bg-emerald-100"
              >
                Abrir prova completa
              </Link>
              <Link
                href="/simulado-astronomica"
                className="rounded-full border border-emerald-300 bg-white px-4 py-2 font-semibold transition hover:bg-emerald-100"
              >
                Abrir premium
              </Link>
            </div>
          ) : null}
        </div>
      ) : null}

      <form onSubmit={handleSubmit} className="grid gap-4">
        <label className="grid gap-2 text-sm font-medium text-slate-800">
          E-mail do aluno
          <input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="rounded-2xl border border-line bg-white px-4 py-3 outline-none transition focus:border-accent"
            placeholder="voce@exemplo.com"
          />
        </label>

        <button
          type="submit"
          disabled={isLoading}
          className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isLoading ? 'Abrindo checkout...' : 'Desbloquear acesso completo'}
        </button>
      </form>

      {error ? <p className="text-sm text-rose-700">{error}</p> : null}
    </div>
  )
}
