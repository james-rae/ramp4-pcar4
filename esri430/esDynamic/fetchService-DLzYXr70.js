import { $ as l } from "./main-CNI-dCKS.js";
async function s(a, t) {
  const { data: e } = await l(a, { responseType: "json", query: { f: "json", ...t?.customParameters, token: t?.apiKey } });
  return e;
}
const h = { BingMapsLayer: async () => (await import("./BingMapsLayer-DFRbwAlF.js")).default, BuildingSceneLayer: async () => (await import("./BuildingSceneLayer-6FrWld0U.js")).default, CSVLayer: async () => (await import("./CSVLayer-_v-RB36t.js")).default, CatalogLayer: async () => (await import("./CatalogLayer-C1R5ES0j.js")).default, DimensionLayer: async () => (await import("./DimensionLayer-CzUpiZRg.js")).default, ElevationLayer: async () => (await import("./ElevationLayer-U4H84ejn.js")).default, FeatureLayer: async () => (await import("./main-CNI-dCKS.js").then((a) => a.rb)).default, GeoJSONLayer: async () => (await import("./GeoJSONLayer-B0IQ92L1.js")).default, GeoRSSLayer: async () => (await import("./GeoRSSLayer-D2FEtrL-.js")).default, GroupLayer: async () => (await import("./GroupLayer-B-l7F7ko.js")).default, ImageryLayer: async () => (await import("./main-CNI-dCKS.js").then((a) => a.rc)).default, ImageryTileLayer: async () => (await import("./ImageryTileLayer-BwcebIBs.js")).default, IntegratedMesh3DTilesLayer: async () => (await import("./IntegratedMesh3DTilesLayer-GV5o7F7C.js")).default, IntegratedMeshLayer: async () => (await import("./IntegratedMeshLayer-CXJNOpPG.js")).default, KMLLayer: async () => (await import("./KMLLayer-C2nG2PjZ.js")).default, KnowledgeGraphLayer: async () => (await import("./KnowledgeGraphLayer-Did8Bv-E.js")).default, LineOfSightLayer: async () => (await import("./LineOfSightLayer-CBHYxxkn.js")).default, LinkChartLayer: async () => (await import("./LinkChartLayer-c6xBQakE.js")).default, MapImageLayer: async () => (await import("./main-CNI-dCKS.js").then((a) => a.rd)).default, MapNotesLayer: async () => (await import("./MapNotesLayer-Dh-r-vGm.js")).default, MediaLayer: async () => (await import("./MediaLayer-CojTtA_o.js")).default, OGCFeatureLayer: async () => (await import("./OGCFeatureLayer-BWyhzmoi.js")).default, OpenStreetMapLayer: async () => (await import("./main-CNI-dCKS.js").then((a) => a.rf)).default, OrientedImageryLayer: async () => (await import("./OrientedImageryLayer-CTWyHjgM.js")).default, PointCloudLayer: async () => (await import("./PointCloudLayer-B2EjWH8A.js")).default, RouteLayer: async () => (await import("./RouteLayer-BnBQGAVO.js")).default, SceneLayer: async () => (await import("./SceneLayer-gdpOkWIC.js")).default, StreamLayer: async () => (await import("./StreamLayer-CwQ9giyR.js")).default, SubtypeGroupLayer: async () => (await import("./SubtypeGroupLayer-CMA0tC_j.js")).default, TileLayer: async () => (await import("./main-CNI-dCKS.js").then((a) => a.rg)).default, UnknownLayer: async () => (await import("./UnknownLayer-q0Y0QHv5.js")).default, UnsupportedLayer: async () => (await import("./UnsupportedLayer-CfeqLWR0.js")).default, VectorTileLayer: async () => (await import("./VectorTileLayer-Dla_1tKa.js")).default, VideoLayer: async () => (await import("./VideoLayer-Bi573sxE.js")).default, VoxelLayer: async () => (await import("./VoxelLayer-CXJWf3oE.js")).default, WFSLayer: async () => (await import("./WFSLayer-CdMhRfAK.js")).default, WMSLayer: async () => (await import("./main-CNI-dCKS.js").then((a) => a.rh)).default, WMTSLayer: async () => (await import("./WMTSLayer-DrPOoX_F.js")).default, WebTileLayer: async () => (await import("./main-CNI-dCKS.js").then((a) => a.re)).default }, f = /* @__PURE__ */ new Set(["Catalog Layer", "Feature Layer", "Oriented Imagery Layer"]);
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
//# sourceMappingURL=fetchService-DLzYXr70.js.map
