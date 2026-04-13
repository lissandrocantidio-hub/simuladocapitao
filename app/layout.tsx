import type { Metadata } from 'next'
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
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full">
        <SiteHeader />
        {children}
      </body>
    </html>
  )
}
