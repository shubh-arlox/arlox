// lib/sitemap-generator.js
const DOMAIN = "https://ai.arlox.io";// Change to your domain

const MEGA_CONTENT = {
  solutions: [
    {
      title: "Strategy",
      items: [
        { label: "Scientific Positioning", href: "/solutions/scientific-positioning" },
        { label: "Market Research & Analysis", href: "/solutions/market-research-analysis" },
        { label: "Scientific Product Testing", href: "/solutions/scientific-product-testing" },
        { label: "Scientific Angle Testing", href: "/solutions/scientific-angle-testing" },
        { label: "Business Diagnostics", href: "/solutions/business-diagnostics" },
      ],
    },
    {
      title: "Scaling",
      items: [
        { label: "Meta Ads Scaling (FB/IG)", href: "/solutions/meta-ads-scaling" },
        { label: "Google Ads (AI-Driven)", href: "/solutions/google-ads-ai" },
        { label: "TikTok Growth Engine", href: "/solutions/tiktok-growth-engine" },
        { label: "YouTube & Streaming Ads", href: "/solutions/youtube-streaming-ads" },
        { label: "Ad Creative Production System", href: "/solutions/ad-creative-production" },
      ],
    },
    {
      title: "Efficiency",
      items: [
        { label: "AI CRO Optimisations", href: "/solutions/ai-cro" },
        { label: "Smart Retargeting", href: "/solutions/smart-retargeting" },
        { label: "Multi-Channel Tracking", href: "/solutions/multi-channel-tracking" },
        { label: "Lifecycle Automations", href: "/solutions/lifecycle-flows" },
        { label: "LTV Maximisation", href: "/solutions/ltv-maximisation" },
      ],
    },
  ],
  tools: [
    {
      title: "Tools",
      items: [
        { label: "AI Bot", href: "/tools/ai-bot" },
        { label: "BROAS Tool", href: "/free/broas-tool" },
        { label: "CRO Tool Kit", href: "https://cro-arlox.vercel.app" },
      ],
    },
  ],
  products: [
    {
      title: "For Agencies",
      items: [
        { label: "Scale Your Agency", href: "/products/scale-your-agency" },
        { label: "Scientific Mediabuying™", href: "/products/scientific-mediabuying" },
        { label: "Client Retention Mastery™", href: "/products/client-retention-mastery" },
        { label: "AD Creative Mastery™", href: "/products/ad-creative-mastery" },
        { label: "1-on-1 Consulting (~$999)", href: "/products/agency-consulting" },
      ],
    },
    {
      title: "For Fashion Brands",
      items: [
        { label: "Marketing Setup", href: "/products/fashion-marketing-dept" },
        { label: "1-on-1 Consulting", href: "/products/fashion-consulting" },
      ],
    },
    {
      title: "For Online Service Businesses",
      items: [
        { label: "LinkedIn Appointment Engine", href: "/products/linkedin-appointments" },
        { label: "1-on-1 Coaching", href: "/products/service-coaching" },
      ],
    },
  ],
  results: [
    {
      title: "Results",
      items: [
        { label: "Success Stories (330+ videos)", href: "/results/success-stories" },
        { label: "Case Studies", href: "/results/case-studies" },
        { label: "10X Ad Creatives", href: "/results/10x-ad-creatives" },
        { label: "Wall of Reviews", href: "/results/reviews" },
      ],
    },
  ],
  free: [
    {
      title: "Free",
      items: [
        { label: "Scaling Insights (Blog)", href: "/free/scaling-insights" },
        { label: "Arlox Channel", href: "https://www.youtube.com/@arlox-io" },
        { label: "Van Channel", href: "https://www.youtube.com/@vannlaniakea" },
        { label: "Dennis Channel", href: "https://www.youtube.com/@dennisgoyal4210" },
      ],
    },
  ],
  company: [
    {
      title: "Company",
      items: [
        { label: "Mission", href: "/company/mission" },
        { label: "Leadership", href: "/company/leadership" },
        { label: "Values", href: "/company/values" },
        { label: "Arloxian Way", href: "/company/arloxian-way" },
        { label: "Our Story", href: "/company/our-story" },
        { label: "Careers", href: "/company/careers" },
      ],
    },
  ],
};

// Main pages to include
const MAIN_PAGES = [
  { url: "/", priority: "1.0", changefreq: "weekly" },
  { url: "/solutions", priority: "0.9", changefreq: "weekly" },
  { url: "/products", priority: "0.9", changefreq: "weekly" },
  { url: "/results", priority: "0.9", changefreq: "weekly" },
  { url: "/free", priority: "0.8", changefreq: "weekly" },
  { url: "/company", priority: "0.7", changefreq: "monthly" },
];

// Get all URLs from MEGA_CONTENT
function getAllUrls() {
  const urls = [...MAIN_PAGES];
  const isExternal = (url) => /^https?:\/\//.test(url);

  Object.values(MEGA_CONTENT).forEach((sections) => {
    sections.forEach((section) => {
      section.items.forEach((item) => {
        // Only include internal URLs in sitemap
        if (!isExternal(item.href)) {
          urls.push({
            url: item.href,
            priority: "0.8",
            changefreq: "monthly",
          });
        }
      });
    });
  });

  return urls;
}

// Generate XML sitemap
function generateSiteMapXml(urls) {
  const now = new Date().toISOString().split("T")[0];

  const xmlHeader = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  const xmlFooter = `</urlset>`;

  const urlElements = urls
    .map((item) => {
      return `  <url>
    <loc>${DOMAIN}${item.url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`;
    })
    .join("\n");

  return `${xmlHeader}\n${urlElements}\n${xmlFooter}`;
}

export { getAllUrls, generateSiteMapXml };
