import{b6 as u,b7 as f,b8 as b,b9 as m,ba as o,bb as p,bc as g,bd as F,be as y}from"./main-CSU-shzQ.js";function B({displayField:e,editFieldsInfo:i,fields:t,objectIdField:s,title:a},l){if(!t)return null;const n=L({editFieldsInfo:i,fields:t,objectIdField:s},l);if(!n.length)return null;const r=S({titleBase:a,fields:t,displayField:e}),c=N();return new u({title:r,content:c,fieldInfos:n})}function D(e){const{title:i,graphic:t}=e??{},{attributes:s,sourceLayer:a}=t??{},l=a&&"displayField"in a?a.displayField:null,n=l?s?.[l]:null,r=t?.getObjectId()?.toString();return i||n||r||""}const w=(e,i)=>i.visibleFieldNames?i.visibleFieldNames.has(e.name):y(e,i);function v({fields:e,ignoreFieldTypes:i,sortDisabled:t}){const s=e;return i&&(e=e.filter(a=>!i.includes(a.type))),e===s&&(e=e.slice()),t!==!0&&e.sort(I),e}function I(e,i){return e.type==="oid"?-1:i.type==="oid"?1:d(e)?-1:d(i)?1:(e.alias||e.name).toLocaleLowerCase().localeCompare((i.alias||i.name).toLocaleLowerCase())}function L(e,i){const t=i?.visibleFieldNames;return v({fields:e.fields??[],ignoreFieldTypes:i?.ignoreFieldTypes||h,sortDisabled:i?.sortDisabled}).map(s=>new f({fieldName:s.name,isEditable:b(s,e),label:s.alias,format:C(s),visible:w(s,{...e,visibleFieldNames:t})}))}function C(e){switch(e.type){case"small-integer":case"integer":case"single":return new o({digitSeparator:!0,places:0});case"double":return new o({digitSeparator:!0,places:2});case"string":return m(e.name)?new o({digitSeparator:!0,places:0}):void 0;default:return}}function N(){return[new p,new g]}function S(e){const i=F(e),{titleBase:t}=e;return i?`${t}: {${i.trim()}}`:t??""}function d(e){return(e.name&&e.name.toLowerCase())==="name"?!0:e.alias?.toLowerCase()==="name"}const h=["geometry","blob","raster","guid","xml"];export{D as c,B as p};
