'use client'
import { ExampleCard } from "@/components/example-card";
import { Accordion, AccordionItem } from "industrialkit";

export default function AccordionPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Accordion</h1>
        <p className="text-lg text-gray-600">
          Collapsible content sections for organizing and presenting information.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Examples</h2>

        <ExampleCard
          title="Basic Accordion"
          description="Simple accordion with multiple sections"
          code={`import { Accordion, AccordionItem } from "industrialkit";

export default function BasicExample() {
  return (
    <Accordion>
      <AccordionItem value="item-1" title="Section 1">
        Content for section 1
      </AccordionItem>
      <AccordionItem value="item-2" title="Section 2">
        Content for section 2
      </AccordionItem>
      <AccordionItem value="item-3" title="Section 3">
        Content for section 3
      </AccordionItem>
    </Accordion>
  );
}`}
        >
          <Accordion>
            <AccordionItem value="item-1" title="Section 1">
              Content for section 1
            </AccordionItem>
            <AccordionItem value="item-2" title="Section 2">
              Content for section 2
            </AccordionItem>
            <AccordionItem value="item-3" title="Section 3">
              Content for section 3
            </AccordionItem>
          </Accordion>
        </ExampleCard>

        <ExampleCard
          title="Single Selection"
          description="Accordion with single item selection"
          code={`import { Accordion, AccordionItem } from "industrialkit";

export default function SingleExample() {
  return (
    <Accordion multiple={false}>
      <AccordionItem
        value="item-1"
        title="System Status"
        subtitle="Current system health"
      >
        All systems operational
      </AccordionItem>
      <AccordionItem
        value="item-2"
        title="Network"
        subtitle="Network configuration"
      >
        Connected to main network
      </AccordionItem>
      <AccordionItem
        value="item-3"
        title="Storage"
        subtitle="Storage utilization"
      >
        Storage at 45% capacity
      </AccordionItem>
    </Accordion>
  );
}`}
        >
          <Accordion multiple={false}>
            <AccordionItem
              value="item-1"
              title="System Status"
              subtitle="Current system health"
            >
              All systems operational
            </AccordionItem>
            <AccordionItem
              value="item-2"
              title="Network"
              subtitle="Network configuration"
            >
              Connected to main network
            </AccordionItem>
            <AccordionItem
              value="item-3"
              title="Storage"
              subtitle="Storage utilization"
            >
              Storage at 45% capacity
            </AccordionItem>
          </Accordion>
        </ExampleCard>

        <ExampleCard
          title="Terminal Style"
          description="Accordion with terminal-inspired styling"
          code={`import { Accordion, AccordionItem } from "industrialkit";

export default function TerminalExample() {
  return (
    <Accordion variant="terminal">
      <AccordionItem value="status" title="SYSTEM STATUS">
        <div className="font-mono">
          CPU: 45% | Memory: 2.5GB | Disk: 120GB
        </div>
      </AccordionItem>
      <AccordionItem value="logs" title="SYSTEM LOGS">
        <div className="font-mono">
          [INFO] System initialized
          [WARN] High memory usage detected
          [INFO] Backup completed
        </div>
      </AccordionItem>
    </Accordion>
  );
}`}
        >
          <Accordion variant="terminal">
            <AccordionItem value="status" title="SYSTEM STATUS">
              <div className="font-mono">
                CPU: 45% | Memory: 2.5GB | Disk: 120GB
              </div>
            </AccordionItem>
            <AccordionItem value="logs" title="SYSTEM LOGS">
              <div className="font-mono">
                [INFO] System initialized<br/>
                [WARN] High memory usage detected<br/>
                [INFO] Backup completed
              </div>
            </AccordionItem>
          </Accordion>
        </ExampleCard>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">API Reference</h2>

        <div>
          <h3 className="text-xl font-bold mb-4">Accordion Props</h3>
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
                  <td className="px-4 py-2 font-mono">value</td>
                  <td className="px-4 py-2 font-mono">string[]</td>
                  <td className="px-4 py-2 font-mono">-</td>
                  <td className="px-4 py-2">Controlled open items</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">onValueChange</td>
                  <td className="px-4 py-2 font-mono">(value: string[]) ={'>'} void</td>
                  <td className="px-4 py-2 font-mono">-</td>
                  <td className="px-4 py-2">Change callback</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">variant</td>
                  <td className="px-4 py-2 font-mono">"default" | "terminal"</td>
                  <td className="px-4 py-2 font-mono">"default"</td>
                  <td className="px-4 py-2">Visual style</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">multiple</td>
                  <td className="px-4 py-2 font-mono">boolean</td>
                  <td className="px-4 py-2 font-mono">true</td>
                  <td className="px-4 py-2">Allow multiple open items</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-bold mb-4">AccordionItem Props</h3>
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
                  <td className="px-4 py-2 font-mono">value</td>
                  <td className="px-4 py-2 font-mono">string</td>
                  <td className="px-4 py-2 font-mono">-</td>
                  <td className="px-4 py-2">Unique identifier</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">title</td>
                  <td className="px-4 py-2 font-mono">ReactNode</td>
                  <td className="px-4 py-2 font-mono">-</td>
                  <td className="px-4 py-2">Item header content</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">subtitle</td>
                  <td className="px-4 py-2 font-mono">ReactNode</td>
                  <td className="px-4 py-2 font-mono">-</td>
                  <td className="px-4 py-2">Secondary header content</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">disabled</td>
                  <td className="px-4 py-2 font-mono">boolean</td>
                  <td className="px-4 py-2 font-mono">false</td>
                  <td className="px-4 py-2">Disable the item</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
