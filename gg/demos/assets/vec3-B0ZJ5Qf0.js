import{cj as G}from"./main-BnINupoD.js";function O(t,n,e){b(t.typedBuffer,n.typedBuffer,e,t.typedBufferStride,n.typedBufferStride)}function b(t,n,e,f=3,l=f){if(t.length/f!==Math.ceil(n.length/l))return t;const r=t.length/f,o=e[0],u=e[1],i=e[2],d=e[4],c=e[5],B=e[6],y=e[8],M=e[9],m=e[10],s=e[12],h=e[13],S=e[14];let a=0,p=0;for(let g=0;g<r;g++){const w=n[a],V=n[a+1],_=n[a+2];t[p]=o*w+d*V+y*_+s,t[p+1]=u*w+c*V+M*_+h,t[p+2]=i*w+B*V+m*_+S,a+=l,p+=f}return t}function q(t,n,e){j(t.typedBuffer,n.typedBuffer,e,t.typedBufferStride,n.typedBufferStride)}function j(t,n,e,f=3,l=f){if(t.length/f!==Math.ceil(n.length/l))return;const r=t.length/f,o=e[0],u=e[1],i=e[2],d=e[3],c=e[4],B=e[5],y=e[6],M=e[7],m=e[8];let s=0,h=0;for(let S=0;S<r;S++){const a=n[s],p=n[s+1],g=n[s+2];t[h]=o*a+d*p+y*g,t[h+1]=u*a+c*p+M*g,t[h+2]=i*a+B*p+m*g,s+=l,h+=f}}function v(t,n,e){z(t.typedBuffer,n.typedBuffer,e,t.typedBufferStride,n.typedBufferStride)}function z(t,n,e,f=3,l=f){const r=Math.min(t.length/f,n.length/l);let o=0,u=0;for(let i=0;i<r;i++)t[u]=e*n[o],t[u+1]=e*n[o+1],t[u+2]=e*n[o+2],o+=l,u+=f;return t}function x(t,n,e,f){R(t.typedBuffer,n.typedBuffer,e,f,t.typedBufferStride,n.typedBufferStride)}function R(t,n,e,f,l=3,r=l){const o=Math.min(t.length/l,n.length/r);let u=0,i=0;const d=1/G;for(let c=0;c<o;c++)t[i]=f*(e*n[u])**d,t[i+1]=f*(e*n[u+1])**d,t[i+2]=f*(e*n[u+2])**d,u+=r,i+=l}function P(t,n,e,f=3,l=f){const r=t.length/f;if(r!==Math.ceil(n.length/l))return t;let o=0,u=0;for(let i=0;i<r;i++)t[u]=n[o]+e[0],t[u+1]=n[o+1]+e[1],t[u+2]=n[o+2]+e[2],o+=l,u+=f;return t}function k(t,n){T(t.typedBuffer,n.typedBuffer,t.typedBufferStride,n.typedBufferStride)}function T(t,n,e=3,f=e){const l=Math.min(t.length/e,n.length/f);let r=0,o=0;for(let u=0;u<l;u++){const i=n[r],d=n[r+1],c=n[r+2],B=i*i+d*d+c*c;if(B>0){const y=1/Math.sqrt(B);t[o]=y*i,t[o+1]=y*d,t[o+2]=y*c}r+=f,o+=e}}function A(t,n,e){const f=Math.min(t.count,n.count),l=t.typedBuffer,r=t.typedBufferStride,o=n.typedBuffer,u=n.typedBufferStride;let i=0,d=0;for(let c=0;c<f;c++)l[d]=o[i]>>e,l[d+1]=o[i+1]>>e,l[d+2]=o[i+2]>>e,i+=u,d+=r}Object.freeze(Object.defineProperty({__proto__:null,linearToSRGB:R,linearToSRGBView:x,normalize:T,normalizeView:k,scale:z,scaleView:v,shiftRight:A,transformMat3:j,transformMat3View:q,transformMat4:b,transformMat4View:O,translate:P},Symbol.toStringTag,{value:"Module"}));export{P as a,T as d,O as e,q as f,R as l,j as n,b as r,k as s,x as u};
