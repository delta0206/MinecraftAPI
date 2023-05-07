import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import './globals.css'

export const metadata: Metadata = {
  title: 'Minecraft API for Web',
  description: 'Web API for Minecraft assets',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  icons: ['/favicon.ico'],
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='ja'>
      <body>{children}</body>
    </html>
  )
}
