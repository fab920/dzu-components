'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc026f74.js');
require('./helpers-b68e5cec.js');
const animation = require('./animation-d9cc8821.js');

let CACHED_MAP;
const getIconMap = () => {
    if (typeof window === 'undefined') {
        return new Map();
    }
    else {
        if (!CACHED_MAP) {
            const win = window;
            win.Ionicons = win.Ionicons || {};
            CACHED_MAP = win.Ionicons.map = win.Ionicons.map || new Map();
        }
        return CACHED_MAP;
    }
};
const getUrl = (i) => {
    let url = getSrc(i.src);
    if (url) {
        return url;
    }
    url = getName(i.name, i.icon, i.mode, i.ios, i.md);
    if (url) {
        return getNamedUrl(url);
    }
    if (i.icon) {
        url = getSrc(i.icon);
        if (url) {
            return url;
        }
        url = getSrc(i.icon[i.mode]);
        if (url) {
            return url;
        }
    }
    return null;
};
const getNamedUrl = (iconName) => {
    const url = getIconMap().get(iconName);
    if (url) {
        return url;
    }
    return index.getAssetPath(`svg/${iconName}.svg`);
};
const getName = (iconName, icon, mode, ios, md) => {
    // default to "md" if somehow the mode wasn't set
    mode = (mode && toLower(mode)) === 'ios' ? 'ios' : 'md';
    // if an icon was passed in using the ios or md attributes
    // set the iconName to whatever was passed in
    if (ios && mode === 'ios') {
        iconName = toLower(ios);
    }
    else if (md && mode === 'md') {
        iconName = toLower(md);
    }
    else {
        if (!iconName && icon && !isSrc(icon)) {
            iconName = icon;
        }
        if (isStr(iconName)) {
            iconName = toLower(iconName);
        }
    }
    if (!isStr(iconName) || iconName.trim() === '') {
        return null;
    }
    // only allow alpha characters and dash
    const invalidChars = iconName.replace(/[a-z]|-|\d/gi, '');
    if (invalidChars !== '') {
        return null;
    }
    return iconName;
};
const getSrc = (src) => {
    if (isStr(src)) {
        src = src.trim();
        if (isSrc(src)) {
            return src;
        }
    }
    return null;
};
const isSrc = (str) => str.length > 0 && /(\/|\.)/.test(str);
const isStr = (val) => typeof val === 'string';
const toLower = (val) => val.toLowerCase();

const dzuAlertCss = "@charset \"UTF-8\";*{box-sizing:border-box}.bg-white{background-color:#ffffff;color:#000000}.bg-lightgray{background-color:#e6e6e6;color:#000000}.bg-gray{background-color:#aaaaaa;color:#000000}.bg-darkgray{background-color:#6e6e6e;color:#ffffff}.bg-green{background-color:#2CAC6E;color:#000000}.bg-darkgreen{background-color:#09A359;color:#ffffff}.bg-lightblue{background-color:#d1e1f6;color:#000000}.bg-blue{background-color:#a4c0e4;color:#000000}.darkblue{color:#074D7E}.bg-darkblue{background-color:#074D7E;color:#ffffff}.bg-red{background-color:#a61400;color:#ffffff}.bg-lightyellow{background-color:#FFFFFF;color:#000000}.bg-yellow{background-color:#FFF6D2;color:#000000}.bg-darkyellow{background-color:#ffe78d;color:#000000}.bg-twitter{background:#55acee}.bg-facebook{background:#3B5998}.bg-whatsapp{background:#34af23}.bg-linkedin{background:#4875B4}.bg-signal{background:#2090ea}.bg-wechat{background:#8ad129}:host{display:inline-block}.alert{display:flex;flex-direction:row;align-items:center;padding:4px;gap:4px;max-width:400px;min-height:48px}.alert>div{flex:24px}.alert>span{padding-right:20px}";

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
const DzuAlert = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.closed = index.createEvent(this, "closed", 7);
    this.visible = true;
  }
  async close() {
    const anim = animation.createAnimation()
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
    return (index.h("div", { class: this.getClass(), style: { display: this.visible ? 'flex' : 'none' } }, index.h("div", null, index.h("dzu-icon", { name: style[this.level].icon, size: 24, color: style[this.level].color })), index.h("span", null, index.h("slot", null)), this.isCloseable
      ? index.h("div", { class: "is-clickable tf-right", onClick: () => this.close(), title: "close" }, index.h("dzu-icon", { name: "close", size: 24, color: "red" }))
      : ""));
  }
  get el() { return index.getElement(this); }
};
DzuAlert.style = dzuAlertCss;

