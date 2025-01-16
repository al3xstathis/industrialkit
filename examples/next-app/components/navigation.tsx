"use client";
import { cn } from "industrydb";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  { path: "/", label: "Dashboard", icon: "⚡" },
  { path: "/processes", label: "Processes", icon: "🔧" },
  { path: "/metrics", label: "Metrics", icon: "📊" },
  { path: "/alarms", label: "Alarms", icon: "⚠️" },
  { path: "/devices", label: "Devices", icon: "🏭" },
  { path: "/logs", label: "System Logs", icon: "📋" },
  { path: "/settings", label: "Settings", icon: "⚙️" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="w-56 border-r border-zinc-700 bg-zinc-200">
      <div className="space-y-0.5 p-3">
        {routes.map((route) => (
          <Link
            key={route.path}
            href={route.path}
            className={cn(
              "flex items-center gap-3 rounded-sm px-4 py-3 text-sm transition-all duration-150",
              pathname === route.path
                ? "bg-yellow-100 font-medium text-zinc-900 shadow-sharp-sm"
                : "text-zinc-900 hover:bg-zinc-100 hover:text-zinc-900 hover:shadow-sharp-sm",
            )}
          >
            <span className="text-lg">{route.icon}</span>
            {route.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
