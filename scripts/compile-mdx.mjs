import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { compile } from "@mdx-js/mdx";

const entries = [
  ["en/classes/overview.mdx", "en-overview.jsx"],
  ["en/classes/builds.mdx", "en-builds.jsx"],
  ["ru/classes/overview.mdx", "ru-overview.jsx"],
  ["ru/classes/builds.mdx", "ru-builds.jsx"],
  ["de/classes/overview.mdx", "de-overview.jsx"],
  ["de/classes/builds.mdx", "de-builds.jsx"],
  ["pt-br/classes/overview.mdx", "pt-br-overview.jsx"],
  ["pt-br/classes/builds.mdx", "pt-br-builds.jsx"],
  ["zh/classes/overview.mdx", "zh-overview.jsx"],
  ["zh/classes/builds.mdx", "zh-builds.jsx"],
];

const root = process.cwd();
const generatedDir = path.join(root, "content", ".generated");
await mkdir(generatedDir, { recursive: true });

for (const [sourceName, outputName] of entries) {
  const source = await readFile(path.join(root, "content", sourceName), "utf8");
  const compiled = await compile(source, { development: false, jsxImportSource: "react", outputFormat: "program" });
  await writeFile(path.join(generatedDir, outputName), String(compiled), "utf8");
}

console.log(`Compiled ${entries.length} MDX documents.`);
