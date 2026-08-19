import { localeLabels, localizedPath, navItems, pathWithoutLocale, supportedLocales, type Locale, siteCopy } from "../lib/site-data";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader({ locale, currentPath = "/" }: { locale: Locale; currentPath?: string }) {
  const copy = siteCopy[locale];
  const canonicalPath = pathWithoutLocale(currentPath);

  return (
    <header className="site-header">
      <div className="topbar">
        <a className="brand" href={localizedPath(locale)}><img src="/images/mistfall/favicon.png" alt="Mistfall Hunter logo" /><span>Mistfall Hunter</span></a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => <a className={canonicalPath.startsWith(item.path) ? "active" : ""} href={localizedPath(locale, item.path)} key={item.path}>{copy.nav[item.key]}</a>)}
        </nav>
        <div className="header-actions">
          <details className="language-menu"><summary className="language-link" aria-label={copy.nav.language}>{localeLabels[locale]}</summary><div className="language-menu-list">{supportedLocales.map((targetLocale) => <a href={localizedPath(targetLocale, canonicalPath)} key={targetLocale} aria-current={targetLocale === locale ? "page" : undefined}>{localeLabels[targetLocale]}</a>)}</div></details>
          <ThemeToggle />
          <details className="mobile-nav"><summary aria-label="Open navigation">☰</summary><div className="mobile-nav-menu">{navItems.map((item) => <a href={localizedPath(locale, item.path)} key={item.path}>{copy.nav[item.key]}</a>)}</div></details>
        </div>
      </div>
    </header>
  );
}
