const attachComponent = async (e, n, t, o, r) => {
  if (e) return e.attachViewToDom(n, t, r, o);
  if ("string" != typeof t && !(t instanceof HTMLElement)) throw new Error("framework delegate is missing");
  const a = "string" == typeof t ? n.ownerDocument && n.ownerDocument.createElement(t) : t;
  return o && o.forEach(e => a.classList.add(e)), r && Object.assign(a, r), n.appendChild(a), 
  a.componentOnReady && await a.componentOnReady(), a;
}, detachComponent = (e, n) => {
  if (n) {
    if (e) {
      const t = n.parentElement;
      return e.removeViewFromDom(t, n);
    }
    n.remove();
  }
  return Promise.resolve();
};

export { attachComponent as a, detachComponent as d }