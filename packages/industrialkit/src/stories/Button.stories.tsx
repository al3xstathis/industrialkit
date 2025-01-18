// src/stories/Button.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/primitive/button";

const meta: Meta<typeof Button> = {
  title: "IndustryDB/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-xl space-y-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button>Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="terminal">Terminal</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <Button disabled>Disabled</Button>
        <Button variant="primary" disabled>
          Disabled Primary
        </Button>
        <Button variant="danger" disabled>
          Disabled Danger
        </Button>
      </div>

      <div className="flex flex-wrap gap-2">
        <Button loading>Loading</Button>
        <Button variant="primary" loading>
          Loading Primary
        </Button>
        <Button variant="terminal" loading>
          Loading Terminal
        </Button>
      </div>

      <div className="flex flex-wrap gap-2">
        <Button active>Active</Button>
        <Button variant="primary" active>
          Active Primary
        </Button>
        <Button variant="danger" active>
          Active Danger
        </Button>
      </div>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button>
        <span className="mr-1">←</span>
        Back
      </Button>
      <Button variant="primary">
        Save
        <span className="ml-1">↓</span>
      </Button>
      <Button variant="danger">
        <span className="mr-1">×</span>
        Delete
      </Button>
      <Button variant="terminal">
        <span className="mr-1">$</span>
        Execute
      </Button>
    </div>
  ),
};

export const InContext: Story = {
  render: () => (
    <div className="space-y-6 rounded border border-gray-200 bg-gray-50 p-4">
      <div className="space-y-2">
        <div className="font-mono text-sm font-bold">Record Actions</div>
        <div className="flex flex-wrap gap-2">
          <Button variant="primary">CREATE NEW</Button>
          <Button>DUPLICATE</Button>
          <Button variant="danger">DELETE</Button>
        </div>
      </div>

      <div className="space-y-2">
        <div className="font-mono text-sm font-bold">Batch Operations</div>
        <div className="flex flex-wrap gap-2">
          <Button size="sm">SELECT ALL</Button>
          <Button size="sm">CLEAR</Button>
          <Button size="sm" variant="primary">
            PROCESS
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <div className="font-mono text-sm font-bold">System Console</div>
        <div className="bg-gray-900 p-2">
          <div className="flex gap-2">
            <Button variant="terminal">INITIALIZE</Button>
            <Button variant="terminal" loading>
              RUNNING
            </Button>
          </div>
        </div>
      </div>
    </div>
  ),
};
