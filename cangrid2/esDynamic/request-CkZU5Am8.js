import { s as p } from "./main-DHXLMse1.js";
function d(o, a) {
  let t = a.responseType;
  t ? t !== "array-buffer" && t !== "blob" && t !== "json" && t !== "native" && t !== "native-request-init" && t !== "text" && (t = "text") : t = "json", a.responseType = t;
  const c = a.signal;
  return delete a.signal, globalThis.invokeStaticMessage("request", { url: o, options: a }, { signal: c }).then(async (e) => {
    let n, r, l, u, s;
    if (e.data) if (e.data instanceof ArrayBuffer) {
      if (!(t !== "json" && t !== "text" && t !== "blob" || (n = new Blob([e.data]), t !== "json" && t !== "text" || (u = await n.text(), t !== "json")))) {
        try {
          r = JSON.parse(u || null);
        } catch (i) {
          const b = { ...i, url: o, requestOptions: a };
          throw new p("request:server", i.message, b);
        }
        if (r.error) {
          const i = { ...r.error, url: o, requestOptions: a };
          throw new p("request:server", r.error.message, i);
        }
      }
    } else t === "native" && (e.data.signal = c, l = await fetch(e.data.url, e.data), e.httpStatus = l.status);
    switch (t) {
      case "blob":
        s = n;
        break;
      case "json":
        s = r;
        break;
      case "native":
        s = l;
        break;
      case "text":
        s = u;
        break;
      default:
        s = e.data;
    }
    return { data: s, httpStatus: e.httpStatus, requestOptions: a, ssl: e.ssl, url: o };
  });
}
export {
  d as execute
};
//# sourceMappingURL=request-CkZU5Am8.js.map
