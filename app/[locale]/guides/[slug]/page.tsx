import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { KeywordPage } from "../../../../components/keyword-page";
import { getKeywordArticle, keywordArticleSlugs } from "../../../../lib/keyword-pages";
import { localizedSeo, supportedLocales, type Locale } from "../../../../lib/site-data";

export function generateStaticParams() {
  return supportedLocales.filter((locale) => locale !== "en").flatMap((locale) => keywordArticleSlugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  if (!supportedLocales.includes(rawLocale as Locale)) return { title: "Mistfall Hunter Keyword Guide" };
  const article = getKeywordArticle(slug);
  if (!article) return { title: "Keyword guide not found — Mistfall Hunter" };
  return { title: article.title, description: article.description, keywords: localizedSeo[rawLocale as Locale].description };
}

export default async function Page({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: rawLocale, slug } = await params;
  if (!supportedLocales.includes(rawLocale as Locale) || rawLocale === "en") notFound();
  if (!getKeywordArticle(slug)) notFound();
  return <KeywordPage locale={rawLocale as Locale} slug={slug} />;
}
