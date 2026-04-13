'use client'

import { useState } from 'react'

export default function BuyButton() {
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  async function handleCheckout() {
    setError('')
    setIsLoading(true)

    const response = await fetch('/api/checkout', {
      method: 'POST',
    })

    const data = (await response.json().catch(() => ({}))) as {
      error?: string
      initPoint?: string | null
    }

    setIsLoading(false)

    if (!response.ok || !data.initPoint) {
      setError(data.error ?? 'Nao foi possivel abrir o checkout agora.')
      return
    }

    window.location.href = data.initPoint
  }

  return (
    <div className="grid gap-3">
      <button
        type="button"
        onClick={handleCheckout}
        disabled={isLoading}
        className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isLoading ? 'Abrindo checkout...' : 'Comprar acesso'}
      </button>
      {error ? <p className="text-sm text-rose-700">{error}</p> : null}
    </div>
  )
}
