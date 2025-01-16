// src/stories/Tooltip.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/primitive/button";
import { Tooltip } from "../components/primitive/tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "IndustryDB/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <div className="flex items-center justify-center gap-4">
      <Tooltip content="Top tooltip">
        <Button>Hover me (Top)</Button>
      </Tooltip>
      <Tooltip content="Right tooltip" side="right">
        <Button>Hover me (Right)</Button>
      </Tooltip>
      <Tooltip content="Bottom tooltip" side="bottom">
        <Button>Hover me (Bottom)</Button>
      </Tooltip>
      <Tooltip content="Left tooltip" side="left">
        <Button>Hover me (Left)</Button>
      </Tooltip>
    </div>
  ),
};

export const Terminal: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="flex items-center justify-center gap-4">
        <Tooltip content="SYSTEM_STATUS: ONLINE" variant="terminal">
          <Button variant="terminal">Status</Button>
        </Tooltip>
        <Tooltip content="CPU_USAGE: 45%" variant="terminal" side="right">
          <Button variant="terminal">CPU</Button>
        </Tooltip>
        <Tooltip
          content="MEM_AVAILABLE: 4.2GB"
          variant="terminal"
          side="bottom"
        >
          <Button variant="terminal">Memory</Button>
        </Tooltip>
      </div>
    </div>
  ),
};

export const Alignment: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-16">
      <div className="flex items-center gap-16">
        <Tooltip content="Start aligned" align="start">
          <Button>Start</Button>
        </Tooltip>
        <Tooltip content="Center aligned">
          <Button>Center</Button>
        </Tooltip>
        <Tooltip content="End aligned" align="end">
          <Button>End</Button>
        </Tooltip>
      </div>
      <div className="flex items-center gap-16">
        <Tooltip content="Start aligned" variant="terminal" align="start">
          <Button variant="terminal">Start</Button>
        </Tooltip>
        <Tooltip content="Center aligned" variant="terminal">
          <Button variant="terminal">Center</Button>
        </Tooltip>
        <Tooltip content="End aligned" variant="terminal" align="end">
          <Button variant="terminal">End</Button>
        </Tooltip>
      </div>
    </div>
  ),
};

export const WithCustomContent: Story = {
  render: () => (
    <div className="flex items-center justify-center gap-4">
      <Tooltip
        content={
          <div className="space-y-1">
            <div className="font-bold">System Status</div>
            <div className="text-xs">
              • CPU: 45%
              <br />
              • Memory: 2.4GB
              <br />• Disk: 78%
            </div>
          </div>
        }
      >
        <Button>Show Details</Button>
      </Tooltip>

      <Tooltip
        content={
          <div className="space-y-1">
            <div className="font-bold">ERROR_DETAILS</div>
            <div className="text-xs text-red-400">
              • Connection timeout
              <br />
              • Retry attempts: 3
              <br />• Status: FAILED
            </div>
          </div>
        }
        variant="terminal"
      >
        <Button variant="terminal">View Error</Button>
      </Tooltip>
    </div>
  ),
};

export const InContext: Story = {
  render: () => (
    <div className="space-y-8 rounded border border-gray-200 bg-gray-50 p-4">
      <div className="space-y-2">
        <div className="font-mono text-sm font-bold">System Controls</div>
        <div className="flex items-center gap-4">
          <Tooltip content="Start all system processes">
            <Button variant="primary">Start</Button>
          </Tooltip>
          <Tooltip content="Stop all running processes">
            <Button variant="danger">Stop</Button>
          </Tooltip>
          <Tooltip
            content={
              <div className="space-y-1">
                <div>Current Status:</div>
                <div className="text-xs">
                  • 3 processes running
                  <br />
                  • 2 processes idle
                  <br />• 1 process error
                </div>
              </div>
            }
          >
            <Button>Status</Button>
          </Tooltip>
        </div>
      </div>

      <div className="space-y-2">
        <div className="font-mono text-sm font-bold">Terminal</div>
        <div className="rounded border border-green-500 bg-black p-4">
          <div className="flex items-center gap-4">
            <Tooltip content="EXECUTE_COMMAND" variant="terminal">
              <Button variant="terminal">RUN</Button>
            </Tooltip>
            <Tooltip
              content="TERMINATE_PROCESS"
              variant="terminal"
              side="right"
            >
              <Button variant="terminal">KILL</Button>
            </Tooltip>
            <Tooltip
              content={
                <div className="space-y-1">
                  <div>PROCESS_INFO:</div>
                  <div className="text-xs">
                    PID: 1234
                    <br />
                    CPU: 12%
                    <br />
                    MEM: 156MB
                  </div>
                </div>
              }
              variant="terminal"
              side="bottom"
            >
              <Button variant="terminal">INFO</Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  ),
};
