export type Locale = "en" | "ru" | "de" | "pt-br" | "zh";

export const supportedLocales: Locale[] = ["en", "ru", "de", "pt-br", "zh"];

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  ru: "RU",
  de: "DE",
  "pt-br": "PT-BR",
  zh: "中文",
};

export function normalizeLocale(value?: string): Locale {
  return supportedLocales.includes(value as Locale) ? (value as Locale) : "en";
}

export function localizedPath(locale: Locale, path = "/") {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (locale === "en") return cleanPath;
  return cleanPath === "/" ? `/${locale}` : `/${locale}${cleanPath}`;
}

export function pathWithoutLocale(path: string) {
  const prefix = supportedLocales
    .filter((locale) => locale !== "en")
    .sort((a, b) => b.length - a.length)
    .find((locale) => path === `/${locale}` || path.startsWith(`/${locale}/`));
  return prefix ? path.slice(prefix.length + 1) || "/" : path;
}

export const officialLinks = {
  website: "https://mistfallhunter.com/",
  steam: "https://store.steampowered.com/app/3282300/Mistfall_Hunter/",
  steamCommunity: "https://steamcommunity.com/app/3282300/",
  discord: "https://discord.com/servers/mistfall-hunter-official-1274982556743499877",
  x: "https://x.com/MistfallHunter",
  youtube: "https://www.youtube.com/@MistfallHunter",
  trailer: "https://www.youtube.com/watch?v=YiMyw3qVnVE",
} as const;

export const seo = {
  title: "Mistfall Hunter Wiki — Classes, Builds & Extraction Guides",
  description: "Independent Mistfall Hunter wiki for beginner guides, class builds, extraction tips, boss strategies, loot routes, gear planning, and the latest game updates.",
  keywords: "Mistfall Hunter, Steam, wiki, beginner guide, classes, builds, extraction ARPG, loot, PvPvE",
  homeTitle: "Mistfall Hunter Wiki — Extraction ARPG, Classes & Builds",
  homeDescription: "Master Mistfall Hunter, the dark fantasy extraction ARPG. Find beginner guides, class builds, loot routes, boss tactics, gear tips, and current game updates.",
} as const;

export const localizedSeo: Record<Locale, { title: string; description: string }> = {
  en: { title: seo.homeTitle, description: seo.homeDescription },
  ru: { title: "Вики Mistfall Hunter — гайды, классы и билды", description: "Независимая вики Mistfall Hunter: гайд новичка, классы, билды, extraction, добыча и последние обновления." },
  de: { title: "Mistfall-Hunter-Wiki — Anfänger-Guide, Klassen & Builds", description: "Unabhängiges Mistfall-Hunter-Wiki mit Einsteiger-Guide, Klassen, Builds, Extraction-Tipps, Beute und Updates." },
  "pt-br": { title: "Wiki de Mistfall Hunter — Guia para Iniciantes, Classes e Builds", description: "Wiki independente de Mistfall Hunter com guia para iniciantes, classes, builds, extração, saque e atualizações." },
  zh: { title: "Mistfall Hunter Wiki — 新手指南、职业与配装", description: "Mistfall Hunter 独立玩家 Wiki：新手指南、职业、配装、撤离、战利品与最新更新。" },
};

export const navItems = [
  { label: "Classes", path: "/classes", key: "classes" },
  { label: "Bosses", path: "/bosses", key: "bosses" },
  { label: "Guides", path: "/beginner-guide", key: "guides" },
  { label: "Codes", path: "/codes", key: "codes" },
  { label: "Tier List", path: "/tier-list", key: "tierList" },
  { label: "Updates", path: "/updates", key: "updates" },
] as const;

type NavKey = (typeof navItems)[number]["key"];
type RailSectionKey = "gettingStarted" | "classes" | "bosses" | "maps" | "builds" | "systems" | "updates" | "overview" | "detail" | "codes";

type HomeCopy = {
  eyebrow: string;
  intro: string;
  stats: string[];
  ctas: string[];
  latest: string;
  browseUpdates: string;
  startHere: string;
  journey: string;
  popular: string;
  trending: string;
  about: string;
  explore: string;
  exploreDescription: string;
  faq: string;
  faqDescription: string;
  route: string;
  aboutParagraphs: string[];
  aboutStats: Array<{ label: string; value: string }>;
  aboutCta: string;
  finalDescription: string;
  finalPrimary: string;
  finalSecondary: string;
  mediaLabel: string;
};

type SiteCopy = {
  nav: Record<NavKey, string> & { language: string };
  home: HomeCopy;
  rail: {
    navigation: string;
    codeSnapshot: string;
    updated: string;
    viewCodes: string;
    code: string;
    codeDescription: string;
    play: string;
    playCta: string;
    gameDescription: string;
    sections: Array<{ key: RailSectionKey; label: string; count: string }>;
    overview: string;
    detail: string;
    codes: string;
    updates: string;
  };
  footer: {
    note: string;
    title: string;
    description: string;
    quickLinks: string;
    guides: string;
    legal: string;
    website: string;
    steam: string;
    discord: string;
    youtube: string;
    community: string;
    privacy: string;
    terms: string;
    disclaimer: string;
  };
};

const railSections = (labels: Record<Exclude<RailSectionKey, "overview" | "detail" | "codes">, string>, overview: string, detail: string, codes: string, updates: string) => [
  { key: "gettingStarted" as const, label: labels.gettingStarted, count: "待确认" },
  { key: "classes" as const, label: labels.classes, count: "6" },
  { key: "bosses" as const, label: labels.bosses, count: "待确认" },
  { key: "maps" as const, label: labels.maps, count: "待确认" },
  { key: "builds" as const, label: labels.builds, count: "待确认" },
  { key: "systems" as const, label: labels.systems, count: "待确认" },
  { key: "updates" as const, label: labels.updates, count: "待确认" },
  { key: "overview" as const, label: overview, count: "" },
  { key: "detail" as const, label: detail, count: "" },
  { key: "codes" as const, label: codes, count: "" },
  { key: "updates" as const, label: updates, count: "" },
];

