const startHardwareBackButton = () => {
  const t = document;
  let e = !1;
  t.addEventListener("backbutton", () => {
    if (e) return;
    let r = 0, n = [];
    const i = new CustomEvent("ionBackButton", {
      bubbles: !1,
      detail: {
        register(t, e) {
          n.push({
            priority: t,
            handler: e,
            id: r++
          });
        }
      }
    });
    t.dispatchEvent(i);
    const processHandlers = () => {
      if (n.length > 0) {
        let t = {
          priority: Number.MIN_SAFE_INTEGER,
          handler: () => {},
          id: -1
        };
        n.forEach(e => {
          e.priority >= t.priority && (t = e);
        }), e = !0, n = n.filter(e => e.id !== t.id), (async t => {
          try {
            if (t && t.handler) {
              const e = t.handler(processHandlers);
              null != e && await e;
            }
          } catch (e) {
            console.error(e);
          }
        })(t).then(() => e = !1);
      }
    };
    processHandlers();
  });
}, t = 100, e = 99;

// 1 less than overlay priority since menu is displayed behind overlays
export { e as MENU_BACK_BUTTON_PRIORITY, t as OVERLAY_BACK_BUTTON_PRIORITY, startHardwareBackButton }