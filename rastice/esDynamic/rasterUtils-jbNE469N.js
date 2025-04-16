import{a as E}from"./vec2f64-CeODonrJ.js";import{P as C,U as A,L as _,D as T,o as i,G as d}from"./enums-DBi1-Mm2.js";import{p as h,m as O}from"./Texture-CvjAURAn.js";function L(a,t,e="nearest",s=!1){const n=!(s&&t.pixelType==="u8"),o=n?A.FLOAT:A.UNSIGNED_BYTE,u=t.pixels==null||t.pixels.length===0?null:n?t.getAsRGBAFloat():t.getAsRGBA(),f=a.capabilities.textureFloatLinear,r=new h;return r.width=t.width,r.height=t.height,r.internalFormat=n?C.RGBA32F:d.RGBA,r.samplingMode=!f||e!=="bilinear"&&e!=="cubic"?_.NEAREST:_.LINEAR,r.dataType=o,r.wrapMode=T.CLAMP_TO_EDGE,new O(a,r,u)}function M(a,t){const{spacing:e,offsets:s,coefficients:n,size:[o,u]}=t,f=e[0]>1,r=new h;r.width=f?4*o:o,r.height=u,r.internalFormat=C.RGBA32F,r.dataType=A.FLOAT,r.samplingMode=_.NEAREST,r.wrapMode=T.CLAMP_TO_EDGE;const l=new Float32Array(f?o*u*16:2*s.length);if(f&&n!=null)for(let c=0,m=0;c<n.length;c++)l[m++]=n[c],c%3==2&&(l[m++]=1);else for(let c=0;c<u;c++)for(let m=0;m<o;m++){const g=4*(c*o+m),p=2*(m*u+c);l[g]=s[p],l[g+1]=s[p+1],l[g+3]=s[p]===-1?0:1}return new O(a,r,l)}function U(a,t){const e=new h;return e.internalFormat=d.RGBA,e.width=t.length/4,e.height=1,e.samplingMode=_.NEAREST,e.wrapMode=T.CLAMP_TO_EDGE,new O(a,e,t)}function b(a,t,e,s=1,n=!0){return{u_flipY:n,u_applyTransform:!!a,u_opacity:s,u_transformSpacing:a?a.spacing:E,u_transformGridSize:a?a.size:E,u_targetImageSize:t,u_srcImageSize:e}}function w(a,t){return{u_colormapOffset:t||0,u_colormapMaxIndex:a?a.length/4-1:0}}function F(a,t){return{u_scale:a,u_offset:t}}function x(a){return{u_bandCount:a.bandCount,u_minOutput:a.outMin,u_maxOutput:a.outMax,u_minCutOff:a.minCutOff,u_maxCutOff:a.maxCutOff,u_factor:a.factor,u_useGamma:a.useGamma,u_gamma:a.gamma,u_gammaCorrection:a.gammaCorrection}}function G(a){return{u_hillshadeType:a.hillshadeType,u_sinZcosAs:a.sinZcosAs,u_sinZsinAs:a.sinZsinAs,u_cosZs:a.cosZs,u_weights:a.weights,u_factor:a.factor,u_minValue:a.minValue,u_maxValue:a.maxValue}}function V(a,t){const e=a.gl,s=t.glName,n=new Map;if(s==null)return n;const o=e.getProgramParameter(s,e.ACTIVE_UNIFORMS);let u;for(let f=0;f<o;f++)u=e.getActiveUniform(s,f),u&&n.set(u.name,{location:e.getUniformLocation(s,u.name),info:u});return n}function k(a,t,e){Object.keys(e).forEach(s=>{const n=t.get(s)||t.get(s+"[0]");n&&v(a,s,e[s],n)})}function N(a,t,e,s){e.length===s.length&&(s.some(n=>n==null)||e.some(n=>n==null)||e.forEach((n,o)=>{t.setUniform1i(n,o),a.bindTexture(s[o],o)}))}function v(a,t,e,s){if(s===null||e==null)return!1;const{info:n}=s;switch(n.type){case i.FLOAT:n.size>1?a.setUniform1fv(t,e):a.setUniform1f(t,e);break;case i.FLOAT_VEC2:a.setUniform2fv(t,e);break;case i.FLOAT_VEC3:a.setUniform3fv(t,e);break;case i.FLOAT_VEC4:a.setUniform4fv(t,e);break;case i.FLOAT_MAT3:a.setUniformMatrix3fv(t,e);break;case i.FLOAT_MAT4:a.setUniformMatrix4fv(t,e);break;case i.INT:n.size>1?a.setUniform1iv(t,e):a.setUniform1i(t,e);break;case i.BOOL:a.setUniform1i(t,e?1:0);break;case i.INT_VEC2:case i.BOOL_VEC2:a.setUniform2iv(t,e);break;case i.INT_VEC3:case i.BOOL_VEC3:a.setUniform3iv(t,e);break;case i.INT_VEC4:case i.BOOL_VEC4:a.setUniform4iv(t,e);break;default:return!1}return!0}export{G as A,N as O,V as T,w as _,M as c,L as f,F as g,k as h,b as l,U as m,x as p};
