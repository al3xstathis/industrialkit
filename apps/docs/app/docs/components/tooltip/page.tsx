'use client'
import { Tooltip, Button } from "industrialkit";
import { ExampleCard } from "@/components/example-card";

export default function TooltipPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Tooltip</h1>
        <p className="text-lg text-gray-600">
          Tooltips provide additional information when hovering over elements.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Examples</h2>

        <ExampleCard
          title="Basic Tooltip"
          description="Simple tooltip with different positions"
          code={`import { Tooltip, Button } from "industrialkit";

export default function BasicExample() {
  return (
    <div className="flex gap-4">
      <Tooltip content="Top tooltip" side="top">
        <Button>Hover Me (Top)</Button>
      </Tooltip>
      
      <Tooltip content="Right tooltip" side="right">
        <Button>Hover Me (Right)</Button>
      </Tooltip>
      
      <Tooltip content="Bottom tooltip" side="bottom">
        <Button>Hover Me (Bottom)</Button>
      </Tooltip>
      
      <Tooltip content="Left tooltip" side="left">
        <Button>Hover Me (Left)</Button>
      </Tooltip>
    </div>
  );
}`}
        >
          <div className="flex gap-4">
            <Tooltip content="Top tooltip" side="top">
              <Button>Hover Me (Top)</Button>
            </Tooltip>
            
            <Tooltip content="Right tooltip" side="right">
              <Button>Hover Me (Right)</Button>
            </Tooltip>
            
            <Tooltip content="Bottom tooltip" side="bottom">
              <Button>Hover Me (Bottom)</Button>
            </Tooltip>
            
            <Tooltip content="Left tooltip" side="left">
              <Button>Hover Me (Left)</Button>
            </Tooltip>
          </div>
        </ExampleCard>

        <ExampleCard
          title="Alignment"
          description="Different tooltip alignments"
          code={`import { Tooltip, Button } from "industrialkit";

export default function AlignmentExample() {
  return (
    <div className="flex gap-4">
      <Tooltip content="Start aligned" align="start">
        <Button>Start</Button>
      </Tooltip>
      
      <Tooltip content="Center aligned" align="center">
        <Button>Center</Button>
      </Tooltip>
      
      <Tooltip content="End aligned" align="end">
        <Button>End</Button>
      </Tooltip>
    </div>
  );
}`}
        >
          <div className="flex gap-4">
            <Tooltip content="Start aligned" align="start">
              <Button>Start</Button>
            </Tooltip>
            
            <Tooltip content="Center aligned" align="center">
              <Button>Center</Button>
            </Tooltip>
            
            <Tooltip content="End aligned" align="end">
              <Button>End</Button>
            </Tooltip>
          </div>
        </ExampleCard>

        <ExampleCard
          title="Terminal Style"
          description="Terminal-themed tooltips"
          code={`import { Tooltip, Button } from "industrialkit";

export default function TerminalExample() {
  return (
    <Tooltip
      content="SYSTEM COMMAND INFORMATION"
      variant="terminal"
    >
      <Button variant="terminal">HOVER FOR INFO</Button>
    </Tooltip>
  );
}`}
        >
          <Tooltip
            content="SYSTEM COMMAND INFORMATION"
            variant="terminal"
          >
            <Button variant="terminal">HOVER FOR INFO</Button>
          </Tooltip>
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
                <td className="px-4 py-2 font-mono">content</td>
                <td className="px-4 py-2 font-mono">ReactNode</td>
                <td className="px-4 py-2 font-mono">-</td>
                <td className="px-4 py-2">Tooltip content</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-mono">side</td>
                <td className="px-4 py-2 font-mono">"top" | "right" | "bottom" | "left"</td>
                <td className="px-4 py-2 font-mono">"top"</td>
                <td className="px-4 py-2">Tooltip position</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-mono">align</td>
                <td className="px-4 py-2 font-mono">"start" | "center" | "end"</td>
                <td className="px-4 py-2 font-mono">"center"</td>
                <td className="px-4 py-2">Tooltip alignment</td>
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
  );
}