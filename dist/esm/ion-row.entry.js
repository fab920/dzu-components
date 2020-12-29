import { r as registerInstance, h, H as Host } from './index-d4eb92f9.js';
import { g as getIonMode } from './ionic-global-8b2e221d.js';

const rowCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}";

const Row = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { class: getIonMode(this) }, h("slot", null)));
    }
};
Row.style = rowCss;

export { Row as ion_row };
