import { g1 as q, b1 as T, gh as K } from "./main-DZxT3i7S.js";
import { b as Q, a as W } from "./MeshLocalVertexSpace-DrcjSCL-.js";
import { f as X, l as Z } from "./vec3-Bk8n8qxi.js";
import "./sphere-C5nRNjej.js";
import "./I3SUtil-Bx73sQYB.js";
var S, D;
(function(e) {
  e[e.None = 0] = "None", e[e.Int16 = 1] = "Int16", e[e.Int32 = 2] = "Int32";
})(S || (S = {})), function(e) {
  e[e.Replace = 0] = "Replace", e[e.Outside = 1] = "Outside", e[e.Inside = 2] = "Inside", e[e.Finished = 3] = "Finished";
}(D || (D = {}));
function ee() {
  return P || (P = new Promise((e) => import("./i3s-si68E5Cj.js").then((t) => t.i).then(({ default: t }) => {
    const n = t({ locateFile: te, onRuntimeInitialized: () => e(n) });
    delete n.then;
  })).catch((e) => {
    throw e;
  })), P;
}
function te(e) {
  return q(`esri/libs/i3s/${e}`);
}
let P;
var j, b, $, B, k;
(function(e) {
  e[e.Unmodified = 0] = "Unmodified", e[e.Culled = 1] = "Culled", e[e.NotChecked = 2] = "NotChecked";
})(j || (j = {})), function(e) {
  e[e.Unmodified = 0] = "Unmodified", e[e.PotentiallyModified = 1] = "PotentiallyModified", e[e.Culled = 2] = "Culled", e[e.Unknown = 3] = "Unknown", e[e.NotChecked = 4] = "NotChecked";
}(b || (b = {}));
(function(e) {
  e[e.Unknown = 0] = "Unknown", e[e.Uncached = 1] = "Uncached", e[e.Cached = 2] = "Cached";
})($ || ($ = {})), function(e) {
  e[e.None = 0] = "None", e[e.MaxScreenThreshold = 1] = "MaxScreenThreshold", e[e.ScreenSpaceRelative = 2] = "ScreenSpaceRelative", e[e.RemovedFeatureDiameter = 3] = "RemovedFeatureDiameter", e[e.DistanceRangeFromDefaultCamera = 4] = "DistanceRangeFromDefaultCamera";
}(B || (B = {})), function(e) {
  e[e.Hole = 0] = "Hole", e[e.Leaf = 1] = "Leaf";
}(k || (k = {}));
async function ce(e) {
  r = await p();
  const t = [e.geometryBuffer];
  return { result: H(r, e, t), transferList: t };
}
async function le(e) {
  r = await p();
  const t = [e.geometryBuffer], { geometryBuffer: n } = e, a = n.byteLength, i = r._malloc(a), l = new Uint8Array(r.HEAPU8.buffer, i, a);
  l.set(new Uint8Array(n));
  const s = r.dracoDecompressPointCloudData(i, l.byteLength);
  if (r._free(i), s.error.length > 0) throw new Error(`i3s.wasm: ${s.error}`);
  const f = s.featureIds?.length > 0 ? s.featureIds.slice() : null, d = s.positions.slice();
  return f && t.push(f.buffer), t.push(d.buffer), { result: { positions: d, featureIds: f }, transferList: t };
}
async function ue(e) {
  await p(), oe(e);
  const t = { buffer: e.buffer };
  return { result: t, transferList: [t.buffer] };
}
async function de(e) {
  await p(), ne(e);
}
async function me(e) {
  r = await p(), r.setLegacySchema(e.context, e.jsonSchema);
}
async function he(e) {
  const { localMatrix: t, origin: n, positions: a, vertexSpace: i } = e, l = T.fromJSON(e.inSpatialReference), s = T.fromJSON(e.outSpatialReference);
  let f;
  const [{ projectBuffer: d }, { initializeProjection: U }] = await Promise.all([import("./main-DZxT3i7S.js").then((c) => c.vh), import("./main-DZxT3i7S.js").then((c) => c.vi)]);
  await U(l, s);
  const g = [0, 0, 0];
  if (!d(n, l, 0, g, s, 0)) throw new Error("Failed to project");
  if (i.type === "georeferenced" && i.origin == null) {
    if (f = new Float64Array(a.length), !d(a, l, 0, f, s, 0, f.length / 3)) throw new Error("Failed to project");
  } else {
    const c = i.type === "georeferenced" ? Q.fromJSON(i) : W.fromJSON(i), { projectMeshVertexPositions: u } = await import("./projectMeshVertexPositions-DHegKCic.js"), m = u({ vertexAttributes: { position: a }, transform: t ? { localMatrix: t } : void 0, vertexSpace: c, spatialReference: l }, s);
    if (!m) throw new Error("Failed to project");
    f = m;
  }
  const F = f.length, [w, I, E] = g;
  for (let c = 0; c < F; c += 3) f[c] -= w, f[c + 1] -= I, f[c + 2] -= E;
  return { result: { projected: f, original: a, projectedOrigin: g }, transferList: [f.buffer, a.buffer] };
}
async function ye({ normalMatrix: e, normals: t }) {
  const n = new Float32Array(t.length);
  return X(n, t, e), K(e) && Z(n, n), { result: { transformed: n, original: t }, transferList: [n.buffer, t.buffer] };
}
function be(e) {
  Y(e);
}
let L, r;
function ne(e) {
  if (!r) return;
  const t = e.modifications, n = r._malloc(8 * t.length), a = new Float64Array(r.HEAPU8.buffer, n, t.length);
  for (let i = 0; i < t.length; ++i) a[i] = t[i];
  r.setModifications(e.context, n, t.length, e.isGeodetic), r._free(n);
}
function H(e, t, n) {
  const { context: a, globalTrafo: i, mbs: l, obbData: s, elevationOffset: f, geometryBuffer: d, geometryDescriptor: U, indexToVertexProjector: g, vertexToRenderProjector: F } = t, w = e._malloc(d.byteLength), I = 33, E = e._malloc(I * Float64Array.BYTES_PER_ELEMENT), c = new Uint8Array(e.HEAPU8.buffer, w, d.byteLength);
  c.set(new Uint8Array(d));
  const u = new Float64Array(e.HEAPU8.buffer, E, I);
  N(u, [NaN, NaN, NaN]);
  let m = u.byteOffset + 3 * u.BYTES_PER_ELEMENT, A = new Float64Array(u.buffer, m);
  N(A, i), m += 16 * u.BYTES_PER_ELEMENT, A = new Float64Array(u.buffer, m), N(A, l), m += 4 * u.BYTES_PER_ELEMENT, s && (A = new Float64Array(u.buffer, m), N(A, s));
  const R = U, J = { isDraco: !1, isLegacy: !1, color: t.layouts.some((h) => h.some((y) => y.name === "color")), normal: t.needNormals && t.layouts.some((h) => h.some((y) => y.name === "normalCompressed")), uv0: t.layouts.some((h) => h.some((y) => y.name === "uv0")), uvRegion: t.layouts.some((h) => h.some((y) => y.name === "uvRegion")), featureIndex: R.featureIndex }, o = e.process(a, !!t.obbData, w, c.byteLength, R, J, E, f, g, F, t.normalReferenceFrame);
  if (e._free(E), e._free(w), o.error.length > 0) throw new Error(`i3s.wasm: ${o.error}`);
  if (o.discarded) return null;
  const x = o.componentOffsets.length > 0 ? o.componentOffsets.slice() : null, M = o.featureIds.length > 0 ? o.featureIds.slice() : null, V = o.anchorIds.length > 0 ? Array.from(o.anchorIds) : null, z = o.anchors.length > 0 ? Array.from(o.anchors) : null, _ = o.interleavedVertedData.slice().buffer, v = o.indicesType === S.Int16 ? new Uint16Array(o.indices.buffer, o.indices.byteOffset, o.indices.byteLength / 2).slice() : new Uint32Array(o.indices.buffer, o.indices.byteOffset, o.indices.byteLength / 4).slice(), O = o.positions.slice(), C = o.positionIndicesType === S.Int16 ? new Uint16Array(o.positionIndices.buffer, o.positionIndices.byteOffset, o.positionIndices.byteLength / 2).slice() : new Uint32Array(o.positionIndices.buffer, o.positionIndices.byteOffset, o.positionIndices.byteLength / 4).slice(), G = { layout: t.layouts[0], interleavedVertexData: _, indices: v, hasColors: o.hasColors, hasModifications: o.hasModifications, positionData: { data: O, indices: C } };
  return M && n.push(M.buffer), x && n.push(x.buffer), n.push(_), n.push(v.buffer), n.push(O.buffer), n.push(C.buffer), { componentOffsets: x, featureIds: M, anchorIds: V, anchors: z, transformedGeometry: G, obb: o.obb, globalTrafo: i };
}
function pe(e) {
  return e === 0 ? b.Unmodified : e === 1 ? b.PotentiallyModified : e === 2 ? b.Culled : b.Unknown;
}
function oe(e) {
  if (!r) return;
  const { context: t, buffer: n } = e, a = r._malloc(n.byteLength), i = n.byteLength / Float64Array.BYTES_PER_ELEMENT, l = new Float64Array(r.HEAPU8.buffer, a, i), s = new Float64Array(n);
  l.set(s), r.filterOBBs(t, a, i), s.set(l), r._free(a);
}
function Y(e) {
  r && r.destroy(e) === 0 && (r = null);
}
function N(e, t) {
  for (let n = 0; n < t.length; ++n) e[n] = t[n];
}
async function ge() {
  r || await p();
}
function p() {
  return r ? Promise.resolve(r) : (L || (L = ee().then((e) => (r = e, L = null, r))), L);
}
const we = { transform: (e, t) => r && H(r, e, t), destroy: Y };
export {
  be as destroyContext,
  le as dracoDecompressPointCloudData,
  ue as filterObbsForModifications,
  oe as filterObbsForModificationsSync,
  ge as initialize,
  pe as interpretObbModificationResults,
  ce as process,
  he as project,
  me as setLegacySchema,
  de as setModifications,
  ne as setModificationsSync,
  we as test,
  ye as transformNormals
};
//# sourceMappingURL=SceneLayerWorker-gQuMMF_J.js.map
