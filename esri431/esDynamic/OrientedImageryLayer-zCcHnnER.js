import { bQ as e, bR as t, bS as S, ew as B, dR as q, db as O, eu as M, bT as X, fE as k, T as J, n4 as Z, fN as ee, fb as te, hG as G, s as ie, fg as oe } from "./main-DZxT3i7S.js";
let v = class extends B {
  set horizontalWKID(o) {
    o ? q({ wkid: +o }) ? this._set("horizontalWKID", +o) : this._set("horizontalWKID", o) : this._set("horizontalWKID", null);
  }
  set verticalWKID(o) {
    o ? this._set("verticalWKID", isFinite(o) && q({ wkid: +o }) ? +o : null) : this._set("verticalWKID", null);
  }
  get isAdvanced() {
    const { affineTransformations: o, focalLength: r, principalOffsetPoint: s, radialDistortionCoefficients: u, tangentialDistortionCoefficients: p } = this;
    return o?.length > 1 && !Number.isNaN(r) && s?.length > 1 && u?.length > 1 && p?.length > 1;
  }
};
e([t({ json: { write: !0 } })], v.prototype, "affineTransformations", void 0), e([t({ json: { write: !0 } })], v.prototype, "focalLength", void 0), e([t({ json: { write: !0 } })], v.prototype, "principalOffsetPoint", void 0), e([t({ json: { write: !0 } })], v.prototype, "radialDistortionCoefficients", void 0), e([t({ json: { write: !0 } })], v.prototype, "tangentialDistortionCoefficients", void 0), e([t({ json: { write: !0 } })], v.prototype, "horizontalWKID", null), e([t({ json: { write: !0 } })], v.prototype, "verticalWKID", null), e([t({ json: { write: !0 } })], v.prototype, "x", void 0), e([t({ json: { write: !0 } })], v.prototype, "y", void 0), e([t({ json: { write: !0 } })], v.prototype, "z", void 0), e([t({ json: { write: !0 } })], v.prototype, "type", void 0), v = e([S("esri.layers.orientedImagery.core.CameraOrientation")], v);
const F = v;
let h = class extends O(M(F)) {
  constructor() {
    super(...arguments), this.type = 1;
  }
  toString() {
    const { type: o, horizontalWKID: r, verticalWKID: s, x: u, y: p, z: d, heading: l, pitch: f, roll: j, affineTransformations: P, focalLength: b, principalOffsetPoint: w, radialDistortionCoefficients: N, tangentialDistortionCoefficients: x } = this, y = [o, r, s, u, p, d, l, f, j];
    return this.isAdvanced && (P?.forEach((n) => y.push(n)), y.push(b), w?.forEach((n) => y.push(n)), N?.forEach((n) => y.push(n)), x?.forEach((n) => y.push(n))), y.map((n) => Number.isNaN(n) ? "" : n).join("|");
  }
};
e([t({ json: { write: !0 } })], h.prototype, "type", void 0), e([t({ type: [Number], json: { write: !0 } })], h.prototype, "affineTransformations", void 0), e([t({ type: Number, json: { write: !0 } })], h.prototype, "focalLength", void 0), e([t({ type: [Number], json: { write: !0 } })], h.prototype, "principalOffsetPoint", void 0), e([t({ type: [Number], json: { write: !0 } })], h.prototype, "radialDistortionCoefficients", void 0), e([t({ type: [Number], json: { write: !0 } })], h.prototype, "tangentialDistortionCoefficients", void 0), e([t({ type: Number, json: { write: !0 } })], h.prototype, "heading", void 0), e([t({ type: Number, json: { write: !0 } })], h.prototype, "pitch", void 0), e([t({ type: Number, json: { write: !0 } })], h.prototype, "roll", void 0), e([t({ type: Number, json: { write: !0 } })], h.prototype, "x", void 0), e([t({ type: Number, json: { write: !0 } })], h.prototype, "y", void 0), e([t({ type: Number, json: { write: !0 } })], h.prototype, "z", void 0), h = e([S("esri.layers.orientedImagery.core.CameraOrientationHPR")], h);
const re = h;
let I = class extends O(M(F)) {
  constructor() {
    super(...arguments), this.type = 4;
  }
  toString() {
    const { type: o, latitude: r, longitude: s, ellipsoidRadius: u, squaredEccentricity: p, properties: d } = this, l = `${d}`.split("|");
    return l.splice(1, 1), `${o}|${r}|${s}|${u}|${p}|${l.join("|")}`;
  }
};
e([t({ json: { write: !0 } })], I.prototype, "type", void 0), e([t({ json: { write: !0 }, type: Number })], I.prototype, "latitude", void 0), e([t({ json: { write: !0 }, type: Number })], I.prototype, "longitude", void 0), e([t({ json: { write: !0 }, type: Number })], I.prototype, "ellipsoidRadius", void 0), e([t({ json: { write: !0 }, type: Number })], I.prototype, "squaredEccentricity", void 0), e([t({ json: { write: !0 } })], I.prototype, "properties", void 0), I = e([S("esri.layers.orientedImagery.core.CameraOrientationLTP")], I);
const ne = I;
let m = class extends O(M(F)) {
  constructor() {
    super(...arguments), this.type = 2;
  }
  toString() {
    const { type: o, horizontalWKID: r, verticalWKID: s, x: u, y: p, z: d, omega: l, phi: f, kappa: j, affineTransformations: P, focalLength: b, principalOffsetPoint: w, radialDistortionCoefficients: N, tangentialDistortionCoefficients: x } = this, y = [o, r, s, u, p, d, l, f, j];
    return this.isAdvanced && (P?.forEach((n) => y.push(n)), y.push(b), w?.forEach((n) => y.push(n)), N?.forEach((n) => y.push(n)), x?.forEach((n) => y.push(n))), y.map((n) => isNaN(n) ? "" : n).join("|");
  }
};
e([t({ json: { write: !0 } })], m.prototype, "type", void 0), e([t({ type: [Number], json: { write: !0 } })], m.prototype, "affineTransformations", void 0), e([t({ type: Number, json: { write: !0 } })], m.prototype, "focalLength", void 0), e([t({ type: [Number], json: { write: !0 } })], m.prototype, "principalOffsetPoint", void 0), e([t({ type: [Number], json: { write: !0 } })], m.prototype, "radialDistortionCoefficients", void 0), e([t({ type: [Number], json: { write: !0 } })], m.prototype, "tangentialDistortionCoefficients", void 0), e([t({ type: Number, json: { write: !0 } })], m.prototype, "omega", void 0), e([t({ type: Number, json: { write: !0 } })], m.prototype, "phi", void 0), e([t({ type: Number, json: { write: !0 } })], m.prototype, "kappa", void 0), e([t({ type: Number, json: { write: !0 } })], m.prototype, "x", void 0), e([t({ type: Number, json: { write: !0 } })], m.prototype, "y", void 0), e([t({ type: Number, json: { write: !0 } })], m.prototype, "z", void 0), m = e([S("esri.layers.orientedImagery.core.CameraOrientationOPK")], m);
const se = m;
let g = class extends O(M(F)) {
  constructor() {
    super(...arguments), this.type = 3;
  }
  get isAdvanced() {
    const { affineTransformations: o, focalLength: r, principalOffsetPoint: s, radialDistortionCoefficients: u, tangentialDistortionCoefficients: p } = this;
    return o?.length > 1 || !Number.isNaN(r) || s?.length > 1 || u?.length > 1 || p?.length > 1;
  }
  toString() {
    const { type: o, horizontalWKID: r, verticalWKID: s, x: u, y: p, z: d, yaw: l, pitch: f, roll: j, affineTransformations: P, focalLength: b, principalOffsetPoint: w, radialDistortionCoefficients: N, tangentialDistortionCoefficients: x } = this, y = [o, r, s, u, p, d, l, f, j];
    return this.isAdvanced && (P?.forEach((n) => y.push(n)), y.push(b), w?.forEach((n) => y.push(n)), w?.forEach((n) => y.push(n)), N?.forEach((n) => y.push(n)), x?.forEach((n) => y.push(n))), y.map((n) => Number.isNaN(n) ? "" : n).join("|");
  }
};
e([t({ json: { write: !0 } })], g.prototype, "type", void 0), e([t({ type: [Number], json: { write: !0 } })], g.prototype, "affineTransformations", void 0), e([t({ type: Number, json: { write: !0 } })], g.prototype, "focalLength", void 0), e([t({ type: [Number], json: { write: !0 } })], g.prototype, "principalOffsetPoint", void 0), e([t({ type: [Number], json: { write: !0 } })], g.prototype, "radialDistortionCoefficients", void 0), e([t({ type: [Number], json: { write: !0 } })], g.prototype, "tangentialDistortionCoefficients", void 0), e([t({ type: Number, json: { write: !0 } })], g.prototype, "yaw", void 0), e([t({ type: Number, json: { write: !0 } })], g.prototype, "pitch", void 0), e([t({ type: Number, json: { write: !0 } })], g.prototype, "roll", void 0), e([t({ type: Number, json: { write: !0 } })], g.prototype, "x", void 0), e([t({ type: Number, json: { write: !0 } })], g.prototype, "y", void 0), e([t({ type: Number, json: { write: !0 } })], g.prototype, "z", void 0), g = e([S("esri.layers.orientedImagery.core.CameraOrientationYPR")], g);
const ae = g;
var D;
(function(i) {
  i[i.HPR = 1] = "HPR", i[i.OPK = 2] = "OPK", i[i.YPR = 3] = "YPR", i[i.LTP = 4] = "LTP";
})(D || (D = {}));
const R = /* @__PURE__ */ new Map();
R.set(`${D.OPK}`, { desc: "Using Omega Phi Kappa", constructor: se }), R.set(`${D.HPR}`, { desc: "Using Heading, Pitch and Roll", constructor: re }), R.set(`${D.YPR}`, { desc: "Using Yaw, Pitch and Roll", constructor: ae }), R.set(`${D.LTP}`, { desc: "Using Local Tangent Plane", constructor: ne });
let $ = class extends O(X) {
  constructor() {
    super(...arguments), this.url = null;
  }
};
e([t({ type: Number, json: { write: !0 } })], $.prototype, "lod", void 0), e([t({ type: String, json: { write: !0 } })], $.prototype, "rasterFunction", void 0), e([t({ type: String, json: { write: !0 } })], $.prototype, "url", void 0), $ = e([S("esri.layers.orientedImagery.core.ElevationSourceDefinitions.ElevationSource")], $);
let H = class extends O(X) {
  constructor() {
    super(...arguments), this.constantElevation = null;
  }
};
e([t({ type: Number, json: { write: !0 } })], H.prototype, "constantElevation", void 0), H = e([S("esri.layers.orientedImagery.core.ElevationSourceDefinitions.ConstantElevation")], H);
const pe = (i) => i != null && typeof i.constantElevation == "number";
function le(i, o, r) {
  return o && (i = `${o}${i}`), r && (i += `${r}`), i;
}
function ye(i, o, r) {
  let { url: s } = i;
  return s ? (s = le(s, o, r), new $({ ...i, url: s })) : null;
}
function ue(i, o, r) {
  return i && (pe(i) ? new H(i) : ye(i, o, r));
}
const A = new k({ Minutes: "minutes", Hours: "hours", Days: "days", Weeks: "weeks", Months: "months", Years: "years" }), V = new k({ Feet: "feet", Meter: "meter" }), _ = new k({ 360: "360", Horizontal: "horizontal", Inspection: "inspection", Nadir: "nadir", Oblique: "oblique", "": null }), W = /* @__PURE__ */ new Map();
function ce(i) {
  const [o, r, s, u, p, d, l, f, j, P, b, w, N, x, y, n, z, T, E, K, C, L] = i.slice(1);
  return { horizontalWKID: o, verticalWKID: r, x: s, y: u, z: p, omega: d, phi: l, kappa: f, ...Y([j, P, b, w, N, x], [n, z], [T, E, K], [C, L], y) };
}
W.set(`${D.HPR}`, de), W.set(`${D.YPR}`, fe), W.set(`${D.OPK}`, ce), W.set(`${D.LTP}`, he);
const U = (i) => {
  const o = i.map((r) => parseFloat(r)).filter((r) => !isNaN(r));
  if (o.length === i.length) return o;
};
function Y(i, o, r, s, u) {
  const p = U(i), d = U(o), l = U(r), f = U(s);
  return { affineTransformations: p?.length === 6 ? p : void 0, focalLength: p?.length === 6 ? parseFloat(u) : void 0, principalOffsetPoint: d?.length !== 2 ? [0, 0] : d, radialDistortionCoefficients: l?.length !== 3 ? [0, 0, 0] : l, tangentialDistortionCoefficients: f?.length !== 2 ? [0, 0] : f };
}
function de(i) {
  const [o, r, s, u, p, d, l, f, j, P, b, w, N, x, y, n, z, T, E, K, C, L] = i.slice(1);
  return { horizontalWKID: o, verticalWKID: r, x: s, y: u, z: p, heading: d, pitch: l, roll: f, ...Y([j, P, b, w, N, x], [n, z], [T, E, K], [C, L], y) };
}
function fe(i) {
  const [o, r, s, u, p, d, l, f, j, P, b, w, N, x, y, n, z, T, E, K, C, L] = i.slice(1);
  return { horizontalWKID: o, verticalWKID: r, x: s, y: u, z: p, yaw: d, pitch: l, roll: f, ...Y([j, P, b, w, N, x], [n, z], [T, E, K], [C, L], y) };
}
function he(i) {
  const [o, r, s, u, p, ...d] = i.slice(1), l = W.get(p), f = R.get(p)?.constructor;
  return !l || !f ? null : { latitude: o, longitude: r, ellipsoidRadius: s, squaredEccentricity: u, properties: new f(l([p, "", ...d])) };
}
function me(i) {
  return Array.isArray(i) && i?.length === 9 && !i.some(isNaN);
}
const ge = /* @__PURE__ */ new Set(["demPathPrefix", "demPathSuffix", "depthImagePathPrefix", "depthImagePathSuffix", "elevationSource", "horizontalMeasurementUnit", "verticalMeasurementUnit", "videoPathPrefix", "videoPathSuffix", "timeAnimation", "visibilityTimeExtent"]), Q = (i, o) => !ge.has(o) && i, ve = (i, o, r) => {
  const s = `orientedImageryProperties.${i}`;
  return { name: s, write: o ? { ignoreOrigin: !0, target: s, writer: o } : { ignoreOrigin: !0 }, read: r ? { ignoreOrigin: !0, source: s, reader: r } : { ignoreOrigin: !0 } };
};
function we(i) {
  return i.json && (i.json.origins = i.json.origins ?? {}, i.json.origins["web-scene"] = { write: !1, read: !1 }), i;
}
function c(i, o, r, s) {
  const { name: u, write: p, read: d } = ve(i, o, r), l = { name: u, write: p, read: d, origins: { service: { name: `orientedImageryInfo.${u}`, write: o, read: r }, "web-scene": { name: u, write: Q(p, i), read: Q(d, i) }, "web-map": { name: u, write: p, read: d } } };
  return s && l.origins && (l.type = s, l.origins["web-map"].type = s, l.origins["web-scene"].type = s), l;
}
let a = class extends te {
  constructor() {
    super(...arguments), this.cameraHeading = null, this.cameraHeight = null, this.cameraPitch = null, this.cameraRoll = null, this.coveragePercent = null, this.demPathPrefix = null, this.demPathSuffix = null, this.depthImagePathPrefix = null, this.depthImagePathSuffix = null, this.elevationSource = null, this.farDistance = null, this.geometryType = "point", this.horizontalFieldOfView = null, this.horizontalMeasurementUnit = null, this.imagePathPrefix = null, this.imagePathSuffix = null, this.imageRotation = null, this.maximumDistance = null, this.nearDistance = null, this.operationalLayerType = "OrientedImageryLayer", this.orientationAccuracy = null, this.orientedImageryType = null, this.supportedSourceTypes = /* @__PURE__ */ new Set(["Oriented Imagery Layer"]), this.type = "oriented-imagery", this.timeIntervalUnit = "days", this.useViewTime = !0, this.verticalFieldOfView = null, this.verticalMeasurementUnit = null, this.videoPathPrefix = null, this.videoPathSuffix = null, this.visibilityTimeExtent = null;
  }
  get effectiveElevationSource() {
    const { elevationSource: i, demPathPrefix: o, demPathSuffix: r } = this;
    return ue(i, o, r);
  }
  async save(i) {
    return this._debouncedSaveOperations(G.SAVE, i);
  }
  async saveAs(i, o) {
    return this._debouncedSaveOperations(G.SAVE_AS, o, i);
  }
  findFirstValidLayerId(i) {
    return i.layers?.find((o) => this.supportedSourceTypes.has(o.type))?.id;
  }
  _verifySource() {
    if (super._verifySource(), this.geometryType !== "point") throw new ie("oriented-imagery-layer:invalid-geometry-type", "OrientedImageryLayer only supports point geometry type");
  }
};
e([t({ type: Number, json: c("cameraHeading") })], a.prototype, "cameraHeading", void 0), e([t({ type: Number, json: c("cameraHeight") })], a.prototype, "cameraHeight", void 0), e([t({ type: Number, json: c("cameraPitch") })], a.prototype, "cameraPitch", void 0), e([t({ type: Number, json: c("cameraRoll") })], a.prototype, "cameraRoll", void 0), e([t({ type: Number, json: c("coveragePercent") })], a.prototype, "coveragePercent", void 0), e([t({ type: String, json: c("demPathPrefix") })], a.prototype, "demPathPrefix", void 0), e([t({ type: String, json: c("demPathSuffix") })], a.prototype, "demPathSuffix", void 0), e([t({ type: String, json: c("depthImagePathPrefix") })], a.prototype, "depthImagePathPrefix", void 0), e([t({ type: String, json: c("depthImagePathSuffix") })], a.prototype, "depthImagePathSuffix", void 0), e([t({ type: Object, json: c("elevationSource") })], a.prototype, "elevationSource", void 0), e([t({ readOnly: !0 })], a.prototype, "effectiveElevationSource", null), e([t({ type: Number, json: c("farDistance") })], a.prototype, "farDistance", void 0), e([t()], a.prototype, "geometryType", void 0), e([t({ type: Number, json: c("horizontalFieldOfView") })], a.prototype, "horizontalFieldOfView", void 0), e([t({ type: String, json: c("horizontalMeasurementUnit") })], a.prototype, "horizontalMeasurementUnit", void 0), e([t({ type: String, json: c("imagePathPrefix") })], a.prototype, "imagePathPrefix", void 0), e([t({ type: String, json: c("imagePathSuffix") })], a.prototype, "imagePathSuffix", void 0), e([t({ type: Number, json: c("imageRotation") })], a.prototype, "imageRotation", void 0), e([t({ type: Number, json: c("maximumDistance") })], a.prototype, "maximumDistance", void 0), e([t({ type: Number, json: c("nearDistance") })], a.prototype, "nearDistance", void 0), e([t({ type: ["OrientedImageryLayer"], json: { origins: { "portal-item": { name: "layerType", write: { enabled: !0, ignoreOrigin: !0 } } } } })], a.prototype, "operationalLayerType", void 0), e([t({ json: { ...c("orientationAccuracy", (i, o, r) => {
  oe(r, i.join(";"), o);
}, (i) => {
  const o = i?.split(";")?.map(Number);
  return me(o) ? o : [0, 0, 0, 0, 0, 0, 0, 0, 0];
}, String) } })], a.prototype, "orientationAccuracy", void 0), e([t({ json: { ...c("orientedImageryType", _.write, _.read, _.jsonValues.slice(1)) } })], a.prototype, "orientedImageryType", void 0), e([t({ json: { read: !1 }, value: "oriented-imagery", readOnly: !0 })], a.prototype, "type", void 0), e([t({ type: A.apiValues, json: { ...c("timeIntervalUnit", A.write, A.read, A.jsonValues) } })], a.prototype, "timeIntervalUnit", void 0), e([t(we(J(Z)))], a.prototype, "useViewTime", void 0), e([t({ type: Number, json: c("verticalFieldOfView") })], a.prototype, "verticalFieldOfView", void 0), e([t({ type: V.apiValues, json: { ...c("verticalMeasurementUnit", V.write, V.read, V.jsonValues) } })], a.prototype, "verticalMeasurementUnit", void 0), e([t({ type: String, json: c("videoPathPrefix") })], a.prototype, "videoPathPrefix", void 0), e([t({ type: String, json: c("videoPathSuffix") })], a.prototype, "videoPathSuffix", void 0), e([t({ type: ee, json: { origins: { "web-scene": { write: !1, read: !1 } } } })], a.prototype, "visibilityTimeExtent", void 0), a = e([S("esri.layers.OrientedImageryLayer")], a);
const $e = a;
export {
  $e as default
};
//# sourceMappingURL=OrientedImageryLayer-zCcHnnER.js.map