export const siteCopy: Record<Locale, SiteCopy> = {
  en: {
    nav: { classes: "Classes", bosses: "Bosses", guides: "Guides", codes: "Codes", tierList: "Tier List", updates: "Updates", language: "Languages" },
    home: {
      eyebrow: "Fan-Made Community Wiki",
      intro: "Mistfall Hunter is a dark fantasy third-person PvPvE extraction ARPG where every run is a gamble. Build your class, fight corrupted monsters and rival Gyldhunters, then extract your loot before the mist takes everything.",
      stats: ["🎮 Launched Jul 29, 2026", "🔄 Updated Aug 12, 2026", "👥 14,941 Players Online · Aug 13 snapshot", "⚔️ 6 Playable Classes"],
      ctas: ["Start Beginner Guide", "Compare Classes", "Check Active Codes"],
      latest: "Latest Official Updates", browseUpdates: "Browse Official Updates ↗", startHere: "Start Here", journey: "Your Mistfall Hunter Journey", popular: "Start with the Facts", trending: "Featured References", about: "What is Mistfall Hunter?", explore: "Explore the Wiki", exploreDescription: "Official-source reference pages for extraction runs, classes, gear, community links, and current updates.", faq: "Frequently Asked Questions", faqDescription: "Answers based on the official pages and the research snapshot dated Aug 13, 2026.", route: "Ready to Master Mistfall Hunter?",
      aboutParagraphs: ["Mistfall Hunter is a third-person PvPvE extraction ARPG set in a dark fantasy world consumed by the Gyldenmist. Scavenge relics, battle corrupted creatures and rival Gyldhunters, then reach a Returner Woodling before death strips away your haul.", "Six classes, dual weapon stances, talent trees, gem affixes, and active skills let every Gyldhunter shape a personal combat style. Run solo or in a three-player squad, outplay threats with steel and magic, and turn each extraction into progress."],
      aboutStats: [{ label: "Developer", value: "Bellring Games" }, { label: "Publisher", value: "Skystone Games" }, { label: "Platform", value: "Steam / Xbox Series X|S / PS5" }, { label: "Genre", value: "Dark Fantasy PvPvE Extraction ARPG" }, { label: "Players Online", value: "14,941 · Aug 13, 2026 snapshot" }, { label: "Steam Reviews", value: "12,183 Mixed" }, { label: "Players Joined", value: "1M+ Gyldhunters" }, { label: "Playable Classes", value: "6" }, { label: "Max Squad Size", value: "3 Players" }],
      aboutCta: "Explore All Guides", finalDescription: "From your first extraction to high-risk fights against Mist Lords and rival Gyldhunters, this community wiki helps you make every run count.", finalPrimary: "Read the Beginner Guide", finalSecondary: "Play on Steam", mediaLabel: "Official media",
    },
    rail: { navigation: "Wiki Navigation", codeSnapshot: "Codes Snapshot", updated: "Snapshot", viewCodes: "View code status →", code: "暂无", codeDescription: "暂无官方可验证兑换码", play: "Official Mistfall Hunter artwork", playCta: "Open official site", gameDescription: "Dark fantasy PvPvE extraction ARPG", sections: railSections({ gettingStarted: "Getting Started", classes: "Classes", bosses: "Bosses", maps: "Maps & Loot", builds: "Builds", systems: "Systems & Gear", updates: "Official Updates" }, "Class Overview", "Class Detail", "Codes", "Updates"), overview: "Overview", detail: "Class Detail", codes: "Codes", updates: "Updates" },
    footer: { note: "Independent fan wiki. Official sources are linked for verification.", title: "Mistfall Hunter Wiki", description: "Mistfall Hunter Wiki is an independent fan-made guide hub for Bellring Games' dark fantasy extraction ARPG. It helps Gyldhunters learn the PvPvE loop, choose a class, optimize gear, and survive each extraction. It is not affiliated with Bellring Games or Skystone Games.", quickLinks: "Official Links", guides: "Guides", legal: "Legal", website: "Official Website", steam: "Steam Store", discord: "Official Discord", youtube: "Official YouTube", community: "Steam Community Hub", privacy: "Privacy Policy", terms: "Terms of Service", disclaimer: "Not affiliated with Bellring Games or Skystone Games." },
  },
  ru: {
    nav: { classes: "Классы", bosses: "Боссы", guides: "Гайды", codes: "Коды", tierList: "Тир-лист", updates: "Обновления", language: "Языки" },
    home: {
      eyebrow: "Фанатская вики сообщества",
      intro: "Mistfall Hunter — мрачная фэнтезийная PvPvE extraction ARPG от третьего лица, где каждый рейд становится ставкой. Выберите класс, сражайтесь с искажёнными монстрами и соперниками-Gyldhunter, а затем успейте вынести добычу до того, как туман заберёт всё.",
      stats: ["🎮 Релиз 29 июля 2026", "🔄 Обновлено 12 августа 2026", "👥 14 941 игрок онлайн · снимок 13 августа", "⚔️ 6 игровых классов"],
      ctas: ["Начать гайд новичка", "Сравнить классы", "Проверить коды"], latest: "Последние официальные обновления", browseUpdates: "Все официальные обновления ↗", startHere: "Начать здесь", journey: "Ваш путь в Mistfall Hunter", popular: "Начните с фактов", trending: "Избранные материалы", about: "Что такое Mistfall Hunter?", explore: "Исследовать вики", exploreDescription: "Страницы на основе официальных источников: рейды, классы, снаряжение, сообщество и обновления.", faq: "Частые вопросы", faqDescription: "Ответы по официальным страницам и исследовательскому снимку от 13 августа 2026 года.", route: "Готовы освоить Mistfall Hunter?",
      aboutParagraphs: ["Mistfall Hunter — PvPvE extraction ARPG от третьего лица в мрачном фэнтезийном мире, поглощённом Gyldenmist. Собирайте реликвии, сражайтесь с искажёнными существами и соперниками-Gyldhunter, а затем доберитесь до Returner Woodling, пока смерть не отняла добычу.", "Шесть классов, две стойки оружия, деревья талантов, самоцветные аффиксы и активные навыки позволяют каждому Gyldhunter создать свой стиль боя. Играйте в одиночку или в отряде из трёх игроков и превращайте каждый выход из рейда в прогресс."],
      aboutStats: [{ label: "Разработчик", value: "Bellring Games" }, { label: "Издатель", value: "Skystone Games" }, { label: "Платформы", value: "Steam / Xbox Series X|S / PS5" }, { label: "Жанр", value: "Мрачная фэнтезийная PvPvE extraction ARPG" }, { label: "Онлайн", value: "14 941 · снимок 13 августа 2026" }, { label: "Отзывы Steam", value: "12 183 · Mixed" }, { label: "Игроков присоединилось", value: "1M+ Gyldhunters" }, { label: "Игровых классов", value: "6" }, { label: "Размер отряда", value: "3 игрока" }],
      aboutCta: "Все гайды", finalDescription: "От первой эвакуации до рискованных боёв с Mist Lords и соперниками-Gyldhunter — эта фанатская вики помогает сделать каждый рейд значимым.", finalPrimary: "Гайд новичка", finalSecondary: "Играть в Steam", mediaLabel: "Официальный материал",
    },
    rail: { navigation: "Навигация вики", codeSnapshot: "Снимок кодов", updated: "Снимок", viewCodes: "Статус кодов →", code: "暂无", codeDescription: "Официально подтверждённых кодов пока нет", play: "Официальный арт Mistfall Hunter", playCta: "Открыть официальный сайт", gameDescription: "Мрачная фэнтезийная PvPvE extraction ARPG", sections: railSections({ gettingStarted: "Начало", classes: "Классы", bosses: "Боссы", maps: "Карты и добыча", builds: "Билды", systems: "Системы и снаряжение", updates: "Официальные обновления" }, "Обзор классов", "Страница класса", "Коды", "Обновления"), overview: "Обзор", detail: "Страница класса", codes: "Коды", updates: "Обновления" },
    footer: { note: "Независимая фанатская вики. Официальные источники доступны для проверки.", title: "Вики Mistfall Hunter", description: "Mistfall Hunter Wiki — независимый фанатский справочник по мрачной фэнтезийной extraction ARPG от Bellring Games. Здесь собраны материалы о PvPvE-цикле, классах, снаряжении и выживании в рейдах. Вики не связана с Bellring Games или Skystone Games.", quickLinks: "Официальные ссылки", guides: "Гайды", legal: "Правовая информация", website: "Официальный сайт", steam: "Магазин Steam", discord: "Официальный Discord", youtube: "Официальный YouTube", community: "Сообщество Steam", privacy: "Политика конфиденциальности", terms: "Условия использования", disclaimer: "Не связана с Bellring Games или Skystone Games." },
  },
  de: {
    nav: { classes: "Klassen", bosses: "Bosse", guides: "Guides", codes: "Codes", tierList: "Tier-Liste", updates: "Updates", language: "Sprachen" },
    home: {
      eyebrow: "Fan-Wiki der Community",
      intro: "Mistfall Hunter ist ein düsteres Third-Person-PvPvE-Extraction-ARPG, in dem jeder Lauf ein Risiko ist. Wähle deine Klasse, kämpfe gegen verdorbene Monster und rivalisierende Gyldhunter und sichere deine Beute, bevor der Nebel alles verschlingt.",
      stats: ["🎮 Start 29. Juli 2026", "🔄 Aktualisiert 12. August 2026", "👥 14.941 Spieler online · Snapshot 13. August", "⚔️ 6 spielbare Klassen"],
      ctas: ["Einsteiger-Guide starten", "Klassen vergleichen", "Aktive Codes prüfen"], latest: "Letzte offizielle Updates", browseUpdates: "Alle offiziellen Updates ↗", startHere: "Hier beginnen", journey: "Deine Mistfall-Hunter-Reise", popular: "Mit den Fakten starten", trending: "Ausgewählte Referenzen", about: "Was ist Mistfall Hunter?", explore: "Wiki erkunden", exploreDescription: "Referenzseiten aus offiziellen Quellen zu Extraction-Läufen, Klassen, Ausrüstung, Community und Updates.", faq: "Häufige Fragen", faqDescription: "Antworten auf Basis der offiziellen Seiten und des Recherche-Snapshots vom 13. August 2026.", route: "Bereit, Mistfall Hunter zu meistern?",
      aboutParagraphs: ["Mistfall Hunter ist ein Third-Person-PvPvE-Extraction-ARPG in einer düsteren Fantasy-Welt, die vom Gyldenmist verschlungen wird. Sammle Relikte, bekämpfe verdorbene Kreaturen und rivalisierende Gyldhunter und erreiche einen Returner Woodling, bevor der Tod deine Beute nimmt.", "Sechs Klassen, zwei Waffenhaltungen, Talentbäume, Edelstein-Affixe und aktive Skills geben jedem Gyldhunter einen eigenen Kampfstil. Spiele allein oder in einem Dreierteam und mache jeden erfolgreichen Extraction-Lauf zu Fortschritt."],
      aboutStats: [{ label: "Entwickler", value: "Bellring Games" }, { label: "Publisher", value: "Skystone Games" }, { label: "Plattformen", value: "Steam / Xbox Series X|S / PS5" }, { label: "Genre", value: "Düsteres PvPvE-Extraction-ARPG" }, { label: "Online-Spieler", value: "14.941 · Snapshot 13. Aug. 2026" }, { label: "Steam-Bewertungen", value: "12.183 · Mixed" }, { label: "Beigetretene Spieler", value: "1M+ Gyldhunters" }, { label: "Spielbare Klassen", value: "6" }, { label: "Max. Teamgröße", value: "3 Spieler" }],
      aboutCta: "Alle Guides erkunden", finalDescription: "Von deiner ersten Extraction bis zu riskanten Kämpfen gegen Mist Lords und rivalisierende Gyldhunter hilft dir dieses Fan-Wiki, jeden Lauf zu nutzen.", finalPrimary: "Einsteiger-Guide lesen", finalSecondary: "Auf Steam spielen", mediaLabel: "Offizielles Material",
    },
    rail: { navigation: "Wiki-Navigation", codeSnapshot: "Codes-Snapshot", updated: "Snapshot", viewCodes: "Code-Status →", code: "暂无", codeDescription: "暂无 offiziell bestätigte Codes", play: "Offizielles Mistfall-Hunter-Artwork", playCta: "Offizielle Website öffnen", gameDescription: "Düsteres PvPvE-Extraction-ARPG", sections: railSections({ gettingStarted: "Erste Schritte", classes: "Klassen", bosses: "Bosse", maps: "Karten und Beute", builds: "Builds", systems: "Systeme und Ausrüstung", updates: "Offizielle Updates" }, "Klassenübersicht", "Klassen-Detail", "Codes", "Updates"), overview: "Übersicht", detail: "Klassen-Detail", codes: "Codes", updates: "Updates" },
    footer: { note: "Unabhängiges Fan-Wiki. Offizielle Quellen sind zur Prüfung verlinkt.", title: "Mistfall-Hunter-Wiki", description: "Mistfall Hunter Wiki ist ein unabhängiger Fan-Leitfaden für Bellring Games' düsteres Extraction-ARPG. Die Seite erklärt den PvPvE-Loop, Klassen, Ausrüstung und sichere Extraction-Läufe. Sie ist nicht mit Bellring Games oder Skystone Games verbunden.", quickLinks: "Offizielle Links", guides: "Guides", legal: "Rechtliches", website: "Offizielle Website", steam: "Steam-Shop", discord: "Offizieller Discord", youtube: "Offizieller YouTube-Kanal", community: "Steam-Community", privacy: "Datenschutz", terms: "Nutzungsbedingungen", disclaimer: "Nicht mit Bellring Games oder Skystone Games verbunden." },
  },
  "pt-br": {
    nav: { classes: "Classes", bosses: "Chefes", guides: "Guias", codes: "Códigos", tierList: "Tier List", updates: "Atualizações", language: "Idiomas" },
    home: {
      eyebrow: "Wiki da comunidade feita por fãs",
      intro: "Mistfall Hunter é um extraction ARPG PvPvE de fantasia sombria em terceira pessoa, no qual cada incursão é uma aposta. Monte sua classe, enfrente monstros corrompidos e Gyldhunters rivais e extraia seu saque antes que a névoa leve tudo.",
      stats: ["🎮 Lançado em 29 jul. 2026", "🔄 Atualizado em 12 ago. 2026", "👥 14.941 jogadores online · snapshot de 13 ago.", "⚔️ 6 classes jogáveis"],
      ctas: ["Começar o guia para iniciantes", "Comparar classes", "Verificar códigos ativos"], latest: "Últimas atualizações oficiais", browseUpdates: "Ver todas as atualizações oficiais ↗", startHere: "Comece aqui", journey: "Sua jornada em Mistfall Hunter", popular: "Comece pelos fatos", trending: "Referências em destaque", about: "O que é Mistfall Hunter?", explore: "Explorar a wiki", exploreDescription: "Páginas baseadas em fontes oficiais sobre incursões, classes, equipamentos, comunidade e atualizações.", faq: "Perguntas frequentes", faqDescription: "Respostas baseadas nas páginas oficiais e no snapshot de pesquisa de 13 de agosto de 2026.", route: "Pronto para dominar Mistfall Hunter?",
      aboutParagraphs: ["Mistfall Hunter é um extraction ARPG PvPvE em terceira pessoa ambientado em um mundo de fantasia sombria consumido pelo Gyldenmist. Vasculhe relíquias, enfrente criaturas corrompidas e Gyldhunters rivais e alcance um Returner Woodling antes que a morte remova seu saque.", "Seis classes, duas posturas de arma, árvores de talentos, afixos de gemas e habilidades ativas permitem que cada Gyldhunter crie seu próprio estilo de combate. Jogue solo ou em um esquadrão de três jogadores e transforme cada extração em progresso."],
      aboutStats: [{ label: "Desenvolvedora", value: "Bellring Games" }, { label: "Publicadora", value: "Skystone Games" }, { label: "Plataformas", value: "Steam / Xbox Series X|S / PS5" }, { label: "Gênero", value: "Extraction ARPG PvPvE de fantasia sombria" }, { label: "Jogadores online", value: "14.941 · snapshot de 13 ago. 2026" }, { label: "Avaliações Steam", value: "12.183 · Mixed" }, { label: "Jogadores que entraram", value: "1M+ Gyldhunters" }, { label: "Classes jogáveis", value: "6" }, { label: "Tamanho máximo do grupo", value: "3 jogadores" }],
      aboutCta: "Explorar todos os guias", finalDescription: "Da sua primeira extração a lutas de alto risco contra Mist Lords e Gyldhunters rivais, esta wiki ajuda você a aproveitar cada incursão.", finalPrimary: "Ler o guia para iniciantes", finalSecondary: "Jogar na Steam", mediaLabel: "Mídia oficial",
    },
    rail: { navigation: "Navegação da wiki", codeSnapshot: "Snapshot de códigos", updated: "Snapshot", viewCodes: "Ver status dos códigos →", code: "暂无", codeDescription: "暂无 códigos oficialmente verificáveis", play: "Arte oficial de Mistfall Hunter", playCta: "Abrir site oficial", gameDescription: "Extraction ARPG PvPvE de fantasia sombria", sections: railSections({ gettingStarted: "Primeiros passos", classes: "Classes", bosses: "Chefes", maps: "Mapas e saque", builds: "Builds", systems: "Sistemas e equipamentos", updates: "Atualizações oficiais" }, "Visão geral das classes", "Detalhe da classe", "Códigos", "Atualizações"), overview: "Visão geral", detail: "Detalhe da classe", codes: "Códigos", updates: "Atualizações" },
    footer: { note: "Wiki independente feita por fãs. Links oficiais para conferência.", title: "Wiki de Mistfall Hunter", description: "Mistfall Hunter Wiki é um hub independente de guias de fãs para o extraction ARPG de fantasia sombria da Bellring Games. A página ajuda Gyldhunters com o ciclo PvPvE, classes, equipamentos e extrações. Não somos afiliados à Bellring Games ou à Skystone Games.", quickLinks: "Links oficiais", guides: "Guias", legal: "Legal", website: "Site oficial", steam: "Loja Steam", discord: "Discord oficial", youtube: "YouTube oficial", community: "Comunidade Steam", privacy: "Política de privacidade", terms: "Termos de uso", disclaimer: "Não afiliado à Bellring Games ou à Skystone Games." },
  },
  zh: {
    nav: { classes: "职业", bosses: "首领", guides: "指南", codes: "兑换码", tierList: "强度榜", updates: "更新", language: "EN" },
    home: {
      eyebrow: "玩家共建 Wiki",
      intro: "Mistfall Hunter 是一款黑暗奇幻第三人称 PvPvE 撤离 ARPG，每次出发都是一次下注。选择职业，对抗被腐化的怪物与敌对 Gyldhunter，并在迷雾夺走一切之前带着战利品撤离。",
      stats: ["🎮 2026 年 7 月 29 日上线", "🔄 2026 年 8 月 12 日更新", "👥 14,941 人在线 · 8 月 13 日快照", "⚔️ 6 个可玩职业"],
      ctas: ["开始新手指南", "对比职业", "查看兑换码状态"], latest: "最新官方更新", browseUpdates: "查看全部官方更新 ↗", startHere: "从这里开始", journey: "你的 Mistfall Hunter 旅程", popular: "先看已确认信息", trending: "精选参考", about: "Mistfall Hunter 是什么？", explore: "探索 Wiki", exploreDescription: "基于官方来源整理撤离、职业、装备、社区链接与版本更新资料。", faq: "常见问题", faqDescription: "依据官方页面与 2026 年 8 月 13 日调研快照整理。", route: "准备好掌握 Mistfall Hunter 了吗？",
      aboutParagraphs: ["Mistfall Hunter 是一款第三人称 PvPvE 撤离 ARPG，背景设定在被 Gyldenmist 吞噬的黑暗奇幻世界。搜寻遗物，对抗腐化生物与敌对 Gyldhunter，并在死亡夺走战利品前抵达 Returner Woodling。", "六个职业、双武器姿态、天赋树、宝石词缀和主动技能，让每位 Gyldhunter 都能塑造自己的战斗风格。你可以单人或三人小队行动，把每次成功撤离转化为成长。"],
      aboutStats: [{ label: "开发商", value: "Bellring Games" }, { label: "发行商", value: "Skystone Games" }, { label: "平台", value: "Steam / Xbox Series X|S / PS5" }, { label: "类型", value: "黑暗奇幻 PvPvE 撤离 ARPG" }, { label: "在线人数", value: "14,941 · 2026/08/13 快照" }, { label: "Steam 评价", value: "12,183 · Mixed" }, { label: "加入玩家", value: "1M+ Gyldhunters" }, { label: "可玩职业", value: "6" }, { label: "小队上限", value: "3 人" }],
      aboutCta: "探索全部指南", finalDescription: "从第一次撤离，到挑战 Mist Lords 与敌对 Gyldhunter 的高风险战斗，这个玩家 Wiki 帮你让每次出发都物有所值。", finalPrimary: "阅读新手指南", finalSecondary: "在 Steam 上游玩", mediaLabel: "官方素材",
    },
    rail: { navigation: "Wiki 导航", codeSnapshot: "兑换码快照", updated: "快照", viewCodes: "查看兑换码状态 →", code: "暂无", codeDescription: "暂无官方可验证兑换码", play: "Mistfall Hunter 官方素材", playCta: "打开官网", gameDescription: "黑暗奇幻 PvPvE 撤离 ARPG", sections: railSections({ gettingStarted: "入门", classes: "职业", bosses: "首领", maps: "地图与战利品", builds: "配装", systems: "系统与装备", updates: "官方更新" }, "职业总览", "职业详情", "兑换码", "更新"), overview: "总览", detail: "职业详情", codes: "兑换码", updates: "更新" },
    footer: { note: "独立玩家 Wiki。页面附官方来源，方便核验。", title: "Mistfall Hunter Wiki", description: "Mistfall Hunter Wiki 是 Bellring Games 黑暗奇幻撤离 ARPG 的独立玩家指南站，整理 PvPvE 循环、职业、装备与撤离要点。本 Wiki 与 Bellring Games 或 Skystone Games 没有隶属关系。", quickLinks: "官方链接", guides: "指南", legal: "法律信息", website: "官方网站", steam: "Steam 商店", discord: "官方 Discord", youtube: "官方 YouTube", community: "Steam 社区", privacy: "隐私政策", terms: "服务条款", disclaimer: "与 Bellring Games 或 Skystone Games 无隶属关系。" },
  },
};

