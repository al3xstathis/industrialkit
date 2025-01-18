"use client";
import { ExampleCard } from "@/components/example-card";
import { Badge, DataGrid, StatusIndicator } from "industrialkit";

// Sample data for examples
const sampleData = [
  {
    id: 1,
    name: "Reactor 1",
    status: "online",
    temperature: 350,
    pressure: 1013,
  },
  {
    id: 2,
    name: "Reactor 2",
    status: "warning",
    temperature: 375,
    pressure: 1015,
  },
  { id: 3, name: "Reactor 3", status: "offline", temperature: 0, pressure: 0 },
  {
    id: 4,
    name: "Reactor 4",
    status: "online",
    temperature: 348,
    pressure: 1014,
  },
];

export default function DataGridPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">DataGrid</h1>
        <p className="text-lg text-gray-600">
          A powerful data grid component for displaying and interacting with
          tabular data.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Examples</h2>

        <ExampleCard
          title="Basic DataGrid"
          description="A simple data grid with sortable columns"
          code={`import { DataGrid } from "industrialkit";

const columns = [
  { key: "id", header: "ID", width: "80px" },
  { key: "name", header: "Name", sortable: true },
  { key: "temperature", header: "Temperature", sortable: true },
  { key: "pressure", header: "Pressure", sortable: true },
];

export default function BasicExample() {
  return (
    <DataGrid
      columns={columns}
      data={sampleData}
    />
  );
}`}
        >
          <DataGrid
            columns={[
              { key: "id", header: "ID", width: "80px" },
              { key: "name", header: "Name", sortable: true },
              { key: "temperature", header: "Temperature", sortable: true },
              { key: "pressure", header: "Pressure", sortable: true },
            ]}
            data={sampleData}
          />
        </ExampleCard>

        <ExampleCard
          title="Custom Cell Rendering"
          description="DataGrid with custom cell rendering for complex data"
          code={`import { DataGrid, StatusIndicator, Badge } from "industrialkit";

const columns = [
  { key: "id", header: "ID" },
  { key: "name", header: "Name" },
  {
    key: "status",
    header: "Status",
    render: (value) => (
      <StatusIndicator status={value === "online" ? "success" :
        value === "warning" ? "warning" : "error"}
        showLabel
      />
    )
  },
  {
    key: "temperature",
    header: "Temperature",
    render: (value) => (
      <Badge color={value > 360 ? "red" : "green"}>
        {value}°C
      </Badge>
    )
  }
];

export default function CustomRenderExample() {
  return (
    <DataGrid
      columns={columns}
      data={sampleData}
    />
  );
}`}
        >
          <DataGrid
            columns={[
              { key: "id", header: "ID" },
              { key: "name", header: "Name" },
              {
                key: "status",
                header: "Status",
                render: (value) => (
                  <StatusIndicator
                    status={
                      value === "online"
                        ? "success"
                        : value === "warning"
                          ? "warning"
                          : "error"
                    }
                    showLabel
                  />
                ),
              },
              {
                key: "temperature",
                header: "Temperature",
                render: (value) => (
                  <Badge color={value > 360 ? "red" : "green"}>{value}°C</Badge>
                ),
              },
            ]}
            data={sampleData}
          />
        </ExampleCard>

        <ExampleCard
          title="Selectable Rows"
          description="DataGrid with row selection capabilities"
          code={`import { DataGrid } from "industrialkit";

export default function SelectableExample() {
  return (
    <DataGrid
      columns={columns}
      data={sampleData}
      selectable
      selectMode="multiple"
      onRowSelect={(selectedRows) => {
        console.log('Selected:', selectedRows);
      }}
    />
  );
}`}
        >
          <DataGrid
            columns={[
              { key: "id", header: "ID" },
              { key: "name", header: "Name" },
              { key: "temperature", header: "Temperature" },
              { key: "pressure", header: "Pressure" },
            ]}
            data={sampleData}
            selectable
            selectMode="multiple"
          />
        </ExampleCard>

        <ExampleCard
          title="Terminal Variant"
          description="DataGrid with terminal-inspired styling"
          code={`import { DataGrid } from "industrialkit";

export default function TerminalExample() {
  return (
    <DataGrid
      columns={columns}
      data={sampleData}
      variant="terminal"
    />
  );
}`}
        >
          <DataGrid
            columns={[
              { key: "id", header: "ID" },
              { key: "name", header: "Name" },
              { key: "temperature", header: "Temperature" },
              { key: "pressure", header: "Pressure" },
            ]}
            data={sampleData}
            variant="terminal"
          />
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
                <td className="px-4 py-2 font-mono">columns</td>
                <td className="px-4 py-2 font-mono">Column[]</td>
                <td className="px-4 py-2 font-mono">[]</td>
                <td className="px-4 py-2">Array of column definitions</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-mono">data</td>
                <td className="px-4 py-2 font-mono">T[]</td>
                <td className="px-4 py-2 font-mono">[]</td>
                <td className="px-4 py-2">Array of data items to display</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-mono">variant</td>
                <td className="px-4 py-2 font-mono">"default" | "terminal"</td>
                <td className="px-4 py-2 font-mono">"default"</td>
                <td className="px-4 py-2">Visual style of the grid</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-mono">selectable</td>
                <td className="px-4 py-2 font-mono">boolean</td>
                <td className="px-4 py-2 font-mono">false</td>
                <td className="px-4 py-2">Enable row selection</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-mono">selectMode</td>
                <td className="px-4 py-2 font-mono">"single" | "multiple"</td>
                <td className="px-4 py-2 font-mono">"multiple"</td>
                <td className="px-4 py-2">Row selection mode</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-mono">onRowSelect</td>
                <td className="px-4 py-2 font-mono">{"(rows: T[]) => void"}</td>
                <td className="px-4 py-2 font-mono">-</td>
                <td className="px-4 py-2">Row selection callback</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-mono">onSort</td>
                <td className="px-4 py-2 font-mono">
                  (key: string, direction: "asc" | "desc") ={">"} void
                </td>
                <td className="px-4 py-2 font-mono">-</td>
                <td className="px-4 py-2">Column sort callback</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 space-y-4">
          <h3 className="text-xl font-bold">Column Properties</h3>
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
                  <td className="px-4 py-2">
                    Unique identifier for the column
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">header</td>
                  <td className="px-4 py-2 font-mono">string</td>
                  <td className="px-4 py-2">Column header text</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">width</td>
                  <td className="px-4 py-2 font-mono">string</td>
                  <td className="px-4 py-2">Column width (CSS value)</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">sortable</td>
                  <td className="px-4 py-2 font-mono">boolean</td>
                  <td className="px-4 py-2">Enable column sorting</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">render</td>
                  <td className="px-4 py-2 font-mono">
                    (value: any, row: T) ={">"} ReactNode
                  </td>
                  <td className="px-4 py-2">Custom cell render function</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
