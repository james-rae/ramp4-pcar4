import{h as o}from"./themeUtils-DFPvIuq9.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */function c(){const{disabled:e}=this;e||HTMLElement.prototype.click.call(this)}function i(e){e.target.disabled&&e.preventDefault()}const r=["mousedown","mouseup","click"];function a(e){e.target.disabled&&(e.stopImmediatePropagation(),e.preventDefault())}const n={capture:!0};function b(e){if(e.disabled){e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),s(e);return}d(e),e.el.removeAttribute("aria-disabled")}function s(e){e.el.click=c,l(e.el)}function l(e){e.addEventListener("pointerdown",i,n),r.forEach(t=>e.addEventListener(t,a,n))}function d(e){delete e.el.click,u(e.el)}function u(e){e.removeEventListener("pointerdown",i,n),r.forEach(t=>e.removeEventListener(t,a,n))}const f={container:"interaction-container"},E=({disabled:e},t)=>o("div",{class:f.container,inert:e},...t);export{E as I,b as u};