export const homeUpdates: Record<Locale, Array<{ tone: "major" | "minor"; date: string; title: string }>> = {
  en: [{ tone: "major", date: "Aug 12, 2026", title: "Official update snapshot — more than 1 million players have joined Mistfall Hunter." }, { tone: "minor", date: "Aug 13, 2026", title: "Live-player snapshot — 14,941 players online at the time of research." }, { tone: "minor", date: "Jul 29, 2026", title: "Launch date listed by the official research snapshot." }],
  ru: [{ tone: "major", date: "12 авг. 2026", title: "Снимок официального обновления — к Mistfall Hunter присоединилось более 1 миллиона игроков." }, { tone: "minor", date: "13 авг. 2026", title: "Снимок онлайна — на момент исследования в игре было 14 941 игрок." }, { tone: "minor", date: "29 июл. 2026", title: "Дата запуска из официального исследовательского снимка." }],
  de: [{ tone: "major", date: "12. Aug. 2026", title: "Offizieller Update-Snapshot — mehr als 1 Million Spieler haben sich Mistfall Hunter angeschlossen." }, { tone: "minor", date: "13. Aug. 2026", title: "Spieler-Snapshot — zum Recherchezeitpunkt waren 14.941 Spieler online." }, { tone: "minor", date: "29. Juli 2026", title: "Startdatum aus dem offiziellen Recherche-Snapshot." }],
  "pt-br": [{ tone: "major", date: "12 ago. 2026", title: "Snapshot da atualização oficial — mais de 1 milhão de jogadores já entraram em Mistfall Hunter." }, { tone: "minor", date: "13 ago. 2026", title: "Snapshot de jogadores online — 14.941 jogadores no momento da pesquisa." }, { tone: "minor", date: "29 jul. 2026", title: "Data de lançamento indicada pelo snapshot oficial da pesquisa." }],
  zh: [{ tone: "major", date: "2026/08/12", title: "官方更新快照——已有超过 100 万名玩家加入 Mistfall Hunter。" }, { tone: "minor", date: "2026/08/13", title: "在线人数快照——调研时记录为 14,941 人在线。" }, { tone: "minor", date: "2026/07/29", title: "调研资料列出的上线日期。" }],
};

