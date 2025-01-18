"use client";

import React from "react";
import { cn } from "../../lib/cn";

interface PanelRowProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  value?: React.ReactNode;
  className?: string;
}

interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  variant?: "default" | "bordered" | "filled";
  innerBorders?: boolean;
  className?: string;
}

const Panel = React.forwardRef<HTMLDivElement, PanelProps>(
  (
    {
      title,
      variant = "default",
      innerBorders = false,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "font-mono text-sm",
          variant === "bordered" && "border border-gray-400",
          variant === "filled" && "bg-gray-50",
          className,
        )}
        {...props}
      >
        {title && (
          <div className="bg-yellow-400 px-2 py-1 font-bold">{title}</div>
        )}
        <div
          className={cn(
            "grid divide-y divide-gray-200",
            innerBorders && "[grid-template-columns:auto_1px_1fr]",
            !innerBorders && "grid-cols-[auto_1fr]",
          )}
        >
          {React.Children.map(children, (child) => {
            if (React.isValidElement<PanelRowProps>(child)) {
              return innerBorders ? (
                <>
                  <div className="px-2 py-1 font-bold text-gray-600">
                    {child.props.label}
                  </div>
                  <div className="bg-gray-200" />
                  <div className="px-2 py-1">{child.props.value}</div>
                </>
              ) : (
                <>
                  <div className="px-2 py-1 font-bold text-gray-600">
                    {child.props.label}
                  </div>
                  <div className="px-2 py-1">{child.props.value}</div>
                </>
              );
            }
            return null;
          })}
        </div>
      </div>
    );
  },
);

const PanelRow = React.forwardRef<HTMLDivElement, PanelRowProps>(
  ({ label, value, className, ...props }, ref) => {
    return null; // Acts as a data container only
  },
);

Panel.displayName = "Panel";
PanelRow.displayName = "PanelRow";

export { Panel, PanelRow };
export type { PanelProps, PanelRowProps };
