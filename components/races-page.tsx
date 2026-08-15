import Link from "next/link";
import { localizedPath, raceRecords, type Locale } from "../lib/site-data";
import { SiteFrame } from "./site-frame";

const copy = {
  en: {
    breadcrumb: "Races",
    title: "Races Overview",
    lede: "Choose your path — Shinigami, Quincy, or Hollow. Each race offers unique mechanics, progression systems, and combat styles.",
    intro: "In VV: ULTIMATUM, your race determines your entire playstyle. Shinigami wield Zanpakuto with Shikai and Bankai progression. Quincy fight at range with spirit weapons and unlock Schrift abilities. Hollow evolve through monster forms and collect powerful traits. Each race has distinct strengths, progression milestones, and endgame goals. Use the guides below to learn each race in depth.",
    warning: "⚠️ Faction Defection — Changing Your Race",
    warningCopy: "It is possible to defect from your current faction, but the requirements are extreme: you must hold a high-ranking officer rank to initiate a defection. For most players, using Prayer Beads to wipe is the more practical way to switch races.",
    guides: "Races Guides",
    media: "Official media",
    read: "Read more",
  },
  zh: {
    breadcrumb: "种族",
    title: "种族总览",
    lede: "选择你的道路——死神、灭却师或虚。每个种族都有独特机制、成长系统与战斗风格。",
    intro: "在 VV: ULTIMATUM 中，种族会决定你的整体玩法。死神使用斩魄刀，沿着始解与卍解成长；灭却师以远程灵弓作战并解锁圣文字；虚则通过怪物形态进化并收集强力特性。每个种族都有自己的优势、成长节点与后期目标。",
    warning: "⚠️ 阵营叛离——如何更换种族",
    warningCopy: "你可以离开当前阵营，但要求非常苛刻：需要先达到高阶军官身份。对大多数玩家来说，使用祈祷珠重置会是更实际的换种族方式。",
    guides: "种族指南",
    media: "官方素材",
    read: "阅读更多",
  },
} as const;

export function RacesPage({ locale }: { locale: Locale }) {
  const text = copy[locale];
  return <SiteFrame locale={locale} currentPath="/races"><article className="reference-article"><nav className="breadcrumbs"><Link href={localizedPath(locale, "/")}>{locale === "zh" ? "首页" : "Home"}</Link><span>›</span><span>{text.breadcrumb}</span></nav><div className="article-media"><img src="/images/official/roblox/game-thumb-768x432.png" alt="All races in VV Ultimatum — official game artwork" /><span>{text.media}</span></div><h1>{text.title}</h1><p className="article-lede">{text.lede}</p><div className="ad-slot" aria-hidden="true" /><div className="article-copy"><p>{text.intro}</p><p className="warning-copy">{text.warning}</p><p>{text.warningCopy}</p><h2>{text.guides}</h2><div className="guide-grid">{raceRecords[locale].map((race) => <Link className="guide-card" href={localizedPath(locale, `/races/${race.slug}`)} key={race.slug}><div className="guide-card-copy">{race.tag ? <span className="badge">{race.tag}</span> : null}<h3>{race.title}</h3><p>{race.description}</p><span className="read-more">{text.read} <b>→</b></span></div></Link>)}</div></div></article></SiteFrame>;
}
