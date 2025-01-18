"use client";
import {
  Badge,
  Button,
  Panel,
  PanelRow,
  ProgressBar,
  StatusIndicator,
  Terminal,
} from "industrialkit";
import Link from "next/link";

interface ComponentCardProps {
  title: string;
  description: string;
  path: string;
  preview: React.ReactNode;
}

const ComponentCard = ({
  title,
  description,
  path,
  preview,
}: ComponentCardProps) => (
  <Link
    href={path}
    className="group rounded-lg border border-gray-200 bg-white p-4 transition-shadow hover:shadow-lg"
  >
    <h3 className="mb-2 text-lg font-bold text-gray-900">{title}</h3>
    <p className="mb-4 text-sm text-gray-600">{description}</p>
    <div className="rounded-md border border-gray-100 bg-gray-50 p-4">
      {preview}
    </div>
  </Link>
);

const COMPONENT_GROUPS = [
  {
    title: "Core Components",
    description: "Essential building blocks for your interface",
    components: [
      {
        title: "Button",
        description: "Trigger actions and events with button components",
        path: "/docs/components/button",
        preview: (
          <div className="flex gap-2 flex-wrap">
            <Button variant="default">Default</Button>
            <Button variant="primary">Primary</Button>
            <Button variant="terminal">EXECUTE</Button>
          </div>
        ),
      },
      {
        title: "StatusIndicator",
        description: "Display status and state information",
        path: "/docs/components/status-indicator",
        preview: (
          <div className="flex gap-4">
            <StatusIndicator status="success" showLabel />
            <StatusIndicator status="warning" showLabel />
            <StatusIndicator status="error" showLabel />
          </div>
        ),
      },
    ],
  },
  {
    title: "Data Display",
    description: "Components for presenting and organizing data",
    components: [
      {
        title: "Panel",
        description: "Display information in structured panels",
        path: "/docs/components/panel",
        preview: (
          <Panel title="System Status">
            <PanelRow label="Status" value="Online" />
            <PanelRow label="CPU" value="45%" />
          </Panel>
        ),
      },
      {
        title: "DataGrid",
        description: "Advanced data grid with sorting and selection",
        path: "/docs/components/datagrid",
        preview: (
          <div className="text-sm text-gray-500">
            Interactive data grid with sorting and filtering capabilities
          </div>
        ),
      },
      {
        title: "TimeSeries",
        description: "Display temporal data and trends",
        path: "/docs/components/time-series",
        preview: (
          <div className="text-sm text-gray-500">
            Real-time charts for time series data visualization
          </div>
        ),
      },
    ],
  },
  {
    title: "Feedback",
    description: "Components for user feedback and notifications",
    components: [
      {
        title: "Progress",
        description: "Show progress and loading states",
        path: "/docs/components/progress",
        preview: (
          <div className="space-y-2">
            <ProgressBar value={75} />
            <ProgressBar value={45} variant="terminal" />
          </div>
        ),
      },
      {
        title: "Badge",
        description: "Status badges and labels",
        path: "/docs/components/badge",
        preview: (
          <div className="flex gap-2">
            <Badge color="green">Success</Badge>
            <Badge color="yellow">Warning</Badge>
            <Badge color="red">Error</Badge>
          </div>
        ),
      },
      {
        title: "Toast",
        description: "Show temporary notifications",
        path: "/docs/components/toast",
        preview: (
          <div className="text-sm text-gray-500">
            Notification system for temporary messages
          </div>
        ),
      },
    ],
  },
  {
    title: "Navigation",
    description: "Components for navigation and structure",
    components: [
      {
        title: "Tabs",
        description: "Organize content in tabs",
        path: "/docs/components/tabs",
        preview: (
          <div className="text-sm text-gray-500">
            Tab navigation with multiple styles
          </div>
        ),
      },
      {
        title: "Breadcrumbs",
        description: "Show navigation hierarchy",
        path: "/docs/components/breadcrumbs",
        preview: (
          <div className="text-sm text-gray-500">
            Navigation path indicators
          </div>
        ),
      },
    ],
  },
  {
    title: "Layout",
    description: "Components for page layout and structure",
    components: [
      {
        title: "SplitView",
        description: "Resizable split panel layouts",
        path: "/docs/components/split-view",
        preview: (
          <div className="text-sm text-gray-500">
            Resizable panels for flexible layouts
          </div>
        ),
      },
      {
        title: "Dialog",
        description: "Modal dialogs and alerts",
        path: "/docs/components/dialog",
        preview: (
          <div className="text-sm text-gray-500">
            Modal windows for important actions
          </div>
        ),
      },
      {
        title: "CommandBar",
        description: "Command bar for actions and status",
        path: "/docs/components/command-bar",
        preview: (
          <div className="text-sm text-gray-500">
            Action bar with function key commands
          </div>
        ),
      },
    ],
  },
  {
    title: "Terminal",
    description: "Terminal-style components",
    components: [
      {
        title: "Terminal",
        description: "Terminal emulator component",
        path: "/docs/components/terminal",
        preview: (
          <Terminal
            title="System Output"
            lines={[
              "System initialized",
              "> Running diagnostics",
              "All systems operational",
            ]}
            maxHeight="100px"
          />
        ),
      },
    ],
  },
];

export default function ComponentsPage() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Components</h1>
        <p className="text-lg text-gray-600">
          A comprehensive collection of React components designed for industrial
          applications.
        </p>
      </div>

      {COMPONENT_GROUPS.map((group) => (
        <section key={group.title} className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">{group.title}</h2>
            <p className="text-gray-600">{group.description}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {group.components.map((component) => (
              <ComponentCard
                key={component.title}
                title={component.title}
                description={component.description}
                path={component.path}
                preview={component.preview}
              />
            ))}
          </div>
        </section>
      ))}

      <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-6">
        <h2 className="mb-4 text-lg font-bold">Component Status</h2>
        <p className="text-gray-600">
          All components are production-ready and follow our versioning
          guidelines. Each component is tested, accessible, and supports both
          default and terminal variants.
        </p>
        <div className="mt-4 flex items-center gap-4">
          <StatusIndicator
            status="success"
            showLabel
            label="Ready for Production"
          />
          <StatusIndicator status="success" showLabel label="Fully Tested" />
          <StatusIndicator status="success" showLabel label="Accessible" />
        </div>
      </div>
    </div>
  );
}
