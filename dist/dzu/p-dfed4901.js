import { n as e, p as t } from "./p-9d46771f.js";

const startTapClick = a => {
  let r, c, d, l, v = 10 * -i, u = 0;
  const p = a.getBoolean("animated", !0) && a.getBoolean("rippleEffect", !0), f = new WeakMap, onTouchEnd = t => {
    v = e(t), pointerUp(t);
  }, cancelActive = () => {
    clearTimeout(l), l = void 0, c && (removeActivated(!1), c = void 0);
  }, pointerDown = e => {
    c || void 0 !== r && null !== r.parentElement || (r = void 0, setActivatedElement(getActivatableTarget(e), e));
  }, pointerUp = e => {
    setActivatedElement(void 0, e);
  }, setActivatedElement = (e, s) => {
    // do nothing
    if (e && e === c) return;
    clearTimeout(l), l = void 0;
    const {x: i, y: a} = t(s);
    // deactivate selected
        if (c) {
      if (f.has(c)) throw new Error("internal error");
      c.classList.contains(o) || addActivated(c, i, a), removeActivated(!0);
    }
    // activate
        if (e) {
      const t = f.get(e);
      t && (clearTimeout(t), f.delete(e));
      const s = isInstant(e) ? 0 : n;
      e.classList.remove(o), l = setTimeout(() => {
        addActivated(e, i, a), l = void 0;
      }, s);
    }
    c = e;
  }, addActivated = (e, t, n) => {
    u = Date.now(), e.classList.add(o);
    const s = p && getRippleEffect(e);
    s && s.addRipple && (removeRipple(), d = s.addRipple(t, n));
  }, removeRipple = () => {
    void 0 !== d && (d.then(e => e()), d = void 0);
  }, removeActivated = e => {
    removeRipple();
    const t = c;
    if (!t) return;
    const n = s - Date.now() + u;
    if (e && n > 0 && !isInstant(t)) {
      const e = setTimeout(() => {
        t.classList.remove(o), f.delete(t);
      }, s);
      f.set(t, e);
    } else t.classList.remove(o);
  }, m = document;
  m.addEventListener("ionScrollStart", e => {
    r = e.target, cancelActive();
  }), m.addEventListener("ionScrollEnd", () => {
    r = void 0;
  }), m.addEventListener("ionGestureCaptured", cancelActive), m.addEventListener("touchstart", t => {
    v = e(t), pointerDown(t);
  }, !0), m.addEventListener("touchcancel", onTouchEnd, !0), m.addEventListener("touchend", onTouchEnd, !0), 
  m.addEventListener("mousedown", t => {
    const o = e(t) - i;
    v < o && pointerDown(t);
  }, !0), m.addEventListener("mouseup", t => {
    const o = e(t) - i;
    v < o && pointerUp(t);
  }, !0);
}, getActivatableTarget = e => {
  if (!e.composedPath) return e.target.closest(".ion-activatable");
  {
    const t = e.composedPath();
    for (let e = 0; e < t.length - 2; e++) {
      const o = t[e];
      if (o.classList && o.classList.contains("ion-activatable")) return o;
    }
  }
}, isInstant = e => e.classList.contains("ion-activatable-instant"), getRippleEffect = e => {
  if (e.shadowRoot) {
    const t = e.shadowRoot.querySelector("ion-ripple-effect");
    if (t) return t;
  }
  return e.querySelector("ion-ripple-effect");
}, o = "ion-activated", n = 200, s = 200, i = 2500;

export { startTapClick }