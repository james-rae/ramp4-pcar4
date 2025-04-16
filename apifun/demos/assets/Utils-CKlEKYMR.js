import{C as o,U as u}from"./enums-Dk3osxpS.js";import{t as N,n as A}from"./vec2f32-BbH2jxlN.js";import{s as p,n as $}from"./main-CcTJZah4.js";import{s as P}from"./getDataTypeBytes-DflDeYgv.js";import{t as Y}from"./VertexElementDescriptor-BOD-G50G.js";let T=class E{constructor(t,e,r,s,i,a,c){this.instanceId=t,this.textureKey=e,this.indexStart=r,this.indexCount=s,this.vertexStart=i,this.vertexCount=a,this.overlaps=c}updateBaseOffsets(t){this.vertexStart+=t.vertexFrom,this.indexStart+=t.indexFrom}clone(){return new E(this.instanceId,this.textureKey,this.indexStart,this.indexCount,this.vertexStart,this.vertexCount,this.overlaps)}static write(t,e,r,s,i,a,c,h){t.push(e),t.push(r),t.push(s),t.push(i),t.push(a),t.push(c),t.push(h)}serialize(t){return t.push(this.instanceId),t.push(this.textureKey),t.push(this.indexStart),t.push(this.indexCount),t.push(this.vertexStart),t.push(this.vertexCount),t.push(this.overlaps),t}static deserialize(t){const e=t.readInt32(),r=t.readInt32(),s=t.readInt32(),i=t.readInt32(),a=t.readInt32(),c=t.readInt32(),h=t.readInt32();return new E(e,r,s,i,a,c,h)}};T.byteSizeHint=7*Uint32Array.BYTES_PER_ELEMENT;function y(n,t){if(t!==null){n.push(t.length);for(const e of t)e.serialize(n);return n}n.push(0)}function I(n,t,e){const r=n.readInt32(),s=new Array(r);for(let i=0;i<s.length;i++)s[i]=t.deserialize(n,e);return s}let L=class S{constructor(t,e){this.id=t,this.sortKey=e,this.records=[]}serialize(t){return t.push(this.id),t.writeF32(this.sortKey),y(t,this.records),t}static deserialize(t){const e=t.readInt32(),r=t.readF32(),s=new S(e,r);return s.records=I(t,T)??[],s}};L.byteSizeHint=2*Uint32Array.BYTES_PER_ELEMENT+T.byteSizeHint;let B=class d{constructor(t,e,r,s){this.transformedX=0,this.transformedY=0,this.center=N(t,e),this.centerT=A(),this.halfWidth=r/2,this.halfHeight=s/2,this.width=r,this.height=s}get x(){return this.center[0]}get y(){return this.center[1]}get blX(){return this.center[0]+this.halfWidth}get blY(){return this.center[1]+this.halfHeight}get trX(){return this.center[0]-this.halfWidth}get trY(){return this.center[1]-this.halfHeight}get xmin(){return this.x-this.halfWidth}get xmax(){return this.x+this.halfWidth}get ymin(){return this.y-this.halfHeight}get ymax(){return this.y+this.halfHeight}set x(t){this.center[0]=t}set y(t){this.center[1]=t}clone(){return new d(this.x,this.y,this.width,this.height)}serialize(t){return t.writeF32(this.center[0]),t.writeF32(this.center[1]),t.push(this.width),t.push(this.height),t}findCollisionDelta(t,e=4){const r=Math.abs(t.centerT[0]-this.centerT[0]),s=Math.abs(t.centerT[1]-this.centerT[1]),i=(t.halfWidth+this.halfWidth+e)/r,a=(t.halfHeight+this.halfHeight+e)/s,c=Math.min(i,a);return Math.log2(c)}extend(t){const e=Math.min(this.xmin,t.xmin),r=Math.min(this.ymin,t.ymin),s=Math.max(this.xmax,t.xmax)-e,i=Math.max(this.ymax,t.ymax)-r,a=e+s/2,c=r+i/2;this.width=s,this.height=i,this.halfWidth=s/2,this.halfHeight=i/2,this.x=a,this.y=c}static deserialize(t){const e=t.readF32(),r=t.readF32(),s=t.readInt32(),i=t.readInt32();return new d(e,r,s,i)}};const M=new Float32Array(1),R=new Uint32Array(M.buffer);function b(n){return M[0]=n,R[0]}function W(n,t){return 65535&n|t<<16}function g(n){const t=b(n),e=t>>>31;let r=t>>>23&255,s=8388607&t;return r-=127,r>15?e<<15|31744:r<-25?0:(r<-14&&(s+=8388608,s/=2**(-14-r),r=-15),r+=15,s/=8192,s=O(s,1023),e<<15|r<<10|s)}function O(n,t){const e=Math.floor(n),r=n-e;return e<t&&(r>.5||r===.5&&e%2==1)?e+1:e}function m(n){let t=n>>>15,e=n>>10&31,r=1023&n;return t=t?-1:1,e-=15,r/=1024,e>-15?r+=1:e=-14,t*2**e*r}function K(n,t,e,r){const s=e.packPrecisionFactor??1;switch(e.type){case o.BYTE:if(e.count===1)n.setInt8(r+e.offset,t*s);else for(let i=0;i<e.count;i++){const a=i*Int8Array.BYTES_PER_ELEMENT;n.setInt8(r+e.offset+a,t[i]*s)}break;case o.UNSIGNED_BYTE:if(e.count===1)n.setUint8(r+e.offset,t*s);else for(let i=0;i<e.count;i++){const a=i*Uint8Array.BYTES_PER_ELEMENT;n.setUint8(r+e.offset+a,t[i]*s)}break;case o.SHORT:if(e.count===1)n.setInt16(r+e.offset,t*s,!0);else for(let i=0;i<e.count;i++){const a=i*Int16Array.BYTES_PER_ELEMENT;n.setInt16(r+e.offset+a,t[i]*s,!0)}break;case o.UNSIGNED_SHORT:if(e.count===1)n.setUint16(r+e.offset,t*s,!0);else for(let i=0;i<e.count;i++){const a=i*Uint16Array.BYTES_PER_ELEMENT;n.setUint16(r+e.offset+a,t[i]*s,!0)}break;case o.INT:if(e.count===1)n.setInt32(r+e.offset,t*s,!0);else for(let i=0;i<e.count;i++){const a=i*Int32Array.BYTES_PER_ELEMENT;n.setInt32(r+e.offset+a,t[i]*s,!0)}break;case o.UNSIGNED_INT:if(e.count===1)n.setUint32(r+e.offset,t*s,!0);else for(let i=0;i<e.count;i++){const a=i*Uint32Array.BYTES_PER_ELEMENT;n.setUint32(r+e.offset+a,t[i]*s,!0)}break;case o.FLOAT:if(e.count===1)n.setFloat32(r+e.offset,t*s,!0);else for(let i=0;i<e.count;i++){const a=i*Float32Array.BYTES_PER_ELEMENT;n.setFloat32(r+e.offset+a,t[i]*s,!0)}break;case o.HALF_FLOAT:if(e.count===1)n.setUint16(r+e.offset,g(t*s),!0);else for(let i=0;i<e.count;i++){const a=i*Uint16Array.BYTES_PER_ELEMENT;n.setUint16(r+e.offset+a,g(t[i]*s),!0)}}}function V(n,t,e){switch(t.type){case o.BYTE:{if(t.count===1)return n.getInt8(e+t.offset);const r=[];for(let s=0;s<t.count;s++){const i=s*Int8Array.BYTES_PER_ELEMENT;r.push(n.getInt8(e+t.offset+i))}return r}case o.UNSIGNED_BYTE:{if(t.count===1)return n.getUint8(e+t.offset);const r=[];for(let s=0;s<t.count;s++){const i=s*Uint8Array.BYTES_PER_ELEMENT;r.push(n.getUint8(e+t.offset+i))}return r}case o.SHORT:{if(t.count===1)return n.getInt16(e+t.offset,!0);const r=[];for(let s=0;s<t.count;s++){const i=s*Int16Array.BYTES_PER_ELEMENT;r.push(n.getInt16(e+t.offset+i,!0))}return r}case o.UNSIGNED_SHORT:{if(t.count===1)return n.getUint16(e+t.offset,!0);const r=[];for(let s=0;s<t.count;s++){const i=s*Uint16Array.BYTES_PER_ELEMENT;r.push(n.getUint16(e+t.offset+i,!0))}return r}case o.INT:{if(t.count===1)return n.getInt32(e+t.offset,!0);const r=[];for(let s=0;s<t.count;s++){const i=s*Int32Array.BYTES_PER_ELEMENT;r.push(n.getInt32(e+t.offset+i,!0))}return r}case o.UNSIGNED_INT:{if(t.count===1)return n.getUint32(e+t.offset,!0);const r=[];for(let s=0;s<t.count;s++){const i=s*Uint32Array.BYTES_PER_ELEMENT;r.push(n.getUint32(e+t.offset+i,!0))}return r}case o.FLOAT:{if(t.count===1)return n.getFloat32(e+t.offset,!0);const r=[];for(let s=0;s<t.count;s++){const i=s*Float32Array.BYTES_PER_ELEMENT;r.push(n.getFloat32(e+t.offset+i,!0))}return r}case o.HALF_FLOAT:{if(t.count===1)return m(n.getUint16(e+t.offset,!0));const r=[];for(let s=0;s<t.count;s++){const i=s*Uint16Array.BYTES_PER_ELEMENT;r.push(m(n.getUint16(e+t.offset+i,!0)))}return r}}}class x{constructor(t,e,r,s,i,a,c,h,f=[]){this.entityTexel=t,this.anchorX=e,this.anchorY=r,this.directionX=s,this.directionY=i,this.maxScale=a,this.minScale=c,this.referenceBounds=h,this.bounds=f}serialize(t){t.push(this.entityTexel),t.writeF32(this.anchorX),t.writeF32(this.anchorY),t.writeF32(this.directionX),t.writeF32(this.directionY),t.writeF32(this.maxScale),t.writeF32(this.minScale),this.referenceBounds===null?(t.writeF32(0),t.writeF32(0),t.writeF32(0)):(t.writeF32(this.referenceBounds.size),t.writeF32(this.referenceBounds.offsetX),t.writeF32(this.referenceBounds.offsetY)),y(t,this.bounds)}static deserialize(t){const e=t.readInt32(),r=t.readF32(),s=t.readF32(),i=t.readF32(),a=t.readF32(),c=t.readF32(),h=t.readF32(),f=t.readF32(),F=t.readF32(),w=t.readF32(),U=I(t,B)??[];return new x(e,r,s,i,a,c,h,{size:f,offsetX:F,offsetY:w},U)}}const _=()=>$.getLogger("esri.views.2d.engine.webgl.Utils");function J(n){switch(n){case u.UNSIGNED_BYTE:return 1;case u.UNSIGNED_SHORT_4_4_4_4:return 2;case u.FLOAT:return 4;default:return void _().error(new p("webgl-utils",`Unable to handle type ${n}`))}}function j(n){switch(n){case u.UNSIGNED_BYTE:return Uint8Array;case u.UNSIGNED_SHORT_4_4_4_4:return Uint16Array;case u.FLOAT:return Float32Array;default:return void _().error(new p("webgl-utils",`Unable to handle type ${n}`))}}function z(n){const t=new Map;for(const e in n){const r=n[e];let s=0;t.set(e,r.map(i=>{const a=new Y(i.name,i.count,i.type,s,0,i.normalized||!1);return s+=i.count*P(i.type),a})),t.get(e).forEach(i=>i.stride=s)}return t}const C=n=>{const t=new Map;for(const e in n)for(const r of n[e])t.set(r.name,r.location);return t},k=n=>{const t={};return n.forEach((e,r)=>t[r]=e?.length?e[0].stride:0),t},l=new Map,q=(n,t)=>{if(!l.has(n)){const e=z(t),r={strides:k(e),bufferLayouts:e,attributes:C(t)};l.set(n,r)}return l.get(n)},Q=n=>n.includes("data:image/svg+xml");function Z(n){const t=[];for(let e=0;e<n.length;e++)t.push(n.charCodeAt(e));return t}function tt(n){if(n==null)return"";const{type:t}=n;switch(t){case"CIMMarkerPlacementAlongLineRandomSize":return`${t}-${n.seed}-${n.randomization}`;case"CIMMarkerPlacementAlongLineVariableSize":return`${t}-${n.maxRandomOffset}-${n.numberOfSizes}-${n.seed}-${n.variationMethod}`;case"CIMMarkerPlacementAtExtremities":return`${t}-${n.extremityPlacement}-${n.offsetAlongLine}`;case"CIMMarkerPlacementAtRatioPositions":return`${t}-${n.beginPosition}-${n.endPosition}-${n.flipFirst}-${JSON.stringify(n.positionArray)}`;case"CIMMarkerPlacementAtMeasuredUnits":return`${t}-${n.interval}-${n.skipMarkerRate}-${n.placeAtExtremities}`;case"CIMMarkerPlacementInsidePolygon":return`${t}-${n.stepX}-${n.stepY}-${n.randomness}-${n.gridType}-${n.seed}-${n.shiftOddRows}`;case"CIMMarkerPlacementOnLine":return`${t}-${n.relativeTo}-${n.startPointOffset}`;case"CIMMarkerPlacementOnVertices":return`${t}-${n.placeOnControlPoints}-${n.placeOnEndPoints}-${n.placeOnRegularVertices}`;case"CIMMarkerPlacementPolygonCenter":return`${t}-${n.method}`;default:return`${t}`}}export{q as $,B as a,K as b,W as c,V as d,Z as e,Q as f,j as i,I as n,J as o,tt as p,x as r,L as s,T as t};
