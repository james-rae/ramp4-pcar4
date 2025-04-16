import{c4 as E,B as d,D as l,N,aN as $,e7 as P,X as w,bU as H,Z as T,dH as q,e1 as z}from"./main-CcTJZah4.js";import{z as B}from"./TileInfo-BSaKYsG9.js";import{S as U}from"./BitmapTechnique-BZt_4cVv.js";import{h as C}from"./Tile-CX8RR_ob.js";import{e as I}from"./TileKey-DSJnkexI.js";const k=Math.PI/180;function A(e){return e*k}function D(e,i){const r=A(i.rotation),t=Math.abs(Math.cos(r)),s=Math.abs(Math.sin(r)),[o,n]=i.size;return e[0]=Math.round(n*s+o*t),e[1]=Math.round(n*t+o*s),e}function O(e,i,r,t){const[s,o]=i,[n,a]=t,m=.5*r;return e[0]=s-m*n,e[1]=o-m*a,e[2]=s+m*n,e[3]=o+m*a,e}const u=E(),c=[0,0],_=new I(0,0,0,0),y={container:null,fetchSource:null,requestUpdate:null,imageMaxWidth:2048,imageMaxHeight:2048,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1};let h=class extends ${constructor(e){super(e),this._imagePromise=null,this.bitmaps=[],this.hidpi=y.hidpi,this.imageMaxWidth=y.imageMaxWidth,this.imageMaxHeight=y.imageMaxHeight,this.imageRotationSupported=y.imageRotationSupported,this.imageNormalizationSupported=y.imageNormalizationSupported,this.update=P(async(i,r)=>{if(w(r),!i.stationary||this.destroyed)return;const t=i.state,s=H(t.spatialReference),o=this.hidpi?i.pixelRatio:1,n=t.worldScreenWidth>0,a=n&&this.imageNormalizationSupported&&t.worldScreenWidth<t.size[0],m=Math.round((this.imageMaxWidth??0)/o),f=Math.round((this.imageMaxHeight??0)/o);a?(c[0]=t.worldScreenWidth,c[1]=t.size[1]):this.imageRotationSupported?(c[0]=t.size[0],c[1]=t.size[1]):D(c,t);const M=Math.floor(c[0])>m||Math.floor(c[1])>f,S=s&&(t.extent.xmin<s.valid[0]||t.extent.xmax>s.valid[1]),v=!this.imageNormalizationSupported&&S,x=!M&&!v,W=this.imageRotationSupported?t.rotation:0,b=this.container.children.slice();if(x){const p=a?t.paddedViewState.center:t.center;this._imagePromise=this._singleExport(t,c,p,t.resolution,W,o,r)}else{let p=Math.min(m,f);n&&(p=Math.min(t.worldScreenWidth,p),p=Math.round(t.worldScreenWidth/Math.ceil(t.worldScreenWidth/p))),this._imagePromise=this._tiledExport(t,p,o,r)}try{const p=await this._imagePromise??[];w(r);const R=[];if(this._imagePromise=null,this.destroyed)return;this.bitmaps=p;for(const g of b)p.includes(g)||R.push(g.fadeOut().then(()=>{g.remove(),g.destroy()}));for(const g of p)R.push(g.fadeIn());await Promise.all(R)}catch(p){this._imagePromise=null,T(p)}},5e3),this.updateExports=P(async i=>{const r=[];for(const t of this.container.children){if(!t.visible||!t.stage)return;r.push(i(t).then(()=>{t.invalidateTexture(),t.requestRender()}))}this._imagePromise=q(r).then(()=>this._imagePromise=null),await this._imagePromise})}destroy(){this.bitmaps.forEach(e=>e.destroy()),this.bitmaps=[]}get updating(){return!this.destroyed&&this._imagePromise!==null}async _export(e,i,r,t,s,o){const n=await this.fetchSource(e,Math.floor(i*s),Math.floor(r*s),{rotation:t,pixelRatio:s,signal:o});w(o);const a=new U(null,!0);return a.x=e.xmin,a.y=e.ymax,a.resolution=e.width/i,a.rotation=t,a.pixelRatio=s,a.opacity=0,this.container.addChild(a),await a.setSourceAsync(n,o),w(o),a}async _singleExport(e,i,r,t,s,o,n){O(u,r,t,i);const a=z(u,e.spatialReference);return[await this._export(a,i[0],i[1],s,o,n)]}_tiledExport(e,i,r,t){const s=B.create({size:i,spatialReference:e.spatialReference,scales:[e.scale]}),o=new C(s),n=o.getTileCoverage(e);if(!n)return null;const a=[];return n.forEach((m,f,M,S)=>{_.set(m,f,M,0),o.getTileBounds(u,_);const v=z(u,e.spatialReference);a.push(this._export(v,i,i,0,r,t).then(x=>(S!==0&&(_.set(m,f,M,S),o.getTileBounds(u,_),x.x=u[0],x.y=u[3]),x)))}),Promise.all(a)}};d([l()],h.prototype,"_imagePromise",void 0),d([l()],h.prototype,"bitmaps",void 0),d([l()],h.prototype,"container",void 0),d([l()],h.prototype,"fetchSource",void 0),d([l()],h.prototype,"hidpi",void 0),d([l()],h.prototype,"imageMaxWidth",void 0),d([l()],h.prototype,"imageMaxHeight",void 0),d([l()],h.prototype,"imageRotationSupported",void 0),d([l()],h.prototype,"imageNormalizationSupported",void 0),d([l()],h.prototype,"requestUpdate",void 0),d([l()],h.prototype,"updating",null),h=d([N("esri.views.2d.layers.support.ExportStrategy")],h);const G=h;export{G as _};
