'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ed820112.js');
const ionicGlobal = require('./ionic-global-8f95b43a.js');
require('./helpers-b68e5cec.js');
require('./hardware-back-button-423df023.js');
const overlays = require('./overlays-c9ada856.js');
const theme = require('./theme-98ccfc24.js');

const selectPopoverCss = ".sc-ion-select-popover-h ion-list.sc-ion-select-popover{margin-left:0;margin-right:0;margin-top:-1px;margin-bottom:-1px}.sc-ion-select-popover-h ion-list-header.sc-ion-select-popover,.sc-ion-select-popover-h ion-label.sc-ion-select-popover{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}";

const SelectPopover = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** Array of options for the popover */
        this.options = [];
    }
    onSelect(ev) {
        const option = this.options.find(o => o.value === ev.target.value);
        if (option) {
            overlays.safeCall(option.handler);
        }
    }
    render() {
        const checkedOption = this.options.find(o => o.checked);
        const checkedValue = checkedOption ? checkedOption.value : undefined;
        return (index.h(index.Host, { class: ionicGlobal.getIonMode(this) }, index.h("ion-list", null, this.header !== undefined && index.h("ion-list-header", null, this.header), (this.subHeader !== undefined || this.message !== undefined) &&
            index.h("ion-item", null, index.h("ion-label", { class: "ion-text-wrap" }, this.subHeader !== undefined && index.h("h3", null, this.subHeader), this.message !== undefined && index.h("p", null, this.message))), index.h("ion-radio-group", { value: checkedValue }, this.options.map(option => index.h("ion-item", { class: theme.getClassMap(option.cssClass) }, index.h("ion-label", null, option.text), index.h("ion-radio", { value: option.value, disabled: option.disabled })))))));
    }
};
SelectPopover.style = selectPopoverCss;

exports.ion_select_popover = SelectPopover;
