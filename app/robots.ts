import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    // ※ここも本番URLに書き換えることになります
    sitemap: 'https://example.com/sitemap.xml',
  }
}