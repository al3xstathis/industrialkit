"use client";
import React from "react";
import { cn } from "../../lib/cn";

export interface TableProps
  extends React.TableHTMLAttributes<HTMLTableElement> {
  minimal?: boolean;
  dense?: boolean;
  className?: string;
}

export interface TableHeaderProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {
  className?: string;
}

export interface TableBodyProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {
  className?: string;
}

export interface TableRowProps
  extends React.HTMLAttributes<HTMLTableRowElement> {
  highlighted?: boolean;
  className?: string;
}

export interface TableCellProps
  extends React.TdHTMLAttributes<HTMLTableCellElement> {
  monospace?: boolean;
  className?: string;
}

export interface TableHeaderCellProps
  extends React.ThHTMLAttributes<HTMLTableHeaderCellElement> {
  sorted?: "asc" | "desc";
  className?: string;
}

const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ minimal, dense, className, ...props }, ref) => {
    return (
      <table
        ref={ref}
        className={cn(
          "w-full border-collapse font-mono text-sm",
          minimal ? "border-0" : "border border-gray-200",
          dense ? "text-xs" : "text-sm",
          className
        )}
        {...props}
      />
    );
  }
);

const TableHeader = React.forwardRef<HTMLTableSectionElement, TableHeaderProps>(
  ({ className, ...props }, ref) => {
    return (
      <thead
        ref={ref}
        className={cn("bg-gray-100 uppercase tracking-wider", className)}
        {...props}
      />
    );
  }
);

const TableBody = React.forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ className, ...props }, ref) => {
    return <tbody ref={ref} className={cn("", className)} {...props} />;
  }
);

const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ highlighted, className, ...props }, ref) => {
    return (
      <tr
        ref={ref}
        className={cn(
          "border-t border-gray-200 hover:bg-gray-50",
          highlighted && "bg-yellow-50",
          className
        )}
        {...props}
      />
    );
  }
);

const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ monospace, className, ...props }, ref) => {
    return (
      <td
        ref={ref}
        className={cn("p-2", monospace && "font-mono", className)}
        {...props}
      />
    );
  }
);

const TableHeaderCell = React.forwardRef<
  HTMLTableHeaderCellElement,
  TableHeaderCellProps
>(({ sorted, className, children, ...props }, ref) => {
  return (
    <th
      ref={ref}
      className={cn(
        "p-2 text-left font-bold",
        sorted && "cursor-pointer hover:bg-gray-200",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-1">
        {children}
        {sorted && (
          <span className="text-gray-400">{sorted === "asc" ? "↑" : "↓"}</span>
        )}
      </div>
    </th>
  );
});

Table.displayName = "Table";
TableHeader.displayName = "TableHeader";
TableBody.displayName = "TableBody";
TableRow.displayName = "TableRow";
TableCell.displayName = "TableCell";
TableHeaderCell.displayName = "TableHeaderCell";

export { Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow };
