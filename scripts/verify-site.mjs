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
  'id="whoami"',
  'id="opening-hook"',
  'id="takeaways"',
  'id="the-model"',
  'id="paper-themes"',
  'id="diagram-legend"',
  'id="the-fish-diagram"',
  'id="economic-boundary"',
  'id="economic-boundary-actions"',
  'id="workload-boundary"',
  'id="workload-boundary-actions"',
  'id="performance-boundary"',
  'id="error-margin"',
  'id="ai-operating-point"',
  'id="ai-fish-diagram"',
  'id="ai-fish-diagram-overview"',
  'id="ai-economic-pressure"',
  'id="ai-workload-pressure"',
  'id="erosion-of-expertise"',
  'id="expertise-erosion-sequence"',
  'id="ai-margin-pressure"',
  'id="workflow-cost"',
  'id="verification-capacity"',
  'id="evidence-handoff"',
  'id="rehearsed-recovery"',
  'id="references"',
  'id="social-and-systems-wiki"',
  'id="before-we-continue"',
  'id="social-and-systems"',
  'id="complex-system-and-boundaries"',
  "Adapt or Drift:",
  "Resilience Engineering When AI Moves the Operating Point",
  "Andrew Hatch",
  "Takeaways",
  "It helps to understand conditions that lead to adversity and how you stay resilient and adaptive to change.",
  "This model is a system-wide lens focused on risk, built from localized analysis, actions, and perspectives.",
  "We all are part of, and work/live within complex socio-technical systems",
  "Attempts to change a complex system in whole, or in part, will yield unintended consequences",
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
  "Socio Technical Systems",
  "interaction between people and technology in workplaces",
  "Where does control live?",
  "Social control hierarchy",
  "Rasmussen’s structural hierarchy",
  "Dotted error margin inside the performance boundary",
  "Plausible ≠ measured",
  "Fluent ≠ intended",
  "path of least effort",
  "Test people, tools and workflow together.",
  "Savings here can add work elsewhere. Who covers it and at what cost?",
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

const sectionTags = [...html.matchAll(/<section\b[^>]*>/g)].map(([tag]) => tag);
const workflowIndex = sectionTags.findIndex((tag) => /\bid="workflow-cost"/.test(tag));
if (!/\bid="ai-fish-diagram-overview"/.test(sectionTags[workflowIndex - 1] ?? "") ||
    !/<section\b[^>]*\bid="ai-fish-diagram-overview"[^>]*>\s*<\/section>/.test(html)) {
  throw new Error("The empty AI fish diagram overview must immediately precede workflow cost");
}
for (const axis of ["x", "y", "scale"]) {
  if (stepCoordinate("ai-fish-diagram-overview", axis) !== stepCoordinate("ai-fish-diagram", axis)) {
    throw new Error(`AI fish diagram overview must match the original diagram's ${axis}`);
  }
}

const lastSection = sectionTags.at(-1);
if (!/\bid="references"/.test(lastSection ?? "") ||
    stepCoordinate("references", "x") !== 0 ||
    stepCoordinate("references", "y") !== 408000 ||
    stepCoordinate("references", "scale") !== 25) {
  throw new Error("References must be the final section at data-x=0, data-y=408000 and data-scale=25");
}

const requiredFiles = [
  "favicon.svg",
  "styles.css",
  "main.js",
  "images/qcon-logo.svg",
  "images/srecon26/logo-ai-mashup.png",
  "images/srecon26/Australia.png",
  "images/srecon26/map-pin-red-hi.png",
  "images/srecon26/thousand-eyes.png",
  "images/srecon26/usa.png",
  "images/srecon26/aws.png",
  "images/srecon26/new-data-centre.png",
  "images/srecon26/Linkedin-Logo.png",
  "images/srecon26/medium-blog-icon.png",
  "images/srecon26/logo-bluesky.png",
  "fonts/srecon26-archivo-black-400-normal.woff2",
  "fonts/srecon26-comic-neue-700-normal.woff2",
  "fonts/srecon26-open-sans-400-normal.woff2",
  "images/srecon26/symbol-equals.png",
  "images/srecon26/complex-sign-transparent.png",
  "images/srecon26/ai-slop-bucket.png",
  "images/srecon26/book-accelerated-expertise.png",
  "images/meat-proxy.png",
  "images/srecon24/Rasmussen_plain_outline.png",
  "images/srecon24/Rasmussen_boundary_performance.png",
  "images/srecon24/Rasmussen_boundary_economic.png",
  "images/srecon24/Rasmussen_boundary_workload.png",
  "images/srecon24/Rasmussen_error_margin.png",
  "images/operating-point.svg",
  "images/qcon26/blocker-lemming.png",
  "images/qcon26/blocker-lemming.gif",
  "images/qcon26/this-is-fine.gif",
  "images/qcon26/this-is-fine-still.png",
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

if (stepCount !== 33) {
  throw new Error(`Expected exactly thirty-three impress.js steps, found ${stepCount}`);
}

console.log(`Verified src/index.html with ${stepCount} presentation steps.`);
