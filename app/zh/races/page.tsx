import type { Metadata } from "next";
import { RacesPage } from "../../../components/races-page";

export const metadata: Metadata = { title: "种族总览 — VV: ULTIMATUM", description: "查看死神、灭却师与虚的成长路线。" };

export default function Page() { return <RacesPage locale="zh" />; }
