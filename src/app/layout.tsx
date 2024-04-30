import { ThemeProvider } from '@/components/providers/ThemeProvider'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Freelance Web Developer | Krzysztof Zaleski',
  description:
    'Freelance Web & Frontend developer. Specialising in development of custom websites, MVP and web applications JavaScript, React.js, Next.js.'
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
        {/* <div id="goodsoft-feedback-widget"></div>
        <link
          href="https://rawcdn.githack.com/goodsoftpl/widget/b9691966b7bfbec7871b64c179ef653e9842c633/main.css"
          rel="stylesheet"
        />
        <Script src="https://rawcdn.githack.com/goodsoftpl/widget/b9691966b7bfbec7871b64c179ef653e9842c633/main.js"></Script> */}
      </body>
    </html>
  )
}
