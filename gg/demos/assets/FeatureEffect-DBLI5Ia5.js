import{B as i,D as d,aX as f,N as b,J as m,s as c}from"./main-BnINupoD.js";import{n as o,a as u}from"./jsonUtils-BsukQQP4.js";import y from"./FeatureFilter-BNZwDESJ.js";var a;const w={read:{reader:o},write:{writer:u,overridePolicy(){return{allowNull:this.excludedEffect!=null,isRequired:this.excludedEffect==null}}}},p={read:{reader:o},write:{writer:u,overridePolicy(){return{allowNull:this.includedEffect!=null,isRequired:this.includedEffect==null}}}},h={name:"showExcludedLabels",default:!0};let t=a=class extends m{constructor(r){super(r),this.filter=null,this.includedEffect=null,this.excludedEffect=null,this.excludedLabelsVisible=!1}write(r,e){const l=super.write(r,e);if(e?.origin){if(l.filter){const s=Object.keys(l.filter);if(s.length>1||s[0]!=="where")return e.messages?.push(new c("web-document-write:unsupported-feature-effect","Invalid feature effect 'filter'. A filter can only contain a 'where' property",{layer:e.layer,effect:this})),null}if("showExcludedLabels"in l)return e.messages?.push(new c("web-document-write:unsupported-feature-effect","Invalid value for property 'excludedLabelsVisible' which should always be 'true'",{layer:e.layer,effect:this})),null}return l}clone(){return new a({filter:this.filter!=null?this.filter.clone():null,includedEffect:this.includedEffect,excludedEffect:this.excludedEffect,excludedLabelsVisible:this.excludedLabelsVisible})}};i([d({type:y,json:{write:{allowNull:!0,writer(r,e,l,s){const n=r?.write({},s);n&&Object.keys(n).length!==0?f(l,n,e):f(l,null,e)}}}})],t.prototype,"filter",void 0),i([d({json:{read:o,write:{writer:u,allowNull:!0},origins:{"web-map":w,"portal-item":w}}})],t.prototype,"includedEffect",void 0),i([d({json:{read:o,write:{writer:u,allowNull:!0},origins:{"web-map":p,"portal-item":p}}})],t.prototype,"excludedEffect",void 0),i([d({type:Boolean,json:{write:!0,name:"showExcludedLabels",origins:{"web-map":h,"portal-item":h}}})],t.prototype,"excludedLabelsVisible",void 0),t=a=i([b("esri.layers.support.FeatureEffect")],t);const g=t;export{g as w};
