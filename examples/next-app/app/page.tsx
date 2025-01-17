"use client";
import { SystemStats } from "@/components/system-stats";
import {
  CommandBar,
  DataGrid,
  Meter,
  Panel,
  PanelRow,
  SplitView,
  SplitViewPanel,
  TimeSeries,
  useToast,
} from "industrialkit";

// Mock data generator
function generateTimeData(points: number) {
  return Array.from({ length: points }, (_, i) => ({
    timestamp: new Date(Date.now() - (points - i) * 60000),
    value: Math.random() * 100,
  }));
}

export default function DashboardPage() {
  const { showToast } = useToast();
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
                title: "Refresh",
                message: "Data refreshed successfully",
              });
            },
          },
          {
            key: "F6",
            label: "Export",
            onClick: () => {
              showToast({
                type: "success",
                title: "Export",
                message: "Data exported successfully",
              });
            },
          },
        ]}
        status={[
          { label: "Status", value: "Online" },
          { label: "Active Users", value: "23" },
        ]}
      />

      <SystemStats />

      <SplitView
        first={
          <SplitViewPanel title="System Overview">
            <div className="space-y-4">
              <Panel title="Critical Metrics" variant="bordered">
                <PanelRow
                  label="CPU Usage"
                  value={<Meter value={45} max={100} />}
                />
                <PanelRow
                  label="Memory"
                  value={<Meter value={72} max={100} />}
                />
                <PanelRow
                  label="Disk Space"
                  value={<Meter value={28} max={100} />}
                />
              </Panel>

              <Panel title="Active Alarms">
                <DataGrid
                  columns={[
                    { key: "id", header: "ID" },
                    { key: "severity", header: "Severity" },
                    { key: "message", header: "Message" },
                  ]}
                  data={[
                    { id: "ALM001", severity: "High", message: "CPU Overload" },
                    {
                      id: "ALM002",
                      severity: "Low",
                      message: "Disk Space Warning",
                    },
                  ]}
                />
              </Panel>
            </div>
          </SplitViewPanel>
        }
        second={
          <SplitViewPanel title="Performance Metrics">
            <div className="space-y-4">
              <TimeSeries
                data={[generateTimeData(20), generateTimeData(20)]}
                labels={["CPU", "Memory"]}
                height={200}
              />
              <TimeSeries
                data={generateTimeData(20)}
                labels={["Network"]}
                height={200}
              />
            </div>
          </SplitViewPanel>
        }
      />
    </div>
  );
}
