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
  'id="sociotechnical-101"',
  'id="resilience-engineering-101"',
  'id="the-model"',
  'id="paper-themes"',
  'id="model-in-plain-english"',
  'id="ai-behaviour"',
  'id="social-and-systems-wiki"',
  'id="social-and-systems"',
  'id="ai-control-structure"',
  "Adapt or Drift:",
  "Resilience Engineering When AI Moves the Operating Point",
  "Andrew Hatch",
  "Takeaways",
  "Understand conditions that lead to adversity.",
  "Fundamentally, this model is a risk perspective.",
  "You are all part of complex socio-technical systems",
  "Attempts to change a complex system either in whole,",
  '<h2 class="topic-slide-title">SocioTechnical 101</h2>',
  '<h2 class="topic-slide-title">Resilience Engineering 101</h2>',
  "Three ways to lose",
  'src="/images/srecon24/Rasmussen_boundary_performance.png?v=2"',
  'src="/images/srecon24/Rasmussen_boundary_economic.png?v=2"',
  'src="/images/srecon24/Rasmussen_boundary_workload.png?v=2"',
  "There is no magic center",
  "Jens Rasmussen",
  "Risk Management in a Dynamic Society (1997)",
  "The research behind the model",
  "Human performance under pressure",
  "Figure 3 is one of eight figures in a much wider argument.",
  "Human behaviour with LLM tools",
  "LLM tools change the conditions in which people work.",
  "Work with LLM tools needs fresh evidence.",
  "Socio Technical Systems",
  "interaction between people and technology in workplaces",
  "Where does control live?",
  "Social control hierarchy",
  "One hierarchy. Two nested scales.",
  "government · regulators · companies",
  "company · management · staff · workers",
  "This is you!",
  "AI enters the control structure",
  "Plausible ≠ measured",
  "Fluent ≠ intended",
  "path of least effort",
  "No control system will perform better than its measuring channel.",
  'href="/styles.css?v=6"',
  'src="/vendor/impress.js/js/impress.min.js"',
  'src="/main.js"',
];

const missing = requiredMarkers.filter((marker) => !html.includes(marker));

if (missing.length > 0) {
  throw new Error(`Source site is missing required deck markers: ${missing.join(", ")}`);
}

const requiredFiles = [
  "favicon.svg",
  "styles.css",
  "main.js",
  "images/qcon-logo.svg",
  "images/srecon24/Rasmussen_plain_outline.png",
  "images/srecon24/Rasmussen_boundary_performance.png",
  "images/srecon24/Rasmussen_boundary_economic.png",
  "images/srecon24/Rasmussen_boundary_workload.png",
  "images/srecon24/Rasmussen_portrait.png",
  "images/srecon24/Rasmussen_Model_Original.png",
  "images/srecon24/Rasmussen_paper_figure_8.png",
  "images/srecon24/emoji-radioactive.png",
  "images/srecon24/emoji-passenger-ship-boat.png",
  "images/srecon24/emoji-hospital.png",
  "images/srecon24/man-woman-robot-separated-magnifying.png",
  "images/srecon24/robot-human-together.png",
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

if (stepCount !== 11) {
  throw new Error(`Expected exactly eleven impress.js steps, found ${stepCount}`);
}

console.log(`Verified src/index.html with ${stepCount} presentation steps.`);
