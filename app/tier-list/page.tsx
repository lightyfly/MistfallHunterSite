import type { Metadata } from "next";
import { ReferenceSectionPage } from "../../components/reference-section-page";
export const metadata: Metadata = { title: "Tier List — Mistfall Hunter", description: "Mistfall Hunter class comparison based on source-labeled roles, skills, and build directions." };
export default function Page() { return <ReferenceSectionPage locale="en" section="tier-list" />; }
