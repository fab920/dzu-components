const t = {
  getEngine() {
    const t = window;
    return t.TapticEngine || t.Capacitor && t.Capacitor.isPluginAvailable("Haptics") && t.Capacitor.Plugins.Haptics;
  },
  available() {
    return !!this.getEngine();
  },
  isCordova: () => !!window.TapticEngine,
  isCapacitor: () => !!window.Capacitor,
  impact(t) {
    const i = this.getEngine();
    if (!i) return;
    const e = this.isCapacitor() ? t.style.toUpperCase() : t.style;
    i.impact({
      style: e
    });
  },
  notification(t) {
    const i = this.getEngine();
    if (!i) return;
    const e = this.isCapacitor() ? t.style.toUpperCase() : t.style;
    i.notification({
      style: e
    });
  },
  selection() {
    this.impact({
      style: "light"
    });
  },
  selectionStart() {
    const t = this.getEngine();
    t && (this.isCapacitor() ? t.selectionStart() : t.gestureSelectionStart());
  },
  selectionChanged() {
    const t = this.getEngine();
    t && (this.isCapacitor() ? t.selectionChanged() : t.gestureSelectionChanged());
  },
  selectionEnd() {
    const t = this.getEngine();
    t && (this.isCapacitor() ? t.selectionEnd() : t.gestureSelectionEnd());
  }
}, hapticSelection = () => {
  t.selection();
}, hapticSelectionStart = () => {
  t.selectionStart();
}, hapticSelectionChanged = () => {
  t.selectionChanged();
}, hapticSelectionEnd = () => {
  t.selectionEnd();
}, hapticImpact = i => {
  t.impact(i);
};

/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */ export { hapticSelectionStart as a, hapticSelectionChanged as b, hapticImpact as c, hapticSelection as d, hapticSelectionEnd as h }