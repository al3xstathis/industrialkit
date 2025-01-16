"use client";
import React from "react";
import { cn } from "../../lib/cn";

export interface CommandAction {
  key: string;
  label: string;
  disabled?: boolean;
  onClick?: () => void;
}

export interface StatusItem {
  label: string;
  value: string | React.ReactNode;
  alert?: boolean;
}

export interface CommandBarProps extends React.HTMLAttributes<HTMLDivElement> {
  actions?: CommandAction[];
  status?: StatusItem[];
  variant?: "default" | "terminal";
  position?: "top" | "bottom";
  className?: string;
}

const CommandBar = React.forwardRef<HTMLDivElement, CommandBarProps>(
  (
    {
      actions = [],
      status = [],
      variant = "default",
      position = "bottom",
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "font-mono text-sm",
          variant === "default" && "border-gray-200 bg-gray-50",
          variant === "terminal" && "border-green-500 bg-black",
          position === "top" && "border-b",
          position === "bottom" && "border-t",
          className,
        )}
        {...props}
      >
        <div className="flex h-14 items-center justify-between px-4 gap-2">
          {/* Function Key Actions */}
          <div className="flex items-center gap-6">
            {actions.map((action) => (
              <button
                key={action.key}
                onClick={action.onClick}
                disabled={action.disabled}
                className={cn(
                  "flex items-center gap-2 transition-colors",
                  variant === "default" && [
                    "text-gray-600 hover:text-gray-900",
                    action.disabled && "cursor-not-allowed text-gray-400",
                  ],
                  variant === "terminal" && [
                    "text-green-400 hover:text-green-300",
                    action.disabled && "cursor-not-allowed text-green-800",
                  ],
                )}
              >
                <span
                  className={cn(
                    "flex h-7 min-w-[28px] items-center justify-center border px-1  hover:shadow-sharp-sm",
                    variant === "default" && [
                      "border-gray-300 bg-white",
                      action.disabled && "bg-gray-50",
                    ],
                    variant === "terminal" && [
                      "border-green-500 bg-black",
                      action.disabled && "border-green-800",
                    ],
                  )}
                >
                  {action.key}
                </span>
                <span className="min-w-[48px]">{action.label}</span>
              </button>
            ))}
          </div>

          {/* Status Items */}
          <div className="flex items-center gap-6">
            {status.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "flex items-center gap-3",
                  variant === "default" && [
                    "text-gray-600",
                    item.alert && "text-red-600",
                  ],
                  variant === "terminal" && [
                    "text-green-400",
                    item.alert && "text-red-500",
                  ],
                )}
              >
                <span className="text-xs uppercase">{item.label}:</span>
                <span
                  className={cn("font-bold", item.alert && "animate-pulse")}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },
);

CommandBar.displayName = "CommandBar";

export { CommandBar };
