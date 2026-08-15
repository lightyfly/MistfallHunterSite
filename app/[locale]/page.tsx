import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HomePage } from "../page";
import { localizedSeo, supportedLocales, type Locale } from "../../lib/site-data";

const dynamicLocales = supportedLocales.filter((locale) => !["en", "zh"].includes(locale));

export function generateStaticParams() { return dynamicLocales.map((locale) => ({ locale })); }

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!dynamicLocales.includes(rawLocale as Locale)) return { title: "Mistfall Hunter" };
  const copy = localizedSeo[rawLocale as Locale];
  return { title: copy.title, description: copy.description, keywords: "Mistfall Hunter, Steam, wiki, beginner guide, classes, builds, extraction ARPG, loot, PvPvE" };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!dynamicLocales.includes(rawLocale as Locale)) notFound();
  return <HomePage locale={rawLocale as Locale} />;
}
