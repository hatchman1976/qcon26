const root = document.querySelector("#impress");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (prefersReducedMotion.matches) {
  root.dataset.transitionDuration = "0";
}

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
    event.target.contains(layer) && trigger.classList.contains("substep-visible")
  );
  if (pulseStep) startArrowPulses(pulseStep);
});

document.addEventListener("impress:stepleave", (event) => {
  if (activeArrowPulseStep && event.target.contains(activeArrowPulseStep)) stopArrowPulses();
});

const roamingPointStep = document.querySelector("#the-fish-diagram .plain-roaming-point-reveal");
const roamingPointPosition = roamingPointStep.querySelector(".plain-roaming-point-position");
const workloadMovingLine = document.querySelector("#the-fish-diagram .plain-workload-motion .plain-barrier-moving");
const playingSurfacePath = new Path2D(
  document.querySelector("#the-fish-diagram .plain-playing-surface-shade path").getAttribute("d")
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

function isInsidePlayingSurface(x, y) {
  // Keep the whole 35px circle clear of the boundary, not just its centre.
  return [[0, 0], [-23, 0], [23, 0], [0, -23], [0, 23]].every(([dx, dy]) =>
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
  ...[[710, 350], [770, 380], [740, 450], [690, 475]]
    .map(([x, y]) => ({ kind: "workload", x, y })),
  ...[[470, 180], [410, 215], [330, 260], [265, 385], [315, 435], [380, 485], [470, 520]]
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

function isValidGuardianPosition({ kind, anchor }, candidate) {
  if (kind !== "margin" && !isInsidePlayingSurface(candidate.x, candidate.y)) return false;
  if (kind === "margin" && candidate.x < 360 && candidate.y > 300 && candidate.y < 370) return false;
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
    icon.src = "/images/srecon24/cartoon-tank.png";
    icon.width = 50;
    icon.alt = "";
  } else {
    icon.textContent = kind === "economic" ? "📉" : "✋";
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
    const delay = prefersReducedMotion.matches ? 0 : revealAt;
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

window.impress().init();
