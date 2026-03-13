import { defineComponent as G, ref as k, onMounted as re, createElementBlock as l, openBlock as t, createElementVNode as h, normalizeClass as U, createCommentVNode as N, Fragment as W, renderList as Q, normalizeStyle as ge, toDisplayString as z, computed as I, resolveDirective as q, withDirectives as O, withModifiers as he, createVNode as ie, onBeforeMount as X, watch as R, onBeforeUnmount as ee, unref as L, createBlock as Z, inject as te, resolveDynamicComponent as pe, nextTick as ne, createTextVNode as oe, resolveComponent as Me, withCtx as fe } from "vue";
import { _ as ue, e as se, Y as ce, a1 as Ee, G as K } from "./main-vuG1Jmf_.js";
import { useI18n as Y } from "vue-i18n";
import "tiny-emitter";
import "@arcgis/core/Color";
import "@arcgis/core/config";
import "@arcgis/core/core/reactiveUtils";
import "@arcgis/core/Graphic";
import "@arcgis/core/geometry/Extent";
import "@arcgis/core/geometry/Multipoint";
import "@arcgis/core/geometry/Point";
import "@arcgis/core/geometry/Polygon";
import "@arcgis/core/geometry/Polyline";
import "@arcgis/core/geometry/SpatialReference";
import "@arcgis/core/geometry/support/jsonUtils";
import "@arcgis/core/request";
import "@arcgis/core/symbols/PictureMarkerSymbol";
import "@arcgis/core/symbols/SimpleFillSymbol";
import "@arcgis/core/symbols/SimpleLineSymbol";
import "@arcgis/core/symbols/SimpleMarkerSymbol";
import "@arcgis/core/symbols/support/jsonUtils";
import "@arcgis/map-components/components/arcgis-sketch";
import "@arcgis/map-components/components/arcgis-swipe";
import "deepmerge";
import "@terraformer/spatial";
import "proj4";
import "throttle-debounce";
import "pinia";
import "screenfull";
import "lodash-es";
import "vue-tippy";
import _e from "linkify-html";
import "@popperjs/core";
import "@terraformer/arcgis";
import "csv2geojson";
import "redaxios";
import "await-to-js";
import "svg.js";
import { T as Ce } from "./toggle-switch-control-Dq9vEkZM.js";
const De = {
  key: 0,
  class: "relative"
}, Se = {
  key: 0,
  class: "relative"
}, He = ["innerHTML"], je = ["src"], ze = {
  key: 1,
  class: "w-32 h-32"
}, Ne = { class: "symbologyIcon" }, Be = ["innerHTML"], Oe = ["src"], qe = { class: "badge z-50 rounded-full text-white absolute h-10 w-10 p-8 inline-flex items-center justify-center" }, Ae = {
  key: 0,
  class: "px-5"
}, Fe = {
  key: 1,
  class: "inline-flex justify-center items-center relative"
}, Pe = /* @__PURE__ */ G({
  __name: "symbology-stack",
  props: {
    layer: { type: Object, required: !0 },
    result: { type: Object, required: !0 }
  },
  setup(v) {
    const E = v, s = k([]);
    return re(() => {
      s.value = E.layer.legend;
    }), (p, y) => v.result.loaded ? (t(), l("div", De, [
      h("div", {
        class: U(v.result.items.length === 0 ? "opacity-50" : "")
      }, [
        s.value.length > 1 ? (t(), l("div", Se, [
          (t(!0), l(W, null, Q(s.value.slice(0, 3).reverse(), (_, m) => (t(), l("div", {
            class: U(["absolute", [m == 0 ? "symbol-0" : m == 1 ? "left-3" : "left-6"]]),
            style: ge({ "z-index": 3 - m }),
            key: m
          }, [
            s.value[m].svgcode ? (t(), l("span", {
              key: 0,
              class: "symbologyIcon w-28 h-28",
              innerHTML: s.value[m].svgcode
            }, null, 8, He)) : s.value[m].imgUrl ? (t(), l("img", {
              key: 1,
              class: "symbologyIcon w-28 h-28",
              src: s.value[m].imgUrl
            }, null, 8, je)) : N("", !0)
          ], 6))), 128))
        ])) : s.value.length > 0 ? (t(), l("div", ze, [
          h("div", Ne, [
            s.value[0].svgcode ? (t(), l("span", {
              key: 0,
              innerHTML: s.value[0].svgcode
            }, null, 8, Be)) : s.value[0].imgUrl ? (t(), l("img", {
              key: 1,
              class: "symbologyIcon w-full h-full",
              src: s.value[0].imgUrl
            }, null, 8, Oe)) : N("", !0)
          ])
        ])) : N("", !0)
      ], 2),
      h("div", qe, [
        v.result.loaded ? (t(), l("div", Ae, z(v.result.items.length), 1)) : N("", !0)
      ])
    ])) : (t(), l("div", Fe, y[0] || (y[0] = [
      h("div", { class: "symbologyIcon h-32 w-32" }, [
        h("div", { class: "relative animate-spin spinner h-24 w-24" })
      ], -1)
    ])));
  }
}), Ge = /* @__PURE__ */ ue(Pe, [["__scopeId", "data-v-496d788d"]]), Ve = ["content"], Re = { class: "symbologyLayerName truncate" }, Ue = /* @__PURE__ */ G({
  __name: "symbology-item",
  props: {
    layer: { type: Object, required: !0 },
    result: { type: Object, required: !0 },
    selected: { type: Boolean, required: !0 }
  },
  setup(v) {
    const E = se(), s = I(() => E.properties), p = v, y = () => {
      const _ = p.layer;
      return _ && s.value[_.id] && s.value[_.id].name ? s.value[_.id].name : _?.name ?? "";
    };
    return (_, m) => {
      const H = q("tippy");
      return O((t(), l("button", {
        class: U(["flex flex-grow justify-start items-center px-7 py-10 default-focus-style symbologyStackButton truncate", v.selected ? "detailsButtonSelected" : "px-11"]),
        onClick: m[0] || (m[0] = he(() => {
        }, ["stop"])),
        content: y()
      }, [
        ie(Ge, {
          class: "symbStack w-32 h-32 mr-10",
          layer: v.layer,
          result: v.result
        }, null, 8, ["layer", "result"]),
        h("div", Re, z(y()), 1)
      ], 10, Ve)), [
        [H, { placement: "right", sticky: !0 }]
      ]);
    };
  }
}), Ze = ["content"], Ye = /* @__PURE__ */ G({
  __name: "symbology-list",
  props: {
    results: { type: Object, required: !0 },
    selected: { type: String, required: !0 }
  },
  emits: ["selection-changed"],
  setup(v, { emit: E }) {
    const { t: s } = Y(), p = ce(), y = k(), _ = () => {
      y.value._tippy.hide();
    }, m = (g) => {
      g.key === "Tab" && y.value?.matches(":focus") && y.value._tippy.show();
    }, H = E, D = v, e = k(""), r = k([]), n = k(!1), i = k(!1), f = (g) => p.getLayerByUid(g), u = (g) => {
      e.value = g, H("selection-changed", g), n.value = !1;
    }, b = () => {
      i.value || setTimeout(() => {
        n.value = i.value;
      }, 500), i.value = !0;
    }, S = () => {
      n.value = i.value = !1;
    }, j = () => {
      i.value || (n.value = !0), i.value = !0;
    }, c = () => {
      n.value = i.value = !1;
    };
    return X(() => {
      r.value.push(
        R(D, () => {
          e.value = D.selected;
        })
      );
    }), re(() => {
      y.value?.addEventListener("blur", _), y.value?.addEventListener("keyup", m);
    }), ee(() => {
      r.value.forEach((g) => g()), y.value?.removeEventListener("blur", _), y.value?.removeEventListener("keyup", m);
    }), (g, M) => {
      const B = q("focus-item"), A = q("focus-list"), C = q("tippy");
      return O((t(), l("div", {
        class: U(["symbology-list absolute overflow-hidden z-50 p-0 w-48 bg-white text-sm inline-flex flex-col", { "symbology-list-expanded": n.value }]),
        onMouseover: b,
        onMouseleave: S,
        onFocus: j,
        onBlur: he(c, ["self"]),
        content: L(s)("details.layers.results.list.tooltip"),
        ref_key: "el",
        ref: y
      }, [
        (t(!0), l(W, null, Q(D.results, ($, o) => (t(), l("div", {
          class: "flex justify-start relative",
          key: o
        }, [
          O((t(), Z(Ue, {
            key: $.uid,
            layer: f($.uid),
            result: $,
            selected: $.uid === e.value,
            onClick: (d) => u($.uid)
          }, null, 8, ["layer", "result", "selected", "onClick"])), [
            [B]
          ])
        ]))), 128))
      ], 42, Ze)), [
        [A],
        [C, {
          trigger: "manual",
          placement: "top-start",
          touch: !1
        }]
      ]);
    };
  }
}), We = { class: "inline font-bold" }, Je = ["innerHTML"], Ke = /* @__PURE__ */ G({
  __name: "esri-default",
  props: {
    fixtureFields: {
      type: Object,
      required: !1
    },
    fields: {
      type: Object,
      required: !0
    },
    identifyData: {
      type: Object,
      required: !0
    }
  },
  setup(v) {
    const { t: E } = Y(), s = te("iApi"), p = v, y = (e, r, n, i) => {
      const f = e.find((u) => u[r].toLowerCase() === n.toLowerCase());
      f && delete i[f.name];
    }, _ = () => {
      const e = Object.assign({}, p.identifyData.data);
      y(p.fields, "type", "geometry", e), s.ui.exposeOids || y(p.fields, "type", "oid", e), s.ui.exposeMeasurements || (y(p.fields, "name", "shape_length", e), y(p.fields, "name", "shape_area", e));
      const r = {};
      p.fields.forEach((i) => {
        const f = p.fixtureFields?.find((u) => i.name === u.field);
        r[i.name] = {
          name: f?.alias || i.alias || i.name,
          type: i.type,
          visible: f?.visible ?? !0
        };
      });
      const n = {};
      Object.keys(e).forEach((i) => {
        const f = r[i];
        if (f && f.visible) {
          const u = e[i];
          n[i] = {
            value: typeof u == "number" ? s.ui.formatNumber(u) : u,
            alias: f.name,
            type: f.type
          };
        }
      });
      for (const [i] of Object.entries(n))
        s.ui.isPlainText(n[i].value) && (n[i].value = s.ui.escapeHtml(n[i].value));
      return n;
    }, m = (e, r, n) => {
      switch (n) {
        case "date":
          return D(e);
        default:
          return H(e, r);
      }
    }, H = (e, r) => {
      if (!e)
        return e;
      if (e.trim().match(/\.(jpeg|jpg|gif|png)$/) || e.trim().match(
        /^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i
      ))
        return `<img src="${e}" alt="${E("details.item.alert.defaultAltText", { alias: r })}" />`;
      const n = "underline text-blue-700 break-all", i = document.createElement("div");
      return i.innerHTML = e.trim(), i.firstElementChild?.tagName == "A" ? (i.firstElementChild.className = n, i.innerHTML) : _e(e, {
        className: n,
        target: "_blank",
        validate: {
          url: (u) => /^https?:\/\//.test(u)
          // only links that begin with a protocol will be hyperlinked
        }
      });
    }, D = (e) => {
      const r = parseInt(e);
      return isNaN(r) ? e : new Date(r).toISOString().split("T")[0];
    };
    return (e, r) => (t(), l("div", null, [
      (t(!0), l(W, null, Q(_(), (n, i, f) => (t(), l("div", {
        class: "p-5 pl-3 flex justify-end flex-wrap even:bg-gray-300",
        key: f
      }, [
        h("span", We, z(n.alias), 1),
        r[0] || (r[0] = h("span", { class: "flex-auto" }, null, -1)),
        h("span", {
          class: "inline ml-8",
          innerHTML: m(n.value, n.alias, n.type)
        }, null, 8, Je)
      ]))), 128))
    ]));
  }
}), Qe = ["innerHTML"], Xe = { key: 1 }, et = /* @__PURE__ */ G({
  __name: "html-default",
  props: {
    identifyData: {
      type: Object,
      required: !0
    }
  },
  setup(v) {
    const { t: E } = Y();
    return (s, p) => v.identifyData ? (t(), l("div", {
      key: 0,
      class: "whitespace-pre-wrap break-words h-full overflow-auto",
      innerHTML: v.identifyData.data.data ?? v.identifyData.data
    }, null, 8, Qe)) : (t(), l("div", Xe, z(L(E)("details.layers.results.empty")), 1));
  }
}), tt = { class: "relative flex flex-grow truncate" }, st = {
  key: 0,
  class: "flex flex-grow items-center truncate"
}, lt = { class: "flex p-8 items-center" }, at = ["innerHTML"], it = {
  key: 1,
  class: "symbologyIcon p-6"
}, nt = ["content", "innerHTML", "tabindex"], ot = {
  key: 1,
  class: "flex p-6 flex-grow"
}, rt = {
  key: 2,
  class: "zoomButton text-center p-3"
}, ut = ["content", "aria-label"], ct = {
  key: 0,
  class: "m-auto animate-spin spinner h-20 w-20"
}, dt = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "green",
  class: "m-auto w-20 h-20"
}, vt = {
  key: 2,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "red",
  class: "m-auto w-20 h-20"
}, mt = ["innerHTML"], ye = /* @__PURE__ */ G({
  __name: "result-item",
  props: {
    uid: { type: String, required: !0 },
    data: { type: Object, required: !0 },
    open: { type: Boolean, required: !1 },
    inList: { type: Boolean, required: !1 }
  },
  setup(v) {
    const E = ce(), s = v, p = te("iApi"), y = k([]), _ = se(), { t: m } = Y(), H = k(!1), D = k(""), e = k("none"), r = k(), n = () => E.getLayerByUid(s.uid), i = I(() => _.properties), f = I(() => _.defaultTemplates), u = I(() => n()?.supportsFeatures ?? !1), b = I(() => n()?.mapLayer ?? !1), S = I(() => {
      const o = n();
      let d = o && s.data.loaded ? o.nameValue(s.data.data) : p.$i18n.t("details.items.title");
      return p.ui.isPlainText(d) && (d = p.ui.escapeHtml(d)), d;
    }), j = (o) => {
      if (typeof o == "string") {
        const d = "underline text-blue-700 break-all", w = document.createElement("div");
        return w.innerHTML = o.trim(), w.firstElementChild?.tagName == "A" ? (w.firstElementChild.className = d, w.innerHTML) : _e(o, {
          className: d,
          target: "_blank",
          validate: {
            url: (T) => /^https?:\/\//.test(T)
            // only links that begin with a protocol will be hyperlinked
          }
        });
      }
      return o;
    }, c = () => {
      C("none"), s.data.loaded ? g() : s.data.load().then(() => {
        g();
      });
    }, g = () => {
      if (D.value = "", !(s.data && s.data.loaded))
        return;
      const o = n();
      if (o === void 0) {
        console.warn(`could not find layer for uid ${s.uid} during icon lookup`);
        return;
      }
      if (o.supportsFeatures) {
        const d = o.oidField;
        o.getIcon(s.data.data[d]).then((w) => {
          D.value = w;
        });
      }
    }, M = I(() => {
      const o = n(), d = o && i.value[o.id] && i.value[o.id].template;
      if (d) {
        if (typeof pe(d) != "string")
          return d;
        ne(
          () => p.notify.show(
            Ee.WARNING,
            p.$i18n.t("details.template.notFound", { layer: d })
          )
        );
      }
      return f.value && f.value[s.data.format] ? f.value[s.data.format] : u.value ? Ke : et;
    }), B = I(() => u.value ? n()?.fields || [] : []), A = I(() => {
      const o = n();
      if (o && i.value[o.id] && i.value[o.id].fields)
        return i.value[o.id].fields;
    }), C = (o) => {
      o === "zoomed" || o === "error" ? setTimeout(() => {
        e.value = o, r.value?._tippy.show(), setTimeout(() => {
          r.value?._tippy.hide(), e.value = "none";
        }, 3e3);
      }, 300) : e.value = o;
    }, $ = () => {
      if (e.value !== "none")
        return;
      C("zooming");
      const o = n();
      if (o === void 0 || !o.isLoaded) {
        console.warn(`Could not find layer for uid ${s.uid} during zoom geometry lookup`), C("error");
        return;
      }
      if (!s.data.loaded) {
        console.warn("Details zoomToFeature call on item that is still loading. Should be impossible, alert the devs."), C("error");
        return;
      }
      const d = s.data.data[o.oidField];
      o.zoomToFeature(d).then((w) => {
        w ? (C("zoomed"), p.updateAlert(p.$i18n.t("details.item.alert.zoom"))) : C("error");
      });
    };
    return X(() => {
      y.value.push(
        R(
          s,
          () => {
            c();
          },
          {
            deep: !1,
            immediate: !0
          }
        )
      );
    }), ee(() => {
      y.value.forEach((o) => o());
    }), (o, d) => {
      const w = q("truncate"), F = q("tippy");
      return t(), l(W, null, [
        h("div", tt, [
          u.value ? (t(), l("div", st, [
            h("div", lt, [
              v.data.loaded && D.value ? (t(), l("span", {
                key: 0,
                class: "flex-none symbologyIcon",
                innerHTML: D.value
              }, null, 8, at)) : (t(), l("div", it, d[3] || (d[3] = [
                h("div", { class: "animate-spin spinner h-20 w-20" }, null, -1)
              ])))
            ]),
            v.data.loaded ? O((t(), l("span", {
              key: 0,
              class: "pl-3 text-left flex-grow itemName",
              content: S.value,
              innerHTML: j(S.value),
              onTouchstart: d[0] || (d[0] = (T) => H.value = !0),
              onTouchend: d[1] || (d[1] = (T) => H.value = !1),
              tabindex: v.inList ? -1 : 0
            }, null, 40, nt)), [
              [w, {
                options: {
                  placement: "top-start",
                  // Offset more for touch devices so tooltip is visible above finger
                  offset: () => H.value ? [0, 25] : [0, 0]
                }
              }]
            ]) : (t(), l("div", ot, z(L(m)("details.loading")), 1)),
            v.data.loaded ? (t(), l("span", rt, [
              b.value ? O((t(), l("button", {
                key: 0,
                type: "button",
                content: L(m)(`details.item.zoom${e.value === "none" ? "" : `.${e.value}`}`),
                "aria-label": L(m)(`grid.cells.zoom${e.value === "none" ? "" : `.${e.value}`}`),
                ref_key: "zoomButton",
                ref: r,
                onClick: d[2] || (d[2] = (T) => {
                  T.stopPropagation(), $();
                }),
                class: "text-gray-600 w-24 h-24 p-2 flex justify-center items-center"
              }, [
                e.value === "zooming" ? (t(), l("div", ct)) : e.value === "zoomed" ? (t(), l("svg", dt, d[4] || (d[4] = [
                  h("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M4.5 12.75l6 6 9-13.5"
                  }, null, -1)
                ]))) : e.value === "error" ? (t(), l("svg", vt, d[5] || (d[5] = [
                  h("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M6 18L18 6M6 6l12 12"
                  }, null, -1)
                ]))) : (t(), l("span", {
                  key: 3,
                  innerHTML: L(p).ui.getZoomIcon()
                }, null, 8, mt))
              ], 8, ut)), [
                [F, { placement: "bottom" }]
              ]) : N("", !0)
            ])) : N("", !0)
          ])) : N("", !0)
        ]),
        v.open ? (t(), Z(pe(M.value), {
          key: 0,
          identifyData: v.data,
          fields: B.value,
          fixtureFields: A.value,
          class: "p-8"
        }, null, 8, ["identifyData", "fields", "fixtureFields"])) : N("", !0)
      ], 64);
    };
  }
}), pt = {
  key: 0,
  class: "layerName w-full flex-grow p-5 pb-8 font-bold truncate",
  tabIndex: "0"
}, ft = {
  key: 1,
  class: "p-8 mb-8 bg-gray-100 flex justify-between"
}, yt = { for: "toggle" }, gt = {
  key: 2,
  class: "flex flex-col justify-between p-8 mb-8 bg-gray-100"
}, ht = { class: "flex" }, _t = ["aria-label"], bt = ["content", "aria-label", "disabled"], kt = { class: "px-3 text-center flex-grow" }, xt = ["content", "aria-label", "disabled"], Lt = { key: 3 }, wt = { key: 0 }, $t = ["content"], Tt = ["onClick"], It = {
  key: 1,
  class: "text-center"
}, Mt = {
  key: 4,
  class: "p-5"
}, Et = /* @__PURE__ */ G({
  __name: "result-list",
  props: {
    uid: { type: String, required: !0 },
    results: { type: Object, required: !0 }
  },
  emits: ["item-selected"],
  setup(v, { emit: E }) {
    const s = k(), p = () => {
      s.value._tippy.hide();
    }, y = (a) => {
      a.key === "Tab" && s.value?.matches(":focus") && s.value._tippy.show();
    }, _ = te("iApi"), m = se(), H = ce(), D = E, e = v, { t: r } = Y(), n = k(!1), i = k(_.fixture.get("details")), f = k(!0), u = k(!1), b = k(0), S = k(20), j = k([]), c = k([]), g = I(() => m.activeGreedy), M = I(() => m.properties), B = I(() => b.value + S.value), A = () => H.getLayerByUid(e.uid), C = () => e.results.find((a) => a.uid === e.uid), $ = I(() => C()?.loaded ?? !1), o = I(() => C()?.requestTime), d = I(
      () => n.value && (!u.value && T().length > 1 || u.value && T().length > S.value)
    ), w = I(() => {
      const a = A();
      return a && M.value[a.id] && M.value[a.id].name ? M.value[a.id].name : a?.name ?? "";
    }), F = I(() => e.uid), T = () => {
      const a = C();
      return a ? a.items : [];
    }, le = I(() => T()[b.value]), de = I(() => {
      if (i.value.hasHilighter()) {
        const a = A();
        if (a)
          return a.mapLayer && a.supportsFeatures;
      }
      return !1;
    }), be = (a) => {
      f.value = a, m.hilightToggle = a, P();
    }, ke = () => {
      const a = A();
      b.value = b.value ?? 0, f.value = m.hilightToggle ?? f.value, u.value = !1, n.value = !!a, P();
    }, ve = (a) => {
      u.value ? (b.value += a * S.value, P()) : b.value += a;
    }, P = async (a = !1) => {
      if (f.value && de.value) {
        if (a) {
          const V = C();
          V && await V.loading;
        }
        const x = T();
        if ($.value && x.length > 0) {
          if (u.value)
            i.value.hilightDetailsItems(x.slice(b.value, B.value), e.uid);
          else {
            const V = x[b.value];
            V && i.value.hilightDetailsItems([V], e.uid);
          }
          return;
        }
      }
      i.value.removeDetailsHilight();
    }, xe = () => {
      u.value = !0, b.value = Math.floor(b.value / S.value) * S.value, P();
    }, Le = () => {
      i.value.removeDetailsHilight(), c.value.forEach((a) => a()), j.value.forEach((a) => _.event.off(a));
    }, we = () => {
      i.value.removeDetailsHilight();
    }, $e = (a) => {
      const x = b.value;
      b.value = a, u.value = !1, x === a && P(), D("item-selected");
    };
    return re(() => {
      j.value.push(
        _.event.on(K.LAYER_REMOVE, (a) => {
          const x = _.panel.get("details");
          e.uid === a.uid && x && x.close();
        })
      ), j.value.push(
        _.event.on(K.PANEL_CLOSED, (a) => {
          a.id === "details" && Le();
        })
      ), j.value.push(
        _.event.on(K.PANEL_MINIMIZED, (a) => {
          a.id === "details" && we();
        })
      ), j.value.push(
        _.event.on(K.MAP_BASEMAPCHANGE, (a) => {
          f.value && a.schemaChanged && P();
        })
      ), s.value?.addEventListener("blur", p), s.value?.addEventListener("keyup", y);
    }), X(() => {
      c.value.push(
        R(
          le,
          () => {
            u.value || (ke(), le.value === void 0 && i.value.removeDetailsHilight());
          },
          {
            deep: !1,
            immediate: !0
          }
        )
      ), c.value.push(
        R(
          F,
          () => {
            const a = e.uid;
            if (u.value && a) {
              const x = C();
              x && x.loading.then(() => {
                e.uid === a && u.value && P();
              });
            }
          },
          {
            deep: !1,
            immediate: !0
          }
        )
      ), c.value.push(
        R(o, () => {
          b.value = 0, u.value && P(!0);
        })
      ), c.value.push(
        R(
          () => e.uid,
          () => {
            b.value = 0;
          }
        )
      );
    }), ee(() => {
      s.value?.removeEventListener("blur", p), s.value?.removeEventListener("keyup", y);
    }), (a, x) => {
      const V = q("truncate"), ae = q("tippy"), Te = q("focus-item"), Ie = q("focus-list");
      return $.value && g.value === 0 ? (t(), l("div", {
        key: 0,
        class: "detailsContent relative flex flex-col flex-grow pl-5",
        style: ge(v.results.length > 1 ? { "margin-left": "42px" } : "")
      }, [
        n.value ? O((t(), l("h1", pt, [
          oe(z(w.value), 1)
        ])), [
          [V, { options: { placement: "top-start" } }]
        ]) : N("", !0),
        de.value ? (t(), l("div", ft, [
          h("label", yt, z(L(r)("details.togglehilight.title")), 1),
          ie(Ce, {
            config: {
              value: f.value,
              disabled: !1
            },
            onToggled: be
          }, null, 8, ["config"])
        ])) : N("", !0),
        d.value ? (t(), l("div", gt, [
          h("div", ht, [
            u.value ? N("", !0) : (t(), l("button", {
              key: 0,
              type: "button",
              class: "px-8 font-bold hover:bg-gray-200 focus:bg-gray-200",
              "aria-label": L(r)("details.item.see.list"),
              onClick: x[0] || (x[0] = (J) => xe())
            }, z(L(r)("details.item.see.list")), 9, _t)),
            h("div", {
              class: U(["flex ml-auto bg-gray-200 py-8 items-center", { "w-full": u.value }])
            }, [
              O((t(), l("button", {
                type: "button",
                content: L(r)(u.value ? "details.items.previous" : "details.item.previous.item"),
                onClick: x[1] || (x[1] = (J) => ve(-1)),
                class: "mx-2 opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default",
                "aria-label": L(r)(u.value ? "details.items.previous" : "details.item.previous.item"),
                disabled: b.value === 0
              }, x[3] || (x[3] = [
                h("svg", {
                  height: "24",
                  width: "24",
                  viewBox: "0 0 23 23"
                }, [
                  h("g", null, [
                    h("path", { d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" })
                  ])
                ], -1)
              ]), 8, bt)), [
                [ae, { placement: "top" }]
              ]),
              h("span", kt, z(u.value ? L(r)("details.items.range", [
                b.value + 1,
                Math.min(B.value, T().length),
                T().length
              ]) : L(r)("details.item.count", [b.value + 1, T().length])), 1),
              O((t(), l("button", {
                type: "button",
                content: L(r)(u.value ? "details.items.next" : "details.item.next.item"),
                onClick: x[2] || (x[2] = (J) => ve(1)),
                class: "mx-2 rotate-180 opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default",
                "aria-label": L(r)(u.value ? "details.items.next" : "details.item.next.item"),
                disabled: !u.value && b.value === T().length - 1 || u.value && B.value >= T().length
              }, x[4] || (x[4] = [
                h("svg", {
                  height: "24",
                  width: "24",
                  viewBox: "0 0 23 23"
                }, [
                  h("g", null, [
                    h("path", { d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" })
                  ])
                ], -1)
              ]), 8, xt)), [
                [ae, { placement: "top" }]
              ])
            ], 2)
          ])
        ])) : N("", !0),
        n.value ? (t(), l("div", Lt, [
          T().length > 0 ? (t(), l("div", wt, [
            u.value ? O((t(), l("div", {
              key: 0,
              class: "flex flex-col",
              content: L(r)("details.layers.results.list.tooltip"),
              ref_key: "el",
              ref: s
            }, [
              (t(!0), l(W, null, Q(T().slice(b.value, B.value), (J, me) => O((t(), l("button", {
                class: "flex flex-grow truncate default-focus-style hover:bg-gray-200",
                key: me,
                onClick: (Ht) => $e(b.value + me)
              }, [
                ie(ye, {
                  data: J,
                  uid: v.uid,
                  open: !1,
                  "in-list": !0
                }, null, 8, ["data", "uid"])
              ], 8, Tt)), [
                [Te, "show-truncate"]
              ])), 128))
            ], 8, $t)), [
              [Ie],
              [ae, {
                trigger: "manual",
                placement: "top-start",
                touch: !1
              }]
            ]) : (t(), Z(ye, {
              key: 1,
              data: le.value,
              uid: v.uid,
              open: !0,
              "in-list": !1
            }, null, 8, ["data", "uid"]))
          ])) : (t(), l("div", It, z(L(r)("details.layers.results.empty.currentLayer")), 1))
        ])) : (t(), l("div", Mt, z(L(r)("details.item.no.data")), 1))
      ], 4)) : (t(), l("div", {
        key: 1,
        class: U(["flex justify-center py-10 items-center", v.results.length > 1 ? "ml-42" : ""])
      }, [
        x[5] || (x[5] = h("span", { class: "animate-spin spinner h-20 w-20 px-5 mr-8" }, null, -1)),
        oe(" " + z(L(r)("details.item.loading")), 1)
      ], 2));
    };
  }
}), Ct = /* @__PURE__ */ ue(Et, [["__scopeId", "data-v-60b1b8a2"]]), Dt = { class: "relative h-full" }, St = /* @__PURE__ */ G({
  __name: "details-screen",
  props: {
    panel: {
      type: Object
    }
  },
  setup(v) {
    const { t: E } = Y(), s = te("iApi"), p = se(), y = k([]), _ = k([]), m = k([]), H = k(!1), D = k(null), e = k(""), r = I(() => p.activeGreedy), n = I(() => p.payload), i = (c) => {
      e.value = c;
    }, f = (c) => m.value.find((g) => g.uid === c), u = (c) => {
      c !== void 0 && (p.activeGreedy = c.length === 0 ? 0 : c[0].requestTime, m.value = c, b(c));
    }, b = (c) => {
      if (e.value) {
        const g = f(e.value);
        g ? g.loading.then(() => {
          g.requestTime === r.value && (g.items.length > 0 ? j(!1) : S(c));
        }) : S(c);
      } else
        S(c);
    }, S = (c, g) => {
      let M;
      if (g)
        M = g;
      else {
        const $ = p.properties, o = c.map((w) => [
          $[w.layerId]?.priority ?? 50,
          w.layerId
        ]), d = new Set(o.map((w) => w[0]));
        M = [], d.forEach((w) => {
          const F = o.filter((T) => T[0] === w).map((T) => T[1]);
          M.push([w, F]);
        }), M.sort((w, F) => F[0] - w[0]);
      }
      if (M.length === 0) {
        n.value.length ? j(!0) : ne().then(() => {
          j(!0);
        });
        return;
      }
      const B = M[M.length - 1][1], A = c.filter(($) => B.includes($.layerId)).map(
        ($) => $.loading.then(() => $.items.length > 0 ? Promise.resolve($) : Promise.reject())
      ), C = c.length === 0 ? 0 : c[0].requestTime;
      Promise.any(A).then(($) => {
        $.requestTime === r.value && (e.value = $.uid, j(!1));
      }).catch(() => {
        C === r.value && (M.pop(), S(c, M));
      });
    }, j = (c) => {
      p.activeGreedy = 0, H.value = c;
    };
    return X(() => {
      _.value.push(
        R(
          n,
          (c) => {
            u(c);
          },
          {
            deep: !1,
            // was true when our array had undefineds. now that objects arrive intact, we dont want this triggering when innards update
            immediate: !0
          }
        )
      );
    }), ee(() => {
      y.value.forEach((c) => s.event.off(c)), _.value.forEach((c) => c());
    }), (c, g) => {
      const M = Me("panel-screen");
      return t(), Z(M, { panel: v.panel }, {
        header: fe(() => [
          oe(z(
            // Show different titles based on what requested the panel
            L(p).origin === "toggleEvent" ? L(E)("details.layers.title.gridOrigin") : L(E)("details.layers.title.identifyOrigin")
          ), 1)
        ]),
        content: fe(() => [
          h("div", Dt, [
            m.value.length > 1 ? (t(), Z(Ye, {
              key: 0,
              results: m.value,
              selected: e.value,
              onSelectionChanged: i
            }, null, 8, ["results", "selected"])) : N("", !0),
            h("div", {
              class: "detailsContentSection overflow-y-auto h-full",
              ref_key: "detailsPanel",
              ref: D
            }, [
              H.value ? (t(), l("div", {
                key: 1,
                class: U(["text-center", { "ml-42": m.value.length > 1 }])
              }, z(m.value.length >= 1 ? L(E)("details.layers.results.empty") : L(E)("details.layers.results.empty.noLayers")), 3)) : (t(), Z(Ct, {
                key: 0,
                uid: e.value,
                results: m.value,
                onItemSelected: g[0] || (g[0] = () => ne(() => D.value?.scrollTo({ top: 0 })))
              }, null, 8, ["uid", "results"]))
            ], 512)
          ])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
}), _s = /* @__PURE__ */ ue(St, [["__scopeId", "data-v-b149ae00"]]);
export {
  _s as default
};
