import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ongonbd.org'
  
  const routes = [
    '',
    '/about',
    '/blog',
    '/assistant',
    '/contact',
    '/membership',
    '/volunteer',
    '/careers',
    '/install',
    '/privacy',
    '/terms',
    '/refund-policy',
    '/blood',
    '/blood/donors',
    '/blood/register',
    '/campaigns',
    '/donate',
    '/donate/regular',
    '/disaster',
    '/disaster/alerts',
    '/disaster/resources',
    '/disaster/requests',
    '/disaster/education',
    '/disaster/report',
    '/safety',
    '/safety/chat',
    '/safety/education',
    '/safety/helplines',
    '/safety/report',
    '/news',
    '/events',
    '/notices',
    '/resources',
    '/gallery',
    '/stories',
    '/site-map',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return routes
}
