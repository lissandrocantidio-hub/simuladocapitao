import { accessPlan, formatPriceInReais, supportEmail } from '@/lib/billing'

const resendApiUrl = 'https://api.resend.com/emails'

function getAppUrl() {
  return process.env.NEXT_PUBLIC_APP_URL || process.env.APP_URL || 'https://simuladocapitao.com.br'
}

function buildHtml(input: {
  buyerEmail: string
  paymentId: string | null
  amountCents: number
}) {
  const appUrl = getAppUrl()
  const expiresAt = new Intl.DateTimeFormat('pt-BR').format(
    new Date(Date.now() + accessPlan.durationDays * 24 * 60 * 60 * 1000)
  )

  return `
    <div style="font-family: Arial, sans-serif; color: #102033; line-height: 1.6;">
      <h1 style="margin-bottom: 8px;">Compra confirmada</h1>
      <p>Recebemos o seu pagamento e o acesso premium ja esta liberado.</p>
      <p><strong>E-mail da compra:</strong> ${input.buyerEmail}</p>
      <p><strong>Valor:</strong> ${formatPriceInReais(input.amountCents)}</p>
      <p><strong>Validade:</strong> ${accessPlan.durationDays} dias, ate ${expiresAt}</p>
      ${
        input.paymentId
          ? `<p><strong>Referencia do pagamento:</strong> ${input.paymentId}</p>`
          : ''
      }
      <h2 style="margin-top: 24px; margin-bottom: 8px;">Acessos liberados</h2>
      <ul>
        <li>Capitao-Amador</li>
        <li>Arrais-Amador</li>
        <li>Mestre-Amador</li>
      </ul>
      <p>Para entrar novamente, use o mesmo e-mail da compra ou sua conta em <a href="${appUrl}/minha-conta">${appUrl}/minha-conta</a>.</p>
      <p>Se precisar de ajuda, fale com <a href="mailto:${supportEmail}">${supportEmail}</a>.</p>
    </div>
  `
}

export async function sendPurchaseConfirmationEmail(input: {
  buyerEmail: string
  paymentId: string | null
  amountCents: number
}) {
  if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM_EMAIL) {
    return { ok: false as const, skipped: true as const, error: 'missing-email-config' }
  }

  const response = await fetch(resendApiUrl, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: process.env.RESEND_FROM_EMAIL,
      to: [input.buyerEmail],
      subject: 'Compra confirmada - Simulado Capitao',
      html: buildHtml(input),
    }),
  })

  if (!response.ok) {
    const errorText = await response.text().catch(() => 'email-send-failed')
    return { ok: false as const, skipped: false as const, error: errorText }
  }

  return { ok: true as const, skipped: false as const }
}
