// src/stories/Accordion.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Accordion, AccordionItem } from "../components/primitive/accordion";
import { Badge } from "../components/primitive/badge";
import { Button } from "../components/primitive/button";
import { ProgressBar } from "../components/primitive/progress";
import { Terminal } from "../components/primitive/terminal";

const meta: Meta<typeof Accordion> = {
  title: "IndustryDB/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-2xl">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: () => (
    <Accordion defaultValue={["system"]}>
      <AccordionItem
        value="system"
        title="System Overview"
        subtitle="Current system status and metrics"
      >
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span>System Status:</span>
            <Badge color="green">OPERATIONAL</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span>Uptime:</span>
            <span>24d 13h 45m</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Last Update:</span>
            <span>2025-01-14 15:30:22</span>
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span>CPU Usage:</span>
              <span>45%</span>
            </div>
            <ProgressBar value={45} max={100} size="sm" />
          </div>
        </div>
      </AccordionItem>

      <AccordionItem
        value="network"
        title="Network Status"
        subtitle="Connection and bandwidth information"
      >
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span>Primary Link:</span>
            <Badge color="green">CONNECTED</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span>Backup Link:</span>
            <Badge color="yellow">STANDBY</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span>Current Load:</span>
            <span>45.2 Mb/s</span>
          </div>
          <div className="rounded border border-gray-200 bg-gray-50 p-2">
            <div className="mb-1 text-xs font-bold">Connected Clients</div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>• Client_A (192.168.1.101)</div>
              <div>• Client_B (192.168.1.102)</div>
              <div>• Client_C (192.168.1.103)</div>
              <div>• Client_D (192.168.1.104)</div>
            </div>
          </div>
        </div>
      </AccordionItem>

      <AccordionItem
        value="storage"
        title="Storage Management"
        subtitle="Disk and memory allocation"
      >
        <div className="space-y-3">
          <div>
            <div className="mb-1 flex items-center justify-between">
              <span>System Drive (C:)</span>
              <span>75%</span>
            </div>
            <ProgressBar value={75} max={100} size="sm" status="warning" />
          </div>
          <div>
            <div className="mb-1 flex items-center justify-between">
              <span>Data Drive (D:)</span>
              <span>45%</span>
            </div>
            <ProgressBar value={45} max={100} size="sm" />
          </div>
          <div>
            <div className="mb-1 flex items-center justify-between">
              <span>Backup Drive (E:)</span>
              <span>28%</span>
            </div>
            <ProgressBar value={28} max={100} size="sm" />
          </div>
        </div>
      </AccordionItem>
    </Accordion>
  ),
};

