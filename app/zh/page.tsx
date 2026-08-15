import type { Metadata } from "next";
import { HomePage } from "../page";
import { localizedSeo, seo } from "../../lib/site-data";

export const metadata: Metadata = { title: localizedSeo.zh.title, description: localizedSeo.zh.description, keywords: seo.keywords };

export default function Page() { return <HomePage locale="zh" />; }
