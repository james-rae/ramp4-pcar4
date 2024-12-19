import './main-jdFDoOPu.js';
import { b as b$1 } from './sphere-CvWAdV_f.js';
import './IntersectorInterfaces-DPeWXlfT.js';
import './boundedPlane-_F0novMl.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function c(e,t){return d(e)===d(t)}function d(e){if(null==e)return null;const t=null!=e.layer?e.layer.id:"";let r=null;return r=null!=e.objectId?e.objectId:null!=e.layer&&"objectIdField"in e.layer&&null!=e.layer.objectIdField&&null!=e.attributes?e.attributes[e.layer.objectIdField]:e.uid,null==r?null:`o-${t}-${r}`}const b={json:{write:{writer:f,target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:I}}}};function f(e,t){null!=e?.layer?.objectIdField&&null!=e.attributes&&(t.feature={layerId:e.layer.id,objectId:e.attributes[e.layer.objectIdField]});}function I(e){if(null!=e.layerId&&null!=e.objectId)return {uid:null,layer:{id:e.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:e.objectId}}}b$1();

export { b, c };
