import { $, j } from './utils-DbnOqzmT.js';
import { o } from './jsonContext-CLNEFAHJ.js';
import { r as s, a, f as f$1, i } from './main-CGBWc59Z.js';
import { p as p$1 } from './resourceUtils-CR08Kwrh.js';
import './originUtils-Do2K3Z97.js';
import './multiOriginJSONSupportUtils-C5oGZ9U0.js';
import './saveAPIKeyUtils-EUYYaWcY.js';
import './saveUtils-BK0O4joz.js';
import './preload-helper-dJJaZANz.js';
import './resourceUtils-DJn3jrs0.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
const u="Group Layer",c="group-layer-save",l="group-layer-save-as",p=f$1.GROUP_LAYER_MAP;function m(e){return {isValid:"group"===e.type,errorMessage:"Layer.type should be 'group'"}}function y(e){return {isValid:s(e,p),errorMessage:`Layer.portalItem.typeKeywords should have '${p}'`}}function f(e,r){return {...o(e,"web-map",!0),initiator:r}}function v(e){const r=e.layerJSON;return Promise.resolve(r&&Object.keys(r).length?r:null)}async function d(e,r){r.title||=e.title,a(r,f$1.METADATA),i(r,p);}async function I(r,t){return $({layer:r,itemType:u,validateLayer:m,validateItem:y,createJSONContext:e=>f(e,r),createItemData:v,errorNamePrefix:c,saveResources:async(e,t)=>(r.sourceIsPortalItem||await e.removeAllResources().catch((()=>{})),p$1(r.resourceReferences,t))},t)}async function g(e,t,o){return j({layer:e,itemType:u,validateLayer:m,createJSONContext:r=>f(r,e),createItemData:v,errorNamePrefix:l,newItem:t,setItemProperties:d,saveResources:(r,t)=>p$1(e.resourceReferences,t)},o)}

export { I as save, g as saveAs };
