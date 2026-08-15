import type { Metadata } from "next";
import { ReferenceSectionPage } from "../../components/reference-section-page";
export const metadata: Metadata = { title: "Beginner Guide — Mistfall Hunter", description: "Mistfall Hunter beginner reference for controls, extraction, first loadout, and safe early routes." };
export default function Page() { return <ReferenceSectionPage locale="en" section="beginner-guide" />; }
