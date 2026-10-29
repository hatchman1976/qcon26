const root = document.querySelector("#impress");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (prefersReducedMotion.matches) {
  root.dataset.transitionDuration = "0";
}

// The native plugin resets reveals on entry. Keep these slides' last reveal
// state when revisiting them, while still allowing manual reversal.
document.addEventListener("impress:stepenter", (event) => {
  if (!event.target.matches(".practice-slide, .token-economy-slide, .model-enshittification-slide, .ai-margin-pressure-slide")) return;
  const revealed = [...event.target.querySelectorAll(".substep-visible")];
  queueMicrotask(() => revealed.forEach((substep) => substep.classList.add("substep-visible")));
}, true);

const paperThemesSlide = root.querySelector("#paper-themes");
const lastPaperTheme = paperThemesSlide.querySelector(".paper-theme:last-child");

function retainPaperThemesForReducedMotion() {
  if (prefersReducedMotion.matches && paperThemesSlide.classList.contains("has-entered")) {
    paperThemesSlide.classList.add("is-rendered");
  }
}

document.addEventListener("impress:stepenter", (event) => {
  if (event.target !== paperThemesSlide) return;
  // Keep the first entrance running on the canvas through navigation.
  paperThemesSlide.classList.add("has-entered");
  retainPaperThemesForReducedMotion();
});
paperThemesSlide.addEventListener("animationend", (event) => {
  if (event.target === lastPaperTheme && event.animationName === "paper-theme-reveal") {
    paperThemesSlide.classList.add("is-rendered");
  }
});
prefersReducedMotion.addEventListener("change", retainPaperThemesForReducedMotion);
window.addEventListener("beforeprint", () => {
  if (paperThemesSlide.classList.contains("has-entered")) paperThemesSlide.classList.add("is-rendered");
});

const plainFishSlide = root.querySelector("#the-fish-diagram");
const plainFishGeometry = [...plainFishSlide.querySelectorAll(".plain-boundary-reveal, .plain-model-margin")];
const plainFishCloseups = new Set([
  "diagram-legend", "fish-diagram-overlay", "economic-boundary", "economic-boundary-actions",
  "workload-boundary", "workload-boundary-actions", "performance-boundary", "error-margin", "fish-diagram-overview",
]);
const complexFishSlide = root.querySelector("#complex-system-and-boundaries");

function retainComplexScene() {
  complexFishSlide.classList.add("is-fish-rendered", "is-rendered");
}

function retainPlainFishGeometry() {
  plainFishGeometry.forEach((piece) => {
    if (piece.classList.contains("substep-visible") && !piece.classList.contains("is-rendered")) {
      piece.classList.add("is-rendered");
    }
  });
}

const plainFishObserver = new MutationObserver(retainPlainFishGeometry);
plainFishGeometry.forEach((piece) => plainFishObserver.observe(piece, { attributes: true, attributeFilter: ["class"] }));
document.addEventListener("impress:stepenter", (event) => {
  if (plainFishCloseups.has(event.target.id)) {
    plainFishGeometry.forEach((piece) => piece.classList.add("is-rendered"));
  }
  if (event.target === complexFishSlide && prefersReducedMotion.matches) {
    retainComplexScene();
  }
});
document.addEventListener("animationend", (event) => {
  if (event.animationName === "social-fish-piece-reveal" && complexFishSlide.contains(event.target)) {
    complexFishSlide.classList.add("is-fish-rendered");
  }
  if (event.animationName === "complex-ai-reveal" && complexFishSlide.contains(event.target)) {
    retainComplexScene();
  }
});
document.addEventListener("impress:stepleave", (event) => {
  if (event.target === complexFishSlide) retainComplexScene();
});
prefersReducedMotion.addEventListener("change", () => {
  if (prefersReducedMotion.matches && complexFishSlide.classList.contains("active")) {
    retainComplexScene();
  }
});
window.addEventListener("beforeprint", () => {
  if (complexFishSlide.classList.contains("active")) retainComplexScene();
});

const arrowPulseSteps = [...document.querySelectorAll(".social-arrow-pulses")]
  .map((layer) => ({ layer, trigger: layer.closest(".substep") }));
let activeArrowPulseStep;
let activeArrowPulseTrigger;
// Points on visible arrow paths in the 300px-wide complex-system image.
const arrowPulseLocations = [
  [64, 125], [101, 124], [74, 141], [132, 109],
  [154, 156], [136, 176], [55, 192], [123, 201],
  [192, 219], [173, 249], [90, 252], [73, 220],
  [223, 132], [257, 157], [231, 176], [140, 215],
];
const recentArrowPulseLocations = [];
let arrowPulseInterval;

