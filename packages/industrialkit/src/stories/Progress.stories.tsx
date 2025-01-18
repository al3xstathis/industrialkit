// src/stories/Progress.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Meter, ProgressBar } from "../components/primitive/progress";

const meta: Meta<typeof ProgressBar> = {
  title: "IndustryDB/Progress",
  component: ProgressBar,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-xl space-y-8">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const ProgressVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <ProgressBar value={65} max={100} />
      <ProgressBar value={65} max={100} status="success" />
      <ProgressBar value={65} max={100} status="warning" />
      <ProgressBar value={65} max={100} status="error" />
    </div>
  ),
};

export const ProgressSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <ProgressBar value={65} max={100} size="sm" />
      <ProgressBar value={65} max={100} size="md" />
      <ProgressBar value={65} max={100} size="lg" />
    </div>
  ),
};

export const TerminalProgress: Story = {
  render: () => (
    <div className="space-y-4 bg-gray-900 p-4">
      <ProgressBar
        variant="terminal"
        value={65}
        max={100}
      />
      <ProgressBar
        variant="terminal"
        value={30}
        max={100}
        size="lg"
      />
    </div>
  ),
};

export const Meters: Story = {
  render: () => (
    <div className="space-y-8">
      <Meter
        label="CPU Usage"
        value={25}
        min={0}
        max={100}
        lowThreshold={20}
        highThreshold={80}
      />
      <Meter
        label="Memory"
        value={65}
        min={0}
        max={100}
        lowThreshold={20}
        highThreshold={80}
      />
      <Meter
        label="Disk Space"
        value={92}
        min={0}
        max={100}
        lowThreshold={20}
        highThreshold={80}
      />
    </div>
  ),
};

export const TerminalMeters: Story = {
  render: () => (
    <div className="space-y-8 bg-gray-900 p-4">
      <Meter
        variant="terminal"
        label="SYSTEM_LOAD"
        value={45}
        min={0}
        max={100}
      />
      <Meter
        variant="terminal"
        label="MEMORY_USAGE"
        value={78}
        min={0}
        max={100}
      />
    </div>
  ),
};

export const InContext: Story = {
  render: () => (
    <div className="space-y-6 rounded border border-gray-200 bg-gray-50 p-4">
      <div className="space-y-2">
        <div className="font-mono text-sm font-bold">System Status</div>
        <div className="space-y-4">
          <ProgressBar
            value={65}
            max={100}
            status="success"
            size="sm"
          />
          <Meter
            label="Memory Usage"
            value={78}
            min={0}
            max={100}
            size="sm"
          />
        </div>
      </div>

      <div className="space-y-2">
        <div className="font-mono text-sm font-bold">Production Line</div>
        <div className="grid grid-cols-2 gap-4">
          <ProgressBar
            value={30}
            max={100}
            status="warning"
            size="sm"
          />
          <ProgressBar
            value={85}
            max={100}
            status="success"
            size="sm"
          />
        </div>
      </div>

      <div className="space-y-2">
        <div className="font-mono text-sm font-bold">Terminal View</div>
        <div className="bg-gray-900 p-2">
          <ProgressBar
            variant="terminal"
            value={45}
            max={100}
            size="sm"
          />
        </div>
      </div>
    </div>
  ),
};
