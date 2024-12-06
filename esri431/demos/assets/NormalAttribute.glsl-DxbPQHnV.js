import { it as n$2 } from './main-jdFDoOPu.js';
import { o as o$1 } from './interfaces-Cp1cox0n.js';
import { e as e$1 } from './VertexAttribute-BxkhPj4z.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var n$1;!function(t){t[t.Multiply=1]="Multiply",t[t.Ignore=2]="Ignore",t[t.Replace=3]="Replace",t[t.Tint=4]="Tint";}(n$1||(n$1={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var n;function o(o){return o===n.Shadow||o===n.ShadowHighlight||o===n.ShadowExcludeHighlight||o===n.ViewshedShadow}function r(o){return f(o)||o===n.Normal}function t$1(o){return w(o)||o===n.Normal}function i(o){return o===n.Highlight||o===n.ObjectAndLayerIdColor}function e(o){return o===n.Color}function u(n){return e(n)||S(n)}function a$1(n){return e(n)||i(n)}function g(n){return u(n)||i(n)}function f(n){return a$1(n)||C(n)}function w(n){return g(n)||C(n)}function C(o){return o===n.Depth}function S(o){return o===n.ColorEmission}!function(n){n[n.Color=0]="Color",n[n.ColorEmission=1]="ColorEmission",n[n.Depth=2]="Depth",n[n.Normal=3]="Normal",n[n.Shadow=4]="Shadow",n[n.ShadowHighlight=5]="ShadowHighlight",n[n.ShadowExcludeHighlight=6]="ShadowExcludeHighlight",n[n.ViewshedShadow=7]="ViewshedShadow",n[n.Highlight=8]="Highlight",n[n.ObjectAndLayerIdColor=9]="ObjectAndLayerIdColor",n[n.COUNT=10]="COUNT";}(n||(n={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function t(t,i){switch(i.normalType){case a.Compressed:t.attributes.add(e$1.NORMALCOMPRESSED,"vec2"),t.vertex.code.add(o$1`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case a.Attribute:t.attributes.add(e$1.NORMAL,"vec3"),t.vertex.code.add(o$1`vec3 normalModel() {
return normal;
}`);break;case a.ScreenDerivative:t.fragment.code.add(o$1`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:n$2(i.normalType);case a.COUNT:}}var a;!function(e){e[e.Attribute=0]="Attribute",e[e.Compressed=1]="Compressed",e[e.ScreenDerivative=2]="ScreenDerivative",e[e.COUNT=3]="COUNT";}(a||(a={}));

export { S, a, n as b, t$1 as c, a$1 as d, n$1 as n, o, r, t, u };
