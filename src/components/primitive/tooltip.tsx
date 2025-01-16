"use client";
import React, { useState } from "react";
import { cn } from "../../lib/cn";

export interface TooltipProps {
  content: React.ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  variant?: "default" | "terminal";
  className?: string;
  children: React.ReactElement<any>; // Update children type
}

export const Tooltip = ({
  content,
  side = "top",
  align = "center",
  variant = "default",
  className,
  children,
}: TooltipProps) => {
  const [show, setShow] = useState(false);

  const positions = {
    top: {
      start: "bottom-full left-0 mb-2",
      center: "bottom-full left-1/2 -translate-x-1/2 mb-2",
      end: "bottom-full right-0 mb-2",
    },
    right: {
      start: "left-full top-0 ml-2",
      center: "left-full top-1/2 -translate-y-1/2 ml-2",
      end: "left-full bottom-0 ml-2",
    },
    bottom: {
      start: "top-full left-0 mt-2",
      center: "top-full left-1/2 -translate-x-1/2 mt-2",
      end: "top-full right-0 mt-2",
    },
    left: {
      start: "right-full top-0 mr-2",
      center: "right-full top-1/2 -translate-y-1/2 mr-2",
      end: "right-full bottom-0 mr-2",
    },
  };

  const arrows = {
    top: "bottom-[-4px] border-t-gray-900 border-l-transparent border-r-transparent border-b-transparent",
    right:
      "left-[-4px] border-r-gray-900 border-t-transparent border-b-transparent border-l-transparent",
    bottom:
      "top-[-4px] border-b-gray-900 border-l-transparent border-r-transparent border-t-transparent",
    left: "right-[-4px] border-l-gray-900 border-t-transparent border-b-transparent border-r-transparent",
  };

  const arrowAlignments = {
    start: "left-2",
    center: "left-1/2 -translate-x-1/2",
    end: "right-2",
  };

  return (
    <div className="relative inline-block">
      {React.cloneElement(children, {
        onMouseEnter: () => setShow(true),
        onMouseLeave: () => setShow(false),
      } as React.HTMLAttributes<HTMLElement>)}{" "}
      {show && (
        <div
          className={cn(
            "absolute z-50 whitespace-nowrap rounded px-2 py-1 text-sm",
            variant === "default" && "bg-gray-900 text-white",
            variant === "terminal" &&
              "border border-green-500 bg-black text-green-400",
            positions[side][align],
            className
          )}
        >
          {content}
          <div
            className={cn(
              "absolute border-4",
              variant === "default" && arrows[side],
              variant === "terminal" && "border-green-500",
              arrowAlignments[align]
            )}
          />
        </div>
      )}
    </div>
  );
};

Tooltip.displayName = "Tooltip";
