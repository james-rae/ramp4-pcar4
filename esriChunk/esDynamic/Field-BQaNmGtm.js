import{k as t,o,A as a,v as m,av as j,bi as u,f as J,u as S,bn as k}from"./main-CXlQVgQI.js";import{i as P}from"./fieldType-PkCtdpcj.js";var h;let l=h=class extends m{constructor(e){super(e),this.name=null,this.code=null}clone(){return new h({name:this.name,code:this.code})}};t([o({type:String,json:{write:!0}})],l.prototype,"name",void 0),t([o({type:[String,Number],json:{write:!0}})],l.prototype,"code",void 0),l=h=t([a("esri.layers.support.CodedValue")],l);const B=new j({inherited:"inherited",codedValue:"coded-value",range:"range"});let d=class extends m{constructor(e){super(e),this.name=null,this.type=null}};t([o({type:String,json:{write:!0}})],d.prototype,"name",void 0),t([u(B)],d.prototype,"type",void 0),d=t([a("esri.layers.support.Domain")],d);const c=d;var v;let p=v=class extends c{constructor(e){super(e),this.codedValues=null,this.type="coded-value"}getName(e){let r=null;if(this.codedValues){const i=String(e);this.codedValues.some(f=>(String(f.code)===i&&(r=f.name),!!r))}return r}clone(){return new v({codedValues:J(this.codedValues),name:this.name})}};t([o({type:[l],json:{write:!0}})],p.prototype,"codedValues",void 0),t([u({codedValue:"coded-value"})],p.prototype,"type",void 0),p=v=t([a("esri.layers.support.CodedValueDomain")],p);const g=p;var V;let y=V=class extends c{constructor(e){super(e),this.type="inherited"}clone(){return new V}};t([u({inherited:"inherited"})],y.prototype,"type",void 0),y=V=t([a("esri.layers.support.InheritedDomain")],y);const N=y;var b;let s=b=class extends c{constructor(e){super(e),this.maxValue=null,this.minValue=null,this.type="range"}clone(){return new b({maxValue:this.maxValue,minValue:this.minValue,name:this.name})}};t([o({json:{type:[Number],read:{source:"range",reader:(e,r)=>r.range?.[1]},write:{enabled:!1,overridePolicy(){return{enabled:this.maxValue!=null&&this.minValue==null}},target:"range",writer(e,r,i){r[i]=[this.minValue||0,e]}}}})],s.prototype,"maxValue",void 0),t([o({json:{type:[Number],read:{source:"range",reader:(e,r)=>r.range?.[0]},write:{target:"range",writer(e,r,i){r[i]=[e,this.maxValue||0]}}}})],s.prototype,"minValue",void 0),t([u({range:"range"})],s.prototype,"type",void 0),s=b=t([a("esri.layers.support.RangeDomain")],s);const O=s,x={key:"type",base:c,typeMap:{range:O,"coded-value":g,inherited:N}};function T(e){if(!e?.type)return null;switch(e.type){case"range":return O.fromJSON(e);case"codedValue":return g.fromJSON(e);case"inherited":return N.fromJSON(e)}return null}var w;const F=new j({binary:"binary",coordinate:"coordinate",countOrAmount:"count-or-amount",dateAndTime:"date-and-time",description:"description",locationOrPlaceName:"location-or-place-name",measurement:"measurement",nameOrTitle:"name-or-title",none:"none",orderedOrRanked:"ordered-or-ranked",percentageOrRatio:"percentage-or-ratio",typeOrCategory:"type-or-category",uniqueIdentifier:"unique-identifier"});let n=w=class extends m{constructor(e){super(e),this.alias=null,this.defaultValue=void 0,this.description=null,this.domain=null,this.editable=!0,this.length=void 0,this.name=null,this.nullable=!0,this.type=null,this.valueType=null,this.visible=!0}readDescription(e,{description:r}){let i=null;try{i=r?JSON.parse(r):null}catch{}return i?.value??null}readValueType(e,{description:r}){let i=null;try{i=r?JSON.parse(r):null}catch{}return i?F.fromJSON(i.fieldValueType):null}clone(){return new w({alias:this.alias,defaultValue:this.defaultValue,description:this.description,domain:this.domain?.clone()??null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type,valueType:this.valueType,visible:this.visible})}};t([o({type:String,json:{write:!0}})],n.prototype,"alias",void 0),t([o({type:[String,Number],json:{write:{allowNull:!0}}})],n.prototype,"defaultValue",void 0),t([o()],n.prototype,"description",void 0),t([S("description")],n.prototype,"readDescription",null),t([o({types:x,json:{read:{reader:T},write:!0}})],n.prototype,"domain",void 0),t([o({type:Boolean,json:{write:!0}})],n.prototype,"editable",void 0),t([o({type:k,json:{write:{overridePolicy:e=>({enabled:Number.isFinite(e)})}}})],n.prototype,"length",void 0),t([o({type:String,json:{write:!0}})],n.prototype,"name",void 0),t([o({type:Boolean,json:{write:!0}})],n.prototype,"nullable",void 0),t([u(P)],n.prototype,"type",void 0),t([o()],n.prototype,"valueType",void 0),t([S("valueType",["description"])],n.prototype,"readValueType",null),t([o({type:Boolean,json:{read:!1}})],n.prototype,"visible",void 0),n=w=t([a("esri.layers.support.Field")],n);const D=n,_=Object.freeze(Object.defineProperty({__proto__:null,default:D},Symbol.toStringTag,{value:"Module"}));export{_ as F,g as a,T as i,x as n,l as p,D as y};