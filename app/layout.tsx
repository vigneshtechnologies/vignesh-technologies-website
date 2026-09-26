import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://vigneshtechnologies.vercel.app'),

  title: {
    default: 'Vignesh Technologies | Software, Websites, Mobile Apps & IT Training',
    template: '%s | Vignesh Technologies',
  },

  description:
    'Vignesh Technologies is a technology company based in Rajapalayam, Tamil Nadu, providing software development, mobile applications, websites, AI & digital solutions, and professional IT training.',

  keywords: [
    'Vignesh Technologies',
    'Rajapalayam',
    'Tamil Nadu',
    'Software Development',
    'Website Development',
    'Mobile App Development',
    'Android App Development',
    'IT Training',
    'Python Course',
    'C Programming',
    'C++ Programming',
    'Java Training',
    'React JS',
    'AI Solutions',
    'Digital Solutions',
    'Circular App',
  ],

  applicationName: 'Vignesh Technologies',

  authors: [
    {
      name: 'Vignesh Technologies',
      url: 'https://vigneshtechnologies.vercel.app',
    },
  ],

  creator: 'Vignesh Technologies',
  publisher: 'Vignesh Technologies',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  alternates: {
    canonical: 'https://vigneshtechnologies.vercel.app',
  },

  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://vigneshtechnologies.vercel.app',
    siteName: 'Vignesh Technologies',
    title: 'Vignesh Technologies | Software, Websites, Mobile Apps & IT Training',
    description:
      'Technology company providing software development, mobile applications, websites, AI/digital solutions, and professional IT training in Rajapalayam, Tamil Nadu.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 1200,
        alt: 'Vignesh Technologies',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Vignesh Technologies | Software, Websites, Mobile Apps & IT Training',
    description:
      'Technology company providing software development, mobile applications, websites, AI/digital solutions, and professional IT training in Rajapalayam, Tamil Nadu.',
    images: ['/logo.png'],
  },

  icons: {
    icon: [
      {
        url: '/logo.png',
      },
      {
        url: '/icon-dark-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/icon-light-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    apple: '/logo.png',
    shortcut: '/logo.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0f1d',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`min-h-screen bg-background font-sans antialiased text-foreground ${inter.variable}`}>
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Vignesh Technologies',
              url: 'https://vigneshtechnologies.vercel.app',
              logo: 'https://vigneshtechnologies.vercel.app/logo.png',
              email: 'vigneshtechnologyservice@gmail.com',
              telephone: '+91 8122753620',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Rajapalayam',
                addressRegion: 'Tamil Nadu',
                addressCountry: 'IN',
              },
              sameAs: [
                'https://play.google.com/store/apps/details?id=com.vigneshtechnologies.circular',
              ],
            }),
          }}
        />

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}