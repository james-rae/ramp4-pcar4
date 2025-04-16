import{x as t,z as i,K as u,G as d,o as x,aF as c,bG as _,D as b,bt as ue,aX as _e,n as g,eQ as Fe,B,it as Ee,hd as De,hF as he,s as Ie,aL as Me,J as Re,eT as H,eS as Oe,jE as ke,hC as qe,jF as M,jG as ye,b3 as Ae,hM as Ce,dG as Ne,hc as R,jH as $e}from"./main-DZMdXZ8-.js";import{m as Le,p as Be}from"./colorRamps-usJRzYhU.js";import{a as He}from"./ColorStop-DCTZFyyv.js";import{v as Ue,e as F,t as Ge,a as Je,i as de}from"./visualVariableUtils-zYZpJCgR.js";var U;let E=U=class extends d{constructor(e){super(e),this.minValue=0,this.maxValue=0}clone(){return new U({minValue:this.minValue,maxValue:this.maxValue})}};t([i({type:Number,json:{write:!0}})],E.prototype,"minValue",void 0),t([i({type:Number,json:{write:!0}})],E.prototype,"maxValue",void 0),E=U=t([u("esri.renderers.support.AuthoringInfoClassBreakInfo")],E);var G;let m=G=class extends d{constructor(e){super(e),this.field="",this.normalizationField="",this.label="",this.classBreakInfos=new Array}clone(){return new G({field:this.field,normalizationField:this.normalizationField,label:this.label,classBreakInfos:x(this.classBreakInfos)})}};t([i({type:String,json:{write:!0}})],m.prototype,"field",void 0),t([i({type:String,json:{write:!0}})],m.prototype,"normalizationField",void 0),t([i({type:String,json:{write:!0}})],m.prototype,"label",void 0),t([i({type:[E],json:{write:!0}})],m.prototype,"classBreakInfos",void 0),m=G=t([u("esri.renderers.support.AuthoringInfoFieldInfo")],m);var J;let j=J=class extends d{constructor(e){super(e),this.label=null,this.size=null,this.value=null}clone(){return new J({label:this.label,value:this.value,size:this.size})}};t([i({type:String,json:{write:!0}})],j.prototype,"label",void 0),t([i({type:Number,json:{write:!0}})],j.prototype,"size",void 0),t([i({type:Number,json:{write:!0}})],j.prototype,"value",void 0),j=J=t([u("esri.renderers.support.AuthoringInfoSizeStop")],j);const We=j;var W;const O=new c({percentTotal:"percent-of-total",ratio:"ratio",percent:"percent"}),k=new c({sizeInfo:"size",colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation"}),ce={key:e=>typeof e=="number"?"number":"string",typeMap:{number:Number,string:String},base:null},me=["high-to-low","above-and-below","centered-on","extremes"],ve=[...new Set(["high-to-low","above-and-below","centered-on","extremes","above","below","high-to-low","above-and-below","above","below","reference-size"])],we=["seconds","minutes","hours","days","months","years"],Pe=["circle","diamond","hexagon-flat","hexagon-pointy","square"];let p=W=class extends d{constructor(e){super(e),this.endTime=null,this.field=null,this.maxSliderValue=null,this.minSliderValue=null,this.startTime=null,this.type=null,this.units=null}castEndTime(e){return typeof e=="string"||typeof e=="number"?e:null}get normalizationField(){return this.theme==="reference-size"?this._get("normalizationField"):null}set normalizationField(e){this._set("normalizationField",e)}get referenceSizeScale(){return this.theme==="reference-size"?this._get("referenceSizeScale"):null}set referenceSizeScale(e){this._set("referenceSizeScale",e)}get referenceSizeSymbolStyle(){return this.theme==="reference-size"?this._get("referenceSizeSymbolStyle"):null}set referenceSizeSymbolStyle(e){this._set("referenceSizeSymbolStyle",e)}castStartTime(e){return typeof e=="string"||typeof e=="number"?e:null}get sizeStops(){return this.theme==="reference-size"?this._get("sizeStops"):null}set sizeStops(e){this._set("sizeStops",e)}get style(){return this.type==="color"?this._get("style"):null}set style(e){this._set("style",e)}get theme(){return this.type==="color"||this.type==="size"?this._get("theme")||"high-to-low":null}set theme(e){this._set("theme",e)}clone(){return new W({endTime:this.endTime,field:this.field,maxSliderValue:this.maxSliderValue,minSliderValue:this.minSliderValue,normalizationField:this.normalizationField,referenceSizeScale:this.referenceSizeScale,referenceSizeSymbolStyle:this.referenceSizeSymbolStyle,sizeStops:x(this.sizeStops),startTime:this.startTime,style:this.style,theme:this.theme,type:this.type,units:this.units})}};t([i({types:ce,json:{write:!0}})],p.prototype,"endTime",void 0),t([_("endTime")],p.prototype,"castEndTime",null),t([i({type:String,json:{write:!0}})],p.prototype,"field",void 0),t([i({type:Number,json:{write:!0}})],p.prototype,"maxSliderValue",void 0),t([i({type:Number,json:{write:!0}})],p.prototype,"minSliderValue",void 0),t([i({type:String,json:{origins:{"web-scene":{write:!1}},write:!0}})],p.prototype,"normalizationField",null),t([i({type:Number,value:null,json:{origins:{"web-scene":{write:!1}},write:!0}})],p.prototype,"referenceSizeScale",null),t([i({type:Pe,value:null,json:{origins:{"web-scene":{write:!1}},write:!0}})],p.prototype,"referenceSizeSymbolStyle",null),t([i({types:ce,json:{write:!0}})],p.prototype,"startTime",void 0),t([_("startTime")],p.prototype,"castStartTime",null),t([i({type:[We],json:{origins:{"web-scene":{write:!1}},write:!0}})],p.prototype,"sizeStops",null),t([i({type:O.apiValues,value:null,json:{type:O.jsonValues,read:O.read,write:O.write}})],p.prototype,"style",null),t([i({type:ve,value:null,json:{type:ve,origins:{"web-scene":{type:me,write:{writer:(e,s)=>{me.includes(e)&&(s.theme=e)}}}},write:!0}})],p.prototype,"theme",null),t([i({type:k.apiValues,json:{type:k.jsonValues,read:k.read,write:k.write}})],p.prototype,"type",void 0),t([i({type:we,json:{type:we,write:!0}})],p.prototype,"units",void 0),p=W=t([u("esri.renderers.support.AuthoringInfoVisualVariable")],p);const Qe=p;var P;const f=new c({esriClassifyDefinedInterval:"defined-interval",esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation"}),q=new c({classedSize:"class-breaks-size",classedColor:"class-breaks-color",univariateColorSize:"univariate-color-size",relationship:"relationship",predominance:"predominance",dotDensity:"dot-density",flow:"flow"}),be=new c({classedSize:"class-breaks-size",classedColor:"class-breaks-color",univariateColorSize:"univariate-color-size",relationship:"relationship",predominance:"predominance",dotDensity:"dot-density"}),ge=["inches","feet","yards","miles","nautical-miles","millimeters","centimeters","decimeters","meters","kilometers"],Ke=["high-to-low","above-and-below","above","below"],Xe=["flow-line","wave-front"],Ye=["caret","circle-caret","arrow","circle-arrow","plus-minus","circle-plus-minus","square","circle","triangle","happy-sad","thumb","custom"];let n=P=class extends d{constructor(e){super(e),this.colorRamp=null,this.fadeRatio=null,this.isAutoGenerated=!1,this.lengthUnit=null,this.maxSliderValue=null,this.minSliderValue=null,this.visualVariables=null}get classificationMethod(){const e=this._get("classificationMethod"),s=this.type;return s&&s!=="relationship"?s==="class-breaks-size"||s==="class-breaks-color"?e||"manual":null:e}set classificationMethod(e){this._set("classificationMethod",e)}readColorRamp(e){return e?Be(e):void 0}get fields(){return this.type&&this.type!=="predominance"?null:this._get("fields")}set fields(e){this._set("fields",e)}get field1(){return this.type&&this.type!=="relationship"?null:this._get("field1")}set field1(e){this._set("field1",e)}get field2(){return this.type&&this.type!=="relationship"?null:this._get("field2")}set field2(e){this._set("field2",e)}get flowTheme(){return this.type==="flow"?this._get("flowTheme"):null}set flowTheme(e){this._set("flowTheme",e)}get focus(){return this.type&&this.type!=="relationship"?null:this._get("focus")}set focus(e){this._set("focus",e)}get numClasses(){return this.type&&this.type!=="relationship"?null:this._get("numClasses")}set numClasses(e){this._set("numClasses",e)}get statistics(){return this.type==="univariate-color-size"&&this.univariateTheme==="above-and-below"?this._get("statistics"):null}set statistics(e){this._set("statistics",e)}get standardDeviationInterval(){const e=this.type;return e&&e!=="relationship"&&e!=="class-breaks-size"&&e!=="class-breaks-color"||this.classificationMethod&&this.classificationMethod!=="standard-deviation"?null:this._get("standardDeviationInterval")}set standardDeviationInterval(e){this._set("standardDeviationInterval",e)}get type(){return this._get("type")}set type(e){let s=e;e==="classed-size"?s="class-breaks-size":e==="classed-color"&&(s="class-breaks-color"),this._set("type",s)}get univariateSymbolStyle(){return this.type==="univariate-color-size"&&this.univariateTheme==="above-and-below"?this._get("univariateSymbolStyle"):null}set univariateSymbolStyle(e){this._set("univariateSymbolStyle",e)}get univariateTheme(){return this.type==="univariate-color-size"?this._get("univariateTheme"):null}set univariateTheme(e){this._set("univariateTheme",e)}clone(){return new P({classificationMethod:this.classificationMethod,colorRamp:x(this.colorRamp),fadeRatio:x(this.fadeRatio),fields:this.fields?.slice(),field1:x(this.field1),field2:x(this.field2),isAutoGenerated:this.isAutoGenerated,focus:this.focus,numClasses:this.numClasses,maxSliderValue:this.maxSliderValue,minSliderValue:this.minSliderValue,lengthUnit:this.lengthUnit,statistics:this.statistics,standardDeviationInterval:this.standardDeviationInterval,type:this.type,visualVariables:this.visualVariables&&this.visualVariables.map(e=>e.clone()),univariateSymbolStyle:this.univariateSymbolStyle,univariateTheme:this.univariateTheme,flowTheme:this.flowTheme})}};t([i({type:f.apiValues,value:null,json:{type:f.jsonValues,read:f.read,write:f.write,origins:{"web-document":{default:"manual",type:f.jsonValues,read:f.read,write:f.write}}}})],n.prototype,"classificationMethod",null),t([i({types:Le,json:{write:!0}})],n.prototype,"colorRamp",void 0),t([b("colorRamp")],n.prototype,"readColorRamp",null),t([i({json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],n.prototype,"fadeRatio",void 0),t([i({type:[String],value:null,json:{write:!0}})],n.prototype,"fields",null),t([i({type:m,value:null,json:{write:!0}})],n.prototype,"field1",null),t([i({type:m,value:null,json:{write:!0}})],n.prototype,"field2",null),t([i({type:Xe,value:null,json:{write:!0,origins:{"web-scene":{write:!1}}}})],n.prototype,"flowTheme",null),t([i({type:["HH","HL","LH","LL"],value:null,json:{write:!0}})],n.prototype,"focus",null),t([i({type:Boolean,json:{write:!0,default:!1,origins:{"web-scene":{write:!1}}}})],n.prototype,"isAutoGenerated",void 0),t([i({type:Number,value:null,json:{type:ue,write:!0}})],n.prototype,"numClasses",null),t([i({type:ge,json:{type:ge,read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],n.prototype,"lengthUnit",void 0),t([i({type:Number,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],n.prototype,"maxSliderValue",void 0),t([i({type:Number,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],n.prototype,"minSliderValue",void 0),t([i({type:Object,value:null,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],n.prototype,"statistics",null),t([i({type:[.25,.33,.5,1],value:null,json:{type:[.25,.33,.5,1],write:!0}})],n.prototype,"standardDeviationInterval",null),t([i({type:q.apiValues,value:null,json:{type:q.jsonValues,read:q.read,write:q.write,origins:{"web-scene":{type:be.jsonValues,write:{writer:be.write,overridePolicy:e=>({enabled:e!=="flow"})}}}}})],n.prototype,"type",null),t([i({type:[Qe],json:{write:!0}})],n.prototype,"visualVariables",void 0),t([i({type:Ye,value:null,json:{write:!0,origins:{"web-scene":{write:!1}}}})],n.prototype,"univariateSymbolStyle",null),t([i({type:Ke,value:null,json:{write:!0,origins:{"web-scene":{write:!1}}}})],n.prototype,"univariateTheme",null),n=P=t([u("esri.renderers.support.AuthoringInfo")],n);const fe=n,Q=new c({simple:"simple",uniqueValue:"unique-value",classBreaks:"class-breaks",heatmap:"heatmap",dotDensity:"dot-density",dictionary:"dictionary",pieChart:"pie-chart"},{ignoreUnknown:!0});let D=class extends d{constructor(e){super(e),this.authoringInfo=null,this.type=null}async getRequiredFields(e){if(!this.collectRequiredFields)return[];const s=new Set;return await this.collectRequiredFields(s,e),Array.from(s).sort()}getSymbol(e,s){}async getSymbolAsync(e,s){}get symbols(){return[]}get arcadeRequired(){return!1}getAttributeHash(){return JSON.stringify(this)}getMeshHash(){return JSON.stringify(this)}};t([i({type:fe,json:{write:!0}})],D.prototype,"authoringInfo",void 0),t([i({type:Q.apiValues,readOnly:!0,json:{type:Q.jsonValues,read:!1,write:{writer:Q.write,ignoreOrigin:!0,isRequired:!0}}})],D.prototype,"type",void 0),D=t([u("esri.renderers.Renderer")],D);const Ze=D;let I=class extends _e.ClonableMixin(d){constructor(){super(...arguments),this.showLegend=null,this.title=null}};t([i({type:Boolean,json:{write:!0}})],I.prototype,"showLegend",void 0),t([i({type:String,json:{write:!0}})],I.prototype,"title",void 0),I=t([u("esri.renderers.visualVariables.support.VisualVariableLegendOptions")],I);const Ve=I,K=new c({colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation",sizeInfo:"size"});let y=class extends d{constructor(e){super(e),this.index=null,this.type=null,this.field=null,this.valueExpression=null,this.valueExpressionTitle=null,this.legendOptions=null}castField(e){return e==null?e:typeof e=="function"?(g.getLogger(this).error(".field: field must be a string value"),null):Fe(e)}get arcadeRequired(){return!!this.valueExpression}clone(){}getAttributeHash(){return`${this.type}-${this.field}-${this.valueExpression}`}};t([i()],y.prototype,"index",void 0),t([i({type:K.apiValues,readOnly:!0,json:{read:K.read,write:{writer:K.write,isRequired:!0}}})],y.prototype,"type",void 0),t([i({type:String,json:{write:!0}})],y.prototype,"field",void 0),t([_("field")],y.prototype,"castField",null),t([i({type:String,json:{write:!0}})],y.prototype,"valueExpression",void 0),t([i({type:String,json:{write:!0}})],y.prototype,"valueExpressionTitle",void 0),t([i({readOnly:!0})],y.prototype,"arcadeRequired",null),t([i({type:Ve,json:{write:!0}})],y.prototype,"legendOptions",void 0),y=t([u("esri.renderers.visualVariables.VisualVariable")],y);const T=y;var X;let V=X=class extends T{constructor(e){super(e),this.type="color",this.normalizationField=null}get cache(){return{ipData:this._interpolateData(),hasExpression:!!this.valueExpression,compiledFunc:null}}set stops(e){e&&Array.isArray(e)&&(e=e.filter(s=>!!s)).sort((s,r)=>s.value-r.value),this._set("stops",e)}clone(){return new X({field:this.field,normalizationField:this.normalizationField,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,stops:this.stops&&this.stops.map(e=>e.clone()),legendOptions:this.legendOptions?.clone()})}getAttributeHash(){return`${super.getAttributeHash()}-${this.normalizationField}`}_interpolateData(){return this.stops&&this.stops.map(e=>e.value||0)}};t([i({readOnly:!0})],V.prototype,"cache",null),t([i({type:["color"],json:{type:["colorInfo"]}})],V.prototype,"type",void 0),t([i({type:String,json:{write:!0}})],V.prototype,"normalizationField",void 0),t([i({type:[He],json:{write:!0}})],V.prototype,"stops",null),V=X=t([u("esri.renderers.visualVariables.ColorVariable")],V);const Se=V;var Y;let v=Y=class extends d{constructor(e){super(e),this.label=null,this.opacity=null,this.value=null}readOpacity(e,s){return Ee(s.transparency)}writeOpacity(e,s,r){s[r]=De(e)}clone(){return new Y({label:this.label,opacity:this.opacity,value:this.value})}};t([i({type:String,json:{write:!0}})],v.prototype,"label",void 0),t([i({type:Number,json:{type:ue,write:{target:"transparency",isRequired:!0}}})],v.prototype,"opacity",void 0),t([b("opacity",["transparency"])],v.prototype,"readOpacity",null),t([B("opacity")],v.prototype,"writeOpacity",null),t([i({type:Number,json:{write:{isRequired:!0}}})],v.prototype,"value",void 0),v=Y=t([u("esri.renderers.visualVariables.support.OpacityStop")],v);const et=v;var Z;let S=Z=class extends T{constructor(e){super(e),this.type="opacity",this.normalizationField=null}get cache(){return{ipData:this._interpolateData(),hasExpression:!!this.valueExpression,compiledFunc:null}}set stops(e){e&&Array.isArray(e)&&(e=e.filter(s=>!!s)).sort((s,r)=>s.value-r.value),this._set("stops",e)}clone(){return new Z({field:this.field,normalizationField:this.normalizationField,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,stops:this.stops&&this.stops.map(e=>e.clone()),legendOptions:this.legendOptions?.clone()})}getAttributeHash(){return`${super.getAttributeHash()}-${this.normalizationField}`}_interpolateData(){return this.stops&&this.stops.map(e=>e.value||0)}};t([i({readOnly:!0})],S.prototype,"cache",null),t([i({type:["opacity"],json:{type:["transparencyInfo"]}})],S.prototype,"type",void 0),t([i({type:String,json:{write:!0}})],S.prototype,"normalizationField",void 0),t([i({type:[et],json:{write:!0}})],S.prototype,"stops",null),S=Z=t([u("esri.renderers.visualVariables.OpacityVariable")],S);const ee=S;var te;let z=te=class extends T{constructor(e){super(e),this.axis=null,this.type="rotation",this.rotationType="geographic"}get cache(){return{hasExpression:!!this.valueExpression,compiledFunc:null}}clone(){return new te({axis:this.axis,rotationType:this.rotationType,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,legendOptions:this.legendOptions?.clone()})}};t([i({readOnly:!0})],z.prototype,"cache",null),t([i({type:["heading","tilt","roll"],json:{origins:{"web-scene":{default:"heading",write:!0}}}})],z.prototype,"axis",void 0),t([i({type:["rotation"],json:{type:["rotationInfo"]}})],z.prototype,"type",void 0),t([i({type:["geographic","arithmetic"],json:{write:!0,origins:{"web-document":{write:!0,default:"geographic"}}}})],z.prototype,"rotationType",void 0),z=te=t([u("esri.renderers.visualVariables.RotationVariable")],z);const ie=z;function tt(e){return he(e)}var se;let w=se=class extends d{constructor(e){super(e),this.label=null,this.size=null,this.value=null,this.useMinValue=null,this.useMaxValue=null}clone(){return new se({label:this.label,size:this.size,value:this.value,useMaxValue:this.useMaxValue,useMinValue:this.useMinValue})}};t([i({type:String,json:{write:!0}})],w.prototype,"label",void 0),t([i({type:Number,cast:he,json:{write:{isRequired:!0}}})],w.prototype,"size",void 0),t([i({type:Number,json:{write:{isRequired:!0}}})],w.prototype,"value",void 0),t([i({type:Boolean,json:{write:!1}})],w.prototype,"useMinValue",void 0),t([i({type:Boolean,json:{write:!1}})],w.prototype,"useMaxValue",void 0),w=se=t([u("esri.renderers.visualVariables.support.SizeStop")],w);const ze=w;let A=class extends Ve{constructor(){super(...arguments),this.customValues=null}};t([i({type:[Number],json:{write:!0}})],A.prototype,"customValues",void 0),A=t([u("esri.renderers.visualVariables.support.SizeVariableLegendOptions")],A);const it=A;var re;const C=new c({width:"width",depth:"depth",height:"height",widthAndDepth:"width-and-depth",all:"all"}),ae=new c({unknown:"unknown",inch:"inches",foot:"feet",yard:"yards",mile:"miles","nautical-mile":"nautical-miles",millimeter:"millimeters",centimeter:"centimeters",decimeter:"decimeters",meter:"meters",kilometer:"kilometers"});function xe(e){if(e!=null)return typeof e=="string"||typeof e=="number"?tt(e):e.type==="size"?F(e)?e:(delete(e={...e}).type,new l(e)):void 0}function je(e,s,r){if(typeof e!="object")return e;const a=new l;return a.read(e,r),a}let l=re=class extends T{constructor(e){super(e),this.axis=null,this.legendOptions=null,this.normalizationField=null,this.scaleBy=null,this.target=null,this.type="size",this.useSymbolValue=null,this.valueExpression=null,this.valueRepresentation=null,this.valueUnit=null}get cache(){return{ipData:this._interpolateData(),hasExpression:!!this.valueExpression,compiledFunc:null,isScaleDriven:this.valueExpression!=null&&Ue.test(this.valueExpression)}}set index(e){F(this.maxSize)&&(this.maxSize.index=`visualVariables[${e}].maxSize`),F(this.minSize)&&(this.minSize.index=`visualVariables[${e}].minSize`),this._set("index",e)}get inputValueType(){return Ge(this)}set maxDataValue(e){e&&this.stops&&(g.getLogger(this).warn("cannot set maxDataValue when stops is not null."),e=null),this._set("maxDataValue",e)}set maxSize(e){e&&this.stops&&(g.getLogger(this).warn("cannot set maxSize when stops is not null."),e=null),this._set("maxSize",e)}castMaxSize(e){return xe(e)}readMaxSize(e,s,r){return je(e,s,r)}set minDataValue(e){e&&this.stops&&(g.getLogger(this).warn("cannot set minDataValue when stops is not null."),e=null),this._set("minDataValue",e)}set minSize(e){e&&this.stops&&(g.getLogger(this).warn("cannot set minSize when stops is not null."),e=null),this._set("minSize",e)}castMinSize(e){return xe(e)}readMinSize(e,s,r){return je(e,s,r)}get arcadeRequired(){return!!this.valueExpression||this.minSize!=null&&typeof this.minSize=="object"&&this.minSize.arcadeRequired||this.maxSize!=null&&typeof this.maxSize=="object"&&this.maxSize.arcadeRequired}set stops(e){this.minDataValue==null&&this.maxDataValue==null&&this.minSize==null&&this.maxSize==null?e&&Array.isArray(e)&&(e=e.filter(s=>!!s)).sort((s,r)=>s.value-r.value):e&&(g.getLogger(this).warn("cannot set stops when one of minDataValue, maxDataValue, minSize or maxSize is not null."),e=null),this._set("stops",e)}get transformationType(){return Je(this,this.inputValueType)}readValueExpression(e,s){return e||s.expression&&"$view.scale"}writeValueExpressionWebScene(e,s,r,a){if(e==="$view.scale"){if(a?.messages){const o=this.index,h=typeof o=="string"?o:`visualVariables[${o}]`;a.messages.push(new Ie("property:unsupported",this.type+"VisualVariable.valueExpression = '$view.scale' is not supported in Web Scene. Please remove this property to save the Web Scene.",{instance:this,propertyName:h+".valueExpression",context:a}))}}else s[r]=e}readValueUnit(e){return e?ae.read(e):null}clone(){return new re({axis:this.axis,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,maxDataValue:this.maxDataValue,maxSize:F(this.maxSize)?this.maxSize.clone():this.maxSize,minDataValue:this.minDataValue,minSize:F(this.minSize)?this.minSize.clone():this.minSize,normalizationField:this.normalizationField,stops:this.stops?.map(e=>e.clone()),target:this.target,useSymbolValue:this.useSymbolValue,valueRepresentation:this.valueRepresentation,valueUnit:this.valueUnit,legendOptions:this.legendOptions?.clone()})}flipSizes(){if(this.transformationType===de.ClampedLinear){const{minSize:e,maxSize:s}=this;return this.minSize=s,this.maxSize=e,this}if(this.transformationType===de.Stops){const e=this.stops;if(!e)return this;const s=e.map(a=>a.size).reverse(),r=e.length;for(let a=0;a<r;a++)e[a].size=s[a];return this}return this}getAttributeHash(){return`${super.getAttributeHash()}-${this.target}-${this.normalizationField}`}_interpolateData(){return this.stops?.map(e=>e.value||0)}};t([i({readOnly:!0})],l.prototype,"cache",null),t([i({type:C.apiValues,json:{type:C.jsonValues,origins:{"web-map":{read:!1}},read:C.read,write:C.write}})],l.prototype,"axis",void 0),t([i()],l.prototype,"index",null),t([i({type:String,readOnly:!0})],l.prototype,"inputValueType",null),t([i({type:it,json:{write:!0}})],l.prototype,"legendOptions",void 0),t([i({type:Number,value:null,json:{write:!0}})],l.prototype,"maxDataValue",null),t([i({type:Number,value:null,json:{write:!0}})],l.prototype,"maxSize",null),t([_("maxSize")],l.prototype,"castMaxSize",null),t([b("maxSize")],l.prototype,"readMaxSize",null),t([i({type:Number,value:null,json:{write:!0}})],l.prototype,"minDataValue",null),t([i({type:Number,value:null,json:{write:!0}})],l.prototype,"minSize",null),t([_("minSize")],l.prototype,"castMinSize",null),t([b("minSize")],l.prototype,"readMinSize",null),t([i({type:String,json:{write:!0}})],l.prototype,"normalizationField",void 0),t([i({readOnly:!0})],l.prototype,"arcadeRequired",null),t([i({type:String})],l.prototype,"scaleBy",void 0),t([i({type:[ze],value:null,json:{write:!0}})],l.prototype,"stops",null),t([i({type:["outline"],json:{write:!0}})],l.prototype,"target",void 0),t([i({type:String,readOnly:!0})],l.prototype,"transformationType",null),t([i({type:["size"],json:{type:["sizeInfo"]}})],l.prototype,"type",void 0),t([i({type:Boolean,json:{write:!0,origins:{"web-map":{read:!1}}}})],l.prototype,"useSymbolValue",void 0),t([i({type:String,json:{write:!0}})],l.prototype,"valueExpression",void 0),t([b("valueExpression",["valueExpression","expression"])],l.prototype,"readValueExpression",null),t([B("web-scene","valueExpression")],l.prototype,"writeValueExpressionWebScene",null),t([i({type:["radius","diameter","area","width","distance"],json:{write:!0}})],l.prototype,"valueRepresentation",void 0),t([i({type:ae.apiValues,json:{write:ae.write,origins:{"web-map":{read:!1},"web-scene":{write:!0},"portal-item":{write:!0}}}})],l.prototype,"valueUnit",void 0),t([b("valueUnit")],l.prototype,"readValueUnit",null),l=re=t([u("esri.renderers.visualVariables.SizeVariable")],l);const le=l,st={color:Se,size:le,opacity:ee,rotation:ie},rt=new c({colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation",sizeInfo:"size"}),at=/^\[([^\]]+)\]$/i;let N=class extends Me{constructor(){super(...arguments),this.colorVariables=null,this.opacityVariables=null,this.rotationVariables=null,this.sizeVariables=null}set visualVariables(e){if(this._resetVariables(),e=e?.filter(s=>!!s),e?.length){for(const s of e)switch(s.type){case"color":this.colorVariables.push(s);break;case"opacity":this.opacityVariables.push(s);break;case"rotation":this.rotationVariables.push(s);break;case"size":this.sizeVariables.push(s)}this.sizeVariables.length&&this.sizeVariables.some(s=>!!s.target)&&e.sort((s,r)=>{let a=null;return a=s.target===r.target?0:s.target?1:-1,a});for(let s=0;s<e.length;s++)e[s].index=s;this._set("visualVariables",e)}else this._set("visualVariables",e)}readVariables(e,s,r){const{rotationExpression:a,rotationType:o}=s,h=a?.match(at),ne=h?.[1];if(ne&&(e||(e=[]),e.push({type:"rotationInfo",rotationType:o,field:ne})),e)return e.map($=>{const L=rt.read($.type),oe=st[L];oe||(g.getLogger(this).warn(`Unknown variable type: ${L}`),r?.messages&&r.messages.push(new Re("visual-variable:unsupported",`visualVariable of type '${L}' is not supported`,{definition:$,context:r})));const pe=new oe;return pe.read($,r),pe})}writeVariables(e,s){const r=[];for(const a of e){const o=a.toJSON(s);o&&r.push(o)}return r}_resetVariables(){this.colorVariables=[],this.opacityVariables=[],this.rotationVariables=[],this.sizeVariables=[]}};t([i()],N.prototype,"visualVariables",null),N=t([u("esri.renderers.visualVariables.VisualVariableFactory")],N);const lt=N,nt={base:T,key:"type",typeMap:{opacity:ee,color:Se,rotation:ie,size:le}},ot=e=>{let s=class extends e{constructor(){super(...arguments),this._vvFactory=new lt}set visualVariables(r){this._vvFactory.visualVariables=r,this._set("visualVariables",this._vvFactory.visualVariables)}readVisualVariables(r,a,o){return this._vvFactory.readVariables(r,a,o)}writeVisualVariables(r,a,o,h){a[o]=this._vvFactory.writeVariables(r,h)}get arcadeRequiredForVisualVariables(){return this.visualVariables?.some(({arcadeRequired:r})=>r)??!1}hasVisualVariables(r,a){return r?this.getVisualVariablesForType(r,a).length>0:this.getVisualVariablesForType("size",a).length>0||this.getVisualVariablesForType("color",a).length>0||this.getVisualVariablesForType("opacity",a).length>0||this.getVisualVariablesForType("rotation",a).length>0}getVisualVariablesForType(r,a){return this.visualVariables?.filter(o=>o.type===r&&(typeof a=="string"?o.target===a:a!==!1||!o.target))??[]}async collectVVRequiredFields(r,a){let o=[];this.visualVariables&&(o=o.concat(this.visualVariables));for(const h of o)h&&(h.field&&H(r,a,h.field),h.normalizationField&&H(r,a,h.normalizationField),h.valueExpression&&(pt(h.valueExpression,r,a)||await Oe(r,a,h.valueExpression)))}};return t([i({types:[nt],value:null,json:{write:!0}})],s.prototype,"visualVariables",null),t([b("visualVariables",["visualVariables","rotationType","rotationExpression"])],s.prototype,"readVisualVariables",null),t([B("visualVariables")],s.prototype,"writeVisualVariables",null),s=t([u("esri.renderers.mixins.VisualVariablesMixin")],s),s};function pt(e,s,r){const a=ke(e);return a!=null&&(H(s,r,a),!0)}const Te={types:qe,json:{write:{writer:M},origins:{"web-scene":{types:ye,write:{writer:M},read:{reader:Ae({types:ye})}}}}},ut=Ce({json:{origins:{"web-scene":{write:{isRequired:!0}}}}},Te),ht={types:{base:Ne,key:"type",typeMap:{"simple-fill":R.typeMap["simple-fill"],"picture-fill":R.typeMap["picture-fill"],"polygon-3d":R.typeMap["polygon-3d"],cim:R.typeMap.cim}},json:{write:{writer:M},origins:{"web-scene":{type:$e,write:{writer:M}}}}},yt={cast:e=>e==null||typeof e=="string"||typeof e=="number"?e:`${e}`,json:{type:String,write:{writer:(e,s)=>{s.value=e?.toString()}}}};export{yt as a,le as b,T as c,ee as d,ie as e,fe as j,ut as m,ht as n,Ze as p,ze as u,ot as v,Te as y};