function stopArrowPulses() {
  window.clearInterval(arrowPulseInterval);
  arrowPulseInterval = undefined;
  activeArrowPulseStep?.replaceChildren();
  activeArrowPulseStep = undefined;
  activeArrowPulseTrigger = undefined;
}

function addArrowPulse(step) {
  const availableLocations = arrowPulseLocations
    .map((_, index) => index)
    .filter((index) => !recentArrowPulseLocations.includes(index));
  const locationIndex = availableLocations[Math.floor(Math.random() * availableLocations.length)];
  const [x, y] = arrowPulseLocations[locationIndex];
  recentArrowPulseLocations.push(locationIndex);
  if (recentArrowPulseLocations.length > 3) recentArrowPulseLocations.shift();

  const pulse = document.createElement("span");
  pulse.className = "social-arrow-pulse";
  pulse.style.left = `${x}px`;
  pulse.style.top = `${y}px`;
  step.appendChild(pulse);
  window.setTimeout(() => pulse.remove(), 1600);
}

function startArrowPulses({ layer, trigger }) {
  stopArrowPulses();
  activeArrowPulseStep = layer;
  activeArrowPulseTrigger = trigger;
  recentArrowPulseLocations.length = 0;
  addArrowPulse(layer);
  addArrowPulse(layer);
  arrowPulseInterval = window.setInterval(() => addArrowPulse(layer), 550);
}

document.addEventListener("impress:substep:enter", (event) => {
  const pulseStep = arrowPulseSteps.find(({ trigger }) => trigger === event.detail.substep);
  if (pulseStep) startArrowPulses(pulseStep);
});

document.addEventListener("impress:substep:leave", (event) => {
  if (event.detail.substep === activeArrowPulseTrigger) stopArrowPulses();
});

document.addEventListener("impress:stepenter", (event) => {
  const pulseStep = arrowPulseSteps.find(({ layer, trigger }) =>
    event.target.contains(layer) && (trigger?.classList.contains("substep-visible") ||
      (event.target === complexFishSlide && complexFishSlide.classList.contains("is-rendered") && !prefersReducedMotion.matches))
  );
  if (pulseStep) startArrowPulses(pulseStep);
});

document.addEventListener("animationstart", (event) => {
  if (event.animationName !== "complex-network-reveal" || prefersReducedMotion.matches) return;
  const pulseStep = arrowPulseSteps.find(({ layer }) =>
    layer.parentElement === event.target && layer.closest(".step").classList.contains("present")
  );
  if (pulseStep) startArrowPulses(pulseStep);
});

document.addEventListener("impress:stepleave", (event) => {
  if (activeArrowPulseStep && event.target.contains(activeArrowPulseStep)) stopArrowPulses();
});

prefersReducedMotion.addEventListener("change", () => {
  if (prefersReducedMotion.matches && activeArrowPulseStep?.closest("#complex-system-and-boundaries")) {
    stopArrowPulses();
  }
});

const expertiseSequenceSlide = root.querySelector("#expertise-erosion-sequence");
const expertisePulseLayer = expertiseSequenceSlide.querySelector(".expertise-arrow-pulses");
const expertiseShrugTrigger = expertiseSequenceSlide.querySelector(".expertise-shrug-trigger");
const expertiseFireTrigger = expertiseSequenceSlide.querySelector(".expertise-fire-trigger");
const expertiseFineScene = expertiseSequenceSlide.querySelector(".expertise-fine-scene");
const expertiseFineImage = expertiseFineScene.querySelector("img");

function syncExpertiseSequence() {
  const active = expertiseSequenceSlide.classList.contains("active");
  const shrugging = expertiseShrugTrigger.classList.contains("substep-visible");
  const burning = expertiseFireTrigger.classList.contains("substep-visible");
  const fine = expertiseFineScene.classList.contains("substep-visible");
  const showPeople = active && !shrugging && !fine;

  if (showPeople && !prefersReducedMotion.matches) {
    if (activeArrowPulseStep !== expertisePulseLayer) {
      startArrowPulses({ layer: expertisePulseLayer, trigger: null });
    }
  } else if (activeArrowPulseStep === expertisePulseLayer) {
    stopArrowPulses();
  }

  expertiseSequenceSlide.querySelector(".expertise-people-scene").setAttribute("aria-hidden", String(!showPeople));
  expertiseSequenceSlide.querySelector(".expertise-shrug-scene").setAttribute("aria-hidden", String(!active || !shrugging || fine));
  expertiseSequenceSlide.querySelector(".expertise-fire").setAttribute("aria-hidden", String(!active || !burning || fine));
  expertiseFineScene.setAttribute("aria-hidden", String(!fine));

  const source = fine && !prefersReducedMotion.matches
    ? expertiseFineImage.dataset.animatedSrc
    : expertiseFineImage.dataset.stillSrc;
  if (expertiseFineImage.getAttribute("src") !== source) expertiseFineImage.src = source;
}

