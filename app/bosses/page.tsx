import type { Metadata } from "next";
import { ReferenceSectionPage } from "../../components/reference-section-page";
export const metadata: Metadata = { title: "Bosses & Mist Lords — Mistfall Hunter", description: "Mistfall Hunter reference for Corroded creatures, Mist Lords, Gyldhunters, and extraction threats." };
export default function Page() { return <ReferenceSectionPage locale="en" section="bosses" />; }
