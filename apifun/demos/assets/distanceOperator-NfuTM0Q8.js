import{a as c,e as P,M as v,w as A,m as T,c as k,aM as z,L as re,O as C,j as R}from"./Transformation2D-DZfKTQC6.js";import{d5 as U,d6 as H,e3 as se}from"./main-CcTJZah4.js";import{e as G,n as E,r as J,ac as O,ag as ie,aU as oe,a as me}from"./ProjectionTransformation-BpVP6XuM.js";import{fromGeometry as K,getSpatialReference as ae}from"./apiConverter-CAoEv1Jc.js";import"./jsonConverter-BWKGkJid.js";function $(){return{outPoint:new P,index:-1,t:Number.NaN}}function w(a,e,t){return{outPoint:a.clone(),index:e,t}}function l(a,e,t,n){a.outPoint.assign(e),a.index=t,a.t=n}function S(a,e){a.outPoint.assign(e.outPoint),a.index=e.index,a.t=e.t}function Q(a,e,t,n){a.index=t,a.t=n,e.queryCoord2D(a.t,a.outPoint)}function Y(a,e){const t=$();S(t,a),S(a,e),S(e,t)}function ue(a,e,t,n,r,i){if(a.getGeometryType()===c.enumPolygon){for(;n.nextPath();)if(n.hasNextSegment()){const s=n.nextSegment();if(O(a,s.getEndXY(),0)!==0)return l(r,s.getEndXY(),-1,Number.NaN),l(i,s.getEndXY(),-1,Number.NaN),!0}n.resetToFirstPath()}if(e.getGeometryType()===c.enumPolygon){for(;t.nextPath();)if(t.hasNextSegment()){const s=t.nextSegment();if(O(e,s.getEndXY(),0)!==0)return l(r,s.getEndXY(),-1,Number.NaN),l(i,s.getEndXY(),-1,Number.NaN),!0}t.resetToFirstPath()}return!1}function ce(a){const e=a.getPathCount(),t=re(a.getSegmentCount(),0);let n=0;for(let r=0;r<e;++r){const i=n+a.getSegmentCountPath(r);for(let s=n,m=a.getPathStart(r);s<i;++s,++m)t[s]=m;n=i}return oe(a.getPointCount(),t),t}function W(a,e){return!!Number.isNaN(e)||a<=e}function F(a){const e=new me;return e.addEnvelope(a,!1),e}class he{constructor(e,t){if(this.m_env2DgeometryA=null,this.m_env2DgeometryB=null,this.m_progressCounter=0,this.m_progressTracker=t,this.m_maxSqrDistance=e*e,this.m_maxDistance=e,this.m_bIsNearCalc=!1,Number.isNaN(this.m_maxDistance)?this.m_maxDistance=Number.POSITIVE_INFINITY:this.m_maxDistance=e,this.m_maxSqrDistance=this.m_maxDistance*this.m_maxDistance,Number.isFinite(this.m_maxSqrDistance)){let n=Math.sqrt(this.m_maxSqrDistance);for(;n<this.m_maxDistance;)this.m_maxSqrDistance*=1+Number.EPSILON,n=Math.sqrt(this.m_maxSqrDistance)}}calculate(e,t,n,r){if((e.getGeometryType()!==G.type||t.getGeometryType()!==G.type)&&(this.m_env2DgeometryA=new E,this.m_env2DgeometryB=new E,e.queryEnvelope(this.m_env2DgeometryA),t.queryEnvelope(this.m_env2DgeometryB),!W(this.m_env2DgeometryA.distanceFromEnvelope(this.m_env2DgeometryB),this.m_maxDistance)))return Number.POSITIVE_INFINITY;const i=w(new P,C(),Number.NaN),s=w(new P,C(),Number.NaN),m=this._ExecuteBruteForce(e,t,i,s);return W(m,this.m_maxDistance)?(n!==null&&S(n,i),r!==null&&S(r,s),m):Number.POSITIVE_INFINITY}isNear(e,t){if(this.m_bIsNearCalc=!0,e.isEmpty()||t.isEmpty())return!1;if(e===t)return!0;let n=!0;if(e.getGeometryType()!==G.type&&e.getGeometryType()!==J.type||t.getGeometryType()!==G.type&&t.getGeometryType()!==J.type||(n=!1),n){if(this.m_env2DgeometryA=new E,this.m_env2DgeometryB=new E,e.queryEnvelope(this.m_env2DgeometryA),t.queryEnvelope(this.m_env2DgeometryB),!(this.m_env2DgeometryA.sqrMaxMinDistanceEnvelope(this.m_env2DgeometryB)>this.m_maxSqrDistance))return!0;if(this.m_env2DgeometryA.sqrDistanceEnvelope(this.m_env2DgeometryB,null,null)>this.m_maxSqrDistance)return!1}const r=w(new P,C(),Number.NaN),i=w(new P,C(),Number.NaN);return this._ExecuteBruteForce(e,t,r,i)<=this.m_maxDistance}progress_(e=!1){}_ExecuteBruteForce(e,t,n,r){switch(e.getGeometryType()){case c.enumPoint:return this.distancePointGeometry(e,t,n,r);case c.enumMultiPoint:return this.distanceMultipointGeometry(e,t,n,r);case c.enumEnvelope:return this.distanceEnvelopeGeometry(e,t,n,r);case c.enumPolyline:case c.enumPolygon:return this.distanceMultipathGeometry(e,t,n,r);default:return Number.NaN}}distancePointGeometry(e,t,n,r){switch(t.getGeometryType()){case c.enumPoint:return this.distancePointPoint(e,t,n,r);case c.enumMultiPoint:return this.distancePointMultipoint(e,t,n,r);case c.enumPolyline:case c.enumPolygon:return this.distancePointMultipath(e,t,n,r);case c.enumEnvelope:return this.distancePointEnvelope(e,t,n,r);default:return Number.NaN}}distancePointPoint(e,t,n,r){const i=e.getXY(),s=t.getXY();return l(n,i,0,0),l(r,s,0,0),Math.sqrt(P.sqrDistance(i,s))}distancePointMultipoint(e,t,n,r){const i=e.getXY();let s=this.m_maxSqrDistance,m=s,o=!1;const u=t.getPointCount(),y=new P;for(let _=0;_<u;++_)if(t.queryXY(_,y),m=P.sqrDistance(i,y),this.m_bIsNearCalc){if(m<=s)return 0}else if(!(m>s)&&(!o&&m===s||m<s)&&(s=m,l(n,i,0,0),l(r,y,_,0),o=!0,s===0))return 0;return o?Math.sqrt(s):Number.POSITIVE_INFINITY}distancePointMultipath(e,t,n,r){const i=!this.m_env2DgeometryA.isIntersecting(this.m_env2DgeometryB),s=e.getXY();if(!i&&t.getGeometryType()===c.enumPolygon&&O(t,s,0)!==0)return l(n,s,0,0),l(r,s,-1,Number.NaN),0;t.getImpl().getAccelerators();let m=this.m_maxSqrDistance,o=m,u=-1;const y=new E,_=t.querySegmentIterator();let h=!1;for(;_.nextPath();)for(;_.hasNextSegment();){const p=_.nextSegment();p.queryEnvelope(y);const x=y.sqrDistance(s);if(x>m||!this.m_bIsNearCalc&&h&&x===m)continue;u=p.getClosestCoordinate(s,!1);const g=p.getCoord2D(u);if(o=P.sqrDistance(s,g),this.m_bIsNearCalc){if(o<=m)return 0}else if(!(o>m)&&(!h||o<m)&&(m=o,l(n,s,0,0),l(r,g,_.getStartPointIndex(),u),h=!0,m===0))return 0}return h?Math.sqrt(m):Number.POSITIVE_INFINITY}distancePointEnvelope(e,t,n,r){const i=e.getXY();l(n,i,0,0),l(r,i,-1,Number.NaN);const s=t.asEnvelope2D();return s.contains(i)?0:Math.sqrt(s.sqrDistance(i,r.outPoint))}distanceMultipointGeometry(e,t,n,r){switch(t.getGeometryType()){case c.enumPoint:{this.m_env2DgeometryB=v(this.m_env2DgeometryA,this.m_env2DgeometryA=this.m_env2DgeometryB);const i=this.distancePointMultipoint(t,e,r,n);return this.m_env2DgeometryB=v(this.m_env2DgeometryA,this.m_env2DgeometryA=this.m_env2DgeometryB),i}case c.enumMultiPoint:return this.distanceMultipointMultipoint(e,t,n,r,1,1);case c.enumPolyline:case c.enumPolygon:return this.distanceMultipointMultipath(e,t,n,r);case c.enumEnvelope:return this.distanceMultipointMultipath(e,F(t),n,r);default:return Number.NaN}}distanceMultipointMultipoint(e,t,n,r,i,s){const m={stack:[],error:void 0,hasError:!1};try{if(this.m_bIsNearCalc&&i===1&&s===1){const q=Math.trunc(A(Math.sqrt(e.getPointCount())+1,1,T())),I=Math.trunc(A(Math.sqrt(t.getPointCount())+1,1,T()));if((q>=4||I>=4)&&this.distanceMultipointMultipoint(e,t,n,r,q,I)<=this.m_maxSqrDistance)return 0}let o=this.m_maxSqrDistance;const u=[e],y=[t],_=this.swapGeometriesIfBGtA(u,y);_&&(this.m_env2DgeometryB=v(this.m_env2DgeometryA,this.m_env2DgeometryA=this.m_env2DgeometryB),s=v(i,i=s),Y(n,r)),U(m,k(()=>{Y(n,r),this.m_env2DgeometryB=v(this.m_env2DgeometryA,this.m_env2DgeometryA=this.m_env2DgeometryB)},!_),!1);const h=u[0].getImpl(),p=y[0].getImpl(),x=h.getPointCount(),g=p.getPointCount(),M=g>1;let d=!1;const f=new P,D=new P;for(let q=0;q<x;q+=i){if(h.queryXY(q,f),M){const I=this.m_env2DgeometryB.sqrDistance(f);if(this.m_bIsNearCalc){if(I>o)continue;if(this.m_env2DgeometryB.sqrMaxMinDistance(f)<=o)return 0}else if(I>=o)continue}for(let I=0;I<g;I+=s){p.queryXY(I,D);const N=P.sqrDistance(f,D);if(this.m_bIsNearCalc){if(N<=o)return 0}else if(!(N>o||d&&N===o)&&(!d||N<o)&&(l(n,f,q,0),l(r,D,I,0),d=!0,o=N,o===0))return d?Math.sqrt(o):Number.POSITIVE_INFINITY}}return d?Math.sqrt(o):Number.POSITIVE_INFINITY}catch(o){m.error=o,m.hasError=!0}finally{H(m)}}distanceMultipointMultipath(e,t,n,r){let i=!!this.m_env2DgeometryA.isIntersecting(this.m_env2DgeometryB)&&t.getGeometryType()===c.enumPolygon;const s=t.querySegmentIterator();s.stripAttributes();const m=new E,o=new P;let u=this.m_maxSqrDistance;const y=e.getImpl(),_=y.getPointCount(),h=_>1;let p=!1;for(;s.nextPath();)for(;s.hasNextSegment();){const x=s.nextSegment();if(x.queryLooseEnvelope(m),h){const g=m.sqrDistanceEnvelope(this.m_env2DgeometryA,null,null);if(this.m_bIsNearCalc){if(g>u)continue}else if(g>u||p&&g===u)continue}for(let g=0;g<_;g++){if(y.queryXY(g,o),i&&O(t,o,0)!==0)return l(n,o,-1,Number.NaN),l(r,o,g,0),0;{const D=m.sqrDistance(o);if(this.m_bIsNearCalc){if(D>u)continue}else if(D>u)continue}const M=x.getClosestCoordinate(o,!1),d=x.getCoord2D(M);o.subThis(d);const f=o.sqrLength();if(this.m_bIsNearCalc){if(f<=u)return 0}else if(!(f>u)&&(!p||f<u)&&(u=f,l(n,y.getXY(g),g,0),l(r,d,s.getStartPointIndex(),M),p=!0,u===0))return 0}i=!1}return p?Math.sqrt(u):Number.POSITIVE_INFINITY}distanceEnvelopeGeometry(e,t,n,r){switch(t.getGeometryType()){case c.enumPoint:return this.distancePointEnvelope(t,e,r,n);case c.enumMultiPoint:{this.m_env2DgeometryB=v(this.m_env2DgeometryA,this.m_env2DgeometryA=this.m_env2DgeometryB);const i=this.distanceMultipointMultipath(t,F(e),r,n);return this.m_env2DgeometryB=v(this.m_env2DgeometryA,this.m_env2DgeometryA=this.m_env2DgeometryB),i}case c.enumPolyline:case c.enumPolygon:return this.distanceMultipathMultipath(F(e),t,n,r);case c.enumEnvelope:return this.distanceEnvelopeEnvelope(e,t,n,r);default:return Number.NaN}}distanceEnvelopeEnvelope(e,t,n,r){n.t=Number.NaN,n.index=-1,r.t=Number.NaN,r.index=-1;const i=e.asEnvelope2D(),s=t.asEnvelope2D();return Math.sqrt(i.sqrDistanceEnvelope(s,n.outPoint,r.outPoint))}distanceMultipathGeometry(e,t,n,r){switch(t.getGeometryType()){case c.enumPoint:{this.m_env2DgeometryB=v(this.m_env2DgeometryA,this.m_env2DgeometryA=this.m_env2DgeometryB);const i=this.distancePointMultipath(t,e,r,n);return this.m_env2DgeometryB=v(this.m_env2DgeometryA,this.m_env2DgeometryA=this.m_env2DgeometryB),i}case c.enumMultiPoint:{this.m_env2DgeometryB=v(this.m_env2DgeometryA,this.m_env2DgeometryA=this.m_env2DgeometryB);const i=this.distanceMultipointMultipath(t,e,r,n);return this.m_env2DgeometryB=v(this.m_env2DgeometryA,this.m_env2DgeometryA=this.m_env2DgeometryB),i}case c.enumPolyline:case c.enumPolygon:return this.distanceMultipathMultipath(e,t,n,r);case c.enumEnvelope:return this.distanceMultipathMultipath(e,F(t),n,r);default:return Number.NaN}}distanceMultipathMultipath(e,t,n,r){const i={stack:[],error:void 0,hasError:!1};try{const s=[e],m=[t],o=this.swapGeometriesIfAGtB(s,m);o&&(this.m_env2DgeometryB=v(this.m_env2DgeometryA,this.m_env2DgeometryA=this.m_env2DgeometryB),Y(n,r)),U(i,k(()=>{Y(n,r),this.m_env2DgeometryB=v(this.m_env2DgeometryA,this.m_env2DgeometryA=this.m_env2DgeometryB)},!o),!1);const u=s[0],y=m[0],_=u.querySegmentIterator();_.stripAttributes();const h=y.querySegmentIterator();if(h.stripAttributes(),this.m_bIsNearCalc&&this.m_env2DgeometryA.sqrMaxMinDistanceEnvelope(this.m_env2DgeometryB)<=this.m_maxSqrDistance)return 0;if(this.m_bIsNearCalc){const N=Math.trunc(A(Math.sqrt(u.getPointCount())+1,1,T())),B=Math.trunc(A(Math.sqrt(u.getPointCount())+1,1,T()));if(this.distanceMultipointMultipoint(u,y,n,r,N,B)<=this.m_maxSqrDistance)return 0}if(this.m_env2DgeometryA.isIntersecting(this.m_env2DgeometryB)){const N=$(),B=$();if(ue(u,y,_,h,N,B))return S(n,N),S(r,B),0}const p=ce(u),x=[],g=new ie,M=new E,d=new E,f=new E;let D=this.m_maxSqrDistance,q=!0,I=!1;for(let N=0,B=p.length;N<B;++N){u.querySegment(p[N],g,!0);const X=g.get();if(X.queryEnvelope(M),!(M.sqrDistanceEnvelope(this.m_env2DgeometryB,null,null)>D)){if(this.m_bIsNearCalc&&M.sqrMaxDistanceEnvelope(this.m_env2DgeometryB)<=D)return 0;for(;h.nextPath();){if(this.progress_(),q)y.queryPathEnvelope(h.getPathIndex(),f),x[h.getPathIndex()]=f.clone();else if(M.sqrDistanceEnvelope(x[h.getPathIndex()],null,null)>D)continue;for(;h.hasNextSegment();){const V=h.nextSegment();if(V.queryEnvelope(d),M.sqrDistanceEnvelope(d,null,null)<=D){const ne=!M.isIntersecting(d),j=[0],L=[0];let b=X.distance(V,ne,j,L);if(b*=b,this.m_bIsNearCalc&&b<=this.m_maxSqrDistance)return 0;if(b<D||b===D&&p[N]<n.index){if(I=!0,Q(n,X,p[N],j[0]),Q(r,V,h.getStartPointIndex(),L[0]),b===0)return 0;D=b}}}}h.resetToFirstPath(),q=!1}}return I?Math.sqrt(D):Number.POSITIVE_INFINITY}catch(s){i.error=s,i.hasError=!0}finally{H(i)}}swapGeometriesIfAGtB(e,t){return z(e[0])>z(t[0])&&(t[0]=v(e[0],e[0]=t[0]),!0)}swapGeometriesIfBGtA(e,t){return this.swapGeometriesIfAGtB(t,e)}}class le{getOperatorType(){return 10100}supportsCurves(){return!0}accelerateGeometry(e,t,n){return!1}canAccelerateGeometry(e){return!1}execute(e,t,n){return this.executeEx(e,t,n,null,null,Number.NaN)}executeEx(e,t,n,r,i,s){if(e.isEmpty()||t.isEmpty())return Number.NaN;R(e),R(t);const m=e,o=t;Number.isNaN(s)&&(s=Number.POSITIVE_INFINITY);const u=new he(s,n).calculate(m,o,r,i);return Number.isFinite(u)?u:Number.NaN}}const Z=new le;function ee(a,e,t={}){const{unit:n}=t;let r=Z.execute(K(a),K(e),null);if(r&&n){const i=ae(a);r=se(r,i,n)}return r}const te=Z.supportsCurves(),De=Object.freeze(Object.defineProperty({__proto__:null,execute:ee,supportsCurves:te},Symbol.toStringTag,{value:"Module"})),ve=Object.freeze(Object.defineProperty({__proto__:null,execute:ee,supportsCurves:te},Symbol.toStringTag,{value:"Module"}));export{ve as d,De as i};
