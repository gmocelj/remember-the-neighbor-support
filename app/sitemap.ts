import { MetadataRoute } from 'next'
import { SITE_URL, CONTENT_UPDATED } from '@/lib/site'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date(`${CONTENT_UPDATED}T00:00:00Z`)
  return [
    { url: `${SITE_URL}/`, lastModified: updated, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/support/`, lastModified: updated, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/privacy/`, lastModified: updated, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${SITE_URL}/terms/`, lastModified: updated, changeFrequency: 'yearly', priority: 0.4 },
  ]
}
