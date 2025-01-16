// src/stories/Panel.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Panel, PanelRow } from "../components/primitive/panel";

const meta: Meta<typeof Panel> = {
  title: "IndustryDB/Panel",
  component: Panel,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-xl">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Panel>;

export const Default: Story = {
  render: () => (
    <Panel title="PRODUCT DETAILS">
      <PanelRow label="ID" value="PRD001" />
      <PanelRow label="Name" value="Industrial Polymer" />
      <PanelRow label="Category" value="RAW" />
      <PanelRow label="Stock" value="1,500 units" />
      <PanelRow label="Location" value="WAREHOUSE-A" />
      <PanelRow label="Last Updated" value="2025-01-14 15:30:22" />
    </Panel>
  ),
};

export const WithInnerBorders: Story = {
  render: () => (
    <Panel title="PRODUCT DETAILS" variant="bordered" innerBorders>
      <PanelRow label="ID" value="PRD001" />
      <PanelRow label="Name" value="Industrial Polymer" />
      <PanelRow label="Category" value="RAW" />
      <PanelRow label="Stock" value="1,500 units" />
      <PanelRow label="Location" value="WAREHOUSE-A" />
      <PanelRow label="Last Updated" value="2025-01-14 15:30:22" />
    </Panel>
  ),
};

export const Bordered: Story = {
  render: () => (
    <Panel title="PRODUCT DETAILS" variant="bordered">
      <PanelRow label="ID" value="PRD001" />
      <PanelRow label="Name" value="Industrial Polymer" />
      <PanelRow label="Category" value="RAW" />
      <PanelRow label="Stock" value="1,500 units" />
      <PanelRow label="Location" value="WAREHOUSE-A" />
      <PanelRow label="Last Updated" value="2025-01-14 15:30:22" />
    </Panel>
  ),
};

export const Filled: Story = {
  render: () => (
    <Panel title="PRODUCT DETAILS" variant="filled">
      <PanelRow label="ID" value="PRD001" />
      <PanelRow label="Name" value="Industrial Polymer" />
      <PanelRow label="Category" value="RAW" />
      <PanelRow label="Stock" value="1,500 units" />
      <PanelRow label="Location" value="WAREHOUSE-A" />
      <PanelRow label="Last Updated" value="2025-01-14 15:30:22" />
    </Panel>
  ),
};

export const WithCustomContent: Story = {
  render: () => (
    <Panel title="STOCK HISTORY">
      <PanelRow
        label="Trend"
        value={
          <div className="flex items-center space-x-1">
            <span className="text-green-600">↑</span>
            <span>12.5%</span>
          </div>
        }
      />
      <PanelRow
        label="Chart"
        value={
          <div className="h-20 bg-gray-100 flex items-center justify-center">
            [Chart Placeholder]
          </div>
        }
      />
      <PanelRow
        label="Notes"
        value={
          <div className="text-xs text-gray-600">
            Stock levels increased due to bulk order arrival on Jan 12, 2025
          </div>
        }
      />
    </Panel>
  ),
};

export const WithoutTitle: Story = {
  render: () => (
    <Panel variant="bordered">
      <PanelRow label="ID" value="PRD001" />
      <PanelRow label="Name" value="Industrial Polymer" />
      <PanelRow label="Category" value="RAW" />
    </Panel>
  ),
};
