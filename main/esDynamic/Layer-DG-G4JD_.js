import{H as h,n,bP as c,da as b,au as p,B as l,E as v,I as f,U as m,s as g,k as i,o as r,A as w,e as E}from"./main-BL33V88t.js";import{p as L}from"./TimeExtent-BLsRWwps.js";async function U(t){const o="portalItem"in t?t:{portalItem:t},{fromItem:y}=await import("./portalLayers-DgStiVG9.js").then(a=>a.p);try{return await y(o)}catch(a){const s=o?.portalItem,d=s?.id||"unset",u=s?.portal?.url||h.portalUrl;throw n.getLogger("esri.layers.support.fromPortalItem").error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+u+"', id: '"+d+"')",a),a}}let x=0,e=class extends c.EventedMixin(b(E)){constructor(){super(...arguments),this.attributionDataUrl=null,this.fullExtent=new p(-180,-90,180,90,l.WGS84),this.id=Date.now().toString(16)+"-layer-"+x++,this.legendEnabled=!0,this.listMode="show",this.opacity=1,this.parent=null,this.persistenceEnabled=!1,this.popupEnabled=!0,this.attributionVisible=!0,this.spatialReference=l.WGS84,this.title=null,this.type=null,this.url=null,this.visibilityTimeExtent=null,this.visible=!0}static async fromArcGISServerUrl(t){const o=typeof t=="string"?{url:t}:t;return(await import("./arcgisLayers-BFT_HNaJ.js")).fromUrl(o)}static fromPortalItem(t){return U(t)}initialize(){this.when().catch(t=>{v(t)||n.getLogger(this).error("#load()",`Failed to load layer (title: '${this.title??"no title"}', id: '${this.id??"no id"}')`,{error:t})})}destroy(){const t=this.parent;if(t){const o=this;"layers"in t&&t.layers.includes(o)?t.layers.remove(o):"tables"in t&&t.tables.includes(o)?t.tables.remove(o):"baseLayers"in t&&t.baseLayers.includes(o)?t.baseLayers.remove(o):"referenceLayers"in t&&t.referenceLayers.includes(o)&&t.referenceLayers.remove(o),this._set("parent",null)}}get effectiveVisible(){let t=this.visible;const o=this.parent;return t&&o&&"effectiveVisible"in o&&(t&&=o.effectiveVisible),t}get hasAttributionData(){return this.attributionDataUrl!=null}get parsedUrl(){return f(this.url)}async fetchAttributionData(){const t=this.attributionDataUrl;if(this.hasAttributionData&&t)return(await m(t,{query:{f:"json"},responseType:"json"})).data;throw new g("layer:no-attribution-data","Layer does not have attribution data")}};i([r({type:String})],e.prototype,"attributionDataUrl",void 0),i([r({readOnly:!0})],e.prototype,"effectiveVisible",null),i([r({type:p})],e.prototype,"fullExtent",void 0),i([r({readOnly:!0})],e.prototype,"hasAttributionData",null),i([r({type:String,clonable:!1})],e.prototype,"id",void 0),i([r({type:Boolean,nonNullable:!0})],e.prototype,"legendEnabled",void 0),i([r({type:["show","hide","hide-children"]})],e.prototype,"listMode",void 0),i([r({type:Number,range:{min:0,max:1},nonNullable:!0})],e.prototype,"opacity",void 0),i([r({clonable:!1})],e.prototype,"parent",void 0),i([r({readOnly:!0})],e.prototype,"parsedUrl",null),i([r({type:Boolean,readOnly:!0})],e.prototype,"persistenceEnabled",void 0),i([r({type:Boolean})],e.prototype,"popupEnabled",void 0),i([r({type:Boolean})],e.prototype,"attributionVisible",void 0),i([r({type:l})],e.prototype,"spatialReference",void 0),i([r({type:String})],e.prototype,"title",void 0),i([r({readOnly:!0,json:{read:!1}})],e.prototype,"type",void 0),i([r()],e.prototype,"url",void 0),i([r({type:L})],e.prototype,"visibilityTimeExtent",void 0),i([r({type:Boolean,nonNullable:!0})],e.prototype,"visible",void 0),e=i([w("esri.layers.Layer")],e);const D=e;export{D as f};
