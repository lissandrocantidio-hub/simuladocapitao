const resendApiUrl = 'https://api.resend.com/emails'
const productSenderName = 'Simulado Capitao'

function getAppUrl() {
  return process.env.NEXT_PUBLIC_APP_URL || process.env.APP_URL || 'https://simuladocapitao.com.br'
}

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

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

function buildResetHtml(input: {
  name: string
  resetUrl: string
}) {
  return `
    <div style="font-family: Arial, sans-serif; color: #102033; line-height: 1.6; max-width: 620px;">
      <h1 style="margin-bottom: 8px;">Redefinir senha</h1>
      <p>Olá, ${escapeHtml(input.name)}.</p>
      <p>Recebemos uma solicitação para redefinir a senha da sua conta no Simulado Capitao.</p>
      <p>
        <a
          href="${escapeHtml(input.resetUrl)}"
          style="display: inline-block; margin-top: 12px; padding: 14px 22px; border-radius: 999px; background: #102033; color: #ffffff; text-decoration: none; font-weight: 700;"
        >
          Criar nova senha
        </a>
      </p>
      <p>Esse link vale por 1 hora. Se você não pediu a redefinição, pode ignorar este e-mail.</p>
      <p>Link direto: <a href="${escapeHtml(input.resetUrl)}">${escapeHtml(input.resetUrl)}</a></p>
    </div>
  `
}

export async function sendPasswordResetEmail(input: {
  to: string
  name: string
  token: string
}) {
  const from = buildFromAddress(productSenderName)

  if (!process.env.RESEND_API_KEY || !from) {
    console.error('[password-reset] missing Resend configuration', {
      hasApiKey: Boolean(process.env.RESEND_API_KEY),
      hasFrom: Boolean(from),
    })
    return { ok: false as const, skipped: true as const, error: 'missing-email-config' }
  }

  const resetUrl = `${getAppUrl()}/redefinir-senha?token=${encodeURIComponent(input.token)}`
  const response = await fetch(resendApiUrl, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [input.to],
      subject: 'Redefina sua senha - Simulado Capitao',
      html: buildResetHtml({
        name: input.name,
        resetUrl,
      }),
    }),
  })

  if (!response.ok) {
    const errorText = await response.text().catch(() => 'password-reset-send-failed')
    console.error('[password-reset] Resend rejected message', {
      status: response.status,
      error: errorText,
    })
    return { ok: false as const, skipped: false as const, error: errorText }
  }

  return { ok: true as const, skipped: false as const }
}
