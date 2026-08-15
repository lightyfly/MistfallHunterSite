import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = { title: "职业总览 — Mistfall Hunter", description: "查看 Mistfall Hunter 官方列出的 6 个可玩职业。" };

export default function Page() { redirect("/zh/classes"); }
