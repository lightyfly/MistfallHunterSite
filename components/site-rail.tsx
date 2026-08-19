import Link from "next/link";
import { localizedPath, officialLinks, type Locale, siteCopy } from "../lib/site-data";

const sectionKeys = new Set(["gettingStarted", "classes", "bosses", "maps", "builds", "systems", "updates"]);
const sectionPaths: Record<string, string> = {
  gettingStarted: "/beginner-guide",
  classes: "/classes",
  bosses: "/bosses",
  maps: "/maps-and-loot",
  builds: "/classes/builds",
  systems: "/guides",
  updates: "/updates",
};

export function SiteRail({ locale, currentPath = "/" }: { locale: Locale; currentPath?: string }) {
  const copy = siteCopy[locale];
  const classOpen = currentPath.includes("/classes");
  const sections = copy.rail.sections.filter((section) => sectionKeys.has(section.key));
  return (
    <aside className="site-rail" aria-label={copy.rail.navigation}>
      <div className="rail-nav-card">
        <h3>{copy.rail.navigation}</h3>
        {sections.map((section) => {
          const icon = section.key === "classes" ? "◈" : section.key === "bosses" ? "✣" : section.key === "updates" ? "▦" : "◌";
          const href = localizedPath(locale, sectionPaths[section.key]);
          const count = section.count ? <span className="rail-count">{section.count}</span> : null;
          if (section.key === "classes") {
            return <details className="rail-section" open={classOpen} key={section.key}><summary><Link className="rail-section-title" href={href}><span className="rail-icon">{icon}</span><span>{section.label}</span></Link>{count}</summary><div className="rail-subnav"><Link href={localizedPath(locale, "/classes")}>{copy.rail.overview}</Link><Link href={localizedPath(locale, "/classes/overview")}>{copy.rail.detail}</Link><Link href={localizedPath(locale, "/classes/builds")}>{copy.nav.classes} &amp; Builds</Link></div></details>;
          }
          return <Link className="rail-section rail-section-link" href={href} key={section.key}><span className="rail-icon">{icon}</span><span>{section.label}</span>{count}</Link>;
        })}
        <Link className="rail-link" href={localizedPath(locale, "/classes")}><span className="rail-icon">◇</span> {copy.nav.classes}</Link>
        <Link className="rail-link" href={localizedPath(locale, "/updates")}><span className="rail-icon">▦</span> {copy.rail.updates}</Link>
      </div>
      <Link className="official-card" href={officialLinks.website}><img src="/images/mistfall/extract.jpg" alt={copy.rail.play} /><div className="official-overlay"><strong>Mistfall Hunter</strong><span>{copy.rail.gameDescription}</span><span>Steam / Xbox Series X|S / PS5</span><b>{copy.rail.playCta} ↗</b></div></Link>
      <div className="rail-ad" aria-hidden="true" />
    </aside>
  );
}
