import Link from "next/link";
import { keywordArticles, getKeywordArticle, type KeywordArticle } from "../lib/keyword-pages";
import { localizedPath, type Locale, siteCopy } from "../lib/site-data";
import { SiteFrame } from "./site-frame";

type KeywordLabels = {
  home: string;
  guides: string;
  research: string;
  updated: string;
  sources: string;
  related: string;
  read: string;
  official: string;
};

const labels: Record<Locale, KeywordLabels> = {
  en: { home: "Home", guides: "Keyword Guides", research: "Research status", updated: "Updated", sources: "Sources used", related: "Related keyword pages", read: "Read page", official: "External source" },
  ru: { home: "Главная", guides: "Гайды по ключевым запросам", research: "Статус исследования", updated: "Обновлено", sources: "Использованные источники", related: "Связанные страницы", read: "Открыть страницу", official: "Внешний источник" },
  de: { home: "Startseite", guides: "Keyword-Guides", research: "Recherche-Status", updated: "Aktualisiert", sources: "Verwendete Quellen", related: "Verwandte Seiten", read: "Seite lesen", official: "Externe Quelle" },
  "pt-br": { home: "Início", guides: "Guias por palavra-chave", research: "Status da pesquisa", updated: "Atualizado", sources: "Fontes usadas", related: "Páginas relacionadas", read: "Ler página", official: "Fonte externa" },
  zh: { home: "首页", guides: "关键词指南", research: "调研状态", updated: "更新", sources: "使用的来源", related: "相关关键词页", read: "阅读页面", official: "外部来源" },
};

function RelatedPages({ article, locale, text }: { article: KeywordArticle; locale: Locale; text: KeywordLabels }) {
  const related = keywordArticles.filter((candidate) => candidate.category === article.category && candidate.slug !== article.slug).slice(0, 4);
  if (!related.length) return null;
  return (
    <section className="keyword-related" aria-labelledby="related-keyword-pages">
      <h2 id="related-keyword-pages">{text.related}</h2>
      <div className="keyword-related-grid">
        {related.map((candidate) => (
          <Link href={localizedPath(locale, "/guides/" + candidate.slug)} key={candidate.slug}>
            <span className="badge">{candidate.category}</span>
            <strong>{candidate.h1}</strong>
            <small>{text.read} →</small>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function KeywordPage({ locale, slug }: { locale: Locale; slug: string }) {
  const article = getKeywordArticle(slug);
  if (!article) return null;
  const text = labels[locale];
  const site = siteCopy[locale];

  return (
    <SiteFrame locale={locale} currentPath={"/guides/" + article.slug}>
      <article className="reference-article keyword-article">
        <nav className="breadcrumbs">
          <Link href={localizedPath(locale, "/")}>{text.home}</Link>
          <span>›</span>
          <Link href={localizedPath(locale, "/guides")}>{text.guides}</Link>
          <span>›</span>
          <span>{article.keyword}</span>
        </nav>
        <div className="article-media">
          <img src={article.image} alt={article.h1} />
          <span>{site.home.mediaLabel}</span>
        </div>
        <div className="detail-heading-row">
          <div>
            <span className="article-kicker">{article.category}</span>
            <h1>{article.h1}</h1>
            <p className="article-lede">{article.answer}</p>
          </div>
          <div className="detail-mark">MH<br /><small>GUIDE</small></div>
        </div>
        <div className="article-meta">
          <span>{text.research}: {article.confidence}</span>
          <span>•</span>
          <span>{text.updated}: {article.updated}</span>
        </div>
        <div className="ad-slot" aria-hidden="true" />
        <div className="article-copy keyword-copy">
          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.bullets?.length ? <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}
            </section>
          ))}
        </div>
        <section className="article-sources" aria-labelledby="keyword-sources">
          <h2 id="keyword-sources">{text.sources}</h2>
          <ul>
            {article.sources.map((source) => (
              <li key={source.url}>
                <a href={source.url} target="_blank" rel="noreferrer">
                  {source.label} ↗
                </a>
                <span>{text.official}</span>
              </li>
            ))}
          </ul>
        </section>
        <RelatedPages article={article} locale={locale} text={text} />
      </article>
    </SiteFrame>
  );
}
