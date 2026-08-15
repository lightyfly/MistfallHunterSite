import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = { title: "Class Reference — Mistfall Hunter", description: "Mistfall Hunter class reference pages." };

export default function Page() { redirect("/classes/overview"); }
