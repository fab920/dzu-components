import { Component, Element, Event, Prop, State, h } from '@stencil/core';
import { createAnimation } from '@ionic/core';
const style = {
  info: {
    color: "darkgray",
    background: "bg-blue",
    icon: "information",
  },
  warning: {
    color: "darkgray",
    background: "bg-yellow",
    icon: "warning",
  },
  error: {
    color: "white",
    background: "bg-red",
    icon: "report",
  }
};
export class DzuAlert {
  constructor() {
    this.visible = true;
  }
  async close() {
    const anim = createAnimation()
      .addElement(this.el)
      .duration(300)
      .fromTo('opacity', '1', '0');
    await anim.play();
    this.visible = false;
    this.closed.emit(this);
  }
  getClass() {
    return "alert " + style[this.level].background;
  }
  render() {
    return (h("div", { class: this.getClass(), style: { display: this.visible ? 'flex' : 'none' } },
      h("div", null,
        h("dzu-icon", { name: style[this.level].icon, size: 24, color: style[this.level].color })),
      h("span", null,
        h("slot", null)),
      this.isCloseable
        ? h("div", { class: "is-clickable tf-right", onClick: () => this.close(), title: "close" },
          h("dzu-icon", { name: "close", size: 24, color: "red" }))
        : ""));
  }
  static get is() { return "dzu-alert"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["dzu-alert.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["dzu-alert.css"]
  }; }
  static get properties() { return {
    "level": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Level",
        "resolved": "Level.error | Level.info | Level.warning",
        "references": {
          "Level": {
            "location": "import",
            "path": "../level"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Severity of the alert"
      },
      "attribute": "level",
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
        "text": "src for an icon, otherwise one is choosen arording to severity"
      },
      "attribute": "src",
      "reflect": false
    },
    "size": {
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
      "attribute": "size",
      "reflect": false
    },
    "isCloseable": {
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
      "attribute": "is-closeable",
      "reflect": false
    },
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
  static get states() { return {
    "visible": {}
  }; }
  static get events() { return [{
      "method": "closed",
      "name": "closed",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "DzuAlert",
        "resolved": "DzuAlert",
        "references": {
          "DzuAlert": {
            "location": "global"
          }
        }
      }
    }]; }
  static get elementRef() { return "el"; }
}