const dzuBcrumbCss = "@charset \"UTF-8\";*{box-sizing:border-box}.bg-white{background-color:#ffffff;color:#000000}.bg-lightgray{background-color:#e6e6e6;color:#000000}.bg-gray{background-color:#aaaaaa;color:#000000}.bg-darkgray{background-color:#6e6e6e;color:#ffffff}.bg-green{background-color:#2CAC6E;color:#000000}.bg-darkgreen{background-color:#09A359;color:#ffffff}.bg-lightblue{background-color:#d1e1f6;color:#000000}.bg-blue{background-color:#a4c0e4;color:#000000}.darkblue{color:#074D7E}.bg-darkblue{background-color:#074D7E;color:#ffffff}.bg-red{background-color:#a61400;color:#ffffff}.bg-lightyellow{background-color:#FFFFFF;color:#000000}.bg-yellow{background-color:#FFF6D2;color:#000000}.bg-darkyellow{background-color:#ffe78d;color:#000000}.bg-twitter{background:#55acee}.bg-facebook{background:#3B5998}.bg-whatsapp{background:#34af23}.bg-linkedin{background:#4875B4}.bg-signal{background:#2090ea}.bg-wechat{background:#8ad129}:host{display:inline-block;}:host:first-child{padding-left:20px}.bcrumb{display:inline-block;padding-right:24px;padding-left:48px;transition:0.6s;position:relative;color:#000000;}.bcrumb[onclick]{text-decoration:none}.bcrumb[aria-selected]:after,.bcrumb:hover:after,.bcrumb[aria-selected],.bcrumb:hover{color:#ff0000;}.bcrumb[aria-disabled]:after,.bcrumb[aria-disabled]{color:#ccc;}.bcrumb:after{content:\"\";position:absolute;top:0;right:-24px;width:48px;height:48px;transform:scale(0.707) rotate(45deg);z-index:1;color:#000000;box-shadow:2px -2px 0 2px rgba(0, 0, 0, 0.4), 3px -3px 0 2px rgba(255, 255, 255, 0.1);border-radius:0 5px 0 50px;transition:0.6s}";

const DzuBcrumb = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  isActive() {
    return this.active ? { "aria-selected": 'true' } : {};
  }
  isDisabled() {
    return this.disabled ? { "aria-disabled": 'true' } : {};
  }
  render() {
    return index.h("div", Object.assign({ class: "bcrumb {this.class}" }, this.isActive(), this.isDisabled()), index.h("div", null, index.h("slot", null)));
  }
};
DzuBcrumb.style = dzuBcrumbCss;

const dzuBcrumbsCss = "@charset \"UTF-8\";*{box-sizing:border-box}.bg-white{background-color:#ffffff;color:#000000}.bg-lightgray{background-color:#e6e6e6;color:#000000}.bg-gray{background-color:#aaaaaa;color:#000000}.bg-darkgray{background-color:#6e6e6e;color:#ffffff}.bg-green{background-color:#2CAC6E;color:#000000}.bg-darkgreen{background-color:#09A359;color:#ffffff}.bg-lightblue{background-color:#d1e1f6;color:#000000}.bg-blue{background-color:#a4c0e4;color:#000000}.darkblue{color:#074D7E}.bg-darkblue{background-color:#074D7E;color:#ffffff}.bg-red{background-color:#a61400;color:#ffffff}.bg-lightyellow{background-color:#FFFFFF;color:#000000}.bg-yellow{background-color:#FFF6D2;color:#000000}.bg-darkyellow{background-color:#ffe78d;color:#000000}.bg-twitter{background:#55acee}.bg-facebook{background:#3B5998}.bg-whatsapp{background:#34af23}.bg-linkedin{background:#4875B4}.bg-signal{background:#2090ea}.bg-wechat{background:#8ad129}:host{display:block}.bcrumbs{display:block;line-height:48px;height:48px;overflow:hidden;user-select:none;background-color:#a4c0e4}.bcrumbs>*{background-color:#a4c0e4}.bcrumbs-darkblue>*{background-color:#074D7E;color:white}.bcrumbs-darkblue>*[aria-selected]:after,.bcrumbs-darkblue>*:hover:after,.bcrumbs-darkblue>*[aria-selected],.bcrumbs-darkblue>*:hover{background-color:#a4c0e4}.bcrumbs-darkblue>*:after{background-color:#074D7E}.bcrumbs-blue>*{background-color:#a4c0e4;color:white}.bcrumbs-blue>*[aria-selected]:after,.bcrumbs-blue>*:hover:after,.bcrumbs-blue>*[aria-selected],.bcrumbs-blue>*:hover{background-color:#074D7E}.bcrumbs-blue>*:after{background-color:#a4c0e4}";

