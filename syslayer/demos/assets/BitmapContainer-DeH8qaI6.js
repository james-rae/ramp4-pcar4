import{E as r}from"./MapView-g0EvuRBu.js";import{n as s}from"./WGLContainer-vDE4myPO.js";import{p as t}from"./BitmapTechnique-DIZjnnIY.js";class o extends s{constructor(){super(...arguments),this._hasCrossfade=!1,this._bitmapTechnique=null}get requiresDedicatedFBO(){return super.requiresDedicatedFBO||this._hasCrossfade}beforeRender(e){super.beforeRender(e),this._manageFade()}onAttach(){super.onAttach(),this._bitmapTechnique=new t}onDetach(){super.onDetach(),this._bitmapTechnique?.shutdown(),this._bitmapTechnique=null}renderChildren(e){super.renderChildren(e),this.visible&&e.drawPhase===r.MAP&&this._bitmapTechnique!=null&&this._bitmapTechnique.render(e,{bitmaps:this.children})}_manageFade(){this.children.reduce((e,i)=>e+(i.inFadeTransition?1:0),0)>=2?(this.children.forEach(e=>e.blendFunction="additive"),this._hasCrossfade=!0):(this.children.forEach(e=>e.blendFunction="standard"),this._hasCrossfade=!1)}}export{o as r};
