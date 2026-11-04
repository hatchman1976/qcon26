(() => {
  const root = document.querySelector("#impress");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const substeps = ".substep, .ordered-substep";
  const candidates = "img, svg, [role='img'], [data-image-pop-group]";
  const revealed = new WeakMap();
  const animations = new Map();
  const pending = new Set();
  let printing = false;
  let queued = false;

  function targets() {
    return [...root.querySelectorAll(candidates)].filter((target) => {
      if (target.closest(".notes") || target.parentElement.closest("svg")) return false;
      const group = target.closest("[data-image-pop-group]");
      if (group) return target === group;
      // Composite scenes use their individual images unless explicitly grouped.
      return target.matches("img, svg") ||
        (!target.querySelector(candidates) && target.textContent.trim());
    });
  }

  function revealControls(target) {
    const controls = [];
    for (let node = target; node && node !== root; node = node.parentElement) {
      if (node.matches(substeps)) controls.push(node);
      if (node.dataset.imagePopTrigger) {
        const trigger = root.querySelector(node.dataset.imagePopTrigger);
        if (trigger) controls.push(trigger);
      }
    }
    return controls;
  }

  function enabled(target) {
    return !printing && !reducedMotion.matches &&
      !target.closest('table, [role="table"], [role="grid"], .boundary-detail-grid, .workslop-chain') &&
      !target.closest('[data-image-pop="off"]') &&
      !target.querySelector('[data-image-pop="off"]');
  }

  function stop(target) {
    pending.delete(target);
    animations.get(target)?.cancel();
    animations.delete(target);
  }

  function pop(target) {
    if (!enabled(target)) return;
    stop(target);
    const images = target.matches("img") ? [target] : [...target.querySelectorAll("img")];
    if (images.some((image) => !image.complete)) {
      pending.add(target);
      return;
    }
    // Individual scale composes with rolling, roaming and positioned transforms.
    const animation = target.animate([
      { opacity: 0, scale: "0.82", offset: 0 },
      { opacity: 1, scale: "1.10", offset: 0.6 },
      { opacity: 1, scale: "1", offset: 1 },
    ], { duration: 400, easing: "ease-out" });
    animations.set(target, animation);
    animation.onfinish = () => {
      if (animations.get(target) === animation) animations.delete(target);
    };
  }

  function sync() {
    queued = false;
    for (const target of targets()) {
      const controls = revealControls(target);
      const visible = controls.length > 0 && controls.every((control) =>
        control.classList.contains("substep-visible") || control.classList.contains("is-rendered"));
      if (enabled(target)) {
        for (const control of [...controls, ...(target.dataset.imagePopTrigger ? [target] : [])]) {
          if (!control.classList.contains("image-pop-reveal")) control.classList.add("image-pop-reveal");
        }
      }
      if (visible && !revealed.get(target) && !target.dataset.imagePopAnimation) pop(target);
      if (!visible || !enabled(target)) stop(target);
      revealed.set(target, visible);
    }
    for (const target of animations.keys()) {
      if (!target.isConnected) stop(target);
    }
    for (const target of pending) {
      if (!target.isConnected) stop(target);
    }
  }

  // Observe final reveal state, including presenter controls, retained slides,
  // ordered table cells and images inserted after their substep opens.
  new MutationObserver(() => {
    if (!queued) {
      queued = true;
      queueMicrotask(sync);
    }
  }).observe(root, {
    subtree: true, childList: true, attributes: true,
    attributeFilter: ["class", "data-image-pop"],
  });
  root.addEventListener("animationstart", (event) => {
    if (event.target.dataset.imagePopAnimation === event.animationName && revealed.get(event.target)) {
      pop(event.target);
    }
  });
  root.addEventListener("load", (event) => {
    for (const target of [...pending]) {
      if ((target === event.target || target.contains(event.target)) && revealed.get(target)) pop(target);
    }
  }, true);
  reducedMotion.addEventListener("change", sync);
  window.addEventListener("beforeprint", () => { printing = true; sync(); });
  window.addEventListener("afterprint", () => { printing = false; sync(); });
  sync();
})();
