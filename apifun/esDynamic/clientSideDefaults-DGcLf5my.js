import{c2 as u,c3 as n,c4 as a,aY as i,o as c}from"./main-DeRV24Di.js";import{t as l,s as y}from"./QueryEngineCapabilities-C8pazosU.js";function d(t){return{renderer:{type:"simple",symbol:t==="esriGeometryPoint"||t==="esriGeometryMultipoint"?u:t==="esriGeometryPolyline"?n:a}}}const m=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let h=1;function A(t,s){if(i("esri-csp-restrictions"))return()=>({[s]:null,...t});try{let e=`this${p(s)} = null;`;for(const r in t)e+=`this${p(r)} = ${JSON.stringify(t[r])};`;const o=new Function(`
      return class AttributesClass$${h++} {
        constructor() {
          ${e};
        }
      }
    `)();return()=>new o}catch{return()=>({[s]:null,...t})}}function p(t){return m.test(t)?`.${t}`:`["${t}"]`}function f(t={}){return[{name:"New Feature",description:"",prototype:{attributes:c(t)}}]}function $(t,s){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,isBranchVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:t},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:s,supportsDelete:s,supportsEditing:s,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryBins:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:s,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:l,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},queryAttributeBins:y,editing:{supportsGeometryUpdate:s,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}export{A as a,f as l,d as u,$ as y};
