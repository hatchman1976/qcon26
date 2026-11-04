import { access, readFile, stat } from "node:fs/promises";
import { dirname, extname, relative, resolve, sep } from "node:path";

const root = resolve(import.meta.dirname, "..");
const siteRoot = resolve(root, "src");
const indexPath = resolve(siteRoot, "index.html");

await access(indexPath);
const html = (await readFile(indexPath, "utf8")).replace(/<!--[\s\S]*?-->/g, "");

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
  'id="token-economy"',
  'id="model-enshittification"',
  'id="ai-workload-pressure"',
  'id="erosion-of-expertise"',
  'id="expertise-erosion-sequence"',
  'id="ai-margin-pressure"',
  'id="workflow-cost"',
  'id="verification-capacity"',
  'id="evidence-handoff"',
  'id="rehearsed-recovery"',
  'id="references"',
  'id="thank-you"',
  'id="social-and-systems-wiki"',
  'id="resilience-engineering"',
  'id="before-we-continue"',
  'id="social-and-systems"',
  'id="complex-system-and-boundaries"',
  "Adapt or Drift:",
  "Resilience Engineering When AI Moves the Operating Point",
  'class="title-speaker"',
  "Takeaways",
  "It is a framework for understanding the conditions that lead to adversity and how to stay resilient and adaptive to change.",
  "This model is a system-wide lens focused on risk, built from localized analysis, actions, and perspectives.",
  "Because we all work and live within complex socio-technical systems.",
  "And any attempts to change a complex system, either in whole, or in part, can lead to unintended consequences",
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
  const value = tag?.match(new RegExp(`\\bdata-${axis}="(-?\\d+(?:\\.\\d+)?)"`))?.[1];
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
const systemsDefinitionIndex = sectionTags.findIndex((tag) => /\bid="social-and-systems-wiki"/.test(tag));
if (!/\bid="resilience-engineering"/.test(sectionTags[systemsDefinitionIndex + 1] ?? "") ||
    !/\bid="the-model"/.test(sectionTags[systemsDefinitionIndex + 2] ?? "")) {
  throw new Error("Resilience Engineering must follow the socio-technical definition and precede the model");
}
if (stepCoordinate("resilience-engineering", "x") !== 0 ||
    stepCoordinate("resilience-engineering", "y") !== stepCoordinate("social-and-systems-wiki", "y") + 25000 ||
    stepCoordinate("the-model", "y") !== stepCoordinate("resilience-engineering", "y") + 25000) {
  throw new Error("Resilience Engineering must sit below the systems definition with one row of spacing before the model");
}
const economicIndex = sectionTags.findIndex((tag) => /\bid="ai-economic-pressure"/.test(tag));
if (!/\bid="token-economy"/.test(sectionTags[economicIndex + 1] ?? "") ||
    !/\bid="model-enshittification"/.test(sectionTags[economicIndex + 2] ?? "") ||
    !/\bid="ai-workload-pressure"/.test(sectionTags[economicIndex + 3] ?? "")) {
  throw new Error("Token progression and model enshittification must follow AI economics and precede AI workload");
}
if (stepCoordinate("model-enshittification", "scale") !== stepCoordinate("token-economy", "scale") ||
    stepCoordinate("model-enshittification", "y") - stepCoordinate("token-economy", "y") <
      780 * stepCoordinate("token-economy", "scale")) {
  throw new Error("Model enshittification must be the same size and below token progression without overlap");
}
const workflowIndex = sectionTags.findIndex((tag) => /\bid="workflow-cost"/.test(tag));
if (!/\bid="ai-fish-diagram-overview"/.test(sectionTags[workflowIndex - 1] ?? "") ||
    !/\bid="ai-margin-pressure"/.test(sectionTags[workflowIndex - 2] ?? "")) {
  throw new Error("The AI fish overview must follow the margin scene and immediately precede workflow cost");
}
if (["x", "y", "scale"].some((axis) =>
      stepCoordinate("ai-fish-diagram-overview", axis) !== stepCoordinate("ai-fish-diagram", axis)) ||
    !html.includes('class="step ai-margin-summary"')) {
  throw new Error("The AI fish overview must match the AI fish diagram position and scale");
}

