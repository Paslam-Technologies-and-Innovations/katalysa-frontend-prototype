import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Katalysa — School management",
  description: "A school-management prototype for Nigerian private schools.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
