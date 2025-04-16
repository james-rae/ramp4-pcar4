import{y as u,u as f,i as l,c as o,l as p,p as c,o as _,m as y,T as F,h as m,a as g,b as w,d as b,A as v,O as $,x as E,g as A,w as k,E as H,L as T,B as M,F as I,I as V,U as j,j as z,V as B,M as q,S as D,k as G,q as C,v as O,z as S,C as J,D as K,G as N,H as P}from"./BufferView-BmGRXY3c.js";import{e as L}from"./types-ChhhI6OU.js";import{s as Q}from"./Util-BjGjeg6f.js";class h{constructor(t,e){this.layout=t,this.buffer=typeof e=="number"?new ArrayBuffer(e*t.stride):e;for(const s of t.fields.keys()){const i=t.fields.get(s);this[s]=new i.constructor(this.buffer,i.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(t,e){const s=this[t];return s&&s.elementCount===e.ElementCount&&s.elementType===e.ElementType?s:null}slice(t,e){return new h(this.layout,this.buffer.slice(t*this.stride,e*this.stride))}copyFrom(t,e=0,s=0,i=t.count){const r=this.stride;if(r%4==0){const a=new Uint32Array(t.buffer,e*r,i*r/4);new Uint32Array(this.buffer,s*r,i*r/4).set(a)}else{const a=new Uint8Array(t.buffer,e*r,i*r);new Uint8Array(this.buffer,s*r,i*r).set(a)}return this}get usedMemory(){return this.byteLength}dispose(){}}class d{constructor(t){this._stride=0,this._lastAligned=0,this._fields=new Map,t&&(this._stride=t.stride,t.fields.forEach(e=>this._fields.set(e[0],{...e[1],constructor:Y(e[1].constructor)})))}freeze(){return this}vec2f(t,e){return this._appendField(t,f,e),this}vec2f64(t,e){return this._appendField(t,y,e),this}vec3f(t,e){return this._appendField(t,l,e),this}vec3f64(t,e){return this._appendField(t,F,e),this}vec4f(t,e){return this._appendField(t,o,e),this}vec4f64(t,e){return this._appendField(t,m,e),this}mat3f(t,e){return this._appendField(t,p,e),this}mat3f64(t,e){return this._appendField(t,g,e),this}mat4f(t,e){return this._appendField(t,c,e),this}mat4f64(t,e){return this._appendField(t,w,e),this}vec4u8(t,e){return this._appendField(t,E,e),this}f32(t,e){return this._appendField(t,u,e),this}f64(t,e){return this._appendField(t,_,e),this}u8(t,e){return this._appendField(t,b,e),this}u16(t,e){return this._appendField(t,A,e),this}i8(t,e){return this._appendField(t,z,e),this}vec2i8(t,e){return this._appendField(t,B,e),this}vec2i16(t,e){return this._appendField(t,C,e),this}vec2u8(t,e){return this._appendField(t,v,e),this}vec4u16(t,e){return this._appendField(t,T,e),this}u32(t,e){return this._appendField(t,M,e),this}_appendField(t,e,s){if(this._fields.has(t))return void Q(!1,`${t} already added to vertex buffer layout`);const i=e.ElementCount*L(e.ElementType),r=this._stride;this._stride+=i,this._fields.set(t,{size:i,constructor:e,offset:r,optional:s})}createBuffer(t){return new h(this,t)}createView(t){return new h(this,t)}clone(){const t=new d;return t._stride=this._stride,t._fields=new Map,this._fields.forEach((e,s)=>t._fields.set(s,e)),t.BufferType=this.BufferType,t}get stride(){if(this._lastAligned!==this._fields.size){let t=1;this._fields.forEach(e=>t=Math.max(t,L(e.constructor.ElementType))),this._stride=Math.floor((this._stride+t-1)/t)*t,this._lastAligned=this._fields.size}return this._stride}get fields(){return this._fields}}function R(){return new d}class W{constructor(t){this.fields=new Array,t.fields.forEach((e,s)=>{const i={...e,constructor:U(e.constructor)};this.fields.push([s,i])}),this.stride=t.stride}}const X=[u,f,l,o,p,c,_,y,F,m,g,w,b,v,$,E,A,k,H,T,M,I,V,j,z,B,q,D,G,C,O,S,J,K,N,P];function U(n){return`${n.ElementType}_${n.ElementCount}`}function Y(n){return x.get(n)}const x=new Map;X.forEach(n=>x.set(U(n),n));export{R as H,W as I};
