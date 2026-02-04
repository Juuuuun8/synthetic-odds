import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // ※実際にアプリを作るときは、ここを本番のURL（例: https://money.katasuke-web.com）に書き換えます
  const baseUrl = 'https://odds.katasuke-web.com'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]
}