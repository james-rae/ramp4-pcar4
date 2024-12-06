import './main-jdFDoOPu.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function n(e){return e&&"function"==typeof e.highlight}function i(e,n,t){return null==e||e>=t&&(0===n||e<=n)}function r(e,n){if(n&&e){const{minScale:t,maxScale:r}=e;if(c(t,r))return i(n,t,r)}return !0}function c(e,n){return null!=e&&e>0||null!=n&&n>0}function a(e){return !e?.minScale||!e.maxScale||e.minScale>=e.maxScale}

export { a, n, r };