export const TerminalStory: Story = {
  render: () => (
    <div className="rounded border border-green-500 bg-black p-4">
      <Accordion variant="terminal" defaultValue={["monitor"]}>
        <AccordionItem
          value="monitor"
          title="SYSTEM_MONITOR"
          subtitle="Real-time system metrics"
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span>STATUS:</span>
              <Badge variant="solid" color="green">
                ONLINE
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>UPTIME:</span>
              <span>24:13:45</span>
            </div>
            <div>
              <div className="mb-1 flex items-center justify-between">
                <span>CPU_LOAD:</span>
                <span>45%</span>
              </div>
              <ProgressBar variant="terminal" value={45} max={100} size="sm" />
            </div>
          </div>
        </AccordionItem>

        <AccordionItem
          value="processes"
          title="ACTIVE_PROCESSES"
          subtitle="Running system processes"
        >
          <Terminal
            lines={[
              "PID  PROCESS         CPU   MEM",
              "---  -----------    ----  ----",
              "001  system.exe     12%   156M",
              "002  database.exe   25%   512M",
              "003  network.exe     8%    64M",
              "004  monitor.exe     5%    98M",
            ]}
            maxHeight="12rem"
          />
        </AccordionItem>

        <AccordionItem
          value="commands"
          title="COMMAND_CENTER"
          subtitle="Available system commands"
        >
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              <Button variant="terminal" size="sm">
                SCAN
              </Button>
              <Button variant="terminal" size="sm">
                UPDATE
              </Button>
              <Button variant="terminal" size="sm">
                RESTART
              </Button>
            </div>
            <div className="rounded border border-green-500 bg-black p-2 text-xs">
              Type 'help' for more commands
            </div>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const Multiple: Story = {
  render: () => (
    <Accordion multiple defaultValue={["line-a", "line-b"]}>
      <AccordionItem
        value="line-a"
        title="Production Line A"
        subtitle="Primary assembly line"
      >
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span>Status:</span>
            <Badge color="green">RUNNING</Badge>
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span>Throughput:</span>
              <span>450 units/hour</span>
            </div>
            <ProgressBar value={90} max={100} size="sm" status="success" />
          </div>
          <div>• Operating at optimal efficiency</div>
          <div>• No maintenance required</div>
          <div>• Quality check passing: 99.8%</div>
        </div>
      </AccordionItem>

      <AccordionItem
        value="line-b"
        title="Production Line B"
        subtitle="Secondary assembly line"
      >
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span>Status:</span>
            <Badge color="yellow">MAINTENANCE</Badge>
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span>Throughput:</span>
              <span>280 units/hour</span>
            </div>
            <ProgressBar value={55} max={100} size="sm" status="warning" />
          </div>
          <div>• Scheduled maintenance in progress</div>
          <div>• Operating at reduced capacity</div>
          <div>• Quality check passing: 98.5%</div>
        </div>
      </AccordionItem>

      <AccordionItem
        value="line-c"
        title="Production Line C"
        subtitle="Auxiliary assembly line"
      >
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span>Status:</span>
            <Badge color="red">OFFLINE</Badge>
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span>Throughput:</span>
              <span>0 units/hour</span>
            </div>
            <ProgressBar value={0} max={100} size="sm" status="error" />
          </div>
          <div>• Emergency maintenance required</div>
          <div>• Estimated downtime: 4 hours</div>
          <div>• Technician assigned: #T-4421</div>
        </div>
      </AccordionItem>
    </Accordion>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [openSections, setOpenSections] = useState<string[]>([]);
    const [alerts, setAlerts] = useState({
      security: 3,
      performance: 2,
      network: 0,
    });

    const clearAlert = (section: keyof typeof alerts) => {
      setAlerts((prev) => ({ ...prev, [section]: 0 }));
    };

    return (
      <Accordion value={openSections} onValueChange={setOpenSections}>
        <AccordionItem
          value="security"
          title={
            <div className="flex items-center gap-2">
              <span>Security Alerts</span>
              {alerts.security > 0 && (
                <Badge color="red" variant="solid">
                  {alerts.security}
                </Badge>
              )}
            </div>
          }
          subtitle="System security status and alerts"
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge color="red">CRITICAL</Badge>
                <span>Unauthorized access attempt detected</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge color="red">WARNING</Badge>
                <span>Firewall rule violation</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge color="red">ALERT</Badge>
                <span>Unusual network activity detected</span>
              </div>
            </div>
            <Button
              variant="danger"
              size="sm"
              onClick={() => clearAlert("security")}
            >
              Clear Alerts
            </Button>
          </div>
        </AccordionItem>

        <AccordionItem
          value="performance"
          title={
            <div className="flex items-center gap-2">
              <span>Performance Alerts</span>
              {alerts.performance > 0 && (
                <Badge color="yellow" variant="solid">
                  {alerts.performance}
                </Badge>
              )}
            </div>
          }
          subtitle="System performance monitoring"
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge color="yellow">WARNING</Badge>
                <span>High CPU usage detected</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge color="yellow">WARNING</Badge>
                <span>Low memory available</span>
              </div>
            </div>
            <Button
              variant="primary"
              size="sm"
              onClick={() => clearAlert("performance")}
            >
              Clear Alerts
            </Button>
          </div>
        </AccordionItem>

        <AccordionItem
          value="network"
          title={
            <div className="flex items-center gap-2">
              <span>Network Status</span>
              {alerts.network > 0 && (
                <Badge color="yellow" variant="solid">
                  {alerts.network}
                </Badge>
              )}
            </div>
          }
          subtitle="Network connectivity status"
        >
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge color="green">NORMAL</Badge>
              <span>All systems operational</span>
            </div>
            <div className="rounded border border-gray-200 bg-gray-50 p-2">
              <div className="mb-1 text-xs font-bold">Last 3 Events:</div>
              <div className="space-y-1 text-xs">
                <div>15:30:22 - Connection verified</div>
                <div>15:15:45 - Bandwidth test completed</div>
                <div>15:00:00 - Daily health check passed</div>
              </div>
            </div>
          </div>
        </AccordionItem>
      </Accordion>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <Accordion defaultValue={["active"]}>
      <AccordionItem
        value="active"
        title="Active Module"
        subtitle="Fully operational module"
      >
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span>Status:</span>
            <Badge color="green">ACTIVE</Badge>
          </div>
          Module is operating normally with full functionality. All systems are
          accessible and responding.
        </div>
      </AccordionItem>

      <AccordionItem
        value="maintenance"
        title="Maintenance Mode"
        subtitle="Scheduled maintenance in progress"
        disabled
      >
        <div>This content is not accessible during maintenance</div>
      </AccordionItem>

      <AccordionItem
        value="offline"
        title="Offline Module"
        subtitle="Currently unavailable"
        disabled
      >
        <div>This content is not accessible while offline</div>
      </AccordionItem>
    </Accordion>
  ),
};
