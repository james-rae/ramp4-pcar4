import{P as y,$ as n}from"./utils-PNmxyu3h.js";import{l as p,a as c,f as i,u}from"./portalItemUtils-Bh5bujq4.js";import"./main-CdIhtOSF.js";import"./preload-helper-ExcqyqRp.js";import"./originUtils-CPX8CCAY.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./PortalItem-cdYEWUwg.js";import"./jsonContext-BVlB2WA0.js";import"./saveUtils-DP3TykpF.js";import"./projection-CnhLv0Zh.js";import"./projectBuffer-DZLir_15.js";const s="Image Service",g="imagery-layer-save",v="imagery-layer-save-as",f="imagery-tile-layer-save",d="imagery-tile-layer-save-as";function m(r){if(r.type==="imagery")return{isValid:!0};const{raster:e}=r,t=e?.datasetFormat==="Function"?e.primaryRasters?.rasters[0]:e;return{isValid:t?.datasetFormat==="RasterTileServer"&&(t.tileType==="Raster"||t.tileType==="Map"),errorMessage:"imagery tile layer should be created from a tiled image service."}}function o(r){const e=r.layerJSON;return Promise.resolve(e&&Object.keys(e).length?e:null)}async function T(r,e){const{parsedUrl:t,title:a,fullExtent:l}=r;e.url=t.path,e.title||=a;try{e.extent=await p(l)}catch{e.extent=void 0}c(e,i.METADATA),u(e,i.TILED_IMAGERY,r.type==="imagery-tile")}async function N(r,e){const t=r.type==="imagery"?g:f;return y({layer:r,itemType:s,validateLayer:m,createItemData:o,errorNamePrefix:t},e)}async function S(r,e,t){const a=r.type==="imagery"?v:d;return n({layer:r,itemType:s,validateLayer:m,createItemData:o,errorNamePrefix:a,newItem:e,setItemProperties:T},t)}export{N as save,S as saveAs};
