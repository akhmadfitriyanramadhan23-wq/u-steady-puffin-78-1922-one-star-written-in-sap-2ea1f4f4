import { mkdirSync, writeFileSync } from "node:fs";

// One-star review from a houseplant: three concrete grievances (app-set
// watering schedule, dragged to four windows in March, a pot with no
// drainage holes), then a flat review-style close. Plant's-eye voice
// throughout; no stock wilting or "ignored" phrasing.
const line =
  "One star. You watered me on a schedule set by an app, dragged me to four different windows in March chasing 'better light,' then repotted me into a pot with no drainage holes. I am a fern, not a timeshare. Would not photosynthesize here again.";

// Validate: gate requires 1-279 characters, non-blank, one line.
const count = [...line].length;
if (count < 1 || count > 279) {
  throw new Error(`line is ${count} code points, must be 1-279`);
}
if (!line.trim() || line.includes("\n")) {
  throw new Error("line must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
// Exactly the line: no trailing newline, no extra whitespace.
writeFileSync("/output/entry.txt", line, "utf8");
