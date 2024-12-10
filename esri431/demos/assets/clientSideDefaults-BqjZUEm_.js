import { N as l$1, O as o, P as S, Q as has, T as a$1 } from './main-jdFDoOPu.js';
import { t } from './QueryEngineCapabilities-Dh6IsAQ1.js';
import { s } from './capabilities-BB_1wAug.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function u(t){return {renderer:{type:"simple",symbol:"esriGeometryPoint"===t||"esriGeometryMultipoint"===t?l$1:"esriGeometryPolyline"===t?o:S}}}const n=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let i=1;function a(t,s){if(has("esri-csp-restrictions"))return ()=>({[s]:null,...t});try{let r=`this${c(s)} = null;`;for(const s in t){r+=`this${c(s)} = ${JSON.stringify(t[s])};`;}const e=new Function(`\n      return class AttributesClass$${i++} {\n        constructor() {\n          ${r};\n        }\n      }\n    `)();return ()=>new e}catch(r){return ()=>({[s]:null,...t})}}function c(t){return n.test(t)?`.${t}`:`["${t}"]`}function l(s={}){return [{name:"New Feature",description:"",prototype:{attributes:a$1(s)}}]}function y(t$1,e){return {analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,isBranchVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:t$1},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:e,supportsDelete:e,supportsEditing:e,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryBins:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:e,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:t,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},queryBins:s,editing:{supportsGeometryUpdate:e,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}

export { a, l, u, y };
