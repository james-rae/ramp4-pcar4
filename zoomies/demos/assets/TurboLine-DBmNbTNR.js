const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./libtess-asm-4lwU9uXx.js","./_commonjsHelpers-DCkdB7M8.js","./libtess-BccfC5lw.js"])))=>i.map(i=>d[i]);
import{_ as wt}from"./preload-helper-ExcqyqRp.js";import{b1 as bt,eN as pt}from"./main-vIJpOdvB.js";import{e as I,n as D}from"./enums-CmIX1y88.js";import{R as Rt}from"./definitions-C0Jy3zs7.js";const Mt=128e3;let dt=null,gt=null;async function Pt(){return dt||(dt=Ut()),dt}async function Ut(){gt=await(bt("esri-csp-restrictions")?await wt(()=>import("./libtess-asm-4lwU9uXx.js"),__vite__mapDeps([0,1]),import.meta.url).then(i=>i.l):await wt(()=>import("./libtess-BccfC5lw.js"),__vite__mapDeps([2,1]),import.meta.url).then(i=>i.l)).default({locateFile:i=>pt(`esri/core/libs/libtess/${i}`)})}function St(r,i){const x=Math.max(r.length,Mt);return gt.triangulate(r,i,x)}function Vt(r,i){return r.x===i.x&&r.y===i.y}function kt(r){if(!r)return;const i=r.length;if(i<=1)return;let x=0;for(let f=1;f<i;f++)Vt(r[f],r[x])||++x===f||(r[x]=r[f]);r.length=x+1}function k(r,i){return r.x=i.y,r.y=-i.x,r}function p(r,i){return r.x=-i.y,r.y=i.x,r}function Tt(r,i){return r.x=i.x,r.y=i.y,r}function ft(r,i){return r.x=-i.x,r.y=-i.y,r}function vt(r){return Math.sqrt(r.x*r.x+r.y*r.y)}function Bt(r,i){return r.x*i.y-r.y*i.x}function mt(r,i){return r.x*i.x+r.y*i.y}function et(r,i,x,f){return r.x=i.x*x+i.y*f,r.y=i.x*f-i.y*x,r}class It{constructor(i,x,f){this._writeVertex=i,this._writeTriangle=x,this._canUseThinTessellation=f,this._prevNormal={x:void 0,y:void 0},this._nextNormal={x:void 0,y:void 0},this._textureNormalLeft={x:0,y:1},this._textureNormalRight={x:0,y:-1},this._textureNormal={x:void 0,y:void 0},this._joinNormal={x:void 0,y:void 0},this._inner={x:void 0,y:void 0},this._outer={x:void 0,y:void 0},this._roundStart={x:void 0,y:void 0},this._roundEnd={x:void 0,y:void 0},this._startBreak={x:void 0,y:void 0},this._endBreak={x:void 0,y:void 0},this._innerPrev={x:void 0,y:void 0},this._innerNext={x:void 0,y:void 0},this._bevelStart={x:void 0,y:void 0},this._bevelEnd={x:void 0,y:void 0},this._bevelMiddle={x:void 0,y:void 0}}tessellate(i,x,f=this._canUseThinTessellation){kt(i),f&&x.halfWidth<Rt&&!x.offset?this._tessellateThin(i,x):this._tessellate(i,x)}_tessellateThin(i,x){if(i.length<2)return;const f=x.wrapDistance||65535;let N=x.initialDistance||0,$=!1,C=i[0].x,F=i[0].y;const B=i.length;for(let j=1;j<B;++j){$&&($=!1,N=0);let W=i[j].x,X=i[j].y,b=W-C,v=X-F,T=Math.sqrt(b*b+v*v);if(b/=T,v/=T,N+T>f){$=!0;const t=(f-N)/T;T=f-N,W=(1-t)*C+t*W,X=(1-t)*F+t*X,--j}const o=this._writeVertex(C,F,0,0,b,v,v,-b,0,-1,N),y=this._writeVertex(C,F,0,0,b,v,-v,b,0,1,N);N+=T;const G=this._writeVertex(W,X,0,0,b,v,v,-b,0,-1,N),e=this._writeVertex(W,X,0,0,b,v,-v,b,0,1,N);this._writeTriangle(o,y,G),this._writeTriangle(y,G,e),C=W,F=X}}_tessellate(i,x){const f=i[0],N=i[i.length-1],$=Vt(f,N),C=$?3:2;if(i.length<C)return;const F=x.pixelCoordRatio,B=x.capType!=null?x.capType:I.BUTT,j=x.joinType!=null?x.joinType:D.MITER,W=x.miterLimit!=null?Math.min(x.miterLimit,4):2,X=x.roundLimit!=null?Math.min(x.roundLimit,1.05):1.05,b=x.halfWidth!=null?x.halfWidth:2,v=!!x.textured;let T,o,y,G=null;const e=this._prevNormal,t=this._nextNormal;let K=-1,Q=-1;const s=this._joinNormal;let _,c;const xt=this._textureNormalLeft,nt=this._textureNormalRight,w=this._textureNormal;let u=-1,l=-1;const _t=x.wrapDistance||65535;let h=x.initialDistance||0;const Et=this._writeVertex,Nt=this._writeTriangle,d=(R,st,H,g,L,A)=>{const O=Et(o,y,_,c,H,g,R,st,L,A,h);return u>=0&&l>=0&&O>=0&&Nt(u,l,O),u=l,l=O,O};$&&(T=i[i.length-2],t.x=N.x-T.x,t.y=N.y-T.y,Q=vt(t),t.x/=Q,t.y/=Q);let Y=!1;for(let R=0;R<i.length;++R){if(Y&&(Y=!1,h=0),T&&(e.x=-t.x,e.y=-t.y,K=Q,h+K>_t&&(Y=!0)),Y){const n=(_t-h)/K;K=_t-h,T={x:(1-n)*T.x+n*i[R].x,y:(1-n)*T.y+n*i[R].y},--R}else T=i[R];o=T.x,y=T.y;const st=R<=0&&!Y,H=R===i.length-1;if(st||(h+=K),G=H?$?i[1]:null:i[R+1],G?(t.x=G.x-o,t.y=G.y-y,Q=vt(t),t.x/=Q,t.y/=Q):(t.x=void 0,t.y=void 0),!$){if(st){p(s,t),_=s.x,c=s.y,B===I.SQUARE&&(d(-t.y-t.x,t.x-t.y,t.x,t.y,0,-1),d(t.y-t.x,-t.x-t.y,t.x,t.y,0,1)),B===I.ROUND&&(d(-t.y-t.x,t.x-t.y,t.x,t.y,-1,-1),d(t.y-t.x,-t.x-t.y,t.x,t.y,-1,1)),B!==I.ROUND&&B!==I.BUTT||(d(-t.y,t.x,t.x,t.y,0,-1),d(t.y,-t.x,t.x,t.y,0,1));continue}if(H){k(s,e),_=s.x,c=s.y,B!==I.ROUND&&B!==I.BUTT||(d(e.y,-e.x,-e.x,-e.y,0,-1),d(-e.y,e.x,-e.x,-e.y,0,1)),B===I.SQUARE&&(d(e.y-e.x,-e.x-e.y,-e.x,-e.y,0,-1),d(-e.y-e.x,e.x-e.y,-e.x,-e.y,0,1)),B===I.ROUND&&(d(e.y-e.x,-e.x-e.y,-e.x,-e.y,1,-1),d(-e.y-e.x,e.x-e.y,-e.x,-e.y,1,1));continue}}let g,L,A=-Bt(e,t);if(Math.abs(A)<.01)mt(e,t)>0?(s.x=e.x,s.y=e.y,A=1,g=Number.MAX_VALUE,L=!0):(p(s,t),A=1,g=1,L=!1);else{s.x=(e.x+t.x)/A,s.y=(e.y+t.y)/A,g=vt(s);const n=(g-1)*b*F;L=g>4||n>K&&n>Q}_=s.x,c=s.y;let O=j;switch(j){case D.BEVEL:g<1.05&&(O=D.MITER);break;case D.ROUND:g<X&&(O=D.MITER);break;case D.MITER:g>W&&(O=D.BEVEL)}switch(O){case D.MITER:if(d(s.x,s.y,-e.x,-e.y,0,-1),d(-s.x,-s.y,-e.x,-e.y,0,1),H)break;if(v){const n=Y?0:h;u=this._writeVertex(o,y,_,c,t.x,t.y,s.x,s.y,0,-1,n),l=this._writeVertex(o,y,_,c,t.x,t.y,-s.x,-s.y,0,1,n)}break;case D.BEVEL:{const n=A<0;let m,V,q,M;if(n){const a=u;u=l,l=a,m=xt,V=nt}else m=nt,V=xt;if(L)q=n?p(this._innerPrev,e):k(this._innerPrev,e),M=n?k(this._innerNext,t):p(this._innerNext,t);else{const a=n?ft(this._inner,s):Tt(this._inner,s);q=a,M=a}const U=n?k(this._bevelStart,e):p(this._bevelStart,e);d(q.x,q.y,-e.x,-e.y,m.x,m.y);const yt=d(U.x,U.y,-e.x,-e.y,V.x,V.y);if(H)break;const P=n?p(this._bevelEnd,t):k(this._bevelEnd,t);if(L){const a=this._writeVertex(o,y,_,c,-e.x,-e.y,0,0,0,0,h);u=this._writeVertex(o,y,_,c,t.x,t.y,M.x,M.y,m.x,m.y,h),l=this._writeVertex(o,y,_,c,t.x,t.y,P.x,P.y,V.x,V.y,h),this._writeTriangle(yt,a,l)}else{if(v){const a=this._bevelMiddle;a.x=(U.x+P.x)/2,a.y=(U.y+P.y)/2,et(w,a,-e.x,-e.y),d(a.x,a.y,-e.x,-e.y,w.x,w.y),et(w,a,t.x,t.y),u=this._writeVertex(o,y,_,c,t.x,t.y,a.x,a.y,w.x,w.y,h),l=this._writeVertex(o,y,_,c,t.x,t.y,M.x,M.y,m.x,m.y,h)}else{const a=u;u=l,l=a}d(P.x,P.y,t.x,t.y,V.x,V.y)}if(n){const a=u;u=l,l=a}break}case D.ROUND:{const n=A<0;let m,V;if(n){const E=u;u=l,l=E,m=xt,V=nt}else m=nt,V=xt;const q=n?ft(this._inner,s):Tt(this._inner,s);let M,U;L?(M=n?p(this._innerPrev,e):k(this._innerPrev,e),U=n?k(this._innerNext,t):p(this._innerNext,t)):(M=q,U=q);const yt=n?k(this._roundStart,e):p(this._roundStart,e),P=n?p(this._roundEnd,t):k(this._roundEnd,t),a=d(M.x,M.y,-e.x,-e.y,m.x,m.y),ot=d(yt.x,yt.y,-e.x,-e.y,V.x,V.y);if(H)break;const z=this._writeVertex(o,y,_,c,-e.x,-e.y,0,0,0,0,h);L||this._writeTriangle(u,l,z);const S=ft(this._outer,q),J=this._writeVertex(o,y,_,c,t.x,t.y,P.x,P.y,V.x,V.y,h);let Z,tt;const lt=g>2;if(lt){let E;g!==Number.MAX_VALUE?(S.x/=g,S.y/=g,E=mt(e,S),E=(g*(E*E-1)+1)/E):E=-1,Z=n?k(this._startBreak,e):p(this._startBreak,e),Z.x+=e.x*E,Z.y+=e.y*E,tt=n?p(this._endBreak,t):k(this._endBreak,t),tt.x+=t.x*E,tt.y+=t.y*E}et(w,S,-e.x,-e.y);const ht=this._writeVertex(o,y,_,c,-e.x,-e.y,S.x,S.y,w.x,w.y,h);et(w,S,t.x,t.y);const ct=v?this._writeVertex(o,y,_,c,t.x,t.y,S.x,S.y,w.x,w.y,h):ht,ut=z,at=v?this._writeVertex(o,y,_,c,t.x,t.y,0,0,0,0,h):z;let it=-1,rt=-1;if(lt&&(et(w,Z,-e.x,-e.y),it=this._writeVertex(o,y,_,c,-e.x,-e.y,Z.x,Z.y,w.x,w.y,h),et(w,tt,t.x,t.y),rt=this._writeVertex(o,y,_,c,t.x,t.y,tt.x,tt.y,w.x,w.y,h)),v?lt?(this._writeTriangle(ut,ot,it),this._writeTriangle(ut,it,ht),this._writeTriangle(at,ct,rt),this._writeTriangle(at,rt,J)):(this._writeTriangle(ut,ot,ht),this._writeTriangle(at,ct,J)):lt?(this._writeTriangle(z,ot,it),this._writeTriangle(z,it,rt),this._writeTriangle(z,rt,J)):(this._writeTriangle(z,ot,ht),this._writeTriangle(z,ct,J)),L?(u=this._writeVertex(o,y,_,c,t.x,t.y,U.x,U.y,m.x,m.y,h),l=J):(u=v?this._writeVertex(o,y,_,c,t.x,t.y,U.x,U.y,m.x,m.y,h):a,this._writeTriangle(u,at,J),l=J),n){const E=u;u=l,l=E}break}}}}}export{St as a,It as c,Pt as i};
