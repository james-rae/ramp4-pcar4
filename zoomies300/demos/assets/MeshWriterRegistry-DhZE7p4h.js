import{o as E,n as ve,p as Me,q as Pe,f as se,s as L,e as P}from"./UpdateTracking2D-C2-Kb5ZE.js";import{bg as B,hU as be,aE as we,bT as R,h as Ie,s as Se,n as ke}from"./main-Di-bOCuA.js";import{m as Q}from"./definitions-C0Jy3zs7.js";import{c as Ae,f as D,m as fe,N as me,P as N,g as $e,i as Le,l as ze,T as Ee,s as De,_ as Be,a as Te,b as Re,h as Fe,o as Ce,d as Ge,e as Oe,j as We}from"./PieChartMeshWriter-B-wxPXSb.js";import{C as S}from"./enums-Dk3osxpS.js";import{M as Ve,n as q,a as re}from"./Tile-BCxL4NcG.js";import{o as k,B as ie,v as Z,u as je,l as ne}from"./vec2-DGVIkCvT.js";import{t as ae}from"./vec2f32-BbH2jxlN.js";import{n as A}from"./vec2f64-B7N_6o8F.js";import{h as Ne,r as oe}from"./featureConversionUtils-DGqqQP3i.js";import{s as Y}from"./OptimizedFeature-CIptWNVu.js";import{r as ce,t as qe}from"./LabelMetric-DkS1uvP4.js";import{e as F}from"./constants-F8oTIn7N.js";import{o as pe,e as Ze}from"./grouping-BoZVzf7t.js";import{c as Ye}from"./AttributeStore-DGt_VsFC.js";let Xe=class extends Ae{};function He(a){const{sprite:e,isMapAligned:s,colorLocked:r,scaleSymbolsProportionally:t,isStroke:n}=a;let i=0;return s&&(i|=D(E.bitset.isMapAligned)),r&&(i|=D(E.bitset.colorLocked)),e.sdf&&(i|=D(E.bitset.isSDF)),t&&(i|=D(E.bitset.scaleSymbolsProportionally)),n&&(i|=D(E.bitset.isStroke)),i}let Qe=class extends Xe{get vertexSpec(){return{createComputedParams:e=>{let{pixelDimensions:s,texelDimensions:r,baseSize:t,referenceSize:n,strokeWidth:i,sizeRatio:o}=e;s||(s=e.sprite.sdf?[0,0]:[e.sprite.width,e.sprite.height]),r||(r=e.sprite.sdf?[0,0]:s),t=B(t),n=B(n),i=B(i);const c=(e.sprite.sdfDecodeCoeff??1)*o;return{...e,pixelDimensions:s,texelDimensions:r,baseSize:t,referenceSize:n,strokeWidth:i,sdfDecodeCoeff:c}},optionalAttributes:{zoomRange:{type:S.SHORT,count:2,packPrecisionFactor:Q,pack:({scaleInfo:e},{tileInfo:s})=>fe(e,s)}},attributes:{id:{type:S.UNSIGNED_BYTE,count:3,pack:"id"},bitset:{type:S.UNSIGNED_BYTE,count:1,pack:He},pos:{type:S.SHORT,count:2,pack:"position",packPrecisionFactor:1},offset:{type:S.FLOAT,count:2,packAlternating:{count:4,pack:e=>{const s=e.texelDimensions;return[[-.5*s[0],-.5*s[1]],[.5*s[0],-.5*s[1]],[-.5*s[0],.5*s[1]],[.5*s[0],.5*s[1]]]}}},uv:{type:S.SHORT,count:2,packPrecisionFactor:1,packAlternating:{count:4,packTessellation:({texXmax:e,texXmin:s,texYmax:r,texYmin:t})=>[[s,t],[e,t],[s,r],[e,r]]}},animationPointerAndBaseSizeAndReferenceSize:{type:S.UNSIGNED_SHORT,count:4,packPrecisionFactor:1,pack:({animations:e,baseSize:s,referenceSize:r})=>[e.dataColumn,e.dataRow,s,r]},sizing:{type:S.UNSIGNED_SHORT,count:4,packPrecisionFactor:8,pack:({strokeWidth:e,pixelDimensions:s,baseSize:r,sprite:t,sizeRatio:n})=>{const i=Math.max(r*t.width/t.height,r),o=t.sdfDecodeCoeff*i*n;return[s[0],s[1],e,o]}},angle:{type:S.BYTE,count:1,packTessellation:({angle:e})=>e}}}}_write(e,s){const r=this.evaluatedMeshParams.sprite,{textureBinding:t}=r;e.recordStart(this.instanceId,this.attributeLayout,t);const n=s.getDisplayId();if(s.geometryType==="esriGeometryPolygon"){const i=s.readCentroidForDisplay();if(!i)return;const[o,c]=i.coords;this._writeQuad(e,n,o,c)}else if(s.geometryType==="esriGeometryPoint"){const i=s.readXForDisplay(),o=s.readYForDisplay();this._writeQuad(e,n,i,o)}else{const i=s.readGeometryForDisplay();if(i){const{angleToLine:o}=this.evaluatedMeshParams;if(o){let c=!0,u=null,d=null;i.forEachVertex((h,l)=>{if(u!=null&&d!=null){const m=Math.atan2(l-d,h-u)/ve;c&&(this._writeQuad(e,n,u,d,m),c=!1),this._writeQuad(e,n,h,l,m)}u=h,d=l})}else i.forEachVertex((c,u)=>{this._writeQuad(e,n,c,u)})}}e.recordEnd()}_writeQuad(e,s,r,t,n=0){const i=this.evaluatedMeshParams.sprite,{rect:o}=i,c=o.x+2,u=o.y+2,d=o.x+o.width-2,h=o.y+o.height-2,l=e.vertexCount();e.recordBounds(r,t,64,64);const m={texXmin:c,texYmin:u,texXmax:d,texYmax:h,angle:n};for(let _=0;_<4;_++)this._writeVertex(e,s,r,t,m);e.indexEnsureSize(6),e.indexWrite(l),e.indexWrite(l+1),e.indexWrite(l+2),e.indexWrite(l+1),e.indexWrite(l+3),e.indexWrite(l+2)}};function le(a,e,s){return a[0]=e[0]-s[0],a[1]=e[1]-s[1],a}function _e(a,e){return Math.sqrt(a*a+e*e)}function he(a){const e=_e(a[0],a[1]);a[0]/=e,a[1]/=e}function Ue(a,e){return _e(a[0]-e[0],a[1]-e[1])}function Je(a,e){return a[e+1]}function ge(a){return a.length-1}function Ke(a){let e=0;for(let s=0;s<ge(a);s++)e+=et(a,s);return e}function et(a,e,s=1){let[r,t]=Je(a,e);return[r,t]=[Math.round(r),Math.round(t)],Math.sqrt(r*r+t*t)*s}let tt=class U{constructor(e,s,r,t,n){this._segments=e,this._index=s,this._distance=r,this._xStart=t,this._yStart=n,this._done=!1}static create(e){return new U(e,0,0,e[0][0],e[0][1])}clone(){return new U(this._segments,this._index,this._distance,this.xStart,this.yStart)}equals(e){return this._index===e._index||e._index===this._index-1&&(this._distance===0||e._distance===1)||e._index===this._index+1&&(this._distance===1||e._distance===0)}leq(e){return this._index<e._index||this._index===e._index&&this._distance<=e._distance}geq(e){return this._index>e._index||this._index===e._index&&this._distance>=e._distance}get _segment(){return this._segments[this._index+1]}get angle(){const e=this.dy,s=(0*e+-1*-this.dx)/(1*this.length);let r=Math.acos(s);return e>0&&(r=2*Math.PI-r),r}get xStart(){return this._xStart}get yStart(){return this._yStart}get x(){return this.xStart+this.distance*this.dx}get y(){return this.yStart+this.distance*this.dy}get dx(){return this._segment[0]}get dy(){return this._segment[1]}get xMidpoint(){return this.xStart+.5*this.dx}get yMidpoint(){return this.yStart+.5*this.dy}get xEnd(){return this.xStart+this.dx}get yEnd(){return this.yStart+this.dy}get length(){const{dx:e,dy:s}=this;return Math.sqrt(e*e+s*s)}get remainingLength(){return this.length*(1-this._distance)}get backwardLength(){return this.length*this._distance}get distance(){return this._distance}get done(){return this._done}hasPrev(){return this._index-1>=0}hasNext(){return this._index+1<ge(this._segments)}next(){return this.hasNext()?(this._xStart+=this.dx,this._yStart+=this.dy,this._distance=0,this._index+=1,this):null}prev(){return this.hasPrev()?(this._index-=1,this._xStart-=this.dx,this._yStart-=this.dy,this._distance=1,this):(this._done=!0,null)}_seekBackwards(e,s){const r=this.backwardLength;if(e<=r)return this._distance=(r-e)/this.length,this;let t=this.backwardLength;for(;this.prev();){if(t+this.length>e)return this._seekBackwards(e-t);t+=this.length}return this._distance=0,s?this:null}seek(e,s=!1){if(e<0)return this._seekBackwards(Math.abs(e),s);if(e<=this.remainingLength)return this._distance=(this.backwardLength+e)/this.length,this;let r=this.remainingLength;for(;this.next();){if(r+this.length>e)return this.seek(e-r,s);r+=this.length}return this._distance=1,s?this:null}};function X(a,e,s,r=!0){const t=Ke(a),n=tt.create(a),i=t/2;if(!r)return n.seek(i),void(Math.abs(n.x)<F&&Math.abs(n.y)<F&&s(n.clone(),0,i+0*e,t));const o=Math.max((t-e)/2,0),c=Math.floor(o/e),u=i-c*e;n.seek(u);for(let d=-c;d<=c;d++)Math.abs(n.x)<F&&Math.abs(n.y)<F&&s(n.clone(),d,i+d*e,t),n.seek(e)}function H(a,e){const s=e;for(let r=0;r<a.length;r++){let t=a[r];st(t,s);const n=[];n.push(t[0]);for(let i=1;i<t.length;i++){const[o,c]=t[i-1],[u,d]=t[i],h=u-o,l=d-c;n.push([h,l])}a[r]=n,t=n}return a}function st(a,e){if(e<=0)return;const r=a.length;if(r<3)return;const t=[];let n=0;t.push(0);for(let h=1;h<r;h++)n+=Ue(a[h],a[h-1]),t.push(n);e=Math.min(e,.2*n);const i=[];i.push(a[0][0]),i.push(a[0][1]);const o=a[r-1][0],c=a[r-1][1],u=le([0,0],a[0],a[1]);he(u),a[0][0]+=e*u[0],a[0][1]+=e*u[1],le(u,a[r-1],a[r-2]),he(u),a[r-1][0]+=e*u[0],a[r-1][1]+=e*u[1];for(let h=1;h<r;h++)t[h]+=e;t[r-1]+=e;const d=.5*e;for(let h=1;h<r-1;h++){let l=0,m=0,_=0;for(let f=h-1;f>=0&&!(t[f+1]<t[h]-d);f--){const p=d+t[f+1]-t[h],g=t[f+1]-t[f],y=t[h]-t[f]<d?1:p/g;if(Math.abs(y)<1e-6)break;const x=y*y,b=y*p-.5*x*g,v=y*g/e,M=a[f+1],w=a[f][0]-M[0],z=a[f][1]-M[1];l+=v/b*(M[0]*y*p+.5*x*(p*w-g*M[0])-x*y*g*w/3),m+=v/b*(M[1]*y*p+.5*x*(p*z-g*M[1])-x*y*g*z/3),_+=v}for(let f=h+1;f<r&&!(t[f-1]>t[h]+d);f++){const p=d-t[f-1]+t[h],g=t[f]-t[f-1],y=t[f]-t[h]<d?1:p/g;if(Math.abs(y)<1e-6)break;const x=y*y,b=y*p-.5*x*g,v=y*g/e,M=a[f-1],w=a[f][0]-M[0],z=a[f][1]-M[1];l+=v/b*(M[0]*y*p+.5*x*(p*w-g*M[0])-x*y*g*w/3),m+=v/b*(M[1]*y*p+.5*x*(p*z-g*M[1])-x*y*g*z/3),_+=v}i.push(l/_),i.push(m/_)}i.push(o),i.push(c);for(let h=0,l=0;h<r;h++)a[h][0]=i[l++],a[h][1]=i[l++]}const C=1,$=0,rt=128,it=be(a=>{let e=0;if(a===0)return 1/0;for(;!(a%2);)e++,a/=2;return e});class nt extends me{constructor(){super(...arguments),this._zoomLevel=0}_write(e,s,r,t){if(this._zoomLevel=t||0,r!=null)throw new Error("InternalError: EffectGeometry not support for LabelMeshWriter");switch(s.geometryType){case"esriGeometryPoint":{const n=s.readXForDisplay(),i=s.readYForDisplay();this._writePoint(e,n,i,s);break}case"esriGeometryEnvelope":case"esriGeometryPolygon":case"esriGeometryMultipoint":{const n=s.readCentroidForDisplay();if(!n)return;const[i,o]=n.coords;this._writePoint(e,i,o,s);break}case"esriGeometryPolyline":this._writeLines(e,s)}}_createLineLabelMetric(e,s,r,t){const n=se(e),i=this.evaluatedMeshParams.horizontalAlignment==="right"?-1:1,o=this.evaluatedMeshParams.verticalAlignment==="bottom"?-1:1,c=this.evaluatedMeshParams.scaleInfo?.maxScale??0,u=this.evaluatedMeshParams.scaleInfo?.minScale??0;return new ce(n,s,r,i,o,c,u,t??null)}_writePoint(e,s,r,t){const n=this._getShaping();if(!n)return;const i=t.getDisplayId(),o=Me(this.evaluatedMeshParams.horizontalAlignment),c=Pe(this.evaluatedMeshParams.verticalAlignment),u=this.evaluatedMeshParams.scaleInfo?.maxScale??0,d=this.evaluatedMeshParams.scaleInfo?.minScale??0,h=se(t.getDisplayId()),l=this._getPointReferenceBounds()||{offsetX:0,offsetY:0,size:0};e.metricStart(new ce(h,s,r,o,c,u,d,l)),this._writeGlyphs(e,i,s,r,n,0,l),e.metricBoxWrite(n.boundsT),e.metricEnd()}_getPointReferenceBounds(){if(!this._references)return null;for(const e of this._references){const s=e.getBoundsInfo();if(s)return s}return null}_writeLines(e,s){const{scaleInfo:r,verticalAlignment:t}=this.evaluatedMeshParams,n=this.evaluatedMeshParams.repeatLabelDistance||128,i=this._getShaping("middle");if(!i)return;const o=(u,d,h,l)=>this._placeSubdivGlyphs(u,d,h,l),c=(i.bounds.width+n)/(1<<C);this._current={out:e,id:s.getDisplayId(),shaping:i,zoomRange:fe(r,this.getTileInfo()),referenceBounds:this._getPointReferenceBounds()||{offsetX:0,offsetY:0,size:0},offsetDirection:null},this._verticalPlacement=t==="bottom"?"above":t==="top"?"below":null,this._verticalPlacement?this._writeAboveAndBelowAlong(s,o,c):this._writeCenterAlong(s,o,c)}_writeAboveAndBelowAlong(e,s,r){const{repeatLabel:t}=this.evaluatedMeshParams,{shaping:n}=this._current,i=n.bounds.halfHeight,o=e.readGeometryForDisplay();if(!o)return;const c=new Y;Ne(c,o,!1,!1,"esriGeometryPolyline",1);const u=ue(new Y,c,i),d=ue(new Y,c,-i),h=oe(d,"esriGeometryPolyline",!1,!1),l=oe(u,"esriGeometryPolyline",!1,!1),m=H(l.paths,n.bounds.width),_=H(h.paths,n.bounds.width);this._current.offsetDirection="above";for(const f of m)X(f,r,s,!!t);this._current.offsetDirection="below";for(const f of _)X(f,r,s,!!t)}_writeCenterAlong(e,s,r){const{repeatLabel:t}=this.evaluatedMeshParams,{shaping:n}=this._current,i=H(e.readLegacyGeometryForDisplay().paths,n.bounds.width);for(const o of i)X(o,r,s,!!t)}_placeSubdivGlyphs(e,s,r,t){const{allowOverrun:n,labelPosition:i,repeatLabelDistance:o}=this.evaluatedMeshParams,c=this._current.zoomRange[0],u=it(s),d=this._current.shaping.bounds.width/(1<<C),h=Math.sqrt(o||rt)/(1<<C),l=Math.min(r,t-r),m=this._current.shaping.isMultiline?N:Math.log2(l/(h+d/2)),_=s===0?m:Math.min(u,m),f=Math.max(c,this._zoomLevel+C-_),p=this._zoomLevel-f,g=this._current.shaping.bounds.width/2*2**p;this._current.shaping.isMultiline?s===0&&this._placeStraight(e,f):n&&p<0?this._placeStraightAlong(e,c):i==="parallel"?this._placeStraightAlong(e,f):i==="curved"&&this._placeCurved(e,f,g)}_placeStraight(e,s){const{out:r,id:t,shaping:n,referenceBounds:i}=this._current,{x:o,y:c}=e;r.metricStart(this._createLineLabelMetric(t,o,c)),r.metricBoxWrite(n.boundsT);const u=e.angle*(180/Math.PI)%360,d=(e.angle*(180/Math.PI)+180)%360;this._writeGlyphs(r,t,o,c,n,0,i,{clipAngle:u,mapAligned:!0,isLineLabel:!0,minZoom:s}),this._writeGlyphs(r,t,o,c,n,0,i,{clipAngle:d,mapAligned:!0,isLineLabel:!0,minZoom:s}),r.metricEnd()}_placeCurved(e,s,r){const{out:t,id:n}=this._current;t.metricStart(this._createLineLabelMetric(n,e.x,e.y));const i=e.clone(),o=e.angle*(180/Math.PI)%360,c=(e.angle*(180/Math.PI)+180)%360;this._verticalPlacement&&this._verticalPlacement!==this._current.offsetDirection||(this._placeFirst(i,s,1,o),this._placeBack(e,i,s,r,1,o),this._placeForward(e,i,s,r,1,o)),this._verticalPlacement&&this._verticalPlacement===this._current.offsetDirection||(this._placeFirst(i,s,0,c),this._placeBack(e,i,s,r,0,c),this._placeForward(e,i,s,r,0,c)),t.metricEnd()}_placeStraightAlong(e,s){const{out:r,id:t,shaping:n,zoomRange:i,referenceBounds:o}=this._current,{boxBorderLineColor:c,boxBackgroundColor:u}=this.evaluatedMeshParams,d=e.clone(),h=e.angle*(180/Math.PI)%360,l=(e.angle*(180/Math.PI)+180)%360,m=n.glyphs.length>0&&!(!c&&!u);if(r.metricStart(this._createLineLabelMetric(t,e.x,e.y)),m){const _=Math.max(s,i[0],0),f=Math.min(N,i[1]),p=Ve(q(),-e.angle),g={minZoom:_,maxZoom:f,clipAngle:h,mapAligned:!0,isLineLabel:!0},y=B(this.evaluatedMeshParams.offsetX),x=B(this.evaluatedMeshParams.offsetY);if(!this._verticalPlacement||this._verticalPlacement===this._current.offsetDirection){const b=ae(y,-1*x),[v,M]=n.shapeBackground(re(q(),p,b));r.recordStart(this.instanceId,this.attributeLayout,n.glyphs[0].textureBinding);const w=2*Math.max(v.width,v.height);r.recordBounds(e.x+v.x,e.y+v.y,w,w),this._writeTextBox(r,t,e.x,e.y,M,o,g),r.recordEnd()}if(!this._verticalPlacement||this._verticalPlacement!==this._current.offsetDirection){const b=ae(y,x),[v,M]=n.shapeBackground(re(q(),p,b));g.clipAngle=l,r.recordStart(this.instanceId,this.attributeLayout,n.glyphs[0].textureBinding);const w=2*Math.max(v.width,v.height);r.recordBounds(e.x+v.x,e.y+v.y,w,w),this._writeTextBox(r,t,e.x,e.y,M,o,g),r.recordEnd()}}this._verticalPlacement&&this._verticalPlacement!==this._current.offsetDirection||this._placeFirst(d,s,1,h,!0),this._verticalPlacement&&this._verticalPlacement===this._current.offsetDirection||this._placeFirst(d,s,0,l,!0),r.metricEnd()}_placeBack(e,s,r,t,n,i){const o=e.clone();let c=e.backwardLength+$;for(;o.prev()&&!(c>=t);)this._placeOnSegment(o,s,c,r,-1,n,i),c+=o.length+$}_placeForward(e,s,r,t,n,i){const o=e.clone();let c=e.remainingLength+$;for(;o.next()&&!(c>=t);)this._placeOnSegment(o,s,c,r,1,n,i),c+=o.length+$}_placeFirst(e,s,r,t,n=!1){const{out:i,id:o,shaping:c,zoomRange:u,referenceBounds:d}=this._current,h=c.glyphs;for(const l of h){const m=l.x>c.bounds.x?r:1-r,_=m*e.remainingLength+(1-m)*e.backwardLength,f=Math.abs(l.x+l.width/2-c.bounds.x),p=Math.max(0,this._zoomLevel+Math.log2(f/(_+$))),g=Math.max(s,n?0:p);l.maxZoom=Math.min(u[1],N),l.angle=e.angle+(1-r)*Math.PI,l.minZoom=Math.max(u[0],g),this._writeLineGlyph(i,o,e.x,e.y,c.bounds,l,t,d,!0),(r||this._current.offsetDirection)&&this._isVisible(l.minZoom,l.maxZoom)&&i.metricBoxWrite(l.bounds)}}_placeOnSegment(e,s,r,t,n,i,o){const{out:c,id:u,shaping:d,referenceBounds:h}=this._current,l=d.glyphs,m=e.dx/e.length,_=e.dy/e.length,f={x:e.x+r*-n*m,y:e.y+r*-n*_};for(const p of l){const g=p.x>d.bounds.x?i:1-i;if(!(g&&n===1||!g&&n===-1))continue;const y=Math.abs(p.x+p.width/2-d.bounds.x),x=Math.max(0,this._zoomLevel+Math.log2(y/r)-.1),b=Math.max(t,this._zoomLevel+Math.log2(y/(r+e.length+$)));x!==0&&(p.angle=e.angle+(1-i)*Math.PI,p.minZoom=b,p.maxZoom=x,this._writeLineGlyph(c,u,f.x,f.y,d.bounds,p,o,h,!0),(i||this._current.offsetDirection)&&this._isVisible(p.minZoom,p.maxZoom)&&c.metricBoxWrite(p.bounds))}}_writeLineGlyph(e,s,r,t,n,i,o,c,u){const d=r+n.x,h=t+n.y,l=2*(this.evaluatedMeshParams.minPixelBuffer?this.evaluatedMeshParams.minPixelBuffer/this._textMeshTransformProps.fontSize:1),m=Math.max(n.width,n.height)*l;e.recordStart(this.instanceId,this.attributeLayout,i.textureBinding),e.recordBounds(d,h,m,m);const{texcoords:_,offsets:f}=i,{fontSize:p,haloSize:g,outlineSize:y}=this._textMeshTransformProps;this._writeQuad(e,s,r,t,{texcoords:_,offsets:f,fontSize:p,haloSize:g,outlineSize:y,color:$e(this.evaluatedMeshParams.color),isBackground:!1,referenceBounds:c,minZoom:Math.max(this._current.zoomRange[0],i.minZoom),maxZoom:Math.min(this._current.zoomRange[1],i.maxZoom),clipAngle:o,mapAligned:u,isLineLabel:!0}),e.recordEnd()}_isVisible(e,s){const r=Math.floor(this._zoomLevel*Q)/Q;return e<=r&&r<=s}}function ue(a,e,s){const{coords:r,lengths:t}=e,n=A(),i=A(),o=A(),c=A(),u=A(),d=A(),h=2;let l=0;for(let m=0;m<t.length;m++){const _=t[m];for(let f=0;f<_;f++){const p=h*(f+l-1),g=h*(f+l),y=h*(f+l+1);f>0?k(n,r[p],r[p+1]):k(n,0,0),k(i,r[g],r[g+1]),f<_-1?k(o,r[y],r[y+1]):k(o,0,0),f===0?k(c,0,0):(ie(c,i,n),Z(c,c),k(c,c[1],-c[0])),f===_-1?k(u,0,0):(ie(u,o,i),Z(u,u),k(u,u[1],-u[0])),je(d,c,u),Z(d,d);const x=d[0]*u[0]+d[1]*u[1];x!==0&&ne(d,d,x),ne(d,d,s),a.coords.push(i[0]+d[0],i[1]+d[1])}a.lengths.push(_),l+=_}return a}function V(a){return a instanceof j?a:typeof a=="object"&&"type"in a?ct[a.type].hydrate(a):new T(a)}class j{constructor(e){this.inputs=e}encode(){const e=[];for(const s of this.inputs)e.push(...s.encode());return e.push(...this.instructions),e}}let T=class extends j{constructor(e){super([]),this.value=e}simplify(){return this}get instructions(){if(Array.isArray(this.value)){const[e,s,r,t]=this.value;return t!=null?L.vector4.encode([e,s||0,r||0,t]):L.vector3.encode([e,s||0,r||0])}return L.scalar.encode(this.value)}},at=class J extends j{constructor(e,s){super([s]),this._config=e,this._parent=s}static hydrate(e){return new J(e,V(e.parent))}simplify(){if(this._config.relativeTranslation||this._config.absoluteScale)return this;const e=this._parent.simplify();if(!(e instanceof T))return this;const[s,r,t,n]=e.value,i=this._config.translation.from[0],o=this._config.translation.from[1],c=this._config.rotation.from,u=this._config.scale.from;if(i===this._config.translation.to[0]&&o===this._config.translation.to[1]&&c===this._config.rotation.to&&u===this._config.scale.to){const d=t+c,h=n*u,l=Math.sin(t),m=Math.cos(t);return new T([m*n*i-l*n*o+s,l*n*i+m*n*o+r,d,h])}return new J(this._config,e)}get instructions(){return L.animatedTransform.encode(this._config)}},ot=class K extends j{constructor(e,s){super([s]),this._config=e,this._parent=s}static hydrate(e){return new K(e,V(e.parent))}simplify(){const e=this._parent.simplify();if(!(e instanceof T))return this;const[s,r,t,n]=e.value,i=this._config.color.from[0],o=this._config.color.from[1],c=this._config.color.from[2];let u=this._config.color.from[3];const d=this._config.opacity.from;return i===this._config.color.to[0]&&o===this._config.color.to[1]&&c===this._config.color.to[2]&&u===this._config.color.to[3]&&d===this._config.opacity.to?(u*=d,new T([s*i,r*o,t*c,n*u])):new K(this._config,e)}get instructions(){return L.animatedColor.encode(this._config)}};const ct={AnimatedTransform:at,AnimatedColor:ot};function lt(a){return ye(a.map(e=>I(e)).map(e=>V(e).simplify()))}function ht(a){const e=[];return e.push(a.transform),e.push(a.fromColor),e.push(a.toColor),e.push(a.colorMix),e.push(a.toOpacity),e.push(a.opacityMix),e}function ye(a){const e=[],s=[];let r=0;for(const t of a){const n=[...t.encode(),...L.ret.encode()];e.push([r+a.length,0,0,0]),s.push(...n),r+=n.length}return[...e,...s]}async function ee(a,e){const s=a;let r;if(typeof s=="number"||typeof s=="string"||typeof s=="boolean")r=s;else if(Array.isArray(s))r=await Promise.all(s.map(t=>ee(t,e)));else if(typeof s=="object")if("valueExpressionInfo"in s){const{valueExpressionInfo:t}=s,{expression:n}=t;r={...s,computed:await e.createComputedField({expression:n})}}else{r={};for(const t in s)r[t]=await ee(s[t],e)}return r}function I(a,e,s){function r(i){if(!("computed"in i))return i;let o=i.computed.readWithDefault(e,s,[255*i.defaultValue[0],255*i.defaultValue[1],255*i.defaultValue[2],i.defaultValue[3]]);if(typeof o=="string"){const c=we.fromString(o);c&&(o=[c.r,c.g,c.b,c.a])}return o}const t=a;let n;if(typeof t=="number"||typeof t=="string"||typeof t=="boolean")n=t;else if(Array.isArray(t))n=t.map(i=>I(i,e,s));else if(typeof t=="object")if("type"in t&&t.type!=null&&t.type==="Process")switch(t.op){case"ArcadeColor":{const i=I(t.value,e,s);G(Array.isArray(i)&&i.length===4),n=[i[0]/255,i[1]/255,i[2]/255,i[3]]}break;case"Transparency":{const i=I(t.value,e,s);G(typeof i=="number"),n=1-i/100}break;case"Divide":{const i=I(t.left,e,s);G(typeof i=="number");const o=I(t.right,e,s);G(typeof o=="number"),n=i/o}break;case"Random":{const i=I(t.seed,e,s),o=I(t.min,e,s),c=I(t.max,e,s),u=e.getObjectId(),d=pe(u||0);n=o+Ze(d,i)*(c-o)}}else if("computed"in t)n=r(t);else{n={};for(const i in t)n[i]=I(t[i],e,s)}return n}function G(a){if(!a)throw new Error("Assertion failed.")}class ut extends Ye{constructor(e){super(),this._value=e}resize(e){}read(e,s){return this._value}readWithDefault(e,s,r){return this._value}referencesScale(){return!1}referencesGeometry(){return!1}}const dt=()=>ke.getLogger("esri.views.2d.engine.webgl.shaderGraph.techniques.mesh.MeshWriterInputEvaluator");async function O(a,e,s=!1){const{defaultValue:r,valueExpressionInfo:t,value:n}=e;if(t){const{expression:i}=t,o=await a.createComputedField({expression:i},s);return o?{...e,computed:o,defaultValue:r}:null}return{...e,computed:new ut(n),defaultValue:r}}async function de(a,e){const{valueExpressionInfo:s}=e,{expression:r}=s,t=await a.createComputedField({expression:r});return t?{...e,computed:t}:null}function xe(a){return typeof a=="object"&&a!=null&&(!(!("valueExpressionInfo"in a)||!a.valueExpressionInfo)||"type"in a&&a.type==="Process"&&"op"in a&&a.op==="Random")}function W(a){if(Array.isArray(a)){for(const e of a)if(W(e))return!0}if(typeof a=="object"){if(xe(a))return!0;for(const e in a)if(W(a[e]))return!0}return!1}class te{static async create(e,s,r){const t={},n=new Map,i=new Map,o=new Map,c=new Map,u=new Map,d=new Map;for(const h in r){const l=r[h];if(l!=null&&typeof l=="object")if(Array.isArray(l)){if(typeof l[0]=="object")throw new Error(`InternalError: Cannot handle ${h}. Nested array params are not supported`);t[h]=l}else if("valueExpressionInfo"in l){if(l.value){t[h]=l.value;continue}const m=await de(e,l);if(!m){t[h]=l.defaultValue;continue}n.set(h,m),t[h]=null}else switch(l.type){case"cim-effect-infos":if(l.effectInfos.some(m=>m.overrides.length)){i.set(h,{effects:await Promise.all(l.effectInfos.map(async m=>{const _=m.overrides.map(f=>O(e,f));return{effect:m.effect,compiledOverrides:(await Promise.all(_)).filter(R)}}))});break}t[h]=l.effectInfos.map(m=>m.effect);break;case"cim-marker-placement-param":l.overrides.length&&o.set(h,{placementInfo:l,compiledOverrides:(await Promise.all(l.overrides.map(m=>O(e,m)))).filter(R)}),t[h]=l.placement;break;case"text-rasterization-param":{if(l.overrides.length){const _=l.overrides.map(f=>O(e,f,l.useLegacyLabelEvaluationRules));c.set(h,{compiledOverrides:(await Promise.all(_)).filter(R),rasterizationParam:l,objectIdToResourceId:new Map});continue}const m={type:"cim-rasterization-info",resource:l.resource};t[h]=await s.fetchResourceImmediate(m)??null;break}case"sprite-rasterization-param":{if(l.overrides.length){const _=l.overrides.map(f=>O(e,f));c.set(h,{compiledOverrides:(await Promise.all(_)).filter(R),rasterizationParam:l,objectIdToResourceId:new Map});continue}if(l.resource.type==="animated"){c.set(h,{compiledOverrides:[],rasterizationParam:l,objectIdToResourceId:new Map});continue}const m={type:"cim-rasterization-info",resource:l.resource};t[h]=await s.fetchResourceImmediate(m)??null;break}case"cim-marker-transform-param":{const{params:m}=l;if(W(m)){const _={compiledMarkerInfos:[]};await Promise.all(m.map(async f=>{const p={props:{}};for(const g in f)if(xe(f[g])){const y=await de(e,f[g]);p.compiledExpressionMap||(p.compiledExpressionMap=new Map);const x=p.compiledExpressionMap;y&&x.set(g,y)}else p.props[g]=f[g];_.compiledMarkerInfos.push(p)})),u.set(h,_)}else t[h]={type:"cim-marker-transform-info",infos:m};break}case"animation-params":{const{params:m}=l,_=ht(m);if(W(_)){const f=await Promise.all(_.map(p=>ee(p,e)));d.set(h,{params:f,propertyIdToResourceId:new Map,key:h})}else{const f=lt(_),p=await s.fetchResourceImmediate({type:"animation-info",resource:f});p!=null&&p.type==="sprite"&&(t[h]={dataRow:p.rect.y,dataColumn:p.rect.x})}break}default:t[h]=l}else t[h]=l}return new te(r,t,n,i,o,c,u,d)}constructor(e,s,r,t,n,i,o,c){this.inputMeshParams=e,this._resolvedMeshParams=s,this._dynamicProperties=r,this._dynamicEffectProperties=t,this._dynamicPlacementProperties=n,this._dynamicAsyncProperties=i,this._dynamicTransformProperties=o,this._dynamicAsyncAnimations=c,this.evaluator=u=>u}get hasDynamicProperties(){return!!(this._dynamicProperties.size||this._dynamicAsyncProperties.size||this._dynamicEffectProperties.size||this._dynamicTransformProperties.size||this._dynamicPlacementProperties.size||this._dynamicAsyncAnimations.size)}get evaluatedMeshParams(){return this._evaluatedMeshParams||(this._evaluatedMeshParams=this.evaluator(this._resolvedMeshParams)),this._evaluatedMeshParams}enqueueRequest(e,s,r){for(const t of this._dynamicAsyncProperties.values()){const n=Ie(t.rasterizationParam.resource);t.rasterizationParam.resource.type==="animated"&&t.rasterizationParam.resource.randomizeStartTime&&(n.primitiveName="__RESERVED__PRIMITIVE__NAME__",n.startGroup=pe(s.getObjectId()||0));for(const{primitiveName:o,propertyName:c,computed:u,defaultValue:d,valueExpressionInfo:h}of t.compiledOverrides)try{const l=t.rasterizationParam.resource.type==="animated"?n.primitiveName:o;qe(n,l,c,u,s,r,d)}catch(l){dt().errorOnce(new Se("invalid-arcade-expression",`Encountered an error when evaluating the arcade expression '${h?.expression}' (primitive: '${o}', property: '${c}')`,l))}const i=e.enqueueRequest({type:"cim-rasterization-info",resource:n});t.objectIdToResourceId.set(s.getObjectId(),i)}for(const t of this._dynamicAsyncAnimations.values()){const n=t.params.map(c=>I(c,s,r)).map(V).map(c=>c.simplify()),i=ye(n),o=e.enqueueRequest({type:"animation-info",resource:i});t.propertyIdToResourceId.set(s.getObjectId()+"."+t.key,o)}}evaluateMeshParams(e,s,r){for(const[t,n]of this._dynamicProperties.entries())this._resolvedMeshParams[t]=n.computed.readWithDefault(s,r,n.defaultValue);for(const[t,n]of this._dynamicPlacementProperties.entries())for(const{computed:i,defaultValue:o,propertyName:c}of n.compiledOverrides){const u=i.readWithDefault(s,r,o);n.placementInfo.placement[c]=u,this._resolvedMeshParams[t]=n.placementInfo.placement}for(const[t,n]of this._dynamicEffectProperties.entries())for(const i of n.effects){for(const{computed:o,defaultValue:c,propertyName:u}of i.compiledOverrides){const d=o.readWithDefault(s,r,c);i.effect[u]=d}this._resolvedMeshParams[t]=n.effects.map(o=>o.effect)}for(const[t,n]of this._dynamicTransformProperties.entries()){const i={type:"cim-marker-transform-info",infos:[]};for(const o of n.compiledMarkerInfos){const c={...o.props};if(o.compiledExpressionMap)for(const[u,d]of o.compiledExpressionMap){const h=d.computed.readWithDefault(s,r,d.defaultValue);c[u]=typeof h=="number"||typeof h=="boolean"?h:d.defaultValue}i.infos.push(c)}this._resolvedMeshParams[t]=i}for(const[t,n]of this._dynamicAsyncProperties.entries()){const i=n.objectIdToResourceId.get(s.getObjectId());if(i==null)continue;const o=e.getResource(i);this._resolvedMeshParams[t]=o}for(const[t,n]of this._dynamicAsyncAnimations.entries()){const i=n.propertyIdToResourceId.get(s.getObjectId()+"."+t);if(i==null)continue;const o=e.getResource(i);this._resolvedMeshParams[t]={dataRow:o.rect.y,dataColumn:o.rect.x}}return this._evaluatedMeshParams=this.evaluator(this._resolvedMeshParams),this.evaluatedMeshParams}}class zt{async createMeshWriter(e,s,r,t){const n=this._getMeshWriter(t.techniqueType),i=await te.create(e,s,t.inputParams),o=new n(t.id,i,t.optionalAttributes,r);return await o.loadDependencies(),o}_getMeshWriter(e){switch(e){case P.Fill:return We;case P.DotDensity:return Oe;case P.ComplexFill:return Ge;case P.PatternFill:return Ce;case P.OutlineFill:return Fe;case P.PatternOutlineFill:return Re;case P.ComplexOutlineFill:return Te;case P.Marker:return Be;case P.PieChart:return De;case P.Text:return me;case P.Line:return Ee;case P.TexturedLine:return ze;case P.Heatmap:return Le;case P.Label:return nt;case P.AnimatedMarker:return Qe;default:throw new Error("Internal Error: Mesh writer not in the registry")}}}export{zt as j,ut as r};
