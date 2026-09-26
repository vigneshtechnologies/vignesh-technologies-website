import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/competition', '/terms', '/privacy'],
      disallow: ['/api/', '/admin/'],
    },
    sitemap: 'https://vigneshtechnologies.vercel.app/sitemap.xml',
  }
}
