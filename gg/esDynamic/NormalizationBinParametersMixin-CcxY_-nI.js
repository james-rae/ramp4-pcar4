import{q as p,x as o,z as n,bi as u,K as z,n as y}from"./main-DTtQVgOw.js";const r=p()({naturalLog:"natural-log",squareRoot:"square-root",percentOfTotal:"percent-of-total",log:"log",field:"field"}),l="percent-of-total",s="field",d=m=>{let a=class extends m{constructor(){super(...arguments),this.normalizationField=null,this.normalizationMaxValue=null,this.normalizationMinValue=null,this.normalizationTotal=null}get normalizationType(){let t=this._get("normalizationType");const i=!!this.normalizationField,e=this.normalizationTotal!=null;return i||e?(t=i&&s||e&&l||null,i&&e&&y.getLogger(this).warn("warning: both normalizationField and normalizationTotal are set!")):t!==s&&t!==l||(t=null),t}set normalizationType(t){this._set("normalizationType",t)}};return o([n({type:String,json:{name:"parameters.normalizationField",write:!0}})],a.prototype,"normalizationField",void 0),o([n({type:Number,json:{name:"parameters.normalizationMaxValue",write:!0}})],a.prototype,"normalizationMaxValue",void 0),o([n({type:Number,json:{name:"parameters.normalizationMinValue",write:!0}})],a.prototype,"normalizationMinValue",void 0),o([n({type:Number,json:{name:"parameters.normalizationTotal",write:!0}})],a.prototype,"normalizationTotal",void 0),o([u(r,{name:"parameters.normalizationType"})],a.prototype,"normalizationType",null),a=o([z("esri.rest.support.NormalizationBinParametersMixin")],a),a};export{d as m,r as n};
