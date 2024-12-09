import { Q as bt, g1 as Et, g2 as Rt, bj as j, bk as D } from "./main-DZxT3i7S.js";
const pt = 128e3;
let dt = null, gt = null;
async function Lt() {
  return dt || (dt = Mt()), dt;
}
async function Mt() {
  gt = await (bt("esri-csp-restrictions") ? await import("./libtess-asm-BKAo6kUx.js").then((i) => i.l) : await import("./libtess-3vEpm3Yw.js").then((i) => i.l)).default({ locateFile: (i) => Et(`esri/core/libs/libtess/${i}`) });
}
function Dt(x, i) {
  const n = Math.max(x.length, pt);
  return gt.triangulate(x, i, n);
}
function mt(x, i) {
  return x.x === i.x && x.y === i.y;
}
function Ut(x) {
  if (!x) return;
  const i = x.length;
  if (i <= 1) return;
  let n = 0;
  for (let f = 1; f < i; f++) mt(x[f], x[n]) || ++n === f || (x[n] = x[f]);
  x.length = n + 1;
}
function k(x, i) {
  return x.x = i.y, x.y = -i.x, x;
}
function R(x, i) {
  return x.x = -i.y, x.y = i.x, x;
}
function wt(x, i) {
  return x.x = i.x, x.y = i.y, x;
}
function ft(x, i) {
  return x.x = -i.x, x.y = -i.y, x;
}
function vt(x) {
  return Math.sqrt(x.x * x.x + x.y * x.y);
}
function kt(x, i) {
  return x.x * i.y - x.y * i.x;
}
function Tt(x, i) {
  return x.x * i.x + x.y * i.y;
}
function et(x, i, n, f) {
  return x.x = i.x * n + i.y * f, x.y = i.x * f - i.y * n, x;
}
class St {
  constructor(i, n, f) {
    this._writeVertex = i, this._writeTriangle = n, this._canUseThinTessellation = f, this._prevNormal = { x: void 0, y: void 0 }, this._nextNormal = { x: void 0, y: void 0 }, this._textureNormalLeft = { x: 0, y: 1 }, this._textureNormalRight = { x: 0, y: -1 }, this._textureNormal = { x: void 0, y: void 0 }, this._joinNormal = { x: void 0, y: void 0 }, this._inner = { x: void 0, y: void 0 }, this._outer = { x: void 0, y: void 0 }, this._roundStart = { x: void 0, y: void 0 }, this._roundEnd = { x: void 0, y: void 0 }, this._startBreak = { x: void 0, y: void 0 }, this._endBreak = { x: void 0, y: void 0 }, this._innerPrev = { x: void 0, y: void 0 }, this._innerNext = { x: void 0, y: void 0 }, this._bevelStart = { x: void 0, y: void 0 }, this._bevelEnd = { x: void 0, y: void 0 }, this._bevelMiddle = { x: void 0, y: void 0 };
  }
  tessellate(i, n, f = this._canUseThinTessellation) {
    Ut(i), f && n.halfWidth < Rt && !n.offset ? this._tessellateThin(i, n) : this._tessellate(i, n);
  }
  _tessellateThin(i, n) {
    if (i.length < 2) return;
    const f = n.wrapDistance || 65535;
    let b = n.initialDistance || 0, I = !1, C = i[0].x, F = i[0].y;
    const B = i.length;
    for (let P = 1; P < B; ++P) {
      I && (I = !1, b = 0);
      let Q = i[P].x, W = i[P].y, E = Q - C, v = W - F, T = Math.sqrt(E * E + v * v);
      if (E /= T, v /= T, b + T > f) {
        I = !0;
        const t = (f - b) / T;
        T = f - b, Q = (1 - t) * C + t * Q, W = (1 - t) * F + t * W, --P;
      }
      const o = this._writeVertex(C, F, 0, 0, E, v, v, -E, 0, -1, b), y = this._writeVertex(C, F, 0, 0, E, v, -v, E, 0, 1, b);
      b += T;
      const G = this._writeVertex(Q, W, 0, 0, E, v, v, -E, 0, -1, b), e = this._writeVertex(Q, W, 0, 0, E, v, -v, E, 0, 1, b);
      this._writeTriangle(o, y, G), this._writeTriangle(y, G, e), C = Q, F = W;
    }
  }
  _tessellate(i, n) {
    const f = i[0], b = i[i.length - 1], I = mt(f, b), C = I ? 3 : 2;
    if (i.length < C) return;
    const F = n.pixelCoordRatio, B = n.capType != null ? n.capType : j.BUTT, P = n.joinType != null ? n.joinType : D.MITER, Q = n.miterLimit != null ? Math.min(n.miterLimit, 4) : 2, W = n.roundLimit != null ? Math.min(n.roundLimit, 1.05) : 1.05, E = n.halfWidth != null ? n.halfWidth : 2, v = !!n.textured;
    let T, o, y, G = null;
    const e = this._prevNormal, t = this._nextNormal;
    let K = -1, X = -1;
    const s = this._joinNormal;
    let _, c;
    const nt = this._textureNormalLeft, rt = this._textureNormalRight, w = this._textureNormal;
    let u = -1, h = -1;
    const _t = n.wrapDistance || 65535;
    let l = n.initialDistance || 0;
    const Vt = this._writeVertex, Nt = this._writeTriangle, d = (p, st, H, m, L, S) => {
      const $ = Vt(o, y, _, c, H, m, p, st, L, S, l);
      return u >= 0 && h >= 0 && $ >= 0 && Nt(u, h, $), u = h, h = $, $;
    };
    I && (T = i[i.length - 2], t.x = b.x - T.x, t.y = b.y - T.y, X = vt(t), t.x /= X, t.y /= X);
    let Y = !1;
    for (let p = 0; p < i.length; ++p) {
      if (Y && (Y = !1, l = 0), T && (e.x = -t.x, e.y = -t.y, K = X, l + K > _t && (Y = !0)), Y) {
        const r = (_t - l) / K;
        K = _t - l, T = { x: (1 - r) * T.x + r * i[p].x, y: (1 - r) * T.y + r * i[p].y }, --p;
      } else T = i[p];
      o = T.x, y = T.y;
      const st = p <= 0 && !Y, H = p === i.length - 1;
      if (st || (l += K), G = H ? I ? i[1] : null : i[p + 1], G ? (t.x = G.x - o, t.y = G.y - y, X = vt(t), t.x /= X, t.y /= X) : (t.x = void 0, t.y = void 0), !I) {
        if (st) {
          R(s, t), _ = s.x, c = s.y, B === j.SQUARE && (d(-t.y - t.x, t.x - t.y, t.x, t.y, 0, -1), d(t.y - t.x, -t.x - t.y, t.x, t.y, 0, 1)), B === j.ROUND && (d(-t.y - t.x, t.x - t.y, t.x, t.y, -1, -1), d(t.y - t.x, -t.x - t.y, t.x, t.y, -1, 1)), B !== j.ROUND && B !== j.BUTT || (d(-t.y, t.x, t.x, t.y, 0, -1), d(t.y, -t.x, t.x, t.y, 0, 1));
          continue;
        }
        if (H) {
          k(s, e), _ = s.x, c = s.y, B !== j.ROUND && B !== j.BUTT || (d(e.y, -e.x, -e.x, -e.y, 0, -1), d(-e.y, e.x, -e.x, -e.y, 0, 1)), B === j.SQUARE && (d(e.y - e.x, -e.x - e.y, -e.x, -e.y, 0, -1), d(-e.y - e.x, e.x - e.y, -e.x, -e.y, 0, 1)), B === j.ROUND && (d(e.y - e.x, -e.x - e.y, -e.x, -e.y, 1, -1), d(-e.y - e.x, e.x - e.y, -e.x, -e.y, 1, 1));
          continue;
        }
      }
      let m, L, S = -kt(e, t);
      if (Math.abs(S) < 0.01) Tt(e, t) > 0 ? (s.x = e.x, s.y = e.y, S = 1, m = Number.MAX_VALUE, L = !0) : (R(s, t), S = 1, m = 1, L = !1);
      else {
        s.x = (e.x + t.x) / S, s.y = (e.y + t.y) / S, m = vt(s);
        const r = (m - 1) * E * F;
        L = m > 4 || r > K && r > X;
      }
      _ = s.x, c = s.y;
      let $ = P;
      switch (P) {
        case D.BEVEL:
          m < 1.05 && ($ = D.MITER);
          break;
        case D.ROUND:
          m < W && ($ = D.MITER);
          break;
        case D.MITER:
          m > Q && ($ = D.BEVEL);
      }
      switch ($) {
        case D.MITER:
          if (d(s.x, s.y, -e.x, -e.y, 0, -1), d(-s.x, -s.y, -e.x, -e.y, 0, 1), H) break;
          if (v) {
            const r = Y ? 0 : l;
            u = this._writeVertex(o, y, _, c, t.x, t.y, s.x, s.y, 0, -1, r), h = this._writeVertex(o, y, _, c, t.x, t.y, -s.x, -s.y, 0, 1, r);
          }
          break;
        case D.BEVEL: {
          const r = S < 0;
          let g, V, q, M;
          if (r) {
            const a = u;
            u = h, h = a, g = nt, V = rt;
          } else g = rt, V = nt;
          if (L) q = r ? R(this._innerPrev, e) : k(this._innerPrev, e), M = r ? k(this._innerNext, t) : R(this._innerNext, t);
          else {
            const a = r ? ft(this._inner, s) : wt(this._inner, s);
            q = a, M = a;
          }
          const U = r ? k(this._bevelStart, e) : R(this._bevelStart, e);
          d(q.x, q.y, -e.x, -e.y, g.x, g.y);
          const yt = d(U.x, U.y, -e.x, -e.y, V.x, V.y);
          if (H) break;
          const A = r ? R(this._bevelEnd, t) : k(this._bevelEnd, t);
          if (L) {
            const a = this._writeVertex(o, y, _, c, -e.x, -e.y, 0, 0, 0, 0, l);
            u = this._writeVertex(o, y, _, c, t.x, t.y, M.x, M.y, g.x, g.y, l), h = this._writeVertex(o, y, _, c, t.x, t.y, A.x, A.y, V.x, V.y, l), this._writeTriangle(yt, a, h);
          } else {
            if (v) {
              const a = this._bevelMiddle;
              a.x = (U.x + A.x) / 2, a.y = (U.y + A.y) / 2, et(w, a, -e.x, -e.y), d(a.x, a.y, -e.x, -e.y, w.x, w.y), et(w, a, t.x, t.y), u = this._writeVertex(o, y, _, c, t.x, t.y, a.x, a.y, w.x, w.y, l), h = this._writeVertex(o, y, _, c, t.x, t.y, M.x, M.y, g.x, g.y, l);
            } else {
              const a = u;
              u = h, h = a;
            }
            d(A.x, A.y, t.x, t.y, V.x, V.y);
          }
          if (r) {
            const a = u;
            u = h, h = a;
          }
          break;
        }
        case D.ROUND: {
          const r = S < 0;
          let g, V;
          if (r) {
            const N = u;
            u = h, h = N, g = nt, V = rt;
          } else g = rt, V = nt;
          const q = r ? ft(this._inner, s) : wt(this._inner, s);
          let M, U;
          L ? (M = r ? R(this._innerPrev, e) : k(this._innerPrev, e), U = r ? k(this._innerNext, t) : R(this._innerNext, t)) : (M = q, U = q);
          const yt = r ? k(this._roundStart, e) : R(this._roundStart, e), A = r ? R(this._roundEnd, t) : k(this._roundEnd, t), a = d(M.x, M.y, -e.x, -e.y, g.x, g.y), ot = d(yt.x, yt.y, -e.x, -e.y, V.x, V.y);
          if (H) break;
          const z = this._writeVertex(o, y, _, c, -e.x, -e.y, 0, 0, 0, 0, l);
          L || this._writeTriangle(u, h, z);
          const O = ft(this._outer, q), J = this._writeVertex(o, y, _, c, t.x, t.y, A.x, A.y, V.x, V.y, l);
          let Z, tt;
          const ht = m > 2;
          if (ht) {
            let N;
            m !== Number.MAX_VALUE ? (O.x /= m, O.y /= m, N = Tt(e, O), N = (m * (N * N - 1) + 1) / N) : N = -1, Z = r ? k(this._startBreak, e) : R(this._startBreak, e), Z.x += e.x * N, Z.y += e.y * N, tt = r ? R(this._endBreak, t) : k(this._endBreak, t), tt.x += t.x * N, tt.y += t.y * N;
          }
          et(w, O, -e.x, -e.y);
          const lt = this._writeVertex(o, y, _, c, -e.x, -e.y, O.x, O.y, w.x, w.y, l);
          et(w, O, t.x, t.y);
          const ct = v ? this._writeVertex(o, y, _, c, t.x, t.y, O.x, O.y, w.x, w.y, l) : lt, ut = z, at = v ? this._writeVertex(o, y, _, c, t.x, t.y, 0, 0, 0, 0, l) : z;
          let it = -1, xt = -1;
          if (ht && (et(w, Z, -e.x, -e.y), it = this._writeVertex(o, y, _, c, -e.x, -e.y, Z.x, Z.y, w.x, w.y, l), et(w, tt, t.x, t.y), xt = this._writeVertex(o, y, _, c, t.x, t.y, tt.x, tt.y, w.x, w.y, l)), v ? ht ? (this._writeTriangle(ut, ot, it), this._writeTriangle(ut, it, lt), this._writeTriangle(at, ct, xt), this._writeTriangle(at, xt, J)) : (this._writeTriangle(ut, ot, lt), this._writeTriangle(at, ct, J)) : ht ? (this._writeTriangle(z, ot, it), this._writeTriangle(z, it, xt), this._writeTriangle(z, xt, J)) : (this._writeTriangle(z, ot, lt), this._writeTriangle(z, ct, J)), L ? (u = this._writeVertex(o, y, _, c, t.x, t.y, U.x, U.y, g.x, g.y, l), h = J) : (u = v ? this._writeVertex(o, y, _, c, t.x, t.y, U.x, U.y, g.x, g.y, l) : a, this._writeTriangle(u, at, J), h = J), r) {
            const N = u;
            u = h, h = N;
          }
          break;
        }
      }
    }
  }
}
export {
  Dt as a,
  St as c,
  Lt as i
};
//# sourceMappingURL=TurboLine-BfHYB3zi.js.map
