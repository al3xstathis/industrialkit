// examples/next-app/app/logs/page.tsx
"use client";
import {
  Accordion,
  AccordionItem,
  Badge,
  Breadcrumbs,
  Button,
  CommandBar,
  DataGrid,
  Input,
  Option,
  Panel,
  PanelRow,
  Select,
  SplitView,
  SplitViewPanel,
  Terminal,
  TimeSeries,
  useToast,
} from "industrydb";
import { useState } from "react";

// Sample log entry type
type LogEntry = {
  id: string;
  timestamp: string;
  level: "INFO" | "WARN" | "ERROR" | "DEBUG";
  source: string;
  message: string;
  details?: string;
  trace?: string;
};

// Helper for sample data
function generateTimeData(points: number) {
  return Array.from({ length: points }, (_, i) => ({
    timestamp: new Date(Date.now() - (points - i) * 60000),
    value: Math.random() * 100,
  }));
}

export default function LogsPage() {
  const { showToast } = useToast();
  const [selectedLog, setSelectedLog] = useState<LogEntry | null>(null);
  const [logFilter, setLogFilter] = useState("all");
  const [isLiveUpdate, setIsLiveUpdate] = useState(true);

  // Sample logs data
  const logs: LogEntry[] = [
    {
      id: "LOG001",
      timestamp: "2024-01-15 11:30:00",
      level: "ERROR",
      source: "Authentication Service",
      message: "Failed login attempt detected",
      details: "Multiple failed attempts from IP: 192.168.1.100",
      trace:
        "Error: Authentication failed\n  at AuthService.validate (/src/auth.ts:42)\n  at LoginController.attempt (/src/controllers/login.ts:23)",
    },
    {
      id: "LOG002",
      timestamp: "2024-01-15 11:29:30",
      level: "WARN",
      source: "Database Service",
      message: "High query latency detected",
      details: "Query execution time exceeded 1000ms threshold",
    },
    {
      id: "LOG003",
      timestamp: "2024-01-15 11:29:00",
      level: "INFO",
      source: "System Monitor",
      message: "Backup process completed successfully",
      details: "Backup size: 2.5GB, Duration: 5m 30s",
    },
    {
      id: "LOG004",
      timestamp: "2024-01-15 11:28:30",
      level: "DEBUG",
      source: "Process Manager",
      message: "Worker pool scaled up",
      details: "Increased workers from 5 to 8 due to high load",
    },
  ];

  // Live log simulation
  const terminalLogs = [
    "> [11:30:00] ERROR: Failed login attempt detected",
    "> [11:29:30] WARN: High query latency detected",
    "> [11:29:00] INFO: Backup process completed successfully",
    "> [11:28:30] DEBUG: Worker pool scaled up",
    "> [11:28:00] INFO: System health check completed",
  ];

  return (
    <div className="space-y-4">
      <CommandBar
        actions={[
          {
            key: "F5",
            label: "Refresh",
            onClick: () => {
              showToast({
                type: "info",
                title: "Refreshing Logs",
                message: "Fetching latest log entries...",
              });
            },
          },
          {
            key: "F6",
            label: "Export",
            onClick: () => {
              showToast({
                type: "success",
                title: "Export Started",
                message: "Preparing log export...",
              });
            },
          },
          {
            key: "F7",
            label: "Clear",
            onClick: () => {
              showToast({
                type: "warning",
                title: "Clear Logs",
                message: "Are you sure you want to clear all logs?",
              });
            },
          },
        ]}
        status={[
          {
            label: "Live Update",
            value: isLiveUpdate ? "Enabled" : "Disabled",
          },
          { label: "Buffer Size", value: "1024 entries" },
        ]}
      />

      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <Breadcrumbs
            items={[
              { label: "System", href: "/" },
              { label: "Logs", href: "/logs" },
              { label: logFilter.toUpperCase() },
            ]}
          />
          <div className="flex items-center gap-4">
            <Badge variant="solid" color="red">
              {logs.filter((log) => log.level === "ERROR").length} Errors
            </Badge>
            <Badge variant="solid" color="yellow">
              {logs.filter((log) => log.level === "WARN").length} Warnings
            </Badge>
            <Badge variant="solid" color="blue">
              {logs.filter((log) => log.level === "INFO").length} Info
            </Badge>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant={isLiveUpdate ? "primary" : "default"}
            onClick={() => setIsLiveUpdate(!isLiveUpdate)}
          >
            {isLiveUpdate ? "■ Stop" : "▶ Start"} Live Update
          </Button>
        </div>
      </div>

      <SplitView
        first={
          <SplitViewPanel title="Log Entries">
            <div className="space-y-4">
              <div className="flex gap-4">
                <Input
                  placeholder="Search logs..."
                  prefix="🔍"
                  className="w-64"
                />
                <Select
                  value={logFilter}
                  onChange={(e) => setLogFilter(e.target.value)}
                  className="w-48"
                >
                  <Option value="all">All Levels</Option>
                  <Option value="error">Errors</Option>
                  <Option value="warn">Warnings</Option>
                  <Option value="info">Info</Option>
                  <Option value="debug">Debug</Option>
                </Select>
                <Select className="w-48">
                  <Option value="15m">Last 15 minutes</Option>
                  <Option value="1h">Last hour</Option>
                  <Option value="24h">Last 24 hours</Option>
                  <Option value="7d">Last 7 days</Option>
                </Select>
              </div>

              <DataGrid
                selectable
                columns={[
                  { key: "timestamp", header: "Time", width: "150px" },
                  {
                    key: "level",
                    header: "Level",
                    width: "100px",
                    render: (value) => (
                      <Badge
                        variant="solid"
                        color={
                          value === "ERROR"
                            ? "red"
                            : value === "WARN"
                              ? "yellow"
                              : value === "INFO"
                                ? "blue"
                                : "gray"
                        }
                      >
                        {value}
                      </Badge>
                    ),
                  },
                  { key: "source", header: "Source", width: "200px" },
                  { key: "message", header: "Message" },
                ]}
                data={logs}
                selectMode="single"
                onRowSelect={([log]) => setSelectedLog(log as LogEntry)}
              />
            </div>
          </SplitViewPanel>
        }
        second={
          <SplitView
            direction="vertical"
            defaultSplit={60}
            first={
              <SplitViewPanel title="Log Details">
                {selectedLog ? (
                  <div className="space-y-4">
                    <Panel variant="bordered">
                      <PanelRow label="Time" value={selectedLog.timestamp} />
                      <PanelRow
                        label="Level"
                        value={
                          <Badge
                            variant="solid"
                            color={
                              selectedLog.level === "ERROR"
                                ? "red"
                                : selectedLog.level === "WARN"
                                  ? "yellow"
                                  : selectedLog.level === "INFO"
                                    ? "blue"
                                    : "gray"
                            }
                          >
                            {selectedLog.level}
                          </Badge>
                        }
                      />
                      <PanelRow label="Source" value={selectedLog.source} />
                      <PanelRow label="Message" value={selectedLog.message} />
                      {selectedLog.details && (
                        <PanelRow label="Details" value={selectedLog.details} />
                      )}
                    </Panel>
                    {selectedLog.trace && (
                      <Terminal
                        title="STACK_TRACE"
                        lines={selectedLog.trace.split("\n")}
                        maxHeight="200px"
                      />
                    )}
                  </div>
                ) : (
                  <div className="flex h-full items-center justify-center text-gray-500">
                    Select a log entry to view details
                  </div>
                )}
              </SplitViewPanel>
            }
            second={
              <SplitViewPanel title="Live Log Stream">
                <Terminal
                  title="LOG_STREAM"
                  lines={terminalLogs}
                  loading={isLiveUpdate}
                />
              </SplitViewPanel>
            }
          />
        }
      />

      <Accordion>
        <AccordionItem
          value="stats"
          title="Log Analytics"
          subtitle="Error frequency and patterns"
        >
          <div className="space-y-4">
            <TimeSeries
              title="Log Frequency"
              data={[
                generateTimeData(50), // Errors
                generateTimeData(50), // Warnings
              ]}
              labels={["Errors", "Warnings"]}
              height={200}
              yAxisLabel="Count"
            />
            <div className="grid grid-cols-3 gap-4">
              <Panel variant="bordered">
                <PanelRow label="Total Logs" value="1,234" />
                <PanelRow label="Errors" value="23" />
                <PanelRow label="Warnings" value="45" />
                <PanelRow label="Info" value="1,166" />
              </Panel>
              <Panel variant="bordered">
                <PanelRow label="Peak Time" value="14:00-15:00" />
                <PanelRow label="Quiet Time" value="03:00-04:00" />
                <PanelRow label="Avg per Hour" value="51.4" />
              </Panel>
              <Panel variant="bordered">
                <PanelRow label="Top Source" value="Authentication Service" />
                <PanelRow label="Most Common" value="Failed login attempt" />
                <PanelRow label="Log Size" value="2.5 GB" />
              </Panel>
            </div>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
