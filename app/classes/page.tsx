import type { Metadata } from "next";
import { ClassesPage } from "../../components/races-page";

export const metadata: Metadata = { title: "Classes Overview — Mistfall Hunter", description: "Review the six officially listed Mistfall Hunter classes and source-labeled role summaries." };

export default function Page() { return <ClassesPage locale="en" />; }
