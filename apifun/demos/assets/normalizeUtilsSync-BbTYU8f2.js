import{c4 as j,bU as z,J,cx as X,ai as $,al as N,cy as R,aj as U,ak as k,cz as q,cA as B}from"./main-CcTJZah4.js";import{r as S,s as D,i as p}from"./normalizeUtilsCommon-DsrTeGXA.js";function V(n){return M(n,!0)}function W(n){return M(n,!1)}function M(n,s){if(n==null)return null;const t=n.spatialReference,i=z(t),e=J.isSerializable(n)?n.toJSON():n;if(!i)return e;const h=X(t)?102100:4326,u=S[h].maxX,m=S[h].minX;if($(e))return T(e,u,m);if(N(e))return e.points=e.points.map(o=>T(o,u,m)),e;if(R(e))return E(e,i);if(U(e)||k(e)){const o=q(G,e),r={xmin:o[0],ymin:o[1],xmax:o[2],ymax:o[3]},x=p(r.xmin,m)*(2*u),_=x===0?e:D(e,x);return r.xmin+=x,r.xmax+=x,r.xmax>u?L(_,u,s):r.xmin<m?L(_,m,s):_}return e}function E(n,s){if(!s)return n;const t=F(n,s).map(i=>i.extent);return t.length<2?t[0]||n:t.length>2?(n.xmin=s.valid[0],n.xmax=s.valid[1],n):{rings:t.map(i=>[[i.xmin,i.ymin],[i.xmin,i.ymax],[i.xmax,i.ymax],[i.xmax,i.ymin],[i.xmin,i.ymin]])}}function T(n,s,t){if(Array.isArray(n)){const i=n[0];if(i>s){const e=p(i,s);n[0]=i+e*(-2*s)}else if(i<t){const e=p(i,t);n[0]=i+e*(-2*t)}}else{const i=n.x;if(i>s){const e=p(i,s);n.x+=e*(-2*s)}else if(i<t){const e=p(i,t);n.x+=e*(-2*t)}}return n}function F(n,s){const t=[],{ymin:i,ymax:e,xmin:h,xmax:u}=n,m=n.xmax-n.xmin,[o,r]=s.valid,{x,frameId:_}=w(n.xmin,s),{x:a,frameId:c}=w(n.xmax,s),A=x===a&&m>0;if(m>2*r){const v={xmin:h<u?x:a,ymin:i,xmax:r,ymax:e},O={xmin:o,ymin:i,xmax:h<u?a:x,ymax:e},C={xmin:0,ymin:i,xmax:r,ymax:e},P={xmin:o,ymin:i,xmax:0,ymax:e},f=[],y=[];I(v,C)&&f.push(_),I(v,P)&&y.push(_),I(O,C)&&f.push(c),I(O,P)&&y.push(c);for(let d=_+1;d<c;d++)f.push(d),y.push(d);t.push(new l(v,[_]),new l(O,[c]),new l(C,f),new l(P,y))}else x>a||A?t.push(new l({xmin:x,ymin:i,xmax:r,ymax:e},[_]),new l({xmin:o,ymin:i,xmax:a,ymax:e},[c])):t.push(new l({xmin:x,ymin:i,xmax:a,ymax:e},[_]));return t}function w(n,s){const[t,i]=s.valid,e=2*i;let h,u=0;return n>i?(h=Math.ceil(Math.abs(n-i)/e),n-=h*e,u=h):n<t&&(h=Math.ceil(Math.abs(n-t)/e),n+=h*e,u=-h),{x:n,frameId:u}}function I(n,s){const{xmin:t,ymin:i,xmax:e,ymax:h}=s;return g(n,t,i)&&g(n,t,h)&&g(n,e,h)&&g(n,e,i)}function g(n,s,t){return s>=n.xmin&&s<=n.xmax&&t>=n.ymin&&t<=n.ymax}function L(n,s,t=!0){const i=!k(n);if(i&&B(n),t)return new H().cut(n,s);const e=i?n.rings:n.paths,h=i?4:2,u=e.length,m=-2*s;for(let o=0;o<u;o++){const r=e[o];if(r&&r.length>=h){const x=[];for(const _ of r)x.push([_[0]+m,_[1]]);e.push(x)}}return i?n.rings=e:n.paths=e,n}class l{constructor(s,t){this.extent=s,this.frameIds=t}}const G=j();class H{constructor(){this._linesIn=[],this._linesOut=[]}cut(s,t){let i;if(this._xCut=t,s.rings)this._closed=!0,i=s.rings,this._minPts=4;else{if(!s.paths)return null;this._closed=!1,i=s.paths,this._minPts=2}for(const h of i){if(!h||h.length<this._minPts)continue;let u=!0;for(const m of h)u?(this.moveTo(m),u=!1):this.lineTo(m);this._closed&&this.close()}this._pushLineIn(),this._pushLineOut(),i=[];for(const h of this._linesIn)h&&h.length>=this._minPts&&i.push(h);const e=-2*this._xCut;for(const h of this._linesOut)if(h&&h.length>=this._minPts){for(const u of h)u[0]+=e;i.push(h)}return this._closed?s.rings=i:s.paths=i,s}moveTo(s){this._pushLineIn(),this._pushLineOut(),this._prevSide=this._side(s[0]),this._moveTo(s[0],s[1],this._prevSide),this._prevPt=s,this._firstPt=s}lineTo(s){const t=this._side(s[0]);if(t*this._prevSide==-1){const i=this._intersect(this._prevPt,s);this._lineTo(this._xCut,i,0),this._prevSide=0,this._lineTo(s[0],s[1],t)}else this._lineTo(s[0],s[1],t);this._prevSide=t,this._prevPt=s}close(){const s=this._firstPt,t=this._prevPt;s[0]===t[0]&&s[1]===t[1]||this.lineTo(s),this._checkClosingPt(this._lineIn),this._checkClosingPt(this._lineOut)}_moveTo(s,t,i){this._closed?(this._lineIn.push([i<=0?s:this._xCut,t]),this._lineOut.push([i>=0?s:this._xCut,t])):(i<=0&&this._lineIn.push([s,t]),i>=0&&this._lineOut.push([s,t]))}_lineTo(s,t,i){this._closed?(b(this._lineIn,i<=0?s:this._xCut,t),b(this._lineOut,i>=0?s:this._xCut,t)):i<0?(this._prevSide===0&&this._pushLineOut(),this._lineIn.push([s,t])):i>0?(this._prevSide===0&&this._pushLineIn(),this._lineOut.push([s,t])):this._prevSide<0?(this._lineIn.push([s,t]),this._lineOut.push([s,t])):this._prevSide>0&&(this._lineOut.push([s,t]),this._lineIn.push([s,t]))}_checkClosingPt(s){const t=s.length;t>3&&s[0][0]===this._xCut&&s[t-2][0]===this._xCut&&s[1][0]===this._xCut&&(s[0][1]=s[t-2][1],s.pop())}_side(s){return s<this._xCut?-1:s>this._xCut?1:0}_intersect(s,t){const i=(this._xCut-s[0])/(t[0]-s[0]);return s[1]+i*(t[1]-s[1])}_pushLineIn(){this._lineIn&&this._lineIn.length>=this._minPts&&this._linesIn.push(this._lineIn),this._lineIn=[]}_pushLineOut(){this._lineOut&&this._lineOut.length>=this._minPts&&this._linesOut.push(this._lineOut),this._lineOut=[]}}function b(n,s,t){const i=n.length;i>1&&n[i-1][0]===s&&n[i-2][0]===s?n[i-1][1]=t:n.push([s,t])}export{W as a,V as p};
