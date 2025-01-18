export default function GettingStartedPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Introduction</h1>
        <p className="text-lg text-gray-600">
          IndustrialKit is a comprehensive React component library designed specifically for building modern industrial and enterprise applications.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Key Features</h2>
        
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <h3 className="text-xl font-bold">📊 Data Visualization</h3>
            <p className="text-gray-600">
              Advanced time series charts, meters, and progress indicators designed for real-time monitoring and data display.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-bold">🎛️ Control Elements</h3>
            <p className="text-gray-600">
              Industrial-grade buttons, switches, and form controls with both modern and terminal-inspired styles.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-bold">📋 Data Management</h3>
            <p className="text-gray-600">
              Powerful data grids, tables, and panels for organizing and presenting complex data structures.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-bold">🖥️ Monitoring</h3>
            <p className="text-gray-600">
              Terminal emulator, status indicators, and alert systems for system monitoring interfaces.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Technical Features</h2>
        
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="font-bold">⚛️</span>
            <div>
              <h3 className="font-bold">Modern React & TypeScript</h3>
              <p className="text-gray-600">
                Built with React 19 and TypeScript for excellent developer experience and type safety.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="font-bold">🎨</span>
            <div>
              <h3 className="font-bold">Tailwind CSS Integration</h3>
              <p className="text-gray-600">
                Customizable styling using Tailwind CSS with support for custom themes and variants.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="font-bold">📦</span>
            <div>
              <h3 className="font-bold">Tree-Shakeable</h3>
              <p className="text-gray-600">
                Import only what you need. Components are individually exported and tree-shakeable.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="font-bold">🌙</span>
            <div>
              <h3 className="font-bold">Terminal Style Support</h3>
              <p className="text-gray-600">
                Unique terminal-inspired variant for all components, perfect for industrial interfaces.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Component Categories</h2>
        
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-gray-200 p-4">
            <h3 className="mb-3 font-bold">Data Display</h3>
            <ul className="list-inside list-disc space-y-2 text-gray-600">
              <li>DataGrid - Advanced data grid with sorting and selection</li>
              <li>TimeSeries - Interactive time series charts</li>
              <li>Terminal - Terminal emulator with ANSI support</li>
              <li>Panel - Information panels with flexible layouts</li>
            </ul>
          </div>

          <div className="rounded-lg border border-gray-200 p-4">
            <h3 className="mb-3 font-bold">Controls</h3>
            <ul className="list-inside list-disc space-y-2 text-gray-600">
              <li>Button - Industrial-style buttons with variants</li>
              <li>Switch - Toggle switches with status indicators</li>
              <li>Form - Form components with validation</li>
              <li>Select - Dropdown selectors with custom styling</li>
            </ul>
          </div>

          <div className="rounded-lg border border-gray-200 p-4">
            <h3 className="mb-3 font-bold">Layout</h3>
            <ul className="list-inside list-disc space-y-2 text-gray-600">
              <li>SplitView - Resizable split panels</li>
              <li>Tabs - Tabbed interface with multiple styles</li>
              <li>Accordion - Collapsible sections</li>
              <li>Dialog - Modal dialogs and alerts</li>
            </ul>
          </div>

          <div className="rounded-lg border border-gray-200 p-4">
            <h3 className="mb-3 font-bold">Feedback</h3>
            <ul className="list-inside list-disc space-y-2 text-gray-600">
              <li>StatusIndicator - Multi-state status indicators</li>
              <li>Toast - Toast notifications system</li>
              <li>Progress - Progress bars and meters</li>
              <li>Badge - Status badges and labels</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
        <h2 className="mb-4 text-2xl font-bold">Next Steps</h2>
        <div className="space-y-3">
          <p className="text-gray-600">
            Ready to get started? Check out the following pages:
          </p>
          <ul className="list-inside list-disc space-y-2 text-gray-600">
            <li>
              <a href="/docs/installation" className="text-blue-600 hover:underline">
                Installation Guide
              </a>
              {" "}- Learn how to add IndustrialKit to your project
            </li>
            <li>
              <a href="/docs/usage" className="text-blue-600 hover:underline">
                Basic Usage
              </a>
              {" "}- See how to use the components in your application
            </li>
            <li>
              <a href="/docs/components" className="text-blue-600 hover:underline">
                Components
              </a>
              {" "}- Browse the complete component documentation
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}