import{j as J,P as V,a as v,o as k,e as p,a4 as G,aO as K,R as W}from"./Transformation2D-Dqu-RtOz.js";import{e as w,n as D,w as Z,a as $,aV as ee,ac as X,g as te}from"./ProjectionTransformation-DqS8fYR2.js";import"./main-DZMdXZ8-.js";import"./jsonConverter-D8SxgGP4.js";import{s as ne,t as re}from"./SimpleGeometryCursor-DSF_YyIm.js";import{u as oe}from"./Centroid-DZi-eb9F-CA8WnNNS.js";import{m as A}from"./OperatorProximity-DjatNQTv.js";import{toPoint as I,getSpatialReference as R,fromGeometry as U}from"./apiConverter-CcJjN0MI.js";class se{getOperatorType(){return 10203}accelerateGeometry(e,s,o){return!1}canAccelerateGeometry(e){return!1}supportsCurves(){return!0}executeMany(e,s){return new z(e,s)}execute(e,s){return new z(null,s).labelPoint(e)}}class z extends re{progress_(){}tock(){return!0}getRank(){return 1}constructor(e,s){super(),this.m_index=-1,this.m_progressCounter=0,this.m_progressTracker=s,this.m_inputGeoms=e}next(){const e=this.m_inputGeoms.next();return e?(J(e),this.m_index=this.m_inputGeoms.getGeometryID(),this.labelPoint(e)):null}getGeometryID(){return this.m_index}labelPoint(e){if(e===null&&V("null pointer is not allowed"),e.getGeometryType()===v.enumPoint)return e;if(e.isEmpty())return new w({vd:e.getDescription()});switch(e.getGeometryType()){case v.enumPolygon:return this.labelPointPolygon(e);case v.enumPolyline:return this.labelPointPolyline(e);case v.enumMultiPoint:return this.labelPointMultiPoint(e);case v.enumEnvelope:return this.labelPointEnvelope(e);default:V("geometry is not supported")}}labelPointPolygon(e){const s=new D;e.queryEnvelope(s);const o=Z(null,s,!0).total();let l=null,r=e;if(e.hasNonLinearSegments()){const t=new $({copy:e}),m=ee(t,.25*o,o);k(m!==e),l=m,r=l}let u=0,d=0;for(let t=0,m=r.getPathCount();t<m;++t){const M=Math.abs(r.calculateRingArea2D(t));M>d&&(d=M,u=t)}const a=new p;if(Math.abs(d)<=2*o*o?a.setNAN():a.assign(oe(r,u)),Number.isNaN(a.x)){const t=new D;return r.queryPathEnvelope(u,t),new w({pt:t.getCenter()})}if(r.getPointCount()<4)return new w({x:a.x,y:a.y});const b=p.getNAN(),n=[b.clone(),b.clone(),b.clone(),b.clone()],N=[Number.NaN,Number.NaN,Number.NaN,Number.NaN],g=[Number.NaN,Number.NaN,Number.NaN,Number.NaN];let E=!1,x=new A().getNearestCoordinate(r,a,!0,!1);if(x.m_distance===0&&(E=!0,n[0]=a,x=new A().getNearestCoordinate(r,a,!1,!1),x.m_distance>.25*s.minDimension()*1.66666666))return new w({x:a.x,y:a.y});N[0]=x.m_distance,g[0]=0;const f=new p;let c=!1,i=.25,y=-1;const _=new D;r.queryPathEnvelope(u,_);do{let t=Number.NaN;if(n[1]=this.calculateParacentroid_(r,G(_.xmin,_.xmax,i),o),n[1].isNAN()||(x=new A().getNearestCoordinate(r,n[1],!1,!1),t=x.m_distance),t>o&&X(r,n[1],o)===1)c=!0,N[1]=t,g[1]=p.sqrDistance(n[1],a);else if(t>y&&(y=t,f.setCoordsPoint2D(n[1])),i-=.01,i<.1){if(!(y>=0))break;c=!0,N[1]=y,n[1]=f,g[1]=p.sqrDistance(n[1],a)}}while(!c);c=!1,i=.5,y=-1;let T=.01,O=1;do{let t=Number.NaN;if(n[2]=this.calculateParacentroid_(r,G(_.xmin,_.xmax,i),o),n[2].isNAN()||(x=new A().getNearestCoordinate(r,n[2],!1,!1),t=x.m_distance),t>o&&X(r,n[2],o)===1)c=!0,N[2]=t,g[2]=p.sqrDistance(n[2],a);else if(t>y&&(y=t,f.setCoordsPoint2D(n[2])),i=.5+T*O,T+=.01,O*=-1,i<.3||i>.7){if(!(y>=0))break;c=!0,N[2]=y,n[2]=f,g[2]=p.sqrDistance(n[2],a)}}while(!c);c=!1,i=.75,y=-1;do{let t=Number.NaN;if(n[3]=this.calculateParacentroid_(r,G(_.xmin,_.xmax,i),o),n[3].isNAN()||(x=new A().getNearestCoordinate(r,n[3],!1,!1),t=x.m_distance),t>o&&X(r,n[3],o)===1)c=!0,N[3]=t,g[3]=p.sqrDistance(n[3],a);else if(t>y&&(y=t,f.setCoordsPoint2D(n[3])),i+=.01,i>.9){if(!(y>=0))break;c=!0,N[3]=y,n[3]=f,g[3]=p.sqrDistance(n[3],a)}}while(!c);const h=[0,1,2,3],S=E?0:1;for(let t=S;t<4;t++)for(let m=S;m<3;m++){const M=g[m],j=g[m+1];if(K(M,j)>0){const H=h[m];h[m]=h[m+1],h[m+1]=H,g[m]=j,g[m+1]=M}}let q=S,Y=0,C=0;for(let t=S;t<4;t++){switch(t){case 0:C=2*N[h[t]];break;case 1:C=1.66666666*N[h[t]];break;case 2:C=1.33333333*N[h[t]];break;case 3:C=N[h[t]]}C>Y&&(Y=C,q=h[t])}return k(!n[q].isNAN()),new w({x:n[q].x,y:n[q].y})}labelPointPolyline(e){const s=new p;if(e.getPointCount()>2*e.getPathCount()){let o=-1,l=-Number.MAX_VALUE;for(let a=0,b=e.getPathCount();a<b;a++)if(e.getPathSize(a)>2){const n=e.calculatePathLength2D(a);n>l&&(l=n,o=a)}const r=e.getPathStart(o),u=e.getPathEnd(o),d=Math.trunc((r+u)/2);s.assign(e.getXY(d))}else{let o=-Number.MAX_VALUE;const l=e.querySegmentIterator();for(;l.nextPath();)if(l.hasNextSegment()){const r=l.nextSegment(),u=r.calculateLength2D();u>o&&(o=u,s.assign(r.getCoord2D(r.lengthToT(.5*u))))}}return new w({x:s.x,y:s.y})}labelPointMultiPoint(e){const s=new D;e.queryEnvelope(s);const o=s.getCenter(),l=new A().getNearestCoordinate(e,o,!1,!1).m_coordinate;return new w({x:l.x,y:l.y})}labelPointEnvelope(e){const s=e.getCenterXY();return new w({x:s.x,y:s.y})}calculateParacentroid_(e,s,o){const l=new D;e.queryEnvelope(l);const r=new p(s,0);let u=Number.MAX_VALUE,d=Number.MAX_VALUE,a=!1,b=!1;const n=new te;n.setStartXYCoords(r.x,l.ymin-1),n.setEndXYCoords(r.x,l.ymax+1);const N=new D,g=new p,E=new p,x=W(p,2),f=e.querySegmentIterator();for(;f.nextPath();)for(;f.hasNextSegment();){const c=f.nextSegment();if(c.queryEnvelope(N),k(c.isMonotoneQuickAndDirty()),g.setCoordsPoint2D(n.getStartXY()),E.setCoordsPoint2D(n.getEndXY()),N.clipLine(g,E)===0||n.intersect(c,x,null,null,o)!==1)continue;const i=x[0].y;u>d?i<u&&(u=i,a=!0):i<d&&(d=i,b=!0)}return a&&b?r.y=(u+d)/2:r.setNAN(),r}}const L=new se;function ae(P){return L.execute(P,null)}function ie(P){const e=L.executeMany(new ne(P),null);return Array.from(e)}function le(){return L.supportsCurves()}function Q(P){return I(ae(U(P)),R(P))}function B(P){const e=P.map(U),s=R(P);return ie(e).map(o=>I(o,s))}const F=le(),ue=Object.freeze(Object.defineProperty({__proto__:null,execute:Q,executeMany:B,supportsCurves:F},Symbol.toStringTag,{value:"Module"})),ce=Object.freeze(Object.defineProperty({__proto__:null,execute:Q,executeMany:B,supportsCurves:F},Symbol.toStringTag,{value:"Module"}));export{ue as c,ce as l};
