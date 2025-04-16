import{eO as S,bT as O,D as v}from"./main-Di-bOCuA.js";import{O as x}from"./quat-C3yYDtlq.js";import{e as C}from"./quatf64-aQ5IuZRd.js";import{Q as F}from"./vec32-BS8FjKab.js";import{t as A,n as w}from"./vec3f32-nZdmKIgz.js";import{n as k}from"./projectBuffer-zW0fznMI.js";import{a as R,b as U,d as B}from"./PointCloudUniqueValueRenderer-C7VZ2Dx-.js";import{w as J,l as N,c as T,I as V}from"./I3SBinaryReader-BV2cCddG.js";import{I as q}from"./orientedBoundingBox-D7b8AxF7.js";import"./preload-helper-ExcqyqRp.js";import"./mat3f64-q3fE-ZOt.js";import"./common-DQOJ18NT.js";import"./vec42-CKs01hkn.js";import"./RendererLegendOptions-CfiV1bGm.js";import"./VertexAttribute-BdZWZuT1.js";import"./mat3-XZDRtl20.js";import"./mat4f64-CSKppSlJ.js";import"./vec4f64-CMoMXWBi.js";import"./spatialReferenceEllipsoidUtils-hElfClsc.js";import"./computeTranslationToOriginAndRotation-CPal3dOt.js";import"./mat4-BOemVfAI.js";import"./plane-BgQ3LYGu.js";import"./vec2f64-B7N_6o8F.js";import"./ViewingMode-HRfKv6NR.js";function z(s,t,a,n){const{rendererJSON:c,isRGBRenderer:m}=s;let o=null,i=null;if(t&&m)o=t;else if(t&&c?.type==="pointCloudUniqueValueRenderer"){i=R.fromJSON(c);const e=i.colorUniqueValueInfos;o=new Uint8Array(3*n);const u=g(i.fieldTransformType);for(let r=0;r<n;r++){const l=(u?u(t[r]):t[r])+"";for(let f=0;f<e.length;f++)if(e[f].values.includes(l)){o[3*r]=e[f].color.r,o[3*r+1]=e[f].color.g,o[3*r+2]=e[f].color.b;break}}}else if(t&&c?.type==="pointCloudStretchRenderer"){i=U.fromJSON(c);const e=i.stops;o=new Uint8Array(3*n);const u=g(i.fieldTransformType);for(let r=0;r<n;r++){const l=u?u(t[r]):t[r],f=e.length-1;if(l<e[0].value)o[3*r]=e[0].color.r,o[3*r+1]=e[0].color.g,o[3*r+2]=e[0].color.b;else if(l>=e[f].value)o[3*r]=e[f].color.r,o[3*r+1]=e[f].color.g,o[3*r+2]=e[f].color.b;else for(let b=1;b<e.length;b++)if(l<e[b].value){const p=(l-e[b-1].value)/(e[b].value-e[b-1].value);o[3*r]=e[b].color.r*p+e[b-1].color.r*(1-p),o[3*r+1]=e[b].color.g*p+e[b-1].color.g*(1-p),o[3*r+2]=e[b].color.b*p+e[b-1].color.b*(1-p);break}}}else if(t&&c?.type==="pointCloudClassBreaksRenderer"){i=B.fromJSON(c);const e=i.colorClassBreakInfos;o=new Uint8Array(3*n);const u=g(i.fieldTransformType);for(let r=0;r<n;r++){const l=u?u(t[r]):t[r];for(let f=0;f<e.length;f++)if(l>=e[f].minValue&&l<=e[f].maxValue){o[3*r]=e[f].color.r,o[3*r+1]=e[f].color.g,o[3*r+2]=e[f].color.b;break}}}else o=new Uint8Array(3*n).fill(255);if(a&&i?.colorModulation){const e=i.colorModulation.minValue,u=i.colorModulation.maxValue,r=.3;for(let l=0;l<n;l++){const f=a[l],b=f>=u?1:f<=e?r:r+(1-r)*(f-e)/(u-e);o[3*l]=b*o[3*l],o[3*l+1]=b*o[3*l+1],o[3*l+2]=b*o[3*l+2]}}return o}function E(s,t){if(s.encoding==null||s.encoding===""){const a=J(t,s);if(a.vertexAttributes.position==null)return;const n=N(t,a.vertexAttributes.position),c=a.header.fields,m=[c.offsetX,c.offsetY,c.offsetZ],o=[c.scaleX,c.scaleY,c.scaleZ],i=n.length/3,e=new Float64Array(3*i);for(let u=0;u<i;u++)e[3*u]=n[3*u]*o[0]+m[0],e[3*u+1]=n[3*u+1]*o[1]+m[1],e[3*u+2]=n[3*u+2]*o[2]+m[2];return e}if(s.encoding==="lepcc-xyz")return T(t).result}function h(s,t,a){return s?.attributeInfo.useElevation?t?X(t,a):null:s?.attributeInfo.storageInfo?V(s.attributeInfo.storageInfo,s.buffer,a):null}function X(s,t){const a=new Float64Array(t);for(let n=0;n<t;n++)a[n]=s[3*n+2];return a}function Y(s,t,a,n,c){const m=s.length/3;let o=0;for(let i=0;i<m;i++){let e=!0;for(let u=0;u<n.length&&e;u++){const{filterJSON:r}=n[u],l=c[u].values[i];switch(r.type){case"pointCloudValueFilter":{const f=r.mode==="exclude";r.values.includes(l)===f&&(e=!1);break}case"pointCloudBitfieldFilter":{const f=M(r.requiredSetBits),b=M(r.requiredClearBits);((l&f)!==f||l&b)&&(e=!1);break}case"pointCloudReturnFilter":{const f=15&l,b=l>>>4&15,p=b>1,D=f===1,I=f===b;let y=!1;for(const d of r.includedReturns)if(d==="last"&&I||d==="firstOfMany"&&D&&p||d==="lastOfMany"&&I&&p||d==="single"&&!p){y=!0;break}y||(e=!1);break}}}e&&(a[o]=i,s[3*o]=s[3*i],s[3*o+1]=s[3*i+1],s[3*o+2]=s[3*i+2],t[3*o]=t[3*i],t[3*o+1]=t[3*i+1],t[3*o+2]=t[3*i+2],o++)}return o}function g(s){switch(s){default:case null:case"none":return t=>t;case"low-four-bit":return t=>15&t;case"high-four-bit":return t=>(240&t)>>4;case"absolute-value":return t=>Math.abs(t);case"modulo-ten":return t=>t%10}}function M(s){let t=0;for(const a of s||[])t|=1<<a;return t}class Z{transform(t){const a=this._transform(t),n=[a.points.buffer,a.rgb.buffer];a.pointIdFilterMap!=null&&n.push(a.pointIdFilterMap.buffer);for(const c of a.attributes)"buffer"in c.values&&S(c.values.buffer)&&c.values.buffer!==a.rgb.buffer&&n.push(c.values.buffer);return Promise.resolve({result:a,transferList:n})}_transform(t){const a=E(t.schema,t.geometryBuffer);let n=a.length/3,c=null;const m=new Array,o=h(t.primaryAttributeData,a,n);t.primaryAttributeData!=null&&o&&m.push({attributeInfo:t.primaryAttributeData.attributeInfo,values:o});const i=h(t.modulationAttributeData,a,n);t.modulationAttributeData!=null&&i&&m.push({attributeInfo:t.modulationAttributeData.attributeInfo,values:i});let e=z(t.rendererInfo,o,i,n);if(t.filterInfo&&t.filterInfo.length>0&&t.filterAttributesData!=null){const r=t.filterAttributesData.filter(O).map(l=>{const f=h(l,a,n),b={attributeInfo:l.attributeInfo,values:f};return m.push(b),b});c=new Uint32Array(n),n=Y(a,e,c,t.filterInfo,r)}for(const r of t.userAttributesData){const l=h(r,a,n);m.push({attributeInfo:r.attributeInfo,values:l})}3*n<e.length&&(e=new Uint8Array(e.buffer.slice(0,3*n))),j(a,n,t.elevationOffset);const u=_(a,n,q.fromData(t.obbData),v.fromJSON(t.inSR),v.fromJSON(t.outSR));return{obbData:t.obbData,points:u,rgb:e,attributes:m,pointIdFilterMap:c}}}function _(s,t,a,n,c){if(!k(s,n,0,s,c,0,t))throw new Error("Can't reproject");const m=A(a.center),o=w(),i=w(),e=A(a.halfSize);x($,a.quaternion);const u=new Float32Array(3*t);for(let r=0;r<t;r++){let l=3*r;o[0]=s[l]-m[0],o[1]=s[l+1]-m[1],o[2]=s[l+2]-m[2],F(i,o,$),e[0]=Math.max(e[0],Math.abs(i[0])),e[1]=Math.max(e[1],Math.abs(i[1])),e[2]=Math.max(e[2],Math.abs(i[2])),u[l++]=o[0],u[l++]=o[1],u[l]=o[2]}return a.halfSize=e,u}function j(s,t,a){if(a!==0)for(let n=0;n<t;n++)s[3*n+2]+=a}const $=C();function gt(){return new Z}export{gt as default};