for (const eventName of ["impress:substep:enter", "impress:substep:leave"]) {
  document.addEventListener(eventName, (event) => {
    if (expertiseSequenceSlide.contains(event.detail?.substep)) queueMicrotask(syncExpertiseSequence);
  });
}
for (const eventName of ["impress:substep:show", "impress:substep:hide", "impress:stepenter", "impress:stepleave"]) {
  document.addEventListener(eventName, () => queueMicrotask(syncExpertiseSequence));
}
prefersReducedMotion.addEventListener("change", syncExpertiseSequence);
window.addEventListener("beforeprint", () => { expertiseFineImage.src = expertiseFineImage.dataset.stillSrc; });
window.addEventListener("afterprint", syncExpertiseSequence);

const closingRecoverySlide = root.querySelector("#rehearsed-recovery");
const closingSystemReveal = closingRecoverySlide.querySelector(".closing-human-scene");
const closingPulseLayer = closingRecoverySlide.querySelector(".closing-arrow-pulses");

function syncClosingSystemPulses() {
  const revealed = closingSystemReveal.classList.contains("substep-visible");
  if (revealed && closingRecoverySlide.classList.contains("active") && !prefersReducedMotion.matches) {
    if (activeArrowPulseStep !== closingPulseLayer) {
      closingPulseLayer.replaceChildren();
      startArrowPulses({ layer: closingPulseLayer, trigger: null });
    }
    return;
  }
  if (activeArrowPulseStep === closingPulseLayer) stopArrowPulses();
  if (!revealed) {
    closingPulseLayer.replaceChildren();
  } else if (!closingPulseLayer.childElementCount) {
    // Keep the diagram's orange markers visible when motion is paused.
    for (const [x, y] of [[64, 125], [154, 156], [231, 176]]) {
      const point = document.createElement("span");
      point.className = "social-arrow-pulse closing-still-point";
      point.style.left = x + "px";
      point.style.top = y + "px";
      closingPulseLayer.append(point);
    }
  }
}

new MutationObserver(syncClosingSystemPulses).observe(closingSystemReveal, {
  attributes: true, attributeFilter: ["class"],
});
for (const eventName of ["impress:stepenter", "impress:stepleave"]) {
  document.addEventListener(eventName, (event) => {
    if (event.target === closingRecoverySlide) queueMicrotask(syncClosingSystemPulses);
  });
}
prefersReducedMotion.addEventListener("change", syncClosingSystemPulses);

const roamingPointStep = document.querySelector("#the-fish-diagram .plain-roaming-point-reveal");
const roamingPointPosition = roamingPointStep.querySelector(".plain-roaming-point-position");
const workloadMovingLine = document.querySelector("#the-fish-diagram .plain-workload-motion .plain-barrier-moving");
// Preserve the point's conservative motion envelope independently of the visible boundary fill.
const playingSurfacePath = new Path2D(
  document.querySelector("#the-fish-diagram .plain-playing-surface-shade path").dataset.roamingEnvelope
);
const playingSurfaceCanvas = document.createElement("canvas");
playingSurfaceCanvas.width = 1024;
playingSurfaceCanvas.height = 768;
const playingSurfaceContext = playingSurfaceCanvas.getContext("2d");
const roamingPointStart = { x: 512, y: 404 };
const roamingPointFallbacks = [
  [390, 285], [500, 235], [625, 260], [715, 340],
  [675, 430], [565, 480], [430, 450], [345, 365],
];
let roamingPointCenter = roamingPointStart;
let roamingPointTimeout;
let roamingPointGeneration = 0;

function stopRoamingPoint() {
  roamingPointGeneration += 1;
  window.clearTimeout(roamingPointTimeout);
  roamingPointTimeout = undefined;
  roamingPointPosition.classList.remove("is-moving");
  roamingPointPosition.style.transform = "translate3d(0, 0, 0)";
  roamingPointCenter = roamingPointStart;
}

function isInsidePlayingSurface(x, y, clearance = 23) {
  // Keep the whole 35px circle clear of the boundary, not just its centre.
  return [[0, 0], [-clearance, 0], [clearance, 0], [0, -clearance], [0, clearance]].every(([dx, dy]) =>
    playingSurfaceContext.isPointInPath(playingSurfacePath, x + dx, y + dy)
  );
}

