import{k as l,o as s,u as h,q as u,A as d,v as x,ax as I,fy as j,fz as B,fA as N,fB as g,fC as D,fD as M,f as S,s as O,n as G}from"./main-DyJf3FFo.js";import{E as P,u as V,_ as z,x as $,f as R,g as F}from"./labelUtils-9uerVW3s.js";var f;let p=f=class extends x{constructor(){super(...arguments),this.expression=null,this.title=null,this.value=null}readExpression(e,t){return t.value?P(t.value):e}writeExpression(e,t,n){this.value!=null&&(e=P(this.value)),e!=null&&(t[n]=e)}clone(){return new f({expression:this.expression,title:this.title,value:this.value})}};l([s({type:String,json:{write:{writerEnsuresNonNull:!0}}})],p.prototype,"expression",void 0),l([h("expression",["expression","value"])],p.prototype,"readExpression",null),l([u("expression")],p.prototype,"writeExpression",null),l([s({type:String,json:{write:!0,origins:{"web-scene":{write:!1}}}})],p.prototype,"title",void 0),l([s({json:{read:!1,write:!1}})],p.prototype,"value",void 0),p=f=l([d("esri.layers.support.LabelExpressionInfo")],p);const L=p;var y;const v=new I({esriServerPointLabelPlacementAboveCenter:"above-center",esriServerPointLabelPlacementAboveLeft:"above-left",esriServerPointLabelPlacementAboveRight:"above-right",esriServerPointLabelPlacementBelowCenter:"below-center",esriServerPointLabelPlacementBelowLeft:"below-left",esriServerPointLabelPlacementBelowRight:"below-right",esriServerPointLabelPlacementCenterCenter:"center-center",esriServerPointLabelPlacementCenterLeft:"center-left",esriServerPointLabelPlacementCenterRight:"center-right",esriServerLinePlacementAboveAfter:"above-after",esriServerLinePlacementAboveAlong:"above-along",esriServerLinePlacementAboveBefore:"above-before",esriServerLinePlacementAboveStart:"above-start",esriServerLinePlacementAboveEnd:"above-end",esriServerLinePlacementBelowAfter:"below-after",esriServerLinePlacementBelowAlong:"below-along",esriServerLinePlacementBelowBefore:"below-before",esriServerLinePlacementBelowStart:"below-start",esriServerLinePlacementBelowEnd:"below-end",esriServerLinePlacementCenterAfter:"center-after",esriServerLinePlacementCenterAlong:"center-along",esriServerLinePlacementCenterBefore:"center-before",esriServerLinePlacementCenterStart:"center-start",esriServerLinePlacementCenterEnd:"center-end",esriServerPolygonPlacementAlwaysHorizontal:"always-horizontal"},{ignoreUnknown:!0});function w(e,t,n){return{enabled:!D(n?.layer)}}function E(e){return!e||e.origin!=="service"&&e.layer?.type!=="map-image"}function k(e){return e?.type==="map-image"}function A(e){return!!k(e)&&!!e.capabilities?.exportMap?.supportsArcadeExpressionForLabeling}function J(e){return E(e)||A(e?.layer)}let o=y=class extends x{static evaluateWhere(e,t){const n=(r,i,a)=>{switch(i){case"=":return r==a;case"<>":return r!=a;case">":return r>a;case">=":return r>=a;case"<":return r<a;case"<=":return r<=a}return!1};try{if(e==null)return!0;const r=e.split(" ");if(r.length===3)return n(t[r[0]],r[1],r[2]);if(r.length===7){const i=n(t[r[0]],r[1],r[2]),a=r[3],c=n(t[r[4]],r[5],r[6]);switch(a){case"AND":return i&&c;case"OR":return i||c}}return!1}catch{}}constructor(e){super(e),this.type="label",this.name=null,this.allowOverrun=!1,this.deconflictionStrategy="static",this.labelExpression=null,this.labelExpressionInfo=null,this.labelPlacement=null,this.labelPosition="curved",this.maxScale=0,this.minScale=0,this.repeatLabel=!0,this.repeatLabelDistance=null,this.symbol=M,this.useCodedValues=void 0,this.where=null}readLabelExpression(e,t){const n=t.labelExpressionInfo;if(!n||!n.value&&!n.expression)return e}writeLabelExpression(e,t,n){if(this.labelExpressionInfo){if(this.labelExpressionInfo.value!=null)e=V(this.labelExpressionInfo.value);else if(this.labelExpressionInfo.expression!=null){const r=z(this.labelExpressionInfo.expression);r&&(e="["+r+"]")}}e!=null&&(t[n]=e)}writeLabelExpressionInfo(e,t,n,r){if(e==null&&this.labelExpression!=null&&E(r))e=new L({expression:this.getLabelExpressionArcade()});else if(!e)return;const i=e.toJSON(r);i.expression&&(t[n]=i)}writeMaxScale(e,t){(e||this.minScale)&&(t.maxScale=e)}writeMinScale(e,t){(e||this.maxScale)&&(t.minScale=e)}getLabelExpression(){return $(this)}getLabelExpressionArcade(){return R(this)}getLabelExpressionSingleField(){return F(this)}hash(){return JSON.stringify(this)}clone(){return new y({allowOverrun:this.allowOverrun,deconflictionStrategy:this.deconflictionStrategy,labelExpression:this.labelExpression,labelExpressionInfo:S(this.labelExpressionInfo),labelPosition:this.labelPosition,labelPlacement:this.labelPlacement,maxScale:this.maxScale,minScale:this.minScale,name:this.name,repeatLabel:this.repeatLabel,repeatLabelDistance:this.repeatLabelDistance,symbol:S(this.symbol),where:this.where,useCodedValues:this.useCodedValues})}};l([s({type:String,json:{write:!0}})],o.prototype,"name",void 0),l([s({type:Boolean,json:{write:!0,default:!1,origins:{"web-scene":{write:!1},"portal-item":{default:!1,write:{overridePolicy:w}}}}})],o.prototype,"allowOverrun",void 0),l([s({type:String,json:{write:!0,default:"static",origins:{"web-scene":{write:!1},"portal-item":{default:"static",write:{overridePolicy:w}}}}})],o.prototype,"deconflictionStrategy",void 0),l([s({type:String,json:{write:{overridePolicy(e,t,n){return this.labelExpressionInfo&&n?.origin==="service"&&A(n.layer)?{enabled:!1}:{allowNull:!0}}}}})],o.prototype,"labelExpression",void 0),l([h("labelExpression")],o.prototype,"readLabelExpression",null),l([u("labelExpression")],o.prototype,"writeLabelExpression",null),l([s({type:L,json:{write:{overridePolicy:(e,t,n)=>J(n)?{allowNull:!0}:{enabled:!1}}}})],o.prototype,"labelExpressionInfo",void 0),l([u("labelExpressionInfo")],o.prototype,"writeLabelExpressionInfo",null),l([s({type:v.apiValues,json:{type:v.jsonValues,read:v.read,write:v.write}})],o.prototype,"labelPlacement",void 0),l([s({type:["curved","parallel"],json:{write:!0,origins:{"web-map":{write:!1},"web-scene":{write:!1},"portal-item":{write:!1}}}})],o.prototype,"labelPosition",void 0),l([s({type:Number})],o.prototype,"maxScale",void 0),l([u("maxScale")],o.prototype,"writeMaxScale",null),l([s({type:Number})],o.prototype,"minScale",void 0),l([u("minScale")],o.prototype,"writeMinScale",null),l([s({type:Boolean,json:{write:!0,origins:{"web-scene":{write:!1},"portal-item":{write:{overridePolicy:w}}}}})],o.prototype,"repeatLabel",void 0),l([s({type:Number,cast:j,json:{write:!0,origins:{"web-scene":{write:!1},"portal-item":{write:{overridePolicy:w}}}}})],o.prototype,"repeatLabelDistance",void 0),l([s({types:B,json:{origins:{"web-scene":{types:N,write:g,default:null}},write:g,default:null}})],o.prototype,"symbol",void 0),l([s({type:Boolean,json:{write:!0}})],o.prototype,"useCodedValues",void 0),l([s({type:String,json:{write:!0}})],o.prototype,"where",void 0),o=y=l([d("esri.layers.support.LabelClass")],o);const C=o,m=()=>G.getLogger("esri.layers.support.labelingInfo"),U=/\[([^[\]]+)\]/gi;function q(e,t,n){return e?e.map(r=>{const i=new C;if(i.read(r,n),i.labelExpression){const a=t.fields||t.layerDefinition?.fields||this.fields;i.labelExpression=i.labelExpression.replaceAll(U,(c,b)=>`[${H(b,a)}]`)}return i}):null}function H(e,t){if(!t)return e;const n=e.toLowerCase();for(let r=0;r<t.length;r++){const i=t[r].name;if(i.toLowerCase()===n)return i}return e}const K={esriGeometryPoint:["above-right","above-center","above-left","center-center","center-left","center-right","below-center","below-left","below-right"],esriGeometryMultiPatch:["always-horizontal"],esriGeometryPolygon:["always-horizontal"],esriGeometryPolyline:["center-along","above-along","below-along"],esriGeometryMultipoint:null,esriGeometryEnvelope:null};function Q(e,t){const n=[];for(const r of e){const i=r.labelPlacement,a=K[t];if(!r.symbol)return m().warn("No ILabelClass symbol specified."),[];if(!a)return m().error(new O("labeling:unsupported-geometry-type",`Unable to create labels for layer, geometry type '${t}' is not supported`)),[];if(a.includes(i))n.push(r);else{const c=a[0];i&&m().warn(`Found invalid label placement type ${i} for ${t}. Defaulting to ${c}`);const b=r.clone();b.labelPlacement=c,n.push(b)}}return n}export{C,Q as a,q as n};
