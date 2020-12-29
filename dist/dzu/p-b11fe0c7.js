/**
 * SSR Window 2.0.0
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2020, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: May 12, 2020
 */
/* eslint-disable no-param-reassign */
function isObject(e) {
  return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object;
}

function extend(e, t) {
  void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach((function(s) {
    void 0 === e[s] ? e[s] = t[s] : isObject(t[s]) && isObject(e[s]) && Object.keys(t[s]).length > 0 && extend(e[s], t[s]);
  }));
}

var e = "undefined" != typeof document ? document : {}, t = {
  body: {},
  addEventListener: function() {},
  removeEventListener: function() {},
  activeElement: {
    blur: function() {},
    nodeName: ""
  },
  querySelector: function() {
    return null;
  },
  querySelectorAll: function() {
    return [];
  },
  getElementById: function() {
    return null;
  },
  createEvent: function() {
    return {
      initEvent: function() {}
    };
  },
  createElement: function() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute: function() {},
      getElementsByTagName: function() {
        return [];
      }
    };
  },
  createElementNS: function() {
    return {};
  },
  importNode: function() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  }
};

extend(e, t);

var s = "undefined" != typeof window ? window : {};

extend(s, {
  document: t,
  navigator: {
    userAgent: ""
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  },
  history: {
    replaceState: function() {},
    pushState: function() {},
    go: function() {},
    back: function() {}
  },
  CustomEvent: function() {
    return this;
  },
  addEventListener: function() {},
  removeEventListener: function() {},
  getComputedStyle: function() {
    return {
      getPropertyValue: function() {
        return "";
      }
    };
  },
  Image: function() {},
  Date: function() {},
  screen: {},
  setTimeout: function() {},
  clearTimeout: function() {},
  matchMedia: function() {
    return {};
  }
});

/**
 * Dom7 2.1.5
 * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
 * http://framework7.io/docs/dom.html
 *
 * Copyright 2020, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under MIT
 *
 * Released on: May 15, 2020
 */
class i {
  constructor(e) {
    const t = this;
    // Create array-like object
        for (let s = 0; s < e.length; s += 1) t[s] = e[s];
    // Return collection with methods
    return t.length = e.length, this;
  }
}

function $(t, a) {
  const n = [];
  let r = 0;
  if (t && !a && t instanceof i) return t;
  if (t) 
  // String
  if ("string" == typeof t) {
    let s, i;
    const o = t.trim();
    if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
      let t = "div";
      for (0 === o.indexOf("<li") && (t = "ul"), 0 === o.indexOf("<tr") && (t = "tbody"), 
      0 !== o.indexOf("<td") && 0 !== o.indexOf("<th") || (t = "tr"), 0 === o.indexOf("<tbody") && (t = "table"), 
      0 === o.indexOf("<option") && (t = "select"), i = e.createElement(t), i.innerHTML = o, 
      r = 0; r < i.childNodes.length; r += 1) n.push(i.childNodes[r]);
    } else for (
    // Other selectors
    s = a || "#" !== t[0] || t.match(/[ .<>:~]/) ? (a || e).querySelectorAll(t.trim()) : [ e.getElementById(t.trim().split("#")[1]) ], 
    r = 0; r < s.length; r += 1) s[r] && n.push(s[r]);
  } else if (t.nodeType || t === s || t === e) 
  // Node/element
  n.push(t); else if (t.length > 0 && t[0].nodeType) 
  // Array of elements or instance of Dom
  for (r = 0; r < t.length; r += 1) n.push(t[r]);
  return new i(n);
}

function unique(e) {
  const t = [];
  for (let s = 0; s < e.length; s += 1) -1 === t.indexOf(e[s]) && t.push(e[s]);
  return t;
}

// Classes and attributes
$.fn = i.prototype, $.Class = i, $.Dom7 = i;

/**
 * Swiper 5.4.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://swiperjs.com
 *
 * Copyright 2014-2020 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: May 20, 2020
 */
const a = {
  addClass: function(e) {
    if (void 0 === e) return this;
    const t = e.split(" ");
    for (let s = 0; s < t.length; s += 1) for (let e = 0; e < this.length; e += 1) void 0 !== this[e] && void 0 !== this[e].classList && this[e].classList.add(t[s]);
    return this;
  },
  removeClass: function(e) {
    const t = e.split(" ");
    for (let s = 0; s < t.length; s += 1) for (let e = 0; e < this.length; e += 1) void 0 !== this[e] && void 0 !== this[e].classList && this[e].classList.remove(t[s]);
    return this;
  },
  hasClass: function(e) {
    return !!this[0] && this[0].classList.contains(e);
  },
  toggleClass: function(e) {
    const t = e.split(" ");
    for (let s = 0; s < t.length; s += 1) for (let e = 0; e < this.length; e += 1) void 0 !== this[e] && void 0 !== this[e].classList && this[e].classList.toggle(t[s]);
    return this;
  },
  attr: function(e, t) {
    if (1 === arguments.length && "string" == typeof e) 
    // Get attr
    return this[0] ? this[0].getAttribute(e) : void 0;
    // Set attrs
        for (let s = 0; s < this.length; s += 1) if (2 === arguments.length) 
    // String
    this[s].setAttribute(e, t); else 
    // Object
    // eslint-disable-next-line
    for (const t in e) this[s][t] = e[t], this[s].setAttribute(t, e[t]);
    return this;
  }
  // eslint-disable-next-line
  ,
  removeAttr: function(e) {
    for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
    return this;
  },
  data: function(e, t) {
    let s;
    if (void 0 !== t) {
      // Set value
      for (let i = 0; i < this.length; i += 1) s = this[i], s.dom7ElementDataStorage || (s.dom7ElementDataStorage = {}), 
      s.dom7ElementDataStorage[e] = t;
      return this;
    }
    // Get value
    if (s = this[0], s) {
      if (s.dom7ElementDataStorage && e in s.dom7ElementDataStorage) return s.dom7ElementDataStorage[e];
      const t = s.getAttribute(`data-${e}`);
      return t || void 0;
    }
  }
  // Transforms
  // eslint-disable-next-line
  ,
  transform: function(e) {
    for (let t = 0; t < this.length; t += 1) {
      const s = this[t].style;
      s.webkitTransform = e, s.transform = e;
    }
    return this;
  },
  transition: function(e) {
    "string" != typeof e && (e = `${e}ms`);
    for (let t = 0; t < this.length; t += 1) {
      const s = this[t].style;
      s.webkitTransitionDuration = e, s.transitionDuration = e;
    }
    return this;
  }
  // Events
  ,
  on: function(...e) {
    let [t, s, i, a] = e;
    function handleLiveEvent(e) {
      const t = e.target;
      if (!t) return;
      const a = e.target.dom7EventData || [];
      if (a.indexOf(e) < 0 && a.unshift(e), $(t).is(s)) i.apply(t, a); else {
        const e = $(t).parents();
 // eslint-disable-line
                for (let t = 0; t < e.length; t += 1) $(e[t]).is(s) && i.apply(e[t], a);
      }
    }
    function handleEvent(e) {
      const t = e && e.target && e.target.dom7EventData || [];
      t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t);
    }
    "function" == typeof e[1] && ([t, i, a] = e, s = void 0), a || (a = !1);
    const n = t.split(" ");
    let r;
    for (let o = 0; o < this.length; o += 1) {
      const e = this[o];
      if (s) 
      // Live events
      for (r = 0; r < n.length; r += 1) {
        const t = n[r];
        e.dom7LiveListeners || (e.dom7LiveListeners = {}), e.dom7LiveListeners[t] || (e.dom7LiveListeners[t] = []), 
        e.dom7LiveListeners[t].push({
          listener: i,
          proxyListener: handleLiveEvent
        }), e.addEventListener(t, handleLiveEvent, a);
      } else for (r = 0; r < n.length; r += 1) {
        const t = n[r];
        e.dom7Listeners || (e.dom7Listeners = {}), e.dom7Listeners[t] || (e.dom7Listeners[t] = []), 
        e.dom7Listeners[t].push({
          listener: i,
          proxyListener: handleEvent
        }), e.addEventListener(t, handleEvent, a);
      }
    }
    return this;
  },
  off: function(...e) {
    let [t, s, i, a] = e;
    "function" == typeof e[1] && ([t, i, a] = e, s = void 0), a || (a = !1);
    const n = t.split(" ");
    for (let r = 0; r < n.length; r += 1) {
      const e = n[r];
      for (let t = 0; t < this.length; t += 1) {
        const n = this[t];
        let r;
        if (!s && n.dom7Listeners ? r = n.dom7Listeners[e] : s && n.dom7LiveListeners && (r = n.dom7LiveListeners[e]), 
        r && r.length) for (let t = r.length - 1; t >= 0; t -= 1) {
          const s = r[t];
          i && s.listener === i || i && s.listener && s.listener.dom7proxy && s.listener.dom7proxy === i ? (n.removeEventListener(e, s.proxyListener, a), 
          r.splice(t, 1)) : i || (n.removeEventListener(e, s.proxyListener, a), r.splice(t, 1));
        }
      }
    }
    return this;
  },
  trigger: function(...t) {
    const i = t[0].split(" "), a = t[1];
    for (let r = 0; r < i.length; r += 1) {
      const o = i[r];
      for (let i = 0; i < this.length; i += 1) {
        const r = this[i];
        let l;
        try {
          l = new s.CustomEvent(o, {
            detail: a,
            bubbles: !0,
            cancelable: !0
          });
        } catch (n) {
          l = e.createEvent("Event"), l.initEvent(o, !0, !0), l.detail = a;
        }
        // eslint-disable-next-line
                r.dom7EventData = t.filter((e, t) => t > 0), r.dispatchEvent(l), r.dom7EventData = [], 
        delete r.dom7EventData;
      }
    }
    return this;
  },
  transitionEnd: function(e) {
    const t = [ "webkitTransitionEnd", "transitionend" ], s = this;
    let i;
    function fireCallBack(a) {
      /* jshint validthis:true */
      if (a.target === this) for (e.call(this, a), i = 0; i < t.length; i += 1) s.off(t[i], fireCallBack);
    }
    if (e) for (i = 0; i < t.length; i += 1) s.on(t[i], fireCallBack);
    return this;
  },
  outerWidth: function(e) {
    if (this.length > 0) {
      if (e) {
        // eslint-disable-next-line
        const e = this.styles();
        return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"));
      }
      return this[0].offsetWidth;
    }
    return null;
  },
  outerHeight: function(e) {
    if (this.length > 0) {
      if (e) {
        // eslint-disable-next-line
        const e = this.styles();
        return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"));
      }
      return this[0].offsetHeight;
    }
    return null;
  },
  offset: function() {
    if (this.length > 0) {
      const t = this[0], i = t.getBoundingClientRect(), a = e.body, n = t.clientTop || a.clientTop || 0, r = t.clientLeft || a.clientLeft || 0, o = t === s ? s.scrollY : t.scrollTop, l = t === s ? s.scrollX : t.scrollLeft;
      return {
        top: i.top + o - n,
        left: i.left + l - r
      };
    }
    return null;
  },
  css: function(e, t) {
    let i;
    if (1 === arguments.length) {
      if ("string" != typeof e) {
        for (i = 0; i < this.length; i += 1) 
        // eslint-disable-next-line
        for (let t in e) this[i].style[t] = e[t];
        return this;
      }
      if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e);
    }
    if (2 === arguments.length && "string" == typeof e) {
      for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
      return this;
    }
    return this;
  }
  // Iterate over the collection passing elements to `callback`
  ,
  each: function(e) {
    // Don't bother continuing without a callback
    if (!e) return this;
    // Iterate over the current collection
        for (let t = 0; t < this.length; t += 1) 
    // If the callback returns false
    if (!1 === e.call(this[t], t, this[t])) 
    // End the loop early
    return this;
    // Return `this` to allow chained DOM operations
        return this;
  },
  html: 
  // eslint-disable-next-line
  function(e) {
    if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
    for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
    return this;
  }
  // eslint-disable-next-line
  ,
  text: function(e) {
    if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
    for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
    return this;
  },
  is: function(t) {
    const a = this[0];
    let n, r;
    if (!a || void 0 === t) return !1;
    if ("string" == typeof t) {
      if (a.matches) return a.matches(t);
      if (a.webkitMatchesSelector) return a.webkitMatchesSelector(t);
      if (a.msMatchesSelector) return a.msMatchesSelector(t);
      for (n = $(t), r = 0; r < n.length; r += 1) if (n[r] === a) return !0;
      return !1;
    }
    if (t === e) return a === e;
    if (t === s) return a === s;
    if (t.nodeType || t instanceof i) {
      for (n = t.nodeType ? [ t ] : t, r = 0; r < n.length; r += 1) if (n[r] === a) return !0;
      return !1;
    }
    return !1;
  },
  index: function() {
    let e, t = this[0];
    if (t) {
      // eslint-disable-next-line
      for (e = 0; null !== (t = t.previousSibling); ) 1 === t.nodeType && (e += 1);
      return e;
    }
  }
  // eslint-disable-next-line
  ,
  eq: function(e) {
    if (void 0 === e) return this;
    const t = this.length;
    let s;
    return e > t - 1 ? new i([]) : e < 0 ? (s = t + e, new i(s < 0 ? [] : [ this[s] ])) : new i([ this[e] ]);
  },
  append: function(...t) {
    let s;
    for (let a = 0; a < t.length; a += 1) {
      s = t[a];
      for (let t = 0; t < this.length; t += 1) if ("string" == typeof s) {
        const i = e.createElement("div");
        for (i.innerHTML = s; i.firstChild; ) this[t].appendChild(i.firstChild);
      } else if (s instanceof i) for (let e = 0; e < s.length; e += 1) this[t].appendChild(s[e]); else this[t].appendChild(s);
    }
    return this;
  },
  prepend: function(t) {
    let s, a;
    for (s = 0; s < this.length; s += 1) if ("string" == typeof t) {
      const i = e.createElement("div");
      for (i.innerHTML = t, a = i.childNodes.length - 1; a >= 0; a -= 1) this[s].insertBefore(i.childNodes[a], this[s].childNodes[0]);
    } else if (t instanceof i) for (a = 0; a < t.length; a += 1) this[s].insertBefore(t[a], this[s].childNodes[0]); else this[s].insertBefore(t, this[s].childNodes[0]);
    return this;
  },
  next: function(e) {
    return this.length > 0 ? e ? this[0].nextElementSibling && $(this[0].nextElementSibling).is(e) ? new i([ this[0].nextElementSibling ]) : new i([]) : this[0].nextElementSibling ? new i([ this[0].nextElementSibling ]) : new i([]) : new i([]);
  },
  nextAll: function(e) {
    const t = [];
    let s = this[0];
    if (!s) return new i([]);
    for (;s.nextElementSibling; ) {
      const i = s.nextElementSibling;
 // eslint-disable-line
            e ? $(i).is(e) && t.push(i) : t.push(i), s = i;
    }
    return new i(t);
  },
  prev: function(e) {
    if (this.length > 0) {
      const t = this[0];
      return e ? t.previousElementSibling && $(t.previousElementSibling).is(e) ? new i([ t.previousElementSibling ]) : new i([]) : t.previousElementSibling ? new i([ t.previousElementSibling ]) : new i([]);
    }
    return new i([]);
  },
  prevAll: function(e) {
    const t = [];
    let s = this[0];
    if (!s) return new i([]);
    for (;s.previousElementSibling; ) {
      const i = s.previousElementSibling;
 // eslint-disable-line
            e ? $(i).is(e) && t.push(i) : t.push(i), s = i;
    }
    return new i(t);
  },
  parent: function(e) {
    const t = [];
 // eslint-disable-line
        for (let s = 0; s < this.length; s += 1) null !== this[s].parentNode && (e ? $(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode));
    return $(unique(t));
  },
  parents: function(e) {
    const t = [];
 // eslint-disable-line
        for (let s = 0; s < this.length; s += 1) {
      let i = this[s].parentNode;
 // eslint-disable-line
            for (;i; ) e ? $(i).is(e) && t.push(i) : t.push(i), i = i.parentNode;
    }
    return $(unique(t));
  },
  closest: function(e) {
    let t = this;
 // eslint-disable-line
        return void 0 === e ? new i([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
  },
  find: function(e) {
    const t = [];
    for (let s = 0; s < this.length; s += 1) {
      const i = this[s].querySelectorAll(e);
      for (let e = 0; e < i.length; e += 1) t.push(i[e]);
    }
    return new i(t);
  },
  children: function(e) {
    const t = [];
 // eslint-disable-line
        for (let s = 0; s < this.length; s += 1) {
      const i = this[s].childNodes;
      for (let s = 0; s < i.length; s += 1) e ? 1 === i[s].nodeType && $(i[s]).is(e) && t.push(i[s]) : 1 === i[s].nodeType && t.push(i[s]);
    }
    return new i(unique(t));
  },
  filter: function(e) {
    const t = [], s = this;
    for (let i = 0; i < s.length; i += 1) e.call(s[i], i, s[i]) && t.push(s[i]);
    return new i(t);
  },
  remove: function() {
    for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
    return this;
  },
  add: function(...e) {
    const t = this;
    let s, i;
    for (s = 0; s < e.length; s += 1) {
      const a = $(e[s]);
      for (i = 0; i < a.length; i += 1) t[t.length] = a[i], t.length += 1;
    }
    return t;
  },
  styles: function() {
    return this[0] ? s.getComputedStyle(this[0], null) : {};
  }
};

Object.keys(a).forEach(e => {
  $.fn[e] = $.fn[e] || a[e];
});

const n = {
  deleteProps(e) {
    const t = e;
    Object.keys(t).forEach(e => {
      try {
        t[e] = null;
      } catch (s) {
        // no getter for object
      }
      try {
        delete t[e];
      } catch (s) {
        // something got wrong
      }
    });
  },
  nextTick: (e, t = 0) => setTimeout(e, t),
  now: () => Date.now(),
  getTranslate(e, t = "x") {
    let i, a, n;
    const r = s.getComputedStyle(e, null);
    return s.WebKitCSSMatrix ? (a = r.transform || r.webkitTransform, a.split(",").length > 6 && (a = a.split(", ").map(e => e.replace(",", ".")).join(", ")), 
    // Some old versions of Webkit choke when 'none' is passed; pass
    // empty string instead in this case
    n = new s.WebKitCSSMatrix("none" === a ? "" : a)) : (n = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), 
    i = n.toString().split(",")), "x" === t && (
    // Latest Chrome and webkits Fix
    a = s.WebKitCSSMatrix ? n.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), 
    "y" === t && (
    // Latest Chrome and webkits Fix
    a = s.WebKitCSSMatrix ? n.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), 
    a || 0;
  },
  parseUrlQuery(e) {
    const t = {};
    let i, a, n, r, o = e || s.location.href;
    if ("string" == typeof o && o.length) for (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "", 
    a = o.split("&").filter(e => "" !== e), r = a.length, i = 0; i < r; i += 1) n = a[i].replace(/#\S+/g, "").split("="), 
    t[decodeURIComponent(n[0])] = void 0 === n[1] ? void 0 : decodeURIComponent(n[1]) || "";
    return t;
  },
  isObject: e => "object" == typeof e && null !== e && e.constructor && e.constructor === Object,
  extend(...e) {
    const t = Object(e[0]);
    for (let s = 1; s < e.length; s += 1) {
      const i = e[s];
      if (null != i) {
        const e = Object.keys(Object(i));
        for (let s = 0, a = e.length; s < a; s += 1) {
          const a = e[s], r = Object.getOwnPropertyDescriptor(i, a);
          void 0 !== r && r.enumerable && (n.isObject(t[a]) && n.isObject(i[a]) ? n.extend(t[a], i[a]) : !n.isObject(t[a]) && n.isObject(i[a]) ? (t[a] = {}, 
          n.extend(t[a], i[a])) : t[a] = i[a]);
        }
      }
    }
    return t;
  }
}, r = {
  touch: !!("ontouchstart" in s || s.DocumentTouch && e instanceof s.DocumentTouch),
  pointerEvents: !!s.PointerEvent && "maxTouchPoints" in s.navigator && s.navigator.maxTouchPoints >= 0,
  observer: "MutationObserver" in s || "WebkitMutationObserver" in s,
  passiveListener: function() {
    let e = !1;
    try {
      const t = Object.defineProperty({}, "passive", {
        // eslint-disable-next-line
        get() {
          e = !0;
        }
      });
      s.addEventListener("testPassiveListener", null, t);
    } catch (t) {
      // No support
    }
    return e;
  }(),
  gestures: "ongesturestart" in s
};

class o {
  constructor(e = {}) {
    const t = this;
    t.params = e, 
    // Events
    t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(e => {
      t.on(e, t.params.on[e]);
    });
  }
  on(e, t, s) {
    const i = this;
    if ("function" != typeof t) return i;
    const a = s ? "unshift" : "push";
    return e.split(" ").forEach(e => {
      i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][a](t);
    }), i;
  }
  once(e, t, s) {
    const i = this;
    if ("function" != typeof t) return i;
    function onceHandler(...s) {
      i.off(e, onceHandler), onceHandler.f7proxy && delete onceHandler.f7proxy, t.apply(i, s);
    }
    return onceHandler.f7proxy = t, i.on(e, onceHandler, s);
  }
  off(e, t) {
    const s = this;
    return s.eventsListeners ? (e.split(" ").forEach(e => {
      void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].length && s.eventsListeners[e].forEach((i, a) => {
        (i === t || i.f7proxy && i.f7proxy === t) && s.eventsListeners[e].splice(a, 1);
      });
    }), s) : s;
  }
  emit(...e) {
    const t = this;
    if (!t.eventsListeners) return t;
    let s, i, a;
    return "string" == typeof e[0] || Array.isArray(e[0]) ? (s = e[0], i = e.slice(1, e.length), 
    a = t) : (s = e[0].events, i = e[0].data, a = e[0].context || t), (Array.isArray(s) ? s : s.split(" ")).forEach(e => {
      if (t.eventsListeners && t.eventsListeners[e]) {
        const s = [];
        t.eventsListeners[e].forEach(e => {
          s.push(e);
        }), s.forEach(e => {
          e.apply(a, i);
        });
      }
    }), t;
  }
  useModulesParams(e) {
    const t = this;
    t.modules && Object.keys(t.modules).forEach(s => {
      const i = t.modules[s];
      // Extend params
            i.params && n.extend(e, i.params);
    });
  }
  useModules(e = {}) {
    const t = this;
    t.modules && Object.keys(t.modules).forEach(s => {
      const i = t.modules[s], a = e[s] || {};
      // Extend instance methods and props
      i.instance && Object.keys(i.instance).forEach(e => {
        const s = i.instance[e];
        t[e] = "function" == typeof s ? s.bind(t) : s;
      }), 
      // Add event listeners
      i.on && t.on && Object.keys(i.on).forEach(e => {
        t.on(e, i.on[e]);
      }), 
      // Module create callback
      i.create && i.create.bind(t)(a);
    });
  }
  static set components(e) {
    this.use && this.use(e);
  }
  static installModule(e, ...t) {
    const s = this;
    s.prototype.modules || (s.prototype.modules = {});
    const i = e.name || `${Object.keys(s.prototype.modules).length}_${n.now()}`;
    return s.prototype.modules[i] = e, 
    // Prototype
    e.proto && Object.keys(e.proto).forEach(t => {
      s.prototype[t] = e.proto[t];
    }), 
    // Class
    e.static && Object.keys(e.static).forEach(t => {
      s[t] = e.static[t];
    }), 
    // Callback
    e.install && e.install.apply(s, t), s;
  }
  static use(e, ...t) {
    const s = this;
    return Array.isArray(e) ? (e.forEach(e => s.installModule(e)), s) : s.installModule(e, ...t);
  }
}

