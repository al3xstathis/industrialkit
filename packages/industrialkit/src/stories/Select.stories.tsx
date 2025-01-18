// src/stories/Select.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Option, OptionGroup, Select } from "../components/primitive/select";

const meta: Meta<typeof Select> = {
  title: "IndustryDB/Select",
  component: Select,
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
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: () => (
    <div className="space-y-4">
      <Select defaultValue="">
        <Option value="" disabled>Select a category</Option>
        <Option value="RAW">Raw Materials</Option>
        <Option value="WIP">Work in Progress</Option>
        <Option value="FIN">Finished Goods</Option>
      </Select>

      <Select defaultValue="" disabled>
        <Option value="" disabled>Disabled select</Option>
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
      </Select>

      <Select defaultValue="" error>
        <Option value="" disabled>Error state</Option>
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
      </Select>
    </div>
  ),
};

export const WithPrefix: Story = {
  render: () => (
    <div className="space-y-4">
      <Select prefix="CAT:" defaultValue="">
        <Option value="" disabled>Select category</Option>
        <Option value="RAW">Raw Materials</Option>
        <Option value="WIP">Work in Progress</Option>
        <Option value="FIN">Finished Goods</Option>
      </Select>

      <Select prefix="LOC:" defaultValue="">
        <Option value="" disabled>Select location</Option>
        <Option value="WH-A">Warehouse A</Option>
        <Option value="WH-B">Warehouse B</Option>
        <Option value="WH-C">Warehouse C</Option>
      </Select>
    </div>
  ),
};

export const WithGroups: Story = {
  render: () => (
    <Select defaultValue="">
      <Option value="" disabled>Select product</Option>
      <OptionGroup label="Raw Materials">
        <Option value="RM1">Industrial Polymer</Option>
        <Option value="RM2">Carbon Fiber</Option>
        <Option value="RM3">Aluminum Alloy</Option>
      </OptionGroup>
      <OptionGroup label="Processed">
        <Option value="PR1">Molded Parts</Option>
        <Option value="PR2">Coated Panels</Option>
        <Option value="PR3">Assembled Units</Option>
      </OptionGroup>
    </Select>
  ),
};

export const Terminal: Story = {
  render: () => (
    <div className="space-y-4 bg-gray-900 p-4">
      <Select variant="terminal" defaultValue="">
        <Option value="" disabled>SELECT OPERATION</Option>
        <Option value="SCAN">SCAN SYSTEM</Option>
        <Option value="DIAG">RUN DIAGNOSTICS</Option>
        <Option value="MAINT">MAINTENANCE MODE</Option>
      </Select>

      <Select variant="terminal" prefix="$" defaultValue="">
        <Option value="" disabled>SELECT COMMAND</Option>
        <Option value="ls">ls -la</Option>
        <Option value="ps">ps aux</Option>
        <Option value="top">top</Option>
      </Select>
    </div>
  ),
};

export const InContext: Story = {
  render: () => (
    <div className="space-y-6 rounded border border-gray-200 bg-gray-50 p-4">
      <div className="space-y-2">
        <div className="font-mono text-sm font-bold">Product Classification</div>
        <div className="grid grid-cols-2 gap-2">
          <Select prefix="TYPE:" defaultValue="">
            <Option value="" disabled>Select type</Option>
            <Option value="A">Type A</Option>
            <Option value="B">Type B</Option>
            <Option value="C">Type C</Option>
          </Select>
          <Select prefix="CAT:" defaultValue="">
            <Option value="" disabled>Select category</Option>
            <Option value="1">Category 1</Option>
            <Option value="2">Category 2</Option>
            <Option value="3">Category 3</Option>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <div className="font-mono text-sm font-bold">System Console</div>
        <div className="bg-gray-900 p-2">
          <Select variant="terminal" defaultValue="">
            <Option value="" disabled>SELECT MODE</Option>
            <Option value="DEBUG">DEBUG MODE</Option>
            <Option value="PROD">PRODUCTION</Option>
            <Option value="TEST">TEST ENV</Option>
          </Select>
        </div>
      </div>
    </div>
  ),
};
