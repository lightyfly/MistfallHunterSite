export type Locale = "en" | "zh";

export const supportedLocales: Locale[] = ["en", "zh"];

export function normalizeLocale(value?: string): Locale {
  return value === "zh" ? "zh" : "en";
}

export function localizedPath(locale: Locale, path = "/") {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (locale === "zh") return cleanPath === "/" ? "/zh" : `/zh${cleanPath}`;
  return cleanPath;
}

export function pathWithoutLocale(path: string) {
  return path.startsWith("/zh") ? path.slice(3) || "/" : path;
}

export const navItems = [
  { label: "Races", path: "/races", key: "races" },
  { label: "Bosses", path: "/bosses", key: "bosses" },
  { label: "Guides", path: "/beginner-guide", key: "guides" },
  { label: "Codes", path: "/codes", key: "codes" },
  { label: "Tier List", path: "/tier-list", key: "tierList" },
  { label: "Updates", path: "/updates", key: "updates" },
] as const;

export const siteCopy = {
  en: {
    nav: { races: "Races", bosses: "Bosses", guides: "Guides", codes: "Codes", tierList: "Tier List", updates: "Updates", language: "中文" },
    home: {
      eyebrow: "Fan-Made Community Wiki",
      intro: "Fan-made VV: ULTIMATUM reference for Roblox players. Use it to compare race progression, check boss drops, review build notes, and track the latest community-checked codes snapshot.",
      stats: ["🎮 Launched Jun 5", "🔄 Updated Aug 10", "⚔️ 3 Races", "📈 Lv100 Cap", "✨ 130+ Skills"],
      ctas: ["Start Beginner Guide", "Compare Races", "Check Codes Snapshot"],
      latest: "Latest Game Updates", startHere: "Start Here", journey: "Your VV Ultimatum Journey", popular: "Popular Pages", trending: "Trending Now", about: "What is VV: ULTIMATUM?", explore: "Explore the Wiki", faq: "Frequently Asked Questions", route: "Need a Route for VV: ULTIMATUM?",
    },
    rail: { navigation: "Wiki Navigation", codeSnapshot: "Codes Snapshot", updated: "Updated", viewCodes: "View all codes →", play: "Play VV: ULTIMATUM on Roblox", playCta: "Play on Roblox" },
    footer: { note: "Non-official fan wiki. Made by players, for players.", title: "VV Ultimatum Wiki", description: "VV Ultimatum Wiki is an independent fan-built guide hub covering progression routes, races, bosses, builds, and essential game knowledge for new and veteran players alike.", quickLinks: "Quick Links", guides: "Guides", legal: "Legal", moreGames: "More Games" },
  },
  zh: {
    nav: { races: "种族", bosses: "首领", guides: "指南", codes: "兑换码", tierList: "强度榜", updates: "更新", language: "EN" },
    home: {
      eyebrow: "玩家共建 Wiki",
      intro: "面向 Roblox 玩家打造的 VV: ULTIMATUM 中文参考站。对比种族成长路线、查询首领掉落、查看配装笔记，并跟进社区核验过的兑换码快照。",
      stats: ["🎮 6 月 5 日上线", "🔄 8 月 10 日更新", "⚔️ 3 个种族", "📈 等级上限 100", "✨ 130+ 技能"],
      ctas: ["开始新手指南", "对比种族", "查看兑换码快照"],
      latest: "最新游戏更新", startHere: "从这里开始", journey: "你的 VV Ultimatum 旅程", popular: "热门页面", trending: "正在关注", about: "VV: ULTIMATUM 是什么？", explore: "探索 Wiki", faq: "常见问题", route: "需要一条 VV: ULTIMATUM 路线？",
    },
    rail: { navigation: "Wiki 导航", codeSnapshot: "兑换码快照", updated: "已更新", viewCodes: "查看全部兑换码 →", play: "在 Roblox 上游玩 VV: ULTIMATUM", playCta: "在 Roblox 游玩" },
    footer: { note: "非官方玩家 Wiki。由玩家制作，为玩家服务。", title: "VV Ultimatum Wiki", description: "VV Ultimatum Wiki 是一个独立的玩家指南站，整理成长路线、种族、首领、配装，以及新老玩家需要掌握的核心机制。", quickLinks: "快速链接", guides: "指南", legal: "法律信息", moreGames: "更多游戏" },
  },
} as const;

