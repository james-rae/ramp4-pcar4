import{B as f,bk as p,N as u,bB as a,bE as S}from"./main-CcTJZah4.js";import{s as d}from"./projection-nLxG4Uci.js";import{g as i,f as y,W as x,E as h,U as O,D as N,R as J,u as B,s as b}from"./dataUtils-ChhIocKW.js";import{m as P,j as g,_ as k,h as w}from"./RasterSymbolizer-CU_bgClR.js";import{T as v}from"./rasterFunctionHelper-_y9VWMmU.js";import{w as z,j as D,a as T}from"./rasterProjectionHelper-CU4KjcC0.js";import{a as $,c as j,y as E}from"./PolynomialTransform-so_JsRqk.js";import"./preload-helper-ExcqyqRp.js";import"./projectBuffer-DwB7xYJN.js";import"./_commonjsHelpers-DCkdB7M8.js";import"./colorUtils-Dih3qOLf.js";import"./vec42-CKs01hkn.js";import"./common-DQOJ18NT.js";import"./vec4f64-o2zAXfmz.js";import"./colorRamps-C79QiEN5.js";import"./Field-BlXPfS0o.js";import"./fieldType-DC231FMv.js";var m;let l=m=class extends ${constructor(){super(...arguments),this.type="identity"}clone(){return new m}};f([p({IdentityXform:"identity"})],l.prototype,"type",void 0),l=m=f([u("esri.layers.support.rasterTransforms.IdentityTransform")],l);const F=l,I={GCSShiftXform:j,IdentityXform:F,PolynomialXform:E};function G(n){if(!n?.type)return null;const e=I[n?.type];if(e){const r=new e;return r.read(n),r}return null}class et{convertVectorFieldData(t){const e=i.fromJSON(t.pixelBlock),r=y(e,t.type);return Promise.resolve(r!=null?r.toJSON():null)}computeStatisticsHistograms(t){const e=i.fromJSON(t.pixelBlock),r=P(e);return Promise.resolve(r)}async decode(t){const e=await g(t.data,t.options);return e&&e.toJSON()}symbolize(t){t.pixelBlock=i.fromJSON(t.pixelBlock),t.extent=t.extent?a.fromJSON(t.extent):null;const e=this.symbolizer.symbolize(t);return Promise.resolve(e!=null?e.toJSON():null)}async updateSymbolizer(t){this.symbolizer=k.fromJSON(t.symbolizerJSON),t.histograms&&this.symbolizer?.rendererJSON.type==="rasterStretch"&&(this.symbolizer.rendererJSON.histograms=t.histograms)}async updateRasterFunction(t){this.rasterFunction=v(t.rasterFunctionJSON)}async process(t){const e=this.rasterFunction.process({extent:a.fromJSON(t.extent),primaryPixelBlocks:t.primaryPixelBlocks.map(r=>r!=null?i.fromJSON(r):null),primaryPixelSizes:t.primaryPixelSizes?.map(r=>r!=null?S.fromJSON(r):null),primaryRasterIds:t.primaryRasterIds});return e!=null?e.toJSON():null}stretch(t){const e=this.symbolizer.simpleStretch(i.fromJSON(t.srcPixelBlock),t.stretchParams);return Promise.resolve(e?.toJSON())}estimateStatisticsHistograms(t){const e=w(i.fromJSON(t.srcPixelBlock));return Promise.resolve(e)}split(t){const e=x(i.fromJSON(t.srcPixelBlock),t.tileSize,t.maximumPyramidLevel??0,t.useBilinear===!1);return e&&e.forEach((r,o)=>{e.set(o,r?.toJSON())}),Promise.resolve(e)}clipTile(t){const e=i.fromJSON(t.pixelBlock),r=h({...t,pixelBlock:e});return Promise.resolve(r?.toJSON())}async mosaicAndTransform(t){const e=t.srcPixelBlocks.map(c=>c?new i(c):null),r=O(e,t.srcMosaicSize,{blockWidths:t.blockWidths,alignmentInfo:t.alignmentInfo,clipOffset:t.clipOffset,clipSize:t.clipSize});let o,s=r;return t.coefs&&(s=N(r,t.destDimension,t.coefs,t.sampleSpacing,t.interpolation)),t.projectDirections&&t.gcsGrid&&(o=J(t.destDimension,t.gcsGrid),s=B(s,t.isUV?"vector-uv":"vector-magdir",o)),{pixelBlock:s?.toJSON(),localNorthDirections:o}}async createFlowMesh(t,e){const r={data:new Float32Array(t.flowData.buffer),mask:new Uint8Array(t.flowData.maskBuffer),width:t.flowData.width,height:t.flowData.height},{vertexData:o,indexData:s}=await b(t.meshType,t.simulationSettings,r,e.signal);return{result:{vertexBuffer:o.buffer,indexBuffer:s.buffer},transferList:[o.buffer,s.buffer]}}async getProjectionOffsetGrid(t){const e=a.fromJSON(t.projectedExtent),r=a.fromJSON(t.srcBufferExtent);let o=null;t.datumTransformationSteps&&(o=new d({steps:t.datumTransformationSteps})),(t.includeGCSGrid||z(e.spatialReference,r.spatialReference,o))&&await D();const s=t.rasterTransform?G(t.rasterTransform):null;return T({...t,projectedExtent:e,srcBufferExtent:r,datumTransformation:o,rasterTransform:s})}}export{et as default};
