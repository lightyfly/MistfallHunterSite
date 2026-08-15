import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { KeywordPage } from "../../../components/keyword-page";
import { getKeywordArticle, keywordArticleSlugs } from "../../../lib/keyword-pages";

export function generateStaticParams() {
  return keywordArticleSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getKeywordArticle(slug);
  if (!article) return { title: "Keyword guide not found — Mistfall Hunter" };
  return {
    title: article.title,
    description: article.description,
    keywords: [article.keyword, "Mistfall Hunter"],
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!getKeywordArticle(slug)) notFound();
  return <KeywordPage locale="en" slug={slug} />;
}
