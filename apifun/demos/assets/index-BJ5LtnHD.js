import"./index-DVpo7yv5.js";import"./index-DUdLurid.js";import"./index-DzbeT40y.js";import{e as a}from"./customElement-CEXIB3lM.js";import{i as m,L as h,x as i,a as g,S as x}from"./themeUtils-2piyLhQV.js";import{r as b}from"./loadable-iEaxUBY1.js";import{a as $,u as y}from"./dom-D8XNoqp_.js";import{s as f}from"./useT9n-DZQIKPQs.js";/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.0.3 */const s={menuActions:"menu-actions",menuTooltip:"menu-tooltip"},v={menu:"ellipsis"},M={container:"container"};/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.0.3 */const O=m`:host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{display:flex;flex-direction:column;padding:0;background-color:transparent;border-color:var(--calcite-action-group-border-color, var(--calcite-color-border-3));border-style:solid;border-width:0}.container{display:flex;flex-grow:1;flex-direction:column}:host([columns="1"]){--calcite-internal-action-group-columns: 1}:host([columns="2"]){--calcite-internal-action-group-columns: 2}:host([columns="3"]){--calcite-internal-action-group-columns: 3}:host([columns="4"]){--calcite-internal-action-group-columns: 4}:host([columns="5"]){--calcite-internal-action-group-columns: 5}:host([columns="6"]){--calcite-internal-action-group-columns: 6}:host(:first-child){padding-block-start:0px}:host([layout=horizontal]),:host([layout=horizontal]) .container{flex-direction:row}:host([layout=grid]){display:grid}:host([layout=grid]) .container{display:grid;place-content:stretch;background-color:transparent;grid-template-columns:repeat(var(--calcite-action-group-columns, var(--calcite-internal-action-group-columns, 3)),auto);gap:var(--calcite-action-group-gap, 1px);padding:var(--calcite-action-group-gap, 1px)}:host([layout=horizontal]) ::slotted(calcite-action-group){border-inline-end:var(--calcite-size-px)}:host([hidden]){display:none}[hidden]{display:none}`;class l extends h{constructor(){super(...arguments),this.hasMenuActions=!1,this.expanded=!1,this.layout="vertical",this.menuOpen=!1,this.messages=f(),this.overlayPositioning="absolute",this.scale="m"}static{this.properties={hasMenuActions:16,columns:11,expanded:7,label:1,layout:3,menuFlipPlacements:0,menuOpen:7,menuPlacement:3,messageOverrides:0,overlayPositioning:3,scale:3}}static{this.shadowRootOptions={mode:"open",delegatesFocus:!0}}static{this.styles=O}async setFocus(){await b(this),$(this.el)}async load(){}willUpdate(t){t.has("expanded")&&(this.hasUpdated||this.expanded!==!1)&&(this.menuOpen=!1)}loaded(){}setMenuOpen(t){this.menuOpen=!!t.currentTarget.open}handleMenuActionsSlotChange(t){this.hasMenuActions=y(t)}renderMenu(){const{expanded:t,menuOpen:c,scale:o,layout:e,messages:n,overlayPositioning:r,hasMenuActions:u,menuFlipPlacements:p,menuPlacement:d}=this;return i`<calcite-action-menu .expanded=${t} .flipPlacements=${p??(e==="horizontal"?["top","bottom"]:["left","right"])} .hidden=${!u} .label=${n.more} @calciteActionMenuOpen=${this.setMenuOpen} .open=${c} .overlayPositioning=${r} .placement=${d??(e==="horizontal"?"bottom-start":"leading-start")} .scale=${o}><calcite-action .icon=${v.menu} .scale=${o} slot=${a.trigger} .text=${n.more} .textEnabled=${t}></calcite-action><slot name=${s.menuActions} @slotchange=${this.handleMenuActionsSlotChange}></slot><slot name=${s.menuTooltip} slot=${a.tooltip}></slot></calcite-action-menu>`}render(){return i`<div .ariaLabel=${this.label} class=${g(M.container)} role=group><slot></slot>${this.renderMenu()}</div>`}}x("calcite-action-group",l);const C=Object.freeze(Object.defineProperty({__proto__:null,ActionGroup:l},Symbol.toStringTag,{value:"Module"}));export{C as i,s as n};
