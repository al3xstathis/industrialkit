import { CodeBlock } from "@/components/code-block";

export default function InstallationPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Installation</h1>
        <p className="text-lg text-gray-600">
          Get started with IndustrialKit in your React project
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Quick Start</h2>
        <p>Install IndustrialKit and its peer dependencies:</p>
        
        <CodeBlock
          language="bash"
          code="npm install industrialkit react react-dom"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Tailwind CSS Setup</h2>
        <p>
          IndustrialKit uses Tailwind CSS for styling. Add the plugin to your
          tailwind.config.js:
        </p>

        <CodeBlock
          language="javascript"
          filename="tailwind.config.js"
          code={`module.exports = {
  content: [
    // ... your content paths
    "node_modules/industrialkit/dist/**/*.{js,mjs}",
  ],
  plugins: [
    require("industrialkit/plugin"),
  ],
}`}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Provider Setup</h2>
        <p>
          Wrap your app with the ToastProvider if you plan to use toast
          notifications:
        </p>

        <CodeBlock
          language="tsx"
          filename="app/providers.tsx"
          code={`import { ToastProvider } from "industrialkit";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <ToastProvider>{children}</ToastProvider>;
}`}
        />
      </div>
    </div>
  );
}