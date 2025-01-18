'use client'
import { Panel, PanelRow } from "industrialkit";
import { ExampleCard } from "@/components/example-card";

export default function PanelPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Panel</h1>
        <p className="text-lg text-gray-600">
          Information panels for displaying structured data in key-value format.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Examples</h2>

        <ExampleCard
          title="Basic Panel"
          description="Simple panel with key-value pairs"
          code={`import { Panel, PanelRow } from "industrialkit";

export default function BasicExample() {
  return (
    <Panel title="System Information">
      <PanelRow label="Status" value="Online" />
      <PanelRow label="Uptime" value="24h 13m" />
      <PanelRow label="CPU Usage" value="45%" />
      <PanelRow label="Memory" value="2.5GB / 8GB" />
    </Panel>
  );
}`}
        >
          <Panel title="System Information">
            <PanelRow label="Status" value="Online" />
            <PanelRow label="Uptime" value="24h 13m" />
            <PanelRow label="CPU Usage" value="45%" />
            <PanelRow label="Memory" value="2.5GB / 8GB" />
          </Panel>
        </ExampleCard>

        <ExampleCard
          title="Panel Variants"
          description="Different panel styles"
          code={`import { Panel, PanelRow } from "industrialkit";

export default function VariantsExample() {
  return (
    <div className="space-y-4">
      <Panel variant="default" title="Default Panel">
        <PanelRow label="Name" value="System Monitor" />
        <PanelRow label="Version" value="1.0.0" />
      </Panel>

      <Panel variant="bordered" title="Bordered Panel">
        <PanelRow label="Name" value="System Monitor" />
        <PanelRow label="Version" value="1.0.0" />
      </Panel>

      <Panel variant="filled" title="Filled Panel">
        <PanelRow label="Name" value="System Monitor" />
        <PanelRow label="Version" value="1.0.0" />
      </Panel>
    </div>
  );
}`}
        >
          <div className="space-y-4">
            <Panel variant="default" title="Default Panel">
              <PanelRow label="Name" value="System Monitor" />
              <PanelRow label="Version" value="1.0.0" />
            </Panel>

            <Panel variant="bordered" title="Bordered Panel">
              <PanelRow label="Name" value="System Monitor" />
              <PanelRow label="Version" value="1.0.0" />
            </Panel>

            <Panel variant="filled" title="Filled Panel">
              <PanelRow label="Name" value="System Monitor" />
              <PanelRow label="Version" value="1.0.0" />
            </Panel>
          </div>
        </ExampleCard>

        <ExampleCard
          title="Inner Borders"
          description="Panel with borders between rows"
          code={`import { Panel, PanelRow } from "industrialkit";

export default function InnerBordersExample() {
  return (
    <Panel title="Device Information" innerBorders>
      <PanelRow label="Manufacturer" value="IndustrialCorp" />
      <PanelRow label="Model" value="ICM-2000" />
      <PanelRow label="Serial Number" value="ICM2000-123456" />
      <PanelRow label="Installation Date" value="2024-01-15" />
    </Panel>
  );
}`}
        >
          <Panel title="Device Information" innerBorders>
            <PanelRow label="Manufacturer" value="IndustrialCorp" />
            <PanelRow label="Model" value="ICM-2000" />
            <PanelRow label="Serial Number" value="ICM2000-123456" />
            <PanelRow label="Installation Date" value="2024-01-15" />
          </Panel>
        </ExampleCard>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">API Reference</h2>
        
        <div>
          <h3 className="text-xl font-bold mb-4">Panel Props</h3>
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
                  <td className="px-4 py-2 font-mono">"default" | "bordered" | "filled"</td>
                  <td className="px-4 py-2 font-mono">"default"</td>
                  <td className="px-4 py-2">Panel style variant</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">innerBorders</td>
                  <td className="px-4 py-2 font-mono">boolean</td>
                  <td className="px-4 py-2 font-mono">false</td>
                  <td className="px-4 py-2">Show borders between rows</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-bold mb-4">PanelRow Props</h3>
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
                  <td className="px-4 py-2 font-mono">label</td>
                  <td className="px-4 py-2 font-mono">string</td>
                  <td className="px-4 py-2 font-mono">-</td>
                  <td className="px-4 py-2">Row label</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">value</td>
                  <td className="px-4 py-2 font-mono">ReactNode</td>
                  <td className="px-4 py-2 font-mono">-</td>
                  <td className="px-4 py-2">Row value</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}