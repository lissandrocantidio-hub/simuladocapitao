export function isTrackingAuditLogsEnabled(flag = process.env.TRACKING_AUDIT_LOGS) {
  return flag === 'true'
}

export function trackingAuditLog(
  level: 'info' | 'warn',
  message: string,
  payload?: unknown,
  enabled?: boolean
) {
  const shouldLog =
    typeof enabled === 'boolean' ? enabled : isTrackingAuditLogsEnabled()

  if (!shouldLog) {
    return
  }

  if (level === 'warn') {
    console.warn(message, payload)
    return
  }

  console.info(message, payload)
}
