"use client";

import React, { useEffect } from "react";
import { cn } from "../../lib/cn";

export interface DialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  variant?: "default" | "terminal";
  alert?: boolean;
  children?: React.ReactNode;
  actions?: React.ReactNode;
  cancelText?: string;
  className?: string;
}

export const Dialog = React.forwardRef<HTMLDivElement, DialogProps>(
  (
    {
      open,
      onClose,
      title,
      variant = "default",
      alert = false,
      children,
      actions,
      cancelText = "Cancel",
      className,
      ...props
    },
    ref,
  ) => {
    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
        }
      };

      if (open) {
        document.addEventListener("keydown", handleKeyDown);
      } else {
        document.removeEventListener("keydown", handleKeyDown);
      }

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, [open, onClose]);

    if (!open) return null;

    const handleBackdropClick = (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    };

    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
        onClick={handleBackdropClick}
      >
        <div
          ref={ref}
          className={cn(
            "w-full max-w-lg font-mono shadow-sharp",
            variant === "default" && [
              "border border-gray-200 bg-white",
              alert && "border-red-500",
            ],
            variant === "terminal" && [
              "border border-green-500 bg-black",
              alert && "border-red-500",
            ],
            className,
          )}
          {...props}
        >
          {/* Header */}
          <div
            className={cn(
              "flex items-center justify-between border-b px-4 py-3",
              variant === "default" && [
                "border-gray-200 bg-gray-50",
                alert && "border-red-500 bg-red-50",
              ],
              variant === "terminal" && [
                "border-green-500 bg-black",
                alert && "border-red-500",
              ],
            )}
          >
            <div
              className={cn(
                "text-sm font-bold uppercase",
                variant === "terminal" && "text-green-400",
                alert && variant === "terminal" && "text-red-500",
              )}
            >
              {title}
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span>[ESC]</span>
              <button
                onClick={onClose}
                className={cn(
                  "flex h-6 w-6 items-center justify-center border",
                  variant === "default" && [
                    "border-gray-200 hover:bg-gray-100",
                    alert && "border-red-200 hover:bg-red-50",
                  ],
                  variant === "terminal" && [
                    "border-green-500 text-green-400 hover:bg-green-900 hover:bg-opacity-20",
                    alert &&
                      "border-red-500 text-red-500 hover:bg-red-900 hover:bg-opacity-20",
                  ],
                )}
              >
                ×
              </button>
            </div>
          </div>

          {/* Content */}
          <div
            className={cn("p-4", variant === "terminal" && "text-green-400")}
          >
            {children}
          </div>

          {/* Footer */}
          {(actions || cancelText) && (
            <div
              className={cn(
                "flex items-center justify-end gap-2 border-t px-4 py-3",
                variant === "default" && "border-gray-200 bg-gray-50",
                variant === "terminal" && "border-green-500",
              )}
            >
              {actions}
              <button
                onClick={onClose}
                className={cn(
                  "px-4 py-1 text-sm transition-colors",
                  variant === "default" &&
                    "border border-gray-200 bg-white hover:bg-gray-50",
                  variant === "terminal" &&
                    "border border-green-500 text-green-400 hover:bg-green-900 hover:bg-opacity-20",
                )}
              >
                {cancelText}
              </button>
            </div>
          )}
        </div>
      </div>
    );
  },
);

Dialog.displayName = "Dialog";
