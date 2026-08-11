'use client'

import { useEffect, useRef } from 'react'
import { trackingAuditLog } from '@/lib/tracking-audit'

let hasTrackedPurchase = false

type PaymentConfirmation = {
  approved?: boolean
  value?: number
  currency?: string
  paymentId?: string
  eventId?: string
  error?: string
}

const GOOGLE_ADS_PURCHASE_LABEL =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_PURCHASE_LABEL?.trim() ||
  'AW-18088053928/AzK9CI_wwZ0cEKiZh7FD'

async function waitForGtag(maxAttempts = 20, delayMs = 250) {
  for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      return true
    }

    await new Promise((resolve) => {
      window.setTimeout(resolve, delayMs)
    })
  }

  return false
}

export default function MetaPurchaseEvent({
  email,
  paymentId,
  status,
  auditLogsEnabled = false,
}: {
  email?: string
  paymentId?: string
  status?: string
  auditLogsEnabled?: boolean
}) {
  const hasRun = useRef(false)

  useEffect(() => {
    console.log(`Tracking audit mode: ${auditLogsEnabled ? 'ON' : 'OFF'}`)
    trackingAuditLog(
      'info',
      '[tracking:audit:client] init',
      {
        paymentIdFromUrl: paymentId ?? null,
        statusFromUrl: status ?? null,
        hasRun: hasRun.current,
        hasTrackedPurchase,
      },
      auditLogsEnabled
    )

    if (!email || !paymentId || hasRun.current || hasTrackedPurchase) {
      trackingAuditLog(
        'info',
        '[tracking:audit:client] skipped-before-confirm',
        {
          reason: !email
            ? 'missing-email'
            : !paymentId
              ? 'missing-paymentId'
              : hasRun.current
                ? 'already-ran'
                : 'already-tracked',
          paymentIdFromUrl: paymentId ?? null,
          statusFromUrl: status ?? null,
        },
        auditLogsEnabled
      )
      return
    }

    hasRun.current = true
    const confirmedEmail = email
    const confirmedPaymentId = paymentId

    async function confirmAndTrackPurchase() {
      const response = await fetch(
        `/api/payment/confirm?payment_id=${encodeURIComponent(confirmedPaymentId)}&email=${encodeURIComponent(confirmedEmail)}`,
        {
          cache: 'no-store',
        }
      )

      if (!response.ok) {
        trackingAuditLog(
          'warn',
          '[tracking:audit:client] confirm-http-failed',
          {
            paymentIdFromUrl: confirmedPaymentId,
            statusFromUrl: status ?? null,
            httpStatus: response.status,
          },
          auditLogsEnabled
        )
        return
      }

      const confirmation = (await response.json().catch(() => ({}))) as PaymentConfirmation
      trackingAuditLog(
        'info',
        '[tracking:audit:client] confirm-response',
        {
          paymentIdFromUrl: confirmedPaymentId,
          statusFromUrl: status ?? null,
          confirmation,
        },
        auditLogsEnabled
      )

      if (!confirmation.approved || typeof window === 'undefined') {
        trackingAuditLog(
          'info',
          '[tracking:audit:client] skipped-after-confirm',
          {
            reason: !confirmation.approved ? 'not-approved' : 'window-undefined',
            paymentIdFromUrl: confirmedPaymentId,
            statusFromUrl: status ?? null,
            confirmation,
          },
          auditLogsEnabled
        )
        return
      }

      const transactionId = String(
        confirmation.eventId ||
          (confirmation.paymentId ? `mp_${confirmation.paymentId}` : `mp_${Date.now()}`)
      ).trim()

      if (!transactionId) {
        trackingAuditLog(
          'info',
          '[tracking:audit:client] skipped-empty-transaction-id',
          {
            paymentIdFromUrl: confirmedPaymentId,
            confirmation,
          },
          auditLogsEnabled
        )
        return
      }

      const storageKey = `meta_purchase_${confirmation.eventId || transactionId}`

      if (window.sessionStorage.getItem(storageKey)) {
        trackingAuditLog(
          'info',
          '[tracking:audit:client] skipped-session-duplicate',
          {
            paymentIdFromUrl: confirmedPaymentId,
            statusFromUrl: status ?? null,
            storageKey,
            transaction_id: transactionId,
          },
          auditLogsEnabled
        )
        return
      }

      let trackedPurchase = false
      const decisions = {
        metaPixel: false,
        googleAdsConversion: false,
        ga4Purchase: false,
      }

      if (window.fbq && confirmation.eventId) {
        window.fbq(
          'track',
          'Purchase',
          {
            value: confirmation.value ?? 0,
            currency: confirmation.currency ?? 'BRL',
          },
          {
            eventID: confirmation.eventId,
          }
        )
        trackedPurchase = true
        decisions.metaPixel = true
      }

      const gtagReady = await waitForGtag()

      if (gtagReady && window.gtag) {
        try {
          if (GOOGLE_ADS_PURCHASE_LABEL) {
            window.gtag('event', 'conversion', {
              send_to: GOOGLE_ADS_PURCHASE_LABEL,
              value: confirmation.value ?? 0,
              currency: confirmation.currency ?? 'BRL',
              transaction_id: transactionId,
            })
            decisions.googleAdsConversion = true
          }

          window.gtag('event', 'purchase', {
            transaction_id: transactionId,
            value: confirmation.value ?? 0,
            currency: confirmation.currency ?? 'BRL',
            items: [
              {
                item_name: 'Simulado Capitão Amador',
                price: confirmation.value ?? 0,
                quantity: 1,
              },
            ],
          })
          console.log('GA4 purchase fired', {
            transaction_id: transactionId,
            value: confirmation.value ?? 0,
          })
          decisions.ga4Purchase = true
          trackedPurchase = true
        } catch (error) {
          console.error('[tracking] gtag purchase/conversion failed', error)
        }
      } else {
        console.warn('[tracking] gtag unavailable for purchase event', {
          transaction_id: transactionId,
        })
      }

      trackingAuditLog(
        'info',
        '[tracking:audit:client] tracking-decision',
        {
          paymentIdFromUrl: confirmedPaymentId,
          statusFromUrl: status ?? null,
          approvedFinal: confirmation.approved ?? false,
          transaction_id: transactionId,
          eventId: confirmation.eventId ?? null,
          decisions,
        },
        auditLogsEnabled
      )

      if (trackedPurchase) {
        window.sessionStorage.setItem(storageKey, '1')
        hasTrackedPurchase = true
      }
    }

    void confirmAndTrackPurchase()
  }, [auditLogsEnabled, email, paymentId, status])

  return null
}