function chooseRoamingPointDestination() {
  const candidates = [];
  for (let attempt = 0; attempt < 160; attempt += 1) {
    const x = 265 + Math.random() * 555;
    const y = 170 + Math.random() * 375;
    if (Math.hypot(x - roamingPointCenter.x, y - roamingPointCenter.y) < 80) continue;
    if (isInsidePlayingSurface(x, y)) candidates.push({ x, y });
  }

  if (candidates.length === 0) {
    candidates.push(...roamingPointFallbacks.map(([x, y]) => ({ x, y })));
  }

  // Lower x is closer to the dotted error margin. Keep the path random, but
  // choose lower-x destinations more often to show migration toward that edge.
  candidates.sort((a, b) => a.x - b.x);
  const preferredIndex = Math.floor(Math.random() ** 2.5 * candidates.length);
  return candidates[preferredIndex];
}

function moveRoamingPoint() {
  if (!roamingPointStep.classList.contains("substep-visible")) return;

  const destination = chooseRoamingPointDestination();
  roamingPointPosition.classList.add("is-moving");
  roamingPointPosition.style.transform = `translate3d(${destination.x - roamingPointStart.x}px, ${destination.y - roamingPointStart.y}px, 0)`;
  roamingPointCenter = destination;
  roamingPointTimeout = window.setTimeout(moveRoamingPoint, 6800 + Math.random() * 1400);
}

function startRoamingPoint() {
  stopRoamingPoint();
  if (prefersReducedMotion.matches) return;

  const generation = roamingPointGeneration;
  const scheduleMovement = () => {
    if (generation !== roamingPointGeneration || !roamingPointStep.classList.contains("substep-visible")) return;
    roamingPointTimeout = window.setTimeout(moveRoamingPoint, 1500);
  };
  const boundaryMotion = workloadMovingLine.getAnimations()
    .find((animation) => animation.animationName === "plain-barrier-shift" && animation.playState !== "finished");
  if (boundaryMotion) {
    boundaryMotion.finished.then(scheduleMovement).catch(() => {});
  } else {
    scheduleMovement();
  }
}

document.addEventListener("impress:substep:enter", (event) => {
  if (event.detail.substep === roamingPointStep) startRoamingPoint();
});

new MutationObserver(() => {
  if (!roamingPointStep.classList.contains("substep-visible")) stopRoamingPoint();
}).observe(roamingPointStep, { attributes: true, attributeFilter: ["class"] });

document.addEventListener("impress:stepenter", (event) => {
  if (event.target.id === "the-fish-diagram" && roamingPointStep.classList.contains("substep-visible")) {
    startRoamingPoint();
  }
});

const guardianActionsStep = document.querySelector("#the-fish-diagram .plain-guardian-actions");
const gradientArrows = document.querySelector("#the-fish-diagram .plain-gradient-arrows");
const guardianActionSlots = [
  { kind: "economic", x: 580, y: 180, anchor: true },
  ...[[645, 210], [620, 280], [700, 275], [780, 300]]
    .map(([x, y]) => ({ kind: "economic", x, y })),
  { kind: "workload", x: 660, y: 404, anchor: true },
  { kind: "workload", x: 555, y: 510, anchor: true },
  ...[[710, 350], [770, 380], [740, 450], [690, 475]]
    .map(([x, y]) => ({ kind: "workload", x, y })),
  { kind: "margin", x: 257, y: 338, anchor: true, allowMarginGap: true },
  ...[[470, 180], [410, 215], [330, 220], [315, 435], [380, 485], [470, 520]]
    .map(([x, y]) => ({ kind: "margin", x, y })),
];
const guardianActionAnchors = guardianActionSlots.filter((slot) => slot.anchor);
let guardianActionTimeouts = [];
let guardianActionPositions = [];
let guardianActionGeneration = 0;

function stopGuardianActions() {
  guardianActionGeneration += 1;
  guardianActionTimeouts.forEach((timeout) => window.clearTimeout(timeout));
  guardianActionTimeouts = [];
  guardianActionPositions = [];
  guardianActionsStep.replaceChildren();
  gradientArrows.classList.remove("is-visible");
}

