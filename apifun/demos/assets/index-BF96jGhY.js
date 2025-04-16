import"./index-DVpo7yv5.js";import"./index-DUdLurid.js";import"./index-DzbeT40y.js";import"./customElement-CEXIB3lM.js";import"./customElement-Dn3AcUNI.js";import{n as t}from"./customElement-K9EKJiUZ.js";import{i as w,L as v,f as c,x as d,a as B,E as x,S as C}from"./themeUtils-2piyLhQV.js";import{n as h}from"./ref-xQiEGQWW.js";import{i as y}from"./keyed-B2gO5gxN.js";import{b as I}from"./dom-D8XNoqp_.js";import{m as E,p as P}from"./interactive-BvAgEtPI.js";import{r as F}from"./loadable-iEaxUBY1.js";import{s as A}from"./useT9n-DZQIKPQs.js";import"./guid-ejniuQmw.js";import"./observers-DNEw4dK8.js";import"./component-DLLD6FTh.js";import"./floating-ui-hoSLidgF.js";import"./debounce-D0G5qrda.js";import"./openCloseComponent-CK6Jda6g.js";import"./static-DNbFDL9c.js";import"./FloatingArrow-B--J11Kt.js";import"./key-CZcQa38B.js";import"./main-CcTJZah4.js";import"./preload-helper-ExcqyqRp.js";import"./intl-DiBhrFNw.js";import"./uuid-Cl5lrJ4c.js";/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.0.3 */const S={backButton:"back-button"},p={backLeft:"chevron-left",backRight:"chevron-right"},o={actionBar:"action-bar",alerts:"alerts",contentTop:"content-top",contentBottom:"content-bottom",headerActionsStart:"header-actions-start",headerActionsEnd:"header-actions-end",headerMenuActions:"header-menu-actions",headerContent:"header-content",fab:"fab",footer:"footer",footerActions:"footer-actions",footerEnd:"footer-end",footerStart:"footer-start"},T=w`:host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:none;inline-size:100%;flex:1 1 auto;overflow:hidden}:host([selected]){display:flex}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.back-button{border-width:0px;border-style:solid;border-inline-end-width:1px;border-color:var(--calcite-flow-border-color, var(--calcite-color-border-3))}calcite-panel{--calcite-panel-background-color: var(--calcite-flow-background-color);--calcite-panel-border-color: var(--calcite-flow-border-color, var(--calcite-flow-item-header-border-block-end));--calcite-panel-corner-radius: var(--calcite-flow-corner-radius);--calcite-panel-description-text-color: var(--calcite-flow-description-text-color);--calcite-panel-footer-background-color: var(--calcite-flow-footer-background-color);--calcite-panel-footer-space: var(--calcite-flow-footer-space, var(--calcite-flow-item-footer-padding));--calcite-panel-header-action-background-color-hover: var(--calcite-flow-header-action-background-color-hover);--calcite-panel-header-action-background-color-press: var(--calcite-flow-header-action-background-color-press);--calcite-panel-header-action-background-color: var(--calcite-flow-header-action-background-color);--calcite-panel-header-action-indicator-color: var(--calcite-flow-header-action-indicator-color);--calcite-panel-header-action-text-color-press: var(--calcite-flow-header-action-text-color-press);--calcite-panel-header-action-text-color: var(--calcite-flow-header-action-text-color);--calcite-panel-header-background-color: var(--calcite-flow-header-background-color);--calcite-panel-header-content-space: var(--calcite-flow-header-content-space);--calcite-panel-heading-text-color: var(--calcite-flow-heading-text-color);--calcite-panel-space: var(--calcite-flow-space)}:host([hidden]){display:none}[hidden]{display:none}`;class L extends v{constructor(){super(...arguments),this.closable=!1,this.closed=!1,this.collapseDirection="down",this.collapsed=!1,this.collapsible=!1,this.disabled=!1,this.loading=!1,this.menuOpen=!1,this.messages=A(),this.overlayPositioning="absolute",this.scale="m",this.selected=!1,this.showBackButton=!1,this.calciteFlowItemBack=c(),this.calciteFlowItemClose=c({cancelable:!1}),this.calciteFlowItemScroll=c({cancelable:!1}),this.calciteFlowItemToggle=c({cancelable:!1}),this.calciteInternalFlowItemChange=c({cancelable:!1})}static{this.properties={beforeBack:0,beforeClose:0,closable:7,closed:7,collapseDirection:1,collapsed:7,collapsible:7,description:1,disabled:7,heading:1,headingLevel:11,loading:7,menuOpen:7,messageOverrides:0,overlayPositioning:3,scale:3,selected:7,showBackButton:5}}static{this.styles=T}async scrollContentTo(e){await this.containerEl?.scrollContentTo(e)}async setFocus(){await F(this);const{backButtonEl:e,containerEl:a}=this;if(e)return e.setFocus();if(a)return a.setFocus()}async load(){}willUpdate(e){e.has("selected")&&(this.hasUpdated||this.selected!==!1)&&this.calciteInternalFlowItemChange.emit()}updated(){E(this)}loaded(){}handleInternalPanelScroll(e){e.target===this.containerEl&&(e.stopPropagation(),this.calciteFlowItemScroll.emit())}handleInternalPanelClose(e){e.target===this.containerEl&&(e.stopPropagation(),this.closed=!0,this.calciteFlowItemClose.emit())}handleInternalPanelToggle(e){e.target===this.containerEl&&(e.stopPropagation(),this.collapsed=e.target.collapsed,this.calciteFlowItemToggle.emit())}backButtonClick(){this.calciteFlowItemBack.emit()}setBackRef(e){this.backButtonEl=e}setContainerRef(e){this.containerEl=e}renderBackButton(){const{el:e}=this,a=I(e)==="rtl",{showBackButton:r,backButtonClick:n,messages:s}=this,l=s.back,i=a?p.backRight:p.backLeft;return r?y("flow-back-button",d`<calcite-action .ariaLabel=${l} class=${B(S.backButton)} .icon=${i} @click=${n} scale=s slot=header-actions-start .text=${l} title=${l??x} ${h(this.setBackRef)}></calcite-action>`):null}render(){const{collapsed:e,collapseDirection:a,collapsible:r,closable:n,closed:s,description:l,disabled:i,heading:b,headingLevel:m,loading:f,menuOpen:g,messages:$,overlayPositioning:u,beforeClose:k}=this;return P({disabled:i,children:d`<calcite-panel .beforeClose=${k} .closable=${n} .closed=${s} .collapseDirection=${a} .collapsed=${e} .collapsible=${r} .description=${l} .disabled=${i} .heading=${b} .headingLevel=${m} .loading=${f} .menuOpen=${g} .messageOverrides=${$} @calcitePanelClose=${this.handleInternalPanelClose} @calcitePanelScroll=${this.handleInternalPanelScroll} @calcitePanelToggle=${this.handleInternalPanelToggle} .overlayPositioning=${u} .scale=${this.scale} ${h(this.setContainerRef)}>${this.renderBackButton()}<slot name=${o.actionBar} slot=${t.actionBar}></slot><slot name=${o.alerts} slot=${t.alerts}></slot><slot name=${o.headerActionsStart} slot=${t.headerActionsStart}></slot><slot name=${o.headerActionsEnd} slot=${t.headerActionsEnd}></slot><slot name=${o.headerContent} slot=${t.headerContent}></slot><slot name=${o.headerMenuActions} slot=${t.headerMenuActions}></slot><slot name=${o.fab} slot=${t.fab}></slot><slot name=${o.contentTop} slot=${t.contentTop}></slot><slot name=${o.contentBottom} slot=${t.contentBottom}></slot><slot name=${o.footerStart} slot=${t.footerStart}></slot><slot name=${o.footer} slot=${t.footer}></slot><slot name=${o.footerEnd} slot=${t.footerEnd}></slot><slot name=${o.footerActions} slot=${t.footerActions}></slot><slot></slot></calcite-panel>`})}}C("calcite-flow-item",L);export{L as FlowItem};
