import"./main-DaZH2qzH.js";function q(t,r,e){b(t.typedBuffer,r.typedBuffer,e,t.typedBufferStride,r.typedBufferStride)}function b(t,r,e,f=3,n=f){if(t.length/f!==Math.ceil(r.length/n))return t;const d=t.length/f,o=e[0],i=e[1],u=e[2],l=e[4],a=e[5],y=e[6],p=e[8],S=e[9],m=e[10],h=e[12],B=e[13],M=e[14];let c=0,s=0;for(let g=0;g<d;g++){const w=r[c],V=r[c+1],_=r[c+2];t[s]=o*w+l*V+p*_+h,t[s+1]=i*w+a*V+S*_+B,t[s+2]=u*w+y*V+m*_+M,c+=n,s+=f}return t}function v(t,r,e){z(t.typedBuffer,r.typedBuffer,e,t.typedBufferStride,r.typedBufferStride)}function z(t,r,e,f=3,n=f){if(t.length/f!==Math.ceil(r.length/n))return;const d=t.length/f,o=e[0],i=e[1],u=e[2],l=e[3],a=e[4],y=e[5],p=e[6],S=e[7],m=e[8];let h=0,B=0;for(let M=0;M<d;M++){const c=r[h],s=r[h+1],g=r[h+2];t[B]=o*c+l*s+p*g,t[B+1]=i*c+a*s+S*g,t[B+2]=u*c+y*s+m*g,h+=n,B+=f}}function x(t,r,e){j(t.typedBuffer,r.typedBuffer,e,t.typedBufferStride,r.typedBufferStride)}function j(t,r,e,f=3,n=f){const d=Math.min(t.length/f,r.length/n);let o=0,i=0;for(let u=0;u<d;u++)t[i]=e*r[o],t[i+1]=e*r[o+1],t[i+2]=e*r[o+2],o+=n,i+=f;return t}function P(t,r,e,f=3,n=f){const d=t.length/f;if(d!==Math.ceil(r.length/n))return t;let o=0,i=0;for(let u=0;u<d;u++)t[i]=r[o]+e[0],t[i+1]=r[o+1]+e[1],t[i+2]=r[o+2]+e[2],o+=n,i+=f;return t}function R(t,r){O(t.typedBuffer,r.typedBuffer,t.typedBufferStride,r.typedBufferStride)}function O(t,r,e=3,f=e){const n=Math.min(t.length/e,r.length/f);let d=0,o=0;for(let i=0;i<n;i++){const u=r[d],l=r[d+1],a=r[d+2],y=u*u+l*l+a*a;if(y>0){const p=1/Math.sqrt(y);t[o]=p*u,t[o+1]=p*l,t[o+2]=p*a}d+=f,o+=e}}function T(t,r,e){const f=Math.min(t.count,r.count),n=t.typedBuffer,d=t.typedBufferStride,o=r.typedBuffer,i=r.typedBufferStride;let u=0,l=0;for(let a=0;a<f;a++)n[l]=o[u]>>e,n[l+1]=o[u+1]>>e,n[l+2]=o[u+2]>>e,u+=i,l+=d}Object.freeze(Object.defineProperty({__proto__:null,normalize:O,normalizeView:R,scale:j,scaleView:x,shiftRight:T,transformMat3:z,transformMat3View:v,transformMat4:b,transformMat4View:q,translate:P},Symbol.toStringTag,{value:"Module"}));export{b as e,z as f,P as i,O as l,x as n,j as o,v as r,q as t,R as u};