export const journeySteps: Record<Locale, Array<{ number: string; title: string; description: string; href: string }>> = {
  en: [{ number: "1", title: "Beginner Guide", description: "Learn the controls, extraction loop, first loadout, and safe early routes before risking valuable gear.", href: "/beginner-guide" }, { number: "2", title: "How Extraction Works", description: "Understand solo and trio runs, map objectives, Returner Woodlings, and how to leave with your haul.", href: "/extraction" }, { number: "3", title: "Classes & Builds", description: "Compare all six classes, weapon stances, talents, active skills, and beginner-friendly builds.", href: "/classes" }, { number: "4", title: "Maps, Bosses & Loot", description: "Study Gyldenmist pressure, Mist Lords, loot priorities, affixes, and tactics for harder expeditions.", href: "/maps-and-loot" }],
  ru: [{ number: "1", title: "Гайд новичка", description: "Изучите управление, цикл extraction, первый комплект и безопасные ранние маршруты.", href: "/beginner-guide" }, { number: "2", title: "Как работает extraction", description: "Разберитесь в одиночных и троечных рейдах, целях карты и Returner Woodling.", href: "/extraction" }, { number: "3", title: "Классы и билды", description: "Сравните шесть классов, стойки оружия, таланты и активные навыки.", href: "/classes" }, { number: "4", title: "Карты, боссы и добыча", description: "Изучите Gyldenmist, Mist Lords, приоритеты добычи и аффиксы.", href: "/maps-and-loot" }],
  de: [{ number: "1", title: "Einsteiger-Guide", description: "Lerne Steuerung, Extraction-Loop, erstes Loadout und sichere frühe Routen.", href: "/beginner-guide" }, { number: "2", title: "Extraction verstehen", description: "Verstehe Solo- und Dreierläufe, Kartenziele und Returner Woodlings.", href: "/extraction" }, { number: "3", title: "Klassen und Builds", description: "Vergleiche sechs Klassen, Waffenhaltungen, Talente und aktive Skills.", href: "/classes" }, { number: "4", title: "Karten, Bosse und Beute", description: "Lerne Gyldenmist, Mist Lords, Beuteprioritäten und Affixe kennen.", href: "/maps-and-loot" }],
  "pt-br": [{ number: "1", title: "Guia para iniciantes", description: "Aprenda os controles, o ciclo de extração, o primeiro equipamento e rotas seguras.", href: "/beginner-guide" }, { number: "2", title: "Como funciona a extração", description: "Entenda incursões solo e em trio, objetivos do mapa e Returner Woodlings.", href: "/extraction" }, { number: "3", title: "Classes e builds", description: "Compare as seis classes, posturas de arma, talentos e habilidades ativas.", href: "/classes" }, { number: "4", title: "Mapas, chefes e saque", description: "Estude Gyldenmist, Mist Lords, prioridades de saque e afixos.", href: "/maps-and-loot" }],
  zh: [{ number: "1", title: "新手指南", description: "了解操作、撤离循环、第一套装备，以及承担高价值装备风险前的安全路线。", href: "/beginner-guide" }, { number: "2", title: "撤离如何运作", description: "了解单人和三人小队、地图目标、Returner Woodling，以及如何带着战利品离开。", href: "/extraction" }, { number: "3", title: "职业与配装", description: "对比 6 个职业、武器姿态、天赋、主动技能与适合新手的配装。", href: "/classes" }, { number: "4", title: "地图、首领与战利品", description: "了解 Gyldenmist、Mist Lords、战利品优先级、词缀与高难远征要点。", href: "/maps-and-loot" }],
};

