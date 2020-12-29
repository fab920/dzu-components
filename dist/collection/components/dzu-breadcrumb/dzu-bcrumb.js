import { Component, Event, h, Host, Prop } from '@stencil/core';
import { createColorClasses } from '../../utils/utils';
export class DzuBcrumb {
    constructor() {
        this.active = false;
        this.disabled = false;
        this.onFocus = () => {
            this.ionFocus.emit();
        };
        this.onBlur = () => {
            this.ionBlur.emit();
        };
    }
    render() {
        const { active, disabled } = this;
        return (h(Host, { class: createColorClasses(null, {
                'ion-activatable': !this.disabled,
                'ion-focusable': !this.disabled,
            }), "aria-disabled": disabled ? 'true' : null, "aria-selected": active ? 'true' : null },
            h("div", { class: { "bcrumb": true, "disabled": disabled, "active": active }, onFocus: this.onFocus, onBlur: this.onBlur },
                h("slot", null))));
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
            "reflect": true,
            "defaultValue": "false"
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
            "reflect": true,
            "defaultValue": "false"
        },
        "href": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string | undefined",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Contains a URL or a URL fragment that the hyperlink points to.\nIf this property is set, an anchor tag will be rendered."
            },
            "attribute": "href",
            "reflect": false
        }
    }; }
    static get events() { return [{
            "method": "ionFocus",
            "name": "ionFocus",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted when the breadcrumb has focus."
            },
            "complexType": {
                "original": "void",
                "resolved": "void",
                "references": {}
            }
        }, {
            "method": "ionBlur",
            "name": "ionBlur",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted when the breadcrumb loses focus."
            },
            "complexType": {
                "original": "void",
                "resolved": "void",
                "references": {}
            }
        }]; }
}
