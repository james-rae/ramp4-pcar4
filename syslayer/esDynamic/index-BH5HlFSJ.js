import{i as a,L as i,f as l,x as n,a as s,S as o}from"./themeUtils-U8eccLDb.js";import{E as c,B as r,f as d}from"./label-BZ3XaFbb.js";const h={container:"container"},b=a`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex}:host([alignment=start]){text-align:start}:host([alignment=end]){text-align:end}:host([alignment=center]){text-align:center}:host([scale=s]) .container{gap:.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;margin-block-end:var(--calcite-label-margin-bottom, .5rem)}:host([scale=m]) .container{gap:.5rem;font-size:var(--calcite-font-size--1);line-height:1rem;margin-block-end:var(--calcite-label-margin-bottom, .75rem)}:host([scale=l]) .container{gap:.5rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;margin-block-end:var(--calcite-label-margin-bottom, 1rem)}:host .container{margin-inline:0px;margin-block-start:0px;inline-size:100%;line-height:1.375;color:var(--calcite-color-text-1);color:var(--calcite-label-text-color, var(--calcite-color-text-1))}:host([layout=default]) .container{display:flex;flex-direction:column}:host([layout=inline]) .container,:host([layout=inline-space-between]) .container{display:flex;flex-direction:row;align-items:center;gap:.5rem}:host([layout=inline][scale=l]) .container{gap:.75rem}:host([layout=inline-space-between]) .container{justify-content:space-between}:host([disabled])>.container{opacity:var(--calcite-opacity-disabled)}:host([disabled]) ::slotted(*[disabled]),:host([disabled]) ::slotted(*[disabled] *){--tw-bg-opacity: 1}:host([disabled]) ::slotted(calcite-input-message:not([active])){--tw-bg-opacity: 0}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}`;class t extends i{constructor(){super(),this.alignment="start",this.layout="default",this.scale="m",this.calciteInternalLabelClick=l({bubbles:!1,cancelable:!1}),this.listen("click",this.labelClickHandler)}static{this.properties={alignment:3,for:3,layout:3,scale:3}}static{this.styles=b}connectedCallback(){super.connectedCallback(),document.dispatchEvent(new CustomEvent(c))}willUpdate(e){e.has("for")&&r(this.el)}disconnectedCallback(){super.disconnectedCallback(),document.dispatchEvent(new CustomEvent(d))}labelClickHandler(e){window.getSelection()?.type!=="Range"&&this.calciteInternalLabelClick.emit({sourceEvent:e})}render(){return n`<div class=${s(h.container)}><slot></slot></div>`}}o("calcite-label",t);export{t as Label};
