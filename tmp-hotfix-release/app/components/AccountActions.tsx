'use client'

import { signOut } from 'next-auth/react'

export default function AccountActions() {
  return (
    <button
      type="button"
      onClick={() => signOut({ callbackUrl: '/' })}
      className="rounded-full border border-line px-4 py-2 text-sm font-semibold text-slate-800 transition hover:bg-white"
    >
      Sair
    </button>
  )
}
