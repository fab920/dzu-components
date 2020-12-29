'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ed820112.js');
const ionicGlobal = require('./ionic-global-8f95b43a.js');

const appCss = "html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}html.plt-mobile ion-app [contenteditable]{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}";

const App = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    componentDidLoad() {
        {
            rIC(() => {
                const isHybrid = ionicGlobal.isPlatform(window, 'hybrid');
                if (!ionicGlobal.config.getBoolean('_testing')) {
                    new Promise(function (resolve) { resolve(require('./tap-click-a6ffb6c1.js')); }).then(module => module.startTapClick(ionicGlobal.config));
                }
                if (ionicGlobal.config.getBoolean('statusTap', isHybrid)) {
                    new Promise(function (resolve) { resolve(require('./status-tap-5369f845.js')); }).then(module => module.startStatusTap());
                }
                if (ionicGlobal.config.getBoolean('inputShims', needInputShims())) {
                    new Promise(function (resolve) { resolve(require('./input-shims-51870f22.js')); }).then(module => module.startInputShims(ionicGlobal.config));
                }
                if (ionicGlobal.config.getBoolean('hardwareBackButton', isHybrid)) {
                    new Promise(function (resolve) { resolve(require('./hardware-back-button-423df023.js')); }).then(module => module.startHardwareBackButton());
                }
                if (typeof window !== 'undefined') {
                    new Promise(function (resolve) { resolve(require('./keyboard-1dcbde6c.js')); }).then(module => module.startKeyboardAssist(window));
                }
                new Promise(function (resolve) { resolve(require('./focus-visible-1583bc8e.js')); }).then(module => module.startFocusVisible());
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
