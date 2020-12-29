import { Component, Prop, h, Host } from '@stencil/core';
import { createColorClasses } from '../../utils/utils';
export class Bcrumbs {
    constructor() {
        this.color = "primary";
    }
    render() {
        const { color } = this;
        return h(Host, { class: createColorClasses(color, {}), itemprop: "breadcrumb" },
            h("div", { class: "bcrumbs noselect" },
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
        "color": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "Color",
                "resolved": "string",
                "references": {
                    "Color": {
                        "location": "import",
                        "path": "@ionic/core"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "color",
            "reflect": false,
            "defaultValue": "\"primary\""
        }
    }; }
}
