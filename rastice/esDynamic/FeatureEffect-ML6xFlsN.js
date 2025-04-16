import{k as i,o as u,aV as c,A as b,v as y,s as f}from"./main-CvsyIoCL.js";import{n as o,a as d}from"./jsonUtils-5zVqe_dO.js";import m from"./FeatureFilter-DDi-S8YH.js";var a;const w={read:{reader:o},write:{writer:d,overridePolicy(){return{allowNull:this.excludedEffect!=null,isRequired:this.excludedEffect==null}}}},p={read:{reader:o},write:{writer:d,overridePolicy(){return{allowNull:this.includedEffect!=null,isRequired:this.includedEffect==null}}}},h={name:"showExcludedLabels",default:!0};let l=a=class extends y{constructor(r){super(r),this.filter=null,this.includedEffect=null,this.excludedEffect=null,this.excludedLabelsVisible=!1}write(r,e){const t=super.write(r,e);if(e?.origin){if(t.filter){const s=Object.keys(t.filter);if(s.length>1||s[0]!=="where")return e.messages?.push(new f("web-document-write:unsupported-feature-effect","Invalid feature effect 'filter'. A filter can only contain a 'where' property",{layer:e.layer,effect:this})),null}if("showExcludedLabels"in t)return e.messages?.push(new f("web-document-write:unsupported-feature-effect","Invalid value for property 'excludedLabelsVisible' which should always be 'true'",{layer:e.layer,effect:this})),null}return t}clone(){return new a({filter:this.filter!=null?this.filter.clone():null,includedEffect:this.includedEffect,excludedEffect:this.excludedEffect,excludedLabelsVisible:this.excludedLabelsVisible})}};i([u({type:m,json:{write:{allowNull:!0,writer(r,e,t,s){const n=r?.write({},s);n&&Object.keys(n).length!==0?c(t,n,e):c(t,null,e)}}}})],l.prototype,"filter",void 0),i([u({json:{read:o,write:{writer:d,allowNull:!0},origins:{"web-map":w,"portal-item":w}}})],l.prototype,"includedEffect",void 0),i([u({json:{read:o,write:{writer:d,allowNull:!0},origins:{"web-map":p,"portal-item":p}}})],l.prototype,"excludedEffect",void 0),i([u({type:Boolean,json:{write:!0,name:"showExcludedLabels",origins:{"web-map":h,"portal-item":h}}})],l.prototype,"excludedLabelsVisible",void 0),l=a=i([b("esri.layers.support.FeatureEffect")],l);const x=l;export{x as w};
