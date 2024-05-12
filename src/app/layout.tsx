import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Web & Frontend Developer | Krzysztof Zaleski',
  description:
    'Web & Frontend developer. Specialising in development of web applications, MVPs and websites. JavaScript, React.js, Next.js.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" href="/favicon-16x16.png" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
