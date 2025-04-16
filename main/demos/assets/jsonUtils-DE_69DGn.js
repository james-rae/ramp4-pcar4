import{H as ue,aE as v,ab as pe,ac as ye,n as N,U as Q,bJ as ce,s as de,ii as he,h as u,ij as me,fr as F,q as i,u as s,v as W,C as _,bA as fe,A as q,ik as ge,df as G,di as be,bm as L,br as ve,b0 as K,fB as ee,dh as te,il as we,bT as Se,em as xe,B as $e}from"./main-C45WTWFO.js";import{v as A,p as R,j as je,n as _e,c as Ie,b as Ee,d as Ve,m as Re,A as ie,z as se}from"./UniqueValueRenderer-COdHaa9j.js";import{e as De}from"./LRUCache-CJsGnEBa.js";import{r as Me}from"./Version-Bngs8ph3.js";import{Z as Ne}from"./FieldsIndex-Tcaxvyqr.js";import{y as Pe}from"./OverrideHelper-5KGCu7Kn.js";import{J as Te,R as qe}from"./utils-QWndGYJy.js";import{a as Ce,e as Oe,c as Fe}from"./heatmapUtils-B8gsHMDl.js";import{a as Le}from"./RendererLegendOptions-ChHkZLAT.js";const X="esri.renderers.support.DictionaryLoader",Ae={type:"CIMSimpleLineCallout",lineSymbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",width:.5,color:[0,0,0,255]}]}};let re=class{constructor(t,r,o){this.config=null,this.fieldMap=null,this.url=null,this._ongoingRequests=new Map,this._symbolCache=new De(100),this._dictionaryVersion=null,this._fieldIndex=null,this._dictionaryPromise=null,this.url=t,this.config=r,this.fieldMap=o}getSymbolFields(){return this._symbolFields}async getSymbolAsync(t,r){let o;this._dictionaryPromise||(this._dictionaryPromise=this.fetchResources(r));try{o=await this._dictionaryPromise}catch(c){if(ue(c))return this._dictionaryPromise=null,null}const y=this._dictionaryVersion?.greaterEqual(4,0),l={};if(this.fieldMap)for(const c of this._symbolFields){const d=Te(this.fieldMap[c],this._fieldIndex);if(d){const n=t.attributes[d];l[c]=y?n:n!=null?""+t.attributes[d]:""}else l[c]=""}let a=null;try{a=o?.(l,r)}catch{return null}if(!a||typeof a!="string"||a==="invalid")return null;const w=a.split(";"),x=[],f=[];for(let c=0;c<w.length;c++){const d=w[c];if(d){if(d.includes("po:")){const n=d.slice(3).split("|");if(n.length===3){const $=n[0],j=n[1];let g=n[2];const P="countrylabel";if($===P&&j==="TextString"){if(this.fieldMap!=null){let b=this.fieldMap[P];b==null&&(b=P,this.fieldMap[b]=b),t.attributes[b]=g}continue}if(j==="DashTemplate")g=g.split(" ").map(b=>Number(b));else if(j==="Color"){const b=new v(g).toRgba();g=[b[0],b[1],b[2],255*b[3]]}else g=Number(g);f.push({primitiveName:$,propertyName:j,value:g,defaultValue:null})}}else if(d.includes("|")){for(const n of d.split("|"))if(this._itemNames.has(n)){x.push(n);break}}else if(this._itemNames.has(d))x.push(d);else if(c===0){x.length=0;let n="Invalid_P";t.geometry!=null&&(pe(t.geometry)?n="Invalid_A":ye(t.geometry)&&(n="Invalid_L")),x.push(n);break}}}const D=t.geometry==null||!t.geometry.hasZ&&t.geometry.type==="point";return this._cimPartsToCIMSymbol(t,x,f,D,r)}async fetchResources(t){if(this._dictionaryPromise)return this._dictionaryPromise;if(!this.url)return void N.getLogger(X).error("no valid URL!");const r=Q(this.url+"/resources/styles/dictionary-info.json",{responseType:"json",query:{f:"json"},signal:t!=null?t.signal:null}),[{data:o}]=await Promise.all([r,ce()]);if(!o)throw this._dictionaryPromise=null,new de("esri.renderers.DictionaryRenderer","Bad dictionary data!");const{authoringInfo:y,dictionary_version:l,expression:a,itemsNames:w}=o,x=a;let f=!1;l&&(this._dictionaryVersion=Me.parse(l),f=this._dictionaryVersion.greaterEqual(4,0)),this._refSymbolUrlTemplate=this.url+"/"+o.cimRefTemplateUrl,this._itemNames=new Set(w),this._symbolFields=y.symbol;const D={};if(this.config){const n=this.config;for(const $ in n)D[$]=n[$]}if(y.configuration)for(const n of y.configuration)D.hasOwnProperty(n.name)||(D[n.name]=n.value);const c=[];if(t?.fields&&this.fieldMap)for(const n in this.fieldMap){const $=this.fieldMap[n],j=t.fields.filter(g=>g.name.toLowerCase()===$?.toLowerCase());j.length>0&&c.push({...j[0],type:f?j[0].type:"esriFieldTypeString"})}c.length>0&&(this._fieldIndex=new Ne(c));const d=he(x,t!=null?t.spatialReference:null,c,D).then(n=>{const $={scale:0};return(j,g)=>{if(n==null)return null;const P=n.repurposeFeature({geometry:null,attributes:j});return $.scale=g!=null?g.scale??void 0:void 0,n.evaluate({$feature:P,$view:$},n.services)}}).catch(n=>(N.getLogger(X).error("Creating dictionary expression failed:",n),null));return this._dictionaryPromise=d,d}async _cimPartsToCIMSymbol(t,r,o,y,l){const a=new Array(r.length);for(let f=0;f<r.length;f++)a[f]=this._getSymbolPart(r[f],l);let w=await Promise.all(a);const x=this.fieldMap;if(x){w=u(w);for(const f of w)Pe.applyDictionaryTextOverrides(f,t,x,this._fieldIndex,qe(f))}return new me({data:ke(w,o,y)})}async _getSymbolPart(t,r){const o=this._symbolCache.get(t);if(o)return o;if(this._ongoingRequests.has(t))return this._ongoingRequests.get(t).then(a=>a.data);const y=this._refSymbolUrlTemplate.replaceAll(/\{itemName\}/gi,t),l=Q(y,{responseType:"json",query:{f:"json"},...r});this._ongoingRequests.set(t,l),l.finally(()=>this._ongoingRequests.delete(t));try{const a=await l;return this._symbolCache.put(t,a.data),a.data}catch(a){throw a}}};function ke(e,t,r){if(!e||e.length===0)return null;const o={...e[0]};if(e.length>1){o.effects=null,o.symbolLayers=[];for(const y of e){const l=y;if(l.effects!=null)for(const a of l.symbolLayers)a.effects==null?a.effects=l.effects:a.effects.unshift(...l.effects);o.symbolLayers.unshift(...l.symbolLayers)}}return r&&(o.callout=Ae),{type:"CIMSymbolReference",symbol:o,primitiveOverrides:t}}var k;let S=k=class extends A(R){constructor(e){super(e),this.config=null,this.fieldMap=null,this.scaleExpression=null,this.scaleExpressionTitle=null,this.url=null,this.type="dictionary"}get _loader(){return new re(this.url,this.config,this.fieldMap)}writeData(e,t){e&&(t.scalingExpressionInfo={expression:e,returnType:"number"})}writeVisualVariables(e,t,r,o){o?.origin||super.writeVisualVariables(e,t,r,o)}clone(){return new k({config:u(this.config),scaleExpression:this.scaleExpression,scaleExpressionTitle:this.scaleExpressionTitle,fieldMap:u(this.fieldMap),url:u(this.url),visualVariables:u(this.visualVariables)})}async getSymbolAsync(e,t){return this._loader.getSymbolAsync(e,t)}async collectRequiredFields(e,t){await this.collectVVRequiredFields(e,t),this.scaleExpression&&await F(e,t,this.scaleExpression);for(const r in this.fieldMap){const o=this.fieldMap[r];t.has(o)&&e.add(o)}}get arcadeRequired(){return!0}getSymbol(){return null}getSymbols(){return[]}getAttributeHash(){return this.visualVariables?.reduce((e,t)=>e+t.getAttributeHash(),"")??""}getMeshHash(){return`${this.url}-${JSON.stringify(this.fieldMap)}`}getSymbolFields(){return this._loader.getSymbolFields()}};i([s({type:re})],S.prototype,"_loader",null),i([s({type:Object,json:{read:{source:"configuration"},write:{target:"configuration"}}})],S.prototype,"config",void 0),i([s({type:Object,json:{write:!0}})],S.prototype,"fieldMap",void 0),i([s({type:String,json:{read:{source:"scalingExpressionInfo.expression"},write:!0}})],S.prototype,"scaleExpression",void 0),i([W("scaleExpression")],S.prototype,"writeData",null),i([s({type:String,json:{read:{source:"scalingExpressionInfo.title"},write:{target:"scalingExpressionInfo.title",overridePolicy(e){return{enabled:!!e&&!!this.scaleExpression}}}}})],S.prototype,"scaleExpressionTitle",void 0),i([s({type:String,json:{write:!0}})],S.prototype,"url",void 0),i([W("visualVariables")],S.prototype,"writeVisualVariables",null),S=k=i([_("esri.renderers.DictionaryRenderer")],S);const He=S;var H;let I=H=class extends q{constructor(e){super(e),this.color=null,this.field=null,this.label=null,this.valueExpression=null,this.valueExpressionTitle=null}castField(e){return e==null?e:typeof e=="function"?(N.getLogger(this).error(".field: field must be a string value"),null):ge(e)}getAttributeHash(){return`${this.field}-${this.valueExpression}`}clone(){return new H({color:this.color?.clone(),field:this.field,label:this.label,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})}};i([s({type:v,json:{type:[Number],write:!0}})],I.prototype,"color",void 0),i([s({type:String,json:{write:!0}})],I.prototype,"field",void 0),i([fe("field")],I.prototype,"castField",null),i([s({type:String,json:{write:!0}})],I.prototype,"label",void 0),i([s({type:String,json:{write:!0}})],I.prototype,"valueExpression",void 0),i([s({type:String,json:{write:!0}})],I.prototype,"valueExpressionTitle",void 0),I=H=i([_("esri.renderers.support.AttributeColorInfo")],I);const oe=I;var z;let C=z=class extends q{constructor(){super(...arguments),this.unit=null}clone(){return new z({unit:this.unit})}};i([s({type:String,json:{write:!0}})],C.prototype,"unit",void 0),C=z=i([_("esri.renderers.support.DotDensityLegendOptions")],C);const ze=C;var B;let h=B=class extends A(R){constructor(e){super(e),this.attributes=null,this.backgroundColor=new v([0,0,0,0]),this.dotBlendingEnabled=!0,this.dotShape="square",this.dotSize=1,this.legendOptions=null,this.outline=new G,this.dotValue=null,this.referenceScale=null,this.seed=1,this.type="dot-density"}calculateDotValue(e){if(this.referenceScale==null)return this.dotValue;const t=e/this.referenceScale*this.dotValue;return t<1?1:t}getSymbol(){return new be({outline:this.outline})}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return[this.getSymbol()]}getAttributeHash(){return this.attributes?.reduce((e,t)=>e+t.getAttributeHash(),"")??""}getMeshHash(){return JSON.stringify(this.outline)}clone(){return new B({attributes:u(this.attributes),backgroundColor:u(this.backgroundColor),dotBlendingEnabled:u(this.dotBlendingEnabled),dotShape:u(this.dotShape),dotSize:u(this.dotSize),dotValue:u(this.dotValue),legendOptions:u(this.legendOptions),outline:u(this.outline),referenceScale:u(this.referenceScale),seed:u(this.seed),visualVariables:u(this.visualVariables),authoringInfo:u(this.authoringInfo)})}getControllerHash(){return`${this.attributes?.map(t=>t.field||t.valueExpression||"")}-${this.outline&&JSON.stringify(this.outline.toJSON())||""}`}async collectRequiredFields(e,t){await this.collectVVRequiredFields(e,t);for(const r of this.attributes??[])r.valueExpression&&await F(e,t,r.valueExpression),r.field&&e.add(r.field)}};i([s({type:[oe],json:{write:!0}})],h.prototype,"attributes",void 0),i([s({type:v,json:{write:!0}})],h.prototype,"backgroundColor",void 0),i([s({type:Boolean,json:{write:!0}})],h.prototype,"dotBlendingEnabled",void 0),i([s({type:String,json:{write:!1}})],h.prototype,"dotShape",void 0),i([s({type:Number,json:{write:!0}})],h.prototype,"dotSize",void 0),i([s({type:ze,json:{write:!0}})],h.prototype,"legendOptions",void 0),i([s({type:G,json:{default:null,write:!0}})],h.prototype,"outline",void 0),i([s({type:Number,json:{write:!0}})],h.prototype,"dotValue",void 0),i([s({type:Number,json:{write:!0}})],h.prototype,"referenceScale",void 0),i([s({type:Number,json:{write:!0}})],h.prototype,"seed",void 0),i([L({dotDensity:"dot-density"})],h.prototype,"type",void 0),h=B=i([_("esri.renderers.DotDensityRenderer")],h);const Be=h;var J;let T=J=class extends q{constructor(e){super(e),this.color=null,this.ratio=null}clone(){return new J({color:this.color&&this.color.clone(),ratio:this.ratio})}};i([s({type:v,json:{type:[ve],default:null,write:!0}})],T.prototype,"color",void 0),i([s({type:Number,json:{write:!0}})],T.prototype,"ratio",void 0),T=J=i([_("esri.renderers.support.HeatmapColorStop")],T);const O=T;let M=class extends K(q){constructor(){super(...arguments),this.minLabel=null,this.maxLabel=null,this.title=null}};i([s({type:String,json:{write:!0}})],M.prototype,"minLabel",void 0),i([s({type:String,json:{write:!0}})],M.prototype,"maxLabel",void 0),i([s({type:String,json:{write:!0}})],M.prototype,"title",void 0),M=i([_("esri.renderers.support.HeatmapLegendOptions")],M);var U;function Y(e){if(e!=null){const{maxDensity:t,minDensity:r,radius:o}=e;if(t!=null||r!=null||o!=null){const{blurRadius:y,maxPixelIntensity:l,minPixelIntensity:a,...w}=e;return w}}return e}let p=U=class extends R{constructor(e){super(e),this.authoringInfo=null,this.colorStops=[new O({ratio:0,color:new v("rgba(255, 140, 0, 0)")}),new O({ratio:.75,color:new v("rgba(255, 140, 0, 1)")}),new O({ratio:.9,color:new v("rgba(255, 0,   0, 1)")})],this.field=null,this.legendOptions=null,this.maxDensity=.04,this.minDensity=0,this.radius=18,this.referenceScale=0,this.type="heatmap",this.valueExpression=null,this.valueExpressionTitle=null}normalizeCtorArgs(e){return Y(e)}get blurRadius(){return Ce(this.radius)}set blurRadius(e){const t=this.maxPixelIntensity,r=this.minPixelIntensity;this._set("radius",Oe(e)),this._set("maxDensity",t*this._pixelIntensityToDensity),this._set("minDensity",r*this._pixelIntensityToDensity)}get maxPixelIntensity(){return this.maxDensity/this._pixelIntensityToDensity}set maxPixelIntensity(e){this._set("maxDensity",e*this._pixelIntensityToDensity)}get minPixelIntensity(){return this.minDensity/this._pixelIntensityToDensity}set minPixelIntensity(e){this._set("minDensity",e*this._pixelIntensityToDensity)}get _pixelIntensityToDensity(){return 24/(Fe**2*this.blurRadius**4)}read(e,t){e=Y(e),super.read(e,t)}getSymbol(){return new te}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return[this.getSymbol()]}async collectRequiredFields(e,t){const r=this.field,o=this.valueExpression;r&&typeof r=="string"&&we(e,t,r),o&&typeof o=="string"&&await F(e,t,o)}getAttributeHash(){return""}getMeshHash(){return`${JSON.stringify(this.colorStops)}.${this.blurRadius}.${this.field}`}clone(){return new U({authoringInfo:this.authoringInfo&&this.authoringInfo.clone(),colorStops:u(this.colorStops),field:this.field,legendOptions:u(this.legendOptions),maxDensity:this.maxDensity,minDensity:this.minDensity,radius:this.radius,referenceScale:this.referenceScale,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})}};i([s({type:je,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],p.prototype,"authoringInfo",void 0),i([s({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],p.prototype,"blurRadius",null),i([s({type:[O],json:{write:!0}})],p.prototype,"colorStops",void 0),i([s({type:String,json:{write:!0}})],p.prototype,"field",void 0),i([s({type:M,json:{write:!0}})],p.prototype,"legendOptions",void 0),i([s({type:Number,json:{write:!0}})],p.prototype,"maxDensity",void 0),i([s({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],p.prototype,"maxPixelIntensity",null),i([s({type:Number,json:{write:!0}})],p.prototype,"minDensity",void 0),i([s({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],p.prototype,"minPixelIntensity",null),i([s({type:Number,cast:ee,json:{write:!0}})],p.prototype,"radius",void 0),i([s({type:Number,range:{min:0},json:{default:0,write:!0}})],p.prototype,"referenceScale",void 0),i([L({heatmap:"heatmap"})],p.prototype,"type",void 0),i([s({type:String,json:{write:!0,origins:{"web-document":{write:!1},"portal-item":{write:!1}}}})],p.prototype,"valueExpression",void 0),i([s({type:String})],p.prototype,"valueExpressionTitle",void 0),i([s({readOnly:!0})],p.prototype,"_pixelIntensityToDensity",null),p=U=i([_("esri.renderers.HeatmapRenderer")],p);const ne=p;let V=class extends K(q){constructor(){super(...arguments),this.color=new v([0,0,0,0]),this.label=null,this.threshold=0}};i([s({type:v,json:{write:!0}})],V.prototype,"color",void 0),i([s({type:String,json:{write:!0}})],V.prototype,"label",void 0),i([s({type:Number,range:{min:0,max:1},json:{write:!0}})],V.prototype,"threshold",void 0),V=i([_("esri.renderers.support.OthersCategory")],V);const Je={base:Ie,key:"type",typeMap:{size:Ee,opacity:Ve}};let m=class extends A(K(R)){constructor(e){super(e),this.attributes=null,this.backgroundFillSymbol=null,this.defaultColor=new v([0,0,0,0]),this.defaultLabel=null,this.holePercentage=0,this.othersCategory=new V,this.legendOptions=null,this.outline=null,this.size=12,this.type="pie-chart",this.visualVariables=null}getSymbol(){return new te({size:this.size?this.size/2+(this.outline?.width||0):0})}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return[this.getSymbol(),this.backgroundFillSymbol].filter(Se)}getAttributeHash(){return this.visualVariables?.reduce((e,t)=>e+t.getAttributeHash(),"")??""}getMeshHash(){return this.getSymbols().reduce((e,t)=>e+JSON.stringify(t),"")}async collectRequiredFields(e,t){await this.collectVVRequiredFields(e,t);for(const r of this.attributes)r.valueExpression&&await F(e,t,r.valueExpression),r.field&&e.add(r.field)}};i([s({type:[oe],json:{write:!0}})],m.prototype,"attributes",void 0),i([s(_e)],m.prototype,"backgroundFillSymbol",void 0),i([s({type:v,json:{write:!0}})],m.prototype,"defaultColor",void 0),i([s({type:String,json:{write:!0}})],m.prototype,"defaultLabel",void 0),i([s({type:Number,range:{min:0,max:1},json:{write:!0}})],m.prototype,"holePercentage",void 0),i([s({type:V,json:{write:!0}})],m.prototype,"othersCategory",void 0),i([s({type:Le,json:{write:!0}})],m.prototype,"legendOptions",void 0),i([s({type:G,json:{default:null,write:!0}})],m.prototype,"outline",void 0),i([s({type:Number,cast:ee,json:{write:!0}})],m.prototype,"size",void 0),i([L({pieChart:"pie-chart"})],m.prototype,"type",void 0),i([s({types:[Je]})],m.prototype,"visualVariables",void 0),m=i([_("esri.renderers.PieChartRenderer")],m);const Ue=m;var Z;let E=Z=class extends A(R){constructor(e){super(e),this.description=null,this.label=null,this.symbol=null,this.type="simple"}async collectRequiredFields(e,t){await Promise.all([this.collectSymbolFields(e,t),this.collectVVRequiredFields(e,t)])}async collectSymbolFields(e,t){await Promise.all(this.getSymbols().map(r=>r.collectRequiredFields(e,t)))}getSymbol(e,t){return this.symbol}async getSymbolAsync(e,t){return this.symbol}getSymbols(){return this.symbol?[this.symbol]:[]}getAttributeHash(){return this.visualVariables?.reduce((e,t)=>e+t.getAttributeHash(),"")??""}getMeshHash(){return this.getSymbols().reduce((e,t)=>e+JSON.stringify(t),"")}get arcadeRequired(){return this.arcadeRequiredForVisualVariables}clone(){return new Z({description:this.description,label:this.label,symbol:u(this.symbol),visualVariables:u(this.visualVariables),authoringInfo:u(this.authoringInfo)})}};i([s({type:String,json:{write:!0}})],E.prototype,"description",void 0),i([s({type:String,json:{write:!0}})],E.prototype,"label",void 0),i([s(Re)],E.prototype,"symbol",void 0),i([L({simple:"simple"})],E.prototype,"type",void 0),E=Z=i([_("esri.renderers.SimpleRenderer")],E);const le=E,Ze={key:"type",base:R,typeMap:{heatmap:ne,simple:le,"unique-value":ie,"class-breaks":se,"dot-density":Be,dictionary:He,"pie-chart":Ue},errorContext:"renderer"},yt={key:"type",base:R,typeMap:{simple:le,"unique-value":ie,"class-breaks":se,heatmap:ne},errorContext:"renderer",validate:Ge};function Ge(e){switch(e.type){case"simple":return Ke(e);case"unique-value":return Qe(e);case"class-breaks":return We(e);case"heatmap":return e}}function Ke(e){if(e.symbol)return e;N.getLogger("esri.renderers.support.types").error("Removed invalid 'simple' renderer without a symbol from web scene.")}function Qe(e){const t=e.uniqueValueInfos,r=t?.filter(({symbol:o,label:y},l)=>(o||N.getLogger("esri.renderers.support.types").error(`Removed invalid unique value info ([${l}] ${y}) without a symbol from web scene.`),!!o));return r?.length!==t?.length&&(e.uniqueValueInfos=r),e}function We(e){const t=e.classBreakInfos,r=t?.filter(({symbol:o,label:y},l)=>(o||N.getLogger("esri.renderers.support.types").error(`Removed invalid class break info ([${l}] ${y}) without a symbol from web scene.`),!!o));return r?.length!==t?.length&&(e.classBreakInfos=r),e}function Xe(e,t){return ae(e,null,t)}const Ye=xe({types:Ze});function ae(e,t,r){return e?e&&(e.styleName||e.styleUrl)&&e.type!=="uniqueValue"?(r?.messages&&r.messages.push(new $e("renderer:unsupported","Only UniqueValueRenderer can be referenced from a web style, but found '"+e.type+"'",{definition:e,context:r})),null):Ye(e,t,r):null}const ct=Object.freeze(Object.defineProperty({__proto__:null,fromJSON:Xe,read:ae},Symbol.toStringTag,{value:"Module"}));export{ct as j,O as l,Ze as m,ae as o,le as p,Xe as t,yt as u};
