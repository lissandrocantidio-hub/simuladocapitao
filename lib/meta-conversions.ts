import { createHash } from 'crypto'

const META_CAPI_TIMEOUT_MS = 5000

type MetaConversionsResult =
  | {
      ok: true
      skipped: false
    }
  | {
      ok: false
      skipped: false
      error: string
    }
  | {
      ok: true
      skipped: true
      reason: string
    }

function getMetaPixelId() {
  return process.env.META_PIXEL_ID ?? process.env.NEXT_PUBLIC_META_PIXEL_ID ?? ''
}

function getMetaGraphApiVersion() {
  return process.env.META_GRAPH_API_VERSION ?? 'v24.0'
}

function hashEmail(email: string) {
  return createHash('sha256').update(email.toLowerCase().trim()).digest('hex')
}

async function postMetaEvent(pixelId: string, accessToken: string, body: unknown) {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), META_CAPI_TIMEOUT_MS)

  try {
    return await fetch(`https://graph.facebook.com/${getMetaGraphApiVersion()}/${pixelId}/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      signal: controller.signal,
    })
  } finally {
    clearTimeout(timeout)
  }
}

export async function sendMetaPurchaseEvent(input: {
  email?: string | null
  eventId: string
  value: number
  currency: string
  eventTime?: number
}): Promise<MetaConversionsResult> {
  const pixelId = getMetaPixelId()
  const accessToken = process.env.META_CAPI_ACCESS_TOKEN

  if (!pixelId || !accessToken) {
    return {
      ok: true,
      skipped: true,
      reason: 'meta-capi-not-configured',
    }
  }

  const userData = input.email
    ? {
        em: [hashEmail(input.email)],
      }
    : {}

  const body = {
    data: [
      {
        event_name: 'Purchase',
        event_time: input.eventTime ?? Math.floor(Date.now() / 1000),
        event_id: input.eventId,
        action_source: 'website',
        user_data: userData,
        custom_data: {
          value: input.value,
          currency: input.currency,
        },
      },
    ],
    access_token: accessToken,
  }

  let lastError = 'meta-capi-request-failed'

  for (let attempt = 1; attempt <= 2; attempt += 1) {
    try {
      const response = await postMetaEvent(pixelId, accessToken, body)

      if (response.ok) {
        return {
          ok: true,
          skipped: false,
        }
      }

      const errorText = await response.text().catch(() => '')
      lastError = errorText || `meta-capi-http-${response.status}`

      if (response.status >= 400 && response.status < 500 && response.status !== 429) {
        break
      }
    } catch (error) {
      lastError = error instanceof Error ? error.message : 'meta-capi-network-error'
    }
  }

  return {
    ok: false,
    skipped: false,
    error: lastError,
  }
}
