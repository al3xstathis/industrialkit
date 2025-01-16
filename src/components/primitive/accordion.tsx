"use client";
import React, { createContext, useContext, useState } from "react";
import { cn } from "../../lib/cn";

type AccordionContextValue = {
  value?: string[];
  onValueChange?: (value: string[]) => void;
  variant?: "default" | "terminal";
  multiple?: boolean;
};

const AccordionContext = createContext<AccordionContextValue>({});

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string[];
  onValueChange?: (value: string[]) => void;
  variant?: "default" | "terminal";
  multiple?: boolean;
  className?: string;
}

export interface AccordionItemProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  value: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      value,
      onValueChange,
      variant = "default",
      multiple = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState<string[]>([]);
    const currentValue = value ?? internalValue;

    const handleValueChange = (newValue: string[]) => {
      setInternalValue(newValue);
      onValueChange?.(newValue);
    };

    return (
      <AccordionContext.Provider
        value={{
          value: currentValue,
          onValueChange: handleValueChange,
          variant,
          multiple,
        }}
      >
        <div
          ref={ref}
          className={cn(
            "divide-y font-mono text-sm",
            variant === "default" && [
              "divide-gray-200",
              "border border-gray-200",
            ],
            variant === "terminal" && [
              "divide-green-500",
              "border border-green-500",
            ],
            className
          )}
          {...props}
        >
          {children}
        </div>
      </AccordionContext.Provider>
    );
  }
);

export const AccordionItem = React.forwardRef<
  HTMLDivElement,
  AccordionItemProps
>(
  (
    { value, title, subtitle, disabled, className, children, ...props },
    ref
  ) => {
    const {
      value: selectedValues,
      onValueChange,
      variant,
      multiple,
    } = useContext(AccordionContext);

    const isExpanded = selectedValues?.includes(value);

    const handleClick = () => {
      if (disabled) return;

      const newValue = multiple
        ? isExpanded
          ? (selectedValues ?? []).filter((v) => v !== value)
          : [...(selectedValues ?? []), value]
        : isExpanded
        ? []
        : [value];

      onValueChange?.(newValue);
    };

    return (
      <div
        ref={ref}
        className={cn(
          variant === "default" && "bg-white",
          variant === "terminal" && "bg-black",
          disabled && "opacity-50",
          className
        )}
        {...props}
      >
        <button
          type="button"
          onClick={handleClick}
          disabled={disabled}
          className={cn(
            "flex w-full items-center justify-between px-4 py-2",
            variant === "default" && [
              "hover:bg-gray-50",
              "active:bg-gray-100",
              disabled && "hover:bg-transparent",
            ],
            variant === "terminal" && [
              "text-green-400",
              "hover:bg-green-900 hover:bg-opacity-20",
              "active:bg-green-900 active:bg-opacity-40",
              disabled && "hover:bg-transparent",
            ]
          )}
        >
          <div>
            <div className="font-bold">{title}</div>
            {subtitle && (
              <div
                className={cn(
                  "text-xs",
                  variant === "default" && "text-gray-500",
                  variant === "terminal" && "text-green-600"
                )}
              >
                {subtitle}
              </div>
            )}
          </div>
          <div
            className={cn(
              "ml-2 transition-transform",
              isExpanded && "rotate-180"
            )}
          >
            ▼
          </div>
        </button>
        {isExpanded && (
          <div
            className={cn(
              "overflow-hidden px-4 py-3",
              variant === "default" && "bg-gray-50",
              variant === "terminal" && [
                "bg-green-900 bg-opacity-10",
                "text-green-400",
              ]
            )}
          >
            {children}
          </div>
        )}
      </div>
    );
  }
);

Accordion.displayName = "Accordion";
AccordionItem.displayName = "AccordionItem";
