import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ClassesPage } from "../../../components/races-page";
import { classRecords, localizedSeo, supportedLocales, type Locale } from "../../../lib/site-data";

const dynamicLocales = supportedLocales.filter((locale) => !["en", "zh"].includes(locale));

export function generateStaticParams() { return dynamicLocales.map((locale) => ({ locale })); }

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!dynamicLocales.includes(rawLocale as Locale)) return { title: "Mistfall Hunter Classes" };
  const locale = rawLocale as Locale;
  return { title: `${classRecords[locale][0].title} — ${localizedSeo[locale].title}`, description: classRecords[locale][0].description };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!dynamicLocales.includes(rawLocale as Locale)) notFound();
  return <ClassesPage locale={rawLocale as Locale} />;
}
