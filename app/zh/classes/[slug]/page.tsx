import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ClassDetailPage } from "../../../../components/race-detail-page";
import { classRecords, getClassRecord } from "../../../../lib/site-data";

export function generateStaticParams() { return classRecords.zh.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const record = getClassRecord("zh", slug);
  if (!record) return { title: "职业参考不存在 — Mistfall Hunter" };
  return { title: `${record.title} — Mistfall Hunter`, description: record.description };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!getClassRecord("zh", slug)) notFound();
  return <ClassDetailPage locale="zh" slug={slug} />;
}
