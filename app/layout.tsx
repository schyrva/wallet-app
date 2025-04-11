import type React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Transaction App',
  description: 'Mobile transaction app',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="max-w-md mx-auto bg-gray-50 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}

import './globals.css'
