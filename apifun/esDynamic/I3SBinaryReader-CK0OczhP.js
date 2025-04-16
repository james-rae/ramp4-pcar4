import{s as f,n as D,o as S}from"./main-DeRV24Di.js";import{e as U}from"./VertexAttribute-DFC3a3eR.js";const d=!0,h={identifierOffset:0,identifierLength:10,versionOffset:10,checksumOffset:12,byteCount:16};function O(t,e,o){return{identifier:String.fromCharCode.apply(null,new Uint8Array(t,o+h.identifierOffset,h.identifierLength)),version:e.getUint16(o+h.versionOffset,d),checksum:e.getUint32(o+h.checksumOffset,d)}}const g={sizeLo:0,sizeHi:4,minX:8,minY:16,minZ:24,maxX:32,maxY:40,maxZ:48,errorX:56,errorY:64,errorZ:72,count:80,reserved:84,byteCount:88};function k(t,e){return{sizeLo:t.getUint32(e+g.sizeLo,d),sizeHi:t.getUint32(e+g.sizeHi,d),minX:t.getFloat64(e+g.minX,d),minY:t.getFloat64(e+g.minY,d),minZ:t.getFloat64(e+g.minZ,d),maxX:t.getFloat64(e+g.maxX,d),maxY:t.getFloat64(e+g.maxY,d),maxZ:t.getFloat64(e+g.maxZ,d),errorX:t.getFloat64(e+g.errorX,d),errorY:t.getFloat64(e+g.errorY,d),errorZ:t.getFloat64(e+g.errorZ,d),count:t.getUint32(e+g.count,d),reserved:t.getUint32(e+g.reserved,d)}}function Y(t){const e=new DataView(t,0);let o=0;const{identifier:c,version:r}=O(t,e,o);if(o+=h.byteCount,c!=="LEPCC     ")throw new f("lepcc-decode-error","Bad identifier");if(r>1)throw new f("lepcc-decode-error","Unknown version");const n=k(e,o);if(o+=g.byteCount,n.sizeHi*2**32+n.sizeLo!==t.byteLength)throw new f("lepcc-decode-error","Bad size");const s=new Float64Array(3*n.count),u=[],i=[],a=[],l=[];if(o=I(t,o,u),o=I(t,o,i),o=I(t,o,a),o=I(t,o,l),o!==t.byteLength)throw new f("lepcc-decode-error","Bad length");let y=0,w=0;for(let b=0;b<u.length;b++){w+=u[b];let v=0;for(let C=0;C<i[b];C++){v+=a[y];const P=l[y];s[3*y]=Math.min(n.maxX,n.minX+2*n.errorX*v),s[3*y+1]=Math.min(n.maxY,n.minY+2*n.errorY*w),s[3*y+2]=Math.min(n.maxZ,n.minZ+2*n.errorZ*P),y++}}return{errorX:n.errorX,errorY:n.errorY,errorZ:n.errorZ,result:s}}function I(t,e,o){const c=[];e=z(t,e,c);const r=[];for(let n=0;n<c.length;n++){r.length=0,e=z(t,e,r);for(let s=0;s<r.length;s++)o.push(r[s]+c[n])}return e}function z(t,e,o){const c=new DataView(t,e),r=c.getUint8(0),n=31&r,s=!!(32&r),u=(192&r)>>6;let i=0;if(u===0)i=c.getUint32(1,d),e+=5;else if(u===1)i=c.getUint16(1,d),e+=3;else{if(u!==2)throw new f("lepcc-decode-error","Bad count type");i=c.getUint8(1),e+=2}if(s)throw new f("lepcc-decode-error","LUT not implemented");const a=Math.ceil(i*n/8),l=new Uint8Array(t,e,a);let y=0,w=0,b=0;const v=-1>>>32-n;for(let C=0;C<i;C++){for(;w<n;)y|=l[b]<<w,w+=8,b+=1;o[C]=y&v,y>>>=n,w-=n,w+n>32&&(y|=l[b-1]>>8-w)}return e+b}const p={sizeLo:0,sizeHi:4,count:8,colorMapCount:12,lookupMethod:14,compressionMethod:15,byteCount:16};function V(t,e){return{sizeLo:t.getUint32(e+p.sizeLo,d),sizeHi:t.getUint32(e+p.sizeHi,d),count:t.getUint32(e+p.count,d),colorMapCount:t.getUint16(e+p.colorMapCount,d),lookupMethod:t.getUint8(e+p.lookupMethod),compressionMethod:t.getUint8(e+p.compressionMethod)}}function X(t){const e=new DataView(t,0);let o=0;const{identifier:c,version:r}=O(t,e,o);if(o+=h.byteCount,c!=="ClusterRGB")throw new f("lepcc-decode-error","Bad identifier");if(r>1)throw new f("lepcc-decode-error","Unknown version");const n=V(e,o);if(o+=p.byteCount,n.sizeHi*2**32+n.sizeLo!==t.byteLength)throw new f("lepcc-decode-error","Bad size");if((n.lookupMethod===2||n.lookupMethod===1)&&n.compressionMethod===0){if(3*n.colorMapCount+n.count+o!==t.byteLength||n.colorMapCount>256)throw new f("lepcc-decode-error","Bad count");const s=new Uint8Array(t,o,3*n.colorMapCount),u=new Uint8Array(t,o+3*n.colorMapCount,n.count),i=new Uint8Array(3*n.count);for(let a=0;a<n.count;a++){const l=u[a];i[3*a]=s[3*l],i[3*a+1]=s[3*l+1],i[3*a+2]=s[3*l+2]}return i}if(n.lookupMethod===0&&n.compressionMethod===0){if(3*n.count+o!==t.byteLength||n.colorMapCount!==0)throw new f("lepcc-decode-error","Bad count");return new Uint8Array(t,o).slice()}if(n.lookupMethod<=2&&n.compressionMethod===1){if(o+3!==t.byteLength||n.colorMapCount!==1)throw new f("lepcc-decode-error","Bad count");const s=e.getUint8(o),u=e.getUint8(o+1),i=e.getUint8(o+2),a=new Uint8Array(3*n.count);for(let l=0;l<n.count;l++)a[3*l]=s,a[3*l+1]=u,a[3*l+2]=i;return a}throw new f("lepcc-decode-error","Bad method "+n.lookupMethod+","+n.compressionMethod)}const m={sizeLo:0,sizeHi:4,count:8,scaleFactor:12,bitsPerPoint:14,reserved:15,byteCount:16};function Z(t,e){return{sizeLo:t.getUint32(e+m.sizeLo,d),sizeHi:t.getUint32(e+m.sizeHi,d),count:t.getUint32(e+m.count,d),scaleFactor:t.getUint16(e+m.scaleFactor,d),bitsPerPoint:t.getUint8(e+m.bitsPerPoint),reserved:t.getUint8(e+m.reserved)}}function H(t){const e=new DataView(t,0);let o=0;const{identifier:c,version:r}=O(t,e,o);if(o+=h.byteCount,c!=="Intensity ")throw new f("lepcc-decode-error","Bad identifier");if(r>1)throw new f("lepcc-decode-error","Unknown version");const n=Z(e,o);if(o+=m.byteCount,n.sizeHi*2**32+n.sizeLo!==t.byteLength)throw new f("lepcc-decode-error","Bad size");const s=new Uint16Array(n.count);if(n.bitsPerPoint===8){if(n.count+o!==t.byteLength)throw new f("lepcc-decode-error","Bad size");const u=new Uint8Array(t,o,n.count);for(let i=0;i<n.count;i++)s[i]=u[i]*n.scaleFactor}else if(n.bitsPerPoint===16){if(2*n.count+o!==t.byteLength)throw new f("lepcc-decode-error","Bad size");const u=new Uint16Array(t,o,n.count);for(let i=0;i<n.count;i++)s[i]=u[i]*n.scaleFactor}else{const u=[];if(z(t,o,u)!==t.byteLength)throw new f("lepcc-decode-error","Bad size");for(let i=0;i<n.count;i++)s[i]=u[i]*n.scaleFactor}return s}const L=()=>D.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");function N(t,e,o){let c="",r=0;for(;r<o;){const n=t[e+r];if(n<128)c+=String.fromCharCode(n),r++;else if(n>=192&&n<224){if(r+1>=o)throw new f("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");const s=(31&n)<<6|63&t[e+r+1];c+=String.fromCharCode(s),r+=2}else if(n>=224&&n<240){if(r+2>=o)throw new f("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const s=(15&n)<<12|(63&t[e+r+1])<<6|63&t[e+r+2];c+=String.fromCharCode(s),r+=3}else{if(!(n>=240&&n<248))throw new f("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");{if(r+3>=o)throw new f("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const s=(7&n)<<18|(63&t[e+r+1])<<12|(63&t[e+r+2])<<6|63&t[e+r+3];if(s>=65536){const u=55296+(s-65536>>10),i=56320+(1023&s);c+=String.fromCharCode(u,i)}else c+=String.fromCharCode(s);r+=4}}}return c}function B(t,e){const o={byteOffset:0,byteCount:0,fields:Object.create(null)};let c=0;for(let r=0;r<e.length;r++){const n=e[r],s=n.valueType||n.type,u=W[s];o.fields[n.property]=u(t,c),c+=A[s].BYTES_PER_ELEMENT}return o.byteCount=c,o}function j(t,e,o){return T(t,e,o).map(c=>{const r=c?Date.parse(c):null;return r==null||Number.isNaN(r)?null:r})}function T(t,e,o){const c=[];let r,n,s=0;for(n=0;n<t;n+=1){if(r=e[n],r>0){if(c.push(N(o,s,r-1)),o[s+r-1]!==0)throw new f("string-array-error","Invalid string array: missing null termination.")}else c.push(null);s+=r}return c}function F(t,e){return new A[e.valueType](t,e.byteOffset,e.count*e.valuesPerElement)}function R(t,e){return new Uint8Array(t,e.byteOffset,e.byteCount)}function _(t,e,o){const c=e.header!=null?B(t,e.header):{byteOffset:0,byteCount:0,fields:{count:o}},r={header:c,byteOffset:c.byteCount,byteCount:0,entries:Object.create(null)};let n=c.byteCount;for(let s=0;s<e.ordering.length;s++){const u=e.ordering[s],i=S(e[u]);if(i.count=c.fields.count??0,i.valueType==="String"){if(i.byteOffset=n,i.byteCount=c.fields[u+"ByteCount"],i.encoding!=="UTF-8")throw new f("unsupported-encoding","Unsupported String encoding.",{encoding:i.encoding});if(i.timeEncoding&&i.timeEncoding!=="ECMA_ISO8601")throw new f("unsupported-time-encoding","Unsupported time encoding.",{timeEncoding:i.timeEncoding})}else{if(!x(i.valueType))throw new f("unsupported-value-type","Unsupported binary valueType",{valueType:i.valueType});{const a=M(i.valueType);n+=n%a!=0?a-n%a:0,i.byteOffset=n,i.byteCount=a*i.valuesPerElement*i.count}}n+=i.byteCount??0,r.entries[u]=i}return r.byteCount=n-r.byteOffset,r}function E(t,e,o){if(e!==t&&L().error(`Invalid ${o} buffer size
 expected: ${t}, actual: ${e})`),e<t)throw new f("buffer-too-small","Binary buffer is too small",{expectedSize:t,actualSize:e})}function $(t,e){const o=B(t,e&&e.header);let c=o.byteCount;const r={isDraco:!1,header:o,byteOffset:o.byteCount,byteCount:0,vertexAttributes:{}},n=o.fields,s=n.vertexCount!=null?n.vertexCount:n.count;for(const a of e.ordering){if(!e.vertexAttributes[a])continue;const l={...e.vertexAttributes[a],byteOffset:c,count:s},y=q[a]||"_"+a;r.vertexAttributes[y]=l,c+=M(l.valueType)*l.valuesPerElement*s}const u=n.faceCount;if(e.faces&&u){r.faces={};for(const a of e.ordering){if(!e.faces[a])continue;const l={...e.faces[a],byteOffset:c,count:u};r.faces[a]=l,c+=M(l.valueType)*l.valuesPerElement*u}}const i=n.featureCount;if(e.featureAttributes&&e.featureAttributeOrder&&i){r.featureAttributes={};for(const a of e.featureAttributeOrder){if(!e.featureAttributes[a])continue;const l={...e.featureAttributes[a],byteOffset:c,count:i};r.featureAttributes[a]=l,c+=(l.valueType==="UInt64"?8:M(l.valueType))*l.valuesPerElement*i}}return E(c,t.byteLength,"geometry"),r.byteCount=c-r.byteOffset,r}const q={position:U.POSITION,normal:U.NORMAL,color:U.COLOR,uv0:U.UV0,region:U.UVREGION};function G(t,e,o){if(t.encoding==="lepcc-rgb")return X(e);if(t.encoding==="lepcc-intensity")return H(e);if(t.encoding!=null&&t.encoding!=="")throw new f("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");t["attributeByteCounts "]&&!t.attributeByteCounts&&(L().warn("Warning: Trailing space in 'attributeByteCounts '."),t.attributeByteCounts=t["attributeByteCounts "]),t.ordering[0]==="ObjectIds"&&t.hasOwnProperty("objectIds")&&(L().warn("Warning: Case error in objectIds"),t.ordering[0]="objectIds");const c=_(e,t,o);E(c.byteOffset+c.byteCount,e.byteLength,"attribute");const r=c.entries.attributeValues||c.entries.objectIds;if(r){if(r.valueType==="String"){const n=c.entries.attributeByteCounts,s=F(e,n),u=R(e,r);return r.timeEncoding?j(n.count,s,u):T(n.count,s,u)}return F(e,r)}throw new f("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}const A={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},W={Float32:(t,e)=>new DataView(t,0).getFloat32(e,!0),Float64:(t,e)=>new DataView(t,0).getFloat64(e,!0),UInt8:(t,e)=>new DataView(t,0).getUint8(e),Int8:(t,e)=>new DataView(t,0).getInt8(e),UInt16:(t,e)=>new DataView(t,0).getUint16(e,!0),Int16:(t,e)=>new DataView(t,0).getInt16(e,!0),UInt32:(t,e)=>new DataView(t,0).getUint32(e,!0),Int32:(t,e)=>new DataView(t,0).getInt32(e,!0)};function x(t){return A.hasOwnProperty(t)}function M(t){return x(t)?A[t].BYTES_PER_ELEMENT:0}export{G as I,Y as c,F as l,$ as w};
