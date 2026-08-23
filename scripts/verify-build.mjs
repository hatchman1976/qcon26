import { access, readFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const indexPath = resolve(root, "dist/index.html");

await access(indexPath);
const html = await readFile(indexPath, "utf8");

const requiredMarkers = [
  'id="impress"',
  'id="title"',
  'id="operating-point"',
  'id="safe-envelope"',
  'id="takeaways"',
];

const missing = requiredMarkers.filter((marker) => !html.includes(marker));

if (missing.length > 0) {
  throw new Error(`Build is missing required deck markers: ${missing.join(", ")}`);
}

const stepCount = (html.match(/class="[^"]*\bstep\b[^"]*"/g) ?? []).length;

if (stepCount < 12) {
  throw new Error(`Expected at least 12 impress.js steps, found ${stepCount}`);
}

console.log(`Verified dist/index.html with ${stepCount} presentation steps.`);

