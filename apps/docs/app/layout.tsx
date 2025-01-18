import { Header } from "@/components/header";
import Navigation from "@/components/navigation";
import "@/styles/globals.css";
import type { Metadata } from "next";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "IndustrialKit - Industrial UI Components for React",
  description: "Modern, accessible UI components for industrial applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="flex h-full flex-col">
        <Providers>
          <Header/>
          <div className="flex flex-1 overflow-hidden">
            <Navigation />
            <main className="flex-1 overflow-auto">
              <div className="mx-auto max-w-5xl px-4 py-8 md:px-6 md:py-12">
                {children}
              </div>
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
