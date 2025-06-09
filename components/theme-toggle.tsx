"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { MyIcons } from "@/components/icons"; 

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  // Handle the toggle logic
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  // Render nothing or a placeholder until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" disabled>
        <MyIcons.SunIcon  color="#eab308" className=" absolute h-[1.1rem] w-[1.1rem]" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>

      <MyIcons.SunIcon
        color="#eab308"
        className="absolute h-[1.5rem] w-[1.3rem]  rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      />
      {/* Moon Icon: Hidden/rotated in light mode, visible in dark */}
      <MyIcons.MoonIcon className="absolute h-[1.5rem] w-[1.3rem] transition-all duration-300 dark:-rotate-90 dark:scale-0" />
   
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
