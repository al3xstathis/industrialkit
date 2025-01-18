// src/stories/Badge.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../components/primitive/badge";

const meta: Meta<typeof Badge> = {
  title: "IndustryDB/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge>DEFAULT</Badge>
      <Badge color="yellow">PENDING</Badge>
      <Badge color="green">ACTIVE</Badge>
      <Badge color="red">ERROR</Badge>
      <Badge color="blue">INFO</Badge>
    </div>
  ),
};

export const Outline: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="outline">DEFAULT</Badge>
      <Badge variant="outline" color="yellow">
        PENDING
      </Badge>
      <Badge variant="outline" color="green">
        ACTIVE
      </Badge>
      <Badge variant="outline" color="red">
        ERROR
      </Badge>
      <Badge variant="outline" color="blue">
        INFO
      </Badge>
    </div>
  ),
};

export const Solid: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="solid">DEFAULT</Badge>
      <Badge variant="solid" color="yellow">
        PENDING
      </Badge>
      <Badge variant="solid" color="green">
        ACTIVE
      </Badge>
      <Badge variant="solid" color="red">
        ERROR
      </Badge>
      <Badge variant="solid" color="blue">
        INFO
      </Badge>
    </div>
  ),
};

export const InContext: Story = {
  render: () => (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <span className="font-mono">System Status:</span>
        <Badge variant="solid" color="green">
          ONLINE
        </Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-mono">Batch Process:</span>
        <Badge color="yellow">PROCESSING</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-mono">Error Rate:</span>
        <Badge variant="outline" color="red">
          CRITICAL
        </Badge>
      </div>
    </div>
  ),
};

export const CustomContent: Story = {
  render: () => (
    <div className="space-y-2">
      <Badge className="gap-1">
        <span>●</span>
        <span>LIVE</span>
      </Badge>
      <Badge color="yellow" className="gap-1">
        <span>⚠</span>
        <span>WARNING</span>
      </Badge>
      <Badge color="red" className="gap-1">
        <span>✕</span>
        <span>FAILED</span>
      </Badge>
    </div>
  ),
};