var l = {
  updateSize: function() {
    const e = this;
    let t, s;
    const i = e.$el;
    t = void 0 !== e.params.width ? e.params.width : i[0].clientWidth, s = void 0 !== e.params.height ? e.params.height : i[0].clientHeight, 
    0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (
    // Subtract paddings
    t = t - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), 
    s = s - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), 
    n.extend(e, {
      width: t,
      height: s,
      size: e.isHorizontal() ? t : s
    }));
  },
  updateSlides: function() {
    const e = this, t = e.params, {$wrapperEl: i, size: a, rtlTranslate: r, wrongRTL: o} = e, l = e.virtual && t.virtual.enabled, d = l ? e.virtual.slides.length : e.slides.length, c = i.children(`.${e.params.slideClass}`), p = l ? e.virtual.slides.length : c.length;
    let u = [];
    const h = [], m = [];
    function slidesForMargin(e) {
      return !t.cssMode || e !== c.length - 1;
    }
    let g = t.slidesOffsetBefore;
    "function" == typeof g && (g = t.slidesOffsetBefore.call(e));
    let f = t.slidesOffsetAfter;
    "function" == typeof f && (f = t.slidesOffsetAfter.call(e));
    const v = e.snapGrid.length, b = e.snapGrid.length;
    let w, T, E = t.spaceBetween, y = -g, S = 0, x = 0;
    if (void 0 === a) return;
    "string" == typeof E && E.indexOf("%") >= 0 && (E = parseFloat(E.replace("%", "")) / 100 * a), 
    e.virtualSize = -E, 
    // reset margins
    r ? c.css({
      marginLeft: "",
      marginTop: ""
    }) : c.css({
      marginRight: "",
      marginBottom: ""
    }), t.slidesPerColumn > 1 && (w = Math.floor(p / t.slidesPerColumn) === p / e.params.slidesPerColumn ? p : Math.ceil(p / t.slidesPerColumn) * t.slidesPerColumn, 
    "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (w = Math.max(w, t.slidesPerView * t.slidesPerColumn)));
    const C = t.slidesPerColumn, M = w / C, P = Math.floor(p / t.slidesPerColumn);
    for (let n = 0; n < p; n += 1) {
      T = 0;
      const i = c.eq(n);
      if (t.slidesPerColumn > 1) {
        // Set slides order
        let s, a, r;
        if ("row" === t.slidesPerColumnFill && t.slidesPerGroup > 1) {
          const e = Math.floor(n / (t.slidesPerGroup * t.slidesPerColumn)), o = n - t.slidesPerColumn * t.slidesPerGroup * e, l = 0 === e ? t.slidesPerGroup : Math.min(Math.ceil((p - e * C * t.slidesPerGroup) / C), t.slidesPerGroup);
          r = Math.floor(o / l), a = o - r * l + e * t.slidesPerGroup, s = a + r * w / C, 
          i.css({
            "-webkit-box-ordinal-group": s,
            "-moz-box-ordinal-group": s,
            "-ms-flex-order": s,
            "-webkit-order": s,
            order: s
          });
        } else "column" === t.slidesPerColumnFill ? (a = Math.floor(n / C), r = n - a * C, 
        (a > P || a === P && r === C - 1) && (r += 1, r >= C && (r = 0, a += 1))) : (r = Math.floor(n / M), 
        a = n - r * M);
        i.css(`margin-${e.isHorizontal() ? "top" : "left"}`, 0 !== r && t.spaceBetween && `${t.spaceBetween}px`);
      }
      if ("none" !== i.css("display")) {
        // eslint-disable-line
        if ("auto" === t.slidesPerView) {
          const a = s.getComputedStyle(i[0], null), n = i[0].style.transform, r = i[0].style.webkitTransform;
          if (n && (i[0].style.transform = "none"), r && (i[0].style.webkitTransform = "none"), 
          t.roundLengths) T = e.isHorizontal() ? i.outerWidth(!0) : i.outerHeight(!0); else 
          // eslint-disable-next-line
          if (e.isHorizontal()) {
            const e = parseFloat(a.getPropertyValue("width")), t = parseFloat(a.getPropertyValue("padding-left")), s = parseFloat(a.getPropertyValue("padding-right")), i = parseFloat(a.getPropertyValue("margin-left")), n = parseFloat(a.getPropertyValue("margin-right")), r = a.getPropertyValue("box-sizing");
            T = r && "border-box" === r ? e + i + n : e + t + s + i + n;
          } else {
            const e = parseFloat(a.getPropertyValue("height")), t = parseFloat(a.getPropertyValue("padding-top")), s = parseFloat(a.getPropertyValue("padding-bottom")), i = parseFloat(a.getPropertyValue("margin-top")), n = parseFloat(a.getPropertyValue("margin-bottom")), r = a.getPropertyValue("box-sizing");
            T = r && "border-box" === r ? e + i + n : e + t + s + i + n;
          }
          n && (i[0].style.transform = n), r && (i[0].style.webkitTransform = r), t.roundLengths && (T = Math.floor(T));
        } else T = (a - (t.slidesPerView - 1) * E) / t.slidesPerView, t.roundLengths && (T = Math.floor(T)), 
        c[n] && (e.isHorizontal() ? c[n].style.width = `${T}px` : c[n].style.height = `${T}px`);
        c[n] && (c[n].swiperSlideSize = T), m.push(T), t.centeredSlides ? (y = y + T / 2 + S / 2 + E, 
        0 === S && 0 !== n && (y = y - a / 2 - E), 0 === n && (y = y - a / 2 - E), Math.abs(y) < .001 && (y = 0), 
        t.roundLengths && (y = Math.floor(y)), x % t.slidesPerGroup == 0 && u.push(y), h.push(y)) : (t.roundLengths && (y = Math.floor(y)), 
        (x - Math.min(e.params.slidesPerGroupSkip, x)) % e.params.slidesPerGroup == 0 && u.push(y), 
        h.push(y), y = y + T + E), e.virtualSize += T + E, S = T, x += 1;
      }
    }
    let k;
    if (e.virtualSize = Math.max(e.virtualSize, a) + f, r && o && ("slide" === t.effect || "coverflow" === t.effect) && i.css({
      width: `${e.virtualSize + t.spaceBetween}px`
    }), t.setWrapperSize && (e.isHorizontal() ? i.css({
      width: `${e.virtualSize + t.spaceBetween}px`
    }) : i.css({
      height: `${e.virtualSize + t.spaceBetween}px`
    })), t.slidesPerColumn > 1 && (e.virtualSize = (T + t.spaceBetween) * w, e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween, 
    e.isHorizontal() ? i.css({
      width: `${e.virtualSize + t.spaceBetween}px`
    }) : i.css({
      height: `${e.virtualSize + t.spaceBetween}px`
    }), t.centeredSlides)) {
      k = [];
      for (let s = 0; s < u.length; s += 1) {
        let i = u[s];
        t.roundLengths && (i = Math.floor(i)), u[s] < e.virtualSize + u[0] && k.push(i);
      }
      u = k;
    }
    // Remove last grid elements depending on width
        if (!t.centeredSlides) {
      k = [];
      for (let s = 0; s < u.length; s += 1) {
        let i = u[s];
        t.roundLengths && (i = Math.floor(i)), u[s] <= e.virtualSize - a && k.push(i);
      }
      u = k, Math.floor(e.virtualSize - a) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - a);
    }
    if (0 === u.length && (u = [ 0 ]), 0 !== t.spaceBetween && (e.isHorizontal() ? r ? c.filter(slidesForMargin).css({
      marginLeft: `${E}px`
    }) : c.filter(slidesForMargin).css({
      marginRight: `${E}px`
    }) : c.filter(slidesForMargin).css({
      marginBottom: `${E}px`
    })), t.centeredSlides && t.centeredSlidesBounds) {
      let e = 0;
      m.forEach(s => {
        e += s + (t.spaceBetween ? t.spaceBetween : 0);
      }), e -= t.spaceBetween;
      const s = e - a;
      u = u.map(e => e < 0 ? -g : e > s ? s + f : e);
    }
    if (t.centerInsufficientSlides) {
      let e = 0;
      if (m.forEach(s => {
        e += s + (t.spaceBetween ? t.spaceBetween : 0);
      }), e -= t.spaceBetween, e < a) {
        const t = (a - e) / 2;
        u.forEach((e, s) => {
          u[s] = e - t;
        }), h.forEach((e, s) => {
          h[s] = e + t;
        });
      }
    }
    n.extend(e, {
      slides: c,
      snapGrid: u,
      slidesGrid: h,
      slidesSizesGrid: m
    }), p !== d && e.emit("slidesLengthChange"), u.length !== v && (e.params.watchOverflow && e.checkOverflow(), 
    e.emit("snapGridLengthChange")), h.length !== b && e.emit("slidesGridLengthChange"), 
    (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset();
  },
  updateAutoHeight: function(e) {
    const t = this, s = [];
    let i, a = 0;
    // Find slides currently in view
    if ("number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed), 
    "auto" !== t.params.slidesPerView && t.params.slidesPerView > 1) if (t.params.centeredSlides) t.visibleSlides.each((e, t) => {
      s.push(t);
    }); else for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
      const e = t.activeIndex + i;
      if (e > t.slides.length) break;
      s.push(t.slides.eq(e)[0]);
    } else s.push(t.slides.eq(t.activeIndex)[0]);
    // Find new height from highest slide in view
        for (i = 0; i < s.length; i += 1) if (void 0 !== s[i]) {
      const e = s[i].offsetHeight;
      a = e > a ? e : a;
    }
    // Update Height
        a && t.$wrapperEl.css("height", `${a}px`);
  },
  updateSlidesOffset: function() {
    const e = this, t = e.slides;
    for (let s = 0; s < t.length; s += 1) t[s].swiperSlideOffset = e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop;
  },
  updateSlidesProgress: function(e = this && this.translate || 0) {
    const t = this, s = t.params, {slides: i, rtlTranslate: a} = t;
    if (0 === i.length) return;
    void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
    let n = -e;
    a && (n = e), 
    // Visible Slides
    i.removeClass(s.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
    for (let r = 0; r < i.length; r += 1) {
      const e = i[r], o = (n + (s.centeredSlides ? t.minTranslate() : 0) - e.swiperSlideOffset) / (e.swiperSlideSize + s.spaceBetween);
      if (s.watchSlidesVisibility || s.centeredSlides && s.autoHeight) {
        const a = -(n - e.swiperSlideOffset), o = a + t.slidesSizesGrid[r];
        (a >= 0 && a < t.size - 1 || o > 1 && o <= t.size || a <= 0 && o >= t.size) && (t.visibleSlides.push(e), 
        t.visibleSlidesIndexes.push(r), i.eq(r).addClass(s.slideVisibleClass));
      }
      e.progress = a ? -o : o;
    }
    t.visibleSlides = $(t.visibleSlides);
  },
  updateProgress: function(e) {
    const t = this;
    if (void 0 === e) {
      const s = t.rtlTranslate ? -1 : 1;
      // eslint-disable-next-line
            e = t && t.translate && t.translate * s || 0;
    }
    const s = t.params, i = t.maxTranslate() - t.minTranslate();
    let {progress: a, isBeginning: r, isEnd: o} = t;
    const l = r, d = o;
    0 === i ? (a = 0, r = !0, o = !0) : (a = (e - t.minTranslate()) / i, r = a <= 0, 
    o = a >= 1), n.extend(t, {
      progress: a,
      isBeginning: r,
      isEnd: o
    }), (s.watchSlidesProgress || s.watchSlidesVisibility || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), 
    r && !l && t.emit("reachBeginning toEdge"), o && !d && t.emit("reachEnd toEdge"), 
    (l && !r || d && !o) && t.emit("fromEdge"), t.emit("progress", a);
  },
  updateSlidesClasses: function() {
    const e = this, {slides: t, params: s, $wrapperEl: i, activeIndex: a, realIndex: n} = e, r = e.virtual && s.virtual.enabled;
    let o;
    t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`), 
    o = r ? e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${a}"]`) : t.eq(a), 
    // Active classes
    o.addClass(s.slideActiveClass), s.loop && (
    // Duplicate to all looped slides
    o.hasClass(s.slideDuplicateClass) ? i.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${n}"]`).addClass(s.slideDuplicateActiveClass) : i.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${n}"]`).addClass(s.slideDuplicateActiveClass));
    // Next Slide
    let l = o.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
    s.loop && 0 === l.length && (l = t.eq(0), l.addClass(s.slideNextClass));
    // Prev Slide
        let d = o.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
    s.loop && 0 === d.length && (d = t.eq(-1), d.addClass(s.slidePrevClass)), s.loop && (
    // Duplicate to all looped slides
    l.hasClass(s.slideDuplicateClass) ? i.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass) : i.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass), 
    d.hasClass(s.slideDuplicateClass) ? i.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass) : i.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass));
  },
  updateActiveIndex: function(e) {
    const t = this, s = t.rtlTranslate ? t.translate : -t.translate, {slidesGrid: i, snapGrid: a, params: r, activeIndex: o, realIndex: l, snapIndex: d} = t;
    let c, p = e;
    if (void 0 === p) {
      for (let e = 0; e < i.length; e += 1) void 0 !== i[e + 1] ? s >= i[e] && s < i[e + 1] - (i[e + 1] - i[e]) / 2 ? p = e : s >= i[e] && s < i[e + 1] && (p = e + 1) : s >= i[e] && (p = e);
      // Normalize slideIndex
            r.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0);
    }
    if (a.indexOf(s) >= 0) c = a.indexOf(s); else {
      const e = Math.min(r.slidesPerGroupSkip, p);
      c = e + Math.floor((p - e) / r.slidesPerGroup);
    }
    if (c >= a.length && (c = a.length - 1), p === o) return void (c !== d && (t.snapIndex = c, 
    t.emit("snapIndexChange")));
    // Get real index
        const u = parseInt(t.slides.eq(p).attr("data-swiper-slide-index") || p, 10);
    n.extend(t, {
      snapIndex: c,
      realIndex: u,
      previousIndex: o,
      activeIndex: p
    }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), l !== u && t.emit("realIndexChange"), 
    (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
  },
  updateClickedSlide: function(e) {
    const t = this, s = t.params, i = $(e.target).closest(`.${s.slideClass}`)[0];
    let a = !1;
    if (i) for (let n = 0; n < t.slides.length; n += 1) t.slides[n] === i && (a = !0);
    if (!i || !a) return t.clickedSlide = void 0, void (t.clickedIndex = void 0);
    t.clickedSlide = i, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt($(i).attr("data-swiper-slide-index"), 10) : t.clickedIndex = $(i).index(), 
    s.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
  }
};

var d = {
  getTranslate: function(e = (this.isHorizontal() ? "x" : "y")) {
    const {params: t, rtlTranslate: s, translate: i, $wrapperEl: a} = this;
    if (t.virtualTranslate) return s ? -i : i;
    if (t.cssMode) return i;
    let r = n.getTranslate(a[0], e);
    return s && (r = -r), r || 0;
  },
  setTranslate: function(e, t) {
    const s = this, {rtlTranslate: i, params: a, $wrapperEl: n, wrapperEl: r, progress: o} = s;
    let l, d = 0, c = 0;
    s.isHorizontal() ? d = i ? -e : e : c = e, a.roundLengths && (d = Math.floor(d), 
    c = Math.floor(c)), a.cssMode ? r[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -d : -c : a.virtualTranslate || n.transform(`translate3d(${d}px, ${c}px, 0px)`), 
    s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? d : c;
    const p = s.maxTranslate() - s.minTranslate();
    l = 0 === p ? 0 : (e - s.minTranslate()) / p, l !== o && s.updateProgress(e), s.emit("setTranslate", s.translate, t);
  },
  minTranslate: function() {
    return -this.snapGrid[0];
  },
  maxTranslate: function() {
    return -this.snapGrid[this.snapGrid.length - 1];
  },
  translateTo: function(e = 0, t = this.params.speed, s = !0, i = !0, a) {
    const n = this, {params: r, wrapperEl: o} = n;
    if (n.animating && r.preventInteractionOnTransition) return !1;
    const l = n.minTranslate(), d = n.maxTranslate();
    let c;
    if (c = i && e > l ? l : i && e < d ? d : e, 
    // Update progress
    n.updateProgress(c), r.cssMode) {
      const e = n.isHorizontal();
      return 0 === t ? o[e ? "scrollLeft" : "scrollTop"] = -c : 
      // eslint-disable-next-line
      o.scrollTo ? o.scrollTo({
        [e ? "left" : "top"]: -c,
        behavior: "smooth"
      }) : o[e ? "scrollLeft" : "scrollTop"] = -c, !0;
    }
    return 0 === t ? (n.setTransition(0), n.setTranslate(c), s && (n.emit("beforeTransitionStart", t, a), 
    n.emit("transitionEnd"))) : (n.setTransition(t), n.setTranslate(c), s && (n.emit("beforeTransitionStart", t, a), 
    n.emit("transitionStart")), n.animating || (n.animating = !0, n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function(e) {
      n && !n.destroyed && e.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), 
      n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd), 
      n.onTranslateToWrapperTransitionEnd = null, delete n.onTranslateToWrapperTransitionEnd, 
      s && n.emit("transitionEnd"));
    }), n.$wrapperEl[0].addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), 
    n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd))), 
    !0;
  }
};

var c = {
  setTransition: function(e, t) {
    const s = this;
    s.params.cssMode || s.$wrapperEl.transition(e), s.emit("setTransition", e, t);
  },
  transitionStart: function(e = !0, t) {
    const s = this, {activeIndex: i, params: a, previousIndex: n} = s;
    if (a.cssMode) return;
    a.autoHeight && s.updateAutoHeight();
    let r = t;
    if (r || (r = i > n ? "next" : i < n ? "prev" : "reset"), s.emit("transitionStart"), 
    e && i !== n) {
      if ("reset" === r) return void s.emit("slideResetTransitionStart");
      s.emit("slideChangeTransitionStart"), "next" === r ? s.emit("slideNextTransitionStart") : s.emit("slidePrevTransitionStart");
    }
  },
  transitionEnd: function(e = !0, t) {
    const s = this, {activeIndex: i, previousIndex: a, params: n} = s;
    if (s.animating = !1, n.cssMode) return;
    s.setTransition(0);
    let r = t;
    if (r || (r = i > a ? "next" : i < a ? "prev" : "reset"), s.emit("transitionEnd"), 
    e && i !== a) {
      if ("reset" === r) return void s.emit("slideResetTransitionEnd");
      s.emit("slideChangeTransitionEnd"), "next" === r ? s.emit("slideNextTransitionEnd") : s.emit("slidePrevTransitionEnd");
    }
  }
};

var p = {
  slideTo: function(e = 0, t = this.params.speed, s = !0, i) {
    const a = this;
    let n = e;
    n < 0 && (n = 0);
    const {params: r, snapGrid: o, slidesGrid: l, previousIndex: d, activeIndex: c, rtlTranslate: p, wrapperEl: u} = a;
    if (a.animating && r.preventInteractionOnTransition) return !1;
    const h = Math.min(a.params.slidesPerGroupSkip, n);
    let m = h + Math.floor((n - h) / a.params.slidesPerGroup);
    m >= o.length && (m = o.length - 1), (c || r.initialSlide || 0) === (d || 0) && s && a.emit("beforeSlideChangeStart");
    const g = -o[m];
    // Update progress
        // Normalize slideIndex
    if (a.updateProgress(g), r.normalizeSlideIndex) for (let v = 0; v < l.length; v += 1) -Math.floor(100 * g) >= Math.floor(100 * l[v]) && (n = v);
    // Directions locks
        if (a.initialized && n !== c) {
      if (!a.allowSlideNext && g < a.translate && g < a.minTranslate()) return !1;
      if (!a.allowSlidePrev && g > a.translate && g > a.maxTranslate() && (c || 0) !== n) return !1;
    }
    let f;
    // Update Index
    if (f = n > c ? "next" : n < c ? "prev" : "reset", p && -g === a.translate || !p && g === a.translate) return a.updateActiveIndex(n), 
    // Update Height
    r.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== r.effect && a.setTranslate(g), 
    "reset" !== f && (a.transitionStart(s, f), a.transitionEnd(s, f)), !1;
    if (r.cssMode) {
      const e = a.isHorizontal();
      let s = -g;
      return p && (s = u.scrollWidth - u.offsetWidth - s), 0 === t ? u[e ? "scrollLeft" : "scrollTop"] = s : 
      // eslint-disable-next-line
      u.scrollTo ? u.scrollTo({
        [e ? "left" : "top"]: s,
        behavior: "smooth"
      }) : u[e ? "scrollLeft" : "scrollTop"] = s, !0;
    }
    return 0 === t ? (a.setTransition(0), a.setTranslate(g), a.updateActiveIndex(n), 
    a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, i), a.transitionStart(s, f), 
    a.transitionEnd(s, f)) : (a.setTransition(t), a.setTranslate(g), a.updateActiveIndex(n), 
    a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, i), a.transitionStart(s, f), 
    a.animating || (a.animating = !0, a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function(e) {
      a && !a.destroyed && e.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd), 
      a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd), 
      a.onSlideToWrapperTransitionEnd = null, delete a.onSlideToWrapperTransitionEnd, 
      a.transitionEnd(s, f));
    }), a.$wrapperEl[0].addEventListener("transitionend", a.onSlideToWrapperTransitionEnd), 
    a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd))), 
    !0;
  },
  slideToLoop: function(e = 0, t = this.params.speed, s = !0, i) {
    const a = this;
    let n = e;
    return a.params.loop && (n += a.loopedSlides), a.slideTo(n, t, s, i);
  }
  /* eslint no-unused-vars: "off" */ ,
  slideNext: function(e = this.params.speed, t = !0, s) {
    const i = this, {params: a, animating: n} = i, r = i.activeIndex < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup;
    if (a.loop) {
      if (n) return !1;
      i.loopFix(), 
      // eslint-disable-next-line
      i._clientLeft = i.$wrapperEl[0].clientLeft;
    }
    return i.slideTo(i.activeIndex + r, e, t, s);
  }
  /* eslint no-unused-vars: "off" */ ,
  slidePrev: function(e = this.params.speed, t = !0, s) {
    const i = this, {params: a, animating: n, snapGrid: r, slidesGrid: o, rtlTranslate: l} = i;
    if (a.loop) {
      if (n) return !1;
      i.loopFix(), 
      // eslint-disable-next-line
      i._clientLeft = i.$wrapperEl[0].clientLeft;
    }
    function normalize(e) {
      return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
    }
    const d = normalize(l ? i.translate : -i.translate), c = r.map(e => normalize(e));
    o.map(e => normalize(e)), r[c.indexOf(d)];
    let p, u = r[c.indexOf(d) - 1];
    return void 0 === u && a.cssMode && r.forEach(e => {
      !u && d >= e && (u = e);
    }), void 0 !== u && (p = o.indexOf(u), p < 0 && (p = i.activeIndex - 1)), i.slideTo(p, e, t, s);
  }
  /* eslint no-unused-vars: "off" */ ,
  slideReset: function(e = this.params.speed, t = !0, s) {
    return this.slideTo(this.activeIndex, e, t, s);
  }
  /* eslint no-unused-vars: "off" */ ,
  slideToClosest: function(e = this.params.speed, t = !0, s, i = .5) {
    const a = this;
    let n = a.activeIndex;
    const r = Math.min(a.params.slidesPerGroupSkip, n), o = r + Math.floor((n - r) / a.params.slidesPerGroup), l = a.rtlTranslate ? a.translate : -a.translate;
    if (l >= a.snapGrid[o]) {
      // The current translate is on or after the current snap index, so the choice
      // is between the current index and the one after it.
      const e = a.snapGrid[o];
      l - e > (a.snapGrid[o + 1] - e) * i && (n += a.params.slidesPerGroup);
    } else {
      // The current translate is before the current snap index, so the choice
      // is between the current index and the one before it.
      const e = a.snapGrid[o - 1];
      l - e <= (a.snapGrid[o] - e) * i && (n -= a.params.slidesPerGroup);
    }
    return n = Math.max(n, 0), n = Math.min(n, a.slidesGrid.length - 1), a.slideTo(n, e, t, s);
  },
  slideToClickedSlide: function() {
    const e = this, {params: t, $wrapperEl: s} = e, i = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
    let a, r = e.clickedIndex;
    if (t.loop) {
      if (e.animating) return;
      a = parseInt($(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? r < e.loopedSlides - i / 2 || r > e.slides.length - e.loopedSlides + i / 2 ? (e.loopFix(), 
      r = s.children(`.${t.slideClass}[data-swiper-slide-index="${a}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), 
      n.nextTick(() => {
        e.slideTo(r);
      })) : e.slideTo(r) : r > e.slides.length - i ? (e.loopFix(), r = s.children(`.${t.slideClass}[data-swiper-slide-index="${a}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), 
      n.nextTick(() => {
        e.slideTo(r);
      })) : e.slideTo(r);
    } else e.slideTo(r);
  }
};

var u = {
  loopCreate: function() {
    const t = this, {params: s, $wrapperEl: i} = t;
    // Remove duplicated slides
    i.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
    let a = i.children(`.${s.slideClass}`);
    if (s.loopFillGroupWithBlank) {
      const t = s.slidesPerGroup - a.length % s.slidesPerGroup;
      if (t !== s.slidesPerGroup) {
        for (let a = 0; a < t; a += 1) {
          const t = $(e.createElement("div")).addClass(`${s.slideClass} ${s.slideBlankClass}`);
          i.append(t);
        }
        a = i.children(`.${s.slideClass}`);
      }
    }
    "auto" !== s.slidesPerView || s.loopedSlides || (s.loopedSlides = a.length), t.loopedSlides = Math.ceil(parseFloat(s.loopedSlides || s.slidesPerView, 10)), 
    t.loopedSlides += s.loopAdditionalSlides, t.loopedSlides > a.length && (t.loopedSlides = a.length);
    const n = [], r = [];
    a.each((e, s) => {
      const i = $(s);
      e < t.loopedSlides && r.push(s), e < a.length && e >= a.length - t.loopedSlides && n.push(s), 
      i.attr("data-swiper-slide-index", e);
    });
    for (let e = 0; e < r.length; e += 1) i.append($(r[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
    for (let e = n.length - 1; e >= 0; e -= 1) i.prepend($(n[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
  },
  loopFix: function() {
    const e = this;
    e.emit("beforeLoopFix");
    const {activeIndex: t, slides: s, loopedSlides: i, allowSlidePrev: a, allowSlideNext: n, snapGrid: r, rtlTranslate: o} = e;
    let l;
    e.allowSlidePrev = !0, e.allowSlideNext = !0;
    const d = -r[t] - e.getTranslate();
    // Fix For Negative Oversliding
    if (t < i) {
      l = s.length - 3 * i + t, l += i, e.slideTo(l, 0, !1, !0) && 0 !== d && e.setTranslate((o ? -e.translate : e.translate) - d);
    } else if (t >= s.length - i) {
      // Fix For Positive Oversliding
      l = -s.length + t + i, l += i, e.slideTo(l, 0, !1, !0) && 0 !== d && e.setTranslate((o ? -e.translate : e.translate) - d);
    }
    e.allowSlidePrev = a, e.allowSlideNext = n, e.emit("loopFix");
  },
  loopDestroy: function() {
    const {$wrapperEl: e, params: t, slides: s} = this;
    e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), 
    s.removeAttr("data-swiper-slide-index");
  }
};

var h = {
  setGrabCursor: function(e) {
    if (r.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode) return;
    const t = this.el;
    t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", 
    t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab";
  },
  unsetGrabCursor: function() {
    r.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this.el.style.cursor = "");
  }
};

var m = {
  appendSlide: function(e) {
    const t = this, {$wrapperEl: s, params: i} = t;
    if (i.loop && t.loopDestroy(), "object" == typeof e && "length" in e) for (let a = 0; a < e.length; a += 1) e[a] && s.append(e[a]); else s.append(e);
    i.loop && t.loopCreate(), i.observer && r.observer || t.update();
  },
  prependSlide: function(e) {
    const t = this, {params: s, $wrapperEl: i, activeIndex: a} = t;
    s.loop && t.loopDestroy();
    let n = a + 1;
    if ("object" == typeof e && "length" in e) {
      for (let t = 0; t < e.length; t += 1) e[t] && i.prepend(e[t]);
      n = a + e.length;
    } else i.prepend(e);
    s.loop && t.loopCreate(), s.observer && r.observer || t.update(), t.slideTo(n, 0, !1);
  },
  addSlide: function(e, t) {
    const s = this, {$wrapperEl: i, params: a, activeIndex: n} = s;
    let o = n;
    a.loop && (o -= s.loopedSlides, s.loopDestroy(), s.slides = i.children(`.${a.slideClass}`));
    const l = s.slides.length;
    if (e <= 0) return void s.prependSlide(t);
    if (e >= l) return void s.appendSlide(t);
    let d = o > e ? o + 1 : o;
    const c = [];
    for (let r = l - 1; r >= e; r -= 1) {
      const e = s.slides.eq(r);
      e.remove(), c.unshift(e);
    }
    if ("object" == typeof t && "length" in t) {
      for (let e = 0; e < t.length; e += 1) t[e] && i.append(t[e]);
      d = o > e ? o + t.length : o;
    } else i.append(t);
    for (let r = 0; r < c.length; r += 1) i.append(c[r]);
    a.loop && s.loopCreate(), a.observer && r.observer || s.update(), a.loop ? s.slideTo(d + s.loopedSlides, 0, !1) : s.slideTo(d, 0, !1);
  },
  removeSlide: function(e) {
    const t = this, {params: s, $wrapperEl: i, activeIndex: a} = t;
    let n = a;
    s.loop && (n -= t.loopedSlides, t.loopDestroy(), t.slides = i.children(`.${s.slideClass}`));
    let o, l = n;
    if ("object" == typeof e && "length" in e) {
      for (let s = 0; s < e.length; s += 1) o = e[s], t.slides[o] && t.slides.eq(o).remove(), 
      o < l && (l -= 1);
      l = Math.max(l, 0);
    } else o = e, t.slides[o] && t.slides.eq(o).remove(), o < l && (l -= 1), l = Math.max(l, 0);
    s.loop && t.loopCreate(), s.observer && r.observer || t.update(), s.loop ? t.slideTo(l + t.loopedSlides, 0, !1) : t.slideTo(l, 0, !1);
  },
  removeAllSlides: function() {
    const e = this, t = [];
    for (let s = 0; s < e.slides.length; s += 1) t.push(s);
    e.removeSlide(t);
  }
};

const g = function() {
  const e = s.navigator.platform, t = s.navigator.userAgent, i = {
    ios: !1,
    android: !1,
    androidChrome: !1,
    desktop: !1,
    iphone: !1,
    ipod: !1,
    ipad: !1,
    edge: !1,
    ie: !1,
    firefox: !1,
    macos: !1,
    windows: !1,
    cordova: !(!s.cordova && !s.phonegap),
    phonegap: !(!s.cordova && !s.phonegap),
    electron: !1
  }, a = s.screen.width, n = s.screen.height, o = t.match(/(Android);?[\s\/]+([\d.]+)?/);
  // eslint-disable-line
  let l = t.match(/(iPad).*OS\s([\d_]+)/);
  const d = t.match(/(iPod)(.*OS\s([\d_]+))?/), c = !l && t.match(/(iPhone\sOS|iOS)\s([\d_]+)/), p = t.indexOf("MSIE ") >= 0 || t.indexOf("Trident/") >= 0, u = t.indexOf("Edge/") >= 0, h = t.indexOf("Gecko/") >= 0 && t.indexOf("Firefox/") >= 0, m = "Win32" === e, g = t.toLowerCase().indexOf("electron") >= 0;
  let f = "MacIntel" === e;
  // iPadOs 13 fix
    // Export object
  return !l && f && r.touch && (1024 === a && 1366 === n || 834 === a && 1194 === n || 834 === a && 1112 === n || 768 === a && 1024 === n) && (l = t.match(/(Version)\/([\d.]+)/), 
  f = !1), i.ie = p, i.edge = u, i.firefox = h, 
  // Android
  o && !m && (i.os = "android", i.osVersion = o[2], i.android = !0, i.androidChrome = t.toLowerCase().indexOf("chrome") >= 0), 
  (l || c || d) && (i.os = "ios", i.ios = !0), 
  // iOS
  c && !d && (i.osVersion = c[2].replace(/_/g, "."), i.iphone = !0), l && (i.osVersion = l[2].replace(/_/g, "."), 
  i.ipad = !0), d && (i.osVersion = d[3] ? d[3].replace(/_/g, ".") : null, i.ipod = !0), 
  // iOS 8+ changed UA
  i.ios && i.osVersion && t.indexOf("Version/") >= 0 && "10" === i.osVersion.split(".")[0] && (i.osVersion = t.toLowerCase().split("version/")[1].split(" ")[0]), 
  // Webview
  i.webView = !(!(c || l || d) || !t.match(/.*AppleWebKit(?!.*Safari)/i) && !s.navigator.standalone) || s.matchMedia && s.matchMedia("(display-mode: standalone)").matches, 
  i.webview = i.webView, i.standalone = i.webView, 
  // Desktop
  i.desktop = !(i.ios || i.android) || g, i.desktop && (i.electron = g, i.macos = f, 
  i.windows = m, i.macos && (i.os = "macos"), i.windows && (i.os = "windows")), 
  // Pixel Ratio
  i.pixelRatio = s.devicePixelRatio || 1, i;
}();

function onTouchStart(t) {
  const i = this, a = i.touchEventsData, {params: r, touches: o} = i;
  if (i.animating && r.preventInteractionOnTransition) return;
  let l = t;
  l.originalEvent && (l = l.originalEvent);
  const d = $(l.target);
  if ("wrapper" === r.touchEventsTarget && !d.closest(i.wrapperEl).length) return;
  if (a.isTouchEvent = "touchstart" === l.type, !a.isTouchEvent && "which" in l && 3 === l.which) return;
  if (!a.isTouchEvent && "button" in l && l.button > 0) return;
  if (a.isTouched && a.isMoved) return;
  if (r.noSwiping && d.closest(r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`)[0]) return void (i.allowClick = !0);
  if (r.swipeHandler && !d.closest(r.swipeHandler)[0]) return;
  o.currentX = "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX, o.currentY = "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY;
  const c = o.currentX, p = o.currentY, u = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection, h = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
  if (!u || !(c <= h || c >= s.screen.width - h)) {
    if (n.extend(a, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0
    }), o.startX = c, o.startY = p, a.touchStartTime = n.now(), i.allowClick = !0, i.updateSize(), 
    i.swipeDirection = void 0, r.threshold > 0 && (a.allowThresholdMove = !1), "touchstart" !== l.type) {
      let t = !0;
      d.is(a.formElements) && (t = !1), e.activeElement && $(e.activeElement).is(a.formElements) && e.activeElement !== d[0] && e.activeElement.blur();
      const s = t && i.allowTouchMove && r.touchStartPreventDefault;
      (r.touchStartForcePreventDefault || s) && l.preventDefault();
    }
    i.emit("touchStart", l);
  }
}

