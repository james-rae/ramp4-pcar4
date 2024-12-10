import { bT as r, et as r$1, bV as a$1, iK as g, iL as f$1, iM as m$1, iN as j, aA as w$1, iO as _, D as j$1, iP as h, iQ as W, iR as E, iS as U, iT as D, iU as R, iV as u, iW as s, iX as s$1 } from './main-jdFDoOPu.js';
import { a as a$2, c, y, T } from './PolynomialTransform-BXSOYd8-.js';
import { w, v, i as ie } from './rasterProjectionHelper-hno-QnhH.js';
import './preload-helper-dJJaZANz.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var e;let a=e=class extends a$2{constructor(){super(...arguments),this.type="identity";}clone(){return new e}};r([r$1({IdentityXform:"identity"})],a.prototype,"type",void 0),a=e=r([a$1("esri.layers.support.rasterTransforms.IdentityTransform")],a);const p=a;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const o={GCSShiftXform:c,IdentityXform:p,PolynomialXform:y};function i(r){const t=r?.type;if(!t)return null;const n=o[r?.type];if(n){const t=new n;return t.read(r),t}return null}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class J{convertVectorFieldData(r){const t=g.fromJSON(r.pixelBlock),s=f$1(t,r.type);return Promise.resolve(null!=s?s.toJSON():null)}computeStatisticsHistograms(r){const t=g.fromJSON(r.pixelBlock),s=m$1(t);return Promise.resolve(s)}async decode(r){const e=await j(r.data,r.options);return e&&e.toJSON()}symbolize(r){r.pixelBlock=g.fromJSON(r.pixelBlock),r.extent=r.extent?w$1.fromJSON(r.extent):null;const t=this.symbolizer.symbolize(r);return Promise.resolve(null!=t?t.toJSON():null)}async updateSymbolizer(r){this.symbolizer=_.fromJSON(r.symbolizerJSON),r.histograms&&"rasterStretch"===this.symbolizer?.rendererJSON.type&&(this.symbolizer.rendererJSON.histograms=r.histograms);}async updateRasterFunction(r){this.rasterFunction=T(r.rasterFunctionJSON);}async process(r){const t=this.rasterFunction.process({extent:w$1.fromJSON(r.extent),primaryPixelBlocks:r.primaryPixelBlocks.map((r=>null!=r?g.fromJSON(r):null)),primaryPixelSizes:r.primaryPixelSizes?.map((r=>null!=r?j$1.fromJSON(r):null)),primaryRasterIds:r.primaryRasterIds});return null!=t?t.toJSON():null}stretch(r){const t=this.symbolizer.simpleStretch(g.fromJSON(r.srcPixelBlock),r.stretchParams);return Promise.resolve(t?.toJSON())}estimateStatisticsHistograms(r){const t=h(g.fromJSON(r.srcPixelBlock));return Promise.resolve(t)}split(r){const t=W(g.fromJSON(r.srcPixelBlock),r.tileSize,r.maximumPyramidLevel??0,!1===r.useBilinear);return t&&t.forEach(((r,e)=>{t.set(e,r?.toJSON());})),Promise.resolve(t)}clipTile(r){const t=g.fromJSON(r.pixelBlock),s=E({...r,pixelBlock:t});return Promise.resolve(s?.toJSON())}async mosaicAndTransform(r){const t=r.srcPixelBlocks.map((r=>r?new g(r):null)),s=U(t,r.srcMosaicSize,{blockWidths:r.blockWidths,alignmentInfo:r.alignmentInfo,clipOffset:r.clipOffset,clipSize:r.clipSize});let o,l=s;return r.coefs&&(l=D(s,r.destDimension,r.coefs,r.sampleSpacing,r.interpolation)),r.projectDirections&&r.gcsGrid&&(o=R(r.destDimension,r.gcsGrid),l=u(l,r.isUV?"vector-uv":"vector-magdir",o)),{pixelBlock:l?.toJSON(),localNorthDirections:o}}async createFlowMesh(r,e){const t={data:new Float32Array(r.flowData.buffer),mask:new Uint8Array(r.flowData.maskBuffer),width:r.flowData.width,height:r.flowData.height},{vertexData:s$1,indexData:o}=await s(r.meshType,r.simulationSettings,t,e.signal);return {result:{vertexBuffer:s$1.buffer,indexBuffer:o.buffer},transferList:[s$1.buffer,o.buffer]}}async getProjectionOffsetGrid(e){const t=w$1.fromJSON(e.projectedExtent),s=w$1.fromJSON(e.srcBufferExtent);let o=null;e.datumTransformationSteps&&(o=new s$1({steps:e.datumTransformationSteps})),(e.includeGCSGrid||w(t.spatialReference,s.spatialReference,o))&&await v();const i$1=e.rasterTransform?i(e.rasterTransform):null;return ie({...e,projectedExtent:t,srcBufferExtent:s,datumTransformation:o,rasterTransform:i$1})}}

export { J as default };
