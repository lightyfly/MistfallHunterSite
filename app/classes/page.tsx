import type { Metadata } from "next";
import { ClassesPage } from "../../components/races-page";

export const metadata: Metadata = { title: "Classes Overview — Mistfall Hunter", description: "Review the six officially listed Mistfall Hunter classes, with unverified details clearly marked." };

export default function Page() { return <ClassesPage locale="en" />; }
