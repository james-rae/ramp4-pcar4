import{b1 as k,n as T,aC as R}from"./main-BvLIKoYF.js";import{n as U}from"./compilerUtils-sIXKBB_N.js";import{m as q}from"./lengthUtils-DUHRAjuS.js";import{i as x,n as S,l as g,e as I}from"./sizeVariableUtils-t52KcLLi.js";const D=()=>T.getLogger("esri.renderers.visualVariables.support.visualVariableUtils"),y=i=>D().warn(`The visualVariable should be an instance of esri.renderers.visualVariables.${i}`),F=()=>D().error("Use of arcade expressions requires an arcade context");new k;const w=Math.PI,O=/^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i;function Z(i,r,a){const e="visualVariables"in i&&i.visualVariables?i.visualVariables.find(l=>l.type==="color"):i;if(!e)return;if(e.declaredClass!=="esri.renderers.visualVariables.ColorVariable")return void y("ColorVariable");const n=typeof r=="number",t=n?null:r,s=t?.attributes;let o=n?r:null;const c=e.field,{ipData:b,hasExpression:d}=e.cache;let u=e.cache.compiledFunc;if(!c&&!d){const l=e.stops;return l&&l[0]&&l[0].color}if(typeof o!="number")if(d){if(a?.arcade==null)return void F();const l={viewingMode:a.viewingMode,scale:a.scale,spatialReference:a.spatialReference},f=a.arcade.arcadeUtils,h=f.getViewInfo(l),V=f.createExecContext(t,h,a.timeZone);if(!u){const z=f.createSyntaxTree(e.valueExpression);u=f.createFunction(z),e.cache.compiledFunc=u}o=f.executeFunction(u,V)}else s&&(o=s[c]);const p=e.normalizationField,m=s!=null&&p!=null?parseFloat(s[p]):void 0;if(o!=null&&(!p||n||!isNaN(m)&&m!==0)){isNaN(m)||n||(o/=m);const l=M(o,b);if(l){const f=l[0],h=l[1],V=f===h?e.stops[f].color:R.blendColors(e.stops[f].color,e.stops[h].color,l[2],a?.color);return new R(V)}}}function A(i,r,a){const e="visualVariables"in i&&i.visualVariables?i.visualVariables.find(l=>l.type==="opacity"):i;if(!e)return;if(e.declaredClass!=="esri.renderers.visualVariables.OpacityVariable")return void y("OpacityVariable");const n=typeof r=="number",t=n?null:r,s=t?.attributes;let o=n?r:null;const c=e.field,{ipData:b,hasExpression:d}=e.cache;let u=e.cache.compiledFunc;if(!c&&!d){const l=e.stops;return l&&l[0]&&l[0].opacity}if(typeof o!="number")if(d){if(a?.arcade==null)return void F();const l={viewingMode:a.viewingMode,scale:a.scale,spatialReference:a.spatialReference},f=a.arcade.arcadeUtils,h=f.getViewInfo(l),V=f.createExecContext(t,h,a.timeZone);if(!u){const z=f.createSyntaxTree(e.valueExpression);u=f.createFunction(z),e.cache.compiledFunc=u}o=f.executeFunction(u,V)}else s&&(o=s[c]);const p=e.normalizationField,m=s!=null&&p!=null?parseFloat(s[p]):void 0;if(o!=null&&(!p||n||!isNaN(m)&&m!==0)){isNaN(m)||n||(o/=m);const l=M(o,b);if(l){const f=l[0],h=l[1];if(f===h)return e.stops[f].opacity;{const V=e.stops[f].opacity;return V+(e.stops[h].opacity-V)*l[2]}}}}function $(i,r,a){const e="visualVariables"in i&&i.visualVariables?i.visualVariables.find(m=>m.type==="rotation"):i;if(!e)return;if(e.declaredClass!=="esri.renderers.visualVariables.RotationVariable")return void y("RotationVariable");const n=e.axis||"heading",t=n==="heading"&&e.rotationType==="arithmetic"?90:0,s=n==="heading"&&e.rotationType==="arithmetic"?-1:1,o=typeof r=="number"?null:r,c=o?.attributes,b=e.field,{hasExpression:d}=e.cache;let u=e.cache.compiledFunc,p=0;if(!b&&!d)return p;if(d){if(a?.arcade==null)return void F();const m={viewingMode:a.viewingMode,scale:a.scale,spatialReference:a.spatialReference},l=a.arcade.arcadeUtils,f=l.getViewInfo(m),h=l.createExecContext(o,f,a.timeZone);if(!u){const V=l.createSyntaxTree(e.valueExpression);u=l.createFunction(V),e.cache.compiledFunc=u}p=l.executeFunction(u,h)}else c&&(p=c[b]||0);return p=typeof p!="number"||isNaN(p)?null:t+s*p,p}function L(i,r,a){const e=typeof r=="number",n=e?null:r,t=n?.attributes;let s=e?r:null;const{isScaleDriven:o}=i.cache;let c=i.cache.compiledFunc;if(o){const d=a?.scale,u=a?.view;s=d==null||u==="3d"?P(i):d}else if(!e)switch(i.inputValueType){case S.Expression:{if(a?.arcade==null)return void F();const d={viewingMode:a.viewingMode,scale:a.scale,spatialReference:a.spatialReference},u=a.arcade.arcadeUtils,p=u.getViewInfo(d),m=u.createExecContext(n,p,a.timeZone);if(!c){const l=u.createSyntaxTree(i.valueExpression);c=u.createFunction(l),i.cache.compiledFunc=c}s=u.executeFunction(c,m);break}case S.Field:t&&(s=t[i.field]);break;case S.Unknown:s=null}if(!g(s))return null;if(e||!i.normalizationField)return s;const b=t?parseFloat(t[i.normalizationField]):null;return g(b)&&b!==0?s/b:null}function P(i){let r=null,a=null;const e=i.stops;return e?(r=e[0].value,a=e[e.length-1].value):(r=i.minDataValue||0,a=i.maxDataValue||0),(r+a)/2}function C(i,r,a){const e="visualVariables"in i&&i.visualVariables?i.visualVariables.find(t=>t.type==="size"):i;if(!e)return;if(e.declaredClass!=="esri.renderers.visualVariables.SizeVariable")return void y("SizeVariable");const n=N(L(e,r,a),e,r,a,e.cache.ipData);return n==null||isNaN(n)?0:n}function v(i,r,a){return i==null?null:I(i)?C(i,r,a):g(i)?i:null}function E(i,r,a){return g(a)&&i>a?a:g(r)&&i<r?r:i}function B(i,r,a,e){return i+((v(r.minSize,a,e)||r.minDataValue)??0)}function W(i,r,a){const e=i.stops;let n=e?.length&&e[0].size;return n==null&&(n=i.minSize),v(n,r,a)}function j(i,r,a,e){const n=(i-r.minDataValue)/(r.maxDataValue-r.minDataValue),t=v(r.minSize,a,e),s=v(r.maxSize,a,e),o=e?.shape;if(i<=r.minDataValue)return t;if(i>=r.maxDataValue)return s;if(t==null||s==null)return null;if(r.scaleBy==="area"&&o){const c=o==="circle",b=c?w*(t/2)**2:t*t,d=b+n*((c?w*(s/2)**2:s*s)-b);return c?2*Math.sqrt(d/w):Math.sqrt(d)}return t+n*(s-t)}function Q(i,r,a,e){const n=e?.shape,t=i/r.minDataValue,s=v(r.minSize,a,e),o=v(r.maxSize,a,e);let c=null;return c=n==="circle"?2*Math.sqrt(t*(s/2)**2):n==="square"||n==="diamond"||n==="image"?Math.sqrt(t*s**2):t*s,E(c,s,o)}function X(i,r,a,e,n){const[t,s,o]=M(i,n);if(t===s)return v(r.stops?.[t].size,a,e);{const c=v(r.stops?.[t].size,a,e);return c+(v(r.stops?.[s].size,a,e)-c)*o}}function Y(i,r,a,e){const n=(e?.resolution??1)*q[r.valueUnit],t=v(r.minSize,a,e),s=v(r.maxSize,a,e),{valueRepresentation:o}=r;let c=null;return c=o==="area"?2*Math.sqrt(i/w)/n:o==="radius"||o==="distance"?2*i/n:i/n,E(c,t,s)}function N(i,r,a,e,n){switch(r.transformationType){case x.Additive:return B(i,r,a,e);case x.Constant:return W(r,a,e);case x.ClampedLinear:return j(i,r,a,e);case x.Proportional:return Q(i,r,a,e);case x.Stops:return X(i,r,a,e,n);case x.RealWorldSize:return Y(i,r,a,e);case x.Identity:return i;case x.Unknown:return null}}function M(i,r){if(!r)return;let a=0,e=r.length-1;return r.some((n,t)=>i<n?(e=t,!0):(a=t,!1)),[a,e,(i-r[a])/(r[e]-r[a])]}function _(i,r,a){const e=["proportional","proportional","proportional"];for(const n of i){const t=n.useSymbolValue?"symbol-value":C(n,r,a);switch(n.axis){case"width":e[0]=t;break;case"depth":e[1]=t;break;case"height":e[2]=t;break;case"width-and-depth":e[0]=t,e[1]=t;break;case"all":case void 0:case null:e[0]=t,e[1]=t,e[2]=t;break;default:U(n.axis)}}return e}export{_ as getAllSizes,Z as getColor,A as getOpacity,$ as getRotationAngle,C as getSize,N as getSizeForValue,v as getSizeFromNumberOrVariable,O as viewScaleRE};