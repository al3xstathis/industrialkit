'use client'
import { Breadcrumbs } from "industrialkit";
import { ExampleCard } from "@/components/example-card";

export default function BreadcrumbsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Breadcrumbs</h1>
        <p className="text-lg text-gray-600">
          Navigation component showing the current location hierarchy.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Examples</h2>

        <ExampleCard
          title="Basic Breadcrumbs"
          description="Simple navigation path"
          code={`import { Breadcrumbs } from "industrialkit";

export default function BasicExample() {
  return (
    <Breadcrumbs
      items={[
        { label: "Home", href: "/" },
        { label: "Devices", href: "/devices" },
        { label: "Reactor 1" },
      ]}
    />
  );
}`}
        >
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Devices", href: "/devices" },
              { label: "Reactor 1" },
            ]}
          />
        </ExampleCard>

        <ExampleCard
          title="Custom Separator"
          description="Breadcrumbs with custom separator"
          code={`import { Breadcrumbs } from "industrialkit";

export default function SeparatorExample() {
  return (
    <div className="space-y-4">
      <Breadcrumbs
        items={[
          { label: "Settings", href: "/settings" },
          { label: "Security", href: "/settings/security" },
          { label: "Permissions" },
        ]}
        separator=">"
      />

      <Breadcrumbs
        items={[
          { label: "Projects", href: "/projects" },
          { label: "Project A", href: "/projects/a" },
          { label: "Settings" },
        ]}
        separator="|"
      />
    </div>
  );
}`}
        >
          <div className="space-y-4">
            <Breadcrumbs
              items={[
                { label: "Settings", href: "/settings" },
                { label: "Security", href: "/settings/security" },
                { label: "Permissions" },
              ]}
              separator=">"
            />

            <Breadcrumbs
              items={[
                { label: "Projects", href: "/projects" },
                { label: "Project A", href: "/projects/a" },
                { label: "Settings" },
              ]}
              separator="|"
            />
          </div>
        </ExampleCard>

        <ExampleCard
          title="Terminal Style"
          description="Terminal-themed breadcrumbs"
          code={`import { Breadcrumbs } from "industrialkit";

export default function TerminalExample() {
  return (
    <Breadcrumbs
      variant="terminal"
      items={[
        { label: "ROOT", href: "/" },
        { label: "SYSTEM", href: "/system" },
        { label: "PROCESSES" },
      ]}
    />
  );
}`}
        >
          <Breadcrumbs
            variant="terminal"
            items={[
              { label: "ROOT", href: "/" },
              { label: "SYSTEM", href: "/system" },
              { label: "PROCESSES" },
            ]}
          />
        </ExampleCard>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">API Reference</h2>
        
        <div>
          <h3 className="text-xl font-bold mb-4">Breadcrumbs Props</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-2 font-bold">Prop</th>
                  <th className="px-4 py-2 font-bold">Type</th>
                  <th className="px-4 py-2 font-bold">Default</th>
                  <th className="px-4 py-2 font-bold">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">items</td>
                  <td className="px-4 py-2 font-mono">BreadcrumbItem[]</td>
                  <td className="px-4 py-2 font-mono">[]</td>
                  <td className="px-4 py-2">Array of breadcrumb items</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">separator</td>
                  <td className="px-4 py-2 font-mono">ReactNode</td>
                  <td className="px-4 py-2 font-mono">/</td>
                  <td className="px-4 py-2">Custom separator between items</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">variant</td>
                  <td className="px-4 py-2 font-mono">"default" | "terminal"</td>
                  <td className="px-4 py-2 font-mono">"default"</td>
                  <td className="px-4 py-2">Visual style</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-bold mb-4">BreadcrumbItem Type</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-2 font-bold">Property</th>
                  <th className="px-4 py-2 font-bold">Type</th>
                  <th className="px-4 py-2 font-bold">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">label</td>
                  <td className="px-4 py-2 font-mono">string</td>
                  <td className="px-4 py-2">Display text for the item</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">href</td>
                  <td className="px-4 py-2 font-mono">string?</td>
                  <td className="px-4 py-2">Optional link URL</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}