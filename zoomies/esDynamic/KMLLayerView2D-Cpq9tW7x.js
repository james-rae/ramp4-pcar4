import{bv as T,U as z,V as O,aE as F,eO as N,C as S,au as U,B as A,eP as W,eQ as E,bw as H,k as v,o as C,A as K}from"./main-DFutu5rJ.js";import{K as D,W as J}from"./projection-zSbjm3Fd.js";import{b as P,g as Q,d as Y}from"./kmlUtils-spRK7ZlZ.js";import{f as $}from"./utils-C8EtA-aC.js";import{c as M}from"./GraphicsCollection-BHBA4Nci.js";import{g as X,f as Z,S as tt}from"./Bitmap-_Zlvl3Ce.js";import{a as et}from"./BitmapContainer-CpuJ_b9G.js";import{j as it,y as at}from"./LayerView-CbgwIaW5.js";import{t as R}from"./GraphicContainer-C2WGTboy.js";import{F as k}from"./GraphicsView2D-DCXBOcVp.js";import{C as st,i as rt}from"./rasterProjectionHelper-etqZVUFI.js";import{a as nt}from"./WGLContainer-BYi_8LX7.js";import{y as ot,o as lt}from"./RenderingContext-Bu6bD1vq.js";import{D as L,G as ht,U as pt,X as q}from"./enums-DBi1-Mm2.js";import{x as mt}from"./Program-w22QO3I9.js";import{c as ct}from"./rasterUtils-yy8jiLR4.js";import{p as j,m as dt}from"./Texture-CmQ8N2qD.js";class p{constructor(t){if(this._ownsRctx=!1,t)this._ownsRctx=!1,this._rctx=t;else{if(p._instance)return p._instanceRefCount++,p._instance;p._instanceRefCount=1,p._instance=this,this._ownsRctx=!0;const i=document.createElement("canvas").getContext("webgl2");i.getExtension("OES_texture_float"),this._rctx=new ot(i,{})}const a={applyProjection:!0,bilinear:!1,bicubic:!1},r=lt("raster/reproject","raster/reproject",new Map([["a_position",0]]),a);this._program=this._rctx.programCache.acquire(r.shaders.vertexShader,r.shaders.fragmentShader,r.attributes),this._rctx.useProgram(this._program),this._program.setUniform1f("u_opacity",1),this._program.setUniform1i("u_image",0),this._program.setUniform1i("u_flipY",0),this._program.setUniform1i("u_transformGrid",1),this._quad=new nt(this._rctx,[0,0,1,0,0,1,1,1])}reprojectTexture(t,a,r=!1){const i=D(t.extent,a),s=new T({x:(t.extent.xmax-t.extent.xmin)/t.texture.descriptor.width,y:(t.extent.ymax-t.extent.ymin)/t.texture.descriptor.height,spatialReference:t.extent.spatialReference}),{x:l,y:h}=st(s,a,t.extent);let n=(l+h)/2;const o=Math.round((i.xmax-i.xmin)/n),u=Math.round((i.ymax-i.ymin)/n);n=(i.width/o+i.height/u)/2;const I=new T({x:n,y:n,spatialReference:i.spatialReference}),g=rt({projectedExtent:i,srcBufferExtent:t.extent,pixelSize:I,hasWrapAround:!0,spacing:[16,16]}),w=ct(this._rctx,g),y=new j(o,u);y.wrapMode=L.CLAMP_TO_EDGE;const m=new mt(this._rctx,y);this._rctx.bindFramebuffer(m),this._rctx.setViewport(0,0,o,u),this._rctx.useProgram(this._program),this._rctx.bindTexture(t.texture,0),this._rctx.bindTexture(w,1),this._quad.bind();const{width:x=0,height:f=0}=t.texture.descriptor;if(this._program.setUniform2f("u_srcImageSize",x,f),this._program.setUniform2fv("u_transformSpacing",g.spacing),this._program.setUniform2fv("u_transformGridSize",g.size),this._program.setUniform2f("u_targetImageSize",o,u),this._quad.draw(),this._quad.unbind(),this._rctx.useProgram(null),this._rctx.bindFramebuffer(null),w.dispose(),r){const{width:c,height:V}=m,_=new ImageData(c??0,V??0);m.readPixels(0,0,c??0,V??0,ht.RGBA,pt.UNSIGNED_BYTE,_.data);const G=m.detachColorTexture(q.COLOR_ATTACHMENT0);return m.dispose(),{texture:G,extent:i,imageData:_}}const b=m.detachColorTexture(q.COLOR_ATTACHMENT0);return m.dispose(),{texture:b,extent:i}}reprojectBitmapData(t,a){const r=X(t.bitmapData)?Z(t.bitmapData):t.bitmapData,i=new j;i.wrapMode=L.CLAMP_TO_EDGE,i.width=t.bitmapData.width,i.height=t.bitmapData.height;const s=new dt(this._rctx,i,r),l=this.reprojectTexture({texture:s,extent:t.extent},a,!0);l.texture.dispose();const h=document.createElement("canvas"),n=l.imageData;return h.width=n.width,h.height=n.height,h.getContext("2d").putImageData(n,0,0),{bitmapData:h,extent:l.extent}}async loadAndReprojectBitmapData(t,a,r){const i=(await z(t,{responseType:"image"})).data,s=document.createElement("canvas");s.width=i.width,s.height=i.height;const l=s.getContext("2d");l.drawImage(i,0,0);const h=l.getImageData(0,0,s.width,s.height);if(a.spatialReference.equals(r))return{bitmapData:h,extent:a};const n=this.reprojectBitmapData({bitmapData:h,extent:a},r);return{bitmapData:n.bitmapData,extent:n.extent}}destroy(){this._ownsRctx?(p._instanceRefCount--,p._instanceRefCount===0&&(this._quad.dispose(),this._program.dispose(),this._rctx.dispose(),p._instance=null)):(this._quad.dispose(),this._program.dispose())}}p._instanceRefCount=0;class B{constructor(){this.allSublayers=new Map,this.allPoints=[],this.allPolylines=[],this.allPolygons=[],this.allMapImages=[]}}let d=class extends it(at){constructor(){super(...arguments),this._bitmapIndex=new Map,this._mapImageContainer=new et,this._kmlVisualData=new B,this._fetchController=null,this.allVisiblePoints=new M,this.allVisiblePolylines=new M,this.allVisiblePolygons=new M,this.allVisibleMapImages=new O}async hitTest(e,t){const a=this.layer;return[this._pointsView?.hitTest(e),this._polylinesView?.hitTest(e),this._polygonsView?.hitTest(e)].flat().filter(Boolean).map(r=>(r.layer=a,r.sourceLayer=a,{type:"graphic",graphic:r,layer:a,mapPoint:e}))}update(e){this._polygonsView&&this._polygonsView.processUpdate(e),this._polylinesView&&this._polylinesView.processUpdate(e),this._pointsView&&this._pointsView.processUpdate(e)}attach(){this._fetchController=new AbortController,this.container.addChild(this._mapImageContainer),this._polygonsView=new k({view:this.view,graphics:this.allVisiblePolygons,requestUpdateCallback:()=>this.requestUpdate(),container:new R(this.view.featuresTilingScheme)}),this.container.addChild(this._polygonsView.container),this._polylinesView=new k({view:this.view,graphics:this.allVisiblePolylines,requestUpdateCallback:()=>this.requestUpdate(),container:new R(this.view.featuresTilingScheme)}),this.container.addChild(this._polylinesView.container),this._pointsView=new k({view:this.view,graphics:this.allVisiblePoints,requestUpdateCallback:()=>this.requestUpdate(),container:new R(this.view.featuresTilingScheme)}),this.container.addChild(this._pointsView.container),this.addAttachHandles([this.allVisibleMapImages.on("change",e=>{e.added.forEach(t=>this._addMapImage(t)),e.removed.forEach(t=>this._removeMapImage(t))}),F(()=>this.layer.visibleSublayers,e=>{for(const t of this._kmlVisualData.allSublayers.values())t.visibility=0;for(const t of e){const a=this._kmlVisualData.allSublayers.get(t.id);a&&(a.visibility=1)}this._refreshCollections()})]),this._updatingHandles.addPromise(this._fetchService(this._fetchController.signal)),this._imageReprojector=new p}detach(){this._fetchController=N(this._fetchController),this._mapImageContainer.removeAllChildren(),this.container.removeAllChildren(),this._bitmapIndex.clear(),this._polygonsView=S(this._polygonsView),this._polylinesView=S(this._polylinesView),this._pointsView=S(this._pointsView),this._imageReprojector=S(this._imageReprojector)}viewChange(){this._polygonsView.viewChange(),this._polylinesView.viewChange(),this._pointsView.viewChange()}moveEnd(){}isUpdating(){return this._pointsView.updating||this._polygonsView.updating||this._polylinesView.updating}_addMapImage(e){(this.view.spatialReference?.isWGS84||this.view.spatialReference?.isWebMercator)&&this._imageReprojector.loadAndReprojectBitmapData(e.href,U.fromJSON(e.extent),this.view.spatialReference).then(t=>{const a=new tt(t.bitmapData);a.x=t.extent.xmin,a.y=t.extent.ymax,a.resolution=t.extent.width/t.bitmapData.width,a.rotation=e.rotation,this._mapImageContainer.addChild(a),this._bitmapIndex.set(e,a)})}async _getViewDependentUrl(e,t){const{viewFormat:a,viewBoundScale:r,httpQuery:i}=e;if(a!=null){if(t==null)throw new Error("Loading this network link requires a view state.");let s;if(await J(),r!=null&&r!==1){const c=new U(t.extent);c.expand(r),s=c}else s=t.extent;s=D(s,A.WGS84);const l=D(s,A.WebMercator),h=s.xmin,n=s.xmax,o=s.ymin,u=s.ymax,I=t.size[0]*t.pixelRatio,g=t.size[1]*t.pixelRatio,w=Math.max(l.width,l.height),y={"[bboxWest]":h.toString(),"[bboxEast]":n.toString(),"[bboxSouth]":o.toString(),"[bboxNorth]":u.toString(),"[lookatLon]":s.center.x.toString(),"[lookatLat]":s.center.y.toString(),"[lookatRange]":w.toString(),"[lookatTilt]":"0","[lookatHeading]":t.rotation.toString(),"[lookatTerrainLon]":s.center.x.toString(),"[lookatTerrainLat]":s.center.y.toString(),"[lookatTerrainAlt]":"0","[cameraLon]":s.center.x.toString(),"[cameraLat]":s.center.y.toString(),"[cameraAlt]":w.toString(),"[horizFov]":"60","[vertFov]":"60","[horizPixels]":I.toString(),"[vertPixels]":g.toString(),"[terrainEnabled]":"0","[clientVersion]":W,"[kmlVersion]":"2.2","[clientName]":"ArcGIS API for JavaScript","[language]":"en-US"},m=c=>{for(const V in c){let _;for(_ in y)c[V]=c[V].replace(_,y[_])}},x=E(a);m(x);let f={};i!=null&&(f=E(i),m(f));const b=$(e.href);return b.query={...b.query,...x,...f},`${b.path}?${H(x)}`}return e.href}async _fetchService(e){const t=new B;await this._loadVisualData(this.layer.url,t,e),this._kmlVisualData=t,this._refreshCollections()}_refreshCollections(){this.allVisiblePoints.removeAll(),this.allVisiblePolylines.removeAll(),this.allVisiblePolygons.removeAll(),this.allVisibleMapImages.removeAll(),this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter(e=>this._isSublayerVisible(e.sublayerId)).map(({item:e})=>e)),this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter(e=>this._isSublayerVisible(e.sublayerId)).map(({item:e})=>e)),this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter(e=>this._isSublayerVisible(e.sublayerId)).map(({item:e})=>e)),this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter(e=>this._isSublayerVisible(e.sublayerId)).map(({item:e})=>e))}_isSublayerVisible(e){const t=this._kmlVisualData.allSublayers.get(e);return!!t?.visibility&&(t.parentFolderId===-1||this._isSublayerVisible(t.parentFolderId))}_loadVisualData(e,t,a){return this._fetchParsedKML(e,a).then(async r=>{for(const i of r.sublayers){t.allSublayers.set(i.id,i);const s=i.points?await P(i.points):[],l=i.polylines?await P(i.polylines):[],h=i.polygons?await P(i.polygons):[],n=i.mapImages||[];if(t.allPoints.push(...s.map(o=>({item:o,sublayerId:i.id}))),t.allPolylines.push(...l.map(o=>({item:o,sublayerId:i.id}))),t.allPolygons.push(...h.map(o=>({item:o,sublayerId:i.id}))),t.allMapImages.push(...n.map(o=>({item:o,sublayerId:i.id}))),i.networkLink){const o=await this._getViewDependentUrl(i.networkLink,this.view.state);await this._loadVisualData(o,t,a)}}})}_fetchParsedKML(e,t){return Q(e,this.layer.spatialReference,this.layer.refreshInterval,t).then(a=>Y(a.data))}_removeMapImage(e){const t=this._bitmapIndex.get(e);t&&(this._mapImageContainer.removeChild(t),this._bitmapIndex.delete(e))}};v([C()],d.prototype,"_pointsView",void 0),v([C()],d.prototype,"_polylinesView",void 0),v([C()],d.prototype,"_polygonsView",void 0),v([C()],d.prototype,"updating",void 0),d=v([K("esri.views.2d.layers.KMLLayerView2D")],d);const ut=d;export{ut as default};
