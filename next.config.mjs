/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */

  // This ensures sitemap.xml is served as static file
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
    ];
  },
};

 
export default nextConfig;
