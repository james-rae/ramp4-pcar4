import{aA as F,aB as Ot,bX as D,cp as O}from"./main-yxqK2SuK.js";import{o as mt,s as Q,I as Rt,g as k,u as K,v as Z}from"./vec32-CSgqTdIu.js";import{s as tt,b as et,a as C,k as nt,N as J,H as it,U as T,E as L}from"./sphere-2rbAwYBI.js";import{c as pt,h as At}from"./mat4-CA6EAWi-.js";import{z as bt}from"./vec42-D8CJyqHG.js";import{r as M}from"./vec4f64-hf2nxvhQ.js";import{M as A,h as Ft,a as Et,r as gt,p as H}from"./plane-D3WbCZz-.js";import{i as st}from"./Util-BjGjeg6f.js";function rt(i){return i?{ray:et(i.ray),c0:i.c0,c1:i.c1}:{ray:et(),c0:0,c1:Number.MAX_VALUE}}new tt(()=>rt());function Nt(i){return i?[A(i[0]),A(i[1]),A(i[2]),A(i[3]),A(i[4]),A(i[5])]:[A(),A(),A(),A(),A(),A()]}function Mt(){return[F(),F(),F(),F(),F(),F(),F(),F()]}function St(i,t){for(let e=0;e<ot;e++)Ft(i[e],t[e]);return i}function Bt(i,t,e,n=It){const s=pt(Et.get(),t,i);At(s,s);for(let r=0;r<jt;++r){const h=bt(gt.get(),Pt[r],s);mt(n[r],h[0]/h[3],h[1]/h[3],h[2]/h[3])}xt(e,n)}function xt(i,t){H(t[o.FAR_BOTTOM_LEFT],t[o.NEAR_BOTTOM_LEFT],t[o.NEAR_TOP_LEFT],i[S.LEFT]),H(t[o.NEAR_BOTTOM_RIGHT],t[o.FAR_BOTTOM_RIGHT],t[o.FAR_TOP_RIGHT],i[S.RIGHT]),H(t[o.FAR_BOTTOM_LEFT],t[o.FAR_BOTTOM_RIGHT],t[o.NEAR_BOTTOM_RIGHT],i[S.BOTTOM]),H(t[o.NEAR_TOP_LEFT],t[o.NEAR_TOP_RIGHT],t[o.FAR_TOP_RIGHT],i[S.TOP]),H(t[o.NEAR_BOTTOM_LEFT],t[o.NEAR_BOTTOM_RIGHT],t[o.NEAR_TOP_RIGHT],i[S.NEAR]),H(t[o.FAR_BOTTOM_RIGHT],t[o.FAR_BOTTOM_LEFT],t[o.FAR_TOP_LEFT],i[S.FAR])}function w(i,t){for(let e=0;e<ot;e++){const n=i[e];if(n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+n[3]>=t[3])return!1}return!0}var S,o;(function(i){i[i.LEFT=0]="LEFT",i[i.RIGHT=1]="RIGHT",i[i.BOTTOM=2]="BOTTOM",i[i.TOP=3]="TOP",i[i.NEAR=4]="NEAR",i[i.FAR=5]="FAR"})(S||(S={})),function(i){i[i.NEAR_BOTTOM_LEFT=0]="NEAR_BOTTOM_LEFT",i[i.NEAR_BOTTOM_RIGHT=1]="NEAR_BOTTOM_RIGHT",i[i.NEAR_TOP_RIGHT=2]="NEAR_TOP_RIGHT",i[i.NEAR_TOP_LEFT=3]="NEAR_TOP_LEFT",i[i.FAR_BOTTOM_LEFT=4]="FAR_BOTTOM_LEFT",i[i.FAR_BOTTOM_RIGHT=5]="FAR_BOTTOM_RIGHT",i[i.FAR_TOP_RIGHT=6]="FAR_TOP_RIGHT",i[i.FAR_TOP_LEFT=7]="FAR_TOP_LEFT"}(o||(o={})),o.FAR_BOTTOM_RIGHT,o.NEAR_BOTTOM_RIGHT,o.NEAR_BOTTOM_LEFT,o.FAR_BOTTOM_LEFT,o.NEAR_BOTTOM_LEFT,o.NEAR_BOTTOM_RIGHT,o.NEAR_TOP_RIGHT,o.NEAR_TOP_LEFT,o.FAR_BOTTOM_RIGHT,o.FAR_BOTTOM_LEFT,o.FAR_TOP_LEFT,o.FAR_TOP_RIGHT,o.NEAR_BOTTOM_RIGHT,o.FAR_BOTTOM_RIGHT,o.FAR_TOP_RIGHT,o.NEAR_TOP_RIGHT,o.FAR_BOTTOM_LEFT,o.NEAR_BOTTOM_LEFT,o.NEAR_TOP_LEFT,o.FAR_TOP_LEFT,o.FAR_TOP_LEFT,o.NEAR_TOP_LEFT,o.NEAR_TOP_RIGHT,o.FAR_TOP_RIGHT;const ot=6,jt=8,Pt=[M(-1,-1,-1,1),M(1,-1,-1,1),M(1,1,-1,1),M(-1,1,-1,1),M(-1,-1,1,1),M(1,-1,1,1),M(1,1,1,1),M(-1,1,1,1)];new tt(rt);const It=Mt();class I{get bounds(){return this._root.bounds}get halfSize(){return this._root.halfSize}get root(){return this._root.node}get maximumObjectsPerNode(){return this._maximumObjectsPerNode}get maximumDepth(){return this._maximumDepth}get objectCount(){return this._objectCount}constructor(t,e){this.objectToBoundingSphere=t,this._maximumObjectsPerNode=10,this._maximumDepth=20,this._degenerateObjects=new Set,this._root=new d,this._objectCount=0,e&&(e.maximumObjectsPerNode!==void 0&&(this._maximumObjectsPerNode=e.maximumObjectsPerNode),e.maximumDepth!==void 0&&(this._maximumDepth=e.maximumDepth))}destroy(){this._degenerateObjects.clear(),d.clearPool(),W[0]=null,j.prune(),P.prune()}add(t,e=t.length){this._objectCount+=e,this._grow(t,e);const n=d.acquire();for(let s=0;s<e;s++){const r=t[s];this._isDegenerate(r)?this._degenerateObjects.add(r):(n.init(this._root),this._add(r,n))}d.release(n)}remove(t,e=null){this._objectCount-=t.length;const n=d.acquire();for(const s of t){const r=e??C(this.objectToBoundingSphere(s),qt);v(r[3])?(n.init(this._root),Lt(s,r,n)):this._degenerateObjects.delete(s)}d.release(n),this._shrink()}update(t,e){if(!v(e[3])&&this._isDegenerate(t))return;const n=wt(t);this.remove(n,e),this.add(n)}forEachAlongRay(t,e,n){const s=nt(t,e);x(this._root,r=>{if(!zt(s,r))return!1;const h=r.node;return h.terminals.forAll(u=>{this._intersectsObject(s,u)&&n(u)}),h.residents!==null&&h.residents.forAll(u=>{this._intersectsObject(s,u)&&n(u)}),!0})}forEachAlongRayWithVerticalOffset(t,e,n,s){const r=nt(t,e);x(this._root,h=>{if(!Gt(r,h,s))return!1;const u=h.node;return u.terminals.forAll(a=>{this._intersectsObjectWithOffset(r,a,s)&&n(a)}),u.residents!==null&&u.residents.forAll(a=>{this._intersectsObjectWithOffset(r,a,s)&&n(a)}),!0})}forEach(t){x(this._root,e=>{const n=e.node;return n.terminals.forAll(t),n.residents!==null&&n.residents.forAll(t),!0}),this._degenerateObjects.forEach(t)}forEachDegenerateObject(t){this._degenerateObjects.forEach(t)}findClosest(t,e,n,s=()=>!0,r=1/0){let h=1/0,u=1/0,a=null;const c=V(t,e),f=l=>{if(--r,!s(l))return;const m=this.objectToBoundingSphere(l);if(!w(n,m))return;const E=B(t,e,T(m)),z=E-m[3],_=E+m[3];z<h&&(h=z,u=_,a=l)};return at(this._root,l=>{if(r<=0||!w(n,l.bounds)||(k(b,c,l.halfSize),K(b,b,T(l.bounds)),B(t,e,b)>u))return!1;const m=l.node;return m.terminals.forAll(E=>f(E)),m.residents!==null&&m.residents.forAll(E=>f(E)),!0},t,e),a}forEachInDepthRange(t,e,n,s,r,h,u){let a=-1/0,c=1/0;const f={setRange:_=>{n===I.DepthOrder.FRONT_TO_BACK?(a=Math.max(a,_.near),c=Math.min(c,_.far)):(a=Math.max(a,-_.far),c=Math.min(c,-_.near))}};f.setRange(s);const l=B(e,n,t),m=V(e,n),E=V(e,-n),z=_=>{if(!u(_))return;const N=this.objectToBoundingSphere(_),G=T(N),$=B(e,n,G)-l,Tt=$-N[3],ft=$+N[3];Tt>c||ft<a||!w(h,N)||r(_,f)};at(this._root,_=>{if(!w(h,_.bounds)||(k(b,m,_.halfSize),K(b,b,T(_.bounds)),B(e,n,b)-l>c)||(k(b,E,_.halfSize),K(b,b,T(_.bounds)),B(e,n,b)-l<a))return!1;const N=_.node;return N.terminals.forAll(G=>z(G)),N.residents!==null&&N.residents.forAll(G=>z(G)),!0},e,n)}forEachNode(t){x(this._root,e=>t(e.node,e.bounds,e.halfSize,e.depth))}forEachNeighbor(t,e){const n=J(e),s=T(e),r=a=>{const c=this.objectToBoundingSphere(a),f=J(c),l=n+f;return!(Z(T(c),s)-l*l<=0)||t(a)};let h=!0;const u=a=>{h&&(h=r(a))};x(this._root,a=>{const c=J(a.bounds),f=n+c;if(Z(T(a.bounds),s)-f*f>0)return!1;const l=a.node;return l.terminals.forAll(u),h&&l.residents!==null&&l.residents.forAll(u),h}),h&&this.forEachDegenerateObject(u)}_intersectsObject(t,e){const n=this.objectToBoundingSphere(e);return!(n[3]>0)||it(n,t)}_intersectsObjectWithOffset(t,e,n){const s=this.objectToBoundingSphere(e);return!(s[3]>0)||it(n.applyToBoundingSphere(s),t)}_add(t,e){e.advanceTo(this.objectToBoundingSphere(t))?e.node.terminals.push(t):(e.node.residents.push(t),e.node.residents.length>this._maximumObjectsPerNode&&e.depth<this._maximumDepth&&this._split(e))}_split(t){const e=t.node.residents;t.node.residents=null;for(let n=0;n<e.length;n++){const s=d.acquire().init(t);this._add(e.at(n),s),d.release(s)}}_grow(t,e){if(e!==0&&(dt(t,e,n=>this.objectToBoundingSphere(n),g),v(g[3])&&!this._fitsInsideTree(g)))if(ht(this._root.node))C(g,this._root.bounds),this._root.halfSize=1.25*this._root.bounds[3],this._root.updateBoundsRadiusFromHalfSize();else{const n=this._rootBoundsForRootAsSubNode(g);this._placingRootViolatesMaxDepth(n)?this._rebuildTree(g,n):this._growRootAsSubNode(n),d.release(n)}}_rebuildTree(t,e){Q(T(X),T(e.bounds)),X[3]=e.halfSize,dt([t,X],2,s=>s,Y);const n=d.acquire().init(this._root);this._root.initFrom(null,Y,Y[3]),this._root.increaseHalfSize(1.25),x(n,s=>(this.add(s.node.terminals.data,s.node.terminals.length),s.node.residents!==null&&this.add(s.node.residents.data,s.node.residents.length),!0)),d.release(n)}_placingRootViolatesMaxDepth(t){const e=Math.log(t.halfSize/this._root.halfSize)*Math.LOG2E;let n=0;return x(this._root,s=>(n=Math.max(n,s.depth),n+e<=this._maximumDepth)),n+e>this._maximumDepth}_rootBoundsForRootAsSubNode(t){const e=t[3],n=t;let s=-1/0;const r=this._root.bounds,h=this._root.halfSize;for(let a=0;a<3;a++){const c=r[a]-h-(n[a]-e),f=n[a]+e-(r[a]+h),l=Math.max(0,Math.ceil(c/(2*h))),m=Math.max(0,Math.ceil(f/(2*h)))+1,E=2**Math.ceil(Math.log(l+m)*Math.LOG2E);s=Math.max(s,E),y[a].min=l,y[a].max=m}for(let a=0;a<3;a++){let c=y[a].min,f=y[a].max;const l=(s-(c+f))/2;c+=Math.ceil(l),f+=Math.floor(l);const m=r[a]-h-c*h*2;U[a]=m+(f+c)*h}const u=s*h;return U[3]=u*ct,d.acquire().initFrom(null,U,u,0)}_growRootAsSubNode(t){const e=this._root.node;Q(T(g),T(this._root.bounds)),g[3]=this._root.halfSize,this._root.init(t),t.advanceTo(g,null,!0),t.node.children=e.children,t.node.residents=e.residents,t.node.terminals=e.terminals}_shrink(){for(;;){const t=this._findShrinkIndex();if(t===-1)break;this._root.advance(t),this._root.depth=0}}_findShrinkIndex(){if(this._root.node.terminals.length!==0||this._root.isLeaf())return-1;let t=null;const e=this._root.node.children;let n=0,s=0;for(;s<e.length&&t==null;)n=s++,t=e[n];for(;s<e.length;)if(e[s++])return-1;return n}_isDegenerate(t){return!v(this.objectToBoundingSphere(t)[3])}_fitsInsideTree(t){const e=this._root.bounds,n=this._root.halfSize;return t[3]<=n&&t[0]>=e[0]-n&&t[0]<=e[0]+n&&t[1]>=e[1]-n&&t[1]<=e[1]+n&&t[2]>=e[2]-n&&t[2]<=e[2]+n}toJSON(){const{maximumDepth:t,maximumObjectsPerNode:e,_objectCount:n}=this,s=this._nodeToJSON(this._root.node);return{maximumDepth:t,maximumObjectsPerNode:e,objectCount:n,root:{bounds:this._root.bounds,halfSize:this._root.halfSize,depth:this._root.depth,node:s}}}_nodeToJSON(t){const e=t.children.map(r=>r?this._nodeToJSON(r):null),n=t.residents?.map(r=>this.objectToBoundingSphere(r)),s=t.terminals?.map(r=>this.objectToBoundingSphere(r));return{children:e,residents:n,terminals:s}}static fromJSON(t){const e=new I(n=>n,{maximumDepth:t.maximumDepth,maximumObjectsPerNode:t.maximumObjectsPerNode});return e._objectCount=t.objectCount,e._root.initFrom(t.root.node,t.root.bounds,t.root.halfSize,t.root.depth),e}}class d{constructor(){this.bounds=L(),this.halfSize=0,this.initFrom(null,null,0,0)}init(t){return this.initFrom(t.node,t.bounds,t.halfSize,t.depth)}initFrom(t,e,n,s=this.depth){return this.node=t??d.createEmptyNode(),e&&C(e,this.bounds),this.halfSize=n,this.depth=s,this}increaseHalfSize(t){this.halfSize*=t,this.updateBoundsRadiusFromHalfSize()}updateBoundsRadiusFromHalfSize(){this.bounds[3]=this.halfSize*ct}advance(t){let e=this.node.children[t];e||(e=d.createEmptyNode(),this.node.children[t]=e),this.node=e,this.halfSize/=2,this.depth++;const n=lt[t];return this.bounds[0]+=n[0]*this.halfSize,this.bounds[1]+=n[1]*this.halfSize,this.bounds[2]+=n[2]*this.halfSize,this.updateBoundsRadiusFromHalfSize(),this}advanceTo(t,e,n=!1){for(;;){if(this.isTerminalFor(t))return e&&e(this,-1),!0;if(this.isLeaf()){if(!n)return e&&e(this,-1),!1;this.node.residents=null}const s=this._childIndex(t);e&&e(this,s),this.advance(s)}}isLeaf(){return this.node.residents!=null}isTerminalFor(t){return t[3]>this.halfSize/2}_childIndex(t){const e=this.bounds;return(e[0]<t[0]?1:0)+(e[1]<t[1]?2:0)+(e[2]<t[2]?4:0)}static createEmptyNode(){return{children:[null,null,null,null,null,null,null,null],terminals:new D({shrink:!0}),residents:new D({shrink:!0})}}static acquire(){return d._pool.acquire()}static release(t){d._pool.release(t)}static clearPool(){d._pool.prune()}}function x(i,t){let e=d.acquire().init(i);const n=[e];for(;n.length!==0;){if(e=n.pop(),t(e)&&!e.isLeaf())for(let s=0;s<e.node.children.length;s++)e.node.children[s]&&n.push(d.acquire().init(e).advance(s));d.release(e)}}function at(i,t,e,n=I.DepthOrder.FRONT_TO_BACK){let s=d.acquire().init(i);const r=[s];for(Ct(e,n,_t);r.length!==0;){if(s=r.pop(),t(s)&&!s.isLeaf())for(let h=7;h>=0;--h){const u=_t[h];s.node.children[u]&&r.push(d.acquire().init(s).advance(u))}d.release(s)}}function Lt(i,t,e){j.clear();const n=e.advanceTo(t,(s,r)=>{j.push(s.node),j.push(r)})?e.node.terminals:e.node.residents;if(n.removeUnordered(i),n.length===0)for(let s=j.length-2;s>=0&&Ht(j.data[s],j.data[s+1]);s-=2);}function Ht(i,t){return t>=0&&(i.children[t]=null),!!ht(i)&&(i.residents===null&&(i.residents=new D({shrink:!0})),!0)}function zt(i,t){return q(T(t.bounds),2*-t.halfSize,R),q(T(t.bounds),2*t.halfSize,p),st(i.origin,i.direction,R,p)}function Gt(i,t,e){return q(T(t.bounds),2*-t.halfSize,R),q(T(t.bounds),2*t.halfSize,p),e.applyToMinMax(R,p),st(i.origin,i.direction,R,p)}function ht(i){if(i.terminals.length!==0)return!1;if(i.residents!==null)return i.residents.length===0;for(let t=0;t<i.children.length;t++)if(i.children[t])return!1;return!0}function Dt(i,t){i[0]=Math.min(i[0],t[0]-t[3]),i[1]=Math.min(i[1],t[1]-t[3]),i[2]=Math.min(i[2],t[2]-t[3])}function vt(i,t){i[0]=Math.max(i[0],t[0]+t[3]),i[1]=Math.max(i[1],t[1]+t[3]),i[2]=Math.max(i[2],t[2]+t[3])}function q(i,t,e){e[0]=i[0]+t,e[1]=i[1]+t,e[2]=i[2]+t}function dt(i,t,e,n){if(t===1){const s=e(i[0]);C(s,n)}else{R[0]=1/0,R[1]=1/0,R[2]=1/0,p[0]=-1/0,p[1]=-1/0,p[2]=-1/0;for(let s=0;s<t;s++){const r=e(i[s]);v(r[3])&&(Dt(R,r),vt(p,r))}Rt(T(n),R,p,.5),n[3]=Math.max(p[0]-R[0],p[1]-R[1],p[2]-R[2])/2}}function Ct(i,t,e){if(!P.length)for(let n=0;n<8;++n)P.push({index:0,distance:0});for(let n=0;n<8;++n){const s=lt[n];P.data[n].index=n,P.data[n].distance=B(i,t,s)}P.sort((n,s)=>n.distance-s.distance);for(let n=0;n<8;++n)e[n]=P.data[n].index}function V(i,t){let e,n=1/0;for(let s=0;s<8;++s){const r=B(i,t,ut[s]);r<n&&(n=r,e=ut[s])}return e}function B(i,t,e){return t*(i[0]*e[0]+i[1]*e[1]+i[2]*e[2])}function v(i){return!isNaN(i)&&i!==-1/0&&i!==1/0&&i>0}d._pool=new Ot(d),function(i){var t;(t=i.DepthOrder||(i.DepthOrder={}))[t.FRONT_TO_BACK=1]="FRONT_TO_BACK",t[t.BACK_TO_FRONT=-1]="BACK_TO_FRONT"}(I||(I={}));const lt=[O(-1,-1,-1),O(1,-1,-1),O(-1,1,-1),O(1,1,-1),O(-1,-1,1),O(1,-1,1),O(-1,1,1),O(1,1,1)],ut=[O(-1,-1,-1),O(-1,-1,1),O(-1,1,-1),O(-1,1,1),O(1,-1,-1),O(1,-1,1),O(1,1,-1),O(1,1,1)],ct=Math.sqrt(3),W=[null];function wt(i){return W[0]=i,W}const U=L(),b=F(),R=F(),p=F(),j=new D,qt=L(),g=L(),X=L(),Y=L(),y=[{min:0,max:0},{min:0,max:0},{min:0,max:0}],P=new D,_t=[0,0,0,0,0,0,0,0],yt=I;export{Nt as H,Bt as L,St as N,yt as Y};
