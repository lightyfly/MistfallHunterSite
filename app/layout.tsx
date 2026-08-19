import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { seo } from "../lib/site-data";

const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const gscVerification = process.env.NEXT_PUBLIC_GSC_VERIFICATION;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
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
  verification: gscVerification ? { google: gscVerification } : undefined,
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0b0b0b",
} as const;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}{gaMeasurementId ? <><Script async src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`} /><Script id="google-analytics">{`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${gaMeasurementId}', { send_page_view: true });`}</Script></> : null}</body></html>;
}
