import{aW as X,bn as Y,bt as T,k as n,o as u,b2 as ee,b3 as te,q as _,au as M,B as re,A as G,v as L,cG as ie,b1 as H,u as oe,f4 as se,U as ae,aH as U,aD as ne,dA as le,aG as ue,s as Q,V as pe,bQ as J,de as $,ao as ye,bq as ce,a$ as he,D as q,hg as de,bG as me}from"./main-yxqK2SuK.js";import{H as fe}from"./languageUtils-CfJMLsxX.js";import{i as ge,o as we}from"./scaleUtils-BezEVcgM.js";import{n as N}from"./floorFilterUtils-4r-vVdzs.js";import{o as D}from"./drapedUtils-C1ifdZh2.js";import{R as be}from"./normalizeUtils-DCrdkYWL.js";import{f as ve,s as xe,i as Se}from"./utils-_PLxH7L_.js";import{n as Fe}from"./sublayerUtils-e2WNNEKu.js";import{p as Oe}from"./TimeExtent-B5IbLKTu.js";import{n as je,p as Re}from"./popupUtils-CzAXRwA2.js";function Ee(t,e){const{dpi:i,gdbVersion:s,geometry:r,geometryPrecision:a,height:o,historicMoment:d,layerOption:p,mapExtent:l,maxAllowableOffset:y,returnFieldName:c,returnGeometry:f,returnUnformattedValues:x,returnZ:m,spatialReference:F,timeExtent:w,tolerance:g,width:b}=t.toJSON(),{dynamicLayers:j,layerDefs:R,layerIds:V}=Ge(t),k=e?.geometry!=null?e.geometry:null,v={historicMoment:d,geometryPrecision:a,maxAllowableOffset:y,returnFieldName:c,returnGeometry:f,returnUnformattedValues:x,returnZ:m,tolerance:g},E=k?.toJSON()||r;v.imageDisplay=`${b},${o},${i}`,s&&(v.gdbVersion=s),E&&(delete E.spatialReference,v.geometry=JSON.stringify(E),v.geometryType=X(E));const A=F??E?.spatialReference??l?.spatialReference;if(A&&(v.sr=Y(A)),v.time=w?[w.start,w.end].join(","):null,l){const{xmin:Z,ymin:W,xmax:C,ymax:K}=l;v.mapExtent=`${Z},${W},${C},${K}`}return R&&(v.layerDefs=R),j&&!R&&(v.dynamicLayers=j),v.layers=p==="popup"?"visible":p,V&&!j&&(v.layers+=`:${V.join(",")}`),v}function Ge(t){const{mapExtent:e,floors:i,width:s,sublayers:r,layerIds:a,layerOption:o,gdbVersion:d}=t,p=r?.find(m=>m.layer!=null)?.layer?.serviceSublayers,l=o==="popup",y={},c=ge({extent:e,width:s,spatialReference:e?.spatialReference}),f=[],x=m=>{const F=c===0,w=m.minScale===0||c<=m.minScale,g=m.maxScale===0||c>=m.maxScale;if(m.visible&&(F||w&&g))if(m.sublayers)m.sublayers.forEach(x);else{if(a?.includes(m.id)===!1||l&&(!m.popupTemplate||!m.popupEnabled))return;f.unshift(m)}};if(r?.forEach(x),r&&!f.length)y.layerIds=[];else{const m=Fe(f,p,d),F=f.map(w=>{const g=N(i,w);return w.toExportImageJSON(g)});if(m)y.dynamicLayers=JSON.stringify(F);else{if(r){let g=f.map(({id:b})=>b);a&&(g=g.filter(b=>a.includes(b))),y.layerIds=g}else a?.length&&(y.layerIds=a);const w=Ne(i,f);if(w!=null&&w.length){const g={};for(const b of w)b.definitionExpression&&(g[b.id]=b.definitionExpression);Object.keys(g).length&&(y.layerDefs=JSON.stringify(g))}}}return y}function Ne(t,e){const i=!!t?.length,s=e.filter(r=>r.definitionExpression!=null||i&&r.floorInfo!=null);return s.length?s.map(r=>{const a=N(t,r),o=T(a,r.definitionExpression);return{id:r.id,definitionExpression:o??void 0}}):null}var P;let h=P=class extends L{static from(t){return ie(P,t)}constructor(t){super(t),this.dpi=96,this.floors=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=null,this.height=400,this.historicMoment=null,this.layerIds=null,this.layerOption="top",this.mapExtent=null,this.maxAllowableOffset=null,this.returnFieldName=!0,this.returnGeometry=!1,this.returnM=!1,this.returnUnformattedValues=!0,this.returnZ=!1,this.spatialReference=null,this.sublayers=null,this.timeExtent=null,this.tolerance=null,this.width=400}writeHistoricMoment(t,e){e.historicMoment=t&&t.getTime()}};n([u({type:Number,json:{write:!0}})],h.prototype,"dpi",void 0),n([u()],h.prototype,"floors",void 0),n([u({type:String,json:{write:!0}})],h.prototype,"gdbVersion",void 0),n([u({types:ee,json:{read:te,write:!0}})],h.prototype,"geometry",void 0),n([u({type:Number,json:{write:!0}})],h.prototype,"geometryPrecision",void 0),n([u({type:Number,json:{write:!0}})],h.prototype,"height",void 0),n([u({type:Date})],h.prototype,"historicMoment",void 0),n([_("historicMoment")],h.prototype,"writeHistoricMoment",null),n([u({type:[Number],json:{write:!0}})],h.prototype,"layerIds",void 0),n([u({type:["top","visible","all","popup"],json:{write:!0}})],h.prototype,"layerOption",void 0),n([u({type:M,json:{write:!0}})],h.prototype,"mapExtent",void 0),n([u({type:Number,json:{write:!0}})],h.prototype,"maxAllowableOffset",void 0),n([u({type:Boolean,json:{write:!0}})],h.prototype,"returnFieldName",void 0),n([u({type:Boolean,json:{write:!0}})],h.prototype,"returnGeometry",void 0),n([u({type:Boolean,json:{write:!0}})],h.prototype,"returnM",void 0),n([u({type:Boolean,json:{write:!0}})],h.prototype,"returnUnformattedValues",void 0),n([u({type:Boolean,json:{write:!0}})],h.prototype,"returnZ",void 0),n([u({type:re,json:{write:!0}})],h.prototype,"spatialReference",void 0),n([u()],h.prototype,"sublayers",void 0),n([u({type:Oe,json:{write:!0}})],h.prototype,"timeExtent",void 0),n([u({type:Number,json:{write:!0}})],h.prototype,"tolerance",void 0),n([u({type:Number,json:{write:!0}})],h.prototype,"width",void 0),h=P=n([G("esri.rest.support.IdentifyParameters")],h);const z=h;let S=class extends L{constructor(t){super(t),this.displayFieldName=null,this.feature=null,this.layerId=null,this.layerName=null}readFeature(t,e){return H.fromJSON({attributes:{...e.attributes},geometry:{...e.geometry}})}writeFeature(t,e){if(!t)return;const{attributes:i,geometry:s}=t;i&&(e.attributes={...i}),s!=null&&(e.geometry=s.toJSON(),e.geometryType=se.toJSON(s.type))}};n([u({type:String,json:{write:!0}})],S.prototype,"displayFieldName",void 0),n([u({type:H})],S.prototype,"feature",void 0),n([oe("feature",["attributes","geometry"])],S.prototype,"readFeature",null),n([_("feature")],S.prototype,"writeFeature",null),n([u({type:Number,json:{write:!0}})],S.prototype,"layerId",void 0),n([u({type:String,json:{write:!0}})],S.prototype,"layerName",void 0),S=n([G("esri.rest.support.IdentifyResult")],S);const Pe=S;async function Ie(t,e,i){const s=(e=Ae(e)).geometry?[e.geometry]:[],r=ve(t);return r.path+="/identify",be(s).then(a=>{const o=Ee(e,{geometry:a?.[0]}),d=xe({...r.query,f:"json",...o}),p=Se(d,i);return ae(r.path,p).then(Ve).then(l=>Te(l,e.sublayers))})}function Ve(t){const e=t.data;return e.results=e.results||[],e.exceededTransferLimit=!!e.exceededTransferLimit,e.results=e.results.map(i=>Pe.fromJSON(i)),e}function Ae(t){return t=z.from(t)}function Te(t,e){if(!e?.length)return t;const i=new Map;function s(r){i.set(r.id,r),r.sublayers&&r.sublayers.forEach(s)}e.forEach(s);for(const r of t.results)r.feature.sourceLayer=i.get(r.layerId);return t}const B=U();let I=null;function _e(t,e){return e.type==="tile"||e.type==="map-image"}let O=class extends ne{constructor(t){super(t),this._featuresResolutions=new WeakMap,this.highlightGraphics=null,this.highlightGraphicUpdated=null,this.updateHighlightedFeatures=le(async e=>{this.destroyed||this.updatingHandles.addPromise(this._updateHighlightedFeaturesGeometries(e).catch(()=>{}))})}initialize(){const t=e=>{this.updatingHandles.addPromise(this._updateHighlightedFeaturesSymbols(e).catch(()=>{})),this.updateHighlightedFeatures(this._highlightGeometriesResolution)};this.addHandles([ue(()=>this.highlightGraphics,"change",e=>t(e.added),{onListenerAdd:e=>t(e)})])}async fetchPopupFeaturesAtLocation(t,e){const{layerView:{layer:i,view:{scale:s}}}=this;if(!t)throw new Q("fetchPopupFeatures:invalid-area","Nothing to fetch without area",{layer:i});const r=Me(i.sublayers,s,e);if(!r.length)return[];const a=await He(i,r);if(!((i.capabilities?.operations?.supportsIdentify??!0)&&i.version>=10.5)&&!a)throw new Q("fetchPopupFeatures:not-supported","query operation is disabled for this service",{layer:i});return a?this._fetchPopupFeaturesUsingQueries(t,r,e):this._fetchPopupFeaturesUsingIdentify(t,r,e)}clearHighlights(){this.highlightGraphics?.removeAll()}highlight(t){const e=this.highlightGraphics;if(!t||!e)return B;let i=fe(t)?[t]:pe.isCollection(t)?t.toArray():Array.isArray(t)?t:[];if(i=i?.filter(J),(i?.length??0)===0)return B;for(const s of i){const{sourceLayer:r}=s;r!=null&&"geometryType"in r&&r.geometryType==="point"&&(s.visible=!1)}return e.addMany(i),U(()=>e.removeMany(i??[]))}async _updateHighlightedFeaturesSymbols(t){const{layerView:{view:e},highlightGraphics:i,highlightGraphicUpdated:s}=this;if(i&&s)for(const r of t){const a=r.sourceLayer&&"renderer"in r.sourceLayer&&r.sourceLayer.renderer;r.sourceLayer&&"geometryType"in r.sourceLayer&&r.sourceLayer.geometryType==="point"&&a&&"getSymbolAsync"in a&&a.getSymbolAsync(r).then(async o=>{o||=new $;let d=null;const p="visualVariables"in a?a.visualVariables?.find(l=>l.type==="size"):void 0;p&&(I||(I=(await import("./visualVariableUtils-Dbn3kG9j.js")).getSize),d=I(p,r,{view:e.type,scale:e.scale,shape:o.type==="simple-marker"?o.style:null})),d||="width"in o&&"height"in o&&o.width!=null&&o.height!=null?Math.max(o.width,o.height):"size"in o?o.size:16,i.includes(r)&&(r.symbol=new $({style:"square",size:d,xoffset:"xoffset"in o?o.xoffset:0,yoffset:"yoffset"in o?o.yoffset:0}),s(r,"symbol"),r.visible=!0)})}}async _updateHighlightedFeaturesGeometries(t){const{layerView:{layer:e,view:i},highlightGraphics:s,highlightGraphicUpdated:r}=this;if(this._highlightGeometriesResolution=t,!r||!s?.length||!e.capabilities.operations.supportsQuery)return;const a=this._getTargetResolution(t),o=new Map;for(const l of s)if(!this._featuresResolutions.has(l)||this._featuresResolutions.get(l)>a){const y=l.sourceLayer;ye(o,y,()=>new Map).set(l.getObjectId(),l)}const d=Array.from(o,([l,y])=>{const c=l.createQuery();return c.objectIds=[...y.keys()],c.outFields=[l.objectIdField],c.returnGeometry=!0,c.maxAllowableOffset=a,c.outSpatialReference=i.spatialReference,l.queryFeatures(c)}),p=await Promise.all(d);if(!this.destroyed)for(const{features:l}of p)for(const y of l){const c=y.sourceLayer,f=o.get(c).get(y.getObjectId());f&&s.includes(f)&&(f.geometry=y.geometry,r(f,"geometry"),this._featuresResolutions.set(f,a))}}_getTargetResolution(t){const e=t*ce(this.layerView.view.spatialReference),i=e/16;return i<=10?0:t/e*i}async _fetchPopupFeaturesUsingIdentify(t,e,i){const s=await this._createIdentifyParameters(t,e,i);if(s==null)return[];const{results:r}=await Ie(this.layerView.layer.parsedUrl,s,i);return r.map(a=>a.feature)}async _createIdentifyParameters(t,e,i){const{floors:s,layer:r,timeExtent:a,view:{spatialReference:o,scale:d}}=this.layerView;if(!e.length)return null;await Promise.all(e.map(({sublayer:x})=>x.load(i).catch(()=>{})));const p=Math.min(he("mapservice-popup-identify-max-tolerance"),r.allSublayers.reduce((x,m)=>m.renderer?D({renderer:m.renderer,pointerType:i?.pointerType}):x,2)),l=this.createFetchPopupFeaturesQueryGeometry(t,p),y=we(d,o),c=Math.round(l.width/y),f=new M({xmin:l.center.x-y*c,ymin:l.center.y-y*c,xmax:l.center.x+y*c,ymax:l.center.y+y*c,spatialReference:l.spatialReference});return new z({floors:s,gdbVersion:"gdbVersion"in r?r.gdbVersion:void 0,geometry:t,height:c,layerOption:"popup",mapExtent:f,returnGeometry:!0,spatialReference:o,sublayers:r.sublayers,timeExtent:a,tolerance:p,width:c})}async _fetchPopupFeaturesUsingQueries(t,e,i){const{layerView:{floors:s,timeExtent:r}}=this,a=e.map(async({sublayer:o,popupTemplate:d})=>{if(await o.load(i).catch(()=>{}),o.capabilities&&!o.capabilities.operations.supportsQuery)return[];const p=o.createQuery(),l=D({renderer:o.renderer,pointerType:i?.pointerType}),y=this.createFetchPopupFeaturesQueryGeometry(t,l),c=new Set,[f]=await Promise.all([je(o,d),o.renderer?.collectRequiredFields(c,o.fieldsIndex)]);q(i),de(c,o.fieldsIndex,f);const x=Array.from(c).sort();p.geometry=y,p.outFields=x,p.timeExtent=r;const m=N(s,o);p.where=T(p.where,m);const F=this._getTargetResolution(y.width/l),w=await Le(d);q(i);const g=o.geometryType==="point"||w&&w.arcadeUtils.hasGeometryOperations(d);g||(p.maxAllowableOffset=F);let{features:b}=await o.queryFeatures(p,i);const j=g?0:F;b=await Ue(o,b,i);for(const R of b)this._featuresResolutions.set(R,j);return b});return(await Promise.allSettled(a)).reduce((o,d)=>d.status==="fulfilled"?[...o,...d.value]:o,[]).filter(J)}};function Me(t,e,i){const s=[];if(!t)return s;const r=a=>{const o=a.minScale===0||e<=a.minScale,d=a.maxScale===0||e>=a.maxScale;if(a.visible&&o&&d){if(a.sublayers)a.sublayers.forEach(r);else if(a.popupEnabled){const p=Re(a,{...i,defaultPopupTemplateEnabled:!1});p!=null&&s.unshift({sublayer:a,popupTemplate:p})}}};return t.map(r),s}function Le(t){return t.expressionInfos?.length||Array.isArray(t.content)&&t.content.some(e=>e.type==="expression")?me():Promise.resolve()}async function He(t,e){if(t.capabilities?.operations?.supportsQuery)return!0;try{return await Promise.any(e.map(({sublayer:i})=>i.load().then(()=>i.capabilities.operations.supportsQuery)))}catch{return!1}}async function Ue(t,e,i){const s=t.renderer;return s&&"defaultSymbol"in s&&!s.defaultSymbol&&(e=s.valueExpression?await Promise.all(e.map(r=>s.getSymbolAsync(r,i).then(a=>a?r:null))).then(r=>r.filter(a=>a!=null)):e.filter(r=>s.getSymbol(r)!=null)),e}n([u({constructOnly:!0})],O.prototype,"createFetchPopupFeaturesQueryGeometry",void 0),n([u({constructOnly:!0})],O.prototype,"layerView",void 0),n([u({constructOnly:!0})],O.prototype,"highlightGraphics",void 0),n([u({constructOnly:!0})],O.prototype,"highlightGraphicUpdated",void 0),n([u({constructOnly:!0})],O.prototype,"updatingHandles",void 0),O=n([G("esri.views.layers.support.MapServiceLayerViewHelper")],O);export{O as R,_e as _};