function onTouchMove(t) {
  const s = this, i = s.touchEventsData, {params: a, touches: r, rtlTranslate: o} = s;
  let l = t;
  if (l.originalEvent && (l = l.originalEvent), !i.isTouched) return void (i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", l));
  if (i.isTouchEvent && "touchmove" !== l.type) return;
  const d = "touchmove" === l.type && l.targetTouches && (l.targetTouches[0] || l.changedTouches[0]), c = "touchmove" === l.type ? d.pageX : l.pageX, p = "touchmove" === l.type ? d.pageY : l.pageY;
  if (l.preventedByNestedSwiper) return r.startX = c, void (r.startY = p);
  if (!s.allowTouchMove) 
  // isMoved = true;
  return s.allowClick = !1, void (i.isTouched && (n.extend(r, {
    startX: c,
    startY: p,
    currentX: c,
    currentY: p
  }), i.touchStartTime = n.now()));
  if (i.isTouchEvent && a.touchReleaseOnEdges && !a.loop) if (s.isVertical()) {
    // Vertical
    if (p < r.startY && s.translate <= s.maxTranslate() || p > r.startY && s.translate >= s.minTranslate()) return i.isTouched = !1, 
    void (i.isMoved = !1);
  } else if (c < r.startX && s.translate <= s.maxTranslate() || c > r.startX && s.translate >= s.minTranslate()) return;
  if (i.isTouchEvent && e.activeElement && l.target === e.activeElement && $(l.target).is(i.formElements)) return i.isMoved = !0, 
  void (s.allowClick = !1);
  if (i.allowTouchCallbacks && s.emit("touchMove", l), l.targetTouches && l.targetTouches.length > 1) return;
  r.currentX = c, r.currentY = p;
  const u = r.currentX - r.startX, h = r.currentY - r.startY;
  if (s.params.threshold && Math.sqrt(u ** 2 + h ** 2) < s.params.threshold) return;
  if (void 0 === i.isScrolling) {
    let e;
    s.isHorizontal() && r.currentY === r.startY || s.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : 
    // eslint-disable-next-line
    u * u + h * h >= 25 && (e = 180 * Math.atan2(Math.abs(h), Math.abs(u)) / Math.PI, 
    i.isScrolling = s.isHorizontal() ? e > a.touchAngle : 90 - e > a.touchAngle);
  }
  if (i.isScrolling && s.emit("touchMoveOpposite", l), void 0 === i.startMoving && (r.currentX === r.startX && r.currentY === r.startY || (i.startMoving = !0)), 
  i.isScrolling) return void (i.isTouched = !1);
  if (!i.startMoving) return;
  s.allowClick = !1, !a.cssMode && l.cancelable && l.preventDefault(), a.touchMoveStopPropagation && !a.nested && l.stopPropagation(), 
  i.isMoved || (a.loop && s.loopFix(), i.startTranslate = s.getTranslate(), s.setTransition(0), 
  s.animating && s.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, 
  // Grab Cursor
  !a.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), 
  s.emit("sliderFirstMove", l)), s.emit("sliderMove", l), i.isMoved = !0;
  let m = s.isHorizontal() ? u : h;
  r.diff = m, m *= a.touchRatio, o && (m = -m), s.swipeDirection = m > 0 ? "prev" : "next", 
  i.currentTranslate = m + i.startTranslate;
  let g = !0, f = a.resistanceRatio;
  // Threshold
  if (a.touchReleaseOnEdges && (f = 0), m > 0 && i.currentTranslate > s.minTranslate() ? (g = !1, 
  a.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + m) ** f)) : m < 0 && i.currentTranslate < s.maxTranslate() && (g = !1, 
  a.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - m) ** f)), 
  g && (l.preventedByNestedSwiper = !0), 
  // Directions locks
  !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), 
  !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), 
  a.threshold > 0) {
    if (!(Math.abs(m) > a.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
    if (!i.allowThresholdMove) return i.allowThresholdMove = !0, r.startX = r.currentX, 
    r.startY = r.currentY, i.currentTranslate = i.startTranslate, void (r.diff = s.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY);
  }
  a.followFinger && !a.cssMode && (
  // Update active index in free mode
  (a.freeMode || a.watchSlidesProgress || a.watchSlidesVisibility) && (s.updateActiveIndex(), 
  s.updateSlidesClasses()), a.freeMode && (
  // Velocity
  0 === i.velocities.length && i.velocities.push({
    position: r[s.isHorizontal() ? "startX" : "startY"],
    time: i.touchStartTime
  }), i.velocities.push({
    position: r[s.isHorizontal() ? "currentX" : "currentY"],
    time: n.now()
  })), 
  // Update progress
  s.updateProgress(i.currentTranslate), 
  // Update translate
  s.setTranslate(i.currentTranslate));
}

function onTouchEnd(e) {
  const t = this, s = t.touchEventsData, {params: i, touches: a, rtlTranslate: r, $wrapperEl: o, slidesGrid: l, snapGrid: d} = t;
  let c = e;
  if (c.originalEvent && (c = c.originalEvent), s.allowTouchCallbacks && t.emit("touchEnd", c), 
  s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && i.grabCursor && t.setGrabCursor(!1), 
  s.isMoved = !1, void (s.startMoving = !1);
  // Return Grab Cursor
    i.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
  // Time diff
    const p = n.now(), u = p - s.touchStartTime;
  if (
  // Tap, doubleTap, Click
  t.allowClick && (t.updateClickedSlide(c), t.emit("tap click", c), u < 300 && p - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", c)), 
  s.lastClickTime = n.now(), n.nextTick(() => {
    t.destroyed || (t.allowClick = !0);
  }), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === a.diff || s.currentTranslate === s.startTranslate) return s.isTouched = !1, 
  s.isMoved = !1, void (s.startMoving = !1);
  let h;
  if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, h = i.followFinger ? r ? t.translate : -t.translate : -s.currentTranslate, 
  i.cssMode) return;
  if (i.freeMode) {
    if (h < -t.minTranslate()) return void t.slideTo(t.activeIndex);
    if (h > -t.maxTranslate()) return void (t.slides.length < d.length ? t.slideTo(d.length - 1) : t.slideTo(t.slides.length - 1));
    if (i.freeModeMomentum) {
      if (s.velocities.length > 1) {
        const e = s.velocities.pop(), a = s.velocities.pop(), r = e.position - a.position, o = e.time - a.time;
        t.velocity = r / o, t.velocity /= 2, Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), 
        // this implies that the user stopped moving a finger then released.
        // There would be no events with distance zero, so the last event is stale.
        (o > 150 || n.now() - e.time > 300) && (t.velocity = 0);
      } else t.velocity = 0;
      t.velocity *= i.freeModeMomentumVelocityRatio, s.velocities.length = 0;
      let e = 1e3 * i.freeModeMomentumRatio;
      const a = t.velocity * e;
      let l = t.translate + a;
      r && (l = -l);
      let c, p = !1;
      const u = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
      let h;
      if (l < t.maxTranslate()) i.freeModeMomentumBounce ? (l + t.maxTranslate() < -u && (l = t.maxTranslate() - u), 
      c = t.maxTranslate(), p = !0, s.allowMomentumBounce = !0) : l = t.maxTranslate(), 
      i.loop && i.centeredSlides && (h = !0); else if (l > t.minTranslate()) i.freeModeMomentumBounce ? (l - t.minTranslate() > u && (l = t.minTranslate() + u), 
      c = t.minTranslate(), p = !0, s.allowMomentumBounce = !0) : l = t.minTranslate(), 
      i.loop && i.centeredSlides && (h = !0); else if (i.freeModeSticky) {
        let e;
        for (let t = 0; t < d.length; t += 1) if (d[t] > -l) {
          e = t;
          break;
        }
        l = Math.abs(d[e] - l) < Math.abs(d[e - 1] - l) || "next" === t.swipeDirection ? d[e] : d[e - 1], 
        l = -l;
      }
      // Fix duration
      if (h && t.once("transitionEnd", () => {
        t.loopFix();
      }), 0 !== t.velocity) {
        if (e = r ? Math.abs((-l - t.translate) / t.velocity) : Math.abs((l - t.translate) / t.velocity), 
        i.freeModeSticky) {
          // If freeModeSticky is active and the user ends a swipe with a slow-velocity
          // event, then durations can be 20+ seconds to slide one (or zero!) slides.
          // It's easy to see this when simulating touch with mouse events. To fix this,
          // limit single-slide swipes to the default slide duration. This also has the
          // nice side effect of matching slide speed if the user stopped moving before
          // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
          // For faster swipes, also apply limits (albeit higher ones).
          const s = Math.abs((r ? -l : l) - t.translate), a = t.slidesSizesGrid[t.activeIndex];
          e = s < a ? i.speed : s < 2 * a ? 1.5 * i.speed : 2.5 * i.speed;
        }
      } else if (i.freeModeSticky) return void t.slideToClosest();
      i.freeModeMomentumBounce && p ? (t.updateProgress(c), t.setTransition(e), t.setTranslate(l), 
      t.transitionStart(!0, t.swipeDirection), t.animating = !0, o.transitionEnd(() => {
        t && !t.destroyed && s.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(i.speed), 
        setTimeout(() => {
          t.setTranslate(c), o.transitionEnd(() => {
            t && !t.destroyed && t.transitionEnd();
          });
        }, 0));
      })) : t.velocity ? (t.updateProgress(l), t.setTransition(e), t.setTranslate(l), 
      t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, o.transitionEnd(() => {
        t && !t.destroyed && t.transitionEnd();
      }))) : t.updateProgress(l), t.updateActiveIndex(), t.updateSlidesClasses();
    } else if (i.freeModeSticky) return void t.slideToClosest();
    return void ((!i.freeModeMomentum || u >= i.longSwipesMs) && (t.updateProgress(), 
    t.updateActiveIndex(), t.updateSlidesClasses()));
  }
  // Find current slide
    let m = 0, g = t.slidesSizesGrid[0];
  for (let n = 0; n < l.length; n += n < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
    const e = n < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
    void 0 !== l[n + e] ? h >= l[n] && h < l[n + e] && (m = n, g = l[n + e] - l[n]) : h >= l[n] && (m = n, 
    g = l[l.length - 1] - l[l.length - 2]);
  }
  // Find current slide size
    const f = (h - l[m]) / g, v = m < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
  if (u > i.longSwipesMs) {
    // Long touches
    if (!i.longSwipes) return void t.slideTo(t.activeIndex);
    "next" === t.swipeDirection && (f >= i.longSwipesRatio ? t.slideTo(m + v) : t.slideTo(m)), 
    "prev" === t.swipeDirection && (f > 1 - i.longSwipesRatio ? t.slideTo(m + v) : t.slideTo(m));
  } else {
    // Short swipes
    if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
    t.navigation && (c.target === t.navigation.nextEl || c.target === t.navigation.prevEl) ? c.target === t.navigation.nextEl ? t.slideTo(m + v) : t.slideTo(m) : ("next" === t.swipeDirection && t.slideTo(m + v), 
    "prev" === t.swipeDirection && t.slideTo(m));
  }
}

