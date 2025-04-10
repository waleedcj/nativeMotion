import { cn } from "@/lib/utils";
import { Children, PropsWithChildren } from "react";

/**
 * Container for a series of steps, displaying a vertical connecting line.
 * Mimics the structure of the Vite StepGuide.
 */
export function Stepper({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={cn("relative space-y-6", className)}>
      <div className="absolute left-3 top-0 bottom-0 w-[1.5px] bg-border" />
      {children}
    </div>
  );
}

/**
 * Represents a single step within the Stepper.
 * Displays a circular marker and the step content.
 * Mimics the structure of the Vite StepSection.
 */
export function StepperItem({
  children,
  title,
  className,
}: PropsWithChildren<{ title?: string; className?: string }>) {
  return (
    // Add relative positioning for the marker
    // Add left padding for content indentation (adjust pl-8 if needed)
    <div className={cn("relative pl-10", className)}>
      <div className="absolute block left-3 top-0 h-6 w-[6px] rounded-tr-full rounded-br-full border-2 border-gray-300 bg-gray-300" />
      {title && (
        <h3 className="text-lg font-semibold text-foreground mb-2 mt-0">
          {title}
        </h3>
      )}
      <div className="prose prose-neutral dark:prose-invert max-w-none prose-p:my-2 first:prose-p:mt-0 last:prose-p:mb-0 prose-pre:my-3">
        {children}
      </div>
    </div>
  );
}