import { Button } from "./ui/button";
import { Github, Twitter } from "lucide-react";
import { ModeToggle } from "@/components/theme-toggle";

export function FooterButtons() {
  return (
    <div className="flex items-center gap-2">
      <Button variant="ghost" size="icon" asChild>
        <a
          href="https://github.com/waleedcj/nativeMotion"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="h-5 w-5" />
          <span className="sr-only">GitHub</span>
        </a>
      </Button>
      <Button variant="ghost" size="icon" asChild>
        <a
          href="https://twitter.com/waleedcj"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter className="h-5 w-5" />
          <span className="sr-only">Twitter</span>
        </a>
      </Button>
      <ModeToggle />
    </div>
  );
} 