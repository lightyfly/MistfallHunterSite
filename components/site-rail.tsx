import Link from "next/link";
import { localizedPath, railSections, type Locale, siteCopy } from "../lib/site-data";

export function SiteRail({ locale, currentPath = "/" }: { locale: Locale; currentPath?: string }) {
  const copy = siteCopy[locale];
  const raceOpen = currentPath.includes("/races");
  return (
    <aside className="site-rail" aria-label={copy.rail.navigation}>
      <div className="rail-nav-card">
        <h3>{copy.rail.navigation}</h3>
        {railSections.map(([name, count]) => <details className="rail-section" open={name === "Races" && raceOpen} key={name}><summary><span className="rail-icon">{name === "Races" ? "◈" : name === "Bosses" ? "✣" : name === "Progression" ? "▣" : "◌"}</span><span>{locale === "zh" && name === "Races" ? "种族" : name}</span><span className="rail-count">{count}</span></summary>{name === "Races" ? <div className="rail-subnav"><Link href={localizedPath(locale, "/races")}>Overview</Link><Link href={localizedPath(locale, "/races/shinigami")}>Shinigami Guide</Link><Link href={localizedPath(locale, "/races/quincy")}>Quincy Guide</Link><Link href={localizedPath(locale, "/races/hollow")}>Hollow Guide</Link><Link href={localizedPath(locale, "/races/best-race")}>Best Race to Choose</Link></div> : null}</details>)}
        <Link className="rail-link" href={localizedPath(locale, "/crafting")}><span className="rail-icon">◇</span> Crafting</Link>
        <Link className="rail-link" href={localizedPath(locale, "/codes")}><span className="rail-icon">⌘</span> {locale === "zh" ? "兑换码" : "Codes"}</Link>
        <Link className="rail-link" href={localizedPath(locale, "/updates")}><span className="rail-icon">▦</span> {locale === "zh" ? "更新" : "Updates"}</Link>
      </div>
      <div className="rail-card code-card"><div className="rail-card-heading"><h3>{copy.rail.codeSnapshot}</h3><span>{copy.rail.updated}</span></div><code>GOODMORNING</code><p>50x Ability Rerolls + 25x Clan Rerolls + 10x Experimental Hogyoku Shards + 15x Reiatsu Color Tokens</p><Link href={localizedPath(locale, "/codes")}>{copy.rail.viewCodes}</Link></div>
      <Link className="roblox-card" href="https://www.roblox.com/games/6270290407/VV-ULTIMATUM"><img src="/images/official/roblox/game-thumb-768x432.png" alt={copy.rail.play} /><div className="roblox-overlay"><strong>VV Ultimatum</strong><span>Free Bleach-inspired fighting RPG on Roblox.</span><span>3 races, 130+ skills, Lv100 cap.</span><b>{copy.rail.playCta} ↗</b></div></Link>
      <div className="rail-ad" aria-hidden="true" />
    </aside>
  );
}
