// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  //images: {
  //  domains: ['ai.arlox.io'],
  //  domains: ['uploads-ssl.webflow.com'],
  //},
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com', // Webflow's default CDN
      },
      {
        protocol: 'https',
        hostname: 'uploads-ssl.webflow.com', // Older Webflow sites might use this
      },
    ],
  },
};
module.exports = nextConfig;
