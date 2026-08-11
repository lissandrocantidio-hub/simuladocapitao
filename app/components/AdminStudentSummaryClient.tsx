'use client'

import { useEffect, useState } from 'react'
import AdminStudentSummaryPanel from '@/app/components/AdminStudentSummaryPanel'
import type { AdminStudentSummary } from '@/lib/admin'

type AdminStudentSummaryClientProps = {
  initialSummary: AdminStudentSummary
}

const REFRESH_INTERVAL_MS = 60 * 1000

export default function AdminStudentSummaryClient({
  initialSummary,
}: AdminStudentSummaryClientProps) {
  const [summary, setSummary] = useState(initialSummary)
  const [onlineFilter, setOnlineFilter] = useState<'all' | 'premium'>('all')

  useEffect(() => {
    let isActive = true

    async function refreshSummary() {
      try {
        const response = await fetch('/api/admin/summary', {
          cache: 'no-store',
          credentials: 'same-origin',
        })

        if (!response.ok) {
          return
        }

        const nextSummary = (await response.json()) as AdminStudentSummary

        if (isActive) {
          setSummary(nextSummary)
        }
      } catch {
        // Keep the last successful snapshot on transient failures.
      }
    }

    const intervalId = window.setInterval(() => {
      void refreshSummary()
    }, REFRESH_INTERVAL_MS)

    void refreshSummary()

    return () => {
      isActive = false
      window.clearInterval(intervalId)
    }
  }, [])

  return (
    <AdminStudentSummaryPanel
      summary={summary}
      onlineFilter={onlineFilter}
      onOnlineFilterChange={setOnlineFilter}
    />
  )
}
