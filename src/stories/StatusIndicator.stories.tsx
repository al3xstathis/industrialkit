// src/stories/StatusIndicator.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useState } from "react";
import { Badge } from "../components/primitive/badge";
import { Button } from "../components/primitive/button";
import { CommandBar } from "../components/primitive/command-bar";
import { DataGrid } from "../components/primitive/datagrid";
import { Panel, PanelRow } from "../components/primitive/panel";
import { ProgressBar } from "../components/primitive/progress";
import {
  StatusIndicator,
  StatusType,
} from "../components/primitive/status-indicator";
import { Tab, TabList, TabPanel, Tabs } from "../components/primitive/tabs";
import { Terminal } from "../components/primitive/terminal";
import { ToastProvider, useToast } from "../components/primitive/toast";

const meta: Meta<typeof StatusIndicator> = {
  title: "IndustryDB/StatusIndicator",
  component: StatusIndicator,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof StatusIndicator>;

export const Default: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <StatusIndicator status="idle" showLabel />
        <StatusIndicator status="processing" showLabel />
        <StatusIndicator status="success" showLabel />
        <StatusIndicator status="warning" showLabel />
        <StatusIndicator status="error" showLabel />
        <StatusIndicator status="offline" showLabel />
      </div>
    </div>
  ),
};

export const TerminalStory: Story = {
  render: () => (
    <div className="space-y-4 rounded border border-green-500 bg-black p-4">
      <div className="flex items-center gap-4">
        <StatusIndicator variant="terminal" status="idle" showLabel />
        <StatusIndicator variant="terminal" status="processing" showLabel />
        <StatusIndicator variant="terminal" status="success" showLabel />
        <StatusIndicator variant="terminal" status="warning" showLabel />
        <StatusIndicator variant="terminal" status="error" showLabel />
        <StatusIndicator variant="terminal" status="offline" showLabel />
      </div>
    </div>
  ),
};

export const Ring: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <StatusIndicator variant="ring" status="idle" showLabel />
        <StatusIndicator variant="ring" status="processing" showLabel />
        <StatusIndicator variant="ring" status="success" showLabel />
        <StatusIndicator variant="ring" status="warning" showLabel />
        <StatusIndicator variant="ring" status="error" showLabel />
        <StatusIndicator variant="ring" status="offline" showLabel />
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="text-sm font-bold">Default</div>
        <div className="flex items-center gap-4">
          <StatusIndicator size="sm" status="success" showLabel />
          <StatusIndicator size="md" status="success" showLabel />
          <StatusIndicator size="lg" status="success" showLabel />
        </div>
      </div>

      <div className="space-y-2">
        <div className="text-sm font-bold">Ring</div>
        <div className="flex items-center gap-4">
          <StatusIndicator
            variant="ring"
            size="sm"
            status="success"
            showLabel
          />
          <StatusIndicator
            variant="ring"
            size="md"
            status="success"
            showLabel
          />
          <StatusIndicator
            variant="ring"
            size="lg"
            status="success"
            showLabel
          />
        </div>
      </div>
    </div>
  ),
};

export const WithPulse: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <StatusIndicator status="processing" pulse showLabel />
        <StatusIndicator status="error" pulse showLabel />
        <StatusIndicator
          variant="terminal"
          status="processing"
          pulse
          showLabel
        />
        <StatusIndicator variant="ring" status="processing" pulse showLabel />
      </div>
    </div>
  ),
};

export const CustomLabels: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <StatusIndicator status="processing" label="UPLOADING" showLabel />
        <StatusIndicator status="warning" label="MAINTENANCE" showLabel />
        <StatusIndicator status="error" label="CONNECTION_LOST" showLabel />
      </div>
    </div>
  ),
};

