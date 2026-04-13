'use client'

import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { FormEvent, useState } from 'react'
import { signIn } from 'next-auth/react'

export default function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('next') || '/minha-conta'
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)
    const email = String(formData.get('email') ?? '')
    const password = String(formData.get('password') ?? '')

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
      callbackUrl,
    })

    setIsSubmitting(false)

    if (!result || result.error) {
      setError('E-mail ou senha invalidos.')
      return
    }

    router.push(result.url ?? callbackUrl)
    router.refresh()
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
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
        {isSubmitting ? 'Entrando...' : 'Entrar'}
      </button>

      <p className="text-sm text-slate-600">
        Ainda nao tem conta?{' '}
        <Link href={`/cadastro?next=${encodeURIComponent(callbackUrl)}`} className="font-semibold text-accent">
          Criar acesso
        </Link>
      </p>
    </form>
  )
}
