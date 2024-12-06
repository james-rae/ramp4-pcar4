import { I, e as b } from './main-jdFDoOPu.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function e(t,r){return {...l(t,r),readResourcePaths:[]}}function o(r,e,o){const i=I(r.itemUrl);return {...l(r,e),messages:[],writtenProperties:[],blockedRelativeUrls:[],verifyItemRelativeUrls:i?{rootPath:i.path,writtenUrls:[]}:null,resources:o?{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}:null}}function l(e,o){return {origin:o,url:I(e.itemUrl),portal:e.portal||b.getDefault(),portalItem:e}}

export { e, o };