if (!/\bid="references"/.test(sectionTags.at(-2) ?? "") ||
    !/\bid="thank-you"/.test(sectionTags.at(-1) ?? "") ||
    stepCoordinate("references", "x") !== 225000 ||
    stepCoordinate("references", "y") !== 308000 ||
    stepCoordinate("references", "scale") !== 25) {
  throw new Error("References must be at data-x=225000, data-y=308000 and data-scale=25, followed by the final Thank you section");
}

// Follow authored local dependencies instead of maintaining an incomplete asset list.
async function verifyLocalAssets(entryPath) {
  const checked = new Set();
  const pending = [{ path: entryPath, source: entryPath, reference: "index.html" }];
  while (pending.length) {
    const asset = pending.pop();
    if (checked.has(asset.path)) continue;
    if (relative(siteRoot, asset.path).startsWith(`..${sep}`)) {
      throw new Error(`Local asset escapes src/: ${asset.reference}`);
    }
    let info;
    try {
      info = await stat(asset.path);
    } catch {
      throw new Error(`Missing local asset "${asset.reference}" referenced by ${relative(siteRoot, asset.source)}`);
    }
    if (info.isDirectory()) {
      pending.push({ ...asset, path: resolve(asset.path, "index.html") });
      continue;
    }
    if (!info.isFile()) throw new Error(`Local asset is not a file: ${asset.reference}`);
    checked.add(asset.path);
    const extension = extname(asset.path);
    if (![".html", ".css", ".js", ".mjs"].includes(extension)) continue;
    const content = (await readFile(asset.path, "utf8")).replace(/<!--[\s\S]*?-->/g, "");
    const references = [];
    if (extension === ".html") {
      for (const [, name, , value] of content.matchAll(/\b(src|href|srcset|data-animated-src|data-still-src)\s*=\s*(["'])(.*?)\2/gi)) {
        if (name.toLowerCase() === "srcset" && !value.startsWith("data:")) {
          references.push(...value.split(",").map((candidate) => candidate.trim().split(/\s+/)[0]));
        } else references.push(value);
      }
    } else if (extension === ".css") {
      for (const match of content.matchAll(/url\(\s*["']?([^"')]+?)["']?\s*\)|@import\s+["']([^"']+)["']/gi)) {
        references.push(match[1] ?? match[2]);
      }
    } else {
      // Includes dynamic image creation and relative module imports. Ignore routes
      // and interpolated strings whose final file name is unknown at check time.
      for (const [, reference] of content.matchAll(/["'`]((?:\/|\.{1,2}\/)[^"'`\s]+)["'`]/g)) {
        if (/\.[a-z0-9]+(?:[?#].*)?$/i.test(reference) && !reference.includes("${")) references.push(reference);
      }
    }
    for (const reference of references) {
      if (!reference || /^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(reference)) continue;
      const pathname = decodeURIComponent(reference.split(/[?#]/)[0]);
      if (!pathname) continue;
      const assetPath = pathname.startsWith("/")
        ? resolve(siteRoot, `.${pathname}`)
        : resolve(dirname(asset.path), pathname);
      pending.push({ path: assetPath, source: asset.path, reference });
    }
  }
  return checked.size;
}

const assetCount = await verifyLocalAssets(indexPath);
await access(resolve(siteRoot, "vendor/impress.js/LICENSE"));

const stepCount = (html.match(/class="[^"]*\bstep\b[^"]*"/g) ?? []).length;

if (stepCount !== 37) {
  throw new Error(`Expected exactly thirty-seven impress.js steps, found ${stepCount}`);
}

console.log(`Verified src/index.html with ${stepCount} presentation steps and ${assetCount} local files.`);
