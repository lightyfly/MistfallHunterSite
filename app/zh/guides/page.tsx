import type { Metadata } from "next";
import Link from "next/link";
import { keywordArticles } from "../../../lib/keyword-pages";
import { localizedPath } from "../../../lib/site-data";
import { SiteFrame } from "../../../components/site-frame";

export const metadata: Metadata = {
  title: "Mistfall Hunter 关键词指南：职业、地图与更新",
  description: "按一个搜索意图对应一个页面，整理 Mistfall Hunter 的职业、配装、兑换码、地图、更新、发售、平台和评测信息。",
};

export default function Page() {
  return (
    <SiteFrame locale="zh" currentPath="/guides">
      <article className="reference-article">
        <nav className="breadcrumbs">
          <Link href={localizedPath("zh", "/")}>首页</Link>
          <span>›</span>
          <span>关键词指南</span>
        </nav>
        <div className="article-media">
          <img src="/images/mistfall/loot.jpg" alt="Mistfall Hunter 关键词指南" />
          <span>调研索引</span>
        </div>
        <h1>Mistfall Hunter 关键词指南</h1>
        <p className="article-lede">每个页面对应一个搜索意图，已过滤无效信息；不确定内容标为“待确认”。</p>
        <div className="ad-slot" aria-hidden="true" />
        <div className="guide-grid keyword-library">
          {keywordArticles.map((article) => (
            <Link className="guide-card keyword-card" href={localizedPath("zh", "/guides/" + article.slug)} key={article.slug}>
              <img src={article.image} alt="" />
              <span className="guide-card-copy">
                <span className="badge">{article.category}</span>
                <strong>{article.h1}</strong>
                <small>{article.answer}</small>
                <span className="read-more">阅读指南 <b>→</b></span>
              </span>
            </Link>
          ))}
        </div>
      </article>
    </SiteFrame>
  );
}