function onResize() {
  const e = this, {params: t, el: s} = e;
  if (s && 0 === s.offsetWidth) return;
  // Breakpoints
    t.breakpoints && e.setBreakpoint();
  // Save locks
    const {allowSlideNext: i, allowSlidePrev: a, snapGrid: n} = e;
  // Disable locks on resize
    e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), 
  e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), 
  e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), 
  // Return locks after resize
  e.allowSlidePrev = a, e.allowSlideNext = i, e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow();
}

function onClick(e) {
  const t = this;
  t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), 
  e.stopImmediatePropagation()));
}

function onScroll() {
  const e = this, {wrapperEl: t, rtlTranslate: s} = e;
  let i;
  e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = s ? t.scrollWidth - t.offsetWidth - t.scrollLeft : -t.scrollLeft : e.translate = -t.scrollTop, 
  // eslint-disable-next-line
  -0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
  const a = e.maxTranslate() - e.minTranslate();
  i = 0 === a ? 0 : (e.translate - e.minTranslate()) / a, i !== e.progress && e.updateProgress(s ? -e.translate : e.translate), 
  e.emit("setTranslate", e.translate, !1);
}

let f = !1;

function dummyEventListener() {}

var v = {
  init: !0,
  direction: "horizontal",
  touchEventsTarget: "container",
  initialSlide: 0,
  speed: 300,
  cssMode: !1,
  updateOnWindowResize: !0,
  preventInteractionOnTransition: !1,
  // To support iOS's swipe-to-go-back gesture (when being used in-app, with UIWebView).
  edgeSwipeDetection: !1,
  edgeSwipeThreshold: 20,
  // Free mode
  freeMode: !1,
  freeModeMomentum: !0,
  freeModeMomentumRatio: 1,
  freeModeMomentumBounce: !0,
  freeModeMomentumBounceRatio: 1,
  freeModeMomentumVelocityRatio: 1,
  freeModeSticky: !1,
  freeModeMinimumVelocity: .02,
  // Autoheight
  autoHeight: !1,
  // Set wrapper width
  setWrapperSize: !1,
  // Virtual Translate
  virtualTranslate: !1,
  // Effects
  effect: "slide",
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
  // Breakpoints
  breakpoints: void 0,
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerColumn: 1,
  slidesPerColumnFill: "column",
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  centeredSlides: !1,
  centeredSlidesBounds: !1,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: !0,
  centerInsufficientSlides: !1,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: !1,
  // Round length
  roundLengths: !1,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: !0,
  shortSwipes: !0,
  longSwipes: !0,
  longSwipesRatio: .5,
  longSwipesMs: 300,
  followFinger: !0,
  allowTouchMove: !0,
  threshold: 0,
  touchMoveStopPropagation: !1,
  touchStartPreventDefault: !0,
  touchStartForcePreventDefault: !1,
  touchReleaseOnEdges: !1,
  // Unique Navigation Elements
  uniqueNavElements: !0,
  // Resistance
  resistance: !0,
  resistanceRatio: .85,
  // Progress
  watchSlidesProgress: !1,
  watchSlidesVisibility: !1,
  // Cursor
  grabCursor: !1,
  // Clicks
  preventClicks: !0,
  preventClicksPropagation: !0,
  slideToClickedSlide: !1,
  // Images
  preloadImages: !0,
  updateOnImagesReady: !0,
  // loop
  loop: !1,
  loopAdditionalSlides: 0,
  loopedSlides: null,
  loopFillGroupWithBlank: !1,
  // Swiping/no swiping
  allowSlidePrev: !0,
  allowSlideNext: !0,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: !0,
  noSwipingClass: "swiper-no-swiping",
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: !0,
  // NS
  containerModifierClass: "swiper-container-",
  // NEW
  slideClass: "swiper-slide",
  slideBlankClass: "swiper-slide-invisible-blank",
  slideActiveClass: "swiper-slide-active",
  slideDuplicateActiveClass: "swiper-slide-duplicate-active",
  slideVisibleClass: "swiper-slide-visible",
  slideDuplicateClass: "swiper-slide-duplicate",
  slideNextClass: "swiper-slide-next",
  slideDuplicateNextClass: "swiper-slide-duplicate-next",
  slidePrevClass: "swiper-slide-prev",
  slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
  wrapperClass: "swiper-wrapper",
  // Callbacks
  runCallbacksOnInit: !0
};

