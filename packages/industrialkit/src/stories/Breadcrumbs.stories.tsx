// src/stories/Breadcrumbs.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumbs } from "../components/primitive/breadcrumbs";

const meta: Meta<typeof Breadcrumbs> = {
  title: "IndustryDB/Breadcrumbs",
  component: Breadcrumbs,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

const sampleItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Industrial Polymer" },
];

export const Default: Story = {
  render: () => <Breadcrumbs items={sampleItems} />,
};

export const Terminal: Story = {
  render: () => <Breadcrumbs items={sampleItems} variant="terminal" />,
};

export const CustomSeparator: Story = {
  render: () => (
    <Breadcrumbs
      items={sampleItems}
      separator={<span className="px-1">→</span>}
    />
  ),
};

export const InContext: Story = {
  render: () => {
    const items = [
      { label: "Inventory", href: "/" },
      { label: "Raw Materials", href: "/raw" },
      { label: "Industrial Polymer" },
    ];

    return (
      <div className="space-y-6 rounded border border-gray-200 bg-gray-50 p-4">
        <div className="space-y-4">
          <Breadcrumbs items={items} />

          <div className="rounded border border-gray-200 bg-white p-4">
            <h2 className="font-mono text-lg font-bold">
              Industrial Polymer Details
            </h2>
          </div>
        </div>

        <div className="space-y-4">
          <Breadcrumbs
            items={[
              { label: "System", href: "/" },
              { label: "Monitoring", href: "/monitoring" },
              { label: "Active Processes" },
            ]}
            variant="terminal"
          />

          <div className="rounded border border-green-500 bg-black p-4">
            <div className="font-mono text-green-400">
              Process Monitor {">"} Active
            </div>
          </div>
        </div>
      </div>
    );
  },
};
