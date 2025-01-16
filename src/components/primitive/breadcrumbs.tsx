"use client";
import React from "react";
import { cn } from "../../lib/cn";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  variant?: "default" | "terminal";
  separator?: React.ReactNode;
  className?: string;
}

export function Breadcrumbs({
  items,
  variant = "default",
  separator = "/",
  className,
}: BreadcrumbsProps) {
  return (
    <nav
      className={cn(
        "flex items-center space-x-2 font-mono text-sm",
        variant === "default" && "text-gray-600",
        variant === "terminal" && "text-green-400",
        className
      )}
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <React.Fragment key={index}>
            {item.href ? (
              <a
                href={item.href}
                className={cn(
                  "hover:underline",
                  variant === "default" && "text-gray-600 hover:text-gray-800",
                  variant === "terminal" &&
                    "text-green-400 hover:text-green-300",
                  isLast && "font-bold pointer-events-none"
                )}
              >
                {item.label}
              </a>
            ) : (
              <span className={cn(isLast && "font-bold")}>{item.label}</span>
            )}

            {!isLast && (
              <span
                className={cn(
                  "select-none",
                  variant === "default" && "text-gray-400",
                  variant === "terminal" && "text-green-600"
                )}
              >
                {separator}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}

Breadcrumbs.displayName = "Breadcrumbs";
