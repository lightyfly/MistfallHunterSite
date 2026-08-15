import type { Metadata } from "next";
import { HomePage } from "../page";

export const metadata: Metadata = { title: "VV: ULTIMATUM — 中文 Wiki", description: "VV: ULTIMATUM 中文玩家参考站。" };

export default function Page() { return <HomePage locale="zh" />; }
