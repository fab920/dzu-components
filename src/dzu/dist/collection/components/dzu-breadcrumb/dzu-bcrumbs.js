import { Component, Prop, h } from '@stencil/core';
export class DzuBcrumbs {
  getClass() {
    let str = "bcrumbs noselect " + this.class;
    return str;
  }
  render() {
    return h("div", null,
      h("div", { itemprop: "breadcrumb", class: this.getClass() },
        h("slot", null)));
  }
  static get is() { return "dzu-bcrumbs"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["dzu-bcrumbs.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["dzu-bcrumbs.css"]
  }; }
  static get properties() { return {
    "class": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "class",
      "reflect": false
    },
    "color": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "color",
      "reflect": false
    }
  }; }
}
