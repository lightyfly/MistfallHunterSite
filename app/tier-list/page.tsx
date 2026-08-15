import type { Metadata } from "next";
import { ReferenceSectionPage } from "../../components/reference-section-page";
export const metadata: Metadata = { title: "Tier List — Mistfall Hunter", description: "Mistfall Hunter class ranking status with unverified information marked." };
export default function Page() { return <ReferenceSectionPage locale="en" section="tier-list" />; }
