import { ModeToggle } from "@/components/theme-toggle";
import { GithubIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Anchor from "./anchor";
import { SheetLeftbar } from "./leftbar";
import { page_routes } from "@/lib/routes-config";
import { SheetClose } from "@/components/ui/sheet";
import { LogoToggle } from "./toggle-logo";
// import AlgoliaSearch from "./algolia-search";

export const NAVLINKS = [
  {
    title: "Components",
    href: `/docs${page_routes[0].href}`,
  },
  // {
  //   title: "Blog",
  //   href: "/blog",
  // },
  // {
  //   title: "Examples",
  //   href: "#",
  // },
  // {
  //   title: "Guides",
  //   href: "#",
  // },
];

// const algolia_props = {
//   appId: process.env.ALGOLIA_APP_ID!,
//   indexName: process.env.ALGOLIA_INDEX!,
//   apiKey: process.env.ALGOLIA_SEARCH_API_KEY!,
// };

export function Navbar() {
  return (
    <nav className="w-full border-b h-16 sticky top-0 z-50 bg-background">
      <div className="sm:container mx-auto w-[95vw] h-full flex items-center sm:justify-between md:gap-2">
        <div className="flex items-center sm:gap-5 gap-2.5">
          <SheetLeftbar />
          <div className="flex items-center gap-6">
       <LogoToggle />
            <div className="md:flex hidden items-center gap-4 text-sm font-medium text-gray-500">
              <NavMenu />
            </div>
          </div>
        </div>

        <div className="flex items-center sm:justify-normal justify-between sm:gap-3 ml-1 sm:w-fit w-[90%]">
          {/* <AlgoliaSearch {...algolia_props} /> */}
          <div className="flex items-center justify-between sm:gap-2">
            <div className="flex ml-4 sm:ml-0">
              <Link
                href="https://github.com/waleedcj/nativeMotion"
                className={buttonVariants({
                  variant: "ghost",
                  size: "icon",
                })}
              >
                <GithubIcon className="h-[1.1rem] w-[1.1rem]" />
              </Link>
              <Link
                href="https://x.com/waleed_CJ16"
                className={buttonVariants({
                  variant: "ghost",
                  size: "icon",
                })}
              >
                <TwitterIcon className="h-[1.1rem] w-[1.1rem]" />
              </Link>
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function NavMenu({ isSheet = false }) {
  return (
    <>
      {NAVLINKS.map((item) => {
        const Comp = (
          <Anchor
            key={item.title + item.href}
            // activeClassName="!text-primary dark:font-medium font-semibold"
            absolute
            className="flex items-center gap-1 sm:text-sm text-base hover:text-gray-800 transition-colors"
            href={item.href}
          >
            {item.title}
          </Anchor>
        );
        return isSheet ? (
          <SheetClose key={item.title + item.href} asChild>
            {Comp}
          </SheetClose>
        ) : (
          Comp
        );
      })}
    </>
  );
}
