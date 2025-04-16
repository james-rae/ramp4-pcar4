import{s as g,h as G,bJ as J,b as L,b3 as P}from"./main-CdIhtOSF.js";import{a as T,n as F,m as S}from"./TimeOnly-cd2n4C2r.js";import{t as I}from"./ImmutableArray-BPVd6ESQ.js";import M from"./FeatureLayer-BxwPwGud.js";import{d as z}from"./FeatureSet-BQdb6guQ.js";import"./preload-helper-ExcqyqRp.js";import"./UnknownTimeZone-COaZEnuO.js";import"./UniqueValueRenderer-DRJ8CtOE.js";import"./RendererLegendOptions-x23cHoHr.js";import"./diffUtils-Ckw3sVu6.js";import"./colorRamps-DKgq-kbp.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./visualVariableUtils-D2ZOhSf6.js";import"./compilerUtils-C4GVPLLz.js";import"./lengthUtils-Xx-yI75s.js";import"./styleUtils-_DoBifXb.js";import"./jsonUtils-9dKz64x0.js";import"./LRUCache-BxxlRe9c.js";import"./Version-B1o4xmLe.js";import"./FieldsIndex-B-O4mYNl.js";import"./OverrideHelper-Cz7iN3Od.js";import"./colorUtils-D0tDVuIw.js";import"./vec42-CKs01hkn.js";import"./common-DQOJ18NT.js";import"./vec4f64-CMoMXWBi.js";import"./utils-QWndGYJy.js";import"./enums-CmIX1y88.js";import"./quantizationUtils-BwjzOVpi.js";import"./heatmapUtils-D-pLxh-u.js";import"./MultiOriginJSONSupport-DgeO1CjU.js";import"./commonProperties-8NI_P-D4.js";import"./ElevationInfo-k5kGeWR0.js";import"./FeatureLayerBase-ZvGIfsxj.js";import"./Field-DaVZknBl.js";import"./fieldType-5Ab7WXr4.js";import"./HeightModelInfo-DTTEyk5D.js";import"./arcgisLayerUrl-Dt83lcur.js";import"./featureLayerUtils-BtEFspZS.js";import"./uuid-Cl5lrJ4c.js";import"./Query-sr5_9KZo.js";import"./TimeExtent-D0MhnQJi.js";import"./RelationshipQuery-BsouRlKN.js";import"./LayerFloorInfo-B1o4sIbJ.js";import"./Relationship-DKjp-saK.js";import"./serviceCapabilitiesUtils-COyOjzWo.js";import"./Layer-cvHs5bqh.js";import"./workers-CMm6V5yi.js";import"./editsZScale-zmfJToA6.js";import"./queryZScale-CqooJ_wi.js";import"./projection-CnhLv0Zh.js";import"./projectBuffer-DZLir_15.js";import"./APIKeyMixin-Bs9nolhj.js";import"./ArcGISService-CP05_ktM.js";import"./BlendLayer-YcmQ_Qkh.js";import"./jsonUtils-CzZqQOU8.js";import"./parser-BsklBJ1C.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-CEtQ2yPT.js";import"./CustomParametersMixin-aXAK1U_6.js";import"./EditBusLayer-e2v1qwKR.js";import"./FeatureEffectLayer-D6bCrFuJ.js";import"./FeatureEffect-C0T7ijty.js";import"./FeatureFilter-koPlrKjI.js";import"./FeatureReductionLayer-Bd509pX_.js";import"./FeatureReductionSelection-HSavuw71.js";import"./labelingInfo-BEWIj8tu.js";import"./labelUtils-CTMfEewA.js";import"./MD5-C9MwAd2G.js";import"./OperationalLayer-ChTa0Wxj.js";import"./OrderedLayer-pl2o9jYT.js";import"./OrderByInfo-CLbEm4vY.js";import"./PortalLayer-DL8iXCHg.js";import"./PortalItem-cdYEWUwg.js";import"./portalItemUtils-Bh5bujq4.js";import"./RefreshableLayer-MDHsoCEG.js";import"./ScaleRangeLayer-Dh5qhmeW.js";import"./TemporalLayer-CzU2fejV.js";import"./TimeInfo-BQXfmJew.js";import"./FeatureTemplate-D8iQob34.js";import"./FeatureType-C5aXiY5G.js";import"./fieldProperties-CxOBZ07W.js";import"./versionUtils-zhjDo2h-.js";import"./styleUtils-DIzC_ixg.js";import"./popupUtils-B2dh3PKj.js";import"./AlphaCutoff-UcccL64p.js";import"./interfaces-CL2NbQte.js";let b=null;function E(e,i,r,o={}){const a=i.elementType,n="value",m=a.type==="array"?[{name:n,type:a.type,elementType:a.elementType}]:a.type==="dictionary"?[{name:n,type:a.type,properties:a.properties}]:[{name:n,type:a.type}];return new I(e.map(p=>{const t={};return w(t,m,{[n]:p},r,o),t[n]}))}function N(e,i,r={}){const o=e instanceof z?new M({source:e.features,geometryType:e.geometryType,fields:e.fields,spatialReference:e.spatialReference}):e;return i.constructFeatureSet(o,r.spatialReference,null,!0,r.lruCache,r.interceptor)}function X(e,i,r={}){const{spatialReference:o,interceptor:a,lruCache:n}=r;return typeof e=="string"?i.createFeatureSetCollectionFromService(e,o,n,a):i.createFeatureSetCollectionFromMap(e,o,n,a)}function Y(e,i,r,o={}){const a={};return w(a,i.properties,e,r,o),new b.Dictionary(a)}function w(e,i,r,o,a={}){const n={};for(const m of Object.keys(r))n[m.toLowerCase()]=r[m];for(const m of i){const p=m.name.toLowerCase();if(a.variablesPreProcessed)e[p]=n[p];else switch(m.type){case"array":{const t=n[p];e[p]=t==null?null:E(t,m,o,a);break}case"feature":{const t=n[p];e[p]=t==null?null:b.Feature.createFromGraphic(t,a?.timeZone);break}case"featureSet":{const t=n[p];e[p]=t==null?null:o?N(t,o,a):null;break}case"featureSetCollection":{const t=n[p];e[p]=t==null?null:o?X(t,o,a):null;break}case"dictionary":{const t=n[p];e[p]=t==null?null:Y(t,m,o,a);break}case"date":{const t=n[p];e[p]=t?t instanceof S?t:a?.timeZone?S.dateJSAndZoneToArcadeDate(t,a?.timeZone):S.dateJSToArcadeDate(t):null;break}case"dateOnly":{const t=n[p];e[p]=t?t instanceof F?t:F.fromReader(t):null;break}case"time":{const t=n[p];e[p]=t?t instanceof T?t:T.fromReader(t):null;break}case"knowledgeGraph":case"geometry":case"boolean":case"text":case"number":e[p]=n[p]}}}function Z(e,i){for(const r of e)i.push(r),r.type==="dictionary"&&Z(r.properties,i);return i}function R(e,i,r,o,a){const{spatialReference:n,interceptor:m,lruCache:p,console:t,abortSignal:u,timeZone:c,services:$={portal:L.getDefault()}}=r,f={vars:{},spatialReference:n,interceptor:m,timeZone:c,lrucache:p,useAsync:a,services:$,console:t,abortSignal:u};return i&&w(f.vars,e.variables,i,o,r),f}function v(e,i){switch(i.getArcadeType(e)){case"number":case"text":case"boolean":case"point":case"polygon":case"polyline":case"multipoint":case"extent":return e;case"date":return e.toJSDate();case"time":case"dateOnly":return e.toString();case"feature":{const r=(e.type,e),o="geometry"in r?r.geometry():null,a="readAttributes"in r?r.readAttributes():r.attributes;return new P({geometry:o,attributes:a})}case"dictionary":{const r=e,o=r.attributes,a={};for(const n of Object.keys(o))a[n]=v(r.field(n),i);return a}case"array":return("toArray"in e?e.toArray():e).map(r=>v(r,i))}return e}const D={variables:[{name:"$feature",type:"feature"},{name:"$layer",type:"featureSet"},{name:"$datastore",type:"featureSetCollection"},{name:"$map",type:"featureSetCollection"},{name:"$userInput",type:"geometry"},{name:"$graph",type:"knowledgeGraph"}]},O={variables:[{name:"$feature",type:"feature"},{name:"$aggregatedFeatures",type:"featureSet"}]},U=new Map([["aggregate-field",{variables:[{name:"$feature",type:"feature"}]}],["form-constraint",{variables:[{name:"$feature",type:"feature"}]}],["feature-z",{variables:[{name:"$feature",type:"feature"}]}],["field-calculation",{variables:[{name:"$feature",type:"feature"},{name:"$datastore",type:"featureSetCollection"}]}],["form-calculation",{variables:[{name:"$feature",type:"feature"},{name:"$originalFeature",type:"feature"},{name:"$layer",type:"featureSet"},{name:"$featureSet",type:"featureSet"},{name:"$datastore",type:"featureSetCollection"},{name:"$map",type:"featureSetCollection"},{name:"$editContext",type:"dictionary",properties:[{name:"editType",type:"text"}]}]}],["labeling",{variables:[{name:"$feature",type:"feature"}]}],["popup",D],["popup-element",D],["feature-reduction-popup",O],["feature-reduction-popup-element",O],["visualization",{variables:[{name:"$feature",type:"feature"},{name:"$view",type:"dictionary",properties:[{name:"scale",type:"number"}]}]}]]);function At(e){const i=U.get(e);if(!i){const r=Array.from(U.keys()).map(o=>`'${o}'`).join(", ");throw new g("createArcadeProfile:invalid-profile-name",`Invalid profile name '${e}'. You must specify one of the following values: ${r}`)}return G(i)}async function xt(e,i,r={}){b||(b=await J());const{arcade:o,arcadeUtils:a}=b,{loadScriptDependencies:n,referencesMember:m,scriptIsAsync:p}=o,t=Z(i.variables,[]),u=t.filter(s=>s.type==="featureSet"||s.type==="featureSetCollection").map(s=>s.name.toLowerCase()),c=o.parseScript(e,u);if(!c)throw new g("arcade:invalid-script","Unable to create SyntaxTree");const $=a.extractFieldNames(c),f=o.scriptTouchesGeometry(c),h=t.map(s=>s.name.toLowerCase()).filter(s=>m(c,s)),l=p(c,u);await n(c,l,u);const C={vars:{},spatialReference:null,useAsync:l};for(const s of h)C.vars[s]="any";const{lruCache:A}=r,x=o.compileScript(c,C),k=o.featureSetUtils(),{services:j}=r;return{execute:(s,y={})=>{if(l)throw new g("arcade:invalid-execution-mode","Cannot execute the script in synchronous mode");const d=x(R(i,s,{lruCache:A,...y},k,l));return y.rawOutput?d:v(d,a)},executeAsync:async(s,y={})=>{const d=await x(R(i,s,{lruCache:A,services:j,...y},k,l));return y.rawOutput?d:v(d,a)},isAsync:l,variablesUsed:h,fieldsUsed:$,geometryUsed:f,syntaxTree:c}}export{xt as createArcadeExecutor,At as createArcadeProfile};
