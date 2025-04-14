import DocsBreadcrumb from "@/components/docs-breadcrumb";
import Pagination from "@/components/pagination";
import Toc from "@/components/toc";
import { page_routes } from "@/lib/routes-config";
import { notFound } from "next/navigation";
import { getCompiledDocsForSlug, getDocFrontmatter } from "@/lib/markdown";
import { Typography } from "@/components/typography";

type PageProps = {
  params: Promise<{ slug: string[] }>;
};

export default async function DocsPage(props: PageProps) {
  const params = await props.params;
  const { slug = [] } = params;

  const pathName = slug.join("/");
  const res = await getCompiledDocsForSlug(pathName);

  if (!res) notFound();
  return (
    <div className="flex items-start gap-10">
      <div className="flex-[4.5] py-10 mx-auto">
        <div className="w-full mx-auto">
          <DocsBreadcrumb paths={slug} />
          <Typography>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 font-jakartata">
              {res.frontmatter.title}
            </h1>
            <p className="text-lg text-neutral-500">
              {res.frontmatter.description}
            </p>
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
  const res = await getDocFrontmatter(pathName);
  if (!res) return {};
  const { title, description } = res;
  return {
    title,
    description,
  };
}

export function generateStaticParams() {
  return page_routes.map((item) => ({
    slug: item.href.split("/").slice(1),
  }));
}
