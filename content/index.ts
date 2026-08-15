import enHollow from "./.generated/en-hollow.jsx";
import enQuincy from "./.generated/en-quincy.jsx";
import enShinigami from "./.generated/en-shinigami.jsx";
import zhHollow from "./.generated/zh-hollow.jsx";
import zhQuincy from "./.generated/zh-quincy.jsx";
import zhShinigami from "./.generated/zh-shinigami.jsx";
import type { ComponentType } from "react";
import type { Locale } from "../lib/site-data";

export type MdxComponent = ComponentType<{ components?: Record<string, unknown> }>;

const sources: Record<Locale, Record<string, MdxComponent>> = {
  en: { hollow: enHollow, quincy: enQuincy, shinigami: enShinigami },
  zh: { hollow: zhHollow, quincy: zhQuincy, shinigami: zhShinigami },
};

export function getRaceMdx(locale: Locale, slug: string) {
  return sources[locale][slug] ?? null;
}
