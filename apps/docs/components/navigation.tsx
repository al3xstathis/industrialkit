"use client";
import { Button, cn } from "industrialkit";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const routes = [
  {
    section: "Getting Started",
    items: [
      { path: "/docs/getting-started", label: "Introduction" },
      { path: "/docs/installation", label: "Installation" },
      { path: "/docs/usage", label: "Basic Usage" },
    ],
  },
  {
    section: "Components",
    items: [
      { path: "/docs/components/accordion", label: "Accordion" },
      { path: "/docs/components/badge", label: "Badge" },
      { path: "/docs/components/button", label: "Button" },
      { path: "/docs/components/breadcrumbs", label: "BreadCrumbs" },
      { path: "/docs/components/command-bar", label: "CommandBar" },
      { path: "/docs/components/datagrid", label: "DataGrid" },
      { path: "/docs/components/dialog", label: "Dialog" },
      { path: "/docs/components/form", label: "Form" },
      { path: "/docs/components/input", label: "Input" },
      { path: "/docs/components/panel", label: "Panel" },
      { path: "/docs/components/progress", label: "Progress" },
      { path: "/docs/components/select", label: "Select" },
      { path: "/docs/components/split-view", label: "SplitView" },
      { path: "/docs/components/status-indicator", label: "StatusIndicator" },
      { path: "/docs/components/tabs", label: "Tabs" },
      { path: "/docs/components/terminal", label: "Terminal" },
      { path: "/docs/components/time-series", label: "TimeSeries" },
      { path: "/docs/components/toast", label: "Toast" },
      { path: "/docs/components/tooltip", label: "Tooltip" },
    ],
  },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile nav when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scroll when mobile nav is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const NavContent = () => (
    <>
      {routes.map((section) => (
        <div key={section.section} className="mb-6">
          <h3 className="mb-2 font-bold uppercase text-gray-500">
            {section.section}
          </h3>
          <ul className="space-y-1">
            {section.items.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={cn(
                    "block rounded-sm px-2 py-1.5 text-sm transition-colors",
                    pathname === item.path
                      ? "bg-yellow-100 font-medium text-yellow-900"
                      : "text-gray-600 hover:bg-gray-100",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );

  return (
    <>
      {/* Mobile Nav Toggle */}
      <Button
        variant="default"
        size="md"
        className="fixed right-4 top-4 z-50 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Nav */}
      <nav
        className={cn(
          "fixed inset-y-0 right-0 z-40 w-64 transform overflow-y-auto bg-white px-4 py-6 shadow-lg transition-transform duration-200 ease-in-out lg:hidden",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <NavContent />
      </nav>

      {/* Desktop Nav */}
      <nav className="hidden w-64 overflow-y-auto border-r border-gray-200 bg-gray-50 px-4 py-6 lg:block">
        <NavContent />
      </nav>
    </>
  );
}
