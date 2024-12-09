import { U as l } from "./main-DZxT3i7S.js";
async function s(a, t) {
  const { data: e } = await l(a, { responseType: "json", query: { f: "json", ...t?.customParameters, token: t?.apiKey } });
  return e;
}
const h = { BingMapsLayer: async () => (await import("./BingMapsLayer-CpYnVWFC.js")).default, BuildingSceneLayer: async () => (await import("./BuildingSceneLayer-BfgaDrOx.js")).default, CSVLayer: async () => (await import("./CSVLayer-Bt0bKFpf.js")).default, CatalogLayer: async () => (await import("./CatalogLayer-DLd-D3eI.js")).default, DimensionLayer: async () => (await import("./DimensionLayer-Dnmk5JA1.js")).default, ElevationLayer: async () => (await import("./ElevationLayer-Daluh6Ue.js")).default, FeatureLayer: async () => (await import("./main-DZxT3i7S.js").then((a) => a.vj)).default, GeoJSONLayer: async () => (await import("./GeoJSONLayer-BuhD8o4T.js")).default, GeoRSSLayer: async () => (await import("./GeoRSSLayer-FKHDIBLF.js")).default, GroupLayer: async () => (await import("./GroupLayer-BnL8ZtVB.js")).default, ImageryLayer: async () => (await import("./main-DZxT3i7S.js").then((a) => a.vk)).default, ImageryTileLayer: async () => (await import("./ImageryTileLayer-BIkJCRLv.js")).default, IntegratedMesh3DTilesLayer: async () => (await import("./IntegratedMesh3DTilesLayer-CsmR7_IG.js")).default, IntegratedMeshLayer: async () => (await import("./IntegratedMeshLayer-wnLPgr0E.js")).default, KMLLayer: async () => (await import("./KMLLayer-BU6tE1zD.js")).default, KnowledgeGraphLayer: async () => (await import("./KnowledgeGraphLayer-BvS77qtA.js")).default, LineOfSightLayer: async () => (await import("./LineOfSightLayer-fdFo_j5e.js")).default, LinkChartLayer: async () => (await import("./LinkChartLayer-CfG0MnWp.js")).default, MapImageLayer: async () => (await import("./main-DZxT3i7S.js").then((a) => a.vl)).default, MapNotesLayer: async () => (await import("./MapNotesLayer-DdwxUp8T.js")).default, MediaLayer: async () => (await import("./MediaLayer-BIkORPee.js")).default, OGCFeatureLayer: async () => (await import("./OGCFeatureLayer-BlKC8U0g.js")).default, OpenStreetMapLayer: async () => (await import("./main-DZxT3i7S.js").then((a) => a.vn)).default, OrientedImageryLayer: async () => (await import("./OrientedImageryLayer-zCcHnnER.js")).default, PointCloudLayer: async () => (await import("./PointCloudLayer-DGWo2Zmz.js")).default, RouteLayer: async () => (await import("./RouteLayer-DDdN3ioE.js")).default, SceneLayer: async () => (await import("./SceneLayer-BTeo4Yqk.js")).default, StreamLayer: async () => (await import("./StreamLayer-CvAUwZSh.js")).default, SubtypeGroupLayer: async () => (await import("./SubtypeGroupLayer-BPpAKvRe.js")).default, TileLayer: async () => (await import("./main-DZxT3i7S.js").then((a) => a.vo)).default, UnknownLayer: async () => (await import("./UnknownLayer-1hLuYY1q.js")).default, UnsupportedLayer: async () => (await import("./UnsupportedLayer-B0DYLvti.js")).default, VectorTileLayer: async () => (await import("./VectorTileLayer-S56kIUvG.js")).default, VideoLayer: async () => (await import("./VideoLayer-B8CQ47a1.js")).default, ViewshedLayer: async () => (await import("./ViewshedLayer-BGixgI2J.js")).default, VoxelLayer: async () => (await import("./VoxelLayer-BzHR2oLj.js")).default, WFSLayer: async () => (await import("./WFSLayer-B2SbdTwB.js")).default, WMSLayer: async () => (await import("./main-DZxT3i7S.js").then((a) => a.vp)).default, WMTSLayer: async () => (await import("./WMTSLayer-lffKcdYh.js")).default, WebTileLayer: async () => (await import("./main-DZxT3i7S.js").then((a) => a.vm)).default }, p = /* @__PURE__ */ new Set(["Catalog Layer", "Feature Layer", "Oriented Imagery Layer"]);
async function S(a, t) {
  const { loadContext: e, ...r } = t || {}, i = e ? await e.fetchServiceMetadata(a, r) : await s(a, r);
  u(i), c(i);
  const y = { serviceJSON: i };
  if ((i.currentVersion ?? 0) < 10.5) return y;
  const o = `${a}/layers`, n = e ? await e.fetchServiceMetadata(o, r) : await s(o, r);
  return u(n), c(n), y.layersJSON = { layers: n.layers, tables: n.tables }, y;
}
function f(a) {
  const { type: t } = a;
  return !!t && p.has(t);
}
function d(a) {
  return a.type === "Table";
}
function c(a) {
  a.layers = a.layers?.filter(f), a.tables = a.tables?.filter(d);
}
function m(a) {
  a.type ||= "Feature Layer";
}
function L(a) {
  a.type ||= "Table";
}
function u(a) {
  a.layers?.forEach(m), a.tables?.forEach(L);
}
function g(a) {
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
  g as i,
  S as t
};
//# sourceMappingURL=fetchService-BbX6Wqej.js.map
