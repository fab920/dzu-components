import{e,w as o,r as t,h as n,H as i,d as a}from"./p-05563fef.js";import{g as r}from"./p-94f4ba08.js";import{e as s}from"./p-9d46771f.js";const l=e=>{const o=document.querySelector(e+".ion-cloned-element");if(null!==o)return o;const t=document.createElement(e);return t.classList.add("ion-cloned-element"),t.style.setProperty("display","none"),document.body.appendChild(t),t},d=e=>{if(!e)return;const o=e.querySelectorAll("ion-toolbar");return{el:e,toolbars:Array.from(o).map((e=>{const o=e.querySelector("ion-title");return{el:e,background:e.shadowRoot.querySelector(".toolbar-background"),ionTitleEl:o,innerTitleEl:o?o.shadowRoot.querySelector(".toolbar-title"):null,ionButtonsEl:Array.from(e.querySelectorAll("ion-buttons"))||[]}}))||[]}},c=(e,o)=>{void 0===o?e.background.style.removeProperty("--opacity"):e.background.style.setProperty("--opacity",o.toString())},h=(e,o=!0)=>{o?e.el.classList.remove("header-collapse-condense-inactive"):e.el.classList.add("header-collapse-condense-inactive")},p=class{constructor(e){t(this,e),this.collapsibleHeaderInitialized=!1,this.translucent=!1}async componentDidLoad(){await this.checkCollapsibleHeader()}async componentDidUpdate(){await this.checkCollapsibleHeader()}disconnectedCallback(){this.destroyCollapsibleHeader()}async checkCollapsibleHeader(){const e="condense"===this.collapse,t=!(!e||"ios"!==r(this))&&e;if(!t&&this.collapsibleHeaderInitialized)this.destroyCollapsibleHeader();else if(t&&!this.collapsibleHeaderInitialized){const e=this.el.closest("ion-app,ion-page,.ion-page,page-inner"),t=e?e.querySelector("ion-content"):null;o((()=>{l("ion-title").size="large",l("ion-back-button")})),await this.setupCollapsibleHeader(t,e)}}destroyCollapsibleHeader(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=void 0),this.scrollEl&&this.contentScrollCallback&&(this.scrollEl.removeEventListener("scroll",this.contentScrollCallback),this.contentScrollCallback=void 0),this.collapsibleMainHeader&&(this.collapsibleMainHeader.classList.remove("header-collapse-main"),this.collapsibleMainHeader=void 0)}async setupCollapsibleHeader(t,n){if(!t||!n)return void console.error("ion-header requires a content to collapse, make sure there is an ion-content.");if("undefined"==typeof IntersectionObserver)return;this.scrollEl=await t.getScrollElement();const i=n.querySelectorAll("ion-header");if(this.collapsibleMainHeader=Array.from(i).find((e=>"condense"!==e.collapse)),!this.collapsibleMainHeader)return;const a=d(this.collapsibleMainHeader),r=d(this.el);a&&r&&(h(a,!1),a.toolbars.forEach((e=>{c(e,0)})),this.intersectionObserver=new IntersectionObserver((e=>{((e,t,n)=>{o((()=>{((e,o)=>{if(!e[0].isIntersecting)return;const t=e[0].intersectionRatio>.9?0:100*(1-e[0].intersectionRatio)/75;o.toolbars.forEach((e=>{c(e,1===t?void 0:t)}))})(e,t);const o=e[0],i=o.intersectionRect,a=i.width*i.height,r=0===a&&0==o.rootBounds.width*o.rootBounds.height,s=Math.abs(i.left-o.boundingClientRect.left),l=Math.abs(i.right-o.boundingClientRect.right);r||a>0&&(s>=5||l>=5)||(o.isIntersecting?(h(t,!1),h(n)):(0===i.x&&0===i.y||0!==i.width&&0!==i.height)&&(h(t),h(n,!1),c(t.toolbars[0])))}))})(e,a,r)}),{root:t,threshold:[.25,.3,.4,.5,.6,.7,.8,.9,1]}),this.intersectionObserver.observe(r.toolbars[r.toolbars.length-1].el),this.contentScrollCallback=()=>{((t,n,i)=>{e((()=>{const e=s(1,1+-t.scrollTop/500,1.1);null===i.querySelector("ion-refresher.refresher-native")&&o((()=>{((e=[],o=1,t=!1)=>{e.forEach((e=>{const n=e.ionTitleEl,i=e.innerTitleEl;n&&"large"===n.size&&(i.style.transition=t?"all 0.2s ease-in-out":"",i.style.transform=`scale3d(${o}, ${o}, 1)`)}))})(n.toolbars,e)}))}))})(this.scrollEl,r,t)},this.scrollEl.addEventListener("scroll",this.contentScrollCallback),o((()=>{void 0!==this.collapsibleMainHeader&&this.collapsibleMainHeader.classList.add("header-collapse-main")})),this.collapsibleHeaderInitialized=!0)}render(){const{translucent:e}=this,o=r(this);return n(i,{role:"banner",class:{[o]:!0,["header-"+o]:!0,"header-translucent":this.translucent,["header-collapse-"+(this.collapse||"none")]:!0,["header-translucent-"+o]:this.translucent}},"ios"===o&&e&&n("div",{class:"header-background"}),n("slot",null))}get el(){return a(this)}};p.style={ios:"ion-header{display:block;position:relative;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}.header-ios ion-toolbar:last-of-type{--border-width:0 0 0.55px}@supports (backdrop-filter: blur(0)){.header-background{left:0;right:0;top:0;bottom:0;position:absolute;backdrop-filter:saturate(180%) blur(20px)}.header-translucent-ios ion-toolbar{--opacity:.8}.header-collapse-condense-inactive .header-background{backdrop-filter:blur(20px)}}.header-ios.ion-no-border ion-toolbar:last-of-type{--border-width:0}.header-collapse-condense{z-index:9}.header-collapse-condense ion-toolbar{position:sticky;top:0}.header-collapse-condense ion-toolbar:first-of-type{padding-top:7px;z-index:1}.header-collapse-condense ion-toolbar{--background:var(--ion-background-color, #fff);z-index:0}.header-collapse-condense ion-toolbar ion-searchbar{height:48px;padding-top:0px;padding-bottom:13px}.header-collapse-main ion-toolbar.in-toolbar ion-title,.header-collapse-main ion-toolbar.in-toolbar ion-buttons{transition:all 0.2s ease-in-out}.header-collapse-condense-inactive:not(.header-collapse-condense) ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive:not(.header-collapse-condense) ion-toolbar.in-toolbar ion-buttons.buttons-collapse{opacity:0;pointer-events:none}.header-collapse-condense-inactive.header-collapse-condense ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive.header-collapse-condense ion-toolbar.in-toolbar ion-buttons.buttons-collapse{visibility:hidden}",md:'ion-header{display:block;position:relative;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}.header-md::after{left:0;bottom:-5px;background-position:left 0 top -2px;position:absolute;width:100%;height:5px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==);background-repeat:repeat-x;content:""}[dir=rtl] .header-md::after,:host-context([dir=rtl]) .header-md::after{left:unset;right:unset;right:0}[dir=rtl] .header-md::after,:host-context([dir=rtl]) .header-md::after{background-position:right 0 top -2px}.header-collapse-condense{display:none}.header-md.ion-no-border::after{display:none}'};export{p as ion_header}