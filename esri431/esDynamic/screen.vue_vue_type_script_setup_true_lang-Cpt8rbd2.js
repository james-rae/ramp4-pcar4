import { bs as E, bt as x, bu as L, bv as A, bw as B, bx as C, by as I, bz as w, bA as i, bB as l, bC as p, bD as n, bE as D, bF as j, bG as s, bH as F, bI as H, bJ as u, bK as M, bL as N, bM as d } from "./main-DZxT3i7S.js";
const T = ["content"], q = /* @__PURE__ */ E({
  __name: "screen",
  props: {
    panel: {
      type: Object,
      required: !0
    }
  },
  setup(b) {
    const v = d(() => import("./header-sLqw_tTZ.js")), m = d(() => import("./item-PWT7vbqm.js")), { t: r } = x(), _ = L("iApi"), e = A(), a = () => {
      e.value._tippy.hide();
    }, o = (t) => {
      t.key === "Tab" && e.value?.matches(":focus") && e.value._tippy.show();
    };
    B(() => {
      e.value?.addEventListener("blur", a), e.value?.addEventListener("keyup", o);
    }), C(() => {
      e.value?.removeEventListener("blur", a), e.value?.removeEventListener("keyup", o);
    });
    const f = I(() => {
      let t = _.fixture.get("legend");
      return t ? [...t.getLegend()] : [];
    });
    return (t, g) => {
      const y = w("panel-screen"), h = i("focus-list"), k = i("tippy");
      return n(), l(y, { panel: b.panel }, {
        header: p(() => [
          D(j(s(r)("legend.title")), 1)
        ]),
        content: p(() => [
          F(s(v)),
          H((n(), u("div", {
            content: s(r)("panels.controls.items"),
            ref_key: "el",
            ref: e
          }, [
            (n(!0), u(M, null, N(f.value, (c) => (n(), l(s(m), {
              legendItem: c,
              key: c.uid
            }, null, 8, ["legendItem"]))), 128))
          ], 8, T)), [
            [h],
            [k, {
              trigger: "manual",
              placement: "top-end",
              maxWidth: 190
            }]
          ])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
});
export {
  q as _
};
//# sourceMappingURL=screen.vue_vue_type_script_setup_true_lang-Cpt8rbd2.js.map
