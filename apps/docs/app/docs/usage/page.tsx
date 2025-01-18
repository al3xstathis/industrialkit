import { CodeBlock } from "@/components/code-block";

export default function UsagePage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Basic Usage</h1>
        <p className="text-lg text-gray-600">
          Learn how to use IndustrialKit components in your React application.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Importing Components</h2>
        <p className="text-gray-600">
          All components are available as named exports from the main package:
        </p>
        
        <CodeBlock
          language="tsx"
          code={`import {
  Button,
  DataGrid,
  StatusIndicator,
  TimeSeries,
  Terminal,
  Form,
  SplitView
} from "industrialkit";`}
        />

        <div className="rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4">
          <h3 className="font-bold">Tree Shaking</h3>
          <p className="text-sm text-gray-600">
            IndustrialKit supports tree-shaking, so only the components you actually use will be included in your final bundle.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Basic Example</h2>
        <p className="text-gray-600">
          Here's a simple example of a monitoring dashboard using various components:
        </p>

        <CodeBlock
          language="tsx"
          code={`import {
  Header,
  SplitView,
  SplitViewPanel,
  DataGrid,
  TimeSeries,
  StatusIndicator
} from "industrialkit";

function MonitoringDashboard() {
  return (
    <div className="h-screen flex flex-col">
      <Header
        title="Production Monitor"
        subtitle="Line 1"
      />

      <SplitView
        first={
          <SplitViewPanel title="Process Status">
            <DataGrid
              columns={[
                { key: "id", header: "ID" },
                { key: "status", header: "Status",
                  render: (value) => (
                    <StatusIndicator status={value} />
                  )
                },
                { key: "value", header: "Value" }
              ]}
              data={processData}
            />
          </SplitViewPanel>
        }
        second={
          <SplitViewPanel title="Performance">
            <TimeSeries
              data={timeSeriesData}
              labels={["Temperature", "Pressure"]}
              height={300}
            />
          </SplitViewPanel>
        }
      />
    </div>
  );
}`}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Using Terminal Style</h2>
        <p className="text-gray-600">
          Most components support a terminal-inspired style variant, perfect for industrial interfaces:
        </p>

        <CodeBlock
          language="tsx"
          code={`import { Terminal, Button, StatusIndicator } from "industrialkit";

function SystemControl() {
  return (
    <div className="space-y-4">
      {/* Terminal-style components */}
      <Terminal
        title="System Output"
        lines={systemLogs}
      />

      <div className="flex gap-2">
        <Button variant="terminal">
          EXECUTE
        </Button>
        
        <StatusIndicator
          variant="terminal"
          status="processing"
          showLabel
        />
      </div>
    </div>
  );
}`}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Form Handling</h2>
        <p className="text-gray-600">
          Example of a form with validation and various input types:
        </p>

        <CodeBlock
          language="tsx"
          code={`import {
  Form,
  FormSection,
  FormField,
  Input,
  Select,
  Switch,
  Button
} from "industrialkit";

function ConfigurationForm() {
  return (
    <Form onSubmit={handleSubmit}>
      <FormSection
        title="System Configuration"
        description="Configure system parameters"
      >
        <FormField
          label="Host Name"
          required
          error={errors.hostname}
        >
          <Input placeholder="Enter host name" />
        </FormField>

        <FormField
          label="Port"
          hint="Default port is 8080"
        >
          <Input
            type="number"
            min={1024}
            max={65535}
          />
        </FormField>

        <FormField label="Protocol">
          <Select>
            <option value="http">HTTP</option>
            <option value="https">HTTPS</option>
          </Select>
        </FormField>

        <FormField label="Debug Mode">
          <Switch />
        </FormField>
      </FormSection>

      <div className="flex justify-end gap-2">
        <Button variant="default" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="primary" type="submit">
          Save Changes
        </Button>
      </div>
    </Form>
  );
}`}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Event Handling</h2>
        <p className="text-gray-600">
          Components emit events that you can handle in your application:
        </p>

        <CodeBlock
          language="tsx"
          code={`import { DataGrid, Toast, useToast } from "industrialkit";

function DataView() {
  const { showToast } = useToast();

  // Handle row selection
  const handleSelect = (selectedRows) => {
    console.log("Selected:", selectedRows);
  };

  // Handle sorting
  const handleSort = (key, direction) => {
    showToast({
      type: "info",
      title: "Sorting Changed",
      message: \`Sorting by \${key} (\${direction})\`
    });
  };

  return (
    <DataGrid
      columns={columns}
      data={data}
      selectable
      selectMode="multiple"
      onRowSelect={handleSelect}
      onSort={handleSort}
    />
  );
}`}
        />
      </div>

      <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
        <h2 className="mb-4 text-2xl font-bold">Next Steps</h2>
        <div className="space-y-3">
          <p className="text-gray-600">
            Now that you understand the basics, you can:
          </p>
          <ul className="list-inside list-disc space-y-2 text-gray-600">
            <li>
              Explore the detailed{" "}
              <a href="/docs/components" className="text-blue-600 hover:underline">
                component documentation
              </a>
            </li>
            <li>
              Check out the example applications in the{" "}
              <a href="https://github.com/yourusername/industrialkit/tree/main/examples" className="text-blue-600 hover:underline">
                GitHub repository
              </a>
            </li>
            <li>
              Join our{" "}
              <a href="https://discord.gg/industrialkit" className="text-blue-600 hover:underline">
                Discord community
              </a>
              {" "}for support and discussions
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}