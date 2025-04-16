import{p as l,H as o,c as s,h as t,a as c}from"./themeUtils-DEe8suzU.js";import{a as r,l as d,b as h}from"./label-DUBOb5uX.js";import"./main-vIJpOdvB.js";import"./preload-helper-ExcqyqRp.js";import"./uuid-Cl5lrJ4c.js";import"./dom-BveoWHh2.js";import"./component-6CIDVndn.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const m={container:"container"},b=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex}:host([alignment=start]){text-align:start}:host([alignment=end]){text-align:end}:host([alignment=center]){text-align:center}:host([scale=s]) .container{gap:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;margin-block-end:var(--calcite-label-margin-bottom, 0.5rem)}:host([scale=m]) .container{gap:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem;margin-block-end:var(--calcite-label-margin-bottom, 0.75rem)}:host([scale=l]) .container{gap:0.5rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;margin-block-end:var(--calcite-label-margin-bottom, 1rem)}:host .container{margin-inline:0px;margin-block-start:0px;inline-size:100%;line-height:1.375;color:var(--calcite-color-text-1)}:host([layout=default]) .container{display:flex;flex-direction:column}:host([layout=inline]) .container,:host([layout=inline-space-between]) .container{display:flex;flex-direction:row;align-items:center;gap:0.5rem}:host([layout=inline][scale=l]) .container{gap:0.75rem}:host([layout=inline-space-between]) .container{justify-content:space-between}:host([disabled])>.container{opacity:var(--calcite-opacity-disabled)}:host([disabled]) ::slotted(*[disabled]),:host([disabled]) ::slotted(*[disabled] *){--tw-bg-opacity:1}:host([disabled]) ::slotted(calcite-input-message:not([active])){--tw-bg-opacity:0}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}",p=b,n=l(class extends o{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalLabelClick=s(this,"calciteInternalLabelClick",2),this.labelClickHandler=e=>{window.getSelection()?.type!=="Range"&&this.calciteInternalLabelClick.emit({sourceEvent:e})},this.alignment="start",this.for=void 0,this.scale="m",this.layout="default"}handleForChange(){r(this.el)}connectedCallback(){document.dispatchEvent(new CustomEvent(d))}disconnectedCallback(){document.dispatchEvent(new CustomEvent(h))}render(){return t(c,{key:"c3eff09792519c9e5a76ee28e3754db83b536f99",onClick:this.labelClickHandler},t("div",{key:"387902edd9b59be290f95ad6c2721584037d7256",class:m.container},t("slot",{key:"b54d782522e95323333040e40e1a6dd06b52a575"})))}get el(){return this}static get watchers(){return{for:["handleForChange"]}}static get style(){return p}},[1,"calcite-label",{alignment:[513],for:[513],scale:[513],layout:[513]},void 0,{for:["handleForChange"]}]);function a(){if(typeof customElements>"u")return;["calcite-label"].forEach(e=>{switch(e){case"calcite-label":customElements.get(e)||customElements.define(e,n);break}})}a();/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const x=n,w=a;export{x as CalciteLabel,w as defineCustomElement};
