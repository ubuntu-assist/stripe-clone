/**
 * Public URL of the deployed site, used for absolute URLs in metadata,
 * robots.txt and the sitemap. Set NEXT_PUBLIC_SITE_URL in production.
 */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(
  /\/$/,
  "",
);
