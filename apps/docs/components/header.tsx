"use client";
import { cn } from "industrialkit";
import { Github } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SearchDialog } from "./search/search-dialog";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mainNav = [
    { href: "/", label: "Home" },
    { href: "/docs/getting-started", label: "Docs" },
    { href: "/examples", label: "Examples" },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-30 w-full border-b border-gray-200 bg-white/95 backdrop-blur",
        isScrolled && "shadow-sm",
      )}
    >
      <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-lg font-bold">IndustrialKit</span>
          </Link>

          <nav className="hidden gap-6 md:flex">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm transition-colors hover:text-gray-900",
                  pathname === item.href
                    ? "font-medium text-gray-900"
                    : "text-gray-600",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex">
            <SearchDialog />
          </div>

          <a
            href="https://github.com/yourusername/industrialkit"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
}