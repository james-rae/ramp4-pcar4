import{a$ as bt,eK as Et}from"./main-DMFDvFfW.js";import{e as j,n as D}from"./enums-CpSG_SL3.js";import{R as pt}from"./definitions-DJSdSb77.js";const Rt=128e3;let dt=null,wt=null;async function Mt(){return dt||(dt=Ut()),dt}async function Ut(){wt=await(bt("esri-csp-restrictions")?await import("./libtess-asm-CEhQARv_.js").then(n=>n.l):await import("./libtess-DHRgJTgB.js").then(n=>n.l)).default({locateFile:n=>Et(`esri/core/libs/libtess/${n}`)})}function kt(n,i){const r=Math.max(n.length,Rt);return wt.triangulate(n,i,r)}function Tt(n,i){return n.x===i.x&&n.y===i.y}function Bt(n){if(!n)return;const i=n.length;if(i<=1)return;let r=0;for(let f=1;f<i;f++)Tt(n[f],n[r])||++r===f||(n[r]=n[f]);n.length=r+1}function k(n,i){return n.x=i.y,n.y=-i.x,n}function p(n,i){return n.x=-i.y,n.y=i.x,n}function gt(n,i){return n.x=i.x,n.y=i.y,n}function ft(n,i){return n.x=-i.x,n.y=-i.y,n}function vt(n){return Math.sqrt(n.x*n.x+n.y*n.y)}function Lt(n,i){return n.x*i.y-n.y*i.x}function mt(n,i){return n.x*i.x+n.y*i.y}function et(n,i,r,f){return n.x=i.x*r+i.y*f,n.y=i.x*f-i.y*r,n}class Dt{constructor(i,r,f){this._writeVertex=i,this._writeTriangle=r,this._canUseThinTessellation=f,this._prevNormal={x:void 0,y:void 0},this._nextNormal={x:void 0,y:void 0},this._textureNormalLeft={x:0,y:1},this._textureNormalRight={x:0,y:-1},this._textureNormal={x:void 0,y:void 0},this._joinNormal={x:void 0,y:void 0},this._inner={x:void 0,y:void 0},this._outer={x:void 0,y:void 0},this._roundStart={x:void 0,y:void 0},this._roundEnd={x:void 0,y:void 0},this._startBreak={x:void 0,y:void 0},this._endBreak={x:void 0,y:void 0},this._innerPrev={x:void 0,y:void 0},this._innerNext={x:void 0,y:void 0},this._bevelStart={x:void 0,y:void 0},this._bevelEnd={x:void 0,y:void 0},this._bevelMiddle={x:void 0,y:void 0}}tessellate(i,r,f=this._canUseThinTessellation){Bt(i),f&&r.halfWidth<pt&&!r.offset?this._tessellateThin(i,r):this._tessellate(i,r)}_tessellateThin(i,r){if(i.length<2)return;const f=r.wrapDistance||65535;let b=r.initialDistance||0,I=!1,K=i[0].x,Q=i[0].y;const B=i.length;for(let W=1;W<B;++W){I&&(I=!1,b=0);let $=i[W].x,q=i[W].y,E=$-K,v=q-Q,T=Math.sqrt(E*E+v*v);if(E/=T,v/=T,b+T>f){I=!0;const t=(f-b)/T;T=f-b,$=(1-t)*K+t*$,q=(1-t)*Q+t*q,--W}const o=this._writeVertex(K,Q,0,0,E,v,v,-E,0,-1,b),y=this._writeVertex(K,Q,0,0,E,v,-v,E,0,1,b);b+=T;const z=this._writeVertex($,q,0,0,E,v,v,-E,0,-1,b),e=this._writeVertex($,q,0,0,E,v,-v,E,0,1,b);this._writeTriangle(o,y,z),this._writeTriangle(y,z,e),K=$,Q=q}}_tessellate(i,r){const f=i[0],b=i[i.length-1],I=Tt(f,b),K=I?3:2;if(i.length<K)return;const Q=r.pixelCoordRatio,B=r.capType!=null?r.capType:j.BUTT,W=r.joinType!=null?r.joinType:D.MITER,$=r.miterLimit!=null?Math.min(r.miterLimit,4):2,q=r.roundLimit!=null?Math.min(r.roundLimit,1.05):1.05,E=r.halfWidth!=null?r.halfWidth:2,v=!!r.textured;let T,o,y,z=null;const e=this._prevNormal,t=this._nextNormal;let J=-1,X=-1;const x=this._joinNormal;let _,c;const rt=this._textureNormalLeft,st=this._textureNormalRight,w=this._textureNormal;let u=-1,h=-1;const _t=r.wrapDistance||65535;let l=r.initialDistance||0;const Vt=this._writeVertex,Nt=this._writeTriangle,d=(R,xt,G,m,L,S)=>{const A=Vt(o,y,_,c,G,m,R,xt,L,S,l);return u>=0&&h>=0&&A>=0&&Nt(u,h,A),u=h,h=A,A};I&&(T=i[i.length-2],t.x=b.x-T.x,t.y=b.y-T.y,X=vt(t),t.x/=X,t.y/=X);let Y=!1;for(let R=0;R<i.length;++R){if(Y&&(Y=!1,l=0),T&&(e.x=-t.x,e.y=-t.y,J=X,l+J>_t&&(Y=!0)),Y){const s=(_t-l)/J;J=_t-l,T={x:(1-s)*T.x+s*i[R].x,y:(1-s)*T.y+s*i[R].y},--R}else T=i[R];o=T.x,y=T.y;const xt=R<=0&&!Y,G=R===i.length-1;if(xt||(l+=J),z=G?I?i[1]:null:i[R+1],z?(t.x=z.x-o,t.y=z.y-y,X=vt(t),t.x/=X,t.y/=X):(t.x=void 0,t.y=void 0),!I){if(xt){p(x,t),_=x.x,c=x.y,B===j.SQUARE&&(d(-t.y-t.x,t.x-t.y,t.x,t.y,0,-1),d(t.y-t.x,-t.x-t.y,t.x,t.y,0,1)),B===j.ROUND&&(d(-t.y-t.x,t.x-t.y,t.x,t.y,-1,-1),d(t.y-t.x,-t.x-t.y,t.x,t.y,-1,1)),B!==j.ROUND&&B!==j.BUTT||(d(-t.y,t.x,t.x,t.y,0,-1),d(t.y,-t.x,t.x,t.y,0,1));continue}if(G){k(x,e),_=x.x,c=x.y,B!==j.ROUND&&B!==j.BUTT||(d(e.y,-e.x,-e.x,-e.y,0,-1),d(-e.y,e.x,-e.x,-e.y,0,1)),B===j.SQUARE&&(d(e.y-e.x,-e.x-e.y,-e.x,-e.y,0,-1),d(-e.y-e.x,e.x-e.y,-e.x,-e.y,0,1)),B===j.ROUND&&(d(e.y-e.x,-e.x-e.y,-e.x,-e.y,1,-1),d(-e.y-e.x,e.x-e.y,-e.x,-e.y,1,1));continue}}let m,L,S=-Lt(e,t);if(Math.abs(S)<.01)mt(e,t)>0?(x.x=e.x,x.y=e.y,S=1,m=Number.MAX_VALUE,L=!0):(p(x,t),S=1,m=1,L=!1);else{x.x=(e.x+t.x)/S,x.y=(e.y+t.y)/S,m=vt(x);const s=(m-1)*E*Q;L=m>4||s>J&&s>X}_=x.x,c=x.y;let A=W;switch(W){case D.BEVEL:m<1.05&&(A=D.MITER);break;case D.ROUND:m<q&&(A=D.MITER);break;case D.MITER:m>$&&(A=D.BEVEL)}switch(A){case D.MITER:if(d(x.x,x.y,-e.x,-e.y,0,-1),d(-x.x,-x.y,-e.x,-e.y,0,1),G)break;if(v){const s=Y?0:l;u=this._writeVertex(o,y,_,c,t.x,t.y,x.x,x.y,0,-1,s),h=this._writeVertex(o,y,_,c,t.x,t.y,-x.x,-x.y,0,1,s)}break;case D.BEVEL:{const s=S<0;let g,V,C,M;if(s){const a=u;u=h,h=a,g=rt,V=st}else g=st,V=rt;if(L)C=s?p(this._innerPrev,e):k(this._innerPrev,e),M=s?k(this._innerNext,t):p(this._innerNext,t);else{const a=s?ft(this._inner,x):gt(this._inner,x);C=a,M=a}const U=s?k(this._bevelStart,e):p(this._bevelStart,e);d(C.x,C.y,-e.x,-e.y,g.x,g.y);const yt=d(U.x,U.y,-e.x,-e.y,V.x,V.y);if(G)break;const O=s?p(this._bevelEnd,t):k(this._bevelEnd,t);if(L){const a=this._writeVertex(o,y,_,c,-e.x,-e.y,0,0,0,0,l);u=this._writeVertex(o,y,_,c,t.x,t.y,M.x,M.y,g.x,g.y,l),h=this._writeVertex(o,y,_,c,t.x,t.y,O.x,O.y,V.x,V.y,l),this._writeTriangle(yt,a,h)}else{if(v){const a=this._bevelMiddle;a.x=(U.x+O.x)/2,a.y=(U.y+O.y)/2,et(w,a,-e.x,-e.y),d(a.x,a.y,-e.x,-e.y,w.x,w.y),et(w,a,t.x,t.y),u=this._writeVertex(o,y,_,c,t.x,t.y,a.x,a.y,w.x,w.y,l),h=this._writeVertex(o,y,_,c,t.x,t.y,M.x,M.y,g.x,g.y,l)}else{const a=u;u=h,h=a}d(O.x,O.y,t.x,t.y,V.x,V.y)}if(s){const a=u;u=h,h=a}break}case D.ROUND:{const s=S<0;let g,V;if(s){const N=u;u=h,h=N,g=rt,V=st}else g=st,V=rt;const C=s?ft(this._inner,x):gt(this._inner,x);let M,U;L?(M=s?p(this._innerPrev,e):k(this._innerPrev,e),U=s?k(this._innerNext,t):p(this._innerNext,t)):(M=C,U=C);const yt=s?k(this._roundStart,e):p(this._roundStart,e),O=s?p(this._roundEnd,t):k(this._roundEnd,t),a=d(M.x,M.y,-e.x,-e.y,g.x,g.y),ot=d(yt.x,yt.y,-e.x,-e.y,V.x,V.y);if(G)break;const F=this._writeVertex(o,y,_,c,-e.x,-e.y,0,0,0,0,l);L||this._writeTriangle(u,h,F);const P=ft(this._outer,C),H=this._writeVertex(o,y,_,c,t.x,t.y,O.x,O.y,V.x,V.y,l);let Z,tt;const ht=m>2;if(ht){let N;m!==Number.MAX_VALUE?(P.x/=m,P.y/=m,N=mt(e,P),N=(m*(N*N-1)+1)/N):N=-1,Z=s?k(this._startBreak,e):p(this._startBreak,e),Z.x+=e.x*N,Z.y+=e.y*N,tt=s?p(this._endBreak,t):k(this._endBreak,t),tt.x+=t.x*N,tt.y+=t.y*N}et(w,P,-e.x,-e.y);const lt=this._writeVertex(o,y,_,c,-e.x,-e.y,P.x,P.y,w.x,w.y,l);et(w,P,t.x,t.y);const ct=v?this._writeVertex(o,y,_,c,t.x,t.y,P.x,P.y,w.x,w.y,l):lt,ut=F,at=v?this._writeVertex(o,y,_,c,t.x,t.y,0,0,0,0,l):F;let it=-1,nt=-1;if(ht&&(et(w,Z,-e.x,-e.y),it=this._writeVertex(o,y,_,c,-e.x,-e.y,Z.x,Z.y,w.x,w.y,l),et(w,tt,t.x,t.y),nt=this._writeVertex(o,y,_,c,t.x,t.y,tt.x,tt.y,w.x,w.y,l)),v?ht?(this._writeTriangle(ut,ot,it),this._writeTriangle(ut,it,lt),this._writeTriangle(at,ct,nt),this._writeTriangle(at,nt,H)):(this._writeTriangle(ut,ot,lt),this._writeTriangle(at,ct,H)):ht?(this._writeTriangle(F,ot,it),this._writeTriangle(F,it,nt),this._writeTriangle(F,nt,H)):(this._writeTriangle(F,ot,lt),this._writeTriangle(F,ct,H)),L?(u=this._writeVertex(o,y,_,c,t.x,t.y,U.x,U.y,g.x,g.y,l),h=H):(u=v?this._writeVertex(o,y,_,c,t.x,t.y,U.x,U.y,g.x,g.y,l):a,this._writeTriangle(u,at,H),h=H),s){const N=u;u=h,h=N}break}}}}}export{kt as a,Dt as c,Mt as i};