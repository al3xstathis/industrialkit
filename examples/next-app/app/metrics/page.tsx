"use client";
import {
  Panel,
  PanelRow,
  SplitView,
  SplitViewPanel,
  TimeSeries,
} from "industrydb";

// Helper function to generate sample time series data
function generateTimeData(points: number) {
  return Array.from({ length: points }, (_, i) => ({
    timestamp: new Date(Date.now() - (points - i) * 60000),
    value: Math.random() * 100,
  }));
}

export default function MetricsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold">System Metrics</h1>

      <SplitView
        direction="vertical"
        first={
          <SplitViewPanel title="Resource Usage">
            <div className="space-y-4">
              <TimeSeries
                title="CPU & Memory Usage"
                data={[generateTimeData(50), generateTimeData(50)]}
                labels={["CPU", "Memory"]}
                height={200}
                yAxisLabel="Percentage"
              />
              <TimeSeries
                title="Network Traffic"
                data={generateTimeData(50)}
                labels={["Network"]}
                height={200}
                yAxisLabel="MB/s"
              />
            </div>
          </SplitViewPanel>
        }
        second={
          <SplitViewPanel title="Performance Metrics">
            <div className="grid grid-cols-2 gap-4">
              <Panel variant="bordered">
                <PanelRow label="Requests/sec" value="1,234" />
                <PanelRow label="Avg Response Time" value="45ms" />
                <PanelRow label="Error Rate" value="0.01%" />
              </Panel>
              <Panel variant="bordered">
                <PanelRow label="Active Users" value="567" />
                <PanelRow label="Active Sessions" value="890" />
                <PanelRow label="Cache Hit Rate" value="95%" />
              </Panel>
            </div>
          </SplitViewPanel>
        }
      />
    </div>
  );
}
