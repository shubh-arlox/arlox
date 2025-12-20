// scripts/generate-sitemap.js
const fs = require('fs');
const { getAllUrls, generateSiteMapXml } = require('./lib/sitemap-generator');

const urls = getAllUrls();
const xml = generateSiteMapXml(urls);

fs.writeFileSync('./public/sitemap.xml', xml);
console.log('✅ Sitemap generated at public/sitemap.xml');
