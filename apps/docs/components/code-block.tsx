"use client";
import { Button } from "industrialkit";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({
  code,
  language = "tsx",
  filename,
  showLineNumbers = true,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative rounded-lg border border-gray-200">
      {filename && (
        <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-700">
          <span>{filename}</span>
          <Button
            variant="default"
            size="sm"
            onClick={copyCode}
            className="opacity-0 group-hover:opacity-100"
          >
            {copied ? (
              <Check size={16} />
            ) : (
              <Copy size={16} />
            )}
          </Button>
        </div>
      )}
      <SyntaxHighlighter
        language={language}
        style={coldarkDark}
        showLineNumbers={showLineNumbers}
        customStyle={{
          margin: 0,
          borderRadius: filename ? "0 0 0.5rem 0.5rem" : "0.5rem",
        }}
      >
        {code.trim()}
      </SyntaxHighlighter>
    </div>
  );
}