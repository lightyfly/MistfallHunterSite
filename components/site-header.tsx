import Link from "next/link";
import { localizedPath, navItems, pathWithoutLocale, type Locale, siteCopy } from "../lib/site-data";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader({ locale, currentPath = "/" }: { locale: Locale; currentPath?: string }) {
  const copy = siteCopy[locale];
  const canonicalPath = pathWithoutLocale(currentPath);
  const alternateLocale = locale === "en" ? "zh" : "en";

  return (
    <header className="site-header">
      <div className="topbar">
        <Link className="brand" href={localizedPath(locale)}><img src="/logo.png" alt="VV Ultimatum" /><span>VV: ULTIMATUM</span></Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => <Link className={canonicalPath.startsWith(item.path) ? "active" : ""} href={localizedPath(locale, item.path)} key={item.path}>{copy.nav[item.key]}</Link>)}
        </nav>
        <div className="header-actions">
          <Link className="language-link" href={localizedPath(alternateLocale, canonicalPath)} aria-label="Switch language">{copy.nav.language}</Link>
          <ThemeToggle />
          <details className="mobile-nav"><summary aria-label="Open navigation">☰</summary><div className="mobile-nav-menu">{navItems.map((item) => <Link href={localizedPath(locale, item.path)} key={item.path}>{copy.nav[item.key]}</Link>)}</div></details>
        </div>
      </div>
    </header>
  );
}
