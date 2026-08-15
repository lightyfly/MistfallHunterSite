import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ClassDetailPage } from "../../../components/race-detail-page";
import { classRecords, getClassRecord } from "../../../lib/site-data";

export function generateStaticParams() { return classRecords.en.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const record = getClassRecord("en", slug);
  if (!record) return { title: "Class reference not found — Mistfall Hunter" };
  return { title: `${record.title} — Mistfall Hunter`, description: record.description };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!getClassRecord("en", slug)) notFound();
  return <ClassDetailPage locale="en" slug={slug} />;
}
