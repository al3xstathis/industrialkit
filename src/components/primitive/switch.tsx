// src/components/primitive/switch.tsx
"use client";
import React from "react";
import { cn } from "../../lib/cn";

type SwitchSize = "sm" | "md" | "lg";
type SwitchVariant = "default" | "terminal";

export interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  variant?: SwitchVariant;
  size?: SwitchSize;
  error?: boolean;
  className?: string;
  label?: string;
}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      variant = "default",
      size = "md",
      error,
      className,
      disabled,
      label,
      ...props
    },
    ref,
  ) => {
    return (
      <label
        className={cn(
          "relative inline-flex cursor-pointer items-center gap-3",
          disabled && "cursor-not-allowed opacity-50",
          className,
        )}
      >
        <input
          ref={ref}
          type="checkbox"
          className="peer sr-only"
          disabled={disabled}
          {...props}
        />
        <div
          className={cn(
            "relative",
            // Size variations
            size === "sm" && "h-4 w-7",
            size === "md" && "h-5 w-9",
            size === "lg" && "h-6 w-11",
            // Base styles
            "rounded-full transition-colors",
            "after:absolute after:rounded-full after:bg-white after:transition-transform",
            // After element sizing
            size === "sm" &&
              "after:h-3 after:w-3 after:left-0.5 after:top-[50%] after:-translate-y-1/2",
            size === "md" &&
              "after:h-4 after:w-4 after:left-0.5 after:top-[50%] after:-translate-y-1/2",
            size === "lg" &&
              "after:h-5 after:w-5 after:left-0.5 after:top-[50%] after:-translate-y-1/2",
            // Peer styles
            "peer-checked:after:translate-x-full",
            // Variant styles
            variant === "default" && [
              "border border-gray-200 bg-gray-100",
              "peer-checked:bg-yellow-400 peer-checked:border-yellow-400",
              "peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300",
              error && "border-red-500 peer-focus:ring-red-300",
            ],
            variant === "terminal" && [
              "border border-green-500 bg-black",
              "peer-checked:bg-green-900 peer-checked:bg-opacity-20",
              "peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-900 peer-focus:ring-opacity-20",
              error &&
                "border-red-500 peer-focus:ring-red-900 peer-focus:ring-opacity-20",
            ],
          )}
        />
        {label && (
          <span
            className={cn(
              "text-sm",
              variant === "terminal" && "text-green-400",
              disabled && "text-gray-500",
            )}
          >
            {label}
          </span>
        )}
      </label>
    );
  },
);

Switch.displayName = "Switch";

export { Switch };
