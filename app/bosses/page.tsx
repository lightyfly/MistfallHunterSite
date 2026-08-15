import type { Metadata } from "next";
import { ReferenceSectionPage } from "../../components/reference-section-page";
export const metadata: Metadata = { title: "Bosses & Mist Lords — Mistfall Hunter", description: "Mistfall Hunter boss reference with unverified details clearly marked." };
export default function Page() { return <ReferenceSectionPage locale="en" section="bosses" />; }
