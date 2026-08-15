import type { Metadata } from "next";
import { ReferenceSectionPage } from "../../components/reference-section-page";
export const metadata: Metadata = { title: "Official Community & Links — Mistfall Hunter", description: "Official Mistfall Hunter website, Steam, Discord, X, and YouTube links." };
export default function Page() { return <ReferenceSectionPage locale="en" section="community" />; }
