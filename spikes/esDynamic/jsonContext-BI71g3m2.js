import{I as o,b as s}from"./main-DaZH2qzH.js";function a(e,r){return{...l(e,r),readResourcePaths:[]}}function i(e,r,n){const t=o(e.itemUrl);return{...l(e,r),messages:[],writtenProperties:[],blockedRelativeUrls:[],verifyItemRelativeUrls:t?{rootPath:t.path,writtenUrls:[]}:null,resources:n?{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}:null}}function l(e,r){return{origin:r,url:o(e.itemUrl),portal:e.portal||s.getDefault(),portalItem:e}}export{a as e,i as o};
