import type { Metadata } from "next";
import { ReferenceSectionPage } from "../../components/reference-section-page";
export const metadata: Metadata = { title: "Maps, Bosses & Loot — Mistfall Hunter", description: "Mistfall Hunter maps, bosses, relics, and loot reference with pending details marked." };
export default function Page() { return <ReferenceSectionPage locale="en" section="maps-and-loot" />; }
