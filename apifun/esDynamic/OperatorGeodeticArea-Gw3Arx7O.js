import{e as S,b as Z,j as Ee,P as Pe,a as Se,x as _e,o as fe,d as ye,k as $e,L as Ae,n as Y,B as W,M as ze,Y as b,s as xe,t as J,u as $,Q as he,$ as Re}from"./Transformation2D-Dqu-RtOz.js";import{J as z,a3 as A,a2 as x,az as Ge,aA as L,K as U,L as K,a as Ce,o as re,k as me,f as oe,n as N,p as ke,m as ee,a6 as Le,aB as le,aC as Fe,a0 as Te,aD as Me,aE as pe,aF as C,g as R,aG as we,aH as te,w as Oe,a1 as qe,U as be}from"./ProjectionTransformation-CsWIlYdI.js";import{w as Je}from"./OperatorShapePreservingLength-C_XoDKWy.js";import{d2 as F,d3 as se}from"./main-DeRV24Di.js";let Ue=class{constructor(p,e,n,s,i=0,a=4){this.m_ptDistFrom=new S,this.m_segStartPt=new S,this.m_segEndPt=new S,this.m_geodeticLength=new z,this.m_az12=new z,this.m_minGeodeticDist=new z,this.m_segStartPt3d=new A,this.m_segEndPt3d=new A,this.m_sr=s,this.m_distCurveType=i,this.m_segCurveType=a,this.m_inputGCS=this.m_sr.getGCS(),this.m_rpu=this.m_inputGCS.getUnit().getUnitToBaseFactor(),this.m_bIsPannablePcs=this.m_sr.getCoordinateSystemType()===2&&this.m_sr.isPannable();const t=K();this.m_inputGCS.querySpheroidData(t),this.m_a=t.majorSemiAxis,this.m_eSquared=t.e2,this.setPointDistFrom(p),this.setSegmentEndPoints(e,n)}setSegmentEndPoints(p,e){this.m_segStartPt.assign(p),this.m_segEndPt.assign(e),this.m_bIsPannablePcs||(this.m_segStartPt.mulThis(this.m_rpu),this.m_segEndPt.mulThis(this.m_rpu)),this.m_segCurveType===2&&(this.m_segStartPt3d.assign(x(this.m_a,this.m_eSquared,this.m_segStartPt)),this.m_segEndPt3d.assign(x(this.m_a,this.m_eSquared,this.m_segEndPt))),this.calculateAndUpdateSegmentLength()}setPointDistFrom(p){this.m_ptDistFrom.assign(p),this.m_ptDistFrom.scale(this.m_rpu)}setSegmentCurveType(p){this.m_segCurveType=p}setDistanceCurveType(p){this.m_distCurveType=p}makeFunctor(){return p=>{let e;switch(this.m_segCurveType){case 0:case 1:case 3:{const n={stack:[],error:void 0,hasError:!1};try{const s=F(n,new z,!1),i=F(n,new z,!1);U.geodeticCoordinate(this.m_a,this.m_eSquared,this.m_segStartPt.x,this.m_segStartPt.y,this.m_geodeticLength.val*p,this.m_az12.val,s,i,this.m_segCurveType),e=new S(s.val,i.val);break}catch(s){n.error=s,n.hasError=!0}finally{se(n)}}case 2:{const n=A.lerp(this.m_segStartPt3d,this.m_segEndPt3d,p);e=L(this.m_a,this.m_eSquared,n);break}case 4:e=S.lerp(this.m_segStartPt,this.m_segEndPt,p),this.m_bIsPannablePcs&&(Ge(this.m_sr,0,[e],1),e.mulThis(this.m_rpu));break;default:Z("Invalid curve type")}return U.geodeticDistance(this.m_a,this.m_eSquared,this.m_ptDistFrom.x,this.m_ptDistFrom.y,e.x,e.y,this.m_minGeodeticDist,null,null,this.m_distCurveType),this.m_minGeodeticDist.val}}calculateAndUpdateSegmentLength(){switch(this.m_segCurveType){case 0:case 2:case 1:case 3:U.geodeticDistance(this.m_a,this.m_eSquared,this.m_segStartPt.x,this.m_segStartPt.y,this.m_segEndPt.x,this.m_segEndPt.y,this.m_geodeticLength,this.m_az12,null,this.m_segCurveType);break;case 4:this.m_geodeticLength.val=S.distance(this.m_segStartPt,this.m_segEndPt);break;default:Z("Invalid curve type")}}[Symbol.dispose](){this.m_geodeticLength[Symbol.dispose](),this.m_az12[Symbol.dispose](),this.m_minGeodeticDist[Symbol.dispose]()}};class Ye{constructor(e,n,s,i,a=100){this.m_startPt=e.clone(),this.m_endPt=n.clone(),this.m_cE2=i,this.m_cE=Math.sqrt(this.m_cE2),this.m_c1By2e=1/(2*this.m_cE),this.m_cRpu=s.getGCS().getUnit().getUnitToBaseFactor(),this.isPcs=s.getCoordinateSystemType()===2,this.PEProjcs=s.getPECoordSys(),this.m_points=Ae(2*a,Number.NaN)}setSegmentEndPoints(e,n){this.m_startPt.assign(e),this.m_endPt.assign(n)}makeFunctor(){return e=>{const n=[0,0];n[0]=this.m_startPt.x*(1-e)+this.m_endPt.x*e,n[1]=this.m_startPt.y*(1-e)+this.m_endPt.y*e,this.isPcs&&Te.projToGeogCenter(this.PEProjcs,1,n,0);const s=Math.sin(n[1]*this.m_cRpu);return this.m_cE2===0?s:-Math.log((1-this.m_cE*s)/(1+this.m_cE*s))*this.m_c1By2e+s/(1-this.m_cE2*s*s)}}}function Xe(p,e,n){const s=new N;p.queryEnvelope(s);const i=Oe(e,s,!0).total(),a=e.getPannableExtent();a.xmin=s.xmin-10*i,a.xmax=s.xmax+10*i;const t=new qe().execute(p,a,e,n).getImpl().querySegmentIterator();t.stripAttributes();const _=K();e.querySpheroidData(_);const h=_.e2,m=h===0?2:1,l=new S(0,0),r=new S(0,0),o=new Y(0),c=new Ye(l,r,e,h,100);for(;t.nextPath();)for(;t.hasNextSegment();){const g=t.nextSegment();l.assign(g.getStartXY()),r.assign(g.getEndXY()),c.setSegmentEndPoints(l,r);const y=te(6,0,1,1e-12,1e-15,c.makeFunctor());o.pe((r.x-l.x)*y)}const u=_.majorSemiAxis;return m*u*u*(1-h)*Math.PI*o.getResult()/e.getPannableExtent().width()}function Be(p,e,n,s,i){const a=Qe(p,e,i);let t=Ne(p,a.first,n,s,i),_=1,h=0,m=0;do{if(_++,a.first*=.5,a.first<50*e.getTolerance(0))return t;a.second*=2,m=Ne(p,a.first,n,s,i),h=Math.abs(m-t),t=m}while(Math.abs(t)>1&&h>1e-8*Math.abs(t)&&(a.second<65e3&&_<8||_<4));return m}function Ne(p,e,n,s,i){const a=new re().execute(p,e,0,0,i);let t;t=s?new ee().execute(a,s,i):a;const _=n.getUnit().getUnitToBaseFactor()===1?Math.PI/180:1,h=new N;t.queryEnvelope(h);const m=new N,l=new N,r=new N;m.setCoords({xmin:h.xmin,ymin:75*_,xmax:h.xmax,ymax:90*_}),l.setCoords({xmin:h.xmin,ymin:-60*_,xmax:h.xmax,ymax:75*_}),r.setCoords({xmin:h.xmin,ymin:-90*_,xmax:h.xmax,ymax:-60*_}),m.inflateCoords(.01*m.width(),0),l.inflateCoords(.01*l.width(),0),r.inflateCoords(.01*r.width(),0);let o=0;return o+=ce(t,m,n,i),o+=ce(t,l,n,i),o+=ce(t,r,n,i),o}function ce(p,e,n,s){const i=new qe().execute(p,e,n,s);if(i!==null&&!i.isEmpty()){const a=new N;i.queryEnvelope(a);const{first:t,second:_}=je(n,a,!1),h=me(n,t,null),m=new ee().execute(i,h,s).calculateArea2D();return _&&t.destroy(),m}return 0}const ie=[null,null,null,null,null,null,null];function He(p,e,n){const s=p.getUnit().getUnitToBaseFactor(),i=e.getCenter();i.scale(180*s/Math.PI);const a=new S;a.x=0,a.y=0;let t=0;if(t===0){i.y>45?(a.y=b,t=0):i.y<-45?(a.y=-b,t=1):i.x>=45&&i.x<135?(a.x=b,t=2):i.x>=135||i.x<-135?(a.x=b,t=3):i.x<-45&&i.x>=-135?(a.x=-b,t=4):(a.x=0,t=5);const f=s*Math.sqrt(Re(e.xmin-e.xmax)+Re(e.ymin-e.ymax)),d=a.clone(),E=e.getCenter();if(E.scale(s),t<2&&(d.x=E.x),S.distance(d,E)+.5*f>b)return null}const _=ie[t];if(_!==null&&_.getGCS().equalHorizontal(p))return _;const h=p.getText(),m=a.x,l=a.y,r=0,o=0;let c=0,u=-1;t!==6?u=C.PE_PRJ_LAMBERT_AZIMUTHAL_EQAREA:(fe(n),c=0,u=C.PE_PRJ_CYLINDRICAL_EQAREA);const g=pe("EqualAreaPCS");let y;u===C.PE_PRJ_LAMBERT_AZIMUTHAL_EQAREA?y=`PROJCS["${g}",${h},PROJECTION["Lambert_Azimuthal_Equal_Area"],PARAMETER["False_Easting",${r}],PARAMETER["False_Northing",${o}],PARAMETER["Central_Meridian",${m}],PARAMETER["Latitude_of_Origin",${l}],UNIT["Meter",1.0]]`:u===C.PE_PRJ_CYLINDRICAL_EQAREA?y=`PROJCS["${g}",${h},PROJECTION["Cylindrical_Equal_Area"],PARAMETER["False_Easting",${r}],PARAMETER["False_Northing",${o}],PARAMETER["Central_Meridian",${m}],PARAMETER["Standard_Parallel_1",${c}],PARAMETER["Latitude_of_Origin",${l}],UNIT["Meter",1.0]]`:Z("getEqualAreaPcsFixed");const P=be(y);return ie[t]&&ie[t].destroy(),ie[t]=P,P}function je(p,e,n){const s=He(p,e,n);if(s!==null)return he(s,!1);const i=p.getText(),a=p.getUnit().getUnitToBaseFactor(),t=(e.xmin+e.width()/2)*a,_=(e.ymin+e.height()/2)*a,h=0,m=0;let l=0,r=0,o=-1;e.ymin*a>=75*Math.PI/180||e.ymax*a<=-60*Math.PI/180?o=C.PE_PRJ_LAMBERT_AZIMUTHAL_EQAREA:e.ymin>0||e.ymax<0?(l=(e.ymin+1/3*e.height())*a,r=(e.ymin+2/3*e.height())*a,o=C.PE_PRJ_ALBERS):(l=(e.ymin+2/3*e.height())*a,o=C.PE_PRJ_CYLINDRICAL_EQAREA);const c=pe("EqualAreaPCS");let u;return o===C.PE_PRJ_LAMBERT_AZIMUTHAL_EQAREA?u=`PROJCS["${c}",${i},PROJECTION["Lambert_Azimuthal_Equal_Area"],PARAMETER["False_Easting",${h}],PARAMETER["False_Northing",${m}],PARAMETER["Central_Meridian",${t}],PARAMETER["Latitude_of_Origin",${_}],UNIT["Meter",1.0]]`:o===C.PE_PRJ_ALBERS?u=`PROJCS["${c}",${i},PROJECTION["Albers"],PARAMETER["False_Easting",${h}],PARAMETER["False_Northing",${m}],PARAMETER["Central_Meridian",${t}],PARAMETER["Standard_Parallel_1",${l}],PARAMETER["Standard_Parallel_2",${r}],PARAMETER["Latitude_of_Origin",${_}],UNIT["Meter",1.0]]`:o===C.PE_PRJ_CYLINDRICAL_EQAREA?u=`PROJCS["${c}",${i},PROJECTION["Cylindrical_Equal_Area"],PARAMETER["False_Easting",${h}],PARAMETER["False_Northing",${m}],PARAMETER["Central_Meridian",${t}],PARAMETER["Standard_Parallel_1",${l}],PARAMETER["Latitude_of_Origin",${_}],UNIT["Meter",1.0]]`:Z("getEqualAreaPCSInstance"),he(be(u),!0)}function Qe(p,e,n){const s=p.calculateLength2D(),i=new Je().execute(p,e,n)/25e3,a=s/p.getSegmentCount()*2;let t=Math.min(a,s/i);return t===0&&(t=1),he(t,s/t)}class Ve{getOperatorType(){return 10314}supportsCurves(){return!0}accelerateGeometry(e,n,s){return!1}canAccelerateGeometry(e){return!1}execute(e,n,s){if(n.getCoordinateSystemType()===0&&Pe(""),e.isEmpty()||e.getDimension()<2)return 0;if(Ee(e),e.getGeometryType()===Se.enumEnvelope){const m=new Ce;return m.addEnvelope(e,!1),this.execute(m,n,s)}let i=e;e.getDescription().getAttributeCount()>1&&(i=e.clone(),i.dropAllAttributes());const a=new re().execute(i,0,n.getTolerance(0),0,s);let t=null;const _=n.getGCS();_!==n&&(t=me(n,_));let h=new oe().execute(a,n,!1,s);return h.isEmpty()?0:(h===e&&(h=e.clone()),n.isPannable()?Xe(h,n,s):Be(h,n,_,t,s))}}function ue(){return{m_p_PCS:new S,m_factor:Number.NaN,setValues:Ze,assign:We}}function Ze(p,e){this.m_factor=p,this.m_p_PCS.assign(e)}function We(p){this.m_factor=p.m_factor,this.m_p_PCS.assign(p.m_p_PCS)}class Ke{constructor(e,n,s,i){this.m_ptStart=new A,this.m_ptEnd=new A,this.m_ptStart.assign(n),this.m_ptEnd.assign(s),this.m_deltaX=this.m_ptEnd.x-this.m_ptStart.x,this.m_deltaY=this.m_ptEnd.y-this.m_ptStart.y,this.m_e=Math.sqrt(e),this.m_e2=e,this.m_c1MinusE2=1-e;const a=Math.sin(i);let t;t=this.m_e2===0?2*a:a*(J(this.m_e*a)+1/(1-this.m_e2*a*a)),this.m_baseA=t}setSegmentEndPoints(e,n){this.m_ptStart.assign(e),this.m_ptEnd.assign(n),this.m_deltaX=this.m_ptEnd.x-this.m_ptStart.x,this.m_deltaY=this.m_ptEnd.y-this.m_ptStart.y}makeFunctor(){return e=>{const n=1-e,s=n*this.m_ptStart.x+e*this.m_ptEnd.x,i=n*this.m_ptStart.y+e*this.m_ptEnd.y,a=n*this.m_ptStart.z+e*this.m_ptEnd.z,t=s*s+i*i,_=a/Math.sqrt(a*a+this.m_c1MinusE2*this.m_c1MinusE2*t);let h;return this.m_e2===0?h=2*_:h=_*(J(this.m_e*_)+1/(1-this.m_e2*_*_)),(this.m_deltaY*s-this.m_deltaX*i)/t*(h-this.m_baseA)}}}function et(){return{e:Number.NaN,one_p_e:Number.NaN,one_m_e:Number.NaN,one_m_e_2:Number.NaN,atanh_e_over_e:Number.NaN,half_qp:Number.NaN,f:Number.NaN,z:Number.NaN}}function ge(){return{sin_phi:Number.NaN,one_p_sin_phi:Number.NaN,one_m_sin_phi:Number.NaN,one_m_e_2_sin_2_phi:Number.NaN,sin_half_phi_pf:Number.NaN,sin_half_phi_pz:Number.NaN,sin_half_asin_e_sin_phi_pf:Number.NaN,sin_half_asin_e_sin_phi_pz:Number.NaN,atanh_sin_phi:Number.NaN,atanh_esin_phi:Number.NaN,make_negative:!1,initialize:tt,changeSign:st,assign:it,clone:nt}}function tt(p,e,n,s){const i=.5*p;this.sin_phi=Math.sin(p);const a=e*this.sin_phi,t=.5*Math.asin(a);this.one_p_sin_phi=1+this.sin_phi,this.one_m_sin_phi=1-this.sin_phi,this.one_m_e_2_sin_2_phi=(1+a)*(1-a),this.sin_half_phi_pf=Math.sin(i+n),this.sin_half_phi_pz=Math.sin(i+s),this.sin_half_asin_e_sin_phi_pf=Math.sin(t+n),this.sin_half_asin_e_sin_phi_pz=Math.sin(t+s),this.atanh_sin_phi=Math.log(this.sin_half_phi_pf/this.sin_half_phi_pz),this.atanh_esin_phi=Math.log(this.sin_half_asin_e_sin_phi_pf/this.sin_half_asin_e_sin_phi_pz)}function st(){this.sin_phi=-this.sin_phi;let p=this.one_p_sin_phi;this.one_p_sin_phi=this.one_m_sin_phi,this.one_m_sin_phi=p,p=this.sin_half_phi_pf,this.sin_half_phi_pf=this.sin_half_phi_pz,this.sin_half_phi_pz=p,p=this.sin_half_asin_e_sin_phi_pf,this.sin_half_asin_e_sin_phi_pf=this.sin_half_asin_e_sin_phi_pz,this.sin_half_asin_e_sin_phi_pz=p,this.atanh_sin_phi=-this.atanh_sin_phi,this.atanh_esin_phi=-this.atanh_esin_phi}function it(p){this.sin_phi=p.sin_phi,this.one_p_sin_phi=p.one_p_sin_phi,this.one_m_sin_phi=p.one_m_sin_phi,this.one_m_e_2_sin_2_phi=p.one_m_e_2_sin_2_phi,this.sin_half_phi_pf=p.sin_half_phi_pf,this.sin_half_phi_pz=p.sin_half_phi_pz,this.sin_half_asin_e_sin_phi_pf=p.sin_half_asin_e_sin_phi_pf,this.sin_half_asin_e_sin_phi_pz=p.sin_half_asin_e_sin_phi_pz,this.atanh_sin_phi=p.atanh_sin_phi,this.atanh_esin_phi=p.atanh_esin_phi,this.make_negative=p.make_negative}function nt(){return{...this}}class at{constructor(e,n,s){this.m_transformPCS2GCS=null,this.m_scaleToRadians=new _e,this.m_scaleToDegrees=new _e,this.m_progressTracker=s,fe(n!==4),this.m_curveType=n,this.m_inputSR=e,e&&e.getCoordinateSystemType()!==0||Pe(""),this.m_inputGCS=e.getGCS(),this.m_a=0,this.m_eSquared=0,this.m_b=0,this.m_rpu=0}executePolygonGeodeticArea(e){let n,s=e.clone();if(s.dropAllAttributes(),e.hasNonLinearSegments()&&(s=new re().execute(s,0,this.m_inputSR.getTolerance(0),0,this.m_progressTracker)),this.m_inputSR.isPannable()){const t=new N;s.queryEnvelope(t);const _=this.m_inputSR.getPannableExtent();if(!_.containsEnvelope(t)){const h=_.getCenterX()-t.getCenterX(),m=new _e;m.setShiftCoords(h,0),s.applyTransformation(m),t.move(h,0);const l=new ye;_.queryIntervalX(l);const r=new ye;t.queryIntervalX(r),s=l.contains(r)?ke(s,this.m_inputSR):new ee().foldInto360RangeGeodetic(s,this.m_inputSR,this.m_curveType)}}if(this.m_transformPCS2GCS?(s=new oe().execute(s,this.m_inputSR,!1,this.m_progressTracker),n=s.createInstance(),Le(this.m_transformPCS2GCS,s,n,this.m_progressTracker)||(n=new ee().execute(s,this.m_transformPCS2GCS,this.m_progressTracker))):n=new oe().execute(s,this.m_inputGCS,!1,this.m_progressTracker),n.isEmpty())return 0;if(this.m_curveType===1){const t=K();return this.m_inputGCS.querySpheroidData(t),this.m_a=t.majorSemiAxis,this.m_eSquared=t.e2,this.loxodromeArea(n)}const i=n.getImpl();this.m_rpu=this.m_inputGCS.getUnit().getUnitToBaseFactor(),this.m_scaleToRadians.setScale(this.m_rpu),i.applyTransformation(this.m_scaleToRadians),this.m_scaleToDegrees=this.m_scaleToRadians,this.m_scaleToDegrees.invertThis();const a=K();if(this.m_inputGCS.querySpheroidData(a),this.m_a=a.majorSemiAxis,this.m_b=a.minorSemiAxis,this.m_eSquared=a.e2,this.m_curveType===2)return this.executeClippedPolygonGreatEllipticArea(n);{const t={stack:[],error:void 0,hasError:!1};try{const _=le.unit(9101),h=this.m_inputGCS.getPECoordSys(),m=F(t,h.cloneAlterUnits(_),!1);let l,r,o=this.executeClippedPolygonGeodeticArea(n,m,0),c=0;do c++,l=this.executeClippedPolygonGeodeticArea(n,m,c),r=Math.abs(l-o),o=l;while(Math.abs(l)>1&&r>1e-8*Math.abs(l)&&c<7);return l}catch(_){t.error=_,t.hasError=!0}finally{se(t)}}}executeClippedPolygonGeodeticArea(e,n,s){const i={stack:[],error:void 0,hasError:!1};try{const a=new N;e.queryEnvelope(a);const t=F(i,this.getEqualAreaPCSInstance(n,a),!1),_=e.clone();Fe(t,_);const h=50,m=_.getImpl().getAttributeStreamRef(0),l=e.getImpl().getAttributeStreamRef(0),r=F(i,new z,!1),o=F(i,new z,!1),c=40,u=[0,0],g=$e(ue,c),y=Ae(c,-1),P=ue(),f=ue();let d,E;const v=t;let M=_.calculateArea2D();const w=new Y(0),G=.5*Math.PI,X=1e-10*Math.abs(M)+1e-6,ne=e.getPathCount();let k,O,I,q;const T=new S,D=new S,B=new S,H=new S,j=new S,Q=new S;let de,ae;for(O=e.getPathStart(0),k=0;k<ne;k++,O=I)for(I=e.getPathEnd(k),m.queryPoint2D(I-1<<1,B),l.queryPoint2D(I-1<<1,T),Math.abs(T.y)>G&&(T.y=W(G,T.y)),q=O;q<I;q++,B.assign(H),T.assign(D)){if(m.queryPoint2D(q<<1,H),l.queryPoint2D(q<<1,D),Math.abs(D.y)>G&&(D.y=W(G,D.y)),de=S.distance(B,H),de<h||T.y===0&&D.y===0)continue;U.geodeticDistance(this.m_a,this.m_eSquared,T.x,T.y,D.x,D.y,r,o,null,this.m_curveType);const ve=r.val,Ie=o.val;for(P.setValues(0,B),f.setValues(1,H),E=s,g[0].assign(f),y[0]=s,d=0;d>=0;){ae=.5*(P.m_factor+f.m_factor),U.geodeticCoordinate(this.m_a,this.m_eSquared,T.x,T.y,ve*ae,Ie,r,o,this.m_curveType),j.x=r.val,j.y=o.val,u[0]=j.x,u[1]=j.y,Te.geogToProj(v,1,u),Q.x=u[0],Q.y=u[1];const De=-Q.offset(P.m_p_PCS,f.m_p_PCS),V=.5*De*S.distance(P.m_p_PCS,f.m_p_PCS);if(w.pe(V),Math.abs(V)>X||Math.abs(V)>0&&E>0)f.setValues(ae,Q),d++,g[d].assign(f),Math.abs(V)<=X?(E--,y[d-1]=E,y[d]=E):(E=y[d-1],y[d]=E);else{if(d<=0)break;P.assign(f),d--,f.assign(g[d]),E=y[d]}}}return M+=w.getResult(),Math.abs(M)}catch(a){i.error=a,i.hasError=!0}finally{se(i)}}executeClippedPolygonGreatEllipticArea(e){const n=[],s=[],i=new S,a=new S,t=x(1,this.m_eSquared,new S(0,.5*Math.PI)),_=new Y(0),h=new Y(0),m=new Y(0),l=new A,r=new A,o=new N;e.queryLooseEnvelope(o);let c=0;o.containsCoords(o.xmin,0)||(c=Math.abs(o.ymin)<Math.abs(o.ymax)?o.ymin:o.ymax);const u=new Ke(this.m_eSquared,l,r,c),g=this.m_a*this.m_a,y=e.getImpl().querySegmentIterator();for(y.stripAttributes();y.nextPath();)for(;y.hasNextSegment();){const P=y.nextSegment();i.assign(P.getStartXY()),a.assign(P.getEndXY()),a.x-i.x>Math.PI?i.x+=2*Math.PI:a.x-i.x<-Math.PI&&(a.x+=2*Math.PI),this.splitSegmentCrossingItegralThreshold(P,n,s);for(let f of n)l.assign(x(this.m_a,this.m_eSquared,f.getStartXY())),r.assign(x(this.m_a,this.m_eSquared,f.getEndXY())),u.setSegmentEndPoints(l,r),this.adaptiveIntegrationWithRomberg(u,_);for(let f of s){let d=f.getStartXY(),E=f.getEndXY(),v=c;d.y<0&&(E=ze(d,d=E),d.y=-d.y,E.y=-E.y,v=-v);const M=x(1,this.m_eSquared,d),w=x(1,this.m_eSquared,E),G=Math.min(d.y,E.y),X=Me(this.m_eSquared,d.x,E.x,v,G);h.pe(X);const ne=Math.abs(Me(this.m_eSquared,d.x,E.x,G,b)),k=new A;k.setSub(M,t);const O=new A;O.setSub(w,t);const I=new A;I.setCrossProductVector(k,O);let q=g*(ne-.5*I.length());q=W(q,E.x-d.x),m.pe(q)}n.length=0,s.length=0}return m.getResult()+g*(.5*(1-this.m_eSquared)*_.getResult()+h.getResult())}getEqualAreaPCSInstance(e,n){const s=n.getCenterX(),i=0,a=0;let t,_;const h=n.height();let m,l;(m=n.ymin>45*Math.PI/180||n.ymax<45*-Math.PI/180)?t=W(.5*Math.PI,n.getCenterY()):(t=n.getCenterY(),_=n.ymin+h*(2/3));const r=pe("EqualAreaPCS"),o=e.toString();return l=m?le.fromString(C.PE_TYPE_PROJCS,`PROJCS["${r}", ${o}, PROJECTION["Lambert_Azimuthal_Equal_Area"],PARAMETER["False_Easting",${i}],PARAMETER["False_Northing", ${a}],PARAMETER["Central_Meridian", ${s}], PARAMETER["Latitude_of_Origin", ${t}], UNIT["Meter",1.0]]`):le.fromString(C.PE_TYPE_PROJCS,`PROJCS["${r}", ${o}, PROJECTION["Cylindrical_Equal_Area"],PARAMETER["False_Easting", ${i}],PARAMETER["False_Northing", ${a}],PARAMETER["Central_Meridian", ${s}],PARAMETER["Standard_Parallel_1", ${_}],PARAMETER["Latitude_of_Origin", ${t}],UNIT["Meter",1.0]]`),l}splitSegmentCrossingItegralThreshold(e,n,s){const i=x(this.m_a,this.m_eSquared,new S(0,b)),a=x(this.m_a,this.m_eSquared,new S(0,-b)),t=this.splitSegmentPassingThroughPole(e);for(let _ of t){const h=_.getStartXY(),m=_.getEndXY(),l=x(this.m_a,this.m_eSquared,h),r=x(this.m_a,this.m_eSquared,m),o=new S,c=new A;let u=A.sqrDistance(i,l),g=A.sqrDistance(l,r);if(u<=100){if(!(g>400)){s.push(new R({start:h,end:m}));continue}c.assign(r.sub(l)),c.normalizeThis(),c.assign(l.add(c.mul(20))),o.assign(L(this.m_a,this.m_eSquared,c)),s.push(new R({start:h,end:o})),h.assign(o)}if(l.assign(x(this.m_a,this.m_eSquared,h)),u=A.sqrDistance(i,r),g=A.sqrDistance(l,r),u<=100){if(!(g>400)){s.push(new R({start:h,end:m}));continue}c.assign(r.sub(l)),c.normalizeThis(),c.assign(r.sub(c.mul(20))),o.assign(L(this.m_a,this.m_eSquared,c)),s.push(new R({start:o,end:m})),m.assign(o)}if(l.assign(x(this.m_a,this.m_eSquared,h)),r.assign(x(this.m_a,this.m_eSquared,m)),u=A.sqrDistance(a,l),g=A.sqrDistance(l,r),u<=100){if(!(g>400)){s.push(new R({start:h,end:m}));continue}c.assign(r.sub(l)),c.normalizeThis(),c.assign(l.add(c.mul(20))),o.assign(L(this.m_a,this.m_eSquared,c)),s.push(new R({start:h,end:o})),h.assign(o)}if(l.assign(x(this.m_a,this.m_eSquared,h)),r.assign(x(this.m_a,this.m_eSquared,m)),u=A.sqrDistance(a,r),g=A.sqrDistance(l,r),u<=100){if(!(g>400)){s.push(new R({start:h,end:m}));continue}c.assign(r.sub(l)),c.normalizeThis(),c.assign(r.sub(c.mul(20))),o.assign(L(this.m_a,this.m_eSquared,c)),s.push(new R({start:o,end:m})),m.assign(o)}n.push(new R({start:h,end:m}))}}splitSegmentPassingThroughPole(e){const n={stack:[],error:void 0,hasError:!1};try{const s=[],i=new A,a=new A,t=new A,_=new S,h=20,m=3.124139361,l=10,r=e.getStartXY(),o=e.getEndXY(),c=F(n,new z,!1);if(U.geodeticDistance(this.m_a,this.m_eSquared,r.x,r.y,o.x,o.y,c,null,null,2),Math.abs(o.x-r.x)>m&&c.val>h){const u=new Ue(new S(0,90),r.divide(this.m_rpu),o.divide(this.m_rpu),this.m_inputGCS,2,2);let g=we(u.makeFunctor(),0,1,1e-10);if(g.second<=l&&g.first>0&&g.first<1)return i.assign(x(this.m_a,this.m_eSquared,r)),a.assign(x(this.m_a,this.m_eSquared,o)),xe(i,a,g.first,t),_.assign(L(this.m_a,this.m_eSquared,t)),s.push(new R({start:r,end:_})),s.push(new R({start:_,end:o})),s;if(u.setPointDistFrom(new S(0,-90)),g=we(u.makeFunctor(),0,1,1e-10),g.second<=l&&g.first>0&&g.first<1)return i.assign(x(this.m_a,this.m_eSquared,r)),a.assign(x(this.m_a,this.m_eSquared,o)),xe(i,a,g.first,t),_.assign(L(this.m_a,this.m_eSquared,t)),s.push(new R({start:r,end:_})),s.push(new R({start:_,end:o})),s}return s.push(new R({start:r,end:o})),s}catch(s){n.error=s,n.hasError=!0}finally{se(n)}}adaptiveIntegrationWithRomberg(e,n){const s=e.makeFunctor();let i=0,a=1,t=s(i),_=s(a);const h=1e-17,m=1e-14;let l=(i+a)/2,r=s(l),o=Math.abs(r-t),c=Math.abs(_-r),u=0;for(;u++<32&&(o/c<.1||c/o<.1);)o<c?(n.pe(te(5,i,l,m,h,s)),i=l,t=r):(n.pe(te(5,l,a,m,h,s)),a=l,_=r),l=(i+a)/2,r=Math.abs(s(l)),o=Math.abs(r-t),c=Math.abs(_-r);n.pe(te(5,i,a,m,h,s))}loxodromeAreaHemi(e,n,s,i,a){const t=s.clone(),_=a.clone();let h,m,l,r,o,c,u,g,y,P,f,d,E,v,M,w;return t.make_negative&&t.changeSign(),_.make_negative&&_.changeSign(),f=i-n,Math.abs(t.sin_phi)===1||Math.abs(_.sin_phi)===1?e.half_qp*f:t.sin_phi===_.sin_phi?(P=.5*e.one_m_e_2*t.sin_phi*(1/t.one_m_e_2_sin_2_phi+J(e.e*t.sin_phi))*f,P):(M=Math.log(_.sin_half_phi_pf*t.sin_half_phi_pz/(_.sin_half_phi_pz*t.sin_half_phi_pf)),w=Math.log(_.sin_half_asin_e_sin_phi_pf*t.sin_half_asin_e_sin_phi_pz/(_.sin_half_asin_e_sin_phi_pz*t.sin_half_asin_e_sin_phi_pf)),this.m_eSquared===1?(o=0,h=.5*(M+_.sin_phi/_.one_m_e_2_sin_2_phi-t.sin_phi/t.one_m_e_2_sin_2_phi),m=0):(o=-2*e.atanh_e_over_e*(Math.log(_.one_p_sin_phi/t.one_p_sin_phi)-e.e*w),h=(M-e.e*w)/e.one_m_e_2,m=(Math.log(_.one_m_e_2_sin_2_phi/t.one_m_e_2_sin_2_phi)+o/e.atanh_e_over_e)/e.one_m_e_2),l=-w*(t.atanh_esin_phi+_.atanh_esin_phi),r=1/t.one_m_e_2_sin_2_phi-1/_.one_m_e_2_sin_2_phi,c=$(_.one_m_sin_phi/e.one_p_e,e.e)-$(t.one_m_sin_phi/e.one_p_e,e.e),u=$(_.one_p_sin_phi/e.one_p_e,e.e)-$(t.one_p_sin_phi/e.one_p_e,e.e),g=$(t.one_m_sin_phi/-e.one_m_e,e.e)-$(_.one_m_sin_phi/-e.one_m_e,e.e),y=$(t.one_p_sin_phi/-e.one_m_e,e.e)-$(_.one_p_sin_phi/-e.one_m_e,e.e),P=.25/h*(m+l+r+o+.5*(c+u+g+y)),P+=e.half_qp,d=.5*e.one_m_e_2*t.sin_phi*(1/t.one_m_e_2_sin_2_phi+J(e.e*t.sin_phi)),E=.5*e.one_m_e_2*_.sin_phi*(1/_.one_m_e_2_sin_2_phi+J(e.e*_.sin_phi)),E<d&&(v=d,d=E,E=v),P<d&&(P=d),P>E&&(P=E),P*=f,P)}loxodromeArea(e){const n=Math.PI/180;let s=0;const i=et(),a=ge(),t=ge();i.e=Math.sqrt(this.m_eSquared),i.one_p_e=1+i.e,i.one_m_e=1-i.e,i.one_m_e_2=1-this.m_eSquared,i.atanh_e_over_e=J(i.e),this.m_eSquared>=1?i.half_qp=1:i.half_qp=.5*(1+i.atanh_e_over_e*i.one_m_e_2),i.f=.25*Math.PI,i.z=.75*Math.PI,t.initialize(0,i.e,i.f,i.z);const _=e.getPathCount(),h=new S,m=new S,l=e.getImpl().getAttributeStreamRef(0);for(let r=0;r<_;r++){const o=e.getPathStart(r),c=e.getPathEnd(r);if(!(c-o<=1)){l.queryPoint2D(2*(c-1),h);for(let u=o;u<c;u++){l.queryPoint2D(2*u,m);const g=h.y*n,y=m.y*n;if(u===o?(a.initialize(g,i.e,i.f,i.z),a.make_negative=!1):a.assign(t),t.initialize(y,i.e,i.f,i.z),t.make_negative=!1,h.y*m.y<0){if(h.y>=90&&m.y<=-90||m.y>=90&&h.y<=-90)return Number.NaN;const P=ge();P.initialize(0,i.e,i.f,i.z),P.make_negative=!1;const f=a.atanh_sin_phi-i.e*a.atanh_esin_phi,d=t.atanh_sin_phi-i.e*t.atanh_esin_phi,E=(d*h.x-f*m.x)/(d-f);g<0?(a.make_negative=!0,s-=this.loxodromeAreaHemi(i,h.x*n,a,E*n,P),a.make_negative=!1,s+=this.loxodromeAreaHemi(i,E*n,P,m.x*n,t)):(s+=this.loxodromeAreaHemi(i,h.x*n,a,E*n,P),t.make_negative=!0,s-=this.loxodromeAreaHemi(i,E*n,P,m.x*n,t),t.make_negative=!1)}else h.y>=0?s+=this.loxodromeAreaHemi(i,h.x*n,a,m.x*n,t):(a.make_negative=!0,t.make_negative=!0,s-=this.loxodromeAreaHemi(i,h.x*n,a,m.x*n,t),a.make_negative=!1,t.make_negative=!1);h.assign(m)}}}return this.m_a*s*this.m_a}calculate(e){if(e.isEmpty()||e.getDimension()<2)return 0;if(e.getGeometryType()===Se.enumEnvelope){const n=new Ce;return n.addEnvelope(e,!1),this.calculate(n)}return this.m_inputSR!==this.m_inputGCS&&this.m_transformPCS2GCS===null&&(this.m_transformPCS2GCS=me(this.m_inputSR,this.m_inputGCS,null)),this.executePolygonGeodeticArea(e)}}class _t{getOperatorType(){return 10311}supportsCurves(){return!0}accelerateGeometry(e,n,s){return!1}canAccelerateGeometry(e){return!1}execute(e,n,s,i){return Ee(e),s===4?new Ve().execute(e,n,i):new at(n,s,i).calculate(e)}}export{_t as OperatorGeodeticArea};
