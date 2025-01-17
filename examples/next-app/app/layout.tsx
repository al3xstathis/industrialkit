import { Navigation } from "@/components/navigation";
import { Header } from "industrialkit";
import "./globals.css";
import Providers from "./providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="flex h-screen flex-col bg-background">
            <Header title="IndustrialKit" subtitle="Production Environment" />
            <div className="flex flex-1 overflow-hidden">
              <Navigation />
              <main className="flex-1 overflow-auto p-4">{children}</main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
