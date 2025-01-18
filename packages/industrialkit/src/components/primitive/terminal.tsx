"use client";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "../../lib/cn";

export interface TerminalProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  lines?: string[];
  loading?: boolean;
  maxHeight?: string;
  highlightLines?: number[];
  className?: string;
}

export interface TerminalLineProps
  extends React.HTMLAttributes<HTMLDivElement> {
  prefix?: string;
  content: string;
  highlight?: boolean;
  timestamp?: boolean;
  className?: string;
}

const TerminalLine = React.forwardRef<HTMLDivElement, TerminalLineProps>(
  (
    { prefix = "$", content, highlight, timestamp, className, ...props },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex gap-2 font-mono text-sm text-gray-300",
          highlight && "bg-gray-700 bg-opacity-50",
          className,
        )}
        {...props}
      >
        {timestamp && (
          <span className="shrink-0 text-gray-500">
            {new Date().toLocaleTimeString()}
          </span>
        )}
        <span className="shrink-0 text-gray-500">{prefix}</span>
        <span className="break-all">{content}</span>
      </div>
    );
  },
);

const Terminal = React.forwardRef<HTMLDivElement, TerminalProps>(
  (
    {
      title = "Terminal",
      lines = [],
      loading,
      maxHeight = "24rem",
      highlightLines = [],
      className,
      ...props
    },
    ref,
  ) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      if (!scrolled && scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    }, [lines, scrolled]);

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
      const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
      const isScrolledToBottom = scrollHeight - (scrollTop + clientHeight) < 1;
      setScrolled(!isScrolledToBottom);
    };

    return (
      <div
        ref={ref}
        className={cn(
          "w-full overflow-hidden rounded-md border border-gray-700 bg-gray-900 font-mono shadow-sm",
          className,
        )}
        {...props}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-gray-700 bg-gray-800 px-3 py-2">
          <div className="text-sm text-gray-300">{title}</div>
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-gray-600"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-gray-600"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-gray-600"></div>
          </div>
        </div>

        {/* Terminal Content */}
        <div
          ref={scrollRef}
          className="overflow-auto p-3"
          style={{ maxHeight }}
          onScroll={handleScroll}
        >
          {lines.map((line, index) => (
            <TerminalLine
              key={index}
              content={line}
              highlight={highlightLines.includes(index)}
              prefix={line?.startsWith(">") ? ">" : "$"}
            />
          ))}
          {loading && (
            <TerminalLine content="" prefix="$" className="animate-pulse" />
          )}
        </div>

        {/* Terminal Footer */}
        <div className="flex items-center justify-between border-t border-gray-700 bg-gray-800 px-3 py-2 text-xs text-gray-500">
          <span>{lines.length} lines</span>
          <span>{scrolled ? "Scrolled" : "End"}</span>
        </div>
      </div>
    );
  },
);

TerminalLine.displayName = "TerminalLine";
Terminal.displayName = "Terminal";

export { Terminal, TerminalLine };
