import{k as s,o as l,A as u,aY as c}from"./main-DFutu5rJ.js";import{a}from"./OrderByInfo-noceB6kv.js";function f(e,r,t){if(!e)return null;const i=e.find(o=>!!o.field);if(!i)return null;const n=new a;return n.read(i,t),[n]}function m(e,r,t,i){const n=e.find(o=>!!o.field);n&&c(t,[n.toJSON()],r)}const d={type:[a],json:{origins:{"web-scene":{write:!1,read:!1}},name:"layerDefinition.orderBy",read:{reader:f},write:{writer:m}}},p=e=>{let r=class extends e{constructor(){super(...arguments),this.orderBy=null}};return s([l(d)],r.prototype,"orderBy",void 0),r=s([u("esri.layers.mixins.OrderedLayer")],r),r};export{d as c,p};
