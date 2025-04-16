import{s as he,t as Q}from"./SimpleGeometryCursor-B92kdZ15.js";import{a as H,P as K,g as Ce,z as we,i as ue,l as De,p as Te,E as ve,m as Ie,R as fe,e as f,f as Se,b as Z,o as U,x as ae,j as ye,c as Me,L as Ve,$ as Ee}from"./Transformation2D-DZfKTQC6.js";import{a7 as _e,g as de,a8 as Re,a as Y,n as L,w as ge,N as $,e as O,d as ne,f as te,Y as ke,r as re,F as Ae,T as me,a9 as W,R as xe,aa as Ye,ab as Be}from"./ProjectionTransformation-BzHRnDvu.js";import{d5 as Xe,d6 as Fe}from"./main-D_jCcUNd.js";import{i as Ge}from"./GeometryCleaner-BEJM7I4l-DUttS_B6.js";import{P as Ne}from"./OperatorGeneralize-mYhamlIy.js";class Le{getOperatorType(){return 10104}accelerateGeometry(e,t,s){return!1}canAccelerateGeometry(e){return!1}supportsCurves(){return!0}isSimple(e,t,s,n,i){return Ye(e,t,s,n,i)===5}executeMany(e,t,s,n){return new ze(e,t,s,n)}execute(e,t,s,n){const i=new he([e]),r=this.executeMany(i,t,s,n).next();return r||Z("null output"),r}}class ze extends Q{constructor(e,t,s,n){super(),e||K(""),this.m_progressTracker=n,this.m_bForceSimplify=s,this.m_index=-1,this.m_inputGeometryCursor=e,this.m_spatialReference=t}next(){const e=this.m_inputGeometryCursor.next();return e?(ye(e),this.m_index=this.m_inputGeometryCursor.getGeometryID(),this.simplify(e)):null}getGeometryID(){return this.m_index}tock(){return!1}getRank(){return 1}simplify(e){return e||K(""),Be(e,this.m_spatialReference,this.m_bForceSimplify,this.m_progressTracker)}}var x;function N(m,e,t,s,n,i){return{m_from:m.clone(),m_to:e.clone(),m_center:t.clone(),m_next:n,m_type:s}}function se(m,e,t,s,n){return{m_from:m.clone(),m_to:e.clone(),m_next:t,m_type:4,m_center:new f}}(function(m){m[m.enumDummy=256]="enumDummy",m[m.enumLine=1]="enumLine",m[m.enumArc=2]="enumArc",m[m.enumMiter=8]="enumMiter",m[m.enumBevel=16]="enumBevel",m[m.enumJoinMask=26]="enumJoinMask",m[m.enumConnectionMask=27]="enumConnectionMask"})(x||(x={}));class qe extends Q{constructor(e,t,s,n,i,r,o,h,l,a){super(),this.m_index=0,this.m_bufferedPolygon=null,this.m_x=0,this.m_y=0,this.m_progressTracker=a,this.m_parent=e,this.m_mp=t,this.m_distance=s,this.m_spatialReference=n,this.m_densifyDist=h,this.m_maxVertexInCompleteCircle=l,this.m_joins=i,this.m_caps=r,this.m_miterLimit=o}next(){const e=new O;for(;;){if(this.m_index===this.m_mp.getPointCount())return null;if(this.m_caps===1)return this.m_index=this.m_mp.getPointCount(),new Y({vd:this.m_mp.getDescription()});if(this.m_mp.getPointByVal(this.m_index,e),this.m_index++,!e.isEmpty())break}let t,s=!1;if(this.m_bufferedPolygon===null&&(this.m_x=e.getX(),this.m_y=e.getY(),this.m_bufferedPolygon=this.m_parent.buffer(e,this.m_distance,this.m_spatialReference,this.m_joins,this.m_caps,this.m_miterLimit,this.m_densifyDist,this.m_maxVertexInCompleteCircle),s=!0),t=this.m_index<this.m_mp.getPointCount()?this.m_bufferedPolygon.clone():this.m_bufferedPolygon,!s){const n=new ae,i=e.getX()-this.m_x,r=e.getY()-this.m_y;n.setShiftCoords(i,r),t.applyTransformation(n)}return xe(t,0),t}getGeometryID(){return 0}getRank(){return 1}tock(){return!0}}class $e extends Q{constructor(e){super(),this.m_currentPathIndex=0,this.m_polyline=e}next(){if(!this.m_polyline)return null;const e=this.m_polyline.getImpl(),t=e.getPathCount();if(this.m_currentPathIndex<t){const s=this.m_currentPathIndex;if(this.m_currentPathIndex++,!e.isClosedPathInXYPlane(s)){let i=e.getXY(e.getPathEnd(s)-1);for(;this.m_currentPathIndex<e.getPathCount();){const r=e.getXY(e.getPathStart(this.m_currentPathIndex));if(e.isClosedPathInXYPlane(this.m_currentPathIndex)||!r.equals(i))break;i=e.getXY(e.getPathEnd(this.m_currentPathIndex)-1),this.m_currentPathIndex++}}if(s===0&&this.m_currentPathIndex===this.m_polyline.getPathCount()){const i=this.m_polyline;return this.m_polyline=null,i}const n=new $({vd:this.m_polyline.getDescription()});n.addPath(this.m_polyline,s,!0);for(let i=s+1;i<this.m_currentPathIndex;i++)n.addSegmentsFromPath(this.m_polyline,i,0,e.getSegmentCountPath(i),!1);return this.m_currentPathIndex===this.m_polyline.getPathCount()&&(this.m_polyline=null),n}return null}getGeometryID(){return 0}getRank(){return 1}tock(){return!0}}class je extends Q{constructor(e,t,s){super(),this.m_geometry=null,this.m_index=0,this.m_bufferer=e,this.m_geoms=t,this.m_index=0,this.m_bFilter=s}next(){if(this.m_geometry===null&&(this.m_index=0,this.m_geometry=this.m_geoms.next(),!this.m_geometry))return null;const e=this.m_geometry.getImpl();if(this.m_index<e.getPathCount()){const t=this.m_index;return this.m_index++,this.m_bufferer.bufferPolylinePath(this.m_geometry,t,this.m_bFilter)}return this.m_geometry=null,this.next()}getGeometryID(){return 0}getRank(){return 1}tock(){return!0}}class Oe extends Q{constructor(e){super(),this.m_index=0,this.m_bufferer=e}next(){const e=this.m_bufferer.m_geometry;if(this.m_index<e.getPathCount()){const t=this.m_index,s=e.calculateRingArea2D(this.m_index);for(U(s>0),this.m_index++;this.m_index<e.getPathCount()&&!(e.calculateRingArea2D(this.m_index)>0);)this.m_index++;let n;return n=t===0&&this.m_index===e.getPathCount()?this.m_bufferer.bufferPolygonImpl(e,0,e.getPathCount()):this.m_bufferer.bufferPolygonImpl(e,t,this.m_index),n}return null}getGeometryID(){return 0}getRank(){return 1}tock(){return!0}}class Ue{constructor(e){this.m_geometry=null,this.m_bufferCommands=[],this.m_originalGeomType=H.enumUnknown,this.m_maxVertexInCompleteCircle=-1,this.m_circleTemplateSize=-1,this.m_oldCircleTemplateSize=0,this.m_spatialReference=null,this.m_tolerance=new _e(0,0),this.m_smallTolerance=new _e(0,0),this.m_filterTolerance=0,this.m_densifyDist=-1,this.m_distance=Number.NaN,this.m_absDistance=0,this.m_absDistanceReversed=0,this.m_dA=-1,this.m_miterLimit=4,this.m_joins=0,this.m_caps=0,this.m_bRoundBuffer=!0,this.m_bOutputLoops=!0,this.m_bFilter=!0,this.m_circleTemplate=[],this.m_leftStack=[],this.m_middleStack=[],this.m_helperLine1=new de,this.m_helperLine2=new de,this.m_helperArray=[],this.m_progressCounter=0,this.m_densificator=Re.constructDefault(e),this.m_progressTracker=e}buffer(e,t,s,n,i,r,o,h){if(e||K("Geometry.Bufferer.Impl.Buffer"),o<0&&K("Geometry.Bufferer.Impl.Buffer"),Ce(e.getGeometryType())&&we("Unsupported geometry type."),e.isEmpty())return new Y({vd:e.getDescription()});if(this.m_joins=n,this.m_caps=i,this.m_bRoundBuffer=!1,this.m_miterLimit=r,this.m_originalGeomType=e.getGeometryType(),ue(this.m_originalGeomType)?this.m_bRoundBuffer=this.m_joins===0:De(this.m_originalGeomType)?this.m_bRoundBuffer=this.m_caps===0:Te(this.m_originalGeomType)&&(this.m_bRoundBuffer=this.m_joins===0&&this.m_caps===0),this.m_bFilter=this.m_bRoundBuffer,this.m_geometry=Ge(e),this.m_geometry.isEmpty())return new Y({vd:e.getDescription()});const l=new L;this.m_geometry.queryLooseEnvelope(l),t>0&&l.inflateCoords(t,t),this.m_tolerance=ge(s,l,!0),this.m_smallTolerance=ge(null,l,!0),h<=0&&(h=96),this.m_spatialReference=s,this.m_distance=t,this.m_absDistance=Math.abs(this.m_distance),this.m_absDistanceReversed=this.m_absDistance!==0?1/this.m_absDistance:0,Number.isNaN(o)||o===0?o=1e-5*this.m_absDistance:o>.5*this.m_absDistance&&(o=.5*this.m_absDistance),h<12&&(h=12);const a=Math.abs(t)*(1-Math.cos(Math.PI/h));if(a>o)o=a;else if(t!==0){const u=Math.PI/Math.acos(1-o/Math.abs(t));u<h-1&&(h=Math.trunc(u))<12&&(h=12,o=Math.abs(t)*(1-Math.cos(Math.PI/h)))}this.m_densifyDist=o,this.m_maxVertexInCompleteCircle=h,this.m_filterTolerance=this.m_bRoundBuffer?Math.min(this.m_smallTolerance.total(),.25*this.m_densifyDist):0,this.m_circleTemplateSize=this.calcN(),this.m_circleTemplateSize!==this.m_oldCircleTemplateSize&&(this.m_circleTemplate.length=0,this.m_oldCircleTemplateSize=this.m_circleTemplateSize),this.m_densifyDist>0&&ve(this.m_geometry)&&(this.m_geometry=this.m_densificator.densifyEx(this.m_geometry,0,this.m_densifyDist,0,this.m_joins!==0,Ie()));const c=this.bufferImpl();return this.m_geometry=null,c}generateCircleTemplate(){if(this.m_circleTemplate.length)return;const e=this.m_circleTemplateSize,t=Math.trunc((e+3)/4),s=.5*Math.PI/t;this.m_dA=s,this.m_circleTemplate=fe(f,4*t);const n=Math.cos(s),i=Math.sin(s),r=f.construct(0,1);for(let o=0;o<t;o++)this.m_circleTemplate[o+0*t].setCoords(r.y,-r.x),this.m_circleTemplate[o+1*t].setCoords(-r.x,-r.y),this.m_circleTemplate[o+2*t].setCoords(-r.y,r.x),this.m_circleTemplate[o+3*t].setCoords(r.x,r.y),r.rotateReverse(n,i)}bufferImpl(){const e=this.m_geometry.getGeometryType();if(Se(e)){const t=new $({vd:this.m_geometry.getDescription()});return t.addSegment(this.m_geometry,!0),this.m_geometry=t,this.bufferImpl()}if(this.m_distance<=this.m_tolerance.total()){if(!ue(e))return new Y({vd:this.m_geometry.getDescription()});if(this.m_distance<0){const t=new L;if(this.m_geometry.queryEnvelope(t),t.width()<=2*this.m_absDistance||t.height()<=2*this.m_absDistance)return new Y({vd:this.m_geometry.getDescription()})}}switch(this.m_geometry.getGeometryType()){case H.enumPoint:return this.bufferPoint();case H.enumMultiPoint:return this.bufferMultiPoint();case H.enumPolyline:return this.bufferPolyline();case H.enumPolygon:return this.bufferPolygon();case H.enumEnvelope:return this.bufferEnvelope();default:Z("")}}bufferPolyline(){if(this.isDegenerateGeometry(this.m_geometry)){const l=new O;this.m_geometry.getPointByVal(0,l);const a=new L;return this.m_geometry.queryEnvelope(a),l.setXY(a.getCenter()),this.bufferDegeneratePath(l,!0)}const e=this.m_geometry,t=this.m_geometry.getDescription();this.m_geometry=null;const s=new $e(e);let n,i;n=this.m_joins===0?new Ne().executeMany(s,.25*this.m_densifyDist,!1,this.m_progressTracker):s,i=this.m_bRoundBuffer?new Le().executeMany(n,null,!0,this.m_progressTracker):n;const r=new je(this,i,this.m_bFilter),o=new ne().executeMany(r,this.m_spatialReference,this.m_progressTracker,2),h=new te().executeMany(o,this.m_spatialReference,!1,this.m_progressTracker).next();return h!==null?h:new Y({vd:t})}bufferPolygon(){if(this.m_distance===0)return this.m_geometry;this.generateCircleTemplate();const e=new te().execute(this.m_geometry,null,!1,this.m_progressTracker);if(this.m_distance<0){if(this.m_geometry=e,this.m_geometry.isEmpty())return this.m_geometry;const t=this.m_geometry,s=this.bufferPolygonImpl(t,0,t.getPathCount());return new te().execute(s,this.m_spatialReference,!1,this.m_progressTracker)}{if(this.m_geometry=e,this.isDegenerateGeometry(this.m_geometry)){const i=new O;this.m_geometry.getPointByVal(0,i);const r=new L;return this.m_geometry.queryEnvelope(r),i.setXY(r.getCenter()),this.bufferDegeneratePath(i,!0)}const t=new Oe(this),s=new ne().executeMany(t,this.m_spatialReference,this.m_progressTracker,2),n=new te().executeMany(s,this.m_spatialReference,!1,this.m_progressTracker).next();return n!==null?n:new Y({vd:this.m_geometry.getDescription()})}}bufferPolygonImpl(e,t,s){const n=e,i=n.getImpl();let r=new Y({vd:e.getDescription()});for(let o=t;o<s;o++){if(i.getPathSize(o)<1)continue;const h=i.calculateRingArea2D(o),l=new L;if(i.queryPathEnvelope(o,l),this.m_distance>0)if(h>0)if(this.isDegeneratePath(i,o)){const a=new O;i.getPointByVal(i.getPathStart(o),a),a.setXY(l.getCenter()),r.add(this.bufferDegeneratePath(a,!0),!1)}else{const a=new $({vd:e.getDescription()}),c=a.getImpl();if(ke(this.m_geometry,o)){const u=this.bufferConvexPath(n,o);r.add(u,!1)}else{this.bufferClosedPath(this.m_geometry,o,c,this.m_bRoundBuffer,1);const u=this.bufferCleanup(a);r.add(u,!1)}}else{if(l.width()+this.m_tolerance.total()<=2*this.m_absDistance||l.height()+this.m_tolerance.total()<=2*this.m_absDistance)continue;const a=new $({vd:e.getDescription()}),c=a.getImpl();if(this.bufferClosedPath(this.m_geometry,o,c,this.m_bRoundBuffer,1),!a.isEmpty()){const u=l,_=Math.max(1,this.m_absDistance),g=u.clone();g.inflateCoords(_,_),c.addEnvelope(g,!1);const P=this.bufferCleanup(a);r.reserve(r.getPointCount()+P.getPointCount()-4),oe(P,r,g,!0)}}else if(h>0){if(l.width()+this.m_tolerance.total()<=2*this.m_absDistance||l.height()+this.m_tolerance.total()<=2*this.m_absDistance)continue;const a=new $({vd:e.getDescription()}),c=a.getImpl();if(this.bufferClosedPath(this.m_geometry,o,c,this.m_bRoundBuffer,-1),!a.isEmpty()){const u=new L;c.queryLooseEnvelope(u);const _=Math.max(1,this.m_absDistance),g=u.clone();g.inflateCoords(_,_),c.addEnvelope(g,!1),oe(this.bufferCleanup(a),r,g,!0)}}else{const a=new $({vd:e.getDescription()}),c=a.getImpl();this.bufferClosedPath(this.m_geometry,o,c,this.m_bRoundBuffer,-1);const u=this.bufferCleanup(a);for(let _=0,g=u.getPathCount();_<g;_++)r.addPath(u,_,!0)}}if(this.m_distance>0)return r.getPathCount()>1?this.bufferCleanup(r):ie(r);{const o=new L;if(r.queryLooseEnvelope(o),r.isEmpty())return ie(r);{const h=Math.max(1,this.m_absDistance),l=o.clone();l.inflateCoords(h,h),r.addEnvelope(l,!1);const a=this.bufferCleanup(r);r=new Y;const c=new Y({vd:a.getDescription()});return oe(a,c,l,!1),ie(c)}}}bufferPoint(){return this.bufferPointImpl(this.m_geometry)}bufferPointImpl(e){const t=new Y({vd:e.getDescription()});return this.m_caps===0?(this.addCircle(t.getImpl(),e),this.setStrongSimple(t)):this.m_caps===2?(this.addSquare(t.getImpl(),e),this.setStrongSimple(t)):t}bufferDegeneratePath(e,t){const s=new Y({vd:e.getDescription()});return t&&this.m_joins===0||!t&&this.m_caps===0?(this.addCircle(s.getImpl(),e),this.setStrongSimple(s)):t||this.m_caps!==2?s:(this.addSquare(s.getImpl(),e),this.setStrongSimple(s))}bufferMultiPoint(){const e=new qe(this,this.m_geometry,this.m_distance,this.m_spatialReference,this.m_joins,this.m_caps,this.m_miterLimit,this.m_densifyDist,this.m_maxVertexInCompleteCircle,this.m_progressTracker);return new ne().executeMany(e,this.m_spatialReference,this.m_progressTracker,2).next()}bufferEnvelope(){let e=new Y({vd:this.m_geometry.getDescription()});if(this.m_distance<=0){if(this.m_distance===0)e.addEnvelope(this.m_geometry,!1),pe(this.m_geometry,this.m_tolerance.total())&&(e=this.setStrongSimple(e));else{const s=new re;this.m_geometry.queryEnvelope(s),s.inflateCoords(this.m_distance,this.m_distance),e.addEnvelope(s,!1),pe(s,this.m_tolerance.total())&&(e=this.setStrongSimple(e))}return e}if(this.m_joins===1){const s=new re({copy:this.m_geometry});return s.inflateCoords(this.m_absDistance,this.m_absDistance),e.addEnvelope(s,!1),e}const t=this.m_geometry.clone();if(t.width()===0||t.height()===0){if(t.width()===0&&t.height()===0){const i=new O({vd:this.m_geometry.getDescription()});return t.queryCornerByVal(0,i),this.m_geometry=i,this.bufferImpl()}const s=new $({vd:this.m_geometry.getDescription()}),n=new O;return t.queryCornerByVal(0,n),s.startPathPoint(n),t.queryCornerByVal(2,n),s.lineToPoint(n),this.m_geometry=s,this.bufferImpl()}return e.addEnvelope(this.m_geometry,!1),this.m_geometry=e,this.bufferConvexPath(e,0)}bufferConvexPath(e,t){this.generateCircleTemplate();const s=e.hasAttribute(10),n=new Y({vd:e.getDescription()}),i=n.getImpl();n.reserve((this.m_circleTemplate.length/10+4)*e.getPathSize(t));const r=new f,o=new f,h=new f,l=new f(0,0),a=new f,c=new f,u=e.getImpl(),_=e.getPathSize(t),g=e.getPathStart(t);for(let P=0,y=e.getPathSize(t);P<y;P++){const d=u.getXY(g+P),C=u.getXY(g+(P+1)%_),v=u.getXY(g+(P+2)%_);a.setSub(C,d),a.length()===0&&Z("");const w=s&&!!(1&u.getAttributeAsInt(10,(P+1)%_,0));a.normalize();const b=a.clone();a.leftPerpendicularThis(),a.scale(this.m_absDistance),r.setAdd(a,d),o.setAdd(a,C),P===0?i.startPath(r):i.lineTo(r),i.lineTo(o),c.setSub(v,C),c.length()===0&&Z(""),c.normalize();const V=c.clone();c.leftPerpendicularThis(),c.scale(this.m_absDistance),h.setAdd(c,C);let E=x.enumArc;const B=w?0:this.m_joins;if(B===2)E=x.enumBevel;else if(B===1){const J=-b.crossProduct(V);l.setSub(b,V),l.scale(this.m_absDistance/J),l.length()<this.m_miterLimit*this.m_absDistance?(l.addThis(C),E=x.enumMiter):E=x.enumBevel}else l.assign(C);this.addJoin(E,i,l,o,h,!1,!1)}return ie(n)}bufferPolylinePath(e,t,s){this.generateCircleTemplate();const n=e,i=n.getImpl();if(i.getPathSize(t)<1)return null;let r;if(r=this.m_bRoundBuffer?i.isClosedPathInXYPlane(t):i.isClosedPath(t),this.isDegeneratePath(i,t)&&this.m_distance>0){const l=new O;i.getPointByVal(i.getPathStart(t),l);const a=new L;return i.queryPathEnvelope(t,a),l.setXY(a.getCenter()),this.bufferDegeneratePath(l,r)}const o=new $({vd:e.getDescription()});o.reserve((Math.trunc(this.m_circleTemplate.length/10)+4)*i.getPathSize(t));const h=o.getImpl();return r?this.bufferClosedPath(n,t,h,s,1)!==2&&this.bufferClosedPath(n,t,h,s,-1):this.bufferOpenPath(n,t,h,s),this.bufferCleanup(o)}progress_(){}bufferCleanup(e,t=!1){const s=t?this.m_tolerance:this.m_smallTolerance;return Ae(e,s,!0,!t,-1,this.m_progressTracker,0,!1)}calcN(){if(this.m_densifyDist===0)return this.m_maxVertexInCompleteCircle;const t=1-this.m_densifyDist*Math.abs(this.m_absDistanceReversed);let s=4;return s=t<-1?4:2*Math.PI/Math.acos(t)+.5,s<4?s=4:s>this.m_maxVertexInCompleteCircle&&(s=this.m_maxVertexInCompleteCircle),Math.trunc(s)}addJoin(e,t,s,n,i,r,o){if(this.generateCircleTemplate(),r&&(t.startPath(n),r=!1),e===x.enumBevel)return void(o&&t.lineTo(i));if(e===x.enumMiter){const d=s.clone();return t.lineTo(d),void(o&&t.lineTo(i))}const h=new f;h.setSub(n,s),h.scale(this.m_absDistanceReversed);const l=new f;l.setSub(i,s),l.scale(this.m_absDistanceReversed);let a=Math.atan2(h.y,h.x)/this.m_dA;a<0&&(a=this.m_circleTemplate.length+a),a=this.m_circleTemplate.length-a;let c=Math.atan2(l.y,l.x)/this.m_dA;c<0&&(c=this.m_circleTemplate.length+c),c=this.m_circleTemplate.length-c,c<a&&(c+=this.m_circleTemplate.length);let u=Math.trunc(c),_=Math.ceil(a),g=this.m_circleTemplate[_%this.m_circleTemplate.length].clone();g.scaleAddThis(this.m_absDistance,s);const P=10*this.m_tolerance.total();g.sub(n).length()<P&&(_+=1),g=this.m_circleTemplate[u%this.m_circleTemplate.length].clone(),g.scaleAddThis(this.m_absDistance,s),g.sub(i).length()<P&&(u-=1);let y=u-_;y++;for(let d=0,C=_%this.m_circleTemplate.length;d<y;d++,C=(C+1)%this.m_circleTemplate.length)g=this.m_circleTemplate[C].clone(),g.scaleAddThis(this.m_absDistance,s),t.lineTo(g),this.progress_();o&&t.lineTo(i)}bufferClosedPath(e,t,s,n,i){const r=new me,o=r.addPathFromMultiPath(e,t,!0);return this.bufferClosedPathImpl(r,o,s,n,i)}bufferClosedPathImpl(e,t,s,n,i){const r=e.getFirstVertex(e.getFirstPath(t)),o=new O;if(e.queryPoint(r,o),e.filterClosePoints(this.m_filterTolerance,!1,!1,!1,-1),e.getPointCount(t)<2)return i<0?0:(this.m_bRoundBuffer&&this.addCircle(s,o),2);U(e.getFirstPath(t)!==W),U(e.getFirstVertex(e.getFirstPath(t))!==W);const h=e.getXY(e.getFirstVertex(e.getFirstPath(t))),l=new ae;if(l.setShift(h.negate()),e.applyTransformation(l),n){const T=Qe(e,t,i,!0,this.m_absDistance,this.m_filterTolerance,this.m_densifyDist);if(U(T===1),e.getPointCount(t)<2)return i<0?0:(this.addCircle(s,o),2)}const a=this.m_joins!==0&&e.getVertexDescription().hasAttribute(10);this.m_bufferCommands.length=0;const c=e.getFirstPath(t);let u=e.getFirstVertex(c),_=i===1?e.getPrevVertex(u):e.getNextVertex(u),g=i===1?e.getNextVertex(u):e.getPrevVertex(u),P=!0;const y=new f,d=new f,C=new f,v=new f,w=new f,b=new f,V=new f,E=new f,B=this.m_absDistance,J=e.getPathSize(c),F=new f(0,0);for(let T=0;T<J;T++){d.assign(e.getXY(g)),P&&(y.assign(e.getXY(u)),C.assign(e.getXY(_)),b.setSub(y,C),b.normalize(),E.leftPerpendicularOther(b),E.scale(B),v.setAdd(E,y));const p=a&&!!(1&e.getAttributeAsDbl(10,u,0));w.setSub(d,y),w.normalize(),V.leftPerpendicularOther(w),V.scale(B);const A=new f;A.setAdd(y,V);const z=b.crossProduct(w),D=b.dotProduct(w);if(z<0||D<0&&z<Math.abs(D)*Number.EPSILON*8){let X=!1;const G=p?0:this.m_joins;if(G===1){const R=-z;F.setSub(b,w),F.scale(this.m_absDistance/R),F.length()<this.m_miterLimit*this.m_absDistance&&(F.addThis(y),X=!0),this.m_bufferCommands.push(N(v,A,F,X?x.enumMiter:x.enumBevel,this.m_bufferCommands.length+1))}else this.m_bufferCommands.push(N(v,A,y,G===0?x.enumArc:x.enumBevel,this.m_bufferCommands.length+1))}else v.equals(A)||(this.m_bufferCommands.push(se(v,y,this.m_bufferCommands.length+1)),this.m_bufferCommands.push(se(y,A,this.m_bufferCommands.length+1)));const M=new f;M.setAdd(d,V),this.m_bufferCommands.push(N(A,M,y,x.enumLine,this.m_bufferCommands.length+1)),v.setCoordsPoint2D(M),E.setCoordsPoint2D(V),C.setCoordsPoint2D(y),y.setCoordsPoint2D(d),b.setCoordsPoint2D(w),_=u,u=g,P=!1,g=i===1?e.getNextVertex(u):e.getPrevVertex(u)}return this.m_bufferCommands.at(-1).m_next=0,this.processBufferCommands(s),l.setShift(h),s.applyTransformationToPath(l,s.getPathCount()-1),1}bufferOpenPath(e,t,s,n){if(this.m_bRoundBuffer){const p=new $({vd:e.getDescription()});return p.addPath(e,t,!1),p.addSegmentsFromPath(e,t,0,e.getSegmentCountPath(t),!1),this.bufferClosedPath(p,0,s,n,1)}let i=0;const r=new $({vd:e.getDescription()}),o=new f(0,0);{const p=new me,A=p.addPathFromMultiPath(e,t,!1),z=p.getFirstVertex(p.getFirstPath(A)),D=new O;if(p.queryPoint(z,D),o.assign(D.getXY()),p.filterClosePoints(0,!1,!1,!1,-1),p.getPointCount(A)<2)return this.m_bRoundBuffer&&this.addCircle(s,D),2;const M=p.getGeometry(p.getFirstGeometry());r.addPath(M,0,!1),i=r.getPointCount()-1,r.addSegmentsFromPath(M,0,0,M.getSegmentCountPath(0)-1,!1)}const h=new me,l=h.addPathFromMultiPath(r,0,!0);U(h.getFirstPath(l)!==W),U(h.getFirstVertex(h.getFirstPath(l))!==W);const a=new ae;a.setShift(o.negate()),h.applyTransformation(a),this.m_bufferCommands.length=0;const c=h.getFirstPath(l),u=this.m_joins!==0&&h.getVertexDescription().hasAttribute(10);let _=h.getFirstVertex(c),g=h.getPrevVertex(_),P=h.getNextVertex(_),y=!0;const d=new f,C=new f,v=new f,w=new f,b=new f,V=new f,E=new f,B=new f,J=this.m_absDistance,F=h.getPathSize(c),T=new f(0,0);for(let p=0;p<F;p++){let A=!1;p!==0&&p!==i||(A=!0),C.assign(h.getXY(P)),y&&(d.assign(h.getXY(_)),v.assign(h.getXY(g)),V.setSub(d,v),V.normalize(),B.leftPerpendicularOther(V),B.scale(J),w.setAdd(B,d));const z=u&&!!(1&h.getAttributeAsDbl(10,_,0));b.setSub(C,d),b.normalize(),E.leftPerpendicularOther(b),E.scale(J);const D=new f;D.setAdd(d,E);const M=V.crossProduct(b),X=V.dotProduct(b);if(M<0||X<0&&M<Math.abs(X)*Number.EPSILON*8)if(A)if(this.m_caps===0)this.m_bufferCommands.push(N(w,D,d,x.enumArc,this.m_bufferCommands.length+1));else if(this.m_caps===1)this.m_bufferCommands.push(N(w,D,d,x.enumLine,this.m_bufferCommands.length+1));else{const R=b.mul(this.m_absDistance).negate(),q=R.clone();R.addThis(w),q.addThis(D),this.m_bufferCommands.push(N(w,R,d,x.enumLine,this.m_bufferCommands.length+1)),this.m_bufferCommands.push(N(R,q,d,x.enumLine,this.m_bufferCommands.length+1)),this.m_bufferCommands.push(N(q,D,d,x.enumLine,this.m_bufferCommands.length+1))}else{let R=!1;const q=z?0:this.m_joins;if(q===1){const I=-M;T.setSub(V,b),T.scale(this.m_absDistance/I),T.length()<this.m_miterLimit*this.m_absDistance&&(T.addThis(d),R=!0),this.m_bufferCommands.push(N(w,D,T,R?x.enumMiter:x.enumBevel,this.m_bufferCommands.length+1))}else this.m_bufferCommands.push(N(w,D,d,q===0?x.enumArc:x.enumBevel,this.m_bufferCommands.length+1))}else w.equals(D)||(this.m_bufferCommands.push(se(w,d,this.m_bufferCommands.length+1)),this.m_bufferCommands.push(se(d,D,this.m_bufferCommands.length+1)));const G=new f;G.setAdd(C,E),this.m_bufferCommands.push(N(D,G,d,x.enumLine,this.m_bufferCommands.length+1)),w.setCoordsPoint2D(G),B.setCoordsPoint2D(E),v.setCoordsPoint2D(d),d.setCoordsPoint2D(C),V.setCoordsPoint2D(b),g=_,_=P,y=!1,P=h.getNextVertex(_)}return this.m_bufferCommands.at(-1).m_next=0,this.processBufferCommands(s),a.setShift(o),s.applyTransformationToPath(a,s.getPathCount()-1),1}processBufferCommands(e){const t=this.cleanupBufferCommands();let s=!0,n=t+1;for(let i=t;n!==t;i=n){const r=this.m_bufferCommands[i];n=r.m_next!==-1?r.m_next:(i+1)%this.m_bufferCommands.length,r.m_type&&(s&&(e.startPath(r.m_from),s=!1),r.m_type&x.enumJoinMask?this.addJoin(r.m_type,e,r.m_center,r.m_from,r.m_to,!1,!0):e.lineTo(r.m_to))}}cleanupBufferCommands(){this.m_helperArray=fe(f,9);let e=0;for(let s=0,n=this.m_bufferCommands.length;s<n;){const i=this.m_bufferCommands[s];if(i.m_type&x.enumConnectionMask){e=s;break}s=i.m_next}let t=e+1;for(let s=e;t!==e;s=t){const n=this.m_bufferCommands[s];t=n.m_next;let i=1,r=null;for(;t!==s&&(r=this.m_bufferCommands[t],!(r.m_type&x.enumConnectionMask));)t=r.m_next,i++;i!==1&&(n.m_type&r.m_type)===x.enumLine&&(this.m_helperLine1.setStartXY(n.m_from),this.m_helperLine1.setEndXY(n.m_to),this.m_helperLine2.setStartXY(r.m_from),this.m_helperLine2.setEndXY(r.m_to),this.m_helperLine1.intersect(this.m_helperLine2,this.m_helperArray,null,null,this.m_smallTolerance.total())===1&&(n.m_to.assign(this.m_helperArray[0]),r.m_from.assign(this.m_helperArray[0]),n.m_next=t))}return e}isDegeneratePath(e,t){if(e.getPathSize(t)===1)return!0;if(this.m_joins===0&&this.m_caps===0){const s=new L;if(e.queryPathEnvelope(t,s),Math.max(s.width(),s.height())<.5*this.m_densifyDist)return!0}return!1}isDegenerateGeometry(e){if(this.m_joins===0&&this.m_caps===0){const t=new L;if(e.queryEnvelope(t),Math.max(t.width(),t.height())<.5*this.m_densifyDist)return!0}return!1}addCircle(e,t){const s=t.getXY();if(this.m_circleTemplate.length!==0){let l=this.m_circleTemplate[0].clone();l.scaleAddThis(this.m_absDistance,s),e.startPath(l);for(let a=1,c=this.m_circleTemplate.length;a<c;a++)l=this.m_circleTemplate[a].clone(),l.scaleAddThis(this.m_absDistance,s),e.lineTo(l);return}const n=this.m_circleTemplateSize,i=Math.trunc((n+3)/4),r=.5*Math.PI/i;e.reserve(4*i);const o=Math.cos(r),h=Math.sin(r);for(let l=3;l>=0;l--){const a=f.construct(0,this.m_absDistance);switch(l){case 0:for(let c=0;c<i;c++)e.lineToCoords(a.x+s.x,a.y+s.y),a.rotateReverse(o,h);break;case 1:for(let c=0;c<i;c++)e.lineToCoords(-a.y+s.x,a.x+s.y),a.rotateReverse(o,h);break;case 2:for(let c=0;c<i;c++)e.lineToCoords(-a.x+s.x,-a.y+s.y),a.rotateReverse(o,h);break;default:e.startPathCoords(a.y+s.x,-a.x+s.y);for(let c=1;c<i;c++)a.rotateReverse(o,h),e.lineToCoords(a.y+s.x,-a.x+s.y)}this.progress_()}}addSquare(e,t){const s=new re({vd:t.getDescription()});s.setCoords(t.getX(),t.getY(),t.getX(),t.getY()),s.inflateCoords(this.m_absDistance,this.m_absDistance),e.addEnvelope(s,!1)}setStrongSimple(e){return e.getImpl().setIsSimple(4,this.m_tolerance.total()),e.getImpl().updateOGCFlagsProtected(),e}}function ie(m){return xe(m,0),m}function pe(m,e){return!!m.isEmpty()||Math.min(m.width(),m.height())>e}function Je(m,e,t,s,n,i,r,o){const h=m.getXY(t),l=m.getXY(s);if(h.equals(l))return-1;const a=.25*r,c=.25*r,u=new f;u.setSub(l,h);const _=u.length(),g=_*_*.25,P=i*i-g;if(P<=g)return-1;const y=Math.sqrt(P);u.normalize();const d=u.clone();d.rightPerpendicularThis();const C=g/y,v=C<=c,w=f.lerp(l,h,.5),b=d.clone(),V=C-a;b.scaleAddThis(Math.max(0,V),w),d.negate().scaleAddThis(y,w);const E=3.61*Ee(i-c),B=b.sub(h),J=b.sub(l);let F=!1,T=0;const p=Ve(64,0);U(o===p.length);{for(let k=m.getPrevVertexEx(s,n);k!==t;){if(m.getUserIndex(k,e)===1)return-1;if(!m.getXY(k).equals(l))break;{const j=m.getPrevVertexEx(k,n);m.removeVertex(k,!1),k=j}}const I=new f,S=h.clone();p[T++]=1;for(let k=m.getNextVertexEx(t,n);k!==s;){if(m.getUserIndex(k,e)===1)return-1;const j=m.getXY(k);if(j.equals(S)){const Pe=m.getNextVertexEx(k,n);m.removeVertex(k,!1),k=Pe;continue}p[T++]=0;const ce=new f;if(ce.setSub(j,h),ce.dotProduct(d)<0)return 0;(f.sqrDistance(j,h)>E||f.sqrDistance(j,l)>E)&&(F=!0);let ee=0;if(j.sub(h).crossProduct(B)>=0&&(ee=1),j.sub(l).crossProduct(J)<=0&&(ee|=2),ee===0)return 0;p[T-1]=ee,I.assign(S),S.assign(j),k=m.getNextVertexEx(k,n)}if(T===1)return 0;U(T<p.length),p[T++]=2}let A=!0;for(let I=1,S=0;I<T;I++)if(p[I]!==p[I-1]&&(S++,A=S<3&&(S===1&&p[I]===3||S===2&&p[I]===2),!A))return 0;if(T>2&&A&&(T===3||!F)){let I=0,S=m.getNextVertexEx(t,n);for(v||(m.setXY(S,b),S=m.getNextVertexEx(S,n));S!==s;){const k=m.getNextVertexEx(S,n);m.removeVertex(S,!1),S=k,++I}return I}if(U(T!==3),F&&T>3)return 0;const z=h.clone();let D=t;const M=h.clone();let X=1,G=-1,R=D,q=0;for(T=1;R!==s;){R=m.getNextVertexEx(R,n);const I=p[T++];if(I===0){if(R===s)break;continue}const S=m.getXY(R);if(G!==-1){if(3&(G&X&I)){m.removeVertex(D,!0),q++,D=R,M.setCoordsPoint2D(S),X=I;continue}if(X===3&&G!==0&&I!==0){if(M.setCoordsPoint2D(b),v||M.equals(z)){m.removeVertex(D,!0),q++,D=R,M.setCoordsPoint2D(S),X=I;continue}m.setXY(D,M)}}G=X,z.setCoordsPoint2D(M),D=R,X=I,M.setCoordsPoint2D(S)}return q}function He(m,e,t,s){let n=-1;const i=new f,r=new f,o=new f;for(let h=0,l=m.getPathSize(s),a=m.getFirstVertex(s);h<l;++h){n===-1&&(m.queryXY(a,r),n=m.getPrevVertex(a),n!==-1&&(m.queryXY(n,i),o.setSub(r,i),o.normalize()));const c=m.getNextVertex(a);if(c===-1)break;const u=m.getXY(c),_=u.sub(r);_.normalize(),n!==-1&&_.dotProduct(o)<-.99&&Math.abs(_.crossProduct(o))<1e-7&&m.setUserIndex(a,e,1),n=a,a=c,i.assign(r),r.assign(u),o.assign(_)}}function Ke(m,e,t,s,n,i,r){const o={stack:[],error:void 0,hasError:!1};try{const h=m.getFirstPath(e),l=m.createUserIndex();Xe(o,Me(()=>{m.removeUserIndex(l)},!1),!1),He(m,l,e,h);for(let a=0;a<100;++a){if(m.getPathSize(h)===0)return 1;let c=m.getFirstVertex(h),u=m.getPathSize(h);if(u<3)return 1;m.isClosedPath(h)||(u-=1);const _=64;let g=0,P=!1;for(let y=0;y<u&&c!==W;y++){let d=0,C=c;for(let v=1,w=Math.min(_,u-y);v<w;v++)if(C=m.getNextVertexEx(C,t),v>1){const b=Je(m,l,c,C,t,n,r,_);if(b===-1)break;d+=b,u-=b}if(g+=d,P=d>0,P){const v=m.getPrevVertexEx(c,t);if(v!==-1){c=v,u++;continue}}c=m.getNextVertexEx(c,t)}if(g===0)break}return m.filterClosePoints(i,!1,!1,!1,-1),1}catch(h){o.error=h,o.hasError=!0}finally{Fe(o)}}function Qe(m,e,t,s,n,i,r){return Ke(m,e,t,s,n,i,r)}function oe(m,e,t,s){for(let n=0,i=m.getPathCount();n<i;n++){const r=m.getXY(m.getPathStart(n));r.x!==t.xmin&&r.x!==t.xmax&&e.addPath(m,n,s)}}class We{getOperatorType(){return 10004}supportsCurves(){return!0}accelerateGeometry(e,t,s){return!1}canAccelerateGeometry(e){return!1}executeMany(e,t,s,n,i){return this.executeManyEx(e,t,s,Number.NaN,96,n,i)}execute(e,t,s,n){Number.isFinite(s)||K("Invalid distance for buffer operation");const i=new he([e]),r=[s],o=this.executeMany(i,t,r,!1,n).next();return o||Z("null buffer output"),o}executeManyEx(e,t,s,n,i,r,o){if(s.find(h=>!Number.isFinite(h))!==void 0&&K("Invalid distance for buffer operation"),r){const h=new be(e,t,s,n,i,!1,o);return new ne().executeMany(h,t,o,2)}return new be(e,t,s,n,i,!1,o)}}class be extends Q{constructor(e,t,s,n,i,r,o){super(),this.m_currentUnionEnvelope2D=new L,this.m_index=-1,this.m_dindex=-1,this.m_progressTracker=o,this.m_bufferer=new Ue(o),this.m_inputGeoms=e,this.m_spatialReference=t,this.m_distances=s,this.m_maxDeviation=n,this.m_maxVerticesInFullCircle=i}tock(){return!0}getRank(){return 1}next(){{let e;for(;e=this.m_inputGeoms.next();)return ye(e),this.m_index=this.m_inputGeoms.getGeometryID(),this.m_dindex+1<this.m_distances.length&&this.m_dindex++,this.buffer(e,this.m_distances[this.m_dindex]);return null}}getGeometryID(){return this.m_index}buffer(e,t){return this.m_bufferer.buffer(e,t,this.m_spatialReference,0,0,4,this.m_maxDeviation,this.m_maxVerticesInFullCircle)}}const le=new We;function rt(m,e,t){return le.execute(m,e,t,null)}function mt(m,e,t,s,n,i){const r=le.executeManyEx(new he(m),e,t,s,n,i,null);return Array.from(r)}function ot(){return le.supportsCurves()}export{rt as f,mt as l,ot as x};
