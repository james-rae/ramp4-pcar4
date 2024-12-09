import { s as S, b as R, e as w, I as p, p as f, R as N, g as D, m as U, j, x, k as g, n as h, o as F, y as I } from "./main-DZxT3i7S.js";
import { c as k, a as d } from "./devEnvironmentUtils-CxrVv3RG.js";
function W(e, t, l, n) {
  const a = e.name;
  return a == null ? Promise.reject(new S("symbolstyleutils:style-symbol-reference-name-missing", "Missing name in style symbol reference")) : e.styleName === "Esri2DPointSymbolsStyle" ? E(a, t, n) : R(e, t, n).then((o) => A(o, a, t, l, I, n));
}
function v(e, t) {
  return t.items.find((l) => l.name === e);
}
function A(e, t, l, n, a, o) {
  const s = l?.portal != null ? l.portal : w.getDefault(), b = { portal: s, url: p(e.baseUrl), origin: "portal-item" }, m = v(t, e.data);
  if (!m) {
    const y = `The symbol name '${t}' could not be found`;
    return Promise.reject(new S("symbolstyleutils:symbol-name-not-found", y, { symbolName: t }));
  }
  let i = f(a(m, n), b), u = m.thumbnail?.href ?? null;
  const c = m.thumbnail?.imageData;
  k() && (i = d(i) ?? "", u = d(u));
  const P = { portal: s, url: p(N(i)), origin: "portal-item" };
  return D(i, o).then((y) => {
    const $ = n === "cimRef" ? U(y.data) : y.data, r = j($, P);
    if (r && x(r)) {
      if (u) {
        const O = f(u, b);
        r.thumbnail = new g({ url: O });
      } else c && (r.thumbnail = new g({ url: `data:image/png;base64,${c}` }));
      e.styleUrl ? r.styleOrigin = new h({ portal: l.portal, styleUrl: e.styleUrl, name: t }) : e.styleName && (r.styleOrigin = new h({ portal: l.portal, styleName: e.styleName, name: t }));
    }
    return r;
  });
}
function E(e, t, l) {
  const n = F.replaceAll(/\{SymbolName\}/gi, e), a = t.portal != null ? t.portal : w.getDefault();
  return D(n, l).then((o) => {
    const s = U(o.data);
    return j(s, { portal: a, url: p(N(n)), origin: "portal-item" });
  });
}
export {
  A as fetchSymbolFromStyle,
  v as getStyleItemFromStyle,
  W as resolveWebStyleSymbol
};
//# sourceMappingURL=webStyleSymbolUtils-9hTe75ar.js.map
