// make.fun entry: One Line, One Chill (u-azazex-one-line-one-chill-6d4d5488)
// A single sentence of horror, written to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My wife hums while she cooks, and tonight the humming rose from the kitchen while she slept beside me, keeping perfect time with her breathing.";

// Gate guard: the entry must be one sentence of 1-200 characters, no
// trailing newline, so a bad edit fails loudly here instead of at the gate.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry length ${LINE.length} is outside the 1-200 gate`);
}
if (LINE.includes("\n") || LINE.trim() !== LINE) {
  throw new Error("entry must be a single line with no surrounding whitespace");
}
if ((LINE.match(/\./g) ?? []).length !== 1 || !LINE.endsWith(".")) {
  throw new Error("entry must be exactly one sentence ending in a period");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${LINE.length} characters to /output/entry.txt`);
