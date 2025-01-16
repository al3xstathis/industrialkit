"use client";
import React from "react";
import { cn } from "../../lib/cn";

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  showValue?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "terminal";
  status?: "default" | "success" | "warning" | "error";
  className?: string;
}

const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  (
    {
      value,
      max = 100,
      showValue = true,
      size = "md",
      variant = "default",
      status = "default",
      className,
      ...props
    },
    ref
  ) => {
    const percentage = Math.min(100, Math.max(0, (value / max) * 100));

    return (
      <div
        ref={ref}
        className={cn(
          "w-full font-mono",
          size === "sm" && "h-4",
          size === "md" && "h-6",
          size === "lg" && "h-8",
          className
        )}
        {...props}
      >
        <div
          className={cn(
            "relative h-full w-full overflow-hidden border",
            variant === "default" && "border-gray-200 bg-gray-50",
            variant === "terminal" && "border-green-500 bg-black"
          )}
        >
          <div
            className={cn(
              "h-full transition-all duration-300",
              variant === "default" && [
                status === "default" && "bg-yellow-400",
                status === "success" && "bg-green-500",
                status === "warning" && "bg-orange-500",
                status === "error" && "bg-red-500",
              ],
              variant === "terminal" && "bg-green-500"
            )}
            style={{ width: `${percentage}%` }}
          >
            {showValue && (
              <div
                className={cn(
                  "absolute inset-0 flex h-full w-full items-center justify-end px-2 text-xs",
                  variant === "terminal" ? "text-green-400" : "text-gray-900"
                )}
              >
                {variant === "terminal"
                  ? `${Math.round(percentage)}%`
                  : `${value}/${max}`}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);

export interface MeterProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  min?: number;
  max?: number;
  lowThreshold?: number;
  highThreshold?: number;
  showValue?: boolean;
  variant?: "default" | "terminal";
  size?: "sm" | "md" | "lg";
  label?: string;
  className?: string;
}

const Meter = React.forwardRef<HTMLDivElement, MeterProps>(
  (
    {
      value,
      min = 0,
      max = 100,
      lowThreshold = 33,
      highThreshold = 66,
      showValue = true,
      variant = "default",
      size = "md",
      label,
      className,
      ...props
    },
    ref
  ) => {
    const percentage = Math.min(
      100,
      Math.max(0, ((value - min) / (max - min)) * 100)
    );

    const getStatusColor = () => {
      const normalizedLow = ((lowThreshold - min) / (max - min)) * 100;
      const normalizedHigh = ((highThreshold - min) / (max - min)) * 100;

      if (percentage <= normalizedLow) return "bg-red-500";
      if (percentage <= normalizedHigh) return "bg-yellow-400";
      return "bg-green-500";
    };

    return (
      <div
        ref={ref}
        className={cn(
          "w-full font-mono",
          size === "sm" && "space-y-1 text-xs",
          size === "md" && "space-y-2 text-sm",
          size === "lg" && "space-y-2 text-base",
          className
        )}
        {...props}
      >
        {label && (
          <div
            className={cn(
              "flex justify-between",
              variant === "terminal" && "text-green-400"
            )}
          >
            <span>{label}</span>
            {showValue && <span>{value}</span>}
          </div>
        )}
        <div
          className={cn(
            "relative h-2 w-full overflow-hidden",
            variant === "default" && "border border-gray-200 bg-gray-50",
            variant === "terminal" && "border border-green-500 bg-black"
          )}
        >
          <div
            className={cn(
              "absolute h-full transition-all duration-300",
              variant === "terminal" ? "bg-green-500" : getStatusColor()
            )}
            style={{ width: `${percentage}%` }}
          />
        </div>
        <div
          className={cn(
            "flex justify-between text-xs",
            variant === "terminal" && "text-green-400"
          )}
        >
          <span>{min}</span>
          <span>{max}</span>
        </div>
      </div>
    );
  }
);

ProgressBar.displayName = "ProgressBar";
Meter.displayName = "Meter";

export { Meter, ProgressBar };
