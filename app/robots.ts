import { MetadataRoute } from 'next';

const SITE_URL =  process.env.NEXT_PUBLIC_SITE_URL || "https://nativemotion.dev"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*', // Applies to all crawlers
        allow: '/',      // Allow crawling of all content by default
        // disallow: ['/private/', '/admin/'], // Example: paths you want to block
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`, // Point to your sitemap
  };
}