import{aM as f}from"./main-BnINupoD.js";import{y as C,m as k,M as p,I as n,f as h}from"./utils-SvkaiIyn.js";function I(e,o,s,a){if(e)if(e.type!=="CIMTextSymbol"){if(e.effects)for(const t of e.effects)m(t,o);if(e.symbolLayers)for(const t of e.symbolLayers){switch(t.type){case"CIMPictureMarker":case"CIMVectorMarker":u(t,o,a);break;case"CIMPictureStroke":case"CIMSolidStroke":case"CIMGradientStroke":!a?.preserveOutlineWidth&&t.width&&(t.width*=o);break;case"CIMPictureFill":t.height&&(t.height*=o),t.offsetX&&(t.offsetX*=o),t.offsetY&&(t.offsetY*=o);break;case"CIMHatchFill":I(t.lineSymbol,o,!0,{...a,preserveOutlineWidth:!1}),t.offsetX&&(t.offsetX*=o),t.offsetY&&(t.offsetY*=o),t.separation&&(t.separation*=o)}if(t.effects)for(const r of t.effects)m(r,o)}}else e.height!=null&&(e.height*=o)}function u(e,o,s){if(e&&(e.markerPlacement&&y(e.markerPlacement,o),e.offsetX&&(e.offsetX*=o),e.offsetY&&(e.offsetY*=o),e.anchorPoint&&e.anchorPointUnits==="Absolute"&&(e.anchorPoint={x:e.anchorPoint.x*o,y:e.anchorPoint.y*o}),e.size=e.size!=null?e.size*o:0,e.type==="CIMVectorMarker"&&e.markerGraphics))for(const a of e.markerGraphics)e.scaleSymbolsProportionally||I(a.symbol,o,!0,s)}function y(e,o){switch(n(e)&&e.offset&&(e.offset*=o),e.type){case"CIMMarkerPlacementAlongLineRandomSize":case"CIMMarkerPlacementAlongLineSameSize":if(e.customEndingOffset&&(e.customEndingOffset*=o),e.offsetAlongLine&&(e.offsetAlongLine*=o),e.placementTemplate&&e.placementTemplate.length){const s=e.placementTemplate.map(a=>a*o);e.placementTemplate=s}break;case"CIMMarkerPlacementAlongLineVariableSize":if(e.maxRandomOffset&&(e.maxRandomOffset*=o),e.placementTemplate&&e.placementTemplate.length){const s=e.placementTemplate.map(a=>a*o);e.placementTemplate=s}break;case"CIMMarkerPlacementOnLine":e.startPointOffset&&(e.startPointOffset*=o);break;case"CIMMarkerPlacementAtExtremities":e.offsetAlongLine&&(e.offsetAlongLine*=o);break;case"CIMMarkerPlacementAtMeasuredUnits":case"CIMMarkerPlacementOnVertices":break;case"CIMMarkerPlacementAtRatioPositions":e.beginPosition&&(e.beginPosition*=o),e.endPosition&&(e.endPosition*=o);break;case"CIMMarkerPlacementPolygonCenter":e.offsetX&&(e.offsetX*=o),e.offsetY&&(e.offsetY*=o);break;case"CIMMarkerPlacementInsidePolygon":e.offsetX&&(e.offsetX*=o),e.offsetY&&(e.offsetY*=o),e.stepX&&(e.stepX*=o),e.stepY&&(e.stepY*=o)}}function m(e,o){switch(e.type){case"CIMGeometricEffectArrow":case"CIMGeometricEffectDonut":e.width&&(e.width*=o);break;case"CIMGeometricEffectBuffer":e.size&&(e.size*=o);break;case"CIMGeometricEffectCut":e.beginCut&&(e.beginCut*=o),e.endCut&&(e.endCut*=o),e.middleCut&&(e.middleCut*=o);break;case"CIMGeometricEffectDashes":if(e.customEndingOffset&&(e.customEndingOffset*=o),e.offsetAlongLine&&(e.offsetAlongLine*=o),e.dashTemplate&&e.dashTemplate.length){const s=e.dashTemplate.map(a=>a*o);e.dashTemplate=s}break;case"CIMGeometricEffectExtension":case"CIMGeometricEffectJog":case"CIMGeometricEffectRadial":e.length&&(e.length*=o);break;case"CIMGeometricEffectMove":e.offsetX&&(e.offsetX*=o),e.offsetY&&(e.offsetY*=o);break;case"CIMGeometricEffectOffset":case"CIMGeometricEffectOffsetTangent":e.offset&&(e.offset*=o);break;case"CIMGeometricEffectRegularPolygon":e.radius&&(e.radius*=o);break;case"CIMGeometricEffectTaperedPolygon":e.fromWidth&&(e.fromWidth*=o),e.length&&(e.length*=o),e.toWidth&&(e.toWidth*=o);break;case"CIMGeometricEffectWave":e.amplitude&&(e.amplitude*=o),e.period&&(e.period*=o)}}function g(e){const o=[];return c(C(e),o),o.length?new f(h(o[0])):null}function c(e,o){if(!e)return;let s;s=e.type==="CIMTextSymbol"?e.symbol:e;const a=e.type==="CIMPolygonSymbol";if(s?.symbolLayers){for(const t of s.symbolLayers)if(!(t.colorLocked||a&&(k(t)||p(t)&&t.markerPlacement&&n(t.markerPlacement))))switch(t.type){case"CIMPictureMarker":case"CIMPictureStroke":case"CIMPictureFill":t.tintColor&&M(o,t.tintColor);break;case"CIMVectorMarker":t.markerGraphics?.forEach(r=>{c(r.symbol,o)});break;case"CIMSolidStroke":case"CIMSolidFill":M(o,t.color);break;case"CIMHatchFill":c(t.lineSymbol,o)}}}function M(e,o){for(const s of e)if(s.join(".")===o.join("."))return;e.push(o)}function S(e,o,s){o instanceof f||(o=new f(o));const a=C(e);a&&i(a,o)}function i(e,o,s){if(!e)return;let a;a=e.type==="CIMTextSymbol"?e.symbol:e;const t=a?.type==="CIMPolygonSymbol";if(a?.symbolLayers)for(const r of a.symbolLayers){if(r.colorLocked||t&&(k(r)||p(r)&&r.markerPlacement&&n(r.markerPlacement)))continue;const l=o.toArray();switch(r.type){case"CIMPictureMarker":case"CIMPictureStroke":case"CIMPictureFill":r.tintColor=l;break;case"CIMVectorMarker":r.markerGraphics?.forEach(b=>{i(b.symbol,o)});break;case"CIMSolidStroke":case"CIMSolidFill":r.color=l;break;case"CIMHatchFill":i(r.lineSymbol,o)}}}export{g as C,S as I,I as l};
