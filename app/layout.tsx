import type { Metadata } from "next";
import "./globals.css";
import { seo } from "../lib/site-data";

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  icons: { icon: "/images/mistfall/favicon.png", shortcut: "/images/mistfall/favicon.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
