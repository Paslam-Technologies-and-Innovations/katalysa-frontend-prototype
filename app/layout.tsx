import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Katalysa — Clearer school management",
  description: "Student records, school fees, results, and family updates in one connected workspace for Nigerian schools.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
