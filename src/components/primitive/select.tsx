"use client";
import React from "react";
import { cn } from "../../lib/cn";

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "prefix"> {
  variant?: "default" | "terminal";
  error?: boolean;
  prefix?: React.ReactNode;
  className?: string;
  wrapperClassName?: string;
}

export interface OptionGroupProps
  extends React.OptgroupHTMLAttributes<HTMLOptGroupElement> {
  className?: string;
}

export interface OptionProps
  extends React.OptionHTMLAttributes<HTMLOptionElement> {
  className?: string;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      variant = "default",
      error,
      prefix,
      className,
      wrapperClassName,
      children,
      ...props
    },
    ref,
  ) => {
    const select = (
      <select
        ref={ref}
        className={cn(
          "w-full appearance-none bg-white px-2 py-1 pl-2 pr-8 font-mono text-sm outline-none transition-colors",
          // Base styles by variant
          variant === "default" && [
            "border border-black focus:border-yellow-400",
            "bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236b7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22m6%208%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')]",
            "bg-[length:20px_20px] bg-[center_right_4px] bg-no-repeat",
          ],
          variant === "terminal" && [
            "border-0 bg-gray-900 text-green-400 focus:bg-black",
            "bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%2334d399%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22m6%208%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')]",
            "bg-[length:20px_20px] bg-[center_right_4px] bg-no-repeat",
          ],
          // Error state
          error && "border-red-500 focus:border-red-500",
          // Disabled state
          props.disabled && "cursor-not-allowed bg-gray-50 text-gray-500",
          // Remove border radius for prefix
          prefix && "rounded-l-none",
          className,
        )}
        {...props}
      >
        {children}
      </select>
    );

    // If no prefix, return just the select
    if (!prefix) return select;

    // Return select with prefix wrapper
    return (
      <div className={cn("flex font-mono text-sm", wrapperClassName)}>
        <div className="flex items-center border border-r-0 border-gray-600 bg-gray-50 px-2">
          {prefix}
        </div>
        {select}
      </div>
    );
  },
);

const Option = React.forwardRef<HTMLOptionElement, OptionProps>(
  ({ className, ...props }, ref) => {
    return (
      <option ref={ref} className={cn("font-mono", className)} {...props} />
    );
  },
);

const OptionGroup = React.forwardRef<HTMLOptGroupElement, OptionGroupProps>(
  ({ className, ...props }, ref) => {
    return (
      <optgroup ref={ref} className={cn("font-mono", className)} {...props} />
    );
  },
);

Select.displayName = "Select";
Option.displayName = "Option";
OptionGroup.displayName = "OptionGroup";

export { Option, OptionGroup, Select };
