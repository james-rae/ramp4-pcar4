import { ku as i$3, kv as f$2, kw as m$2, H as s$3, h4 as r$2, az as o$3 } from './main-DFC4KtAD.js';
import { u as u$1, a as u$2, b as e$1, m as m$3, c as a$2, d as c$1 } from './Texture-BFvzbVfI.js';
import { A as A$2, F as F$1, V, C, X as X$1, G as G$1, U, t as t$1, n as n$1, M, B, H as H$1 } from './enums-CgzwTbC2.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const o$2=()=>s$3.getLogger("esri.views.webgl.BufferObject");let h$3 = class h{static createIndex(e,t,s){return new h(e,A$2.ELEMENT_ARRAY_BUFFER,t,s)}static createVertex(e,t,s){return new h(e,A$2.ARRAY_BUFFER,t,s)}static createUniform(e,t,s){return new h(e,A$2.UNIFORM_BUFFER,t,s)}static createPixelPack(e,t=F$1.STREAM_READ,s){const i=new h(e,A$2.PIXEL_PACK_BUFFER,t);return s&&i.setSize(s),i}static createPixelUnpack(e,t=F$1.STREAM_DRAW,s){return new h(e,A$2.PIXEL_UNPACK_BUFFER,t,s)}static createTransformFeedback(e,t=F$1.STATIC_DRAW,s){const i=new h(e,A$2.TRANSFORM_FEEDBACK_BUFFER,t);return i.setSize(s),i}constructor(e,t,s,i){this._context=e,this.bufferType=t,this.usage=s,this._glName=null,this._size=-1,this._indexType=void 0,e.instanceCounter.increment(V.BufferObject,this),this._glName=this._context.gl.createBuffer(),u$1(this._context.gl),i&&this.setData(i);}get glName(){return this._glName}get size(){return this._size}get indexType(){return this._indexType}get usedMemory(){return this.bufferType===A$2.ELEMENT_ARRAY_BUFFER?this._indexType===C.UNSIGNED_INT?4*this._size:2*this._size:this._size}get _isVAOAware(){return this.bufferType===A$2.ELEMENT_ARRAY_BUFFER||this.bufferType===A$2.ARRAY_BUFFER}dispose(){if(this._context?.gl){if(this._glName){this._context.gl.deleteBuffer(this._glName),this._glName=null;}this._context.instanceCounter.decrement(V.BufferObject,this),this._context=null;}else this._glName&&o$2().warn("Leaked WebGL buffer object");}setSize(e,t=null){if(e<=0&&o$2().error("Buffer size needs to be positive!"),this.bufferType===A$2.ELEMENT_ARRAY_BUFFER&&null!=t)switch(this._indexType=t,t){case C.UNSIGNED_SHORT:e*=2;break;case C.UNSIGNED_INT:e*=4;}this._setBufferData(e);}setData(e){if(!e)return;let t=e.byteLength;this.bufferType===A$2.ELEMENT_ARRAY_BUFFER&&(i$3(e)&&(t/=2,this._indexType=C.UNSIGNED_SHORT),f$2(e)&&(t/=4,this._indexType=C.UNSIGNED_INT)),this._setBufferData(t,e);}_setBufferData(e,t=null){this._size=e;const s=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const i=this._context.gl;null!=t?i.bufferData(this.bufferType,t,this.usage):i.bufferData(this.bufferType,e,this.usage),u$1(i),this._isVAOAware&&this._context.bindVAO(s);}setSubData(e,t,s,i){if(!e)return;(t<0||t*e.BYTES_PER_ELEMENT>=this.usedMemory)&&o$2().error("offset is out of range!"),s>=i&&o$2().error("end must be bigger than start!"),(t+(i-s))*e.BYTES_PER_ELEMENT>this.usedMemory&&o$2().error("An attempt to write beyond the end of the buffer!");const n=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const{gl:_}=this._context;_.bufferSubData(this.bufferType,t*e.BYTES_PER_ELEMENT,e,s,i-s),u$1(_),this._isVAOAware&&this._context.bindVAO(n);}getSubData(e,t=0,s,i){if(s<0||i<0)return void o$2().error("Problem getting subdata: offset and length were less than zero!");const r=E$2(e)?e.BYTES_PER_ELEMENT:1;if(r*((s??0)+(i??0))>e.byteLength)return void o$2().error("Problem getting subdata: offset and length exceeded destination size!");t+r*(i??0)>this.usedMemory&&o$2().warn("Potential problem getting subdata: requested data exceeds buffer size!");const _=this._context.gl;this.bufferType===A$2.TRANSFORM_FEEDBACK_BUFFER?(this._context.bindBuffer(this,A$2.TRANSFORM_FEEDBACK_BUFFER),_.getBufferSubData(A$2.TRANSFORM_FEEDBACK_BUFFER,t,e,s,i),this._context.unbindBuffer(A$2.TRANSFORM_FEEDBACK_BUFFER)):(this._context.bindBuffer(this,A$2.COPY_READ_BUFFER),_.getBufferSubData(A$2.COPY_READ_BUFFER,t,e,s,i),this._context.unbindBuffer(A$2.COPY_READ_BUFFER));}async getSubDataAsync(e,t=0,s,i){await this._context.clientWaitAsync(),this.getSubData(e,t,s,i);}};function E$2(t){return m$2(t)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let i$2 = class i{constructor(t,i,h=i){this.internalFormat=t,this.width=i,this.height=h,this.multisampled=!1,this.samples=1;}};function h$2(i){return i.width<=0||i.height<=0||null==i.internalFormat?0:i.width*i.height*u$2(i.internalFormat)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let s$2 = class s{constructor(r,s){this._context=r,this._descriptor=s,this.type=e$1.RenderBuffer,this._context.instanceCounter.increment(V.Renderbuffer,this);const i=this._context.gl;this.glName=i.createRenderbuffer(),this._context.bindRenderbuffer(this);const{width:n,height:o,internalFormat:h,multisampled:c}=s;c?i.renderbufferStorageMultisample(i.RENDERBUFFER,this.samples,h,n,o):i.renderbufferStorage(i.RENDERBUFFER,h,n,o);}get descriptor(){return this._descriptor}get samples(){const e=this._descriptor.samples,t=this._context.parameters.maxSamples;return e?Math.min(e,t):t}get usedMemory(){return h$2(this._descriptor)}resize(e,t){const r=this._descriptor;if(r.width===e&&r.height===t)return;r.width=e,r.height=t;const s=this._context.gl;this._context.bindRenderbuffer(this),r.multisampled?s.renderbufferStorageMultisample(s.RENDERBUFFER,this.samples,r.internalFormat,r.width,r.height):s.renderbufferStorage(s.RENDERBUFFER,r.internalFormat,r.width,r.height);}dispose(){this._context&&(this._context.gl.deleteRenderbuffer(this.glName),this._context.instanceCounter.decrement(V.Renderbuffer,this),this._context=null);}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const p$1=()=>s$3.getLogger("esri.views.webgl.FramebufferObject");let x$1 = class x{constructor(t,e,i=null){this._context=t,this._glName=null,this._colorAttachments=new Map,this._depthStencilBuffer=null,this._depthStencilTexture=null,this._initialized=!1,t.instanceCounter.increment(V.FramebufferObject,this);const r=E$1(e)?e:new m$3(this._context,e);if(this._colorAttachments.set(X$1.COLOR_ATTACHMENT0,r),this._validateTextureDescriptor(r.descriptor),this._validateColorAttachmentPoint(X$1.COLOR_ATTACHMENT0),null!=i)if(A$1(i))this._context.capabilities.depthTexture||console.error("Setting the depth/stencil texture as an attachment requires WEBGL_depth_texture or WebGL2"),this._depthStencilTexture=E$1(i)?i:new m$3(this._context,i),this._validateTextureDescriptor(this._depthStencilTexture.descriptor);else {const t=g$2(i)?i:new s$2(this._context,i);this._depthStencilBuffer=t,this._validateRenderBufferDescriptor(t.descriptor);}}dispose(){if(0===this._colorAttachments.size&&!this._glName)return;const t=this._context.getBoundFramebufferObject();if(this._colorAttachments.forEach(((t,e)=>this.detachColorTexture(e)?.dispose())),this.detachDepthStencilBuffer()?.dispose(),this.detachDepthStencilTexture()?.dispose(),this._glName){this._context.gl.deleteFramebuffer(this._glName),this._glName=null;}this._context.bindFramebuffer(t),this._context.instanceCounter.decrement(V.FramebufferObject,this);}get glName(){return this._glName}get colorTexture(){return this._colorAttachments.get(X$1.COLOR_ATTACHMENT0)}get depthStencil(){return this._depthStencilTexture||this._depthStencilBuffer}get depthStencilTexture(){return this._depthStencilTexture}get width(){const t=this._colorAttachments.get(X$1.COLOR_ATTACHMENT0);return t?.descriptor?.width??0}get height(){const t=this._colorAttachments.get(X$1.COLOR_ATTACHMENT0);return t?.descriptor?.height??0}get usedMemory(){return [...this._colorAttachments].reduce(((t,[e,i])=>t+i.usedMemory),this.depthStencil?.usedMemory??0)}getColorTexture(t){const e=this._colorAttachments.get(t);return e&&E$1(e)?e:null}get colorAttachments(){return [...this._colorAttachments.keys()]}attachColorTexture(t,e=X$1.COLOR_ATTACHMENT0){if(!t)return;this._validateColorAttachmentPoint(e);const i=t.descriptor;this._validateTextureDescriptor(i),this.detachColorTexture(e)?.dispose(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(t.glName,e)),this._colorAttachments.set(e,t);}detachColorTexture(t=X$1.COLOR_ATTACHMENT0){const e=this._colorAttachments.get(t);if(e){if(this._initialized){const e=this._context.getBoundFramebufferObject();this._context.bindFramebuffer(this),this._framebufferTexture2D(null,t),this._context.bindFramebuffer(e);}return this._colorAttachments.delete(t),e}}setColorTextureTarget(t,e=X$1.COLOR_ATTACHMENT0){const i=this._colorAttachments.get(e);i&&this._framebufferTexture2D(i.glName,e,t);}attachDepthStencil(t){if(t)switch(t.type){case e$1.Texture:return this._attachDepthStencilTexture(t);case e$1.RenderBuffer:return this._attachDepthStencilBuffer(t)}}_attachDepthStencilTexture(t){if(null==t)return;const e=t.descriptor;e.pixelFormat!==G$1.DEPTH_STENCIL&&e.pixelFormat!==G$1.DEPTH24_STENCIL8&&console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!"),e.dataType!==U.UNSIGNED_INT_24_8&&console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8!"),this._context.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture!"),this._validateTextureDescriptor(e),this._disposeDepthStencilAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(t.glName,t$1)),this._depthStencilTexture?.dispose(),this._depthStencilTexture=t;}detachDepthStencilTexture(){const t=this._depthStencilTexture;return t&&this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,t$1)),this._depthStencilTexture=null,t}_attachDepthStencilBuffer(t){if(null==t)return;const e=t.descriptor;if(this._validateRenderBufferDescriptor(e),this._disposeDepthStencilAttachments(),this._initialized){this._context.bindFramebuffer(this);const i=this._context.gl,r=this._getGLAttachmentPoint(e);i.framebufferRenderbuffer(n$1.FRAMEBUFFER,r,i.RENDERBUFFER,t.glName);}this._depthStencilBuffer=t;}detachDepthStencilBuffer(){const t=this._depthStencilBuffer;if(t&&this._initialized){this._context.bindFramebuffer(this);const e=this._context.gl,i=this._getGLAttachmentPoint(t.descriptor);e.framebufferRenderbuffer(n$1.FRAMEBUFFER,i,e.RENDERBUFFER,null);}return this._depthStencilBuffer=null,t}copyToTexture(t,e,i,r,s,h,n){(t<0||e<0||s<0||h<0)&&console.error("Offsets cannot be negative!"),(i<=0||r<=0)&&console.error("Copy width and height must be greater than zero!");const o=n.descriptor;n.descriptor.target!==M.TEXTURE_2D&&console.error("Texture target must be TEXTURE_2D!"),(null==o?.width||null==o?.height||t+i>this.width||e+r>this.height||s+i>o.width||h+r>o.height)&&console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");const c=this._context,a=c.bindTexture(n,m$3.TEXTURE_UNIT_FOR_UPDATES);c.setActiveTexture(m$3.TEXTURE_UNIT_FOR_UPDATES),c.bindFramebuffer(this),c.gl.copyTexSubImage2D(M.TEXTURE_2D,0,s,h,t,e,i,r),c.bindTexture(a,m$3.TEXTURE_UNIT_FOR_UPDATES);}readPixels(t,e,i,r,s,h,n){(i<=0||r<=0)&&console.error("Copy width and height must be greater than zero!"),n||console.error("Target memory is not initialized!"),this._context.bindFramebuffer(this),this._context.gl.readPixels(t,e,i,r,s,h,n);}async readPixelsAsync(t,e,r,s,h,n,o){const{gl:c}=this._context,a=h$3.createPixelPack(this._context,F$1.STREAM_READ,o.byteLength);this._context.bindBuffer(a),this._context.bindFramebuffer(this),c.readPixels(t,e,r,s,h,n,0),this._context.unbindBuffer(A$2.PIXEL_PACK_BUFFER),await a.getSubDataAsync(o),a.dispose();}resize(t,e){if(this.width===t&&this.height===e)return;const i={width:t,height:e};b$1(i,this._context.parameters.maxTextureSize),this._colorAttachments.forEach((t=>t.resize(i.width,i.height))),this._depthStencilTexture?.resize(i.width,i.height),this._initialized&&(b$1(i,this._context.parameters.maxRenderbufferSize),this._depthStencilBuffer?.resize(i.width,i.height),this._context.getBoundFramebufferObject()===this&&this._context.bindFramebuffer(null),this._initialized=!1);}initializeAndBind(t=n$1.FRAMEBUFFER){const e=this._context.gl;if(this._initialized)return void e.bindFramebuffer(t,this.glName);this._glName&&e.deleteFramebuffer(this._glName);const i=e.createFramebuffer();if(e.bindFramebuffer(t,i),this._colorAttachments.forEach(((e,i)=>this._framebufferTexture2D(e.glName,i,S$1(e),t))),this._depthStencilBuffer){const i=this._getGLAttachmentPoint(this._depthStencilBuffer.descriptor);e.framebufferRenderbuffer(t,i,e.RENDERBUFFER,this._depthStencilBuffer.glName);}else this._depthStencilTexture&&this._framebufferTexture2D(this._depthStencilTexture.glName,e.DEPTH_STENCIL_ATTACHMENT,S$1(this._depthStencilTexture),t);if(a$2()){e.checkFramebufferStatus(t)!==e.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer is incomplete!");}this._glName=i,this._initialized=!0;}_framebufferTexture2D(t,e=X$1.COLOR_ATTACHMENT0,i=M.TEXTURE_2D,r=n$1.FRAMEBUFFER,s=0){this._context.gl.framebufferTexture2D(r,e,i,t,s);}_disposeDepthStencilAttachments(){const t=this._context.gl;if(this._depthStencilBuffer){if(this._initialized){this._context.bindFramebuffer(this);const e=this._getGLAttachmentPoint(this._depthStencilBuffer.descriptor);t.framebufferRenderbuffer(n$1.FRAMEBUFFER,e,t.RENDERBUFFER,null);}this._depthStencilBuffer=r$2(this._depthStencilBuffer);}this._depthStencilTexture&&(this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,t.DEPTH_STENCIL_ATTACHMENT)),this._depthStencilTexture=r$2(this._depthStencilTexture));}_validateTextureDescriptor(t){t.target!==M.TEXTURE_2D&&t.target!==M.TEXTURE_CUBE_MAP&&console.error("Texture type must be TEXTURE_2D or TEXTURE_CUBE_MAP!"),b$1(t,this._context.parameters.maxTextureSize),this._validateBufferDimensions(t);}_validateRenderBufferDescriptor(t){b$1(t,this._context.parameters.maxRenderbufferSize),this._validateBufferDimensions(t);}_validateBufferDimensions(t){t.width<=0&&(t.width=this.width),t.height<=0&&(t.height=this.height),this.width>0&&this.height>0&&(this.width===t.width&&this.height===t.height||console.error("Attachment size must match framebuffer size!"));}_getGLAttachmentPoint(t){switch(t.internalFormat){case B.DEPTH_COMPONENT16:case B.DEPTH_COMPONENT24:case B.DEPTH_COMPONENT32F:return this._context.gl.DEPTH_ATTACHMENT;case B.DEPTH24_STENCIL8:case B.DEPTH32F_STENCIL8:case B.DEPTH_STENCIL:return this._context.gl.DEPTH_STENCIL_ATTACHMENT;case B.STENCIL_INDEX8:return this._context.gl.STENCIL_ATTACHMENT}}_validateColorAttachmentPoint(e){if(-1===x._MAX_COLOR_ATTACHMENTS){const{gl:t}=this._context;x._MAX_COLOR_ATTACHMENTS=t.getParameter(t.MAX_COLOR_ATTACHMENTS);}const i=e-X$1.COLOR_ATTACHMENT0;i+1>x._MAX_COLOR_ATTACHMENTS&&s$3.getLogger("esri.views.webgl.FrameBufferObject").error("esri.FrameBufferObject",`illegal attachment point for color attachment: ${i+1}. Implementation supports up to ${x._MAX_COLOR_ATTACHMENTS} color attachments`);}};function E$1(t){return null!=t&&"type"in t&&t.type===e$1.Texture}function g$2(t){return null!=t&&"type"in t&&t.type===e$1.RenderBuffer}function A$1(t){return E$1(t)||null!=t&&"pixelFormat"in t}function b$1(t,e){const i=Math.max(t.width,t.height);if(i>e){p$1().warn(`Resizing FBO attachment size ${t.width}x${t.height} to device limit ${e}`);const r=e/i;return t.width=Math.round(t.width*r),t.height=Math.round(t.height*r),!1}return !0}function S$1(t){return t.descriptor.target===M.TEXTURE_CUBE_MAP?M.TEXTURE_CUBE_MAP_POSITIVE_X:M.TEXTURE_2D}x$1._MAX_COLOR_ATTACHMENTS=-1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const e=["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uint","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"];

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var r$1,t={exports:{}};void 0!==(r$1=["precision","highp","mediump","lowp","attribute","const","uniform","varying","break","continue","do","for","while","if","else","in","out","inout","float","int","void","bool","true","false","discard","return","mat2","mat3","mat4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","struct","asm","class","union","enum","typedef","template","this","packed","goto","switch","default","inline","noinline","volatile","public","static","extern","external","interface","long","short","double","half","fixed","unsigned","input","output","hvec2","hvec3","hvec4","dvec2","dvec3","dvec4","fvec2","fvec3","fvec4","sampler2DRect","sampler3DRect","sampler2DRectShadow","sizeof","cast","namespace","using"])&&(t.exports=r$1);const o$1=o$3(t.exports);var l$1,a$1={exports:{}};l$1=a$1,function(e){var r=["<<=",">>=","++","--","<<",">>","<=",">=","==","!=","&&","||","+=","-=","*=","/=","%=","&=","^^","^=","|=","(",")","[","]",".","!","~","*","/","%","+","-","<",">","&","^","|","?",":","=",",",";","{","}"];void 0!==r&&(l$1.exports=r);}();const g$1=o$3(a$1.exports);var i$1={exports:{}};!function(e){!function(r){var t=function(){return ["abs","acos","all","any","asin","atan","ceil","clamp","cos","cross","dFdx","dFdy","degrees","distance","dot","equal","exp","exp2","faceforward","floor","fract","gl_BackColor","gl_BackLightModelProduct","gl_BackLightProduct","gl_BackMaterial","gl_BackSecondaryColor","gl_ClipPlane","gl_ClipVertex","gl_Color","gl_DepthRange","gl_DepthRangeParameters","gl_EyePlaneQ","gl_EyePlaneR","gl_EyePlaneS","gl_EyePlaneT","gl_Fog","gl_FogCoord","gl_FogFragCoord","gl_FogParameters","gl_FragColor","gl_FragCoord","gl_FragData","gl_FragDepth","gl_FragDepthEXT","gl_FrontColor","gl_FrontFacing","gl_FrontLightModelProduct","gl_FrontLightProduct","gl_FrontMaterial","gl_FrontSecondaryColor","gl_LightModel","gl_LightModelParameters","gl_LightModelProducts","gl_LightProducts","gl_LightSource","gl_LightSourceParameters","gl_MaterialParameters","gl_MaxClipPlanes","gl_MaxCombinedTextureImageUnits","gl_MaxDrawBuffers","gl_MaxFragmentUniformComponents","gl_MaxLights","gl_MaxTextureCoords","gl_MaxTextureImageUnits","gl_MaxTextureUnits","gl_MaxVaryingFloats","gl_MaxVertexAttribs","gl_MaxVertexTextureImageUnits","gl_MaxVertexUniformComponents","gl_ModelViewMatrix","gl_ModelViewMatrixInverse","gl_ModelViewMatrixInverseTranspose","gl_ModelViewMatrixTranspose","gl_ModelViewProjectionMatrix","gl_ModelViewProjectionMatrixInverse","gl_ModelViewProjectionMatrixInverseTranspose","gl_ModelViewProjectionMatrixTranspose","gl_MultiTexCoord0","gl_MultiTexCoord1","gl_MultiTexCoord2","gl_MultiTexCoord3","gl_MultiTexCoord4","gl_MultiTexCoord5","gl_MultiTexCoord6","gl_MultiTexCoord7","gl_Normal","gl_NormalMatrix","gl_NormalScale","gl_ObjectPlaneQ","gl_ObjectPlaneR","gl_ObjectPlaneS","gl_ObjectPlaneT","gl_Point","gl_PointCoord","gl_PointParameters","gl_PointSize","gl_Position","gl_ProjectionMatrix","gl_ProjectionMatrixInverse","gl_ProjectionMatrixInverseTranspose","gl_ProjectionMatrixTranspose","gl_SecondaryColor","gl_TexCoord","gl_TextureEnvColor","gl_TextureMatrix","gl_TextureMatrixInverse","gl_TextureMatrixInverseTranspose","gl_TextureMatrixTranspose","gl_Vertex","greaterThan","greaterThanEqual","inversesqrt","length","lessThan","lessThanEqual","log","log2","matrixCompMult","max","min","mix","mod","normalize","not","notEqual","pow","radians","reflect","refract","sign","sin","smoothstep","sqrt","step","tan","texture2D","texture2DLod","texture2DProj","texture2DProjLod","textureCube","textureCubeLod","texture2DLodEXT","texture2DProjLodEXT","textureCubeLodEXT","texture2DGradEXT","texture2DProjGradEXT","textureCubeGradEXT","textureSize","texelFetch"]}();void 0!==t&&(e.exports=t);}();}(i$1);const n=o$3(i$1.exports);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var i=999,s$1=9999,c=0,p=1,u=2,f$1=3,d=4,l=5,h$1=6,y=7,w=8,g=9,m$1=10,k=11,b=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"];function E(){var t,e,a,E=0,_=0,v=i,j=[],A=[],x=1,D=0,R=0,T=!1,S=!1,G="";return function(t){return A=[],null!==t?F(t.replace?t.replace(/\r\n/g,"\n"):t):L()};function X(t){t.length&&A.push({type:b[v],data:t,position:R,line:x,column:D});}function F(e){var r;for(E=0,a=(G+=e).length;t=G[E],E<a;){switch(r=E,v){case c:E=V();break;case p:E=P();break;case u:E=M();break;case f$1:E=O();break;case d:E=$();break;case k:E=W();break;case l:E=z();break;case s$1:E=I();break;case g:E=H();break;case i:E=C();}if(r!==E)if("\n"===G[r])D=0,++x;else ++D;}return _+=E,G=G.slice(E),A}function L(t){return j.length&&X(j.join("")),v=m$1,X("(eof)"),A}function C(){return j=j.length?[]:j,"/"===e&&"*"===t?(R=_+E-1,v=c,e=t,E+1):"/"===e&&"/"===t?(R=_+E-1,v=p,e=t,E+1):"#"===t?(v=u,R=_+E,E):/\s/.test(t)?(v=g,R=_+E,E):(T=/\d/.test(t),S=/[^\w_]/.test(t),R=_+E,v=T?d:S?f$1:s$1,E)}function H(){return /[^\s]/g.test(t)?(X(j.join("")),v=i,E):(j.push(t),e=t,E+1)}function M(){return "\r"!==t&&"\n"!==t||"\\"===e?(j.push(t),e=t,E+1):(X(j.join("")),v=i,E)}function P(){return M()}function V(){return "/"===t&&"*"===e?(j.push(t),X(j.join("")),v=i,E+1):(j.push(t),e=t,E+1)}function O(){if("."===e&&/\d/.test(t))return v=l,E;if("/"===e&&"*"===t)return v=c,E;if("/"===e&&"/"===t)return v=p,E;if("."===t&&j.length){for(;N(j););return v=l,E}if(";"===t||")"===t||"("===t){if(j.length)for(;N(j););return X(t),v=i,E+1}var a=2===j.length&&"="!==t;if(/[\w_\d\s]/.test(t)||a){for(;N(j););return v=i,E}return j.push(t),e=t,E+1}function N(t){for(var e,a,n=0;;){if(e=g$1.indexOf(t.slice(0,t.length+n).join("")),a=g$1[e],-1===e){if(n--+t.length>0)continue;a=t.slice(0,1).join("");}return X(a),R+=a.length,(j=j.slice(a.length)).length}}function W(){return /[^a-fA-F0-9]/.test(t)?(X(j.join("")),v=i,E):(j.push(t),e=t,E+1)}function $(){return "."===t||/[eE]/.test(t)?(j.push(t),v=l,e=t,E+1):"x"===t&&1===j.length&&"0"===j[0]?(v=k,j.push(t),e=t,E+1):/[^\d]/.test(t)?(X(j.join("")),v=i,E):(j.push(t),e=t,E+1)}function z(){return "f"===t&&(j.push(t),e=t,E+=1),/[eE]/.test(t)||"-"===t&&/[eE]/.test(e)?(j.push(t),e=t,E+1):/[^\d]/.test(t)?(X(j.join("")),v=i,E):(j.push(t),e=t,E+1)}function I(){if(/[^\d\w_]/.test(t)){var a=j.join("");return v=o$1.indexOf(a)>-1?w:n.indexOf(a)>-1?y:h$1,X(j.join("")),v=i,E}return j.push(t),e=t,E+1}}function _(t){var e=E(),a=[];return a=(a=a.concat(e(t))).concat(e(null))}function v(t){return _(t)}function j(t){return t.map((t=>"eof"!==t.type?t.data:"")).join("")}const A=new Set(["GL_OES_standard_derivatives","GL_EXT_frag_depth","GL_EXT_draw_buffers","GL_EXT_shader_texture_lod"]);function x(t,e="100",a="300 es"){const r=/^\s*\#version\s+([0-9]+(\s+[a-zA-Z]+)?)\s*/;for(const n of t)if("preprocessor"===n.type){const t=r.exec(n.data);if(t){const r=t[1].replaceAll(/\s\s+/g," ");if(r===a)return r;if(r===e)return n.data="#version "+a,e;throw new Error("unknown glsl version: "+r)}}return t.splice(0,0,{type:"preprocessor",data:"#version "+a},{type:"whitespace",data:"\n"}),null}function D(t,e){for(let a=e-1;a>=0;a--){const e=t[a];if("whitespace"!==e.type&&"block-comment"!==e.type){if("keyword"!==e.type)break;if("attribute"===e.data||"in"===e.data)return !0}}return !1}function R(t,e,a,r){r=r||a;for(const n of t)if("ident"===n.type&&n.data===a){r in e?e[r]++:e[r]=0;return R(t,e,r+"_"+e[r],r)}return a}function T(t,e,a="afterVersion"){function r(t,e){for(let a=e;a<t.length;a++){const e=t[a];if("operator"===e.type&&";"===e.data)return a}return null}function n(t){let e=-1,n=0,o=-1;for(let i=0;i<t.length;i++){const s=t[i];if("preprocessor"===s.type&&(/\#(if|ifdef|ifndef)\s+.+/.test(s.data)?++n:/\#endif\s*.*/.test(s.data)&&--n),"afterVersion"!==a&&"afterPrecision"!==a||"preprocessor"===s.type&&s.data.startsWith("#version")&&(o=Math.max(o,i)),"afterPrecision"===a&&"keyword"===s.type&&"precision"===s.data){const e=r(t,i);if(null===e)throw new Error("precision statement not followed by any semicolons!");o=Math.max(o,e);}e<o&&0===n&&(e=i);}return e+1}const o={data:"\n",type:"whitespace"},i=e=>e<t.length&&/[^\r\n]$/.test(t[e].data);let s=n(t);i(s-1)&&t.splice(s++,0,o);for(const c of e)t.splice(s++,0,c);i(s-1)&&i(s)&&t.splice(s,0,o);}function S(t,e,a,r="lowp"){T(t,[{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"keyword",data:a},{type:"whitespace",data:" "},{type:"ident",data:e},{type:"operator",data:";"}],"afterPrecision");}function G(t,e,a,r,n="lowp"){T(t,[{type:"keyword",data:"layout"},{type:"operator",data:"("},{type:"keyword",data:"location"},{type:"whitespace",data:" "},{type:"operator",data:"="},{type:"whitespace",data:" "},{type:"integer",data:r.toString()},{type:"operator",data:")"},{type:"whitespace",data:" "},{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:n},{type:"whitespace",data:" "},{type:"keyword",data:a},{type:"whitespace",data:" "},{type:"ident",data:e},{type:"operator",data:";"}],"afterPrecision");}function X(t,e){let a,r,n=-1;for(let o=e;o<t.length;o++){const e=t[o];if("operator"===e.type&&("["===e.data&&(a=o),"]"===e.data)){r=o;break}"integer"===e.type&&(n=parseInt(e.data,10));}return a&&r&&t.splice(a,r-a+1),n}function F(a,r){if(a.startsWith("#version 300"))return a;const o=v(a);if("300 es"===x(o,"100","300 es"))return a;let i=null,s=null;const c={},p={};for(let u=0;u<o.length;++u){const a=o[u];switch(a.type){case"keyword":r===H$1.VERTEX_SHADER&&"attribute"===a.data?a.data="in":"varying"===a.data&&(a.data=r===H$1.VERTEX_SHADER?"out":"in");break;case"builtin":if(/^texture(2D|Cube)(Proj)?(Lod|Grad)?(EXT)?$/.test(a.data.trim())&&(a.data=a.data.replaceAll(/(2D|Cube|EXT)/g,"")),r===H$1.FRAGMENT_SHADER&&"gl_FragColor"===a.data&&(i||(i=R(o,c,"fragColor"),S(o,i,"vec4")),a.data=i),r===H$1.FRAGMENT_SHADER&&"gl_FragData"===a.data){const t=X(o,u+1),e=R(o,c,"fragData");G(o,e,"vec4",t,"mediump"),a.data=e;}else r===H$1.FRAGMENT_SHADER&&"gl_FragDepthEXT"===a.data&&(s||(s=R(o,c,"gl_FragDepth")),a.data=s);break;case"ident":if(e.includes(a.data)){if(r===H$1.VERTEX_SHADER&&D(o,u))throw new Error("attribute in vertex shader uses a name that is a reserved word in glsl 300 es");a.data in p||(p[a.data]=R(o,c,a.data)),a.data=p[a.data];}}}for(let t=o.length-1;t>=0;--t){const e=o[t];if("preprocessor"===e.type){const a=e.data.match(/\#extension\s+(.*)\:/);if(a&&a[1]&&A.has(a[1].trim())){const e=o[t+1];o.splice(t,e&&"whitespace"===e.type?2:1);}const r=e.data.match(/\#ifdef\s+(.*)/);r&&r[1]&&A.has(r[1].trim())&&(e.data="#if 1");const n=e.data.match(/\#ifndef\s+(.*)/);n&&n[1]&&A.has(n[1].trim())&&(e.data="#if 0");}}return H(a,j(o))}function H(t,e){return e}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const o=4294967295;class r{constructor(r,a,h,m,c=new Map,_=[]){this._context=r,this._locations=m,this._uniformBlockBindings=c,this._transformFeedbackVaryings=_,this._refCount=1,this._compiled=!1,this._linesOfCode=0,this._nameToUniformLocation=new Map,this._nameToUniform1=new Map,this._nameToUniform1v=new Map,this._nameToUniform2=new Map,this._nameToUniform3=new Map,this._nameToUniform4=new Map,this._nameToUniformMatrix3=new Map,this._nameToUniformMatrix4=new Map,r||console.error("RenderingContext isn't initialized!"),0===a.length&&console.error("Shaders source should not be empty!"),a=F(a,H$1.VERTEX_SHADER),h=F(h,H$1.FRAGMENT_SHADER),this._vShader=s(this._context,H$1.VERTEX_SHADER,a),this._fShader=s(this._context,H$1.FRAGMENT_SHADER,h),f.enabled&&(this._linesOfCode=a.match(/\n/g).length+h.match(/\n/g).length+2,this._context.instanceCounter.increment(V.LinesOfCode,this._vShader,this._linesOfCode)),this._vShader&&this._fShader||console.error("Error loading shaders!"),this._context.instanceCounter.increment(V.Shader,this),c$1()&&(this.vertexShader=a,this.fragmentShader=h),this.usedMemory=a.length+h.length;const l=this._context.gl,g=l.createProgram();l.attachShader(g,this._vShader),l.attachShader(g,this._fShader),this._locations.forEach(((t,e)=>l.bindAttribLocation(g,t,e))),this._transformFeedbackVaryings?.length&&l.transformFeedbackVaryings(g,this._transformFeedbackVaryings,l.SEPARATE_ATTRIBS),l.linkProgram(g),c$1()&&!l.getProgramParameter(g,l.LINK_STATUS)&&console.error(`Could not link shader\nvalidated: ${l.getProgramParameter(g,l.VALIDATE_STATUS)}, gl error ${l.getError()}, vertex: ${l.getShaderParameter(this._vShader,l.COMPILE_STATUS)}, fragment: ${l.getShaderParameter(this._fShader,l.COMPILE_STATUS)}, info log: ${l.getProgramInfoLog(g)}, vertex source: ${this.vertexShader}, fragment source: ${this.fragmentShader}`);for(const[t,e]of this._uniformBlockBindings){const n=l.getUniformBlockIndex(g,t);n<o&&l.uniformBlockBinding(g,n,e);}this._glName=g,this._context.instanceCounter.increment(V.Program,this);}get glName(){return this._glName}get hasGLName(){return null!=this._glName}get hasTransformFeedbackVaryings(){return !!this._transformFeedbackVaryings?.length}get compiled(){if(this._compiled)return !0;const t=this._context.gl.getExtension("KHR_parallel_shader_compile");return null==t||null==this.glName?(this._compiled=!0,!0):(this._compiled=!!this._context.gl.getProgramParameter(this.glName,t.COMPLETION_STATUS_KHR),this._compiled)}dispose(){if(--this._refCount>0)return;const t=this._context.gl,e=this._context.instanceCounter;this._nameToUniformLocation.forEach((t=>t&&e.decrement(V.Uniform,t))),this._nameToUniformLocation.clear(),this._vShader&&(this._linesOfCode>0&&(e.decrement(V.LinesOfCode,this._vShader,this._linesOfCode),this._linesOfCode=0),t.deleteShader(this._vShader),this._vShader=null,e.decrement(V.Shader,this)),this._fShader&&(t.deleteShader(this._fShader),this._fShader=null),this._glName&&(t.deleteProgram(this._glName),this._glName=null,e.decrement(V.Program,this));}ref(){++this._refCount;}_getUniformLocation(t){const e=this._nameToUniformLocation.get(t);if(void 0!==e)return e;if(this.glName){const e=this._context.gl.getUniformLocation(this.glName,t);return this._nameToUniformLocation.set(t,e),e&&this._context.instanceCounter.increment(V.Uniform,e),e}return null}hasUniform(t){return null!=this._getUniformLocation(t)}setUniform1i(t,e){const n=this._nameToUniform1.get(t);void 0!==n&&e===n||(this._context.gl.uniform1i(this._getUniformLocation(t),e),this._nameToUniform1.set(t,e));}setUniform1iv(t,e){m(this._nameToUniform1v,t,e)&&this._context.gl.uniform1iv(this._getUniformLocation(t),e);}setUniform2iv(t,e){m(this._nameToUniform2,t,e)&&this._context.gl.uniform2iv(this._getUniformLocation(t),e);}setUniform3iv(t,e){m(this._nameToUniform3,t,e)&&this._context.gl.uniform3iv(this._getUniformLocation(t),e);}setUniform4iv(t,e){m(this._nameToUniform4,t,e)&&this._context.gl.uniform4iv(this._getUniformLocation(t),e);}setUniform1f(t,e){const n=this._nameToUniform1.get(t);void 0!==n&&e===n||(this._context.gl.uniform1f(this._getUniformLocation(t),e),this._nameToUniform1.set(t,e));}setUniform1fv(t,e){m(this._nameToUniform1v,t,e)&&this._context.gl.uniform1fv(this._getUniformLocation(t),e);}setUniform2f(t,e,n){const i=this._nameToUniform2.get(t);void 0===i?(this._context.gl.uniform2f(this._getUniformLocation(t),e,n),this._nameToUniform2.set(t,[e,n])):e===i[0]&&n===i[1]||(this._context.gl.uniform2f(this._getUniformLocation(t),e,n),i[0]=e,i[1]=n);}setUniform2fv(t,e){m(this._nameToUniform2,t,e)&&this._context.gl.uniform2fv(this._getUniformLocation(t),e);}setUniform3f(t,e,n,i){const o=this._nameToUniform3.get(t);void 0===o?(this._context.gl.uniform3f(this._getUniformLocation(t),e,n,i),this._nameToUniform3.set(t,[e,n,i])):e===o[0]&&n===o[1]&&i===o[2]||(this._context.gl.uniform3f(this._getUniformLocation(t),e,n,i),o[0]=e,o[1]=n,o[2]=i);}setUniform3fv(t,e){const n=this._getUniformLocation(t);null!=n&&m(this._nameToUniform3,t,e)&&this._context.gl.uniform3fv(n,e);}setUniform4f(t,e,n,i,o){const r=this._nameToUniform4.get(t);void 0===r?(this._context.gl.uniform4f(this._getUniformLocation(t),e,n,i,o),this._nameToUniform4.set(t,[e,n,i,o])):void 0!==r&&e===r[0]&&n===r[1]&&i===r[2]&&o===r[3]||(this._context.gl.uniform4f(this._getUniformLocation(t),e,n,i,o),r[0]=e,r[1]=n,r[2]=i,r[3]=o);}setUniform4fv(t,e){const n=this._getUniformLocation(t);null!=n&&m(this._nameToUniform4,t,e)&&this._context.gl.uniform4fv(n,e);}setUniformMatrix3fv(t,e,n=!1){const i=this._getUniformLocation(t);null!=i&&m(this._nameToUniformMatrix3,t,e)&&this._context.gl.uniformMatrix3fv(i,n,e);}setUniformMatrix4fv(t,e,n=!1){const i=this._getUniformLocation(t);null!=i&&m(this._nameToUniformMatrix4,t,e)&&this._context.gl.uniformMatrix4fv(i,n,e);}stop(){}}function s(n,i,o){const r=n.gl,s=r.createShader(i);return r.shaderSource(s,o),r.compileShader(s),c$1()&&!r.getShaderParameter(s,r.COMPILE_STATUS)&&(console.error("Compile error in ".concat(i===H$1.VERTEX_SHADER?"vertex":"fragment"," shader")),console.error(r.getShaderInfoLog(s)),console.error(a(o))),s}function a(t){let e=2;return t.replaceAll("\n",(()=>"\n"+h(e++)+":"))}function h(t){return t>=1e3?t.toString():("  "+t).slice(-3)}function m(t,e,n){const i=t.get(e);if(!i)return t.set(e,Array.from(n)),!0;const o=n.length;if(i.length!==o)return t.set(e,Array.from(n)),!0;for(let r=0;r<o;++r){const t=n[r];if(i[r]!==t){for(i[r]=t;r<o;++r)i[r]=n[r];return !0}}return !1}const f={enabled:!1};

export { h$3 as h, i$2 as i, r, s$2 as s, x$1 as x };
