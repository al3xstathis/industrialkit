"use client";
import { ToastProvider } from "industrialkit";

export default function Providers({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <ToastProvider>{children}</ToastProvider>;
}
