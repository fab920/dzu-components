import"./p-05563fef.js";import"./p-9d46771f.js";import{c as t}from"./p-50b429c0.js";import{g as o}from"./p-954e7ed5.js";const r=(r,i)=>{const a="back"===i.direction,e=i.leavingEl,s=o(i.enteringEl),p=s.querySelector("ion-toolbar"),n=t();if(n.addElement(s).fill("both").beforeRemoveClass("ion-page-invisible"),a?n.duration(i.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):n.duration(i.duration||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform","translateY(40px)","translateY(0px)").fromTo("opacity",.01,1),p){const o=t();o.addElement(p),n.addAnimation(o)}if(e&&a){n.duration(i.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)");const r=t();r.addElement(o(e)).onFinish((t=>{1===t&&r.elements.length>0&&r.elements[0].style.setProperty("display","none")})).fromTo("transform","translateY(0px)","translateY(40px)").fromTo("opacity",1,0),n.addAnimation(r)}return n};export{r as mdTransitionAnimation}