import{x as o,z as u,K as c,aV as f}from"./main-DZMdXZ8-.js";import{a}from"./OrderByInfo-DvqhUIkY.js";function d(e,r,t){if(!e)return null;const i=e.find(s=>!!s.field);if(!i)return null;const n=new a;return n.read(i,t),[n]}function m(e,r,t,i){const n=e.find(s=>!!s.field);n&&f(t,[n.toJSON()],r)}const l={type:[a],json:{origins:{"web-scene":{write:!1,read:!1}},name:"layerDefinition.orderBy",read:{reader:d},write:{writer:m}}},p=e=>{let r=class extends e{constructor(){super(...arguments),this.orderBy=null}};return o([u(l)],r.prototype,"orderBy",void 0),r=o([c("esri.layers.mixins.OrderedLayer")],r),r};export{l as c,d as i,p};
