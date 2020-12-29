'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ed820112.js');
const ionicGlobal = require('./ionic-global-8f95b43a.js');

const rowCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}";

const Row = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { class: ionicGlobal.getIonMode(this) }, index.h("slot", null)));
    }
};
Row.style = rowCss;

exports.ion_row = Row;
