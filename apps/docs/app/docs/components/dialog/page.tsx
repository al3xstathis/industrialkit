"use client";
import { ExampleCard } from "@/components/example-card";
import { Button, Dialog } from "industrialkit";
import { useState } from "react";

export default function DialogPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Dialog</h1>
        <p className="text-lg text-gray-600">
          Modal dialogs for displaying important information or requesting user
          confirmation.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Examples</h2>

        <ExampleCard
          title="Basic Dialog"
          description="A simple dialog with title and content"
          code={`import { Dialog, Button } from "industrialkit";
import { useState } from "react";

export function BasicExample() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        title="Confirmation"
      >
        <p>Are you sure you want to continue?</p>

        <div className="mt-4 flex justify-end gap-2">
          <Button variant="danger" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => setOpen(false)}>
            Continue
          </Button>
        </div>
      </Dialog>
    </>
  );
}`}
        >
          <DialogExample />
        </ExampleCard>

        <ExampleCard
          title="Alert Dialog"
          description="Dialog with alert styling for warnings or errors"
          code={`import { Dialog, Button } from "industrialkit";

export function AlertExample() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="danger" onClick={() => setOpen(true)}>
        Show Alert
      </Button>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        title="Warning"
        alert
      >
        <p className="text-red-600">
          This action cannot be undone. Please confirm.
        </p>

        <div className="mt-4 flex justify-end gap-2">
          <Button onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => setOpen(false)}>
            Delete
          </Button>
        </div>
      </Dialog>
    </>
  );
}`}
        >
          <AlertDialogExample />
        </ExampleCard>

        <ExampleCard
          title="Terminal Style"
          description="Dialog with terminal-inspired styling"
          code={`import { Dialog, Button } from "industrialkit";

export function TerminalExample() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="terminal" onClick={() => setOpen(true)}>
        EXECUTE
      </Button>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        title="SYSTEM COMMAND"
        variant="terminal"
      >
        <p className="text-green-400">
          Execute system command? This will affect all connected devices.
        </p>

        <div className="mt-4 flex justify-end gap-2">
          <Button variant="terminal" onClick={() => setOpen(false)}>
            ABORT
          </Button>
          <Button variant="terminal" onClick={() => setOpen(false)}>
            EXECUTE
          </Button>
        </div>
      </Dialog>
    </>
  );
}`}
        >
          <TerminalDialogExample />
        </ExampleCard>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">API Reference</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b">
                <th className="px-4 py-2 font-bold">Prop</th>
                <th className="px-4 py-2 font-bold">Type</th>
                <th className="px-4 py-2 font-bold">Default</th>
                <th className="px-4 py-2 font-bold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2 font-mono">open</td>
                <td className="px-4 py-2 font-mono">boolean</td>
                <td className="px-4 py-2 font-mono">false</td>
                <td className="px-4 py-2">
                  Controls the visibility of the dialog
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-mono">onClose</td>
                <td className="px-4 py-2 font-mono">() ={">"} void</td>
                <td className="px-4 py-2 font-mono">-</td>
                <td className="px-4 py-2">Callback when dialog is closed</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-mono">title</td>
                <td className="px-4 py-2 font-mono">string</td>
                <td className="px-4 py-2 font-mono">-</td>
                <td className="px-4 py-2">Dialog title</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-mono">variant</td>
                <td className="px-4 py-2 font-mono">"default" | "terminal"</td>
                <td className="px-4 py-2 font-mono">"default"</td>
                <td className="px-4 py-2">Visual style of the dialog</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-mono">alert</td>
                <td className="px-4 py-2 font-mono">boolean</td>
                <td className="px-4 py-2 font-mono">false</td>
                <td className="px-4 py-2">Use alert styling</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-mono">cancelText</td>
                <td className="px-4 py-2 font-mono">string</td>
                <td className="px-4 py-2 font-mono">"Cancel"</td>
                <td className="px-4 py-2">Text for the cancel button</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Example Components
function DialogExample() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>

      <Dialog open={open} onClose={() => setOpen(false)} title="Confirmation">
        <p>Are you sure you want to continue?</p>

        <div className="mt-4 flex justify-end gap-2">
          <Button variant="danger" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => setOpen(false)}>
            Continue
          </Button>
        </div>
      </Dialog>
    </>
  );
}

function AlertDialogExample() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="danger" onClick={() => setOpen(true)}>
        Show Alert
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)} title="Warning" alert>
        <p className="text-red-600">
          This action cannot be undone. Please confirm.
        </p>

        <div className="mt-4 flex justify-end gap-2">
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="danger" onClick={() => setOpen(false)}>
            Delete
          </Button>
        </div>
      </Dialog>
    </>
  );
}

function TerminalDialogExample() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="terminal" onClick={() => setOpen(true)}>
        EXECUTE
      </Button>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        title="SYSTEM COMMAND"
        variant="terminal"
      >
        <p className="text-green-400">
          Execute system command? This will affect all connected devices.
        </p>

        <div className="mt-4 flex justify-end gap-2">
          <Button variant="terminal" onClick={() => setOpen(false)}>
            ABORT
          </Button>
          <Button variant="terminal" onClick={() => setOpen(false)}>
            EXECUTE
          </Button>
        </div>
      </Dialog>
    </>
  );
}
