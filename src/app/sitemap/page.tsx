/**
 * This file is purposefully deactivated to resolve a conflict with the 
 * root-level sitemap.ts metadata generator. In Next.js, having both 
 * causes a build error as they both attempt to claim the /sitemap segment.
 * 
 * The visual sitemap for users is now located at: src/app/site-map/page.tsx
 */

export const dynamic = 'force-static';

// No default export here prevents Next.js from treating this as a page route.
