// components/sublink.tsx
import { EachRoute } from "@/lib/routes-config";
import Anchor from "./anchor";
import { cn } from "@/lib/utils";
import { SheetClose } from "@/components/ui/sheet";

// Keep the props needed, remove state-related ones
export default function SubLink({
  title,
  href,
  items,
  level,
  isSheet,
  tag,
  noLink,
}: EachRoute & { level: number; isSheet: boolean }) {

  const RenderedItem = () => {
    // Level 0 items are treated as section headings
    if (level === 0) {
      return (
        <h4 className="font-semibold text-foreground mb-2 text-sm uppercase tracking-wider mt-4 first:mt-0">
          {title}
          {tag && (
            <span className="ml-2 dark:bg-blue-700 bg-yellow-300 rounded-md px-1.5 py-0.5 text-xs text-white !font-normal">
              {tag}
            </span>
          )}
        </h4>
      );
    }

    // Levels > 0 are rendered as links (unless noLink is explicitly true)
    if (noLink) { 
       return <span className="block py-1 text-muted-foreground">{title}</span>
    }

    // Default: Render as a link
    const Comp = (
      <Anchor
        activeClassName="text-primary dark:font-medium font-semibold" 
        href={href}
        className="block py-1 hover:text-neutral-800 text-sm transition-colors text-neutral-500"
      >
        {title}
        {/* Optional Tag rendering */}
        {tag && (
          <span className="ml-2 dark:bg-blue-700 bg-yellow-300 rounded-md px-1.5 py-0.5 text-xs text-white !font-normal">
            {tag}
          </span>
        )}
      </Anchor>
    );

    // Wrap link in SheetClose when in the mobile sheet view
    return isSheet ? <SheetClose asChild>{Comp}</SheetClose> : Comp;
  };

  return (
    <div className="flex flex-col w-full">
      {/* Render the heading or the link itself */}
      {RenderedItem()}

      {items && items.length > 0 && (
        <div className={cn(
            "flex flex-col items-start gap-1 mt-1",
            level >= 0 && "pl-3" 
          )}
        >
          {items.map((innerLink) => {

            const modifiedItems = {
              ...innerLink,
              href: `${href}${innerLink.href}`, 
              level: level + 1, 
              isSheet,
            };
            // Recursive call for nested items
            return <SubLink key={modifiedItems.href} {...modifiedItems} />;
          })}
        </div>
      )}
    </div>
  );
}