import Link from "next/link";
import { createElement } from "react";
import type { AnchorHTMLAttributes, BlockquoteHTMLAttributes, HTMLAttributes } from "react";
import { getClassMdx } from "../content";
import { keywordArticles } from "../lib/keyword-pages";
import { classRecords, getClassRecord, localizedPath, type Locale } from "../lib/site-data";
import { ResearchArticles } from "./research-content";
import { SiteFrame } from "./site-frame";

const detailCopy: Record<Locale, { home: string; classes: string; media: string; confidence: string; back: string; next: string; snapshot: string; source: string }> = {
  en: { home: "Home", classes: "Classes", media: "Official media", confidence: "Officially listed", back: "Back to Classes", next: "Next reference", snapshot: "Snapshot Aug 13, 2026", source: "Official-source notes" },
  ru: { home: "Главная", classes: "Классы", media: "Официальный материал", confidence: "Официально указано", back: "К обзору классов", next: "Следующая страница", snapshot: "Снимок 13 августа 2026", source: "Заметки по официальным источникам" },
  de: { home: "Startseite", classes: "Klassen", media: "Offizielles Material", confidence: "Offiziell gelistet", back: "Zur Klassenübersicht", next: "Nächste Referenz", snapshot: "Snapshot 13. Aug. 2026", source: "Notizen aus offiziellen Quellen" },
  "pt-br": { home: "Início", classes: "Classes", media: "Mídia oficial", confidence: "Listada oficialmente", back: "Voltar às classes", next: "Próxima referência", snapshot: "Snapshot de 13 ago. 2026", source: "Notas de fontes oficiais" },
  zh: { home: "首页", classes: "职业", media: "官方素材", confidence: "官方列出", back: "返回职业总览", next: "下一篇参考", snapshot: "2026/08/13 快照", source: "官方来源笔记" },
};

function MdxLink({ children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) { return <a {...props}>{children}</a>; }
function MdxHeadingTwo({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) { return <h2 className="mdx-h2" {...props}>{children}</h2>; }
function MdxHeadingThree({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) { return <h3 className="mdx-h3" {...props}>{children}</h3>; }
function MdxQuote({ children, ...props }: BlockquoteHTMLAttributes<HTMLQuoteElement>) { return <blockquote className="mdx-quote" {...props}>{children}</blockquote>; }
const mdxComponents = { a: MdxLink, h2: MdxHeadingTwo, h3: MdxHeadingThree, blockquote: MdxQuote };
const buildArticles = keywordArticles.filter((article) => article.category === "Class Builds");

function MdxBody({ locale, slug, title }: { locale: Locale; slug: string; title: string }) {
  if (slug === "builds" && (locale === "en" || locale === "zh")) return <ResearchArticles articles={buildArticles} locale={locale} />;
  const MdxComponent = getClassMdx(locale, slug);
  return MdxComponent ? createElement(MdxComponent, { components: mdxComponents }) : <FallbackMdx locale={locale} title={title} />;
}

export function ClassDetailPage({ locale, slug }: { locale: Locale; slug: string }) {
  const record = getClassRecord(locale, slug);
  if (!record) return null;
  const text = detailCopy[locale];
  const records = classRecords[locale];
  const currentIndex = records.findIndex((item) => item.slug === slug);
  const nextSlug = records[(currentIndex + 1) % records.length]?.slug ?? "overview";
  return <SiteFrame locale={locale} currentPath={`/classes/${slug}`}><article className="reference-article detail-article"><nav className="breadcrumbs"><Link href={localizedPath(locale, "/")}>{text.home}</Link><span>›</span><Link href={localizedPath(locale, "/classes")}>{text.classes}</Link><span>›</span><span>{record.title}</span></nav><div className="article-media"><img src={record.image} alt={record.title} /><span>{text.media}</span></div><div className="detail-heading-row"><div><span className="article-kicker">{record.tag ?? text.confidence}</span><h1>{record.title}</h1><p className="article-lede">{record.description}</p></div><div className="detail-mark">MH<br /><small>GUIDE</small></div></div><div className="article-meta"><span>{text.snapshot}</span><span>•</span><span>{text.source}</span></div><div className="ad-slot" aria-hidden="true" /><div className="mdx-content"><MdxBody locale={locale} slug={slug} title={record.title} /></div><div className="article-end-nav"><Link href={localizedPath(locale, "/classes")}>← {text.back}</Link><Link href={localizedPath(locale, `/classes/${nextSlug}`)}>{text.next} →</Link></div></article></SiteFrame>;
}

function FallbackMdx({ locale, title }: { locale: Locale; title: string }) {
  const text = locale === "zh" ? { heading: `${title}参考`, body: "这是一份基于官方研究资料的职业参考页。具体职业名称、技能列表与平衡数据待确认。", subheading: "已确认信息", items: ["官方 Steam 页面列出 6 个可玩职业。", "调研资料提到双武器姿态、天赋树、宝石词缀与主动技能。", "逐职业路线将在官方信息完成核验后补充。"] } : { heading: `${title} Reference`, body: "This reference page uses the official research brief. Individual class names, skill lists, and balance values are 待确认.", subheading: "Confirmed in the brief", items: ["The official Steam page lists 6 playable classes.", "The research brief mentions dual weapon stances, talent trees, gem affixes, and active skills.", "Class-specific routes will be added after official details are verified."] };
  return <><h2 className="mdx-h2">{text.heading}</h2><p>{text.body}</p><h3 className="mdx-h3">{text.subheading}</h3><ul>{text.items.map((item) => <li key={item}>{item}</li>)}</ul></>;
}

export const RaceDetailPage = ClassDetailPage;
