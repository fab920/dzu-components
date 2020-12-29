import { r as e } from "./p-9d46771f.js";

let t;

/**
 * Web Animations requires hyphenated CSS properties
 * to be written in camelCase when animating
 */ const convertCamelCaseToHypen = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), getAnimationPrefix = e => {
  if (void 0 === t) {
    const n = void 0 !== e.style.animationName, i = void 0 !== e.style.webkitAnimationName;
    t = !n && i ? "-webkit-" : "";
  }
  return t;
}, setStyleProperty = (e, t, n) => {
  const i = t.startsWith("animation") ? getAnimationPrefix(e) : "";
  e.style.setProperty(i + t, n);
}, removeStyleProperty = (e, t) => {
  const n = t.startsWith("animation") ? getAnimationPrefix(e) : "";
  e.style.removeProperty(n + t);
}, n = [], addClassToArray = (e = [], t) => {
  if (void 0 !== t) {
    const n = Array.isArray(t) ? t : [ t ];
    return [ ...e, ...n ];
  }
  return e;
}, createAnimation = t => {
  let i, o, a, r, s, l, f, d, c, m, h, u, p, g = [], y = [], E = [], v = !1, $ = {}, A = [], b = [], C = {}, w = 0, k = !1, S = !1, T = !0, D = !1, L = !0;
  const P = t, F = [], N = [], O = [], R = [], W = [], x = [], j = [], I = [], M = [], q = [], z = "function" == typeof AnimationEffect || "function" == typeof window.AnimationEffect, K = "function" == typeof Element && "function" == typeof Element.prototype.animate && z, cleanUp = e => {
    cleanUpElements(), e && cleanUpStyleSheets();
  }, onFinish = (e, t) => ((t && t.oneTimeCallback ? N : F).push({
    c: e,
    o: t
  }), p), clearOnFinish = () => (F.length = 0, N.length = 0, p), cleanUpElements = () => {
    if (K) q.forEach(e => {
      e.cancel();
    }), q.length = 0; else {
      const t = O.slice();
      e(() => {
        t.forEach(e => {
          removeStyleProperty(e, "animation-name"), removeStyleProperty(e, "animation-duration"), 
          removeStyleProperty(e, "animation-timing-function"), removeStyleProperty(e, "animation-iteration-count"), 
          removeStyleProperty(e, "animation-delay"), removeStyleProperty(e, "animation-play-state"), 
          removeStyleProperty(e, "animation-fill-mode"), removeStyleProperty(e, "animation-direction");
        });
      });
    }
  }, cleanUpStyleSheets = () => {
    W.forEach(e => {
      /**
       * When sharing stylesheets, it's possible
       * for another animation to have already
       * cleaned up a particular stylesheet
       */
      e && e.parentNode && e.parentNode.removeChild(e);
    }), W.length = 0;
  }, getFill = () => void 0 !== s ? s : f ? f.getFill() : "both", getDirection = () => void 0 !== c ? c : void 0 !== l ? l : f ? f.getDirection() : "normal", getEasing = () => k ? "linear" : void 0 !== a ? a : f ? f.getEasing() : "linear", getDuration = () => S ? 0 : void 0 !== m ? m : void 0 !== o ? o : f ? f.getDuration() : 0, getIterations = () => void 0 !== r ? r : f ? f.getIterations() : 1, getDelay = () => void 0 !== h ? h : void 0 !== i ? i : f ? f.getDelay() : 0, animationFinish = () => {
    0 !== w && (w--, 0 === w && ((() => {
      clearCSSAnimationsTimeout(), 
      // Runs all after read callbacks
      I.forEach(e => e()), 
      // Runs all after write callbacks
      M.forEach(e => e());
      // Updates styles and classes before animation ends
      const e = T ? 1 : 0, t = A, n = b, i = C;
      O.forEach(e => {
        const o = e.classList;
        t.forEach(e => o.add(e)), n.forEach(e => o.remove(e));
        for (const t in i) i.hasOwnProperty(t) && setStyleProperty(e, t, i[t]);
      }), F.forEach(t => t.c(e, p)), N.forEach(t => t.c(e, p)), N.length = 0, L = !0, 
      T && (D = !0), T = !0;
    })(), f && f.animationFinish()));
  }, initializeCSSAnimation = (i = !0) => {
    cleanUpStyleSheets();
    const o = (e => (e.forEach(e => {
      for (const t in e) if (e.hasOwnProperty(t)) {
        const n = e[t];
        if ("easing" === t) {
          e["animation-timing-function"] = n, delete e[t];
        } else {
          const i = convertCamelCaseToHypen(t);
          i !== t && (e[i] = n, delete e[t]);
        }
      }
    }), e))(g);
    O.forEach(a => {
      if (o.length > 0) {
        const r = ((e = []) => e.map(e => {
          const t = e.offset, n = [];
          for (const i in e) e.hasOwnProperty(i) && "offset" !== i && n.push(`${i}: ${e[i]};`);
          return `${100 * t}% { ${n.join(" ")} }`;
        }).join(" "))(o);
        u = void 0 !== t ? t : (e => {
          let t = n.indexOf(e);
          return t < 0 && (t = n.push(e) - 1), `ion-animation-${t}`;
        })(r);
        const s = ((e, t, n) => {
          const i = (e => {
            const t = e.getRootNode();
            return t.head || t;
          })(n), o = getAnimationPrefix(n), a = i.querySelector("#" + e);
          if (a) return a;
          const r = (n.ownerDocument || document).createElement("style");
          return r.id = e, r.textContent = `@${o}keyframes ${e} { ${t} } @${o}keyframes ${e}-alt { ${t} }`, 
          i.appendChild(r), r;
        })(u, r, a);
        W.push(s), setStyleProperty(a, "animation-duration", `${getDuration()}ms`), setStyleProperty(a, "animation-timing-function", getEasing()), 
        setStyleProperty(a, "animation-delay", `${getDelay()}ms`), setStyleProperty(a, "animation-fill-mode", getFill()), 
        setStyleProperty(a, "animation-direction", getDirection());
        const l = getIterations() === 1 / 0 ? "infinite" : getIterations().toString();
        setStyleProperty(a, "animation-iteration-count", l), setStyleProperty(a, "animation-play-state", "paused"), 
        i && setStyleProperty(a, "animation-name", `${s.id}-alt`), e(() => {
          setStyleProperty(a, "animation-name", s.id || null);
        });
      }
    });
  }, initializeAnimation = (e = !0) => {
    (() => {
      // Runs all before read callbacks
      x.forEach(e => e()), 
      // Runs all before write callbacks
      j.forEach(e => e());
      // Updates styles and classes before animation runs
      const e = y, t = E, n = $;
      O.forEach(i => {
        const o = i.classList;
        e.forEach(e => o.add(e)), t.forEach(e => o.remove(e));
        for (const e in n) n.hasOwnProperty(e) && setStyleProperty(i, e, n[e]);
      });
    })(), g.length > 0 && (K ? (O.forEach(e => {
      const t = e.animate(g, {
        id: P,
        delay: getDelay(),
        duration: getDuration(),
        easing: getEasing(),
        iterations: getIterations(),
        fill: getFill(),
        direction: getDirection()
      });
      t.pause(), q.push(t);
    }), q.length > 0 && (q[0].onfinish = () => {
      animationFinish();
    })) : initializeCSSAnimation(e)), v = !0;
  }, setAnimationStep = e => {
    if (e = Math.min(Math.max(e, 0), .9999), K) q.forEach(t => {
      t.currentTime = t.effect.getComputedTiming().delay + getDuration() * e, t.pause();
    }); else {
      const t = `-${getDuration() * e}ms`;
      O.forEach(e => {
        g.length > 0 && (setStyleProperty(e, "animation-delay", t), setStyleProperty(e, "animation-play-state", "paused"));
      });
    }
  }, updateWebAnimation = e => {
    q.forEach(e => {
      e.effect.updateTiming({
        delay: getDelay(),
        duration: getDuration(),
        easing: getEasing(),
        iterations: getIterations(),
        fill: getFill(),
        direction: getDirection()
      });
    }), void 0 !== e && setAnimationStep(e);
  }, updateCSSAnimation = (t = !0, n) => {
    e(() => {
      O.forEach(i => {
        setStyleProperty(i, "animation-name", u || null), setStyleProperty(i, "animation-duration", `${getDuration()}ms`), 
        setStyleProperty(i, "animation-timing-function", getEasing()), setStyleProperty(i, "animation-delay", void 0 !== n ? `-${n * getDuration()}ms` : `${getDelay()}ms`), 
        setStyleProperty(i, "animation-fill-mode", getFill() || null), setStyleProperty(i, "animation-direction", getDirection() || null);
        const o = getIterations() === 1 / 0 ? "infinite" : getIterations().toString();
        setStyleProperty(i, "animation-iteration-count", o), t && setStyleProperty(i, "animation-name", `${u}-alt`), 
        e(() => {
          setStyleProperty(i, "animation-name", u || null);
        });
      });
    });
  }, update = (e = !1, t = !0, n) => (e && R.forEach(i => {
    i.update(e, t, n);
  }), K ? updateWebAnimation(n) : updateCSSAnimation(t, n), p), pauseAnimation = () => {
    v && (K ? q.forEach(e => {
      e.pause();
    }) : O.forEach(e => {
      setStyleProperty(e, "animation-play-state", "paused");
    }));
  }, onAnimationEndFallback = () => {
    d = void 0, animationFinish();
  }, clearCSSAnimationsTimeout = () => {
    d && clearTimeout(d);
  }, clearCSSAnimationPlayState = () => {
    O.forEach(e => {
      removeStyleProperty(e, "animation-duration"), removeStyleProperty(e, "animation-delay"), 
      removeStyleProperty(e, "animation-play-state");
    });
  }, play = t => new Promise(n => {
    t && t.sync && (S = !0, onFinish(() => S = !1, {
      oneTimeCallback: !0
    })), v || initializeAnimation(), D && (K ? (setAnimationStep(0), updateWebAnimation()) : updateCSSAnimation(), 
    D = !1), L && (w = R.length + 1, L = !1), onFinish(() => n(), {
      oneTimeCallback: !0
    }), R.forEach(e => {
      e.play();
    }), K ? (q.forEach(e => {
      e.play();
    }), 0 !== g.length && 0 !== O.length || animationFinish()) : (() => {
      if (clearCSSAnimationsTimeout(), e(() => {
        O.forEach(e => {
          g.length > 0 && setStyleProperty(e, "animation-play-state", "running");
        });
      }), 0 === g.length || 0 === O.length) animationFinish(); else {
        /**
       * This is a catchall in the event that a CSS Animation did not finish.
       * The Web Animations API has mechanisms in place for preventing this.
       * CSS Animations will not fire an `animationend` event
       * for elements with `display: none`. The Web Animations API
       * accounts for this, but using raw CSS Animations requires
       * this workaround.
       */
        const t = getDelay() || 0, n = getDuration() || 0, i = getIterations() || 1;
        // No need to set a timeout when animation has infinite iterations
        isFinite(i) && (d = setTimeout(onAnimationEndFallback, t + n * i + 100)), ((e, t) => {
          let n;
          const i = {
            passive: !0
          }, unregister = () => {
            n && n();
          }, onTransitionEnd = n => {
            e === n.target && (unregister(), t(n));
          };
          e && (e.addEventListener("webkitAnimationEnd", onTransitionEnd, i), e.addEventListener("animationend", onTransitionEnd, i), 
          n = () => {
            e.removeEventListener("webkitAnimationEnd", onTransitionEnd, i), e.removeEventListener("animationend", onTransitionEnd, i);
          });
        })(O[0], () => {
          clearCSSAnimationsTimeout(), 
          /**
         * Ensure that clean up
         * is always done a frame
         * before the onFinish handlers
         * are fired. Otherwise, there
         * may be flickering if a new
         * animation is started on the same
         * element too quickly
         *
         * TODO: Is there a cleaner way to do this?
         */
          e(() => {
            clearCSSAnimationPlayState(), e(animationFinish);
          });
        });
      }
    })();
  }), from = (e, t) => {
    const n = g[0];
    return void 0 === n || void 0 !== n.offset && 0 !== n.offset ? g = [ {
      offset: 0,
      [e]: t
    }, ...g ] : n[e] = t, p;
  };
  return p = {
    parentAnimation: f,
    elements: O,
    childAnimations: R,
    id: P,
    animationFinish,
    from,
    to: (e, t) => {
      const n = g[g.length - 1];
      return void 0 === n || void 0 !== n.offset && 1 !== n.offset ? g = [ ...g, {
        offset: 1,
        [e]: t
      } ] : n[e] = t, p;
    },
    fromTo: (e, t, n) => from(e, t).to(e, n),
    parent: e => (f = e, p),
    play,
    pause: () => (R.forEach(e => {
      e.pause();
    }), pauseAnimation(), p),
    stop: () => {
      R.forEach(e => {
        e.stop();
      }), v && (cleanUpElements(), v = !1), k = !1, S = !1, L = !0, c = void 0, m = void 0, 
      h = void 0, w = 0, D = !1, T = !0;
    },
    destroy: e => (R.forEach(t => {
      t.destroy(e);
    }), cleanUp(e), O.length = 0, R.length = 0, g.length = 0, clearOnFinish(), v = !1, 
    L = !0, p),
    keyframes: e => (g = e, p),
    addAnimation: e => {
      if (null != e) if (Array.isArray(e)) for (const t of e) t.parent(p), R.push(t); else e.parent(p), 
      R.push(e);
      return p;
    },
    addElement: e => {
      if (null != e) if (1 === e.nodeType) O.push(e); else if (e.length >= 0) for (let t = 0; t < e.length; t++) O.push(e[t]); else console.error("Invalid addElement value");
      return p;
    },
    update,
    fill: e => (s = e, update(!0), p),
    direction: e => (l = e, update(!0), p),
    iterations: e => (r = e, update(!0), p),
    duration: e => (
    /**
     * CSS Animation Durations of 0ms work fine on Chrome
     * but do not run on Safari, so force it to 1ms to
     * get it to run on both platforms.
     */
    K || 0 !== e || (e = 1), o = e, update(!0), p),
    easing: e => (a = e, update(!0), p),
    delay: e => (i = e, update(!0), p),
    getWebAnimations: () => q,
    getKeyframes: () => g,
    getFill,
    getDirection,
    getDelay,
    getIterations,
    getEasing,
    getDuration,
    afterAddRead: e => (I.push(e), p),
    afterAddWrite: e => (M.push(e), p),
    afterClearStyles: (e = []) => {
      for (const t of e) C[t] = "";
      return p;
    },
    afterStyles: (e = {}) => (C = e, p),
    afterRemoveClass: e => (b = addClassToArray(b, e), p),
    afterAddClass: e => (A = addClassToArray(A, e), p),
    beforeAddRead: e => (x.push(e), p),
    beforeAddWrite: e => (j.push(e), p),
    beforeClearStyles: (e = []) => {
      for (const t of e) $[t] = "";
      return p;
    },
    beforeStyles: (e = {}) => ($ = e, p),
    beforeRemoveClass: e => (E = addClassToArray(E, e), p),
    beforeAddClass: e => (y = addClassToArray(y, e), p),
    onFinish,
    progressStart: (e = !1, t) => (R.forEach(n => {
      n.progressStart(e, t);
    }), pauseAnimation(), k = e, v ? update(!1, !0, t) : initializeAnimation(), p),
    progressStep: e => (R.forEach(t => {
      t.progressStep(e);
    }), setAnimationStep(e), p),
    progressEnd: (e, t, n) => (k = !1, R.forEach(i => {
      i.progressEnd(e, t, n);
    }), void 0 !== n && (m = n), D = !1, 
    // tslint:disable-next-line: strict-boolean-conditions
    T = !0, 0 === e ? (c = "reverse" === getDirection() ? "normal" : "reverse", "reverse" === c && (T = !1), 
    K ? (update(), setAnimationStep(1 - t)) : (h = (1 - t) * getDuration() * -1, update(!1, !1))) : 1 === e && (K ? (update(), 
    setAnimationStep(t)) : (h = t * getDuration() * -1, update(!1, !1))), void 0 !== e && (onFinish(() => {
      m = void 0, c = void 0, h = void 0;
    }, {
      oneTimeCallback: !0
    }), f || play()), p)
  };
};

export { createAnimation as c }