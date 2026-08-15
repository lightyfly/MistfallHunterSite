import type { Metadata } from "next";
import Link from "next/link";
import { SiteFrame } from "../components/site-frame";
import { exploreCards, faqItems, homeUpdates, journeySteps, localizedPath, officialLinks, popularPages, seo, siteCopy, type Locale } from "../lib/site-data";

export const metadata: Metadata = {
  title: seo.homeTitle,
  description: seo.homeDescription,
  keywords: seo.keywords,
};

export function HomePage({ locale = "en" as Locale }: { locale?: Locale }) {
  const copy = siteCopy[locale];
  const updates = homeUpdates[locale];
  const journey = journeySteps[locale];
  const featured = popularPages[locale];
  const explore = exploreCards[locale];
  const faq = faqItems[locale];

  return (
    <SiteFrame locale={locale} currentPath="/">
      <section className="home-hero">
        <div className="hero-heading"><h1>Mistfall Hunter</h1><span>{copy.home.eyebrow}</span></div>
        <div className="media-frame hero-video"><iframe className="hero-video-frame" src="https://www.youtube.com/embed/YiMyw3qVnVE?rel=0&modestbranding=1" title="Mistfall Hunter official trailer" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /><span className="media-source">{copy.home.mediaLabel}</span></div>
        <p className="hero-intro">{copy.home.intro}</p>
        <div className="stat-row">{copy.home.stats.map((stat) => <span className="stat-chip" key={stat}>{stat}</span>)}</div>
        <div className="hero-ctas"><Link href={localizedPath(locale, "/beginner-guide")} className="button button-primary">{copy.home.ctas[0]} <span>→</span></Link><Link href={localizedPath(locale, "/classes")} className="button">{copy.home.ctas[1]} <span>→</span></Link><Link href={localizedPath(locale, "/codes")} className="button">{copy.home.ctas[2]} <span>→</span></Link></div>
      </section>

      <section className="home-split-section">
        <div className="panel update-panel"><div className="section-bar"><span>{copy.home.latest}</span><Link href={localizedPath(locale, "/updates")}>{copy.home.browseUpdates}</Link></div><div className="update-list">{updates.map((item) => <Link className="update-row" href={localizedPath(locale, "/updates")} key={item.title}><span className={`update-tag ${item.tone}`}>{item.tone}</span><p>{item.title}</p><time>{item.date}</time></Link>)}</div></div>
        <div className="panel journey-panel"><div className="section-bar"><span>{copy.home.startHere}</span></div><h2>{copy.home.journey}</h2><div className="journey-list">{journey.map((step) => <Link className="journey-row" href={localizedPath(locale, step.href)} key={step.number}><span className="step-number">{step.number}</span><span><strong>{step.title}</strong><small>{step.description}</small></span><span className="journey-arrow">↗</span></Link>)}</div></div>
      </section>

      <section className="home-section popular-section"><div className="section-heading"><span className="eyebrow">{copy.home.popular}</span><h2>{copy.home.trending}</h2></div><div className="featured-grid">{featured.slice(0, 2).map((page) => <Link className="featured-card" href={localizedPath(locale, page.href)} key={page.title}><img src={page.image} alt={page.title} /><div className="featured-overlay"><span className="badge">{page.tag}</span><h3>{page.title}</h3><p>{page.description}</p></div></Link>)}</div><div className="quick-links">{featured.slice(2).map((page) => <Link href={localizedPath(locale, page.href)} key={page.title}>{page.title} →</Link>)}</div><div className="popular-grid">{featured.slice(2).map((page) => <Link className="popular-card" href={localizedPath(locale, page.href)} key={page.title}><img src={page.image} alt={page.title} /><span className="badge">{page.tag}</span><h3>{page.title}</h3><p>{page.description}</p></Link>)}</div></section>

      <section className="home-section about-section"><div className="about-copy"><span className="eyebrow">{copy.home.about}</span><h2>{copy.home.about}</h2>{copy.home.aboutParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<Link className="button button-primary" href={localizedPath(locale, "/beginner-guide")}>{copy.home.aboutCta} →</Link></div><div className="about-media"><img src="/images/mistfall/heroes.jpg" alt="Mistfall Hunter official artwork" /><div className="facts-grid">{copy.home.aboutStats.map((stat) => <span key={stat.label}><b>{stat.value}</b><small>{stat.label}</small></span>)}</div></div></section>

      <section className="home-section explore-section"><div className="section-heading"><span className="eyebrow">{copy.home.explore}</span><h2>{copy.home.explore}</h2><p>{copy.home.exploreDescription}</p></div><div className="explore-grid">{explore.map(([title, description, href], index) => <Link className="explore-card" href={localizedPath(locale, href)} key={title}><span className="explore-icon">{String(index + 1).padStart(2, "0")}</span><span><h3>{title}</h3><p>{description}</p></span><b>↗</b></Link>)}</div></section>

      <section className="home-section faq-section"><div className="section-heading"><span className="eyebrow">{copy.home.faq}</span><h2>{copy.home.faq}</h2><p>{copy.home.faqDescription}</p></div><div className="faq-list">{faq.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span>⌄</span></summary><p>{answer}</p></details>)}</div></section>

      <section className="final-cta"><span className="eyebrow">{copy.home.route}</span><h2>{copy.home.route}</h2><p>{copy.home.finalDescription}</p><div><Link className="button button-primary" href={localizedPath(locale, "/beginner-guide")}>{copy.home.finalPrimary}</Link><Link className="button" href={officialLinks.steam}>{copy.home.finalSecondary} ↗</Link></div></section>
    </SiteFrame>
  );
}

export default HomePage;