export const popularPages: Record<Locale, Array<{ tag: string; title: string; description: string; href: string; image: string }>> = {
  en: [{ tag: "Beginner", title: "Beginner Guide", description: "Controls, the extraction loop, first loadout, and safe early routes.", href: "/beginner-guide", image: "/images/mistfall/fight.jpg" }, { tag: "Core Loop", title: "How Extraction Works", description: "Solo and trio runs, map objectives, Returner Woodlings, and leaving with your haul.", href: "/extraction", image: "/images/mistfall/extract.jpg" }, { tag: "Official", title: "Six Playable Classes", description: "The official Steam page lists six playable classes; individual class names are 待确认.", href: "/classes", image: "/images/mistfall/heroes.jpg" }, { tag: "Loot", title: "Maps, Bosses & Loot", description: "Gyldenmist pressure, Mist Lords, loot priorities, affixes, and pending details.", href: "/maps-and-loot", image: "/images/mistfall/loot.jpg" }],
  ru: [{ tag: "Новичкам", title: "Гайд новичка", description: "Управление, цикл extraction, первый комплект и безопасные маршруты.", href: "/beginner-guide", image: "/images/mistfall/fight.jpg" }, { tag: "Цикл игры", title: "Как работает extraction", description: "Одиночные и троечные рейды, цели карты и Returner Woodling.", href: "/extraction", image: "/images/mistfall/extract.jpg" }, { tag: "Официально", title: "Шесть игровых классов", description: "На официальной странице Steam указаны шесть классов; их названия ожидают подтверждения.", href: "/classes", image: "/images/mistfall/heroes.jpg" }, { tag: "Добыча", title: "Карты, боссы и добыча", description: "Gyldenmist, Mist Lords, приоритеты добычи и детали, ожидающие подтверждения.", href: "/maps-and-loot", image: "/images/mistfall/loot.jpg" }],
  de: [{ tag: "Einsteiger", title: "Einsteiger-Guide", description: "Steuerung, Extraction-Loop, erstes Loadout und sichere frühe Routen.", href: "/beginner-guide", image: "/images/mistfall/fight.jpg" }, { tag: "Kern-Loop", title: "Wie Extraction funktioniert", description: "Solo- und Dreierläufe, Kartenziele und Returner Woodling.", href: "/extraction", image: "/images/mistfall/extract.jpg" }, { tag: "Offiziell", title: "Sechs spielbare Klassen", description: "Die offizielle Steam-Seite nennt sechs Klassen; ihre Namen sind zu bestätigen.", href: "/classes", image: "/images/mistfall/heroes.jpg" }, { tag: "Beute", title: "Karten, Bosse und Beute", description: "Gyldenmist, Mist Lords, Beuteprioritäten und Details, die noch zu bestätigen sind.", href: "/maps-and-loot", image: "/images/mistfall/loot.jpg" }],
  "pt-br": [{ tag: "Iniciantes", title: "Guia para iniciantes", description: "Controles, ciclo de extração, primeiro equipamento e rotas seguras.", href: "/beginner-guide", image: "/images/mistfall/fight.jpg" }, { tag: "Ciclo principal", title: "Como funciona a extração", description: "Incursões solo e em trio, objetivos do mapa e Returner Woodling.", href: "/extraction", image: "/images/mistfall/extract.jpg" }, { tag: "Oficial", title: "Seis classes jogáveis", description: "A página oficial da Steam lista seis classes; os nomes individuais estão a confirmar.", href: "/classes", image: "/images/mistfall/heroes.jpg" }, { tag: "Saque", title: "Mapas, chefes e saque", description: "Gyldenmist, Mist Lords, prioridades de saque e detalhes a confirmar.", href: "/maps-and-loot", image: "/images/mistfall/loot.jpg" }],
  zh: [{ tag: "新手", title: "新手指南", description: "操作、撤离循环、第一套装备与安全的前期路线。", href: "/beginner-guide", image: "/images/mistfall/fight.jpg" }, { tag: "核心循环", title: "撤离如何运作", description: "单人和三人小队、地图目标、Returner Woodling，以及带着战利品离开。", href: "/extraction", image: "/images/mistfall/extract.jpg" }, { tag: "官方信息", title: "6 个可玩职业", description: "官方 Steam 页面列出 6 个可玩职业；具体职业名称待确认。", href: "/classes", image: "/images/mistfall/heroes.jpg" }, { tag: "战利品", title: "地图、首领与战利品", description: "Gyldenmist、Mist Lords、战利品优先级，以及待确认的细节。", href: "/maps-and-loot", image: "/images/mistfall/loot.jpg" }],
};

