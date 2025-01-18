import { Button } from "industrialkit";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="space-y-6 text-center">
        <h1 className="text-4xl font-bold">
          Industrial-Grade UI Components for React
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Build robust, accessible, and beautiful industrial applications with
          our production-ready component library.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/docs/getting-started">
            <Button variant="primary" size="lg">
              Get Started
            </Button>
          </Link>
          <Link href="/docs/components">
            <Button variant="default" size="lg">
              Components
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="grid gap-8 md:grid-cols-3">
        <div className="space-y-2">
          <h3 className="text-xl font-bold">Modern Design</h3>
          <p className="text-gray-600">
            Clean, industrial-inspired components that look great in any
            application.
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-bold">Type-Safe</h3>
          <p className="text-gray-600">
            Built with TypeScript for excellent developer experience and type
            safety.
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-bold">Customizable</h3>
          <p className="text-gray-600">
            Easy to customize with Tailwind CSS and variant support.
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-bold">Accessible</h3>
          <p className="text-gray-600">
            Follows WAI-ARIA patterns for maximum accessibility.
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-bold">Responsive</h3>
          <p className="text-gray-600">
            Works seamlessly across all device sizes and screen types.
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-bold">Well Documented</h3>
          <p className="text-gray-600">
            Comprehensive documentation with examples and API references.
          </p>
        </div>
      </section>

      {/* Example Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Designed for Industry</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Process Control</h3>
            <p className="text-gray-600">
              Monitor and control industrial processes with real-time data
              visualization components and control interfaces.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Data Management</h3>
            <p className="text-gray-600">
              Manage large datasets with performant grids, tables, and
              visualization tools.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
