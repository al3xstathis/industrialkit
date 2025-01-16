"use client";
import { ToastProvider } from "industrydb";

export default function Providers({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <ToastProvider>{children}</ToastProvider>;
}
