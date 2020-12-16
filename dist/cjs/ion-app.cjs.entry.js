'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc026f74.js');
const ionicGlobal = require('./ionic-global-e7b2dbf9.js');

const appCss = "html.plt-mobile ion-app{user-select:none}html.plt-mobile ion-app [contenteditable]{user-select:text}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}";

const App = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  componentDidLoad() {
    {
      rIC(() => {
        const isHybrid = ionicGlobal.isPlatform(window, 'hybrid');
        if (!ionicGlobal.config.getBoolean('_testing')) {
          Promise.resolve().then(function () { return require('./tap-click-a6ffb6c1.js'); }).then(module => module.startTapClick(ionicGlobal.config));
        }
        if (ionicGlobal.config.getBoolean('statusTap', isHybrid)) {
          Promise.resolve().then(function () { return require('./status-tap-8672e971.js'); }).then(module => module.startStatusTap());
        }
        if (ionicGlobal.config.getBoolean('inputShims', needInputShims())) {
          Promise.resolve().then(function () { return require('./input-shims-51870f22.js'); }).then(module => module.startInputShims(ionicGlobal.config));
        }
        if (ionicGlobal.config.getBoolean('hardwareBackButton', isHybrid)) {
          Promise.resolve().then(function () { return require('./hardware-back-button-423df023.js'); }).then(module => module.startHardwareBackButton());
        }
        if (typeof window !== 'undefined') {
          Promise.resolve().then(function () { return require('./keyboard-1dcbde6c.js'); }).then(module => module.startKeyboardAssist(window));
        }
        Promise.resolve().then(function () { return require('./focus-visible-1583bc8e.js'); }).then(module => module.startFocusVisible());
      });
    }
  }
  render() {
    const mode = ionicGlobal.getIonMode(this);
    return (index.h(index.Host, { class: {
        [mode]: true,
        'ion-page': true,
        'force-statusbar-padding': ionicGlobal.config.getBoolean('_forceStatusbarPadding'),
      } }));
  }
  get el() { return index.getElement(this); }
};
const needInputShims = () => {
  return ionicGlobal.isPlatform(window, 'ios') && ionicGlobal.isPlatform(window, 'mobile');
};
const rIC = (callback) => {
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(callback);
  }
  else {
    setTimeout(callback, 32);
  }
};
App.style = appCss;

exports.ion_app = App;
