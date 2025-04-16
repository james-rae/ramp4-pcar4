import{s as Q,t as V}from"./SimpleGeometryCursor-DSF_YyIm.js";import{z as W,N as q,a as Z,c as $}from"./ProjectionTransformation-CsWIlYdI.js";import{j as L,P as z,a as w,f as tt,z as st,Y as P,e as A,U as G,J as et,X as it}from"./Transformation2D-Dqu-RtOz.js";function nt(y,t,i,n,s,o){if(y===null&&z(""),y.getDimension()<1&&z(""),s>0||z(""),L(y),t===0||y.isEmpty())return y;const h=new d(o);return h.m_bUseZ=y.hasAttribute(1),h.m_bUseM=y.hasAttribute(2),h.m_inputGeometry=y,h.m_distance=t,h.m_tolerance=s,h.m_joins=i,h.m_miterLimit=n>1?n:1,h.m_progressCounter=0,h.constructOffset()}const T=1.4142135623730951,D=.017453292519943295,E=256,X=512,v=1024;class g{static construct(t,i,n){const s=new g;return s.x=t.x,s.y=t.y,s.m_next=-1,s.m_prev=-1,s.z=i,s.m=n,s.type=0,s}clone(){const t=new g;return t.x=this.x,t.y=this.y,t.m_next=this.m_next,t.m_prev=this.m_prev,t.z=this.z,t.m=this.m,t.type=this.type,t}asPoint2D(){return new A(this.x,this.y)}}function ot(){return{pt:new g,bAtExistingPt:!1}}class d{constructor(t){this.m_distance=-1,this.m_tolerance=-1,this.m_miterLimit=10,this.m_joins=0,this.m_progressCounter=0,this.m_bUseZ=!1,this.m_bUseM=!1,this.m_srcPts=[],this.m_srcPtCount=0,this.m_offsetPts=[],this.m_offsetPtCount=0,this.m_a1=0,this.m_a2=0,this.m_progressTracker=t}constructOffset(){const t=this.m_inputGeometry.getGeometryType();if(t===w.enumLine)return this.offsetLine();if(t===w.enumEnvelope)return this.offsetEnvelope();if(tt(t)){const i=new q;return i.addSegment(this.m_inputGeometry,!0),this.m_inputGeometry=i,this.constructOffset()}if(t===w.enumPolyline){const i=new q;return this.offsetMultiPath(i),i}if(t===w.enumPolygon){const i=new Z;return this.offsetMultiPath(i),i}st("")}offsetLine(){const t=this.m_inputGeometry,i=t.getStartXY(),n=t.getEndXY(),s=new A;s.setSub(n,i),s.normalize(),s.leftPerpendicularThis(),s.scale(this.m_distance),i.addThis(s),n.addThis(s);const o=t.clone();return o.setStartXY(i),o.setEndXY(n),o}offsetEnvelope(){const t=this.m_inputGeometry;if(this.m_distance>0&&this.m_joins!==2){const n=new Z;return n.addEnvelope(t,!1),this.m_inputGeometry=n,this.constructOffset()}const i=t.clone();return i.inflateCoords(this.m_distance,this.m_distance),i}progress(){}static buildPoint(t,i,n,s){s.x=t.x+i*Math.cos(n),s.y=t.y+i*Math.sin(n),s.type=t.type,s.z=t.z,s.m=t.m,s.m_next=-1,s.m_prev=-1}addPoint(t){this.m_offsetPts.push(t.clone()),this.m_offsetPtCount++}addPointEx(t,i){if(this.m_offsetPtCount===0)return void this.addPoint(t);const n=this.m_srcPtCount,s=this.m_srcPts[i===0?n-1:i-1],o=this.m_srcPts[i],h=d.dotSign(s,o,this.m_offsetPts[this.m_offsetPtCount-1],t);if(h>0)this.addPoint(t);else if(h<0)if(d.dotSign(s,o,o,this.m_offsetPts[this.m_offsetPtCount-1])>0){const e=new g;let m;m=i===0?n-2:i===1?n-1:i-2;const u=this.m_srcPts[m],c=Math.atan2(s.y-u.y,s.x-u.x);if(d.buildPoint(s,this.m_distance,c-P,e),this.m_offsetPts[this.m_offsetPtCount-1]=e,this.m_joins===1||this.m_joins===2){e.x=.5*(e.x+s.x),e.y=.5*(e.y+s.y),this.addPoint(e),d.buildPoint(s,this.m_distance,this.m_a1+P,e);const r=e.clone();r.x=.5*(r.x+s.x),r.y=.5*(r.y+s.y),r.type|=E,this.addPoint(r),this.addPoint(e)}else d.buildPoint(s,this.m_distance,this.m_a1+P,e),e.type|=E,this.addPoint(e);this.addPointEx(t,i)}else{const e=new g;if(d.buildPoint(o,this.m_distance,this.m_a1+P,e),this.addPoint(e),this.m_joins===1||this.m_joins===2){e.x=.5*(e.x+o.x),e.y=.5*(e.y+o.y),this.addPoint(e),d.buildPoint(o,this.m_distance,this.m_a2-P,e);const m=e.clone();m.x=.5*(m.x+o.x),m.y=.5*(m.y+o.y),m.type|=E,this.addPoint(m),this.addPoint(e)}else d.buildPoint(o,this.m_distance,this.m_a2-P,e),e.type|=E,this.addPoint(e)}}buildOffset(){const t=new g,i=this.m_srcPtCount;this.m_offsetPtCount=0;const n=.5*this.m_tolerance;let s=0,o=0;for(let h=0;h<i;h++){const e=this.m_srcPts[h],m=h===0?this.m_srcPts[i-1]:this.m_srcPts[h-1],u=h===i-1?this.m_srcPts[0]:this.m_srcPts[h+1];let c,r,b=0;{const f=m.x-e.x,a=m.y-e.y,_=u.x-e.x,l=u.y-e.y;c=Math.atan2(a,f),r=Math.atan2(l,_),this.m_a1=c,this.m_a2=r,h===0&&(s=c,o=r),b=A.orientationRobust(e.asPoint2D(),m.asPoint2D(),u.asPoint2D())}const M=r;if(r<c&&(r+=G),b*this.m_distance>0)if(this.m_joins===1||this.m_joins===2){d.buildPoint(e,this.m_distance,c+P,t),this.addPoint(t);const f=.001;t.x=e.x+(t.x-e.x)*f,t.y=e.y+(t.y-e.y)*f,this.addPoint(t),d.buildPoint(e,this.m_distance,r-P,t);const a=t.clone();a.x=e.x+(a.x-e.x)*f,a.y=e.y+(a.y-e.y)*f,a.type|=E,this.addPoint(a),this.addPoint(t)}else{const f=.5*(r-c),a=f===0?this.m_distance:this.m_distance/Math.abs(Math.sin(f));d.buildPoint(e,a,.5*(c+r),t),this.addPointEx(t,h)}else if(e.type&X){const f=1-n/Math.abs(this.m_distance);let a=1,_=this.m_distance<0?-Math.PI:Math.PI;if(f>-1&&f<1){let p=2*Math.acos(f);p<D&&(p=D),a=Math.trunc(Math.PI/p+1.5),a>1&&(_/=a)}a<=1&&(a=2,_/=2);let l=c+P;d.buildPoint(e,this.m_distance,l,t),h===0&&(t.type|=v),this.addPointEx(t,h);const x=this.m_distance/Math.cos(_/2);for(l+=_/2,d.buildPoint(e,x,l,t),t.type|=v,this.addPoint(t);--a>0;)l+=_,d.buildPoint(e,x,l,t),t.type|=v,this.addPoint(t);d.buildPoint(e,this.m_distance,r-P,t),t.type|=v,this.addPoint(t)}else if(this.m_joins!==1)if(this.m_joins!==0)if(this.m_joins!==2){let f;if(r=M,this.m_distance>0?(r>c&&(r-=G),f=c-r<P):(r<c&&(r+=G),f=r-c<P),f){const a=this.m_distance*T;let _;_=a<0?c+.25*Math.PI:c+3*Math.PI*.25,d.buildPoint(e,a,_,t),this.addPointEx(t,h),_=a<0?r-.25*Math.PI:r-3*Math.PI*.25,d.buildPoint(e,a,_,t),this.addPoint(t)}else{const a=.5*(r-c),_=this.m_distance/Math.abs(Math.sin(a));r<c&&(r+=G),d.buildPoint(e,_,(c+r)/2,t),this.addPointEx(t,h)}}else{const f=m.x-e.x,a=m.y-e.y,_=u.x-e.x,l=u.y-e.y,x=(f*_+a*l)/Math.sqrt(f*f+a*a)/Math.sqrt(_*_+l*l);if(x>1-1e-8){d.buildPoint(e,T*this.m_distance,r-.25*Math.PI,t),this.addPointEx(t,h),d.buildPoint(e,T*this.m_distance,r+.25*Math.PI,t),this.addPoint(t);continue}const p=Math.abs(this.m_distance/Math.sin(.5*Math.acos(x))),U=Math.abs(this.m_miterLimit*this.m_distance);if(p>U){const B=.5*(r-c),J=this.m_distance/Math.abs(Math.sin(B));d.buildPoint(e,J,.5*(c+r),t);const N=A.construct(t.x,t.y),O=A.construct(e.x,e.y),C=new A;C.setSub(N,O);const j=new A;j.setScaleAdd(U/C.length(),C,O);const H=Math.sqrt(p*p-this.m_distance*this.m_distance),K=(p-U)*Math.abs(this.m_distance)/H;this.m_distance>0?C.leftPerpendicularThis():C.rightPerpendicularThis(),C.scale(K/C.length());const I=new A;I.setAdd(j,C);const S=new A;S.setSub(j,C),t.x=I.x,t.y=I.y,this.addPointEx(t,h),t.x=S.x,t.y=S.y,this.addPoint(t);continue}const R=.5*(r-c),F=this.m_distance/Math.abs(Math.sin(R));d.buildPoint(e,F,.5*(c+r),t),this.addPointEx(t,h)}else{const f=1-n/Math.abs(this.m_distance);let a=1,_=r-P-(c+P);if(f>-1&&f<1){let p=2*Math.acos(f);p<D&&(p=D),a=Math.trunc(Math.abs(_)/p+1.5),a>1&&(_/=a)}const l=this.m_distance/Math.cos(.5*_);let x=c+P+.5*_;for(d.buildPoint(e,l,x,t),this.addPointEx(t,h);--a>0;)x+=_,d.buildPoint(e,l,x,t),this.addPoint(t)}else d.buildPoint(e,this.m_distance,c+P,t),this.addPointEx(t,h),d.buildPoint(e,this.m_distance,r-P,t),this.addPoint(t)}return this.m_a1=s,this.m_a2=o,this.addPointEx(this.m_offsetPts[0],0),this.m_offsetPts[0]=this.m_offsetPts[this.m_offsetPtCount-1].clone(),this.removeBadSegsFast()}removeBadSegsFast(){let t=!1;for(let n=0;n<this.m_offsetPtCount;n++){const s=this.m_offsetPts[n];s.m_next=n+1,s.m_prev=n-1}this.m_offsetPts[0].m_prev=this.m_offsetPtCount-2,this.m_offsetPts[this.m_offsetPtCount-2].m_next=0;let i=0;for(let n=0;n<this.m_offsetPtCount;n++)if(this.m_offsetPts[i].type&E){const s=this.deleteClosedSeg(i);if(s===-1){t=!0;break}i=s}else i=this.m_offsetPts[i].m_next;return!t&&(this.compressOffsetArray(i),!0)}deleteClosedSeg(t){const i=this.m_offsetPtCount-1;let n,s,o=t;for(let h=1;h<=i-2;h++){o=this.m_offsetPts[o].m_next,n=o,s=t;for(let e=1;e<=h;e++){if(s=this.m_offsetPts[s].m_prev,!(this.m_offsetPts[s].type&E||this.m_offsetPts[n].type&E)){const m=this.handleClosedIntersection(s,n);if(m!==-1)return m}n=this.m_offsetPts[n].m_prev}}return-1}handleClosedIntersection(t,i){const n=this.m_offsetPts[this.m_offsetPts[t].m_prev],s=this.m_offsetPts[t],o=this.m_offsetPts[this.m_offsetPts[i].m_prev],h=this.m_offsetPts[i];if(!this.sectGraphicRect(n,s,o,h))return-1;const e=ot();if(((s.x-n.x)*(h.y-o.y)-(s.y-n.y)*(h.x-o.x))*this.m_distance<0&&this.findIntersection(n,s,o,h,e)&&!e.bAtExistingPt){const m=Math.sqrt((s.x-n.x)*(s.x-n.x)+(s.y-n.y)*(s.y-n.y)),u=(s.x-n.x)/m,c=(s.y-n.y)/m,r=Math.sqrt((h.x-o.x)*(h.x-o.x)+(h.y-o.y)*(h.y-o.y)),b=(h.x-o.x)/r,M=(h.y-o.y)/r;let f=!1;const a=e.pt.clone();a.x+=(u+b)*1e-8,a.y+=(c+M)*1e-8;let _=o,l=e.pt,x=this.m_offsetPts[t].m_prev;for(;l.y>a.y!=_.y>a.y&&a.x<(_.x-l.x)*(a.y-l.y)/(_.y-l.y)+l.x&&(f=!f),_=l,x=this.m_offsetPts[x].m_next,x!==i;)l=this.m_offsetPts[x];if(f)return-1;const p=this.m_offsetPts[t].m_prev;return e.pt.type=s.type,e.pt.m_next=i,e.pt.m_prev=p,this.m_offsetPts[t]=e.pt,this.m_offsetPts[i].m_prev=t,i}return-1}sectGraphicRect(t,i,n,s){return Math.max(t.x,i.x)>=Math.min(n.x,s.x)&&Math.max(n.x,s.x)>=Math.min(t.x,i.x)&&Math.max(t.y,i.y)>=Math.min(n.y,s.y)&&Math.max(n.y,s.y)>=Math.min(t.y,i.y)}findIntersection(t,i,n,s,o){let h,e,m,u;return o.bAtExistingPt=!1,h=(i.y-t.y)*(s.x-n.x)-(i.x-t.x)*(s.y-n.y),e=(n.y-t.y)*(i.x-t.x)-(n.x-t.x)*(i.y-t.y),m=h===0?2:e/h,m>=0&&m<=1&&(u=m,h=(s.y-n.y)*(i.x-t.x)-(s.x-n.x)*(i.y-t.y),e=(t.y-n.y)*(s.x-n.x)-(t.x-n.x)*(s.y-n.y),m=h===0?2:e/h,m>=0&&m<=1)&&(o.pt.x=t.x+m*(i.x-t.x),o.pt.y=t.y+m*(i.y-t.y),this.m_bUseZ&&(o.pt.z=n.z+u*(s.z-n.z)),this.m_bUseM&&(o.pt.m=n.m+u*(s.m-n.m)),u!==0&&u!==1||m!==0&&m!==1||(o.bAtExistingPt=!0),!((u===0||u===1)&&m>0&&m<1||(m===0||m===1)&&u>0&&u<1))}compressOffsetArray(t){for(;this.m_offsetPts[t].m_prev<t;)t=this.m_offsetPts[t].m_prev;let i=0,n=t;do{const s=this.m_offsetPts[n].clone();this.m_offsetPts[i]=s,n=s.m_next,i++}while(n!==t);this.m_offsetPts[i]=this.m_offsetPts[0].clone(),this.m_offsetPtCount=i+1}addPart(t,i){if(!(i<2))for(let n=0;n<i;n++){const s=this.m_offsetPts[t+n];if(n?this.m_bUseZ?this.m_resultPath.lineTo3DCoords(s.x,s.y,s.z):this.m_resultPath.lineToCoords(s.x,s.y):this.m_bUseZ?this.m_resultPath.startPath3DCoords(s.x,s.y,s.z):this.m_resultPath.startPathCoords(s.x,s.y),this.m_bUseM){const o=this.m_resultPath.getPointCount()-1;this.m_resultPath.setAttribute(2,o,0,s.m)}}}offsetMultiPath(t){const i=$(this.m_inputGeometry,0,this.m_tolerance,0,this.m_progressTracker,12e3),n=i.querySegmentIterator();n.resetToFirstPath();let s=-1;for(;n.nextPath();)s++,this.offsetPath(i,s,t)}offsetPath(t,i,n){let s=t.getPathStart(i),o=t.getPathEnd(i);if(this.m_resultPath=n,t.isClosedPath(i)){const h=t.getXY(s);for(;o>s&&t.getXY(o-1).equals(h);)o--;if(o-s>=2){this.m_srcPtCount=o-s,this.m_srcPts.length=this.m_srcPtCount;for(let e=s;e<o;e++)this.progress(),this.m_srcPts[e-s]=g.construct(t.getXY(e),this.m_bUseZ?t.getAttributeAsDbl(1,e,0):0,this.m_bUseM?t.getAttributeAsDbl(2,e,0):0);this.buildOffset()&&this.addPart(0,this.m_offsetPtCount-1)}}else{const h=t.getXY(s);for(;s<o-1&&t.getXY(s+1).equals(h);)s++;const e=t.getXY(o-1);for(;s<o-1&&t.getXY(o-2).equals(e);)o--;if(o-s>=2){this.m_srcPtCount=2*(o-s)-2,this.m_srcPts.length=this.m_srcPtCount;let m=g.construct(h,this.m_bUseZ?t.getAttributeAsDbl(1,s,0):0,this.m_bUseM?t.getAttributeAsDbl(2,s,0):0);m.type|=X+v,this.m_srcPts[0]=m;let u=1,c=this.m_srcPtCount-1;for(let r=s+1;r<o-1;r++,u++,c--)this.progress(),m=g.construct(t.getXY(r),this.m_bUseZ?t.getAttributeAsDbl(1,r,0):0,this.m_bUseM?t.getAttributeAsDbl(2,r,0):0),this.m_srcPts[u]=m.clone(),m.type|=v,this.m_srcPts[c]=m.clone();if(m=g.construct(t.getXY(o-1),this.m_bUseZ?t.getAttributeAsDbl(1,o-1,0):0,this.m_bUseM?t.getAttributeAsDbl(2,o-1,0):0),m.type|=X,this.m_srcPts[u]=m.clone(),this.buildOffset())if(this.m_offsetPts.length>=2){let r=-1,b=-1,M=!!(this.m_offsetPts[this.m_offsetPtCount-1].type&v);M||(r=0);for(let f=1;f<this.m_offsetPtCount;f++){this.progress();const a=!!(this.m_offsetPts[f].type&v);a?M||(b=f-1,b-r+1>1&&this.addPart(r,b-r+1)):M&&(r=f-1),M=a}M||(b=this.m_offsetPtCount-1,b-r+1>1&&this.addPart(r,b-r+1))}else{const r=this.m_offsetPtCount-1;r-0>=1&&this.addPart(0,r-0+1)}}}this.m_srcPts.length=0,this.m_srcPtCount=0,this.m_offsetPts.length=0,this.m_offsetPtCount=0}static dotSign(t,i,n,s){const o=i.x-t.x,h=i.y-t.y,e=s.x-n.x,m=s.y-n.y,u=et(o,h,e,m);return it(u)}}class ht{getOperatorType(){return 10108}accelerateGeometry(t,i,n){return!1}canAccelerateGeometry(t){return!1}supportsCurves(){return!0}executeMany(t,i,n,s,o,h,e){return new k(t,i,n,s,o,h,e)}execute(t,i,n,s,o,h,e){return new k(null,i,n,s,o,h,e).offset(t)}}class k extends V{constructor(t,i,n,s,o,h,e){super(),this.m_progressTracker=e,this.m_index=-1,this.m_inputGeoms=t,this.m_spatialReference=i,this.m_distance=n,this.m_joins=s,this.m_miterLimit=o,this.m_flattenError=h}tock(){return!0}getRank(){return 1}next(){if(!this.m_inputGeoms)return null;let t;for(;t=this.m_inputGeoms.next();)return this.m_index=this.m_inputGeoms.getGeometryID(),this.offset(t);return null}getGeometryID(){return this.m_index}offset(t){let i;return L(t),i=this.m_flattenError<=0?W(this.m_spatialReference,t,!0).total():this.m_flattenError,nt(t,this.m_distance,this.m_joins,this.m_miterLimit,i,this.m_progressTracker)}}const Y=new ht;function rt(y,t,i,n,s,o){return Y.execute(y,t,i,n,s,o,null)}function mt(y,t,i,n,s,o){const h=Y.executeMany(new Q(y),t,i,n,s,o,null);return Array.from(h)}function at(){return Y.supportsCurves()}export{at as D,mt as j,rt as w};
