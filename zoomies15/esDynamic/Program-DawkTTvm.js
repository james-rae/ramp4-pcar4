import{cF as I,n as j}from"./main-yxqK2SuK.js";import{E as _t}from"./BufferObject-DbPlVfPL.js";import{a as mt,e as M,m as C,b as gt,c as L}from"./Texture-CZT2DfXS.js";import{V as g,X as x,G as X,U as pt,t as z,n as F,M as b,F as Tt,A as xt,B as A,H as p}from"./enums-DBi1-Mm2.js";let Et=class{constructor(i,t,e=t){this.internalFormat=i,this.width=t,this.height=e,this.multisampled=!1,this.samples=1}};function bt(i){return i.width<=0||i.height<=0||i.internalFormat==null?0:i.width*i.height*mt(i.internalFormat)}let V=class{constructor(i,t){this._context=i,this._descriptor=t,this.type=M.RenderBuffer,this._context.instanceCounter.increment(g.Renderbuffer,this);const e=this._context.gl;this.glName=e.createRenderbuffer(),this._context.bindRenderbuffer(this);const{width:r,height:n,internalFormat:o,multisampled:a}=t;a?e.renderbufferStorageMultisample(e.RENDERBUFFER,this.samples,o,r,n):e.renderbufferStorage(e.RENDERBUFFER,o,r,n),this._context.bindRenderbuffer(null)}get descriptor(){return this._descriptor}get samples(){const i=this._descriptor.samples,t=this._context.parameters.maxSamples;return i?Math.min(i,t):t}get usedMemory(){return bt(this._descriptor)}resize(i,t){const e=this._descriptor;if(e.width===i&&e.height===t)return;e.width=i,e.height=t;const r=this._context.gl;this._context.bindRenderbuffer(this),e.multisampled?r.renderbufferStorageMultisample(r.RENDERBUFFER,this.samples,e.internalFormat,e.width,e.height):r.renderbufferStorage(r.RENDERBUFFER,e.internalFormat,e.width,e.height),this._context.bindRenderbuffer(null)}dispose(){this._context&&(this._context.gl.deleteRenderbuffer(this.glName),this._context.instanceCounter.decrement(g.Renderbuffer,this),this._context=null)}};const St=()=>j.getLogger("esri.views.webgl.FramebufferObject");let G=class R{constructor(t,e,r=null){this._context=t,this._glName=null,this._colorAttachments=new Map,this._depthStencilBuffer=null,this._depthStencilTexture=null,this._initialized=!1,t.instanceCounter.increment(g.FramebufferObject,this);const n=U(e)?e:new C(this._context,e);if(this._colorAttachments.set(x.COLOR_ATTACHMENT0,n),this._validateTextureDescriptor(n.descriptor),this._validateColorAttachmentPoint(x.COLOR_ATTACHMENT0),r!=null)if(Dt(r))this._depthStencilTexture=U(r)?r:new C(this._context,r),this._validateTextureDescriptor(this._depthStencilTexture.descriptor);else{const o=At(r)?r:new V(this._context,r);this._depthStencilBuffer=o,this._validateRenderBufferDescriptor(o.descriptor)}}dispose(){if(this._colorAttachments.size===0&&!this._glName)return;const t=this._context.getBoundFramebufferObject();this._colorAttachments.forEach((e,r)=>this.detachColorTexture(r)?.dispose()),this.detachDepthStencilBuffer()?.dispose(),this.detachDepthStencilTexture()?.dispose(),this._glName&&(this._context.gl.deleteFramebuffer(this._glName),this._glName=null),this._context.bindFramebuffer(t),this._context.instanceCounter.decrement(g.FramebufferObject,this)}get glName(){return this._glName}get colorTexture(){return this._colorAttachments.get(x.COLOR_ATTACHMENT0)}get depthStencil(){return this._depthStencilTexture||this._depthStencilBuffer}get depthStencilTexture(){return this._depthStencilTexture}get width(){return this._colorAttachments.get(x.COLOR_ATTACHMENT0)?.descriptor?.width??0}get height(){return this._colorAttachments.get(x.COLOR_ATTACHMENT0)?.descriptor?.height??0}get usedMemory(){return[...this._colorAttachments].reduce((t,[e,r])=>t+r.usedMemory,this.depthStencil?.usedMemory??0)}getColorTexture(t){const e=this._colorAttachments.get(t);return e&&U(e)?e:null}get colorAttachments(){return[...this._colorAttachments.keys()]}attachColorTexture(t,e=x.COLOR_ATTACHMENT0){if(!t)return;this._validateColorAttachmentPoint(e);const r=t.descriptor;this._validateTextureDescriptor(r),this.detachColorTexture(e)?.dispose(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(t.glName,e)),this._colorAttachments.set(e,t)}detachColorTexture(t=x.COLOR_ATTACHMENT0){const e=this._colorAttachments.get(t);if(e){if(this._initialized){const r=this._context.getBoundFramebufferObject();this._context.bindFramebuffer(this),this._framebufferTexture2D(null,t),this._context.bindFramebuffer(r)}return this._colorAttachments.delete(t),e}}setColorTextureTarget(t,e=x.COLOR_ATTACHMENT0){const r=this._colorAttachments.get(e);r&&this._framebufferTexture2D(r.glName,e,t)}attachDepthStencil(t){if(t)switch(t.type){case M.Texture:return this._attachDepthStencilTexture(t);case M.RenderBuffer:return this._attachDepthStencilBuffer(t)}}_attachDepthStencilTexture(t){if(t==null)return;const e=t.descriptor;e.pixelFormat!==X.DEPTH_STENCIL&&e.pixelFormat!==X.DEPTH24_STENCIL8&&console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!"),e.dataType!==pt.UNSIGNED_INT_24_8&&console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8!"),this._validateTextureDescriptor(e),this._disposeDepthStencilAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(t.glName,z)),this._depthStencilTexture?.dispose(),this._depthStencilTexture=t}detachDepthStencilTexture(){const t=this._depthStencilTexture;if(t&&this._initialized){const e=this._context.getBoundFramebufferObject();this._context.bindFramebuffer(this),this._framebufferTexture2D(null,z),this._context.bindFramebuffer(e)}return this._depthStencilTexture=null,t}_attachDepthStencilBuffer(t){if(t==null)return;const e=t.descriptor;if(this._validateRenderBufferDescriptor(e),this._disposeDepthStencilAttachments(),this._initialized){this._context.bindFramebuffer(this);const r=this._context.gl,n=this._getGLAttachmentPoint(e);r.framebufferRenderbuffer(F.FRAMEBUFFER,n,r.RENDERBUFFER,t.glName)}this._depthStencilBuffer=t}detachDepthStencilBuffer(){const t=this._depthStencilBuffer;if(t&&this._initialized){const e=this._context.getBoundFramebufferObject();this._context.bindFramebuffer(this);const r=this._context.gl,n=this._getGLAttachmentPoint(t.descriptor);r.framebufferRenderbuffer(F.FRAMEBUFFER,n,r.RENDERBUFFER,null),this._context.bindFramebuffer(e)}return this._depthStencilBuffer=null,t}copyToTexture(t,e,r,n,o,a,h){(t<0||e<0||o<0||a<0)&&console.error("Offsets cannot be negative!"),(r<=0||n<=0)&&console.error("Copy width and height must be greater than zero!");const s=h.descriptor;h.descriptor.target!==b.TEXTURE_2D&&console.error("Texture target must be TEXTURE_2D!"),(s?.width==null||s?.height==null||t+r>this.width||e+n>this.height||o+r>s.width||a+n>s.height)&&console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");const c=this._context,l=c.bindTexture(h,C.TEXTURE_UNIT_FOR_UPDATES);c.setActiveTexture(C.TEXTURE_UNIT_FOR_UPDATES),c.bindFramebuffer(this),c.gl.copyTexSubImage2D(b.TEXTURE_2D,0,o,a,t,e,r,n),c.bindTexture(l,C.TEXTURE_UNIT_FOR_UPDATES)}readPixels(t,e,r,n,o,a,h){(r<=0||n<=0)&&console.error("Copy width and height must be greater than zero!"),h||console.error("Target memory is not initialized!"),this._context.bindFramebuffer(this),this._context.gl.readPixels(t,e,r,n,o,a,h)}async readPixelsAsync(t,e,r,n,o,a,h){const{gl:s}=this._context,c=_t.createPixelPack(this._context,Tt.STREAM_READ,h.byteLength);this._context.bindBuffer(c);const l=this._context.getBoundFramebufferObject();this._context.bindFramebuffer(this),s.readPixels(t,e,r,n,o,a,0),this._context.unbindBuffer(xt.PIXEL_PACK_BUFFER),this._context.bindFramebuffer(l),await c.getSubDataAsync(h),c.dispose()}resize(t,e){if(this.width===t&&this.height===e)return;const r={width:t,height:e};v(r,this._context.parameters.maxTextureSize),this._colorAttachments.forEach(n=>n.resize(r.width,r.height)),this._depthStencilTexture?.resize(r.width,r.height),this._initialized&&(v(r,this._context.parameters.maxRenderbufferSize),this._depthStencilBuffer?.resize(r.width,r.height),this._context.getBoundFramebufferObject()===this&&this._context.bindFramebuffer(null),this._initialized=!1)}initializeAndBind(t=F.FRAMEBUFFER){const e=this._context.gl;if(this._initialized)return void e.bindFramebuffer(t,this.glName);this._glName&&e.deleteFramebuffer(this._glName);const r=e.createFramebuffer();if(e.bindFramebuffer(t,r),this._colorAttachments.forEach((n,o)=>this._framebufferTexture2D(n.glName,o,$(n),t)),this._depthStencilBuffer){const n=this._getGLAttachmentPoint(this._depthStencilBuffer.descriptor);e.framebufferRenderbuffer(t,n,e.RENDERBUFFER,this._depthStencilBuffer.glName)}else this._depthStencilTexture&&this._framebufferTexture2D(this._depthStencilTexture.glName,e.DEPTH_STENCIL_ATTACHMENT,$(this._depthStencilTexture),t);gt()&&e.checkFramebufferStatus(t)!==e.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer is incomplete!"),this._glName=r,this._initialized=!0}_framebufferTexture2D(t,e=x.COLOR_ATTACHMENT0,r=b.TEXTURE_2D,n=F.FRAMEBUFFER,o=0){this._context.gl.framebufferTexture2D(n,e,r,t,o)}_disposeDepthStencilAttachments(){const t=this._context.gl;if(this._depthStencilBuffer){if(this._initialized){this._context.bindFramebuffer(this);const e=this._getGLAttachmentPoint(this._depthStencilBuffer.descriptor);t.framebufferRenderbuffer(F.FRAMEBUFFER,e,t.RENDERBUFFER,null)}this._depthStencilBuffer=I(this._depthStencilBuffer)}this._depthStencilTexture&&(this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,t.DEPTH_STENCIL_ATTACHMENT)),this._depthStencilTexture=I(this._depthStencilTexture))}_validateTextureDescriptor(t){t.target!==b.TEXTURE_2D&&t.target!==b.TEXTURE_CUBE_MAP&&console.error("Texture type must be TEXTURE_2D or TEXTURE_CUBE_MAP!"),v(t,this._context.parameters.maxTextureSize),this._validateBufferDimensions(t)}_validateRenderBufferDescriptor(t){v(t,this._context.parameters.maxRenderbufferSize),this._validateBufferDimensions(t)}_validateBufferDimensions(t){t.width<=0&&(t.width=this.width),t.height<=0&&(t.height=this.height),this.width>0&&this.height>0&&(this.width===t.width&&this.height===t.height||console.error("Attachment size must match framebuffer size!"))}_getGLAttachmentPoint(t){switch(t.internalFormat){case A.DEPTH_COMPONENT16:case A.DEPTH_COMPONENT24:case A.DEPTH_COMPONENT32F:return this._context.gl.DEPTH_ATTACHMENT;case A.DEPTH24_STENCIL8:case A.DEPTH32F_STENCIL8:case A.DEPTH_STENCIL:return this._context.gl.DEPTH_STENCIL_ATTACHMENT;case A.STENCIL_INDEX8:return this._context.gl.STENCIL_ATTACHMENT}}_validateColorAttachmentPoint(t){if(R._MAX_COLOR_ATTACHMENTS===-1){const{gl:r}=this._context;R._MAX_COLOR_ATTACHMENTS=r.getParameter(r.MAX_COLOR_ATTACHMENTS)}const e=t-x.COLOR_ATTACHMENT0;e+1>R._MAX_COLOR_ATTACHMENTS&&j.getLogger("esri.views.webgl.FrameBufferObject").error("esri.FrameBufferObject",`illegal attachment point for color attachment: ${e+1}. Implementation supports up to ${R._MAX_COLOR_ATTACHMENTS} color attachments`)}};function U(i){return i!=null&&"type"in i&&i.type===M.Texture}function At(i){return i!=null&&"type"in i&&i.type===M.RenderBuffer}function Dt(i){return U(i)||i!=null&&"pixelFormat"in i}function v(i,t){const e=Math.max(i.width,i.height);if(e>t){St().warn(`Resizing FBO attachment size ${i.width}x${i.height} to device limit ${t}`);const r=t/e;return i.width=Math.round(i.width*r),i.height=Math.round(i.height*r),!1}return!0}function $(i){return i.descriptor.target===b.TEXTURE_CUBE_MAP?b.TEXTURE_CUBE_MAP_POSITIVE_X:b.TEXTURE_2D}G._MAX_COLOR_ATTACHMENTS=-1;const Mt=["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uint","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"],Ct=["precision","highp","mediump","lowp","attribute","const","uniform","varying","break","continue","do","for","while","if","else","in","out","inout","float","int","void","bool","true","false","discard","return","mat2","mat3","mat4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","struct","asm","class","union","enum","typedef","template","this","packed","goto","switch","default","inline","noinline","volatile","public","static","extern","external","interface","long","short","double","half","fixed","unsigned","input","output","hvec2","hvec3","hvec4","dvec2","dvec3","dvec4","fvec2","fvec3","fvec4","sampler2DRect","sampler3DRect","sampler2DRectShadow","sizeof","cast","namespace","using"],q=["<<=",">>=","++","--","<<",">>","<=",">=","==","!=","&&","||","+=","-=","*=","/=","%=","&=","^^","^=","|=","(",")","[","]",".","!","~","*","/","%","+","-","<",">","&","^","|","?",":","=",",",";","{","}"],Ft=["abs","acos","all","any","asin","atan","ceil","clamp","cos","cross","dFdx","dFdy","degrees","distance","dot","equal","exp","exp2","faceforward","floor","fract","gl_BackColor","gl_BackLightModelProduct","gl_BackLightProduct","gl_BackMaterial","gl_BackSecondaryColor","gl_ClipPlane","gl_ClipVertex","gl_Color","gl_DepthRange","gl_DepthRangeParameters","gl_EyePlaneQ","gl_EyePlaneR","gl_EyePlaneS","gl_EyePlaneT","gl_Fog","gl_FogCoord","gl_FogFragCoord","gl_FogParameters","gl_FragColor","gl_FragCoord","gl_FragData","gl_FragDepth","gl_FragDepthEXT","gl_FrontColor","gl_FrontFacing","gl_FrontLightModelProduct","gl_FrontLightProduct","gl_FrontMaterial","gl_FrontSecondaryColor","gl_LightModel","gl_LightModelParameters","gl_LightModelProducts","gl_LightProducts","gl_LightSource","gl_LightSourceParameters","gl_MaterialParameters","gl_MaxClipPlanes","gl_MaxCombinedTextureImageUnits","gl_MaxDrawBuffers","gl_MaxFragmentUniformComponents","gl_MaxLights","gl_MaxTextureCoords","gl_MaxTextureImageUnits","gl_MaxTextureUnits","gl_MaxVaryingFloats","gl_MaxVertexAttribs","gl_MaxVertexTextureImageUnits","gl_MaxVertexUniformComponents","gl_ModelViewMatrix","gl_ModelViewMatrixInverse","gl_ModelViewMatrixInverseTranspose","gl_ModelViewMatrixTranspose","gl_ModelViewProjectionMatrix","gl_ModelViewProjectionMatrixInverse","gl_ModelViewProjectionMatrixInverseTranspose","gl_ModelViewProjectionMatrixTranspose","gl_MultiTexCoord0","gl_MultiTexCoord1","gl_MultiTexCoord2","gl_MultiTexCoord3","gl_MultiTexCoord4","gl_MultiTexCoord5","gl_MultiTexCoord6","gl_MultiTexCoord7","gl_Normal","gl_NormalMatrix","gl_NormalScale","gl_ObjectPlaneQ","gl_ObjectPlaneR","gl_ObjectPlaneS","gl_ObjectPlaneT","gl_Point","gl_PointCoord","gl_PointParameters","gl_PointSize","gl_Position","gl_ProjectionMatrix","gl_ProjectionMatrixInverse","gl_ProjectionMatrixInverseTranspose","gl_ProjectionMatrixTranspose","gl_SecondaryColor","gl_TexCoord","gl_TextureEnvColor","gl_TextureMatrix","gl_TextureMatrixInverse","gl_TextureMatrixInverseTranspose","gl_TextureMatrixTranspose","gl_Vertex","greaterThan","greaterThanEqual","inversesqrt","length","lessThan","lessThanEqual","log","log2","matrixCompMult","max","min","mix","mod","normalize","not","notEqual","pow","radians","reflect","refract","sign","sin","smoothstep","sqrt","step","tan","texture2D","texture2DLod","texture2DProj","texture2DProjLod","textureCube","textureCubeLod","texture2DLodEXT","texture2DProjLodEXT","textureCubeLodEXT","texture2DGradEXT","texture2DProjGradEXT","textureCubeGradEXT","textureSize","texelFetch"];var T=999,K=9999,N=0,B=1,Q=2,W=3,J=4,w=5,yt=6,Rt=7,Ut=8,Z=9,vt=10,Y=11,wt=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"];function Pt(){var i,t,e,r=0,n=0,o=T,a=[],h=[],s=1,c=0,l=0,f=!1,m=!1,_="";return function(u){return h=[],u!==null?it(u.replace?u.replace(/\r\n/g,`
`):u):nt()};function d(u){u.length&&h.push({type:wt[o],data:u,position:l,line:s,column:c})}function it(u){var S;for(r=0,e=(_+=u).length;i=_[r],r<e;){switch(S=r,o){case N:r=ht();break;case B:r=st();break;case Q:r=k();break;case W:r=lt();break;case J:r=ut();break;case Y:r=ct();break;case w:r=ft();break;case K:r=dt();break;case Z:r=at();break;case T:r=ot()}S!==r&&(_[S]===`
`?(c=0,++s):++c)}return n+=r,_=_.slice(r),h}function nt(u){return a.length&&d(a.join("")),o=vt,d("(eof)"),h}function ot(){return a=a.length?[]:a,t==="/"&&i==="*"?(l=n+r-1,o=N,t=i,r+1):t==="/"&&i==="/"?(l=n+r-1,o=B,t=i,r+1):i==="#"?(o=Q,l=n+r,r):/\s/.test(i)?(o=Z,l=n+r,r):(f=/\d/.test(i),m=/[^\w_]/.test(i),l=n+r,o=f?J:m?W:K,r)}function at(){return/[^\s]/g.test(i)?(d(a.join("")),o=T,r):(a.push(i),t=i,r+1)}function k(){return i!=="\r"&&i!==`
`||t==="\\"?(a.push(i),t=i,r+1):(d(a.join("")),o=T,r)}function st(){return k()}function ht(){return i==="/"&&t==="*"?(a.push(i),d(a.join("")),o=T,r+1):(a.push(i),t=i,r+1)}function lt(){if(t==="."&&/\d/.test(i))return o=w,r;if(t==="/"&&i==="*")return o=N,r;if(t==="/"&&i==="/")return o=B,r;if(i==="."&&a.length){for(;P(a););return o=w,r}if(i===";"||i===")"||i==="("){if(a.length)for(;P(a););return d(i),o=T,r+1}var u=a.length===2&&i!=="=";if(/[\w_\d\s]/.test(i)||u){for(;P(a););return o=T,r}return a.push(i),t=i,r+1}function P(u){for(var S,D,H=0;;){if(S=q.indexOf(u.slice(0,u.length+H).join("")),D=q[S],S===-1){if(H--+u.length>0)continue;D=u.slice(0,1).join("")}return d(D),l+=D.length,(a=a.slice(D.length)).length}}function ct(){return/[^a-fA-F0-9]/.test(i)?(d(a.join("")),o=T,r):(a.push(i),t=i,r+1)}function ut(){return i==="."||/[eE]/.test(i)?(a.push(i),o=w,t=i,r+1):i==="x"&&a.length===1&&a[0]==="0"?(o=Y,a.push(i),t=i,r+1):/[^\d]/.test(i)?(d(a.join("")),o=T,r):(a.push(i),t=i,r+1)}function ft(){return i==="f"&&(a.push(i),t=i,r+=1),/[eE]/.test(i)||i==="-"&&/[eE]/.test(t)?(a.push(i),t=i,r+1):/[^\d]/.test(i)?(d(a.join("")),o=T,r):(a.push(i),t=i,r+1)}function dt(){if(/[^\d\w_]/.test(i)){var u=a.join("");return o=Ct.indexOf(u)>-1?Ut:Ft.indexOf(u)>-1?Rt:yt,d(a.join("")),o=T,r}return a.push(i),t=i,r+1}}function Lt(i){var t=Pt(),e=[];return e=(e=e.concat(t(i))).concat(t(null))}function Nt(i){return Lt(i)}function Bt(i){return i.map(t=>t.type!=="eof"?t.data:"").join("")}const O=new Set(["GL_OES_standard_derivatives","GL_EXT_frag_depth","GL_EXT_draw_buffers","GL_EXT_shader_texture_lod"]);function Ot(i,t="100",e="300 es"){const r=/^\s*#version\s+([0-9]+(\s+[a-zA-Z]+)?)\s*/;for(const n of i)if(n.type==="preprocessor"){const o=r.exec(n.data);if(o){const a=o[1].replaceAll(/\s{2,}/g," ");if(a===e)return a;if(a===t)return n.data="#version "+e,t;throw new Error("unknown glsl version: "+a)}}return i.splice(0,0,{type:"preprocessor",data:"#version "+e},{type:"whitespace",data:`
`}),null}function kt(i,t){for(let e=t-1;e>=0;e--){const r=i[e];if(r.type!=="whitespace"&&r.type!=="block-comment"){if(r.type!=="keyword")break;if(r.data==="attribute"||r.data==="in")return!0}}return!1}function y(i,t,e,r){r=r||e;for(const n of i)if(n.type==="ident"&&n.data===e)return r in t?t[r]++:t[r]=0,y(i,t,r+"_"+t[r],r);return e}function tt(i,t,e="afterVersion"){function r(s,c){for(let l=c;l<s.length;l++){const f=s[l];if(f.type==="operator"&&f.data===";")return l}return null}function n(s){let c=-1,l=0,f=-1;for(let m=0;m<s.length;m++){const _=s[m];if(_.type==="preprocessor"&&(/#(if|ifdef|ifndef)\s+.+/.test(_.data)?++l:/#endif\s*.*/.test(_.data)&&--l),e!=="afterVersion"&&e!=="afterPrecision"||_.type==="preprocessor"&&_.data.startsWith("#version")&&(f=Math.max(f,m)),e==="afterPrecision"&&_.type==="keyword"&&_.data==="precision"){const d=r(s,m);if(d===null)throw new Error("precision statement not followed by any semicolons!");f=Math.max(f,d)}c<f&&l===0&&(c=m)}return c+1}const o={data:`
`,type:"whitespace"},a=s=>s<i.length&&/[^\r\n]$/.test(i[s].data);let h=n(i);a(h-1)&&i.splice(h++,0,o);for(const s of t)i.splice(h++,0,s);a(h-1)&&a(h)&&i.splice(h,0,o)}function Ht(i,t,e,r="lowp"){tt(i,[{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"keyword",data:e},{type:"whitespace",data:" "},{type:"ident",data:t},{type:"operator",data:";"}],"afterPrecision")}function It(i,t,e,r,n="lowp"){tt(i,[{type:"keyword",data:"layout"},{type:"operator",data:"("},{type:"keyword",data:"location"},{type:"whitespace",data:" "},{type:"operator",data:"="},{type:"whitespace",data:" "},{type:"integer",data:r.toString()},{type:"operator",data:")"},{type:"whitespace",data:" "},{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:n},{type:"whitespace",data:" "},{type:"keyword",data:e},{type:"whitespace",data:" "},{type:"ident",data:t},{type:"operator",data:";"}],"afterPrecision")}function jt(i,t){let e,r,n=-1;for(let o=t;o<i.length;o++){const a=i[o];if(a.type==="operator"&&(a.data==="["&&(e=o),a.data==="]")){r=o;break}a.type==="integer"&&(n=parseInt(a.data,10))}return e&&r&&i.splice(e,r-e+1),n}function et(i,t){if(i.startsWith("#version 300"))return i;const e=Nt(i);if(Ot(e,"100","300 es")==="300 es")return i;let r=null,n=null;const o={},a={};for(let h=0;h<e.length;++h){const s=e[h];switch(s.type){case"keyword":t===p.VERTEX_SHADER&&s.data==="attribute"?s.data="in":s.data==="varying"&&(s.data=t===p.VERTEX_SHADER?"out":"in");break;case"builtin":if(/^texture(2D|Cube)(Proj)?(Lod|Grad)?(EXT)?$/.test(s.data.trim())&&(s.data=s.data.replaceAll(/(2D|Cube|EXT)/g,"")),t===p.FRAGMENT_SHADER&&s.data==="gl_FragColor"&&(r||(r=y(e,o,"fragColor"),Ht(e,r,"vec4")),s.data=r),t===p.FRAGMENT_SHADER&&s.data==="gl_FragData"){const c=jt(e,h+1),l=y(e,o,"fragData");It(e,l,"vec4",c,"mediump"),s.data=l}else t===p.FRAGMENT_SHADER&&s.data==="gl_FragDepthEXT"&&(n||(n=y(e,o,"gl_FragDepth")),s.data=n);break;case"ident":if(Mt.includes(s.data)){if(t===p.VERTEX_SHADER&&kt(e,h))throw new Error("attribute in vertex shader uses a name that is a reserved word in glsl 300 es");s.data in a||(a[s.data]=y(e,o,s.data)),s.data=a[s.data]}}}for(let h=e.length-1;h>=0;--h){const s=e[h];if(s.type==="preprocessor"){const c=s.data.match(/#extension\s+(.*):/);if(c?.[1]&&O.has(c[1].trim())){const m=e[h+1];e.splice(h,m&&m.type==="whitespace"?2:1)}const l=s.data.match(/#ifdef\s+(.*)/);l?.[1]&&O.has(l[1].trim())&&(s.data="#if 1");const f=s.data.match(/#ifndef\s+(.*)/);f?.[1]&&O.has(f[1].trim())&&(s.data="#if 0")}}return Xt(i,Bt(e))}function Xt(i,t){return t}const zt=4294967295;class Vt{constructor(t,e,r,n,o=new Map,a=[]){this._context=t,this._locations=n,this._uniformBlockBindings=o,this._transformFeedbackVaryings=a,this._refCount=1,this._compiled=!1,this._linesOfCode=0,this._nameToUniformLocation=new Map,this._nameToUniform1=new Map,this._nameToUniform1v=new Map,this._nameToUniform2=new Map,this._nameToUniform3=new Map,this._nameToUniform4=new Map,this._nameToUniformMatrix3=new Map,this._nameToUniformMatrix4=new Map,t||console.error("RenderingContext isn't initialized!"),e.length===0&&console.error("Shaders source should not be empty!"),e=et(e,p.VERTEX_SHADER),r=et(r,p.FRAGMENT_SHADER),this._vShader=rt(this._context,p.VERTEX_SHADER,e),this._fShader=rt(this._context,p.FRAGMENT_SHADER,r),this._vShader&&this._fShader||console.error("Error loading shaders!"),this._context.instanceCounter.increment(g.Shader,this),L()&&(this.vertexShader=e,this.fragmentShader=r),this.usedMemory=e.length+r.length;const h=this._context.gl,s=h.createProgram();h.attachShader(s,this._vShader),h.attachShader(s,this._fShader),this._locations.forEach((c,l)=>h.bindAttribLocation(s,c,l)),this._transformFeedbackVaryings?.length&&h.transformFeedbackVaryings(s,this._transformFeedbackVaryings,h.SEPARATE_ATTRIBS),h.linkProgram(s),L()&&!h.getProgramParameter(s,h.LINK_STATUS)&&console.error(`Could not link shader
validated: ${h.getProgramParameter(s,h.VALIDATE_STATUS)}, gl error ${h.getError()}, vertex: ${h.getShaderParameter(this._vShader,h.COMPILE_STATUS)}, fragment: ${h.getShaderParameter(this._fShader,h.COMPILE_STATUS)}, info log: ${h.getProgramInfoLog(s)}, vertex source: ${this.vertexShader}, fragment source: ${this.fragmentShader}`);for(const[c,l]of this._uniformBlockBindings){const f=h.getUniformBlockIndex(s,c);f<zt&&h.uniformBlockBinding(s,f,l)}this._glName=s,this._context.instanceCounter.increment(g.Program,this)}get glName(){return this._glName}get hasGLName(){return this._glName!=null}get hasTransformFeedbackVaryings(){return!!this._transformFeedbackVaryings?.length}get compiled(){if(this._compiled)return!0;const t=this._context.gl.getExtension("KHR_parallel_shader_compile");return t==null||this.glName==null?(this._compiled=!0,!0):(this._compiled=!!this._context.gl.getProgramParameter(this.glName,t.COMPLETION_STATUS_KHR),this._compiled)}dispose(){if(--this._refCount>0)return;const t=this._context.gl,e=this._context.instanceCounter;this._nameToUniformLocation.forEach(r=>r&&e.decrement(g.Uniform,r)),this._nameToUniformLocation.clear(),this._vShader&&(this._linesOfCode>0&&(e.decrement(g.LinesOfCode,this._vShader,this._linesOfCode),this._linesOfCode=0),t.deleteShader(this._vShader),this._vShader=null,e.decrement(g.Shader,this)),this._fShader&&(t.deleteShader(this._fShader),this._fShader=null),this._glName&&(t.deleteProgram(this._glName),this._glName=null,e.decrement(g.Program,this))}ref(){++this._refCount}_getUniformLocation(t){const e=this._nameToUniformLocation.get(t);if(e!==void 0)return e;if(this.glName){const r=this._context.gl.getUniformLocation(this.glName,t);return this._nameToUniformLocation.set(t,r),r&&this._context.instanceCounter.increment(g.Uniform,r),r}return null}hasUniform(t){return this._getUniformLocation(t)!=null}setUniform1i(t,e){const r=this._nameToUniform1.get(t);r!==void 0&&e===r||(this._context.gl.uniform1i(this._getUniformLocation(t),e),this._nameToUniform1.set(t,e))}setUniform1iv(t,e){E(this._nameToUniform1v,t,e)&&this._context.gl.uniform1iv(this._getUniformLocation(t),e)}setUniform2iv(t,e){E(this._nameToUniform2,t,e)&&this._context.gl.uniform2iv(this._getUniformLocation(t),e)}setUniform3iv(t,e){E(this._nameToUniform3,t,e)&&this._context.gl.uniform3iv(this._getUniformLocation(t),e)}setUniform4iv(t,e){E(this._nameToUniform4,t,e)&&this._context.gl.uniform4iv(this._getUniformLocation(t),e)}setUniform1f(t,e){const r=this._nameToUniform1.get(t);r!==void 0&&e===r||(this._context.gl.uniform1f(this._getUniformLocation(t),e),this._nameToUniform1.set(t,e))}setUniform1fv(t,e){E(this._nameToUniform1v,t,e)&&this._context.gl.uniform1fv(this._getUniformLocation(t),e)}setUniform2f(t,e,r){const n=this._nameToUniform2.get(t);n===void 0?(this._context.gl.uniform2f(this._getUniformLocation(t),e,r),this._nameToUniform2.set(t,[e,r])):e===n[0]&&r===n[1]||(this._context.gl.uniform2f(this._getUniformLocation(t),e,r),n[0]=e,n[1]=r)}setUniform2fv(t,e){E(this._nameToUniform2,t,e)&&this._context.gl.uniform2fv(this._getUniformLocation(t),e)}setUniform3f(t,e,r,n){const o=this._nameToUniform3.get(t);o===void 0?(this._context.gl.uniform3f(this._getUniformLocation(t),e,r,n),this._nameToUniform3.set(t,[e,r,n])):e===o[0]&&r===o[1]&&n===o[2]||(this._context.gl.uniform3f(this._getUniformLocation(t),e,r,n),o[0]=e,o[1]=r,o[2]=n)}setUniform3fv(t,e){const r=this._getUniformLocation(t);r!=null&&E(this._nameToUniform3,t,e)&&this._context.gl.uniform3fv(r,e)}setUniform4f(t,e,r,n,o){const a=this._nameToUniform4.get(t);a===void 0?(this._context.gl.uniform4f(this._getUniformLocation(t),e,r,n,o),this._nameToUniform4.set(t,[e,r,n,o])):a!==void 0&&e===a[0]&&r===a[1]&&n===a[2]&&o===a[3]||(this._context.gl.uniform4f(this._getUniformLocation(t),e,r,n,o),a[0]=e,a[1]=r,a[2]=n,a[3]=o)}setUniform4fv(t,e){const r=this._getUniformLocation(t);r!=null&&E(this._nameToUniform4,t,e)&&this._context.gl.uniform4fv(r,e)}setUniformMatrix3fv(t,e,r=!1){const n=this._getUniformLocation(t);n!=null&&E(this._nameToUniformMatrix3,t,e)&&this._context.gl.uniformMatrix3fv(n,r,e)}setUniformMatrix4fv(t,e,r=!1){const n=this._getUniformLocation(t);n!=null&&E(this._nameToUniformMatrix4,t,e)&&this._context.gl.uniformMatrix4fv(n,r,e)}stop(){}}function rt(i,t,e){const r=i.gl,n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),L()&&!r.getShaderParameter(n,r.COMPILE_STATUS)&&(console.error("Compile error in ".concat(t===p.VERTEX_SHADER?"vertex":"fragment"," shader")),console.error(r.getShaderInfoLog(n)),console.error(Gt(e))),n}function Gt(i){let t=2;return i.replaceAll(`
`,()=>`
`+$t(t++)+":")}function $t(i){return i>=1e3?i.toString():("  "+i).slice(-3)}function E(i,t,e){const r=i.get(t);if(!r)return i.set(t,Array.from(e)),!0;const n=e.length;if(r.length!==n)return i.set(t,Array.from(e)),!0;for(let o=0;o<n;++o){const a=e[o];if(r[o]!==a){for(r[o]=a;o<n;++o)r[o]=e[o];return!0}}return!1}export{Et as i,Vt as r,V as s,G as x};
