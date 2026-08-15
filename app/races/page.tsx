import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = { title: "Classes Overview — Mistfall Hunter", description: "Review the six officially listed Mistfall Hunter classes." };

export default function Page() { redirect("/classes"); }
