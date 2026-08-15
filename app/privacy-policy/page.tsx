import type { Metadata } from "next";
import { LegalPage } from "../../components/legal-page";

export const metadata: Metadata = { title: "Privacy Policy — Mistfall Hunter Wiki", description: "Privacy policy for the independent Mistfall Hunter fan wiki." };

export default function Page() { return <LegalPage locale="en" kind="privacy" />; }