/* eslint no-param-reassign: "off" */
const b = {
  update: l,
  translate: d,
  transition: c,
  slide: p,
  loop: u,
  grabCursor: h,
  manipulation: m,
  events: {
    attachEvents: function() {
      const t = this, {params: s, touchEvents: i, el: a, wrapperEl: n} = t;
      t.onTouchStart = onTouchStart.bind(t), t.onTouchMove = onTouchMove.bind(t), t.onTouchEnd = onTouchEnd.bind(t), 
      s.cssMode && (t.onScroll = onScroll.bind(t)), t.onClick = onClick.bind(t);
      const o = !!s.nested;
      // Touch Events
            if (!r.touch && r.pointerEvents) a.addEventListener(i.start, t.onTouchStart, !1), 
      e.addEventListener(i.move, t.onTouchMove, o), e.addEventListener(i.end, t.onTouchEnd, !1); else {
        if (r.touch) {
          const n = !("touchstart" !== i.start || !r.passiveListener || !s.passiveListeners) && {
            passive: !0,
            capture: !1
          };
          a.addEventListener(i.start, t.onTouchStart, n), a.addEventListener(i.move, t.onTouchMove, r.passiveListener ? {
            passive: !1,
            capture: o
          } : o), a.addEventListener(i.end, t.onTouchEnd, n), i.cancel && a.addEventListener(i.cancel, t.onTouchEnd, n), 
          f || (e.addEventListener("touchstart", dummyEventListener), f = !0);
        }
        (s.simulateTouch && !g.ios && !g.android || s.simulateTouch && !r.touch && g.ios) && (a.addEventListener("mousedown", t.onTouchStart, !1), 
        e.addEventListener("mousemove", t.onTouchMove, o), e.addEventListener("mouseup", t.onTouchEnd, !1));
      }
      // Prevent Links Clicks
            (s.preventClicks || s.preventClicksPropagation) && a.addEventListener("click", t.onClick, !0), 
      s.cssMode && n.addEventListener("scroll", t.onScroll), 
      // Resize handler
      s.updateOnWindowResize ? t.on(g.ios || g.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, !0) : t.on("observerUpdate", onResize, !0);
    },
    detachEvents: function() {
      const t = this, {params: s, touchEvents: i, el: a, wrapperEl: n} = t, o = !!s.nested;
      // Touch Events
      if (!r.touch && r.pointerEvents) a.removeEventListener(i.start, t.onTouchStart, !1), 
      e.removeEventListener(i.move, t.onTouchMove, o), e.removeEventListener(i.end, t.onTouchEnd, !1); else {
        if (r.touch) {
          const e = !("onTouchStart" !== i.start || !r.passiveListener || !s.passiveListeners) && {
            passive: !0,
            capture: !1
          };
          a.removeEventListener(i.start, t.onTouchStart, e), a.removeEventListener(i.move, t.onTouchMove, o), 
          a.removeEventListener(i.end, t.onTouchEnd, e), i.cancel && a.removeEventListener(i.cancel, t.onTouchEnd, e);
        }
        (s.simulateTouch && !g.ios && !g.android || s.simulateTouch && !r.touch && g.ios) && (a.removeEventListener("mousedown", t.onTouchStart, !1), 
        e.removeEventListener("mousemove", t.onTouchMove, o), e.removeEventListener("mouseup", t.onTouchEnd, !1));
      }
      // Prevent Links Clicks
            (s.preventClicks || s.preventClicksPropagation) && a.removeEventListener("click", t.onClick, !0), 
      s.cssMode && n.removeEventListener("scroll", t.onScroll), 
      // Resize handler
      t.off(g.ios || g.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize);
    }
  },
  breakpoints: {
    setBreakpoint: function() {
      const e = this, {activeIndex: t, initialized: s, loopedSlides: i = 0, params: a, $el: r} = e, o = a.breakpoints;
      if (!o || o && 0 === Object.keys(o).length) return;
      // Get breakpoint for window width and update parameters
            const l = e.getBreakpoint(o);
      if (l && e.currentBreakpoint !== l) {
        const d = l in o ? o[l] : void 0;
        d && [ "slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn" ].forEach(e => {
          const t = d[e];
          void 0 !== t && (d[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto");
        });
        const c = d || e.originalParams, p = a.slidesPerColumn > 1, u = c.slidesPerColumn > 1;
        p && !u ? r.removeClass(`${a.containerModifierClass}multirow ${a.containerModifierClass}multirow-column`) : !p && u && (r.addClass(`${a.containerModifierClass}multirow`), 
        "column" === c.slidesPerColumnFill && r.addClass(`${a.containerModifierClass}multirow-column`));
        const h = c.direction && c.direction !== a.direction, m = a.loop && (c.slidesPerView !== a.slidesPerView || h);
        h && s && e.changeDirection(), n.extend(e.params, c), n.extend(e, {
          allowTouchMove: e.params.allowTouchMove,
          allowSlideNext: e.params.allowSlideNext,
          allowSlidePrev: e.params.allowSlidePrev
        }), e.currentBreakpoint = l, m && s && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), 
        e.slideTo(t - i + e.loopedSlides, 0, !1)), e.emit("breakpoint", c);
      }
    },
    getBreakpoint: function(e) {
      // Get breakpoint for window width
      if (!e) return;
      let t = !1;
      const i = Object.keys(e).map(e => {
        if ("string" == typeof e && 0 === e.indexOf("@")) {
          const t = parseFloat(e.substr(1));
          return {
            value: s.innerHeight * t,
            point: e
          };
        }
        return {
          value: e,
          point: e
        };
      });
      i.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
      for (let a = 0; a < i.length; a += 1) {
        const {point: e, value: n} = i[a];
        n <= s.innerWidth && (t = e);
      }
      return t || "max";
    }
  },
  checkOverflow: {
    checkOverflow: function() {
      const e = this, t = e.params, s = e.isLocked, i = e.slides.length > 0 && t.slidesOffsetBefore + t.spaceBetween * (e.slides.length - 1) + e.slides[0].offsetWidth * e.slides.length;
      t.slidesOffsetBefore && t.slidesOffsetAfter && i ? e.isLocked = i <= e.size : e.isLocked = 1 === e.snapGrid.length, 
      e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, 
      // events
      s !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), s && s !== e.isLocked && (e.isEnd = !1, 
      e.navigation.update());
    }
  },
  classes: {
    addClasses: function() {
      const {classNames: e, params: t, rtl: s, $el: i} = this, a = [];
      a.push("initialized"), a.push(t.direction), t.freeMode && a.push("free-mode"), t.autoHeight && a.push("autoheight"), 
      s && a.push("rtl"), t.slidesPerColumn > 1 && (a.push("multirow"), "column" === t.slidesPerColumnFill && a.push("multirow-column")), 
      g.android && a.push("android"), g.ios && a.push("ios"), t.cssMode && a.push("css-mode"), 
      a.forEach(s => {
        e.push(t.containerModifierClass + s);
      }), i.addClass(e.join(" "));
    },
    removeClasses: function() {
      const {$el: e, classNames: t} = this;
      e.removeClass(t.join(" "));
    }
  },
  images: {
    loadImage: function(e, t, i, a, n, r) {
      let o;
      function onReady() {
        r && r();
      }
      $(e).parent("picture")[0] || e.complete && n ? 
      // image already loaded...
      onReady() : t ? (o = new s.Image, o.onload = onReady, o.onerror = onReady, a && (o.sizes = a), 
      i && (o.srcset = i), t && (o.src = t)) : onReady();
    },
    preloadImages: function() {
      const e = this;
      function onReady() {
        null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), 
        e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), 
        e.emit("imagesReady")));
      }
      e.imagesToLoad = e.$el.find("img");
      for (let t = 0; t < e.imagesToLoad.length; t += 1) {
        const s = e.imagesToLoad[t];
        e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, onReady);
      }
    }
  }
}, w = {};

class T extends o {
  constructor(...e) {
    let t, s;
    1 === e.length && e[0].constructor && e[0].constructor === Object ? s = e[0] : [t, s] = e, 
    s || (s = {}), s = n.extend({}, s), t && !s.el && (s.el = t), super(s), Object.keys(b).forEach(e => {
      Object.keys(b[e]).forEach(t => {
        T.prototype[t] || (T.prototype[t] = b[e][t]);
      });
    });
    // Swiper Instance
    const i = this;
    void 0 === i.modules && (i.modules = {}), Object.keys(i.modules).forEach(e => {
      const t = i.modules[e];
      if (t.params) {
        const e = Object.keys(t.params)[0], i = t.params[e];
        if ("object" != typeof i || null === i) return;
        if (!(e in s) || !("enabled" in i)) return;
        !0 === s[e] && (s[e] = {
          enabled: !0
        }), "object" != typeof s[e] || "enabled" in s[e] || (s[e].enabled = !0), s[e] || (s[e] = {
          enabled: !1
        });
      }
    });
    // Extend defaults with modules params
    const a = n.extend({}, v);
    i.useModulesParams(a), 
    // Extend defaults with passed params
    i.params = n.extend({}, a, w, s), i.originalParams = n.extend({}, i.params), i.passedParams = n.extend({}, s), 
    // Save Dom lib
    i.$ = $;
    // Find el
    const o = $(i.params.el);
    if (t = o[0], !t) return;
    if (o.length > 1) {
      const e = [];
      return o.each((t, i) => {
        const a = n.extend({}, s, {
          el: i
        });
        e.push(new T(a));
      }), e;
    }
    // Find Wrapper
    let l;
    // Return app instance
    return t.swiper = i, o.data("swiper", i), t && t.shadowRoot && t.shadowRoot.querySelector ? (l = $(t.shadowRoot.querySelector(`.${i.params.wrapperClass}`)), 
    // Children needs to return slot items
    l.children = e => o.children(e)) : l = o.children(`.${i.params.wrapperClass}`), 
    // Extend Swiper
    n.extend(i, {
      $el: o,
      el: t,
      $wrapperEl: l,
      wrapperEl: l[0],
      // Classes
      classNames: [],
      // Slides
      slides: $(),
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal: () => "horizontal" === i.params.direction,
      isVertical: () => "vertical" === i.params.direction,
      // RTL
      rtl: "rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction"),
      rtlTranslate: "horizontal" === i.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction")),
      wrongRTL: "-webkit-box" === l.css("display"),
      // Indexes
      activeIndex: 0,
      realIndex: 0,
      isBeginning: !0,
      isEnd: !1,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: !1,
      // Locks
      allowSlideNext: i.params.allowSlideNext,
      allowSlidePrev: i.params.allowSlidePrev,
      // Touch Events
      touchEvents: function() {
        const e = [ "touchstart", "touchmove", "touchend", "touchcancel" ];
        let t = [ "mousedown", "mousemove", "mouseup" ];
        return r.pointerEvents && (t = [ "pointerdown", "pointermove", "pointerup" ]), i.touchEventsTouch = {
          start: e[0],
          move: e[1],
          end: e[2],
          cancel: e[3]
        }, i.touchEventsDesktop = {
          start: t[0],
          move: t[1],
          end: t[2]
        }, r.touch || !i.params.simulateTouch ? i.touchEventsTouch : i.touchEventsDesktop;
      }(),
      touchEventsData: {
        isTouched: void 0,
        isMoved: void 0,
        allowTouchCallbacks: void 0,
        touchStartTime: void 0,
        isScrolling: void 0,
        currentTranslate: void 0,
        startTranslate: void 0,
        allowThresholdMove: void 0,
        // Form elements to match
        formElements: "input, select, option, textarea, button, video, label",
        // Last click time
        lastClickTime: n.now(),
        clickTimeout: void 0,
        // Velocities
        velocities: [],
        allowMomentumBounce: void 0,
        isTouchEvent: void 0,
        startMoving: void 0
      },
      // Clicks
      allowClick: !0,
      // Touches
      allowTouchMove: i.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    }), 
    // Install Modules
    i.useModules(), 
    // Init
    i.params.init && i.init(), i;
  }
  slidesPerViewDynamic() {
    const {params: e, slides: t, slidesGrid: s, size: i, activeIndex: a} = this;
    let n = 1;
    if (e.centeredSlides) {
      let e, s = t[a].swiperSlideSize;
      for (let r = a + 1; r < t.length; r += 1) t[r] && !e && (s += t[r].swiperSlideSize, 
      n += 1, s > i && (e = !0));
      for (let r = a - 1; r >= 0; r -= 1) t[r] && !e && (s += t[r].swiperSlideSize, n += 1, 
      s > i && (e = !0));
    } else for (let r = a + 1; r < t.length; r += 1) s[r] - s[a] < i && (n += 1);
    return n;
  }
  update() {
    const e = this;
    if (!e || e.destroyed) return;
    const {snapGrid: t, params: s} = e;
    // Breakpoints
        function setTranslate() {
      const t = e.rtlTranslate ? -1 * e.translate : e.translate, s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
      e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
    }
    let i;
    s.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), 
    e.updateSlidesClasses(), e.params.freeMode ? (setTranslate(), e.params.autoHeight && e.updateAutoHeight()) : (i = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), 
    i || setTranslate()), s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), 
    e.emit("update");
  }
  changeDirection(e, t = !0) {
    const s = this, i = s.params.direction;
    return e || (
    // eslint-disable-next-line
    e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (s.$el.removeClass(`${s.params.containerModifierClass}${i}`).addClass(`${s.params.containerModifierClass}${e}`), 
    s.params.direction = e, s.slides.each((t, s) => {
      "vertical" === e ? s.style.width = "" : s.style.height = "";
    }), s.emit("changeDirection"), t && s.update()), s;
  }
  init() {
    const e = this;
    e.initialized || (e.emit("beforeInit"), 
    // Set breakpoint
    e.params.breakpoints && e.setBreakpoint(), 
    // Add Classes
    e.addClasses(), 
    // Create loop
    e.params.loop && e.loopCreate(), 
    // Update size
    e.updateSize(), 
    // Update slides
    e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), 
    // Set Grab Cursor
    e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), 
    // Slide To Initial Slide
    e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), 
    // Attach events
    e.attachEvents(), 
    // Init Flag
    e.initialized = !0, 
    // Emit
    e.emit("init"));
  }
  destroy(e = !0, t = !0) {
    const s = this, {params: i, $el: a, $wrapperEl: r, slides: o} = s;
    return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), 
    // Init Flag
    s.initialized = !1, 
    // Detach events
    s.detachEvents(), 
    // Destroy loop
    i.loop && s.loopDestroy(), 
    // Cleanup styles
    t && (s.removeClasses(), a.removeAttr("style"), r.removeAttr("style"), o && o.length && o.removeClass([ i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass ].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), 
    s.emit("destroy"), 
    // Detach emitter events
    Object.keys(s.eventsListeners).forEach(e => {
      s.off(e);
    }), !1 !== e && (s.$el[0].swiper = null, s.$el.data("swiper", null), n.deleteProps(s)), 
    s.destroyed = !0), null;
  }
  static extendDefaults(e) {
    n.extend(w, e);
  }
  static get extendedDefaults() {
    return w;
  }
  static get defaults() {
    return v;
  }
  static get Class() {
    return o;
  }
  static get $() {
    return $;
  }
}