const DzuBcrumbs = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  getClass() {
    let str = "bcrumbs noselect " + this.class;
    return str;
  }
  render() {
    return index.h("div", null, index.h("div", { itemprop: "breadcrumb", class: this.getClass() }, index.h("slot", null)));
  }
};
DzuBcrumbs.style = dzuBcrumbsCss;

const dzuBottomnavCss = "@charset \"UTF-8\";*{box-sizing:border-box}:host{display:block}ol{height:56px;max-height:56px;line-height:48px;display:flex;width:100%;border-spacing:20px 0;justify-content:space-around}";

const DzuBottomnav = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  getClass() {
    return "bottomnav " + this.class;
  }
  render() {
    return (index.h("ol", { class: this.getClass(), role: "tablist" }, index.h("slot", null)));
  }
  get el() { return index.getElement(this); }
};
DzuBottomnav.style = dzuBottomnavCss;

const dzuBottomnavItemCss = "@charset \"UTF-8\";*{box-sizing:border-box}:host{display:inline-block}li{height:56px;position:relative;display:inline-block;min-width:32px;text-align:center;margin:0 12px;cursor:pointer;padding:8px 0 10px 0;transition:0.4s;box-sizing:border-box;line-height:16px;color:#6e6e6e;-webkit-touch-callout:none;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;-webkit-tap-highlight-color:rgba(255, 255, 255, 0);cursor:pointer}li::-moz-focus-inner{padding:0;border:0}li:active,li:hover,li:focus{outline:0 none;background:transparent}li>a{display:inline-block;height:100%;width:100%}li [role=img]{cursor:pointer}li .title{top:32px;display:inline-block;font-size:12px}li.white{color:#ffffff}li[aria-selected=true]{color:#074D7E;padding-top:6px;line-height:18px}li[aria-selected=true] .title{top:36px;line-height:14px;font-size:14px;text-decoration:none}";

const DzuBottomnavitem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  isActive() {
    return this.active ? { "aria-selected": 'true' } : {};
  }
  // DEPRECATED
  parseImg(src) {
    let path = src.split("/");
    return (path.pop().split("."))[0];
  }
  render() {
    return (index.h("li", Object.assign({ role: "tab" }, this.isActive()), index.h("a", { href: this.href }, index.h("div", { class: "icon" }, index.h("dzu-icon", { name: this.icon ? this.icon : this.parseImg(this.src), size: 24, color: "darkgray" })), index.h("div", { class: "title" }, index.h("slot", null)))));
  }
  get el() { return index.getElement(this); }
};
DzuBottomnavitem.style = dzuBottomnavItemCss;

const dzuIconCss = "*{box-sizing:border-box}:host{display:inline-block}.ft-72{width:72px;height:72px;font-size:72px}.ft-48{width:48px;height:48px;font-size:48px}.ft-32{width:32px;height:32px;font-size:32px}.ft-24{width:24px;height:24px;font-size:24px}.ft-18{width:18px;height:18px;font-size:18px}.ft-16{width:16px;height:16px;font-size:16px}.ft-14{width:14px;height:14px;font-size:14px}.ft-12{width:12px;height:12px;font-size:12px}";

const DzuIcon = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.size = 22;
  }
  getClass() {
    return this.color + " fs-" + this.size;
  }
  render() {
    return (index.h("ion-icon", { name: this.name, class: this.getClass() }));
  }
};
DzuIcon.style = dzuIconCss;

const validateContent = (svgContent) => {
    const div = document.createElement('div');
    div.innerHTML = svgContent;
    // setup this way to ensure it works on our buddy IE
    for (let i = div.childNodes.length - 1; i >= 0; i--) {
        if (div.childNodes[i].nodeName.toLowerCase() !== 'svg') {
            div.removeChild(div.childNodes[i]);
        }
    }
    // must only have 1 root element
    const svgElm = div.firstElementChild;
    if (svgElm && svgElm.nodeName.toLowerCase() === 'svg') {
        const svgClass = svgElm.getAttribute('class') || '';
        svgElm.setAttribute('class', (svgClass + ' s-ion-icon').trim());
        // root element must be an svg
        // lets double check we've got valid elements
        // do not allow scripts
        if (isValid(svgElm)) {
            return div.innerHTML;
        }
    }
    return '';
};
const isValid = (elm) => {
    if (elm.nodeType === 1) {
        if (elm.nodeName.toLowerCase() === 'script') {
            return false;
        }
        for (let i = 0; i < elm.attributes.length; i++) {
            const val = elm.attributes[i].value;
            if (isStr(val) && val.toLowerCase().indexOf('on') === 0) {
                return false;
            }
        }
        for (let i = 0; i < elm.childNodes.length; i++) {
            if (!isValid(elm.childNodes[i])) {
                return false;
            }
        }
    }
    return true;
};

