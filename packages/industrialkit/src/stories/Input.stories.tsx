// src/stories/Input.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Input, NumericInput, SearchInput, Textarea } from "../components/primitive/input";

const meta: Meta<typeof Input> = {
  title: "IndustryDB/Input",
  component: Input,
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
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: () => (
    <div className="space-y-4">
      <Input placeholder="Default input" />
      <Input placeholder="Disabled input" disabled />
      <Input placeholder="Error input" error />
      <Input prefix="$" placeholder="With prefix" />
      <Input suffix="kg" placeholder="With suffix" />
      <Input prefix="ID:" suffix="v2" placeholder="With both" />
    </div>
  ),
};

export const TerminalStyle: Story = {
  render: () => (
    <div className="space-y-4 bg-gray-800 p-4">
      <Input variant="terminal" placeholder="user@system:~$" />
      <Textarea
        variant="terminal"
        placeholder="Enter command sequence..."
        rows={3}
      />
    </div>
  ),
};

export const IdInputs: Story = {
  render: () => (
    <div className="space-y-4">
      <Input
        variant="id"
        placeholder="PRD-001"
        prefix="PRD"
      />
      <Input
        variant="id"
        placeholder="USR-001"
        prefix="USR"
      />
      <Input
        variant="id"
        placeholder="LOT-001"
        prefix="LOT"
        suffix="[A-Z]"
      />
    </div>
  ),
};

export const SearchInputs: Story = {
  render: () => (
    <div className="space-y-4">
      <SearchInput placeholder="Search products..." />
      <SearchInput placeholder="Search disabled..." disabled />
      <SearchInput placeholder="Search with error..." error />
    </div>
  ),
};

export const NumericInputs: Story = {
  render: () => (
    <div className="space-y-4">
      <NumericInput placeholder="Enter quantity" />
      <NumericInput
        placeholder="With limits"
        min={0}
        max={100}
        suffix="units"
      />
      <NumericInput
        placeholder="Step by 0.5"
        step={0.5}
        prefix="+"
      />
      <NumericInput
        placeholder="Temperature"
        allowNegative
        suffix="°C"
      />
    </div>
  ),
};

export const TextareaVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Textarea placeholder="Default textarea" rows={3} />
      <Textarea placeholder="Disabled textarea" disabled rows={3} />
      <Textarea placeholder="Error textarea" error rows={3} />
    </div>
  ),
};

export const InContext: Story = {
  render: () => (
    <div className="space-y-6 rounded border border-gray-200 bg-gray-50 p-4">
      <div className="space-y-2">
        <label className="block font-mono text-sm font-bold">
          Product Information
        </label>
        <Input variant="id" prefix="PRD" placeholder="Enter ID" />
      </div>

      <div className="space-y-2">
        <label className="block font-mono text-sm font-bold">
          Inventory Management
        </label>
        <div className="flex gap-2">
          <NumericInput
            placeholder="Quantity"
            min={0}
            className="w-32"
          />
          <Input
            placeholder="Location"
            prefix="LOC"
            className="w-48"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="block font-mono text-sm font-bold">
          System Console
        </label>
        <div className="bg-gray-900 p-2">
          <Input
            variant="terminal"
            placeholder="Enter command..."
          />
        </div>
      </div>
    </div>
  ),
};
