"use client";
import React from "react";
import { cn } from "../../lib/cn";

export type StatusType =
  | "idle"
  | "processing"
  | "success"
  | "warning"
  | "error"
  | "offline";

export interface StatusIndicatorProps
  extends React.HTMLAttributes<HTMLDivElement> {
  status: StatusType;
  variant?: "default" | "terminal" | "ring";
  size?: "sm" | "md" | "lg";
  pulse?: boolean;
  label?: string;
  showLabel?: boolean;
  className?: string;
}

export const StatusIndicator = React.forwardRef<
  HTMLDivElement,
  StatusIndicatorProps
>(
  (
    {
      status,
      variant = "default",
      size = "md",
      pulse = false,
      label,
      showLabel = false,
      className,
      ...props
    },
    ref,
  ) => {
    const statusConfig = {
      idle: {
        color: "bg-gray-400",
        terminalColor: "bg-green-800",
        ringColor: "border-gray-400",
        label: label || "Idle",
      },
      processing: {
        color: "bg-blue-500",
        terminalColor: "bg-green-500",
        ringColor: "border-blue-500",
        label: label || "Processing",
      },
      success: {
        color: "bg-green-500",
        terminalColor: "bg-green-400",
        ringColor: "border-green-500",
        label: label || "Success",
      },
      warning: {
        color: "bg-yellow-500",
        terminalColor: "bg-yellow-500",
        ringColor: "border-yellow-500",
        label: label || "Warning",
      },
      error: {
        color: "bg-red-500",
        terminalColor: "bg-red-500",
        ringColor: "border-red-500",
        label: label || "Error",
      },
      offline: {
        color: "bg-gray-300",
        terminalColor: "bg-gray-800",
        ringColor: "border-gray-300",
        label: label || "Offline",
      },
    };

    const sizes = {
      sm: "h-2 w-2",
      md: "h-3 w-3",
      lg: "h-4 w-4",
    };

    const ringSizes = {
      sm: "h-3 w-3 border-[2px]",
      md: "h-4 w-4 border-2",
      lg: "h-5 w-5 border-[3px]",
    };

    return (
      <div
        ref={ref}
        className={cn("inline-flex items-center gap-2 font-mono", className)}
        {...props}
      >
        <div className="relative">
          {/* Main indicator */}
          <div
            className={cn(
              "rounded-full",
              variant === "ring" ? ringSizes[size] : sizes[size],
              variant === "default" && statusConfig[status].color,
              variant === "terminal" && statusConfig[status].terminalColor,
              variant === "ring" && [
                "border",
                statusConfig[status].ringColor,
                "bg-transparent",
              ],
              pulse && [
                "after:absolute after:inset-0",
                "after:rounded-full after:animate-ping",
                variant === "default" && `after:${statusConfig[status].color}`,
                variant === "terminal" &&
                  `after:${statusConfig[status].terminalColor}`,
                "after:opacity-75",
              ],
            )}
          />

          {/* Processing animation for ring variant */}
          {variant === "ring" && status === "processing" && (
            <div
              className={cn(
                "absolute inset-0 rounded-full border-2 border-t-transparent",
                statusConfig[status].ringColor,
                "animate-spin",
              )}
            />
          )}
        </div>

        {/* Label */}
        {showLabel && (
          <span
            className={cn(
              "text-xs",
              variant === "terminal" && "text-green-500",
            )}
          >
            {statusConfig[status].label}
          </span>
        )}
      </div>
    );
  },
);

StatusIndicator.displayName = "StatusIndicator";
