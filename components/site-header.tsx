import Link from "next/link";
import { localeLabels, localizedPath, navItems, pathWithoutLocale, supportedLocales, type Locale, siteCopy } from "../lib/site-data";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader({ locale, currentPath = "/" }: { locale: Locale; currentPath?: string }) {
  const copy = siteCopy[locale];
  const canonicalPath = pathWithoutLocale(currentPath);

  return (
    <header className="site-header">
      <div className="topbar">
        <Link className="brand" href={localizedPath(locale)}><img src="/images/mistfall/favicon.png" alt="Mistfall Hunter logo" /><span>Mistfall Hunter</span></Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => <Link className={canonicalPath.startsWith(item.path) ? "active" : ""} href={localizedPath(locale, item.path)} key={item.path}>{copy.nav[item.key]}</Link>)}
        </nav>
        <div className="header-actions">
          <details className="language-menu"><summary className="language-link" aria-label={copy.nav.language}>{localeLabels[locale]}</summary><div className="language-menu-list">{supportedLocales.map((targetLocale) => <Link href={localizedPath(targetLocale, canonicalPath)} key={targetLocale} aria-current={targetLocale === locale ? "page" : undefined}>{localeLabels[targetLocale]}</Link>)}</div></details>
          <ThemeToggle />
          <details className="mobile-nav"><summary aria-label="Open navigation">☰</summary><div className="mobile-nav-menu">{navItems.map((item) => <Link href={localizedPath(locale, item.path)} key={item.path}>{copy.nav[item.key]}</Link>)}</div></details>
        </div>
      </div>
    </header>
  );
}
