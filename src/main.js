const root = document.querySelector("#impress");

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  root.dataset.transitionDuration = "0";
}

window.impress().init();
