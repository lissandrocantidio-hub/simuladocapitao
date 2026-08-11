'use client'

import { FormEvent, useEffect, useMemo, useState } from 'react'

type AdminCoupon = {
  id: string
  code: string
  percentOff: number
  description: string | null
  isActive: boolean
  createdAt: string | Date
  updatedAt: string | Date
}

type AdminCouponsManagerProps = {
  initialCoupons: AdminCoupon[]
}

function formatDate(value: string | Date) {
  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(new Date(value))
}

export default function AdminCouponsManager({ initialCoupons }: AdminCouponsManagerProps) {
  const [coupons, setCoupons] = useState(initialCoupons)
  const [code, setCode] = useState('')
  const [percentOff, setPercentOff] = useState(20)
  const [description, setDescription] = useState('')
  const [isActive, setIsActive] = useState(true)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [updatingCouponId, setUpdatingCouponId] = useState<string | null>(null)

  useEffect(() => {
    setCoupons(initialCoupons)
  }, [initialCoupons])

  const sortedCoupons = useMemo(
    () =>
      [...coupons].sort((left, right) => {
        if (left.isActive === right.isActive) {
          return new Date(right.createdAt).getTime() - new Date(left.createdAt).getTime()
        }

        return left.isActive ? -1 : 1
      }),
    [coupons]
  )

  async function refreshCoupons() {
    const response = await fetch('/api/admin/coupons', {
      cache: 'no-store',
      credentials: 'same-origin',
    })

    if (!response.ok) {
      return
    }

    const data = (await response.json()) as { coupons?: AdminCoupon[] }
    setCoupons(data.coupons ?? [])
  }

  async function handleCreateCoupon(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')
    setSuccess('')
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/admin/coupons', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code,
          percentOff,
          description,
          isActive,
        }),
      })

      const data = (await response.json().catch(() => ({}))) as { error?: string }

      if (!response.ok) {
        setError(data.error ?? 'Nao foi possivel criar o cupom.')
        return
      }

      setCode('')
      setPercentOff(20)
      setDescription('')
      setIsActive(true)
      setSuccess('Cupom criado com sucesso.')
      await refreshCoupons()
    } finally {
      setIsSubmitting(false)
    }
  }

  async function handleToggleCoupon(coupon: AdminCoupon) {
    setError('')
    setSuccess('')
    setUpdatingCouponId(coupon.id)

    try {
      const response = await fetch(`/api/admin/coupons/${coupon.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          isActive: !coupon.isActive,
        }),
      })

      const data = (await response.json().catch(() => ({}))) as { error?: string }

      if (!response.ok) {
        setError(data.error ?? 'Nao foi possivel atualizar o cupom.')
        return
      }

      setSuccess(`Cupom ${coupon.code} ${coupon.isActive ? 'desativado' : 'ativado'} com sucesso.`)
      await refreshCoupons()
    } finally {
      setUpdatingCouponId(null)
    }
  }

  return (
    <section className="rounded-[2rem] border border-emerald-200 bg-[linear-gradient(180deg,rgba(240,253,250,1),rgba(255,255,255,1))] p-6 shadow-[0_18px_40px_rgba(16,32,51,0.08)]">
      <div className="flex flex-col gap-2">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
          Cupons de desconto
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
          Gestao de cupons
        </h2>
        <p className="max-w-3xl text-sm leading-7 text-slate-700">
          Crie cupons para campanhas e ligue/desligue quando precisar, sem alterar codigo.
        </p>
      </div>

      <form onSubmit={handleCreateCoupon} className="mt-5 grid gap-3 rounded-2xl border border-emerald-100 bg-white p-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-slate-800">
          Codigo
          <input
            value={code}
            onChange={(event) => setCode(event.target.value.toUpperCase())}
            required
            minLength={3}
            maxLength={40}
            className="rounded-xl border border-line bg-white px-3 py-2 uppercase outline-none transition focus:border-emerald-500"
            placeholder="EX: TESTE100"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-slate-800">
          Desconto (%)
          <input
            value={percentOff}
            onChange={(event) => setPercentOff(Number(event.target.value))}
            type="number"
            required
            min={1}
            max={99}
            className="rounded-xl border border-line bg-white px-3 py-2 outline-none transition focus:border-emerald-500"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-slate-800 md:col-span-2">
          Descricao (opcional)
          <input
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            maxLength={200}
            className="rounded-xl border border-line bg-white px-3 py-2 outline-none transition focus:border-emerald-500"
            placeholder="Cupom para campanha X"
          />
        </label>
        <p className="text-xs text-slate-500 md:col-span-2">
          Limite de desconto: 99% (checkout com 100% OFF pode falhar no provedor de pagamento).
        </p>

        <label className="flex items-center gap-2 text-sm text-slate-700 md:col-span-2">
          <input
            type="checkbox"
            checked={isActive}
            onChange={(event) => setIsActive(event.target.checked)}
          />
          Criar cupom ja ativo
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-70 md:col-span-2 md:justify-self-start"
        >
          {isSubmitting ? 'Criando cupom...' : 'Criar cupom'}
        </button>
      </form>

      {error ? <p className="mt-3 text-sm text-rose-700">{error}</p> : null}
      {success ? <p className="mt-3 text-sm text-emerald-700">{success}</p> : null}

      <div className="mt-5 grid gap-3">
        {sortedCoupons.length === 0 ? (
          <p className="rounded-2xl border border-line bg-white px-4 py-3 text-sm text-slate-700">
            Nenhum cupom cadastrado ainda.
          </p>
        ) : (
          sortedCoupons.map((coupon) => (
            <article
              key={coupon.id}
              className="flex flex-col gap-3 rounded-2xl border border-emerald-100 bg-white px-4 py-3 md:flex-row md:items-center md:justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-semibold text-slate-950">{coupon.code}</p>
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                      coupon.isActive
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {coupon.isActive ? 'Ativo' : 'Inativo'}
                  </span>
                  <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-700">
                    {coupon.percentOff}% OFF
                  </span>
                </div>
                <p className="mt-1 text-sm text-slate-700">
                  {coupon.description || 'Sem descricao'}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-slate-500">
                  Criado em {formatDate(coupon.createdAt)}
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  void handleToggleCoupon(coupon)
                }}
                disabled={updatingCouponId === coupon.id}
                className="rounded-full border border-line px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {updatingCouponId === coupon.id
                  ? 'Salvando...'
                  : coupon.isActive
                    ? 'Desativar'
                    : 'Ativar'}
              </button>
            </article>
          ))
        )}
      </div>
    </section>
  )
}