export const SystemStatus: Story = {
  render: () => {
    const SystemMonitor = () => {
      const [systemStatus, setSystemStatus] = useState<Record<string, any>>({
        database: { status: "processing", label: "CONNECTING" },
        server: { status: "idle", label: "STANDBY" },
        network: { status: "success", label: "CONNECTED" },
      });

      // Simulate status changes
      useEffect(() => {
        const timer = setTimeout(() => {
          setSystemStatus({
            database: { status: "success", label: "CONNECTED" },
            server: { status: "processing", label: "PROCESSING" },
            network: { status: "warning", label: "HIGH_LATENCY" },
          });
        }, 2000);

        return () => clearTimeout(timer);
      }, []);

      return (
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="font-mono text-sm font-bold">System Status</div>
            <div className="rounded border border-gray-200 bg-gray-50 p-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-4">
                  <div className="text-xs font-bold">Database</div>
                  <StatusIndicator
                    status={systemStatus.database.status}
                    label={systemStatus.database.label}
                    showLabel
                    pulse={systemStatus.database.status === "processing"}
                  />
                </div>
                <div className="space-y-4">
                  <div className="text-xs font-bold">Server</div>
                  <StatusIndicator
                    variant="ring"
                    status={systemStatus.server.status}
                    label={systemStatus.server.label}
                    showLabel
                    pulse={systemStatus.server.status === "processing"}
                  />
                </div>
                <div className="space-y-4">
                  <div className="text-xs font-bold">Network</div>
                  <StatusIndicator
                    status={systemStatus.network.status}
                    label={systemStatus.network.label}
                    showLabel
                    pulse={systemStatus.network.status === "warning"}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="font-mono text-sm font-bold">Terminal View</div>
            <div className="rounded border border-green-500 bg-black p-4">
              <div className="grid grid-cols-3 gap-4">
                <StatusIndicator
                  variant="terminal"
                  status={systemStatus.database.status}
                  label={systemStatus.database.label}
                  showLabel
                  pulse={systemStatus.database.status === "processing"}
                />
                <StatusIndicator
                  variant="terminal"
                  status={systemStatus.server.status}
                  label={systemStatus.server.label}
                  showLabel
                  pulse={systemStatus.server.status === "processing"}
                />
                <StatusIndicator
                  variant="terminal"
                  status={systemStatus.network.status}
                  label={systemStatus.network.label}
                  showLabel
                  pulse={systemStatus.network.status === "warning"}
                />
              </div>
            </div>
          </div>
        </div>
      );
    };

    return <SystemMonitor />;
  },
};

export const WithDataGrid: Story = {
  render: () => {
    const columns = [
      {
        key: "id",
        header: "ID",
        width: "120px",
      },
      {
        key: "name",
        header: "Name",
        width: "200px",
      },
      {
        key: "status",
        header: "Status",
        width: "150px",
        render: (value: string) => {
          const statusMap: Record<string, StatusType> = {
            ONLINE: "success",
            CONNECTING: "processing",
            OFFLINE: "offline",
            WARNING: "warning",
            ERROR: "error",
          };

          return (
            <StatusIndicator
              status={statusMap[value]}
              label={value}
              showLabel
              size="sm"
            />
          );
        },
      },
      {
        key: "lastUpdate",
        header: "Last Update",
        width: "200px",
      },
    ];

    const data = [
      {
        id: "SRV001",
        name: "Main Server",
        status: "ONLINE",
        lastUpdate: "2025-01-14 15:30:22",
      },
      {
        id: "SRV002",
        name: "Backup Server",
        status: "CONNECTING",
        lastUpdate: "2025-01-14 15:30:20",
      },
      {
        id: "SRV003",
        name: "Database Server",
        status: "WARNING",
        lastUpdate: "2025-01-14 15:30:18",
      },
      {
        id: "SRV004",
        name: "Cache Server",
        status: "ERROR",
        lastUpdate: "2025-01-14 15:30:15",
      },
    ];

    return <DataGrid columns={columns} data={data} />;
  },
};

export const WithPanel: Story = {
  render: () => {
    return (
      <div className="space-y-4">
        <Panel title="SYSTEM OVERVIEW">
          <PanelRow
            label="Main Process"
            value={
              <div className="flex items-center gap-2">
                <StatusIndicator status="success" />
                <span>Running</span>
                <Badge color="green">PID: 1234</Badge>
              </div>
            }
          />
          <PanelRow
            label="Database"
            value={
              <div className="flex items-center gap-2">
                <StatusIndicator status="warning" pulse />
                <span>High Load</span>
                <ProgressBar
                  value={85}
                  max={100}
                  size="sm"
                  status="warning"
                  className="w-24"
                />
              </div>
            }
          />
          <PanelRow
            label="Backup Service"
            value={
              <div className="flex items-center gap-2">
                <StatusIndicator status="processing" variant="ring" />
                <span>Syncing</span>
                <Badge color="blue">45%</Badge>
              </div>
            }
          />
        </Panel>
      </div>
    );
  },
};

