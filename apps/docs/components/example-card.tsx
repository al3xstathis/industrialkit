"use client";
import { useState } from "react";
import { CodeBlock } from "./code-block";
import { cn } from "industrialkit";

interface ExampleCardProps {
  title: string;
  description?: string;
  code: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function ExampleCard({
  title,
  description,
  code,
  children,
  defaultOpen = false,
}: ExampleCardProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200">
      <div className="border-b border-gray-200 bg-gray-50 px-4 py-3">
        <h3 className="text-lg font-semibold">{title}</h3>
        {description && (
          <p className="mt-1 text-sm text-gray-600">{description}</p>
        )}
      </div>
      <div className="p-4">{children}</div>
      <div className="border-t border-gray-200">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "flex w-full items-center justify-between px-4 py-2 text-sm",
            "bg-gray-50 hover:bg-gray-100",
          )}
        >
          <span>View Code</span>
          <span>{isOpen ? "▼" : "▶"}</span>
        </button>
        {isOpen && <CodeBlock code={code} />}
      </div>
    </div>
  );
}