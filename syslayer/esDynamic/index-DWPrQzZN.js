import{i as c,L as l,x as d,a as m,S as h}from"./themeUtils-U8eccLDb.js";import{n as f}from"./ref-BoWbPF26.js";import{b as p}from"./observers-BzlSsVAi.js";import{r as u}from"./loadable-GZgdjS5N.js";import{D as w}from"./dom-ChHLWznX.js";const o={frame:"frame",frameAdvancing:"frame--advancing",frameRetreating:"frame--retreating"},g=c`:host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;align-items:stretch;overflow:hidden;background-color:transparent}:host .frame{position:relative;margin:0;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;padding:0;animation-name:none;animation-duration:var(--calcite-animation-timing);background-color:var(--calcite-flow-background-color)}:host ::slotted(*){display:none;block-size:100%}:host ::slotted(*[selected]){display:flex}:host ::slotted(.calcite-match-height:last-child){display:flex;flex:1 1 auto;overflow:hidden}:host .frame--advancing{animation-name:calcite-frame-advance}:host .frame--retreating{animation-name:calcite-frame-retreat}@keyframes calcite-frame-advance{0%{--tw-bg-opacity: .5;transform:translate3d(50px,0,0)}to{--tw-bg-opacity: 1;transform:translateZ(0)}}@keyframes calcite-frame-retreat{0%{--tw-bg-opacity: .5;transform:translate3d(-50px,0,0)}to{--tw-bg-opacity: 1;transform:translateZ(0)}}:host([hidden]){display:none}[hidden]{display:none}`;class r extends l{constructor(){super(),this.itemMutationObserver=p("mutation",()=>this.updateItemsAndProps()),this.items=[],this.selectedIndex=-1,this.flowDirection="standby",this.listen("calciteInternalFlowItemChange",this.handleCalciteInternalFlowItemChange),this.listen("calciteFlowItemBack",this.handleItemBackClick)}static{this.properties={flowDirection:16,customItemSelectors:1}}static{this.styles=g}async back(){const{items:e,selectedIndex:t}=this,i=e[t],a=e[t-1];if(!i||!a)return;const s=i.beforeBack?i.beforeBack:()=>Promise.resolve();try{await s.call(i)}catch{return}return i.selected=!1,a.selected=!0,a}async setFocus(){await u(this);const{items:e}=this;return e[this.selectedIndex]?.setFocus()}connectedCallback(){super.connectedCallback(),this.itemMutationObserver?.observe(this.el,{childList:!0,subtree:!0})}load(){}willUpdate(e){e.has("flowDirection")&&(this.hasUpdated||this.flowDirection!=="standby")&&this.handleFlowDirectionChange(this.flowDirection)}loaded(){this.updateItemsAndProps()}disconnectedCallback(){super.disconnectedCallback(),this.itemMutationObserver?.disconnect()}async handleFlowDirectionChange(e){e!=="standby"&&(await w(this.frameEl,e==="retreating"?"calcite-frame-retreat":"calcite-frame-advance"),this.resetFlowDirection())}handleCalciteInternalFlowItemChange(e){e.stopPropagation(),this.updateFlowProps()}async handleItemBackClick(e){if(!e.defaultPrevented)return await this.back(),this.setFocus()}resetFlowDirection(){this.flowDirection="standby"}getFlowDirection(e,t){const i=e>0;return!(e>-1&&t>0)&&!i?"standby":t<e?"retreating":"advancing"}updateItemsAndProps(){const{customItemSelectors:e,el:t}=this,i=Array.from(t.querySelectorAll(`calcite-flow-item${e?`,${e}`:""}`)).filter(a=>a.closest("calcite-flow")===t);this.items=i,this.ensureSelectedFlowItemExists(),this.updateFlowProps()}updateFlowProps(){const{selectedIndex:e,items:t}=this,i=this.findSelectedFlowItemIndex(t);t.forEach((a,s)=>{const n=s===i;n||(a.menuOpen=!1),a.showBackButton=n&&i>0}),i!==-1&&(e!==i&&(this.flowDirection=this.getFlowDirection(e,i)),this.selectedIndex=i)}findSelectedFlowItemIndex(e){const t=e.slice(0).reverse().find(i=>!!i.selected);return e.indexOf(t)}ensureSelectedFlowItemExists(){const{items:e}=this;if(this.findSelectedFlowItemIndex(e)!==-1)return;const t=e[e.length-1];t&&(t.selected=!0)}setFrameEl(e){this.frameEl=e}render(){const{flowDirection:e}=this,t={[o.frame]:!0,[o.frameAdvancing]:e==="advancing",[o.frameRetreating]:e==="retreating"};return d`<div class=${m(t)} ${f(this.setFrameEl)}><slot></slot></div>`}}h("calcite-flow",r);export{r as Flow};
