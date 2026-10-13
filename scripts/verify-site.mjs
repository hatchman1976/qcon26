import { access, readFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const siteRoot = resolve(root, "src");
const indexPath = resolve(siteRoot, "index.html");

await access(indexPath);
const html = await readFile(indexPath, "utf8");

const requiredMarkers = [
  'id="impress"',
  'id="title"',
  'id="takeaways"',
  'id="the-model"',
  'id="paper-themes"',
  'id="diagram-legend"',
  'id="the-fish-diagram"',
  'id="ai-behaviour"',
  'id="economic-boundary"',
  'id="economic-boundary-actions"',
  'id="workload-boundary"',
  'id="workload-boundary-actions"',
  'id="performance-boundary"',
  'id="error-margin"',
  'id="ai-operating-point"',
  'id="ai-fish-diagram"',
  'id="ai-economic-pressure"',
  'id="ai-workload-pressure"',
  'id="ai-margin-pressure"',
  'id="social-and-systems-wiki"',
  'id="before-we-continue"',
  'id="social-and-systems"',
  'id="complex-system-and-boundaries"',
  'id="ai-control-structure"',
  'id="ai-economic-boundary"',
  'id="ai-intervention"',
  'id="ai-joint-evaluation"',
  'id="automation-recovery"',
  'id="adaptive-control"',
  "Adapt or Drift:",
  "Resilience Engineering When AI Moves the Operating Point",
  "Andrew Hatch",
  "Takeaways",
  "Understand conditions that lead to adversity.",
  "Fundamentally, this model is a risk perspective.",
  "You are all part of complex socio-technical systems",
  "Attempts to change a complex system either in whole,",
  "Diagram Legend",
  "Operating point",
  'src="/images/srecon24/Rasmussen_boundary_performance.png?v=2"',
  'src="/images/srecon24/Rasmussen_boundary_economic.png?v=2"',
  'src="/images/srecon24/Rasmussen_boundary_workload.png?v=2"',
  "There is no magic safe spot",
  "Jens Rasmussen",
  "Risk Management in a Dynamic Society (1997)",
  "The research behind the model",
  "Human performance under pressure",
  "Figure 8: research traditions converge",
  "Human behaviour with LLM tools",
  "LLM tools change the conditions in which people work.",
  "Work with LLM tools needs fresh evidence.",
  "Socio Technical Systems",
  "interaction between people and technology in workplaces",
  "Where does control live?",
  "Social control hierarchy",
  "Rasmussen’s structural hierarchy",
  "Dotted error margin inside the performance boundary",
  "AI enters the control structure",
  "Plausible ≠ measured",
  "Fluent ≠ intended",
  "path of least effort",
  "No control system will perform better than its measuring channel.",
  'href="/styles.css?v=',
  'src="/vendor/impress.js/js/impress.min.js"',
  'src="/main.js?v=',
];

const missing = requiredMarkers.filter((marker) => !html.includes(marker));

if (missing.length > 0) {
  throw new Error(`Source site is missing required deck markers: ${missing.join(", ")}`);
}

function stepCoordinate(id, axis) {
  const tag = html.match(new RegExp(`<section\\b[^>]*\\bid="${id}"[^>]*>`))?.[0];
  const value = tag?.match(new RegExp(`\\bdata-${axis}="(-?\\d+)"`))?.[1];
  if (value === undefined) throw new Error(`${id} needs an explicit data-${axis} coordinate`);
  return Number(value);
}

const legendX = stepCoordinate("diagram-legend", "x");
const fishX = stepCoordinate("the-fish-diagram", "x");
const legendY = stepCoordinate("diagram-legend", "y");
const fishY = stepCoordinate("the-fish-diagram", "y");

// Impress.js inherits an omitted coordinate from the previous step.
if (legendY !== fishY || legendX - fishX < 1020 * 25 ||
    html.indexOf('id="diagram-legend"') < html.indexOf('id="the-fish-diagram"')) {
  throw new Error("Diagram Legend must be a separate step to the right of the Fish diagram and appear after it");
}

if (stepCoordinate("fish-diagram-overlay", "x") !== fishX) {
  throw new Error("The step after Diagram Legend must return to the Fish diagram's column");
}

const requiredFiles = [
  "favicon.svg",
  "styles.css",
  "main.js",
  "images/qcon-logo.svg",
  "images/srecon26/logo-ai-mashup.png",
  "images/srecon26/symbol-equals.png",
  "images/srecon26/complex-sign-transparent.png",
  "images/srecon26/ai-slop-bucket.png",
  "images/srecon24/Rasmussen_plain_outline.png",
  "images/srecon24/Rasmussen_boundary_performance.png",
  "images/srecon24/Rasmussen_boundary_economic.png",
  "images/srecon24/Rasmussen_boundary_workload.png",
  "images/srecon24/Rasmussen_error_margin.png",
  "images/operating-point.svg",
  "images/srecon24/Rasmussen_portrait.png",
  "images/srecon24/Rasmussen_Model_Original.png",
  "images/srecon24/Rasmussen_paper_figure_8.png",
  "images/srecon24/emoji-radioactive.png",
  "images/srecon24/emoji-passenger-ship-boat.png",
  "images/srecon24/emoji-hospital.png",
  "images/srecon24/red-ring.png",
  "images/srecon24/Rasmussen_Society_Model.png",
  "images/srecon24/Rasmussen_Society_Research.png",
  "images/srecon24/Rasmussen_Society_Environment.png",
  "images/srecon24/you_logo_here.png",
  "vendor/impress.js/LICENSE",
  "vendor/impress.js/js/impress.min.js",
];

await Promise.all(requiredFiles.map((file) => access(resolve(siteRoot, file))));

const stepCount = (html.match(/class="[^"]*\bstep\b[^"]*"/g) ?? []).length;

if (stepCount !== 30) {
  throw new Error(`Expected exactly thirty impress.js steps, found ${stepCount}`);
}

console.log(`Verified src/index.html with ${stepCount} presentation steps.`);
