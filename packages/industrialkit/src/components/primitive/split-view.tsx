"use client";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "../../lib/cn";

export interface SplitViewProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "horizontal" | "vertical";
  defaultSplit?: number; // 0-100
  minSize?: number; // pixels
  variant?: "default" | "terminal";
  separator?: React.ReactNode;
  first: React.ReactNode;
  second: React.ReactNode;
  className?: string;
}

export interface SplitViewPanelProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  variant?: "default" | "terminal";
  className?: string;
}

const SplitViewPanel = React.forwardRef<HTMLDivElement, SplitViewPanelProps>(
  ({ title, variant = "default", className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex h-full flex-col font-mono",
          variant === "default" && "border border-gray-200 bg-white",
          variant === "terminal" && "border border-green-500 bg-black",
          className
        )}
        {...props}
      >
        {title && (
          <div
            className={cn(
              "flex items-center border-b px-3 py-2 text-sm font-bold",
              variant === "default" && "border-gray-200 bg-gray-50",
              variant === "terminal" && "border-green-500 text-green-400"
            )}
          >
            {title}
          </div>
        )}
        <div className="flex-1 overflow-auto p-4">{children}</div>
      </div>
    );
  }
);

const SplitView = React.forwardRef<HTMLDivElement, SplitViewProps>(
  (
    {
      direction = "horizontal",
      defaultSplit = 50,
      minSize = 100,
      variant = "default",
      separator,
      first,
      second,
      className,
      ...props
    },
    ref
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isResizing, setIsResizing] = useState(false);
    const [split, setSplit] = useState(defaultSplit);

    useEffect(() => {
      setSplit(defaultSplit);
    }, [defaultSplit]);

    const startResize = (e: React.MouseEvent) => {
      e.preventDefault();
      setIsResizing(true);

      const startPos = direction === "horizontal" ? e.clientX : e.clientY;
      const containerSize =
        direction === "horizontal"
          ? containerRef.current?.offsetWidth
          : containerRef.current?.offsetHeight;
      const startSplit = split;

      const handleMouseMove = (e: MouseEvent) => {
        if (!containerSize) return;

        const currentPos = direction === "horizontal" ? e.clientX : e.clientY;
        const containerRect = containerRef.current?.getBoundingClientRect();
        if (!containerRect) return;

        const offset =
          direction === "horizontal"
            ? currentPos - containerRect.left
            : currentPos - containerRect.top;

        const newSplit = Math.min(
          Math.max(
            (offset / containerSize) * 100,
            (minSize / containerSize) * 100
          ),
          100 - (minSize / containerSize) * 100
        );

        setSplit(newSplit);
      };

      const handleMouseUp = () => {
        setIsResizing(false);
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    };

    return (
      <div
        ref={containerRef}
        className={cn(
          "relative flex h-full w-full font-mono",
          direction === "vertical" && "flex-col",
          className
        )}
        {...props}
      >
        {/* First Panel */}
        <div
          className="overflow-hidden"
          style={{
            flexBasis: `${split}%`,
            flexGrow: 0,
            flexShrink: 0,
          }}
        >
          {first}
        </div>

        {/* Resizer */}
        <div
          className={cn(
            "flex items-center justify-center",
            direction === "horizontal"
              ? "cursor-col-resize"
              : "cursor-row-resize",
            variant === "default" && [
              "bg-gray-100 hover:bg-gray-200",
              isResizing && "bg-gray-200",
            ],
            variant === "terminal" && [
              "bg-green-900 bg-opacity-20 hover:bg-opacity-30",
              isResizing && "bg-opacity-30",
            ],
            direction === "horizontal" ? "w-2" : "h-2"
          )}
          onMouseDown={startResize}
        >
          {separator || (
            <div
              className={cn(
                direction === "horizontal" ? "h-8 w-0.5" : "h-0.5 w-8",
                variant === "default" && "bg-gray-300",
                variant === "terminal" && "bg-green-500"
              )}
            />
          )}
        </div>

        {/* Second Panel */}
        <div
          className="overflow-hidden"
          style={{
            flexBasis: `${100 - split}%`,
            flexGrow: 0,
            flexShrink: 0,
          }}
        >
          {second}
        </div>
      </div>
    );
  }
);

SplitViewPanel.displayName = "SplitViewPanel";
SplitView.displayName = "SplitView";

export { SplitView, SplitViewPanel };
