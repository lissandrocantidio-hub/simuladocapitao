'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const HEARTBEAT_INTERVAL_MS = 60 * 1000
const MIN_HEARTBEAT_GAP_MS = 30 * 1000

export default function PresenceHeartbeat() {
  const pathname = usePathname()

  useEffect(() => {
    let lastHeartbeatAt = 0

    async function sendHeartbeat(force = false) {
      const now = Date.now()

      if (!force && now - lastHeartbeatAt < MIN_HEARTBEAT_GAP_MS) {
        return
      }

      lastHeartbeatAt = now

      try {
        await fetch('/api/presence', {
          method: 'POST',
          credentials: 'same-origin',
          cache: 'no-store',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            path: pathname,
          }),
        })
      } catch {
        // Ignore transient heartbeat failures.
      }
    }

    function handleVisibilityChange() {
      if (document.visibilityState === 'visible') {
        void sendHeartbeat(true)
      }
    }

    void sendHeartbeat(true)

    const intervalId = window.setInterval(() => {
      if (document.visibilityState === 'visible') {
        void sendHeartbeat()
      }
    }, HEARTBEAT_INTERVAL_MS)

    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      window.clearInterval(intervalId)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [pathname])

  return null
}
