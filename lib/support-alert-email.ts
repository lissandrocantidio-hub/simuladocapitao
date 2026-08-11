const resendApiUrl = 'https://api.resend.com/emails'
const productSenderName = 'Simulado Capitao'

function getFromEmail() {
  const configuredFrom = process.env.RESEND_FROM_EMAIL

  if (!configuredFrom) {
    return null
  }

  const match = configuredFrom.match(/<([^>]+)>/)
  return (match?.[1] ?? configuredFrom).trim()
}

function buildFromAddress(displayName: string) {
  const fromEmail = getFromEmail()

  if (!fromEmail) {
    return null
  }

  return `${displayName} <${fromEmail}>`
}

function getAdminEmails() {
  return (process.env.SUPPORT_ALERT_EMAILS || process.env.ADMIN_EMAILS || '')
    .split(',')
    .map((email) => email.trim())
    .filter(Boolean)
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export async function sendSupportAlertEmail(input: {
  reason: string
  message: string
  pageUrl: string | null
  userEmail: string | null
  userName: string | null
  contactWhatsApp?: string | null
  aiAnswer?: string | null
}) {
  const from = buildFromAddress(productSenderName)
  const recipients = getAdminEmails()

  if (!process.env.RESEND_API_KEY || !from || recipients.length === 0) {
    return { ok: false as const, skipped: true as const, error: 'missing-email-config' }
  }

  const html = `
    <div style="font-family: Arial, sans-serif; color: #102033; line-height: 1.6;">
      <h1 style="margin-bottom: 8px;">Alerta de suporte</h1>
      <p><strong>Motivo:</strong> ${escapeHtml(input.reason)}</p>
      <p><strong>Aluno:</strong> ${escapeHtml(input.userName || 'Nao identificado')}</p>
      <p><strong>E-mail:</strong> ${escapeHtml(input.userEmail || 'Nao informado')}</p>
      <p><strong>WhatsApp:</strong> ${escapeHtml(input.contactWhatsApp || 'Nao informado')}</p>
      <p><strong>Pagina:</strong> ${input.pageUrl ? `<a href="${escapeHtml(input.pageUrl)}">${escapeHtml(input.pageUrl)}</a>` : 'Nao informada'}</p>
      <h2 style="margin-top: 22px; margin-bottom: 8px;">Mensagem do aluno</h2>
      <p style="white-space: pre-wrap;">${escapeHtml(input.message)}</p>
      ${
        input.aiAnswer
          ? `<h2 style="margin-top: 22px; margin-bottom: 8px;">Resposta da IA</h2><p style="white-space: pre-wrap;">${escapeHtml(input.aiAnswer)}</p>`
          : ''
      }
    </div>
  `

  const response = await fetch(resendApiUrl, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: recipients,
      subject: `Suporte Simulado Capitao - ${input.reason}`,
      html,
    }),
  })

  if (!response.ok) {
    const errorText = await response.text().catch(() => 'support-alert-send-failed')
    return { ok: false as const, skipped: false as const, error: errorText }
  }

  return { ok: true as const, skipped: false as const }
}
