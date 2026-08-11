import type { Metadata } from 'next'
import { Suspense } from 'react'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import GoogleAnalyticsPageTracker from '@/app/components/GoogleAnalyticsPageTracker'
import MetaPixelPageTracker from '@/app/components/MetaPixelPageTracker'
import PresenceHeartbeat from '@/app/components/PresenceHeartbeat'
import SiteHeader from '@/app/components/SiteHeader'
import SupportWidget from '@/app/components/SupportWidget'
import './globals.css'

export const metadata: Metadata = {
  title: 'Simulado Capitão Amador',
  description:
    'Simulado online para a prova de Capitão Amador com questões por matéria, cronômetro e correção comentada.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID?.trim() || 'G-JDESJ27QTX'
  const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID

  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full">
        {gaId ? (
          <>
            <Script
              id="google-analytics-script"
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics-bootstrap" strategy="afterInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${gaId}');
            `}</Script>
            {gaId ? (
              <Suspense fallback={null}>
                <GoogleAnalyticsPageTracker />
              </Suspense>
            ) : null}
          </>
        ) : null}
        {metaPixelId ? (
          <>
            <Script id="meta-pixel-bootstrap" strategy="afterInteractive">{`
              window.fbq = window.fbq || function() {
                window.fbq.callMethod
                  ? window.fbq.callMethod.apply(window.fbq, arguments)
                  : window.fbq.queue.push(arguments)
              };
              if (!window._fbq) {
                window._fbq = window.fbq;
              }
              window.fbq.push = window.fbq;
              window.fbq.loaded = true;
              window.fbq.version = '2.0';
              window.fbq.queue = window.fbq.queue || [];
              window.fbq('init', '${metaPixelId}');
              window.fbq('track', 'PageView');
            `}</Script>
            <Script
              id="meta-pixel-script"
              src="https://connect.facebook.net/en_US/fbevents.js"
              strategy="afterInteractive"
            />
            <Suspense fallback={null}>
              <MetaPixelPageTracker />
            </Suspense>
            <noscript>
              <img
                alt=""
                height="1"
                src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
                style={{ display: 'none' }}
                width="1"
              />
            </noscript>
          </>
        ) : null}
        <PresenceHeartbeat />
        <SiteHeader />
        {children}
        <SupportWidget />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
