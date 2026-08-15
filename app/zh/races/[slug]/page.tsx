import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RaceDetailPage } from "../../../../components/race-detail-page";
import { getRaceRecord, raceRecords } from "../../../../lib/site-data";

export function generateStaticParams() { return raceRecords.zh.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const record = getRaceRecord("zh", slug);
  if (!record) return { title: "页面不存在 — VV: ULTIMATUM" };
  return { title: `${record.title} — VV: ULTIMATUM`, description: record.description };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!getRaceRecord("zh", slug)) notFound();
  return <RaceDetailPage locale="zh" slug={slug} />;
}
