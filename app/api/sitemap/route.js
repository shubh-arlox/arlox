// app/api/sitemap/route.js
import { getAllUrls, generateSiteMapXml } from "@/lib/sitemap-generator";

export async function GET() {
  const urls = getAllUrls();
  const xml = generateSiteMapXml(urls);

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
