import DocsBreadcrumb from "@/components/docs-breadcrumb";
import Pagination from "@/components/pagination";
// import Toc from "@/components/toc";
import { docs_slugs } from "@/lib/routes-config";
import { notFound } from "next/navigation";
import { getCompiledDocsForSlug, getDocFrontmatter } from "@/lib/markdown";
import { Typography } from "@/components/typography";


const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://nativemotion.dev"

type PageProps = {
  params: Promise<{ slug: string[] }>;
};

export const dynamicParams = false;

export default async function DocsPage(props: PageProps) {
  const params = await props.params;
  const { slug = [] } = params;

  const pathName = slug.join("/");
  const fullDocUrl = pathName ? `${SITE_URL}/docs/${pathName}` : `${SITE_URL}/docs`;
  const res = await getCompiledDocsForSlug(pathName);

  if (!res) notFound();
  return (
    <div className="flex items-start gap-10">
      <div className="flex-[4.5] py-10 mx-auto">
        <div className="w-full mx-auto">
          <DocsBreadcrumb paths={slug} />
          <Typography>
            <h1 className="text-3xl md:text-4xl font-bold  text-neutral-900 font-jakartata">
              {res.frontmatter.title}
            </h1>
            <p className="text-lg text-neutral-500">
              {res.frontmatter.description}
            </p>
            {res.frontmatter?.tags && res.frontmatter.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {res.frontmatter.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 items-center rounded-lg text-xs font-medium bg-gray-100 text-gray-500 "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
             <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "TechArticle", // or "Article" or "HowTo"
                  "headline": res.frontmatter.title,
                  "description": res.frontmatter.description,
                  "image": res.frontmatter.ogImage ? new URL(res.frontmatter.ogImage, SITE_URL).toString() : new URL('/opengraph-image.png', SITE_URL).toString(),
                  "author": {
                    "@type": "Organization", // or "Person"
                    "name": res.frontmatter.author || "Your Documentation Team"
                  },
                  "publisher": {
                    "@type": "Organization",
                    "name": "NativeMotion",
                    "logo": {
                      "@type": "ImageObject",
                      "url": new URL('/nmlogo.png', SITE_URL).toString() // URL to your site's logo
                    }
                  },
                  "datePublished": res.frontmatter.lastModified || new Date().toISOString(), // Use a creation date if available
                  "dateModified": res.frontmatter.lastModified || new Date().toISOString(),
                  "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": fullDocUrl
                  }
                  // For "HowTo" schema, you'd add "step" properties.
                  // For "FAQPage" schema, you'd add "mainEntity" with questions and answers.
                }),
              }}
            />
            <div>{res.content}</div>
            <Pagination pathname={pathName} />
          </Typography>
        </div>
      </div>

      {/* <Toc path={pathName} /> */}
    </div>
  );
}

export async function generateMetadata(props: PageProps) {
  const params = await props.params;
  const { slug = [] } = params;

  const pathName = slug.join("/");
  const fullUrl = pathName ? `${SITE_URL}/docs/${pathName}` : `${SITE_URL}/docs`;
  const docFrontmatter = await getDocFrontmatter(pathName); // Renamed 'res' for clarity

  if (!docFrontmatter) {
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist.",
    };
  }

  const { title, description, keywords, ogImage, author, lastModified } = docFrontmatter;

  const images = ogImage
    ? [{ url: new URL(ogImage, SITE_URL).toString(), width: 1200, height: 675, alt: title }]
    : [{ url: new URL('/opengraph-image.png', SITE_URL).toString(), width: 1200, height: 675, alt: 'Default OG Image' }]; // Fallback OG image

  return {
    title: `${title} | NativeMotion`, // Append site name for branding
    description,
    keywords: keywords || [], // Add keywords from frontmatter
    authors: author ? [{ name: author }] : [{ name: "Your Documentation Team" }],
    alternates: {
      canonical: fullUrl, // Set the canonical URL
    },
    openGraph: {
      title: `${title} | NativeMotion`,
      description,
      url: fullUrl,
      siteName: 'NativeMotion',
      images: images,
      type: 'article', // For documentation pages, 'article' is appropriate
      publishedTime: lastModified || new Date().toISOString(), // Or from frontmatter if available
      modifiedTime: lastModified || new Date().toISOString(), // Or from frontmatter
      authors: author ? [author] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | NativeMotion`,
      description,
      images: images, 
      // creator: '@yourTwitterHandle', // Optional: Your Twitter handle
      // site: '@yourTwitterHandle', // Optional: Site's Twitter handle
    },
    // Optional: Add more specific metadata like lastModified for Google
    ...(lastModified && { lastModified: new Date(lastModified) }),
  };
}


export function generateStaticParams() {
  return docs_slugs.map((slug) => ({ slug }));
}
