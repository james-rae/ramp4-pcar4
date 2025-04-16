import{r as Ot,o as tt}from"./vec2-maR1OrZI.js";import{t as A,l as Mt}from"./vec2f64-DohEyf3f.js";import{aR as Dt,ly as wt,lz as yt,lA as Ft,B as I,D as R,N as It,aN as Ht,c1 as Nt,aK as C,c2 as St,g6 as Rt,X as Tt,fi as $t,hs as et,ll as zt,lB as Ut,gD as Bt,U as Pt,s as it,az as Vt}from"./main-D_jCcUNd.js";import{P as $,aV as q,O as G,af as Gt}from"./Geometry-Bw9QQWO0.js";import{e as P}from"./mat4f64-Dk4dwAN8.js";import{o as Wt,E as X,c as W,P as st}from"./vec32-CQFqDiXA.js";import{n as kt,r as D}from"./vec4f64-o2zAXfmz.js";import{t as bt}from"./glUtil-BuljoYCz.js";import{s as p,H as vt}from"./InterleavedLayout-CKyd0f5p.js";import{r as jt,o as qt,i as Xt,E as Yt,U as Jt}from"./HUDMaterial-DSsUzFnf.js";import{n as L}from"./ShaderOutput-DnYY5J1_.js";import{i as Kt}from"./IntersectorInterfaces-BgX4KEwK.js";import{b as Y}from"./Octree-vx8eQxm3.js";import{e as d}from"./VertexAttribute-Cq4MnHjR.js";import{n as Qt,s as Zt,u as te}from"./mat3-CruJiiUv.js";import{e as ee}from"./mat3f64-q3fE-ZOt.js";import{c as ie}from"./mat4-CiVQetHb.js";import{i as nt,l as z,c as At,x as U,b as at,T as se,u as ne,h as ae,d as rt}from"./BufferView-8Ead2OQr.js";import{g as re,m as oe}from"./plane-DMcb58KL.js";import{E as Et}from"./VertexArrayObject-7DpwrMVU.js";import{F as xt}from"./enums-Dk3osxpS.js";import{T as he,E as le,U as ce}from"./sphere-BznZRj-C.js";import{O as de}from"./basicInterfaces-CZwQPxTp.js";import{j as _e}from"./dehydratedFeatureUtils-CLuWkG7j.js";import{N as ue,i as ge,m as fe,v as me,J as pe,_ as ye}from"./DefaultMaterial-D5knyms-.js";import{c as k}from"./HighlightDefaults-BD5B09pE.js";import{g as Ie,C as Se}from"./Scheduler-B-hxYQ24.js";import{E as Re,_ as Te}from"./Texture-DFHwtOk1.js";import"./projectBuffer-B9jUCpdF.js";import{n as be}from"./projectVectorToVector-xmttXaOO.js";import"./glsl-BH37Aalp.js";import"./BindType-BBwFZqyN.js";import"./ShaderBuilder-hle9ArQh.js";import"./vec42-CKs01hkn.js";import"./NormalAttribute.glsl-D2nOgBdg.js";import"./boundedPlane-L_n7myzv.js";import"./ViewingMode-HRfKv6NR.js";function J(e,t,i){return e.canvas||(e.canvas=document.createElement("canvas")),e.canvas.width=t,e.canvas.height=i,e.canvas}function ve(e){const{size:t}=e.definition,i=e.fontString(t);let s=ot.get(i);if(!s){const n=J(Ee,0,0).getContext("2d");e.setFontProperties(n,t);const a=n.measureText(xe);s=new Ae(a.actualBoundingBoxAscent,a.actualBoundingBoxDescent),ot.set(i,s)}return s}const ot=new Map;let Ae=class{get maxHeight(){return this.maxAscent+this.maxDescent}constructor(t,i){this.maxAscent=t,this.maxDescent=i}};const Ee={canvas:null},xe=(()=>{let e="";for(let t=32;t<127;t++)e+=String.fromCharCode(t);return e})(),Lt=1;let xi=class{constructor(t,i,s,n){this.text=t,this._alignment=i,this._parameters=s,this._maxSize=n,this._textWidths=[],this._lineWidths=[],this._renderPixelRatio=null,this._metricsCached=null,this.key=`${t}--${this._parameters.key}-${this._alignment}`,this._lines=t.replaceAll(" "," ").split(/\r?\n/)}get displayWidth(){return Math.ceil(this._displayWidth+2*this._horizontalPadding)}get displayHeight(){let t=this._metrics.firstLineAscent;for(let i=0;i<this._lines.length-1;i++)t+=this._lineSpacing;return t+=this._metrics.lastLineDescent,Math.ceil(t+2*this._haloSize+2*this._verticalPadding)}get renderedWidth(){return this._toRoundedRenderUnit(this.displayWidth)}get renderedHeight(){return this._toRoundedRenderUnit(this.displayHeight)}get firstRenderedBaselinePosition(){return this._toRenderUnit(this._firstLineYOffset+this._metrics.firstLineAscent)}get _firstLineYOffset(){return this._verticalPadding+this._haloSize}get _metrics(){if(this._metricsCached==null){const t=J(ht,H,H).getContext("2d"),i=this._parameters.definition.pixelRatio,s=this._fontSize*i;this._parameters.setFontProperties(t,s);let n=2*this._haloSize;const a=this._parameters.definition.font;a.style!=="italic"&&a.style!=="oblique"&&a.weight!=="bold"&&a.weight!=="bolder"||(n+=.3*t.measureText("A").width),this._textWidths.length=0,this._lineWidths.length=0;let r=0,l=0,o=0,h=0,_=0;this._lines.forEach((F,M)=>{const x=t.measureText(F),Q=x.width/i,Z=Q+n;this._textWidths.push(Q),this._lineWidths.push(Z),r=Math.max(r,Z),h=Math.max(h,x.actualBoundingBoxAscent/i),_=Math.max(_,x.actualBoundingBoxDescent/i),M===0&&(l=x.actualBoundingBoxAscent/i),M===this._lines.length-1&&(o=x.actualBoundingBoxDescent/i)});const c=ve(this._parameters),m=Math.max(h,c.maxAscent),g=Math.max(_,c.maxDescent),f=l,S=this._parameters.definition.font.decoration==="underline"?g:o,V=r;this._metricsCached=new Ce(f,S,m,g,V)}return this._metricsCached}get _lineSpacing(){return(this._midLineHeight+this._linePadding)*this._parameters.definition.lineSpacingFactor}get _midLineHeight(){return this._metrics.midLineHeight}get _linePadding(){return this._midLineHeight*Le}get _midLineAscent(){return this._metrics.maxLineAscent}get _renderedFontSize(){return this._toRenderUnit(this._fontSize)}get _fontSize(){return this._parameters.definition.size}get _renderedHaloSize(){return this._toRenderUnit(this._haloSize)}get _haloSize(){return this._parameters.haloSize}get _horizontalPadding(){return this._hasBackground?this._parameters.definition.background.padding[0]:0}get _verticalPadding(){return Math.max(this._hasBackground?this._parameters.definition.background.padding[1]:0,Lt)}get _hasBackground(){return!!this._parameters.backgroundStyle}get renderPixelRatio(){if(this._renderPixelRatio==null){const t=this._parameters.definition.pixelRatio;this._renderPixelRatio=Math.min(t,Math.min(this._maxSize[0]/this.displayWidth,this._maxSize[1]/this.displayHeight))}return this._renderPixelRatio}_getLineXOffset(t){switch(this._alignment){case E.Left:return this._horizontalPadding;case E.Center:return(this.displayWidth-this._lineWidths[t])/2;case E.Right:return this.displayWidth-this._horizontalPadding-this._lineWidths[t]}}render(t,i,s){t.save();const n=i/=this.renderPixelRatio,a=s/=this.renderPixelRatio,r=this._haloSize,l=this._firstLineYOffset+this._metrics.firstLineAscent;i+=r,s+=l;const o=this._haloSize>0;o&&this._renderHalo(t,n,a,r,l),this._parameters.setFontProperties(t,this._renderedFontSize);for(let h=0;h<this._lines.length;++h){const _=this._lines[h],c=this._getLineXOffset(h);o&&(t.globalCompositeOperation="destination-out",t.fillStyle="rgb(0, 0, 0)",this._fillText(t,_,i+c,s),this._renderLineDecoration(t,i+c,s,this._textWidths[h])),t.globalCompositeOperation="source-over",t.fillStyle=this._parameters.textStyle,this._fillText(t,_,i+this._getLineXOffset(h),s),this._renderLineDecoration(t,i+c,s,this._textWidths[h]),s+=this._lineSpacing}if($.TEXT_SHOW_BASELINE){t.strokeStyle=lt,t.setLineDash([2,2]),t.lineWidth=1;let h=a+l;for(let _=0;_<this._lines.length;++_)this._drawLine(t,[n,h],[n+this.displayWidth,h]),h+=this._lineSpacing}if($.TEXT_SHOW_BORDER&&(t.strokeStyle=lt,t.setLineDash([]),t.lineWidth=1,this._drawBox(t,[n,a],[this.displayWidth,this.displayHeight])),this._hasBackground){const h=this._parameters.definition.background.borderRadius*this.renderPixelRatio;this._roundedRect(t,n,a,h),t.globalCompositeOperation="destination-over",t.fillStyle=this._parameters.backgroundStyle,t.fill()}t.restore()}_renderLineDecoration(t,i,s,n,a=!1){if(this._parameters.definition.font.decoration==="none"||n===0)return;const r=1,l=Math.max(this._parameters.definition.size/16,r);switch(this._parameters.definition.font.decoration){case"underline":s+=2*l;break;case"line-through":s-=.33*this._midLineAscent}const o=a?this._haloSize:0;t.strokeStyle=a?this._parameters.haloStyle:this._parameters.textStyle,t.lineWidth=this._toRenderUnit(l+2*o),t.beginPath(),t.moveTo(this._toRenderUnit(i-o),this._toRenderUnit(s)),t.lineTo(this._toRenderUnit(i+n+o),this._toRenderUnit(s)),t.stroke()}_roundedRect(t,i,s,n){i=this._toRenderUnit(i),s=this._toRenderUnit(s);const a=this.renderedWidth,r=this.renderedHeight;n!==0?(n=Dt(n,0,Math.floor(r/2)),t.beginPath(),t.moveTo(i,s+n),t.arcTo(i,s,i+n,s,n),t.lineTo(i+a-n,s),t.arcTo(i+a,s,i+a,s+n,n),t.lineTo(i+a,s+r-n),t.arcTo(i+a,s+r,i+a-n,s+r,n),t.lineTo(i+n,s+r),t.arcTo(i,s+r,i,s+r-n,n),t.closePath()):t.rect(i,s,a,r)}_renderHalo(t,i,s,n,a){const r=this.renderedWidth,l=this.renderedHeight,o=J(ht,Math.max(r,H),Math.max(l,H)),h=o.getContext("2d");h.clearRect(0,0,r,l),this._parameters.setFontProperties(h,this._renderedFontSize),h.fillStyle=this._parameters.haloStyle,h.strokeStyle=this._parameters.haloStyle;const _=this._renderedHaloSize<3;h.lineJoin=_?"miter":"round",_?this._renderHaloEmulated(h,n,a):this._renderHaloNative(h,n,a);let c=a;for(let m=0;m<this._lines.length;++m){const g=this._getLineXOffset(m);this._renderLineDecoration(h,n+g,c,this._textWidths[m],!0),c+=this._lineSpacing}t.globalAlpha=this._parameters.definition.halo.color[3],t.drawImage(o,0,0,r,l,this._toRenderUnit(i),this._toRenderUnit(s),r,l),t.globalAlpha=1}_renderHaloEmulated(t,i,s){for(let n=0;n<this._lines.length;++n){const a=this._lines[n],r=this._getLineXOffset(n);for(const[l,o]of Ct)this._fillText(t,a,i+r+this._haloSize*l,s+this._haloSize*o);s+=this._lineSpacing}}_renderHaloNative(t,i,s){const n=2*this._haloSize;for(let a=0;a<this._lines.length;++a){const r=this._lines[a],l=this._getLineXOffset(a),o=5,h=.1;for(let _=0;_<o;_++){const c=1-(o-1)*h+_*h;t.lineWidth=this._toRenderUnit(c*n),this._strokeText(t,r,i+l,s)}s+=this._lineSpacing}}get _displayWidth(){return this._metrics.displayWidth}_toRenderUnit(t){return t*this.renderPixelRatio}_toRoundedRenderUnit(t){return Math.round(t*this.renderPixelRatio)}_fillText(t,i,s,n){t.fillText(i,this._toRenderUnit(s),this._toRenderUnit(n))}_strokeText(t,i,s,n){t.strokeText(i,this._toRenderUnit(s),this._toRenderUnit(n))}_drawLine(t,i,s){t.beginPath(),t.moveTo(this._toRoundedRenderUnit(i[0])+.5,this._toRoundedRenderUnit(i[1])+.5),t.lineTo(this._toRoundedRenderUnit(s[0])+.5,this._toRoundedRenderUnit(s[1])+.5),t.stroke()}_drawBox(t,i,s){const n=this._toRenderUnit(i[0]),a=this._toRenderUnit(i[1]),r=this._toRenderUnit(s[0]),l=this._toRenderUnit(s[1]),o=Math.floor(n)+.5,h=Math.ceil(n+r)-.5,_=Math.floor(a)+.5,c=Math.ceil(a+l)-.5;t.beginPath(),t.moveTo(o,_),t.lineTo(h,_),t.lineTo(h,c),t.lineTo(o,c),t.lineTo(o,_),t.stroke()}};const Ct=[];for(let t=0;t<360;t+=360/16)Ct.push([Math.cos(Math.PI*t/180),Math.sin(Math.PI*t/180)]);var E;(function(e){e[e.Left=0]="Left",e[e.Center=1]="Center",e[e.Right=2]="Right"})(E||(E={}));const ht={canvas:null},Le=.2,H=512,lt="rgb(255, 0, 255, 0.5)";let Ce=class{get firstLineHeight(){return this.firstLineAscent+this.maxLineDescent}get midLineHeight(){return this.maxLineAscent+this.maxLineDescent}get lastLineHeight(){return this.maxLineAscent+this.lastLineDescent}constructor(t,i,s,n,a){this.firstLineAscent=t,this.lastLineDescent=i,this.maxLineAscent=s,this.maxLineDescent=n,this.displayWidth=a}};const Oi=Object.freeze({left:0,center:.5,right:1}),Mi=Object.freeze({"bottom-left":A(0,0),bottom:A(.5,0),"bottom-right":A(1,0),left:A(0,.5),center:A(.5,.5),right:A(1,.5),"top-left":A(0,1),top:A(.5,1),"top-right":A(1,1)});function Di(e){switch(e){case"left":return E.Left;case"right":return E.Right;default:return E.Center}}function wi(e,t){switch(t){case"bottom":return e==="left"?"bottom-left":e==="right"?"bottom-right":"bottom";case"center":return e;case"top":return e==="left"?"top-left":e==="right"?"top-right":"top"}}function Fi(e){return e==="middle"?"center":e}function Hi(e,t){switch(e){case"top":return tt(t,0,Lt);case"bottom":return tt(t,0,-1);default:return Ot(t,Mt)}}let Oe=class{constructor(t,i){this._material=t,this._repository=i,this._map=new Map}dispose(){this._map.forEach((t,i)=>{t!=null&&this._repository.release(this._material,i)})}load(t,i,s){if(!this._material.produces.get(i)?.(s))return null;this._map.has(s)||this._map.set(s,this._repository.acquire(this._material,i,s));const a=this._map.get(s);if(a!=null){if(a.ensureResources(t)===de.LOADED)return a;this._repository.requestRender()}return null}},w=class{constructor(t=1/0,i=-1/0){this.near=t,this.far=i}set(t,i){this.near=t,this.far=i}union(t){t!=null&&(this.near=Math.min(this.near,t.near),this.far=Math.max(this.far,t.far))}within(t){return this.near<=t&&t<=this.far}};w.zero=new w(0,0);class Me{constructor(t,i,s){this._elementSize=i,this._buffer=Et.createVertex(t,xt.STATIC_DRAW),this.resize(s)}destroy(){this._buffer.dispose()}get elementSize(){return this._elementSize}get capacity(){return this._capacity}get array(){return this._array}get buffer(){return this._buffer}get usedMemory(){return this._array.byteLength+this._buffer.usedMemory}copyRange(t,i,s,n=0){const a=new Uint8Array(this.array,t*this.elementSize,(i-t)*this.elementSize);new Uint8Array(s.array,n*this.elementSize).set(a)}transferAll(){this._buffer.setData(this._array)}transferRange(t,i){const s=t*this._elementSize,n=i*this._elementSize;this._buffer.setSubData(new Uint8Array(this._array),s,s,n)}resize(t){const i=t*this._elementSize,s=new ArrayBuffer(i);this._array&&(t>=this._capacity?new Uint8Array(s).set(new Uint8Array(this._array)):new Uint8Array(s).set(new Uint8Array(this._array).subarray(0,t*this._elementSize))),this._array=s,this._buffer.setSize(i),this._capacity=t}}class De{constructor(t){this.modelOriginHi=t.getField(d.INSTANCEMODELORIGINHI,nt),this.modelOriginLo=t.getField(d.INSTANCEMODELORIGINLO,nt),this.model=t.getField(d.INSTANCEMODEL,z),this.modelNormal=t.getField(d.INSTANCEMODELNORMAL,z),this.featureAttribute=t.getField(d.INSTANCEFEATUREATTRIBUTE,At),this.color=t.getField(d.INSTANCECOLOR,U),this.objectAndLayerIdColor=t.getField(d.INSTANCEOBJECTANDLAYERIDCOLOR,U)}}class we{constructor(t,i){this._rctx=t,this._instanceBufferLayout=i,this._headIndex=0,this._tailIndex=0,this._firstIndex=null,this._captureFirstIndex=!0,this._updating=!1,this._prevHeadIndex=0,this._resized=!1,this._capacity=1}destroy(){this._buffer&&this._buffer.destroy()}get buffer(){return this._buffer.buffer}get view(){return this._view}get capacity(){return this._capacity}get size(){const t=this._headIndex,i=this._tailIndex;return t>=i?t-i:t+this._capacity-i}get isEmpty(){return this._headIndex===this._tailIndex}get isFull(){return this._tailIndex===(this._headIndex+1)%this._capacity}get headIndex(){return this._headIndex}get tailIndex(){return this._tailIndex}get firstIndex(){return this._firstIndex}get usedMemory(){return this._buffer?.usedMemory??0}reset(){this._headIndex=0,this._tailIndex=0,this._firstIndex=null}startUpdateCycle(){this._captureFirstIndex=!0}beginUpdate(){p(!this._updating,"already updating"),this._updating=!0,this._prevHeadIndex=this._headIndex}endUpdate(){p(this._updating,"not updating"),this.size<wt*this.capacity&&this._shrink(),this._resized?(this._buffer.transferAll(),this._resized=!1):this._transferRange(this._prevHeadIndex,this._headIndex),this._updating=!1}allocateHead(){p(this._updating,"not updating"),this.isFull&&this._grow();const t=this.headIndex;return this._captureFirstIndex&&(this._firstIndex=t,this._captureFirstIndex=!1),this._incrementHead(),p(this._headIndex!==this._tailIndex,"invalid pointers"),t}freeTail(){p(this._updating,"not updating"),p(this.size>0,"invalid size");const t=this._tailIndex===this._firstIndex;this._incrementTail(),t&&(this._firstIndex=this._tailIndex)}_grow(){const t=Math.max(B,Math.floor(this._capacity*yt));this._resize(t)}_shrink(){const t=Math.max(B,Math.floor(this._capacity*Ft));this._resize(t)}_resize(t){if(p(this._updating,"not updating"),t===this._capacity)return;const i=new Me(this._rctx,this._instanceBufferLayout.stride,t);if(this._buffer){this._firstIndex&&(this._firstIndex=(this._firstIndex+this._capacity-this._tailIndex)%this._capacity);const s=this.size,n=this._compactInstances(i);p(n===s,"invalid compaction"),this._buffer.destroy(),this._tailIndex=0,this._headIndex=n,this._prevHeadIndex=0}this._resized=!0,this._capacity=t,this._buffer=i,this._view=new De(this._instanceBufferLayout.createView(this._buffer.array))}_compactInstances(t){const i=this._headIndex,s=this._tailIndex;return s<i?(this._buffer.copyRange(s,i,t),i-s):s>i?(this._buffer.copyRange(s,this._capacity,t),i>0&&this._buffer.copyRange(0,i,t,this._capacity-s),i+(this._capacity-s)):0}_incrementHead(t=1){this._headIndex=(this._headIndex+t)%this._capacity}_incrementTail(t=1){this._tailIndex=(this._tailIndex+t)%this._capacity}_transferRange(t,i){t<i?this._buffer.transferRange(t,i):t>i&&(i>0&&this._buffer.transferRange(0,i),this._buffer.transferRange(t,this._capacity))}}const B=64;var u;function Fe(e){let t=vt().mat4f64(d.LOCALTRANSFORM).mat4f64(d.GLOBALTRANSFORM).vec4f64(d.BOUNDINGSPHERE).vec3f64(d.MODELORIGIN).mat3f(d.INSTANCEMODEL).mat3f(d.INSTANCEMODELNORMAL).vec2f(d.MODELSCALEFACTORS);return e.includes(d.FEATUREATTRIBUTE)&&(t=t.vec4f(d.FEATUREATTRIBUTE)),e.includes(d.COLOR)&&(t=t.vec4u8(d.COLOR)),e.includes(d.OBJECTANDLAYERIDCOLOR)&&(t=t.vec4u8(d.OBJECTANDLAYERIDCOLOR)),t=t.u8(d.STATE).u8(d.LODLEVEL),t}(function(e){e[e.ALLOCATED=1]="ALLOCATED",e[e.DEFAULT_ACTIVE=2]="DEFAULT_ACTIVE",e[e.VISIBLE=4]="VISIBLE",e[e.HIGHLIGHT=8]="HIGHLIGHT",e[e.HIGHLIGHT_ACTIVE=16]="HIGHLIGHT_ACTIVE",e[e.REMOVE=32]="REMOVE",e[e.TRANSFORM_CHANGED=64]="TRANSFORM_CHANGED",e[e.ACTIVE=18]="ACTIVE"})(u||(u={}));class ct{constructor(t){this.localTransform=t.getField(d.LOCALTRANSFORM,at),this.globalTransform=t.getField(d.GLOBALTRANSFORM,at),this.modelOrigin=t.getField(d.MODELORIGIN,se),this.model=t.getField(d.INSTANCEMODEL,z),this.modelNormal=t.getField(d.INSTANCEMODELNORMAL,z),this.modelScaleFactors=t.getField(d.MODELSCALEFACTORS,ne),this.boundingSphere=t.getField(d.BOUNDINGSPHERE,ae),this.featureAttribute=t.getField(d.FEATUREATTRIBUTE,At),this.color=t.getField(d.COLOR,U),this.objectAndLayerIdColor=t.getField(d.OBJECTANDLAYERIDCOLOR,U),this.state=t.getField(d.STATE,rt),this.lodLevel=t.getField(d.LODLEVEL,rt)}}let O=class extends Ht{constructor(e,t){super(e),this.events=new Nt,this._capacity=0,this._size=0,this._next=0,this._highlightOptionsMap=new Map,this._highlightOptionsMapPrev=new Map,this._layout=Fe(t),this._capacity=B,this._buffer=this._layout.createBuffer(this._capacity),this._view=new ct(this._buffer)}get capacity(){return this._capacity}get size(){return this._size}get view(){return this._view}addInstance(){this._size+1>this._capacity&&this._grow();const e=this._findSlot();return this._view.state.set(e,u.ALLOCATED),this._size++,this.events.emit("instances-changed"),e}removeInstance(e){const t=this._view.state;p(e>=0&&e<this._capacity&&!!(t.get(e)&u.ALLOCATED),"invalid instance handle"),this._getStateFlag(e,u.ACTIVE)?this._setStateFlags(e,u.REMOVE):this.freeInstance(e),this.events.emit("instances-changed")}freeInstance(e){const t=this._view.state;p(e>=0&&e<this._capacity&&!!(t.get(e)&u.ALLOCATED),"invalid instance handle"),t.set(e,0),this._size--}setLocalTransform(e,t,i=!0){this._view.localTransform.setMat(e,t),i&&this.updateModelTransform(e)}getLocalTransform(e,t){this._view.localTransform.getMat(e,t)}setGlobalTransform(e,t,i=!0){this._view.globalTransform.setMat(e,t),i&&this.updateModelTransform(e)}getGlobalTransform(e,t){this._view.globalTransform.getMat(e,t)}updateModelTransform(e){const t=this._view,i=y,s=T;t.localTransform.getMat(e,dt),t.globalTransform.getMat(e,j);const n=ie(j,j,dt);Wt(i,n[12],n[13],n[14]),t.modelOrigin.setVec(e,i),Qt(s,n),t.model.setMat(e,s);const a=re(y,n);a.sort(),t.modelScaleFactors.set(e,0,a[1]),t.modelScaleFactors.set(e,1,a[2]),Zt(s,s),te(s,s),t.modelNormal.setMat(e,s),this._setStateFlags(e,u.TRANSFORM_CHANGED),this.events.emit("instance-transform-changed",{index:e})}getModelTransform(e,t){const i=this._view;i.model.getMat(e,T),i.modelOrigin.getVec(e,y),t[0]=T[0],t[1]=T[1],t[2]=T[2],t[3]=0,t[4]=T[3],t[5]=T[4],t[6]=T[5],t[7]=0,t[8]=T[6],t[9]=T[7],t[10]=T[8],t[11]=0,t[12]=y[0],t[13]=y[1],t[14]=y[2],t[15]=1}applyShaderTransformation(e,t){this.shaderTransformation!=null&&this.shaderTransformation.applyTransform(this,e,t)}getCombinedModelTransform(e,t){return this.getModelTransform(e,t),this.shaderTransformation!=null&&this.shaderTransformation.applyTransform(this,e,t),t}getCombinedLocalTransform(e,t){this._view.localTransform.getMat(e,t),this.shaderTransformation!=null&&this.shaderTransformation.applyTransform(this,e,t)}getCombinedMaxScaleFactor(e){let t=this._view.modelScaleFactors.get(e,1);return this.shaderTransformation!=null&&(this.shaderTransformation.scaleFactor(y,this,e),t*=Math.max(y[0],y[1],y[2])),t}getCombinedMedianScaleFactor(e){let t=this._view.modelScaleFactors.get(e,0);return this.shaderTransformation!=null&&(this.shaderTransformation.scaleFactor(y,this,e),t*=He(y[0],y[1],y[2])),t}getModel(e,t){this._view.model.getMat(e,t)}setFeatureAttribute(e,t){this._view.featureAttribute.setVec(e,t)}getFeatureAttribute(e,t){this._view.featureAttribute.getVec(e,t)}setColor(e,t){this._view.color.setVec(e,t)}setObjectAndLayerIdColor(e,t){this._view.objectAndLayerIdColor.setVec(e,t)}setVisible(e,t){t!==this.getVisible(e)&&(this._setStateFlag(e,u.VISIBLE,t),this.events.emit("instance-visibility-changed",{index:e}))}getVisible(e){return this._getStateFlag(e,u.VISIBLE)}setHighlight(e,t){const{_highlightOptionsMap:i}=this,s=i.get(e);t?t!==s&&(i.set(e,t),this._setStateFlag(e,u.HIGHLIGHT,!0),this.events.emit("instance-highlight-changed")):s&&(i.delete(e),this._setStateFlag(e,u.HIGHLIGHT,!1),this.events.emit("instance-highlight-changed"))}get highlightOptionsMap(){return this._highlightOptionsMap}getHighlightStateFlag(e){return this._getStateFlag(e,u.HIGHLIGHT)}geHighlightOptionsPrev(e){const t=this._highlightOptionsMapPrev.get(e)??null;return this._highlightOptionsMapPrev.delete(e),t}getHighlightName(e){const t=this.highlightOptionsMap.get(e)??null;return t?this._highlightOptionsMapPrev.set(e,t):this._highlightOptionsMapPrev.delete(e),t}getState(e){return this._view.state.get(e)}getLodLevel(e){return this._view.lodLevel.get(e)}countFlags(e){let t=0;for(let i=0;i<this._capacity;++i)this.getState(i)&e&&++t;return t}_setStateFlags(e,t){const i=this._view.state;t=i.get(e)|t,i.set(e,t)}_clearStateFlags(e,t){const i=this._view.state;t=i.get(e)&~t,i.set(e,t)}_setStateFlag(e,t,i){i?this._setStateFlags(e,t):this._clearStateFlags(e,t)}_getStateFlag(e,t){return!!(this._view.state.get(e)&t)}_grow(){this._capacity=Math.max(B,Math.floor(this._capacity*yt)),this._buffer=this._layout.createBuffer(this._capacity).copyFrom(this._buffer),this._view=new ct(this._buffer)}_findSlot(){const e=this._view.state;let t=this._next;for(;e.get(t)&u.ALLOCATED;)t=t+1===this._capacity?0:t+1;return this._next=t+1===this._capacity?0:t+1,t}};function He(e,t,i){return Math.max(Math.min(e,t),Math.min(Math.max(e,t),i))}I([R({constructOnly:!0})],O.prototype,"shaderTransformation",void 0),I([R()],O.prototype,"_size",void 0),I([R({readOnly:!0})],O.prototype,"size",null),O=I([It("esri.views.3d.webgl-engine.lib.lodRendering.InstanceData")],O);const y=C(),T=ee(),dt=P(),j=P();class Ne extends Y{constructor(t,i){super(s=>he(this._instanceData.view.boundingSphere.getVec(s,this._tmpSphere)),{maximumDepth:25}),this._instanceData=t,this._boundingSphere=i,this._tmpSphere=le(),this._tmpMat4=P()}addInstance(t){const i=this._instanceData.view.boundingSphere,s=this._instanceData.getCombinedModelTransform(t,this._tmpMat4);X(ce(this._tmpSphere),this._boundingSphere.center,s),this._tmpSphere[3]=this._boundingSphere.radius*oe(s),i.setVec(t,this._tmpSphere),this.add([t])}removeInstance(t){this.remove([t])}}class $e{constructor(t,i){this._worldSpaceRadius=t,this._minScreenSpaceRadii=i}selectLevel(t,i,s){const n=s.computeScreenPixelSizeAt(t),a=this._worldSpaceRadius*i/n;let r=0;for(let l=1;l<this._minScreenSpaceRadii.length;++l)a>=this._minScreenSpaceRadii[l]&&(r=l);return r}}let ze=class{constructor(t,i){const s=t.renderContext.rctx,n=i.geometry,a=i.geometry.getRenderGeometry(),r=a.material;this._materials=t.materials,r.setParameters({instancedDoublePrecision:!0}),this.geometry=n,this.material=r,this.glMaterials=new Oe(r,this._materials),this.vertexBufferLayout=a.vertexBufferLayout,this.vbo=Et.createVertex(s,xt.STATIC_DRAW,a.buffer),this.vao=new jt(s,q,new Map([["geometry",bt(a.vertexBufferLayout)]]),new Map([["geometry",this.vbo]])),this.vertexCount=a.elementCount}destroy(){this.glMaterials.dispose(),this.vbo.dispose(),this.vao.dispose()}get boundingInfo(){return this.geometry.boundingInfo}get triangleCount(){return this.vertexCount/3}get usedMemory(){return 128+this.vbo.usedMemory+this.vao.usedMemory}intersect(t,i,s,n,a,r,l,o){return this.geometry.intersect(t,i,s,n,a,r,l,o)}};class K{static async create(t,i,s){const n=await Promise.allSettled(i.components.map(r=>t.controller.schedule(()=>new ze(t,r),s))),a=n.map(r=>r.status==="fulfilled"?r.value:null).filter(St);if(Rt(s)||a.length!==n.length){a.forEach(r=>r.destroy()),Tt(s);for(const r of n)if(r.status==="rejected")throw r.reason}return new K(i.minScreenSpaceRadius,a)}constructor(t,i){this.minScreenSpaceRadius=t,this.components=i}destroy(){this.components.forEach(t=>t.destroy())}intersect(t,i,s,n,a,r,l){this.components.forEach(o=>o.intersect(t,i,s,n,a,r,this.boundingSphere,l))}get boundingBox(){if(this._boundingBox==null){const t=$t();this.components.forEach(i=>{i.boundingInfo!=null&&(et(t,i.boundingInfo.bbMin),et(t,i.boundingInfo.bbMax))}),this._boundingBox=t}return this._boundingBox}get boundingSphere(){if(this._boundingSphere==null){const t=this.boundingBox,i=C();zt(t,i),this._boundingSphere={center:i,radius:.5*Ut(t)}}return this._boundingSphere}get triangleCount(){return this.components.reduce((t,i)=>t+i.triangleCount,0)}}const Ue=e=>{const t=e.baseBoundingSphere.radius,i=e.levels.map(s=>s.minScreenSpaceRadius);return new $e(t,i)};let b=class extends qt{constructor(e,t){super(e),this.type=Kt.LOD,this.isGround=!1,this._levels=[],this._defaultRenderInstanceData=new Array,this._highlightRenderInstanceDataMap=new Map,this._instanceIndex=0,this._cycleStartIndex=0,this._slicePlane=!1,this._camera=new Xt,this._updateCyclesWithStaticCamera=-1,this._needFullCycle=!1,this.produces=new Map([[G.OPAQUE_MATERIAL,i=>this._produces(i)],[G.TRANSPARENT_MATERIAL,i=>!!this._hasTransparentLevels()&&this._produces(i)]]),this._instanceData=new O({shaderTransformation:e.shaderTransformation},e.optionalFields),this.addHandles(t.registerTask(Ie.LOD_RENDERER,this))}initialize(){this._instanceBufferLayout=Pe(this.optionalFields),this._glInstanceBufferLayout=bt(this._instanceBufferLayout,1),this.addHandles([this._instanceData.events.on("instances-changed",()=>this._requestUpdateCycle()),this._instanceData.events.on("instance-transform-changed",({index:e})=>{this._requestUpdateCycle(),this.metadata.notifyGraphicGeometryChanged(e)}),this._instanceData.events.on("instance-visibility-changed",({index:e})=>{this._requestUpdateCycle(!0),this.metadata.notifyGraphicVisibilityChanged(e)}),this._instanceData.events.on("instance-highlight-changed",()=>this._requestUpdateCycle(!0))])}get _allRenderInstanceData(){const e=[this._defaultRenderInstanceData];for(const t of this._highlightRenderInstanceDataMap)e.push(t[1]);return e}get _allRenderInstanceDataExceptHighlightShadow(){const e=[this._defaultRenderInstanceData];for(const t of this._highlightRenderInstanceDataMap)t[0]!==k&&e.push(t[1]);return e}hasHighlightOptions(e){return this._highlightRenderInstanceDataMap.has(e)}get _enableLevelSelection(){return this.symbol.levels.length>1}get levels(){return this._levels}get baseBoundingBox(){return this._levels[this._levels.length-1].boundingBox}get baseBoundingSphere(){return this._levels[this._levels.length-1].boundingSphere}get baseMaterial(){return this._levels[this._levels.length-1].components[0].material}get slicePlaneEnabled(){return this._slicePlane}set slicePlaneEnabled(e){this._slicePlane=e}get layerUid(){return this.metadata.layerUid}get instanceData(){return this._instanceData}get hasEmissions(){return this._levels.some(e=>e.components.some(t=>t.material.hasEmissions))}get usedMemory(){return this._allRenderInstanceData.reduce((e,t)=>t.reduce((i,s)=>i+s.usedMemory,e),this._levels.reduce((e,t)=>e+t.components.reduce((i,s)=>i+s.usedMemory,0),0))}get renderStats(){const e=this._instanceData.size,t=[];return this._levels.forEach((i,s)=>{const n=this._allRenderInstanceData[0][s].size+this._allRenderInstanceData[1][s].size,a=i.triangleCount;t.push({renderedInstances:n,renderedTriangles:n*a,trianglesPerInstance:a})}),{totalInstances:e,renderedInstances:t.reduce((i,s)=>i+s.renderedInstances,0),renderedTriangles:t.reduce((i,s)=>i+s.renderedTriangles,0),levels:t}}_createRenderInstanceDataArray(e=[]){const{rctx:t}=this._context.renderContext;return this.symbol.levels.map(i=>{e.push(new we(t,this._instanceBufferLayout))}),e}async initializeRenderContext(e,t){this._context=e,this._createRenderInstanceDataArray(this._defaultRenderInstanceData);const i=await Promise.allSettled(this.symbol.levels.map(n=>K.create(e,n,t))),s=i.map(n=>n.status==="fulfilled"?n.value:null).filter(St);if(Rt(t)||s.length!==i.length){s.forEach(n=>n.destroy()),Tt(t);for(const n of i)if(n.status==="rejected")throw n.reason}this._levels=s,this._levelSelector=Ue(this)}uninitializeRenderContext(){this._invalidateOctree(),this._levels.forEach(e=>e.destroy()),this._defaultRenderInstanceData.forEach(e=>e.destroy()),this._highlightRenderInstanceDataMap.forEach(e=>e.forEach(t=>t.destroy()))}_hasTransparentLevels(){return this._levels.some(e=>e.components.some(t=>t.material.produces.get(G.TRANSPARENT_MATERIAL)?.(L.Color)))}hasHighlights(){return Bt(this._highlightRenderInstanceDataMap,e=>e.some(t=>t.size>0))}_produces(e){return(e!==L.Highlight||this.hasHighlights())&&(e!==L.ShadowHighlight||this.hasHighlightOptions(k))}prepareRender(e){if(!$.LOD_INSTANCE_RENDERER_DISABLE_UPDATES){if(this._enableLevelSelection){const t=e.bind.contentCamera.equals(this._camera);this._camera.copyFrom(e.bind.contentCamera),t||this._requestUpdateCycle()}this._needFullCycle&&(this.runTask(Se),this._needFullCycle=!1)}}acquireTechniques(e){if(!this.baseMaterial.visible||!this.baseMaterial.isVisibleForOutput(e.output))return null;const t=this._getInstanceDatas(e);if(!t)return null;const i=new Array,s=this.levels;return t.forEach(n=>s.forEach(({components:a},r)=>a.forEach(l=>i.push(this._beginComponent(e,n[r],l))))),i}render(e,t){const i=this._getInstanceDatas(e);if(!i||t==null)return;let s=0;e.rctx.bindVAO();const n=this.levels;i.forEach(a=>n.forEach(({components:r},l)=>r.forEach(o=>this._renderComponent(e,t[s++],a[l],o,l))))}_getInstanceDatas(e){const{output:t,bind:i}=e,s=t===L.Highlight,n=t===L.ShadowHighlight,a=!s&&!n,r=t!==L.ShadowExcludeHighlight;if(a)return r?this._allRenderInstanceData:this._allRenderInstanceDataExceptHighlightShadow;if(r){if(s){const o=i.highlight?.name;if(!o)return null;const h=this._highlightRenderInstanceDataMap.get(o);return h?[h]:null}const l=this._highlightRenderInstanceDataMap.get(k);return n?l?[l]:null:Array.from(this._highlightRenderInstanceDataMap.values())}return null}intersect(e,t,i,s){if(!this.baseMaterial.visible||this._octree==null)return;const n=C();W(n,s,i);const a=r=>{this._instanceData.getCombinedModelTransform(r,gt),e.transform.set(gt),X(ft,i,e.transform.inverse),X(mt,s,e.transform.inverse);const l=this._instanceData.getState(r),o=this._instanceData.getLodLevel(r),h=this._levels.length;p(!!(l&u.ACTIVE),"invalid instance state"),p(o>=0&&o<h,"invaid lod level"),this._levels[o].intersect(e,t,ft,mt,r,this.metadata,h)};this.baseMaterial.parameters.verticalOffset?this._octree.forEach(a):this._octree.forEachAlongRay(i,n,a)}notifyShaderTransformationChanged(){this._invalidateOctree(),this._requestUpdateCycle()}get _octree(){if(this._octreeCached==null){const e=this._instanceData,t=e.view?.state;if(!t)return null;this._octreeCached=new Ne(e,this.baseBoundingSphere);for(let i=0;i<e.capacity;++i)t.get(i)&u.ACTIVE&&this._octreeCached.addInstance(i)}return this._octreeCached}_invalidateOctree(){this._octreeCached=Pt(this._octreeCached)}queryDepthRange(e){if(this._octree==null)return new w;const t=e.viewForward,i=this._octree.findClosest(t,Y.DepthOrder.FRONT_TO_BACK,e.frustum),s=this._octree.findClosest(t,Y.DepthOrder.BACK_TO_FRONT,e.frustum);if(i==null||s==null)return new w;const n=e.eye,a=this._instanceData.view;a.boundingSphere.getVec(i,v),W(v,v,n);const r=st(v,t)-v[3];a.boundingSphere.getVec(s,v),W(v,v,n);const l=st(v,t)+v[3];return new w(r,l)}_requestUpdateCycle(e=!1){this._updateCyclesWithStaticCamera=-1,this._cycleStartIndex=this._instanceIndex,e&&(this._needFullCycle=!0,this._context.requestRender())}_startUpdateCycle(){this._updateCyclesWithStaticCamera++,this._allRenderInstanceData.forEach(e=>e.forEach(t=>t.startUpdateCycle()))}get running(){return this._instanceData.size>0&&this._updateCyclesWithStaticCamera<1}runTask(e){const{_enableLevelSelection:t,_camera:i,_levelSelector:s}=this;this._allRenderInstanceData.forEach(_=>_.forEach(c=>c.beginUpdate()));const n=this._instanceData,a=n.view;let r=n.size;const l=n.capacity;let o=this._instanceIndex;const h=Math.ceil(l/500);for(let _=0;_<r&&!e.done;++_){o===this._cycleStartIndex&&this._startUpdateCycle();const c=a.state.get(o);let m=0;if(!(c&u.ALLOCATED)){o=o+1===l?0:o+1,r++;continue}const g=a.lodLevel.get(o);if(c&u.DEFAULT_ACTIVE&&this._defaultRenderInstanceData[g].freeTail(),c&u.HIGHLIGHT_ACTIVE){const f=n.geHighlightOptionsPrev(o);if(f){const S=this._highlightRenderInstanceDataMap.get(f);if(!S)throw new it("Internal error in lodRenderer");S[g].freeTail()}}if(c&u.REMOVE)n.freeInstance(o);else if(c&u.VISIBLE){let f=0;if(t&&(a.modelOrigin.getVec(o,ut),f=s.selectLevel(ut,n.getCombinedMedianScaleFactor(o),i)),m=c&~(u.ACTIVE|u.TRANSFORM_CHANGED),f>=0)if(c&u.HIGHLIGHT){const S=n.getHighlightName(o);if(S){const V=()=>{const M=this._createRenderInstanceDataArray();return M.forEach(x=>x.beginUpdate()),M},F=Vt(this._highlightRenderInstanceDataMap,S,V);if(f>=F.length)throw new it(`LodRenderer internal error - missing lodLevel ${f}`);_t(F[f],a,o)}m|=u.HIGHLIGHT_ACTIVE}else _t(this._defaultRenderInstanceData[f],a,o),m|=u.DEFAULT_ACTIVE;a.state.set(o,m),a.lodLevel.set(o,f)}else m=c&~(u.ACTIVE|u.TRANSFORM_CHANGED),a.state.set(o,m);if(this._octreeCached!=null){const f=!!(c&u.ACTIVE),S=!!(m&u.ACTIVE);!f&&S?this._octreeCached.addInstance(o):f&&!S?this._octreeCached.removeInstance(o):f&&S&&c&u.TRANSFORM_CHANGED&&(this._octreeCached.removeInstance(o),this._octreeCached.addInstance(o))}o=o+1===l?0:o+1,o%h==0&&e.madeProgress()}this._instanceIndex=o,this._allRenderInstanceData.forEach(_=>_.forEach(c=>c.endUpdate())),this._context.requestRender()}_beginComponent(e,t,i){return t.size===0?null:i.glMaterials.load(e.rctx,e.bind.slot,e.output)?.beginSlot(e.bind)}_renderComponent(e,t,i,s,n){if(!t)return;const{bind:a,rctx:r}=e;r.runAppleAmdDriverHelper();const l=r.bindTechnique(t,a,s.material.parameters,Ve);r.bindVAO(s.vao),t.ensureAttributeLocations(s.vao),$.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL&&e.output===L.Color&&(l.setUniform4fv("externalColor",pt[Math.min(n,pt.length-1)]),l.setUniform1i("colorMixMode",Gt.replace));const o=i.capacity,h=i.headIndex,_=i.tailIndex,c=i.firstIndex,m=this._glInstanceBufferLayout,g=(f,S)=>{Re(r,q,i.buffer,m,f),r.drawArraysInstanced(t.primitiveType,0,s.vertexCount,S-f),Te(r,q,i.buffer,m)};s.material.parameters.transparent&&c!=null?h>_?(p(c>=_&&c<=h,"invalid firstIndex"),g(c,h),g(_,c)):h<_&&(c<=h?(p(c>=0&&c<=h,"invalid firstIndex"),g(c,h),g(_,o),g(0,c)):(p(c>=_&&c<=o,"invalid firstIndex"),g(c,o),g(0,h),g(_,c))):h>_?g(_,h):h<_&&(g(0,h),g(_,o)),r.bindVAO(null)}};function _t(e,t,i){const s=e.allocateHead();Be(t,i,e.view,s)}function Be(e,t,i,s){_e(e.modelOrigin,t,i.modelOriginHi,i.modelOriginLo,s),i.model.copyFrom(s,e.model,t),i.modelNormal.copyFrom(s,e.modelNormal,t),e.color&&i.color&&i.color.copyFrom(s,e.color,t),e.objectAndLayerIdColor&&i.objectAndLayerIdColor&&i.objectAndLayerIdColor.copyFrom(s,e.objectAndLayerIdColor,t),e.featureAttribute&&i.featureAttribute&&i.featureAttribute.copyFrom(s,e.featureAttribute,t)}function Pe(e){let t=vt().vec3f(d.INSTANCEMODELORIGINHI).vec3f(d.INSTANCEMODELORIGINLO).mat3f(d.INSTANCEMODEL).mat3f(d.INSTANCEMODELNORMAL);return e!=null&&e.includes("featureAttribute")&&(t=t.vec4f(d.INSTANCEFEATUREATTRIBUTE)),e!=null&&e.includes("color")&&(t=t.vec4u8(d.INSTANCECOLOR)),e!=null&&e.includes("objectAndLayerIdColor")&&(t=t.vec4u8(d.INSTANCEOBJECTANDLAYERIDCOLOR)),t}I([R({constructOnly:!0})],b.prototype,"symbol",void 0),I([R({constructOnly:!0})],b.prototype,"optionalFields",void 0),I([R({constructOnly:!0})],b.prototype,"metadata",void 0),I([R({constructOnly:!0})],b.prototype,"shaderTransformation",void 0),I([R()],b.prototype,"_instanceData",void 0),I([R()],b.prototype,"_cycleStartIndex",void 0),I([R({readOnly:!0})],b.prototype,"_enableLevelSelection",null),I([R()],b.prototype,"_updateCyclesWithStaticCamera",void 0),I([R({readOnly:!0})],b.prototype,"running",null),b=I([It("esri.views.3d.webgl-engine.lib.lodRendering.LodRenderer")],b);const ut=C(),v=kt(),gt=P(),ft=C(),mt=C(),pt=[D(1,0,1,1),D(0,0,1,1),D(0,1,0,1),D(1,1,0,1),D(1,0,0,1)],Ve=new ue;function Ui(e,t,i){return!!be(e,t,N,i.spatialReference)&&(i.x=N[0],i.y=N[1],i.z=N[2],!0)}const N=C(),Bi=Object.freeze(Object.defineProperty({__proto__:null,build:ge},Symbol.toStringTag,{value:"Module"})),Pi=Object.freeze(Object.defineProperty({__proto__:null,build:fe,getRadius:me},Symbol.toStringTag,{value:"Module"})),Vi=Object.freeze(Object.defineProperty({__proto__:null,build:pe},Symbol.toStringTag,{value:"Module"})),Gi=Object.freeze(Object.defineProperty({__proto__:null,build:ye},Symbol.toStringTag,{value:"Module"})),Wi=Object.freeze(Object.defineProperty({__proto__:null,build:Yt,calculateAnchorPosition:Jt},Symbol.toStringTag,{value:"Module"}));export{Vi as D,Wi as H,Gi as R,Bi as S,Ui as a,J as b,Pi as c,ve as e,Di as f,Hi as h,Oi as i,b as k,wi as m,xi as r,Mi as s,Oe as t,Fi as u};
