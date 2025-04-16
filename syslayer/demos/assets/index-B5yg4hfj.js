import{h5 as u,i7 as f,eN as c,g$ as m,gZ as p,i8 as L,i9 as w,F as A}from"./main-D_jCcUNd.js";import{H as h,a as n,F as l,D as H}from"./hilight-defs-CqXQYtIh.js";import"./preload-helper-ExcqyqRp.js";class d extends u{config={};mode=h.NONE;constructor(e,i){super(i),this.config=e,this.mode=e.mode}async add(e){this.notImplementedError("addGraphics")}async remove(e){this.notImplementedError("removeGraphics")}async reloadHilight(e){this.notImplementedError("reloadHilight")}async getHilightLayer(){const e=await this.layerFetcher();if(e){if(e.isLoaded&&e instanceof f)return e;console.warn("Hilight layer exists but is in bad form.");return}else{console.warn("Hilight layer could not be fetched.");return}}notImplementedError(e){console.warn(`Hilight mode method ${e} was not implemented by subclass.`)}layerFetcher(){const e=this.$iApi.geo.layer.getLayer(n);return e?Promise.resolve(e):new Promise(i=>{let t=0;const s=setInterval(()=>{const a=this.$iApi.geo.layer.getLayer(n);if(a)clearInterval(s),i(a);else if(t+=125,t>=1125){clearInterval(s),i(void 0);return}},125)})}}class y extends d{async add(e){const i=await this.getHilightLayer();i&&await i.addGraphic(e)}async remove(e){const i=await this.getHilightLayer();i&&i.removeGraphic(e)}async reloadHilight(e){await this.remove(e),await this.add(e)}}class $ extends y{handlers=[];onOpacity;offOpacity;lastAdd=0;constructor(e,i){super(e,i),this.onOpacity=e.options?.onOpacity??.75,this.offOpacity=e.options?.offOpacity>.02?e.options.offOpacity:.02,this.$iApi.geo.map.created?this.hilightSetup():this.handlers.push(this.$iApi.event.on(c.MAP_CREATED,()=>{this.hilightSetup()})),this.handlers.push(this.$iApi.event.on(c.MAP_BASEMAPCHANGE,()=>{this.getHilightLayer().then(t=>{t&&t.graphics.length===0&&this.updateFogLayer()})}))}async hilightSetup(){const e=m(this.$vApp.$pinia).activeBasemapConfig;try{const i=this.$iApi.geo.layer.createLayer({id:l,layerType:p.TILE,cosmetic:!0,system:!0,url:e.layers[0].url});await this.$iApi.geo.map.addLayer(i),i.opacity=this.offOpacity,await this.reorderFogLayer()}catch{console.error("Something went wrong while setting up the hilighter.")}}async updateFogLayer(){this.$iApi.geo.map.removeLayer(l),await this.hilightSetup()}async reorderFogLayer(){const e=this.getFogLayer(),i=await this.getHilightLayer();if(!i||!e)return;const t=this.$iApi.geo.layer.layerOrderIds(),s=t.indexOf(e.id),a=t.indexOf(i.id);a<s&&a>-1&&s>-1&&this.$iApi.geo.map.reorder(i,s,!1)}async add(e){this.lastAdd=Date.now();const i=this.getFogLayer();i&&(i.opacity=this.onOpacity,await super.add(e))}async remove(e){await super.remove(e);const i=this.getFogLayer();if(!i)return;const t=Date.now(),s=await this.getHilightLayer();s&&setTimeout(()=>{this.lastAdd<t&&!s.getGraphicCount()&&(i.opacity=this.offOpacity)},300)}async reloadHilight(e){await this.updateFogLayer(),await super.reloadHilight(e)}getFogLayer(){const e=this.$iApi.geo.layer.getLayer(l);if(e&&e instanceof L)return e;console.warn("Hilight fog layer could not be fetched.")}}class g extends y{handlers=[];constructor(e,i){super(e,i),this.hilightSetup(e),this.handlers.push(this.$iApi.event.on(c.MAP_CREATED,()=>{this.hilightSetup(e)}))}hilightSetup(e){this.$iApi.geo.map.viewPromise.then(()=>{this.$iApi.geo.map.esriView.highlightOptions=e.options})}async add(e){await super.add(e);const i=this.$iApi.geo.layer.getLayer(n);if(i&&i.esriLayer&&i.isLoaded&&i instanceof w){const t=e instanceof Array?e:[e];this.$iApi.geo.map.esriView?.whenLayerView(i.esriLayer)?.then(function(s){s.highlight(t.map(a=>i.getEsriGraphic(a.id)))})}}async remove(e){await super.remove(e)}}class v extends A{hilightMode=new d({},this.$iApi);initialized(){this.initHilightLayer()}_parseConfig(e){if(e)switch(e.mode){case h.NONE:this.hilightMode=new d(e,this.$iApi);break;case h.GLOW:this.hilightMode=new g(e,this.$iApi);break;case h.LIFT:this.hilightMode=new y(e,this.$iApi);break;case h.FOG:this.hilightMode=new $(e,this.$iApi);break;default:console.error("Could not find hilight mode:",e.mode);break}else this.hilightMode=new g(H,this.$iApi)}async initHilightLayer(){const e=this.$iApi.geo.layer.createLayer({id:n,layerType:p.GRAPHIC,cosmetic:!0,system:!0,url:""});await this.$iApi.geo.map.addLayer(e)}async addHilight(e){const i=e instanceof Array?e:[e];await this.hilightMode.add(i)}async removeHilight(e){const i=e?e instanceof Array?e:[e]:void 0;await this.hilightMode.remove(i)}async reloadHilight(e){const i=e instanceof Array?e:[e];await this.hilightMode.reloadHilight(i)}async getGraphicsByKey(e,i,t){const s=await this.getHilightLayer();if(!s)return[];let a=s.graphics.map(r=>({...this.deconstructGraphicKey(r.id),og:r}));return e&&(a=a.filter(r=>r.origin===e)),i&&(a=a.filter(r=>r.uid===i)),t&&(a=a.filter(r=>r.oid===t)),a.map(r=>r.og)}constructGraphicKey(e,i,t){return`${n}~${e}~${i}~${t}`}deconstructGraphicKey(e){const i=e.split("~");return i.length!==4&&console.warn("Malformed Hilight Graphic key provided:",e),{origin:i[1],uid:i[2],oid:parseInt(i[3])}}async getHilightLayer(){if(this.hilightMode)return await this.hilightMode.getHilightLayer();console.warn("API get layer request before highlight mode object exists")}}class E extends v{async added(){this._parseConfig(this.config);const e=this.$vApp.$watch(()=>this.config,i=>this._parseConfig(i));this.removed=()=>{e()}}}export{E as default};
