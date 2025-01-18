// src/stories/Terminal.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useState } from "react";
import { Terminal } from "../components/primitive/terminal";

const meta: Meta<typeof Terminal> = {
  title: "IndustryDB/Terminal",
  component: Terminal,
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
type Story = StoryObj<typeof Terminal>;

export const Default: Story = {
  render: () => {
    const lines = [
      "Initializing system...",
      "Loading configuration files...",
      "Checking database connections...",
      "> Database connection established",
      "Starting background processes...",
      "> Process manager initialized",
      "System ready."
    ];

    return <Terminal lines={lines} />;
  }
};

export const WithHighlights: Story = {
  render: () => {
    const lines = [
      "Running system diagnostics...",
      "Checking memory usage...",
      "> WARNING: High memory usage detected",
      "Checking disk space...",
      "> ERROR: Low disk space on /dev/sda1",
      "Checking network connectivity...",
      "> Network status: OK"
    ];

    return <Terminal
      lines={lines}
      highlightLines={[2, 4]}
      title="SYSTEM_DIAGNOSTICS"
    />;
  }
};

export const LiveUpdates: Story = {
  render: () => {
    const [lines, setLines] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const statusMessages = [
        "Initializing production line...",
        "> Checking safety systems",
        "> Safety systems operational",
        "Starting conveyor belt...",
        "> Speed: 1.5 m/s",
        "Monitoring temperature...",
        "> Temperature: 23.5°C",
        "Checking pressure levels...",
        "> Pressure: 2.4 bar"
      ];

      let currentLine = 0;
      const interval = setInterval(() => {
        if (currentLine < statusMessages.length) {
          setLines(prev => [...prev, statusMessages[currentLine]]);
          currentLine++;
        } else {
          setLoading(false);
          clearInterval(interval);
        }
      }, 1000);

      return () => clearInterval(interval);
    }, []);

    return (
      <Terminal
        lines={lines}
        loading={loading}
        title="PRODUCTION_MONITOR"
        maxHeight="16rem"
      />
    );
  }
};

export const SystemLogs: Story = {
  render: () => {
    return (
      <div className="space-y-4">
        <Terminal
          title="SYSTEM_LOGS"
          maxHeight="12rem"
          lines={[
            "2025-01-14 15:30:22 [INFO] System startup",
            "2025-01-14 15:30:23 [INFO] Loading modules",
            "> Module 'core' loaded",
            "> Module 'data' loaded",
            "> Module 'network' loaded",
            "2025-01-14 15:30:24 [WARN] High CPU usage detected",
            "2025-01-14 15:30:25 [INFO] Running diagnostics",
            "> Memory usage: 75%",
            "> Disk usage: 82%",
            "> Network status: OK"
          ]}
          highlightLines={[5]}
        />
      </div>
    );
  }
};

export const CommandSequence: Story = {
  render: () => {
    const [lines, setLines] = useState<string[]>([
      "$ initialize_system",
      "> System initialized successfully",
      "$ check_status",
      "> All systems operational",
      "$ run_diagnostic"
    ]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setLines(prev => [
          ...prev,
          "> Running full system diagnostic...",
          "> CPU: OK",
          "> Memory: OK",
          "> Storage: OK",
          "> Network: OK",
          "> Diagnostic complete"
        ]);
        setLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
    }, []);

    return (
      <Terminal
        title="COMMAND_CONSOLE"
        lines={lines}
        loading={loading}
        highlightLines={[1, 3, 4]}
      />
    );
  }
};

export const InContext: Story = {
  render: () => (
    <div className="space-y-6 rounded border border-gray-200 bg-gray-50 p-4">
      <div className="space-y-2">
        <div className="font-mono text-sm font-bold">System Monitor</div>
        <div className="grid grid-cols-2 gap-4">
          <Terminal
            title="PROCESS_LOG"
            maxHeight="12rem"
            lines={[
              "Starting process...",
              "> Process ID: 1234",
              "> Status: Running",
              "Monitoring..."
            ]}
          />
          <Terminal
            title="ERROR_LOG"
            maxHeight="12rem"
            lines={[
              "No errors detected",
              "System running normally",
              "> Last check: 2025-01-14 15:30:22"
            ]}
          />
        </div>
      </div>
    </div>
  )
};
