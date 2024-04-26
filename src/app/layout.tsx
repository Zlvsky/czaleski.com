import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
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
    <html lang="en">
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" href="/favicon-16x16.png" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      {/* ANALITYCS */}
      <Script
        strategy="lazyOnload"
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-BHDS5QBRYQ`}
      ></Script>
      <Script strategy="lazyOnload" id="gtagLoad">
        {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-BHDS5QBRYQ');
            `}
      </Script>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
