import{i as M,e as Y}from"./memoryEstimations-voPyBrEL.js";function S(n,t){return n?t?4:3:t?3:2}function A(n,t,e,o){if(!t?.lengths.length)return null;n.lengths.length&&(n.lengths.length=0),n.coords.length&&(n.coords.length=0);const s=n.coords,r=[],h=e?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:i,coords:c}=t,g=S(e,o);let N=0;for(const l of i){const u=P(h,c,N,l,e,o);u&&r.push(u),N+=l*g}if(r.sort((l,u)=>{let a=l[2]-u[2];return a===0&&e&&(a=l[4]-u[4]),a}),r.length){let l=6*r[0][2];s[0]=r[0][0]/l,s[1]=r[0][1]/l,e&&(l=6*r[0][4],s[2]=l!==0?r[0][3]/l:0),(s[0]<h[0]||s[0]>h[1]||s[1]<h[2]||s[1]>h[3]||e&&(s[2]<h[4]||s[2]>h[5]))&&(s.length=0)}if(!s.length){const l=t.lengths[0]?G(c,0,i[0],e,o):null;if(!l)return null;s[0]=l[0],s[1]=l[1],e&&l.length>2&&(s[2]=l[2])}return n}function P(n,t,e,o,s,r){const h=S(s,r);let i=e,c=e+h,g=0,N=0,l=0,u=0,a=0;for(let b=0,O=o-1;b<O;b++,i+=h,c+=h){const I=t[i],d=t[i+1],T=t[i+2],f=t[c],y=t[c+1],p=t[c+2];let V=I*y-f*d;u+=V,g+=(I+f)*V,N+=(d+y)*V,s&&(V=I*p-f*T,l+=(T+p)*V,a+=V),I<n[0]&&(n[0]=I),I>n[1]&&(n[1]=I),d<n[2]&&(n[2]=d),d>n[3]&&(n[3]=d),s&&(T<n[4]&&(n[4]=T),T>n[5]&&(n[5]=T))}if(u>0&&(u*=-1),a>0&&(a*=-1),!u)return null;const E=[g,N,.5*u];return s&&(E[3]=l,E[4]=.5*a),E}function G(n,t,e,o,s){const r=S(o,s);let h=t,i=t+r,c=0,g=0,N=0,l=0;for(let u=0,a=e-1;u<a;u++,h+=r,i+=r){const E=n[h],b=n[h+1],O=n[h+2],I=n[i],d=n[i+1],T=n[i+2],f=o?x(E,b,O,I,d,T):j(E,b,I,d);if(f)if(c+=f,o){const y=C(E,b,O,I,d,T);g+=f*y[0],N+=f*y[1],l+=f*y[2]}else{const y=J(E,b,I,d);g+=f*y[0],N+=f*y[1]}}return c>0?o?[g/c,N/c,l/c]:[g/c,N/c]:e>0?o?[n[t],n[t+1],n[t+2]]:[n[t],n[t+1]]:null}function j(n,t,e,o){const s=e-n,r=o-t;return Math.sqrt(s*s+r*r)}function x(n,t,e,o,s,r){const h=o-n,i=s-t,c=r-e;return Math.sqrt(h*h+i*i+c*c)}function J(n,t,e,o){return[n+.5*(e-n),t+.5*(o-t)]}function C(n,t,e,o,s,r){return[n+.5*(o-n),t+.5*(s-t),e+.5*(r-e)]}const F=2;class m{constructor(t=[],e=[]){this.lengths=t??[],this.coords=e??[]}static fromJSON(t){return new m(t.lengths,t.coords)}static fromRect(t){const[e,o,s,r]=t,h=s-e,i=r-o;return new m([5],[e,o,h,0,0,i,-h,0,0,-i])}get isPoint(){return this.lengths.length===0&&this.coords.length>=2}get maxLength(){return Math.max(...this.lengths)}get size(){return this.lengths.reduce((t,e)=>t+e)}get usedMemory(){return 64+M(this.lengths,this.coords)}area(){let t=0,e=0;if(!this.lengths.length)return 0;for(let o=0;o<this.lengths.length;o++){const s=this.lengths[o];if(s<3)continue;let r=this.coords[F*e],h=this.coords[F*e+1];for(let i=1;i<s;i+=1){const c=this.coords[F*(i+e)],g=this.coords[F*(i+e)+1];t+=-.5*(c-r)*(g+h),r=c,h=g}e+=s}return t}forEachVertex(t){let e=0;this.lengths.length||t(this.coords[0],this.coords[1]);for(let o=0;o<this.lengths.length;o++){const s=this.lengths[o];for(let r=0;r<s;r++)t(this.coords[F*(r+e)],this.coords[F*(r+e)+1]);e+=s}}deltaDecode(){const t=this.clone(),{coords:e,lengths:o}=t;let s=0;for(const r of o){for(let h=1;h<r;h++)e[2*(s+h)]+=e[2*(s+h)-2],e[2*(s+h)+1]+=e[2*(s+h)-1];s+=r}return t}clone(t){if(this.lengths.length===0)return new m([],[this.coords[0],this.coords[1]]);const e=(this.lengths.length===0?1:this.lengths.reduce((s,r)=>s+r))*F,o=this.coords.slice(0,e);return t?(t.set(o),new m(this.lengths,t)):new m(Array.from(this.lengths),Array.from(o))}}class w{constructor(t=null,e={},o,s,r=0){this.geometry=t,this.attributes=e,this.centroid=o,this.objectId=s,this.displayId=r}static fromJSON(t){const e=t.geometry?m.fromJSON(t.geometry):null,o=t.centroid?m.fromJSON(t.centroid):null,s=t.objectId;return new w(e,t.attributes,o,s)}weakClone(){const t=new w(this.geometry,this.attributes,this.centroid,this.objectId);return t.displayId=this.displayId,t}clone(){const t=this.geometry?.clone(),e=new w(t,{...this.attributes},this.centroid?.clone(),this.objectId);return e.displayId=this.displayId,e}ensureCentroid(t){return this.centroid??=A(new m,this.geometry,t.hasZ,t.hasM),this.centroid}get usedMemory(){return 128+Y(this.attributes)+(this.geometry?.usedMemory??0)}}function q(n){return!!n.geometry?.coords?.length}export{m as e,A as n,q as o,w as s};
