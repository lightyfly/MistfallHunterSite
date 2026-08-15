import type { Metadata } from "next";
import { ReferenceSectionPage } from "../../components/reference-section-page";
export const metadata: Metadata = { title: "How Extraction Works — Mistfall Hunter", description: "Source-labeled Mistfall Hunter extraction reference." };
export default function Page() { return <ReferenceSectionPage locale="en" section="extraction" />; }
