// src/scripts/generate-sitemap.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get directory name in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Your react-scroll Element names from App.jsx
const sections = [
  'home',
  'about',
  'learn',
  'faq',
  'contact'
];

// Your site URL
const siteUrl = 'https://algoqueen.icpc.global';

// Create sitemap content
const generateSitemap = () => {
  const currentDate = new Date().toISOString();
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`;

  // Add each section as a URL with fragment identifier
  sections.forEach(section => {
    sitemap += `
  <url>
    <loc>${siteUrl}/#${section}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
  });

  sitemap += `
</urlset>`;

  return sitemap;
};

// Generate robots.txt content
const generateRobotsTxt = () => {
  const content = `User-agent: *
Allow: /
Sitemap: ${siteUrl}/sitemap.xml`;

  return content;
};

// Write files to public directory
const generateFiles = () => {
  const sitemap = generateSitemap();
  const robotsTxt = generateRobotsTxt();
  const publicPath = path.resolve('public');
  
  // Ensure the public directory exists
  if (!fs.existsSync(publicPath)) {
    fs.mkdirSync(publicPath, { recursive: true });
  }
  
  // Write sitemap.xml
  fs.writeFileSync(
    path.resolve('public/sitemap.xml'),
    sitemap
  );
  console.log('Sitemap generated successfully!');
  
  // Write robots.txt
  fs.writeFileSync(
    path.resolve('public/robots.txt'),
    robotsTxt
  );
  console.log('robots.txt generated successfully!');
};

// Execute the file generation
generateFiles();