const e = [ "Tab", "ArrowDown", "Space", "Escape", " ", "Shift", "Enter", "ArrowLeft", "ArrowRight", "ArrowUp" ], startFocusVisible = () => {
  let t = [], o = !0;
  const s = document, setFocus = e => {
    t.forEach(e => e.classList.remove("ion-focused")), e.forEach(e => e.classList.add("ion-focused")), 
    t = e;
  }, pointerDown = () => {
    o = !1, setFocus([]);
  };
  s.addEventListener("keydown", t => {
    o = e.includes(t.key), o || setFocus([]);
  }), s.addEventListener("focusin", e => {
    if (o && e.composedPath) {
      const t = e.composedPath().filter(e => !!e.classList && e.classList.contains("ion-focusable"));
      setFocus(t);
    }
  }), s.addEventListener("focusout", () => {
    s.activeElement === s.body && setFocus([]);
  }), s.addEventListener("touchstart", pointerDown), s.addEventListener("mousedown", pointerDown);
};

export { startFocusVisible }