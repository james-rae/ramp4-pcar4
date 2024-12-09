import { cg as d, ch as Z, ci as u, cj as y, ck as i, av as a, cl as h, cm as g, cn as f, co as l } from "./main-DZxT3i7S.js";
function w(e) {
  return d(e) || Z(e) || u(e);
}
function N(e, p) {
  const { format: o, timeZoneOptions: n, fieldType: m } = p ?? {};
  let r, c;
  if (n && ({ timeZone: r, timeZoneName: c } = y(n.layerTimeZone, n.datesInUnknownTimezone, n.viewTimeZone, i(o || "short-date-short-time"), m)), typeof e == "string" && isNaN(Date.parse(m === "time-only" ? `1970-01-01T${e}Z` : e))) return e;
  switch (m) {
    case "date-only": {
      const t = i(o || "short-date");
      return typeof e == "string" ? l(e, { ...t }) : a(e, { ...t, timeZone: f });
    }
    case "time-only": {
      const t = i(o || "short-time");
      return typeof e == "string" ? g(e, t) : a(e, { ...t, timeZone: f });
    }
    case "timestamp-offset": {
      if (!r && typeof e == "string" && new Date(e).toISOString() !== e) return e;
      const t = o || n ? i(o || "short-date-short-time") : void 0, s = t ? { ...t, timeZone: r, timeZoneName: c } : void 0;
      return typeof e == "string" ? h(e, s) : a(e, s);
    }
    default: {
      const t = o || n ? i(o || "short-date-short-time") : void 0;
      return a(typeof e == "string" ? new Date(e) : e, t ? { ...t, timeZone: r, timeZoneName: c } : void 0);
    }
  }
}
export {
  w as $,
  N as j
};
//# sourceMappingURL=utils-CGnCHnho.js.map
