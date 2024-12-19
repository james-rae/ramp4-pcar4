import { $ as l } from "./main-DHXLMse1.js";
async function s(a, t) {
  const { data: e } = await l(a, { responseType: "json", query: { f: "json", ...t?.customParameters, token: t?.apiKey } });
  return e;
}
const h = { BingMapsLayer: async () => (await import("./BingMapsLayer-CaRK_xAJ.js")).default, BuildingSceneLayer: async () => (await import("./BuildingSceneLayer-BMf00RGq.js")).default, CSVLayer: async () => (await import("./CSVLayer-BSpwLV7v.js")).default, CatalogLayer: async () => (await import("./CatalogLayer-BFKtMJSN.js")).default, DimensionLayer: async () => (await import("./DimensionLayer-fU_Ja2d3.js")).default, ElevationLayer: async () => (await import("./ElevationLayer-BETQgxg2.js")).default, FeatureLayer: async () => (await import("./main-DHXLMse1.js").then((a) => a.rb)).default, GeoJSONLayer: async () => (await import("./GeoJSONLayer-BdaoEYel.js")).default, GeoRSSLayer: async () => (await import("./GeoRSSLayer-DxetFzp6.js")).default, GroupLayer: async () => (await import("./GroupLayer-CVfFy-NH.js")).default, ImageryLayer: async () => (await import("./main-DHXLMse1.js").then((a) => a.rc)).default, ImageryTileLayer: async () => (await import("./ImageryTileLayer-BxZvVVvR.js")).default, IntegratedMesh3DTilesLayer: async () => (await import("./IntegratedMesh3DTilesLayer-C0TwizGD.js")).default, IntegratedMeshLayer: async () => (await import("./IntegratedMeshLayer-DoNqboKl.js")).default, KMLLayer: async () => (await import("./KMLLayer-C3P6oQhK.js")).default, KnowledgeGraphLayer: async () => (await import("./KnowledgeGraphLayer-qdNVkBKe.js")).default, LineOfSightLayer: async () => (await import("./LineOfSightLayer-BzhI-JD9.js")).default, LinkChartLayer: async () => (await import("./LinkChartLayer-Db_Zknbh.js")).default, MapImageLayer: async () => (await import("./main-DHXLMse1.js").then((a) => a.rd)).default, MapNotesLayer: async () => (await import("./MapNotesLayer-Db5swp7n.js")).default, MediaLayer: async () => (await import("./MediaLayer-DrPBzgGD.js")).default, OGCFeatureLayer: async () => (await import("./OGCFeatureLayer-3l2Wk71B.js")).default, OpenStreetMapLayer: async () => (await import("./main-DHXLMse1.js").then((a) => a.rf)).default, OrientedImageryLayer: async () => (await import("./OrientedImageryLayer-DSd_M7GT.js")).default, PointCloudLayer: async () => (await import("./PointCloudLayer-tlhNDV0F.js")).default, RouteLayer: async () => (await import("./RouteLayer-BX1GQtso.js")).default, SceneLayer: async () => (await import("./SceneLayer-C1EKLLOg.js")).default, StreamLayer: async () => (await import("./StreamLayer-ZKsErvcn.js")).default, SubtypeGroupLayer: async () => (await import("./SubtypeGroupLayer-DGupRY0D.js")).default, TileLayer: async () => (await import("./main-DHXLMse1.js").then((a) => a.rg)).default, UnknownLayer: async () => (await import("./UnknownLayer-D4YbEHo3.js")).default, UnsupportedLayer: async () => (await import("./UnsupportedLayer-Dlm64ZKe.js")).default, VectorTileLayer: async () => (await import("./VectorTileLayer-DL5Oqiz7.js")).default, VideoLayer: async () => (await import("./VideoLayer-CAgJfyDx.js")).default, VoxelLayer: async () => (await import("./VoxelLayer-DTuPwgrh.js")).default, WFSLayer: async () => (await import("./WFSLayer-DZE7wgzy.js")).default, WMSLayer: async () => (await import("./main-DHXLMse1.js").then((a) => a.rh)).default, WMTSLayer: async () => (await import("./WMTSLayer-h3lq6KSJ.js")).default, WebTileLayer: async () => (await import("./main-DHXLMse1.js").then((a) => a.re)).default }, f = /* @__PURE__ */ new Set(["Catalog Layer", "Feature Layer", "Oriented Imagery Layer"]);
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
//# sourceMappingURL=fetchService-DvyVySI8.js.map
