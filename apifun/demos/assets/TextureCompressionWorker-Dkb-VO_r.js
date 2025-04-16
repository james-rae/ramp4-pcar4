import{_ as g}from"./preload-helper-ExcqyqRp.js";import{cB as D}from"./main-CcTJZah4.js";import{_ as A}from"./TextureFormat-1mYWTFa-.js";import{c as d}from"./enums-Dk3osxpS.js";function S(){return C??=(async()=>{const e=await g(()=>import("./basis_encoder-C6t7doix.js"),[],import.meta.url),r=await e.default({locateFile:t=>D(`esri/libs/basisu/${t}`)});return r.initializeBasis(),r})(),C}let C;function R(){return y??=(async()=>await(await g(()=>import("./dxt_encoder-DZXVVX2S.js"),[],import.meta.url)).default({locateFile:r=>D(`esri/libs/dxtEncoder/${r}`)}))(),y}let y,X,b,c=null,p=null;class T{constructor(r,t){this.internalFormat=r,this.compressedTexture=t}}async function J(e){const r=M(e.data,e.flipped);if(e.hasS3TC){p||await x();const t=new Uint8Array(r.length);p?.encode(new Uint8Array(r),e.width,e.height,t);const n=H(t,!0),i=[t.buffer];return{result:new T(n?.internalFormat??null,n?.textureData??null),transferList:i}}if(e.hasETC){c||await B();const t=await F(r,e.width,e.height,e.hasMipmap),n=t?await G(t):null,i=n?.compressedTexture?.levels.map(o=>o.buffer)||[];return{result:new T(n?.internalFormat??null,n?.compressedTexture??null),transferList:i}}return{result:new T(null,null)}}async function B(){c||(c=await(X??=S()))}async function x(){p||(p=await(b??=R()))}async function F(e,r,t,n,i=255,o=0,s=!1,l=!1){if(!c)return null;const a=new c.BasisEncoder;a.setPerceptual(!l),a.setCheckForAlpha(!0),a.setForceAlpha(!1),a.setRenormalize(l),a.setMipGen(n),a.setMipSRGB(!l),a.setCreateKTX2File(!0),a.setKTX2SRGBTransferFunc(!l),a.setQualityLevel(i),a.setCompressionLevel(o);const m=new Uint8Array(e.byteLength);a.setSliceSourceImage(0,new Uint8Array(e),r,t,s);const h=a.encode(m),u=new Uint8Array(m.buffer,0,h),f=new c.KTX2File(new Uint8Array(u));return f.isValid()?(a.delete(),u):(f.close(),f.delete(),a.delete(),null)}async function G(e){if(!c)return new T(null,null);const r=new c.KTX2File(new Uint8Array(e));r.startTranscoding();const[t,n]=r.getHasAlpha()?[A.ETC2_RGBA,d.COMPRESSED_RGBA8_ETC2_EAC]:[A.ETC1_RGB,d.COMPRESSED_RGB8_ETC2],i=r.getLevels(),o=[];for(let s=0;s<i;s++)o.push(new Uint8Array(r.getImageTranscodedSizeInBytes(s,0,0,t))),r.transcodeImage(o[s],s,0,0,t,0,-1,-1);return r.close(),r.delete(),{internalFormat:n,compressedTexture:{type:"compressed",levels:o}}}function M(e,r=!1){const t=new OffscreenCanvas(e.width,e.height),n=t.getContext("2d");return r&&n.scale(1,-1),n.drawImage(e,0,r?-e.height:0),n.getImageData(0,0,t.width,t.height).data}const O=31,v=1,I=2,P=3,U=4,L=7,K=21,k=131072;function w(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}const z=w("DXT1"),$=w("DXT3"),V=w("DXT5");function H(e,r){const t=new Int32Array(e.buffer,e.byteOffset,O);let n,i;switch(t[K]){case z:n=8,i=d.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case $:n=16,i=d.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case V:n=16,i=d.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return null}let o=1,s=t[U],l=t[P];(3&s||3&l)&&(s=s+3&-4,l=l+3&-4);const a=s,m=l;let h,u;t[I]&k&&r!==!1&&(o=Math.max(1,t[L]));let f=e.byteOffset+t[v]+4;const _=[];for(let E=0;E<o;++E)u=(s+3>>2)*(l+3>>2)*n,h=new Uint8Array(e.buffer,f,u),_.push(h),f+=u,s=Math.max(1,s>>1),l=Math.max(1,l>>1);return{textureData:{type:"compressed",levels:_},internalFormat:i,width:a,height:m}}export{T as TextureCompressionWorkerOutput,J as compress,F as compressRGBADataToKTX2,G as createTextureDataKTX2,B as initializeBasisEncoder,x as initializeDXTEncoder};
