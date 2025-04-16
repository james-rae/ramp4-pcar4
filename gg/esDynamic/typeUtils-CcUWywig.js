import{U as ne,aK as w,ah as le,ai as ae,n as M,a2 as K,a$ as ue,s as pe,jg as ye,o as u,e7 as de,eS as O,x as i,z as s,B as Z,K as E,bG as ce,G as N,eQ as he,dG as F,dJ as fe,bi as A,bt as me,aX as k,hF as Q,dI as X,eT as ge,b_ as be}from"./main-DTtQVgOw.js";import{w as W}from"./ClassBreaksRenderer-DxxNVFr5.js";import{v as $,p as C,j as ve,n as we,c as xe,b as Se,d as _e}from"./commonProperties-DioV_4mF.js";import{e as je}from"./LRUCache-CNrAxPgU.js";import{r as Ie}from"./Version-DjkwJXVg.js";import{Z as Ee}from"./FieldsIndex-BOXTi5rx.js";import{J as Re,R as De}from"./utils-D8GSkTMs.js";import{a as Me,e as Ce,c as Ve}from"./heatmapUtils-BfzDco28.js";import{u as Te}from"./RendererLegendOptions-Dt-AfiOW.js";import{p as Y}from"./SimpleRenderer-CsMvzAGF.js";import{A as ee}from"./UniqueValueRenderer-BYZIAL39.js";const te="esri.renderers.support.DictionaryLoader",Ne={type:"CIMSimpleLineCallout",lineSymbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",width:.5,color:[0,0,0,255]}]}};class ie{constructor(t,r,o){this.config=null,this.fieldMap=null,this.url=null,this._ongoingRequests=new Map,this._symbolCache=new je(100),this._dictionaryVersion=null,this._fieldIndex=null,this._dictionaryPromise=null,this.url=t,this.config=r,this.fieldMap=o}getSymbolFields(){return this._symbolFields}async getSymbolAsync(t,r){let o;this._dictionaryPromise||(this._dictionaryPromise=this.fetchResources(r));try{o=await this._dictionaryPromise}catch(d){if(ne(d))return this._dictionaryPromise=null,null}const y=this._dictionaryVersion?.greaterEqual(4,0),l={};if(this.fieldMap)for(const d of this._symbolFields){const c=Re(this.fieldMap[d],this._fieldIndex);if(c){const n=t.attributes[c];l[d]=y?n:n!=null?""+t.attributes[c]:""}else l[d]=""}let a=null;try{a=o?.(l,r)}catch{return null}if(!a||typeof a!="string"||a==="invalid")return null;const g=a.split(";"),_=[],b=[];for(let d=0;d<g.length;d++){const c=g[d];if(c){if(c.includes("po:")){const n=c.slice(3).split("|");if(n.length===3){const j=n[0],I=n[1];let m=n[2];const T="countrylabel";if(j===T&&I==="TextString"){if(this.fieldMap!=null){let v=this.fieldMap[T];v==null&&(v=T,this.fieldMap[v]=v),t.attributes[v]=m}continue}if(I==="DashTemplate")m=m.split(" ").map(v=>Number(v));else if(I==="Color"){const v=new w(m).toRgba();m=[v[0],v[1],v[2],255*v[3]]}else m=Number(m);b.push({primitiveName:j,propertyName:I,value:m,defaultValue:null})}}else if(c.includes("|")){for(const n of c.split("|"))if(this._itemNames.has(n)){_.push(n);break}}else if(this._itemNames.has(c))_.push(c);else if(d===0){_.length=0;let n="Invalid_P";t.geometry!=null&&(le(t.geometry)?n="Invalid_A":ae(t.geometry)&&(n="Invalid_L")),_.push(n);break}}}const x=t.geometry==null||!t.geometry.hasZ&&t.geometry.type==="point";return this._cimPartsToCIMSymbol(t,_,b,x,r)}async fetchResources(t){if(this._dictionaryPromise)return this._dictionaryPromise;if(!this.url)return void M.getLogger(te).error("no valid URL!");const r=K(this.url+"/resources/styles/dictionary-info.json",{responseType:"json",query:{f:"json"},signal:t!=null?t.signal:null}),[{data:o}]=await Promise.all([r,ue()]);if(!o)throw this._dictionaryPromise=null,new pe("esri.renderers.DictionaryRenderer","Bad dictionary data!");const{authoringInfo:y,dictionary_version:l,expression:a,itemsNames:g}=o,_=a;let b=!1;l&&(this._dictionaryVersion=Ie.parse(l),b=this._dictionaryVersion.greaterEqual(4,0)),this._refSymbolUrlTemplate=this.url+"/"+o.cimRefTemplateUrl,this._itemNames=new Set(g),this._symbolFields=y.symbol;const x={};if(this.config){const n=this.config;for(const j in n)x[j]=n[j]}if(y.configuration)for(const n of y.configuration)x.hasOwnProperty(n.name)||(x[n.name]=n.value);const d=[];if(t?.fields&&this.fieldMap)for(const n in this.fieldMap){const j=this.fieldMap[n],I=t.fields.filter(m=>m.name.toLowerCase()===j?.toLowerCase());I.length>0&&d.push({...I[0],type:b?I[0].type:"esriFieldTypeString"})}d.length>0&&(this._fieldIndex=new Ee(d));const c=ye(_,t!=null?t.spatialReference:null,d,x).then(n=>{const j={scale:0};return(I,m)=>{if(n==null)return null;const T=n.repurposeFeature({geometry:null,attributes:I});return j.scale=m!=null?m.scale??void 0:void 0,n.evaluate({$feature:T,$view:j},n.services)}}).catch(n=>(M.getLogger(te).error("Creating dictionary expression failed:",n),null));return this._dictionaryPromise=c,c}async _cimPartsToCIMSymbol(t,r,o,y,l){const a=new Array(r.length);for(let b=0;b<r.length;b++)a[b]=this._getSymbolPart(r[b],l);let g=await Promise.all(a);const _=this.fieldMap;if(_&&g.length>0){const{OverrideHelper:b}=await import("./OverrideHelper-Dm6Ouqiz.js").then(x=>x.O);g=u(g);for(const x of g)b.applyDictionaryTextOverrides(x,t,_,this._fieldIndex,De(x))}return new de({data:Pe(g,o,y)})}async _getSymbolPart(t,r){const o=this._symbolCache.get(t);if(o)return o;if(this._ongoingRequests.has(t))return this._ongoingRequests.get(t).then(a=>a.data);const y=this._refSymbolUrlTemplate.replaceAll(/\{itemName\}/gi,t),l=K(y,{responseType:"json",query:{f:"json"},...r});this._ongoingRequests.set(t,l),l.finally(()=>this._ongoingRequests.delete(t));try{const a=await l;return this._symbolCache.put(t,a.data),a.data}catch(a){throw a}}}function Pe(e,t,r){if(!e||e.length===0)return null;const o={...e[0]};if(e.length>1){o.effects=null,o.symbolLayers=[];for(const y of e){const l=y;if(l.effects!=null)for(const a of l.symbolLayers)a.effects==null?a.effects=l.effects:a.effects.unshift(...l.effects);o.symbolLayers.unshift(...l.symbolLayers)}}return r&&(o.callout=Ne),{type:"CIMSymbolReference",symbol:o,primitiveOverrides:t}}var H;let S=H=class extends $(C){constructor(e){super(e),this.config=null,this.fieldMap=null,this.scaleExpression=null,this.scaleExpressionTitle=null,this.url=null,this.type="dictionary"}get _loader(){return new ie(this.url,this.config,this.fieldMap)}writeData(e,t){e&&(t.scalingExpressionInfo={expression:e,returnType:"number"})}writeVisualVariables(e,t,r,o){o?.origin||super.writeVisualVariables(e,t,r,o)}clone(){return new H({config:u(this.config),scaleExpression:this.scaleExpression,scaleExpressionTitle:this.scaleExpressionTitle,fieldMap:u(this.fieldMap),url:u(this.url),visualVariables:u(this.visualVariables)})}async getSymbolAsync(e,t){return this._loader.getSymbolAsync(e,t)}async collectRequiredFields(e,t){await this.collectVVRequiredFields(e,t),this.scaleExpression&&await O(e,t,this.scaleExpression);for(const r in this.fieldMap){const o=this.fieldMap[r];t.has(o)&&e.add(o)}}get arcadeRequired(){return!0}getSymbol(){return null}get symbols(){return[]}getAttributeHash(){return this.visualVariables?.reduce((e,t)=>e+t.getAttributeHash(),"")??""}getMeshHash(){return`${this.url}-${JSON.stringify(this.fieldMap)}`}getSymbolFields(){return this._loader.getSymbolFields()}};i([s({type:ie})],S.prototype,"_loader",null),i([s({type:Object,json:{read:{source:"configuration"},write:{target:"configuration"}}})],S.prototype,"config",void 0),i([s({type:Object,json:{write:!0}})],S.prototype,"fieldMap",void 0),i([s({type:String,json:{read:{source:"scalingExpressionInfo.expression"},write:!0}})],S.prototype,"scaleExpression",void 0),i([Z("scaleExpression")],S.prototype,"writeData",null),i([s({type:String,json:{read:{source:"scalingExpressionInfo.title"},write:{target:"scalingExpressionInfo.title",overridePolicy(e){return{enabled:!!e&&!!this.scaleExpression}}}}})],S.prototype,"scaleExpressionTitle",void 0),i([s({type:String,json:{write:!0}})],S.prototype,"url",void 0),i([Z("visualVariables")],S.prototype,"writeVisualVariables",null),S=H=i([E("esri.renderers.DictionaryRenderer")],S);const qe=S;var z;let R=z=class extends N{constructor(e){super(e),this.color=null,this.field=null,this.label=null,this.valueExpression=null,this.valueExpressionTitle=null}castField(e){return e==null?e:typeof e=="function"?(M.getLogger(this).error(".field: field must be a string value"),null):he(e)}getAttributeHash(){return`${this.field}-${this.valueExpression}`}clone(){return new z({color:this.color?.clone(),field:this.field,label:this.label,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})}};i([s({type:w,json:{type:[Number],write:!0}})],R.prototype,"color",void 0),i([s({type:String,json:{write:!0}})],R.prototype,"field",void 0),i([ce("field")],R.prototype,"castField",null),i([s({type:String,json:{write:!0}})],R.prototype,"label",void 0),i([s({type:String,json:{write:!0}})],R.prototype,"valueExpression",void 0),i([s({type:String,json:{write:!0}})],R.prototype,"valueExpressionTitle",void 0),R=z=i([E("esri.renderers.support.AttributeColorInfo")],R);const se=R;var B;let L=B=class extends N{constructor(){super(...arguments),this.unit=null}clone(){return new B({unit:this.unit})}};i([s({type:String,json:{write:!0}})],L.prototype,"unit",void 0),L=B=i([E("esri.renderers.support.DotDensityLegendOptions")],L);const Oe=L;var J;let h=J=class extends $(C){constructor(e){super(e),this.attributes=null,this.backgroundColor=new w([0,0,0,0]),this.dotBlendingEnabled=!0,this.dotShape="square",this.dotSize=1,this.legendOptions=null,this.outline=new F,this.dotValue=null,this.referenceScale=null,this.seed=1,this.type="dot-density"}calculateDotValue(e){if(this.referenceScale==null)return this.dotValue;const t=e/this.referenceScale*this.dotValue;return t<1?1:t}getSymbol(){return new fe({outline:this.outline})}async getSymbolAsync(){return this.getSymbol()}get symbols(){return[this.getSymbol()]}getAttributeHash(){return this.attributes?.reduce((e,t)=>e+t.getAttributeHash(),"")??""}getMeshHash(){return JSON.stringify(this.outline)}clone(){return new J({attributes:u(this.attributes),backgroundColor:u(this.backgroundColor),dotBlendingEnabled:u(this.dotBlendingEnabled),dotShape:u(this.dotShape),dotSize:u(this.dotSize),dotValue:u(this.dotValue),legendOptions:u(this.legendOptions),outline:u(this.outline),referenceScale:u(this.referenceScale),seed:u(this.seed),visualVariables:u(this.visualVariables),authoringInfo:u(this.authoringInfo)})}getControllerHash(){return`${this.attributes?.map(e=>e.field||e.valueExpression||"")}-${this.outline&&JSON.stringify(this.outline.toJSON())||""}`}async collectRequiredFields(e,t){await this.collectVVRequiredFields(e,t);for(const r of this.attributes??[])r.valueExpression&&await O(e,t,r.valueExpression),r.field&&e.add(r.field)}};i([s({type:[se],json:{write:!0}})],h.prototype,"attributes",void 0),i([s({type:w,json:{write:!0}})],h.prototype,"backgroundColor",void 0),i([s({type:Boolean,json:{write:!0}})],h.prototype,"dotBlendingEnabled",void 0),i([s({type:String,json:{write:!1}})],h.prototype,"dotShape",void 0),i([s({type:Number,json:{write:!0}})],h.prototype,"dotSize",void 0),i([s({type:Oe,json:{write:!0}})],h.prototype,"legendOptions",void 0),i([s({type:F,json:{default:null,write:!0}})],h.prototype,"outline",void 0),i([s({type:Number,json:{write:!0}})],h.prototype,"dotValue",void 0),i([s({type:Number,json:{write:!0}})],h.prototype,"referenceScale",void 0),i([s({type:Number,json:{write:!0}})],h.prototype,"seed",void 0),i([A({dotDensity:"dot-density"})],h.prototype,"type",void 0),h=J=i([E("esri.renderers.DotDensityRenderer")],h);const Le=h;var U;let P=U=class extends N{constructor(e){super(e),this.color=null,this.ratio=null}clone(){return new U({color:this.color&&this.color.clone(),ratio:this.ratio})}};i([s({type:w,json:{type:[me],default:null,write:{isRequired:!0}}})],P.prototype,"color",void 0),i([s({type:Number,json:{write:{isRequired:!0}}})],P.prototype,"ratio",void 0),P=U=i([E("esri.renderers.support.HeatmapColorStop")],P);const q=P;let V=class extends k.ClonableMixin(N){constructor(){super(...arguments),this.minLabel=null,this.maxLabel=null,this.title=null}};i([s({type:String,json:{write:!0}})],V.prototype,"minLabel",void 0),i([s({type:String,json:{write:!0}})],V.prototype,"maxLabel",void 0),i([s({type:String,json:{write:!0}})],V.prototype,"title",void 0),V=i([E("esri.renderers.support.HeatmapLegendOptions")],V);var G;function re(e){if(e!=null){const{maxDensity:t,minDensity:r,radius:o}=e;if(t!=null||r!=null||o!=null){const{blurRadius:y,maxPixelIntensity:l,minPixelIntensity:a,...g}=e;return g}}return e}let p=G=class extends C{constructor(e){super(e),this.authoringInfo=null,this.colorStops=[new q({ratio:0,color:new w("rgba(255, 140, 0, 0)")}),new q({ratio:.75,color:new w("rgba(255, 140, 0, 1)")}),new q({ratio:.9,color:new w("rgba(255, 0,   0, 1)")})],this.field=null,this.legendOptions=null,this.maxDensity=.04,this.minDensity=0,this.radius=18,this.referenceScale=0,this.type="heatmap",this.valueExpression=null,this.valueExpressionTitle=null}normalizeCtorArgs(e){return re(e)}get blurRadius(){return Me(this.radius)}set blurRadius(e){const t=this.maxPixelIntensity,r=this.minPixelIntensity;this._set("radius",Ce(e)),this._set("maxDensity",t*this._pixelIntensityToDensity),this._set("minDensity",r*this._pixelIntensityToDensity)}get maxPixelIntensity(){return this.maxDensity/this._pixelIntensityToDensity}set maxPixelIntensity(e){this._set("maxDensity",e*this._pixelIntensityToDensity)}get minPixelIntensity(){return this.minDensity/this._pixelIntensityToDensity}set minPixelIntensity(e){this._set("minDensity",e*this._pixelIntensityToDensity)}get _pixelIntensityToDensity(){return 24/(Ve**2*this.blurRadius**4)}read(e,t){e=re(e),super.read(e,t)}getSymbol(){return new X}async getSymbolAsync(){return this.getSymbol()}get symbols(){return[this.getSymbol()]}async collectRequiredFields(e,t){const r=this.field,o=this.valueExpression;r&&typeof r=="string"&&ge(e,t,r),o&&typeof o=="string"&&await O(e,t,o)}getAttributeHash(){return""}getMeshHash(){return`${JSON.stringify(this.colorStops)}.${this.blurRadius}.${this.field}`}clone(){return new G({authoringInfo:this.authoringInfo&&this.authoringInfo.clone(),colorStops:u(this.colorStops),field:this.field,legendOptions:u(this.legendOptions),maxDensity:this.maxDensity,minDensity:this.minDensity,radius:this.radius,referenceScale:this.referenceScale,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})}};i([s({type:ve,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],p.prototype,"authoringInfo",void 0),i([s({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],p.prototype,"blurRadius",null),i([s({type:[q],json:{write:{isRequired:!0}}})],p.prototype,"colorStops",void 0),i([s({type:String,json:{write:!0}})],p.prototype,"field",void 0),i([s({type:V,json:{write:!0}})],p.prototype,"legendOptions",void 0),i([s({type:Number,json:{write:!0}})],p.prototype,"maxDensity",void 0),i([s({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],p.prototype,"maxPixelIntensity",null),i([s({type:Number,json:{write:!0}})],p.prototype,"minDensity",void 0),i([s({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],p.prototype,"minPixelIntensity",null),i([s({type:Number,cast:Q,json:{write:!0}})],p.prototype,"radius",void 0),i([s({type:Number,range:{min:0},json:{default:0,write:!0}})],p.prototype,"referenceScale",void 0),i([A({heatmap:"heatmap"})],p.prototype,"type",void 0),i([s({type:String,json:{write:!0,origins:{"web-document":{write:!1},"portal-item":{write:!1}}}})],p.prototype,"valueExpression",void 0),i([s({type:String})],p.prototype,"valueExpressionTitle",void 0),i([s({readOnly:!0})],p.prototype,"_pixelIntensityToDensity",null),p=G=i([E("esri.renderers.HeatmapRenderer")],p);const oe=p;let D=class extends k.ClonableMixin(N){constructor(){super(...arguments),this.color=new w([0,0,0,0]),this.label=null,this.threshold=0}};i([s({type:w,json:{write:!0}})],D.prototype,"color",void 0),i([s({type:String,json:{write:!0}})],D.prototype,"label",void 0),i([s({type:Number,range:{min:0,max:1},json:{write:!0}})],D.prototype,"threshold",void 0),D=i([E("esri.renderers.support.OthersCategory")],D);const Fe={base:xe,key:"type",typeMap:{size:Se,opacity:_e}};let f=class extends $(k.ClonableMixin(C)){constructor(e){super(e),this.attributes=null,this.backgroundFillSymbol=null,this.defaultColor=new w([0,0,0,0]),this.defaultLabel=null,this.holePercentage=0,this.othersCategory=new D,this.legendOptions=null,this.outline=null,this.size=12,this.type="pie-chart",this.visualVariables=null}getSymbol(){return new X({size:this.size?this.size/2+(this.outline?.width||0):0})}async getSymbolAsync(){return this.getSymbol()}get symbols(){return[this.getSymbol(),this.backgroundFillSymbol].filter(be)}getAttributeHash(){return this.visualVariables?.reduce((e,t)=>e+t.getAttributeHash(),"")??""}getMeshHash(){return this.symbols.reduce((e,t)=>e+JSON.stringify(t),"")}async collectRequiredFields(e,t){await this.collectVVRequiredFields(e,t);for(const r of this.attributes)r.valueExpression&&await O(e,t,r.valueExpression),r.field&&e.add(r.field)}};i([s({type:[se],json:{write:!0}})],f.prototype,"attributes",void 0),i([s(we)],f.prototype,"backgroundFillSymbol",void 0),i([s({type:w,json:{write:!0}})],f.prototype,"defaultColor",void 0),i([s({type:String,json:{write:!0}})],f.prototype,"defaultLabel",void 0),i([s({type:Number,range:{min:0,max:1},json:{write:!0}})],f.prototype,"holePercentage",void 0),i([s({type:D,json:{write:!0}})],f.prototype,"othersCategory",void 0),i([s({type:Te,json:{write:!0}})],f.prototype,"legendOptions",void 0),i([s({type:F,json:{default:null,write:!0}})],f.prototype,"outline",void 0),i([s({type:Number,cast:Q,json:{write:!0}})],f.prototype,"size",void 0),i([A({pieChart:"pie-chart"})],f.prototype,"type",void 0),i([s({types:[Fe]})],f.prototype,"visualVariables",void 0),f=i([E("esri.renderers.PieChartRenderer")],f);const Ae=f,ke={key:"type",base:C,typeMap:{heatmap:oe,simple:Y,"unique-value":ee,"class-breaks":W,"dot-density":Le,dictionary:qe,"pie-chart":Ae},errorContext:"renderer"},$e={key:"type",base:C,typeMap:{simple:Y,"unique-value":ee,"class-breaks":W,heatmap:oe},errorContext:"renderer",validate:He};function He(e){switch(e.type){case"simple":return ze(e);case"unique-value":return Be(e);case"class-breaks":return Je(e);case"heatmap":return e}}function ze(e){if(e.symbol)return e;M.getLogger("esri.renderers.support.types").error("Removed invalid 'simple' renderer without a symbol from web scene.")}function Be(e){const t=e.uniqueValueInfos,r=t?.filter(({symbol:o,label:y},l)=>(o||M.getLogger("esri.renderers.support.types").error(`Removed invalid unique value info ([${l}] ${y}) without a symbol from web scene.`),!!o));return r?.length!==t?.length&&(e.uniqueValueInfos=r),e}function Je(e){const t=e.classBreakInfos,r=t?.filter(({symbol:o,label:y},l)=>(o||M.getLogger("esri.renderers.support.types").error(`Removed invalid class break info ([${l}] ${y}) without a symbol from web scene.`),!!o));return r?.length!==t?.length&&(e.classBreakInfos=r),e}export{q as l,ke as m,$e as u};
