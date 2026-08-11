'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

export default function ResetPasswordForm({ token }: { token: string }) {
  const router = useRouter()
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')
    setSuccess('')
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)
    const password = String(formData.get('password') ?? '')
    const passwordConfirmation = String(formData.get('passwordConfirmation') ?? '')

    if (password !== passwordConfirmation) {
      setIsSubmitting(false)
      setError('As senhas nao conferem.')
      return
    }

    const response = await fetch('/api/password/reset', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token, password }),
    })

    const data = (await response.json().catch(() => ({}))) as { error?: string }

    setIsSubmitting(false)

    if (!response.ok) {
      setError(data.error ?? 'Nao foi possivel redefinir a senha.')
      return
    }

    setSuccess('Senha redefinida. Voce ja pode entrar com a nova senha.')
    setTimeout(() => router.push('/login'), 1200)
  }

  if (!token) {
    return (
      <div className="grid gap-4 text-sm text-slate-700">
        <p>O link de redefinicao esta incompleto. Solicite um novo link.</p>
        <Link href="/esqueci-senha" className="font-semibold text-accent">
          Solicitar novo link
        </Link>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <label className="grid gap-2 text-sm font-medium text-slate-800">
        Nova senha
        <input
          type="password"
          name="password"
          required
          minLength={6}
          className="rounded-2xl border border-line bg-white px-4 py-3 outline-none transition focus:border-accent"
        />
      </label>

      <label className="grid gap-2 text-sm font-medium text-slate-800">
        Confirmar nova senha
        <input
          type="password"
          name="passwordConfirmation"
          required
          minLength={6}
          className="rounded-2xl border border-line bg-white px-4 py-3 outline-none transition focus:border-accent"
        />
      </label>

      {error ? <p className="text-sm text-rose-700">{error}</p> : null}
      {success ? <p className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-800">{success}</p> : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? 'Salvando...' : 'Salvar nova senha'}
      </button>
    </form>
  )
}
