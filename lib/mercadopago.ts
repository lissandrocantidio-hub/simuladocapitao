import { MercadoPagoConfig, Payment, Preference } from 'mercadopago'

function getMercadoPagoAccessToken() {
  const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN

  if (!accessToken) {
    throw new Error('MERCADOPAGO_ACCESS_TOKEN not configured')
  }

  return accessToken
}

export function getMercadoPagoClient() {
  return new MercadoPagoConfig({
    accessToken: getMercadoPagoAccessToken(),
  })
}

export function getMercadoPagoPreferenceClient() {
  return new Preference(getMercadoPagoClient())
}

export function getMercadoPagoPaymentClient() {
  return new Payment(getMercadoPagoClient())
}
