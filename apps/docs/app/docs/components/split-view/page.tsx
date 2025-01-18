'use client'
import { ExampleCard } from "@/components/example-card";
import { SplitView, SplitViewPanel } from "industrialkit";

export default function SplitViewPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">SplitView</h1>
        <p className="text-lg text-gray-600">
          Resizable split panels for creating flexible layouts and workspaces.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Examples</h2>

        <ExampleCard
          title="Basic SplitView"
          description="A simple horizontal split view"
          code={`import { SplitView, SplitViewPanel } from "industrialkit";

export default function BasicExample() {
  return (
    <div className="h-[400px]">
      <SplitView
        first={
          <SplitViewPanel title="Left Panel">
            <div className="p-4">Left panel content</div>
          </SplitViewPanel>
        }
        second={
          <SplitViewPanel title="Right Panel">
            <div className="p-4">Right panel content</div>
          </SplitViewPanel>
        }
      />
    </div>
  );
}`}
        >
          <div className="h-[400px]">
            <SplitView
              first={
                <SplitViewPanel title="Left Panel">
                  <div className="p-4">Left panel content</div>
                </SplitViewPanel>
              }
              second={
                <SplitViewPanel title="Right Panel">
                  <div className="p-4">Right panel content</div>
                </SplitViewPanel>
              }
            />
          </div>
        </ExampleCard>

        <ExampleCard
          title="Vertical Split"
          description="A vertical split layout"
          code={`import { SplitView, SplitViewPanel } from "industrialkit";

export default function VerticalExample() {
  return (
    <div className="h-[400px]">
      <SplitView
        direction="vertical"
        first={
          <SplitViewPanel title="Top Panel">
            <div className="p-4">Top panel content</div>
          </SplitViewPanel>
        }
        second={
          <SplitViewPanel title="Bottom Panel">
            <div className="p-4">Bottom panel content</div>
          </SplitViewPanel>
        }
      />
    </div>
  );
}`}
        >
          <div className="h-[400px]">
            <SplitView
              direction="vertical"
              first={
                <SplitViewPanel title="Top Panel">
                  <div className="p-4">Top panel content</div>
                </SplitViewPanel>
              }
              second={
                <SplitViewPanel title="Bottom Panel">
                  <div className="p-4">Bottom panel content</div>
                </SplitViewPanel>
              }
            />
          </div>
        </ExampleCard>

        <ExampleCard
          title="Terminal Style"
          description="Split view with terminal styling"
          code={`import { SplitView, SplitViewPanel } from "industrialkit";

export default function TerminalExample() {
  return (
    <div className="h-[400px]">
      <SplitView
        variant="terminal"
        first={
          <SplitViewPanel
            variant="terminal"
            title="SYSTEM STATUS"
          >
            <div className="p-4 text-green-400">
              System monitoring active...
            </div>
          </SplitViewPanel>
        }
        second={
          <SplitViewPanel
            variant="terminal"
            title="COMMAND OUTPUT"
          >
            <div className="p-4 text-green-400">
              > Ready for input
            </div>
          </SplitViewPanel>
        }
      />
    </div>
  );
}`}
        >
          <div className="h-[400px]">
            <SplitView
              variant="terminal"
              first={
                <SplitViewPanel
                  variant="terminal"
                  title="SYSTEM STATUS"
                >
                  <div className="p-4 text-green-400">
                    System monitoring active...
                  </div>
                </SplitViewPanel>
              }
              second={
                <SplitViewPanel
                  variant="terminal"
                  title="COMMAND OUTPUT"
                >
                  <div className="p-4 text-green-400">
                    {">"} Ready for input
                  </div>
                </SplitViewPanel>
              }
            />
          </div>
        </ExampleCard>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">API Reference</h2>

        <div>
          <h3 className="text-xl font-bold mb-4">SplitView Props</h3>
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
                  <td className="px-4 py-2 font-mono">direction</td>
                  <td className="px-4 py-2 font-mono">"horizontal" | "vertical"</td>
                  <td className="px-4 py-2 font-mono">"horizontal"</td>
                  <td className="px-4 py-2">Split direction</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">defaultSplit</td>
                  <td className="px-4 py-2 font-mono">number</td>
                  <td className="px-4 py-2 font-mono">50</td>
                  <td className="px-4 py-2">Initial split percentage (0-100)</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">minSize</td>
                  <td className="px-4 py-2 font-mono">number</td>
                  <td className="px-4 py-2 font-mono">100</td>
                  <td className="px-4 py-2">Minimum panel size in pixels</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">variant</td>
                  <td className="px-4 py-2 font-mono">"default" | "terminal"</td>
                  <td className="px-4 py-2 font-mono">"default"</td>
                  <td className="px-4 py-2">Visual style</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">first</td>
                  <td className="px-4 py-2 font-mono">ReactNode</td>
                  <td className="px-4 py-2 font-mono">-</td>
                  <td className="px-4 py-2">First panel content</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">second</td>
                  <td className="px-4 py-2 font-mono">ReactNode</td>
                  <td className="px-4 py-2 font-mono">-</td>
                  <td className="px-4 py-2">Second panel content</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-bold mb-4">SplitViewPanel Props</h3>
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
                  <td className="px-4 py-2 font-mono">title</td>
                  <td className="px-4 py-2 font-mono">string</td>
                  <td className="px-4 py-2 font-mono">-</td>
                  <td className="px-4 py-2">Panel title</td>
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
      </div>
    </div>
  );
}
