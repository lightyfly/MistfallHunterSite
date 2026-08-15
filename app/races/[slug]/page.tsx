import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RaceDetailPage } from "../../../components/race-detail-page";
import { getRaceRecord, raceRecords } from "../../../lib/site-data";

export function generateStaticParams() { return raceRecords.en.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const record = getRaceRecord("en", slug);
  if (!record) return { title: "Guide not found — VV: ULTIMATUM" };
  return { title: `${record.title} — VV: ULTIMATUM`, description: record.description };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!getRaceRecord("en", slug)) notFound();
  return <RaceDetailPage locale="en" slug={slug} />;
}
