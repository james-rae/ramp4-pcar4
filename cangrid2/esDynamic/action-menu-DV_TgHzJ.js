import { hw as Ce, cY as Xe, cX as y, c$ as Ye, d0 as Ze, e_ as Q, cZ as yt, d1 as Et, ki as Pt } from "./main-DHXLMse1.js";
import { g as Ct, a as Ge, t as ve, o as At, q as kt, y as Ot, f as Rt } from "./dom-BD6OZEvo.js";
import { c as Dt, d as St, e as Qe } from "./locale-BWfU23IG.js";
import { s as Je, a as et, c as tt } from "./loadable-By8v9cXG.js";
import { d as nt } from "./action-0gQ5HIRg.js";
import { d as it } from "./icon-Dt1qIaUr.js";
import { d as ot } from "./loader-D9MEKYSI.js";
import { d as Lt } from "./debounce-xqxE0s7z.js";
import { d as pe, a as Ae, c as Mt, u as Tt } from "./focusTrapComponent-CTkR6Er2.js";
import { o as ke } from "./openCloseComponent-CD5oSm5p.js";
import { u as Bt, c as Ht, s as It, d as Ft } from "./t9n-2Iu_Noy9.js";
import { c as $t } from "./observers-Bi3Qhj76.js";
import { g as zt } from "./component-Bgl0_aC7.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */
function Oe(t, e) {
  return (t + e) % e;
}
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */
const st = ["top", "right", "bottom", "left"], Re = ["start", "end"], De = /* @__PURE__ */ st.reduce((t, e) => t.concat(e, e + "-" + Re[0], e + "-" + Re[1]), []), Y = Math.min, j = Math.max, oe = Math.round, ie = Math.floor, U = (t) => ({
  x: t,
  y: t
}), _t = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Wt = {
  start: "end",
  end: "start"
};
function be(t, e, n) {
  return j(t, Y(e, n));
}
function q(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function _(t) {
  return t.split("-")[0];
}
function F(t) {
  return t.split("-")[1];
}
function rt(t) {
  return t === "x" ? "y" : "x";
}
function xe(t) {
  return t === "y" ? "height" : "width";
}
function le(t) {
  return ["top", "bottom"].includes(_(t)) ? "y" : "x";
}
function ye(t) {
  return rt(le(t));
}
function at(t, e, n) {
  n === void 0 && (n = !1);
  const i = F(t), o = ye(t), s = xe(o);
  let r = o === "x" ? i === (n ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
  return e.reference[s] > e.floating[s] && (r = re(r)), [r, re(r)];
}
function Ut(t) {
  const e = re(t);
  return [se(t), e, se(e)];
}
function se(t) {
  return t.replace(/start|end/g, (e) => Wt[e]);
}
function Nt(t, e, n) {
  const i = ["left", "right"], o = ["right", "left"], s = ["top", "bottom"], r = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? o : i : e ? i : o;
    case "left":
    case "right":
      return e ? s : r;
    default:
      return [];
  }
}
function Vt(t, e, n, i) {
  const o = F(t);
  let s = Nt(_(t), n === "start", i);
  return o && (s = s.map((r) => r + "-" + o), e && (s = s.concat(s.map(se)))), s;
}
function re(t) {
  return t.replace(/left|right|bottom|top/g, (e) => _t[e]);
}
function jt(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function ct(t) {
  return typeof t != "number" ? jt(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function ae(t) {
  const {
    x: e,
    y: n,
    width: i,
    height: o
  } = t;
  return {
    width: i,
    height: o,
    top: n,
    left: e,
    right: e + i,
    bottom: n + o,
    x: e,
    y: n
  };
}
function Se(t, e, n) {
  let {
    reference: i,
    floating: o
  } = t;
  const s = le(e), r = ye(e), a = xe(r), c = _(e), l = s === "y", u = i.x + i.width / 2 - o.width / 2, f = i.y + i.height / 2 - o.height / 2, p = i[a] / 2 - o[a] / 2;
  let d;
  switch (c) {
    case "top":
      d = {
        x: u,
        y: i.y - o.height
      };
      break;
    case "bottom":
      d = {
        x: u,
        y: i.y + i.height
      };
      break;
    case "right":
      d = {
        x: i.x + i.width,
        y: f
      };
      break;
    case "left":
      d = {
        x: i.x - o.width,
        y: f
      };
      break;
    default:
      d = {
        x: i.x,
        y: i.y
      };
  }
  switch (F(e)) {
    case "start":
      d[r] -= p * (n && l ? -1 : 1);
      break;
    case "end":
      d[r] += p * (n && l ? -1 : 1);
      break;
  }
  return d;
}
const Kt = async (t, e, n) => {
  const {
    placement: i = "bottom",
    strategy: o = "absolute",
    middleware: s = [],
    platform: r
  } = n, a = s.filter(Boolean), c = await (r.isRTL == null ? void 0 : r.isRTL(e));
  let l = await r.getElementRects({
    reference: t,
    floating: e,
    strategy: o
  }), {
    x: u,
    y: f
  } = Se(l, i, c), p = i, d = {}, h = 0;
  for (let m = 0; m < a.length; m++) {
    const {
      name: v,
      fn: g
    } = a[m], {
      x: b,
      y: w,
      data: E,
      reset: x
    } = await g({
      x: u,
      y: f,
      initialPlacement: i,
      placement: p,
      strategy: o,
      middlewareData: d,
      rects: l,
      platform: r,
      elements: {
        reference: t,
        floating: e
      }
    });
    u = b ?? u, f = w ?? f, d = {
      ...d,
      [v]: {
        ...d[v],
        ...E
      }
    }, x && h <= 50 && (h++, typeof x == "object" && (x.placement && (p = x.placement), x.rects && (l = x.rects === !0 ? await r.getElementRects({
      reference: t,
      floating: e,
      strategy: o
    }) : x.rects), {
      x: u,
      y: f
    } = Se(l, p, c)), m = -1);
  }
  return {
    x: u,
    y: f,
    placement: p,
    strategy: o,
    middlewareData: d
  };
};
async function J(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: i,
    y: o,
    platform: s,
    rects: r,
    elements: a,
    strategy: c
  } = t, {
    boundary: l = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: f = "floating",
    altBoundary: p = !1,
    padding: d = 0
  } = q(e, t), h = ct(d), v = a[p ? f === "floating" ? "reference" : "floating" : f], g = ae(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(v))) == null || n ? v : v.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
    boundary: l,
    rootBoundary: u,
    strategy: c
  })), b = f === "floating" ? {
    x: i,
    y: o,
    width: r.floating.width,
    height: r.floating.height
  } : r.reference, w = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating)), E = await (s.isElement == null ? void 0 : s.isElement(w)) ? await (s.getScale == null ? void 0 : s.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, x = ae(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: b,
    offsetParent: w,
    strategy: c
  }) : b);
  return {
    top: (g.top - x.top + h.top) / E.y,
    bottom: (x.bottom - g.bottom + h.bottom) / E.y,
    left: (g.left - x.left + h.left) / E.x,
    right: (x.right - g.right + h.right) / E.x
  };
}
const qt = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      x: n,
      y: i,
      placement: o,
      rects: s,
      platform: r,
      elements: a,
      middlewareData: c
    } = e, {
      element: l,
      padding: u = 0
    } = q(t, e) || {};
    if (l == null)
      return {};
    const f = ct(u), p = {
      x: n,
      y: i
    }, d = ye(o), h = xe(d), m = await r.getDimensions(l), v = d === "y", g = v ? "top" : "left", b = v ? "bottom" : "right", w = v ? "clientHeight" : "clientWidth", E = s.reference[h] + s.reference[d] - p[d] - s.floating[h], x = p[d] - s.reference[d], A = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(l));
    let P = A ? A[w] : 0;
    (!P || !await (r.isElement == null ? void 0 : r.isElement(A))) && (P = a.floating[w] || s.floating[h]);
    const D = E / 2 - x / 2, T = P / 2 - m[h] / 2 - 1, C = Y(f[g], T), S = Y(f[b], T), k = C, V = P - m[h] - S, O = P / 2 - m[h] / 2 + D, B = be(k, O, V), H = !c.arrow && F(o) != null && O !== B && s.reference[h] / 2 - (O < k ? C : S) - m[h] / 2 < 0, z = H ? O < k ? O - k : O - V : 0;
    return {
      [d]: p[d] + z,
      data: {
        [d]: B,
        centerOffset: O - B - z,
        ...H && {
          alignmentOffset: z
        }
      },
      reset: H
    };
  }
});
function Xt(t, e, n) {
  return (t ? [...n.filter((o) => F(o) === t), ...n.filter((o) => F(o) !== t)] : n.filter((o) => _(o) === o)).filter((o) => t ? F(o) === t || (e ? se(o) !== o : !1) : !0);
}
const Yt = function(t) {
  return t === void 0 && (t = {}), {
    name: "autoPlacement",
    options: t,
    async fn(e) {
      var n, i, o;
      const {
        rects: s,
        middlewareData: r,
        placement: a,
        platform: c,
        elements: l
      } = e, {
        crossAxis: u = !1,
        alignment: f,
        allowedPlacements: p = De,
        autoAlignment: d = !0,
        ...h
      } = q(t, e), m = f !== void 0 || p === De ? Xt(f || null, d, p) : p, v = await J(e, h), g = ((n = r.autoPlacement) == null ? void 0 : n.index) || 0, b = m[g];
      if (b == null)
        return {};
      const w = at(b, s, await (c.isRTL == null ? void 0 : c.isRTL(l.floating)));
      if (a !== b)
        return {
          reset: {
            placement: m[0]
          }
        };
      const E = [v[_(b)], v[w[0]], v[w[1]]], x = [...((i = r.autoPlacement) == null ? void 0 : i.overflows) || [], {
        placement: b,
        overflows: E
      }], A = m[g + 1];
      if (A)
        return {
          data: {
            index: g + 1,
            overflows: x
          },
          reset: {
            placement: A
          }
        };
      const P = x.map((C) => {
        const S = F(C.placement);
        return [C.placement, S && u ? (
          // Check along the mainAxis and main crossAxis side.
          C.overflows.slice(0, 2).reduce((k, V) => k + V, 0)
        ) : (
          // Check only the mainAxis.
          C.overflows[0]
        ), C.overflows];
      }).sort((C, S) => C[1] - S[1]), T = ((o = P.filter((C) => C[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        F(C[0]) ? 2 : 3
      ).every((S) => S <= 0))[0]) == null ? void 0 : o[0]) || P[0][0];
      return T !== a ? {
        data: {
          index: g + 1,
          overflows: x
        },
        reset: {
          placement: T
        }
      } : {};
    }
  };
}, Zt = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var n, i;
      const {
        placement: o,
        middlewareData: s,
        rects: r,
        initialPlacement: a,
        platform: c,
        elements: l
      } = e, {
        mainAxis: u = !0,
        crossAxis: f = !0,
        fallbackPlacements: p,
        fallbackStrategy: d = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: m = !0,
        ...v
      } = q(t, e);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const g = _(o), b = _(a) === a, w = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), E = p || (b || !m ? [re(a)] : Ut(a));
      !p && h !== "none" && E.push(...Vt(a, m, h, w));
      const x = [a, ...E], A = await J(e, v), P = [];
      let D = ((i = s.flip) == null ? void 0 : i.overflows) || [];
      if (u && P.push(A[g]), f) {
        const k = at(o, r, w);
        P.push(A[k[0]], A[k[1]]);
      }
      if (D = [...D, {
        placement: o,
        overflows: P
      }], !P.every((k) => k <= 0)) {
        var T, C;
        const k = (((T = s.flip) == null ? void 0 : T.index) || 0) + 1, V = x[k];
        if (V)
          return {
            data: {
              index: k,
              overflows: D
            },
            reset: {
              placement: V
            }
          };
        let O = (C = D.filter((B) => B.overflows[0] <= 0).sort((B, H) => B.overflows[1] - H.overflows[1])[0]) == null ? void 0 : C.placement;
        if (!O)
          switch (d) {
            case "bestFit": {
              var S;
              const B = (S = D.map((H) => [H.placement, H.overflows.filter((z) => z > 0).reduce((z, xt) => z + xt, 0)]).sort((H, z) => H[1] - z[1])[0]) == null ? void 0 : S[0];
              B && (O = B);
              break;
            }
            case "initialPlacement":
              O = a;
              break;
          }
        if (o !== O)
          return {
            reset: {
              placement: O
            }
          };
      }
      return {};
    }
  };
};
function Le(t, e) {
  return {
    top: t.top - e.height,
    right: t.right - e.width,
    bottom: t.bottom - e.height,
    left: t.left - e.width
  };
}
function Me(t) {
  return st.some((e) => t[e] >= 0);
}
const Gt = function(t) {
  return t === void 0 && (t = {}), {
    name: "hide",
    options: t,
    async fn(e) {
      const {
        rects: n
      } = e, {
        strategy: i = "referenceHidden",
        ...o
      } = q(t, e);
      switch (i) {
        case "referenceHidden": {
          const s = await J(e, {
            ...o,
            elementContext: "reference"
          }), r = Le(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: r,
              referenceHidden: Me(r)
            }
          };
        }
        case "escaped": {
          const s = await J(e, {
            ...o,
            altBoundary: !0
          }), r = Le(s, n.floating);
          return {
            data: {
              escapedOffsets: r,
              escaped: Me(r)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Qt(t, e) {
  const {
    placement: n,
    platform: i,
    elements: o
  } = t, s = await (i.isRTL == null ? void 0 : i.isRTL(o.floating)), r = _(n), a = F(n), c = le(n) === "y", l = ["left", "top"].includes(r) ? -1 : 1, u = s && c ? -1 : 1, f = q(e, t);
  let {
    mainAxis: p,
    crossAxis: d,
    alignmentAxis: h
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...f
  };
  return a && typeof h == "number" && (d = a === "end" ? h * -1 : h), c ? {
    x: d * u,
    y: p * l
  } : {
    x: p * l,
    y: d * u
  };
}
const Jt = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      var n, i;
      const {
        x: o,
        y: s,
        placement: r,
        middlewareData: a
      } = e, c = await Qt(e, t);
      return r === ((n = a.offset) == null ? void 0 : n.placement) && (i = a.arrow) != null && i.alignmentOffset ? {} : {
        x: o + c.x,
        y: s + c.y,
        data: {
          ...c,
          placement: r
        }
      };
    }
  };
}, en = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: i,
        placement: o
      } = e, {
        mainAxis: s = !0,
        crossAxis: r = !1,
        limiter: a = {
          fn: (v) => {
            let {
              x: g,
              y: b
            } = v;
            return {
              x: g,
              y: b
            };
          }
        },
        ...c
      } = q(t, e), l = {
        x: n,
        y: i
      }, u = await J(e, c), f = le(_(o)), p = rt(f);
      let d = l[p], h = l[f];
      if (s) {
        const v = p === "y" ? "top" : "left", g = p === "y" ? "bottom" : "right", b = d + u[v], w = d - u[g];
        d = be(b, d, w);
      }
      if (r) {
        const v = f === "y" ? "top" : "left", g = f === "y" ? "bottom" : "right", b = h + u[v], w = h - u[g];
        h = be(b, h, w);
      }
      const m = a.fn({
        ...e,
        [p]: d,
        [f]: h
      });
      return {
        ...m,
        data: {
          x: m.x - n,
          y: m.y - i
        }
      };
    }
  };
};
function fe() {
  return typeof window < "u";
}
function G(t) {
  return lt(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function R(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function W(t) {
  var e;
  return (e = (lt(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function lt(t) {
  return fe() ? t instanceof Node || t instanceof R(t).Node : !1;
}
function L(t) {
  return fe() ? t instanceof Element || t instanceof R(t).Element : !1;
}
function $(t) {
  return fe() ? t instanceof HTMLElement || t instanceof R(t).HTMLElement : !1;
}
function Te(t) {
  return !fe() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof R(t).ShadowRoot;
}
function ne(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: i,
    display: o
  } = M(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + i + n) && !["inline", "contents"].includes(o);
}
function tn(t) {
  return ["table", "td", "th"].includes(G(t));
}
function de(t) {
  return [":popover-open", ":modal"].some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
function ue(t) {
  const e = Ee(), n = L(t) ? M(t) : t;
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((i) => (n.willChange || "").includes(i)) || ["paint", "layout", "strict", "content"].some((i) => (n.contain || "").includes(i));
}
function nn(t) {
  let e = N(t);
  for (; $(e) && !Z(e); ) {
    if (ue(e))
      return e;
    if (de(e))
      return null;
    e = N(e);
  }
  return null;
}
function Ee() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Z(t) {
  return ["html", "body", "#document"].includes(G(t));
}
function M(t) {
  return R(t).getComputedStyle(t);
}
function he(t) {
  return L(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.scrollX,
    scrollTop: t.scrollY
  };
}
function N(t) {
  if (G(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    Te(t) && t.host || // Fallback.
    W(t)
  );
  return Te(e) ? e.host : e;
}
function ft(t) {
  const e = N(t);
  return Z(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : $(e) && ne(e) ? e : ft(e);
}
function ee(t, e, n) {
  var i;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const o = ft(t), s = o === ((i = t.ownerDocument) == null ? void 0 : i.body), r = R(o);
  if (s) {
    const a = on(r);
    return e.concat(r, r.visualViewport || [], ne(o) ? o : [], a && n ? ee(a) : []);
  }
  return e.concat(o, ee(o, [], n));
}
function on(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function dt(t) {
  const e = M(t);
  let n = parseFloat(e.width) || 0, i = parseFloat(e.height) || 0;
  const o = $(t), s = o ? t.offsetWidth : n, r = o ? t.offsetHeight : i, a = oe(n) !== s || oe(i) !== r;
  return a && (n = s, i = r), {
    width: n,
    height: i,
    $: a
  };
}
function Pe(t) {
  return L(t) ? t : t.contextElement;
}
function X(t) {
  const e = Pe(t);
  if (!$(e))
    return U(1);
  const n = e.getBoundingClientRect(), {
    width: i,
    height: o,
    $: s
  } = dt(e);
  let r = (s ? oe(n.width) : n.width) / i, a = (s ? oe(n.height) : n.height) / o;
  return (!r || !Number.isFinite(r)) && (r = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: r,
    y: a
  };
}
const sn = /* @__PURE__ */ U(0);
function ut(t) {
  const e = R(t);
  return !Ee() || !e.visualViewport ? sn : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function rn(t, e, n) {
  return e === void 0 && (e = !1), !n || e && n !== R(t) ? !1 : e;
}
function K(t, e, n, i) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const o = t.getBoundingClientRect(), s = Pe(t);
  let r = U(1);
  e && (i ? L(i) && (r = X(i)) : r = X(t));
  const a = rn(s, n, i) ? ut(s) : U(0);
  let c = (o.left + a.x) / r.x, l = (o.top + a.y) / r.y, u = o.width / r.x, f = o.height / r.y;
  if (s) {
    const p = R(s), d = i && L(i) ? R(i) : i;
    let h = p, m = h.frameElement;
    for (; m && i && d !== h; ) {
      const v = X(m), g = m.getBoundingClientRect(), b = M(m), w = g.left + (m.clientLeft + parseFloat(b.paddingLeft)) * v.x, E = g.top + (m.clientTop + parseFloat(b.paddingTop)) * v.y;
      c *= v.x, l *= v.y, u *= v.x, f *= v.y, c += w, l += E, h = R(m), m = h.frameElement;
    }
  }
  return ae({
    width: u,
    height: f,
    x: c,
    y: l
  });
}
function an(t) {
  let {
    elements: e,
    rect: n,
    offsetParent: i,
    strategy: o
  } = t;
  const s = o === "fixed", r = W(i), a = e ? de(e.floating) : !1;
  if (i === r || a && s)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = U(1);
  const u = U(0), f = $(i);
  if ((f || !f && !s) && ((G(i) !== "body" || ne(r)) && (c = he(i)), $(i))) {
    const p = K(i);
    l = X(i), u.x = p.x + i.clientLeft, u.y = p.y + i.clientTop;
  }
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - c.scrollLeft * l.x + u.x,
    y: n.y * l.y - c.scrollTop * l.y + u.y
  };
}
function cn(t) {
  return Array.from(t.getClientRects());
}
function ht(t) {
  return K(W(t)).left + he(t).scrollLeft;
}
function ln(t) {
  const e = W(t), n = he(t), i = t.ownerDocument.body, o = j(e.scrollWidth, e.clientWidth, i.scrollWidth, i.clientWidth), s = j(e.scrollHeight, e.clientHeight, i.scrollHeight, i.clientHeight);
  let r = -n.scrollLeft + ht(t);
  const a = -n.scrollTop;
  return M(i).direction === "rtl" && (r += j(e.clientWidth, i.clientWidth) - o), {
    width: o,
    height: s,
    x: r,
    y: a
  };
}
function fn(t, e) {
  const n = R(t), i = W(t), o = n.visualViewport;
  let s = i.clientWidth, r = i.clientHeight, a = 0, c = 0;
  if (o) {
    s = o.width, r = o.height;
    const l = Ee();
    (!l || l && e === "fixed") && (a = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: s,
    height: r,
    x: a,
    y: c
  };
}
function dn(t, e) {
  const n = K(t, !0, e === "fixed"), i = n.top + t.clientTop, o = n.left + t.clientLeft, s = $(t) ? X(t) : U(1), r = t.clientWidth * s.x, a = t.clientHeight * s.y, c = o * s.x, l = i * s.y;
  return {
    width: r,
    height: a,
    x: c,
    y: l
  };
}
function Be(t, e, n) {
  let i;
  if (e === "viewport")
    i = fn(t, n);
  else if (e === "document")
    i = ln(W(t));
  else if (L(e))
    i = dn(e, n);
  else {
    const o = ut(t);
    i = {
      ...e,
      x: e.x - o.x,
      y: e.y - o.y
    };
  }
  return ae(i);
}
function pt(t, e) {
  const n = N(t);
  return n === e || !L(n) || Z(n) ? !1 : M(n).position === "fixed" || pt(n, e);
}
function un(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let i = ee(t, [], !1).filter((a) => L(a) && G(a) !== "body"), o = null;
  const s = M(t).position === "fixed";
  let r = s ? N(t) : t;
  for (; L(r) && !Z(r); ) {
    const a = M(r), c = ue(r);
    !c && a.position === "fixed" && (o = null), (s ? !c && !o : !c && a.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || ne(r) && !c && pt(t, r)) ? i = i.filter((u) => u !== r) : o = a, r = N(r);
  }
  return e.set(t, i), i;
}
function hn(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: i,
    strategy: o
  } = t;
  const r = [...n === "clippingAncestors" ? de(e) ? [] : un(e, this._c) : [].concat(n), i], a = r[0], c = r.reduce((l, u) => {
    const f = Be(e, u, o);
    return l.top = j(f.top, l.top), l.right = Y(f.right, l.right), l.bottom = Y(f.bottom, l.bottom), l.left = j(f.left, l.left), l;
  }, Be(e, a, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function pn(t) {
  const {
    width: e,
    height: n
  } = dt(t);
  return {
    width: e,
    height: n
  };
}
function mn(t, e, n) {
  const i = $(e), o = W(e), s = n === "fixed", r = K(t, !0, s, e);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = U(0);
  if (i || !i && !s)
    if ((G(e) !== "body" || ne(o)) && (a = he(e)), i) {
      const f = K(e, !0, s, e);
      c.x = f.x + e.clientLeft, c.y = f.y + e.clientTop;
    } else o && (c.x = ht(o));
  const l = r.left + a.scrollLeft - c.x, u = r.top + a.scrollTop - c.y;
  return {
    x: l,
    y: u,
    width: r.width,
    height: r.height
  };
}
function me(t) {
  return M(t).position === "static";
}
function He(t, e) {
  return !$(t) || M(t).position === "fixed" ? null : e ? e(t) : t.offsetParent;
}
function mt(t, e) {
  const n = R(t);
  if (de(t))
    return n;
  if (!$(t)) {
    let o = N(t);
    for (; o && !Z(o); ) {
      if (L(o) && !me(o))
        return o;
      o = N(o);
    }
    return n;
  }
  let i = He(t, e);
  for (; i && tn(i) && me(i); )
    i = He(i, e);
  return i && Z(i) && me(i) && !ue(i) ? n : i || nn(t) || n;
}
const gn = async function(t) {
  const e = this.getOffsetParent || mt, n = this.getDimensions, i = await n(t.floating);
  return {
    reference: mn(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      width: i.width,
      height: i.height
    }
  };
};
function vn(t) {
  return M(t).direction === "rtl";
}
const we = {
  convertOffsetParentRelativeRectToViewportRelativeRect: an,
  getDocumentElement: W,
  getClippingRect: hn,
  getOffsetParent: mt,
  getElementRects: gn,
  getClientRects: cn,
  getDimensions: pn,
  getScale: X,
  isElement: L,
  isRTL: vn
};
function bn(t, e) {
  let n = null, i;
  const o = W(t);
  function s() {
    var a;
    clearTimeout(i), (a = n) == null || a.disconnect(), n = null;
  }
  function r(a, c) {
    a === void 0 && (a = !1), c === void 0 && (c = 1), s();
    const {
      left: l,
      top: u,
      width: f,
      height: p
    } = t.getBoundingClientRect();
    if (a || e(), !f || !p)
      return;
    const d = ie(u), h = ie(o.clientWidth - (l + f)), m = ie(o.clientHeight - (u + p)), v = ie(l), b = {
      rootMargin: -d + "px " + -h + "px " + -m + "px " + -v + "px",
      threshold: j(0, Y(1, c)) || 1
    };
    let w = !0;
    function E(x) {
      const A = x[0].intersectionRatio;
      if (A !== c) {
        if (!w)
          return r();
        A ? r(!1, A) : i = setTimeout(() => {
          r(!1, 1e-7);
        }, 1e3);
      }
      w = !1;
    }
    try {
      n = new IntersectionObserver(E, {
        ...b,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(E, b);
    }
    n.observe(t);
  }
  return r(!0), s;
}
function wn(t, e, n, i) {
  i === void 0 && (i = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: r = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = i, l = Pe(t), u = o || s ? [...l ? ee(l) : [], ...ee(e)] : [];
  u.forEach((g) => {
    o && g.addEventListener("scroll", n, {
      passive: !0
    }), s && g.addEventListener("resize", n);
  });
  const f = l && a ? bn(l, n) : null;
  let p = -1, d = null;
  r && (d = new ResizeObserver((g) => {
    let [b] = g;
    b && b.target === l && d && (d.unobserve(e), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var w;
      (w = d) == null || w.observe(e);
    })), n();
  }), l && !c && d.observe(l), d.observe(e));
  let h, m = c ? K(t) : null;
  c && v();
  function v() {
    const g = K(t);
    m && (g.x !== m.x || g.y !== m.y || g.width !== m.width || g.height !== m.height) && n(), m = g, h = requestAnimationFrame(v);
  }
  return n(), () => {
    var g;
    u.forEach((b) => {
      o && b.removeEventListener("scroll", n), s && b.removeEventListener("resize", n);
    }), f?.(), (g = d) == null || g.disconnect(), d = null, c && cancelAnimationFrame(h);
  };
}
const xn = Jt, yn = Yt, En = en, Ie = Zt, Pn = Gt, Cn = qt, An = (t, e, n) => {
  const i = /* @__PURE__ */ new Map(), o = {
    platform: we,
    ...n
  }, s = {
    ...o.platform,
    _c: i
  };
  return Kt(t, e, {
    ...o,
    platform: s
  });
};
function kn(t) {
  return On(t);
}
function ge(t) {
  return t.assignedSlot ? t.assignedSlot : t.parentNode instanceof ShadowRoot ? t.parentNode.host : t.parentNode;
}
function On(t) {
  for (let e = t; e; e = ge(e))
    if (e instanceof Element && getComputedStyle(e).display === "none")
      return null;
  for (let e = ge(t); e; e = ge(e)) {
    if (!(e instanceof Element))
      continue;
    const n = getComputedStyle(e);
    if (n.display !== "contents" && (n.position !== "static" || ue(n) || e.tagName === "BODY"))
      return e;
  }
  return null;
}
(function() {
  if (Xe()) {
    const e = we.getOffsetParent;
    we.getOffsetParent = (n) => e(n, kn);
  }
})();
function Fe(t) {
  const e = window.devicePixelRatio || 1;
  return Math.round(t * e) / e;
}
const gt = (
  /* we export arrow function to allow us to spy on it during testing */
  async (t, { referenceEl: e, floatingEl: n, overlayPositioning: i = "absolute", placement: o, flipDisabled: s, flipPlacements: r, offsetDistance: a, offsetSkidding: c, arrowEl: l, type: u }) => {
    if (!e || !n)
      return null;
    const f = Ct(n) === "rtl", { x: p, y: d, placement: h, strategy: m, middlewareData: v } = await An(e, n, {
      strategy: i,
      placement: o === "auto" || o === "auto-start" || o === "auto-end" ? void 0 : _e(o, f),
      middleware: Dn({
        placement: o,
        flipDisabled: s,
        flipPlacements: r?.map((x) => _e(x, f)),
        offsetDistance: a,
        offsetSkidding: c,
        arrowEl: l,
        type: u
      })
    });
    if (l && v.arrow) {
      const { x, y: A } = v.arrow, P = h.split("-")[0], D = x != null ? "left" : "top", T = Tn[P], C = { left: "", top: "", bottom: "", right: "" };
      "floatingLayout" in t && (t.floatingLayout = P === "left" || P === "right" ? "horizontal" : "vertical"), Object.assign(l.style, {
        ...C,
        [D]: `${D == "left" ? x : A}px`,
        [P]: "100%",
        transform: T
      });
    }
    const b = v.hide?.referenceHidden ? "hidden" : null, w = b ? "none" : null;
    n.setAttribute(Rn, h);
    const { open: E } = t;
    Object.assign(n.style, {
      visibility: b,
      pointerEvents: w,
      position: m,
      transform: E ? `translate(${Fe(p)}px,${Fe(d)}px)` : "",
      top: 0,
      left: 0
    });
  }
), Rn = "data-placement", $e = [
  "top",
  "bottom",
  "right",
  "left",
  "top-start",
  "top-end",
  "bottom-start",
  "bottom-end",
  "right-start",
  "right-end",
  "left-start",
  "left-end",
  "leading",
  "trailing",
  "leading-start",
  "leading-end",
  "trailing-start",
  "trailing-end"
], fi = "bottom-end", ze = {
  animation: "calcite-floating-ui-anim",
  animationActive: "calcite-floating-ui-anim--active",
  arrow: "calcite-floating-ui-arrow",
  arrowStroke: "calcite-floating-ui-arrow__stroke"
};
function Dn({ placement: t, flipDisabled: e, flipPlacements: n, offsetDistance: i, offsetSkidding: o, arrowEl: s, type: r }) {
  const a = [En(), Pn()];
  if (r === "menu")
    return [
      ...a,
      Ie({
        fallbackPlacements: n || ["top-start", "top", "top-end", "bottom-start", "bottom", "bottom-end"]
      })
    ];
  if (r === "popover" || r === "tooltip") {
    const c = [
      ...a,
      xn({
        mainAxis: typeof i == "number" ? i : 0,
        crossAxis: typeof o == "number" ? o : 0
      })
    ];
    return t === "auto" || t === "auto-start" || t === "auto-end" ? c.push(yn({ alignment: t === "auto-start" ? "start" : t === "auto-end" ? "end" : null })) : e || c.push(Ie(n ? { fallbackPlacements: n } : {})), s && c.push(Cn({
      element: s
    })), c;
  }
  return [];
}
function Sn(t, e) {
  const n = t.filter((i) => $e.includes(i));
  return n.length !== t.length && console.warn(`${e.tagName}: Invalid value found in: flipPlacements. Try any of these: ${$e.map((i) => `"${i}"`).join(", ").trim()}`, { el: e }), n;
}
function _e(t, e = !1) {
  const n = ["left", "right"];
  return e && n.reverse(), t.replace(/leading/gi, n[0]).replace(/trailing/gi, n[1]);
}
async function Ln(t, e, n = !1) {
  if (!t.open || !e.floatingEl || !e.referenceEl)
    return;
  if (!te.get(t))
    return vt(t, e.referenceEl, e.floatingEl);
  await (n ? Mn(t) : gt)(t, e);
}
function Mn(t) {
  let e = ce.get(t);
  return e || (e = Lt(gt, Ce.reposition, {
    leading: !0,
    maxWait: Ce.reposition
  }), ce.set(t, e), e);
}
const Tn = {
  top: "",
  left: "rotate(-90deg)",
  bottom: "rotate(180deg)",
  right: "rotate(90deg)"
}, te = /* @__PURE__ */ new WeakMap(), ce = /* @__PURE__ */ new WeakMap();
async function vt(t, e, n) {
  if (!n.isConnected)
    return;
  const i = Xe() ? wn : (r, a, c) => (c(), () => {
  });
  te.set(t, { state: "pending" });
  let o;
  const s = i(
    e,
    n,
    // callback is invoked immediately
    () => {
      const r = t.reposition();
      o || (o = r);
    }
  );
  return te.set(t, { state: "active", cleanUp: s }), o;
}
async function Bn(t, e, n) {
  if (!(!n || !e) && (bt(t, e, n), Object.assign(n.style, {
    visibility: "hidden",
    pointerEvents: "none",
    // initial positioning based on https://floating-ui.com/docs/computePosition#initial-layout
    position: t.overlayPositioning
  }), !!t.open))
    return vt(t, e, n);
}
function bt(t, e, n) {
  if (!n || !e)
    return;
  const i = te.get(t);
  i?.state === "active" && i.cleanUp(), te.delete(t), ce.get(t)?.cancel(), ce.delete(t);
}
const We = 4, Hn = Math.ceil(Math.hypot(We, We));
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */
const In = (t, e) => {
  const n = t.level ? `h${t.level}` : "div";
  return delete t.level, y(n, { class: t.class, key: t.key }, e);
};
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */
const Ue = {
  arrow: "calcite-floating-ui-arrow",
  arrowStroke: "calcite-floating-ui-arrow__stroke"
}, Fn = {
  width: 12,
  height: 6,
  strokeWidth: 1
}, $n = ({ floatingLayout: t, key: e, ref: n }) => {
  const { width: i, height: o, strokeWidth: s } = Fn, r = i / 2, a = t === "vertical", c = `M0,0 H${i} L${i - r},${o} Q${r},${o} ${r},${o} Z`;
  return y(
    "svg",
    { "aria-hidden": "true", class: Ue.arrow, height: i, key: e, ref: n, viewBox: `0 0 ${i} ${i + (a ? 0 : s)}`, width: i + (a ? s : 0) },
    s > 0 && y("path", { class: Ue.arrowStroke, d: c, fill: "none", "stroke-width": s + 1 }),
    y("path", { d: c, stroke: "none" })
  );
};
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */
class zn {
  constructor() {
    this.registeredElements = /* @__PURE__ */ new Map(), this.registeredElementCount = 0, this.queryPopover = (e) => {
      const { registeredElements: n } = this, i = e.find((o) => n.has(o));
      return n.get(i);
    }, this.togglePopovers = (e) => {
      const n = e.composedPath(), i = this.queryPopover(n);
      i && !i.triggerDisabled && (i.open = !i.open), Array.from(this.registeredElements.values()).filter((o) => o !== i && o.autoClose && o.open && !n.includes(o)).forEach((o) => o.open = !1);
    }, this.keyDownHandler = (e) => {
      e.defaultPrevented || (e.key === "Escape" ? this.closeAllPopovers() : Qe(e.key) && this.togglePopovers(e));
    }, this.clickHandler = (e) => {
      Ot(e) || this.togglePopovers(e);
    };
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  registerElement(e, n) {
    this.registeredElementCount++, this.registeredElements.set(e, n), this.registeredElementCount === 1 && this.addListeners();
  }
  unregisterElement(e) {
    this.registeredElements.delete(e) && this.registeredElementCount--, this.registeredElementCount === 0 && this.removeListeners();
  }
  closeAllPopovers() {
    Array.from(this.registeredElements.values()).forEach((e) => e.open = !1);
  }
  addListeners() {
    window.addEventListener("click", this.clickHandler), window.addEventListener("keydown", this.keyDownHandler);
  }
  removeListeners() {
    window.removeEventListener("click", this.clickHandler), window.removeEventListener("keydown", this.keyDownHandler);
  }
}
const I = {
  container: "container",
  imageContainer: "image-container",
  closeButtonContainer: "close-button-container",
  closeButton: "close-button",
  content: "content",
  hasHeader: "has-header",
  header: "header",
  headerContainer: "headerContainer",
  headerContent: "header-content",
  heading: "heading"
}, _n = "auto", Ne = "aria-controls", Ve = "aria-expanded", Wn = ":host{--calcite-floating-ui-z-index:var(--calcite-popover-z-index, var(--calcite-z-index-popup));display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index)}.calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:inset, left, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-z-index);border-radius:0.25rem}:host([data-placement^=bottom]) .calcite-floating-ui-anim{inset-block-start:-5px}:host([data-placement^=top]) .calcite-floating-ui-anim{inset-block-start:5px}:host([data-placement^=left]) .calcite-floating-ui-anim{left:5px}:host([data-placement^=right]) .calcite-floating-ui-anim{left:-5px}:host([data-placement]) .calcite-floating-ui-anim--active{opacity:1;inset-block:0;left:0}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}.calcite-floating-ui-arrow{pointer-events:none;position:absolute;z-index:calc(var(--calcite-z-index) * -1);fill:var(--calcite-color-foreground-1)}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-color-border-3)}:host([scale=s]) .heading{padding-inline:0.75rem;padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) .heading{padding-inline:1rem;padding-block:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) .heading{padding-inline:1.25rem;padding-block:1rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host{pointer-events:none}:host([open]){pointer-events:initial}.calcite-floating-ui-anim{border-width:1px;border-style:solid;background-color:var(--calcite-popover-background-color, var(--calcite-color-foreground-1));border-color:var(--calcite-popover-border-color, var(--calcite-color-border-3));border-radius:var(--calcite-popover-corner-radius, var(--calcite-corner-radius-round))}.calcite-floating-ui-arrow{fill:var(--calcite-popover-background-color, var(--calcite-color-foreground-1))}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-popover-border-color, var(--calcite-color-border-3))}.header{display:flex;flex:1 1 auto;align-items:stretch;justify-content:flex-start;border-width:0px;border-block-end-width:1px;border-style:solid;border-block-end-color:var(--calcite-popover-border-color, var(--calcite-color-border-3))}.heading{margin:0px;display:block;flex:1 1 auto;align-self:center;white-space:normal;font-weight:var(--calcite-font-weight-medium);word-wrap:break-word;word-break:break-word;color:var(--calcite-popover-text-color, var(--calcite-color-text-1))}.headerContainer{position:relative;display:flex;block-size:100%;flex-direction:row;flex-wrap:nowrap;border-radius:0.25rem;color:var(--calcite-popover-text-color, var(--calcite-color-text-1))}.headerContainer.has-header{flex-direction:column}.content{display:flex;block-size:100%;inline-size:100%;flex-direction:column;flex-wrap:nowrap;align-self:center;word-wrap:break-word;word-break:break-word}.close-button-container{display:flex;overflow:hidden;flex:0 0 auto;border-start-end-radius:var(--calcite-popover-corner-radius, var(--calcite-corner-radius-round));border-end-end-radius:var(--calcite-popover-corner-radius, var(--calcite-corner-radius-round));--calcite-action-corner-radius-start-end:var(--calcite-popover-corner-radius, var(--calcite-corner-radius-sharp));--calcite-action-corner-radius-end-end:var(--calcite-popover-corner-radius, var(--calcite-corner-radius-sharp))}::slotted(calcite-panel),::slotted(calcite-flow){block-size:100%}:host([hidden]){display:none}[hidden]{display:none}", Un = Wn, je = new zn(), Nn = /* @__PURE__ */ Ye(class extends Ze {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.calcitePopoverBeforeClose = Q(this, "calcitePopoverBeforeClose", 6), this.calcitePopoverClose = Q(this, "calcitePopoverClose", 6), this.calcitePopoverBeforeOpen = Q(this, "calcitePopoverBeforeOpen", 6), this.calcitePopoverOpen = Q(this, "calcitePopoverOpen", 6), this.mutationObserver = $t("mutation", () => this.updateFocusTrapElements()), this.guid = `calcite-popover-${Ge()}`, this.openTransitionProp = "opacity", this.hasLoaded = !1, this.setTransitionEl = (e) => {
      this.transitionEl = e;
    }, this.setFilteredPlacements = () => {
      const { el: e, flipPlacements: n } = this;
      this.filteredFlipPlacements = n ? Sn(n, e) : null;
    }, this.setUpReferenceElement = (e = !0) => {
      this.removeReferences(), this.effectiveReferenceElement = this.getReferenceElement(), Bn(this, this.effectiveReferenceElement, this.el);
      const { el: n, referenceElement: i, effectiveReferenceElement: o } = this;
      e && i && !o && console.warn(`${n.tagName}: reference-element id "${i}" was not found.`, {
        el: n
      }), this.addReferences();
    }, this.getId = () => this.el.id || this.guid, this.setExpandedAttr = () => {
      const { effectiveReferenceElement: e, open: n } = this;
      e && "setAttribute" in e && e.setAttribute(Ve, ve(n));
    }, this.addReferences = () => {
      const { effectiveReferenceElement: e } = this;
      if (!e)
        return;
      const n = this.getId();
      "setAttribute" in e && e.setAttribute(Ne, n), je.registerElement(e, this.el), this.setExpandedAttr();
    }, this.removeReferences = () => {
      const { effectiveReferenceElement: e } = this;
      e && ("removeAttribute" in e && (e.removeAttribute(Ne), e.removeAttribute(Ve)), je.unregisterElement(e));
    }, this.hide = () => {
      this.open = !1;
    }, this.storeArrowEl = (e) => {
      this.arrowEl = e, this.reposition(!0);
    }, this.autoClose = !1, this.closable = !1, this.flipDisabled = !1, this.focusTrapDisabled = !1, this.pointerDisabled = !1, this.flipPlacements = void 0, this.heading = void 0, this.headingLevel = void 0, this.label = void 0, this.messageOverrides = void 0, this.messages = void 0, this.offsetDistance = Hn, this.offsetSkidding = 0, this.open = !1, this.overlayPositioning = "absolute", this.placement = _n, this.referenceElement = void 0, this.scale = "m", this.triggerDisabled = !1, this.effectiveLocale = "", this.floatingLayout = "vertical", this.effectiveReferenceElement = void 0, this.defaultMessages = void 0;
  }
  handleFocusTrapDisabled(e) {
    this.open && (e ? pe(this) : Ae(this));
  }
  flipPlacementsHandler() {
    this.setFilteredPlacements(), this.reposition(!0);
  }
  onMessagesChange() {
  }
  offsetDistanceOffsetHandler() {
    this.reposition(!0);
  }
  offsetSkiddingHandler() {
    this.reposition(!0);
  }
  openHandler() {
    ke(this), this.reposition(!0), this.setExpandedAttr();
  }
  overlayPositioningHandler() {
    this.reposition(!0);
  }
  placementHandler() {
    this.reposition(!0);
  }
  referenceElementHandler() {
    this.setUpReferenceElement(), this.reposition(!0);
  }
  effectiveLocaleChange() {
    Bt(this, this.effectiveLocale);
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    this.mutationObserver?.observe(this.el, { childList: !0, subtree: !0 }), this.setFilteredPlacements(), Dt(this), Ht(this), Mt(this), requestAnimationFrame(() => this.setUpReferenceElement(this.hasLoaded));
  }
  async componentWillLoad() {
    await It(this), Je(this);
  }
  componentDidLoad() {
    et(this), this.referenceElement && !this.effectiveReferenceElement && this.setUpReferenceElement(), this.open && ke(this), this.hasLoaded = !0;
  }
  disconnectedCallback() {
    this.mutationObserver?.disconnect(), this.removeReferences(), St(this), Ft(this), bt(this, this.effectiveReferenceElement, this.el), pe(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /**
   * Updates the position of the component.
   *
   * @param delayed
   */
  async reposition(e = !1) {
    const { el: n, effectiveReferenceElement: i, placement: o, overlayPositioning: s, flipDisabled: r, filteredFlipPlacements: a, offsetDistance: c, offsetSkidding: l, arrowEl: u } = this;
    return Ln(this, {
      floatingEl: n,
      referenceEl: i,
      overlayPositioning: s,
      placement: o,
      flipDisabled: r,
      flipPlacements: a,
      offsetDistance: c,
      offsetSkidding: l,
      arrowEl: u,
      type: "popover"
    }, e);
  }
  /**
   * Sets focus on the component's first focusable element.
   */
  async setFocus() {
    await tt(this), yt(this.el), At(this.el);
  }
  /**
   * Updates the element(s) that are used within the focus-trap of the component.
   */
  async updateFocusTrapElements() {
    Tt(this);
  }
  getReferenceElement() {
    const { referenceElement: e, el: n } = this;
    return (typeof e == "string" ? kt(n, { id: e }) : e) || null;
  }
  onBeforeOpen() {
    this.calcitePopoverBeforeOpen.emit();
  }
  onOpen() {
    this.calcitePopoverOpen.emit(), Ae(this);
  }
  onBeforeClose() {
    this.calcitePopoverBeforeClose.emit();
  }
  onClose() {
    this.calcitePopoverClose.emit(), pe(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderCloseButton() {
    const { messages: e, closable: n } = this;
    return n ? y("div", { class: I.closeButtonContainer, key: I.closeButtonContainer }, y("calcite-action", { appearance: "transparent", class: I.closeButton, onClick: this.hide, ref: (i) => this.closeButtonEl = i, scale: this.scale, text: e.close }, y("calcite-icon", { icon: "x", scale: zt(this.scale) }))) : null;
  }
  renderHeader() {
    const { heading: e, headingLevel: n } = this, i = e ? y(In, { class: I.heading, level: n }, e) : null;
    return i ? y("div", { class: I.header, key: I.header }, i, this.renderCloseButton()) : null;
  }
  render() {
    const { effectiveReferenceElement: e, heading: n, label: i, open: o, pointerDisabled: s, floatingLayout: r } = this, a = e && o, c = !a, l = s ? null : y($n, { floatingLayout: r, key: "floating-arrow", ref: this.storeArrowEl });
    return y(Et, { key: "a563d48090d6e6c0c138023e169667834f657c4c", "aria-hidden": ve(c), "aria-label": i, "aria-live": "polite", "calcite-hydrated-hidden": c, id: this.getId(), role: "dialog" }, y("div", { key: "73053dbdce2cfc68fcd42667089d611e81010955", class: {
      [I.container]: !0,
      [ze.animation]: !0,
      [ze.animationActive]: a
    }, ref: this.setTransitionEl }, l, y("div", { key: "1fbcd45ee42b10a67881ced74db2db051231c94d", class: {
      [I.hasHeader]: !!n,
      [I.headerContainer]: !0
    } }, this.renderHeader(), y("div", { key: "522abe801b98787863aac14d990b948d2d286156", class: I.content }, y("slot", { key: "022a8f690288acdbac4ec1b3eccf807ffe382d5d" })), n ? null : this.renderCloseButton())));
  }
  static get assetsDirs() {
    return ["assets"];
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      focusTrapDisabled: ["handleFocusTrapDisabled"],
      flipPlacements: ["flipPlacementsHandler"],
      messageOverrides: ["onMessagesChange"],
      offsetDistance: ["offsetDistanceOffsetHandler"],
      offsetSkidding: ["offsetSkiddingHandler"],
      open: ["openHandler"],
      overlayPositioning: ["overlayPositioningHandler"],
      placement: ["placementHandler"],
      referenceElement: ["referenceElementHandler"],
      effectiveLocale: ["effectiveLocaleChange"]
    };
  }
  static get style() {
    return Un;
  }
}, [1, "calcite-popover", {
  autoClose: [516, "auto-close"],
  closable: [516],
  flipDisabled: [516, "flip-disabled"],
  focusTrapDisabled: [516, "focus-trap-disabled"],
  pointerDisabled: [516, "pointer-disabled"],
  flipPlacements: [16],
  heading: [1],
  headingLevel: [514, "heading-level"],
  label: [1],
  messageOverrides: [1040],
  messages: [1040],
  offsetDistance: [514, "offset-distance"],
  offsetSkidding: [514, "offset-skidding"],
  open: [1540],
  overlayPositioning: [513, "overlay-positioning"],
  placement: [513],
  referenceElement: [1, "reference-element"],
  scale: [513],
  triggerDisabled: [516, "trigger-disabled"],
  effectiveLocale: [32],
  floatingLayout: [32],
  effectiveReferenceElement: [32],
  defaultMessages: [32],
  reposition: [64],
  setFocus: [64],
  updateFocusTrapElements: [64]
}, void 0, {
  focusTrapDisabled: ["handleFocusTrapDisabled"],
  flipPlacements: ["flipPlacementsHandler"],
  messageOverrides: ["onMessagesChange"],
  offsetDistance: ["offsetDistanceOffsetHandler"],
  offsetSkidding: ["offsetSkiddingHandler"],
  open: ["openHandler"],
  overlayPositioning: ["overlayPositioningHandler"],
  placement: ["placementHandler"],
  referenceElement: ["referenceElementHandler"],
  effectiveLocale: ["effectiveLocaleChange"]
}]);
function wt() {
  if (typeof customElements > "u")
    return;
  ["calcite-popover", "calcite-action", "calcite-icon", "calcite-loader"].forEach((e) => {
    switch (e) {
      case "calcite-popover":
        customElements.get(e) || customElements.define(e, Nn);
        break;
      case "calcite-action":
        customElements.get(e) || nt();
        break;
      case "calcite-icon":
        customElements.get(e) || it();
        break;
      case "calcite-loader":
        customElements.get(e) || ot();
        break;
    }
  });
}
wt();
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */
const Ke = {
  menu: "menu",
  defaultTrigger: "default-trigger"
}, qe = {
  tooltip: "tooltip",
  trigger: "trigger"
}, Vn = {
  menu: "ellipsis"
}, jn = "data-active", Kn = ":host{box-sizing:border-box;display:flex;flex-direction:column;font-size:var(--calcite-font-size-1)}::slotted(calcite-action-group:not(:last-of-type)){border-block-end-width:var(--calcite-border-width-sm)}.default-trigger{position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}slot[name=trigger]::slotted(calcite-action),calcite-action::slotted([slot=trigger]){position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}.menu{display:flex;max-block-size:45vh;flex-direction:column;flex-wrap:nowrap;overflow-y:auto;overflow-x:hidden;outline:2px solid transparent;outline-offset:2px;gap:var(--calcite-action-menu-items-space, 0)}:host([hidden]){display:none}[hidden]{display:none}", qn = Kn, Xn = ["ArrowUp", "ArrowDown", "End", "Home"], Yn = /* @__PURE__ */ Ye(class extends Ze {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.calciteActionMenuOpen = Q(this, "calciteActionMenuOpen", 6), this.actionElements = [], this.guid = `calcite-action-menu-${Ge()}`, this.menuId = `${this.guid}-menu`, this.menuButtonId = `${this.guid}-menu-button`, this.connectMenuButtonEl = () => {
      const { menuButtonId: e, menuId: n, open: i, label: o } = this, s = this.slottedMenuButtonEl || this.defaultMenuButtonEl;
      this.menuButtonEl !== s && (this.disconnectMenuButtonEl(), this.menuButtonEl = s, this.setTooltipReferenceElement(), s && (s.active = i, s.setAttribute("aria-controls", n), s.setAttribute("aria-expanded", ve(i)), s.setAttribute("aria-haspopup", "true"), s.id || (s.id = e), s.label || (s.label = o), s.text || (s.text = o), s.addEventListener("click", this.menuButtonClick), s.addEventListener("keydown", this.menuButtonKeyDown)));
    }, this.disconnectMenuButtonEl = () => {
      const { menuButtonEl: e } = this;
      e && (e.removeEventListener("click", this.menuButtonClick), e.removeEventListener("keydown", this.menuButtonKeyDown));
    }, this.setMenuButtonEl = (e) => {
      const n = e.target.assignedElements({
        flatten: !0
      }).filter((i) => i?.matches("calcite-action"));
      this.slottedMenuButtonEl = n[0], this.connectMenuButtonEl();
    }, this.setDefaultMenuButtonEl = (e) => {
      this.defaultMenuButtonEl = e, this.connectMenuButtonEl();
    }, this.handleCalciteActionClick = () => {
      this.open = !1, this.setFocus();
    }, this.menuButtonClick = () => {
      this.toggleOpen();
    }, this.updateTooltip = (e) => {
      const n = e.target.assignedElements({
        flatten: !0
      }).filter((i) => i?.matches("calcite-tooltip"));
      this.tooltipEl = n[0], this.setTooltipReferenceElement();
    }, this.setTooltipReferenceElement = () => {
      const { tooltipEl: e, expanded: n, menuButtonEl: i, open: o } = this;
      e && (e.referenceElement = !n && !o ? i : null);
    }, this.updateAction = (e, n) => {
      const { guid: i, activeMenuItemIndex: o } = this, s = `${i}-action-${n}`;
      e.tabIndex = -1, e.setAttribute("role", "menuitem"), e.id || (e.id = s), e.toggleAttribute(jn, n === o);
    }, this.updateActions = (e) => {
      e?.forEach(this.updateAction);
    }, this.handleDefaultSlotChange = (e) => {
      const n = e.target.assignedElements({
        flatten: !0
      }).reduce((i, o) => o?.matches("calcite-action") ? (i.push(o), i) : o?.matches("calcite-action-group") ? i.concat(Array.from(o.querySelectorAll("calcite-action"))) : i, []);
      this.actionElements = n.filter((i) => !i.disabled && !i.hidden);
    }, this.menuButtonKeyDown = (e) => {
      const { key: n } = e, { actionElements: i, activeMenuItemIndex: o, open: s } = this;
      if (i.length) {
        if (Qe(n)) {
          if (e.preventDefault(), !s) {
            this.toggleOpen();
            return;
          }
          const r = i[o];
          r ? r.click() : this.toggleOpen(!1);
        }
        if (n === "Tab") {
          this.open = !1;
          return;
        }
        if (n === "Escape") {
          this.toggleOpen(!1), e.preventDefault();
          return;
        }
        this.handleActionNavigation(e, n, i);
      }
    }, this.handleActionNavigation = (e, n, i) => {
      if (!this.isValidKey(n, Xn))
        return;
      if (e.preventDefault(), !this.open) {
        this.toggleOpen(), (n === "Home" || n === "ArrowDown") && (this.activeMenuItemIndex = 0), (n === "End" || n === "ArrowUp") && (this.activeMenuItemIndex = i.length - 1);
        return;
      }
      n === "Home" && (this.activeMenuItemIndex = 0), n === "End" && (this.activeMenuItemIndex = i.length - 1);
      const o = this.activeMenuItemIndex;
      n === "ArrowUp" && (this.activeMenuItemIndex = Oe(Math.max(o - 1, -1), i.length)), n === "ArrowDown" && (this.activeMenuItemIndex = Oe(o + 1, i.length));
    }, this.toggleOpenEnd = () => {
      this.setFocus(), this.el.removeEventListener("calcitePopoverOpen", this.toggleOpenEnd);
    }, this.toggleOpen = (e = !this.open) => {
      this.el.addEventListener("calcitePopoverOpen", this.toggleOpenEnd), this.open = e;
    }, this.handlePopoverOpen = () => {
      this.open = !0;
    }, this.handlePopoverClose = () => {
      this.open = !1;
    }, this.appearance = "solid", this.expanded = !1, this.flipPlacements = void 0, this.label = void 0, this.open = !1, this.overlayPositioning = "absolute", this.placement = "auto", this.scale = void 0, this.menuButtonEl = void 0, this.activeMenuItemIndex = -1;
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    this.connectMenuButtonEl();
  }
  componentWillLoad() {
    Je(this);
  }
  componentDidLoad() {
    et(this);
  }
  disconnectedCallback() {
    this.disconnectMenuButtonEl();
  }
  expandedHandler() {
    this.open = !1, this.setTooltipReferenceElement();
  }
  openHandler(e) {
    this.activeMenuItemIndex = this.open ? 0 : -1, this.menuButtonEl && (this.menuButtonEl.active = e), this.calciteActionMenuOpen.emit(), this.setTooltipReferenceElement();
  }
  activeMenuItemIndexHandler() {
    this.updateActions(this.actionElements);
  }
  // --------------------------------------------------------------------------
  //
  //  Methods
  //
  // --------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    return await tt(this), Rt(this.menuButtonEl);
  }
  renderMenuButton() {
    const { appearance: e, label: n, scale: i, expanded: o } = this;
    return y("slot", { name: qe.trigger, onSlotchange: this.setMenuButtonEl }, y("calcite-action", { appearance: e, class: Ke.defaultTrigger, icon: Vn.menu, ref: this.setDefaultMenuButtonEl, scale: i, text: n, textEnabled: o }));
  }
  renderMenuItems() {
    const { actionElements: e, activeMenuItemIndex: n, open: i, menuId: o, menuButtonEl: s, label: r, placement: a, overlayPositioning: c, flipPlacements: l } = this, f = e[n]?.id || null;
    return y("calcite-popover", { autoClose: !0, flipPlacements: l, focusTrapDisabled: !0, label: r, offsetDistance: 0, onCalcitePopoverClose: this.handlePopoverClose, onCalcitePopoverOpen: this.handlePopoverOpen, open: i, overlayPositioning: c, placement: a, pointerDisabled: !0, referenceElement: s }, y("div", { "aria-activedescendant": f, "aria-labelledby": s?.id, class: Ke.menu, id: o, onClick: this.handleCalciteActionClick, role: "menu", tabIndex: -1 }, y("slot", { onSlotchange: this.handleDefaultSlotChange })));
  }
  render() {
    return y(Pt, { key: "d13aa4f3d43fb5651c0487ccfa456813f69955d2" }, this.renderMenuButton(), this.renderMenuItems(), y("slot", { key: "b63d187516c766db6a1b1db3df34050fdec9e6ce", name: qe.tooltip, onSlotchange: this.updateTooltip }));
  }
  isValidKey(e, n) {
    return !!n.find((i) => i === e);
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      expanded: ["expandedHandler"],
      open: ["openHandler"],
      activeMenuItemIndex: ["activeMenuItemIndexHandler"]
    };
  }
  static get style() {
    return qn;
  }
}, [1, "calcite-action-menu", {
  appearance: [513],
  expanded: [516],
  flipPlacements: [16],
  label: [1],
  open: [1540],
  overlayPositioning: [513, "overlay-positioning"],
  placement: [513],
  scale: [513],
  menuButtonEl: [32],
  activeMenuItemIndex: [32],
  setFocus: [64]
}, void 0, {
  expanded: ["expandedHandler"],
  open: ["openHandler"],
  activeMenuItemIndex: ["activeMenuItemIndexHandler"]
}]);
function Zn() {
  if (typeof customElements > "u")
    return;
  ["calcite-action-menu", "calcite-action", "calcite-icon", "calcite-loader", "calcite-popover"].forEach((e) => {
    switch (e) {
      case "calcite-action-menu":
        customElements.get(e) || customElements.define(e, Yn);
        break;
      case "calcite-action":
        customElements.get(e) || nt();
        break;
      case "calcite-icon":
        customElements.get(e) || it();
        break;
      case "calcite-loader":
        customElements.get(e) || ot();
        break;
      case "calcite-popover":
        customElements.get(e) || wt();
        break;
    }
  });
}
Zn();
export {
  In as H,
  qe as S,
  Zn as a,
  fi as b,
  wt as d
};
//# sourceMappingURL=action-menu-DV_TgHzJ.js.map
