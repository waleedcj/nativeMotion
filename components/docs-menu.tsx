// components/docs-menu.tsx
"use client";

import { ROUTES } from "@/lib/routes-config";
// Ensure this import points to the modified SubLink component
import SubLink from "./sublink";
import { usePathname } from "next/navigation";

export default function DocsMenu({ isSheet = false }) {
  const pathname = usePathname();

  // Keep this check if the menu should only render on /docs/** pages
  if (!pathname?.startsWith("/docs")) return null;

  return (
    // Removed mt-5, added gap-0 to let SubLink control vertical spacing
    <div className="flex flex-col gap-0 pr-2 pb-6 sm:text-base text-[14.5px]">
      {ROUTES.map((item, index) => {
        // Prepare props for the top-level items (level 0 headings)
        const modifiedItems = {
          ...item,
          // Base href used for constructing child links.
          // If item itself has no link (level 0), this is just a prefix.
          href: `/docs${item.href}`,
          level: 0, // Start rendering at level 0
          isSheet,
        };
        // Call the modified SubLink component
        return <SubLink key={item.title + index} {...modifiedItems} />;
      })}
    </div>
  );
}