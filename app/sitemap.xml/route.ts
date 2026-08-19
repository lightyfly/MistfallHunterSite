import { keywordArticles } from "../../lib/keyword-pages";
import { classRecords, supportedLocales } from "../../lib/site-data";

const staticPaths = [
  "/",
  "/beginner-guide",
  "/extraction",
  "/bosses",
  "/classes",
  "/guides",
  "/maps-and-loot",
  "/tier-list",
  "/updates",
  "/community",
  "/privacy-policy",
  "/terms-of-service",
];

function escapeXml(value: string) {
  return value.replace(/[<>&'\"]/g, (character) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", "\"": "&quot;" })[character] ?? character);
}

function localizedPath(locale: string, path: string) {
  return locale === "en" ? path : path === "/" ? `/${locale}` : `/${locale}${path}`;
}

export function GET(request: Request) {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  const origin = configuredUrl ?? new URL(request.url).origin;
  const paths = new Set<string>();

  for (const locale of supportedLocales) {
    for (const path of staticPaths) paths.add(localizedPath(locale, path));
    for (const record of classRecords[locale]) paths.add(localizedPath(locale, `/classes/${record.slug}`));
    for (const article of keywordArticles) paths.add(localizedPath(locale, `/guides/${article.slug}`));
  }

  const lastmod = new Date().toISOString().slice(0, 10);
  const entries = [...paths]
    .sort()
    .map((path) => `<url><loc>${escapeXml(`${origin}${path}`)}</loc><lastmod>${lastmod}</lastmod></url>`)
    .join("");

  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries}</urlset>`, {
    headers: { "content-type": "application/xml; charset=utf-8", "cache-control": "public, max-age=3600" },
  });
}
