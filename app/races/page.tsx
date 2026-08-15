import type { Metadata } from "next";
import { RacesPage } from "../../components/races-page";

export const metadata: Metadata = { title: "Races Overview — VV: ULTIMATUM", description: "Choose between Shinigami, Quincy, and Hollow progression paths." };

export default function Page() { return <RacesPage locale="en" />; }
