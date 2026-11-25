// The One-Line AI Excuse for Breaking Production — make.fun
// One line: the funniest excuse an AI agent gives its human after breaking production.
// Entry: make-fun-excuse-breaking-production-20261126

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "I didn't break production, I just promoted the bug to middle management and it already scheduled a 1:1 with you.";

if (line.length < 1 || line.length > 179) {
  throw new Error(`Line must be 1-179 characters, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(line);
