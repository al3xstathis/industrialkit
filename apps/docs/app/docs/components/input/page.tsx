'use client'
import { Input, NumericInput, SearchInput, Textarea } from "industrialkit";
import { ExampleCard } from "@/components/example-card";

export default function InputPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Input</h1>
        <p className="text-lg text-gray-600">
          Form input components including text inputs, numeric inputs, search, and textareas.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Examples</h2>

        <ExampleCard
          title="Basic Inputs"
          description="Different types of basic input fields"
          code={`import { Input } from "industrialkit";

export default function BasicExample() {
  return (
    <div className="space-y-4">
      <Input placeholder="Basic input" />
      <Input type="password" placeholder="Password input" />
      <Input type="email" placeholder="Email input" />
      <Input prefix="$" placeholder="With prefix" />
      <Input suffix=".00" placeholder="With suffix" />
    </div>
  );
}`}
        >
          <div className="space-y-4">
            <Input placeholder="Basic input" />
            <Input type="password" placeholder="Password input" />
            <Input type="email" placeholder="Email input" />
            <Input prefix="$" placeholder="With prefix" />
            <Input suffix=".00" placeholder="With suffix" />
          </div>
        </ExampleCard>

        <ExampleCard
          title="Specialized Inputs"
          description="Purpose-built input components"
          code={`import { NumericInput, SearchInput } from "industrialkit";

export default function SpecializedExample() {
  return (
    <div className="space-y-4">
      <NumericInput
        placeholder="Enter number"
        min={0}
        max={100}
        step={0.5}
      />
      
      <SearchInput
        placeholder="Search..."
        onSearch={(value) => console.log('Search:', value)}
      />
      
      <Textarea
        placeholder="Enter multiple lines of text"
        rows={4}
      />
    </div>
  );
}`}
        >
          <div className="space-y-4">
            <NumericInput
              placeholder="Enter number"
              min={0}
              max={100}
              step={0.5}
            />
            
            <SearchInput
              placeholder="Search..."
              onSearch={(value) => console.log('Search:', value)}
            />
            
            <Textarea
              placeholder="Enter multiple lines of text"
              rows={4}
            />
          </div>
        </ExampleCard>

        <ExampleCard
          title="Input States"
          description="Different input states and variants"
          code={`import { Input } from "industrialkit";

export default function StatesExample() {
  return (
    <div className="space-y-4">
      <Input placeholder="Default input" />
      <Input placeholder="Disabled input" disabled />
      <Input placeholder="Error state" error />
      <Input variant="terminal" placeholder="Terminal style" />
      <Input variant="id" placeholder="ID input" />
    </div>
  );
}`}
        >
          <div className="space-y-4">
            <Input placeholder="Default input" />
            <Input placeholder="Disabled input" disabled />
            <Input placeholder="Error state" error />
            <Input variant="terminal" placeholder="Terminal style" />
            <Input variant="id" placeholder="ID input" />
          </div>
        </ExampleCard>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">API Reference</h2>
        
        <div>
          <h3 className="text-xl font-bold mb-4">Input Props</h3>
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
                  <td className="px-4 py-2 font-mono">"default" | "terminal" | "id"</td>
                  <td className="px-4 py-2 font-mono">"default"</td>
                  <td className="px-4 py-2">Visual style variant</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">error</td>
                  <td className="px-4 py-2 font-mono">boolean</td>
                  <td className="px-4 py-2 font-mono">false</td>
                  <td className="px-4 py-2">Show error state</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">prefix</td>
                  <td className="px-4 py-2 font-mono">ReactNode</td>
                  <td className="px-4 py-2 font-mono">-</td>
                  <td className="px-4 py-2">Content to show before input</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">suffix</td>
                  <td className="px-4 py-2 font-mono">ReactNode</td>
                  <td className="px-4 py-2 font-mono">-</td>
                  <td className="px-4 py-2">Content to show after input</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-bold mb-4">NumericInput Props</h3>
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
                  <td className="px-4 py-2 font-mono">min</td>
                  <td className="px-4 py-2 font-mono">number</td>
                  <td className="px-4 py-2 font-mono">-</td>
                  <td className="px-4 py-2">Minimum value</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">max</td>
                  <td className="px-4 py-2 font-mono">number</td>
                  <td className="px-4 py-2 font-mono">-</td>
                  <td className="px-4 py-2">Maximum value</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">step</td>
                  <td className="px-4 py-2 font-mono">number</td>
                  <td className="px-4 py-2 font-mono">1</td>
                  <td className="px-4 py-2">Step increment/decrement</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">allowNegative</td>
                  <td className="px-4 py-2 font-mono">boolean</td>
                  <td className="px-4 py-2 font-mono">false</td>
                  <td className="px-4 py-2">Allow negative numbers</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-bold mb-4">SearchInput Props</h3>
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
                  <td className="px-4 py-2 font-mono">onSearch</td>
                  <td className="px-4 py-2 font-mono">(value: string) => void</td>
                  <td className="px-4 py-2 font-mono">-</td>
                  <td className="px-4 py-2">Search callback</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}