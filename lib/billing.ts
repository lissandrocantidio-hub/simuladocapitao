export const accessPlan = {
  code: 'premium-90d',
  name: 'Acesso completo por 90 dias',
  description: 'Libera todos os simulados premium por 90 dias corridos.',
  durationDays: 90,
  priceCents: 3990,
  currency: 'BRL',
} as const

export const supportEmail = 'contato@simuladocapitao.com.br'

export const launchCoupon = {
  code: 'LANCAMENTO20',
  percentOff: 20,
  description: 'Cupom de lancamento com 20% de desconto.',
} as const

export const checkoutCoupons = [
  launchCoupon,
  {
    code: 'COMPRA_TESTE',
    percentOff: 99,
    description: 'Cupom para compra de teste interno (99% OFF).',
  },
] as const

export function formatPriceInReais(amountCents: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(amountCents / 100)
}
