import{aw as p}from"./main-CdIhtOSF.js";import{f as n}from"./utils-kWDIrouF.js";import{d as e}from"./queryTopFeatures-CRzzDXmd.js";import s from"./TopFeaturesQuery-B_aZOMTi.js";import"./preload-helper-ExcqyqRp.js";import"./normalizeUtils-qPTI-JWL.js";import"./normalizeUtilsCommon-BXVb4wIq.js";import"./utils-DUjqKEgR.js";import"./query-DwRs8fIu.js";import"./pbfQueryUtils-Bw_M9fGY.js";import"./pbf-C8cocHgP.js";import"./OptimizedFeature-CIptWNVu.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./queryZScale-CqooJ_wi.js";import"./projection-CnhLv0Zh.js";import"./projectBuffer-DZLir_15.js";import"./TimeExtent-D0MhnQJi.js";async function g(m,r,i){const a=n(m),o=await e(a,s.from(r),{...i}),t=o.data.extent;return!t||isNaN(t.xmin)||isNaN(t.ymin)||isNaN(t.xmax)||isNaN(t.ymax)?{count:o.data.count,extent:null}:{count:o.data.count,extent:p.fromJSON(t)}}export{g as executeForTopExtents};
