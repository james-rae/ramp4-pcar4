import { bQ as f, ce as S, aA as w$1 } from './main-jdFDoOPu.js';
import { d } from './queryTopFeatures-DKITF5-s.js';
import './preload-helper-dJJaZANz.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
async function a(a,m,n){const s=f(a),i=await d(s,S.from(m),{...n}),u=i.data.extent;return !u||isNaN(u.xmin)||isNaN(u.ymin)||isNaN(u.xmax)||isNaN(u.ymax)?{count:i.data.count,extent:null}:{count:i.data.count,extent:w$1.fromJSON(u)}}

export { a as executeForTopExtents };
