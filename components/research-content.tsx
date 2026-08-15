import { getKeywordArticle, type KeywordArticle } from "../lib/keyword-pages";
import type { Locale } from "../lib/site-data";

export type ReferenceResearchKey = "beginner-guide" | "extraction" | "codes" | "tier-list" | "updates" | "maps-and-loot";

const referenceResearchSlugs: Record<ReferenceResearchKey, string[]> = {
  "beginner-guide": ["mistfall-hunter-guide"],
  extraction: ["mistfall-hunter-guide"],
  codes: ["mistfall-hunter-codes"],
  "tier-list": ["mistfall-hunter-tier-list"],
  updates: ["mistfall-hunter-patch-notes", "mistfall-hunter-roadmap"],
  "maps-and-loot": ["mistfall-hunter-interactive-map"],
};

export function getReferenceResearchArticles(section: ReferenceResearchKey) {
  return referenceResearchSlugs[section]
    .map((slug) => getKeywordArticle(slug))
    .filter((article): article is KeywordArticle => Boolean(article));
}

const labels: Record<Locale, { sources: string; source: string; sourceStatus: string }> = {
  en: { sources: "Sources used", source: "External source", sourceStatus: "Research status" },
  ru: { sources: "Использованные источники", source: "Внешний источник", sourceStatus: "Статус исследования" },
  de: { sources: "Verwendete Quellen", source: "Externe Quelle", sourceStatus: "Recherche-Status" },
  "pt-br": { sources: "Fontes usadas", source: "Fonte externa", sourceStatus: "Status da pesquisa" },
  zh: { sources: "使用的来源", source: "外部来源", sourceStatus: "调研状态" },
};

export function ResearchArticles({ articles, locale, showSources = true }: { articles: KeywordArticle[]; locale: Locale; showSources?: boolean }) {
  const text = labels[locale];
  return (
    <div className="article-copy research-article-copy">
      {articles.map((article) => (
        <section className="research-article-group" key={article.slug}>
          {articles.length > 1 ? <h2>{article.h1}</h2> : null}
          <p className="research-answer">{article.answer}</p>
          <p className="research-status"><strong>{text.sourceStatus}:</strong> {article.confidence} · {article.updated}</p>
          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.bullets?.length ? <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}
            </section>
          ))}
        </section>
      ))}
      {showSources ? (
        <section className="article-sources" aria-labelledby="research-sources">
          <h2 id="research-sources">{text.sources}</h2>
          <ul>
            {[...new Map(articles.flatMap((article) => article.sources.map((source) => [source.url, source] as const))).values()].map((source) => (
              <li key={source.url}>
                <a href={source.url} target="_blank" rel="noreferrer">{source.label} ↗</a>
                <span>{text.source}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
