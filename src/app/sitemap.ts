
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ongonbd.org'; // Replace with actual production domain
  
  const routes = [
    '',
    '/about',
    '/news',
    '/events',
    '/notices',
    '/resources',
    '/gallery',
    '/stories',
    '/requests',
    '/requests/new',
    '/blood',
    '/blood/donors',
    '/volunteer',
    '/careers',
    '/membership',
    '/safety',
    '/disaster',
    '/site-map',
    '/contact',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
