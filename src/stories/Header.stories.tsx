// src/stories/Header.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "../components/primitive/header";

const meta: Meta<typeof Header> = {
  title: "IndustryDB/Header",
  component: Header,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-3xl">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    title: "PLASTICBASE",
    subtitle: "Product Overview",
  },
};

export const WithAction: Story = {
  args: {
    title: "PLASTICBASE",
    subtitle: "Product Overview",
    action: (
      <button className="px-2 py-1 bg-yellow-500 hover:bg-yellow-600 font-mono text-sm">
        ACTION
      </button>
    ),
  },
};
