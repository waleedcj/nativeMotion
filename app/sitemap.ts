// app/sitemap.ts
import { MetadataRoute } from 'next';
import { page_routes } from '@/lib/routes-config'; // Adjust path as needed

const SITE_URL =  process.env.NEXT_PUBLIC_SITE_URL || "https://nativemotion.dev"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Assuming page_routes contains all your document routes like { href: '/docs/introduction', ... }
  // And potentially other non-docs routes
  const docPages = page_routes.map((item) => {
    // You might need to fetch lastModified date for each page if you want to include it
    // For simplicity, using a static date or omitting it for now
    return {
      url: `${SITE_URL}${item.href}`, // Ensure item.href starts with '/' e.g., /docs/slug
      lastModified: new Date(), // Or fetch from frontmatter/git history
      changeFrequency: 'weekly' as const, // Or 'monthly', 'daily'
      priority: item.href === '/docs' || item.href === '/' ? 1 : 0.8, // Example priority
    };
  });

  // Add other static pages if you have them (e.g., homepage, about page)
  const staticPages = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    // ... other static pages
  ];

  return [...staticPages, ...docPages];
}