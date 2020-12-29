import { Component, Prop, h } from '@stencil/core';
export class DzuIcon {
    constructor() {
        this.size = 22;
    }
    getClass() {
        return this.color + " fs-" + this.size;
    }
    render() {
        return (h("ion-icon", { name: this.name, class: this.getClass() }));
    }
    static get is() { return "dzu-icon"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["dzu-icon.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["dzu-icon.css"]
    }; }
    static get properties() { return {
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
                "text": "src for an icon, otherwise one is choosen arording to severity"
            },
            "attribute": "color",
            "reflect": false
        },
        "size": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "size",
            "reflect": false,
            "defaultValue": "22"
        },
        "name": {
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
            "attribute": "name",
            "reflect": false
        }
    }; }
}
