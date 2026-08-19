export function GET(request: Request) {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  const origin = configuredUrl ?? new URL(request.url).origin;
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`;

  return new Response(body, {
    headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "public, max-age=3600" },
  });
}
