import { e as Ie } from "./deduplicate-DFnnTL10.js";
import { H as C } from "./InterleavedLayout-DiP8aj57.js";
import { e as c } from "./VertexAttribute-DqD5S0a2.js";
import { t as Z } from "./glUtil-BuBAO7Zr.js";
import { ap as w, d7 as ee, ec as Oe, eb as k, e0 as oe, al as H, ef as Se, ee as Ae, am as pe, dY as re, ao as de, fX as he, b5 as Ee, d$ as we, mi as Te } from "./main-DZxT3i7S.js";
const Me = C().vec3f(c.POSITION).u16(c.COMPONENTINDEX).freeze(), $e = C().vec2u8(c.SIDENESS).freeze();
Z($e);
const j = C().vec3f(c.POSITION0).vec3f(c.POSITION1).vec2i16(c.NORMALCOMPRESSED).u16(c.COMPONENTINDEX).u8(c.VARIANTOFFSET, { glNormalized: !0 }).u8(c.VARIANTSTROKE).u8(c.VARIANTEXTENSION, { glNormalized: !0 }).freeze(), Y = C().vec3f(c.POSITION0).vec3f(c.POSITION1).vec2i16(c.NORMALCOMPRESSED).vec2i16(c.NORMAL2COMPRESSED).u16(c.COMPONENTINDEX).u8(c.VARIANTOFFSET, { glNormalized: !0 }).u8(c.VARIANTSTROKE).u8(c.VARIANTEXTENSION, { glNormalized: !0 }).freeze();
c.POSITION0, c.POSITION1, c.COMPONENTINDEX, c.VARIANTOFFSET, c.VARIANTSTROKE, c.VARIANTEXTENSION, c.NORMALCOMPRESSED, c.NORMAL2COMPRESSED, c.SIDENESS;
let ve = class {
  constructor() {
    this.position0 = w(), this.position1 = w(), this.faceNormal0 = w(), this.faceNormal1 = w(), this.componentIndex = 0, this.cosAngle = 0;
  }
};
const W = -1;
function ye(e, n, s) {
  const o = e.vertices.position, a = e.vertices.componentIndex, l = O.position0, d = O.position1, g = O.faceNormal0, m = O.faceNormal1, { edges: i, normals: p } = xe(e), N = i.length / 4, A = n.allocate(N);
  let R = 0;
  const F = N, T = s?.allocate(F);
  let B = 0, t = 0, r = 0;
  z.length = 0;
  for (let h = 0; h < N; ++h) {
    const $ = 4 * h;
    o.getVec(i.data[$], l), o.getVec(i.data[$ + 1], d);
    const x = z.pushNew();
    x.index = 4 * h, x.length = Oe(l, d);
  }
  z.sort((h, $) => $.length - h.length);
  const f = new Array(), u = new Array();
  z.forAll(({ length: h, index: $ }) => {
    const x = i.data[$], me = i.data[$ + 1], te = i.data[$ + 2], ne = i.data[$ + 3], se = ne === W;
    if (o.getVec(x, l), o.getVec(me, d), se) {
      const E = 3 * te;
      k(g, p.data[E], p.data[E + 1], p.data[E + 2]), oe(m, g), O.componentIndex = a.get(x), O.cosAngle = H(g, m);
    } else {
      let E = 3 * te;
      if (k(g, p.data[E], p.data[E + 1], p.data[E + 2]), E = 3 * ne, k(m, p.data[E], p.data[E + 1], p.data[E + 2]), O.componentIndex = a.get(x), O.cosAngle = H(g, m), Re(O, Le)) return;
      O.cosAngle < -0.9999 && oe(m, g);
    }
    t += h, r++, se || Pe(O, Fe) ? (n.write(A, R++, O), f.push(h)) : Ve(O, ge) && (T && s && s.write(T, B++, O), u.push(h));
  });
  const S = new Float32Array(f.reverse()), M = new Float32Array(u.reverse()), v = T && s ? { instancesData: T.slice(0, B), lodInfo: { lengths: M } } : void 0;
  return { regular: { instancesData: A.slice(0, R), lodInfo: { lengths: S } }, silhouette: v, averageEdgeLength: t / r };
}
function Pe(e, n) {
  return e.cosAngle < n;
}
function Re(e, n) {
  return e.cosAngle > n;
}
function Ve(e, n) {
  const s = Se(e.cosAngle);
  return Ae(ae, e.position1, e.position0), s * (H(pe(De, e.faceNormal0, e.faceNormal1), ae) > 0 ? -1 : 1) > n;
}
function xe(e) {
  const n = e.faces.length / 3, s = e.faces, o = e.neighbors, a = e.vertices.position;
  I.length = K.length = 0;
  for (let l = 0; l < n; l++) {
    const d = 3 * l, g = o[d], m = o[d + 1], i = o[d + 2], p = s[d], N = s[d + 1], A = s[d + 2];
    a.getVec(p, V), a.getVec(N, X), a.getVec(A, _), re(X, X, V), re(_, _, V), pe(V, X, _), de(V, V), K.pushArray(V), (g === W || p < N) && (I.push(p), I.push(N), I.push(l), I.push(g)), (m === W || N < A) && (I.push(N), I.push(A), I.push(l), I.push(m)), (i === W || A < p) && (I.push(A), I.push(p), I.push(l), I.push(i));
  }
  return { edges: I, normals: K };
}
class be {
  constructor() {
    this.index = 0, this.length = 0;
  }
}
const z = new ee({ allocator: (e) => e || new be(), deallocator: null }), I = new ee({ deallocator: null }), K = new ee({ deallocator: null }), O = new ve(), De = w(), ae = w(), V = w(), X = w(), _ = w(), ge = he(4), Le = Math.cos(ge), Ce = he(35), Fe = Math.cos(Ce);
function ie(e, n, s) {
  const o = n / 3, a = new Uint32Array(s + 1), l = new Uint32Array(s + 1), d = (t, r) => {
    t < r ? a[t + 1]++ : l[r + 1]++;
  };
  for (let t = 0; t < o; t++) {
    const r = e[3 * t], f = e[3 * t + 1], u = e[3 * t + 2];
    d(r, f), d(f, u), d(u, r);
  }
  let g = 0, m = 0;
  for (let t = 0; t < s; t++) {
    const r = a[t + 1], f = l[t + 1];
    a[t + 1] = g, l[t + 1] = m, g += r, m += f;
  }
  const i = new Uint32Array(6 * o), p = a[s], N = (t, r, f) => {
    if (t < r) {
      const u = a[t + 1]++;
      i[2 * u] = r, i[2 * u + 1] = f;
    } else {
      const u = l[r + 1]++;
      i[2 * p + 2 * u] = t, i[2 * p + 2 * u + 1] = f;
    }
  };
  for (let t = 0; t < o; t++) {
    const r = e[3 * t], f = e[3 * t + 1], u = e[3 * t + 2];
    N(r, f, t), N(f, u, t), N(u, r, t);
  }
  const A = (t, r) => {
    const f = 2 * t, u = r - t;
    for (let S = 1; S < u; S++) {
      const M = i[f + 2 * S], v = i[f + 2 * S + 1];
      let h = S - 1;
      for (; h >= 0 && i[f + 2 * h] > M; h--) i[f + 2 * h + 2] = i[f + 2 * h], i[f + 2 * h + 3] = i[f + 2 * h + 1];
      i[f + 2 * h + 2] = M, i[f + 2 * h + 3] = v;
    }
  };
  for (let t = 0; t < s; t++) A(a[t], a[t + 1]), A(p + l[t], p + l[t + 1]);
  const R = new Int32Array(3 * o), F = (t, r) => t === e[3 * r] ? 0 : t === e[3 * r + 1] ? 1 : t === e[3 * r + 2] ? 2 : -1, T = (t, r) => {
    const f = F(t, r);
    R[3 * r + f] = -1;
  }, B = (t, r, f, u) => {
    const S = F(t, r);
    R[3 * r + S] = u;
    const M = F(f, u);
    R[3 * u + M] = r;
  };
  for (let t = 0; t < s; t++) {
    let r = a[t];
    const f = a[t + 1];
    let u = l[t];
    const S = l[t + 1];
    for (; r < f && u < S; ) {
      const M = i[2 * r], v = i[2 * p + 2 * u];
      M === v ? (B(t, i[2 * r + 1], v, i[2 * p + 2 * u + 1]), r++, u++) : M < v ? (T(t, i[2 * r + 1]), r++) : (T(v, i[2 * p + 2 * u + 1]), u++);
    }
    for (; r < f; ) T(t, i[2 * r + 1]), r++;
    for (; u < S; )
      T(i[2 * p + 2 * u], i[2 * p + 2 * u + 1]), u++;
  }
  return R;
}
function G(e, n, s, o, a, l = 2) {
  const d = 1 / (Math.abs(s) + Math.abs(o) + Math.abs(a)), g = s * d, m = o * d, i = a <= 0 ? (g >= 0 ? 1 : -1) * (1 - Math.abs(m)) : g, p = a <= 0 ? (m >= 0 ? 1 : -1) * (1 - Math.abs(g)) : m, N = n * l;
  e[N] = ce(i), e[N + 1] = ce(p);
}
function ce(e) {
  return Ee(Math.round(32767 * e), -32767, 32767);
}
const q = 0.7;
let Ne = class {
  updateSettings(n) {
    this.settings = n, this._edgeHashFunction = n.reducedPrecision ? ze : Be;
  }
  write(n, s, o) {
    U.seed = this._edgeHashFunction(o);
    const a = U.getIntRange(0, 255), l = U.getIntRange(0, this.settings.variants - 1), d = U.getFloat(), g = 255 * (0.5 * Xe(-(1 - Math.min(d / q, 1)) + Math.max(0, d - q) / (1 - q), 1.2) + 0.5);
    n.position0.setVec(s, o.position0), n.position1.setVec(s, o.position1), n.componentIndex.set(s, o.componentIndex), n.variantOffset.set(s, a), n.variantStroke.set(s, l), n.variantExtension.set(s, g);
  }
};
const y = new Float32Array(6), P = new Uint32Array(y.buffer), L = new Uint32Array(1);
function Be(e) {
  return y[0] = e.position0[0], y[1] = e.position0[1], y[2] = e.position0[2], y[3] = e.position1[0], y[4] = e.position1[1], y[5] = e.position1[2], L[0] = 31 * (31 * (31 * (31 * (31 * (166811 + P[0]) + P[1]) + P[2]) + P[3]) + P[4]) + P[5], L[0];
}
function ze(e) {
  const n = y;
  n[0] = b(e.position0[0]), n[1] = b(e.position0[1]), n[2] = b(e.position0[2]), n[3] = b(e.position1[0]), n[4] = b(e.position1[1]), n[5] = b(e.position1[2]), L[0] = 5381;
  for (let s = 0; s < P.length; s++) L[0] = 31 * L[0] + P[s];
  return L[0];
}
const le = 1e4;
function b(e) {
  return Math.round(e * le) / le;
}
function Xe(e, n) {
  return Math.abs(e) ** n * Math.sign(e);
}
class J {
  constructor() {
    this._commonWriter = new Ne();
  }
  updateSettings(n) {
    this._commonWriter.updateSettings(n);
  }
  allocate(n) {
    return j.createBuffer(n);
  }
  write(n, s, o) {
    this._commonWriter.write(n, s, o), we(D, o.faceNormal0, o.faceNormal1), de(D, D);
    const { typedBuffer: a, typedBufferStride: l } = n.normalCompressed;
    G(a, s, D[0], D[1], D[2], l);
  }
}
J.Layout = j, J.glLayout = Z(j, 1);
class Q {
  constructor() {
    this._commonWriter = new Ne();
  }
  updateSettings(n) {
    this._commonWriter.updateSettings(n);
  }
  allocate(n) {
    return Y.createBuffer(n);
  }
  write(n, s, o) {
    this._commonWriter.write(n, s, o);
    {
      const { typedBuffer: a, typedBufferStride: l } = n.normalCompressed;
      G(a, s, o.faceNormal0[0], o.faceNormal0[1], o.faceNormal0[2], l);
    }
    {
      const { typedBuffer: a, typedBufferStride: l } = n.normal2Compressed;
      G(a, s, o.faceNormal1[0], o.faceNormal1[1], o.faceNormal1[2], l);
    }
  }
}
Q.Layout = Y, Q.glLayout = Z(Y, 1);
const D = w(), U = new Te();
function Ge(e) {
  const n = _e(e.data, e.skipDeduplicate, e.indices, e.indicesLength);
  return ue.updateSettings(e.writerSettings), fe.updateSettings(e.writerSettings), ye(n, ue, fe);
}
function _e(e, n, s, o) {
  if (n) {
    const d = ie(s, o, e.count);
    return new Ue(s, o, d, e);
  }
  const a = Ie(e.buffer, e.stride / 4, { originalIndices: s, originalIndicesLength: o }), l = ie(a.indices, o, a.uniqueCount);
  return { faces: a.indices, facesLength: a.indices.length, neighbors: l, vertices: Me.createView(a.buffer) };
}
class Ue {
  constructor(n, s, o, a) {
    this.faces = n, this.facesLength = s, this.neighbors = o, this.vertices = a;
  }
}
const ue = new J(), fe = new Q(), Je = C().vec3f(c.POSITION0).vec3f(c.POSITION1), Qe = C().vec3f(c.POSITION0).vec3f(c.POSITION1).u16(c.COMPONENTINDEX);
export {
  Me as E,
  Je as d,
  Ge as f,
  Qe as m,
  ye as p,
  _e as u
};
//# sourceMappingURL=edgeProcessing-CebaHmUj.js.map
