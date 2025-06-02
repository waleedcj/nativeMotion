import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Fragment } from "react";

export default function DocsBreadcrumb({ paths }: { paths: string[] }) {

  const generateHref = (currentIndex: number): string => {
    const currentPathSegments = paths.slice(0, currentIndex + 1);
    return `/docs/${currentPathSegments.join("/")}`;
  };

  return (
    <div className="pb-5">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
          <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
          </BreadcrumbItem>
          {paths.map((path, index) => (
            <Fragment key={path}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {index < paths.length - 1 ? (
                  <BreadcrumbLink className="a" href={generateHref(index)}> {/* ADD href HERE, or use asChild with NextLink */}
                  {toTitleCase(path)}
                </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage className="b">
                    {toTitleCase(path)}
                  </BreadcrumbPage>
                )}
              </BreadcrumbItem>
            </Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}

function toTitleCase(input: string): string {
  const words = input.split("-");
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  return capitalizedWords.join(" ");
}

