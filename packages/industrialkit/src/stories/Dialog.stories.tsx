// src/stories/Dialog.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Badge } from "../components/primitive/badge";
import { Button } from "../components/primitive/button";
import { Dialog } from "../components/primitive/dialog";
import { Input } from "../components/primitive/input";

const meta: Meta<typeof Dialog> = {
  title: "IndustryDB/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Dialog</Button>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          title="System Message"
        >
          <p>Do you want to proceed with the current operation?</p>
        </Dialog>
      </div>
    );
  },
};

export const Terminal: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <Button variant="terminal" onClick={() => setOpen(true)}>
          Open Terminal Dialog
        </Button>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          title="SYSTEM_PROMPT"
          variant="terminal"
          actions={<Button variant="terminal">PROCEED</Button>}
        >
          <div className="space-y-2">
            <p>Executing command sequence:</p>
            <pre className="bg-gray-900 p-2 whitespace-pre-wrap">
              $ initialize_system $ run_diagnostics $ verify_state
            </pre>
            <p>Continue with operation?</p>
          </div>
        </Dialog>
      </div>
    );
  },
};

export const Alert: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <Button variant="danger" onClick={() => setOpen(true)}>
          Show Alert
        </Button>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          title="Critical Alert"
          alert
          actions={<Button variant="danger">Force Shutdown</Button>}
        >
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-red-600">
              <span className="text-2xl">⚠</span>
              <span className="font-bold">Critical System Error</span>
            </div>
            <p>
              System temperature exceeding safe limits. Immediate shutdown
              recommended.
            </p>
            <div className="rounded border border-red-200 bg-red-50 p-2">
              Temperature: 92°C (Critical)
            </div>
          </div>
        </Dialog>
      </div>
    );
  },
};

export const Form: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <Button onClick={() => setOpen(true)}>New Entry</Button>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          title="Add Product"
          actions={<Button variant="primary">Save Product</Button>}
        >
          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-bold">Product ID</label>
              <Input variant="id" prefix="PRD" placeholder="001" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-bold">
                Product Name
              </label>
              <Input placeholder="Enter product name" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-bold">Category</label>
              <div className="flex gap-2">
                <Badge variant="outline" color="green">
                  RAW
                </Badge>
                <Badge variant="outline" color="yellow">
                  PRC
                </Badge>
                <Badge variant="outline" color="blue">
                  FIN
                </Badge>
              </div>
            </div>
          </div>
        </Dialog>
      </div>
    );
  },
};

export const CommandResponse: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div className="space-y-4">
        <Button variant="terminal" onClick={() => setOpen(true)}>
          Execute Command
        </Button>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          title="COMMAND_RESPONSE"
          variant="terminal"
          actions={
            <>
              <Button variant="terminal">Retry</Button>
              <Button variant="terminal">Copy Log</Button>
            </>
          }
        >
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge variant="solid" color="green">
                SUCCESS
              </Badge>
              <span>Command executed successfully</span>
            </div>
            <pre className="max-h-48 overflow-auto bg-gray-900 p-2">
              {`> Initializing process...
> Checking dependencies...
  - Core system: OK
  - Database: OK
  - Network: OK
> Starting operation...
  - Step 1: Complete
  - Step 2: Complete
  - Step 3: Complete
> Operation completed
  Time elapsed: 2.34s
  Status: SUCCESS
  `}
            </pre>
          </div>
        </Dialog>
      </div>
    );
  },
};
