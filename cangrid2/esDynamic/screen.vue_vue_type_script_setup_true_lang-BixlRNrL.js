import { c1 as C, c2 as y, fT as M, fU as $, c7 as b, c8 as L, c9 as V, ch as j, cc as i, ca as B, cb as u, fV as e, ci as h, ck as O, fW as w, ce as _, cf as a, cj as N, c3 as R, c4 as S, fX as q, fY as A, fZ as D, f_ as P, c5 as T, c6 as F, cg as U, cd as W, f$ as H } from "./main-DHXLMse1.js";
const I = ["onClick", "aria-label"], X = { class: "md-icon-small inline" }, Y = /* @__PURE__ */ C({
  __name: "settings-button",
  props: {
    componentSelectedState: {
      type: Object,
      required: !0
    }
  },
  setup(p) {
    const { t: d } = y(), n = M(), m = $(), g = b(() => n.mobileView ? "top-end" : "left-end"), o = (l) => {
      l.selectable && m.toggleSelected({
        name: l.name
      });
    };
    return (l, r) => {
      const v = L("dropdown-menu"), f = V("focus-item");
      return j((i(), B(v, {
        position: g.value,
        tooltip: a(d)("export.menu"),
        tooltipPlacement: "top"
      }, {
        header: u(() => r[0] || (r[0] = [
          e("div", { class: "flex items-center text-gray-400 w-full h-full hover:text-black p-4 sm:p-8" }, [
            e("svg", {
              class: "fill-current w-24 h-24 m-auto",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24"
            }, [
              e("g", null, [
                e("path", {
                  d: "M0,0h24v24H0V0z",
                  fill: "none"
                }),
                e("path", { d: "M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" })
              ])
            ])
          ], -1)
        ])),
        default: u(() => [
          (i(!0), h(N, null, O(p.componentSelectedState, (s) => (i(), h("a", {
            key: s.name,
            onClick: (k) => o(s),
            href: "javascript:;",
            class: w(`text-left text-sm sm:text-base ${s.selectable ? "cursor-pointer" : "cursor-default"}`),
            "aria-label": s.name
          }, [
            e("div", X, [
              (i(), h("svg", {
                height: "20",
                width: "20",
                viewBox: "0 0 24 24",
                class: w(`inline mx-8 ${s.selected ? "" : "invisible"}`)
              }, r[1] || (r[1] = [
                e("g", null, [
                  e("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
                ], -1)
              ]), 2)),
              e("span", {
                class: w(`inline ${s.selectable ? "" : "text-gray-300"}
                    `)
              }, _(a(d)(`export.menu.component.${s.name}`)), 3)
            ])
          ], 10, I))), 128))
        ]),
        _: 1
      }, 8, ["position", "tooltip"])), [
        [f]
      ]);
    };
  }
}), Z = { ref: "componentEl" }, G = { class: "flex" }, J = ["aria-label"], K = ["aria-label"], ee = /* @__PURE__ */ C({
  __name: "screen",
  props: {
    panel: {
      type: Object,
      required: !0
    }
  },
  setup(p) {
    const d = p, { t: n } = y(), m = R("iApi"), g = $(), o = S(), l = S(void 0), r = S([]), v = q("componentEl"), f = b(() => g.componentSelectedState), s = b(() => {
      let c = {};
      return o.value && Object.keys(f.value).forEach((t) => {
        c[t] = {
          name: t,
          selected: f.value[t] ?? !1,
          selectable: (o.value?.config)[t]?.selectable ?? !0
        };
      }), c;
    }), k = b(() => !!o.value?.customRendererFunc), x = A(300, () => {
      if (!o.value)
        return;
      const c = v.value.querySelector(".export-canvas");
      o.value.make(c, v.value.clientWidth);
    });
    return D(() => {
      d.panel.exportMake = x, r.value.push(
        // Listen for any changes to the settings, and refresh the image when they do change
        P(s, () => {
          x();
        })
      );
    }), T(() => {
      o.value = m.fixture.get("export"), l.value = new ResizeObserver(() => {
        x();
      }), l.value.observe(m?.$vApp.$root?.$el);
    }), F(() => {
      l.value.disconnect(), r.value.forEach((c) => c());
    }), (c, t) => {
      const z = L("panel-screen");
      return i(), h("div", Z, [
        U(z, {
          panel: p.panel,
          footer: !0
        }, {
          header: u(() => [
            W(_(a(n)("export.title")), 1)
          ]),
          content: u(() => t[2] || (t[2] = [
            e("div", { class: "overflow-hidden border border-gray-200" }, [
              e("canvas", { class: "export-canvas !w-[100%]" })
            ], -1)
          ])),
          footer: u(() => [
            e("div", G, [
              e("button", {
                type: "button",
                onClick: t[0] || (t[0] = (E) => o.value?.export()),
                class: "bg-green-500 hover:bg-green-700 text-white font-bold py-8 px-4 sm:px-16 mr-8 sm:mr-16",
                "aria-label": a(n)("export.download")
              }, _(a(n)("export.download")), 9, J),
              e("button", {
                type: "button",
                onClick: t[1] || (t[1] = (E) => a(x)()),
                class: "py-8 px-4 sm:px-16",
                "aria-label": a(n)("export.refresh")
              }, _(a(n)("export.refresh")), 9, K),
              k.value ? H("", !0) : (i(), B(Y, {
                key: 0,
                componentSelectedState: s.value,
                class: "ml-auto flex px-4 sm:px-8"
              }, null, 8, ["componentSelectedState"]))
            ])
          ]),
          _: 1
        }, 8, ["panel"])
      ], 512);
    };
  }
});
export {
  ee as _
};
//# sourceMappingURL=screen.vue_vue_type_script_setup_true_lang-BixlRNrL.js.map