var E = {
  name: "device",
  proto: {
    device: g
  },
  static: {
    device: g
  }
}, y = {
  name: "support",
  proto: {
    support: r
  },
  static: {
    support: r
  }
};

const S = {
  isEdge: !!s.navigator.userAgent.match(/Edge/g),
  isSafari: function() {
    const e = s.navigator.userAgent.toLowerCase();
    return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0;
  }(),
  isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(s.navigator.userAgent)
};

var x = {
  name: "browser",
  proto: {
    browser: S
  },
  static: {
    browser: S
  }
}, C = {
  name: "resize",
  create() {
    const e = this;
    n.extend(e, {
      resize: {
        resizeHandler() {
          e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"));
        },
        orientationChangeHandler() {
          e && !e.destroyed && e.initialized && e.emit("orientationchange");
        }
      }
    });
  },
  on: {
    init() {
      // Emit resize
      s.addEventListener("resize", this.resize.resizeHandler), 
      // Emit orientationchange
      s.addEventListener("orientationchange", this.resize.orientationChangeHandler);
    },
    destroy() {
      s.removeEventListener("resize", this.resize.resizeHandler), s.removeEventListener("orientationchange", this.resize.orientationChangeHandler);
    }
  }
};

const M = {
  func: s.MutationObserver || s.WebkitMutationObserver,
  attach(e, t = {}) {
    const i = this, a = new (0, M.func)(e => {
      // The observerUpdate event should only be triggered
      // once despite the number of mutations.  Additional
      // triggers are redundant and are very costly
      if (1 === e.length) return void i.emit("observerUpdate", e[0]);
      const observerUpdate = function() {
        i.emit("observerUpdate", e[0]);
      };
      s.requestAnimationFrame ? s.requestAnimationFrame(observerUpdate) : s.setTimeout(observerUpdate, 0);
    });
    a.observe(e, {
      attributes: void 0 === t.attributes || t.attributes,
      childList: void 0 === t.childList || t.childList,
      characterData: void 0 === t.characterData || t.characterData
    }), i.observer.observers.push(a);
  },
  init() {
    const e = this;
    if (r.observer && e.params.observer) {
      if (e.params.observeParents) {
        const t = e.$el.parents();
        for (let s = 0; s < t.length; s += 1) e.observer.attach(t[s]);
      }
      // Observe container
            e.observer.attach(e.$el[0], {
        childList: e.params.observeSlideChildren
      }), 
      // Observe wrapper
      e.observer.attach(e.$wrapperEl[0], {
        attributes: !1
      });
    }
  },
  destroy() {
    this.observer.observers.forEach(e => {
      e.disconnect();
    }), this.observer.observers = [];
  }
};

var P = {
  name: "observer",
  params: {
    observer: !1,
    observeParents: !1,
    observeSlideChildren: !1
  },
  create() {
    n.extend(this, {
      observer: {
        init: M.init.bind(this),
        attach: M.attach.bind(this),
        destroy: M.destroy.bind(this),
        observers: []
      }
    });
  },
  on: {
    init() {
      this.observer.init();
    },
    destroy() {
      this.observer.destroy();
    }
  }
};

const k = {
  handle(t) {
    const i = this, {rtlTranslate: a} = i;
    let n = t;
    n.originalEvent && (n = n.originalEvent);
 // jquery fix
        const r = n.keyCode || n.charCode;
    // Directions locks
        if (!i.allowSlideNext && (i.isHorizontal() && 39 === r || i.isVertical() && 40 === r || 34 === r)) return !1;
    if (!i.allowSlidePrev && (i.isHorizontal() && 37 === r || i.isVertical() && 38 === r || 33 === r)) return !1;
    if (!(n.shiftKey || n.altKey || n.ctrlKey || n.metaKey || e.activeElement && e.activeElement.nodeName && ("input" === e.activeElement.nodeName.toLowerCase() || "textarea" === e.activeElement.nodeName.toLowerCase()))) {
      if (i.params.keyboard.onlyInViewport && (33 === r || 34 === r || 37 === r || 39 === r || 38 === r || 40 === r)) {
        let e = !1;
        // Check that swiper should be inside of visible area of window
                if (i.$el.parents(`.${i.params.slideClass}`).length > 0 && 0 === i.$el.parents(`.${i.params.slideActiveClass}`).length) return;
        const t = s.innerWidth, n = s.innerHeight, r = i.$el.offset();
        a && (r.left -= i.$el[0].scrollLeft);
        const o = [ [ r.left, r.top ], [ r.left + i.width, r.top ], [ r.left, r.top + i.height ], [ r.left + i.width, r.top + i.height ] ];
        for (let s = 0; s < o.length; s += 1) {
          const i = o[s];
          i[0] >= 0 && i[0] <= t && i[1] >= 0 && i[1] <= n && (e = !0);
        }
        if (!e) return;
      }
      i.isHorizontal() ? (33 !== r && 34 !== r && 37 !== r && 39 !== r || (n.preventDefault ? n.preventDefault() : n.returnValue = !1), 
      (34 !== r && 39 !== r || a) && (33 !== r && 37 !== r || !a) || i.slideNext(), (33 !== r && 37 !== r || a) && (34 !== r && 39 !== r || !a) || i.slidePrev()) : (33 !== r && 34 !== r && 38 !== r && 40 !== r || (n.preventDefault ? n.preventDefault() : n.returnValue = !1), 
      34 !== r && 40 !== r || i.slideNext(), 33 !== r && 38 !== r || i.slidePrev()), i.emit("keyPress", r);
    }
  },
  enable() {
    this.keyboard.enabled || ($(e).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0);
  },
  disable() {
    this.keyboard.enabled && ($(e).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1);
  }
};

var z = {
  name: "keyboard",
  params: {
    keyboard: {
      enabled: !1,
      onlyInViewport: !0
    }
  },
  create() {
    n.extend(this, {
      keyboard: {
        enabled: !1,
        enable: k.enable.bind(this),
        disable: k.disable.bind(this),
        handle: k.handle.bind(this)
      }
    });
  },
  on: {
    init() {
      const e = this;
      e.params.keyboard.enabled && e.keyboard.enable();
    },
    destroy() {
      const e = this;
      e.keyboard.enabled && e.keyboard.disable();
    }
  }
};