function isValidGuardianPosition({ kind, anchor, allowMarginGap }, candidate) {
  if (kind !== "margin" && !isInsidePlayingSurface(candidate.x, candidate.y)) return false;
  if (kind === "margin" && !allowMarginGap && candidate.x < 360 && candidate.y > 300 && candidate.y < 370) return false;
  if (!anchor && guardianActionAnchors.some((reserved) =>
    Math.hypot(candidate.x - reserved.x, candidate.y - reserved.y) < 62
  )) return false;
  return !guardianActionPositions.some((other) =>
    Math.hypot(candidate.x - other.x, candidate.y - other.y) <
      (kind === "margin" || other.kind === "margin" ? 58 : 52)
  );
}

function showGuardianAction(slot) {
  if (!guardianActionsStep.classList.contains("substep-visible")) return;

  const { kind, x, y, anchor } = slot;
  const jitter = anchor ? { x: 6, y: 5 } : kind === "margin" ? { x: 14, y: 12 } : { x: 17, y: 14 };
  let position;
  for (let attempt = 0; attempt < 160; attempt += 1) {
    const candidate = {
      x: x + (Math.random() * 2 - 1) * jitter.x,
      y: y + (Math.random() * 2 - 1) * jitter.y,
    };
    if (!isValidGuardianPosition(slot, candidate)) continue;
    position = candidate;
    break;
  }
  if (!position && isValidGuardianPosition(slot, { x, y })) position = { x, y };
  if (!position) return;
  guardianActionPositions.push({ ...position, kind });

  const icon = kind === "margin" ? document.createElement("img") : document.createElement("span");
  icon.className = `plain-guardian-icon plain-guardian-${kind}`;
  icon.setAttribute("aria-hidden", "true");
  icon.style.left = `${position.x}px`;
  icon.style.top = `${position.y}px`;

  if (kind === "margin") {
    icon.src = prefersReducedMotion.matches
      ? "/images/qcon26/blocker-lemming.png"
      : "/images/qcon26/blocker-lemming.gif";
    icon.classList.add("blocker-lemming");
    icon.width = 50;
    icon.alt = "";
  } else {
    icon.textContent = kind === "economic" ? "📉" : "🫷";
  }

  guardianActionsStep.appendChild(icon);
}

async function revealGradientArrows(generation) {
  const arrivalAnimations = guardianActionsStep.getAnimations({ subtree: true })
    .filter((animation) => animation.animationName === "plain-guardian-arrive");
  try {
    await Promise.all(arrivalAnimations.map((animation) => animation.finished));
  } catch {
    return;
  }
  if (generation !== guardianActionGeneration || !guardianActionsStep.classList.contains("substep-visible")) return;
  gradientArrows.classList.add("is-visible");
}

function startGuardianActions() {
  stopGuardianActions();
  const generation = guardianActionGeneration;
  const shuffledSlots = [...guardianActionSlots];
  for (let index = shuffledSlots.length - 1; index > 0; index -= 1) {
    const otherIndex = Math.floor(Math.random() * (index + 1));
    [shuffledSlots[index], shuffledSlots[otherIndex]] = [shuffledSlots[otherIndex], shuffledSlots[index]];
  }

  let revealAt = 180;
  let remainingSlots = shuffledSlots.length;
  shuffledSlots.forEach((slot) => {
    revealAt += 500 + Math.random() * 1000;
    if (Math.random() < 0.25) revealAt += 500 + Math.random() * 700;
    const delay = prefersReducedMotion.matches ? 0 : revealAt / 3;
    guardianActionTimeouts.push(window.setTimeout(() => {
      if (generation !== guardianActionGeneration || !guardianActionsStep.classList.contains("substep-visible")) return;
      showGuardianAction(slot);
      remainingSlots -= 1;
      if (remainingSlots === 0) revealGradientArrows(generation);
    }, delay));
  });
}

document.addEventListener("impress:substep:enter", (event) => {
  if (event.detail.substep === guardianActionsStep) startGuardianActions();
});

new MutationObserver(() => {
  if (!guardianActionsStep.classList.contains("substep-visible")) stopGuardianActions();
}).observe(guardianActionsStep, { attributes: true, attributeFilter: ["class"] });

document.addEventListener("impress:stepenter", (event) => {
  if (event.target.id === "the-fish-diagram" && guardianActionsStep.classList.contains("substep-visible")) {
    startGuardianActions();
  }
});

const aiFishSlide = document.querySelector("#ai-fish-diagram");
const aiFishModel = aiFishSlide.querySelector(".ai-fish-model");
const aiRoamingPoint = aiFishSlide.querySelector(".ai-roaming-point-position");
const aiRoamingSteps = new Set([
  "ai-operating-point", "ai-fish-diagram", "ai-economic-pressure", "token-economy", "model-enshittification",
  "ai-workload-pressure", "erosion-of-expertise", "expertise-erosion-sequence", "ai-margin-pressure",
  "ai-fish-diagram-overview",
]);
let aiRoamingTimeout;
let aiRoamingCenter = { x: 512, y: 404 };

