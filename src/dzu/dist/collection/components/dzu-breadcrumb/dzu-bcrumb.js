import { Component, Prop, h } from '@stencil/core';
export class DzuBcrumb {
  isActive() {
    return this.active ? { "aria-selected": 'true' } : {};
  }
  isDisabled() {
    return this.disabled ? { "aria-disabled": 'true' } : {};
  }
  render() {
    return h("div", Object.assign({ class: "bcrumb {this.class}" }, this.isActive(), this.isDisabled()),
      h("div", null,
        h("slot", null)));
  }
  static get is() { return "dzu-bcrumb"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["dzu-bcrumb.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["dzu-bcrumb.css"]
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
    },
    "active": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "active",
      "reflect": false
    },
    "disabled": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "disabled",
      "reflect": false
    }
  }; }
}
