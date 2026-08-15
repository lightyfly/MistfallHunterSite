import type { Metadata } from "next";
import Link from "next/link";
import { SiteFrame } from "../components/site-frame";
import { exploreCards, faqItems, homeUpdates, journeySteps, localizedPath, popularPages, siteCopy, type Locale } from "../lib/site-data";

export const metadata: Metadata = {
  title: "VV: ULTIMATUM — Codes, Builds, Guides",
  description: "A fan-made VV: ULTIMATUM reference for Roblox players.",
};

export function HomePage({ locale = "en" as Locale }: { locale?: Locale }) {
  const copy = siteCopy[locale];
  return (
    <SiteFrame locale={locale} currentPath="/">
      <section className="home-hero">
        <div className="hero-heading"><h1>VV: ULTIMATUM</h1><span>{copy.home.eyebrow}</span></div>
        <div className="media-frame hero-video"><img src="/images/hero-trailer-thumbnail.jpg" alt="VV: ULTIMATUM Official Trailer" /><div className="video-shade" /><div className="play-button" aria-hidden="true">▶</div><span className="media-source">YouTube</span></div>
        <p className="hero-intro">{copy.home.intro}</p>
        <div className="stat-row">{copy.home.stats.map((stat) => <span className="stat-chip" key={stat}>{stat}</span>)}</div>
        <div className="hero-ctas"><Link href={localizedPath(locale, "/beginner-guide")} className="button button-primary">{copy.home.ctas[0]} <span>→</span></Link><Link href={localizedPath(locale, "/races/best-race")} className="button">{copy.home.ctas[1]} <span>→</span></Link><Link href={localizedPath(locale, "/codes")} className="button">{copy.home.ctas[2]} <span>→</span></Link></div>
      </section>

      <section className="home-split-section">
        <div className="panel update-panel"><div className="section-bar"><span>{copy.home.latest}</span><Link href={localizedPath(locale, "/updates")}>Browse All Game Updates ↗</Link></div><div className="update-list">{homeUpdates.map((item) => <Link className="update-row" href={localizedPath(locale, "/codes")} key={item.title}><span className={`update-tag ${item.tone}`}>{item.tone}</span><p>{item.title}</p><time>{item.date}</time></Link>)}</div></div>
        <div className="panel journey-panel"><div className="section-bar"><span>{copy.home.startHere}</span></div><h2>{copy.home.journey}</h2><div className="journey-list">{journeySteps.map((step) => <Link className="journey-row" href={localizedPath(locale, step.href)} key={step.number}><span className="step-number">{step.number}</span><span><strong>{step.title}</strong><small>{step.description}</small></span><span className="journey-arrow">↗</span></Link>)}</div></div>
      </section>

      <section className="home-section popular-section"><div className="section-heading"><span className="eyebrow">{copy.home.popular}</span><h2>{copy.home.trending}</h2></div><div className="featured-grid">{popularPages.slice(0, 2).map((page) => <Link className="featured-card" href={localizedPath(locale, page.href)} key={page.title}><img src={page.image} alt={page.title} /><div className="featured-overlay"><span className="badge">{page.tag}</span><h3>{page.title}</h3><p>{page.description}</p></div></Link>)}</div><div className="quick-links"><Link href={localizedPath(locale, "/hollow-progression")}>Hollow Progression →</Link><Link href={localizedPath(locale, "/fastest-leveling")}>Fastest Leveling →</Link><Link href={localizedPath(locale, "/charms")}>Spirit Charms →</Link><Link href={localizedPath(locale, "/bosses")}>All Boss Guides →</Link></div><div className="popular-grid">{popularPages.slice(2).map((page) => <Link className="popular-card" href={localizedPath(locale, page.href)} key={page.title}><img src={page.image} alt={page.title} /><span className="badge">{page.tag}</span><h3>{page.title}</h3><p>{page.description}</p></Link>)}</div></section>

      <section className="home-section about-section"><div className="about-copy"><span className="eyebrow">{copy.home.about}</span><h2>{copy.home.about}</h2><p>VV: ULTIMATUM is a stylized fighting RPG on Roblox inspired by the Bleach anime universe. Choose from three playable races — Shinigami, Quincy, or Hollow — each with unique progression systems, unlockable abilities, and evolution paths.</p><p>Whether you’re unlocking your first Shikai, evolving from a base Hollow into an Arrancar, or grinding Quincy Lieutenant missions, this wiki focuses on source-labeled guides, data tables, and route planning you can use in-game.</p><Link className="button button-primary" href={localizedPath(locale, "/beginner-guide")}>Explore All Guides →</Link></div><div className="about-media"><img src="/images/game-overview.png" alt="VV: ULTIMATUM gameplay" /><div className="facts-grid"><span><b>Midnight Continent</b><small>Developer</small></span><span><b>Roblox</b><small>Platform</small></span><span><b>49.4M+</b><small>Visits</small></span><span><b>130+</b><small>Total Skills</small></span></div></div></section>

      <section className="home-section explore-section"><div className="section-heading"><span className="eyebrow">{copy.home.explore}</span><h2>{copy.home.explore}</h2><p>Source-labeled VV: ULTIMATUM guides, databases, and route planning pages.</p></div><div className="explore-grid">{exploreCards.map(([title, description, href], index) => <Link className="explore-card" href={localizedPath(locale, href)} key={title}><span className="explore-icon">{String(index + 1).padStart(2, "0")}</span><span><h3>{title}</h3><p>{description}</p></span><b>↗</b></Link>)}</div></section>

      <section className="home-section faq-section"><div className="section-heading"><span className="eyebrow">{copy.home.faq}</span><h2>{copy.home.faq}</h2><p>Quick answers to the most common questions about VV: ULTIMATUM.</p></div><div className="faq-list">{faqItems.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span>⌄</span></summary><p>{answer}</p></details>)}</div></section>

      <section className="final-cta"><span className="eyebrow">{copy.home.route}</span><h2>{copy.home.route}</h2><p>From Fort Adams progression to late-game boss prep, this fan wiki focuses on source-labeled guides, route notes, and snapshot-based reference pages.</p><div><Link className="button button-primary" href={localizedPath(locale, "/beginner-guide")}>Read the Beginner Guide</Link><Link className="button" href="https://www.roblox.com/games/6270290407/VV-ULTIMATUM">Play on Roblox ↗</Link></div></section>
    </SiteFrame>
  );
}

export default HomePage;
