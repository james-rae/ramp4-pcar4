import { bs as A, bt as V, kh as B, g3 as U, by as k, g8 as O, bA as R, bD as t, bJ as o, g5 as r, g6 as X, bG as c, ka as N, k9 as Z, bI as x, bE as C, gb as L, bu as K, bv as T, g9 as W, ga as Y, bw as J, bx as Q, bF as g, bK as G, bL as I, gd as ee, jO as te, kd as se, bz as oe, bB as D, bC as H, bH as z, lQ as ae, lR as ne } from "./main-DZxT3i7S.js";
const re = { class: "rv-geosearch-bar relative h-26 mx-8 mb-8" }, le = ["placeholder", "value", "aria-label"], ce = { class: "absolute inset-y-0 right-8 grid w-10 place-content-center" }, ie = ["aria-label", "content"], ue = /* @__PURE__ */ A({
  __name: "search-bar",
  setup(S) {
    const { t: a } = V(), u = B(), i = U(), m = k(() => u.searchVal), n = k(
      () => ['"', "$", "!", "*", "+", "?", "^", "{", "}", "(", ")", "|", "[", "]"].filter((d) => u.searchVal.includes(d)).join("")
    ), l = (d) => {
      u.setSearchTerm(d), u.setSearchRegex(d);
    }, _ = O(500, (d) => {
      l(d);
    });
    return (d, s) => {
      const e = R("tippy");
      return t(), o("div", re, [
        r("input", {
          type: "text",
          class: X(["border-b w-full text-base py-8 outline-none focus:shadow-outline border-gray-600 h-full min-w-0", { "border-yellow-500": n.value }]),
          placeholder: c(a)("geosearch.searchText"),
          value: m.value,
          onInput: s[0] || (s[0] = (p) => c(_)(p.target.value)),
          onKeyup: s[1] || (s[1] = N((p) => {
            c(i).mobileView && p.target.blur();
          }, ["enter"])),
          "aria-label": c(a)("geosearch.searchText"),
          onKeypress: s[2] || (s[2] = N(Z(() => {
          }, ["prevent"]), ["enter"])),
          enterkeyhint: "done"
        }, null, 42, le),
        r("span", ce, [
          n.value ? x((t(), o("button", {
            key: 0,
            class: "cursor-default",
            "aria-label": c(a)("geosearch.badChars", { chars: n.value }),
            content: c(a)("geosearch.badChars", { chars: n.value })
          }, s[3] || (s[3] = [
            C(" ⚠ ")
          ]), 8, ie)), [
            [e]
          ]) : L("", !0)
        ])
      ]);
    };
  }
}), de = { class: "w-fit inline-block sm:w-1/2 h-26 mb-8 sm:mb-0 pr-16 sm:pr-0" }, pe = ["value", "aria-label"], ve = {
  value: "",
  disabled: "",
  hidden: ""
}, be = { class: "sm:w-1/2 h-26 sm:mx-16 flex" }, he = ["value", "aria-label"], _e = {
  value: "",
  disabled: "",
  hidden: ""
}, ge = ["disabled", "content", "aria-label"], fe = /* @__PURE__ */ A({
  __name: "top-filters",
  setup(S) {
    const { t: a } = V(), u = K("iApi"), i = B(), m = T(), n = T(), l = T(), _ = T([]), d = T([]), s = T([]), e = k(() => i.queryParams), p = k(() => u.language), w = (h) => i.setProvince(h), $ = (h) => i.setType(h), F = () => {
      w({}), $({});
    }, P = () => {
      i.initService(u.language, u.fixture.get("geosearch").config);
      const h = _.value.find((b) => e.value.province === b.name)?.code, f = d.value.find((b) => e.value.type === b.name)?.code;
      i.getProvinces.then((b) => {
        _.value = b, w({
          province: b.find((E) => E.code === h)?.name,
          forceReRun: !0
        });
      }), i.getTypes.then((b) => {
        d.value = b, $({
          type: b.find((E) => E.code === f)?.name,
          forceReRun: !0
        });
      });
    }, v = () => {
      n.value._tippy.hide();
    }, M = () => {
      l.value._tippy.hide();
    }, j = (h) => {
      h.key === "Tab" && n.value?.matches(":focus") && navigator.userAgent.includes("Firefox") ? n.value._tippy.show() : n.value._tippy.hide();
    }, q = (h) => {
      h.key === "Tab" && l.value?.matches(":focus") && navigator.userAgent.includes("Firefox") ? l.value._tippy.show() : l.value._tippy.hide();
    };
    return W(() => {
      P(), s.value.push(Y(p, P));
    }), J(() => {
      n.value?.addEventListener("blur", v), n.value?.addEventListener("keyup", j), l.value?.addEventListener("blur", M), l.value?.addEventListener("keyup", q);
    }), Q(() => {
      s.value.forEach((h) => h()), n.value?.removeEventListener("blur", v), n.value?.removeEventListener("keyup", j), l.value?.removeEventListener("blur", M), l.value?.removeEventListener("keyup", q);
    }), (h, f) => {
      const b = R("truncate"), E = R("tippy");
      return t(), o("div", {
        class: "rv-geosearch-top-filters sm:flex items-center w-full ml-8 mb-14",
        ref_key: "el",
        ref: m
      }, [
        r("div", de, [
          x((t(), o("select", {
            class: "border-b border-b-gray-600 w-full h-full py-0 cursor-pointer",
            value: e.value.province,
            "aria-label": c(a)("geosearch.filters.province"),
            onChange: f[0] || (f[0] = (y) => w({
              province: y.target.value
            })),
            ref_key: "selectProvince",
            ref: n
          }, [
            x((t(), o("option", ve, [
              C(g(c(a)("geosearch.filters.province")), 1)
            ])), [
              [b]
            ]),
            (t(!0), o(G, null, I(_.value, (y) => x((t(), o("option", {
              key: y.code
            }, [
              C(g(y.name), 1)
            ])), [
              [b]
            ])), 128))
          ], 40, pe)), [
            [b],
            [E, {
              content: c(a)("select.items"),
              trigger: "manual",
              placement: "top-start"
            }]
          ])
        ]),
        r("div", be, [
          x((t(), o("select", {
            class: "border-b border-b-gray-600 w-full h-full py-0 cursor-pointer max-w-150",
            value: e.value.type,
            "aria-label": c(a)("geosearch.filters.type"),
            onChange: f[1] || (f[1] = (y) => $({
              type: y.target.value
            })),
            ref_key: "selectFilter",
            ref: l
          }, [
            r("option", _e, g(c(a)("geosearch.filters.type")), 1),
            (t(!0), o(G, null, I(d.value, (y) => (t(), o("option", {
              key: y.code
            }, g(y.name), 1))), 128))
          ], 40, he)), [
            [b],
            [E, {
              content: c(a)("select.items"),
              trigger: "manual",
              placement: "top-start"
            }]
          ]),
          x((t(), o("button", {
            type: "button",
            class: "text-gray-500 w-1/8 h-24 pl-8 pr-16 sm:pr-8 hover:text-black disabled:cursor-default disabled:text-gray-400",
            disabled: !e.value.type && !e.value.province,
            onClick: F,
            content: c(a)("geosearch.filters.clear"),
            "aria-label": c(a)("geosearch.filters.clear")
          }, f[2] || (f[2] = [
            r("div", { class: "rv-geosearch-icon" }, [
              r("svg", {
                class: "fill-current w-18 h-18",
                viewBox: "0 0 23 21"
              }, [
                r("path", { d: "M 14.7574,20.8284L 17.6036,17.9822L 14.7574,15.1716L 16.1716,13.7574L 19.0178,16.568L 21.8284,13.7574L 23.2426,15.1716L 20.432,17.9822L 23.2426,20.8284L 21.8284,22.2426L 19.0178,19.3964L 16.1716,22.2426L 14.7574,20.8284 Z M 2,2L 19.9888,2.00001L 20,2.00001L 20,2.01122L 20,3.99999L 19.9207,3.99999L 13,10.9207L 13,22.909L 8.99999,18.909L 8.99999,10.906L 2.09405,3.99999L 2,3.99999L 2,2 Z " })
              ])
            ], -1)
          ]), 8, ge)), [
            [E, { placement: "bottom" }]
          ])
        ])
      ], 512);
    };
  }
}), me = { class: "rv-geosearch-bottom-filters" }, ye = { class: "bg-white" }, xe = { class: "ml-8 cursor-pointer font-normal" }, ke = ["checked"], we = /* @__PURE__ */ A({
  __name: "bottom-filters",
  setup(S) {
    const { t: a } = V(), u = K("iApi"), i = B(), m = k(() => i.resultsVisible), n = O(300, (s) => {
      _(s).then((e) => {
        l({
          extent: e,
          visible: m.value
        });
      });
    }), l = (s) => {
      i.setMapExtent(s);
    }, _ = async (s) => s.sr.wkid === 4326 ? s : await u.geo.proj.projectGeometry(4326, s), d = (s) => {
      _(u.geo.map.getExtent()).then((e) => {
        l({
          extent: e,
          visible: s
        });
      });
    };
    return J(() => {
      u.event.on(ee.MAP_EXTENTCHANGE, n, "geosearch_map_extent");
    }), Q(() => {
      u.event.off("geosearch_map_extent");
    }), (s, e) => (t(), o("div", me, [
      r("div", ye, [
        r("label", xe, [
          r("input", {
            type: "checkbox",
            class: "border-2 mx-8 border-gray-600 cursor-pointer",
            checked: m.value,
            onChange: e[0] || (e[0] = (p) => d(p.target.checked)),
            onKeypress: e[1] || (e[1] = N(Z(() => {
            }, ["prevent"]), ["enter"]))
          }, null, 40, ke),
          C(g(c(a)("geosearch.visible")), 1)
        ])
      ])
    ]));
  }
}), Le = {}, $e = { class: "w-full h-6 relative overflow-hidden rounded-full indeterminate mb-14" }, Ee = {
  class: "h-full progressbar bg-blue-800 rounded-full top-0",
  "aria-valuemin": "0",
  "aria-valuemax": "100"
}, Ce = { class: "flex items-center h-full" };
function Se(S, a) {
  return t(), o("div", $e, [
    r("div", Ee, [
      r("span", Ce, [
        se(S.$slots, "default", {}, void 0, !0)
      ])
    ])
  ]);
}
const Te = /* @__PURE__ */ te(Le, [["render", Se], ["__scopeId", "data-v-0a8d1c36"]]), Re = { class: "flex flex-col h-full" }, Pe = {
  key: 1,
  class: "text-red-900 text-xs px-8 mb-10"
}, Me = {
  key: 2,
  class: "px-8 mb-10 py-8 flex-grow text-wrap border-y border-gray-600 overflow-y-auto"
}, Ae = { class: "relative h-48" }, Ve = { class: "font-bold text-blue-600" }, Be = {
  key: 3,
  class: "rv-results-list flex-grow mb-5 border-t border-b border-gray-600 overflow-y-auto"
}, Fe = ["onClick"], je = { class: "rv-result-description px-8" }, ze = { class: "flex-1 text-left truncate font-bold leading-tight" }, Ne = ["innerHTML"], Ge = {
  key: 0,
  class: "text-gray-600 text-sm"
}, Ie = {
  key: 1,
  class: "hidden"
}, Ke = {
  key: 2,
  class: "text-sm font-normal"
}, De = /* @__PURE__ */ A({
  __name: "screen",
  props: {
    panel: {
      type: Object
    }
  },
  setup(S) {
    const { t: a } = V(), u = K("iApi"), i = B(), m = k(() => i.searchVal.replace(/["!*$+?^{}()|[\]\\]/g, "").trim()), n = k(() => i.searchResults), l = k(() => i.loadingResults), _ = k(() => i.failedServices), d = (e) => {
      let p = new ae(
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
        ne.latLongSR(),
        !0
      );
      u.geo.map.zoomMapTo(p);
    }, s = (e, p) => {
      const w = e.replace(
        new RegExp(`${i.searchRegex}`, "gi"),
        ($) => '<span class="font-bold text-blue-600">' + $ + "</span>"
      );
      return p ? w + "," : w;
    };
    return (e, p) => {
      const w = oe("panel-screen"), $ = R("truncate"), F = R("focus-item"), P = R("focus-list");
      return t(), D(w, { panel: S.panel }, {
        header: H(() => [
          C(g(c(a)("geosearch.title")), 1)
        ]),
        content: H(() => [
          r("div", Re, [
            z(ue),
            z(fe),
            l.value ? (t(), D(Te, {
              key: 0,
              class: "flex-none"
            })) : L("", !0),
            _.value.length > 0 && !l.value ? (t(), o("div", Pe, g(c(a)("geosearch.serviceError", {
              services: _.value.join(", ")
            })), 1)) : L("", !0),
            m.value && n.value.length === 0 && !l.value ? (t(), o("div", Me, [
              r("span", Ae, [
                C(g(c(a)("geosearch.noResults")), 1),
                r("span", Ve, '"' + g(m.value) + '"', 1)
              ])
            ])) : L("", !0),
            n.value.length > 0 ? x((t(), o("ul", Be, [
              (t(!0), o(G, null, I(n.value, (v, M) => (t(), o("li", {
                class: "relative h-56",
                key: M
              }, [
                x((t(), o("button", {
                  type: "button",
                  class: "absolute inset-0 h-full w-full hover:bg-gray-300 default-focus-style",
                  onClick: (j) => d(v),
                  style: { "border-bottom": "1px solid lightgray" },
                  "truncate-trigger": ""
                }, [
                  r("div", je, [
                    x((t(), o("div", ze, [
                      r("span", {
                        innerHTML: s(v.name, v.location.province)
                      }, null, 8, Ne),
                      v.location.province ? (t(), o("span", Ge, g(v.location.city ? " " + v.location.city + ", " + v.location.province.abbr : " " + v.location.province.abbr), 1)) : L("", !0),
                      v.type ? (t(), o("span", Ie, "; ")) : L("", !0),
                      v.type ? (t(), o("span", Ke, [
                        p[0] || (p[0] = r("br", null, null, -1)),
                        C(g(v.type), 1)
                      ])) : L("", !0)
                    ])), [
                      [$, {
                        externalTrigger: !0,
                        options: { placement: "top-start" }
                      }]
                    ])
                  ])
                ], 8, Fe)), [
                  [F, "show-truncate"]
                ])
              ]))), 128))
            ])), [
              [P]
            ]) : L("", !0),
            z(we, { class: "mt-auto" })
          ])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
});
export {
  De as _
};
//# sourceMappingURL=screen.vue_vue_type_script_setup_true_lang-BDSqPdHd.js.map
