import{i as t,L as a,f as i,x as l,a as n,S as o}from"./themeUtils-B7nSQ0Ik.js";import{E as s,B as c,f as r}from"./label-CabJmCVR.js";import"./main-D_jCcUNd.js";import"./preload-helper-ExcqyqRp.js";import"./intl-Bp-1PIwe.js";import"./uuid-Cl5lrJ4c.js";import"./dom-C1FrJZto.js";/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.0.3 */const d={container:"container"},h=t`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex}:host([alignment=start]){text-align:start}:host([alignment=end]){text-align:end}:host([alignment=center]){text-align:center}:host([scale=s]) .container{gap:.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;margin-block-end:var(--calcite-label-margin-bottom, .5rem)}:host([scale=m]) .container{gap:.5rem;font-size:var(--calcite-font-size--1);line-height:1rem;margin-block-end:var(--calcite-label-margin-bottom, .75rem)}:host([scale=l]) .container{gap:.5rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;margin-block-end:var(--calcite-label-margin-bottom, 1rem)}:host .container{margin-inline:0px;margin-block-start:0px;inline-size:100%;line-height:1.375;color:var(--calcite-color-text-1);color:var(--calcite-label-text-color, var(--calcite-color-text-1))}:host([layout=default]) .container{display:flex;flex-direction:column}:host([layout=inline]) .container,:host([layout=inline-space-between]) .container{display:flex;flex-direction:row;align-items:center;gap:.5rem}:host([layout=inline][scale=l]) .container{gap:.75rem}:host([layout=inline-space-between]) .container{justify-content:space-between}:host([disabled])>.container{opacity:var(--calcite-opacity-disabled)}:host([disabled]) ::slotted(*[disabled]),:host([disabled]) ::slotted(*[disabled] *){--tw-bg-opacity: 1}:host([disabled]) ::slotted(calcite-input-message:not([active])){--tw-bg-opacity: 0}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}`;class m extends a{constructor(){super(),this.alignment="start",this.layout="default",this.scale="m",this.calciteInternalLabelClick=i({bubbles:!1,cancelable:!1}),this.listen("click",this.labelClickHandler)}static{this.properties={alignment:3,for:3,layout:3,scale:3}}static{this.styles=h}connectedCallback(){super.connectedCallback(),document.dispatchEvent(new CustomEvent(s))}willUpdate(e){e.has("for")&&c(this.el)}disconnectedCallback(){super.disconnectedCallback(),document.dispatchEvent(new CustomEvent(r))}labelClickHandler(e){window.getSelection()?.type!=="Range"&&this.calciteInternalLabelClick.emit({sourceEvent:e})}render(){return l`<div class=${n(d.container)}><slot></slot></div>`}}o("calcite-label",m);export{m as Label};
