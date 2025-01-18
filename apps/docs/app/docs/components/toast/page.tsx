'use client'
import { ExampleCard } from "@/components/example-card";
import { ToastExample } from "@/components/toast-example";
import { Button, Toast, ToastProvider, useToast } from "industrialkit";

export default function ToastPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Toast</h1>
        <p className="text-lg text-gray-600">
          Toast notifications for showing temporary feedback and messages to users.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Examples</h2>

        <ExampleCard
          title="Toast Types"
          description="Different types of toast notifications"
          code={`import { Button, useToast } from "industrialkit";

export function ToastExample() {
  const { showToast } = useToast();

  return (
    <div className="flex flex-wrap gap-2">
      <Button onClick={() => showToast({
        type: "info",
        title: "Information",
        message: "This is an informational message"
      })}>
        Show Info
      </Button>
      
      <Button
        variant="primary"
        onClick={() => showToast({
          type: "success",
          title: "Success!",
          message: "Operation completed successfully"
        })}
      >
        Show Success
      </Button>
      
      <Button onClick={() => showToast({
        type: "warning",
        title: "Warning",
        message: "Please review your settings"
      })}>
        Show Warning
      </Button>
      
      <Button
        variant="danger"
        onClick={() => showToast({
          type: "error",
          title: "Error",
          message: "An error occurred during the operation"
        })}
      >
        Show Error
      </Button>
    </div>
  );
}`}
        >
          <ToastExample />
        </ExampleCard>

        <ExampleCard
          title="Terminal Style"
          description="Toast notifications with terminal styling"
          code={`import { ToastProvider, Button, useToast } from "industrialkit";

export function TerminalExample() {
  const { showToast } = useToast();

  return (
    <ToastProvider variant="terminal">
      <Button
        variant="terminal"
        onClick={() => showToast({
          type: "info",
          title: "SYSTEM MESSAGE",
          message: "Operation initiated..."
        })}
      >
        SHOW MESSAGE
      </Button>
    </ToastProvider>
  );
}`}
        >
          <ToastProvider variant="terminal">
            <Button
              variant="terminal"
              onClick={() => {
                const { showToast } = useToast();
                showToast({
                  type: "info",
                  title: "SYSTEM MESSAGE",
                  message: "Operation initiated..."
                });
              }}
            >
              SHOW MESSAGE
            </Button>
          </ToastProvider>
        </ExampleCard>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">API Reference</h2>
        
        <div>
          <h3 className="text-xl font-bold mb-4">Toast Options</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-2 font-bold">Property</th>
                  <th className="px-4 py-2 font-bold">Type</th>
                  <th className="px-4 py-2 font-bold">Default</th>
                  <th className="px-4 py-2 font-bold">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">type</td>
                  <td className="px-4 py-2 font-mono">"info" | "success" | "warning" | "error"</td>
                  <td className="px-4 py-2 font-mono">"info"</td>
                  <td className="px-4 py-2">Type of toast notification</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">title</td>
                  <td className="px-4 py-2 font-mono">string</td>
                  <td className="px-4 py-2 font-mono">-</td>
                  <td className="px-4 py-2">Toast title</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">message</td>
                  <td className="px-4 py-2 font-mono">string</td>
                  <td className="px-4 py-2 font-mono">-</td>
                  <td className="px-4 py-2">Toast message</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">duration</td>
                  <td className="px-4 py-2 font-mono">number</td>
                  <td className="px-4 py-2 font-mono">5000</td>
                  <td className="px-4 py-2">Duration in milliseconds</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">isPersistent</td>
                  <td className="px-4 py-2 font-mono">boolean</td>
                  <td className="px-4 py-2 font-mono">false</td>
                  <td className="px-4 py-2">Whether toast persists until dismissed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-bold mb-4">ToastProvider Props</h3>
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
                  <td className="px-4 py-2 font-mono">variant</td>
                  <td className="px-4 py-2 font-mono">"default" | "terminal"</td>
                  <td className="px-4 py-2 font-mono">"default"</td>
                  <td className="px-4 py-2">Visual style of toasts</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}