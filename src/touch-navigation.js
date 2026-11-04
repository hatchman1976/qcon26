(() => {
  const root = document.querySelector("#impress");
  const navigation = document.querySelector(".touch-navigation");
  const counter = navigation.querySelector("[data-slide-counter]");
  const slides = [...root.querySelectorAll(".step")];
  const interactive = "a, button, input, select, textarea, [contenteditable], [role='tab'], [role='slider']";
  let gesture;

  function updateCounter() {
    const index = slides.indexOf(root.querySelector(".step.active"));
    counter.textContent = index < 0 ? "" : `${index + 1} / ${slides.length}`;
  }

  navigation.addEventListener("click", (event) => {
    event.stopPropagation();
    const direction = event.target.closest("[data-direction]")?.dataset.direction;
    if (direction === "next" || direction === "prev") window.impress()[direction]();
  });
  for (const type of ["keydown", "keyup"]) {
    navigation.addEventListener(type, (event) => event.stopPropagation());
  }
  document.addEventListener("impress:stepenter", updateCounter);

  // Capture replaces the vendor's touch preview, which consumes a substep on
  // every move. Only a completed horizontal swipe may advance the deck once.
  for (const type of ["touchstart", "touchmove", "touchend", "touchcancel"]) {
    document.addEventListener(type, (event) => {
      if (!document.body.classList.contains("impress-enabled")) return;
      event.stopPropagation();

      if (type === "touchstart") {
        gesture = undefined;
        if (event.touches.length !== 1 || event.target.closest(interactive)) return;
        const touch = event.touches[0];
        gesture = { id: touch.identifier, x: touch.clientX, y: touch.clientY };
        return;
      }
      if (type === "touchcancel") {
        gesture = undefined;
        return;
      }
      if (!gesture) return;
      if (type === "touchmove" && event.touches.length !== 1) {
        gesture = undefined;
        return;
      }

      const touches = type === "touchend" ? event.changedTouches : event.touches;
      const touch = [...touches].find((candidate) => candidate.identifier === gesture.id);
      if (!touch) return;
      const dx = touch.clientX - gesture.x;
      const dy = touch.clientY - gesture.y;
      const horizontal = Math.abs(dx) > Math.abs(dy) * 1.3;
      if (type === "touchmove") {
        if (horizontal && Math.abs(dx) > 12 && event.cancelable) event.preventDefault();
        return;
      }

      gesture = undefined;
      const threshold = Math.max(40, Math.min(100, window.innerWidth * 0.12));
      if (horizontal && Math.abs(dx) >= threshold) {
        if (event.cancelable) event.preventDefault();
        window.impress()[dx < 0 ? "next" : "prev"]();
      }
    }, { capture: true, passive: false });
  }
  updateCounter();
})();
