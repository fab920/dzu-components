import { Component, Element, Prop, h } from '@stencil/core';
export class DzuBottomnav {
  getClass() {
    return "bottomnav " + this.class;
  }
  render() {
    return (h("ol", { class: this.getClass(), role: "tablist" },
      h("slot", null)));
  }
  static get is() { return "dzu-bottomnav"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["dzu-bottomnav.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["dzu-bottomnav.css"]
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
    }
  }; }
  static get elementRef() { return "el"; }
}