const L = {
  lastScrollTime: n.now(),
  lastEventBeforeSnap: void 0,
  recentWheelEvents: [],
  event: () => s.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
    let t = "onwheel" in e;
    if (!t) {
      const s = e.createElement("div");
      s.setAttribute("onwheel", "return;"), t = "function" == typeof s.onwheel;
    }
    return !t && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (
    // This is the only way to test support for the `wheel` event in IE9+.
    t = e.implementation.hasFeature("Events.wheel", "3.0")), t;
  }() ? "wheel" : "mousewheel",
  normalize(e) {
    let t = 0, s = 0, i = 0, a = 0;
    // pixelX, pixelY
    // Legacy
    return "detail" in e && (s = e.detail), "wheelDelta" in e && (s = -e.wheelDelta / 120), 
    "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), 
    // side scrolling on FF with DOMMouseScroll
    "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = s, s = 0), i = 10 * t, a = 10 * s, 
    "deltaY" in e && (a = e.deltaY), "deltaX" in e && (i = e.deltaX), e.shiftKey && !i && (// if user scrolls with shift he wants horizontal scroll
    i = a, a = 0), (i || a) && e.deltaMode && (1 === e.deltaMode ? (// delta in LINE units
    i *= 40, a *= 40) : (// delta in PAGE units
    i *= 800, a *= 800)), 
    // Fall-back if spin cannot be determined
    i && !t && (t = i < 1 ? -1 : 1), a && !s && (s = a < 1 ? -1 : 1), {
      spinX: t,
      spinY: s,
      pixelX: i,
      pixelY: a
    };
  },
  handleMouseEnter() {
    this.mouseEntered = !0;
  },
  handleMouseLeave() {
    this.mouseEntered = !1;
  },
  handle(e) {
    let t = e;
    const s = this, i = s.params.mousewheel;
    s.params.cssMode && t.preventDefault();
    let a = s.$el;
    if ("container" !== s.params.mousewheel.eventsTarged && (a = $(s.params.mousewheel.eventsTarged)), 
    !s.mouseEntered && !a[0].contains(t.target) && !i.releaseOnEdges) return !0;
    t.originalEvent && (t = t.originalEvent);
 // jquery fix
        let r = 0;
    const o = s.rtlTranslate ? -1 : 1, l = L.normalize(t);
    if (i.forceToAxis) if (s.isHorizontal()) {
      if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY))) return !0;
      r = l.pixelX * o;
    } else {
      if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX))) return !0;
      r = l.pixelY;
    } else r = Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * o : -l.pixelY;
    if (0 === r) return !0;
    if (i.invert && (r = -r), s.params.freeMode) {
      // Freemode or scrollContainer:
      // If we recently snapped after a momentum scroll, then ignore wheel events
      // to give time for the deceleration to finish. Stop ignoring after 500 msecs
      // or if it's a new scroll (larger delta or inverse sign as last event before
      // an end-of-momentum snap).
      const e = {
        time: n.now(),
        delta: Math.abs(r),
        direction: Math.sign(r)
      }, {lastEventBeforeSnap: a} = s.mousewheel, o = a && e.time < a.time + 500 && e.delta <= a.delta && e.direction === a.direction;
      if (!o) {
        s.mousewheel.lastEventBeforeSnap = void 0, s.params.loop && s.loopFix();
        let a = s.getTranslate() + r * i.sensitivity;
        const l = s.isBeginning, d = s.isEnd;
        if (a >= s.minTranslate() && (a = s.minTranslate()), a <= s.maxTranslate() && (a = s.maxTranslate()), 
        s.setTransition(0), s.setTranslate(a), s.updateProgress(), s.updateActiveIndex(), 
        s.updateSlidesClasses(), (!l && s.isBeginning || !d && s.isEnd) && s.updateSlidesClasses(), 
        s.params.freeModeSticky) {
          // When wheel scrolling starts with sticky (aka snap) enabled, then detect
          // the end of a momentum scroll by storing recent (N=15?) wheel events.
          // 1. do all N events have decreasing or same (absolute value) delta?
          // 2. did all N events arrive in the last M (M=500?) msecs?
          // 3. does the earliest event have an (absolute value) delta that's
          //    at least P (P=1?) larger than the most recent event's delta?
          // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
          // If 1-4 are "yes" then we're near the end of a momuntum scroll deceleration.
          // Snap immediately and ignore remaining wheel events in this scroll.
          // See comment above for "remaining wheel events in this scroll" determination.
          // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
          clearTimeout(s.mousewheel.timeout), s.mousewheel.timeout = void 0;
          const t = s.mousewheel.recentWheelEvents;
          t.length >= 15 && t.shift();
          const i = t.length ? t[t.length - 1] : void 0, a = t[0];
          if (t.push(e), i && (e.delta > i.delta || e.direction !== i.direction)) 
          // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
          t.splice(0); else if (t.length >= 15 && e.time - a.time < 500 && a.delta - e.delta >= 1 && e.delta <= 6) {
            // We're at the end of the deceleration of a momentum scroll, so there's no need
            // to wait for more events. Snap ASAP on the next tick.
            // Also, because there's some remaining momentum we'll bias the snap in the
            // direction of the ongoing scroll because it's better UX for the scroll to snap
            // in the same direction as the scroll instead of reversing to snap.  Therefore,
            // if it's already scrolled more than 20% in the current direction, keep going.
            const i = r > 0 ? .8 : .2;
            s.mousewheel.lastEventBeforeSnap = e, t.splice(0), s.mousewheel.timeout = n.nextTick(() => {
              s.slideToClosest(s.params.speed, !0, void 0, i);
            }, 0);
          }
          s.mousewheel.timeout || (
          // if we get here, then we haven't detected the end of a momentum scroll, so
          // we'll consider a scroll "complete" when there haven't been any wheel events
          // for 500ms.
          s.mousewheel.timeout = n.nextTick(() => {
            s.mousewheel.lastEventBeforeSnap = e, t.splice(0), s.slideToClosest(s.params.speed, !0, void 0, .5);
          }, 500));
        }
        // Emit event
                // Return page scroll on edge positions
        if (o || s.emit("scroll", t), 
        // Stop autoplay
        s.params.autoplay && s.params.autoplayDisableOnInteraction && s.autoplay.stop(), 
        a === s.minTranslate() || a === s.maxTranslate()) return !0;
      }
    } else {
      // Register the new event in a variable which stores the relevant data
      const t = {
        time: n.now(),
        delta: Math.abs(r),
        direction: Math.sign(r),
        raw: e
      }, i = s.mousewheel.recentWheelEvents;
      // Keep the most recent events
            i.length >= 2 && i.shift();
      const a = i.length ? i[i.length - 1] : void 0;
      // If it's time to release the scroll:
      //   Return now so you don't hit the preventDefault.
      if (i.push(t), 
      // If there is at least one previous recorded event:
      //   If direction has changed or
      //   if the scroll is quicker than the previous one:
      //     Animate the slider.
      // Else (this is the first time the wheel is moved):
      //     Animate the slider.
      a ? (t.direction !== a.direction || t.delta > a.delta || t.time > a.time + 150) && s.mousewheel.animateSlider(t) : s.mousewheel.animateSlider(t), 
      s.mousewheel.releaseScroll(t)) return !0;
    }
    return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1;
  },
  animateSlider(e) {
    const t = this;
    // If the movement is NOT big enough and
    // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
    //   Don't go any further (avoid insignificant scroll movement).
        return e.delta >= 6 && n.now() - t.mousewheel.lastScrollTime < 60 || (
    // If user is scrolling towards the end:
    //   If the slider hasn't hit the latest slide or
    //   if the slider is a loop and
    //   if the slider isn't moving right now:
    //     Go to next slide and
    //     emit a scroll event.
    // Else (the user is scrolling towards the beginning) and
    // if the slider hasn't hit the first slide or
    // if the slider is a loop and
    // if the slider isn't moving right now:
    //   Go to prev slide and
    //   emit a scroll event.
    e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), t.emit("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), 
    t.emit("scroll", e.raw)), 
    // If you got here is because an animation has been triggered so store the current time
    t.mousewheel.lastScrollTime = (new s.Date).getTime(), !1);
  },
  releaseScroll(e) {
    const t = this, s = t.params.mousewheel;
    if (e.direction < 0) {
      if (t.isEnd && !t.params.loop && s.releaseOnEdges) 
      // Return true to animate scroll on edges
      return !0;
    } else if (t.isBeginning && !t.params.loop && s.releaseOnEdges) 
    // Return true to animate scroll on edges
    return !0;
    return !1;
  },
  enable() {
    const e = this, t = L.event();
    if (e.params.cssMode) return e.wrapperEl.removeEventListener(t, e.mousewheel.handle), 
    !0;
    if (!t) return !1;
    if (e.mousewheel.enabled) return !1;
    let s = e.$el;
    return "container" !== e.params.mousewheel.eventsTarged && (s = $(e.params.mousewheel.eventsTarged)), 
    s.on("mouseenter", e.mousewheel.handleMouseEnter), s.on("mouseleave", e.mousewheel.handleMouseLeave), 
    s.on(t, e.mousewheel.handle), e.mousewheel.enabled = !0, !0;
  },
  disable() {
    const e = this, t = L.event();
    if (e.params.cssMode) return e.wrapperEl.addEventListener(t, e.mousewheel.handle), 
    !0;
    if (!t) return !1;
    if (!e.mousewheel.enabled) return !1;
    let s = e.$el;
    return "container" !== e.params.mousewheel.eventsTarged && (s = $(e.params.mousewheel.eventsTarged)), 
    s.off(t, e.mousewheel.handle), e.mousewheel.enabled = !1, !0;
  }
}, D = {
  update() {
    // Render || Update Pagination bullets/items
    const e = this, t = e.rtl, s = e.params.pagination;
    if (!s.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length) return;
    const i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length, a = e.pagination.$el;
    // Current/Total
    let n;
    const r = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
    // Types
    if (e.params.loop ? (n = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup), 
    n > i - 1 - 2 * e.loopedSlides && (n -= i - 2 * e.loopedSlides), n > r - 1 && (n -= r), 
    n < 0 && "bullets" !== e.params.paginationType && (n = r + n)) : n = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, 
    "bullets" === s.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
      const i = e.pagination.bullets;
      let r, o, l;
      if (s.dynamicBullets && (e.pagination.bulletSize = i.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), 
      a.css(e.isHorizontal() ? "width" : "height", `${e.pagination.bulletSize * (s.dynamicMainBullets + 4)}px`), 
      s.dynamicMainBullets > 1 && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += n - e.previousIndex, 
      e.pagination.dynamicBulletIndex > s.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = s.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), 
      r = n - e.pagination.dynamicBulletIndex, o = r + (Math.min(i.length, s.dynamicMainBullets) - 1), 
      l = (o + r) / 2), i.removeClass(`${s.bulletActiveClass} ${s.bulletActiveClass}-next ${s.bulletActiveClass}-next-next ${s.bulletActiveClass}-prev ${s.bulletActiveClass}-prev-prev ${s.bulletActiveClass}-main`), 
      a.length > 1) i.each((e, t) => {
        const i = $(t), a = i.index();
        a === n && i.addClass(s.bulletActiveClass), s.dynamicBullets && (a >= r && a <= o && i.addClass(`${s.bulletActiveClass}-main`), 
        a === r && i.prev().addClass(`${s.bulletActiveClass}-prev`).prev().addClass(`${s.bulletActiveClass}-prev-prev`), 
        a === o && i.next().addClass(`${s.bulletActiveClass}-next`).next().addClass(`${s.bulletActiveClass}-next-next`));
      }); else {
        const t = i.eq(n), a = t.index();
        if (t.addClass(s.bulletActiveClass), s.dynamicBullets) {
          const t = i.eq(r), n = i.eq(o);
          for (let e = r; e <= o; e += 1) i.eq(e).addClass(`${s.bulletActiveClass}-main`);
          if (e.params.loop) if (a >= i.length - s.dynamicMainBullets) {
            for (let e = s.dynamicMainBullets; e >= 0; e -= 1) i.eq(i.length - e).addClass(`${s.bulletActiveClass}-main`);
            i.eq(i.length - s.dynamicMainBullets - 1).addClass(`${s.bulletActiveClass}-prev`);
          } else t.prev().addClass(`${s.bulletActiveClass}-prev`).prev().addClass(`${s.bulletActiveClass}-prev-prev`), 
          n.next().addClass(`${s.bulletActiveClass}-next`).next().addClass(`${s.bulletActiveClass}-next-next`); else t.prev().addClass(`${s.bulletActiveClass}-prev`).prev().addClass(`${s.bulletActiveClass}-prev-prev`), 
          n.next().addClass(`${s.bulletActiveClass}-next`).next().addClass(`${s.bulletActiveClass}-next-next`);
        }
      }
      if (s.dynamicBullets) {
        const a = Math.min(i.length, s.dynamicMainBullets + 4), n = (e.pagination.bulletSize * a - e.pagination.bulletSize) / 2 - l * e.pagination.bulletSize, r = t ? "right" : "left";
        i.css(e.isHorizontal() ? r : "top", `${n}px`);
      }
    }
    if ("fraction" === s.type && (a.find(`.${s.currentClass}`).text(s.formatFractionCurrent(n + 1)), 
    a.find(`.${s.totalClass}`).text(s.formatFractionTotal(r))), "progressbar" === s.type) {
      let t;
      t = s.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
      const i = (n + 1) / r;
      let o = 1, l = 1;
      "horizontal" === t ? o = i : l = i, a.find(`.${s.progressbarFillClass}`).transform(`translate3d(0,0,0) scaleX(${o}) scaleY(${l})`).transition(e.params.speed);
    }
    "custom" === s.type && s.renderCustom ? (a.html(s.renderCustom(e, n + 1, r)), e.emit("paginationRender", e, a[0])) : e.emit("paginationUpdate", e, a[0]), 
    a[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](s.lockClass);
  },
  render() {
    // Render Container
    const e = this, t = e.params.pagination;
    if (!t.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length) return;
    const s = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length, i = e.pagination.$el;
    let a = "";
    if ("bullets" === t.type) {
      const n = e.params.loop ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
      for (let s = 0; s < n; s += 1) t.renderBullet ? a += t.renderBullet.call(e, s, t.bulletClass) : a += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`;
      i.html(a), e.pagination.bullets = i.find(`.${t.bulletClass}`);
    }
    "fraction" === t.type && (a = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : `<span class="${t.currentClass}"></span>` + " / " + `<span class="${t.totalClass}"></span>`, 
    i.html(a)), "progressbar" === t.type && (a = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : `<span class="${t.progressbarFillClass}"></span>`, 
    i.html(a)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0]);
  },
  init() {
    const e = this, t = e.params.pagination;
    if (!t.el) return;
    let s = $(t.el);
    0 !== s.length && (e.params.uniqueNavElements && "string" == typeof t.el && s.length > 1 && 1 === e.$el.find(t.el).length && (s = e.$el.find(t.el)), 
    "bullets" === t.type && t.clickable && s.addClass(t.clickableClass), s.addClass(t.modifierClass + t.type), 
    "bullets" === t.type && t.dynamicBullets && (s.addClass(`${t.modifierClass}${t.type}-dynamic`), 
    e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), 
    "progressbar" === t.type && t.progressbarOpposite && s.addClass(t.progressbarOppositeClass), 
    t.clickable && s.on("click", `.${t.bulletClass}`, (function(t) {
      t.preventDefault();
      let s = $(this).index() * e.params.slidesPerGroup;
      e.params.loop && (s += e.loopedSlides), e.slideTo(s);
    })), n.extend(e.pagination, {
      $el: s,
      el: s[0]
    }));
  },
  destroy() {
    const e = this.params.pagination;
    if (!e.el || !this.pagination.el || !this.pagination.$el || 0 === this.pagination.$el.length) return;
    const t = this.pagination.$el;
    t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), 
    e.clickable && t.off("click", `.${e.bulletClass}`);
  }
};

var O = {
  name: "pagination",
  params: {
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: "bullets",
      // 'bullets' or 'progressbar' or 'fraction' or 'custom'
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: e => e,
      formatFractionTotal: e => e,
      bulletClass: "swiper-pagination-bullet",
      bulletActiveClass: "swiper-pagination-bullet-active",
      modifierClass: "swiper-pagination-",
      // NEW
      currentClass: "swiper-pagination-current",
      totalClass: "swiper-pagination-total",
      hiddenClass: "swiper-pagination-hidden",
      progressbarFillClass: "swiper-pagination-progressbar-fill",
      progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
      clickableClass: "swiper-pagination-clickable",
      // NEW
      lockClass: "swiper-pagination-lock"
    }
  },
  create() {
    n.extend(this, {
      pagination: {
        init: D.init.bind(this),
        render: D.render.bind(this),
        update: D.update.bind(this),
        destroy: D.destroy.bind(this),
        dynamicBulletIndex: 0
      }
    });
  },
  on: {
    init() {
      this.pagination.init(), this.pagination.render(), this.pagination.update();
    },
    activeIndexChange() {
      const e = this;
      (e.params.loop || void 0 === e.snapIndex) && e.pagination.update();
    },
    snapIndexChange() {
      const e = this;
      e.params.loop || e.pagination.update();
    },
    slidesLengthChange() {
      const e = this;
      e.params.loop && (e.pagination.render(), e.pagination.update());
    },
    snapGridLengthChange() {
      const e = this;
      e.params.loop || (e.pagination.render(), e.pagination.update());
    },
    destroy() {
      this.pagination.destroy();
    },
    click(e) {
      const t = this;
      if (t.params.pagination.el && t.params.pagination.hideOnClick && t.pagination.$el.length > 0 && !$(e.target).hasClass(t.params.pagination.bulletClass)) {
        !0 === t.pagination.$el.hasClass(t.params.pagination.hiddenClass) ? t.emit("paginationShow", t) : t.emit("paginationHide", t), 
        t.pagination.$el.toggleClass(t.params.pagination.hiddenClass);
      }
    }
  }
};

const I = {
  setTranslate() {
    const e = this;
    if (!e.params.scrollbar.el || !e.scrollbar.el) return;
    const {scrollbar: t, rtlTranslate: s, progress: i} = e, {dragSize: a, trackSize: n, $dragEl: r, $el: o} = t, l = e.params.scrollbar;
    let d = a, c = (n - a) * i;
    s ? (c = -c, c > 0 ? (d = a - c, c = 0) : -c + a > n && (d = n + c)) : c < 0 ? (d = a + c, 
    c = 0) : c + a > n && (d = n - c), e.isHorizontal() ? (r.transform(`translate3d(${c}px, 0, 0)`), 
    r[0].style.width = `${d}px`) : (r.transform(`translate3d(0px, ${c}px, 0)`), r[0].style.height = `${d}px`), 
    l.hide && (clearTimeout(e.scrollbar.timeout), o[0].style.opacity = 1, e.scrollbar.timeout = setTimeout(() => {
      o[0].style.opacity = 0, o.transition(400);
    }, 1e3));
  },
  setTransition(e) {
    this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e);
  },
  updateSize() {
    const e = this;
    if (!e.params.scrollbar.el || !e.scrollbar.el) return;
    const {scrollbar: t} = e, {$dragEl: s, $el: i} = t;
    s[0].style.width = "", s[0].style.height = "";
    const a = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight, r = e.size / e.virtualSize, o = r * (a / e.size);
    let l;
    l = "auto" === e.params.scrollbar.dragSize ? a * r : parseInt(e.params.scrollbar.dragSize, 10), 
    e.isHorizontal() ? s[0].style.width = `${l}px` : s[0].style.height = `${l}px`, i[0].style.display = r >= 1 ? "none" : "", 
    e.params.scrollbar.hide && (i[0].style.opacity = 0), n.extend(t, {
      trackSize: a,
      divider: r,
      moveDivider: o,
      dragSize: l
    }), t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass);
  },
  getPointerPosition(e) {
    return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY;
  },
  setDragPosition(e) {
    const {scrollbar: t, rtlTranslate: s} = this, {$el: i, dragSize: a, trackSize: n, dragStartPos: r} = t;
    let o;
    o = (t.getPointerPosition(e) - i.offset()[this.isHorizontal() ? "left" : "top"] - (null !== r ? r : a / 2)) / (n - a), 
    o = Math.max(Math.min(o, 1), 0), s && (o = 1 - o);
    const l = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * o;
    this.updateProgress(l), this.setTranslate(l), this.updateActiveIndex(), this.updateSlidesClasses();
  },
  onDragStart(e) {
    const t = this, s = t.params.scrollbar, {scrollbar: i, $wrapperEl: a} = t, {$el: n, $dragEl: r} = i;
    t.scrollbar.isTouched = !0, t.scrollbar.dragStartPos = e.target === r[0] || e.target === r ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, 
    e.preventDefault(), e.stopPropagation(), a.transition(100), r.transition(100), i.setDragPosition(e), 
    clearTimeout(t.scrollbar.dragTimeout), n.transition(0), s.hide && n.css("opacity", 1), 
    t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"), t.emit("scrollbarDragStart", e);
  },
  onDragMove(e) {
    const {scrollbar: t, $wrapperEl: s} = this, {$el: i, $dragEl: a} = t;
    this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, 
    t.setDragPosition(e), s.transition(0), i.transition(0), a.transition(0), this.emit("scrollbarDragMove", e));
  },
  onDragEnd(e) {
    const t = this, s = t.params.scrollbar, {scrollbar: i, $wrapperEl: a} = t, {$el: r} = i;
    t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, t.params.cssMode && (t.$wrapperEl.css("scroll-snap-type", ""), 
    a.transition("")), s.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = n.nextTick(() => {
      r.css("opacity", 0), r.transition(400);
    }, 1e3)), t.emit("scrollbarDragEnd", e), s.snapOnRelease && t.slideToClosest());
  },
  enableDraggable() {
    const t = this;
    if (!t.params.scrollbar.el) return;
    const {scrollbar: s, touchEventsTouch: i, touchEventsDesktop: a, params: n} = t, o = s.$el[0], l = !(!r.passiveListener || !n.passiveListeners) && {
      passive: !1,
      capture: !1
    }, d = !(!r.passiveListener || !n.passiveListeners) && {
      passive: !0,
      capture: !1
    };
    r.touch ? (o.addEventListener(i.start, t.scrollbar.onDragStart, l), o.addEventListener(i.move, t.scrollbar.onDragMove, l), 
    o.addEventListener(i.end, t.scrollbar.onDragEnd, d)) : (o.addEventListener(a.start, t.scrollbar.onDragStart, l), 
    e.addEventListener(a.move, t.scrollbar.onDragMove, l), e.addEventListener(a.end, t.scrollbar.onDragEnd, d));
  },
  disableDraggable() {
    const t = this;
    if (!t.params.scrollbar.el) return;
    const {scrollbar: s, touchEventsTouch: i, touchEventsDesktop: a, params: n} = t, o = s.$el[0], l = !(!r.passiveListener || !n.passiveListeners) && {
      passive: !1,
      capture: !1
    }, d = !(!r.passiveListener || !n.passiveListeners) && {
      passive: !0,
      capture: !1
    };
    r.touch ? (o.removeEventListener(i.start, t.scrollbar.onDragStart, l), o.removeEventListener(i.move, t.scrollbar.onDragMove, l), 
    o.removeEventListener(i.end, t.scrollbar.onDragEnd, d)) : (o.removeEventListener(a.start, t.scrollbar.onDragStart, l), 
    e.removeEventListener(a.move, t.scrollbar.onDragMove, l), e.removeEventListener(a.end, t.scrollbar.onDragEnd, d));
  },
  init() {
    const e = this;
    if (!e.params.scrollbar.el) return;
    const {scrollbar: t, $el: s} = e, i = e.params.scrollbar;
    let a = $(i.el);
    e.params.uniqueNavElements && "string" == typeof i.el && a.length > 1 && 1 === s.find(i.el).length && (a = s.find(i.el));
    let r = a.find(`.${e.params.scrollbar.dragClass}`);
    0 === r.length && (r = $(`<div class="${e.params.scrollbar.dragClass}"></div>`), 
    a.append(r)), n.extend(t, {
      $el: a,
      el: a[0],
      $dragEl: r,
      dragEl: r[0]
    }), i.draggable && t.enableDraggable();
  },
  destroy() {
    this.scrollbar.disableDraggable();
  }
};

var B = {
  name: "scrollbar",
  params: {
    scrollbar: {
      el: null,
      dragSize: "auto",
      hide: !1,
      draggable: !1,
      snapOnRelease: !0,
      lockClass: "swiper-scrollbar-lock",
      dragClass: "swiper-scrollbar-drag"
    }
  },
  create() {
    n.extend(this, {
      scrollbar: {
        init: I.init.bind(this),
        destroy: I.destroy.bind(this),
        updateSize: I.updateSize.bind(this),
        setTranslate: I.setTranslate.bind(this),
        setTransition: I.setTransition.bind(this),
        enableDraggable: I.enableDraggable.bind(this),
        disableDraggable: I.disableDraggable.bind(this),
        setDragPosition: I.setDragPosition.bind(this),
        getPointerPosition: I.getPointerPosition.bind(this),
        onDragStart: I.onDragStart.bind(this),
        onDragMove: I.onDragMove.bind(this),
        onDragEnd: I.onDragEnd.bind(this),
        isTouched: !1,
        timeout: null,
        dragTimeout: null
      }
    });
  },
  on: {
    init() {
      this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate();
    },
    update() {
      this.scrollbar.updateSize();
    },
    resize() {
      this.scrollbar.updateSize();
    },
    observerUpdate() {
      this.scrollbar.updateSize();
    },
    setTranslate() {
      this.scrollbar.setTranslate();
    },
    setTransition(e) {
      this.scrollbar.setTransition(e);
    },
    destroy() {
      this.scrollbar.destroy();
    }
  }
};

const G = {
  // Calc Scale From Multi-touches
  getDistanceBetweenTouches(e) {
    if (e.targetTouches.length < 2) return 1;
    const t = e.targetTouches[0].pageX, s = e.targetTouches[0].pageY, i = e.targetTouches[1].pageX, a = e.targetTouches[1].pageY;
    return Math.sqrt((i - t) ** 2 + (a - s) ** 2);
  },
  // Events
  onGestureStart(e) {
    const t = this, s = t.params.zoom, i = t.zoom, {gesture: a} = i;
    if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !r.gestures) {
      if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
      i.fakeGestureTouched = !0, a.scaleStart = G.getDistanceBetweenTouches(e);
    }
    a.$slideEl && a.$slideEl.length || (a.$slideEl = $(e.target).closest(`.${t.params.slideClass}`), 
    0 === a.$slideEl.length && (a.$slideEl = t.slides.eq(t.activeIndex)), a.$imageEl = a.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), 
    a.$imageWrapEl = a.$imageEl.parent(`.${s.containerClass}`), a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || s.maxRatio, 
    0 !== a.$imageWrapEl.length) ? (a.$imageEl && a.$imageEl.transition(0), t.zoom.isScaling = !0) : a.$imageEl = void 0;
  },
  onGestureChange(e) {
    const t = this.params.zoom, s = this.zoom, {gesture: i} = s;
    if (!r.gestures) {
      if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
      s.fakeGestureMoved = !0, i.scaleMove = G.getDistanceBetweenTouches(e);
    }
    i.$imageEl && 0 !== i.$imageEl.length && (s.scale = r.gestures ? e.scale * s.currentScale : i.scaleMove / i.scaleStart * s.currentScale, 
    s.scale > i.maxRatio && (s.scale = i.maxRatio - 1 + (s.scale - i.maxRatio + 1) ** .5), 
    s.scale < t.minRatio && (s.scale = t.minRatio + 1 - (t.minRatio - s.scale + 1) ** .5), 
    i.$imageEl.transform(`translate3d(0,0,0) scale(${s.scale})`));
  },
  onGestureEnd(e) {
    const t = this.params.zoom, s = this.zoom, {gesture: i} = s;
    if (!r.gestures) {
      if (!s.fakeGestureTouched || !s.fakeGestureMoved) return;
      if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !g.android) return;
      s.fakeGestureTouched = !1, s.fakeGestureMoved = !1;
    }
    i.$imageEl && 0 !== i.$imageEl.length && (s.scale = Math.max(Math.min(s.scale, i.maxRatio), t.minRatio), 
    i.$imageEl.transition(this.params.speed).transform(`translate3d(0,0,0) scale(${s.scale})`), 
    s.currentScale = s.scale, s.isScaling = !1, 1 === s.scale && (i.$slideEl = void 0));
  },
  onTouchStart(e) {
    const t = this.zoom, {gesture: s, image: i} = t;
    s.$imageEl && 0 !== s.$imageEl.length && (i.isTouched || (g.android && e.cancelable && e.preventDefault(), 
    i.isTouched = !0, i.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, 
    i.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY));
  },
  onTouchMove(e) {
    const t = this, s = t.zoom, {gesture: i, image: a, velocity: r} = s;
    if (!i.$imageEl || 0 === i.$imageEl.length) return;
    if (t.allowClick = !1, !a.isTouched || !i.$slideEl) return;
    a.isMoved || (a.width = i.$imageEl[0].offsetWidth, a.height = i.$imageEl[0].offsetHeight, 
    a.startX = n.getTranslate(i.$imageWrapEl[0], "x") || 0, a.startY = n.getTranslate(i.$imageWrapEl[0], "y") || 0, 
    i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, 
    i.$imageWrapEl.transition(0), t.rtl && (a.startX = -a.startX, a.startY = -a.startY));
    // Define if we need image drag
        const o = a.width * s.scale, l = a.height * s.scale;
    if (!(o < i.slideWidth && l < i.slideHeight)) {
      if (a.minX = Math.min(i.slideWidth / 2 - o / 2, 0), a.maxX = -a.minX, a.minY = Math.min(i.slideHeight / 2 - l / 2, 0), 
      a.maxY = -a.minY, a.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, 
      a.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, 
      !a.isMoved && !s.isScaling) {
        if (t.isHorizontal() && (Math.floor(a.minX) === Math.floor(a.startX) && a.touchesCurrent.x < a.touchesStart.x || Math.floor(a.maxX) === Math.floor(a.startX) && a.touchesCurrent.x > a.touchesStart.x)) return void (a.isTouched = !1);
        if (!t.isHorizontal() && (Math.floor(a.minY) === Math.floor(a.startY) && a.touchesCurrent.y < a.touchesStart.y || Math.floor(a.maxY) === Math.floor(a.startY) && a.touchesCurrent.y > a.touchesStart.y)) return void (a.isTouched = !1);
      }
      e.cancelable && e.preventDefault(), e.stopPropagation(), a.isMoved = !0, a.currentX = a.touchesCurrent.x - a.touchesStart.x + a.startX, 
      a.currentY = a.touchesCurrent.y - a.touchesStart.y + a.startY, a.currentX < a.minX && (a.currentX = a.minX + 1 - (a.minX - a.currentX + 1) ** .8), 
      a.currentX > a.maxX && (a.currentX = a.maxX - 1 + (a.currentX - a.maxX + 1) ** .8), 
      a.currentY < a.minY && (a.currentY = a.minY + 1 - (a.minY - a.currentY + 1) ** .8), 
      a.currentY > a.maxY && (a.currentY = a.maxY - 1 + (a.currentY - a.maxY + 1) ** .8), 
      // Velocity
      r.prevPositionX || (r.prevPositionX = a.touchesCurrent.x), r.prevPositionY || (r.prevPositionY = a.touchesCurrent.y), 
      r.prevTime || (r.prevTime = Date.now()), r.x = (a.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2, 
      r.y = (a.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2, Math.abs(a.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0), 
      Math.abs(a.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0), r.prevPositionX = a.touchesCurrent.x, 
      r.prevPositionY = a.touchesCurrent.y, r.prevTime = Date.now(), i.$imageWrapEl.transform(`translate3d(${a.currentX}px, ${a.currentY}px,0)`);
    }
  },
  onTouchEnd() {
    const e = this.zoom, {gesture: t, image: s, velocity: i} = e;
    if (!t.$imageEl || 0 === t.$imageEl.length) return;
    if (!s.isTouched || !s.isMoved) return s.isTouched = !1, void (s.isMoved = !1);
    s.isTouched = !1, s.isMoved = !1;
    let a = 300, n = 300;
    const r = i.x * a, o = s.currentX + r, l = i.y * n, d = s.currentY + l;
    // Fix duration
    0 !== i.x && (a = Math.abs((o - s.currentX) / i.x)), 0 !== i.y && (n = Math.abs((d - s.currentY) / i.y));
    const c = Math.max(a, n);
    s.currentX = o, s.currentY = d;
    // Define if we need image drag
    const p = s.width * e.scale, u = s.height * e.scale;
    s.minX = Math.min(t.slideWidth / 2 - p / 2, 0), s.maxX = -s.minX, s.minY = Math.min(t.slideHeight / 2 - u / 2, 0), 
    s.maxY = -s.minY, s.currentX = Math.max(Math.min(s.currentX, s.maxX), s.minX), s.currentY = Math.max(Math.min(s.currentY, s.maxY), s.minY), 
    t.$imageWrapEl.transition(c).transform(`translate3d(${s.currentX}px, ${s.currentY}px,0)`);
  },
  onTransitionEnd() {
    const e = this.zoom, {gesture: t} = e;
    t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl && t.$imageEl.transform("translate3d(0,0,0) scale(1)"), 
    t.$imageWrapEl && t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, 
    t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0);
  },
  // Toggle Zoom
  toggle(e) {
    const t = this.zoom;
    t.scale && 1 !== t.scale ? 
    // Zoom Out
    t.out() : 
    // Zoom In
    t.in(e);
  },
  in(e) {
    const t = this, s = t.zoom, i = t.params.zoom, {gesture: a, image: n} = s;
    if (a.$slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? a.$slideEl = t.$wrapperEl.children(`.${t.params.slideActiveClass}`) : a.$slideEl = t.slides.eq(t.activeIndex), 
    a.$imageEl = a.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), 
    a.$imageWrapEl = a.$imageEl.parent(`.${i.containerClass}`)), !a.$imageEl || 0 === a.$imageEl.length) return;
    let r, o, l, d, c, p, u, h, m, g, f, v, b, w, T, E, y, S;
    a.$slideEl.addClass(`${i.zoomedSlideClass}`), void 0 === n.touchesStart.x && e ? (r = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, 
    o = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (r = n.touchesStart.x, 
    o = n.touchesStart.y), s.scale = a.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, 
    s.currentScale = a.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, e ? (y = a.$slideEl[0].offsetWidth, 
    S = a.$slideEl[0].offsetHeight, l = a.$slideEl.offset().left, d = a.$slideEl.offset().top, 
    c = l + y / 2 - r, p = d + S / 2 - o, m = a.$imageEl[0].offsetWidth, g = a.$imageEl[0].offsetHeight, 
    f = m * s.scale, v = g * s.scale, b = Math.min(y / 2 - f / 2, 0), w = Math.min(S / 2 - v / 2, 0), 
    T = -b, E = -w, u = c * s.scale, h = p * s.scale, u < b && (u = b), u > T && (u = T), 
    h < w && (h = w), h > E && (h = E)) : (u = 0, h = 0), a.$imageWrapEl.transition(300).transform(`translate3d(${u}px, ${h}px,0)`), 
    a.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${s.scale})`);
  },
  out() {
    const e = this, t = e.zoom, s = e.params.zoom, {gesture: i} = t;
    i.$slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? i.$slideEl = e.$wrapperEl.children(`.${e.params.slideActiveClass}`) : i.$slideEl = e.slides.eq(e.activeIndex), 
    i.$imageEl = i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), 
    i.$imageWrapEl = i.$imageEl.parent(`.${s.containerClass}`)), i.$imageEl && 0 !== i.$imageEl.length && (t.scale = 1, 
    t.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), 
    i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass(`${s.zoomedSlideClass}`), 
    i.$slideEl = void 0);
  },
  // Attach/Detach Events
  enable() {
    const e = this, t = e.zoom;
    if (t.enabled) return;
    t.enabled = !0;
    const s = !("touchstart" !== e.touchEvents.start || !r.passiveListener || !e.params.passiveListeners) && {
      passive: !0,
      capture: !1
    }, i = !r.passiveListener || {
      passive: !1,
      capture: !0
    }, a = `.${e.params.slideClass}`;
    // Scale image
    r.gestures ? (e.$wrapperEl.on("gesturestart", a, t.onGestureStart, s), e.$wrapperEl.on("gesturechange", a, t.onGestureChange, s), 
    e.$wrapperEl.on("gestureend", a, t.onGestureEnd, s)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, a, t.onGestureStart, s), 
    e.$wrapperEl.on(e.touchEvents.move, a, t.onGestureChange, i), e.$wrapperEl.on(e.touchEvents.end, a, t.onGestureEnd, s), 
    e.touchEvents.cancel && e.$wrapperEl.on(e.touchEvents.cancel, a, t.onGestureEnd, s)), 
    // Move image
    e.$wrapperEl.on(e.touchEvents.move, `.${e.params.zoom.containerClass}`, t.onTouchMove, i);
  },
  disable() {
    const e = this, t = e.zoom;
    if (!t.enabled) return;
    e.zoom.enabled = !1;
    const s = !("touchstart" !== e.touchEvents.start || !r.passiveListener || !e.params.passiveListeners) && {
      passive: !0,
      capture: !1
    }, i = !r.passiveListener || {
      passive: !1,
      capture: !0
    }, a = `.${e.params.slideClass}`;
    // Scale image
    r.gestures ? (e.$wrapperEl.off("gesturestart", a, t.onGestureStart, s), e.$wrapperEl.off("gesturechange", a, t.onGestureChange, s), 
    e.$wrapperEl.off("gestureend", a, t.onGestureEnd, s)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, a, t.onGestureStart, s), 
    e.$wrapperEl.off(e.touchEvents.move, a, t.onGestureChange, i), e.$wrapperEl.off(e.touchEvents.end, a, t.onGestureEnd, s), 
    e.touchEvents.cancel && e.$wrapperEl.off(e.touchEvents.cancel, a, t.onGestureEnd, s)), 
    // Move image
    e.$wrapperEl.off(e.touchEvents.move, `.${e.params.zoom.containerClass}`, t.onTouchMove, i);
  }
};

