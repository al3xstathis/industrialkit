// src/stories/Tabs.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Badge } from "../components/primitive/badge";
import { DataGrid } from "../components/primitive/datagrid";
import { Tab, TabList, TabPanel, Tabs } from "../components/primitive/tabs";

const meta: Meta<typeof Tabs> = {
  title: "IndustryDB/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-4xl">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

// Sample data
const gridData = [
  { id: "PRD001", name: "Product A", status: "Active" },
  { id: "PRD002", name: "Product B", status: "Inactive" },
  { id: "PRD003", name: "Product C", status: "Active" },
];

const gridColumns = [
  { key: "id", header: "ID", width: "120px", sortable: true },
  { key: "name", header: "Name", width: "200px", sortable: true },
  { key: "status", header: "Status", width: "120px", sortable: true },
];

const terminalLines = [
  "System initialized",
  "> Loading modules...",
  "> Checking connections...",
  "Ready for operations.",
];

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="overview">
      <TabList>
        <Tab value="overview">Overview</Tab>
        <Tab value="details">Details</Tab>
        <Tab value="settings">Settings</Tab>
        <Tab value="logs" disabled>Logs</Tab>
      </TabList>
      <TabPanel value="overview">
        <div className="space-y-4">
          <h3 className="text-lg font-bold">System Overview</h3>
          <p>Current system status and key metrics.</p>
        </div>
      </TabPanel>
      <TabPanel value="details">
        <div className="space-y-4">
          <h3 className="text-lg font-bold">System Details</h3>
          <p>Detailed system information and configurations.</p>
        </div>
      </TabPanel>
      <TabPanel value="settings">
        <div className="space-y-4">
          <h3 className="text-lg font-bold">System Settings</h3>
          <p>Configure system parameters and options.</p>
        </div>
      </TabPanel>
    </Tabs>
  ),
};

export const Terminal: Story = {
  render: () => (
    <div className="rounded border border-green-500 bg-black p-4">
      <Tabs defaultValue="monitor" variant="terminal">
        <TabList>
          <Tab value="monitor">MONITOR</Tab>
          <Tab value="process">PROCESS</Tab>
          <Tab value="logs">LOGS</Tab>
        </TabList>
        <TabPanel value="monitor">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="solid" color="green">ACTIVE</Badge>
              <span className="font-mono text-green-400">System Monitor</span>
            </div>
            <div className="font-mono text-green-400">
              {terminalLines.map((line, index) => (
                <div key={index}>{line}</div>
              ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel value="process">
          <DataGrid
            variant="terminal"
            columns={gridColumns}
            data={gridData}
          />
        </TabPanel>
        <TabPanel value="logs">
          <pre className="font-mono text-green-400">
            {`[2025-01-14 15:30:22] System startup
[2025-01-14 15:30:23] Initializing modules
[2025-01-14 15:30:24] All systems operational`}
          </pre>
        </TabPanel>
      </Tabs>
    </div>
  ),
};

export const ControlledTabs: Story = {
  render: () => {
    const [currentTab, setCurrentTab] = useState("real-time");
    const [updates, setUpdates] = useState(0);

    // Simulate updates
    const handleTabChange = (value: string) => {
      setCurrentTab(value);
      if (value === "real-time") {
        const interval = setInterval(() => {
          setUpdates(prev => prev + 1);
        }, 2000);
        return () => clearInterval(interval);
      }
    };

    return (
      <Tabs value={currentTab} onValueChange={handleTabChange}>
        <TabList>
          <Tab value="real-time">
            Real-Time
            {updates > 0 && (
              <Badge
                variant="solid"
                color="yellow"
                className="ml-2"
              >
                {updates}
              </Badge>
            )}
          </Tab>
          <Tab value="history">History</Tab>
          <Tab value="analysis">Analysis</Tab>
        </TabList>
        <TabPanel value="real-time">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-bold">Live Updates</span>
              <Badge variant="outline" color="green">
                CONNECTED
              </Badge>
            </div>
            <DataGrid
              columns={gridColumns}
              data={gridData}
            />
          </div>
        </TabPanel>
        <TabPanel value="history">
          <div className="space-y-4">
            <span className="font-bold">Historical Data</span>
            <div className="rounded border border-gray-200 bg-gray-50 p-4">
              Historical view content
            </div>
          </div>
        </TabPanel>
        <TabPanel value="analysis">
          <div className="space-y-4">
            <span className="font-bold">Data Analysis</span>
            <div className="rounded border border-gray-200 bg-gray-50 p-4">
              Analysis content
            </div>
          </div>
        </TabPanel>
      </Tabs>
    );
  },
};

export const WithNotifications: Story = {
  render: () => (
    <Tabs defaultValue="system">
      <TabList>
        <Tab value="system">
          System
          <Badge
            variant="solid"
            color="green"
            className="ml-2"
          >
            3
          </Badge>
        </Tab>
        <Tab value="network">
          Network
          <Badge
            variant="solid"
            color="red"
            className="ml-2"
          >
            1
          </Badge>
        </Tab>
        <Tab value="storage">
          Storage
          <Badge
            variant="solid"
            color="yellow"
            className="ml-2"
          >
            2
          </Badge>
        </Tab>
      </TabList>
      <TabPanel value="system">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-bold">System Status</span>
            <Badge variant="outline" color="green">ONLINE</Badge>
          </div>
          <DataGrid
            columns={gridColumns}
            data={gridData}
          />
        </div>
      </TabPanel>
      <TabPanel value="network">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-bold">Network Status</span>
            <Badge variant="outline" color="red">ERROR</Badge>
          </div>
          <div className="rounded border border-red-200 bg-red-50 p-4">
            Connection error detected
          </div>
        </div>
      </TabPanel>
      <TabPanel value="storage">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-bold">Storage Status</span>
            <Badge variant="outline" color="yellow">WARNING</Badge>
          </div>
          <div className="rounded border border-yellow-200 bg-yellow-50 p-4">
            Storage capacity at 85%
          </div>
        </div>
      </TabPanel>
    </Tabs>
  ),
};
