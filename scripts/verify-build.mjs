import { access, readFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const indexPath = resolve(root, "dist/index.html");

await access(indexPath);
const html = await readFile(indexPath, "utf8");

const requiredMarkers = [
  'id="impress"',
  'id="title"',
  "Adapt or Drift:",
  "Resilience Engineering When AI Moves the Operating Point",
  "Andrew Hatch",
];

const missing = requiredMarkers.filter((marker) => !html.includes(marker));

if (missing.length > 0) {
  throw new Error(`Build is missing required deck markers: ${missing.join(", ")}`);
}

const stepCount = (html.match(/class="[^"]*\bstep\b[^"]*"/g) ?? []).length;

if (stepCount !== 1) {
  throw new Error(`Expected exactly one impress.js title step, found ${stepCount}`);
}

console.log(`Verified dist/index.html with ${stepCount} presentation steps.`);
