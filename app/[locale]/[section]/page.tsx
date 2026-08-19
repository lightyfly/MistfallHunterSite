import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ReferenceSectionPage, type SectionKey } from "../../../components/reference-section-page";
import { localizedSeo, supportedLocales, type Locale } from "../../../lib/site-data";

const dynamicLocales = supportedLocales.filter((locale) => !["en", "zh"].includes(locale));
const sections: SectionKey[] = ["beginner-guide", "extraction", "bosses", "tier-list", "updates", "community", "maps-and-loot"];

export function generateStaticParams() { return dynamicLocales.flatMap((locale) => sections.map((section) => ({ locale, section }))); }

export async function generateMetadata({ params }: { params: Promise<{ locale: string; section: string }> }): Promise<Metadata> {
  const { locale: rawLocale, section } = await params;
  if (!dynamicLocales.includes(rawLocale as Locale) || !sections.includes(section as SectionKey)) return { title: "Reference not found — Mistfall Hunter" };
  return { title: `${section.replaceAll("-", " ")} — ${localizedSeo[rawLocale as Locale].title}`, description: localizedSeo[rawLocale as Locale].description };
}

export default async function Page({ params }: { params: Promise<{ locale: string; section: string }> }) {
  const { locale: rawLocale, section } = await params;
  if (!dynamicLocales.includes(rawLocale as Locale) || !sections.includes(section as SectionKey)) notFound();
  return <ReferenceSectionPage locale={rawLocale as Locale} section={section as SectionKey} />;
}
