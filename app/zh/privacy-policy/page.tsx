import type { Metadata } from "next";
import { LegalPage } from "../../../components/legal-page";

export const metadata: Metadata = { title: "隐私政策 — Mistfall Hunter Wiki", description: "Mistfall Hunter 独立玩家 Wiki 隐私政策。" };

export default function Page() { return <LegalPage locale="zh" kind="privacy" />; }
