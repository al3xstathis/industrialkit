"use client";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "../../lib/cn";

export type ToastType = "info" | "success" | "warning" | "error";

export interface Toast {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
  duration?: number;
  isPersistent?: boolean;
}

export interface ToastProps extends Toast {
  onClose: (id: string) => void;
  variant?: "default" | "terminal";
}

export interface ToastProviderProps {
  children: React.ReactNode;
  variant?: "default" | "terminal";
}

interface ToastContextValue {
  showToast: (toast: Omit<Toast, "id">) => void;
  closeToast: (id: string) => void;
}

export const ToastContext = React.createContext<ToastContextValue>({
  showToast: () => {},
  closeToast: () => {},
});

const ToastComponent = React.forwardRef<HTMLDivElement, ToastProps>(
  (
    {
      id,
      type,
      title,
      message,
      duration = 5000,
      isPersistent = false,
      variant = "default",
      onClose,
    },
    ref,
  ) => {
    const [isClosing, setIsClosing] = useState(false);
    const [progress, setProgress] = useState(100);

    useEffect(() => {
      if (isPersistent) return;

      const startTime = Date.now();
      const endTime = startTime + duration;

      const progressInterval = setInterval(() => {
        const now = Date.now();
        const remaining = Math.max(0, endTime - now);
        const newProgress = (remaining / duration) * 100;

        if (newProgress <= 0) {
          clearInterval(progressInterval);
          setIsClosing(true);
          setTimeout(() => onClose(id), 200);
        } else {
          setProgress(newProgress);
        }
      }, 100);

      return () => clearInterval(progressInterval);
    }, [duration, id, isPersistent, onClose]);

    const typeStyles = {
      info: {
        default: "border-blue-500 bg-blue-50",
        terminal: "border-blue-500 bg-black text-blue-400",
        icon: "ℹ",
      },
      success: {
        default: "border-green-500 bg-green-50",
        terminal: "border-green-500 bg-black text-green-400",
        icon: "✓",
      },
      warning: {
        default: "border-yellow-500 bg-yellow-50",
        terminal: "border-yellow-500 bg-black text-yellow-400",
        icon: "⚠",
      },
      error: {
        default: "border-red-500 bg-red-50",
        terminal: "border-red-500 bg-black text-red-400",
        icon: "✕",
      },
    };

    return (
      <div
        ref={ref}
        className={cn(
          "relative mb-2 w-96 overflow-hidden border font-mono text-sm shadow-lg transition-all duration-200",
          variant === "default" && typeStyles[type].default,
          variant === "terminal" && typeStyles[type].terminal,
          isClosing && "translate-x-full opacity-0",
        )}
      >
        {/* Progress bar */}
        {!isPersistent && (
          <div
            className={cn(
              "absolute bottom-0 left-0 h-0.5 transition-all duration-100",
              variant === "default" && "bg-gray-300",
              variant === "terminal" && "bg-gray-600",
            )}
            style={{ width: `${progress}%` }}
          />
        )}

        <div className="flex items-start gap-3 p-3">
          {/* Icon */}
          <div className="pt-0.5 text-lg">{typeStyles[type].icon}</div>

          {/* Content */}
          <div className="flex-1 space-y-1">
            <div className="font-bold">{title}</div>
            {message && <div className="text-sm opacity-90">{message}</div>}
          </div>

          {/* Close button */}
          <button
            onClick={() => {
              setIsClosing(true);
              setTimeout(() => onClose(id), 200);
            }}
            className={cn(
              "ml-auto -mr-1 flex h-6 w-6 items-center justify-center rounded-sm transition-colors",
              variant === "default" && "hover:bg-black hover:bg-opacity-5",
              variant === "terminal" && "hover:bg-white hover:bg-opacity-5",
            )}
          >
            ×
          </button>
        </div>
      </div>
    );
  },
);

export const ToastProvider: React.FC<ToastProviderProps> = ({
  children,
  variant = "default",
}) => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const showToast = (toast: Omit<Toast, "id">) => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts((prev) => [...prev, { ...toast, id }]);
  };

  const closeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast, closeToast }}>
      {children}
      {isMounted &&
        createPortal(
          <div className="fixed right-0 top-0 z-50 m-4 flex flex-col items-end">
            {toasts.map((toast) => (
              <ToastComponent
                key={toast.id}
                {...toast}
                variant={variant}
                onClose={closeToast}
              />
            ))}
          </div>,
          document.body,
        )}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

ToastComponent.displayName = "Toast";
