// app/sitemap.ts
import { MetadataRoute } from 'next';
import { docs_slugs } from '@/lib/routes-config';
import { getAllBlogStaticPaths } from '@/lib/markdown';

const SITE_URL =  process.env.NEXT_PUBLIC_SITE_URL || "https://nativemotion.dev"

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const docPages = docs_slugs.map((slug) => {
    const docPath = slug.length === 0 ? "/docs" : `/docs/${slug.join("/")}`;
    return {
      url: `${SITE_URL}${docPath}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1
    };
  });

  const blogSlugs = await getAllBlogStaticPaths();
  const blogPages = (blogSlugs ?? []).map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const staticPages = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ];

  return [...staticPages, ...docPages, ...blogPages];
}
