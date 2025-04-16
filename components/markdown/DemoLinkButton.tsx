 // src/components/DemoLinkButton.tsx (or your preferred path)
import * as React from "react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface DemoLinkButtonProps
  extends Omit<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    "size"
  > {
  href: string;
  children?: React.ReactNode;
  className?: string;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
}

const DemoLinkButton = React.forwardRef<
  HTMLAnchorElement,
  DemoLinkButtonProps
>(
  (
    {
      href,
      children = "Demo",
      className,
      variant = "outline",
      size = "sm",
      ...props
    },
    ref
  ) => {
    return (
      <Button
        variant={variant}
        size={size}
        className={cn("no-underline mt-8 bg-gray-200 text-neutral-900 hover:bg-gray-300 gap-2", className)}
        asChild
      >
        <a
          href={href}
          ref={ref}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          {children}
        </a>
      </Button>
    );
  }
);

DemoLinkButton.displayName = "DemoLinkButton";

export { DemoLinkButton };