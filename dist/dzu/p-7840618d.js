const hostContext = (r, t) => null !== t.closest(r), createColorClasses = (r, t) => "string" == typeof r && r.length > 0 ? Object.assign({
  "ion-color": !0,
  [`ion-color-${r}`]: !0
}, t) : t, getClassMap = r => {
  const t = {};
  return (r => {
    if (void 0 !== r) {
      return (Array.isArray(r) ? r : r.split(" ")).filter(r => null != r).map(r => r.trim()).filter(r => "" !== r);
    }
    return [];
  })(r).forEach(r => t[r] = !0), t;
}, r = /^[a-z][a-z0-9+\-.]*:/, openURL = async (t, e, n, o) => {
  if (null != t && "#" !== t[0] && !r.test(t)) {
    const r = document.querySelector("ion-router");
    if (r) return null != e && e.preventDefault(), r.push(t, n, o);
  }
  return !1;
};

/**
 * Create the mode and color classes for the component based on the classes passed in
 */ export { createColorClasses as c, getClassMap as g, hostContext as h, openURL as o }