export const WithTabs: Story = {
  render: () => {
    return (
      <Tabs defaultValue="servers">
        <TabList>
          <Tab value="servers">
            Servers
            <StatusIndicator status="warning" size="sm" className="ml-2" />
          </Tab>
          <Tab value="processes">
            Processes
            <StatusIndicator status="success" size="sm" className="ml-2" />
          </Tab>
          <Tab value="alerts">
            Alerts
            <StatusIndicator status="error" pulse size="sm" className="ml-2" />
          </Tab>
        </TabList>

        <TabPanel value="servers">
          <DataGrid
            columns={[
              { key: "id", header: "ID", width: "100px" },
              { key: "name", header: "Name", width: "150px" },
              {
                key: "status",
                header: "Status",
                width: "150px",
                render: (value) => (
                  <StatusIndicator status={value} showLabel size="sm" />
                ),
              },
            ]}
            data={[
              { id: "S1", name: "Server 1", status: "success" },
              { id: "S2", name: "Server 2", status: "warning" },
              { id: "S3", name: "Server 3", status: "success" },
            ]}
          />
        </TabPanel>

        <TabPanel value="processes">
          <Terminal
            lines={[
              "Monitoring active processes...",
              "> Process 1: RUNNING",
              "> Process 2: RUNNING",
              "> Process 3: RUNNING",
            ]}
          />
        </TabPanel>

        <TabPanel value="alerts">
          <Panel variant="bordered">
            <PanelRow
              label="Critical"
              value={
                <div className="flex items-center gap-2">
                  <StatusIndicator status="error" />
                  <span>2 alerts</span>
                </div>
              }
            />
            <PanelRow
              label="Warning"
              value={
                <div className="flex items-center gap-2">
                  <StatusIndicator status="warning" />
                  <span>3 alerts</span>
                </div>
              }
            />
          </Panel>
        </TabPanel>
      </Tabs>
    );
  },
};

export const WithCommandBar: Story = {
  render: () => {
    const [status, setStatus] = useState<StatusType>("idle");

    return (
      <div className="space-y-4">
        <CommandBar
          actions={[
            {
              key: "F1",
              label: "Start",
              onClick: () => setStatus("processing"),
            },
            {
              key: "F2",
              label: "Stop",
              onClick: () => setStatus("idle"),
            },
            {
              key: "F3",
              label: "Error",
              onClick: () => setStatus("error"),
            },
          ]}
          status={[
            {
              label: "Status",
              value: (
                <StatusIndicator
                  status={status}
                  showLabel
                  size="sm"
                  pulse={status === "processing"}
                />
              ),
            },
          ]}
        />

        <Panel>
          <div className="p-4">
            {status === "processing" ? (
              <Terminal
                lines={["Processing...", "> Step 1", "> Step 2"]}
                loading
              />
            ) : status === "error" ? (
              <div className="text-red-500">
                Error occurred during processing
              </div>
            ) : (
              <div className="text-gray-500">Ready to start processing</div>
            )}
          </div>
        </Panel>
      </div>
    );
  },
};

export const WithToasts: Story = {
  render: () => {
    const ToastDemo = () => {
      const { showToast } = useToast();
      const [serverStatus, setServerStatus] = useState<StatusType>("offline");

      const handleServerStart = () => {
        setServerStatus("processing");
        showToast({
          type: "info",
          title: "Server Starting",
          message: "Initializing server components...",
        });

        setTimeout(() => {
          setServerStatus("success");
          showToast({
            type: "success",
            title: "Server Online",
            message: "Server is now running and accepting connections",
          });
        }, 2000);
      };

      const handleServerStop = () => {
        setServerStatus("processing");
        showToast({
          type: "warning",
          title: "Server Stopping",
          message: "Gracefully shutting down...",
        });

        setTimeout(() => {
          setServerStatus("offline");
          showToast({
            type: "info",
            title: "Server Offline",
            message: "Server has been stopped",
          });
        }, 2000);
      };

      const handleServerError = () => {
        setServerStatus("error");
        showToast({
          type: "error",
          title: "Server Error",
          message: "Critical error detected in server operation",
          isPersistent: true,
        });
      };

      return (
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Button
              variant="primary"
              onClick={handleServerStart}
              disabled={serverStatus === "processing"}
            >
              Start Server
            </Button>
            <Button
              onClick={handleServerStop}
              disabled={serverStatus === "processing"}
            >
              Stop Server
            </Button>
            <Button
              variant="danger"
              onClick={handleServerError}
              disabled={serverStatus === "processing"}
            >
              Simulate Error
            </Button>
          </div>

          <Panel title="SERVER STATUS">
            <div className="p-4">
              <StatusIndicator
                status={serverStatus}
                showLabel
                pulse={serverStatus === "processing"}
                size="lg"
              />
            </div>
          </Panel>
        </div>
      );
    };

    return (
      <ToastProvider>
        <ToastDemo />
      </ToastProvider>
    );
  },
};
