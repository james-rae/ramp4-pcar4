import{o as G}from"./vec2-DGVIkCvT.js";import{o as H}from"./vec32-gSPtxhar.js";import{s as _}from"./vec42-CKs01hkn.js";let k=class{constructor(e,t,s=0,r,i){this.TypedArrayConstructor=e,this.elementCount=9;const f=this.TypedArrayConstructor;r===void 0&&(r=9*f.BYTES_PER_ELEMENT);const u=t.byteLength===0?0:s;this.typedBuffer=i==null?new f(t,u):new f(t,u,(i-s)/f.BYTES_PER_ELEMENT),this.typedBufferStride=r/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,s=this.count-t){const r=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,r,this.stride,r+s*this.stride)}getMat(e,t){let s=e*this.typedBufferStride;for(let r=0;r<9;r++)t[r]=this.typedBuffer[s++];return t}setMat(e,t){let s=e*this.typedBufferStride;for(let r=0;r<9;r++)this.typedBuffer[s++]=t[r]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,s){this.typedBuffer[e*this.typedBufferStride+t]=s}copyFrom(e,t,s){const r=this.typedBuffer,i=t.typedBuffer;let f=e*this.typedBufferStride,u=s*t.typedBufferStride;for(let D=0;D<9;++D)r[f++]=i[u++]}get buffer(){return this.typedBuffer.buffer}};k.ElementCount=9;let q=class{constructor(e,t,s=0,r,i){this.TypedArrayConstructor=e,this.elementCount=16;const f=this.TypedArrayConstructor;r===void 0&&(r=16*f.BYTES_PER_ELEMENT);const u=t.byteLength===0?0:s;this.typedBuffer=i==null?new f(t,u):new f(t,u,(i-s)/f.BYTES_PER_ELEMENT),this.typedBufferStride=r/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,s=this.count-t){const r=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,r,this.stride,r+s*this.stride)}getMat(e,t){let s=e*this.typedBufferStride;for(let r=0;r<16;r++)t[r]=this.typedBuffer[s++];return t}setMat(e,t){let s=e*this.typedBufferStride;for(let r=0;r<16;r++)this.typedBuffer[s++]=t[r]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,s){this.typedBuffer[e*this.typedBufferStride+t]=s}copyFrom(e,t,s){this.copyFromTypedBuffer(e,t.typedBuffer,s*t.typedBufferStride)}copyFromTypedBuffer(e,t,s){const r=this.typedBuffer;let i=e*this.typedBufferStride;for(let f=0;f<16;++f)r[i++]=t[s++]}get buffer(){return this.typedBuffer.buffer}};q.ElementCount=16;class y{constructor(e,t,s=0,r,i){this.TypedArrayConstructor=e,this.elementCount=1;const f=this.TypedArrayConstructor;r===void 0&&(r=f.BYTES_PER_ELEMENT);const u=t.byteLength===0?0:s;this.typedBuffer=i==null?new f(t,u):new f(t,u,(i-s)/f.BYTES_PER_ELEMENT),this.stride=r,this.typedBufferStride=r/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride)}sliceBuffer(e,t,s=this.count-t){const r=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,r,this.stride,r+s*this.stride)}get(e){return this.typedBuffer[e*this.typedBufferStride]}set(e,t){this.typedBuffer[e*this.typedBufferStride]=t}get buffer(){return this.typedBuffer.buffer}}y.ElementCount=1;let n=class{constructor(e,t,s=0,r,i){this.TypedArrayConstructor=e,this.elementCount=2;const f=this.TypedArrayConstructor;r===void 0&&(r=2*f.BYTES_PER_ELEMENT);const u=t.byteLength===0?0:s;this.typedBuffer=i==null?new f(t,u):new f(t,u,(i-s)/f.BYTES_PER_ELEMENT),this.typedBufferStride=r/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,s=this.count-t){const r=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,r,this.stride,r+s*this.stride)}getVec(e,t){return e*=this.typedBufferStride,G(t,this.typedBuffer[e],this.typedBuffer[e+1])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e]=t[1]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,s){this.typedBuffer[e*this.typedBufferStride+t]=s}setValues(e,t,s){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e]=s}copyFrom(e,t,s){const r=this.typedBuffer,i=t.typedBuffer;let f=e*this.typedBufferStride,u=s*t.typedBufferStride;r[f++]=i[u++],r[f]=i[u]}get buffer(){return this.typedBuffer.buffer}};n.ElementCount=2;let c=class{constructor(e,t,s=0,r,i){this.TypedArrayConstructor=e,this.elementCount=3;const f=this.TypedArrayConstructor;r===void 0&&(r=3*f.BYTES_PER_ELEMENT);const u=t.byteLength===0?0:s;this.typedBuffer=i==null?new f(t,u):new f(t,u,(i-s)/f.BYTES_PER_ELEMENT),this.typedBufferStride=r/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,s=this.count-t){const r=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,r,this.stride,r+s*this.stride)}getVec(e,t){return e*=this.typedBufferStride,H(t,this.typedBuffer[e],this.typedBuffer[e+1],this.typedBuffer[e+2])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e++]=t[1],this.typedBuffer[e]=t[2]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,s){this.typedBuffer[e*this.typedBufferStride+t]=s}setValues(e,t,s,r){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e++]=s,this.typedBuffer[e]=r}copyFrom(e,t,s){const r=this.typedBuffer,i=t.typedBuffer;let f=e*this.typedBufferStride,u=s*t.typedBufferStride;r[f++]=i[u++],r[f++]=i[u++],r[f]=i[u]}get buffer(){return this.typedBuffer.buffer}};c.ElementCount=3;class h{constructor(e,t,s=0,r,i){this.TypedArrayConstructor=e,this.start=s,this.elementCount=4;const f=this.TypedArrayConstructor;r===void 0&&(r=4*f.BYTES_PER_ELEMENT);const u=t.byteLength===0?0:s;this.typedBuffer=i==null?new f(t,u):new f(t,u,(i-s)/f.BYTES_PER_ELEMENT),this.typedBufferStride=r/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,s=this.count-t){const r=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,r,this.stride,r+s*this.stride)}getVec(e,t){return e*=this.typedBufferStride,_(t,this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e++]=t[1],this.typedBuffer[e++]=t[2],this.typedBuffer[e]=t[3]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,s){this.typedBuffer[e*this.typedBufferStride+t]=s}setValues(e,t,s,r,i){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e++]=s,this.typedBuffer[e++]=r,this.typedBuffer[e]=i}copyFrom(e,t,s){const r=this.typedBuffer,i=t.typedBuffer;let f=e*this.typedBufferStride,u=s*t.typedBufferStride;r[f++]=i[u++],r[f++]=i[u++],r[f++]=i[u++],r[f]=i[u]}get buffer(){return this.typedBuffer.buffer}}h.ElementCount=4;class z extends y{constructor(e,t=0,s,r){super(Float32Array,e,t,s,r),this.elementType="f32"}static fromTypedArray(e,t){return new z(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}z.ElementType="f32";class p extends n{constructor(e,t=0,s,r){super(Float32Array,e,t,s,r),this.elementType="f32"}slice(e,t){return this.sliceBuffer(p,e,t)}static fromTypedArray(e,t){return new p(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}p.ElementType="f32";class l extends c{constructor(e,t=0,s,r){super(Float32Array,e,t,s,r),this.elementType="f32"}slice(e,t){return this.sliceBuffer(l,e,t)}static fromTypedArray(e,t){return new l(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}l.ElementType="f32";let ee=class j extends h{constructor(e,t=0,s,r){super(Float32Array,e,t,s,r),this.elementType="f32"}slice(e,t){return this.sliceBuffer(j,e,t)}static fromTypedArray(e,t){return new j(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}};ee.ElementType="f32";class o extends k{constructor(e,t=0,s,r){super(Float32Array,e,t,s,r),this.elementType="f32"}slice(e,t){return this.sliceBuffer(o,e,t)}static fromTypedArray(e,t){return new o(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}o.ElementType="f32";class a extends k{constructor(e,t=0,s,r){super(Float64Array,e,t,s,r),this.elementType="f64"}slice(e,t){return this.sliceBuffer(a,e,t)}static fromTypedArray(e,t){return new a(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}a.ElementType="f64";class B extends q{constructor(e,t=0,s,r){super(Float32Array,e,t,s,r),this.elementType="f32"}slice(e,t){return this.sliceBuffer(B,e,t)}static fromTypedArray(e,t){return new B(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}B.ElementType="f32";class b extends q{constructor(e,t=0,s,r){super(Float64Array,e,t,s,r),this.elementType="f64"}slice(e,t){return this.sliceBuffer(b,e,t)}static fromTypedArray(e,t){return new b(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}b.ElementType="f64";class T extends y{constructor(e,t=0,s,r){super(Float64Array,e,t,s,r),this.elementType="f64"}slice(e,t){return this.sliceBuffer(T,e,t)}static fromTypedArray(e,t){return new T(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}T.ElementType="f64";class E extends n{constructor(e,t=0,s,r){super(Float64Array,e,t,s,r),this.elementType="f64"}slice(e,t){return this.sliceBuffer(E,e,t)}static fromTypedArray(e,t){return new E(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}E.ElementType="f64";class m extends c{constructor(e,t=0,s,r){super(Float64Array,e,t,s,r),this.elementType="f64"}slice(e,t){return this.sliceBuffer(m,e,t)}static fromTypedArray(e,t){return new m(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}m.ElementType="f64";class A extends h{constructor(e,t=0,s,r){super(Float64Array,e,t,s,r),this.elementType="f64"}slice(e,t){return this.sliceBuffer(A,e,t)}static fromTypedArray(e,t){return new A(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}A.ElementType="f64";class O extends y{constructor(e,t=0,s,r){super(Uint8Array,e,t,s,r),this.elementType="u8"}slice(e,t){return this.sliceBuffer(O,e,t)}static fromTypedArray(e,t){return new O(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}O.ElementType="u8";class S extends n{constructor(e,t=0,s,r){super(Uint8Array,e,t,s,r),this.elementType="u8"}slice(e,t){return this.sliceBuffer(S,e,t)}static fromTypedArray(e,t){return new S(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}S.ElementType="u8";class g extends c{constructor(e,t=0,s,r){super(Uint8Array,e,t,s,r),this.elementType="u8"}slice(e,t){return this.sliceBuffer(g,e,t)}static fromTypedArray(e,t){return new g(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}g.ElementType="u8";class L extends h{constructor(e,t=0,s,r){super(Uint8Array,e,t,s,r),this.elementType="u8"}slice(e,t){return this.sliceBuffer(L,e,t)}static fromTypedArray(e,t){return new L(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}L.ElementType="u8";class w extends y{constructor(e,t=0,s,r){super(Uint16Array,e,t,s,r),this.elementType="u16"}slice(e,t){return this.sliceBuffer(w,e,t)}static fromTypedArray(e,t){return new w(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}w.ElementType="u16";class x extends n{constructor(e,t=0,s,r){super(Uint16Array,e,t,s,r),this.elementType="u16"}slice(e,t){return this.sliceBuffer(x,e,t)}static fromTypedArray(e,t){return new x(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}x.ElementType="u16";class M extends c{constructor(e,t=0,s,r){super(Uint16Array,e,t,s,r),this.elementType="u16"}slice(e,t){return this.sliceBuffer(M,e,t)}static fromTypedArray(e,t){return new M(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}M.ElementType="u16";class C extends h{constructor(e,t=0,s,r){super(Uint16Array,e,t,s,r),this.elementType="u16"}slice(e,t){return this.sliceBuffer(C,e,t)}static fromTypedArray(e,t){return new C(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}C.ElementType="u16";class N extends y{constructor(e,t=0,s,r){super(Uint32Array,e,t,s,r),this.elementType="u32"}slice(e,t){return this.sliceBuffer(N,e,t)}static fromTypedArray(e,t){return new N(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}N.ElementType="u32";class P extends n{constructor(e,t=0,s,r){super(Uint32Array,e,t,s,r),this.elementType="u32"}slice(e,t){return this.sliceBuffer(P,e,t)}static fromTypedArray(e,t){return new P(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}P.ElementType="u32";class R extends c{constructor(e,t=0,s,r){super(Uint32Array,e,t,s,r),this.elementType="u32"}slice(e,t){return this.sliceBuffer(R,e,t)}static fromTypedArray(e,t){return new R(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}R.ElementType="u32";class Y extends h{constructor(e,t=0,s,r){super(Uint32Array,e,t,s,r),this.elementType="u32"}slice(e,t){return this.sliceBuffer(Y,e,t)}static fromTypedArray(e,t){return new Y(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}Y.ElementType="u32";class F extends y{constructor(e,t=0,s,r){super(Int8Array,e,t,s,r),this.elementType="i8"}slice(e,t){return this.sliceBuffer(F,e,t)}static fromTypedArray(e,t){return new F(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}F.ElementType="i8";class I extends n{constructor(e,t=0,s,r){super(Int8Array,e,t,s,r),this.elementType="i8"}slice(e,t){return this.sliceBuffer(I,e,t)}static fromTypedArray(e,t){return new I(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}I.ElementType="i8";class U extends c{constructor(e,t=0,s,r){super(Int8Array,e,t,s,r),this.elementType="i8"}slice(e,t){return this.sliceBuffer(U,e,t)}static fromTypedArray(e,t){return new U(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}U.ElementType="i8";class V extends h{constructor(e,t=0,s,r){super(Int8Array,e,t,s,r),this.elementType="i8"}slice(e,t){return this.sliceBuffer(V,e,t)}static fromTypedArray(e,t){return new V(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}V.ElementType="i8";class $ extends y{constructor(e,t=0,s,r){super(Int16Array,e,t,s,r),this.elementType="i16"}slice(e,t){return this.sliceBuffer($,e,t)}static fromTypedArray(e,t){return new $(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}$.ElementType="i16";class v extends n{constructor(e,t=0,s,r){super(Int16Array,e,t,s,r),this.elementType="i16"}slice(e,t){return this.sliceBuffer(v,e,t)}static fromTypedArray(e,t){return new v(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}v.ElementType="i16";class J extends c{constructor(e,t=0,s,r){super(Int16Array,e,t,s,r),this.elementType="i16"}slice(e,t){return this.sliceBuffer(J,e,t)}static fromTypedArray(e,t){return new J(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}J.ElementType="i16";class K extends h{constructor(e,t=0,s,r){super(Int16Array,e,t,s,r),this.elementType="i16"}slice(e,t){return this.sliceBuffer(K,e,t)}static fromTypedArray(e,t){return new K(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}K.ElementType="i16";class Q extends y{constructor(e,t=0,s,r){super(Int32Array,e,t,s,r),this.elementType="i32"}slice(e,t){return this.sliceBuffer(Q,e,t)}static fromTypedArray(e,t){return new Q(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}Q.ElementType="i32";class W extends n{constructor(e,t=0,s,r){super(Int32Array,e,t,s,r),this.elementType="i32"}slice(e,t){return this.sliceBuffer(W,e,t)}static fromTypedArray(e,t){return new W(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}W.ElementType="i32";class X extends c{constructor(e,t=0,s,r){super(Int32Array,e,t,s,r),this.elementType="i32"}slice(e,t){return this.sliceBuffer(X,e,t)}static fromTypedArray(e,t){return new X(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}X.ElementType="i32";class Z extends h{constructor(e,t=0,s,r){super(Int32Array,e,t,s,r),this.elementType="i32"}slice(e,t){return this.sliceBuffer(Z,e,t)}static fromTypedArray(e,t){return new Z(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}Z.ElementType="i32";export{S as A,N as B,Q as C,W as D,M as E,P as F,X as G,Z as H,R as I,C as L,U as M,g as O,V as S,m as T,Y as U,I as V,a,b,ee as c,O as d,w as g,A as h,l as i,F as j,$ as k,o as l,E as m,T as o,B as p,v as q,p as u,J as v,x as w,L as x,z as y,K as z};
