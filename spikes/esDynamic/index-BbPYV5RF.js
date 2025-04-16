import{hl as I,ga as O,hm as l,f6 as E,hn as P,gf as R,ho as T,gc as x,hp as k,F,dM as z,dN as D,e2 as N,e3 as y,dQ as d,gd as L,e8 as H,dE as m,e5 as W,e9 as j,dS as q,dY as g,dX as v,d_ as X,dT as Y,e0 as G,gh as $,dU as f,fN as Q}from"./main-DaZH2qzH.js";class U extends I{overviewGraphicLayer;overviewmapStore;constructor(e){super(e),this.overviewGraphicLayer=this.$iApi.geo.layer.createLayer({id:"RampOverviewGraphic",layerType:O.GRAPHIC,url:"",cosmetic:!0}),this.overviewmapStore=l(this.$vApp.$pinia)}async createMapView(e){if(!e)throw new Error("Attempted to create overview map view without a basemap");const i=typeof e=="string"?await this.findBasemap(e):e;await this.applyBasemap(i),this._rampExtentSet=this.$iApi.geo.map.getExtentSet().clone(),this._rampSR=this._rampExtentSet.sr.clone();const t=this.overviewmapStore.expandFactor;this.esriView=E(await P.MapView({map:this.esriMap,container:this._targetDiv,constraints:{rotationEnabled:!1},spatialReference:this._rampSR.toESRI(),extent:this.$iApi.geo.map.getExtent().toESRI().expand(t)})),this.esriView.ui.components=[],this.handlers.push({type:"mouse-wheel",handler:this.esriView.on("mouse-wheel",a=>{a.stopPropagation()})}),this.handlers.push({type:"double-click",handler:this.esriView.on("double-click",a=>{a.stopPropagation()})}),this.handlers.push({type:"key-down",handler:this.esriView.on("key-down",a=>{a.stopPropagation()})}),this.handlers.push({type:"key-up",handler:this.esriView.on("key-up",a=>{a.stopPropagation()})}),this.handlers.push({type:"drag",handler:this.esriView.on("drag",a=>{a.stopPropagation(),this.mapDrag(a)})}),this.esriView.container.addEventListener("touchmove",a=>{a.preventDefault()}),this.esriView.watch("fatalError",()=>{const a=new IntersectionObserver(h=>{h.forEach(p=>{p.isIntersecting&&(this.esriView?.tryFatalErrorRecovery(),a.disconnect())})});a.observe(this.esriView.container)}),this.esriView.when(()=>{this._viewPromise.resolveMe(),this.created=!0})}async addMapGraphicLayer(){if(!this.esriMap){this.noMapErr();return}const e=new R(this.$iApi.geo.map.getExtent(),"overview-graphic"),i=this.overviewmapStore.borderColour??"#FF0000",t=this.overviewmapStore.borderWidth??1,a=this.overviewmapStore.areaColour??"#000000",h=this.overviewmapStore.areaOpacity??.25,p=`${a}${Math.round(h*255).toString(16)}`;e.style=new T({fill:{colour:p},outline:{colour:i,width:t}}),await this.overviewGraphicLayer.initiate(),await this.overviewGraphicLayer.addGraphic(e),this.esriMap?.add(this.overviewGraphicLayer.esriLayer)}async removeMapGraphicLayer(){if(!this.esriMap){this.noMapErr();return}if(!this.overviewGraphicLayer.esriLayer)throw new Error("Attempted to remove layer from the map without an esri layer. Likely layer.initiate() was not called or had not finished.");this.overviewGraphicLayer.removeGraphic(),this.esriMap.remove(this.overviewGraphicLayer.esriLayer),await this.overviewGraphicLayer.terminate()}destroyMapView(){this.esriView?.container.removeEventListener("touchmove",e=>{e.preventDefault()}),super.destroyMapView()}async findBasemap(e){const i=this._basemapStore.find(t=>t.id===e);if(i)return i;{const t=x(this.$vApp.$pinia).config.map;if(t){const a=t.basemaps.find(h=>h.id===e);if(a)return k.create(a)}}throw new Error(`Invalid basemap id requested: ${e}`)}async setBasemap(e){if(!this.esriView||!this.esriMap)return this.noMapErr(),!1;const i=await this.findBasemap(e),t=(this.getCurrentBasemapId()?await this.findBasemap(this.getCurrentBasemapId()):void 0)?.tileSchemaId!==i.tileSchemaId;return t?(this.destroyMapView(),await this.createMapView(i)):await this.applyBasemap(i),t}startExtent=null;async mapDrag(e){if(e.native.pointerType==="mouse"){if(e.action==="start")await this.cursorHitTest(e)&&(this.startExtent=E(this.overviewGraphicLayer.getEsriGraphic("overview-graphic").geometry));else if(this.startExtent){const i=this.esriView.toMap(e.origin),t=this.esriView.toMap({x:e.x,y:e.y}),a=this.startExtent.clone().offset(t.x-i.x,t.y-i.y,0);this.overviewGraphicLayer.getEsriGraphic("overview-graphic").geometry=a,e.action==="end"&&(this.$iApi.geo.map.zoomMapTo(this.$iApi.geo.geom.geomEsriToRamp(a),void 0,!1),this.startExtent=null)}}}updateOverview(e){const i=this.overviewmapStore.expandFactor,t=this.zoomMapTo(e.expand(i),void 0,!1),a=this.overviewGraphicLayer.getLocalGraphic("overview-graphic");return this.overviewGraphicLayer.removeGraphic(a),a.geometry=e,this.overviewGraphicLayer.addGraphic(a),t}async cursorHitTest(e){return(await this.esriView.hitTest(e)).results.length>0}}class Z extends F{_parseConfig(e){const i=l(this.$vApp.$pinia);i.basemaps=e?.basemaps||{},i.mapConfig.basemaps=e?Object.values(e.basemaps):[],i.startMinimized=e?.startMinimized??!0,i.expandFactor=e?.expandFactor??1.5,i.borderColour=e?.borderColour??"#FF0000",i.borderWidth=e?.borderWidth??1,i.areaColour=e?.areaColour??"#000000",i.areaOpacity=e?.areaOpacity??.25}get config(){return super.config}}const J={class:"relative h-full w-full overflow-hidden"},K={class:"absolute h-30 w-30 top-0 right-0"},ee=["content","aria-label"],ae=z({__name:"overviewmap",setup(w){const e=l(),{t:i}=D(),t=N("iApi"),a=x(),h=y(),p=d(()=>a.activeBasemapConfig),A=d(()=>e.mapConfig),b=d(()=>e.basemaps),S=d(()=>e.startMinimized),r=L(new U(t)),o=y(!0),M=y(!1),c=L([]);H(async()=>{await t.geo.map.viewPromise,u(),await r.createMap(A.value,h.value.querySelector(".overviewmap")),await r.viewPromise,await r.addMapGraphicLayer(),o.value=S.value;const n=r.updateOverview(t.geo.map.getExtent());c.push(t.event.on(m.MAP_EXTENTCHANGE,W(100,s=>{n.then(()=>{r.updateOverview(s)})}))),c.push(t.event.on(m.MAP_CREATED,()=>{u()})),c.push(t.event.on(m.MAP_REFRESH_END,()=>{u()})),c.push(t.event.on(m.MAP_BASEMAPCHANGE,async s=>{!s.schemaChanged&&r.created&&p.value&&b.value[p.value.tileSchemaId]===void 0&&(await r.removeMapGraphicLayer(),await r.setBasemap(s.basemapId),await r.addMapGraphicLayer())}))}),j(()=>{c.forEach(n=>t.event.off(n)),r.destroyMap()});const C=async n=>{M.value=!o.value&&await r.cursorHitTest(n)},V=()=>({height:`${o.value?48:200}px`,width:`${o.value?48:200}px`}),_=()=>({top:`${o.value?-6:-3}px`,right:`${o.value?-6:-3}px`,transform:`rotate(${o.value?225:45}deg)`}),u=()=>{if(!p.value){console.error("Overview Map could not obtain the basemap config used by the main map");return}try{const n=p.value?.tileSchemaId;if(!n)throw new Error("Overview Map could not obtain the tile schema of the main map");const s=b.value[n];if(!s)throw new Error("Overview Map could not find a suitable basemap that matches the tile schema of the main map");r.created?r.viewPromise.then(()=>r.setBasemap(s.id)):e.updateInitialBasemap(s.id)}catch{r.created||e.updateInitialBasemap(p.value.id),r.viewPromise.then(()=>r.setBasemap(p.value.id))}};return(n,s)=>{const B=q("tippy");return f(),g("div",{class:"relative",ref_key:"el",ref:h},[v("div",{style:$(V()),class:"pointer-events-auto absolute top-0 right-0 mt-12 mr-12 shadow-tm border-4 border-solid border-white bg-white transition-all duration-300 ease-out"},[v("div",J,[v("div",{class:X(["overviewmap absolute top-0 right-0 h-192 w-192",{"cursor-move":M.value}]),onMousemove:C},null,34)]),v("div",K,[Y((f(),g("button",{type:"button",tabindex:"0",class:"cursor-pointer absolute h-full w-full",onClick:s[0]||(s[0]=se=>o.value=!o.value),content:G(i)(o.value?"overviewmap.expand":"overviewmap.minimize"),"aria-label":G(i)(o.value?"overviewmap.expand":"overviewmap.minimize")},[(f(),g("svg",{class:"absolute fill-current text-gray-500 transition-all duration-300 ease-out",style:$(_()),xmlns:"http://www.w3.org/2000/svg",fit:"",height:"100%",width:"100%",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",focusable:"false"},s[1]||(s[1]=[v("g",{id:"apple-keyboard-control"},[v("path",{d:"M 19.7782,11.7782L 18.364,13.1924L 12,6.82843L 5.63604,13.1924L 4.22183,11.7782L 12,4L 19.7782,11.7782 Z "})],-1)]),4))],8,ee)),[[B,{placement:"left",hideOnClick:!1}]])])],4)],512)}}}),ie=Q(ae,[["__scopeId","data-v-9f9aebec"]]),te={en:{"overviewmap.expand":"Expand Overview","overviewmap.minimize":"Minimize Overview"},fr:{"overviewmap.expand":"D\xE9velopper l'aper\xE7u","overviewmap.minimize":"R\xE9duire l'aper\xE7u"}};class re extends Z{added(){Object.entries(te).forEach(a=>this.$iApi.$i18n.mergeLocaleMessage(...a)),this._parseConfig(this.config);const e=this.$vApp.$watch(()=>this.config,a=>this._parseConfig(a)),{destroy:i,el:t}=this.mount(ie,{app:this.$element});this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(t.childNodes[0]),this.removed=()=>{e(),i(),l(this.$vApp.$pinia).$reset()}}}export{re as default};
