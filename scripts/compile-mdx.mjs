import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { compile } from "@mdx-js/mdx";

const entries = [
  ["en/races/shinigami.mdx", "en-shinigami.jsx"],
  ["en/races/quincy.mdx", "en-quincy.jsx"],
  ["en/races/hollow.mdx", "en-hollow.jsx"],
  ["zh/races/shinigami.mdx", "zh-shinigami.jsx"],
  ["zh/races/quincy.mdx", "zh-quincy.jsx"],
  ["zh/races/hollow.mdx", "zh-hollow.jsx"],
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
