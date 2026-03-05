/**
 * This file is deactivated to avoid conflict with src/app/sitemap.ts (metadata generator).
 * The visual sitemap has been moved to src/app/site-map/page.tsx
 */
import { redirect } from 'next/navigation';

export default function SitemapConflictRedirect() {
  redirect('/site-map');
}
