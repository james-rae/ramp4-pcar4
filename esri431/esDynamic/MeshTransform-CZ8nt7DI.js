import { e0 as w, fU as q, fV as B, fW as I, fX as Q, fY as T, eQ as d, bQ as s, bR as e, bT as U, ap as X, fZ as k, aq as z, dX as l, f_ as C, eg as D, f$ as F, bS as G } from "./main-DZxT3i7S.js";
import { e as y } from "./mat4f64-Dn1WEGBx.js";
import { v as M, b as p, x as H } from "./quat-BFf8_asR.js";
import { e as m } from "./quatf64-C16JxGFv.js";
function a(t = j) {
  return [t[0], t[1], t[2], t[3]];
}
function c(t, o, n = a()) {
  return w(n, t), n[3] = o, n;
}
function Y(t, o = a()) {
  const n = T(i, t);
  return v(o, d(M(o, n))), o;
}
function A(t, o, n = a()) {
  return p(i, t, f(t)), p($, o, f(o)), H(i, $, i), v(n, d(M(n, i)));
}
function Z(t, o, n, x = a()) {
  return c(q, t, u), c(B, o, b), c(I, n, g), A(u, b, u), A(u, g, x), x;
}
function _(t) {
  return t;
}
function P(t) {
  return t[3];
}
function f(t) {
  return Q(t[3]);
}
function v(t, o) {
  return t[3] = o, t;
}
const j = [0, 0, 1, 0], i = m(), $ = m();
a();
const u = a(), b = a(), g = a();
var h;
let r = h = class extends U {
  constructor(t) {
    super(t), this.translation = X(), this.rotationAxis = k(j), this.rotationAngle = 0, this.scale = z(1, 1, 1);
  }
  get rotation() {
    return c(this.rotationAxis, this.rotationAngle);
  }
  set rotation(t) {
    this.rotationAxis = l(t), this.rotationAngle = P(t);
  }
  get localMatrix() {
    const t = y();
    return p(N, this.rotation, f(this.rotation)), C(t, N, this.translation, this.scale), t;
  }
  get localMatrixInverse() {
    return D(y(), this.localMatrix);
  }
  equals(t) {
    return this === t || t != null && F(this.localMatrix, t.localMatrix);
  }
  clone() {
    const t = { translation: l(this.translation), rotationAxis: l(this.rotationAxis), rotationAngle: this.rotationAngle, scale: l(this.scale) };
    return new h(t);
  }
};
s([e({ type: [Number], nonNullable: !0, json: { write: !0 } })], r.prototype, "translation", void 0), s([e({ type: [Number], nonNullable: !0, json: { write: !0 } })], r.prototype, "rotationAxis", void 0), s([e({ type: Number, nonNullable: !0, json: { write: !0 } })], r.prototype, "rotationAngle", void 0), s([e({ type: [Number], nonNullable: !0, json: { write: !0 } })], r.prototype, "scale", void 0), s([e()], r.prototype, "rotation", null), s([e()], r.prototype, "localMatrix", null), s([e()], r.prototype, "localMatrixInverse", null), r = h = s([G("esri.geometry.support.MeshTransform")], r);
const N = m(), E = r;
export {
  E as N,
  Z as d,
  a as j,
  Y as k,
  _ as w,
  f as z
};
//# sourceMappingURL=MeshTransform-CZ8nt7DI.js.map
