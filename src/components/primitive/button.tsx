"use client";
import React from "react";
import { cn } from "../../lib/cn";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "danger" | "terminal";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  active?: boolean;
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "default",
      size = "md",
      loading = false,
      active = false,
      className,
      children,
      disabled,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          // Base styles
          "inline-flex items-center justify-center font-mono transition-colors shadow-sharp-sm hover:shadow-none",
          "disabled:cursor-not-allowed disabled:opacity-50",
          // Size variations
          size === "sm" && "px-4 py-1 text-xs",
          size === "md" && "px-6 py-1 text-sm",
          size === "lg" && "px-8 py-2 text-base",
          // Variant styles
          variant === "default" && [
            "border border-gray-200 bg-white hover:bg-gray-50",
            "active:bg-gray-100",
            active && "bg-gray-100",
          ],
          variant === "primary" && [
            "border border-yellow-400 bg-yellow-400 text-black",
            "hover:bg-yellow-500 hover:border-yellow-500",
            "active:bg-yellow-600 active:border-yellow-600",
            active && "bg-yellow-500 border-yellow-500",
          ],
          variant === "danger" && [
            "border border-red-500 bg-red-500 text-white",
            "hover:bg-red-600 hover:border-red-600",
            "active:bg-red-700 active:border-red-700",
            active && "bg-red-600 border-red-600",
          ],
          variant === "terminal" && [
            "border border-green-500 bg-black text-green-500",
            "hover:bg-green-900 hover:bg-opacity-20",
            "active:bg-green-900 active:bg-opacity-40",
            active && "bg-green-900 bg-opacity-20",
          ],
          className,
        )}
        {...props}
      >
        {loading ? (
          <>
            <span className="opacity-0">{children}</span>
            <span className="absolute inset-0 flex items-center justify-center">
              {variant === "terminal" ? (
                <span className="animate-pulse">PROCESSING...</span>
              ) : (
                <span className="block h-4 w-4 animate-spin border-2 border-current border-t-transparent" />
              )}
            </span>
          </>
        ) : (
          children
        )}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button };
