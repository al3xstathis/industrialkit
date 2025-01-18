import { StatusIndicator } from "industrialkit";
import { ExampleCard } from "@/components/example-card";

export default function StatusIndicatorPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">StatusIndicator</h1>
        <p className="text-lg text-gray-600">
          Visual indicators for displaying status or state of a process, component, or system.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Examples</h2>

        <ExampleCard
          title="Status Types"
          description="Different status types for various states"
          code={`import { StatusIndicator } from "industrialkit";

export default function StatusExample() {
  return (
    <div className="flex items-center gap-6">
      <StatusIndicator status="idle" showLabel />
      <StatusIndicator status="processing" showLabel />
      <StatusIndicator status="success" showLabel />
      <StatusIndicator status="warning" showLabel />
      <StatusIndicator status="error" showLabel />
      <StatusIndicator status="offline" showLabel />
    </div>
  );
}`}
        >
          <div className="flex items-center gap-6">
            <StatusIndicator status="idle" showLabel />
            <StatusIndicator status="processing" showLabel />
            <StatusIndicator status="success" showLabel />
            <StatusIndicator status="warning" showLabel />
            <StatusIndicator status="error" showLabel />
            <StatusIndicator status="offline" showLabel />
          </div>
        </ExampleCard>

        <ExampleCard
          title="Variants"
          description="Different visual styles for the status indicator"
          code={`import { StatusIndicator } from "industrialkit";

export default function VariantsExample() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-6">
        <StatusIndicator status="success" variant="default" showLabel />
        <StatusIndicator status="processing" variant="terminal" showLabel />
        <StatusIndicator status="error" variant="ring" showLabel />
      </div>
    </div>
  );
}`}
        >
          <div className="space-y-4">
            <div className="flex items-center gap-6">
              <StatusIndicator status="success" variant="default" showLabel />
              <StatusIndicator status="processing" variant="terminal" showLabel />
              <StatusIndicator status="error" variant="ring" showLabel />
            </div>
          </div>
        </ExampleCard>

        <ExampleCard
          title="Sizes"
          description="Different size options for the indicator"
          code={`import { StatusIndicator } from "industrialkit";

export default function SizesExample() {
  return (
    <div className="flex items-center gap-6">
      <StatusIndicator status="success" size="sm" showLabel />
      <StatusIndicator status="success" size="md" showLabel />
      <StatusIndicator status="success" size="lg" showLabel />
    </div>
  );
}`}
        >
          <div className="flex items-center gap-6">
            <StatusIndicator status="success" size="sm" showLabel />
            <StatusIndicator status="success" size="md" showLabel />
            <StatusIndicator status="success" size="lg" showLabel />
          </div>
        </ExampleCard>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">API Reference</h2>
        
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
                <td className="px-4 py-2 font-mono">status</td>
                <td className="px-4 py-2 font-mono">
                  "idle" | "processing" | "success" | "warning" | "error" | "offline"
                </td>
                <td className="px-4 py-2 font-mono">-</td>
                <td className="px-4 py-2">The current status to display</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-mono">variant</td>
                <td className="px-4 py-2 font-mono">"default" | "terminal" | "ring"</td>
                <td className="px-4 py-2 font-mono">"default"</td>
                <td className="px-4 py-2">The visual style of the indicator</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-mono">size</td>
                <td className="px-4 py-2 font-mono">"sm" | "md" | "lg"</td>
                <td className="px-4 py-2 font-mono">"md"</td>
                <td className="px-4 py-2">The size of the indicator</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-mono">pulse</td>
                <td className="px-4 py-2 font-mono">boolean</td>
                <td className="px-4 py-2 font-mono">false</td>
                <td className="px-4 py-2">Whether to show a pulsing animation</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-mono">showLabel</td>
                <td className="px-4 py-2 font-mono">boolean</td>
                <td className="px-4 py-2 font-mono">false</td>
                <td className="px-4 py-2">Whether to show the status label</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-mono">label</td>
                <td className="px-4 py-2 font-mono">string</td>
                <td className="px-4 py-2 font-mono">-</td>
                <td className="px-4 py-2">Custom label text to display</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}