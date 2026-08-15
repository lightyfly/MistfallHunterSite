import type { Metadata } from "next";
import { LegalPage } from "../../components/legal-page";

export const metadata: Metadata = { title: "Terms of Service — Mistfall Hunter Wiki", description: "Terms of service for the independent Mistfall Hunter fan wiki." };

export default function Page() { return <LegalPage locale="en" kind="terms" />; }
