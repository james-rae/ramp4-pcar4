import{il as I,gZ as O,im as d,fU as E,io as P,aO as F,h2 as R,ip as T,g$ as A,iq as k,F as z,ek as H,el as N,eC as q,eD as f,eo as v,h0 as x,eI as D,eN as m,eF as W,eJ as j,eq as U,ew as y,ev as c,ey as Z,er as J,eA as S,h4 as L,es as g,gt as X}from"./main-BnINupoD.js";import"./preload-helper-ExcqyqRp.js";class Y extends I{overviewGraphicLayer;overviewmapStore;constructor(e){super(e),this.overviewGraphicLayer=this.$iApi.geo.layer.createLayer({id:"RampOverviewGraphic",layerType:O.GRAPHIC,url:"",cosmetic:!0}),this.overviewmapStore=d(this.$vApp.$pinia)}async createMapView(e){if(!e)throw new Error("Attempted to create overview map view without a basemap");const a=typeof e=="string"?await this.findBasemap(e):e;await this.applyBasemap(a),this._rampExtentSet=this.$iApi.geo.map.getExtentSet().clone(),this._rampSR=this._rampExtentSet.sr.clone();const i=this.overviewmapStore.expandFactor;this.esriView=E(await P.MapView({map:this.esriMap,container:this._targetDiv,constraints:{rotationEnabled:!1},spatialReference:this._rampSR.toESRI(),extent:this.$iApi.geo.map.getExtent().toESRI().expand(i)})),this.esriView.ui.components=[],this.handlers.push({type:"mouse-wheel",handler:this.esriView.on("mouse-wheel",t=>{t.stopPropagation()})}),this.handlers.push({type:"double-click",handler:this.esriView.on("double-click",t=>{t.stopPropagation()})}),this.handlers.push({type:"key-down",handler:this.esriView.on("key-down",t=>{t.stopPropagation()})}),this.handlers.push({type:"key-up",handler:this.esriView.on("key-up",t=>{t.stopPropagation()})}),this.handlers.push({type:"drag",handler:this.esriView.on("drag",t=>{t.stopPropagation(),this.mapDrag(t)})}),this.esriView.container.addEventListener("touchmove",t=>{t.preventDefault()}),F(()=>this.esriView.fatalError,()=>{const t=new IntersectionObserver(s=>{s.forEach(n=>{n.isIntersecting&&(this.esriView?.tryFatalErrorRecovery(),t.disconnect())})});t.observe(this.esriView.container)}),this.esriView.when(()=>{this._viewPromise.resolveMe(),this.created=!0})}async addMapGraphicLayer(){if(!this.esriMap){this.noMapErr();return}const e=new R(this.$iApi.geo.map.getExtent(),"overview-graphic"),a=this.overviewmapStore.borderColour??"#FF0000",i=this.overviewmapStore.borderWidth??1,t=this.overviewmapStore.areaColour??"#000000",s=this.overviewmapStore.areaOpacity??.25,n=`${t}${Math.round(s*255).toString(16)}`;e.style=new T({fill:{colour:n},outline:{colour:a,width:i}}),await this.overviewGraphicLayer.initiate(),await this.overviewGraphicLayer.addGraphic(e),this.esriMap?.add(this.overviewGraphicLayer.esriLayer)}async removeMapGraphicLayer(){if(!this.esriMap){this.noMapErr();return}if(!this.overviewGraphicLayer.esriLayer)throw new Error("Attempted to remove layer from the map without an esri layer. Likely layer.initiate() was not called or had not finished.");this.overviewGraphicLayer.removeGraphic(),this.esriMap.remove(this.overviewGraphicLayer.esriLayer),await this.overviewGraphicLayer.terminate()}destroyMapView(){this.esriView?.container.removeEventListener("touchmove",e=>{e.preventDefault()}),super.destroyMapView()}async findBasemap(e){const a=this._basemapStore.find(i=>i.id===e);if(a)return a;{const t=A(this.$vApp.$pinia).config.map;if(t){const s=t.basemaps.find(n=>n.id===e);if(s)return k.create(s)}}throw new Error(`Invalid basemap id requested: ${e}`)}async setBasemap(e){if(!this.esriView||!this.esriMap)return this.noMapErr(),!1;const a=await this.findBasemap(e),t=(this.getCurrentBasemapId()?await this.findBasemap(this.getCurrentBasemapId()):void 0)?.tileSchemaId!==a.tileSchemaId;return t?(this.destroyMapView(),await this.createMapView(a)):await this.applyBasemap(a),t}startExtent=null;async mapDrag(e){if(e.native.pointerType==="mouse"){if(e.action==="start")await this.cursorHitTest(e)&&(this.startExtent=E(this.overviewGraphicLayer.getEsriGraphic("overview-graphic").geometry));else if(this.startExtent){const a=this.esriView.toMap(e.origin),i=this.esriView.toMap({x:e.x,y:e.y}),t=this.startExtent.clone().offset(i.x-a.x,i.y-a.y,0);this.overviewGraphicLayer.getEsriGraphic("overview-graphic").geometry=t,e.action==="end"&&(this.$iApi.geo.map.zoomMapTo(this.$iApi.geo.geom.geomEsriToRamp(t),void 0,!1),this.startExtent=null)}}}updateOverview(e){const a=this.overviewmapStore.expandFactor,i=this.zoomMapTo(e.expand(a),void 0,!1),t=this.overviewGraphicLayer.getLocalGraphic("overview-graphic");return this.overviewGraphicLayer.removeGraphic(t),t.geometry=e,this.overviewGraphicLayer.addGraphic(t),i}async cursorHitTest(e){return(await this.esriView.hitTest(e)).results.length>0}}class K extends z{_parseConfig(e){const a=d(this.$vApp.$pinia);a.basemaps=e?.basemaps||{},a.mapConfig.basemaps=Object.values(a.basemaps),a.startMinimized=e?.startMinimized??!0,a.expandFactor=e?.expandFactor??1.5,a.borderColour=e?.borderColour??"#FF0000",a.borderWidth=e?.borderWidth??1,a.areaColour=e?.areaColour??"#000000",a.areaOpacity=e?.areaOpacity??.25}get config(){return super.config}}const Q={class:"relative h-full w-full overflow-hidden"},ee={class:"absolute h-30 w-30 top-0 right-0"},te=["content","aria-label"],ae=H({__name:"overviewmap",setup(u){const e=d(),{t:a}=N(),i=q("iApi"),t=A(),s=f(),n=v(()=>t.activeBasemapConfig),G=v(()=>e.mapConfig),b=v(()=>e.basemaps),_=v(()=>e.startMinimized),r=x(new Y(i)),p=f(!0),M=f(!1),l=x([]);D(async()=>{await i.geo.map.viewPromise,w(),await r.createMap(G.value,s.value.querySelector(".overviewmap")),await r.viewPromise,await r.addMapGraphicLayer(),p.value=_.value;const h=r.updateOverview(i.geo.map.getExtent());l.push(i.event.on(m.MAP_EXTENTCHANGE,W(100,o=>{h.then(()=>{r.updateOverview(o)})}))),l.push(i.event.on(m.MAP_CREATED,()=>{w()})),l.push(i.event.on(m.MAP_REFRESH_END,()=>{w()})),l.push(i.event.on(m.MAP_BASEMAPCHANGE,async o=>{!o.schemaChanged&&r.created&&n.value&&b.value[n.value.tileSchemaId]===void 0&&(await r.removeMapGraphicLayer(),await r.setBasemap(o.basemapId),await r.addMapGraphicLayer())}))}),j(()=>{l.forEach(h=>i.event.off(h)),r.destroyMap()});const $=async h=>{M.value=!p.value&&await r.cursorHitTest(h)},B=()=>({height:`${p.value?48:200}px`,width:`${p.value?48:200}px`}),C=()=>({top:`${p.value?-6:-3}px`,right:`${p.value?-6:-3}px`,transform:`rotate(${p.value?225:45}deg)`}),w=()=>{if(!n.value){console.error("Overview Map could not obtain the basemap config used by the main map");return}try{const h=n.value?.tileSchemaId;if(!h)throw new Error("Overview Map could not obtain the tile schema of the main map");const o=b.value[h];if(!o)throw new Error("Overview Map could not find a suitable basemap that matches the tile schema of the main map");r.created?r.viewPromise.then(()=>r.setBasemap(o.id)):e.updateInitialBasemap(o.id)}catch{r.created||e.updateInitialBasemap(n.value.id),r.viewPromise.then(()=>r.setBasemap(n.value.id))}};return(h,o)=>{const V=U("tippy");return g(),y("div",{class:"relative",ref_key:"el",ref:s},[c("div",{style:L(B()),class:"pointer-events-auto absolute top-0 right-0 mt-12 mr-12 shadow-tm border-4 border-solid border-white bg-white transition-all duration-300 ease-out"},[c("div",Q,[c("div",{class:Z(["overviewmap absolute top-0 right-0 h-192 w-192",{"cursor-move":M.value}]),onMousemove:$},null,34)]),c("div",ee,[J((g(),y("button",{type:"button",tabindex:"0",class:"cursor-pointer absolute h-full w-full",onClick:o[0]||(o[0]=se=>p.value=!p.value),content:S(a)(p.value?"overviewmap.expand":"overviewmap.minimize"),"aria-label":S(a)(p.value?"overviewmap.expand":"overviewmap.minimize")},[(g(),y("svg",{class:"absolute fill-current text-gray-500 transition-all duration-300 ease-out",style:L(C()),xmlns:"http://www.w3.org/2000/svg",fit:"",height:"100%",width:"100%",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",focusable:"false"},o[1]||(o[1]=[c("g",{id:"apple-keyboard-control"},[c("path",{d:"M 19.7782,11.7782L 18.364,13.1924L 12,6.82843L 5.63604,13.1924L 4.22183,11.7782L 12,4L 19.7782,11.7782 Z "})],-1)]),4))],8,te)),[[V,{placement:"left",hideOnClick:!1}]])])],4)],512)}}}),ie=X(ae,[["__scopeId","data-v-213d59af"]]),re={en:{"overviewmap.expand":"Expand Overview","overviewmap.minimize":"Minimize Overview"},fr:{"overviewmap.expand":"Développer l'aperçu","overviewmap.minimize":"Réduire l'aperçu"}};class pe extends K{added(){Object.entries(re).forEach(s=>this.$iApi.$i18n.mergeLocaleMessage(...s)),this._parseConfig(this.config);const e=this.$vApp.$watch(()=>this.config,s=>this._parseConfig(s)),{destroy:a,el:i}=this.mount(ie,{app:this.$element});this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(i.childNodes[0]),this.removed=()=>{e(),a(),d(this.$vApp.$pinia).$reset()}}}export{pe as default};
