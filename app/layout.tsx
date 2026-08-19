import type { Metadata } from "next";
import "./globals.css";
import { seo } from "../lib/site-data";

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  themeColor: "#0b0b0b",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/images/mistfall/favicon.png", type: "image/png", sizes: "50x50" },
    ],
    shortcut: "/images/mistfall/favicon.png",
    apple: [{ url: "/images/mistfall/favicon.png", type: "image/png", sizes: "50x50" }],
  },
  manifest: "/manifest.webmanifest",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0b0b0b",
} as const;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
