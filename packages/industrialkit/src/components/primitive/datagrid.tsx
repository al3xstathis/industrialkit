"use client";
import React, { useMemo, useState } from "react";
import { cn } from "../../lib/cn";

export interface Column<T> {
  key: string;
  header: string;
  width?: string;
  sortable?: boolean;
  render?: (value: any, row: T) => React.ReactNode;
}

export interface DataGridProps<T> {
  columns: Column<T>[];
  data: T[];
  variant?: "default" | "terminal";
  selectable?: boolean;
  selectMode?: "single" | "multiple";
  onRowSelect?: (selectedRows: T[]) => void;
  onSort?: (key: string, direction: "asc" | "desc") => void;
  className?: string;
}

export function DataGrid<T extends { id?: string | number }>({
  columns,
  data,
  variant = "default",
  selectable = false,
  selectMode = "multiple",
  onRowSelect,
  onSort,
  className,
}: DataGridProps<T>) {
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "asc" | "desc";
  } | null>(null);
  const [selectedRows, setSelectedRows] = useState<Set<string | number>>(
    new Set(),
  );

  const sortedData = useMemo(() => {
    if (!sortConfig) return data;
    return [...data].sort((a: any, b: any) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];
      if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [data, sortConfig]);

  const handleSort = (key: string) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig?.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
    onSort?.(key, direction);
  };

  const handleRowSelect = (id: string | number) => {
    const newSelected = new Set(selectedRows);
    if (selectMode === "single") {
      // For single select, either select the new row or clear if it's already selected
      if (selectedRows.has(id)) {
        newSelected.clear();
      } else {
        newSelected.clear();
        newSelected.add(id);
      }
    } else {
      // For multiple select, toggle the selection
      if (selectedRows.has(id)) {
        newSelected.delete(id);
      } else {
        newSelected.add(id);
      }
    }
    setSelectedRows(newSelected);
    onRowSelect?.(sortedData.filter((row) => newSelected.has(row.id!)));
  };

  const handleSelectAll = () => {
    if (selectedRows.size === data.length) {
      setSelectedRows(new Set());
      onRowSelect?.([]);
    } else {
      const allIds = new Set(data.map((row) => row.id!));
      setSelectedRows(allIds);
      onRowSelect?.(data);
    }
  };

  return (
    <div
      className={cn(
        "w-full font-mono",
        variant === "default" && "border border-black",
        variant === "terminal" && "border border-green-500 bg-black",
        className,
      )}
    >
      <table className="w-full border-collapse">
        <thead>
          <tr
            className={cn(
              "border-b",
              variant === "default" && "border-gray-200 bg-gray-50",
              variant === "terminal" && "border-green-500 bg-black",
            )}
          >
            {selectable && selectMode === "multiple" && (
              <th
                className={cn(
                  "w-10 border-r px-3 py-2",
                  variant === "default" && "border-gray-200",
                  variant === "terminal" && "border-green-500 text-green-400",
                )}
              >
                <input
                  type="checkbox"
                  className="cursor-pointer"
                  checked={selectedRows.size === data.length}
                  onChange={handleSelectAll}
                />
              </th>
            )}
            {selectable && selectMode === "single" && (
              <th
                className={cn(
                  "w-10 border-r px-3 py-2",
                  variant === "default" && "border-gray-200",
                  variant === "terminal" && "border-green-500 text-green-400",
                )}
              />
            )}
            {columns.map((column, index) => (
              <th
                key={column.key}
                className={cn(
                  "px-3 py-2 text-left font-bold",
                  column.width && `w-[${column.width}]`,
                  index < columns.length - 1 && "border-r",
                  variant === "default" && "border-gray-200",
                  variant === "terminal" && "border-green-500 text-green-400",
                  column.sortable && "cursor-pointer hover:bg-gray-100",
                  variant === "terminal" &&
                    column.sortable &&
                    "hover:bg-green-900 hover:bg-opacity-20",
                )}
                onClick={() => column.sortable && handleSort(column.key)}
              >
                <div className="flex items-center gap-1">
                  {column.header}
                  {column.sortable && sortConfig?.key === column.key && (
                    <span>{sortConfig.direction === "asc" ? "↑" : "↓"}</span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, rowIndex) => (
            <tr
              key={row.id || rowIndex}
              className={cn(
                "border-b",
                variant === "default" && [
                  "border-gray-200",
                  "hover:bg-gray-50",
                  selectedRows.has(row.id!) && "bg-yellow-50",
                ],
                variant === "terminal" && [
                  "border-green-500",
                  "hover:bg-green-900 hover:bg-opacity-10",
                  selectedRows.has(row.id!) && "bg-green-900 bg-opacity-20",
                ],
              )}
            >
              {selectable && (
                <td
                  className={cn(
                    "w-10 border-r px-3 py-2",
                    variant === "default" && "border-gray-200",
                    variant === "terminal" && "border-green-500",
                  )}
                >
                  <input
                    type={selectMode === "single" ? "radio" : "checkbox"}
                    name="row-select"
                    className="cursor-pointer"
                    checked={selectedRows.has(row.id!)}
                    onChange={() => handleRowSelect(row.id!)}
                  />
                </td>
              )}
              {columns.map((column, index) => (
                <td
                  key={column.key}
                  className={cn(
                    "px-3 py-2",
                    column.width && `w-[${column.width}]`,
                    index < columns.length - 1 && "border-r",
                    variant === "default" && "border-gray-200",
                    variant === "terminal" && "border-green-500 text-green-400",
                  )}
                >
                  {column.render
                    ? column.render((row as any)[column.key], row)
                    : (row as any)[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td
              colSpan={columns.length + (selectable ? 1 : 0)}
              className={cn(
                "px-3 py-2 text-xs",
                variant === "default" &&
                  "border-t border-gray-200 text-gray-500",
                variant === "terminal" &&
                  "border-t border-green-500 text-green-400",
              )}
            >
              <div className="flex justify-between">
                <span>{data.length} records</span>
                {selectable && <span>{selectedRows.size} selected</span>}
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

DataGrid.displayName = "DataGrid";
