import{bk as n,aw as p}from"./main-CUxU9bWS.js";import{d as e}from"./queryTopFeatures-UH60XDCZ.js";import s from"./TopFeaturesQuery-DwOUYId1.js";import"./preload-helper-ExcqyqRp.js";import"./query-ScoHz3Q8.js";import"./pbfQueryUtils-D_M4Y8xK.js";import"./pbf-QXd8vFhO.js";import"./OptimizedFeature-CIptWNVu.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./queryZScale-B0hWeZIg.js";import"./projection-BIYcHcNR.js";import"./projectBuffer-B22kEXxF.js";async function E(i,m,r){const a=n(i),o=await e(a,s.from(m),{...r}),t=o.data.extent;return!t||isNaN(t.xmin)||isNaN(t.ymin)||isNaN(t.xmax)||isNaN(t.ymax)?{count:o.data.count,extent:null}:{count:o.data.count,extent:p.fromJSON(t)}}export{E as executeForTopExtents};