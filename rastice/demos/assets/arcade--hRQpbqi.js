import{s as g,h as G,bO as L,b as P,b1 as I}from"./main-CUxU9bWS.js";import{a as T,n as F,m as S}from"./TimeOnly-UPu6MbGY.js";import{t as J}from"./ImmutableArray-BPVd6ESQ.js";import M from"./FeatureLayer-CSBS7HG-.js";import{d as z}from"./FeatureSet-DfeeRncM.js";import"./preload-helper-ExcqyqRp.js";import"./UnknownTimeZone-3zgfWq7J.js";import"./UniqueValueRenderer-q-xEqSsg.js";import"./RendererLegendOptions-ClFRbpMJ.js";import"./diffUtils-MlvZK1EN.js";import"./colorRamps-BcGQYd3C.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./visualVariableUtils-BMp8yUlC.js";import"./compilerUtils-MfGGJ6jp.js";import"./lengthUtils-D1bX0TD8.js";import"./styleUtils-BDJDtTPo.js";import"./jsonUtils-DxQxwarO.js";import"./LRUCache-uHJJcn0o.js";import"./Version-CNYnG8Q4.js";import"./FieldsIndex-DosTqN4i.js";import"./OverrideHelper-B8uiocSy.js";import"./colorUtils-Lyjc4zh-.js";import"./vec42-CKs01hkn.js";import"./common-DQOJ18NT.js";import"./vec4f64-CMoMXWBi.js";import"./utils-QWndGYJy.js";import"./enums-CmIX1y88.js";import"./quantizationUtils-4P_ZGotl.js";import"./heatmapUtils-DUymcvS2.js";import"./MultiOriginJSONSupport--LuP6_0p.js";import"./commonProperties-BWvpypTA.js";import"./ElevationInfo-M4dU7fC5.js";import"./FeatureLayerBase-p9ILXOK9.js";import"./Field-7yKaqquJ.js";import"./fieldType-RAe-KhZA.js";import"./HeightModelInfo-Bs21Ef5D.js";import"./arcgisLayerUrl-Dpu7DwcZ.js";import"./featureLayerUtils-BNFY5TJB.js";import"./uuid-Cl5lrJ4c.js";import"./Query-gAxGVVkN.js";import"./RelationshipQuery-DqTTQxFc.js";import"./LayerFloorInfo-B91mXTg1.js";import"./Relationship-DDm6GyP_.js";import"./serviceCapabilitiesUtils-DOl5xdNq.js";import"./Layer-VQ4_KGgj.js";import"./workers-7zdfU5xG.js";import"./editsZScale-MTZIgzGh.js";import"./queryZScale-B0hWeZIg.js";import"./projection-BIYcHcNR.js";import"./projectBuffer-B22kEXxF.js";import"./APIKeyMixin-e_Cmqj_M.js";import"./ArcGISService-D6klgNc1.js";import"./BlendLayer-CRA6VAX4.js";import"./jsonUtils-aqm3pfo-.js";import"./parser-D_L7gZcx.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-DSQ66VqF.js";import"./CustomParametersMixin-aqwVckPS.js";import"./EditBusLayer-BIS5fdB9.js";import"./FeatureEffectLayer-r5_lnCrP.js";import"./FeatureEffect-Dd4zOEJp.js";import"./FeatureFilter-dAu7YW85.js";import"./FeatureReductionLayer-BPwZjdKL.js";import"./FeatureReductionSelection-CwFR_uSW.js";import"./labelingInfo-sXCz7XmM.js";import"./labelUtils-CnZtiCO7.js";import"./MD5-C9MwAd2G.js";import"./OperationalLayer-CBtw9AoM.js";import"./OrderedLayer-B-2nc68t.js";import"./OrderByInfo-B5ab0BgK.js";import"./PortalLayer-COSV0Acm.js";import"./PortalItem-Ch5wKdnK.js";import"./portalItemUtils-BMjf2BVv.js";import"./RefreshableLayer-DhBAjrgh.js";import"./ScaleRangeLayer-B2dXyvbe.js";import"./TemporalLayer-DnPxXc7H.js";import"./TimeInfo-C3qfLVA5.js";import"./FeatureTemplate-MAZrovrM.js";import"./FeatureType-D1FVPeL_.js";import"./fieldProperties-DOrrvvOT.js";import"./versionUtils-oRnSy5Tr.js";import"./styleUtils-DPY2mD2U.js";import"./popupUtils-DHmw5Q00.js";import"./AlphaCutoff-UcccL64p.js";import"./interfaces-CL2NbQte.js";let b=null;function E(e,i,r,o={}){const a=i.elementType,n="value",m=a.type==="array"?[{name:n,type:a.type,elementType:a.elementType}]:a.type==="dictionary"?[{name:n,type:a.type,properties:a.properties}]:[{name:n,type:a.type}];return new J(e.map(p=>{const t={};return w(t,m,{[n]:p},r,o),t[n]}))}function N(e,i,r={}){const o=e instanceof z?new M({source:e.features,geometryType:e.geometryType,fields:e.fields,spatialReference:e.spatialReference}):e;return i.constructFeatureSet(o,r.spatialReference,null,!0,r.lruCache,r.interceptor)}function X(e,i,r={}){const{spatialReference:o,interceptor:a,lruCache:n}=r;return typeof e=="string"?i.createFeatureSetCollectionFromService(e,o,n,a):i.createFeatureSetCollectionFromMap(e,o,n,a)}function Y(e,i,r,o={}){const a={};return w(a,i.properties,e,r,o),new b.Dictionary(a)}function w(e,i,r,o,a={}){const n={};for(const m of Object.keys(r))n[m.toLowerCase()]=r[m];for(const m of i){const p=m.name.toLowerCase();if(a.variablesPreProcessed)e[p]=n[p];else switch(m.type){case"array":{const t=n[p];e[p]=t==null?null:E(t,m,o,a);break}case"feature":{const t=n[p];e[p]=t==null?null:b.Feature.createFromGraphic(t,a?.timeZone);break}case"featureSet":{const t=n[p];e[p]=t==null?null:o?N(t,o,a):null;break}case"featureSetCollection":{const t=n[p];e[p]=t==null?null:o?X(t,o,a):null;break}case"dictionary":{const t=n[p];e[p]=t==null?null:Y(t,m,o,a);break}case"date":{const t=n[p];e[p]=t?t instanceof S?t:a?.timeZone?S.dateJSAndZoneToArcadeDate(t,a?.timeZone):S.dateJSToArcadeDate(t):null;break}case"dateOnly":{const t=n[p];e[p]=t?t instanceof F?t:F.fromReader(t):null;break}case"time":{const t=n[p];e[p]=t?t instanceof T?t:T.fromReader(t):null;break}case"knowledgeGraph":case"geometry":case"boolean":case"text":case"number":e[p]=n[p]}}}function Z(e,i){for(const r of e)i.push(r),r.type==="dictionary"&&Z(r.properties,i);return i}function R(e,i,r,o,a){const{spatialReference:n,interceptor:m,lruCache:p,console:t,abortSignal:u,timeZone:c,services:$={portal:P.getDefault()}}=r,f={vars:{},spatialReference:n,interceptor:m,timeZone:c,lrucache:p,useAsync:a,services:$,console:t,abortSignal:u};return i&&w(f.vars,e.variables,i,o,r),f}function v(e,i){switch(i.getArcadeType(e)){case"number":case"text":case"boolean":case"point":case"polygon":case"polyline":case"multipoint":case"extent":return e;case"date":return e.toJSDate();case"time":case"dateOnly":return e.toString();case"feature":{const r=(e.type,e),o="geometry"in r?r.geometry():null,a="readAttributes"in r?r.readAttributes():r.attributes;return new I({geometry:o,attributes:a})}case"dictionary":{const r=e,o=r.attributes,a={};for(const n of Object.keys(o))a[n]=v(r.field(n),i);return a}case"array":return("toArray"in e?e.toArray():e).map(r=>v(r,i))}return e}const O={variables:[{name:"$feature",type:"feature"},{name:"$layer",type:"featureSet"},{name:"$datastore",type:"featureSetCollection"},{name:"$map",type:"featureSetCollection"},{name:"$userInput",type:"geometry"},{name:"$graph",type:"knowledgeGraph"}]},D={variables:[{name:"$feature",type:"feature"},{name:"$aggregatedFeatures",type:"featureSet"}]},U=new Map([["aggregate-field",{variables:[{name:"$feature",type:"feature"}]}],["form-constraint",{variables:[{name:"$feature",type:"feature"}]}],["feature-z",{variables:[{name:"$feature",type:"feature"}]}],["field-calculation",{variables:[{name:"$feature",type:"feature"},{name:"$datastore",type:"featureSetCollection"}]}],["form-calculation",{variables:[{name:"$feature",type:"feature"},{name:"$originalFeature",type:"feature"},{name:"$layer",type:"featureSet"},{name:"$featureSet",type:"featureSet"},{name:"$datastore",type:"featureSetCollection"},{name:"$map",type:"featureSetCollection"},{name:"$editContext",type:"dictionary",properties:[{name:"editType",type:"text"}]}]}],["labeling",{variables:[{name:"$feature",type:"feature"}]}],["popup",O],["popup-element",O],["feature-reduction-popup",D],["feature-reduction-popup-element",D],["visualization",{variables:[{name:"$feature",type:"feature"},{name:"$view",type:"dictionary",properties:[{name:"scale",type:"number"}]}]}]]);function Ct(e){const i=U.get(e);if(!i){const r=Array.from(U.keys()).map(o=>`'${o}'`).join(", ");throw new g("createArcadeProfile:invalid-profile-name",`Invalid profile name '${e}'. You must specify one of the following values: ${r}`)}return G(i)}async function At(e,i,r={}){b||(b=await L());const{arcade:o,arcadeUtils:a}=b,{loadScriptDependencies:n,referencesMember:m,scriptIsAsync:p}=o,t=Z(i.variables,[]),u=t.filter(s=>s.type==="featureSet"||s.type==="featureSetCollection").map(s=>s.name.toLowerCase()),c=o.parseScript(e,u);if(!c)throw new g("arcade:invalid-script","Unable to create SyntaxTree");const $=a.extractFieldNames(c),f=o.scriptTouchesGeometry(c),h=t.map(s=>s.name.toLowerCase()).filter(s=>m(c,s)),l=p(c,u);await n(c,l,u);const C={vars:{},spatialReference:null,useAsync:l};for(const s of h)C.vars[s]="any";const{lruCache:A}=r,x=o.compileScript(c,C),k=o.featureSetUtils(),{services:j}=r;return{execute:(s,y={})=>{if(l)throw new g("arcade:invalid-execution-mode","Cannot execute the script in synchronous mode");const d=x(R(i,s,{lruCache:A,...y},k,l));return y.rawOutput?d:v(d,a)},executeAsync:async(s,y={})=>{const d=await x(R(i,s,{lruCache:A,services:j,...y},k,l));return y.rawOutput?d:v(d,a)},isAsync:l,variablesUsed:h,fieldsUsed:$,geometryUsed:f,syntaxTree:c}}export{At as createArcadeExecutor,Ct as createArcadeProfile};