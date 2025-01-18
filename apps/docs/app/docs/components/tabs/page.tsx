'use client'
import { ExampleCard } from "@/components/example-card";
import { Tab, TabList, TabPanel, Tabs } from "industrialkit";

export default function TabsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Tabs</h1>
        <p className="text-lg text-gray-600">
          Organize content into multiple tabbed views.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Examples</h2>

        <ExampleCard
          title="Basic Tabs"
          description="Simple tabbed interface"
          code={`import { Tabs, TabList, Tab, TabPanel } from "industrialkit";

export default function BasicExample() {
  return (
    <Tabs defaultValue="tab1">
      <TabList>
        <Tab value="tab1">Overview</Tab>
        <Tab value="tab2">Settings</Tab>
        <Tab value="tab3">Logs</Tab>
      </TabList>

      <TabPanel value="tab1">
        System overview content
      </TabPanel>
      <TabPanel value="tab2">
        System settings content
      </TabPanel>
      <TabPanel value="tab3">
        System logs content
      </TabPanel>
    </Tabs>
  );
}`}
        >
          <Tabs defaultValue="tab1">
            <TabList>
              <Tab value="tab1">Overview</Tab>
              <Tab value="tab2">Settings</Tab>
              <Tab value="tab3">Logs</Tab>
            </TabList>

            <TabPanel value="tab1">
              System overview content
            </TabPanel>
            <TabPanel value="tab2">
              System settings content
            </TabPanel>
            <TabPanel value="tab3">
              System logs content
            </TabPanel>
          </Tabs>
        </ExampleCard>

        <ExampleCard
          title="Disabled Tab"
          description="Tabs with disabled state"
          code={`import { Tabs, TabList, Tab, TabPanel } from "industrialkit";

export default function DisabledExample() {
  return (
    <Tabs defaultValue="home">
      <TabList>
        <Tab value="home">Home</Tab>
        <Tab value="profile">Profile</Tab>
        <Tab value="admin" disabled>
          Admin
        </Tab>
      </TabList>

      <TabPanel value="home">
        Home content
      </TabPanel>
      <TabPanel value="profile">
        Profile content
      </TabPanel>
      <TabPanel value="admin">
        Admin content
      </TabPanel>
    </Tabs>
  );
}`}
        >
          <Tabs defaultValue="home">
            <TabList>
              <Tab value="home">Home</Tab>
              <Tab value="profile">Profile</Tab>
              <Tab value="admin" disabled>
                Admin
              </Tab>
            </TabList>

            <TabPanel value="home">
              Home content
            </TabPanel>
            <TabPanel value="profile">
              Profile content
            </TabPanel>
            <TabPanel value="admin">
              Admin content
            </TabPanel>
          </Tabs>
        </ExampleCard>

        <ExampleCard
          title="Terminal Style"
          description="Terminal-themed tabs"
          code={`import { Tabs, TabList, Tab, TabPanel } from "industrialkit";

export default function TerminalExample() {
  return (
    <Tabs variant="terminal" defaultValue="status">
      <TabList>
        <Tab value="status">STATUS</Tab>
        <Tab value="config">CONFIG</Tab>
        <Tab value="logs">LOGS</Tab>
      </TabList>

      <TabPanel value="status">
        <div className="text-green-400">System status: RUNNING</div>
      </TabPanel>
      <TabPanel value="config">
        <div className="text-green-400">System configuration options</div>
      </TabPanel>
      <TabPanel value="logs">
        <div className="text-green-400">System logs output</div>
      </TabPanel>
    </Tabs>
  );
}`}
        >
          <Tabs variant="terminal" defaultValue="status">
            <TabList>
              <Tab value="status">STATUS</Tab>
              <Tab value="config">CONFIG</Tab>
              <Tab value="logs">LOGS</Tab>
            </TabList>

            <TabPanel value="status">
              <div className="text-green-400">System status: RUNNING</div>
            </TabPanel>
            <TabPanel value="config">
              <div className="text-green-400">System configuration options</div>
            </TabPanel>
            <TabPanel value="logs">
              <div className="text-green-400">System logs output</div>
            </TabPanel>
          </Tabs>
        </ExampleCard>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">API Reference</h2>

        <div>
          <h3 className="text-xl font-bold mb-4">Tabs Props</h3>
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
                  <td className="px-4 py-2 font-mono">defaultValue</td>
                  <td className="px-4 py-2 font-mono">string</td>
                  <td className="px-4 py-2 font-mono">-</td>
                  <td className="px-4 py-2">Initial active tab</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">value</td>
                  <td className="px-4 py-2 font-mono">string</td>
                  <td className="px-4 py-2 font-mono">-</td>
                  <td className="px-4 py-2">Controlled active tab</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">onValueChange</td>
                  <td className="px-4 py-2 font-mono">(value: string) ={">"} void</td>
                  <td className="px-4 py-2 font-mono">-</td>
                  <td className="px-4 py-2">Change callback</td>
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
          <h3 className="text-xl font-bold mb-4">Tab Props</h3>
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
                  <td className="px-4 py-2 font-mono">string</td>
                  <td className="px-4 py-2 font-mono">-</td>
                  <td className="px-4 py-2">Tab identifier</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">disabled</td>
                  <td className="px-4 py-2 font-mono">boolean</td>
                  <td className="px-4 py-2 font-mono">false</td>
                  <td className="px-4 py-2">Disable the tab</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-bold mb-4">TabPanel Props</h3>
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
                  <td className="px-4 py-2 font-mono">string</td>
                  <td className="px-4 py-2 font-mono">-</td>
                  <td className="px-4 py-2">Associated tab value</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
