declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? ''

function canTrack() {
  return typeof window !== 'undefined' && typeof window.fbq === 'function' && Boolean(META_PIXEL_ID)
}

export function pageview() {
  if (!canTrack()) {
    return
  }

  window.fbq?.('track', 'PageView')
}

export function event(name: string, options?: Record<string, unknown>) {
  if (!canTrack()) {
    return
  }

  if (options) {
    window.fbq?.('track', name, options)
    return
  }

  window.fbq?.('track', name)
}