const ioniconContent = new Map();
const requests = new Map();
const getSvgContent = (url, sanitize) => {
    // see if we already have a request for this url
    let req = requests.get(url);
    if (!req) {
        if (typeof fetch !== 'undefined' && typeof document !== 'undefined') {
            // we don't already have a request
            req = fetch(url).then((rsp) => {
                if (rsp.ok) {
                    return rsp.text().then((svgContent) => {
                        if (svgContent && sanitize !== false) {
                            svgContent = validateContent(svgContent);
                        }
                        ioniconContent.set(url, svgContent || '');
                    });
                }
                ioniconContent.set(url, '');
            });
            // cache for the same requests
            requests.set(url, req);
        }
        else {
            // set to empty for ssr scenarios and resolve promise
            ioniconContent.set(url, '');
            return Promise.resolve();
        }
    }
    return req;
};

const iconCss = ":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}:host(.flip-rtl) .icon-inner{transform:scaleX(-1)}:host(.icon-small){font-size:18px !important}:host(.icon-large){font-size:32px !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}";

const Icon = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.isVisible = false;
    /**
     * The mode determines which platform styles to use.
     */
    this.mode = getIonMode();
    /**
     * If enabled, ion-icon will be loaded lazily when it's visible in the viewport.
     * Default, `false`.
     */
    this.lazy = false;
    /**
     * When set to `false`, SVG content that is HTTP fetched will not be checked
     * if the response SVG content has any `<script>` elements, or any attributes
     * that start with `on`, such as `onclick`.
     * @default true
     */
    this.sanitize = true;
  }
  connectedCallback() {
    // purposely do not return the promise here because loading
    // the svg file should not hold up loading the app
    // only load the svg if it's visible
    this.waitUntilVisible(this.el, '50px', () => {
      this.isVisible = true;
      this.loadIcon();
    });
  }
  disconnectedCallback() {
    if (this.io) {
      this.io.disconnect();
      this.io = undefined;
    }
  }
  waitUntilVisible(el, rootMargin, cb) {
    if ( this.lazy && typeof window !== 'undefined' && window.IntersectionObserver) {
      const io = (this.io = new window.IntersectionObserver((data) => {
        if (data[0].isIntersecting) {
          io.disconnect();
          this.io = undefined;
          cb();
        }
      }, { rootMargin }));
      io.observe(el);
    }
    else {
      // browser doesn't support IntersectionObserver
      // so just fallback to always show it
      cb();
    }
  }
  loadIcon() {
    if ( this.isVisible) {
      const url = getUrl(this);
      if (url) {
        if (ioniconContent.has(url)) {
          // sync if it's already loaded
          this.svgContent = ioniconContent.get(url);
        }
        else {
          // async if it hasn't been loaded
          getSvgContent(url, this.sanitize).then(() => (this.svgContent = ioniconContent.get(url)));
        }
      }
    }
    if (!this.ariaLabel && this.ariaHidden !== 'true') {
      const label = getName(this.name, this.icon, this.mode, this.ios, this.md);
      // user did not provide a label
      // come up with the label based on the icon name
      if (label) {
        this.ariaLabel = label.replace(/\-/g, ' ');
      }
    }
  }
  render() {
    const mode = this.mode || 'md';
    const flipRtl = this.flipRtl ||
      (this.ariaLabel &&
        (this.ariaLabel.indexOf('arrow') > -1 || this.ariaLabel.indexOf('chevron') > -1) &&
        this.flipRtl !== false);
    return (index.h(index.Host, { role: "img", class: Object.assign(Object.assign({ [mode]: true }, createColorClasses(this.color)), { [`icon-${this.size}`]: !!this.size, 'flip-rtl': !!flipRtl && this.el.ownerDocument.dir === 'rtl' }) },  this.svgContent ? (index.h("div", { class: "icon-inner", innerHTML: this.svgContent })) : (index.h("div", { class: "icon-inner" }))));
  }
  static get assetsDirs() { return ["svg"]; }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "name": ["loadIcon"],
    "src": ["loadIcon"],
    "icon": ["loadIcon"]
  }; }
};
const getIonMode = () => ( typeof document !== 'undefined' && document.documentElement.getAttribute('mode')) || 'md';
const createColorClasses = (color) => {
  return color
    ? {
      'ion-color': true,
      [`ion-color-${color}`]: true,
    }
    : null;
};
Icon.style = iconCss;

exports.dzu_alert = DzuAlert;
exports.dzu_bcrumb = DzuBcrumb;
exports.dzu_bcrumbs = DzuBcrumbs;
exports.dzu_bottomnav = DzuBottomnav;
exports.dzu_bottomnav_item = DzuBottomnavitem;
exports.dzu_icon = DzuIcon;
exports.ion_icon = Icon;
