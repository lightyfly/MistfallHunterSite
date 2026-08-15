import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = { title: "职业参考 — Mistfall Hunter", description: "Mistfall Hunter 职业参考页。" };

export default function Page() { redirect("/zh/classes/overview"); }
