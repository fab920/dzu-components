const e = "ionKeyboardDidShow", t = "ionKeyboardDidHide";

let i = {}, o = {}, d = !1;

/**
 * This is only used for tests
 */
const resetKeyboardAssist = () => {
  i = {}, o = {}, d = !1;
}, startKeyboardAssist = e => {
  startNativeListeners(e), e.visualViewport && (o = copyVisualViewport(e.visualViewport), 
  e.visualViewport.onresize = () => {
    trackViewportChanges(e), keyboardDidOpen() || keyboardDidResize(e) ? setKeyboardOpen(e) : keyboardDidClose(e) && setKeyboardClose(e);
  });
}, startNativeListeners = e => {
  e.addEventListener("keyboardDidShow", t => setKeyboardOpen(e, t)), e.addEventListener("keyboardDidHide", () => setKeyboardClose(e));
}, setKeyboardOpen = (e, t) => {
  fireKeyboardOpenEvent(e, t), d = !0;
}, setKeyboardClose = e => {
  fireKeyboardCloseEvent(e), d = !1;
}, keyboardDidOpen = () => {
  const e = (i.height - o.height) * o.scale;
  return !d && i.width === o.width && e > 150;
}, keyboardDidResize = e => d && !keyboardDidClose(e), keyboardDidClose = e => d && o.height === e.innerHeight, fireKeyboardOpenEvent = (e, t) => {
  const i = t ? t.keyboardHeight : e.innerHeight - o.height, d = new CustomEvent("ionKeyboardDidShow", {
    detail: {
      keyboardHeight: i
    }
  });
  e.dispatchEvent(d);
}, fireKeyboardCloseEvent = e => {
  const t = new CustomEvent("ionKeyboardDidHide");
  e.dispatchEvent(t);
}, trackViewportChanges = e => {
  i = Object.assign({}, o), o = copyVisualViewport(e.visualViewport);
}, copyVisualViewport = e => ({
  width: Math.round(e.width),
  height: Math.round(e.height),
  offsetTop: e.offsetTop,
  offsetLeft: e.offsetLeft,
  pageTop: e.pageTop,
  pageLeft: e.pageLeft,
  scale: e.scale
});

export { t as KEYBOARD_DID_CLOSE, e as KEYBOARD_DID_OPEN, copyVisualViewport, keyboardDidClose, keyboardDidOpen, keyboardDidResize, resetKeyboardAssist, setKeyboardClose, setKeyboardOpen, startKeyboardAssist, trackViewportChanges }