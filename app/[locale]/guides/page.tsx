import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { keywordArticles } from "../../../lib/keyword-pages";
import { localizedPath, localeHomeLabels, supportedLocales, type Locale } from "../../../lib/site-data";
import { SiteFrame } from "../../../components/site-frame";

const guideIndexCopy: Record<Locale, { title: string; description: string; index: string; read: string }> = {
  en: { title: "Mistfall Hunter keyword guides", description: "One search intent per page, with collected facts filtered for relevance and tied to their source context.", index: "Research index", read: "Read guide" },
  ru: { title: "Гайды Mistfall Hunter по ключевым запросам", description: "Один поисковый запрос на страницу: собранные факты отфильтрованы по релевантности и привязаны к контексту источников.", index: "Индекс исследований", read: "Открыть гайд" },
  de: { title: "Mistfall-Hunter-Guides nach Suchbegriffen", description: "Eine Suchabsicht pro Seite: Die gesammelten Fakten sind nach Relevanz gefiltert und ihrem Quellenkontext zugeordnet.", index: "Recherche-Index", read: "Guide lesen" },
  "pt-br": { title: "Guias de palavras-chave de Mistfall Hunter", description: "Uma intenção de busca por página, com fatos coletados filtrados por relevância e ligados ao contexto de suas fontes.", index: "Índice de pesquisa", read: "Ler guia" },
  zh: { title: "Mistfall Hunter 关键词指南", description: "每个页面对应一个搜索意图，已过滤无效信息，并保留与来源对应的事实。", index: "调研索引", read: "阅读指南" },
};

export function generateStaticParams() {
  return supportedLocales.filter((locale) => locale !== "en").map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!supportedLocales.includes(rawLocale as Locale)) return { title: "Mistfall Hunter Keyword Guides" };
  return {
    title: "Mistfall Hunter keyword guides: classes, maps, and updates",
    description: "Browse the collected Mistfall Hunter keyword guides for classes, builds, codes, maps, updates, release information, platform support, purchases, and reviews.",
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!supportedLocales.includes(rawLocale as Locale) || rawLocale === "en") notFound();
  const locale = rawLocale as Locale;
  const copy = guideIndexCopy[locale];
  return (
    <SiteFrame locale={locale} currentPath="/guides">
      <article className="reference-article">
        <nav className="breadcrumbs">
          <Link href={localizedPath(locale, "/")}>{localeHomeLabels[locale]}</Link>
          <span>›</span>
          <span>{copy.title}</span>
        </nav>
        <div className="article-media">
          <img src="/images/mistfall/loot.jpg" alt="Mistfall Hunter keyword guides" />
          <span>{copy.index}</span>
        </div>
        <h1>{copy.title}</h1>
        <p className="article-lede">{copy.description}</p>
        <div className="ad-slot" aria-hidden="true" />
        <div className="guide-grid keyword-library">
          {keywordArticles.map((article) => (
            <Link className="guide-card keyword-card" href={localizedPath(locale, "/guides/" + article.slug)} key={article.slug}>
              <img src={article.image} alt="" />
              <span className="guide-card-copy">
                <span className="badge">{article.category}</span>
                <strong>{article.h1}</strong>
                <small>{article.answer}</small>
                <span className="read-more">{copy.read} <b>→</b></span>
              </span>
            </Link>
          ))}
        </div>
      </article>
    </SiteFrame>
  );
}
