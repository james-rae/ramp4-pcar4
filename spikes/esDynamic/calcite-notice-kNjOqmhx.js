import{p as f,H as p,c as n,h as t}from"./themeUtils-Cwl6dIdv.js";import{c as u,d as b}from"./conditionalSlot-KG25CTrO.js";import{h as c,j as k}from"./dom-N58V0tYi.js";import{s as v,a as x,c as w}from"./loadable-DVGoW3aY.js";import{c as y,d as z}from"./locale--tRYDCs6.js";import{c as C,d as E,s as N,u as B}from"./t9n-C-jub_1f.js";import{o as s}from"./openCloseComponent-BmtXizyQ.js";import{g as a}from"./component-CWGf1hug.js";import{d as O}from"./icon-D0PHd2nS.js";const l={brand:"lightbulb",danger:"exclamationMarkTriangle",info:"information",success:"checkCircle",warning:"exclamationMarkTriangle"},o={title:"title",message:"message",link:"link",actionsEnd:"actions-end"},i={actionsEnd:"actions-end",close:"notice-close",container:"container",content:"notice-content",icon:"notice-icon"},q=`:host([scale=s]){--calcite-notice-spacing-token-small:0.5rem;--calcite-notice-spacing-token-large:0.75rem}:host([scale=s]) .container slot[name=title]::slotted(*),:host([scale=s]) .container *::slotted([slot=title]){margin-block:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=s]) .container slot[name=message]::slotted(*),:host([scale=s]) .container *::slotted([slot=message]){margin-block:0.125rem;font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) ::slotted(calcite-link){margin-block:0.125rem;font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) .notice-close{padding:0.5rem}:host([scale=m]){--calcite-notice-spacing-token-small:0.75rem;--calcite-notice-spacing-token-large:1rem}:host([scale=m]) .container slot[name=title]::slotted(*),:host([scale=m]) .container *::slotted([slot=title]){margin-block:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=m]) .container slot[name=message]::slotted(*),:host([scale=m]) .container *::slotted([slot=message]){margin-block:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) ::slotted(calcite-link){margin-block:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=l]){--calcite-notice-spacing-token-small:1rem;--calcite-notice-spacing-token-large:1.25rem}:host([scale=l]) .container slot[name=title]::slotted(*),:host([scale=l]) .container *::slotted([slot=title]){margin-block:0.125rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host([scale=l]) .container slot[name=message]::slotted(*),:host([scale=l]) .container *::slotted([slot=message]){margin-block:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) ::slotted(calcite-link){margin-block:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([width=auto]){--calcite-notice-width:auto}:host([width=half]){--calcite-notice-width:50%}:host([width=full]){--calcite-notice-width:100%}:host{margin-inline:auto;display:none;max-inline-size:100%;align-items:center;inline-size:var(--calcite-notice-width)}.container{pointer-events:none;margin-block:0px;box-sizing:border-box;display:flex;inline-size:100%;background-color:var(--calcite-color-foreground-1);opacity:0;overflow:hidden;max-block-size:0;transition-property:opacity, max-block-size;transition-duration:var(--calcite-animation-timing);text-align:start;border-inline-start:var(--calcite-border-width-md) solid;box-shadow:0 0 0 0 transparent}.notice-close{outline-color:transparent}.notice-close:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}:host{display:flex}:host([open]) .container{pointer-events:auto;max-block-size:100%;align-items:center;opacity:1;--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);overflow:visible}.container slot[name=title]::slotted(*),.container *::slotted([slot=title]){margin:0px;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1)}.container slot[name=message]::slotted(*),.container *::slotted([slot=message]){margin:0px;display:inline;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-2);margin-inline-end:var(--calcite-notice-spacing-token-small)}.notice-content{box-sizing:border-box;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-inline:var(--calcite-notice-spacing-token-large);flex:0 0 auto;display:flex;min-inline-size:0px;flex-direction:column;overflow-wrap:break-word;flex:1 1 0;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:0 var(--calcite-notice-spacing-token-small)}.notice-content:first-of-type:not(:only-child){padding-inline-start:var(--calcite-notice-spacing-token-large)}.notice-content:only-of-type{padding-block:var(--calcite-notice-spacing-token-small);padding-inline:var(--calcite-notice-spacing-token-large)}.notice-icon{display:flex;align-items:center;box-sizing:border-box;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:var(--calcite-notice-spacing-token-large);flex:0 0 auto}.notice-close{display:flex;cursor:pointer;align-items:center;align-self:stretch;border-style:none;background-color:transparent;color:var(--calcite-color-text-3);outline:2px solid transparent;outline-offset:2px;box-sizing:border-box;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:var(--calcite-notice-spacing-token-large);flex:0 0 auto;-webkit-appearance:none}.notice-close:hover,.notice-close:focus{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-1)}.notice-close:active{background-color:var(--calcite-color-foreground-3)}.actions-end{display:flex;align-self:stretch}:host([kind=brand]) .container{border-color:var(--calcite-color-brand)}:host([kind=brand]) .container .notice-icon{color:var(--calcite-color-brand)}:host([kind=info]) .container{border-color:var(--calcite-color-status-info)}:host([kind=info]) .container .notice-icon{color:var(--calcite-color-status-info)}:host([kind=danger]) .container{border-color:var(--calcite-color-status-danger)}:host([kind=danger]) .container .notice-icon{color:var(--calcite-color-status-danger)}:host([kind=success]) .container{border-color:var(--calcite-color-status-success)}:host([kind=success]) .container .notice-icon{color:var(--calcite-color-status-success)}:host([kind=warning]) .container{border-color:var(--calcite-color-status-warning)}:host([kind=warning]) .container .notice-icon{color:var(--calcite-color-status-warning)}:host([hidden]){display:none}[hidden]{display:none}`,L=q,r=f(class extends p{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteNoticeBeforeClose=n(this,"calciteNoticeBeforeClose",6),this.calciteNoticeBeforeOpen=n(this,"calciteNoticeBeforeOpen",6),this.calciteNoticeClose=n(this,"calciteNoticeClose",6),this.calciteNoticeOpen=n(this,"calciteNoticeOpen",6),this.setTransitionEl=e=>{this.transitionEl=e},this.close=()=>{this.open=!1},this.openTransitionProp="opacity",this.open=!1,this.kind="brand",this.closable=!1,this.icon=void 0,this.iconFlipRtl=!1,this.scale="m",this.width="auto",this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale=void 0,this.defaultMessages=void 0}openHandler(){s(this)}onMessagesChange(){}updateRequestedIcon(){this.requestedIcon=c(l,this.icon,this.kind)}connectedCallback(){u(this),y(this),C(this)}disconnectedCallback(){b(this),z(this),E(this)}async componentWillLoad(){v(this),this.requestedIcon=c(l,this.icon,this.kind),await N(this),this.open&&s(this)}componentDidLoad(){x(this)}render(){const{el:e}=this,h=t("button",{key:"52f9306ebe945398929f68fe66615359836ba2d8","aria-label":this.messages.close,class:i.close,onClick:this.close,ref:m=>this.closeButton=m},t("calcite-icon",{key:"f3601ac9547c73219661eebc7e7470db5dee7b52",icon:"x",scale:a(this.scale)})),g=k(e,o.actionsEnd);return t("div",{key:"3f8117ff7cdd08c92ce804ef4ac8af83003156a4",class:i.container,ref:this.setTransitionEl},this.requestedIcon?t("div",{class:i.icon},t("calcite-icon",{flipRtl:this.iconFlipRtl,icon:this.requestedIcon,scale:a(this.scale)})):null,t("div",{key:"1b614ee86618bd5ce6e8834b466baf7d2564b5a1",class:i.content},t("slot",{key:"19467ed9718a78c7530c2a08c727028d565dee7b",name:o.title}),t("slot",{key:"191e71caf2f2147c62fd6b73602e41d95dc27558",name:o.message}),t("slot",{key:"d4fbf2b8aaa980cd24c5be89c6c8a36d091658f3",name:o.link})),g?t("div",{class:i.actionsEnd},t("slot",{name:o.actionsEnd})):null,this.closable?h:null)}async setFocus(){await w(this);const e=this.el.querySelector("calcite-link");if(!(!this.closeButton&&!e)){if(e)return e.setFocus();this.closeButton&&this.closeButton.focus()}}onBeforeClose(){this.calciteNoticeBeforeClose.emit()}onBeforeOpen(){this.calciteNoticeBeforeOpen.emit()}onClose(){this.calciteNoticeClose.emit()}onOpen(){this.calciteNoticeOpen.emit()}effectiveLocaleChange(){B(this,this.effectiveLocale)}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{open:["openHandler"],messageOverrides:["onMessagesChange"],icon:["updateRequestedIcon"],kind:["updateRequestedIcon"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return L}},[1,"calcite-notice",{open:[1540],kind:[513],closable:[516],icon:[520],iconFlipRtl:[516,"icon-flip-rtl"],scale:[513],width:[513],messages:[1040],messageOverrides:[1040],effectiveLocale:[32],defaultMessages:[32],setFocus:[64]},void 0,{open:["openHandler"],messageOverrides:["onMessagesChange"],icon:["updateRequestedIcon"],kind:["updateRequestedIcon"],effectiveLocale:["effectiveLocaleChange"]}]);function d(){typeof customElements>"u"||["calcite-notice","calcite-icon"].forEach(e=>{switch(e){case"calcite-notice":customElements.get(e)||customElements.define(e,r);break;case"calcite-icon":customElements.get(e)||O();break}})}d();const I=r,R=d;export{I as CalciteNotice,R as defineCustomElement};
