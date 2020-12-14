import{r as t,c as i,w as s,h as o,H as e,d as n}from"./p-05563fef.js";import{c as a,g as r}from"./p-94f4ba08.js";import{p as h}from"./p-9d46771f.js";import{c as l,h as c}from"./p-7840618d.js";const d=class{constructor(s){t(this,s),this.ionChange=i(this,"ionChange",7),this.ionSelect=i(this,"ionSelect",7),this.ionStyle=i(this,"ionStyle",7),this.didInit=!1,this.activated=!1,this.disabled=!1,this.scrollable=!1,this.swipeGesture=!0,this.onClick=t=>{const i=t.target,s=this.checked;"ION-SEGMENT"!==i.tagName&&(this.value=i.value,!this.scrollable&&this.swipeGesture||(s?this.checkButton(s,i):this.setCheckedClasses()),this.checked=i)}}colorChanged(t,i){(void 0===i&&void 0!==t||void 0!==i&&void 0===t)&&this.emitStyle()}swipeGestureChanged(){this.gestureChanged()}valueChanged(t,i){this.ionSelect.emit({value:t}),(""!==i||this.didInit)&&(this.activated?this.valueAfterGesture=t:this.ionChange.emit({value:t}))}disabledChanged(){this.gestureChanged();const t=this.getButtons();for(const i of t)i.disabled=this.disabled}gestureChanged(){this.gesture&&this.gesture.enable(!this.scrollable&&!this.disabled&&this.swipeGesture)}connectedCallback(){this.emitStyle()}componentWillLoad(){this.emitStyle()}async componentDidLoad(){this.setCheckedClasses(),this.gesture=(await import("./p-101feae9.js")).createGesture({el:this.el,gestureName:"segment",gesturePriority:100,threshold:0,passive:!1,onStart:t=>this.onStart(t),onMove:t=>this.onMove(t),onEnd:t=>this.onEnd(t)}),this.gestureChanged(),this.disabled&&this.disabledChanged(),this.didInit=!0}onStart(t){this.activate(t)}onMove(t){this.setNextIndex(t)}onEnd(t){this.setActivated(!1);const i=this.setNextIndex(t,!0);t.event.stopImmediatePropagation(),i&&this.addRipple(t);const s=this.valueAfterGesture;void 0!==s&&(this.ionChange.emit({value:s}),this.valueAfterGesture=void 0)}getButtons(){return Array.from(this.el.querySelectorAll("ion-segment-button"))}addRipple(t){if(!a.getBoolean("animated",!0)||!a.getBoolean("rippleEffect",!0))return;const i=this.getButtons().find((t=>t.value===this.value)),s=(i.shadowRoot||i).querySelector("ion-ripple-effect");if(!s)return;const{x:o,y:e}=h(t.event);s.addRipple(o,e).then((t=>t()))}setActivated(t){this.getButtons().forEach((i=>{t?i.classList.add("segment-button-activated"):i.classList.remove("segment-button-activated")})),this.activated=t}activate(t){const i=t.event.target,s=this.getButtons().find((t=>t.value===this.value));"ION-SEGMENT-BUTTON"===i.tagName&&(s||(this.value=i.value,this.setCheckedClasses()),this.value===i.value&&this.setActivated(!0))}getIndicator(t){return(t.shadowRoot||t).querySelector(".segment-button-indicator")}checkButton(t,i){const o=this.getIndicator(t),e=this.getIndicator(i);if(null===o||null===e)return;const n=o.getBoundingClientRect(),a=e.getBoundingClientRect(),r=`translate3d(${n.left-a.left}px, 0, 0) scaleX(${n.width/a.width})`;s((()=>{e.classList.remove("segment-button-indicator-animated"),e.style.setProperty("transform",r),e.getBoundingClientRect(),e.classList.add("segment-button-indicator-animated"),e.style.setProperty("transform","")})),this.value=i.value,this.setCheckedClasses()}setCheckedClasses(){const t=this.getButtons(),i=t.findIndex((t=>t.value===this.value))+1;this.checked=t.find((t=>t.value===this.value));for(const i of t)i.classList.remove("segment-button-after-checked");i<t.length&&t[i].classList.add("segment-button-after-checked")}setNextIndex(t,i=!1){const s="rtl"===document.dir,o=this.activated,e=this.getButtons(),n=e.findIndex((t=>t.value===this.value)),a=e[n];let r,h;if(-1===n)return;const l=a.getBoundingClientRect(),c=l.left,d=l.width,g=t.currentX,u=document.elementFromPoint(g,l.top+l.height/2);if(o&&!i){if(s?g>c+d:g<c){const t=n-1;t>=0&&(h=t)}else if((s?g<c:g>c+d)&&o&&!i){const t=n+1;t<e.length&&(h=t)}void 0===h||e[h].disabled||(r=e[h])}if(!o&&i&&(r=u),null!=r){if("ION-SEGMENT"===r.tagName)return!1;a!==r&&this.checkButton(a,r)}return!0}emitStyle(){this.ionStyle.emit({segment:!0})}render(){const t=r(this);return o(e,{onClick:this.onClick,class:l(this.color,{[t]:!0,"in-toolbar":c("ion-toolbar",this.el),"in-toolbar-color":c("ion-toolbar[color]",this.el),"segment-activated":this.activated,"segment-disabled":this.disabled,"segment-scrollable":this.scrollable})},o("slot",null))}get el(){return n(this)}static get watchers(){return{color:["colorChanged"],swipeGesture:["swipeGestureChanged"],value:["valueChanged"],disabled:["disabledChanged"]}}};d.style={ios:":host{--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:flex;position:relative;align-items:stretch;justify-content:center;width:100%;background:var(--background);font-family:var(--ion-font-family, inherit);text-align:center;contain:paint;user-select:none}:host(.segment-scrollable){justify-content:start;width:auto;overflow-x:auto}:host(.segment-scrollable::-webkit-scrollbar){display:none}:host{--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.065);border-radius:8px;overflow:hidden;z-index:0}:host(.ion-color){background:rgba(var(--ion-color-base-rgb), 0.065)}:host(.in-toolbar){margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;width:auto}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host(.in-toolbar){margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}:host(.in-toolbar:not(.ion-color)){background:var(--ion-toolbar-segment-background, var(--background))}:host(.in-toolbar-color:not(.ion-color)){background:rgba(var(--ion-color-contrast-rgb), 0.11)}",md:":host{--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:flex;position:relative;align-items:stretch;justify-content:center;width:100%;background:var(--background);font-family:var(--ion-font-family, inherit);text-align:center;contain:paint;user-select:none}:host(.segment-scrollable){justify-content:start;width:auto;overflow-x:auto}:host(.segment-scrollable::-webkit-scrollbar){display:none}:host{--background:transparent}:host(.segment-scrollable) ::slotted(ion-segment-button){min-width:auto}"};export{d as ion_segment}