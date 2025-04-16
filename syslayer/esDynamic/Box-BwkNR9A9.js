import{bO as Y,aQ as F,fD as V,bC as f,bP as ct,dJ as O,dK as U,dH as nt,b_ as lt,c1 as T,e8 as Z,e9 as j,aN as pt,aM as M,dm as _t,Q as q,df as dt,b4 as E,x as u,z as y,K as ut}from"./main-DZMdXZ8-.js";import{h as gt}from"./quantityUtils-0yS6NTaP.js";import{i as x,s as z,m as yt,a as vt}from"./drawUtils-CNmFDdQ9.js";import{p as mt,j as ft}from"./GraphicMover-D2N4RGJP.js";import{e as Gt}from"./RouteLayerInteraction-CqaLlPCR.js";import{h as bt}from"./settings-C69-bOSu.js";import{l as K}from"./hitTestSelectUtils-JC04JROZ.js";import{R as xt,m as wt}from"./automaticLengthMeasurementUtils-CnIA3o5x.js";import{s as St,o as kt,i as Rt}from"./ExtentScaleTooltipInfo-DbB26X-R.js";import{i as Mt}from"./TranslateTooltipInfo-PSWi-zg2.js";function A(t,e,i,s){const o=[];for(const a of t){const h=a.slice();o.push(h);const n=e*(a[0]-s.x)-i*(a[1]-s.y)+s.x,r=i*(a[0]-s.x)+e*(a[1]-s.y)+s.y;h[0]=n,h[1]=r}return o}function L(t,e,i){const{hasM:s,hasZ:o,spatialReference:a}=t,h=e*Math.PI/180,n=Math.cos(h),r=Math.sin(h);if("xmin"in t&&(i=i??t.center,t=new Y({spatialReference:a,rings:[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]})),"paths"in t){i=i??t.extent.center;const c=[];for(const l of t.paths)c.push(A(l,n,r,i));return new F({hasM:s,hasZ:o,spatialReference:a,paths:c})}if("rings"in t){i=i??t.extent.center;const c=[];for(const l of t.rings){const w=V(l),g=A(l,n,r,i);V(g)!==w&&g.reverse(),c.push(g)}return new Y({hasM:s,hasZ:o,spatialReference:a,rings:c})}if("x"in t){i=i??t;const c=new f({x:n*(t.x-i.x)-r*(t.y-i.y)+i.x,y:r*(t.x-i.x)+n*(t.y-i.y)+i.y,spatialReference:a});return t.z!=null&&(c.z=t.z),t.m!=null&&(c.m=t.m),c}return"points"in t?(i=i??t.extent.center,new ct({hasM:s,hasZ:o,points:A(t.points,n,r,i),spatialReference:a})):null}class Ct{constructor(e,i,s,o){this.graphics=e,this.mover=i,this.dx=s,this.dy=o,this.type="move-start"}}class Ht{constructor(e,i,s,o){this.graphics=e,this.mover=i,this.dx=s,this.dy=o,this.type="move"}}class Q{constructor(e,i,s,o){this.graphics=e,this.mover=i,this.dx=s,this.dy=o,this.type="move-stop"}}class It{constructor(e,i,s){this.graphics=e,this.mover=i,this.angle=s,this.type="rotate-start"}}class Ot{constructor(e,i,s){this.graphics=e,this.mover=i,this.angle=s,this.type="rotate"}}class J{constructor(e,i,s){this.graphics=e,this.mover=i,this.angle=s,this.type="rotate-stop"}}class Tt{constructor(e,i,s,o){this.graphics=e,this.mover=i,this.xScale=s,this.yScale=o,this.type="scale-start"}}class Et{constructor(e,i,s,o){this.graphics=e,this.mover=i,this.xScale=s,this.yScale=o,this.type="scale"}}class ${constructor(e,i,s,o){this.graphics=e,this.mover=i,this.xScale=s,this.yScale=o,this.type="scale-stop"}}const _=bt.transformGraphics,zt={centerIndicator:new O({style:"cross",size:_.center.size,color:_.center.color}),fill:{default:new U({color:_.fill.color,outline:{color:_.fill.outlineColor,join:"round",width:1}}),active:new U({color:_.fill.stagedColor,outline:{color:_.fill.outlineColor,join:"round",style:"dash",width:1}})},handles:{default:new O({style:"square",size:_.vertex.size,color:_.vertex.color,outline:{color:_.vertex.outlineColor,width:1}}),hover:new O({style:"square",size:_.vertex.hoverSize,color:_.vertex.hoverColor,outline:{color:_.vertex.hoverOutlineColor,width:1}})},rotator:{default:new O({style:"circle",size:_.vertex.size,color:_.vertex.color,outline:{color:_.vertex.outlineColor,width:1}}),hover:new O({style:"circle",size:_.vertex.hoverSize,color:_.vertex.hoverColor,outline:{color:_.vertex.hoverOutlineColor,width:1}})},rotatorLine:new nt({color:_.line.color,width:1})};let d=class extends lt.EventedAccessor{constructor(t){super(t),this._activeHandleGraphic=null,this._graphicAttributes={esriSketchTool:"box"},this._mover=null,this._centerGraphic=null,this._backgroundGraphic=null,this._vertexGraphics=[],this._rotateHandleGraphic=null,this._rotateGraphicOffset=20,this._angleOfRotation=0,this._rotateLineGraphic=null,this._startInfo=null,this._totalDx=0,this._totalDy=0,this._xScale=1,this._yScale=1,this.tooltip=null,this.type="box",this.callbacks={onMoveStart(){},onMove(){},onMoveStop(){},onScaleStart(){},onScale(){},onScaleStop(){},onRotateStart(){},onRotate(){},onRotateStop(){},onGraphicClick(){}},this.enableMovement=!0,this.enableRotation=!0,this.enableScaling=!0,this.graphics=[],this.highlightsEnabled=!0,this.layer=null,this.preserveAspectRatio=!1,this.showCenterGraphic=!0,this.symbols=zt,this.sketchOptions=new K,this.view=null,this._getBounds=(()=>{const e=T();return(i,s)=>{i[0]=Number.POSITIVE_INFINITY,i[1]=Number.POSITIVE_INFINITY,i[2]=Number.NEGATIVE_INFINITY,i[3]=Number.NEGATIVE_INFINITY;for(const o of s){if(!o)continue;let a,h,n,r;if(o.type==="point")a=n=o.x,h=r=o.y;else if(o.type==="multipoint"){const c=Z(o);[a,h,n,r]=j(e,[c])}else if(o.type==="extent")[a,h,n,r]=[o.xmin,o.ymin,o.xmax,o.ymax];else{const c=Z(o);[a,h,n,r]=j(e,c)}i[0]=Math.min(a,i[0]),i[1]=Math.min(h,i[1]),i[2]=Math.max(n,i[2]),i[3]=Math.max(r,i[3])}return i}})()}initialize(){const t=this.view;this._highlightHelper=new mt({view:t}),this._setup(),this.addHandles([pt(()=>t?.ready,()=>{const{layer:e,view:i}=this;Gt(i,e)},{once:!0,initial:!0}),M(()=>this.preserveAspectRatio,()=>{this._activeHandleGraphic&&(this._scaleGraphic(this._activeHandleGraphic),this._updateGraphics(),this._updateTooltip(this._activeHandleGraphic))}),M(()=>t?.scale,()=>{this._updateRotateGraphic(),this._updateRotateLineGraphic()}),M(()=>this.graphics,()=>this.refresh()),M(()=>this.layer,(e,i)=>{i&&this._resetGraphics(i),this.refresh()}),M(()=>this.highlightsEnabled,()=>{this._highlightHelper?.removeAll(),this._setUpHighlights()}),M(()=>this.sketchOptions.tooltips.effectiveEnabled,e=>{this.tooltip=e?xt(()=>({view:t,options:this.sketchOptions.tooltips})):q(this.tooltip)},_t),M(()=>this.view.effectiveTheme.accentColor,()=>this._updateSymbolsForTheme(),dt),this.on("move-start",e=>this.callbacks?.onMoveStart?.(e)),this.on("move",e=>this.callbacks?.onMove?.(e)),this.on("move-stop",e=>this.callbacks?.onMoveStop?.(e)),this.on("rotate-start",e=>this.callbacks?.onRotateStart?.(e)),this.on("rotate",e=>this.callbacks?.onRotate?.(e)),this.on("rotate-stop",e=>this.callbacks?.onRotateStop?.(e)),this.on("scale-start",e=>this.callbacks?.onScaleStart?.(e)),this.on("scale",e=>this.callbacks?.onScale?.(e)),this.on("scale-stop",e=>this.callbacks?.onScaleStop?.(e))])}destroy(){this._reset(),this.tooltip=q(this.tooltip)}get state(){const t=this.view?.ready??!1,e=this.graphics.length&&this.layer;return t&&e?"active":t?"ready":"disabled"}isUIGraphic(t){return this._vertexGraphics.includes(t)||t===this._backgroundGraphic||t===this._centerGraphic||t===this._rotateHandleGraphic||t===this._rotateLineGraphic}move(t,e){if(this._mover&&this.graphics.length){for(const i of this.graphics){const s=i.geometry,o=x(s,t,e,this.view);i.geometry=o}this.refresh(),this.emit("move-stop",new Q(this.graphics,null,t,e))}}scale(t,e){if(this._mover&&this.graphics.length){for(const i of this.graphics){const s=i.geometry,o=z(s,t,e);i.geometry=o}this.refresh(),this.emit("scale-stop",new $(this.graphics,null,t,e))}}rotate(t,e){if(this._mover&&this.graphics.length){if(!e){const i=this._vertexGraphics[1].geometry.x,s=this._vertexGraphics[3].geometry.y;e=new f(i,s,this.view.spatialReference)}for(const i of this.graphics){const s=i.geometry,o=L(s,t,e);i.geometry=o}this.refresh(),this.emit("rotate-stop",new J(this.graphics,null,t))}}refresh(){this._reset(),this._setup()}reset(){this.graphics=[]}_setup(){this.state==="active"&&(this._setUpHighlights(),this._setupGraphics(),this._setupMover(),this._updateGraphics())}_reset(){this._highlightHelper?.removeAll(),this._resetGraphicStateVars(),this._resetGraphics(),this._updateTooltip(),this._mover&&this._mover.destroy(),this._mover=null,this.view.cursor="default"}_resetGraphicStateVars(){this._startInfo=null,this._activeHandleGraphic=null,this._totalDx=0,this._totalDy=0,this._xScale=1,this._yScale=1,this._angleOfRotation=0}_resetGraphics(t){(t=t||this.layer)&&(t.removeMany(this._vertexGraphics),t.remove(this._backgroundGraphic),t.remove(this._centerGraphic),t.remove(this._rotateHandleGraphic),t.remove(this._rotateLineGraphic)),this._vertexGraphics.forEach(e=>!e.destroyed&&e.destroy()),!this._backgroundGraphic.destroyed&&this._backgroundGraphic.destroy(),!this._centerGraphic.destroyed&&this._centerGraphic.destroy(),!this._rotateHandleGraphic.destroyed&&this._rotateHandleGraphic.destroy(),!this._rotateLineGraphic.destroyed&&this._rotateLineGraphic.destroy(),this._vertexGraphics=[],this._backgroundGraphic=null,this._centerGraphic=null,this._rotateHandleGraphic=null,this._rotateLineGraphic=null}_setupMover(){let t=[];this.enableScaling&&(t=t.concat(this._vertexGraphics)),this.enableRotation&&t.push(this._rotateHandleGraphic),this.enableMovement&&(t=t.concat(this.graphics,this._backgroundGraphic)),this.showCenterGraphic&&t.push(this._centerGraphic),this._mover=new ft({enableMoveAllGraphics:!1,highlightsEnabled:!1,indicatorsEnabled:!1,view:this.view,graphics:t,callbacks:{onGraphicClick:e=>this._onGraphicClickCallback(e),onGraphicMoveStart:e=>this._onGraphicMoveStartCallback(e),onGraphicMove:e=>this._onGraphicMoveCallback(e),onGraphicMoveStop:e=>this._onGraphicMoveStopCallback(e),onGraphicPointerOver:e=>this._onGraphicPointerOverCallback(e),onGraphicPointerOut:e=>this._onGraphicPointerOutCallback(e)}})}_getStartInfo(t){const[e,i,s,o]=this._getBoxBounds(T()),a=Math.abs(s-e),h=Math.abs(o-i),n=(s+e)/2,r=(o+i)/2,{x:c,y:l}=t.geometry;return{width:a,height:h,centerX:n,centerY:r,startX:c,startY:l,graphicInfos:this._getGraphicInfos(),box:this._backgroundGraphic.geometry,rotate:this._rotateHandleGraphic.geometry}}_getGraphicInfos(){return this.graphics.map(t=>this._getGraphicInfo(t))}_getGraphicInfo(t){const e=t.geometry,[i,s,o,a]=this._getBounds(T(),[e]);return{width:Math.abs(o-i),height:Math.abs(a-s),centerX:(o+i)/2,centerY:(a+s)/2,geometry:e}}_onGraphicClickCallback(t){t.viewEvent.stopPropagation(),this.emit("graphic-click",t),this.callbacks.onGraphicClick&&this.callbacks.onGraphicClick(t)}_onGraphicMoveStartCallback(t){const{_angleOfRotation:e,_xScale:i,_yScale:s,_backgroundGraphic:o,_vertexGraphics:a,_rotateHandleGraphic:h,symbols:n}=this,r=t.graphic;this._resetGraphicStateVars(),this._hideGraphicsBeforeUpdate(),o.symbol=n.fill.active,this._startInfo=this._getStartInfo(r),this._updateTooltip(r,t.viewEvent),r===h?(this.view.cursor="grabbing",this.emit("rotate-start",new It(this.graphics,r,e))):a.includes(r)?(this._activeHandleGraphic=r,this.emit("scale-start",new Tt(this.graphics,r,i,s))):this.emit("move-start",new Ct(this.graphics,r,t.dx,t.dy))}_onGraphicMoveCallback(t){const e=t.graphic;if(this._startInfo)if(this._vertexGraphics.includes(e))this._scaleGraphic(e),this._updateTooltip(e,t.viewEvent),this.emit("scale",new Et(this.graphics,e,this._xScale,this._yScale));else if(e===this._rotateHandleGraphic)this._rotateGraphic(e),this._updateTooltip(e,t.viewEvent),this.emit("rotate",new Ot(this.graphics,e,this._angleOfRotation));else{const{dx:i,dy:s}=t;this._totalDx+=i,this._totalDy+=s,this._moveGraphic(e,i,s),this._updateTooltip(e,t.viewEvent),this.emit("move",new Ht(this.graphics,e,i,s))}}_onGraphicMoveStopCallback(t){const e=t.graphic;if(!this._startInfo)return void this.refresh();const{_angleOfRotation:i,_totalDx:s,_totalDy:o,_xScale:a,_yScale:h,_vertexGraphics:n,_rotateHandleGraphic:r}=this;this.refresh(),e===r?(this.view.cursor="pointer",this.emit("rotate-stop",new J(this.graphics,e,i))):n.includes(e)?this.emit("scale-stop",new $(this.graphics,e,a,h)):this.emit("move-stop",new Q(this.graphics,e,s,o))}_onGraphicPointerOverCallback(t){const{_backgroundGraphic:e,_vertexGraphics:i,graphics:s,_rotateHandleGraphic:o,symbols:a,view:h}=this,n=t.graphic;if(this._hoveredGraphic=n,n===o)return o.symbol=a.rotator.hover,h.cursor="pointer",void this._updateTooltip(n);if(s.includes(n)||n===e)return void(h.cursor="move");if(!i.includes(n))return void(h.cursor="pointer");this._updateTooltip(n),t.graphic.symbol=a.handles.hover;const r=h.rotation;let c,l=t.index;switch(l<8&&(r>=0&&r<45?l%=8:l=r>=45&&r<90?(l+1)%8:r>=90&&r<135?(l+2)%8:r>=135&&r<180?(l+3)%8:r>=180&&r<225?(l+4)%8:r>=225&&r<270?(l+5)%8:r>=270&&r<315?(l+6)%8:(l+7)%8),l){case 0:case 4:c="nwse-resize";break;case 1:case 5:c="ns-resize";break;case 2:case 6:c="nesw-resize";break;case 3:case 7:c="ew-resize";break;default:c="pointer"}h.cursor=c}_onGraphicPointerOutCallback(t){const{_vertexGraphics:e,_rotateHandleGraphic:i,symbols:s,view:o}=this;this._hoveredGraphic=null,t.graphic===i?i.symbol=s.rotator.default:e.includes(t.graphic)&&(t.graphic.symbol=s.handles.default),o.cursor="default",this._updateTooltip()}_scaleGraphic(t){const{_startInfo:e,_vertexGraphics:i,preserveAspectRatio:s,view:o}=this,{centerX:a,centerY:h,graphicInfos:n,height:r,startX:c,startY:l,width:w}=e,{resolution:g,transform:p}=o.state,v=i.indexOf(t);v!==1&&v!==5||this._updateX(t,a),v!==3&&v!==7||this._updateY(t,h);const{x:H,y:I}=t.geometry,W=p[0]*H+p[2]*I+p[4],tt=p[1]*H+p[3]*I+p[5],k=n?.map(m=>m.geometry)??[],et=k.every(m=>m.type==="point");if((w===0||r===0)&&et){const m=C((H-c)/g),G=C((l-I)/g);for(let S=0;S<k.length;S++)this.graphics[S].geometry=x(k[S],m,G,o,!0);return this._centerGraphic.geometry=new f(H,I,o.spatialReference),void(this._backgroundGraphic.geometry=x(e.box,m,G,o,!0))}if(s){const m=C(p[0]*a+p[2]*h+p[4],2),G=C(p[1]*a+p[3]*h+p[5],2),S=C(p[0]*c+p[2]*l+p[4],2),B=C(p[1]*c+p[3]*l+p[5],2);let b=vt(m,G,S,B,W,tt);b!==0&&Math.abs(b)!==1/0||(b=1),this._xScale=this._yScale=b;for(const R of k){const N=k.indexOf(R);this.graphics[N].geometry=z(R,this._xScale,this._yScale,[a,h])}this._updateBackgroundGraphic()}else{let m=H-c,G=l-I;if(v===1||v===5?m=0:v!==3&&v!==7||(G=0),m===0&&G===0)return;const S=a+m/2,B=h+G/2;let b=(w+(c>a?m:-1*m))/w,R=(r+(l<h?G:-1*G))/r;v!==1&&v!==5&&b!==0&&Math.abs(b)!==1/0||(b=1),v!==3&&v!==7&&R!==0&&Math.abs(R)!==1/0||(R=1),this._xScale=b,this._yScale=R;const N=(S-a)/g,it=(B-h)/g,st=z(e.box,this._xScale,this._yScale);this._backgroundGraphic.geometry=x(st,N,it,o,!0);const{centerX:X,centerY:P}=this._getGraphicInfo(this._backgroundGraphic),ot=(X-a)/g,at=-1*(P-h)/g;for(const D of k){const rt=k.indexOf(D),ht=z(D,this._xScale,this._yScale,[a,h]);this.graphics[rt].geometry=x(ht,ot,at,o,!0)}this._centerGraphic.geometry=new f(X,P,o.spatialReference)}}_rotateGraphic(t){const{centerX:e,centerY:i,startX:s,startY:o,box:a,rotate:h}=this._startInfo,n=this.view.spatialReference,r=new f(s,o,n),c=new f(e,i,n),l=t.geometry;this._angleOfRotation=yt(r,l,c);const w=this._startInfo.graphicInfos?.map(g=>g.geometry)??[];for(const g of w){const p=w.indexOf(g),v=L(g,this._angleOfRotation,c);this.graphics[p].geometry=v}this._backgroundGraphic.geometry=L(a,this._angleOfRotation,c),this._rotateHandleGraphic.geometry=L(h,this._angleOfRotation,c)}_moveGraphic(t,e,i){if(this.graphics.includes(t)){const s=this._backgroundGraphic.geometry;this._backgroundGraphic.geometry=x(s,e,i,this.view);for(const o of this.graphics)o!==t&&(o.geometry=x(o.geometry,e,i,this.view))}else if(t===this._centerGraphic){const s=this._backgroundGraphic.geometry;this._backgroundGraphic.geometry=x(s,e,i,this.view)}if(t===this._backgroundGraphic||t===this._centerGraphic)for(const s of this.graphics)s.geometry=x(s.geometry,e,i,this.view)}_setUpHighlights(){this.highlightsEnabled&&this.graphics.length&&this._highlightHelper?.add(this.graphics)}_setupGraphics(){const{_graphicAttributes:t,symbols:e}=this;this._centerGraphic=new E({symbol:e.centerIndicator,attributes:t}),this.showCenterGraphic&&this.layer.add(this._centerGraphic),this._backgroundGraphic=new E({symbol:e.fill.default,attributes:t}),this.layer.add(this._backgroundGraphic),this._rotateLineGraphic=new E({symbol:e.rotatorLine,attributes:t}),this._rotateHandleGraphic=new E({symbol:e.rotator.default,attributes:t}),this.enableRotation&&!this._hasExtentGraphic()&&this.layer.addMany([this._rotateLineGraphic,this._rotateHandleGraphic]);for(let i=0;i<8;i++)this._vertexGraphics.push(new E({symbol:e.handles.default,attributes:t}));this.enableScaling&&this.layer.addMany(this._vertexGraphics)}_updateSymbolsForTheme(){const t=this.view.effectiveTheme.accentColor;this.symbols={...this.symbols,fill:{active:this.symbols.fill.active?.clone().set("outline.color",t),default:this.symbols.fill.default?.clone().set("outline.color",t)},handles:{...this.symbols.handles,default:this.symbols.handles.default.clone().set("outline.color",t)},rotator:{...this.symbols.rotator,default:this.symbols.rotator.default.clone().set("outline.color",t)},rotatorLine:this.symbols.rotatorLine.clone().set("color",t)};for(const e of this._vertexGraphics)e.symbol=e===this._hoveredGraphic?this.symbols.handles.hover:this.symbols.handles.default;this._backgroundGraphic.symbol=this.symbols.fill.default,this._rotateHandleGraphic.symbol=this._rotateHandleGraphic===this._hoveredGraphic?this.symbols.rotator.hover:this.symbols.rotator.default,this._rotateLineGraphic.symbol=this.symbols.rotatorLine}_updateGraphics(){this._updateBackgroundGraphic(),this._updateHandleGraphics(),this._updateCenterGraphic(),this._updateRotateGraphic(),this._updateRotateLineGraphic()}_hideGraphicsBeforeUpdate(){this._centerGraphic.visible=!1,this._rotateHandleGraphic.visible=!1,this._rotateLineGraphic.visible=!1,this._vertexGraphics.forEach(t=>t.visible=!1)}_updateHandleGraphics(){const t=this._getCoordinates(!0);this._vertexGraphics.forEach((e,i)=>{const[s,o]=t[i];this._updateXY(e,s,o)})}_updateBackgroundGraphic(){const t=this._getCoordinates().map(([e,i])=>[e,i]);this._backgroundGraphic.geometry=new Y({rings:[t],spatialReference:this.view.spatialReference})}_updateCenterGraphic(){const[t,e,i,s]=this._getBoxBounds(T()),o=(i+t)/2,a=(s+e)/2;this._centerGraphic.geometry=new f(o,a,this.view.spatialReference)}_updateRotateGraphic(){if(!this._vertexGraphics.length)return;const{x:t,y:e}=this._vertexGraphics[1].geometry,i=e+this.view.state.resolution*this._rotateGraphicOffset;this._rotateHandleGraphic.geometry=new f(t,i,this.view.spatialReference)}_updateRotateLineGraphic(){if(!this._vertexGraphics.length||!this._rotateHandleGraphic?.geometry)return;const t=this._vertexGraphics[1].geometry,e=this._rotateHandleGraphic.geometry;this._rotateLineGraphic.geometry=new F({paths:[[[t.x,t.y],[e.x,e.y]]],spatialReference:this.view.spatialReference})}_updateXY(t,e,i){t.geometry=new f(e,i,this.view.spatialReference)}_updateX(t,e){const i=t.geometry.y;t.geometry=new f(e,i,this.view.spatialReference)}_updateY(t,e){const i=t.geometry.x;t.geometry=new f(i,e,this.view.spatialReference)}_hasExtentGraphic(){return this.graphics.some(t=>t?.geometry!=null&&t.geometry.type==="extent")}_getBoxBounds(t){const e=this.graphics.map(i=>i.geometry);return this._getBounds(t,e)}_getCoordinates(t){const[e,i,s,o]=this._getBoxBounds(T());if(t){const a=(e+s)/2,h=(o+i)/2;return[[e,o],[a,o],[s,o],[s,h],[s,i],[a,i],[e,i],[e,h]]}return[[e,o],[s,o],[s,i],[e,i]]}_updateTooltip(t,e){if(this.tooltip==null)return;if(!t)return void this.tooltip.clear();const{_backgroundGraphic:i,graphics:s,_vertexGraphics:o,_rotateHandleGraphic:a}=this;t===a?this._updateRotateTooltip():o.includes(t)?this._updateScaleTooltip():(s.includes(t)||t===i)&&this._updateMoveTooltip(e)}_updateRotateTooltip(){this.tooltip!=null&&(this.tooltip.info=new St({sketchOptions:this.sketchOptions,angle:-this._angleOfRotation}))}_updateScaleTooltip(){const{tooltip:t,_xScale:e,_yScale:i,sketchOptions:s,view:o}=this;if(t==null)return;const a=this._getCoordinates(),h=kt({topLeft:a[0],topRight:a[1],bottomRight:a[2],bottomLeft:a[3],spatialReference:o.spatialReference});if(h==null)return;const{xSize:n,ySize:r}=h,c=Math.abs(e),l=Math.abs(i);t.info=new Rt({sketchOptions:s,xScale:c,yScale:l,xSize:n,ySize:r})}_updateMoveTooltip(t){const{tooltip:e,sketchOptions:i,view:s}=this;if(e==null)return;const o=new Mt({sketchOptions:i});if(t){const{x:a,y:h}=t.origin,n=s.toMap(t),r=s.toMap({x:a,y:h}),c=wt(r,n);o.distance=c??gt}e.info=o}};function C(t,e=2){return Number.parseFloat(t.toFixed(e))}u([y()],d.prototype,"tooltip",void 0),u([y({readOnly:!0})],d.prototype,"type",void 0),u([y()],d.prototype,"callbacks",void 0),u([y()],d.prototype,"enableMovement",void 0),u([y()],d.prototype,"enableRotation",void 0),u([y()],d.prototype,"enableScaling",void 0),u([y()],d.prototype,"graphics",void 0),u([y()],d.prototype,"highlightsEnabled",void 0),u([y()],d.prototype,"layer",void 0),u([y()],d.prototype,"preserveAspectRatio",void 0),u([y()],d.prototype,"showCenterGraphic",void 0),u([y({readOnly:!0})],d.prototype,"state",null),u([y()],d.prototype,"symbols",void 0),u([y({type:K})],d.prototype,"sketchOptions",void 0),u([y({constructOnly:!0})],d.prototype,"view",void 0),d=u([ut("esri.views.draw.support.Box")],d);const Lt=d;export{Lt as default};
