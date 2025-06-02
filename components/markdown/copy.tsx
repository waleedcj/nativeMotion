"use client";

import { CheckIcon, CopyIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

export default function Copy({ content }: { content: string }) {
  const [isCopied, setIsCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(content);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }

  return (
    <Button
      variant="copy"
      className="border"
      size="xs"
      aria-label="Copy to clipboard"
      onClick={handleCopy}
    > 
      {isCopied ? (
        <CheckIcon className="w-3 h-3" aria-label="Copied" />
      ) : (
        <CopyIcon className="w-3 h-3" aria-label="Copy to clipboard" />
      )}
    </Button>
  );
}
