// src/stories/CommandBar.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Badge } from "../components/primitive/badge";
import { CommandBar } from "../components/primitive/command-bar";

const meta: Meta<typeof CommandBar> = {
  title: "IndustryDB/CommandBar",
  component: CommandBar,
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
type Story = StoryObj<typeof CommandBar>;

export const Default: Story = {
  render: () => (
    <CommandBar
      actions={[
        { key: "F1", label: "Help" },
        { key: "F2", label: "Menu" },
        { key: "F3", label: "Search" },
        { key: "F4", label: "Filter", disabled: true },
      ]}
      status={[
        { label: "System", value: "ONLINE" },
        { label: "Users", value: "42" },
      ]}
    />
  ),
};

export const Terminal: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="bg-gray-900 p-4">
        <CommandBar
          variant="terminal"
          actions={[
            { key: "F1", label: "HELP" },
            { key: "F2", label: "EXEC" },
            { key: "F3", label: "QUIT" },
          ]}
          status={[
            { label: "STATUS", value: "READY" },
            { label: "MEM", value: "84%" },
          ]}
        />
      </div>
    </div>
  ),
};

export const WithAlerts: Story = {
  render: () => {
    const [alertCount, setAlertCount] = useState(3);

    return (
      <CommandBar
        actions={[
          { key: "F1", label: "View Alerts" },
          {
            key: "F2",
            label: "Clear All",
            onClick: () => setAlertCount(0),
          },
        ]}
        status={[
          {
            label: "Alerts",
            value: alertCount,
            alert: alertCount > 0,
          },
          {
            label: "CPU",
            value: "92%",
            alert: true,
          },
          {
            label: "Status",
            value: (
              <Badge color="green" variant="solid">
                ONLINE
              </Badge>
            ),
          },
        ]}
      />
    );
  },
};

export const TopPosition: Story = {
  render: () => (
    <CommandBar
      position="top"
      actions={[
        { key: "F1", label: "New" },
        { key: "F2", label: "Edit" },
        { key: "F3", label: "Delete" },
        { key: "F4", label: "Save" },
      ]}
      status={[
        { label: "Mode", value: "EDIT" },
        { label: "Changes", value: "2" },
      ]}
    />
  ),
};

export const InContext: Story = {
  render: () => {
    const [view, setView] = useState<"grid" | "terminal">("grid");

    return (
      <div className="space-y-6 rounded border border-gray-200 bg-gray-50">
        {/* Top Command Bar */}
        <CommandBar
          position="top"
          actions={[
            {
              key: "F1",
              label: "Grid View",
              onClick: () => setView("grid"),
            },
            {
              key: "F2",
              label: "Terminal",
              onClick: () => setView("terminal"),
            },
          ]}
          status={[
            { label: "View", value: view.toUpperCase() },
            { label: "Time", value: "15:30:22" },
          ]}
        />

        {/* Content Area */}
        <div className="h-48 px-4">
          {view === "grid" ? (
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded border border-gray-200 p-4">Item 1</div>
              <div className="rounded border border-gray-200 p-4">Item 2</div>
              <div className="rounded border border-gray-200 p-4">Item 3</div>
            </div>
          ) : (
            <div className="rounded border border-green-500 bg-black p-4 font-mono text-green-400">
              {">"} Terminal view active
            </div>
          )}
        </div>

        {/* Bottom Command Bar */}
        <CommandBar
          variant={view === "terminal" ? "terminal" : "default"}
          actions={[
            { key: "F3", label: "Refresh" },
            { key: "F4", label: "Settings" },
            { key: "F5", label: "Help" },
          ]}
          status={[
            { label: "Items", value: "3" },
            {
              label: "System",
              value: (
                <Badge color="green" variant="solid">
                  READY
                </Badge>
              ),
            },
          ]}
        />
      </div>
    );
  },
};
