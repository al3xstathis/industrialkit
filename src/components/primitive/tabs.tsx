"use client";
import React from "react";
import { cn } from "../../lib/cn";

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  variant?: "default" | "terminal";
  fullWidth?: boolean;
  className?: string;
}

export interface TabListProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export interface TabProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  disabled?: boolean;
  className?: string;
}

export interface TabPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  className?: string;
}

type TabsContextValue = {
  value?: string;
  onValueChange?: (value: string) => void;
  variant?: "default" | "terminal";
};

const TabsContext = React.createContext<TabsContextValue>({});

export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      defaultValue,
      value: controlledValue,
      onValueChange,
      variant = "default",
      fullWidth = false,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const [value, setValue] = React.useState(defaultValue);
    const currentValue = controlledValue ?? value;

    const handleValueChange = (newValue: string) => {
      setValue(newValue);
      onValueChange?.(newValue);
    };

    return (
      <TabsContext.Provider
        value={{
          value: currentValue,
          onValueChange: handleValueChange,
          variant,
        }}
      >
        <div
          ref={ref}
          className={cn("font-mono", fullWidth && "w-full", className)}
          {...props}
        >
          {children}
        </div>
      </TabsContext.Provider>
    );
  },
);

export const TabList = React.forwardRef<HTMLDivElement, TabListProps>(
  ({ className, children, ...props }, ref) => {
    const { variant } = React.useContext(TabsContext);

    return (
      <div
        ref={ref}
        role="tablist"
        className={cn(
          "flex border-b text-sm",
          variant === "default" && "border-gray-200",
          variant === "terminal" && "border-green-500",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

export const Tab = React.forwardRef<HTMLButtonElement, TabProps>(
  ({ value, disabled, className, children, ...props }, ref) => {
    const {
      value: selectedValue,
      onValueChange,
      variant,
    } = React.useContext(TabsContext);
    const isSelected = selectedValue === value;

    return (
      <button
        ref={ref}
        role="tab"
        aria-selected={isSelected}
        disabled={disabled}
        onClick={() => onValueChange?.(value)}
        className={cn(
          "relative px-4 py-2 text-sm font-medium transition-colors",
          variant === "default" && [
            "text-gray-600 hover:text-gray-900",
            isSelected && "text-gray-900",
            disabled && "cursor-not-allowed text-gray-400 hover:text-gray-400",
          ],
          variant === "terminal" && [
            "text-green-400 hover:text-green-300",
            isSelected && "text-green-300",
            disabled &&
              "cursor-not-allowed text-green-800 hover:text-green-800",
          ],
          className,
        )}
        {...props}
      >
        {children}
        {/* Selected indicator */}
        {isSelected && (
          <div
            className={cn(
              "absolute bottom-0 left-0 h-0.5 w-full",
              variant === "default" && "bg-yellow-400",
              variant === "terminal" && "bg-green-500",
            )}
          />
        )}
      </button>
    );
  },
);

export const TabPanel = React.forwardRef<HTMLDivElement, TabPanelProps>(
  ({ value, className, children, ...props }, ref) => {
    const { value: selectedValue } = React.useContext(TabsContext);
    const isSelected = selectedValue === value;

    if (!isSelected) return null;

    return (
      <div
        ref={ref}
        role="tabpanel"
        className={cn("p-4", className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Tabs.displayName = "Tabs";
TabList.displayName = "TabList";
Tab.displayName = "Tab";
TabPanel.displayName = "TabPanel";
