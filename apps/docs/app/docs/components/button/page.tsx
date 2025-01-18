import { Button } from "industrialkit";
import { ExampleCard } from "@/components/example-card";

export default function ButtonPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Button</h1>
        <p className="text-lg text-gray-600">
          Buttons allow users to trigger actions or events with a single click or tap.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Examples</h2>

        <ExampleCard
          title="Button Variants"
          description="Different button styles for different contexts"
          code={`import { Button } from "industrialkit";

export default function ButtonExample() {
  return (
    <div className="flex gap-4">
      <Button variant="default">Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="terminal">Terminal</Button>
    </div>
  );
}`}
        >
          <div className="flex gap-4">
            <Button variant="default">Default</Button>
            <Button variant="primary">Primary</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="terminal">Terminal</Button>
          </div>
        </ExampleCard>

        <ExampleCard
          title="Button Sizes"
          description="Buttons come in different sizes to fit your needs"
          code={`import { Button } from "industrialkit";

export default function ButtonSizesExample() {
  return (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  );
}`}
        >
          <div className="flex items-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </ExampleCard>

        <ExampleCard
          title="Button States"
          description="Buttons can be disabled or show loading states"
          code={`import { Button } from "industrialkit";

export default function ButtonStatesExample() {
  return (
    <div className="flex gap-4">
      <Button disabled>Disabled</Button>
      <Button loading>Loading</Button>
    </div>
  );
}`}
        >
          <div className="flex gap-4">
            <Button disabled>Disabled</Button>
            <Button loading>Loading</Button>
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
                <td className="px-4 py-2 font-mono">
                  "default" | "primary" | "danger" | "terminal"
                </td>
                <td className="px-4 py-2 font-mono">"default"</td>
                <td className="px-4 py-2">The visual style of the button</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-mono">size</td>
                <td className="px-4 py-2 font-mono">"sm" | "md" | "lg"</td>
                <td className="px-4 py-2 font-mono">"md"</td>
                <td className="px-4 py-2">The size of the button</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-mono">loading</td>
                <td className="px-4 py-2 font-mono">boolean</td>
                <td className="px-4 py-2 font-mono">false</td>
                <td className="px-4 py-2">Whether the button shows a loading state</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-mono">disabled</td>
                <td className="px-4 py-2 font-mono">boolean</td>
                <td className="px-4 py-2 font-mono">false</td>
                <td className="px-4 py-2">Whether the button is disabled</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}