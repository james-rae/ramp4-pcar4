import{aZ as a,J as p,B as s,D as n,H as m,G as l,N as d}from"./main-BnINupoD.js";import{i as c}from"./Field-cvJSbcPM.js";import{n as u}from"./FeatureTemplate-Du4bvg8A.js";let o=class extends a.ClonableMixin(p){constructor(t){super(t),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(t){const r={};for(const e of Object.keys(t))r[e]=c(t[e]);return r}writeDomains(t,r){const e={};for(const i of Object.keys(t))t[i]&&(e[i]=t[i]?.toJSON());r.domains=e}};s([n({json:{write:!0}})],o.prototype,"id",void 0),s([n({json:{write:!0}})],o.prototype,"name",void 0),s([n({json:{write:!0}})],o.prototype,"domains",void 0),s([m("domains")],o.prototype,"readDomains",null),s([l("domains")],o.prototype,"writeDomains",null),s([n({type:[u],json:{write:!0}})],o.prototype,"templates",void 0),o=s([d("esri.layers.support.FeatureType")],o);const w=o;export{w as c};
