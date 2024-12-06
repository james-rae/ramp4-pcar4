import { $ as l } from "./main-s2Ig2EGT.js";
async function s(a, t) {
  const { data: e } = await l(a, { responseType: "json", query: { f: "json", ...t?.customParameters, token: t?.apiKey } });
  return e;
}
const h = { BingMapsLayer: async () => (await import("./BingMapsLayer-DL0r-VjZ.js")).default, BuildingSceneLayer: async () => (await import("./BuildingSceneLayer-2zwN512M.js")).default, CSVLayer: async () => (await import("./CSVLayer-BXJlp8jc.js")).default, CatalogLayer: async () => (await import("./CatalogLayer-CJrshyZx.js")).default, DimensionLayer: async () => (await import("./DimensionLayer-Bm5PQOfJ.js")).default, ElevationLayer: async () => (await import("./ElevationLayer-5_0i53yN.js")).default, FeatureLayer: async () => (await import("./main-s2Ig2EGT.js").then((a) => a.rb)).default, GeoJSONLayer: async () => (await import("./GeoJSONLayer-Ds_Jx92w.js")).default, GeoRSSLayer: async () => (await import("./GeoRSSLayer-CISuXPBA.js")).default, GroupLayer: async () => (await import("./GroupLayer-BgQotvOx.js")).default, ImageryLayer: async () => (await import("./main-s2Ig2EGT.js").then((a) => a.rc)).default, ImageryTileLayer: async () => (await import("./ImageryTileLayer-YhQYkfaC.js")).default, IntegratedMesh3DTilesLayer: async () => (await import("./IntegratedMesh3DTilesLayer-Bd-CpB3z.js")).default, IntegratedMeshLayer: async () => (await import("./IntegratedMeshLayer-CtbpF65M.js")).default, KMLLayer: async () => (await import("./KMLLayer-Caz-tH_J.js")).default, KnowledgeGraphLayer: async () => (await import("./KnowledgeGraphLayer-vDq8KIyq.js")).default, LineOfSightLayer: async () => (await import("./LineOfSightLayer-D0ZH2xZH.js")).default, LinkChartLayer: async () => (await import("./LinkChartLayer-Bc3O8B1r.js")).default, MapImageLayer: async () => (await import("./main-s2Ig2EGT.js").then((a) => a.rd)).default, MapNotesLayer: async () => (await import("./MapNotesLayer-DGMVAUdq.js")).default, MediaLayer: async () => (await import("./MediaLayer-BZErShoy.js")).default, OGCFeatureLayer: async () => (await import("./OGCFeatureLayer-BDJ9Ebq9.js")).default, OpenStreetMapLayer: async () => (await import("./main-s2Ig2EGT.js").then((a) => a.rf)).default, OrientedImageryLayer: async () => (await import("./OrientedImageryLayer-B-s7L6Bz.js")).default, PointCloudLayer: async () => (await import("./PointCloudLayer-_-BCT-Vl.js")).default, RouteLayer: async () => (await import("./RouteLayer-BZKeNjxQ.js")).default, SceneLayer: async () => (await import("./SceneLayer-itGGSWwN.js")).default, StreamLayer: async () => (await import("./StreamLayer-B1ynvL3v.js")).default, SubtypeGroupLayer: async () => (await import("./SubtypeGroupLayer-DCDRlPO2.js")).default, TileLayer: async () => (await import("./main-s2Ig2EGT.js").then((a) => a.rg)).default, UnknownLayer: async () => (await import("./UnknownLayer-BvsFNtwT.js")).default, UnsupportedLayer: async () => (await import("./UnsupportedLayer-B8wLafVW.js")).default, VectorTileLayer: async () => (await import("./VectorTileLayer-gUxx9pr8.js")).default, VideoLayer: async () => (await import("./VideoLayer-CdWvEtA1.js")).default, VoxelLayer: async () => (await import("./VoxelLayer-9E-UvZAD.js")).default, WFSLayer: async () => (await import("./WFSLayer-DyhDrgAP.js")).default, WMSLayer: async () => (await import("./main-s2Ig2EGT.js").then((a) => a.rh)).default, WMTSLayer: async () => (await import("./WMTSLayer-DlNOJiFn.js")).default, WebTileLayer: async () => (await import("./main-s2Ig2EGT.js").then((a) => a.re)).default }, f = /* @__PURE__ */ new Set(["Catalog Layer", "Feature Layer", "Oriented Imagery Layer"]);
async function g(a, t) {
  const { loadContext: e, ...r } = t || {}, i = e ? await e.fetchServiceMetadata(a, r) : await s(a, r);
  u(i), c(i);
  const y = { serviceJSON: i };
  if ((i.currentVersion ?? 0) < 10.5) return y;
  const o = `${a}/layers`, n = e ? await e.fetchServiceMetadata(o, r) : await s(o, r);
  return u(n), c(n), y.layersJSON = { layers: n.layers, tables: n.tables }, y;
}
function p(a) {
  const { type: t } = a;
  return !!t && f.has(t);
}
function d(a) {
  return a.type === "Table";
}
function c(a) {
  a.layers = a.layers?.filter(p), a.tables = a.tables?.filter(d);
}
function L(a) {
  a.type ||= "Feature Layer";
}
function m(a) {
  a.type ||= "Table";
}
function u(a) {
  a.layers?.forEach(L), a.tables?.forEach(m);
}
function S(a) {
  switch (a) {
    case "Feature Layer":
    case "Table":
      return "FeatureLayer";
    case "Oriented Imagery Layer":
      return "OrientedImageryLayer";
    case "Catalog Layer":
      return "CatalogLayer";
  }
  return "FeatureLayer";
}
export {
  h as a,
  s as b,
  S as i,
  g as t
};
//# sourceMappingURL=fetchService-7so4CxY5.js.map
