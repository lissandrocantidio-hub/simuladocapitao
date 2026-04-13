'use client'

import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { FormEvent, useState } from 'react'
import { signIn } from 'next-auth/react'

export default function RegisterForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('next') || '/comprar'
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)
    const payload = {
      name: String(formData.get('name') ?? ''),
      email: String(formData.get('email') ?? ''),
      password: String(formData.get('password') ?? ''),
    }

    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    const data = (await response.json().catch(() => ({}))) as { error?: string }

    if (!response.ok) {
      setIsSubmitting(false)
      setError(data.error ?? 'Nao foi possivel criar a conta.')
      return
    }

    const signInResult = await signIn('credentials', {
      email: payload.email,
      password: payload.password,
      redirect: false,
      callbackUrl,
    })

    setIsSubmitting(false)

    if (!signInResult || signInResult.error) {
      setError('Conta criada, mas nao consegui fazer seu login automaticamente.')
      return
    }

    router.push(signInResult.url ?? callbackUrl)
    router.refresh()
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <label className="grid gap-2 text-sm font-medium text-slate-800">
        Nome
        <input
          type="text"
          name="name"
          required
          minLength={2}
          className="rounded-2xl border border-line bg-white px-4 py-3 outline-none transition focus:border-accent"
        />
      </label>

      <label className="grid gap-2 text-sm font-medium text-slate-800">
        E-mail
        <input
          type="email"
          name="email"
          required
          className="rounded-2xl border border-line bg-white px-4 py-3 outline-none transition focus:border-accent"
        />
      </label>

      <label className="grid gap-2 text-sm font-medium text-slate-800">
        Senha
        <input
          type="password"
          name="password"
          required
          minLength={6}
          className="rounded-2xl border border-line bg-white px-4 py-3 outline-none transition focus:border-accent"
        />
      </label>

      {error ? <p className="text-sm text-rose-700">{error}</p> : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? 'Criando conta...' : 'Criar conta'}
      </button>

      <p className="text-sm text-slate-600">
        Ja tem acesso?{' '}
        <Link href={`/login?next=${encodeURIComponent(callbackUrl)}`} className="font-semibold text-accent">
          Entrar
        </Link>
      </p>
    </form>
  )
}
