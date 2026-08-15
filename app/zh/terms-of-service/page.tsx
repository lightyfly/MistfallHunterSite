import type { Metadata } from "next";
import { LegalPage } from "../../../components/legal-page";

export const metadata: Metadata = { title: "服务条款 — Mistfall Hunter Wiki", description: "Mistfall Hunter 独立玩家 Wiki 服务条款。" };

export default function Page() { return <LegalPage locale="zh" kind="terms" />; }
