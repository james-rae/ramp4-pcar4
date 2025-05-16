import { defineComponent as T, computed as L, resolveDirective as C, openBlock as o, createElementBlock as s, createElementVNode as r, normalizeClass as N, unref as u, withKeys as V, withModifiers as F, withDirectives as w, createTextVNode as k, createCommentVNode as $, inject as q, ref as M, onBeforeMount as K, watch as U, onBeforeUnmount as G, toDisplayString as y, Fragment as P, renderList as j, onMounted as H, renderSlot as Z, resolveComponent as J, createBlock as z, withCtx as B, createVNode as A } from "vue";
import { h as R, a as O, G as X, _ as Q, J as W, K as D, M as Y } from "./main-Db2JmeSd.js";
import "@arcgis/core/Color";
import "@arcgis/core/config";
import "@arcgis/core/core/reactiveUtils.js";
import "@arcgis/core/geometry/Extent";
import "@arcgis/core/geometry/Multipoint";
import "@arcgis/core/geometry/Point";
import "@arcgis/core/geometry/Polygon";
import "@arcgis/core/geometry/Polyline";
import "@arcgis/core/geometry/SpatialReference";
import "@arcgis/core/geometry/support/jsonUtils";
import "@arcgis/core/Graphic";
import "@arcgis/core/request";
import "@arcgis/core/symbols/PictureMarkerSymbol";
import "@arcgis/core/symbols/SimpleFillSymbol";
import "@arcgis/core/symbols/SimpleLineSymbol";
import "@arcgis/core/symbols/SimpleMarkerSymbol";
import "@arcgis/core/symbols/support/jsonUtils";
import "deepmerge";
import "@terraformer/spatial";
import "proj4";
import { debounce as I } from "throttle-debounce";
import { useI18n as E } from "vue-i18n";
import "pinia";
import "screenfull";
import "lodash.clonedeep";
import "vue-tippy";
import "linkify-html";
import "@popperjs/core";
import "@terraformer/arcgis";
import "csv2geojson";
import "redaxios";
import "await-to-js";
import "svg.js";
const ee = { class: "rv-geosearch-bar relative h-26 mx-8 mb-8" }, te = ["placeholder", "value", "aria-label"], oe = { class: "absolute inset-y-0 right-8 grid w-10 place-content-center" }, se = ["aria-label", "content"], re = /* @__PURE__ */ T({
  __name: "search-bar",
  setup(S) {
    const { t: n } = E(), c = R(), a = O(), b = L(() => c.searchVal), h = L(
      () => ['"', "$", "!", "*", "+", "?", "^", "{", "}", "(", ")", "|", "[", "]"].filter((v) => c.searchVal.includes(v)).join("")
    ), g = (v) => {
      c.setSearchTerm(v), c.setSearchRegex(v);
    }, m = I(500, (v) => {
      g(v);
    });
    return (v, t) => {
      const e = C("tippy");
      return o(), s("div", ee, [
        r("input", {
          type: "text",
          class: N(["border-b w-full text-base py-8 outline-none focus:shadow-outline border-gray-600 h-full min-w-0", { "border-yellow-500": h.value }]),
          placeholder: u(n)("geosearch.searchText"),
          value: b.value,
          onInput: t[0] || (t[0] = (d) => u(m)(d.target.value)),
          onKeyup: t[1] || (t[1] = V((d) => {
            u(a).mobileView && d.target.blur();
          }, ["enter"])),
          "aria-label": u(n)("geosearch.searchText"),
          onKeypress: t[2] || (t[2] = V(F(() => {
          }, ["prevent"]), ["enter"])),
          enterkeyhint: "done"
        }, null, 42, te),
        r("span", oe, [
          h.value ? w((o(), s("button", {
            key: 0,
            class: "cursor-default",
            "aria-label": u(n)("geosearch.badChars", { chars: h.value }),
            content: u(n)("geosearch.badChars", { chars: h.value })
          }, t[3] || (t[3] = [
            k(" ⚠ ")
          ]), 8, se)), [
            [e]
          ]) : $("", !0)
        ])
      ]);
    };
  }
}), ne = { class: "rv-geosearch-top-filters sm:flex items-center w-full ml-8 mb-14" }, ae = { class: "w-fit inline-block sm:w-1/2 h-26 mb-8 sm:mb-0 pr-16 sm:pr-0" }, ie = ["value", "aria-label"], le = {
  value: "",
  disabled: "",
  hidden: ""
}, ce = { class: "sm:w-1/2 h-26 sm:mx-16 flex" }, pe = ["value", "aria-label"], ue = {
  value: "",
  disabled: "",
  hidden: ""
}, de = ["disabled", "content", "aria-label"], he = /* @__PURE__ */ T({
  __name: "top-filters",
  setup(S) {
    const { t: n } = E(), c = q("iApi"), a = R(), b = M([]), h = M([]), g = M([]), m = L(() => a.queryParams), v = L(() => c.language), t = (i) => a.setProvince(i), e = (i) => a.setType(i), d = () => {
      t({}), e({});
    }, x = () => {
      a.initService(c.language, c.fixture.get("geosearch").config);
      const i = b.value.find((p) => m.value.province === p.name)?.code, _ = h.value.find((p) => m.value.type === p.name)?.code;
      a.getProvinces.then((p) => {
        b.value = p, t({
          province: p.find((l) => l.code === i)?.name,
          forceReRun: !0
        });
      }), a.getTypes.then((p) => {
        h.value = p, e({
          type: p.find((l) => l.code === _)?.name,
          forceReRun: !0
        });
      });
    };
    return K(() => {
      x(), g.value.push(U(v, x));
    }), G(() => {
      g.value.forEach((i) => i());
    }), (i, _) => {
      const p = C("truncate"), l = C("tippy");
      return o(), s("div", ne, [
        r("div", ae, [
          w((o(), s("select", {
            class: "border-b border-b-gray-600 w-full h-full py-0 cursor-pointer",
            value: m.value.province,
            "aria-label": u(n)("geosearch.filters.province"),
            onChange: _[0] || (_[0] = (f) => t({
              province: f.target.value
            }))
          }, [
            w((o(), s("option", le, [
              k(y(u(n)("geosearch.filters.province")), 1)
            ])), [
              [p]
            ]),
            (o(!0), s(P, null, j(b.value, (f) => w((o(), s("option", {
              key: f.code
            }, [
              k(y(f.name), 1)
            ])), [
              [p]
            ])), 128))
          ], 40, ie)), [
            [p]
          ])
        ]),
        r("div", ce, [
          w((o(), s("select", {
            class: "border-b border-b-gray-600 w-full h-full py-0 cursor-pointer max-w-150",
            value: m.value.type,
            "aria-label": u(n)("geosearch.filters.type"),
            onChange: _[1] || (_[1] = (f) => e({
              type: f.target.value
            }))
          }, [
            r("option", ue, y(u(n)("geosearch.filters.type")), 1),
            (o(!0), s(P, null, j(h.value, (f) => (o(), s("option", {
              key: f.code
            }, y(f.name), 1))), 128))
          ], 40, pe)), [
            [p]
          ]),
          w((o(), s("button", {
            type: "button",
            class: "text-gray-500 w-1/8 h-24 pl-8 pr-16 sm:pr-8 hover:text-black disabled:cursor-default disabled:text-gray-400",
            disabled: !m.value.type && !m.value.province,
            onClick: d,
            content: u(n)("geosearch.filters.clear"),
            "aria-label": u(n)("geosearch.filters.clear")
          }, _[2] || (_[2] = [
            r("div", { class: "rv-geosearch-icon" }, [
              r("svg", {
                class: "fill-current w-18 h-18",
                viewBox: "0 0 23 21"
              }, [
                r("path", { d: "M 14.7574,20.8284L 17.6036,17.9822L 14.7574,15.1716L 16.1716,13.7574L 19.0178,16.568L 21.8284,13.7574L 23.2426,15.1716L 20.432,17.9822L 23.2426,20.8284L 21.8284,22.2426L 19.0178,19.3964L 16.1716,22.2426L 14.7574,20.8284 Z M 2,2L 19.9888,2.00001L 20,2.00001L 20,2.01122L 20,3.99999L 19.9207,3.99999L 13,10.9207L 13,22.909L 8.99999,18.909L 8.99999,10.906L 2.09405,3.99999L 2,3.99999L 2,2 Z " })
              ])
            ], -1)
          ]), 8, de)), [
            [l, { placement: "bottom" }]
          ])
        ])
      ]);
    };
  }
}), me = { class: "rv-geosearch-bottom-filters" }, ve = { class: "bg-white" }, _e = { class: "ml-8 cursor-pointer font-normal" }, be = ["checked"], ge = /* @__PURE__ */ T({
  __name: "bottom-filters",
  setup(S) {
    const { t: n } = E(), c = q("iApi"), a = R(), b = L(() => a.resultsVisible), h = I(300, (t) => {
      m(t).then((e) => {
        g({
          extent: e,
          visible: b.value
        });
      });
    }), g = (t) => {
      a.setMapExtent(t);
    }, m = async (t) => t.sr.wkid === 4326 ? t : await c.geo.proj.projectGeometry(4326, t), v = (t) => {
      m(c.geo.map.getExtent()).then((e) => {
        g({
          extent: e,
          visible: t
        });
      });
    };
    return H(() => {
      c.event.on(X.MAP_EXTENTCHANGE, h, "geosearch_map_extent");
    }), G(() => {
      c.event.off("geosearch_map_extent");
    }), (t, e) => (o(), s("div", me, [
      r("div", ve, [
        r("label", _e, [
          r("input", {
            type: "checkbox",
            class: "border-2 mx-8 border-gray-600 cursor-pointer",
            checked: b.value,
            onChange: e[0] || (e[0] = (d) => v(d.target.checked)),
            onKeypress: e[1] || (e[1] = V(F(() => {
            }, ["prevent"]), ["enter"]))
          }, null, 40, be),
          k(y(u(n)("geosearch.visible")), 1)
        ])
      ])
    ]));
  }
}), fe = {}, ye = { class: "w-full h-6 relative overflow-hidden rounded-full indeterminate mb-14" }, xe = {
  class: "h-full progressbar bg-blue-800 rounded-full top-0",
  "aria-valuemin": "0",
  "aria-valuemax": "100"
}, we = { class: "flex items-center h-full" };
function Le(S, n) {
  return o(), s("div", ye, [
    r("div", xe, [
      r("span", we, [
        Z(S.$slots, "default", {}, void 0, !0)
      ])
    ])
  ]);
}
const $e = /* @__PURE__ */ Q(fe, [["render", Le], ["__scopeId", "data-v-0a8d1c36"]]), ke = { class: "flex flex-col h-full" }, Se = {
  key: 1,
  class: "text-red-900 text-xs px-8 mb-10"
}, Ce = {
  key: 2,
  class: "px-8 mb-10 py-8 flex-grow text-wrap border-y border-gray-600 overflow-y-auto"
}, Te = { class: "relative h-48" }, Re = { class: "font-bold text-blue-600" }, Ee = {
  key: 3,
  class: "rv-results-list flex-grow mb-5 border-t border-b border-gray-600 overflow-y-auto"
}, Me = ["onClick"], Ae = { class: "rv-result-description px-8" }, Ve = { class: "flex-1 text-left truncate font-bold leading-tight" }, Pe = ["innerHTML"], je = {
  key: 0,
  class: "text-gray-600 text-sm"
}, qe = {
  key: 1,
  class: "hidden"
}, ze = {
  key: 2,
  class: "text-sm font-normal"
}, yt = /* @__PURE__ */ T({
  __name: "screen",
  props: {
    panel: {
      type: Object
    }
  },
  setup(S) {
    const { t: n } = E(), c = q("iApi"), a = R(), b = L(() => a.searchVal.replace(/["!*$+?^{}()|[\]\\]/g, "").trim()), h = L(() => a.searchResults), g = L(() => a.loadingResults), m = L(() => a.failedServices), v = (e) => {
      if (console.log("zoomie payload", e), e.type === "Forward Sortation Area") {
        console.log("hit fsa case");
        const x = "https://maps-cartes.dev.ec.gc.ca/arcgis/rest/services/CCDS/FSA_Boundaries_RTA_Limites_StatsCan_2021/MapServer/0" + `/query/?where=CFSAUID%3D'${e.name}'&outFields=CFSAUID&returnGeometry=true&f=json`;
        W(x).then((i) => {
          console.log("server result", i);
          const _ = new D("fsazoom", i.features[0].geometry.rings, 3978, !0);
          c.geo.map.zoomMapTo(_);
        }).catch((i) => console.error("fsa error", i));
      } else {
        const d = new D(
          "zoomies",
          [
            [
              [e.bbox[0], e.bbox[1]],
              [e.bbox[0], e.bbox[3]],
              [e.bbox[2], e.bbox[3]],
              [e.bbox[2], e.bbox[1]],
              [e.bbox[0], e.bbox[1]]
            ]
          ],
          Y.latLongSR(),
          !0
        );
        c.geo.map.zoomMapTo(d);
      }
    }, t = (e, d) => {
      const x = e.replace(
        new RegExp(`${a.searchRegex}`, "gi"),
        (i) => '<span class="font-bold text-blue-600">' + i + "</span>"
      );
      return d ? x + "," : x;
    };
    return (e, d) => {
      const x = J("panel-screen"), i = C("truncate"), _ = C("focus-item"), p = C("focus-list");
      return o(), z(x, { panel: S.panel }, {
        header: B(() => [
          k(y(u(n)("geosearch.title")), 1)
        ]),
        content: B(() => [
          r("div", ke, [
            A(re),
            A(he),
            g.value ? (o(), z($e, {
              key: 0,
              class: "flex-none"
            })) : $("", !0),
            m.value.length > 0 && !g.value ? (o(), s("div", Se, y(u(n)("geosearch.serviceError", {
              services: m.value.join(", ")
            })), 1)) : $("", !0),
            b.value && h.value.length === 0 && !g.value ? (o(), s("div", Ce, [
              r("span", Te, [
                k(y(u(n)("geosearch.noResults")), 1),
                r("span", Re, '"' + y(b.value) + '"', 1)
              ])
            ])) : $("", !0),
            h.value.length > 0 ? w((o(), s("ul", Ee, [
              (o(!0), s(P, null, j(h.value, (l, f) => (o(), s("li", {
                class: "relative h-56",
                key: f
              }, [
                w((o(), s("button", {
                  type: "button",
                  class: "absolute inset-0 h-full w-full hover:bg-gray-300 default-focus-style",
                  onClick: (Be) => v(l),
                  style: { "border-bottom": "1px solid lightgray" },
                  "truncate-trigger": ""
                }, [
                  r("div", Ae, [
                    w((o(), s("div", Ve, [
                      r("span", {
                        innerHTML: t(l.name, l.location.province)
                      }, null, 8, Pe),
                      l.location.province ? (o(), s("span", je, y(l.location.city ? " " + l.location.city + ", " + l.location.province.abbr : " " + l.location.province.abbr), 1)) : $("", !0),
                      l.type ? (o(), s("span", qe, "; ")) : $("", !0),
                      l.type ? (o(), s("span", ze, [
                        d[0] || (d[0] = r("br", null, null, -1)),
                        k(y(l.type), 1)
                      ])) : $("", !0)
                    ])), [
                      [i, {
                        externalTrigger: !0,
                        options: { placement: "top-start" }
                      }]
                    ])
                  ])
                ], 8, Me)), [
                  [_, "show-truncate"]
                ])
              ]))), 128))
            ])), [
              [p]
            ]) : $("", !0),
            A(ge, { class: "mt-auto" })
          ])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
});
export {
  yt as default
};
