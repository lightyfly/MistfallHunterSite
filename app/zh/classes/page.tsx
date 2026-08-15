import type { Metadata } from "next";
import { ClassesPage } from "../../../components/races-page";

export const metadata: Metadata = { title: "职业总览 — Mistfall Hunter", description: "查看 Mistfall Hunter 官方列出的 6 个可玩职业，未核验信息会明确标注。" };

export default function Page() { return <ClassesPage locale="zh" />; }
