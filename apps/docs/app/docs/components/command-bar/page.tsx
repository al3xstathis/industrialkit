'use client'
import { ExampleCard } from "@/components/example-card";
import { CommandBar } from "industrialkit";

export default function CommandBarPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">CommandBar</h1>
        <p className="text-lg text-gray-600">
          A command bar for displaying actions and status information, commonly used in industrial interfaces.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Examples</h2>

        <ExampleCard
          title="Basic CommandBar"
          description="Command bar with actions and status items"
          code={`import { CommandBar } from "industrialkit";

export default function BasicExample() {
  return (
    <CommandBar
      actions={[
        { key: "F1", label: "Help" },
        { key: "F2", label: "Save" },
        { key: "F3", label: "Delete" },
      ]}
      status={[
        { label: "Status", value: "Ready" },
        { label: "User", value: "Admin" },
      ]}
    />
  );
}`}
        >
          <CommandBar
            actions={[
              { key: "F1", label: "Help" },
              { key: "F2", label: "Save" },
              { key: "F3", label: "Delete" },
            ]}
            status={[
              { label: "Status", value: "Ready" },
              { label: "User", value: "Admin" },
            ]}
          />
        </ExampleCard>

        <ExampleCard
          title="Interactive Commands"
          description="Command bar with clickable actions"
          code={`import { CommandBar } from "industrialkit";

export default function InteractiveExample() {
  return (
    <CommandBar
      actions={[
        {
          key: "F1",
          label: "Help",
          onClick: () => console.log("Help clicked"),
        },
        {
          key: "F2",
          label: "Save",
          onClick: () => console.log("Save clicked"),
        },
        {
          key: "F3",
          label: "Delete",
          disabled: true,
        },
      ]}
      status={[
        { label: "Mode", value: "Edit" },
        { label: "Changes", value: "Unsaved", alert: true },
      ]}
    />
  );
}`}
        >
          <CommandBar
            actions={[
              {
                key: "F1",
                label: "Help",
                onClick: () => console.log("Help clicked"),
              },
              {
                key: "F2",
                label: "Save",
                onClick: () => console.log("Save clicked"),
              },
              {
                key: "F3",
                label: "Delete",
                disabled: true,
              },
            ]}
            status={[
              { label: "Mode", value: "Edit" },
              { label: "Changes", value: "Unsaved", alert: true },
            ]}
          />
        </ExampleCard>

        <ExampleCard
          title="Terminal Style"
          description="Command bar with terminal-inspired styling"
          code={`import { CommandBar } from "industrialkit";

export default function TerminalExample() {
  return (
    <CommandBar
      variant="terminal"
      actions={[
        { key: "F1", label: "HELP" },
        { key: "F2", label: "SAVE" },
        { key: "F3", label: "EXIT" },
      ]}
      status={[
        { label: "SYSTEM", value: "RUNNING" },
        { label: "CPU", value: "45%" },
      ]}
    />
  );
}`}
        >
          <CommandBar
            variant="terminal"
            actions={[
              { key: "F1", label: "HELP" },
              { key: "F2", label: "SAVE" },
              { key: "F3", label: "EXIT" },
            ]}
            status={[
              { label: "SYSTEM", value: "RUNNING" },
              { label: "CPU", value: "45%" },
            ]}
          />
        </ExampleCard>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">API Reference</h2>

        <div>
          <h3 className="text-xl font-bold mb-4">CommandBar Props</h3>
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
                  <td className="px-4 py-2 font-mono">actions</td>
                  <td className="px-4 py-2 font-mono">CommandAction[]</td>
                  <td className="px-4 py-2 font-mono">[]</td>
                  <td className="px-4 py-2">Array of command actions</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">status</td>
                  <td className="px-4 py-2 font-mono">StatusItem[]</td>
                  <td className="px-4 py-2 font-mono">[]</td>
                  <td className="px-4 py-2">Array of status items</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">variant</td>
                  <td className="px-4 py-2 font-mono">"default" | "terminal"</td>
                  <td className="px-4 py-2 font-mono">"default"</td>
                  <td className="px-4 py-2">Visual style</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">position</td>
                  <td className="px-4 py-2 font-mono">"top" | "bottom"</td>
                  <td className="px-4 py-2 font-mono">"bottom"</td>
                  <td className="px-4 py-2">Bar position</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-bold mb-4">CommandAction Type</h3>
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
                  <td className="px-4 py-2 font-mono">key</td>
                  <td className="px-4 py-2 font-mono">string</td>
                  <td className="px-4 py-2">Command key (e.g., "F1")</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">label</td>
                  <td className="px-4 py-2 font-mono">string</td>
                  <td className="px-4 py-2">Command label</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">disabled</td>
                  <td className="px-4 py-2 font-mono">boolean</td>
                  <td className="px-4 py-2">Disable the command</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">onClick</td>
                  <td className="px-4 py-2 font-mono">() ={'>'} void</td>
                  <td className="px-4 py-2">Click handler</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-bold mb-4">StatusItem Type</h3>
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
                  <td className="px-4 py-2">Status label</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">value</td>
                  <td className="px-4 py-2 font-mono">string | ReactNode</td>
                  <td className="px-4 py-2">Status value</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">alert</td>
                  <td className="px-4 py-2 font-mono">boolean</td>
                  <td className="px-4 py-2">Show as alert state</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
