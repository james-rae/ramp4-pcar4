import{y as p,u as _,i as m,c as y,l as F,p as g,o as w,m as $,T as b,h as E,a as v,b as A,d as M,A as T,O,x,g as z,w as V,E as D,L as B,B as C,F as G,I as S,U as j,j as L,V as U,M as q,S as J,k as K,q as k,v as N,z as P,C as Q,D as R,G as W,H as X}from"./BufferView-BKKI6ML5.js";import{e as l}from"./types-D0PSWh4d.js";import{n as Y}from"./vec2f64-DohEyf3f.js";import"./vec42-CKs01hkn.js";import"./vec4f64-o2zAXfmz.js";class Z{constructor(t){this.message=t}toString(){return`AssertException: ${this.message}`}}function tt(i,t="Assertion"){if(!i){const e=new Error(t).stack;throw new Z(`${t} at ${e}`)}}function dt(i,t){i||(t=t||"",console.warn("Verify failed: "+t+`
`+new Error("verify").stack))}function ft(i,t,e,r){let s,n=(e[0]-i[0])/t[0],h=(r[0]-i[0])/t[0];n>h&&(s=n,n=h,h=s);let d=(e[1]-i[1])/t[1],u=(r[1]-i[1])/t[1];if(d>u&&(s=d,d=u,u=s),n>u||d>h)return!1;d>n&&(n=d),u<h&&(h=u);let o=(e[2]-i[2])/t[2],f=(r[2]-i[2])/t[2];return o>f&&(s=o,o=f,f=s),!(n>f||o>h)&&(f<h&&(h=f),!(h<0))}function ot(i,t,e,r,s,n=Y()){const h=(r[s]-e[s])*(t[0]-i[0])-(r[0]-e[0])*(t[s]-i[s]),d=(r[0]-e[0])*(i[s]-e[s])-(r[s]-e[s])*(i[0]-e[0]);if(h===0)return!1;const u=d/h;return n[0]=i[0]+u*(t[0]-i[0]),n[1]=i[s]+u*(t[s]-i[s]),!0}function at(i,t){return Math.log(i)/Math.log(t)}function ct(i){return i[0]===1&&i[1]===0&&i[2]===0&&i[3]===0&&i[4]===0&&i[5]===1&&i[6]===0&&i[7]===0&&i[8]===0&&i[9]===0&&i[10]===1&&i[11]===0&&i[15]===1}class a{constructor(t,e){this.layout=t,this.buffer=typeof e=="number"?new ArrayBuffer(e*t.stride):e;for(const r of t.fields.keys()){const s=t.fields.get(r);this[r]=new s.constructor(this.buffer,s.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(t,e){const r=this[t];return r&&r.elementCount===e.ElementCount&&r.elementType===e.ElementType?r:null}slice(t,e){return new a(this.layout,this.buffer.slice(t*this.stride,e*this.stride))}copyFrom(t,e=0,r=0,s=t.count){const n=this.stride;if(n%4==0){const h=new Uint32Array(t.buffer,e*n,s*n/4);new Uint32Array(this.buffer,r*n,s*n/4).set(h)}else{const h=new Uint8Array(t.buffer,e*n,s*n);new Uint8Array(this.buffer,r*n,s*n).set(h)}return this}get cachedMemory(){return this.byteLength}dispose(){}}class c{constructor(t){this._stride=0,this._lastAligned=0,this._fields=new Map,t&&(this._stride=t.stride,t.fields.forEach(e=>this._fields.set(e[0],{...e[1],constructor:it(e[1].constructor)})))}freeze(){return this}vec2f(t,e){return this._appendField(t,_,e),this}vec2f64(t,e){return this._appendField(t,$,e),this}vec3f(t,e){return this._appendField(t,m,e),this}vec3f64(t,e){return this._appendField(t,b,e),this}vec4f(t,e){return this._appendField(t,y,e),this}vec4f64(t,e){return this._appendField(t,E,e),this}mat3f(t,e){return this._appendField(t,F,e),this}mat3f64(t,e){return this._appendField(t,v,e),this}mat4f(t,e){return this._appendField(t,g,e),this}mat4f64(t,e){return this._appendField(t,A,e),this}vec4u8(t,e){return this._appendField(t,x,e),this}f32(t,e){return this._appendField(t,p,e),this}f64(t,e){return this._appendField(t,w,e),this}u8(t,e){return this._appendField(t,M,e),this}u16(t,e){return this._appendField(t,z,e),this}i8(t,e){return this._appendField(t,L,e),this}vec2i8(t,e){return this._appendField(t,U,e),this}vec2i16(t,e){return this._appendField(t,k,e),this}vec2u8(t,e){return this._appendField(t,T,e),this}vec4u16(t,e){return this._appendField(t,B,e),this}u32(t,e){return this._appendField(t,C,e),this}_appendField(t,e,r){if(this._fields.has(t))return void tt(!1,`${t} already added to vertex buffer layout`);const s=e.ElementCount*l(e.ElementType),n=this._stride;this._stride+=s,this._fields.set(t,{size:s,constructor:e,offset:n,optional:r})}createBuffer(t){return new a(this,t)}createView(t){return new a(this,t)}clone(){const t=new c;return t._stride=this._stride,t._fields=new Map,this._fields.forEach((e,r)=>t._fields.set(r,e)),t.BufferType=this.BufferType,t}get stride(){if(this._lastAligned!==this._fields.size){let t=1;this._fields.forEach(e=>t=Math.max(t,l(e.constructor.ElementType))),this._stride=Math.floor((this._stride+t-1)/t)*t,this._lastAligned=this._fields.size}return this._stride}get fields(){return this._fields}}function lt(){return new c}class pt{constructor(t){this.fields=new Array,t.fields.forEach((e,r)=>{const s={...e,constructor:H(e.constructor)};this.fields.push([r,s])}),this.stride=t.stride}}const et=[p,_,m,y,F,g,w,$,b,E,v,A,M,T,O,x,z,V,D,B,C,G,S,j,L,U,q,J,K,k,N,P,Q,R,W,X];function H(i){return`${i.ElementType}_${i.ElementCount}`}function it(i){return I.get(i)}const I=new Map;et.forEach(i=>I.set(H(i),i));export{c as G,lt as H,pt as I,dt as c,ot as f,ft as i,ct as m,tt as s,at as u};
