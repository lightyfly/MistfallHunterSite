import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPage } from "../../../components/legal-page";
import { supportedLocales, type Locale } from "../../../lib/site-data";

const dynamicLocales = supportedLocales.filter((locale) => !["en", "zh"].includes(locale));

export function generateStaticParams() { return dynamicLocales.map((locale) => ({ locale })); }
export const metadata: Metadata = { title: "Terms of Service — Mistfall Hunter Wiki", description: "Terms of service for the independent Mistfall Hunter fan wiki." };

export default async function Page({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (!dynamicLocales.includes(locale as Locale)) notFound(); return <LegalPage locale={locale as Locale} kind="terms" />; }
