'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc026f74.js');
const ionicGlobal = require('./ionic-global-e7b2dbf9.js');

const rowCss = ":host{display:flex;flex-wrap:wrap}";

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
