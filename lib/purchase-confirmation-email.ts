import { accessPlan, formatPriceInReais, supportEmail } from '@/lib/billing'

const resendApiUrl = 'https://api.resend.com/emails'
const productSenderName = 'Simulado Capitão'

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
      <p>Recebemos o seu pagamento e o acesso premium já está liberado.</p>
      <p><strong>E-mail da compra:</strong> ${input.buyerEmail}</p>
      <p><strong>Valor:</strong> ${formatPriceInReais(input.amountCents)}</p>
      <p><strong>Validade:</strong> ${accessPlan.durationDays} dias, até ${expiresAt}</p>
      ${
        input.paymentId
          ? `<p><strong>Referência do pagamento:</strong> ${input.paymentId}</p>`
          : ''
      }
      <h2 style="margin-top: 24px; margin-bottom: 8px;">Acessos liberados</h2>
      <ul>
        <li>Capitão-Amador</li>
        <li>Arrais-Amador</li>
        <li>Mestre-Amador</li>
      </ul>
      <p>Para entrar novamente, use o mesmo e-mail da compra ou sua conta em <a href="${appUrl}/minha-conta">${appUrl}/minha-conta</a>.</p>
      <p>Se precisar de ajuda, fale com <a href="mailto:${supportEmail}">${supportEmail}</a>.</p>
    </div>
  `
}

function buildPendingCheckoutHtml(input: {
  buyerEmail: string
  checkoutUrl: string
  coupon?: {
    code: string
    percentOff: number
  } | null
  originalPriceCents?: number
  finalPriceCents?: number
}) {
  const appUrl = getAppUrl()
  const hasCoupon = Boolean(input.coupon && input.finalPriceCents)
  const finalPrice = input.finalPriceCents ?? accessPlan.priceCents
  const originalPrice = input.originalPriceCents ?? accessPlan.priceCents

  return `
    <div style="font-family: Arial, sans-serif; color: #102033; line-height: 1.6; max-width: 620px;">
      <p style="margin: 0 0 10px; color: #2563eb; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; font-size: 12px;">Convite para continuar</p>
      <h1 style="margin: 0 0 12px; font-size: 28px; line-height: 1.2;">Seu acesso premium ficou reservado por aqui</h1>
      <p>Você começou a ativação do Simulado Capitão, mas o pagamento ainda não foi concluído. Se a prova está chegando, este é um bom momento para garantir o treino completo e seguir estudando com foco.</p>
      ${
        hasCoupon
          ? `<div style="margin: 18px 0; padding: 16px; border-radius: 16px; background: #eff6ff; border: 1px solid #bfdbfe;">
              <p style="margin: 0 0 6px; font-weight: 700; color: #1d4ed8;">Cupom especial aplicado</p>
              <p style="margin: 0;">Use o cupom <strong>${input.coupon!.code}</strong> e finalize por <strong>${formatPriceInReais(finalPrice)}</strong> em vez de ${formatPriceInReais(originalPrice)}.</p>
            </div>`
          : `<div style="margin: 18px 0; padding: 16px; border-radius: 16px; background: #f8fafc; border: 1px solid #e2e8f0;">
              <p style="margin: 0;">Acesso premium completo por <strong>${formatPriceInReais(finalPrice)}</strong>, válido por ${accessPlan.durationDays} dias.</p>
            </div>`
      }
      <p>Com o acesso premium você treina Capitão-Amador, Arrais-Amador e Mestre-Amador, acompanha seu desempenho e volta aos simulados quantas vezes precisar durante o período do plano.</p>
      <p>
        <a
          href="${input.checkoutUrl}"
          style="display: inline-block; margin-top: 12px; padding: 14px 22px; border-radius: 999px; background: #102033; color: #ffffff; text-decoration: none; font-weight: 700;"
        >
          Finalizar com Mercado Pago
        </a>
      </p>
      <p>Assim que o Mercado Pago aprovar, o acesso será liberado automaticamente para este e-mail: <strong>${input.buyerEmail}</strong>.</p>
      <p>Se preferir, também pode voltar pela página de compra: <a href="${appUrl}/comprar?email=${encodeURIComponent(input.buyerEmail)}">${appUrl}/comprar?email=${encodeURIComponent(input.buyerEmail)}</a>.</p>
      <p>Se precisar de ajuda, fale com <a href="mailto:${supportEmail}">${supportEmail}</a>.</p>
    </div>
  `
}

function getPurchaseAlertEmails() {
  const configuredEmails = process.env.PURCHASE_ALERT_EMAILS || 'lissandrocantidio@gmail.com'

  return configuredEmails
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

function buildAdminNotificationHtml(input: {
  buyerEmail: string
  paymentId: string | null
  amountCents: number
  currency: string
}) {
  const appUrl = getAppUrl()

  return `
    <div style="font-family: Arial, sans-serif; color: #102033; line-height: 1.6;">
      <h1 style="margin-bottom: 8px;">Nova compra aprovada</h1>
      <p>Uma nova compra foi confirmada pelo webhook do Mercado Pago.</p>
      <p><strong>E-mail do comprador:</strong> ${escapeHtml(input.buyerEmail)}</p>
      <p><strong>Valor:</strong> ${formatPriceInReais(input.amountCents)}</p>
      <p><strong>Moeda:</strong> ${escapeHtml(input.currency)}</p>
      ${
        input.paymentId
          ? `<p><strong>Pagamento Mercado Pago:</strong> ${escapeHtml(input.paymentId)}</p>`
          : ''
      }
      <p><strong>Plano:</strong> ${escapeHtml(accessPlan.name)}</p>
      <p><strong>Acesso liberado por:</strong> ${accessPlan.durationDays} dias</p>
      <p>Admin: <a href="${appUrl}/admin">${appUrl}/admin</a></p>
    </div>
  `
}

async function sendEmail(input: {
  to: string | string[]
  subject: string
  html: string
}) {
  const from = buildFromAddress(productSenderName)
  const recipients = Array.isArray(input.to) ? input.to : [input.to]
  const maskedTo = recipients.map((recipient) => recipient.replace(/^(.{2}).*(@.*)$/, '$1***$2'))

  if (!process.env.RESEND_API_KEY || !from) {
    console.error('[email] missing Resend configuration', {
      hasApiKey: Boolean(process.env.RESEND_API_KEY),
      hasFrom: Boolean(from),
      to: maskedTo,
      subject: input.subject,
    })
    return { ok: false as const, skipped: true as const, error: 'missing-email-config' }
  }

  const response = await fetch(resendApiUrl, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: recipients,
      subject: input.subject,
      html: input.html,
    }),
  })

  if (!response.ok) {
    const errorText = await response.text().catch(() => 'email-send-failed')
    console.error('[email] Resend rejected message', {
      status: response.status,
      to: maskedTo,
      subject: input.subject,
      error: errorText,
    })
    return { ok: false as const, skipped: false as const, error: errorText }
  }

  const data = (await response.json().catch(() => ({}))) as { id?: string }
  console.log('[email] Resend accepted message', {
    id: data.id ?? null,
    to: maskedTo,
    subject: input.subject,
  })

  return { ok: true as const, skipped: false as const, id: data.id ?? null }
}

export async function sendPurchaseConfirmationEmail(input: {
  buyerEmail: string
  paymentId: string | null
  amountCents: number
}) {
  return sendEmail({
    to: input.buyerEmail,
    subject: 'Compra confirmada - Simulado Capitão',
    html: buildHtml(input),
  })
}

export async function sendPurchaseAdminNotificationEmail(input: {
  buyerEmail: string
  paymentId: string | null
  amountCents: number
  currency: string
}) {
  const recipients = getPurchaseAlertEmails()

  if (recipients.length === 0) {
    return { ok: false as const, skipped: true as const, error: 'missing-purchase-alert-recipients' }
  }

  return sendEmail({
    to: recipients,
    subject: `Nova compra aprovada - ${input.buyerEmail}`,
    html: buildAdminNotificationHtml(input),
  })
}

export async function sendPendingCheckoutEmail(input: {
  buyerEmail: string
  checkoutUrl: string
  coupon?: {
    code: string
    percentOff: number
  } | null
  originalPriceCents?: number
  finalPriceCents?: number
}) {
  const subject = input.coupon
    ? `Finalize com ${input.coupon.percentOff}% OFF - Simulado Capitão`
    : 'Finalize seu acesso premium - Simulado Capitão'

  return sendEmail({
    to: input.buyerEmail,
    subject,
    html: buildPendingCheckoutHtml(input),
  })
}