export const homeUpdates = [
  { tone: "major", date: "Aug 10", title: "Aug 10 Major Update — Dungeons, Talisman Equipment, New Shikai/Res/Schrift, Code GOODMORNING" },
  { tone: "minor", date: "Aug 9", title: "New Build Confirmed (Aug 9) — No New Code, No New Core Entities on Trello" },
  { tone: "minor", date: "Jul 30", title: "19th Release (July 30): Build Confirmed — No New Code, No New Core Entities on Trello" },
] as const;

export const journeySteps = [
  { number: "1", title: "Learn the Basics", description: "Controls, combat system, quests, and everything you need from your first login.", href: "/beginner-guide" },
  { number: "2", title: "Pick Your Race", description: "Compare Shinigami, Quincy, and Hollow to find the best fit for your playstyle.", href: "/races/best-race" },
  { number: "3", title: "Choose Your Path", description: "Explore each race's unique progression — Shikai, Resurreccion, Schrift, and evolution paths.", href: "/races" },
  { number: "4", title: "Gear Up & Optimize", description: "120+ equipment items, 70+ Spirit Charms, and skill essences — compare options before spending tokens or rerolls.", href: "/equipment" },
] as const;

export const popularPages = [
  { tag: "Beginner", title: "Beginner Guide", description: "A practical starting path from your first login through the early combat and progression systems.", href: "/beginner-guide", image: "/images/highlight-trailer.jpg" },
  { tag: "Updated", title: "Codes Snapshot", description: "Community-checked codes snapshot with rewards and redemption notes.", href: "/codes", image: "/images/highlight-devlog.jpg" },
  { tag: "Updated", title: "Equipment Database", description: "120+ items across 6 slots (incl. new Talisman) — complete gear database with stats, rarity, and sources.", href: "/equipment", image: "/images/game-overview.png" },
  { tag: "Popular", title: "Which Race Should You Pick?", description: "Shinigami, Quincy, or Hollow — compare all three and find your perfect playstyle.", href: "/races/best-race", image: "/images/races-hollow.png" },
  { tag: "New System", title: "Ascension System (LVL 100)", description: "New endgame system — permanent stat bonuses across all character slots at LVL 100. No progress reset.", href: "/ascension", image: "/images/official/roblox/game-thumb-768x432.png" },
  { tag: "New System", title: "Skill Shrines Guide", description: "Two one-time shrines — Upgrade Shrine (+2 skill levels, no SP) and Refund Shrine (reset one skill).", href: "/shrines", image: "/images/game-overview.png" },
] as const;

export const exploreCards = [
  ["Race Guides", "Guides for Shinigami, Quincy, and Hollow with unlock requirements and progression routes.", "/races"],
  ["Boss Strategies", "Boss pages with confirmed drops, route notes, and fight details separated from pending mechanics.", "/bosses"],
  ["Build Optimization", "Build notes, stat allocation ideas, and Spirit Charm pairings for different playstyles.", "/builds"],
  ["Area Guides", "Complete zone breakdowns with level ranges, key NPCs, quests, and hidden areas.", "/maps"],
  ["Clan Database", "Full clan lists with rarity, stat buffs, and recommendations for each race.", "/clans"],
  ["Active Codes", "Community-checked codes with redemption instructions, rewards, and source notes.", "/codes"],
  ["Combat Mechanics", "Master blocking, parrying, posture breaks, and the red-attack counter system.", "/combat"],
  ["Progression Paths", "Step-by-step walkthroughs for Shikai, Resurreccion, Schrift, and more.", "/beginner-guide"],
  ["Trait Rankings", "All 13 Hollow traits ranked with detailed pros, cons, and build synergies.", "/tier-list/best-hollow-traits"],
] as const;

