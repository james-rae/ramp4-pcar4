import { $, j } from './utils-D4h5akW7.js';
import { o } from './jsonContext-BRhHLCJ2.js';
import { l as l$1, b as a, f as f$1 } from './main-Cr6PLPJi.js';
import { p as p$1 } from './resourceUtils-CsT7B-Fu.js';
import './originUtils-CRfESh92.js';
import './multiOriginJSONSupportUtils-Dlz6FGm5.js';
import './saveAPIKeyUtils-BSLPWKOd.js';
import './saveUtils-DC9ou5_c.js';
import './preload-helper-dJJaZANz.js';
import './resourceUtils-BE1bE_4M.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const i="Media Layer",p="media-layer-save",u="media-layer-save-as",l=["media-layer:unsupported-source"];function m(e){return {isValid:"media"===e.type,errorMessage:"Layer.type should be 'media'"}}function c(e){return o(e,"portal-item",!0)}function y(e){return e.layerJSON}async function f(e,r){const{title:t,fullExtent:n}=e;r.title||=t,r.extent=n?await l$1(n):null,a(r,f$1.METADATA);}async function d(r,t){return $({layer:r,itemType:i,validateLayer:m,createJSONContext:e=>c(e),createItemData:y,errorNamePrefix:p,supplementalUnsupportedErrors:l,saveResources:(e,t)=>p$1(r.resourceReferences,t)},t)}async function v(e,t,a){return j({layer:e,itemType:i,validateLayer:m,createJSONContext:e=>c(e),createItemData:y,errorNamePrefix:u,supplementalUnsupportedErrors:l,newItem:t,setItemProperties:f,saveResources:(r,t)=>p$1(e.resourceReferences,t)},a)}

export { d as save, v as saveAs };
