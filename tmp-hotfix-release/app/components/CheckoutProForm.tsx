'use client'

import Link from 'next/link'
import { FormEvent, useEffect, useState } from 'react'
import { launchCoupon, supportEmail } from '@/lib/checkout-offers'
import { sanitizeNextPath } from '@/lib/navigation'

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
  nextPath = '/prova-marinha',
}: {
  initialEmail?: string
  checkoutStatus?: CheckoutStatus
  accessGranted?: boolean
  nextPath?: string
}) {
  const [email, setEmail] = useState(initialEmail)
  const [couponCode, setCouponCode] = useState<string>(launchCoupon.code)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [sessionReady, setSessionReady] = useState(false)
  const targetPath = sanitizeNextPath(nextPath)

  async function tryRestoreAccessSession(targetEmail: string) {
    const response = await fetch('/api/access/session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: targetEmail }),
    })

    if (!response.ok) {
      return false
    }

    setSessionReady(true)
    window.location.href = targetPath
    return true
  }

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

    const normalizedEmail = email.toLowerCase().trim()

    const restored = await tryRestoreAccessSession(normalizedEmail)

    if (restored) {
      return
    }

    const response = await fetch('/api/payments/create-preference', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: normalizedEmail, couponCode, nextPath: targetPath }),
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

  async function handleRestoreAccess() {
    setError('')
    setIsLoading(true)

    const restored = await tryRestoreAccessSession(email.toLowerCase().trim())
    setIsLoading(false)

    if (restored) {
      return
    }

    setError('Ainda nao encontramos acesso liberado para esse e-mail. Se o pagamento foi recente, aguarde a confirmacao do webhook e tente novamente.')
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
                href={targetPath}
                className="rounded-full border border-emerald-300 bg-white px-4 py-2 font-semibold transition hover:bg-emerald-100"
              >
                Abrir conteudo liberado
              </Link>
              <Link
                href="/"
                className="rounded-full border border-emerald-300 bg-white px-4 py-2 font-semibold transition hover:bg-emerald-100"
              >
                Escolher outro simulado
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

        <label className="grid gap-2 text-sm font-medium text-slate-800">
          Cupom promocional
          <input
            type="text"
            value={couponCode}
            onChange={(event) => setCouponCode(event.target.value.toUpperCase())}
            className="rounded-2xl border border-line bg-white px-4 py-3 uppercase outline-none transition focus:border-accent"
            placeholder={launchCoupon.code}
          />
          <span className="text-xs font-normal text-slate-500">
            Promocao de lancamento: use {launchCoupon.code} para garantir{' '}
            {launchCoupon.percentOff}% de desconto.
          </span>
        </label>

        <button
          type="submit"
          disabled={isLoading}
          className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isLoading ? 'Verificando acesso...' : 'Desbloquear acesso completo'}
        </button>

        <button
          type="button"
          onClick={handleRestoreAccess}
          disabled={isLoading}
          className="rounded-full border border-line px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-70"
        >
          Ja paguei e quero recuperar meu acesso
        </button>
      </form>

      {error ? <p className="text-sm text-rose-700">{error}</p> : null}

      <p className="text-sm leading-7 text-slate-600">
        Suporte e atendimento: <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
      </p>
      <p className="text-xs leading-6 text-slate-500">
        Se o aluno comprou sem criar conta, o acesso pode ser recuperado depois usando o mesmo
        e-mail informado no checkout.
      </p>
    </div>
  )
}
