import{P as c,$ as f}from"./utils-RIBJfWeJ.js";import{o as y}from"./jsonContext-B8pHXiZ1.js";import{l as d,a as v,f as x}from"./portalItemUtils-DzYGRPSn.js";import{p as o}from"./resourceUtils-BzQtoccS.js";import"./main-BxgY9rsH.js";import"./preload-helper-ExcqyqRp.js";import"./originUtils-CPX8CCAY.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./PortalItem-BsyR8trZ.js";import"./saveUtils-DGRmzCPU.js";import"./projection-DMFhF-YC.js";import"./projectBuffer-DIzlXyWh.js";import"./uuid-Cl5lrJ4c.js";import"./resourceUtils-DoVza_kQ.js";const i="Media Layer",P="media-layer-save",E="media-layer-save-as",s=["media-layer:unsupported-source"];function n(e){return{isValid:e.type==="media",errorMessage:"Layer.type should be 'media'"}}function m(e){return y(e,"portal-item",!0)}function p(e){return Promise.resolve(e.layerJSON)}async function u(e,r){r.extent=e.fullExtent?await d(e.fullExtent):null}async function I(e,r){r.title||=e.title,await u(e,r),v(r,x.METADATA)}async function b(e,r){return c({layer:e,itemType:i,validateLayer:n,createJSONContext:t=>m(t),createItemData:p,errorNamePrefix:P,supplementalUnsupportedErrors:s,setItemProperties:u,saveResources:(t,a)=>o(e.resourceReferences,a)},r)}async function g(e,r,t){return f({layer:e,itemType:i,validateLayer:n,createJSONContext:a=>m(a),createItemData:p,errorNamePrefix:E,supplementalUnsupportedErrors:s,newItem:r,setItemProperties:I,saveResources:(a,l)=>o(e.resourceReferences,l)},t)}export{b as save,g as saveAs};
