import{bB as a}from"./main-D_jCcUNd.js";import{f as n}from"./utils-DlXSLgCK.js";import{d as e}from"./queryTopFeatures-BMPhxWP8.js";import s from"./TopFeaturesQuery-Bq22ZdkV.js";import"./preload-helper-ExcqyqRp.js";import"./normalizeUtils-Gz60uU0X.js";import"./normalizeUtilsCommon-BboKzpCl.js";import"./utils-3tCdmWBq.js";import"./query-B055u0pr.js";import"./pbfQueryUtils-pBbxWXea.js";import"./pbf-BuCHTg-s.js";import"./memoryEstimations-CE0MHqcd.js";import"./OptimizedFeature-jM_20Y6K.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./queryZScale-1Li2ynEg.js";import"./projection-DswCNHiF.js";import"./projectBuffer-B9jUCpdF.js";import"./TimeExtent-BsjGA75b.js";async function g(m,r,i){const p=n(m),o=await e(p,s.from(r),{...i}),t=o.data.extent;return!t||isNaN(t.xmin)||isNaN(t.ymin)||isNaN(t.xmax)||isNaN(t.ymax)?{count:o.data.count,extent:null}:{count:o.data.count,extent:a.fromJSON(t)}}export{g as executeForTopExtents};
