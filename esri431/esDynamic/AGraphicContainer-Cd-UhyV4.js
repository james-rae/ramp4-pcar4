import { gL as p, aN as E, aV as v, hY as O, aH as S, hZ as V, gE as $, gJ as z, gF as D, gG as I, h_ as w, gH as C, aE as b, cE as L, h$ as N } from "./main-DZxT3i7S.js";
import { i as T, r as k, n as F } from "./TechniqueInstance-d0jM-rO3.js";
import { T as h } from "./FeatureCommandQueue-Bd5Dxlq9.js";
import { r as H } from "./vec3f32-BS0cezmI.js";
import { e as P } from "./Container-C7h2dwkX.js";
import { b as U } from "./LabelMetric-qLdOt4bi.js";
import { E as x } from "./BufferObject-Bb9Pw3sC.js";
import { o as W } from "./VertexArrayObject-DNKO7QGF.js";
let q = 0;
function c(f, e) {
  return new T(k(q++), f, e);
}
const d = { visualVariableColor: null, visualVariableOpacity: null, visualVariableSizeMinMaxValue: null, visualVariableSizeScaleStops: null, visualVariableSizeStops: null, visualVariableSizeUnitValue: null, visualVariableRotation: null, visualVariableSizeOutlineScaleStops: null };
class G {
  constructor() {
    this.instances = { fill: c(h.fill, { uniforms: d, optionalAttributes: { zoomRange: !0 } }), marker: c(h.marker, { uniforms: d, optionalAttributes: { zoomRange: !0 } }), line: c(h.line, { uniforms: d, optionalAttributes: { zoomRange: !0 } }), text: c(h.text, { uniforms: d, optionalAttributes: { zoomRange: !0, referenceSymbol: !1, clipAngle: !1 } }), complexFill: c(h.complexFill, { uniforms: d, optionalAttributes: { zoomRange: !0 } }), texturedLine: c(h.texturedLine, { uniforms: d, optionalAttributes: { zoomRange: !0 } }), animatedMarker: c(h.animatedMarker, { uniforms: d, optionalAttributes: { zoomRange: !0 } }) }, this._instancesById = Object.values(this.instances).reduce((e, t) => (e.set(t.instanceId, t), e), /* @__PURE__ */ new Map());
  }
  getInstance(e) {
    return this._instancesById.get(e);
  }
}
const Y = Math.PI / 180, j = 4;
class J extends P {
  constructor(e) {
    super(), this._program = null, this._vao = null, this._vertexBuffer = null, this._indexBuffer = null, this._dvsMat3 = p(), this._localOrigin = { x: 0, y: 0 }, this._getBounds = e;
  }
  destroy() {
    this._vao && (this._vao.dispose(), this._vao = null, this._vertexBuffer = null, this._indexBuffer = null), this._program = E(this._program);
  }
  doRender(e) {
    const { context: t } = e, s = this._getBounds();
    if (s.length < 1) return;
    this._createShaderProgram(t), this._updateMatricesAndLocalOrigin(e), this._updateBufferData(t, s), t.setBlendingEnabled(!0), t.setDepthTestEnabled(!1), t.setStencilWriteMask(0), t.setStencilTestEnabled(!1), t.setBlendFunction(v.ONE, v.ONE_MINUS_SRC_ALPHA), t.setColorMask(!0, !0, !0, !0);
    const a = this._program;
    t.bindVAO(this._vao), t.useProgram(a), a.setUniformMatrix3fv("u_dvsMat3", this._dvsMat3), t.gl.lineWidth(1), t.drawElements(O.LINES, 8 * s.length, S.UNSIGNED_INT, 0), t.bindVAO();
  }
  _createTransforms() {
    return { displayViewScreenMat3: p() };
  }
  _createShaderProgram(e) {
    if (this._program) return;
    const t = `precision highp float;
        uniform mat3 u_dvsMat3;

        attribute vec2 a_position;

        void main() {
          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0);
          gl_Position = vec4(pos.xy, 0.0, 1.0);
        }`, s = `precision mediump float;
      void main() {
        gl_FragColor = vec4(0.75, 0.0, 0.0, 0.75);
      }`;
    this._program = e.programCache.acquire(t, s, M().attributes);
  }
  _updateMatricesAndLocalOrigin(e) {
    const { state: t } = e, { displayMat3: s, size: a, resolution: _, pixelRatio: r, rotation: o, viewpoint: i } = t, l = Y * o, { x: n, y } = i.targetGeometry, R = V(n, t.spatialReference);
    this._localOrigin.x = R, this._localOrigin.y = y;
    const g = r * a[0], m = r * a[1], A = _ * g, B = _ * m, u = $(this._dvsMat3);
    z(u, u, s), D(u, u, I(g / 2, m / 2)), w(u, u, H(a[0] / A, -m / B, 1)), C(u, u, -l);
  }
  _updateBufferData(e, t) {
    const { x: s, y: a } = this._localOrigin, _ = 2 * j * t.length, r = new Float32Array(_), o = new Uint32Array(8 * t.length);
    let i = 0, l = 0;
    for (const n of t) n && (r[2 * i] = n[0] - s, r[2 * i + 1] = n[1] - a, r[2 * i + 2] = n[0] - s, r[2 * i + 3] = n[3] - a, r[2 * i + 4] = n[2] - s, r[2 * i + 5] = n[3] - a, r[2 * i + 6] = n[2] - s, r[2 * i + 7] = n[1] - a, o[l] = i + 0, o[l + 1] = i + 3, o[l + 2] = i + 3, o[l + 3] = i + 2, o[l + 4] = i + 2, o[l + 5] = i + 1, o[l + 6] = i + 1, o[l + 7] = i + 0, i += 4, l += 8);
    if (this._vertexBuffer ? this._vertexBuffer.setData(r.buffer) : this._vertexBuffer = x.createVertex(e, b.DYNAMIC_DRAW, r.buffer), this._indexBuffer ? this._indexBuffer.setData(o) : this._indexBuffer = x.createIndex(e, b.DYNAMIC_DRAW, o), !this._vao) {
      const n = M();
      this._vao = new W(e, n.attributes, n.bufferLayouts, /* @__PURE__ */ new Map([["geometry", this._vertexBuffer]]), this._indexBuffer);
    }
  }
}
const M = () => U("bounds", { geometry: [{ location: 0, name: "a_position", count: 2, type: S.FLOAT }] });
class ne extends F {
  constructor(e) {
    super(e), this._instanceStore = new G(), this.checkHighlight = () => !0;
  }
  destroy() {
    super.destroy(), this._boundsRenderer = L(this._boundsRenderer);
  }
  get instanceStore() {
    return this._instanceStore;
  }
  enableRenderingBounds(e) {
    this._boundsRenderer = new J(e), this.requestRender();
  }
  get hasHighlight() {
    return this.checkHighlight();
  }
  onTileData(e, t) {
    e.onMessage(t), this.contains(e) || this.addChild(e), this.requestRender();
  }
  _renderChildren(e, t) {
    e.selection = t;
    for (const s of this.children) {
      if (!s.visible) continue;
      s.getDisplayList(this._instanceStore, N.STRICT_ORDER)?.render(e);
    }
  }
}
export {
  ne as i
};
//# sourceMappingURL=AGraphicContainer-Cd-UhyV4.js.map
