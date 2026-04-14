import type { Metadata } from 'next'
import Script from 'next/script'
import MetaPixelPageTracker from '@/app/components/MetaPixelPageTracker'
import SiteHeader from '@/app/components/SiteHeader'
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
  const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID

  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full">
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
            `}</Script>
            <Script
              id="meta-pixel-script"
              src="https://connect.facebook.net/en_US/fbevents.js"
              strategy="afterInteractive"
            />
            <MetaPixelPageTracker />
          </>
        ) : null}
        <SiteHeader />
        {children}
      </body>
    </html>
  )
}
