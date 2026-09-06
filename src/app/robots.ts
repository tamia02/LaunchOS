import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/dashboard/',
        '/api/',
        '/settings/',
        '/profile/',
      ],
    },
    sitemap: 'https://www.launchos.co.in/sitemap.xml',
  }
}