var A = {
  name: "zoom",
  params: {
    zoom: {
      enabled: !1,
      maxRatio: 3,
      minRatio: 1,
      toggle: !0,
      containerClass: "swiper-zoom-container",
      zoomedSlideClass: "swiper-slide-zoomed"
    }
  },
  create() {
    const e = this, t = {
      enabled: !1,
      scale: 1,
      currentScale: 1,
      isScaling: !1,
      gesture: {
        $slideEl: void 0,
        slideWidth: void 0,
        slideHeight: void 0,
        $imageEl: void 0,
        $imageWrapEl: void 0,
        maxRatio: 3
      },
      image: {
        isTouched: void 0,
        isMoved: void 0,
        currentX: void 0,
        currentY: void 0,
        minX: void 0,
        minY: void 0,
        maxX: void 0,
        maxY: void 0,
        width: void 0,
        height: void 0,
        startX: void 0,
        startY: void 0,
        touchesStart: {},
        touchesCurrent: {}
      },
      velocity: {
        x: void 0,
        y: void 0,
        prevPositionX: void 0,
        prevPositionY: void 0,
        prevTime: void 0
      }
    };
    "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(s => {
      t[s] = G[s].bind(e);
    }), n.extend(e, {
      zoom: t
    });
    let s = 1;
    Object.defineProperty(e.zoom, "scale", {
      get: () => s,
      set(t) {
        if (s !== t) {
          const s = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0, i = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
          e.emit("zoomChange", t, s, i);
        }
        s = t;
      }
    });
  },
  on: {
    init() {
      const e = this;
      e.params.zoom.enabled && e.zoom.enable();
    },
    destroy() {
      this.zoom.disable();
    },
    touchStart(e) {
      this.zoom.enabled && this.zoom.onTouchStart(e);
    },
    touchEnd(e) {
      this.zoom.enabled && this.zoom.onTouchEnd(e);
    },
    doubleTap(e) {
      const t = this;
      t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && t.zoom.toggle(e);
    },
    transitionEnd() {
      const e = this;
      e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd();
    },
    slideChange() {
      const e = this;
      e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && e.zoom.onTransitionEnd();
    }
  }
};

/* eslint no-underscore-dangle: "off" */ const X = {
  run() {
    const e = this, t = e.slides.eq(e.activeIndex);
    let s = e.params.autoplay.delay;
    t.attr("data-swiper-autoplay") && (s = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), 
    clearTimeout(e.autoplay.timeout), e.autoplay.timeout = n.nextTick(() => {
      e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), 
      e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), 
      e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), 
      e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), 
      e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")), 
      e.params.cssMode && e.autoplay.running && e.autoplay.run();
    }, s);
  },
  start() {
    return void 0 === this.autoplay.timeout && (!this.autoplay.running && (this.autoplay.running = !0, 
    this.emit("autoplayStart"), this.autoplay.run(), !0));
  },
  stop() {
    const e = this;
    return !!e.autoplay.running && (void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), 
    e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0));
  },
  pause(e) {
    const t = this;
    t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), 
    t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), 
    t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1, 
    t.autoplay.run())));
  }
};

var Y = {
  name: "autoplay",
  params: {
    autoplay: {
      enabled: !1,
      delay: 3e3,
      waitForTransition: !0,
      disableOnInteraction: !0,
      stopOnLastSlide: !1,
      reverseDirection: !1
    }
  },
  create() {
    const e = this;
    n.extend(e, {
      autoplay: {
        running: !1,
        paused: !1,
        run: X.run.bind(e),
        start: X.start.bind(e),
        stop: X.stop.bind(e),
        pause: X.pause.bind(e),
        onVisibilityChange() {
          "hidden" === document.visibilityState && e.autoplay.running && e.autoplay.pause(), 
          "visible" === document.visibilityState && e.autoplay.paused && (e.autoplay.run(), 
          e.autoplay.paused = !1);
        },
        onTransitionEnd(t) {
          e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd), 
          e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd), 
          e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run() : e.autoplay.stop());
        }
      }
    });
  },
  on: {
    init() {
      const e = this;
      e.params.autoplay.enabled && (e.autoplay.start(), document.addEventListener("visibilitychange", e.autoplay.onVisibilityChange));
    },
    beforeTransitionStart(e, t) {
      const s = this;
      s.autoplay.running && (t || !s.params.autoplay.disableOnInteraction ? s.autoplay.pause(e) : s.autoplay.stop());
    },
    sliderFirstMove() {
      const e = this;
      e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause());
    },
    touchEnd() {
      const e = this;
      e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && e.autoplay.run();
    },
    destroy() {
      const e = this;
      e.autoplay.running && e.autoplay.stop(), document.removeEventListener("visibilitychange", e.autoplay.onVisibilityChange);
    }
  }
};

// Swiper Class
const H = [ E, y, x, C, P ];

void 0 === T.use && (T.use = T.Class.use, T.installModule = T.Class.installModule), 
T.use(H), T.use([ O, B, Y, z, A ]);

export { T as Swiper }