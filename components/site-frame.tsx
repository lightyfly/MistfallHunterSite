import type { ReactNode } from "react";
import type { Locale } from "../lib/site-data";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { SiteRail } from "./site-rail";

export function SiteFrame({ children, locale, currentPath = "/" }: { children: ReactNode; locale: Locale; currentPath?: string }) {
  return <div className="site-root"><SiteHeader locale={locale} currentPath={currentPath} /><div className="page-shell"><div className="content-grid"><main className="site-main">{children}</main><SiteRail locale={locale} currentPath={currentPath} /></div><SiteFooter locale={locale} /></div></div>;
}
