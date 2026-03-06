import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ongonbd.org'; // Replace with your actual domain

  // Core Pages
  const routes = [
    '',
    '/about',
    '/blog',
    '/contact',
    '/donate',
    '/donate/regular',
    '/membership',
    '/volunteer',
    '/blood',
    '/blood/donors',
    '/blood/register',
    '/disaster',
    '/disaster/alerts',
    '/disaster/resources',
    '/disaster/education',
    '/disaster/report',
    '/disaster/requests',
    '/safety',
    '/safety/chat',
    '/safety/helplines',
    '/safety/education',
    '/safety/report',
    '/news',
    '/events',
    '/notices',
    '/resources',
    '/gallery',
    '/stories',
    '/site-map',
    '/privacy',
    '/terms',
    '/refund-policy',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