const aiMarginSlide = root.querySelector("#ai-margin-pressure");
const aiMarginPath = aiMarginSlide.querySelector(".ai-margin-trail-path");
const aiMarginTrailReveal = aiMarginSlide.querySelector(".ai-margin-trail-reveal");
const aiMarginTrailCutout = aiMarginSlide.querySelector(".ai-margin-trail-cutout");
const aiMarginPoint = aiMarginSlide.querySelector(".ai-margin-point");
const aiMarginPressureTrigger = aiMarginSlide.querySelector(".ai-margin-pressure-trigger");
const aiMarginPathLength = aiMarginPath.getTotalLength();
const aiMarginThreshold = aiMarginSlide.querySelector(".ai-margin-approach-guide").getTotalLength() / aiMarginPathLength;
let aiMarginPhase = 0;
let aiMarginProgress = 0;
let aiMarginFrame;
let aiMarginRunning = false;

// The close-up has its own illustrative point; the wider model keeps roaming.
const aiMarginDiameter = Number.parseFloat(getComputedStyle(aiRoamingPoint).getPropertyValue("--ai-ball-diameter")) / 2 *
  Number(aiFishSlide.dataset.scale) / Number(aiMarginSlide.dataset.scale);
aiMarginSlide.style.setProperty("--ai-margin-ball-diameter", aiMarginDiameter + "px");
aiMarginSlide.querySelectorAll("#ai-margin-trail-mask circle").forEach((cutout) => {
  cutout.setAttribute("r", String(aiMarginDiameter / 2 + 3));
});

// Lower layers arrive first and bury the protective intervention right of the margin.
const aiMarginBucketLandings = [
  [525, 630], [598, 630], [671, 630], [744, 630], [817, 630], [890, 630],
  [565, 555], [638, 555], [711, 555], [784, 555], [857, 555],
  [640, 480], [713, 480], [786, 480],
  [680, 430], [753, 430],
];
aiMarginBucketLandings.forEach(([x, floor], index) => {
  const bucket = document.createElement("img");
  bucket.className = "ai-margin-bucket";
  bucket.src = "/images/srecon26/ai-slop-bucket.png";
  bucket.alt = "";
  bucket.style.setProperty("--rain-x", x + "px");
  bucket.style.setProperty("--rain-start-x", "0px");
  bucket.style.setProperty("--rain-delay", index * 240 + "ms");
  bucket.style.setProperty("--rain-sway", (index % 3 - 1) * 10 + "px");
  bucket.style.setProperty("--rain-floor", floor + "px");
  bucket.style.setProperty("--rain-tilt", (index % 5 - 2) * 9 + "deg");
  aiMarginSlide.querySelector(".ai-margin-rain").append(bucket);
});

function marginPhaseFromSubsteps() {
  return aiMarginPressureTrigger.classList.contains("substep-visible") ? 1 : 0;
}

function renderAiMarginProgress(progress) {
  aiMarginProgress = progress;
  const point = aiMarginPath.getPointAtLength(aiMarginPathLength * progress);
  aiMarginPoint.style.setProperty("--margin-point-x", point.x + "px");
  aiMarginPoint.style.setProperty("--margin-point-y", point.y + "px");
  aiMarginTrailReveal.style.strokeDashoffset = String(1 - progress);
  aiMarginTrailCutout.setAttribute("cx", String(point.x));
  aiMarginTrailCutout.setAttribute("cy", String(point.y));
  aiMarginSlide.dataset.progress = progress.toFixed(3);
  const crossed = progress > aiMarginThreshold + 0.0001;
  aiMarginSlide.classList.toggle("has-crossed-margin", crossed);
  aiMarginSlide.querySelector(".ai-margin-warning").setAttribute("aria-hidden", String(!crossed));
}

function stopAiMarginAnimation() {
  window.cancelAnimationFrame(aiMarginFrame);
  aiMarginFrame = undefined;
  aiMarginRunning = false;
}

function settleAiMarginPhase() {
  stopAiMarginAnimation();
  aiMarginSlide.classList.toggle("is-raining", aiMarginPhase > 0);
  aiMarginSlide.classList.toggle("is-pressure-complete", aiMarginPhase > 0);
  aiMarginSlide.classList.toggle("is-complete", aiMarginPhase > 0);
  renderAiMarginProgress(aiMarginPhase > 0 ? 1 : 0);
}

