declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID?.trim() || 'G-JDESJ27QTX'

function canTrack() {
  return typeof window !== 'undefined' && typeof window.gtag === 'function' && Boolean(GA_ID)
}

export function pageview(url: string) {
  if (!canTrack()) {
    return
  }

  window.gtag?.('config', GA_ID, {
    page_path: url,
  })
}

export function event(action: string, params?: Record<string, unknown>) {
  if (!canTrack()) {
    return
  }

  window.gtag?.('event', action, params)
}

export function trackBeginCheckout() {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return
  }

  window.gtag('event', 'begin_checkout', {
    currency: 'BRL',
    items: [
      {
        item_name: 'Simulado Capitao Amador',
        quantity: 1,
      },
    ],
  })
}
