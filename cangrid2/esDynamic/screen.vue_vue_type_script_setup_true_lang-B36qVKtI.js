import { c1 as T, c2 as E, iR as R, fT as I, c7 as w, fY as K, c9 as C, cc as s, ci as o, fV as a, fW as D, cf as i, iK as P, iJ as q, ch as x, cd as k, f$ as L, c3 as j, c4 as M, fZ as H, f_ as Z, c6 as G, ce as m, cj as A, ck as B, c5 as F, g1 as J, ix as O, iN as U, c8 as W, ca as N, cb as z, cg as V, kc as X, kd as Y } from "./main-DHXLMse1.js";
const Q = { class: "rv-geosearch-bar relative h-26 mx-8 mb-8" }, ee = ["placeholder", "value", "aria-label"], te = { class: "absolute inset-y-0 right-8 grid w-10 place-content-center" }, se = ["aria-label", "content"], oe = /* @__PURE__ */ T({
  __name: "search-bar",
  setup(S) {
    const { t: n } = E(), u = R(), r = I(), _ = w(() => u.searchVal), d = w(
      () => ['"', "$", "!", "*", "+", "?", "^", "{", "}", "(", ")", "|", "[", "]"].filter((v) => u.searchVal.includes(v)).join("")
    ), g = (v) => {
      u.setSearchTerm(v), u.setSearchRegex(v);
    }, p = K(500, (v) => {
      g(v);
    });
    return (v, t) => {
      const e = C("tippy");
      return s(), o("div", Q, [
        a("input", {
          type: "text",
          class: D(["border-b w-full text-base py-8 outline-none focus:shadow-outline border-gray-600 h-full min-w-0", { "border-yellow-500": d.value }]),
          placeholder: i(n)("geosearch.searchText"),
          value: _.value,
          onInput: t[0] || (t[0] = (h) => i(p)(h.target.value)),
          onKeyup: t[1] || (t[1] = P((h) => {
            i(r).mobileView && h.target.blur();
          }, ["enter"])),
          "aria-label": i(n)("geosearch.searchText"),
          onKeypress: t[2] || (t[2] = P(q(() => {
          }, ["prevent"]), ["enter"])),
          enterkeyhint: "done"
        }, null, 42, ee),
        a("span", te, [
          d.value ? x((s(), o("button", {
            key: 0,
            class: "cursor-default",
            "aria-label": i(n)("geosearch.badChars", { chars: d.value }),
            content: i(n)("geosearch.badChars", { chars: d.value })
          }, t[3] || (t[3] = [
            k(" ⚠ ")
          ]), 8, se)), [
            [e]
          ]) : L("", !0)
        ])
      ]);
    };
  }
}), ae = { class: "rv-geosearch-top-filters sm:flex items-center w-full ml-8 mb-14" }, ne = { class: "w-fit inline-block sm:w-1/2 h-26 mb-8 sm:mb-0 pr-16 sm:pr-0" }, re = ["value", "aria-label"], ce = {
  value: "",
  disabled: "",
  hidden: ""
}, le = { class: "sm:w-1/2 h-26 sm:mx-16 flex" }, ie = ["value", "aria-label"], ue = {
  value: "",
  disabled: "",
  hidden: ""
}, de = ["disabled", "content", "aria-label"], pe = /* @__PURE__ */ T({
  __name: "top-filters",
  setup(S) {
    const { t: n } = E(), u = j("iApi"), r = R(), _ = M([]), d = M([]), g = M([]), p = w(() => r.queryParams), v = w(() => u.language), t = (b) => r.setProvince(b), e = (b) => r.setType(b), h = () => {
      t({}), e({});
    }, $ = () => {
      r.initService(u.language, u.fixture.get("geosearch").config);
      const b = _.value.find((l) => p.value.province === l.name)?.code, y = d.value.find((l) => p.value.type === l.name)?.code;
      r.getProvinces.then((l) => {
        _.value = l, t({
          province: l.find((c) => c.code === b)?.name,
          forceReRun: !0
        });
      }), r.getTypes.then((l) => {
        d.value = l, e({
          type: l.find((c) => c.code === y)?.name,
          forceReRun: !0
        });
      });
    };
    return H(() => {
      $(), g.value.push(Z(v, $));
    }), G(() => {
      g.value.forEach((b) => b());
    }), (b, y) => {
      const l = C("truncate"), c = C("tippy");
      return s(), o("div", ae, [
        a("div", ne, [
          x((s(), o("select", {
            class: "border-b border-b-gray-600 w-full h-full py-0 cursor-pointer",
            value: p.value.province,
            "aria-label": i(n)("geosearch.filters.province"),
            onChange: y[0] || (y[0] = (f) => t({
              province: f.target.value
            }))
          }, [
            x((s(), o("option", ce, [
              k(m(i(n)("geosearch.filters.province")), 1)
            ])), [
              [l]
            ]),
            (s(!0), o(A, null, B(_.value, (f) => x((s(), o("option", {
              key: f.code
            }, [
              k(m(f.name), 1)
            ])), [
              [l]
            ])), 128))
          ], 40, re)), [
            [l]
          ])
        ]),
        a("div", le, [
          x((s(), o("select", {
            class: "border-b border-b-gray-600 w-full h-full py-0 cursor-pointer max-w-150",
            value: p.value.type,
            "aria-label": i(n)("geosearch.filters.type"),
            onChange: y[1] || (y[1] = (f) => e({
              type: f.target.value
            }))
          }, [
            a("option", ue, m(i(n)("geosearch.filters.type")), 1),
            (s(!0), o(A, null, B(d.value, (f) => (s(), o("option", {
              key: f.code
            }, m(f.name), 1))), 128))
          ], 40, ie)), [
            [l]
          ]),
          x((s(), o("button", {
            type: "button",
            class: "text-gray-500 w-1/8 h-24 pl-8 pr-16 sm:pr-8 hover:text-black disabled:cursor-default disabled:text-gray-400",
            disabled: !p.value.type && !p.value.province,
            onClick: h,
            content: i(n)("geosearch.filters.clear"),
            "aria-label": i(n)("geosearch.filters.clear")
          }, y[2] || (y[2] = [
            a("div", { class: "rv-geosearch-icon" }, [
              a("svg", {
                class: "fill-current w-18 h-18",
                viewBox: "0 0 23 21"
              }, [
                a("path", { d: "M 14.7574,20.8284L 17.6036,17.9822L 14.7574,15.1716L 16.1716,13.7574L 19.0178,16.568L 21.8284,13.7574L 23.2426,15.1716L 20.432,17.9822L 23.2426,20.8284L 21.8284,22.2426L 19.0178,19.3964L 16.1716,22.2426L 14.7574,20.8284 Z M 2,2L 19.9888,2.00001L 20,2.00001L 20,2.01122L 20,3.99999L 19.9207,3.99999L 13,10.9207L 13,22.909L 8.99999,18.909L 8.99999,10.906L 2.09405,3.99999L 2,3.99999L 2,2 Z " })
              ])
            ], -1)
          ]), 8, de)), [
            [c, { placement: "bottom" }]
          ])
        ])
      ]);
    };
  }
}), he = { class: "rv-geosearch-bottom-filters" }, ve = { class: "bg-white" }, be = { class: "ml-8 cursor-pointer font-normal" }, _e = ["checked"], ge = /* @__PURE__ */ T({
  __name: "bottom-filters",
  setup(S) {
    const { t: n } = E(), u = j("iApi"), r = R(), _ = w(() => r.resultsVisible), d = K(300, (t) => {
      p(t).then((e) => {
        g({
          extent: e,
          visible: _.value
        });
      });
    }), g = (t) => {
      r.setMapExtent(t);
    }, p = async (t) => t.sr.wkid === 4326 ? t : await u.geo.proj.projectGeometry(4326, t), v = (t) => {
      p(u.geo.map.getExtent()).then((e) => {
        g({
          extent: e,
          visible: t
        });
      });
    };
    return F(() => {
      u.event.on(J.MAP_EXTENTCHANGE, d, "geosearch_map_extent");
    }), G(() => {
      u.event.off("geosearch_map_extent");
    }), (t, e) => (s(), o("div", he, [
      a("div", ve, [
        a("label", be, [
          a("input", {
            type: "checkbox",
            class: "border-2 mx-8 border-gray-600 cursor-pointer",
            checked: _.value,
            onChange: e[0] || (e[0] = (h) => v(h.target.checked)),
            onKeypress: e[1] || (e[1] = P(q(() => {
            }, ["prevent"]), ["enter"]))
          }, null, 40, _e),
          k(m(i(n)("geosearch.visible")), 1)
        ])
      ])
    ]));
  }
}), fe = {}, me = { class: "w-full h-6 relative overflow-hidden rounded-full indeterminate mb-14" }, ye = {
  class: "h-full progressbar bg-blue-800 rounded-full top-0",
  "aria-valuemin": "0",
  "aria-valuemax": "100"
}, xe = { class: "flex items-center h-full" };
function we(S, n) {
  return s(), o("div", me, [
    a("div", ye, [
      a("span", xe, [
        U(S.$slots, "default", {}, void 0, !0)
      ])
    ])
  ]);
}
const Le = /* @__PURE__ */ O(fe, [["render", we], ["__scopeId", "data-v-0a8d1c36"]]), $e = { class: "flex flex-col h-full" }, ke = {
  key: 1,
  class: "text-red-900 text-xs px-8 mb-10"
}, Se = {
  key: 2,
  class: "px-8 mb-10 py-8 flex-grow text-wrap border-y border-gray-600 overflow-y-auto"
}, Ce = { class: "relative h-48" }, Te = { class: "font-bold text-blue-600" }, Ee = {
  key: 3,
  class: "rv-results-list flex-grow mb-5 border-t border-b border-gray-600 overflow-y-auto"
}, Re = ["onClick"], Me = { class: "rv-result-description px-8" }, Ve = { class: "flex-1 text-left truncate font-bold leading-tight" }, Pe = ["innerHTML"], Ae = {
  key: 0,
  class: "text-gray-600 text-sm"
}, Be = {
  key: 1,
  class: "hidden"
}, je = {
  key: 2,
  class: "text-sm font-normal"
}, Ke = /* @__PURE__ */ T({
  __name: "screen",
  props: {
    panel: {
      type: Object
    }
  },
  setup(S) {
    const { t: n } = E(), u = j("iApi"), r = R(), _ = w(() => r.searchVal.replace(/["!*$+?^{}()|[\]\\]/g, "").trim()), d = w(() => r.searchResults), g = w(() => r.loadingResults), p = w(() => r.failedServices), v = (e) => {
      let h = new X(
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
      u.geo.map.zoomMapTo(h);
    }, t = (e, h) => {
      const $ = e.replace(
        new RegExp(`${r.searchRegex}`, "gi"),
        (b) => '<span class="font-bold text-blue-600">' + b + "</span>"
      );
      return h ? $ + "," : $;
    };
    return (e, h) => {
      const $ = W("panel-screen"), b = C("truncate"), y = C("focus-item"), l = C("focus-list");
      return s(), N($, { panel: S.panel }, {
        header: z(() => [
          k(m(i(n)("geosearch.title")), 1)
        ]),
        content: z(() => [
          a("div", $e, [
            V(oe),
            V(pe),
            g.value ? (s(), N(Le, {
              key: 0,
              class: "flex-none"
            })) : L("", !0),
            p.value.length > 0 && !g.value ? (s(), o("div", ke, m(i(n)("geosearch.serviceError", {
              services: p.value.join(", ")
            })), 1)) : L("", !0),
            _.value && d.value.length === 0 && !g.value ? (s(), o("div", Se, [
              a("span", Ce, [
                k(m(i(n)("geosearch.noResults")), 1),
                a("span", Te, '"' + m(_.value) + '"', 1)
              ])
            ])) : L("", !0),
            d.value.length > 0 ? x((s(), o("ul", Ee, [
              (s(!0), o(A, null, B(d.value, (c, f) => (s(), o("li", {
                class: "relative h-56",
                key: f
              }, [
                x((s(), o("button", {
                  type: "button",
                  class: "absolute inset-0 h-full w-full hover:bg-gray-300 default-focus-style",
                  onClick: (Ne) => v(c),
                  style: { "border-bottom": "1px solid lightgray" },
                  "truncate-trigger": ""
                }, [
                  a("div", Me, [
                    x((s(), o("div", Ve, [
                      a("span", {
                        innerHTML: t(c.name, c.location.province)
                      }, null, 8, Pe),
                      c.location.province ? (s(), o("span", Ae, m(c.location.city ? " " + c.location.city + ", " + c.location.province.abbr : " " + c.location.province.abbr), 1)) : L("", !0),
                      c.type ? (s(), o("span", Be, "; ")) : L("", !0),
                      c.type ? (s(), o("span", je, [
                        h[0] || (h[0] = a("br", null, null, -1)),
                        k(m(c.type), 1)
                      ])) : L("", !0)
                    ])), [
                      [b, {
                        externalTrigger: !0,
                        options: { placement: "top-start" }
                      }]
                    ])
                  ])
                ], 8, Re)), [
                  [y, "show-truncate"]
                ])
              ]))), 128))
            ])), [
              [l]
            ]) : L("", !0),
            V(ge, { class: "mt-auto" })
          ])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
});
export {
  Ke as _
};
//# sourceMappingURL=screen.vue_vue_type_script_setup_true_lang-B36qVKtI.js.map
