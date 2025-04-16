import{bE as h,aS as n,bs as o,O as l,b6 as u,a9 as M,ea as s,bt as c,dM as g,dK as C,aK as P}from"./main-CcTJZah4.js";import{e as b,y as f}from"./vec2-maR1OrZI.js";import{n as S}from"./vec2f64-DohEyf3f.js";import{w as v,G as I}from"./enums-CD-fX3vU.js";import{s as i,p as y}from"./hitTestSelectUtils-Cm4nfxhx.js";import{r as x}from"./SnappingContext-GAXV5cJw.js";class O extends x{constructor(e){super(),this._graphicsLayer=e,this._symbolPairingsByType=new Map}visualizeIntersectionPoint(e,t){return this._visualizeSnappingIndicator(new h({x:e.intersectionPoint[0],y:e.intersectionPoint[1],spatialReference:t.spatialReference}),this._getOrCreateSymbol("intersectionPoint",t.view.effectiveTheme.accentColor))}visualizePoint(e,t){return this._visualizeSnappingIndicator(new h({x:e.point[0],y:e.point[1],spatialReference:t.spatialReference}),this._getOrCreateSymbol("point",t.view.effectiveTheme.accentColor))}visualizeLine(e,t){return this._visualizeSnappingIndicator(new n({paths:[[[...e.lineStart],[...e.lineEnd]]],spatialReference:o(l,t.spatialReference)}),this._getOrCreateSymbol("line",t.view.effectiveTheme.accentColor))}visualizeParallelSign(e,t){return this._visualizeSnappingIndicator(new n({paths:[[[...e.lineStart],[...e.lineEnd]]],spatialReference:o(l,t.spatialReference)}),this._getOrCreateSymbol("parallelSign",t.view.effectiveTheme.accentColor))}visualizeRightAngleQuad(e,t){const r=S(),p=S(),m=P();b(r,i(e.centerVertex),i(e.previousVertex)),b(p,i(e.nextVertex),i(e.previousVertex)),f(m,r,p);const d=`rightAngleQuad${m[2]<0?45:225}`;return this._visualizeSnappingIndicator(new n({paths:[[[...e.previousVertex],[...e.centerVertex],[...e.nextVertex]]],spatialReference:o(l,t.spatialReference)}),this._getOrCreateSymbol(d,t.view.effectiveTheme.accentColor))}_visualizeSnappingIndicator(e,t){const r=new u({geometry:e,symbol:t});return this._graphicsLayer.add(r),M(()=>{this._graphicsLayer.remove(r)})}_getOrCreateSymbol(e,t){const r=this._symbolPairingsByType;return r.get(e)?.color!==t&&r.set(e,{color:t,symbol:w(e,t)}),r.get(e).symbol}}function w(a,e){const t=[...e.toRgb(),255*e.a];switch(a){case"point":return new g({outline:{width:.5,color:[0,0,0,1]},size:10,color:e});case"intersectionPoint":return new g({outline:new C({width:1.5,color:e}),size:15,color:[0,0,0,0]});case"line":return new s({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",enable:!0,capStyle:v.Butt,joinStyle:I.Round,miterLimit:10,width:c(y.lineHintWidthTarget),color:t}]}}});case"parallelSign":return new s({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:0,y:-1,z:0},anchorPointUnits:"Relative",size:5,markerPlacement:{type:"CIMMarkerPlacementOnLine",placePerPart:!0,angleToLine:!0,relativeTo:"LineMiddle"},frame:{xmin:-5,ymin:-1.5,xmax:5,ymax:1.5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{rings:[[[7,0],[-7,0],[-7,1.5],[7,1.5]]]},symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:t}]}}],scaleSymbolsProportionally:!0,respectFrame:!0},{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:0,y:1,z:0},anchorPointUnits:"Relative",size:5,markerPlacement:{type:"CIMMarkerPlacementOnLine",placePerPart:!0,angleToLine:!0,relativeTo:"LineMiddle"},frame:{xmin:-5,ymin:-1.5,xmax:5,ymax:1.5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{rings:[[[7,0],[-7,0],[-7,-1.5],[7,-1.5]]]},symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:t}]}}],scaleSymbolsProportionally:!0,respectFrame:!0}]}}});case"rightAngleQuad45":case"rightAngleQuad225":{const r=a==="rightAngleQuad45"?45:225;return new s({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:.5,y:.5,z:0},anchorPointUnits:"Relative",size:c(y.rightAngleHintSize),rotation:r,markerPlacement:{type:"CIMMarkerPlacementOnVertices",placePerPart:!0,angleToLine:!0,placeOnEndPoints:!1},frame:{xmin:-5,ymin:-5,xmax:5,ymax:5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{paths:[[[5,-5],[-5,-5],[-5,5],[5,5],[5,-5]]]},symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",enable:!0,capStyle:"Butt",joinStyle:"Round",miterLimit:10,width:c(y.rightAngleHintOutlineSize),color:t},{type:"CIMSolidFill",enable:!0,color:[...e.toRgb(),255*e.a*.4]}]}}],scaleSymbolsProportionally:!0,respectFrame:!0}]}}})}}}export{O as d};