export const exploreCards: Record<Locale, Array<[string, string, string]>> = {
  en: [["Classes & Builds", "Six playable classes are officially listed; class names, skills, and balance details are 待确认.", "/classes"], ["Extraction Loop", "Learn the PvPvE loop, solo or trio runs, Returner Woodlings, and extraction risk.", "/extraction"], ["Maps, Bosses & Loot", "Track Gyldenmist, Mist Lords, relics, loot priorities, and details that need verification.", "/maps-and-loot"], ["Official Updates", "Follow the latest official update and player-count snapshots.", "/updates"], ["Official Community", "Open the official website, Steam community, Discord directory, X, and YouTube.", "/community"], ["Active Codes", "暂无官方可验证兑换码。这个页面只会收录可核验的官方代码。", "/codes"]],
  ru: [["Классы и билды", "Официально указаны шесть классов; названия, навыки и баланс ожидают подтверждения.", "/classes"], ["Цикл extraction", "Изучите PvPvE, одиночные и троечные рейды, Returner Woodling и риск эвакуации.", "/extraction"], ["Карты, боссы и добыча", "Gyldenmist, Mist Lords, реликвии и детали, требующие проверки.", "/maps-and-loot"], ["Официальные обновления", "Следите за официальными обновлениями и снимками онлайна.", "/updates"], ["Официальное сообщество", "Сайт, Steam, Discord, X и YouTube по официальным ссылкам.", "/community"], ["Активные коды", "Официально подтверждённых кодов пока нет; здесь будут только проверенные коды.", "/codes"]],
  de: [["Klassen und Builds", "Sechs Klassen sind offiziell gelistet; Namen, Skills und Balancewerte sind zu bestätigen.", "/classes"], ["Extraction-Loop", "PvPvE, Solo- und Dreierläufe, Returner Woodling und das Risiko der Extraction.", "/extraction"], ["Karten, Bosse und Beute", "Gyldenmist, Mist Lords, Relikte und noch zu prüfende Details.", "/maps-and-loot"], ["Offizielle Updates", "Verfolge offizielle Updates und Spieler-Snapshots.", "/updates"], ["Offizielle Community", "Website, Steam, Discord, X und YouTube über offizielle Links.", "/community"], ["Aktive Codes", "暂无 offiziell bestätigte Codes; hier erscheinen nur verifizierte Codes.", "/codes"]],
  "pt-br": [["Classes e builds", "Seis classes estão listadas oficialmente; nomes, habilidades e balanceamento estão a confirmar.", "/classes"], ["Ciclo de extração", "PvPvE, incursões solo ou em trio, Returner Woodling e risco da extração.", "/extraction"], ["Mapas, chefes e saque", "Gyldenmist, Mist Lords, relíquias e detalhes que precisam de verificação.", "/maps-and-loot"], ["Atualizações oficiais", "Acompanhe atualizações oficiais e snapshots de jogadores.", "/updates"], ["Comunidade oficial", "Site, Steam, Discord, X e YouTube por links oficiais.", "/community"], ["Códigos ativos", "暂无 códigos oficialmente verificáveis; só códigos confirmados serão publicados.", "/codes"]],
  zh: [["职业与配装", "官方列出 6 个可玩职业；具体名称、技能与平衡数据待确认。", "/classes"], ["撤离循环", "了解 PvPvE、单人或三人小队、Returner Woodling 与撤离风险。", "/extraction"], ["地图、首领与战利品", "整理 Gyldenmist、Mist Lords、遗物、战利品优先级与待核验细节。", "/maps-and-loot"], ["官方更新", "跟进官方更新与在线人数快照。", "/updates"], ["官方社区", "通过官方链接访问官网、Steam、Discord、X 与 YouTube。", "/community"], ["当前兑换码", "暂无官方可验证兑换码；此页只收录可核验的官方代码。", "/codes"]],
};

