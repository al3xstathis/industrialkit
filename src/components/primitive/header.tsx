import React from "react";
import { cn } from "../../lib/cn";

interface HeaderProps {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  className?: string;
}

const Header = React.forwardRef<HTMLDivElement, HeaderProps>(
  ({ title, subtitle, action, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center justify-between bg-yellow-400 px-2 py-1 font-mono text-sm gap-2",
          className,
        )}
      >
        <div className="flex items-center gap-2">
          <span className="font-bold">{title}</span>
          {subtitle && <span className="text-gray-700">/ {subtitle}</span>}
        </div>
        {action}
      </div>
    );
  },
);

Header.displayName = "Header";

export { Header };
export type { HeaderProps };