function animateAiMarginTo(target, duration) {
  const from = aiMarginProgress;
  const startedAt = performance.now();
  aiMarginRunning = true;
  const tick = (now) => {
    const fraction = Math.min(1, (now - startedAt) / duration);
    const eased = fraction * fraction * (3 - 2 * fraction);
    renderAiMarginProgress(from + (target - from) * eased);
    if (fraction === 1) settleAiMarginPhase();
    else aiMarginFrame = window.requestAnimationFrame(tick);
  };
  aiMarginFrame = window.requestAnimationFrame(tick);
}

function syncAiMarginPhase() {
  const phase = marginPhaseFromSubsteps();
  if (phase === aiMarginPhase) {
    if (prefersReducedMotion.matches && aiMarginRunning) settleAiMarginPhase();
    return;
  }
  const previous = aiMarginPhase;
  stopAiMarginAnimation();
  aiMarginPhase = phase;
  aiMarginSlide.dataset.phase = String(phase);
  if (phase < previous || prefersReducedMotion.matches) {
    settleAiMarginPhase();
    return;
  }
  aiMarginSlide.classList.remove("is-complete");
  aiMarginSlide.classList.add("is-raining");
  aiMarginSlide.classList.remove("is-pressure-complete");
  renderAiMarginProgress(0);
  animateAiMarginTo(1, 10500);
}

new MutationObserver(syncAiMarginPhase).observe(aiMarginSlide, {
  subtree: true, attributes: true, attributeFilter: ["class"],
});
document.addEventListener("impress:stepenter", (event) => {
  if (event.target !== aiMarginSlide) return;
  aiMarginSlide.classList.add("has-entered");
  queueMicrotask(syncAiMarginPhase);
});
document.addEventListener("impress:stepleave", (event) => {
  if (event.target === aiMarginSlide) settleAiMarginPhase();
});
prefersReducedMotion.addEventListener("change", syncAiMarginPhase);
window.addEventListener("beforeprint", () => {
  if (aiMarginRunning) settleAiMarginPhase();
});
aiMarginSlide.addEventListener("click", (event) => {
  if (!aiMarginSlide.classList.contains("active") || event.button !== 0 ||
      event.altKey || event.ctrlKey || event.metaKey || event.shiftKey ||
      event.target.closest("a, button, input, select, textarea")) return;
  event.stopPropagation();
  window.impress().next(event);
});

function retainAiFishDiagram() {
  aiFishSlide.classList.add("is-rendered");
}

function pauseAiRoaming() {
  window.clearTimeout(aiRoamingTimeout);
  aiRoamingTimeout = undefined;
  if (!aiRoamingPoint.classList.contains("is-moving")) return;
  const position = new DOMMatrixReadOnly(getComputedStyle(aiRoamingPoint).transform);
  aiRoamingPoint.classList.remove("is-moving");
  aiRoamingPoint.style.transform = "translate3d(" + position.m41 + "px, " + position.m42 + "px, 0)";
  aiRoamingCenter = { x: 512 + position.m41, y: 404 + position.m42 };
}

function moveAiRoamingPoint() {
  window.clearTimeout(aiRoamingTimeout);
  aiRoamingTimeout = undefined;
  if (!aiFishSlide.classList.contains("is-rendered") || prefersReducedMotion.matches) return;
  const candidates = [];
  for (let attempt = 0; attempt < 160; attempt += 1) {
    const x = 290 + Math.random() * 490;
    const y = 185 + Math.random() * 345;
    if (isInsidePlayingSurface(x, y, 42) && Math.hypot(x - aiRoamingCenter.x, y - aiRoamingCenter.y) > 80) {
      candidates.push({ x, y });
    }
  }
  if (candidates.length === 0) {
    candidates.push(...roamingPointFallbacks.filter(([x, y]) => isInsidePlayingSurface(x, y, 42))
      .map(([x, y]) => ({ x, y })));
  }
  candidates.sort((a, b) => a.x - b.x);
  const destination = candidates[Math.floor(Math.random() ** 2 * candidates.length)];
  if (!destination) return;
  aiRoamingPoint.classList.add("is-moving");
  aiRoamingPoint.style.transform = "translate3d(" + (destination.x - 512) + "px, " + (destination.y - 404) + "px, 0)";
  aiRoamingCenter = destination;
  aiRoamingTimeout = window.setTimeout(moveAiRoamingPoint, 6000);
}

