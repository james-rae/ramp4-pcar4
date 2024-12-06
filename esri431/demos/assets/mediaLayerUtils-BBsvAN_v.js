import { P, $ } from './utils-C-WE30D3.js';
import { o } from './jsonContext-Cc_ThWol.js';
import { l as l$1, a, f as f$1 } from './main-jdFDoOPu.js';
import { p as p$1 } from './resourceUtils-D-R7C4TD.js';
import './originUtils-DHNPWZlz.js';
import './multiOriginJSONSupportUtils-ThJwHdA9.js';
import './saveUtils-ByJ2hADu.js';
import './preload-helper-dJJaZANz.js';
import './resourceUtils-CpdVzHFD.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const i="Media Layer",u="media-layer-save",p="media-layer-save-as",l=["media-layer:unsupported-source"];function m(e){return {isValid:"media"===e.type,errorMessage:"Layer.type should be 'media'"}}function c(e){return o(e,"portal-item",!0)}function y(e){return Promise.resolve(e.layerJSON)}async function f(e,r){r.extent=e.fullExtent?await l$1(e.fullExtent):null;}async function d(e,r){r.title||=e.title,await f(e,r),a(r,f$1.METADATA);}async function v(r,t){return P({layer:r,itemType:i,validateLayer:m,createJSONContext:e=>c(e),createItemData:y,errorNamePrefix:u,supplementalUnsupportedErrors:l,setItemProperties:f,saveResources:(e,t)=>p$1(r.resourceReferences,t)},t)}async function x(e,t,a){return $({layer:e,itemType:i,validateLayer:m,createJSONContext:e=>c(e),createItemData:y,errorNamePrefix:p,supplementalUnsupportedErrors:l,newItem:t,setItemProperties:d,saveResources:(r,t)=>p$1(e.resourceReferences,t)},a)}

export { v as save, x as saveAs };
