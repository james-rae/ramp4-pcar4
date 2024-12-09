import { aI as C } from './main-jdFDoOPu.js';
import { t as t$1 } from './VertexElementDescriptor-HfVzOf0q.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function t(e,t=0){const n=e.stride;return Array.from(e.fields.keys()).map((s=>{const i=e.fields.get(s),u=i.constructor.ElementCount,f=o(i.constructor.ElementType),c=i.offset,m=i.optional?.glNormalized??!1;return new t$1(s,u,f,c,n,m,t)}))}function o(e){const r=n[e];if(r)return r;throw new Error("BufferType not supported in WebGL")}const n={u8:C.UNSIGNED_BYTE,u16:C.UNSIGNED_SHORT,u32:C.UNSIGNED_INT,i8:C.BYTE,i16:C.SHORT,i32:C.INT,f32:C.FLOAT};

export { t };
