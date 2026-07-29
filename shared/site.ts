/**
 * Canonical origin, shared by the app (canonical + OG tags) and the server
 * routes that emit robots.txt and sitemap.xml — so the domain is stated once.
 *
 * Deliberately a plain constant rather than an env lookup: this file is bundled
 * for the browser as well as the server, and the site is fully prerendered, so
 * the origin is a build-time fact. Change it here when the domain changes.
 */
export const siteUrl = 'https://matthieu-toussaint.com'

/** Absolute URL for a site-relative path, e.g. abs('/og-image.png'). */
export const abs = (path: string): string =>
  `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`
