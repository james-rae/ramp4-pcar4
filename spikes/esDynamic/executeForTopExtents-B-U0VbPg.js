import{au as e}from"./main-DaZH2qzH.js";import{f as i}from"./utils-CPc9xUPA.js";import{d as s}from"./queryTopFeatures-BEC_m6yG.js";import u from"./TopFeaturesQuery-CefYT4al.js";async function x(o,n,r){const m=i(o),a=await s(m,u.from(n),{...r}),t=a.data.extent;return!t||isNaN(t.xmin)||isNaN(t.ymin)||isNaN(t.xmax)||isNaN(t.ymax)?{count:a.data.count,extent:null}:{count:a.data.count,extent:e.fromJSON(t)}}export{x as executeForTopExtents};
