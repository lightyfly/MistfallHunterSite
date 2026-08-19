import baseData from "./keyword-pages.json";
import extraData from "./keyword-pages-extra.json";

export type KeywordSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type KeywordSource = {
  label: string;
  url: string;
};

export type KeywordArticle = {
  slug: string;
  keyword: string;
  category: string;
  title: string;
  description: string;
  h1: string;
  image: string;
  answer: string;
  confidence: string;
  updated: string;
  sections: KeywordSection[];
  sources: KeywordSource[];
};

const baseArticles = baseData as { articles: KeywordArticle[] };
const extraArticles = extraData as { articles: KeywordArticle[] };

export const keywordArticles: KeywordArticle[] = [...baseArticles.articles, ...extraArticles.articles]
  .filter((article) => article.slug !== "mistfall-hunter-codes");

export const keywordArticleSlugs = keywordArticles.map((article) => article.slug);

export function getKeywordArticle(slug: string) {
  return keywordArticles.find((article) => article.slug === slug);
}
