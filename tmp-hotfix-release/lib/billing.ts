export const accessPlan = {
  code: 'premium-90d',
  name: 'Acesso completo por 90 dias',
  description: 'Libera todos os simulados premium por 90 dias corridos.',
  durationDays: 90,
  priceCents: 3990,
  currency: 'BRL',
} as const

export const supportEmail = 'atendimento@simuladocapitao.com.br'

export const launchCoupon = {
  code: 'LANCAMENTO20',
  percentOff: 20,
  description: 'Cupom de lancamento com 20% de desconto.',
} as const

export function formatPriceInReais(amountCents: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(amountCents / 100)
}
