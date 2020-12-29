/**
 * Elements inside of web components sometimes need to inherit global attributes
 * set on the host. For example, the inner input in `ion-input` should inherit
 * the `title` attribute that developers set directly on `ion-input`. This
 * helper function should be called in componentWillLoad and assigned to a variable
 * that is later used in the render function.
 *
 * This does not need to be reactive as changing attributes on the host element
 * does not trigger a re-render.
 */
const inheritAttributes = (e, t = []) => {
  const n = {};
  return t.forEach(t => {
    if (e.hasAttribute(t)) {
      null !== e.getAttribute(t) && (n[t] = e.getAttribute(t)), e.removeAttribute(t);
    }
  }), n;
}, addEventListener = (e, t, n, r) => {
  if ("undefined" != typeof window) {
    const i = window, o = i && i.Ionic && i.Ionic.config;
    if (o) {
      const i = o.get("_ael");
      if (i) return i(e, t, n, r);
      if (o._ael) return o._ael(e, t, n, r);
    }
  }
  return e.addEventListener(t, n, r);
}, removeEventListener = (e, t, n, r) => {
  if ("undefined" != typeof window) {
    const i = window, o = i && i.Ionic && i.Ionic.config;
    if (o) {
      const i = o.get("_rel");
      if (i) return i(e, t, n, r);
      if (o._rel) return o._rel(e, t, n, r);
    }
  }
  return e.removeEventListener(t, n, r);
}, getElementRoot = (e, t = e) => e.shadowRoot || t, raf = e => "function" == typeof __zone_symbol__requestAnimationFrame ? __zone_symbol__requestAnimationFrame(e) : "function" == typeof requestAnimationFrame ? requestAnimationFrame(e) : setTimeout(e), hasShadowDom = e => !!e.shadowRoot && !!e.attachShadow, findItemLabel = e => {
  const t = e.closest("ion-item");
  return t ? t.querySelector("ion-label") : null;
}, getAriaLabel = (e, t) => {
  let n;
  // If the user provides their own label via the aria-labelledby attr
  // we should use that instead of looking for an ion-label
    const r = e.getAttribute("aria-labelledby"), i = null !== r ? r : t + "-lbl", o = null !== r ? document.querySelector(`#${r}`) : findItemLabel(e);
  return o && (null === r && (o.id = i), n = o.textContent, o.setAttribute("aria-hidden", "true")), 
  {
    label: o,
    labelId: i,
    labelText: n
  };
}, renderHiddenInput = (e, t, n, r, i) => {
  if (e || hasShadowDom(t)) {
    let e = t.querySelector("input.aux-input");
    e || (e = t.ownerDocument.createElement("input"), e.type = "hidden", e.classList.add("aux-input"), 
    t.appendChild(e)), e.disabled = i, e.name = n, e.value = r || "";
  }
}, clamp = (e, t, n) => Math.max(e, Math.min(t, n)), assert = (e, t) => {
  if (!e) {
    const e = "ASSERT: " + t;
    console.error(e);
    debugger;
 // tslint:disable-line
        throw new Error(e);
  }
}, now = e => e.timeStamp || Date.now(), pointerCoord = e => {
  // get X coordinates for either a mouse click
  // or a touch depending on the given event
  if (e) {
    const t = e.changedTouches;
    if (t && t.length > 0) {
      const e = t[0];
      return {
        x: e.clientX,
        y: e.clientY
      };
    }
    if (void 0 !== e.pageX) return {
      x: e.pageX,
      y: e.pageY
    };
  }
  return {
    x: 0,
    y: 0
  };
}, isEndSide = e => {
  const t = "rtl" === document.dir;
  switch (e) {
   case "start":
    return t;

   case "end":
    return !t;

   default:
    throw new Error(`"${e}" is not a valid value for [side]. Use "start" or "end" instead.`);
  }
}, debounceEvent = (e, t) => {
  const n = e._original || e;
  return {
    _original: e,
    emit: debounce(n.emit.bind(n), t)
  };
}, debounce = (e, t = 0) => {
  let n;
  return (...r) => {
    clearTimeout(n), n = setTimeout(e, t, ...r);
  };
};

export { addEventListener as a, removeEventListener as b, getAriaLabel as c, renderHiddenInput as d, clamp as e, findItemLabel as f, getElementRoot as g, hasShadowDom as h, debounceEvent as i, inheritAttributes as j, isEndSide as k, assert as l, debounce as m, now as n, pointerCoord as p, raf as r }