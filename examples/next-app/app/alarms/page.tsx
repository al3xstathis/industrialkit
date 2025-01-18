"use client";
import {
  Accordion,
  AccordionItem,
  Badge,
  Button,
  DataGrid,
  Form,
  FormField,
  FormSection,
  Input,
  NumericInput,
  Option,
  Panel,
  PanelRow,
  Select,
  Switch,
  Tab,
  TabList,
  TabPanel,
  Tabs,
  TimeSeries,
} from "industrialkit";
import { useState } from "react";

// Helper function to generate sample time series data
function generateTimeData(points: number) {
  return Array.from({ length: points }, (_, i) => ({
    timestamp: new Date(Date.now() - (points - i) * 60000),
    value: Math.random() * 100,
  }));
}

export default function AlarmsPage() {
  const [activeTab, setActiveTab] = useState("active");

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-xl font-bold">System Alarms</h1>
          <p className="text-sm text-gray-500">
            Monitor and manage system alerts and notifications
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Badge variant="solid" color="red">
            5 Critical
          </Badge>
          <Badge variant="solid" color="yellow">
            3 Warning
          </Badge>
          <Button variant="primary">Acknowledge All</Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabList>
          <Tab value="active">Active Alarms</Tab>
          <Tab value="history">Alarm History</Tab>
          <Tab value="analytics">Analytics</Tab>
          <Tab value="settings">Settings</Tab>
        </TabList>

        {/* Active Alarms Panel */}
        <TabPanel value="active">
          <DataGrid
            columns={[
              { key: "id", header: "ID", width: "100px" },
              {
                key: "severity",
                header: "Severity",
                width: "120px",
                sortable: true,
                render: (value) => (
                  <Badge
                    variant="solid"
                    color={
                      value === "Critical"
                        ? "red"
                        : value === "Warning"
                          ? "yellow"
                          : "blue"
                    }
                  >
                    {value}
                  </Badge>
                ),
              },
              { key: "message", header: "Message", sortable: true },
              {
                key: "source",
                header: "Source",
                width: "150px",
                sortable: true,
              },
              {
                key: "timestamp",
                header: "Time",
                width: "200px",
                sortable: true,
              },
              {
                key: "acknowledged",
                header: "Status",
                width: "120px",
                render: (value) => (
                  <Badge variant="outline" color={value ? "green" : "yellow"}>
                    {value ? "Acknowledged" : "New"}
                  </Badge>
                ),
              },
            ]}
            data={[
              {
                id: "ALM001",
                severity: "Critical",
                message: "CPU Usage exceeded threshold (95%)",
                source: "System Monitor",
                timestamp: "2024-01-15 10:30:00",
                acknowledged: false,
              },
              {
                id: "ALM002",
                severity: "Warning",
                message: "Memory usage approaching limit",
                source: "Resource Monitor",
                timestamp: "2024-01-15 10:25:00",
                acknowledged: true,
              },
              {
                id: "ALM003",
                severity: "Critical",
                message: "Database connection failed",
                source: "Database Service",
                timestamp: "2024-01-15 10:20:00",
                acknowledged: false,
              },
              {
                id: "ALM004",
                severity: "Warning",
                message: "High network latency detected",
                source: "Network Monitor",
                timestamp: "2024-01-15 10:15:00",
                acknowledged: false,
              },
              {
                id: "ALM005",
                severity: "Critical",
                message: "Security breach attempt detected",
                source: "Security Monitor",
                timestamp: "2024-01-15 10:10:00",
                acknowledged: false,
              },
            ]}
            selectable
          />
        </TabPanel>

        {/* Alarm History Panel */}
        <TabPanel value="history">
          <div className="space-y-4">
            <div className="flex gap-4">
              <Input
                placeholder="Search alarms..."
                prefix="🔍"
                className="w-64"
              />
              <Select prefix="Filter" className="w-48">
                <Option value="all">All Severities</Option>
                <Option value="critical">Critical</Option>
                <Option value="warning">Warning</Option>
                <Option value="info">Info</Option>
              </Select>
              <Button variant="default">Export</Button>
            </div>

            <Accordion>
              <AccordionItem value="today" title="Today" subtitle="8 alarms">
                <DataGrid
                  columns={[
                    { key: "time", header: "Time", width: "100px" },
                    { key: "severity", header: "Severity", width: "120px" },
                    { key: "message", header: "Message" },
                    { key: "duration", header: "Duration", width: "100px" },
                  ]}
                  data={[
                    {
                      id: "ALM001",
                      time: "10:30:00",
                      severity: "Critical",
                      message: "CPU Usage exceeded threshold (95%)",
                      duration: "5m 30s",
                    },
                    {
                      id: "ALM002",
                      time: "10:25:00",
                      severity: "Warning",
                      message: "Memory usage approaching limit",
                      duration: "10m 15s",
                    },
                  ]}
                />
              </AccordionItem>
              <AccordionItem
                value="yesterday"
                title="Yesterday"
                subtitle="12 alarms"
              >
                {/* Similar DataGrid for yesterday's alarms */}
              </AccordionItem>
            </Accordion>
          </div>
        </TabPanel>

        {/* Analytics Panel */}
        <TabPanel value="analytics">
          <div className="space-y-4">
            <TimeSeries
              data={[generateTimeData(50), generateTimeData(50)]}
              labels={["Critical", "Warning"]}
              height={300}
              title="Alarm Frequency"
              yAxisLabel="Count"
            />

            <div className="grid grid-cols-3 gap-4">
              <Panel variant="bordered">
                <PanelRow label="Total Alarms" value="156" />
                <PanelRow label="Critical" value="23" />
                <PanelRow label="Warning" value="45" />
                <PanelRow label="Info" value="88" />
              </Panel>
              <Panel variant="bordered">
                <PanelRow label="Avg Response Time" value="5m 30s" />
                <PanelRow label="Max Response Time" value="45m 12s" />
                <PanelRow label="Min Response Time" value="30s" />
              </Panel>
              <Panel variant="bordered">
                <PanelRow label="Top Source" value="System Monitor" />
                <PanelRow label="Most Common" value="CPU Usage" />
                <PanelRow label="Peak Time" value="14:00-15:00" />
              </Panel>
            </div>
          </div>
        </TabPanel>

        {/* Settings Panel */}
        <TabPanel value="settings">
          <Form className="max-w-2xl">
            <FormSection
              title="Notification Settings"
              description="Configure how and when you receive alarm notifications"
            >
              <FormField
                label="Email Notifications"
                hint="Receive alarm notifications via email"
              >
                <Select>
                  <Option value="all">All Alarms</Option>
                  <Option value="critical">Critical Only</Option>
                  <Option value="none">Disabled</Option>
                </Select>
              </FormField>

              <FormField
                label="SMS Notifications"
                hint="Receive urgent alarms via SMS"
              >
                <Select>
                  <Option value="critical">Critical Only</Option>
                  <Option value="none">Disabled</Option>
                </Select>
              </FormField>

              <FormField
                label="Notification Schedule"
                hint="Define when notifications should be sent"
              >
                <Select>
                  <Option value="always">24/7</Option>
                  <Option value="business">Business Hours</Option>
                  <Option value="custom">Custom Schedule</Option>
                </Select>
              </FormField>
            </FormSection>

            <FormSection
              title="Threshold Settings"
              description="Configure alarm triggering thresholds"
            >
              <FormField
                label="CPU Usage Threshold"
                hint="Trigger alarm when CPU usage exceeds this value"
              >
                <NumericInput
                  min={0}
                  max={100}
                  step={5}
                  defaultValue={90}
                  suffix="%"
                />
              </FormField>

              <FormField
                label="Memory Usage Threshold"
                hint="Trigger alarm when memory usage exceeds this value"
              >
                <NumericInput
                  min={0}
                  max={100}
                  step={5}
                  defaultValue={85}
                  suffix="%"
                />
              </FormField>

              <FormField
                label="Network Latency Threshold"
                hint="Trigger alarm when network latency exceeds this value"
              >
                <NumericInput
                  min={0}
                  max={1000}
                  step={10}
                  defaultValue={100}
                  suffix="ms"
                />
              </FormField>
            </FormSection>

            <FormSection
              title="Auto-Resolution"
              description="Configure automatic alarm resolution settings"
            >
              <FormField
                label="Auto-acknowledge alarms"
                hint="Automatically acknowledge alarms when the condition returns to normal"
              >
                <Switch />
              </FormField>

              <FormField
                label="Resolution Delay"
                hint="Wait time before auto-resolving alarms"
              >
                <NumericInput
                  min={0}
                  max={60}
                  step={1}
                  defaultValue={5}
                  suffix="minutes"
                />
              </FormField>
            </FormSection>

            <div className="flex justify-end gap-2">
              <Button variant="default">Cancel</Button>
              <Button variant="primary">Save Changes</Button>
            </div>
          </Form>
        </TabPanel>
      </Tabs>
    </div>
  );
}
