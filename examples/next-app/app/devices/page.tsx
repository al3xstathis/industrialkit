// examples/next-app/app/devices/page.tsx
"use client";
import {
  Badge,
  Button,
  DataGrid,
  Dialog,
  Form,
  FormField,
  FormSection,
  Input,
  Meter,
  Option,
  Panel,
  PanelRow,
  Select,
  SplitView,
  SplitViewPanel,
  StatusIndicator,
  StatusType,
  Switch,
  Terminal,
  TimeSeries,
} from "industrydb";
import { useState } from "react";

// Helper for sample data
function generateTimeData(points: number) {
  return Array.from({ length: points }, (_, i) => ({
    timestamp: new Date(Date.now() - (points - i) * 60000),
    value: Math.random() * 100,
  }));
}

export default function DevicesPage() {
  const [selectedDevice, setSelectedDevice] = useState<string | null>(null);
  const [showAddDevice, setShowAddDevice] = useState(false);

  console.log(selectedDevice);
  const devices = [
    {
      id: "PLC001",
      name: "Main Production PLC",
      type: "Programmable Logic Controller",
      status: "success",
      ip: "192.168.1.100",
      location: "Production Floor",
      lastSeen: "2024-01-15 11:30:00",
      firmware: "v2.1.0",
      cpu: 45,
      memory: 62,
      temperature: 38,
    },
    {
      id: "SNS002",
      name: "Temperature Sensor Array",
      type: "Sensor Network",
      status: "warning",
      ip: "192.168.1.101",
      location: "Storage Area",
      lastSeen: "2024-01-15 11:29:00",
      firmware: "v1.8.5",
      cpu: 28,
      memory: 45,
      temperature: 42,
    },
    {
      id: "RTR003",
      name: "Industrial Router",
      type: "Network Equipment",
      status: "error",
      ip: "192.168.1.1",
      location: "Control Room",
      lastSeen: "2024-01-15 11:25:00",
      firmware: "v3.0.2",
      cpu: 88,
      memory: 75,
      temperature: 55,
    },
  ];

  const deviceLogs = [
    "> Device PLC001 reported high temperature warning",
    "> Firmware update available for SNS002",
    "> RTR003 connection restored after network interruption",
    "> Automatic backup completed for PLC001",
    "> Temperature Sensor Array calibration check scheduled",
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-xl font-bold">Device Management</h1>
          <p className="text-sm text-gray-500">
            Monitor and manage connected industrial equipment
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Badge variant="solid" color="green">
            {devices.filter((d) => d.status === "success").length} Online
          </Badge>
          <Badge variant="solid" color="red">
            {devices.filter((d) => d.status === "error").length} Error
          </Badge>
          <Button variant="primary" onClick={() => setShowAddDevice(true)}>
            Add Device
          </Button>
        </div>
      </div>

      <SplitView
        first={
          <SplitViewPanel title="Device List">
            <div className="space-y-4">
              <div className="flex gap-4">
                <Input
                  placeholder="Search devices..."
                  prefix="🔍"
                  className="w-64"
                />
                <Select prefix="Type" className="w-48">
                  <Option value="all">All Types</Option>
                  <Option value="plc">PLC</Option>
                  <Option value="sensor">Sensors</Option>
                  <Option value="network">Network</Option>
                </Select>
              </div>

              <DataGrid
                columns={[
                  { key: "id", header: "ID", width: "100px" },
                  { key: "name", header: "Name" },
                  {
                    key: "status",
                    header: "Status",
                    width: "120px",
                    render: (value) => (
                      <StatusIndicator status={value} showLabel />
                    ),
                  },
                  { key: "type", header: "Type", width: "150px" },
                  { key: "location", header: "Location", width: "150px" },
                ]}
                data={devices}
                selectable
                selectMode="single"
                onRowSelect={([device]) =>
                  setSelectedDevice(device?.id ?? null)
                }
              />
            </div>
          </SplitViewPanel>
        }
        second={
          <SplitViewPanel title="Device Details">
            {selectedDevice ? (
              <div className="space-y-4">
                {/* Device Info */}
                <Panel variant="bordered">
                  <PanelRow
                    label="Status"
                    value={
                      <StatusIndicator
                        status={
                          (devices.find((d) => d.id === selectedDevice)
                            ?.status ?? "idle") as StatusType
                        }
                        showLabel
                      />
                    }
                  />
                  <PanelRow
                    label="IP Address"
                    value={devices.find((d) => d.id === selectedDevice)?.ip}
                  />
                  <PanelRow
                    label="Firmware"
                    value={
                      devices.find((d) => d.id === selectedDevice)?.firmware
                    }
                  />
                  <PanelRow
                    label="Last Seen"
                    value={
                      devices.find((d) => d.id === selectedDevice)?.lastSeen
                    }
                  />
                </Panel>

                {/* Device Metrics */}
                <Panel variant="bordered" title="Resource Usage">
                  <PanelRow
                    label="CPU Usage"
                    value={
                      <Meter
                        value={
                          devices.find((d) => d.id === selectedDevice)?.cpu ?? 0
                        }
                        max={100}
                      />
                    }
                  />
                  <PanelRow
                    label="Memory"
                    value={
                      <Meter
                        value={
                          devices.find((d) => d.id === selectedDevice)
                            ?.memory ?? 0
                        }
                        max={100}
                      />
                    }
                  />
                  <PanelRow
                    label="Temperature"
                    value={
                      <Meter
                        value={
                          devices.find((d) => d.id === selectedDevice)
                            ?.temperature ?? 0
                        }
                        max={100}
                      />
                    }
                  />
                </Panel>

                {/* Performance Graph */}
                <TimeSeries
                  title="Device Performance"
                  data={[generateTimeData(50), generateTimeData(50)]}
                  labels={["Response Time", "Throughput"]}
                  height={200}
                />

                {/* Device Logs */}
                <Terminal
                  title="DEVICE_LOGS"
                  lines={deviceLogs}
                  maxHeight="200px"
                />
              </div>
            ) : (
              <div className="flex h-full items-center justify-center text-gray-500">
                Select a device to view details
              </div>
            )}
          </SplitViewPanel>
        }
      />

      {/* Add Device Dialog */}
      <Dialog
        open={showAddDevice}
        onClose={() => setShowAddDevice(false)}
        title="Add New Device"
        actions={<Button variant="primary">Add Device</Button>}
      >
        <Form className="space-y-4">
          <FormSection title="Device Information">
            <FormField label="Device Name" required>
              <Input placeholder="Enter device name" />
            </FormField>

            <FormField label="Device Type" required>
              <Select>
                <Option value="plc">PLC</Option>
                <Option value="sensor">Sensor</Option>
                <Option value="network">Network Equipment</Option>
                <Option value="other">Other</Option>
              </Select>
            </FormField>

            <FormField label="IP Address" required>
              <Input
                placeholder="192.168.1.100"
                pattern="\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}"
              />
            </FormField>

            <FormField label="Location">
              <Input placeholder="Enter device location" />
            </FormField>
          </FormSection>

          <FormSection title="Configuration">
            <FormField>
              <Switch label="Enable DHCP" />
            </FormField>

            <FormField label="Monitoring Interval">
              <Select>
                <Option value="10">10 seconds</Option>
                <Option value="30">30 seconds</Option>
                <Option value="60">1 minute</Option>
              </Select>
            </FormField>
          </FormSection>
        </Form>
      </Dialog>
    </div>
  );
}
