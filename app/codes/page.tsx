import type { Metadata } from "next";
import { ReferenceSectionPage } from "../../components/reference-section-page";
export const metadata: Metadata = { title: "Codes Snapshot — Mistfall Hunter", description: "Mistfall Hunter code status: no officially verifiable code in the current research snapshot." };
export default function Page() { return <ReferenceSectionPage locale="en" section="codes" />; }
