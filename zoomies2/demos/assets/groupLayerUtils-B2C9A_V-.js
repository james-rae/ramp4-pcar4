import{P as l,$ as y}from"./utils-RIBJfWeJ.js";import{o as f}from"./jsonContext-B8pHXiZ1.js";import{s as v,a as d,f as s,i as I}from"./portalItemUtils-DzYGRPSn.js";import{p as i}from"./resourceUtils-BzQtoccS.js";import"./main-BxgY9rsH.js";import"./preload-helper-ExcqyqRp.js";import"./originUtils-CPX8CCAY.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./PortalItem-BsyR8trZ.js";import"./saveUtils-DGRmzCPU.js";import"./projection-DMFhF-YC.js";import"./projectBuffer-DIzlXyWh.js";import"./uuid-Cl5lrJ4c.js";import"./resourceUtils-DoVza_kQ.js";const n="Group Layer",g="group-layer-save",P="group-layer-save-as",a=s.GROUP_LAYER_MAP;function m(e){return{isValid:e.type==="group",errorMessage:"Layer.type should be 'group'"}}function A(e){return{isValid:v(e,a),errorMessage:`Layer.portalItem.typeKeywords should have '${a}'`}}function p(e,r){return{...f(e,"web-map",!0),initiator:r}}function c(e){const r=e.layerJSON;return Promise.resolve(r&&Object.keys(r).length?r:null)}async function R(e,r){r.title||=e.title,d(r,s.METADATA),I(r,a)}async function E(e,r){return l({layer:e,itemType:n,validateLayer:m,validateItem:A,createJSONContext:t=>p(t,e),createItemData:c,errorNamePrefix:g,saveResources:async(t,o)=>(e.sourceIsPortalItem||await t.removeAllResources().catch(()=>{}),i(e.resourceReferences,o))},r)}async function G(e,r,t){return y({layer:e,itemType:n,validateLayer:m,createJSONContext:o=>p(o,e),createItemData:c,errorNamePrefix:P,newItem:r,setItemProperties:R,saveResources:(o,u)=>i(e.resourceReferences,u)},t)}export{E as save,G as saveAs};
