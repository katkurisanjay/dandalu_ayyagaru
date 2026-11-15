import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
  weight: ['400', '500', '600', '700', '800'],
})

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  title: 'Dandalu Ayyagaru — Book a Trusted Priest & Pooja Services',
  description:
    'Book a trusted priest for homams, poojas and meaningful family occasions. Choose your pooja, date, location, package and required pooja materials in one simple experience.',
  keywords: [
    'pooja booking',
    'priest booking',
    'homam',
    'Hindu priest',
    'Dandalu Ayyagaru',
    'pooja materials',
    'Vedic priest',
    'Gruha Pravesham',
    'Satyanarayana Pooja',
  ],
  icons: {
    icon: '/logo.jpg',
    shortcut: '/logo.jpg',
    apple: '/logo.jpg',
  },
  openGraph: {
    title: 'Dandalu Ayyagaru — Book a Trusted Priest & Pooja Services',
    description:
      'Book a trusted priest for homams, poojas and meaningful family occasions.',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dandalu Ayyagaru — Book a Trusted Priest & Pooja Services',
    description:
      'Book a trusted priest for homams, poojas and meaningful family occasions.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
      </head>
      <body className="bg-surface font-body-md text-body-md text-on-surface antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
