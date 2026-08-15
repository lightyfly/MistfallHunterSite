import type { Metadata } from "next";
import { ReferenceSectionPage } from "../../components/reference-section-page";
export const metadata: Metadata = { title: "Official Updates — Mistfall Hunter", description: "Source-labeled Mistfall Hunter update and player snapshot timeline." };
export default function Page() { return <ReferenceSectionPage locale="en" section="updates" />; }
