import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ReferenceSectionPage, type SectionKey } from "../../../components/reference-section-page";
import { localizedSeo } from "../../../lib/site-data";

const sections: SectionKey[] = [
  "beginner-guide",
  "extraction",
  "bosses",
  "codes",
  "tier-list",
  "updates",
  "community",
  "maps-and-loot",
];

export function generateStaticParams() {
  return sections.map((section) => ({ section }));
}

export async function generateMetadata({ params }: { params: Promise<{ section: string }> }): Promise<Metadata> {
  const { section } = await params;
  if (!sections.includes(section as SectionKey)) return { title: "页面未找到 — Mistfall Hunter" };

  const label = section.replaceAll("-", " ");
  return {
    title: `${label} — ${localizedSeo.zh.title}`,
    description: localizedSeo.zh.description,
  };
}

export default async function Page({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  if (!sections.includes(section as SectionKey)) notFound();
  return <ReferenceSectionPage locale="zh" section={section as SectionKey} />;
}
