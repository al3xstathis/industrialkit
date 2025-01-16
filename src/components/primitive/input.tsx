"use client";
import React from "react";
import { cn } from "../../lib/cn";

export interface InputProps {
  variant?: "default" | "terminal" | "id";
  error?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  className?: string;
  wrapperClassName?: string;
}

// Use intersection type to combine with HTML input attributes
const Input = React.forwardRef<
  HTMLInputElement,
  InputProps &
    Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof InputProps>
>(
  (
    {
      variant = "default",
      error,
      prefix,
      suffix,
      className,
      wrapperClassName,
      ...props
    },
    ref,
  ) => {
    // If we have prefix/suffix, wrap the input
    const input = (
      <input
        ref={ref}
        className={cn(
          "w-full bg-white px-2 py-1 font-mono text-sm outline-none transition-colors",
          // Base styles by variant
          variant === "default" &&
            "border border-gray-600 focus:border-yellow-400",
          variant === "terminal" &&
            "border-0 bg-gray-900 text-green-400 focus:bg-black",
          variant === "id" &&
            "border border-gray-600 bg-gray-50 uppercase focus:border-yellow-400",
          // Error state
          error && "border-red-500 focus:border-red-500",
          // Disabled state
          props.disabled && "cursor-not-allowed bg-gray-50 text-gray-500",
          // Remove border radius for prefix/suffix
          prefix && "rounded-l-none",
          suffix && "rounded-r-none",
          className,
        )}
        {...props}
      />
    );

    // If no prefix/suffix, return just the input
    if (!prefix && !suffix) return input;

    // Return input with prefix/suffix wrapper
    return (
      <div className={cn("flex font-mono text-sm", wrapperClassName)}>
        {prefix && (
          <div className="flex items-center border border-r-0 border-gray-600 bg-gray-50 px-2">
            {prefix}
          </div>
        )}
        {input}
        {suffix && (
          <div className="flex items-center border border-l-0 border-gray-600 bg-gray-50 px-2">
            {suffix}
          </div>
        )}
      </div>
    );
  },
);

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: "default" | "terminal";
  error?: boolean;
  className?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ variant = "default", error, className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "w-full border border-gray-200 bg-white px-2 py-1 font-mono text-sm outline-none transition-colors",
          variant === "default" && "focus:border-yellow-400",
          variant === "terminal" &&
            "border-0 bg-gray-900 text-green-400 focus:bg-black",
          error && "border-red-500 focus:border-red-500",
          props.disabled && "cursor-not-allowed bg-gray-50 text-gray-500",
          className,
        )}
        {...props}
      />
    );
  },
);

export interface SearchInputProps extends Omit<InputProps, "type" | "variant"> {
  onSearch?: (value: string) => void;
  name?: string;
  placeholder?: string;
}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ onSearch, className, ...props }, ref) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && onSearch) {
        onSearch((e.target as HTMLInputElement).value);
      }
    };

    return (
      <Input
        ref={ref}
        type="search"
        prefix="⌕"
        className={cn("pl-2", className)}
        onKeyDown={handleKeyDown}
        {...props}
      />
    );
  },
);

export interface NumericInputProps extends InputProps {
  name?: string;
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  allowNegative?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
}

const NumericInput = React.forwardRef<HTMLInputElement, NumericInputProps>(
  (
    {
      min,
      max,
      step = 1,
      defaultValue,
      allowNegative = false,
      onChange,
      onKeyDown,
      ...props
    },
    ref,
  ) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      // Allow: backspace, delete, tab, escape, enter
      if (
        [8, 46, 9, 27, 13].indexOf(e.keyCode) !== -1 ||
        // Allow: Ctrl+A
        (e.keyCode === 65 && e.ctrlKey === true) ||
        // Allow: home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)
      ) {
        return;
      }

      // Allow negative sign if configured
      if (
        allowNegative &&
        e.key === "-" &&
        !e.currentTarget.value.includes("-")
      ) {
        return;
      }

      // Ensure that it is a number and stop the keypress
      if (
        (e.shiftKey || e.keyCode < 48 || e.keyCode > 57) &&
        (e.keyCode < 96 || e.keyCode > 105)
      ) {
        e.preventDefault();
      }

      // Call the original onKeyDown if provided
      onKeyDown?.(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseFloat(e.target.value);

      if (!isNaN(value)) {
        if (min !== undefined && value < min) e.target.value = min.toString();
        if (max !== undefined && value > max) e.target.value = max.toString();
      }

      onChange?.(e);
    };

    return (
      <Input
        ref={ref}
        type="number"
        min={min}
        max={max}
        step={step}
        defaultValue={defaultValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";
Textarea.displayName = "Textarea";
SearchInput.displayName = "SearchInput";
NumericInput.displayName = "NumericInput";

export { Input, NumericInput, SearchInput, Textarea };
