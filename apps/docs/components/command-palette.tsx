"use client";
import { Command } from "lucide-react";
import * as React from "react";
import { createPortal } from "react-dom";
import { cn } from "industrialkit";

type CommandPaletteProps = {
  isOpen: boolean;
  onChangeOpen: (open: boolean) => void;
  search: string;
  onChangeSearch: (search: string) => void;
  children: React.ReactNode;
  placeholder?: string;
};

type CommandGroupProps = {
  heading: string;
  children: React.ReactNode;
};

type CommandItemProps = {
  onSelect?: () => void;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

function CommandPalette({
  isOpen,
  onChangeOpen,
  search,
  onChangeSearch,
  children,
  placeholder = "Type a command or search...",
}: CommandPaletteProps) {
  const [mounted, setMounted] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        e.preventDefault();
        onChangeOpen(false);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [isOpen, onChangeOpen]);

  // Focus input when opened
  React.useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  if (!mounted) return null;

  const content = (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50"
          onClick={() => onChangeOpen(false)}
        />
      )}
      <div
        className={cn(
          "fixed inset-x-0 top-24 z-50 mx-auto max-w-2xl transform px-4 transition-all duration-200",
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"
        )}
      >
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-xl">
          <div className="border-b border-gray-200 px-3 py-4">
            <div className="flex items-center gap-3">
              <Command className="h-5 w-5 text-gray-400" />
              <input
                ref={inputRef}
                className="flex-1 bg-transparent text-base outline-none placeholder:text-gray-400"
                placeholder={placeholder}
                value={search}
                onChange={(e) => onChangeSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="max-h-[60vh] overflow-y-auto p-2">
            {children}
          </div>
        </div>
      </div>
    </>
  );

  return createPortal(content, document.body);
}

function CommandGroup({ heading, children }: CommandGroupProps) {
  return (
    <div className="mb-4 last:mb-0">
      {heading && (
        <div className="mb-2 px-2 text-xs font-bold uppercase text-gray-500">
          {heading}
        </div>
      )}
      <div className="space-y-1">
        {children}
      </div>
    </div>
  );
}

function CommandItem({ onSelect, icon, children, className }: CommandItemProps) {
  return (
    <button
      onClick={onSelect}
      className={cn(
        "flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm text-gray-900",
        "hover:bg-gray-100 focus:bg-gray-100 focus:outline-none",
        className
      )}
    >
      {icon && <span className="flex h-5 w-5 items-center justify-center">{icon}</span>}
      {children}
    </button>
  );
}

CommandPalette.Group = CommandGroup;
CommandPalette.Item = CommandItem;

export { CommandPalette };