import { Component, Element, Prop, h } from '@stencil/core';
export class DzuBottomnavitem {
  isActive() {
    return this.active ? { "aria-selected": 'true' } : {};
  }
  // DEPRECATED
  parseImg(src) {
    let path = src.split("/");
    return (path.pop().split("."))[0];
  }
  render() {
    return (h("li", Object.assign({ role: "tab" }, this.isActive()),
      h("a", { href: this.href },
        h("div", { class: "icon" },
          h("dzu-icon", { name: this.icon ? this.icon : this.parseImg(this.src), size: 24, color: "darkgray" })),
        h("div", { class: "title" },
          h("slot", null)))));
  }
  static get is() { return "dzu-bottomnav-item"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["dzu-bottomnav-item.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["dzu-bottomnav-item.css"]
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
    "src": {
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
      "attribute": "src",
      "reflect": false
    },
    "icon": {
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
      "attribute": "icon",
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
    "href": {
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
      "attribute": "href",
      "reflect": false
    }
  }; }
  static get elementRef() { return "el"; }
}
