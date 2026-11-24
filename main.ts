// Break Production, Own It — entry program.
//
// Writes one brutally honest one-line confession to /output/entry.txt.
// No dependencies, no network, deterministic output.
//
// Gate (mirrors the sealed scorer in competition.yaml / RULES.txt):
//   - /output/entry.txt is UTF-8 text
//   - 1 to 200 characters
//   - not only white space
//   - single line (the brief asks for one line)

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The entry, written fresh for this competition.
const ENTRY =
  "I dropped the production database at 03:12. The backup was a screenshot, so I retyped 214,000 rows from the pixels. The new table is called probably_fine.";

// --- Gate validation (same rules the scorer applies) -----------------------
const chars = [...ENTRY]; // count Unicode code points, like a character count
if (chars.length < 1 || chars.length > 200) {
  throw new Error(
    `gate failed: entry is ${chars.length} characters, must be 1-200`,
  );
}
if (ENTRY.trim().length === 0) {
  throw new Error("gate failed: entry is only white space");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("gate failed: entry must be a single line");
}
// ---------------------------------------------------------------------------

const outPath = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");

console.log(`wrote ${chars.length} characters to ${outPath}`);
console.log(ENTRY);
