import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://vigneshtechnologies.vercel.app'),

  title: {
    default: 'Vignesh Technologies',
    template: '%s | Vignesh Technologies',
  },

  description:
    'Vignesh Technologies provides software development, mobile app development, website development, IT training, AI solutions, graphic design, and digital services in Rajapalayam, Tamil Nadu.',

  keywords: [
    'Vignesh Technologies',
    'Rajapalayam',
    'Software Development',
    'Website Development',
    'Mobile App Development',
    'Android App Development',
    'IT Training',
    'Python Course',
    'C Programming',
    'C++ Programming',
    'MS Office Training',
    'Graphic Design',
    'Web Design',
    'Artificial Intelligence',
    'Digital Services',
    'Tamil Nadu',
  ],

  applicationName: 'Vignesh Technologies',

  authors: [
    {
      name: 'Vignesh Technologies',
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
    title: 'Vignesh Technologies',
    description:
      'Software Development, Mobile Apps, Websites, IT Training and Digital Solutions in Rajapalayam.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Vignesh Technologies',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Vignesh Technologies',
    description:
      'Software Development, Mobile Apps, Websites, IT Training and Digital Solutions.',
    images: ['/logo.png'],
  },

  icons: {
    icon: [
      {
        url: '/favicon.ico',
      },
      {
        url: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    apple: '/apple-icon.png',
    shortcut: '/favicon.ico',
  },
}

export const viewport: Viewport = {
  themeColor: '#1e3a8a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${inter.variable}`}>
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