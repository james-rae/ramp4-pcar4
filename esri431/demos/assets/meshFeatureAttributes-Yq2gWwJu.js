import { D as j$1 } from './main-jdFDoOPu.js';
import { N } from './MeshTransform-2R18FMnE.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function n(t,n,i=r){return new j$1({x:t[i.originX],y:t[i.originY],z:t[i.originZ],spatialReference:n})}function i(o,n=r){return new N({translation:[o[n.translationX],-o[n.translationZ],o[n.translationY]],rotationAxis:[o[n.rotationX],-o[n.rotationZ],o[n.rotationY]],rotationAngle:o[n.rotationDeg],scale:[o[n.scaleX],o[n.scaleZ],o[n.scaleY]]})}const r={originX:"originX",originY:"originY",originZ:"originZ",translationX:"translationX",translationY:"translationY",translationZ:"translationZ",scaleX:"scaleX",scaleY:"scaleY",scaleZ:"scaleZ",rotationX:"rotationX",rotationY:"rotationY",rotationZ:"rotationZ",rotationDeg:"rotationDeg"};

export { i, n };
