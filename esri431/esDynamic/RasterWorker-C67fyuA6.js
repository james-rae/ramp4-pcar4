import { bQ as f, eq as u, bS as p, iH as i, iI as S, iJ as d, iK as y, aA as n, iL as x, D as O, iM as h, iN as J, iO as N, iP as P, iQ as B, iR as b, iS as g, iT as w, iU as k } from "./main-DZxT3i7S.js";
import { a as v, c as z, y as D, T } from "./PolynomialTransform-D-wBvm4_.js";
import { w as $, v as I, i as F } from "./rasterProjectionHelper-CYzanw_V.js";
var c;
let l = c = class extends v {
  constructor() {
    super(...arguments), this.type = "identity";
  }
  clone() {
    return new c();
  }
};
f([u({ IdentityXform: "identity" })], l.prototype, "type", void 0), l = c = f([p("esri.layers.support.rasterTransforms.IdentityTransform")], l);
const R = l, j = { GCSShiftXform: z, IdentityXform: R, PolynomialXform: D };
function E(a) {
  if (!a?.type) return null;
  const e = j[a?.type];
  if (e) {
    const s = new e();
    return s.read(a), s;
  }
  return null;
}
class X {
  convertVectorFieldData(t) {
    const e = i.fromJSON(t.pixelBlock), s = S(e, t.type);
    return Promise.resolve(s != null ? s.toJSON() : null);
  }
  computeStatisticsHistograms(t) {
    const e = i.fromJSON(t.pixelBlock), s = d(e);
    return Promise.resolve(s);
  }
  async decode(t) {
    const e = await y(t.data, t.options);
    return e && e.toJSON();
  }
  symbolize(t) {
    t.pixelBlock = i.fromJSON(t.pixelBlock), t.extent = t.extent ? n.fromJSON(t.extent) : null;
    const e = this.symbolizer.symbolize(t);
    return Promise.resolve(e != null ? e.toJSON() : null);
  }
  async updateSymbolizer(t) {
    this.symbolizer = x.fromJSON(t.symbolizerJSON), t.histograms && this.symbolizer?.rendererJSON.type === "rasterStretch" && (this.symbolizer.rendererJSON.histograms = t.histograms);
  }
  async updateRasterFunction(t) {
    this.rasterFunction = T(t.rasterFunctionJSON);
  }
  async process(t) {
    const e = this.rasterFunction.process({ extent: n.fromJSON(t.extent), primaryPixelBlocks: t.primaryPixelBlocks.map((s) => s != null ? i.fromJSON(s) : null), primaryPixelSizes: t.primaryPixelSizes?.map((s) => s != null ? O.fromJSON(s) : null), primaryRasterIds: t.primaryRasterIds });
    return e != null ? e.toJSON() : null;
  }
  stretch(t) {
    const e = this.symbolizer.simpleStretch(i.fromJSON(t.srcPixelBlock), t.stretchParams);
    return Promise.resolve(e?.toJSON());
  }
  estimateStatisticsHistograms(t) {
    const e = h(i.fromJSON(t.srcPixelBlock));
    return Promise.resolve(e);
  }
  split(t) {
    const e = J(i.fromJSON(t.srcPixelBlock), t.tileSize, t.maximumPyramidLevel ?? 0, t.useBilinear === !1);
    return e && e.forEach((s, r) => {
      e.set(r, s?.toJSON());
    }), Promise.resolve(e);
  }
  clipTile(t) {
    const e = i.fromJSON(t.pixelBlock), s = N({ ...t, pixelBlock: e });
    return Promise.resolve(s?.toJSON());
  }
  async mosaicAndTransform(t) {
    const e = t.srcPixelBlocks.map((m) => m ? new i(m) : null), s = P(e, t.srcMosaicSize, { blockWidths: t.blockWidths, alignmentInfo: t.alignmentInfo, clipOffset: t.clipOffset, clipSize: t.clipSize });
    let r, o = s;
    return t.coefs && (o = B(s, t.destDimension, t.coefs, t.sampleSpacing, t.interpolation)), t.projectDirections && t.gcsGrid && (r = b(t.destDimension, t.gcsGrid), o = g(o, t.isUV ? "vector-uv" : "vector-magdir", r)), { pixelBlock: o?.toJSON(), localNorthDirections: r };
  }
  async createFlowMesh(t, e) {
    const s = { data: new Float32Array(t.flowData.buffer), mask: new Uint8Array(t.flowData.maskBuffer), width: t.flowData.width, height: t.flowData.height }, { vertexData: r, indexData: o } = await w(t.meshType, t.simulationSettings, s, e.signal);
    return { result: { vertexBuffer: r.buffer, indexBuffer: o.buffer }, transferList: [r.buffer, o.buffer] };
  }
  async getProjectionOffsetGrid(t) {
    const e = n.fromJSON(t.projectedExtent), s = n.fromJSON(t.srcBufferExtent);
    let r = null;
    t.datumTransformationSteps && (r = new k({ steps: t.datumTransformationSteps })), (t.includeGCSGrid || $(e.spatialReference, s.spatialReference, r)) && await I();
    const o = t.rasterTransform ? E(t.rasterTransform) : null;
    return F({ ...t, projectedExtent: e, srcBufferExtent: s, datumTransformation: r, rasterTransform: o });
  }
}
export {
  X as default
};
//# sourceMappingURL=RasterWorker-C67fyuA6.js.map
