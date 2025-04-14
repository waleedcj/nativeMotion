"use client";
import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

// Assuming cn utility is correctly imported (e.g., from "@/lib/utils")
import { cn } from "@/lib/utils"; // Adjust import path if needed

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      // Default base styles (kept from original shadcn/ui for flex behavior)
      "inline-flex items-center",
      // Styles merged from your usage example:
      "h-12 w-full justify-start rounded-none border-b-0 bg-transparent p-0",
      // User-provided className takes highest precedence
      className
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      // Default base styles (kept for flex, focus, disabled states etc.)
      "inline-flex items-center justify-center whitespace-nowrap text-base font-medium ring-offset-background transition-none gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      // Styles merged from your usage example:
      "relative w-[128px] rounded-lg border-b-2 border-b-transparent bg-transparent px-4 py-2 text-gray-500 shadow-none",
      // Active state styles from your usage example (with dark mode variants)
      "data-[state=active]:bg-gray-200  data-[state=active]:text-gray-900 data-[state=active]:shadow-none",
       // User-provided className takes highest precedence
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      // Default base styles (kept for focus states)
      "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      // Styles merged from your usage example:
      "mt-0",
      // User-provided className takes highest precedence
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };