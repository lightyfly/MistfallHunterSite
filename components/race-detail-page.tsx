import Link from "next/link";
import { createElement } from "react";
import type { AnchorHTMLAttributes, BlockquoteHTMLAttributes, HTMLAttributes } from "react";
import { getRaceMdx } from "../content";
import { getRaceRecord, localizedPath, type Locale } from "../lib/site-data";
import { SiteFrame } from "./site-frame";

const detailCopy = {
  en: { home: "Home", races: "Races", media: "Official media", confidence: "Community checked", back: "Back to Races", next: "Next guide" },
  zh: { home: "首页", races: "种族", media: "官方素材", confidence: "社区核验", back: "返回种族总览", next: "下一篇指南" },
} as const;

function MdxLink({ children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) { return <a {...props}>{children}</a>; }
function MdxHeadingTwo({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) { return <h2 className="mdx-h2" {...props}>{children}</h2>; }
function MdxHeadingThree({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) { return <h3 className="mdx-h3" {...props}>{children}</h3>; }
function MdxQuote({ children, ...props }: BlockquoteHTMLAttributes<HTMLQuoteElement>) { return <blockquote className="mdx-quote" {...props}>{children}</blockquote>; }
const mdxComponents = { a: MdxLink, h2: MdxHeadingTwo, h3: MdxHeadingThree, blockquote: MdxQuote };

function MdxBody({ locale, slug, title }: { locale: Locale; slug: string; title: string }) {
  const MdxComponent = getRaceMdx(locale, slug);
  return MdxComponent ? createElement(MdxComponent, { components: mdxComponents }) : <FallbackMdx locale={locale} title={title} />;
}

export function RaceDetailPage({ locale, slug }: { locale: Locale; slug: string }) {
  const record = getRaceRecord(locale, slug);
  if (!record) return null;
  const text = detailCopy[locale];
  const currentIndex = ["shinigami", "quincy", "hollow"].indexOf(slug);
  const nextSlug = currentIndex >= 0 ? ["shinigami", "quincy", "hollow"][(currentIndex + 1) % 3] : "shinigami";
  return <SiteFrame locale={locale} currentPath={`/races/${slug}`}><article className="reference-article detail-article"><nav className="breadcrumbs"><Link href={localizedPath(locale, "/")}>{text.home}</Link><span>›</span><Link href={localizedPath(locale, "/races")}>{text.races}</Link><span>›</span><span>{record.title}</span></nav><div className="article-media"><img src={record.image} alt={record.title} /><span>{text.media}</span></div><div className="detail-heading-row"><div><span className="article-kicker">{record.tag ?? text.confidence}</span><h1>{record.title}</h1><p className="article-lede">{record.description}</p></div><div className="detail-mark">VV<br /><small>GUIDE</small></div></div><div className="article-meta"><span>Updated Aug 10, 2026</span><span>•</span><span>Source-labeled route notes</span></div><div className="ad-slot" aria-hidden="true" /><div className="mdx-content"><MdxBody locale={locale} slug={slug} title={record.title} /></div><div className="article-end-nav"><Link href={localizedPath(locale, "/races")}>← {text.back}</Link><Link href={localizedPath(locale, `/races/${nextSlug}`)}>{text.next} →</Link></div></article></SiteFrame>;
}

function FallbackMdx({ locale, title }: { locale: Locale; title: string }) {
  return <><h2 className="mdx-h2">{locale === "zh" ? `${title}路线` : `${title} Route`}</h2><p>{locale === "zh" ? "这是一份社区整理的种族参考页。结合游戏内任务、技能树与装备系统，规划你的成长路线。" : "This community reference page maps the core progression for this race. Use the in-game quests, skill trees, and equipment systems together when planning your build."}</p><h3 className="mdx-h3">{locale === "zh" ? "路线建议" : "Route Notes"}</h3><ul><li>{locale === "zh" ? "先完成基础任务，熟悉移动、格挡与反击。" : "Finish the early quests before spending rerolls."}</li><li>{locale === "zh" ? "在花费重置道具前，确认自己想走的战斗距离。" : "Decide your preferred combat range before committing to a reset."}</li><li>{locale === "zh" ? "关注更新页，版本变化可能会调整解锁要求。" : "Check the Updates page when a new build changes requirements."}</li></ul></>;
}
