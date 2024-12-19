import { bs as g, bt as _, bu as C, bA as r, bD as s, bJ as n, bI as l, g6 as v, bG as m, g5 as a, gb as x, bF as y, k9 as p, ka as T, jN as j, ge as z, jO as B, hU as I, by as A, bv as O, bw as M, bz as N, bB as S, bC as w, bE as V, bK as $, bL as D, bH as E } from "./main-DZxT3i7S.js";
const K = { class: "mt-10" }, F = ["aria-label"], H = ["alt", "src"], L = ["alt"], q = { class: "absolute flex w-full bg-black opacity-75 text-white h-30 bottom-6 items-center" }, G = { class: "pl-5" }, J = { class: "ml-auto pr-5" }, U = ["content"], P = /* @__PURE__ */ g({
  __name: "item",
  props: {
    area: {
      type: Object,
      required: !0
    },
    showThumbnail: {
      type: Boolean
    }
  },
  setup(e) {
    const { t: c } = _(), u = C("iApi"), i = (o) => {
      if (!o.extent) {
        console.error("selected area of interest doesn't have an extent specified.");
        return;
      }
      u?.geo.map.zoomMapTo(z.fromConfig("area-of-interest-extent", o.extent));
    };
    return (o, t) => {
      const d = r("truncate"), b = r("tippy"), h = r("focus-item");
      return s(), n("div", K, [
        l((s(), n("button", {
          type: "button",
          class: v(["area-of-interest-item-button bg-gray-300 w-full", { "border border-gray-300": e.showThumbnail }]),
          "aria-label": m(c)("areas-of-interest.select"),
          onClick: t[2] || (t[2] = (f) => i(e.area))
        }, [
          a("div", null, [
            a("div", {
              class: v(["flex hover:opacity-50 area-of-interest-item-image", e.showThumbnail ? "h-180" : "h-30"])
            }, [
              e.area.thumbnail ? (s(), n("img", {
                key: 0,
                class: "w-full bg-white object-contain",
                alt: e.area.altText || e.area.title,
                src: e.area.thumbnail
              }, null, 8, H)) : e.showThumbnail ? (s(), n("img", {
                key: 1,
                class: "w-full bg-white object-contain py-30",
                alt: e.area.altText || e.area.title,
                src: "https://openclipart.org/image/800px/160615"
              }, null, 8, L)) : x("", !0)
            ], 2)
          ]),
          a("div", q, [
            l((s(), n("div", G, [
              a("span", null, y(e.area.title), 1)
            ])), [
              [d]
            ]),
            l(a("div", J, [
              l((s(), n("a", {
                onClick: t[0] || (t[0] = p(() => {
                }, ["stop"])),
                onKeydown: t[1] || (t[1] = T(p(() => {
                }, ["prevent"]), ["enter", "space"])),
                content: e.area.description
              }, t[3] || (t[3] = [
                a("svg", {
                  class: "fill-current w-16 h-16",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24"
                }, [
                  a("path", {
                    d: "M0 0h24v24H0z",
                    fill: "none"
                  }),
                  a("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" })
                ], -1)
              ]), 40, U)), [
                [b, {
                  placement: "bottom",
                  trigger: "click focus"
                }]
              ])
            ], 512), [
              [j, e.area.description]
            ])
          ])
        ], 10, F)), [
          [h]
        ])
      ]);
    };
  }
}), Q = /* @__PURE__ */ B(P, [["__scopeId", "data-v-06be115a"]]), R = { class: "h-600 overflow-y-auto" }, W = { class: "mx-5" }, X = { key: 0 }, Z = /* @__PURE__ */ g({
  __name: "screen",
  props: {
    panel: {
      type: Object
    }
  },
  setup(e) {
    const { t: c } = _(), u = I(), i = A(() => u.areas);
    let o = O(!1);
    return M(() => {
      o.value = !!i.value?.some((t) => t.thumbnail);
    }), (t, d) => {
      const b = N("panel-screen"), h = r("focus-list");
      return s(), S(b, { panel: e.panel }, {
        header: w(() => [
          V(y(m(c)("areas-of-interest.title")), 1)
        ]),
        content: w(() => [
          a("div", R, [
            a("div", W, [
              i.value.length > 0 ? l((s(), n("ul", X, [
                (s(!0), n($, null, D(i.value, (f, k) => (s(), n("li", { key: k }, [
                  E(Q, {
                    area: f,
                    "show-thumbnail": m(o),
                    class: "block relative overflow-hidden"
                  }, null, 8, ["area", "show-thumbnail"])
                ]))), 128))
              ])), [
                [h]
              ]) : x("", !0)
            ])
          ])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
});
export {
  Z as _
};
//# sourceMappingURL=screen.vue_vue_type_script_setup_true_lang-D9GHzyis.js.map
