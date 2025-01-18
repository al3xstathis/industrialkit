'use client'
import { ProgressBar, Meter } from "industrialkit";
import { ExampleCard } from "@/components/example-card";
import { useState, useEffect } from "react";

function ProgressDemo() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <ProgressBar value={progress} />;
}

export default function ProgressPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Progress & Meter</h1>
        <p className="text-lg text-gray-600">
          Components for displaying progress, loading states, and measurements.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Examples</h2>

        <ExampleCard
          title="Progress Bar"
          description="Basic progress bar with different states"
          code={`import { ProgressBar } from "industrialkit";

export default function ProgressExample() {
  return (
    <div className="space-y-4">
      <ProgressBar value={30} max={100} />
      <ProgressBar value={60} max={100} status="success" />
      <ProgressBar value={80} max={100} status="warning" />
      <ProgressBar value={90} max={100} status="error" />
    </div>
  );
}`}
        >
          <div className="space-y-4">
            <ProgressBar value={30} max={100} />
            <ProgressBar value={60} max={100} status="success" />
            <ProgressBar value={80} max={100} status="warning" />
            <ProgressBar value={90} max={100} status="error" />
          </div>
        </ExampleCard>

        <ExampleCard
          title="Animated Progress"
          description="Progress bar with real-time updates"
          code={`import { ProgressBar } from "industrialkit";
import { useState, useEffect } from "react";

function ProgressDemo() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <ProgressBar value={progress} />;
}`}
        >
          <ProgressDemo />
        </ExampleCard>

        <ExampleCard
          title="Meter"
          description="Meter component for displaying measurements"
          code={`import { Meter } from "industrialkit";

export default function MeterExample() {
  return (
    <div className="space-y-4">
      <Meter
        value={75}
        min={0}
        max={100}
        label="CPU Usage"
      />
      <Meter
        value={45}
        min={0}
        max={100}
        label="Memory"
        lowThreshold={20}
        highThreshold={80}
      />
    </div>
  );
}`}
        >
          <div className="space-y-4">
            <Meter
              value={75}
              min={0}
              max={100}
              label="CPU Usage"
            />
            <Meter
              value={45}
              min={0}
              max={100}
              label="Memory"
              lowThreshold={20}
              highThreshold={80}
            />
          </div>
        </ExampleCard>

        <ExampleCard
          title="Terminal Style"
          description="Progress indicators with terminal styling"
          code={`import { ProgressBar, Meter } from "industrialkit";

export default function TerminalExample() {
  return (
    <div className="space-y-4">
      <ProgressBar value={60} variant="terminal" />
      <Meter
        value={75}
        variant="terminal"
        label="SYSTEM LOAD"
      />
    </div>
  );
}`}
        >
          <div className="space-y-4">
            <ProgressBar value={60} variant="terminal" />
            <Meter
              value={75}
              variant="terminal"
              label="SYSTEM LOAD"
            />
          </div>
        </ExampleCard>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">API Reference</h2>
        
        <div>
          <h3 className="text-xl font-bold mb-4">ProgressBar Props</h3>
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
                  <td className="px-4 py-2 font-mono">value</td>
                  <td className="px-4 py-2 font-mono">number</td>
                  <td className="px-4 py-2 font-mono">0</td>
                  <td className="px-4 py-2">Current progress value</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">max</td>
                  <td className="px-4 py-2 font-mono">number</td>
                  <td className="px-4 py-2 font-mono">100</td>
                  <td className="px-4 py-2">Maximum value</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">showValue</td>
                  <td className="px-4 py-2 font-mono">boolean</td>
                  <td className="px-4 py-2 font-mono">true</td>
                  <td className="px-4 py-2">Show value label</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">status</td>
                  <td className="px-4 py-2 font-mono">"default" | "success" | "warning" | "error"</td>
                  <td className="px-4 py-2 font-mono">"default"</td>
                  <td className="px-4 py-2">Progress status</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">variant</td>
                  <td className="px-4 py-2 font-mono">"default" | "terminal"</td>
                  <td className="px-4 py-2 font-mono">"default"</td>
                  <td className="px-4 py-2">Visual style</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-bold mb-4">Meter Props</h3>
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
                  <td className="px-4 py-2 font-mono">value</td>
                  <td className="px-4 py-2 font-mono">number</td>
                  <td className="px-4 py-2 font-mono">0</td>
                  <td className="px-4 py-2">Current value</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">min</td>
                  <td className="px-4 py-2 font-mono">number</td>
                  <td className="px-4 py-2 font-mono">0</td>
                  <td className="px-4 py-2">Minimum value</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">max</td>
                  <td className="px-4 py-2 font-mono">number</td>
                  <td className="px-4 py-2 font-mono">100</td>
                  <td className="px-4 py-2">Maximum value</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">lowThreshold</td>
                  <td className="px-4 py-2 font-mono">number</td>
                  <td className="px-4 py-2 font-mono">33</td>
                  <td className="px-4 py-2">Low value threshold</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">highThreshold</td>
                  <td className="px-4 py-2 font-mono">number</td>
                  <td className="px-4 py-2 font-mono">66</td>
                  <td className="px-4 py-2">High value threshold</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">label</td>
                  <td className="px-4 py-2 font-mono">string</td>
                  <td className="px-4 py-2 font-mono">-</td>
                  <td className="px-4 py-2">Meter label</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">variant</td>
                  <td className="px-4 py-2 font-mono">"default" | "terminal"</td>
                  <td className="px-4 py-2 font-mono">"default"</td>
                  <td className="px-4 py-2">Visual style</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}