export const faqItems: Record<Locale, Array<[string, string]>> = {
  en: [["What is Mistfall Hunter?", "Mistfall Hunter is a dark fantasy third-person PvPvE extraction ARPG. The official research brief describes corrupted monsters, rival Gyldhunters, extraction risk, and the Gyldenmist world."], ["How many playable classes are there?", "The official Steam page lists 6 playable classes. Individual class names and class-by-class details are 待确认 in this research snapshot."], ["How large can a squad be?", "The official research brief lists a maximum squad size of 3 players."], ["Which platforms are listed?", "The research brief lists Steam, Xbox Series X|S, and PS5."], ["Are there active codes?", "暂无官方可验证兑换码. This wiki will only publish a code after it can be verified from an official source."], ["When was Mistfall Hunter launched?", "The research snapshot lists Jul 29, 2026 as the launch date and Aug 12, 2026 as the latest update date."]],
  ru: [["Что такое Mistfall Hunter?", "Mistfall Hunter — мрачная фэнтезийная PvPvE extraction ARPG от третьего лица с искажёнными монстрами, соперниками-Gyldhunter и риском эвакуации."], ["Сколько игровых классов?", "Официальная страница Steam указывает 6 классов. Названия и подробности каждого класса в этом снимке ожидают подтверждения."], ["Какой размер отряда?", "В исследовательском брифе указан отряд максимум из 3 игроков."], ["Какие платформы указаны?", "В брифе указаны Steam, Xbox Series X|S и PS5."], ["Есть ли активные коды?", "Официально подтверждённых кодов пока нет. Вики будет публиковать только проверенные коды."], ["Когда вышла игра?", "В исследовательском снимке указаны 29 июля 2026 года как дата запуска и 12 августа 2026 года как дата обновления."]],
  de: [["Was ist Mistfall Hunter?", "Mistfall Hunter ist ein düsteres Third-Person-PvPvE-Extraction-ARPG mit verdorbenen Monstern, rivalisierenden Gyldhuntern und Extraction-Risiko."], ["Wie viele spielbare Klassen gibt es?", "Die offizielle Steam-Seite nennt 6 spielbare Klassen. Namen und Details der einzelnen Klassen sind in diesem Snapshot zu bestätigen."], ["Wie groß kann ein Team sein?", "Der Recherchebrief nennt maximal 3 Spieler pro Team."], ["Welche Plattformen sind gelistet?", "Gelistet sind Steam, Xbox Series X|S und PS5."], ["Gibt es aktive Codes?", "暂无 offiziell bestätigte Codes. Dieses Wiki veröffentlicht nur Codes, die aus einer offiziellen Quelle verifiziert wurden."], ["Wann ist das Spiel erschienen?", "Der Recherche-Snapshot nennt den 29. Juli 2026 als Start und den 12. August 2026 als aktuelles Update-Datum."]],
  "pt-br": [["O que é Mistfall Hunter?", "Mistfall Hunter é um extraction ARPG PvPvE de fantasia sombria em terceira pessoa, com monstros corrompidos, Gyldhunters rivais e risco de extração."], ["Quantas classes jogáveis existem?", "A página oficial da Steam lista 6 classes jogáveis. Os nomes e detalhes individuais estão a confirmar neste snapshot."], ["Qual é o tamanho do grupo?", "O material da pesquisa indica um grupo máximo de 3 jogadores."], ["Quais plataformas estão listadas?", "O material lista Steam, Xbox Series X|S e PS5."], ["Existem códigos ativos?", "暂无 códigos oficialmente verificáveis. Esta wiki só publicará códigos confirmados por uma fonte oficial."], ["Quando Mistfall Hunter foi lançado?", "O snapshot da pesquisa indica 29 de julho de 2026 como lançamento e 12 de agosto de 2026 como data da atualização mais recente."]],
  zh: [["Mistfall Hunter 是什么？", "Mistfall Hunter 是一款黑暗奇幻第三人称 PvPvE 撤离 ARPG，包含腐化怪物、敌对 Gyldhunter 与撤离风险。"], ["有多少个可玩职业？", "官方 Steam 页面列出 6 个可玩职业。本次调研没有确认具体职业名称与逐职业数据，因此标为待确认。"], ["小队最多几人？", "调研资料列出最多 3 人小队。"], ["有哪些平台？", "调研资料列出 Steam、Xbox Series X|S 和 PS5。"], ["有当前兑换码吗？", "暂无官方可验证兑换码。本 Wiki 只会发布能从官方来源核验的兑换码。"], ["游戏什么时候上线？", "调研资料列出 2026 年 7 月 29 日上线，2026 年 8 月 12 日更新。"]],
};

