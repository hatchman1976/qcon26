import "impress.js";
import "./styles.css";

const root = document.querySelector("#impress");
const progress = document.querySelector("#deck-progress");
const status = document.querySelector("#deck-status");
const steps = [...document.querySelectorAll(".step")];

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  root.dataset.transitionDuration = "0";
}

const deck = window.impress();
deck.init();

const updateDeckUi = (activeStep) => {
  const index = steps.indexOf(activeStep);
  const position = index >= 0 ? index + 1 : 1;
  const percentage = (position / steps.length) * 100;

  progress.style.setProperty("--deck-progress", `${percentage}%`);
  progress.setAttribute("aria-valuenow", String(position));
  progress.setAttribute("aria-valuemax", String(steps.length));
  status.textContent = `${position} / ${steps.length}`;
};

document.addEventListener("impress:stepenter", (event) => {
  updateDeckUi(event.target);
});

updateDeckUi(document.querySelector(".step.active") ?? steps[0]);

