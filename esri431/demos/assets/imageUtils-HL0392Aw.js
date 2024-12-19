import { gO as e$1, b8 as u$1, aQ as E, bT as r$3, bV as a } from './main-jdFDoOPu.js';
import { S } from './Bitmap-DL72MdPx.js';
import { r as r$2, t as t$1 } from './WGLContainer-BUclEOgO.js';
import { i } from './TileContainer-BA3pMXmd.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let r$1 = class r extends r$2{constructor(e,s,r,i,a,n,o=null){super(e,s,r,i,a,n),this.bitmap=new S(o),this.bitmap.coordScale=[a,n],this.bitmap.once("isReady",(()=>this.ready()));}destroy(){super.destroy(),this.bitmap.destroy();}beforeRender(e){this.bitmap.beforeRender(e),super.beforeRender(e);}afterRender(e){this.bitmap.afterRender(e),super.afterRender(e);}set stencilRef(e){this.bitmap.stencilRef=e;}get stencilRef(){return this.bitmap.stencilRef}_createTransforms(){return {displayViewScreenMat3:e$1(),tileMat3:e$1()}}setTransform(e){super.setTransform(e),this.bitmap.transforms.displayViewScreenMat3=this.transforms.displayViewScreenMat3;}onAttach(){this.bitmap.stage=this.stage;}onDetach(){this.bitmap&&(this.bitmap.stage=null);}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let n$1 = class n extends i{get requiresDedicatedFBO(){return this.children.some((e=>"additive"===e.bitmap.blendFunction))}createTile(r){const t=this.tileInfoView.getTileBounds(u$1(),r),s=this.tileInfoView.getTileResolution(r.level),[n,o]=this.tileInfoView.tileInfo.size;return new r$1(r,s,t[0],t[3],n,o)}prepareRenderPasses(e){const i=e.registerRenderPass({name:"bitmap (tile)",brushes:[t$1.bitmap],target:()=>this.children.map((e=>e.bitmap)),drawPhase:E.MAP});return [...super.prepareRenderPasses(e),i]}doRender(e){this.visible&&e.drawPhase===E.MAP&&super.doRender(e);}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const r=r=>{let s=class extends r{attach(){this.view.timeline.record(`${this.layer.title} (BitmapTileLayer) Attach`),this._bitmapView=new n$1(this._tileInfoView),this.container.addChild(this._bitmapView);}detach(){this.container.removeChild(this._bitmapView),this._bitmapView?.removeAllChildren(),this._bitmapView=null;}};return s=r$3([a("esri.views.2d.layers.BitmapTileLayerView2D")],s),s};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function e(e){return e instanceof HTMLImageElement?e.naturalWidth:e.width}function t(e){return e instanceof HTMLImageElement?e.naturalHeight:e.height}function n(n,l,r,u){if(r.level===u.level)return l;const i=n.tileInfo.size,a=n.getTileResolution(r.level),c=n.getTileResolution(u.level);let g=n.getLODInfoAt(u.level);const h=g.getXForColumn(u.col),d=g.getYForRow(u.row);g=n.getLODInfoAt(r.level);const f=g.getXForColumn(r.col),s=g.getYForRow(r.row),m=e(l)/i[0],v=t(l)/i[1],w=Math.round(m*((h-f)/a)),I=Math.round(v*(-(d-s)/a)),M=Math.round(m*i[0]*(c/a)),F=Math.round(v*i[1]*(c/a)),L=o(i);return L.getContext("2d").drawImage(l,w,I,M,F,0,0,i[0],i[1]),L}function o(e){const t=document.createElement("canvas");return [t.width,t.height]=e,t}

export { n, o, r };
