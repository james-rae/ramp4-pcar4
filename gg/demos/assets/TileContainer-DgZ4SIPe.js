import{a_ as i}from"./main-BnINupoD.js";import{E as n}from"./MapView-CMsxA34N.js";import{n as l,_ as o,y as a}from"./WGLContainer-BM9jcny3.js";const c=(s,e)=>s.key.level-e.key.level!=0?s.key.level-e.key.level:s.key.row-e.key.row!=0?s.key.row-e.key.row:s.key.col-e.key.col;class u extends l{constructor(e){super(),this.tileInfoView=e,this.sortFunction=c}renderChildren(e){this.setStencilReference(e),super.renderChildren(e)}createRenderParams(e){const{state:r}=e,t=super.createRenderParams(e);return t.requiredLevel=this.tileInfoView.getClosestInfoForScale(r.scale).level,t.displayLevel=this.tileInfoView.tileInfo.scaleToZoom(r.scale),t}prepareRenderPasses(e){const r=super.prepareRenderPasses(e);return r.push(e.registerRenderPass({name:"stencil",brushes:[o],drawPhase:n.DEBUG|n.MAP|n.HIGHLIGHT|n.LABEL,target:()=>this.getStencilTarget()})),i("esri-tiles-debug")&&r.push(e.registerRenderPass({name:"tileInfo",brushes:[a],drawPhase:n.DEBUG,target:()=>this.children})),r}getStencilTarget(){return this.children}setStencilReference(e){let r=1;for(const t of this.children)t.stencilRef=r++}}export{u as i};
