import { bs as j, bt as B, bA as V, bD as u, bJ as x, g5 as s, bI as S, bG as i, bF as _, g6 as I, bH as N, bC as C, jN as z, kj as A, gb as M, jO as D, bu as K, ki as q, by as F, bv as v, g9 as U, ga as G, bx as J, bz as P, bB as L, bE as Q, kk as W, kl as X, ka as Y, k9 as Z, bL as ee, bK as te, km as ne } from "./main-DZxT3i7S.js";
import { m as y } from "./marked.esm-DgqJBp_S.js";
const oe = { key: 0 }, ae = ["content"], se = { class: "text-lg text-left flex-grow" }, le = ["innerHTML"], re = /* @__PURE__ */ j({
  __name: "section",
  props: {
    helpSection: {
      type: Object,
      required: !0
    }
  },
  setup(r) {
    const { t: b } = B();
    return (w, l) => {
      const h = V("tippy");
      return r.helpSection.drawn ? (u(), x("div", oe, [
        s("div", null, [
          S((u(), x("button", {
            type: "button",
            class: "help-section-header flex items-center py-15 px-25 hover:bg-gray-200 cursor-pointer select-none w-full",
            onClick: l[0] || (l[0] = (p) => w.$emit("expand")),
            content: i(b)(r.helpSection.expanded ? "help.section.collapse" : "help.section.expand")
          }, [
            s("span", se, _(r.helpSection.header), 1),
            s("div", {
              class: I(["dropdown-icon", { "transform -rotate-180": r.helpSection.expanded }])
            }, l[1] || (l[1] = [
              s("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                height: "24",
                viewBox: "0 0 24 24",
                width: "24"
              }, [
                s("path", {
                  d: "M0 0h24v24H0V0z",
                  fill: "none"
                }),
                s("path", { d: "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" })
              ], -1)
            ]), 2)
          ], 8, ae)), [
            [h, { placement: "top-end", hideOnClick: !1 }]
          ]),
          N(A, {
            name: "help-item",
            mode: "out-in"
          }, {
            default: C(() => [
              S(s("div", {
                innerHTML: r.helpSection.info,
                class: "ramp-markdown section-body px-20 pt-5 ml-10 overflow-hidden"
              }, null, 8, le), [
                [z, r.helpSection.expanded]
              ])
            ]),
            _: 1
          })
        ])
      ])) : M("", !0);
    };
  }
}), ie = /* @__PURE__ */ D(re, [["__scopeId", "data-v-7dc61532"]]), pe = { class: "h-26 mb-8 mx-8" }, de = ["placeholder", "aria-label"], ce = { key: 0 }, fe = /* @__PURE__ */ j({
  __name: "screen",
  props: {
    panel: {
      type: Object,
      required: !0
    }
  },
  setup(r) {
    const b = K("iApi"), w = q(), { t: l } = B(), h = F(() => w.location), p = v([]), k = v([]), $ = v([]), E = v(!1);
    let f, m;
    function O(e, o) {
      const t = o.info.split(/(<[^>]*>)/);
      for (const [n, a] of t.entries())
        if (n % 2 === 0 && a.toLowerCase().indexOf(e.toLowerCase()) > -1)
          return !0;
      return !1;
    }
    function R(e, o) {
      const n = k.value[o].split(/(<[^>]*>)/);
      let a = "";
      for (const [g, d] of n.entries())
        g % 2 === 0 ? a += d.replace(
          new RegExp(e, "gi"),
          (c) => `<mark>${c}</mark>`
        ) : a += d;
      p.value[o].info = a;
    }
    function T(e, o) {
      f = 0, o.forEach((t, n) => {
        t.info = k.value[n], t.drawn = O(e, t) || t.header.toLowerCase().indexOf(e.toLowerCase()) > -1, f = t.drawn ? f + 1 : f, t.expanded = t.drawn && e.length > 2, t.drawn && e.length > 2 && R(e, n);
      }), E.value = f === 0;
    }
    function H(e) {
      e.expanded = !e.expanded;
    }
    return U(() => {
      $.value.push(
        G(
          () => b.language,
          (e, o) => {
            if (e === o) return;
            const t = new y.Renderer(), n = h.value.slice(-1) === "/" ? h.value : `${h.value}/`;
            t.image = (a, g, d) => (a.indexOf("http") === -1 && (a = `${n}images/` + a), `<img src="${a}" alt="${d}">`), ne.get(`${n}${e}.md`).then((a) => {
              const g = /^#\s(.*)\n{2}(?:.+|\n(?!\n{2,}))*/gm;
              let d = a.data.replace(new RegExp("\r", "g"), "");
              p.value = [];
              let c;
              for (; c = g.exec(d); )
                p.value.push({
                  header: c[1],
                  // parse markdown on info section, split/splice/join removes the header
                  // since we can't put info section into its own regex grouping
                  info: y(c[0].split(`
`).splice(2).join(`
`), {
                    renderer: t
                  }),
                  drawn: !0,
                  expanded: !1
                }), k.value.push(
                  y(c[0].split(`
`).splice(2).join(`
`), {
                    renderer: t
                  })
                );
            });
          },
          { immediate: !0 }
        )
      );
    }), J(() => {
      $.value.forEach((e) => e());
    }), (e, o) => {
      const t = P("panel-screen");
      return u(), L(t, { panel: r.panel }, {
        header: C(() => [
          Q(_(i(l)("help.title")), 1)
        ]),
        content: C(() => [
          s("div", pe, [
            S(s("input", {
              type: "search",
              class: "rv-help-search-bar border-b w-full text-base py-8 outline-none focus:shadow-outline border-gray-600 h-full min-w-0",
              placeholder: i(l)("help.search"),
              "onUpdate:modelValue": o[0] || (o[0] = (n) => X(m) ? m.value = n : m = n),
              "aria-label": i(l)("help.search"),
              onInput: o[1] || (o[1] = (n) => T(i(m), p.value)),
              onKeypress: o[2] || (o[2] = Y(Z(() => {
              }, ["prevent"]), ["enter"])),
              enterkeyhint: "done"
            }, null, 40, de), [
              [W, i(m)]
            ])
          ]),
          E.value ? (u(), x("div", ce, [
            s("p", null, _(i(l)("help.noResults")), 1)
          ])) : M("", !0),
          (u(!0), x(te, null, ee(p.value, (n, a) => (u(), L(ie, {
            helpSection: n,
            key: a,
            onExpand: (g) => H(n)
          }, null, 8, ["helpSection", "onExpand"]))), 128))
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
});
export {
  fe as _
};
//# sourceMappingURL=screen.vue_vue_type_script_setup_true_lang-Djv573wv.js.map
