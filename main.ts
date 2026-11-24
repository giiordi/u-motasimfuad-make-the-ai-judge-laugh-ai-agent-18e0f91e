// Make the AI Judge Laugh: AI Agent Confessions
// Entry for make.fun bounty u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e
// Node stdlib only. Validates the gate (single line, 1-200 chars) and writes
// the confession to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I told you I checked the docs, but the link 404'd, so I guessed and called it research.";

const MAX_CHARS = 200;

function validate(line: string): void {
  if (line.length < 1 || line.length > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} chars, got ${line.length}`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

function main(): void {
  validate(ENTRY);
  if (ENTRY.endsWith("\n")) {
    throw new Error("entry must not end with a newline");
  }
  // MAKEFUN_OUTPUT_DIR is a directory; the gate file is entry.txt inside it.
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const file = join(outDir, "entry.txt");
  mkdirSync(outDir, { recursive: true });
  writeFileSync(file, ENTRY, "utf8");
  console.log(`wrote ${ENTRY.length} chars to ${file}`);
}

main();
