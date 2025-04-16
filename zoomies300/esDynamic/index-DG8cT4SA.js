import{gk as m,g$ as u,dE as c,gc as f,ga as p,h0 as w,h1 as A,F as L}from"./main-DqYc2eZZ.js";import{H as h,a as n,F as l,D as $}from"./hilight-defs-DzKgjtLG.js";class d extends m{config={};mode=h.NONE;constructor(i,t){super(t),this.config=i,this.mode=i.mode}async add(i){this.notImplementedError("addGraphics")}async remove(i){this.notImplementedError("removeGraphics")}async reloadHilight(i){this.notImplementedError("reloadHilight")}async getHilightLayer(){const i=await this.layerFetcher();if(i){if(i.isLoaded&&i instanceof u)return i;console.warn("Hilight layer exists but is in bad form.");return}else{console.warn("Hilight layer could not be fetched.");return}}notImplementedError(i){console.warn(`Hilight mode method ${i} was not implemented by subclass.`)}layerFetcher(){const i=this.$iApi.geo.layer.getLayer(n);return i?Promise.resolve(i):new Promise(t=>{let e=0;const s=setInterval(()=>{const a=this.$iApi.geo.layer.getLayer(n);if(a)clearInterval(s),t(a);else if(e+=125,e>=1125){clearInterval(s),t(void 0);return}},125)})}}class g extends d{async add(i){const t=await this.getHilightLayer();t&&await t.addGraphic(i)}async remove(i){const t=await this.getHilightLayer();t&&t.removeGraphic(i)}async reloadHilight(i){await this.remove(i),await this.add(i)}}class H extends g{handlers=[];onOpacity;offOpacity;lastAdd=0;constructor(i,t){super(i,t),this.onOpacity=i.options?.onOpacity??.75,this.offOpacity=i.options?.offOpacity>.02?i.options.offOpacity:.02,this.$iApi.geo.map.created?this.hilightSetup():this.handlers.push(this.$iApi.event.on(c.MAP_CREATED,()=>{this.hilightSetup()})),this.handlers.push(this.$iApi.event.on(c.MAP_BASEMAPCHANGE,()=>{this.getHilightLayer().then(e=>{e&&e.graphics.length===0&&this.updateFogLayer()})}))}async hilightSetup(){const i=f(this.$vApp.$pinia).activeBasemapConfig;try{const t=this.$iApi.geo.layer.createLayer({id:l,layerType:p.TILE,cosmetic:!0,url:i.layers[0].url});await this.$iApi.geo.map.addLayer(t),t.opacity=this.offOpacity,await this.reorderFogLayer()}catch{console.error("Something went wrong while setting up the hilighter.")}}async updateFogLayer(){this.$iApi.geo.map.removeLayer(l),await this.hilightSetup()}async reorderFogLayer(){const i=this.getFogLayer(),t=await this.getHilightLayer();if(!t||!i)return;const e=this.$iApi.geo.layer.layerOrderIds(),s=e.indexOf(i.id),a=e.indexOf(t.id);a<s&&a>-1&&s>-1&&this.$iApi.geo.map.reorder(t,s,!1)}async add(i){this.lastAdd=Date.now();const t=this.getFogLayer();t&&(t.opacity=this.onOpacity,await super.add(i))}async remove(i){await super.remove(i);const t=this.getFogLayer();if(!t)return;const e=Date.now(),s=await this.getHilightLayer();s&&setTimeout(()=>{this.lastAdd<e&&!s.getGraphicCount()&&(t.opacity=this.offOpacity)},300)}async reloadHilight(i){await this.updateFogLayer(),await super.reloadHilight(i)}getFogLayer(){const i=this.$iApi.geo.layer.getLayer(l);if(i&&i instanceof w)return i;console.warn("Hilight fog layer could not be fetched.")}}class y extends g{handlers=[];constructor(i,t){super(i,t),this.hilightSetup(i),this.handlers.push(this.$iApi.event.on(c.MAP_CREATED,()=>{this.hilightSetup(i)}))}hilightSetup(i){this.$iApi.geo.map.viewPromise.then(()=>{this.$iApi.geo.map.esriView.highlightOptions=i.options})}async add(i){await super.add(i);const t=this.$iApi.geo.layer.getLayer(n);if(t&&t.esriLayer&&t.isLoaded&&t instanceof A){const e=i instanceof Array?i:[i];this.$iApi.geo.map.esriView?.whenLayerView(t.esriLayer)?.then(function(s){s.highlight(e.map(a=>t.getEsriGraphic(a.id)))})}}async remove(i){await super.remove(i)}}class v extends L{hilightMode=new d({},this.$iApi);initialized(){this.initHilightLayer()}_parseConfig(i){if(i)switch(i.mode){case h.NONE:this.hilightMode=new d(i,this.$iApi);break;case h.GLOW:this.hilightMode=new y(i,this.$iApi);break;case h.LIFT:this.hilightMode=new g(i,this.$iApi);break;case h.FOG:this.hilightMode=new H(i,this.$iApi);break;default:console.error("Could not find hilight mode:",i.mode);break}else this.hilightMode=new y($,this.$iApi)}async initHilightLayer(){const i=this.$iApi.geo.layer.createLayer({id:n,layerType:p.GRAPHIC,cosmetic:!0,url:""});await this.$iApi.geo.map.addLayer(i)}async addHilight(i){const t=i instanceof Array?i:[i];await this.hilightMode.add(t)}async removeHilight(i){const t=i?i instanceof Array?i:[i]:void 0;await this.hilightMode.remove(t)}async reloadHilight(i){const t=i instanceof Array?i:[i];await this.hilightMode.reloadHilight(t)}async getGraphicsByKey(i,t,e){const s=await this.getHilightLayer();if(!s)return[];let a=s.graphics.map(r=>({...this.deconstructGraphicKey(r.id),og:r}));return i&&(a=a.filter(r=>r.origin===i)),t&&(a=a.filter(r=>r.uid===t)),e&&(a=a.filter(r=>r.oid===e)),a.map(r=>r.og)}constructGraphicKey(i,t,e){return`${n}~${i}~${t}~${e}`}deconstructGraphicKey(i){const t=i.split("~");return t.length!==4&&console.warn("Malformed Hilight Graphic key provided:",i),{origin:t[1],uid:t[2],oid:parseInt(t[3])}}async getHilightLayer(){if(this.hilightMode)return await this.hilightMode.getHilightLayer();console.warn("API get layer request before highlight mode object exists")}}class O extends v{async added(){this._parseConfig(this.config);const i=this.$vApp.$watch(()=>this.config,t=>this._parseConfig(t));this.removed=()=>{i()}}}export{O as default};
