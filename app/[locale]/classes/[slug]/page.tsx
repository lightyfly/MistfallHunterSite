import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ClassDetailPage } from "../../../../components/race-detail-page";
import { classRecords, getClassRecord, localizedSeo, supportedLocales, type Locale } from "../../../../lib/site-data";

const dynamicLocales = supportedLocales.filter((locale) => !["en", "zh"].includes(locale));

export function generateStaticParams() { return dynamicLocales.flatMap((locale) => classRecords[locale].map(({ slug }) => ({ locale, slug }))); }

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  if (!dynamicLocales.includes(rawLocale as Locale)) return { title: "Mistfall Hunter Class Reference" };
  const locale = rawLocale as Locale;
  const record = getClassRecord(locale, slug);
  if (!record) return { title: "Class reference not found — Mistfall Hunter" };
  return { title: `${record.title} — Mistfall Hunter`, description: record.description, keywords: localizedSeo[locale].description };
}

export default async function Page({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: rawLocale, slug } = await params;
  if (!dynamicLocales.includes(rawLocale as Locale)) notFound();
  const locale = rawLocale as Locale;
  if (!getClassRecord(locale, slug)) notFound();
  return <ClassDetailPage locale={locale} slug={slug} />;
}
