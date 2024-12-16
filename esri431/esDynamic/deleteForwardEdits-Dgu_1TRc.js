import { s as f, bN as u, bO as c, bP as p, U as m } from "./main-DZxT3i7S.js";
async function g(i, s, o, e) {
  if (!s) throw new f("post:missing-guid", "guid for version is missing");
  const t = u(i), r = o.toJSON(), a = c(t.query, { query: p({ ...r, f: "json" }), ...e, method: "post" });
  s.startsWith("{") && (s = s.slice(1, -1));
  const d = `${t.path}/versions/${s}/deleteForwardEdits`, { data: n } = await m(d, a);
  return n;
}
export {
  g as deleteForwardEdits
};
//# sourceMappingURL=deleteForwardEdits-Dgu_1TRc.js.map
