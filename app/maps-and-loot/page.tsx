import type { Metadata } from "next";
import { ReferenceSectionPage } from "../../components/reference-section-page";
export const metadata: Metadata = { title: "Maps, Bosses & Loot — Mistfall Hunter", description: "Mistfall Hunter reference for named ruins, bosses, relics, extraction rewards, and loot topics." };
export default function Page() { return <ReferenceSectionPage locale="en" section="maps-and-loot" />; }
