import{e6 as T,n as I,s as S,v as j,b1 as G,C as J,b6 as M,aE as g}from"./main-BnINupoD.js";import{t as z}from"./ImmutableArray-BPVd6ESQ.js";import{r as F,i as R}from"./TimeOnly-nmN_o5Jr.js";import Y from"./FeatureLayer-DLFuoEaH.js";import{d as N}from"./FeatureSet-B6n8inqv.js";import"./preload-helper-ExcqyqRp.js";import"./MultiOriginJSONSupport-CGej6qDM.js";import"./layerContainerType-C5CzMsLd.js";import"./FeatureLayerBase-C_cIGzoJ.js";import"./Field-cvJSbcPM.js";import"./fieldType-CHya0v-j.js";import"./HeightModelInfo-DxEfraJ0.js";import"./commonProperties-Bl81uyDg.js";import"./ElevationInfo-Cbv7unv8.js";import"./lengthUtils-CI7g6Q2A.js";import"./timeZoneUtils-Bs7bAgrI.js";import"./labelingInfo-CKpkEOZQ.js";import"./uuid-Cl5lrJ4c.js";import"./Query-m9ojnq6M.js";import"./TimeExtent-Drrkeg7H.js";import"./SimpleRenderer-Cu04HaZN.js";import"./commonProperties-ClyWodjO.js";import"./colorRamps-mwrbkOsW.js";import"./ColorStop-B6Dnxf3q.js";import"./visualVariableUtils-BYBVm_sB.js";import"./UniqueValueRenderer-Bb7p2nS1.js";import"./defaultCIMValues-CmWNUqe1.js";import"./enums-CD-fX3vU.js";import"./RendererLegendOptions-e26tPj7Y.js";import"./styleUtils-9PVBvC-1.js";import"./RelationshipQuery-C3cPanW3.js";import"./NormalizationBinParametersMixin-uQ6jIC3W.js";import"./labelUtils-rayd_Xmt.js";import"./LayerFloorInfo-C0g48kds.js";import"./Relationship-SKZwY883.js";import"./serviceCapabilitiesUtils-8T3KnEeG.js";import"./infoFor3D-DhzudQro.js";import"./Layer-CwalWWQV.js";import"./workers-CaNtZf3r.js";import"./Queue-BiooWvlh.js";import"./intl-DLGcJ4sm.js";import"./editsZScale-CO-bS-5B.js";import"./queryZScale-SGlBKaWR.js";import"./projection-BG6zqujR.js";import"./projectBuffer-aZbPqVLL.js";import"./APIKeyMixin-DSrrSn2p.js";import"./ArcGISService-CMSM9rVX.js";import"./BlendLayer-BxUnbfFb.js";import"./jsonUtils-BsukQQP4.js";import"./parser-MOfMo6qv.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-pV3Yd6bK.js";import"./common-DQOJ18NT.js";import"./CustomParametersMixin-BBMivYZR.js";import"./DisplayFilteredLayer-CvzQEFZg.js";import"./scaleUtils-mh131NXN.js";import"./displayFilterUtils-D7Y4mgol.js";import"./EditBusLayer-B29IbKCF.js";import"./FeatureEffectLayer-Co0sTfFE.js";import"./FeatureEffect-DBLI5Ia5.js";import"./FeatureFilter-BNZwDESJ.js";import"./FeatureReductionLayer-DeeN3yBL.js";import"./FeatureReductionSelection-BY4Z88Ec.js";import"./jsonUtils-mFN1hUkO.js";import"./typeUtils-BbO25ANV.js";import"./ClassBreaksRenderer-Ca5Y8SYQ.js";import"./LRUCache-CeVfCzrI.js";import"./MemCache-DBaLmLuy.js";import"./Version-BZqpbTYK.js";import"./FieldsIndex-uoSAXE2e.js";import"./utils-SvkaiIyn.js";import"./heatmapUtils-Ci3Txb7P.js";import"./vec42-CKs01hkn.js";import"./vec4f64-o2zAXfmz.js";import"./MD5-C9MwAd2G.js";import"./OperationalLayer-DKH-ff4v.js";import"./OrderedLayer-BVKOWUbw.js";import"./OrderByInfo-B3GO7yUl.js";import"./PortalLayer-D6Y3jv6h.js";import"./PortalItem-DK_mjKau.js";import"./portalItemUtils-ChyFTvmo.js";import"./RefreshableLayer-DuU_0gJ8.js";import"./ScaleRangeLayer-B8obctTT.js";import"./TemporalLayer-6YWk633T.js";import"./TimeInfo-D0vh3t85.js";import"./TrackableLayer-BWeg2n-_.js";import"./FeatureTemplate-Du4bvg8A.js";import"./FeatureType-DmTICW33.js";import"./fieldProperties-BiUVB05X.js";import"./TitleCreator-Dj86TPQe.js";import"./versionUtils-CgLH0arL.js";import"./styleUtils-BsAmcYJl.js";import"./popupUtils-CH1o2lWV.js";import"./interfaces-CL2NbQte.js";let l=null;function V(e,n,r,o={}){const a=n.elementType,i="value",c=a.type==="array"?[{name:i,type:a.type,elementType:a.elementType}]:a.type==="dictionary"?[{name:i,type:a.type,properties:a.properties}]:[{name:i,type:a.type}];return new z(e.map(p=>{const t={};return w(t,c,{[i]:p},r,o),t[i]}))}function q(e,n,r={}){const o=e instanceof N?new Y({source:e.features,geometryType:e.geometryType,fields:e.fields,spatialReference:e.spatialReference}):e;return n.constructFeatureSet(o,r.spatialReference,null,!0,r.lruCache,r.interceptor)}function B(e,n,r={}){const{spatialReference:o,interceptor:a,lruCache:i}=r;return typeof e=="string"?n.createFeatureSetCollectionFromService(e,o,i,a):n.createFeatureSetCollectionFromMap(e,o,i,a)}function H(e,n,r,o={}){const a={};return w(a,n.properties,e,r,o),new l.Dictionary(a)}function w(e,n,r,o,a={}){const i={};for(const c of Object.keys(r))i[c.toLowerCase()]=r[c];for(const c of n){const p=c.name.toLowerCase();if(a.variablesPreProcessed)e[p]=i[p];else switch(c.type){case"array":{const t=i[p];e[p]=t==null?null:V(t,c,o,a);break}case"feature":{const t=i[p];e[p]=t==null?null:l.Feature.createFromGraphic(t,a?.timeZone);break}case"featureSet":{const t=i[p];e[p]=t==null?null:o?q(t,o,a):null;break}case"featureSetCollection":{const t=i[p];e[p]=t==null?null:o?B(t,o,a):null;break}case"dictionary":{const t=i[p];e[p]=t==null?null:H(t,c,o,a);break}case"date":{const t=i[p];e[p]=t?t instanceof g?t:a?.timeZone?g.dateJSAndZoneToArcadeDate(t,a?.timeZone):g.dateJSToArcadeDate(t):null;break}case"dateOnly":{const t=i[p];e[p]=t?t instanceof R?t:R.fromReader(t):null;break}case"time":{const t=i[p];e[p]=t?t instanceof F?t:F.fromReader(t):null;break}case"knowledgeGraph":case"geometry":case"boolean":case"text":case"number":e[p]=i[p];break;case"voxel":{const t=i[p];e[p]=t==null?null:new l.Voxel(t,a?.timeZone);break}}}}function L(e,n){for(const r of e)n.push(r),r.type==="dictionary"&&L(r.properties,n);return n}function O(e,n,r,o,a){const{spatialReference:i,interceptor:c,lruCache:p,console:t,abortSignal:y,timeZone:s,services:$={portal:J.getDefault()}}=r,f={vars:{},spatialReference:i,interceptor:c,timeZone:s,lrucache:p,useAsync:a,services:$,console:t,abortSignal:y};return n&&w(f.vars,e.variables,n,o,r),f}function v(e,n){switch(n.getArcadeType(e)){case"number":case"text":case"boolean":case"point":case"polygon":case"polyline":case"multipoint":case"extent":return e;case"date":return e.toJSDate();case"time":case"dateOnly":return e.toString();case"feature":{const r=(e.type,e),o="geometry"in r?r.geometry():null,a="readAttributes"in r?r.readAttributes():r.attributes;return new M({geometry:o,attributes:a})}case"dictionary":{const r=e,o=r.attributes,a={};for(const i of Object.keys(o))a[i]=v(r.field(i),n);return a}case"array":return("toArray"in e?e.toArray():e).map(r=>v(r,n))}return e}const P={variables:[{name:"$feature",type:"feature"},{name:"$layer",type:"featureSet"},{name:"$datastore",type:"featureSetCollection"},{name:"$map",type:"featureSetCollection"},{name:"$userInput",type:"geometry"},{name:"$graph",type:"knowledgeGraph"},{name:"$view",type:"dictionary",properties:[{name:"scale",type:"number"},{name:"timeProperties",type:"dictionary",properties:[{name:"currentStart",type:"date"},{name:"currentEnd",type:"date"},{name:"startIncluded",type:"boolean"},{name:"endIncluded",type:"boolean"}]}]}]},Z={variables:[{name:"$feature",type:"feature"},{name:"$aggregatedFeatures",type:"featureSet"},{name:"$view",type:"dictionary",properties:[{name:"scale",type:"number"},{name:"timeProperties",type:"dictionary",properties:[{name:"currentStart",type:"date"},{name:"currentEnd",type:"date"},{name:"startIncluded",type:"boolean"},{name:"endIncluded",type:"boolean"}]}]}]},D={variables:[{name:"$voxel",type:"voxel"}]},E=new Map([["aggregate-field",{variables:[{name:"$feature",type:"feature"}]}],["form-constraint",{variables:[{name:"$feature",type:"feature"}]}],["feature-z",{variables:[{name:"$feature",type:"feature"}]}],["field-calculation",{variables:[{name:"$feature",type:"feature"},{name:"$datastore",type:"featureSetCollection"}]}],["form-calculation",{variables:[{name:"$feature",type:"feature"},{name:"$originalFeature",type:"feature"},{name:"$layer",type:"featureSet"},{name:"$featureSet",type:"featureSet"},{name:"$datastore",type:"featureSetCollection"},{name:"$map",type:"featureSetCollection"},{name:"$editContext",type:"dictionary",properties:[{name:"editType",type:"text"}]}]}],["labeling",{variables:[{name:"$feature",type:"feature"},{name:"$view",type:"dictionary",properties:[{name:"scale",type:"number"},{name:"timeProperties",type:"dictionary",properties:[{name:"currentStart",type:"date"},{name:"currentEnd",type:"date"},{name:"startIncluded",type:"boolean"},{name:"endIncluded",type:"boolean"}]}]}]}],["popup",P],["popup-element",P],["popup-feature-reduction",Z],["popup-element-feature-reduction",Z],["visualization",{variables:[{name:"$feature",type:"feature"},{name:"$view",type:"dictionary",properties:[{name:"scale",type:"number"},{name:"timeProperties",type:"dictionary",properties:[{name:"currentStart",type:"date"},{name:"currentEnd",type:"date"},{name:"startIncluded",type:"boolean"},{name:"endIncluded",type:"boolean"}]}]}]}],["popup-voxel",D],["popup-element-voxel",D]]);function Et(e){e==="feature-reduction-popup"?(T(I.getLogger("esri.arcade"),'profile name: "feature-reduction-popup"',{replacement:'"popup-feature-reduction"',version:"4.32",warnOnce:!0}),e="popup-feature-reduction"):e==="feature-reduction-popup-element"&&(T(I.getLogger("esri.arcade"),'profile name: "feature-reduction-popup-element"',{replacement:'"popup-element-feature-reduction"',version:"4.32",warnOnce:!0}),e="popup-element-feature-reduction");const n=E.get(e);if(!n){const r=Array.from(E.keys()).map(o=>`'${o}'`).join(", ");throw new S("createArcadeProfile:invalid-profile-name",`Invalid profile name '${e}'. You must specify one of the following values: ${r}`)}return j(n)}async function Lt(e,n,r={}){l||(l=await G());const{arcade:o,arcadeUtils:a}=l,{loadScriptDependencies:i,referencesMember:c,scriptIsAsync:p}=o,t=L(n.variables,[]),y=t.filter(m=>m.type==="featureSet"||m.type==="featureSetCollection").map(m=>m.name.toLowerCase()),s=o.parseScript(e,y);if(!s)throw new S("arcade:invalid-script","Unable to create SyntaxTree");const $=a.extractFieldNames(s),f=o.scriptTouchesGeometry(s),C=t.map(m=>m.name.toLowerCase()).filter(m=>c(s,m)),u=p(s,y);await i(s,u,y);const h={vars:{},spatialReference:null,useAsync:u};for(const m of C)h.vars[m]="any";const{lruCache:x}=r,A=o.compileScript(s,h),k=o.featureSetUtils(),{services:U}=r;return{execute:(m,d={})=>{if(u)throw new S("arcade:invalid-execution-mode","Cannot execute the script in synchronous mode");const b=A(O(n,m,{lruCache:x,...d},k,u));return d.rawOutput?b:v(b,a)},executeAsync:async(m,d={})=>{const b=await A(O(n,m,{lruCache:x,services:U,...d},k,u));return d.rawOutput?b:v(b,a)},isAsync:u,variablesUsed:C,fieldsUsed:$,geometryUsed:f,syntaxTree:s}}export{Lt as createArcadeExecutor,Et as createArcadeProfile};
