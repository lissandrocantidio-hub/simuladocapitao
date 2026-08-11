'use client'

import Link from 'next/link'
import { FormEvent, useState } from 'react'

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')
    setMessage('')
    setIsSubmitting(true)

    const response = await fetch('/api/password/forgot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })

    const data = (await response.json().catch(() => ({}))) as {
      error?: string
      message?: string
    }

    setIsSubmitting(false)

    if (!response.ok) {
      setError(data.error ?? 'Nao foi possivel enviar o link agora.')
      return
    }

    setMessage(data.message ?? 'Se esse e-mail estiver cadastrado, enviaremos o link.')
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <label className="grid gap-2 text-sm font-medium text-slate-800">
        E-mail cadastrado
        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="rounded-2xl border border-line bg-white px-4 py-3 outline-none transition focus:border-accent"
        />
      </label>

      {error ? <p className="text-sm text-rose-700">{error}</p> : null}
      {message ? <p className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-800">{message}</p> : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? 'Enviando...' : 'Enviar link de redefinicao'}
      </button>

      <p className="text-sm text-slate-600">
        Lembrou a senha?{' '}
        <Link href="/login" className="font-semibold text-accent">
          Entrar
        </Link>
      </p>
    </form>
  )
}
