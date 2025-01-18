import { TimeSeries } from "industrialkit";
import { ExampleCard } from "@/components/example-card";

// Sample data for examples
const generateTimeSeriesData = (points: number) => {
  const data = [];
  const now = new Date();
  for (let i = 0; i < points; i++) {
    data.push({
      timestamp: new Date(now.getTime() - (points - i) * 1000),
      value: Math.sin(i * 0.1) * 10 + 20,
    });
  }
  return data;
};

const sampleData = generateTimeSeriesData(50);
const multiSeriesData = [
  generateTimeSeriesData(50),
  generateTimeSeriesData(50).map(d => ({ ...d, value: d.value + 10 })),
];

export default function TimeSeriesPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">TimeSeries</h1>
        <p className="text-lg text-gray-600">
          Interactive time series charts for displaying temporal data and trends.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Examples</h2>

        <ExampleCard
          title="Basic TimeSeries"
          description="A simple time series chart with a single data series"
          code={`import { TimeSeries } from "industrialkit";

const sampleData = [
  { timestamp: new Date(), value: 20 },
  // ... more data points
];

export default function BasicExample() {
  return (
    <TimeSeries
      data={sampleData}
      height={300}
      title="Temperature"
      yAxisLabel="°C"
    />
  );
}`}
        >
          <TimeSeries
            data={sampleData}
            height={300}
            title="Temperature"
            yAxisLabel="°C"
          />
        </ExampleCard>

        <ExampleCard
          title="Multi-Series Chart"
          description="Display multiple data series in a single chart"
          code={`import { TimeSeries } from "industrialkit";

const multiSeriesData = [
  [ /* series 1 data points */ ],
  [ /* series 2 data points */ ],
];

export default function MultiSeriesExample() {
  return (
    <TimeSeries
      data={multiSeriesData}
      labels={["Temperature", "Pressure"]}
      height={300}
      fill={true}
    />
  );
}`}
        >
          <TimeSeries
            data={multiSeriesData}
            labels={["Temperature", "Pressure"]}
            height={300}
            fill={true}
          />
        </ExampleCard>

        <ExampleCard
          title="Terminal Style"
          description="Time series chart with terminal-inspired styling"
          code={`import { TimeSeries } from "industrialkit";

export default function TerminalExample() {
  return (
    <TimeSeries
      data={sampleData}
      variant="terminal"
      height={300}
      title="System Metrics"
    />
  );
}`}
        >
          <TimeSeries
            data={sampleData}
            variant="terminal"
            height={300}
            title="System Metrics"
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
                <td className="px-4 py-2 font-mono">data</td>
                <td className="px-4 py-2 font-mono">TimeSeriesData[] | TimeSeriesData[][]</td>
                <td className="px-4 py-2 font-mono">-</td>
                <td className="px-4 py-2">Single or multiple series of time-value pairs</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-mono">labels</td>
                <td className="px-4 py-2 font-mono">string[]</td>
                <td className="px-4 py-2 font-mono">["Value"]</td>
                <td className="px-4 py-2">Labels for each data series</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-mono">height</td>
                <td className="px-4 py-2 font-mono">number</td>
                <td className="px-4 py-2 font-mono">300</td>
                <td className="px-4 py-2">Height of the chart in pixels</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-mono">variant</td>
                <td className="px-4 py-2 font-mono">"default" | "terminal"</td>
                <td className="px-4 py-2 font-mono">"default"</td>
                <td className="px-4 py-2">Visual style of the chart</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-mono">fill</td>
                <td className="px-4 py-2 font-mono">boolean</td>
                <td className="px-4 py-2 font-mono">false</td>
                <td className="px-4 py-2">Whether to fill the area under the line</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-mono">realtime</td>
                <td className="px-4 py-2 font-mono">boolean</td>
                <td className="px-4 py-2 font-mono">false</td>
                <td className="px-4 py-2">Optimize for real-time updates</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-mono">yAxisLabel</td>
                <td className="px-4 py-2 font-mono">string</td>
                <td className="px-4 py-2 font-mono">-</td>
                <td className="px-4 py-2">Label for the Y axis</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}