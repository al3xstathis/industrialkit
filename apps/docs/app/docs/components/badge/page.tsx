'use client'
import { Badge } from "industrialkit";
import { ExampleCard } from "@/components/example-card";

export default function BadgePage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Badge</h1>
        <p className="text-lg text-gray-600">
          Small status indicators for highlighting information, states, or counts.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Examples</h2>

        <ExampleCard
          title="Badge Colors"
          description="Different color variations"
          code={`import { Badge } from "industrialkit";

export default function ColorsExample() {
  return (
    <div className="flex gap-2">
      <Badge color="gray">Default</Badge>
      <Badge color="yellow">Warning</Badge>
      <Badge color="green">Success</Badge>
      <Badge color="red">Error</Badge>
      <Badge color="blue">Info</Badge>
    </div>
  );
}`}
        >
          <div className="flex gap-2">
            <Badge color="gray">Default</Badge>
            <Badge color="yellow">Warning</Badge>
            <Badge color="green">Success</Badge>
            <Badge color="red">Error</Badge>
            <Badge color="blue">Info</Badge>
          </div>
        </ExampleCard>

        <ExampleCard
          title="Badge Variants"
          description="Different badge styles"
          code={`import { Badge } from "industrialkit";

export default function VariantsExample() {
  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Badge variant="default" color="green">Default</Badge>
        <Badge variant="outline" color="green">Outline</Badge>
        <Badge variant="solid" color="green">Solid</Badge>
      </div>
      
      <div className="flex gap-2">
        <Badge variant="default" color="red">Default</Badge>
        <Badge variant="outline" color="red">Outline</Badge>
        <Badge variant="solid" color="red">Solid</Badge>
      </div>
    </div>
  );
}`}
        >
          <div className="space-y-4">
            <div className="flex gap-2">
              <Badge variant="default" color="green">Default</Badge>
              <Badge variant="outline" color="green">Outline</Badge>
              <Badge variant="solid" color="green">Solid</Badge>
            </div>
            
            <div className="flex gap-2">
              <Badge variant="default" color="red">Default</Badge>
              <Badge variant="outline" color="red">Outline</Badge>
              <Badge variant="solid" color="red">Solid</Badge>
            </div>
          </div>
        </ExampleCard>

        <ExampleCard
          title="Common Use Cases"
          description="Examples of typical badge usage"
          code={`import { Badge } from "industrialkit";

export default function UsageExample() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        Status: <Badge color="green">Online</Badge>
      </div>
      
      <div className="flex items-center gap-2">
        Priority: <Badge color="red" variant="solid">High</Badge>
      </div>
      
      <div className="flex items-center gap-2">
        Messages: <Badge color="blue" variant="outline">5 New</Badge>
      </div>
    </div>
  );
}`}
        >
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              Status: <Badge color="green">Online</Badge>
            </div>
            
            <div className="flex items-center gap-2">
              Priority: <Badge color="red" variant="solid">High</Badge>
            </div>
            
            <div className="flex items-center gap-2">
              Messages: <Badge color="blue" variant="outline">5 New</Badge>
            </div>
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
                <td className="px-4 py-2 font-mono">variant</td>
                <td className="px-4 py-2 font-mono">"default" | "outline" | "solid"</td>
                <td className="px-4 py-2 font-mono">"default"</td>
                <td className="px-4 py-2">Visual style variant</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-mono">color</td>
                <td className="px-4 py-2 font-mono">"gray" | "yellow" | "green" | "red" | "blue"</td>
                <td className="px-4 py-2 font-mono">"gray"</td>
                <td className="px-4 py-2">Badge color</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}