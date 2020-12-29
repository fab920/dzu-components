import { a as e, b as t, p as n } from "./p-9d46771f.js";

const o = new WeakMap, relocateInput = (e, t, n, r = 0) => {
  o.has(e) !== n && (n ? addClone(e, t, r) : removeClone(e, t));
}, isFocused = e => e === e.getRootNode().activeElement, addClone = (e, t, n) => {
  // this allows for the actual input to receive the focus from
  // the user's touch event, but before it receives focus, it
  // moves the actual input to a location that will not screw
  // up the app's layout, and does not allow the native browser
  // to attempt to scroll the input into place (messing up headers/footers)
  // the cloned input fills the area of where native input should be
  // while the native input fakes out the browser by relocating itself
  // before it receives the actual focus event
  // We hide the focused input (with the visible caret) invisible by making it scale(0),
  const r = t.parentNode, i = t.cloneNode(!1);
  // DOM WRITES
    i.classList.add("cloned-input"), i.tabIndex = -1, r.appendChild(i), o.set(e, i);
  const a = "rtl" === e.ownerDocument.dir ? 9999 : -9999;
  e.style.pointerEvents = "none", t.style.transform = `translate3d(${a}px,${n}px,0) scale(0)`;
}, removeClone = (e, t) => {
  const n = o.get(e);
  n && (o.delete(e), n.remove()), e.style.pointerEvents = "", t.style.transform = "";
}, r = "input, textarea, [no-blur]", calcScrollData = (e, t, n, o) => {
  // compute input's Y values relative to the body
  const r = e.top, i = e.bottom, a = t.top, s = a + 15, l = .75 * Math.min(t.bottom, o - n) - i, d = s - r, c = Math.round(l < 0 ? -l : d > 0 ? -d : 0), u = Math.min(c, r - a), m = Math.abs(u) / .3;
  return {
    scrollAmount: u,
    scrollDuration: Math.min(400, Math.max(150, m)),
    scrollPadding: n,
    inputSafeY: 4 - (r - s)
  };
}, jsSetFocus = async (e, t, n, o, r) => {
  if (!n && !o) return;
  const i = ((e, t, n) => {
    const o = e.closest("ion-item,[ion-item]") || e;
    return calcScrollData(o.getBoundingClientRect(), t.getBoundingClientRect(), n, e.ownerDocument.defaultView.innerHeight);
  })(e, n || o, r);
  if (n && Math.abs(i.scrollAmount) < 4) 
  // the text input is in a safe position that doesn't
  // require it to be scrolled into view, just set focus now
  t.focus(); else 
  /* tslint:disable-next-line */
  if (
  // temporarily move the focus to the focus holder so the browser
  // doesn't freak out while it's trying to get the input in place
  // at this point the native text input still does not have focus
  relocateInput(e, t, !0, i.inputSafeY), t.focus(), "undefined" != typeof window) {
    let o;
    const scrollContent = async () => {
      // clean up listeners and timeouts
      void 0 !== o && clearTimeout(o), window.removeEventListener("ionKeyboardDidShow", doubleKeyboardEventListener), 
      window.removeEventListener("ionKeyboardDidShow", scrollContent), 
      // scroll the input into place
      n && await n.scrollByPoint(0, i.scrollAmount, i.scrollDuration), 
      // the scroll view is in the correct position now
      // give the native text input focus
      relocateInput(e, t, !1, i.inputSafeY), 
      // ensure this is the focused input
      t.focus();
    }, doubleKeyboardEventListener = () => {
      window.removeEventListener("ionKeyboardDidShow", doubleKeyboardEventListener), window.addEventListener("ionKeyboardDidShow", scrollContent);
    };
    if (n) {
      const e = await n.getScrollElement(), r = e.scrollHeight - e.clientHeight;
      /**
       * scrollData will only consider the amount we need
       * to scroll in order to properly bring the input
       * into view. It will not consider the amount
       * we can scroll in the content element.
       * As a result, scrollData may request a greater
       * scroll position than is currently available
       * in the DOM. If this is the case, we need to
       * wait for the webview to resize/the keyboard
       * to show in order for additional scroll
       * bandwidth to become available.
       */      if (i.scrollAmount > r - e.scrollTop) 
      /**
         * On iOS devices, the system will show a "Passwords" bar above the keyboard
         * after the initial keyboard is shown. This prevents the webview from resizing
         * until the "Passwords" bar is shown, so we need to wait for that to happen first.
         */
      return "password" === t.type ? (
      // Add 50px to account for the "Passwords" bar
      i.scrollAmount += 50, window.addEventListener("ionKeyboardDidShow", doubleKeyboardEventListener)) : window.addEventListener("ionKeyboardDidShow", scrollContent)
      /**
         * This should only fire in 2 instances:
         * 1. The app is very slow.
         * 2. The app is running in a browser on an old OS
         * that does not support Ionic Keyboard Events
         */ , void (o = setTimeout(scrollContent, 1e3));
    }
    scrollContent();
  }
}, hasPointerMoved = (e, t, n) => {
  if (t && n) {
    const o = t.x - n.x, r = t.y - n.y;
    return o * o + r * r > e * e;
  }
  return !1;
}, setScrollPadding = (e, t) => {
  if ("INPUT" !== e.tagName) return;
  if (e.parentElement && "ION-INPUT" === e.parentElement.tagName) return;
  if (e.parentElement && e.parentElement.parentElement && "ION-SEARCHBAR" === e.parentElement.parentElement.tagName) return;
  const n = e.closest("ion-content");
  if (null === n) return;
  const o = n.$ionPaddingTimer;
  o && clearTimeout(o), t > 0 ? n.style.setProperty("--keyboard-offset", `${t}px`) : n.$ionPaddingTimer = setTimeout(() => {
    n.style.setProperty("--keyboard-offset", "0px");
  }, 120);
}, startInputShims = o => {
  const i = document, a = o.getNumber("keyboardHeight", 290), s = o.getBoolean("scrollAssist", !0), l = o.getBoolean("hideCaretOnScroll", !0), d = o.getBoolean("inputBlurring", !0), c = o.getBoolean("scrollPadding", !0), u = Array.from(i.querySelectorAll("ion-input, ion-textarea")), m = new WeakMap, p = new WeakMap, registerInput = async o => {
    o.componentOnReady && await o.componentOnReady();
    const r = o.shadowRoot || o, i = r.querySelector("input") || r.querySelector("textarea"), d = o.closest("ion-content"), c = d ? null : o.closest("ion-footer");
    if (i) {
      if (d && l && !m.has(o)) {
        const n = ((n, o, r) => {
          if (!r || !o) return () => {};
          const scrollHideCaret = e => {
            isFocused(o) && relocateInput(n, o, e);
          }, onBlur = () => relocateInput(n, o, !1), hideCaret = () => scrollHideCaret(!0), showCaret = () => scrollHideCaret(!1);
          return e(r, "ionScrollStart", hideCaret), e(r, "ionScrollEnd", showCaret), o.addEventListener("blur", onBlur), 
          () => {
            t(r, "ionScrollStart", hideCaret), t(r, "ionScrollEnd", showCaret), o.addEventListener("ionBlur", onBlur);
          };
        })(o, i, d);
        m.set(o, n);
      }
      if ((d || c) && s && !p.has(o)) {
        const e = ((e, t, o, r, i) => {
          let a;
          const touchStart = e => {
            a = n(e);
          }, touchEnd = s => {
            // input cover touchend/mouseup
            if (!a) return;
            // get where the touchend/mouseup ended
                        const l = n(s);
            // focus this input if the pointer hasn't moved XX pixels
            // and the input doesn't already have focus
                        hasPointerMoved(6, a, l) || isFocused(t) || (s.preventDefault(), s.stopPropagation(), 
            // begin the input focus process
            jsSetFocus(e, t, o, r, i));
          };
          return e.addEventListener("touchstart", touchStart, !0), e.addEventListener("touchend", touchEnd, !0), 
          () => {
            e.removeEventListener("touchstart", touchStart, !0), e.removeEventListener("touchend", touchEnd, !0);
          };
        })(o, i, d, c, a);
        p.set(o, e);
      }
    }
  };
  d && (() => {
    let t = !0, n = !1;
    const o = document, onScroll = () => {
      n = !0;
    }, onFocusin = () => {
      t = !0;
    }, onTouchend = e => {
      // if app did scroll return early
      if (n) return void (n = !1);
      const i = o.activeElement;
      if (!i) return;
      // only blur if the active element is a text-input or a textarea
            if (i.matches(r)) return;
      // if the selected target is the active element, do not blur
            const a = e.target;
      a !== i && (a.matches(r) || a.closest(r) || (t = !1, 
      // TODO: find a better way, why 50ms?
      setTimeout(() => {
        t || i.blur();
      }, 50)));
    };
    e(o, "ionScrollStart", onScroll), o.addEventListener("focusin", onFocusin, !0), 
    o.addEventListener("touchend", onTouchend, !1);
  })(), c && (e => {
    const t = document, onFocusin = t => {
      setScrollPadding(t.target, e);
    }, onFocusout = e => {
      setScrollPadding(e.target, 0);
    };
    t.addEventListener("focusin", onFocusin), t.addEventListener("focusout", onFocusout);
  })(a);
  // Input might be already loaded in the DOM before ion-device-hacks did.
  // At this point we need to look for all of the inputs not registered yet
  // and register them.
  for (const e of u) registerInput(e);
  i.addEventListener("ionInputDidLoad", e => {
    registerInput(e.detail);
  }), i.addEventListener("ionInputDidUnload", e => {
    (e => {
      if (l) {
        const t = m.get(e);
        t && t(), m.delete(e);
      }
      if (s) {
        const t = p.get(e);
        t && t(), p.delete(e);
      }
    })(e.detail);
  });
};

export { startInputShims }