'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc026f74.js');
const ionicGlobal = require('./ionic-global-e7b2dbf9.js');

const selectOptionCss = ":host{display:none}";

const SelectOption = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.inputId = `ion-selopt-${selectOptionIds++}`;
    /**
     * If `true`, the user cannot interact with the select option. This property does not apply when `interface="action-sheet"` as `ion-action-sheet` does not allow for disabled buttons.
     */
    this.disabled = false;
  }
  render() {
    return (index.h(index.Host, { role: "option", id: this.inputId, class: ionicGlobal.getIonMode(this) }));
  }
  get el() { return index.getElement(this); }
};
let selectOptionIds = 0;
SelectOption.style = selectOptionCss;

exports.ion_select_option = SelectOption;
