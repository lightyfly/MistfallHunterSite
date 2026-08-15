import deBuilds from "./.generated/de-builds.jsx";
import deOverview from "./.generated/de-overview.jsx";
import enBuilds from "./.generated/en-builds.jsx";
import enOverview from "./.generated/en-overview.jsx";
import ptBrBuilds from "./.generated/pt-br-builds.jsx";
import ptBrOverview from "./.generated/pt-br-overview.jsx";
import ruBuilds from "./.generated/ru-builds.jsx";
import ruOverview from "./.generated/ru-overview.jsx";
import zhBuilds from "./.generated/zh-builds.jsx";
import zhOverview from "./.generated/zh-overview.jsx";
import type { ComponentType } from "react";
import type { Locale } from "../lib/site-data";

export type MdxComponent = ComponentType<{ components?: Record<string, unknown> }>;

const sources: Record<Locale, Record<string, MdxComponent>> = {
  en: { overview: enOverview, builds: enBuilds },
  ru: { overview: ruOverview, builds: ruBuilds },
  de: { overview: deOverview, builds: deBuilds },
  "pt-br": { overview: ptBrOverview, builds: ptBrBuilds },
  zh: { overview: zhOverview, builds: zhBuilds },
};

export function getClassMdx(locale: Locale, slug: string) {
  return sources[locale][slug] ?? null;
}
