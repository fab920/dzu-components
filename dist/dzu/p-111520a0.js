/**
 * Does a simple sanitization of all elements
 * in an untrusted string
 */
const sanitizeDOMString = e => {
  try {
    if (e instanceof class {
      constructor(e) {
        this.value = e;
      }
    }) return e.value;
    if (!isSanitizerEnabled() || "string" != typeof e || "" === e) return e;
    /**
     * Create a document fragment
     * separate from the main DOM,
     * create a div to do our work in
     */    const n = document.createDocumentFragment(), r = document.createElement("div");
    n.appendChild(r), r.innerHTML = e, 
    /**
     * Remove any elements
     * that are blocked
     */
    t.forEach(e => {
      const t = n.querySelectorAll(e);
      for (let r = t.length - 1; r >= 0; r--) {
        const e = t[r];
        e.parentNode ? e.parentNode.removeChild(e) : n.removeChild(e)
        /**
         * We still need to sanitize
         * the children of this element
         * as they are left behind
         */;
        const o = getElementChildren(e);
        /* tslint:disable-next-line */        for (let t = 0; t < o.length; t++) sanitizeElement(o[t]);
      }
    });
    /**
     * Go through remaining elements and remove
     * non-allowed attribs
     */
    // IE does not support .children on document fragments, only .childNodes
    const o = getElementChildren(n);
    /* tslint:disable-next-line */    for (let e = 0; e < o.length; e++) sanitizeElement(o[e]);
    // Append document fragment to div
        const i = document.createElement("div");
    i.appendChild(n);
    // First child is always the div we did our work in
    const c = i.querySelector("div");
    return null !== c ? c.innerHTML : i.innerHTML;
  } catch (n) {
    return console.error(n), "";
  }
}, sanitizeElement = t => {
  // IE uses childNodes, so ignore nodes that are not elements
  if (t.nodeType && 1 !== t.nodeType) return;
  for (let r = t.attributes.length - 1; r >= 0; r--) {
    const n = t.attributes.item(r), o = n.name;
    // remove non-allowed attribs
    if (!e.includes(o.toLowerCase())) {
      t.removeAttribute(o);
      continue;
    }
    // clean up any allowed attribs
    // that attempt to do any JS funny-business
        const i = n.value;
    /* tslint:disable-next-line */    null != i && i.toLowerCase().includes("javascript:") && t.removeAttribute(o);
  }
  /**
   * Sanitize any nested children
   */  const n = getElementChildren(t);
  /* tslint:disable-next-line */  for (let e = 0; e < n.length; e++) sanitizeElement(n[e]);
}, getElementChildren = e => null != e.children ? e.children : e.childNodes, isSanitizerEnabled = () => {
  const e = window, t = e && e.Ionic && e.Ionic.config;
  return !t || (t.get ? t.get("sanitizerEnabled", !0) : !0 === t.sanitizerEnabled || void 0 === t.sanitizerEnabled);
}, e = [ "class", "id", "href", "src", "name", "slot" ], t = [ "script", "style", "iframe", "meta", "link", "object", "embed" ];

/**
 * Clean up current element based on allowed attributes
 * and then recursively dig down into any child elements to
 * clean those up as well
 */ export { sanitizeDOMString as s }