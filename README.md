# IndustryDB

IndustryDB is a comprehensive React component library designed specifically for building modern industrial and enterprise applications. It provides a collection of robust, performance-optimized components with a focus on monitoring, control systems, and data visualization interfaces.

## Features

### Core Components
- 📊 **Data Visualization** - Advanced time series charts, meters, and progress indicators
- 🎛️ **Control Elements** - Industrial-grade buttons, switches, and form controls
- 📋 **Data Management** - Powerful data grids, tables, and panels
- 🖥️ **Monitoring** - Terminal emulator, status indicators, and alert systems
- 📱 **Layout** - Split views, accordions, and responsive layouts

### Technical Features
- ⚛️ Built with React 19 and TypeScript
- 🎨 Tailwind CSS for styling with customizable themes
- 📦 Tree-shakeable architecture
- 🌙 Terminal-style variant for all components

## Installation

```bash
npm install industrydb
```

## Basic Setup

Add the plugin to your `tailwind.config.js`:

```js
module.exports = {
  content: [
    // ...
    "node_modules/industrydb/dist/**/*.{js,mjs}"
  ],
  plugins: [
    require('industrydb/plugin')
  ]
}
```

## Quick Start

```tsx
import {
  Header,
  SplitView,
  SplitViewPanel,
  DataGrid,
  TimeSeries,
  StatusIndicator
} from 'industrydb'

function MonitoringDashboard() {
  return (
    <div className="h-screen flex flex-col">
      <Header
        title="Production Monitor"
        subtitle="Line 1"
      />

      <SplitView
        first={
          <SplitViewPanel title="Process Status">
            <DataGrid
              columns={[
                { key: 'id', header: 'ID' },
                { key: 'status', header: 'Status',
                  render: (value) => (
                    <StatusIndicator status={value} />
                  )
                },
                { key: 'value', header: 'Value' }
              ]}
              data={processData}
            />
          </SplitViewPanel>
        }
        second={
          <SplitViewPanel title="Performance">
            <TimeSeries
              data={timeSeriesData}
              labels={['Temperature', 'Pressure']}
              height={300}
            />
          </SplitViewPanel>
        }
      />
    </div>
  )
}
```

## Key Components

### Data Display
- `DataGrid` - Advanced data grid with sorting, selection, and custom rendering
- `TimeSeries` - Interactive time series charts with real-time updates
- `Terminal` - Terminal emulator with ANSI color support
- `Panel` - Information panels with flexible layouts

### Controls
- `Button` - Industrial-style buttons with multiple variants
- `Switch` - Toggle switches with status indicators
- `Form` - Form components with validation and error states
- `Select` - Dropdown selectors with custom styling

### Layout
- `SplitView` - Resizable split panels
- `Tabs` - Tabbed interface with multiple styles
- `Accordion` - Collapsible sections
- `Dialog` - Modal dialogs and alerts

### Feedback
- `StatusIndicator` - Status indicators with multiple states
- `Toast` - Toast notifications system
- `Progress` - Progress bars and meters
- `Badge` - Status badges and labels

## Variants

Most components support two main variants:
- `default` - Clean, modern interface style
- `terminal` - Terminal-inspired retro style

```tsx
// Default style
<Button variant="default">Submit</Button>

// Terminal style
<Button variant="terminal">EXECUTE</Button>
```

## Documentation

For detailed documentation and examples, visit our documentation sites:
- [Component API Reference](https://industrydb-docs.vercel.app)
- [Interactive Storybook](https://industrydb-storybook.vercel.app)

## Examples

Check out our example applications:
- [Next.js Demo](./examples/next-app) - Full monitoring dashboard example
- [Storybook](./examples/storybook) - Interactive component playground

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run Next.js demo
npm run demo:next

# Build library
npm run build
```

## Contributing

We welcome contributions! Build your own components, fix bugs, or improve the documentation.
This is meant to be a community-driven project, so feel free to open issues and pull requests.

## License

MIT © Alex Stathis
