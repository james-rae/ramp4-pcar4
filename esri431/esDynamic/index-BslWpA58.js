import { bs as p, F as i, bv as r, bw as l, bJ as m, g5 as c, bD as u, bu as d, bz as b, bB as _, bC as h } from "./main-DZxT3i7S.js";
const f = ["src"], x = /* @__PURE__ */ p({
  __name: "snowman",
  props: {
    fixture: {
      type: i,
      required: !0
    },
    message: String
  },
  setup(s) {
    const e = s, t = r(), o = r("https://i.imgur.com/p13yknD.png");
    return l(() => {
      setTimeout(() => {
        t.value.parentNode.removeChild(t.value), e.fixture.remove();
      }, 6e3);
    }), (n, a) => (u(), m("div", {
      class: "absolute top-0 right-0",
      ref_key: "el",
      ref: t
    }, [
      c("img", {
        style: { width: "250px" },
        src: o.value,
        alt: "Snowman",
        srcset: ""
      }, null, 8, f)
    ], 512));
  }
}), g = /* @__PURE__ */ p({
  __name: "appbar-button",
  setup(s) {
    const e = d("iApi"), t = () => {
      e.fixture.add("snowman");
    };
    return (o, n) => {
      const a = b("appbar-button", !0);
      return u(), _(a, {
        onClickFunction: t,
        tooltip: "⛄"
      }, {
        default: h(() => n[0] || (n[0] = [
          c("span", { class: "block h-24" }, "⛄", -1)
        ])),
        _: 1
      });
    };
  }
});
class w extends i {
  added() {
    this.$iApi.component("snowman-appbar-button", g);
    const { el: e } = this.mount(x, {
      app: this.$element,
      props: { message: "This is a snowman prop.", fixture: this }
    });
    this.$vApp.$el.appendChild(e.childNodes[0]);
  }
  removed() {
  }
}
export {
  w as default
};
//# sourceMappingURL=index-BslWpA58.js.map
