import { r as registerInstance, h, H as Host, e as getElement } from './index-d4eb92f9.js';
import { g as getIonMode, c as config, i as isPlatform } from './ionic-global-8b2e221d.js';

const appCss = "html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}html.plt-mobile ion-app [contenteditable]{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}";

const App = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentDidLoad() {
        {
            rIC(() => {
                const isHybrid = isPlatform(window, 'hybrid');
                if (!config.getBoolean('_testing')) {
                    import('./tap-click-fc1a172a.js').then(module => module.startTapClick(config));
                }
                if (config.getBoolean('statusTap', isHybrid)) {
                    import('./status-tap-3f262b80.js').then(module => module.startStatusTap());
                }
                if (config.getBoolean('inputShims', needInputShims())) {
                    import('./input-shims-b90918cf.js').then(module => module.startInputShims(config));
                }
                if (config.getBoolean('hardwareBackButton', isHybrid)) {
                    import('./hardware-back-button-5871ffa6.js').then(module => module.startHardwareBackButton());
                }
                if (typeof window !== 'undefined') {
                    import('./keyboard-06906eac.js').then(module => module.startKeyboardAssist(window));
                }
                import('./focus-visible-abf04ce3.js').then(module => module.startFocusVisible());
            });
        }
    }
    render() {
        const mode = getIonMode(this);
        return (h(Host, { class: {
                [mode]: true,
                'ion-page': true,
                'force-statusbar-padding': config.getBoolean('_forceStatusbarPadding'),
            } }));
    }
    get el() { return getElement(this); }
};
const needInputShims = () => {
    return isPlatform(window, 'ios') && isPlatform(window, 'mobile');
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

export { App as ion_app };
