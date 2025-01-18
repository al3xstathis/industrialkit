// src/stories/SplitView.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/primitive/button";
import { CommandBar } from "../components/primitive/command-bar";
import { DataGrid } from "../components/primitive/datagrid";
import { SplitView, SplitViewPanel } from "../components/primitive/split-view";
import { Terminal } from "../components/primitive/terminal";

const meta: Meta<typeof SplitView> = {
  title: "IndustryDB/SplitView",
  component: SplitView,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="h-[600px] w-full max-w-5xl">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SplitView>;

// Sample data for examples
const columns = [
  { key: "id", header: "ID", width: "120px", sortable: true },
  { key: "name", header: "Name", width: "200px", sortable: true },
  { key: "status", header: "Status", width: "120px", sortable: true },
];

const data = [
  { id: "PRD001", name: "Product A", status: "Active" },
  { id: "PRD002", name: "Product B", status: "Inactive" },
  { id: "PRD003", name: "Product C", status: "Active" },
];

const terminalLines = [
  "Initializing system...",
  "> Loading modules",
  "> Checking connections",
  "System ready.",
  "Monitoring active...",
];

export const Default: Story = {
  render: () => (
    <SplitView
      first={
        <SplitViewPanel title="Left Panel">
          <div className="h-full w-full rounded border border-gray-200 bg-gray-50 p-4">
            Content A
          </div>
        </SplitViewPanel>
      }
      second={
        <SplitViewPanel title="Right Panel">
          <div className="h-full w-full rounded border border-gray-200 bg-gray-50 p-4">
            Content B
          </div>
        </SplitViewPanel>
      }
    />
  ),
};

export const VerticalSplit: Story = {
  render: () => (
    <SplitView
      direction="vertical"
      first={
        <SplitViewPanel title="Top Panel">
          <div className="h-full w-full rounded border border-gray-200 bg-gray-50 p-4">
            Content A
          </div>
        </SplitViewPanel>
      }
      second={
        <SplitViewPanel title="Bottom Panel">
          <div className="h-full w-full rounded border border-gray-200 bg-gray-50 p-4">
            Content B
          </div>
        </SplitViewPanel>
      }
    />
  ),
};

export const TerminalSplit: Story = {
  render: () => (
    <div className="flex h-full flex-col">
      <CommandBar
        variant="terminal"
        actions={[
          { key: "F1", label: "Clear" },
          { key: "F2", label: "Reset" },
        ]}
        status={[{ label: "Status", value: "Online" }]}
      />
      <div className="flex-1">
        <SplitView
          variant="terminal"
          defaultSplit={40}
          first={
            <SplitViewPanel variant="terminal" title="SYSTEM_LOG">
              <Terminal title="TERMINAL" lines={terminalLines} />
            </SplitViewPanel>
          }
          second={
            <SplitViewPanel variant="terminal" title="DATA_VIEW">
              <DataGrid variant="terminal" columns={columns} data={data} />
            </SplitViewPanel>
          }
        />
      </div>
    </div>
  ),
};

export const NestedSplit: Story = {
  render: () => (
    <SplitView
      direction="vertical"
      defaultSplit={70}
      first={
        <SplitView
          defaultSplit={30}
          first={
            <SplitViewPanel title="Navigation">
              <div className="space-y-2">
                <Button className="w-full">Section A</Button>
                <Button className="w-full">Section B</Button>
                <Button className="w-full">Section C</Button>
              </div>
            </SplitViewPanel>
          }
          second={
            <SplitViewPanel title="Main Content">
              <DataGrid columns={columns} data={data} />
            </SplitViewPanel>
          }
        />
      }
      second={
        <SplitViewPanel title="Console">
          <Terminal title="SYSTEM_LOG" lines={terminalLines} />
        </SplitViewPanel>
      }
    />
  ),
};

export const CustomSeparator: Story = {
  render: () => (
    <SplitView
      separator={
        <div className="flex h-full w-4 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold">
          ⋮
        </div>
      }
      first={
        <SplitViewPanel title="Panel A">
          <div className="h-full w-full rounded border border-gray-200 bg-gray-50 p-4">
            Content A
          </div>
        </SplitViewPanel>
      }
      second={
        <SplitViewPanel title="Panel B">
          <div className="h-full w-full rounded border border-gray-200 bg-gray-50 p-4">
            Content B
          </div>
        </SplitViewPanel>
      }
    />
  ),
};
