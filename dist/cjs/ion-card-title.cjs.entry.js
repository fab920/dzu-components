'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc026f74.js');
const ionicGlobal = require('./ionic-global-e7b2dbf9.js');
const theme = require('./theme-98ccfc24.js');

const cardTitleIosCss = ":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-text-color, #000);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:28px;font-weight:700;line-height:1.2}";

const cardTitleMdCss = ":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-850, #262626);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:20px;font-weight:500;line-height:1.2}";

const CardTitle = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const mode = ionicGlobal.getIonMode(this);
    return (index.h(index.Host, { role: "heading", "aria-level": "2", class: theme.createColorClasses(this.color, {
        'ion-inherit-color': true,
        [mode]: true
      }) }, index.h("slot", null)));
  }
};
CardTitle.style = {
  ios: cardTitleIosCss,
  md: cardTitleMdCss
};

exports.ion_card_title = CardTitle;
