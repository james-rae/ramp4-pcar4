import{b_ as _}from"./main-yxqK2SuK.js";import{i as j,t as R}from"./Indices-CjU0NZVN.js";function v(f,r,c){const n=Array.isArray(f),e=n?f.length/r:f.byteLength/(4*r),h=n?f:new Uint32Array(f,0,e*r),g=c?.minReduction??0,s=c?.originalIndices||null,q=s?s.length:0,o=c?.componentOffsets||null;let b=0;if(o)for(let t=0;t<o.length-1;t++){const u=o[t+1]-o[t];u>b&&(b=u)}else b=e;const m=Math.floor(1.1*b)+1;(a==null||a.length<2*m)&&(a=new Uint32Array(_(2*m)));for(let t=0;t<2*m;t++)a[t]=0;let i=0;const w=!!o&&!!s,U=w?q:e;let A=j(e);const p=new Uint32Array(q),k=1.96;let I=g!==0?Math.ceil(4*k*k/(g*g)*g*(1-g)):U,d=1,L=o?o[1]:U;for(let t=0;t<U;t++){if(t===I){const l=1-i/t;if(l+k*Math.sqrt(l*(1-l)/t)<g)return null;I*=2}if(t===L){for(let l=0;l<2*m;l++)a[l]=0;if(s)for(let l=o[d-1];l<o[d];l++)p[l]=A[s[l]];L=o[++d]}const u=w?s[t]:t,O=u*r,x=$(h,O,r);let y=x%m,C=i;for(;a[2*y+1]!==0;){if(a[2*y]===x){const l=a[2*y+1]-1;if(z(h,O,l*r,r)){C=A[l];break}}y++,y>=m&&(y-=m)}C===i&&(a[2*y]=x,a[2*y+1]=u+1,i++),A[u]=C}if(g!==0&&1-i/e<g)return null;if(w){for(let t=o[d-1];t<p.length;t++)p[t]=A[s[t]];A=R(p)}const M=n?new Array(i):new Uint32Array(i*r);i=0;for(let t=0;t<U;t++)A[t]===i&&(E(h,(w?s[t]:t)*r,M,i*r,r),i++);if(s&&!w){const t=new Uint32Array(q);for(let u=0;u<t.length;u++)t[u]=A[s[u]];A=R(t)}return{buffer:Array.isArray(M)?M:M.buffer,indices:A,uniqueCount:i}}function z(f,r,c,n){for(let e=0;e<n;e++)if(f[r+e]!==f[c+e])return!1;return!0}function E(f,r,c,n,e){for(let h=0;h<e;h++)c[n+h]=f[r+h]}function $(f,r,c){let n=0;for(let e=0;e<c;e++)n=f[r+e]+n|0,n=n+(n<<11)+(n>>>2)|0;return n>>>0}let a=null;export{v as e};
