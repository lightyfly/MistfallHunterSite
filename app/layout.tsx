import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VV: ULTIMATUM — Codes, Builds, Guides",
  description: "A fan-made VV: ULTIMATUM reference for Roblox players.",
  icons: { icon: "/logo.png", shortcut: "/logo.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
