"use client";
import React from "react";
import { cn } from "../../lib/cn";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "solid";
  color?: "gray" | "yellow" | "green" | "red" | "blue";
  className?: string;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = "default", color = "gray", className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center px-2 font-mono text-xs font-bold",
          // Default variant
          variant === "default" &&
            color === "gray" &&
            "bg-gray-100 text-gray-800",
          variant === "default" &&
            color === "yellow" &&
            "bg-yellow-100 text-yellow-800",
          variant === "default" &&
            color === "green" &&
            "bg-green-100 text-green-800",
          variant === "default" && color === "red" && "bg-red-100 text-red-800",
          variant === "default" &&
            color === "blue" &&
            "bg-blue-100 text-blue-800",
          // Outline variant
          variant === "outline" && "border",
          variant === "outline" &&
            color === "gray" &&
            "border-gray-300 text-gray-800",
          variant === "outline" &&
            color === "yellow" &&
            "border-yellow-300 text-yellow-800",
          variant === "outline" &&
            color === "green" &&
            "border-green-300 text-green-800",
          variant === "outline" &&
            color === "red" &&
            "border-red-300 text-red-800",
          variant === "outline" &&
            color === "blue" &&
            "border-blue-300 text-blue-800",
          // Solid variant
          variant === "solid" && color === "gray" && "bg-gray-500 text-white",
          variant === "solid" &&
            color === "yellow" &&
            "bg-yellow-500 text-white",
          variant === "solid" && color === "green" && "bg-green-500 text-white",
          variant === "solid" && color === "red" && "bg-red-500 text-white",
          variant === "solid" && color === "blue" && "bg-blue-500 text-white",
          className
        )}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";

export { Badge };
