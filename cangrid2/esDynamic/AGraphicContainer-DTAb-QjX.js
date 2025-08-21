import { bI as g, fE as O, bJ as I, bK as V, bL as D, bM as $, bN as z, bO as C, bP as E, bl as L } from "./main-DHXLMse1.js";
import { i as N, r as w, a as T } from "./TechniqueInstance-zQUFl6zM.js";
import { s as F, N as P } from "./Container-JHAmVaDa.js";
import { h as c } from "./FeatureCommandQueue-DbgU6j82.js";
import { r as k } from "./vec3f32-BS0cezmI.js";
import { b as U } from "./LabelMetric-BZ1wS013.js";
import { c as b } from "./Program-BYtVT21d.js";
import { R as v, E as H, C as y, F as x } from "./enums-DDkmfb-t.js";
import { o as W } from "./ProgramTemplate-DogOLZ0L.js";
let q = 0;
function h(f, t) {
  return new N(w(q++), f, t);
}
const d = { visualVariableColor: null, visualVariableOpacity: null, visualVariableSizeMinMaxValue: null, visualVariableSizeScaleStops: null, visualVariableSizeStops: null, visualVariableSizeUnitValue: null, visualVariableRotation: null, visualVariableSizeOutlineScaleStops: null };
class j {
  constructor() {
    this.instances = { fill: h(c.fill, { uniforms: d, optionalAttributes: { zoomRange: !0 } }), marker: h(c.marker, { uniforms: d, optionalAttributes: { zoomRange: !0 } }), line: h(c.line, { uniforms: d, optionalAttributes: { zoomRange: !0 } }), text: h(c.text, { uniforms: d, optionalAttributes: { zoomRange: !0, referenceSymbol: !1, clipAngle: !1 } }), complexFill: h(c.complexFill, { uniforms: d, optionalAttributes: { zoomRange: !0 } }), texturedLine: h(c.texturedLine, { uniforms: d, optionalAttributes: { zoomRange: !0 } }) }, this._instancesById = Object.values(this.instances).reduce((t, e) => (t.set(e.instanceId, e), t), /* @__PURE__ */ new Map());
  }
  getInstance(t) {
    return this._instancesById.get(t);
  }
}
const G = Math.PI / 180, Y = 4;
class J extends F {
  constructor(t) {
    super(), this._program = null, this._vao = null, this._vertexBuffer = null, this._indexBuffer = null, this._dvsMat3 = g(), this._localOrigin = { x: 0, y: 0 }, this._getBounds = t;
  }
  destroy() {
    this._vao && (this._vao.dispose(), this._vao = null, this._vertexBuffer = null, this._indexBuffer = null), this._program = O(this._program);
  }
  doRender(t) {
    const { context: e } = t, s = this._getBounds();
    if (s.length < 1) return;
    this._createShaderProgram(e), this._updateMatricesAndLocalOrigin(t), this._updateBufferData(e, s), e.setBlendingEnabled(!0), e.setDepthTestEnabled(!1), e.setStencilWriteMask(0), e.setStencilTestEnabled(!1), e.setBlendFunction(v.ONE, v.ONE_MINUS_SRC_ALPHA), e.setColorMask(!0, !0, !0, !0);
    const a = this._program;
    e.bindVAO(this._vao), e.useProgram(a), a.setUniformMatrix3fv("u_dvsMat3", this._dvsMat3), e.gl.lineWidth(1), e.drawElements(H.LINES, 8 * s.length, y.UNSIGNED_INT, 0), e.bindVAO();
  }
  _createTransforms() {
    return { displayViewScreenMat3: g() };
  }
  _createShaderProgram(t) {
    if (this._program) return;
    const e = `precision highp float;
        uniform mat3 u_dvsMat3;

        attribute vec2 a_position;

        void main() {
          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0);
          gl_Position = vec4(pos.xy, 0.0, 1.0);
        }`, s = `precision mediump float;
      void main() {
        gl_FragColor = vec4(0.75, 0.0, 0.0, 0.75);
      }`;
    this._program = t.programCache.acquire(e, s, S().attributes);
  }
  _updateMatricesAndLocalOrigin(t) {
    const { state: e } = t, { displayMat3: s, size: a, resolution: _, pixelRatio: n, rotation: o, viewpoint: i } = e, l = G * o, { x: r, y: M } = i.targetGeometry, R = I(r, e.spatialReference);
    this._localOrigin.x = R, this._localOrigin.y = M;
    const p = n * a[0], m = n * a[1], B = _ * p, A = _ * m, u = V(this._dvsMat3);
    D(u, u, s), $(u, u, z(p / 2, m / 2)), C(u, u, k(a[0] / B, -m / A, 1)), E(u, u, -l);
  }
  _updateBufferData(t, e) {
    const { x: s, y: a } = this._localOrigin, _ = 2 * Y * e.length, n = new Float32Array(_), o = new Uint32Array(8 * e.length);
    let i = 0, l = 0;
    for (const r of e) r && (n[2 * i] = r[0] - s, n[2 * i + 1] = r[1] - a, n[2 * i + 2] = r[0] - s, n[2 * i + 3] = r[3] - a, n[2 * i + 4] = r[2] - s, n[2 * i + 5] = r[3] - a, n[2 * i + 6] = r[2] - s, n[2 * i + 7] = r[1] - a, o[l] = i + 0, o[l + 1] = i + 3, o[l + 2] = i + 3, o[l + 3] = i + 2, o[l + 4] = i + 2, o[l + 5] = i + 1, o[l + 6] = i + 1, o[l + 7] = i + 0, i += 4, l += 8);
    if (this._vertexBuffer ? this._vertexBuffer.setData(n.buffer) : this._vertexBuffer = b.createVertex(t, x.DYNAMIC_DRAW, n.buffer), this._indexBuffer ? this._indexBuffer.setData(o) : this._indexBuffer = b.createIndex(t, x.DYNAMIC_DRAW, o), !this._vao) {
      const r = S();
      this._vao = new W(t, r.attributes, r.bufferLayouts, { geometry: this._vertexBuffer }, this._indexBuffer);
    }
  }
}
const S = () => U("bounds", { geometry: [{ location: 0, name: "a_position", count: 2, type: y.FLOAT }] });
class nt extends T {
  constructor(t) {
    super(t), this._instanceStore = new j(), this.checkHighlight = () => !0;
  }
  destroy() {
    super.destroy(), this._boundsRenderer = L(this._boundsRenderer);
  }
  get instanceStore() {
    return this._instanceStore;
  }
  enableRenderingBounds(t) {
    this._boundsRenderer = new J(t), this.requestRender();
  }
  get hasHighlight() {
    return this.checkHighlight();
  }
  onTileData(t, e) {
    t.onMessage(e), this.contains(t) || this.addChild(t), this.requestRender();
  }
  _renderChildren(t, e) {
    t.selection = e;
    for (const s of this.children) {
      if (!s.visible) continue;
      s.getDisplayList(this._instanceStore, P.STRICT_ORDER)?.render(t);
    }
  }
}
export {
  nt as i
};
//# sourceMappingURL=AGraphicContainer-DTAb-QjX.js.map
