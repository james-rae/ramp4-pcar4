import { n } from './timeSupport-B-_28reI.js';
import { dy as e, dz as s } from './main-jdFDoOPu.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const o={getObjectId:t=>t.objectId,getAttributes:t=>t.attributes,getAttribute:(t,e)=>t.attributes[e],cloneWithGeometry:(t,r)=>new e(r,t.attributes,null,t.objectId),getGeometry:t=>t.geometry,getCentroid:(e,o)=>(null==e.centroid&&(e.centroid=n(new s,e.geometry,o.hasZ,o.hasM)),e.centroid)};

export { o };
