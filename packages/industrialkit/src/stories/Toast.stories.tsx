// src/stories/Toast.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "../components/primitive/button";
import { CommandBar } from "../components/primitive/command-bar";
import { ToastProvider, useToast } from "../components/primitive/toast";

const meta: Meta = {
  title: "IndustryDB/Toast",
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
type Story = StoryObj;

const ToastDemo = ({ variant }: { variant?: 'default' | 'terminal' }) => {
  const { showToast } = useToast();

  const showInfoToast = () => {
    showToast({
      type: "info",
      title: "System Status",
      message: "All systems operational",
      duration: 5000,
    });
  };

  const showSuccessToast = () => {
    showToast({
      type: "success",
      title: "Process Complete",
      message: "Database backup completed successfully",
      duration: 5000,
    });
  };

  const showWarningToast = () => {
    showToast({
      type: "warning",
      title: "Resource Warning",
      message: "CPU usage above 80%",
      duration: 5000,
    });
  };

  const showErrorToast = () => {
    showToast({
      type: "error",
      title: "Connection Error",
      message: "Failed to connect to primary database",
      isPersistent: true,
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <Button
          variant={variant === 'terminal' ? 'terminal' : 'default'}
          onClick={showInfoToast}
        >
          Show Info
        </Button>
        <Button
          variant={variant === 'terminal' ? 'terminal' : 'default'}
          onClick={showSuccessToast}
        >
          Show Success
        </Button>
        <Button
          variant={variant === 'terminal' ? 'terminal' : 'default'}
          onClick={showWarningToast}
        >
          Show Warning
        </Button>
        <Button
          variant={variant === 'terminal' ? 'terminal' : 'default'}
          onClick={showErrorToast}
        >
          Show Error
        </Button>
      </div>
    </div>
  );
};

export const Default: Story = {
  render: () => (
    <ToastProvider>
      <ToastDemo />
    </ToastProvider>
  ),
};

export const Terminal: Story = {
  render: () => (
    <ToastProvider variant="terminal">
      <div className="space-y-4 rounded border border-green-500 bg-black p-4">
        <ToastDemo variant="terminal" />
      </div>
    </ToastProvider>
  ),
};

export const SystemMonitor: Story = {
  render: () => {
    const Monitor = () => {
      const { showToast } = useToast();
      const [monitoring, setMonitoring] = useState(false);

      // Simulate system events
      const startMonitoring = () => {
        setMonitoring(true);
        const events = [
          {
            type: "info" as const,
            title: "System Event",
            message: "Routine maintenance scheduled for 2025-01-15",
          },
          {
            type: "warning" as const,
            title: "Memory Usage",
            message: "Memory usage approaching threshold (85%)",
          },
          {
            type: "success" as const,
            title: "Backup Complete",
            message: "Incremental backup completed successfully",
          },
          {
            type: "error" as const,
            title: "Network Alert",
            message: "Lost connection to secondary server",
            isPersistent: true,
          },
        ];

        events.forEach((event, index) => {
          setTimeout(() => {
            showToast(event);
          }, index * 1500);
        });
      };

      return (
        <div className="space-y-4">
          <CommandBar
            variant="terminal"
            actions={[
              {
                key: "F1",
                label: monitoring ? "Monitoring" : "Start",
                onClick: startMonitoring,
                disabled: monitoring,
              },
              { key: "F2", label: "Clear" },
            ]}
            status={[
              {
                label: "Status",
                value: monitoring ? "ACTIVE" : "IDLE",
              },
            ]}
          />

          <div className="rounded border border-green-500 bg-black p-4 font-mono text-green-400">
            <pre className="whitespace-pre-wrap">
              {monitoring ? "System monitoring active..." : "Monitoring system ready."}
            </pre>
          </div>
        </div>
      );
    };

    return (
      <ToastProvider variant="terminal">
        <Monitor />
      </ToastProvider>
    );
  },
};

export const ProcessNotifications: Story = {
  render: () => {
    const ProcessDemo = () => {
      const { showToast } = useToast();
      const [processing, setProcessing] = useState(false);

      const startProcess = () => {
        if (processing) return;
        setProcessing(true);

        const steps = [
          {
            type: "info" as const,
            title: "Process Started",
            message: "Initializing data processing sequence",
          },
          {
            type: "info" as const,
            title: "Step 1/3",
            message: "Data validation in progress",
          },
          {
            type: "warning" as const,
            title: "Performance Notice",
            message: "Processing speed reduced due to high load",
          },
          {
            type: "info" as const,
            title: "Step 2/3",
            message: "Applying transformations",
          },
          {
            type: "info" as const,
            title: "Step 3/3",
            message: "Finalizing results",
          },
          {
            type: "success" as const,
            title: "Process Complete",
            message: "All steps completed successfully",
          },
        ];

        steps.forEach((step, index) => {
          setTimeout(() => {
            showToast(step);
            if (index === steps.length - 1) {
              setProcessing(false);
            }
          }, index * 2000);
        });
      };

      return (
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Button
              variant="primary"
              onClick={startProcess}
              disabled={processing}
            >
              {processing ? "Processing..." : "Start Process"}
            </Button>
          </div>
          <div className="rounded border border-gray-200 bg-gray-50 p-4">
            <pre className="whitespace-pre-wrap font-mono">
              {processing
                ? "Process running...\nMonitoring for events..."
                : "System ready.\nClick 'Start Process' to begin."}
            </pre>
          </div>
        </div>
      );
    };

    return (
      <ToastProvider>
        <ProcessDemo />
      </ToastProvider>
    );
  },
};
