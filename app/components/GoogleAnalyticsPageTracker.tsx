'use client'

import { useEffect, useRef } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { GA_ID, pageview } from '@/lib/google-analytics'

export default function GoogleAnalyticsPageTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const lastTrackedUrl = useRef<string | null>(null)
  const skippedInitialPageview = useRef(false)

  useEffect(() => {
    if (!GA_ID) {
      return
    }

    const query = searchParams.toString()
    const currentUrl = query ? `${pathname}?${query}` : pathname

    if (lastTrackedUrl.current === currentUrl) {
      return
    }

    lastTrackedUrl.current = currentUrl

    if (!skippedInitialPageview.current) {
      skippedInitialPageview.current = true
      return
    }

    pageview(currentUrl)
  }, [pathname, searchParams])

  return null
}
