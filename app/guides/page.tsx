import type { Metadata } from "next";
import Link from "next/link";
import { keywordArticles } from "../../lib/keyword-pages";
import { localizedPath } from "../../lib/site-data";
import { SiteFrame } from "../../components/site-frame";

export const metadata: Metadata = {
  title: "Mistfall Hunter keyword guides: classes, maps, and updates",
  description: "Browse the collected Mistfall Hunter keyword guides for classes, builds, codes, maps, updates, release information, platform support, purchases, and reviews.",
};

export default function Page() {
  return (
    <SiteFrame locale="en" currentPath="/guides">
      <article className="reference-article">
        <nav className="breadcrumbs">
          <Link href="/">Home</Link>
          <span>›</span>
          <span>Keyword Guides</span>
        </nav>
        <div className="article-media">
          <img src="/images/mistfall/loot.jpg" alt="Mistfall Hunter keyword guides" />
          <span>Research index</span>
        </div>
        <h1>Mistfall Hunter keyword guides</h1>
        <p className="article-lede">One search intent per page, with collected facts filtered for relevance and uncertain details marked 待确认.</p>
        <div className="ad-slot" aria-hidden="true" />
        <div className="guide-grid keyword-library">
          {keywordArticles.map((article) => (
            <Link className="guide-card keyword-card" href={localizedPath("en", "/guides/" + article.slug)} key={article.slug}>
              <img src={article.image} alt="" />
              <span className="guide-card-copy">
                <span className="badge">{article.category}</span>
                <strong>{article.h1}</strong>
                <small>{article.answer}</small>
                <span className="read-more">Read guide <b>→</b></span>
              </span>
            </Link>
          ))}
        </div>
      </article>
    </SiteFrame>
  );
}
