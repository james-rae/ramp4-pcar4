import{e8 as b,c1 as A,e9 as B,dx as H}from"./main-DZMdXZ8-.js";function j(t,i,a,s){if(t.type==="point")return t.x+=i,t.y+=a,t.hasZ&&s!=null&&(t.z+=s),t;if(t.type==="multipoint"){const y=t.points;for(let e=0;e<y.length;e++)y[e]=C(y[e],i,a,s);return t}if(t.type==="extent")return t.xmin+=i,t.xmax+=i,t.ymin+=a,t.ymax+=a,t;const m=b(t),n=t.type==="polyline"?t.paths:t.rings;for(let y=0;y<m.length;y++){const e=m[y];for(let x=0;x<e.length;x++)e[x]=C(e[x],i,a,s)}return"paths"in t?t.paths=n:t.rings=n,t}function J(t,i,a,s,m){const n=t.clone(),y=s.resolution;if(n.type==="point"){if(m)j(n,i*y,-a*y);else{const e=s.state.transform,x=s.state.inverseTransform,r=e[0]*n.x+e[2]*n.y+e[4],o=e[1]*n.x+e[3]*n.y+e[5];n.x=x[0]*(r+i)+x[2]*(o+a)+x[4],n.y=x[1]*(r+i)+x[3]*(o+a)+x[5]}return n}if(n.type==="multipoint"){if(m)j(n,i*y,-a*y);else{const e=n.points,x=s.state.transform,r=s.state.inverseTransform;for(let o=0;o<e.length;o++){const p=e[o],c=x[0]*p[0]+x[2]*p[1]+x[4],d=x[1]*p[0]+x[3]*p[1]+x[5],f=r[0]*(c+i)+r[2]*(d+a)+r[4],u=r[1]*(c+i)+r[3]*(d+a)+r[5];e[o]=z(p,f,u,void 0)}}return n}if(n.type==="extent"){if(m)j(n,i*y,-a*y);else{const e=s.state.transform,x=s.state.inverseTransform,r=e[0]*n.xmin+e[2]*n.ymin+e[4],o=e[1]*n.xmin+e[3]*n.ymin+e[5],p=e[0]*n.xmax+e[2]*n.ymax+e[4],c=e[1]*n.xmax+e[3]*n.ymax+e[5];n.xmin=x[0]*(r+i)+x[2]*(o+a)+x[4],n.ymin=x[1]*(r+i)+x[3]*(o+a)+x[5],n.xmax=x[0]*(p+i)+x[2]*(c+a)+x[4],n.ymax=x[1]*(p+i)+x[3]*(c+a)+x[5]}return n}if(m)j(n,i*y,-a*y);else{const e=b(n),x=n.type==="polyline"?n.paths:n.rings,r=s.state.transform,o=s.state.inverseTransform;for(let p=0;p<e.length;p++){const c=e[p];for(let d=0;d<c.length;d++){const f=c[d],u=r[0]*f[0]+r[2]*f[1]+r[4],h=r[1]*f[0]+r[3]*f[1]+r[5],v=o[0]*(u+i)+o[2]*(h+a)+o[4],g=o[1]*(u+i)+o[3]*(h+a)+o[5];c[d]=z(f,v,g,void 0)}}"paths"in n?n.paths=x:n.rings=x}return n}function K(t,i,a,s){if(t.type==="point"){const{x:f,y:u}=t,h=s?s[0]:f,v=s?s[1]:u,g=t.clone(),M=(f-h)*i+h,l=(u-v)*a+v;return g.x=M,g.y=l,g}if(t.type==="multipoint"){const f=b(t),u=A(),[h,v,g,M]=B(u,[f]),l=s?s[0]:(h+g)/2,T=s?s[1]:(M+v)/2,q=t.clone(),k=q.points;for(let Z=0;Z<k.length;Z++){const w=k[Z],[D,E]=w,F=(D-l)*i+l,G=(E-T)*a+T;k[Z]=z(w,F,G,void 0)}return q}if(t.type==="extent"){const{xmin:f,xmax:u,ymin:h,ymax:v}=t,g=s?s[0]:(f+u)/2,M=s?s[1]:(v+h)/2,l=t.clone();if(l.xmin=(f-g)*i+g,l.ymax=(v-M)*a+M,l.xmax=(u-g)*i+g,l.ymin=(h-M)*a+M,l.xmin>l.xmax){const T=l.xmin,q=l.xmax;l.xmin=q,l.xmax=T}if(l.ymin>l.ymax){const T=l.ymin,q=l.ymax;l.ymin=q,l.ymax=T}return l}const m=b(t),n=A(),[y,e,x,r]=B(n,m),o=s?s[0]:(y+x)/2,p=s?s[1]:(r+e)/2,c=t.clone(),d=c.type==="polyline"?c.paths:c.rings;for(let f=0;f<m.length;f++){const u=m[f];for(let h=0;h<u.length;h++){const v=u[h],[g,M]=v,l=(g-o)*i+o,T=(M-p)*a+p;d[f][h]=z(v,l,T,void 0)}}return"paths"in c?c.paths=d:c.rings=d,c}function L(t,i,a,s,m,n){const y=Math.sqrt((a-t)*(a-t)+(s-i)*(s-i));return Math.sqrt((m-t)*(m-t)+(n-i)*(n-i))/y}function N(t,i,a,s=!1){const m=Math.atan2(i.y-a.y,i.x-a.x)-Math.atan2(t.y-a.y,t.x-a.x),n=Math.atan2(Math.sin(m),Math.cos(m));return s?n:H(n)}function C(t,i,a,s){return z(t,t[0]+i,t[1]+a,t[2]!=null&&s!=null?t[2]+s:void 0)}function z(t,i,a,s){const m=[i,a];return t.length>2&&m.push(s??t[2]),t.length>3&&m.push(t[3]),m}export{L as a,J as i,N as m,K as s};
