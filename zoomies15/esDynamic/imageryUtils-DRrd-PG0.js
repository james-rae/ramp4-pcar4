import{P as m,$ as o}from"./utils-CfoO0NHP.js";import{l as c,a as p,u,f as s}from"./portalItemUtils-CRd8e_YS.js";const i="Image Service",f="imagery-layer-save",g="imagery-layer-save-as",v="imagery-tile-layer-save",d="imagery-tile-layer-save-as";function y(r){if(r.type==="imagery")return{isValid:!0};const{raster:e}=r,t=e?.datasetFormat==="Function"?e.primaryRasters?.rasters[0]:e;return{isValid:t?.datasetFormat==="RasterTileServer"&&(t.tileType==="Raster"||t.tileType==="Map"),errorMessage:"imagery tile layer should be created from a tiled image service."}}function l(r){const e=r.layerJSON;return Promise.resolve(e&&Object.keys(e).length?e:null)}async function T(r,e){const{parsedUrl:t,title:a,fullExtent:n}=r;e.url=t.path,e.title||=a;try{e.extent=await c(n)}catch{e.extent=void 0}p(e,s.METADATA),u(e,s.TILED_IMAGERY,r.type==="imagery-tile")}async function I(r,e){const t=r.type==="imagery"?f:v;return m({layer:r,itemType:i,validateLayer:y,createItemData:l,errorNamePrefix:t},e)}async function x(r,e,t){const a=r.type==="imagery"?g:d;return o({layer:r,itemType:i,validateLayer:y,createItemData:l,errorNamePrefix:a,newItem:e,setItemProperties:T},t)}export{I as save,x as saveAs};
