// src/stories/TimeSeries.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { subMinutes } from "date-fns";
import { useEffect, useState } from "react";
import { TimeSeries } from "../components/primitive/time-series";

const meta: Meta<typeof TimeSeries> = {
  title: "IndustryDB/TimeSeries",
  component: TimeSeries,
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
type Story = StoryObj<typeof TimeSeries>;

// Helper to generate sample data
const generateData = (points: number, min: number, max: number) => {
  return Array.from({ length: points }, (_, i) => ({
    timestamp: subMinutes(new Date(), points - i - 1),
    value: Math.floor(Math.random() * (max - min) + min),
  }));
};

export const Default: Story = {
  render: () => (
    <TimeSeries
      data={generateData(20, 0, 100)}
      title="System Metrics"
      yAxisLabel="Value"
    />
  ),
};

export const Terminal: Story = {
  render: () => (
    <TimeSeries
      data={generateData(20, 0, 100)}
      title="SYSTEM_METRICS"
      variant="terminal"
      yAxisLabel="VALUE"
    />
  ),
};

export const MultiSeries: Story = {
  render: () => (
    <TimeSeries
      data={[
        generateData(20, 0, 100),
        generateData(20, 20, 80),
        generateData(20, 40, 60),
      ]}
      labels={["CPU Usage", "Memory Usage", "Disk I/O"]}
      title="System Resources"
      yAxisLabel="Percentage"
    />
  ),
};

export const FilledArea: Story = {
  render: () => (
    <TimeSeries
      data={generateData(20, 0, 100)}
      title="Network Traffic"
      fill={true}
      yAxisLabel="MB/s"
    />
  ),
};

export const Realtime: Story = {
  render: () => {
    const [data, setData] = useState(generateData(20, 0, 100));

    useEffect(() => {
      const interval = setInterval(() => {
        setData((prev) => [
          ...prev.slice(1),
          {
            timestamp: new Date(),
            value: Math.floor(Math.random() * 100),
          },
        ]);
      }, 1000);

      return () => clearInterval(interval);
    }, []);

    return (
      <TimeSeries
        data={data}
        title="Real-time Metrics"
        realtime={true}
        yAxisLabel="Value"
      />
    );
  },
};

export const InContext: Story = {
  render: () => {
    const [cpuData, setCpuData] = useState(generateData(20, 0, 100));
    const [memoryData, setMemoryData] = useState(generateData(20, 0, 100));

    useEffect(() => {
      const interval = setInterval(() => {
        setCpuData((prev) => [
          ...prev.slice(1),
          {
            timestamp: new Date(),
            value: Math.floor(Math.random() * 100),
          },
        ]);
        setMemoryData((prev) => [
          ...prev.slice(1),
          {
            timestamp: new Date(),
            value: Math.floor(Math.random() * 100),
          },
        ]);
      }, 1000);

      return () => clearInterval(interval);
    }, []);

    return (
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="font-mono text-sm font-bold">System Metrics</div>
          <div className="grid grid-cols-2 gap-4">
            <TimeSeries
              data={cpuData}
              title="CPU Usage"
              height={200}
              showLegend={false}
              realtime={true}
              yAxisLabel="%"
            />
            <TimeSeries
              data={memoryData}
              title="Memory Usage"
              height={200}
              showLegend={false}
              realtime={true}
              yAxisLabel="%"
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="font-mono text-sm font-bold">Terminal View</div>
          <div className="bg-black p-4">
            <TimeSeries
              data={[cpuData, memoryData]}
              labels={["CPU", "MEM"]}
              title="SYSTEM_RESOURCES"
              variant="terminal"
              realtime={true}
              yAxisLabel="USAGE_%"
            />
          </div>
        </div>
      </div>
    );
  },
};
