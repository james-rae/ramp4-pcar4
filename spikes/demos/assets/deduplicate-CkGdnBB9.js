import{c1 as O}from"./main-Di-yv68k.js";import{i as R,t as L}from"./Indices-CAEb6ABY.js";function F(o,n,y){const e=Array.isArray(o),r=e?o.length/n:o.byteLength/(4*n),A=e?o:new Uint32Array(o,0,r*n),s=y?.minReduction??0,u=y?.originalIndices||null,q=u?u.length:0,i=y?.componentOffsets||null;let U=0;if(i)for(let t=0;t<i.length-1;t++){const c=i[t+1]-i[t];c>U&&(U=c)}else U=r;const m=Math.floor(1.1*U)+1;(a==null||a.length<2*m)&&(a=new Uint32Array(O(2*m)));for(let t=0;t<2*m;t++)a[t]=0;let f=0;const w=!!i&&!!u,b=w?q:r;let h=R(r);const p=new Uint32Array(q),k=1.96;let I=s!==0?Math.ceil(4*k*k/(s*s)*s*(1-s)):b,d=1,$=i?i[1]:b;for(let t=0;t<b;t++){if(t===I){const l=1-f/t;if(l+k*Math.sqrt(l*(1-l)/t)<s)return null;I*=2}if(t===$){for(let l=0;l<2*m;l++)a[l]=0;if(u)for(let l=i[d-1];l<i[d];l++)p[l]=h[u[l]];$=i[++d]}const c=w?u[t]:t,j=c*n,x=B(A,j,n);let g=x%m,C=f;for(;a[2*g+1]!==0;){if(a[2*g]===x){const l=a[2*g+1]-1;if(v(A,j,l*n,n)){C=h[l];break}}g++,g>=m&&(g-=m)}C===f&&(a[2*g]=x,a[2*g+1]=c+1,f++),h[c]=C}if(s!==0&&1-f/r<s)return null;if(w){for(let t=i[d-1];t<p.length;t++)p[t]=h[u[t]];h=L(p)}const M=e?new Array(f):new Uint32Array(f*n);f=0;for(let t=0;t<b;t++)h[t]===f&&(z(A,(w?u[t]:t)*n,M,f*n,n),f++);if(u&&!w){const t=new Uint32Array(q);for(let c=0;c<t.length;c++)t[c]=h[u[c]];h=L(t)}return{buffer:Array.isArray(M)?M:M.buffer,indices:h,uniqueCount:f}}function v(o,n,y,e){for(let r=0;r<e;r++)if(o[n+r]!==o[y+r])return!1;return!0}function z(o,n,y,e,r){for(let A=0;A<r;A++)y[e+A]=o[n+A]}function B(o,n,y){let e=0;for(let r=0;r<y;r++)e=o[n+r]+e|0,e=e+(e<<11)+(e>>>2)|0;return e>>>0}let a=null;export{F as e};