export type ClassRecord = {
  slug: string;
  title: string;
  tag?: string;
  description: string;
  image: string;
};

export const classRecords: Record<Locale, ClassRecord[]> = {
  en: [{ slug: "overview", title: "Six Playable Classes", tag: "Official listing", description: "The official Steam page lists six playable classes. Individual class names and class-by-class values are 待确认.", image: "/images/mistfall/heroes.jpg" }, { slug: "builds", title: "Class Builds", tag: "待确认", description: "Dual weapon stances, talent trees, gem affixes, and active skills are listed in the research brief; class-specific builds remain 待确认.", image: "/images/mistfall/fight.jpg" }],
  ru: [{ slug: "overview", title: "Шесть игровых классов", tag: "Официальный список", description: "Официальная страница Steam указывает шесть классов. Названия и значения каждого класса ожидают подтверждения.", image: "/images/mistfall/heroes.jpg" }, { slug: "builds", title: "Билды классов", tag: "Ожидает подтверждения", description: "В брифе упомянуты стойки оружия, таланты, аффиксы самоцветов и активные навыки; конкретные билды требуют проверки.", image: "/images/mistfall/fight.jpg" }],
  de: [{ slug: "overview", title: "Sechs spielbare Klassen", tag: "Offizielle Angabe", description: "Die offizielle Steam-Seite nennt sechs Klassen. Einzelne Namen und Werte sind zu bestätigen.", image: "/images/mistfall/heroes.jpg" }, { slug: "builds", title: "Klassen-Builds", tag: "Zu bestätigen", description: "Der Recherchebrief nennt Waffenhaltungen, Talentbäume, Edelstein-Affixe und aktive Skills; konkrete Builds sind zu bestätigen.", image: "/images/mistfall/fight.jpg" }],
  "pt-br": [{ slug: "overview", title: "Seis classes jogáveis", tag: "Listagem oficial", description: "A página oficial da Steam lista seis classes. Os nomes e valores individuais estão a confirmar.", image: "/images/mistfall/heroes.jpg" }, { slug: "builds", title: "Builds de classes", tag: "A confirmar", description: "O material cita posturas de arma, árvores de talentos, afixos de gemas e habilidades ativas; builds específicas estão a confirmar.", image: "/images/mistfall/fight.jpg" }],
  zh: [{ slug: "overview", title: "6 个可玩职业", tag: "官方列出", description: "官方 Steam 页面列出 6 个可玩职业。具体职业名称与逐职业数值待确认。", image: "/images/mistfall/heroes.jpg" }, { slug: "builds", title: "职业配装", tag: "待确认", description: "调研资料提到双武器姿态、天赋树、宝石词缀与主动技能；逐职业配装仍待确认。", image: "/images/mistfall/fight.jpg" }],
};

export function getClassRecord(locale: Locale, slug: string) {
  return classRecords[locale].find((item) => item.slug === slug) ?? null;
}

export function getLocaleFromPath(pathname: string) {
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  return normalizeLocale(firstSegment);
}
