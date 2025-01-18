'use client'
import { ExampleCard } from "@/components/example-card";
import { Terminal } from "industrialkit";
import { useEffect, useState } from "react";

export default function TerminalPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Terminal</h1>
        <p className="text-lg text-gray-600">
          A terminal emulator component for displaying command-line style output and logs.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Examples</h2>

        <ExampleCard
          title="Basic Terminal"
          description="Simple terminal with static content"
          code={`import { Terminal } from "industrialkit";

export function BasicExample() {
  const lines = [
    "System initialized",
    "Loading configuration...",
    "Connected to main server",
    "> Starting services",
    "All services started successfully",
  ];

  return (
    <Terminal
      title="System Log"
      lines={lines}
    />
  );
}`}
        >
          <Terminal
            title="System Log"
            lines={[
              "System initialized",
              "Loading configuration...",
              "Connected to main server",
              "> Starting services",
              "All services started successfully",
            ]}
          />
        </ExampleCard>

        <ExampleCard
          title="Live Terminal"
          description="Terminal with real-time updates"
          code={`import { Terminal } from "industrialkit";
import { useState, useEffect } from "react";

export function LiveExample() {
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    const messages = [
      "Initializing system...",
      "Loading modules...",
      "Connecting to server...",
      "> GET /api/status",
      "< 200 OK",
      "System ready"
    ];

    let i = 0;
    const interval = setInterval(() => {
      if (i < messages.length) {
        setLines(prev => [...prev, messages[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Terminal
      title="Live Output"
      lines={lines}
      loading={lines.length < 6}
    />
  );
}`}
        >
          <LiveTerminalExample />
        </ExampleCard>

        <ExampleCard
          title="Highlighted Lines"
          description="Terminal with highlighted lines for emphasis"
          code={`import { Terminal } from "industrialkit";

export function HighlightExample() {
  const lines = [
    "Starting deployment...",
    "Building application...",
    "> Error: Build failed",
    "Missing dependencies detected",
    "Please run npm install",
    "> Build process terminated"
  ];

  return (
    <Terminal
      title="Deployment Log"
      lines={lines}
      highlightLines={[2, 5]}
    />
  );
}`}
        >
          <Terminal
            title="Deployment Log"
            lines={[
              "Starting deployment...",
              "Building application...",
              "> Error: Build failed",
              "Missing dependencies detected",
              "Please run npm install",
              "> Build process terminated"
            ]}
            highlightLines={[2, 5]}
          />
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
                <td className="px-4 py-2 font-mono">title</td>
                <td className="px-4 py-2 font-mono">string</td>
                <td className="px-4 py-2 font-mono">"Terminal"</td>
                <td className="px-4 py-2">Terminal window title</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-mono">lines</td>
                <td className="px-4 py-2 font-mono">string[]</td>
                <td className="px-4 py-2 font-mono">[]</td>
                <td className="px-4 py-2">Array of text lines to display</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-mono">loading</td>
                <td className="px-4 py-2 font-mono">boolean</td>
                <td className="px-4 py-2 font-mono">false</td>
                <td className="px-4 py-2">Show loading indicator</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-mono">maxHeight</td>
                <td className="px-4 py-2 font-mono">string</td>
                <td className="px-4 py-2 font-mono">"24rem"</td>
                <td className="px-4 py-2">Maximum height of terminal window</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-mono">highlightLines</td>
                <td className="px-4 py-2 font-mono">number[]</td>
                <td className="px-4 py-2 font-mono">[]</td>
                <td className="px-4 py-2">Indices of lines to highlight</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-bold mb-4">TerminalLine Props</h3>
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
                <td className="px-4 py-2 font-mono">prefix</td>
                <td className="px-4 py-2 font-mono">string</td>
                <td className="px-4 py-2 font-mono">"$"</td>
                <td className="px-4 py-2">Line prefix character</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-mono">content</td>
                <td className="px-4 py-2 font-mono">string</td>
                <td className="px-4 py-2 font-mono">-</td>
                <td className="px-4 py-2">Line content</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-mono">highlight</td>
                <td className="px-4 py-2 font-mono">boolean</td>
                <td className="px-4 py-2 font-mono">false</td>
                <td className="px-4 py-2">Highlight the line</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-mono">timestamp</td>
                <td className="px-4 py-2 font-mono">boolean</td>
                <td className="px-4 py-2 font-mono">false</td>
                <td className="px-4 py-2">Show timestamp</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Example Components
function LiveTerminalExample() {
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    const messages = [
      "Initializing system...",
      "Loading modules...",
      "Connecting to server...",
      "> GET /api/status",
      "< 200 OK",
      "System ready"
    ];

    let i = 0;
    const interval = setInterval(() => {
      if (i < messages.length) {
        setLines(prev => [...prev, messages[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Terminal
      title="Live Output"
      lines={lines}
      loading={lines.length < 6}
    />
  );
}