function syncAiRoaming() {
  const activeId = root.querySelector(".step.active")?.id;
  if ((aiRoamingSteps.has(activeId) && !["ai-operating-point", "ai-fish-diagram"].includes(activeId)) ||
      (activeId === "ai-fish-diagram" && prefersReducedMotion.matches)) {
    retainAiFishDiagram();
  }
  if (prefersReducedMotion.matches) {
    pauseAiRoaming();
    return;
  }
  if (aiFishSlide.classList.contains("is-rendered") && aiRoamingTimeout === undefined) moveAiRoamingPoint();
}

document.addEventListener("impress:stepenter", syncAiRoaming);
aiFishModel.addEventListener("animationend", (event) => {
  if (event.target === aiFishModel && event.animationName === "ai-fish-diagram-reveal") {
    retainAiFishDiagram();
    syncAiRoaming();
  }
});
document.addEventListener("impress:stepleave", (event) => {
  if (event.target === aiFishSlide) retainAiFishDiagram();
});
prefersReducedMotion.addEventListener("change", syncAiRoaming);

// Keep table cells in their semantic rows while revealing explicitly ordered columns.
function orderedSubsteps(slide) {
  if (!(slide instanceof Element) || !root.contains(slide) ||
      !slide.matches('.step[data-substep-sequence="columns"]')) return [];
  return [...slide.querySelectorAll(".ordered-substep")]
    .sort((a, b) => Number(a.dataset.substepOrder) - Number(b.dataset.substepOrder));
}

function changeOrderedSubstep(slide, reason) {
  const substeps = orderedSubsteps(slide);
  const visible = substeps.filter((substep) => substep.classList.contains("substep-visible"));
  const substep = reason === "next"
    ? substeps.find((candidate) => !candidate.classList.contains("substep-visible"))
    : visible.at(-1);
  if (!substep) return;

  substeps.forEach((candidate) => candidate.classList.remove("substep-active"));
  if (reason === "next") {
    substep.classList.add("substep-visible", "substep-active");
  } else {
    substep.classList.remove("substep-visible");
    visible.at(-2)?.classList.add("substep-active");
  }
  return substep;
}

window.impress.addPreStepLeavePlugin((event) => {
  if (!event?.target || !["next", "prev"].includes(event.detail?.reason)) return;
  const { reason } = event.detail;
  const substep = changeOrderedSubstep(event.target, reason);
  if (!substep) return;
  for (const eventName of ["impress:substep:stepleaveaborted", `impress:substep:${reason === "next" ? "enter" : "leave"}`]) {
    event.target.dispatchEvent(new CustomEvent(eventName, {
      bubbles: true,
      cancelable: true,
      detail: { reason, substep },
    }));
  }
  return false;
});

document.addEventListener("impress:stepenter", (event) => {
  orderedSubsteps(event.target).forEach((substep) => {
    substep.classList.remove("substep-visible", "substep-active");
  });
});
for (const [eventName, reason] of [["impress:substep:show", "next"], ["impress:substep:hide", "prev"]]) {
  document.addEventListener(eventName, () => changeOrderedSubstep(root.querySelector(".step.active"), reason));
}

const referenceTablist = root.querySelector("#references .references-tabs");
const referenceTabs = [...(referenceTablist?.querySelectorAll("[data-reference-tab]") ?? [])];

function selectReferenceTab(tab) {
  referenceTabs.forEach((candidate) => {
    const selected = candidate === tab;
    candidate.setAttribute("aria-selected", String(selected));
    candidate.tabIndex = selected ? 0 : -1;
    const panel = document.getElementById(candidate.getAttribute("aria-controls"));
    if (panel) panel.hidden = !selected;
  });
}

referenceTablist?.addEventListener("click", (event) => {
  const tab = event.target.closest("[data-reference-tab]");
  if (!referenceTabs.includes(tab)) return;
  event.stopPropagation();
  selectReferenceTab(tab);
});

const referenceTabKeys = ["ArrowLeft", "ArrowRight", "Home", "End", "Enter", " "];
for (const eventName of ["keydown", "keyup"]) {
  referenceTablist?.addEventListener(eventName, (event) => {
    const tab = event.target.closest("[data-reference-tab]");
    if (!referenceTabs.includes(tab) || !referenceTabKeys.includes(event.key)) return;
    event.preventDefault();
    event.stopPropagation();
    if (eventName === "keyup") return;

    let index = referenceTabs.indexOf(tab);
    if (event.key === "ArrowLeft") index = (index - 1 + referenceTabs.length) % referenceTabs.length;
    if (event.key === "ArrowRight") index = (index + 1) % referenceTabs.length;
    if (event.key === "Home") index = 0;
    if (event.key === "End") index = referenceTabs.length - 1;
    selectReferenceTab(referenceTabs[index]);
    referenceTabs[index].focus();
  });
}

window.impress().init();
