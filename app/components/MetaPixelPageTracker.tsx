'use client'

import { useEffect, useRef } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { META_PIXEL_ID, pageview } from '@/lib/meta-pixel'

export default function MetaPixelPageTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const lastTrackedUrl = useRef<string | null>(null)
  const skippedInitialPageview = useRef(false)

  useEffect(() => {
    if (!META_PIXEL_ID) {
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

    pageview()
  }, [pathname, searchParams])

  return null
}