export const faqItems = [
  ["What is VV: ULTIMATUM?", "VV: ULTIMATUM is a free-to-play fighting RPG on Roblox based on the Bleach anime. You choose one of three races — Shinigami, Quincy, or Hollow — each with unique progression, combat abilities, and evolution systems."],
  ["Which race should I pick?", "Shinigami is the structured sword path, Quincy favors ranged pressure, and Hollow rewards players who enjoy evolution and trait choices."],
  ["Are there codes for VV: ULTIMATUM?", "Yes. Check the Codes Snapshot for the latest community-checked rewards and redemption notes."],
  ["How do I unlock Shikai / Resurreccion / Schrift?", "Each race has its own progression milestone. Start with the race guide and follow the linked unlock walkthrough."],
  ["Can I change my race?", "Faction changes are possible but intentionally rare; most players use a wipe item when they want to restart a race."],
  ["How does the EXP system work?", "Quests, activities, enemy drops, and race-specific systems all contribute to your route toward the level cap."],
  ["I'm a Hollow — should I press L to evolve?", "Press L only when your current evolution requirements are met and you are ready to commit to the next stage."],
  ["Can I play VV: ULTIMATUM on mobile?", "Yes, but keyboard-focused mechanics can feel different on touch controls. Use the mobile guide for the recommended layout."],
] as const;

export const railSections = [
  ["Getting Started", "14"], ["Races", "6"], ["Bosses", "29"], ["Maps & Areas", "7"], ["Clans", "3"], ["Builds & Skills", "9"], ["Systems & Items", "20"], ["Gauntlets", "6"], ["Tier Lists", "7"], ["Progression", "13"],
] as const;

export type RaceRecord = {
  slug: string;
  title: string;
  tag?: string;
  description: string;
  image: string;
};

export const raceRecords: Record<Locale, RaceRecord[]> = {
  en: [
    { slug: "shinigami", title: "Shinigami Guide", description: "Zanpakuto evolution, Shikai unlock, and Soul Reaper progression.", image: "/images/official/roblox/game-thumb-768x432.png" },
    { slug: "quincy", title: "Quincy Guide", description: "Spirit weapons, Schrift unlock, and Quincy progression.", image: "/images/official/roblox/game-thumb-768x432.png" },
    { slug: "hollow", title: "Hollow Guide", description: "Hollow evolution, Resurreccion, and trait system.", image: "/images/official/roblox/game-thumb-768x432.png" },
    { slug: "best-race", title: "Best Race to Choose", tag: "Popular", description: "Compare all three races and find the best pick for your playstyle.", image: "/images/races-hollow.png" },
    { slug: "vastocar", title: "Vastocar Guide", tag: "New", description: "Vasto Lorde → Arrancar optimal path with 4 Trait slots.", image: "/images/game-overview.png" },
    { slug: "arrancar", title: "Arrancar Guide", tag: "New", description: "Final Hollow evolution — mask removal, weapons, and Resurreccion.", image: "/images/official/roblox/game-thumb-768x432.png" },
  ],
  zh: [
    { slug: "shinigami", title: "死神指南", description: "斩魄刀进化、始解解锁与死神成长路线。", image: "/images/official/roblox/game-thumb-768x432.png" },
    { slug: "quincy", title: "灭却师指南", description: "灵弓武器、圣文字解锁与灭却师成长路线。", image: "/images/official/roblox/game-thumb-768x432.png" },
    { slug: "hollow", title: "虚指南", description: "虚的进化、归刃与特性系统。", image: "/images/official/roblox/game-thumb-768x432.png" },
    { slug: "best-race", title: "最佳种族选择", tag: "热门", description: "对比三个种族，找到适合你的玩法。", image: "/images/races-hollow.png" },
    { slug: "vastocar", title: "瓦斯托卡指南", tag: "新增", description: "从瓦斯托·领主到破面，并规划 4 个特性槽。", image: "/images/game-overview.png" },
    { slug: "arrancar", title: "破面指南", tag: "新增", description: "虚的最终进化——摘面具、武器与归刃。", image: "/images/official/roblox/game-thumb-768x432.png" },
  ],
};

export function getRaceRecord(locale: Locale, slug: string) {
  return raceRecords[locale].find((race) => race.slug === slug) ?? null;
}
