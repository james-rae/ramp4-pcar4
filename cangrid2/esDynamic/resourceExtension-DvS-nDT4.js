import { b2 as a } from "./main-DHXLMse1.js";
function m(p) {
  return i[e(p)] || l;
}
function e(p) {
  return p.type === "json" ? "application/json" : p.type === "blob" ? p.blob.type : g(p.url);
}
function g(p) {
  const o = a(p);
  return t[o] || n;
}
const i = {}, n = "text/plain", l = i[n], t = { png: "image/png", jpeg: "image/jpeg", jpg: "image/jpg", bmp: "image/bmp", gif: "image/gif", json: "application/json", txt: "text/plain", xml: "application/xml", svg: "image/svg+xml", zip: "application/zip", pbf: "application/vnd.mapbox-vector-tile", gz: "application/gzip", "bin.gz": "application/octet-stream" };
for (const p in t) i[t[p]] = p;
export {
  m as p
};
//# sourceMappingURL=resourceExtension-DvS-nDT4.js.map
