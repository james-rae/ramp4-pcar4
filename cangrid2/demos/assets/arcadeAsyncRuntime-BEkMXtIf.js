import { C, Y as Y$1, M, L, f, a as ae$1, z as z$1, b as a, r, p, e, o, s, c as M$1, x, O, R, J as J$1, _ as _$1, d as p$1, u, G, N, U, Q as Q$1, H as H$1, B, E, g as ge$1, h as d, m as me$1, i as fe$1, j as ce$1, k as _e, Z as Ze$1, D, l as r$1, n as s$1, q as n$1, t as s$2 } from './arcadeUtils-CijaeIuc.js';
import { registerFunctions as xn } from './geomasync-CoM3FYtV.js';
import { bA as f$1, eY as n } from './main-CGBWc59Z.js';
import './preload-helper-dJJaZANz.js';
import './TimeOnly-BZ2-EQE7.js';
import './ImmutableArray-B20xHd08.js';
import './number-D5Hw0YeC.js';
import './portalUtils-CSt0Towt.js';
import './geometryEngineAsync-Di200sKf.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
const T=100;async function W(e,t){const n=[];for(let r=0;r<t.arguments.length;r++)n.push(await Y(e,t.arguments[r]));return n}async function V(e,t,n){if(!0===t.preparsed)return n(e,null,t.arguments);return n(e,t,await W(e,t))}class _ extends r$1{constructor(e,t){super(),this.definition=null,this.context=null,this.definition=e,this.context=t;}createFunction(e){return (...t)=>{const n={spatialReference:this.context.spatialReference,console:this.context.console,lrucache:this.context.lrucache,timeZone:this.context.timeZone??null,exports:this.context.exports,libraryResolver:this.context.libraryResolver,interceptor:this.context.interceptor,localScope:{},depthCounter:{depth:e.depthCounter+1},globalScope:this.context.globalScope};if(n.depthCounter.depth>64)throw new a(e,r.MaximumCallDepth,null);return Pe(this.definition,n,t,null)}}call(e,t){return H(e,t,((n,r$1,o)=>{const l={spatialReference:e.spatialReference,services:e.services,console:e.console,libraryResolver:e.libraryResolver,exports:e.exports,lrucache:e.lrucache,timeZone:e.timeZone??null,interceptor:e.interceptor,localScope:{},abortSignal:e.abortSignal,globalScope:e.globalScope,depthCounter:{depth:e.depthCounter.depth+1}};if(l.depthCounter.depth>64)throw new a(e,r.MaximumCallDepth,t);return Pe(this.definition,l,o,t)}))}marshalledCall(e,t,n,r){return r(e,t,(async(o,a,i)=>{const l={spatialReference:e.spatialReference,globalScope:n.globalScope,depthCounter:{depth:e.depthCounter.depth+1},libraryResolver:e.libraryResolver,exports:e.exports,console:e.console,abortSignal:e.abortSignal,lrucache:e.lrucache,timeZone:e.timeZone??null,interceptor:e.interceptor,localScope:{}};return i=i.map((t=>!_$1(t)||t instanceof s$1?t:n$1(t,e,r))),n$1(await Pe(this.definition,l,i,t),n,r)}))}}class z extends s$2{constructor(e){super(e);}async global(e){const t=this.executingContext.globalScope[e.toLowerCase()];if(t.valueset||(t.value=await Y(this.executingContext,t.node),t.valueset=!0),_$1(t.value)&&!(t.value instanceof s$1)){const e=new s$1;e.fn=t.value,e.parameterEvaluator=H,e.context=this.executingContext,t.value=e;}return t.value}setGlobal(e,t){if(_$1(t))throw new a(null,r.AssignModuleFunction,null);this.executingContext.globalScope[e.toLowerCase()]={value:t,valueset:!0,node:null};}hasGlobal(e){return void 0===this.executingContext.exports[e]&&(e=e.toLowerCase()),void 0!==this.executingContext.exports[e]}async loadModule(e){let n=e.spatialReference;null==n&&(n=new f$1({wkid:102100})),this.moduleScope=Ge({},e.customfunctions,e.timeZone),this.executingContext={spatialReference:n,services:e.services,libraryResolver:new s(e.libraryResolver._moduleSingletons,this.source.syntax.loadedModules),exports:{},abortSignal:void 0===e.abortSignal||null===e.abortSignal?{aborted:!1}:e.abortSignal,globalScope:this.moduleScope,console:e.console??Ue,lrucache:e.lrucache,timeZone:e.timeZone??null,interceptor:e.interceptor,localScope:null,depthCounter:{depth:1}},await Y(this.executingContext,this.source.syntax);}}async function H(e,t,n){if(!0===t.preparsed)return n(e,null,t.arguments);return n(e,t,await W(e,t))}async function Y(e,t,n){if(t.breakpoint&&!0!==n){const n=t.breakpoint();return await n,Y(e,t,!0)}try{switch(t?.type){case"VariableDeclarator":return await xe(e,t);case"ImportDeclaration":return await ve(e,t);case"ExportNamedDeclaration":return await be(e,t);case"VariableDeclaration":return await Se(e,t,0);case"BlockStatement":case"Program":return await he(e,t);case"FunctionDeclaration":return await ye(e,t);case"ReturnStatement":return await ge(e,t);case"IfStatement":return await de(e,t);case"ExpressionStatement":return await we(e,t);case"UpdateExpression":return await ue(e,t);case"AssignmentExpression":return await pe(e,t);case"ForStatement":return await ne(e,t);case"WhileStatement":return await X(e,t);case"ForInStatement":return await ce(e,t);case"BreakStatement":return R;case"EmptyStatement":return O;case"ContinueStatement":return J$1;case"TemplateElement":return await Le(e,t);case"TemplateLiteral":return await Ee(e,t);case"Identifier":return await Me(e,t);case"MemberExpression":return await Ie(e,t);case"Literal":return t.value;case"CallExpression":return await je(e,t);case"UnaryExpression":return await Fe(e,t);case"BinaryExpression":return await Re(e,t);case"LogicalExpression":return await Ae(e,t);case"ArrayExpression":return await Ce(e,t);case"ObjectExpression":return await J(e,t);case"Property":return await Q(e,t);default:throw new a(e,r.Unrecognized,t)}}catch(r){throw u(e,t,r)}}async function J(e,t){const n=[];for(let o=0;o<t.properties.length;o++)n[o]=await Y(e,t.properties[o]);const r$1={},l=new Map;for(let o=0;o<n.length;o++){const s=n[o];if(_$1(s.value))throw new a(e,r.NoFunctionInDictionary,t);if(!1===G(s.key))throw new a(e,r.KeyMustBeString,t);let c=s.key.toString();const u=c.toLowerCase();l.has(u)?c=l.get(u):l.set(u,c),s.value===O?r$1[c]=null:r$1[c]=s.value;}const s=new N(r$1);return s.immutable=!1,s}async function Q(e,t){const n=await Y(e,t.value);if("Identifier"===t.key.type)return {key:t.key.name,value:n};return {key:await Y(e,t.key),value:n}}async function X(e,t){const n={testResult:!0,lastAction:O};if(n.testResult=await Y(e,t.test),!1===n.testResult)return O;if(!0!==n.testResult)throw new a(e,r.BooleanConditionRequired,t);for(;!0===n.testResult&&(n.lastAction=await Y(e,t.body),n.lastAction!==R)&&!(n.lastAction instanceof M$1);)if(n.testResult=await Y(e,t.test),!0!==n.testResult&&!1!==n.testResult)throw new a(e,r.BooleanConditionRequired,t);return n.lastAction instanceof M$1?n.lastAction:O}async function $(e,t,n){const r=await Y(e,t.body);return n.lastAction=r,n.lastAction===R||n.lastAction instanceof M$1?(n.testResult=!1,n):null!==t.update?(await Y(e,t.update),n):n}async function ee(e,t,n){if(null!==t.test){const r$1=await Y(e,t.test);if(!0===e.abortSignal?.aborted)throw new a(e,r.Cancelled,t);if(n.testResult=r$1,!1===n.testResult)return n;if(!0!==n.testResult)throw new a(e,r.BooleanConditionRequired,t);return $(e,t,n)}return $(e,t,n)}function te(e,t,n,r,o,a){try{ee(e,t,n).then((()=>{try{!0===n.testResult?++a>T?(a=0,setTimeout((()=>{te(e,t,n,r,o,a);}),0)):te(e,t,n,r,o,a):n.lastAction instanceof M$1?r(n.lastAction):r(O);}catch(i){o(i);}}),(e=>{o(e);}));}catch(i){o(i);}}function ne(e,t){try{return null!==t.init?Y(e,t.init).then((()=>new Promise(((n,r)=>{te(e,t,{testResult:!0,lastAction:O},(e=>{n(e);}),(e=>{r(e);}),0);})))):new Promise(((n,r)=>{te(e,t,{testResult:!0,lastAction:O},(e=>{n(e);}),(e=>{r(e);}),0);}))}catch(n){return Promise.reject(n)}}function re(e,t,n,r,o,a,i,l,s,c){try{if(r<=a)return void l(O);o.value="k"===i?n[a]:a,Y(e,t.body).then((u=>{try{u instanceof M$1?l(u):u===R?l(O):++c>T?(c=0,setTimeout((()=>{re(e,t,n,r,o,a+1,i,l,s,c);}),0)):re(e,t,n,r,o,a+1,i,l,s,c);}catch(f){s(f);}}),(e=>{s(e);}));}catch(u){s(u);}}function oe(e,t,n,r,o,a,i,l,s){try{if(n.length()<=o)return void i(O);r.value="k"===a?n.get(o):o,Y(e,t.body).then((c=>{c instanceof M$1?i(c):c===R?i(O):++s>T?(s=0,setTimeout((()=>{oe(e,t,n,r,o+1,a,i,l,s);}),0)):oe(e,t,n,r,o+1,a,i,l,s);}),(e=>{l(e);}));}catch(c){l(c);}}function ae(e,t,n,r,o,a){try{if(void 0===a&&(a="i"),0===n.length)return void r.resolve(O);re(e,t,n,n.length,o,0,a,(e=>{r.resolve(e);}),(e=>{r.reject(e);}),0);}catch(i){r.reject(i);}}function ie(e,t,n,r,o,a){try{if(void 0===a&&(a="i"),0===n.length)return void r.resolve(O);oe(e,t,n,o,0,a,(e=>{r.resolve(e);}),(e=>{r.reject(e);}),0);}catch(i){r.reject(i);}}function le(e,t,n,r,o){try{ae(e,t,n.keys(),r,o,"k");}catch(a){r.reject(a);}}function se(e,t,n,r,o,a,i,l){try{e.next().then((c=>{try{if(null===c)a(O);else {const u=D.createFromGraphicLikeObject(c.geometry,c.attributes,r,t.timeZone);u._underlyingGraphic=c,o.value=u;Y(t,n.body).then((s=>{try{s===R?a(O):s instanceof M$1?a(s):++l>T?(l=0,setTimeout((()=>{se(e,t,n,r,o,a,i,l);}),0)):se(e,t,n,r,o,a,i,l);}catch(c){i(c);}}),(e=>{i(e);}));}}catch(u){i(u);}}),(e=>{i(e);}));}catch(c){i(c);}}async function ce(e,t){return new Promise(((n,r$1)=>{Y(e,t.right).then((l=>{try{let s=null;s="VariableDeclaration"===t.left.type?Y(e,t.left):Promise.resolve(),s.then((()=>{try{let s="";if("VariableDeclaration"===t.left.type){const e=t.left.declarations[0].id;"Identifier"===e.type&&(s=e.name);}else "Identifier"===t.left.type&&(s=t.left.name);if(!s)throw new a(e,r.InvalidIdentifier,t);s=s.toLowerCase();let c=null;if(null!=e.localScope&&void 0!==e.localScope[s]&&(c=e.localScope[s]),null===c&&void 0!==e.globalScope[s]&&(c=e.globalScope[s]),null===c)return void r$1(new a(e,r.InvalidIdentifier,t));U(l)||G(l)?ae(e,t,l,{reject:r$1,resolve:n},c):Q$1(l)?ie(e,t,l,{reject:r$1,resolve:n},c):l instanceof N||H$1(l)?le(e,t,l,{reject:r$1,resolve:n},c):B(l)?se(l.iterator(e.abortSignal),e,t,l,c,(e=>{n(e);}),(e=>{r$1(e);}),0):ae(e,t,[],{reject:r$1,resolve:n},c);}catch(s){r$1(s);}}),r$1);}catch(s){r$1(s);}}),r$1);}))}async function ue(e,t){const n=t.argument;if("MemberExpression"===n.type){const r$1={t:null},l=await Y(e,n.object);let s=null;r$1.t=l,!0===n.computed?s=await Y(e,n.property):"Identifier"===n.property.type&&(s=n.property.name);const c=r$1.t;let u;if(U(c)){if(!E(s))throw new a(e,r.ArrayAccessorMustBeNumber,t);if(s<0&&(s=c.length+s),s<0||s>=c.length)throw new a(e,r.OutOfBounds,t);u=ge$1(c[s]),c[s]="++"===t.operator?u+1:u-1;}else if(c instanceof N){if(!1===G(s))throw new a(e,r.KeyAccessorMustBeString,t);if(!0!==c.hasField(s))throw new a(e,r.FieldNotFound,t,{key:s});u=ge$1(c.field(s)),c.setField(s,"++"===t.operator?u+1:u-1);}else if(c instanceof z){if(!1===G(s))throw new a(e,r.ModuleAccessorMustBeString,t);if(!0!==c.hasGlobal(s))throw new a(e,r.ModuleExportNotFound,t);u=ge$1(await c.global(s)),c.setGlobal(s,"++"===t.operator?u+1:u-1);}else {if(!H$1(c))throw Q$1(c)?new a(e,r.Immutable,t):new a(e,r.InvalidParameter,t);if(!1===G(s))throw new a(e,r.KeyAccessorMustBeString,t);if(!0!==c.hasField(s))throw new a(e,r.FieldNotFound,t,{key:s});u=ge$1(c.field(s)),c.setField(s,"++"===t.operator?u+1:u-1);}return !1===t.prefix?u:"++"===t.operator?u+1:u-1}const r$1="Identifier"===t.argument.type?t.argument.name.toLowerCase():"";if(!r$1)throw new a(e,r.InvalidIdentifier,t);let l;if(null!=e.localScope&&void 0!==e.localScope[r$1])return l=ge$1(e.localScope[r$1].value),e.localScope[r$1]={value:"++"===t.operator?l+1:l-1,valueset:!0,node:t},!1===t.prefix?l:"++"===t.operator?l+1:l-1;if(void 0!==e.globalScope[r$1])return l=ge$1(e.globalScope[r$1].value),e.globalScope[r$1]={value:"++"===t.operator?l+1:l-1,valueset:!0,node:t},!1===t.prefix?l:"++"===t.operator?l+1:l-1;throw new a(e,r.InvalidIdentifier,t)}function fe(e,t,n,r$1,o){switch(t){case"=":return e===O?null:e;case"/=":return ge$1(n)/ge$1(e);case"*=":return ge$1(n)*ge$1(e);case"-=":return ge$1(n)-ge$1(e);case"+=":return G(n)||G(e)?me$1(n)+me$1(e):ge$1(n)+ge$1(e);case"%=":return ge$1(n)%ge$1(e);default:throw new a(o,r.UnsupportedOperator,r$1)}}async function pe(e,t){const n=t.left;if("MemberExpression"===n.type){const r$1=await Y(e,n.object);let l=null;if(!0===n.computed)l=await Y(e,n.property);else {if("Identifier"!==n.property.type)throw new a(e,r.InvalidIdentifier,t);l=n.property.name;}const s=await Y(e,t.right);if(U(r$1)){if(!E(l))throw new a(e,r.ArrayAccessorMustBeNumber,t);if(l<0&&(l=r$1.length+l),l<0||l>r$1.length)throw new a(e,r.OutOfBounds,t);if(l===r$1.length){if("="!==t.operator)throw new a(e,r.OutOfBounds,t);r$1[l]=fe(s,t.operator,r$1[l],t,e);}else r$1[l]=fe(s,t.operator,r$1[l],t,e);}else if(r$1 instanceof N){if(!1===G(l))throw new a(e,r.KeyAccessorMustBeString,t);if(!0===r$1.hasField(l))r$1.setField(l,fe(s,t.operator,r$1.field(l),t,e));else {if("="!==t.operator)throw new a(e,r.FieldNotFound,t,{key:l});r$1.setField(l,fe(s,t.operator,null,t,e));}}else if(r$1 instanceof z){if(!1===G(l))throw new a(e,r.KeyAccessorMustBeString,t);if(!0!==r$1.hasGlobal(l))throw new a(e,r.ModuleExportNotFound,t);r$1.setGlobal(l,fe(s,t.operator,await r$1.global(l),t,e));}else {if(!H$1(r$1))throw Q$1(r$1)?new a(e,r.Immutable,t):new a(e,r.InvalidParameter,t);if(!1===G(l))throw new a(e,r.KeyAccessorMustBeString,t);if(!0===r$1.hasField(l))r$1.setField(l,fe(s,t.operator,r$1.field(l),t,e));else {if("="!==t.operator)throw new a(e,r.FieldNotFound,t,{key:l});r$1.setField(l,fe(s,t.operator,null,t,e));}}return O}const r$1=n.name.toLowerCase();if(null!=e.localScope&&void 0!==e.localScope[r$1]){const n=await Y(e,t.right);return e.localScope[r$1]={value:fe(n,t.operator,e.localScope[r$1].value,t,e),valueset:!0,node:t.right},O}if(void 0!==e.globalScope[r$1]){const n=await Y(e,t.right);return e.globalScope[r$1]={value:fe(n,t.operator,e.globalScope[r$1].value,t,e),valueset:!0,node:t.right},O}throw new a(e,r.InvalidIdentifier,t)}async function we(e,t){if("AssignmentExpression"===t.expression.type)return Y(e,t.expression);if("CallExpression"===t.expression.type){const n=await Y(e,t.expression);return n===O?O:new x(n)}const n=await Y(e,t.expression);return n===O?O:new x(n)}async function de(e,t){const n=await Y(e,t.test);if(!0===n)return Y(e,t.consequent);if(!1===n)return null!==t.alternate?Y(e,t.alternate):O;throw new a(e,r.BooleanConditionRequired,t)}async function he(e,t){return me(e,t,0)}async function me(e,t,n){if(n>=t.body.length)return O;const r=await Y(e,t.body[n]);return r instanceof M$1||r===R||r===J$1||n===t.body.length-1?r:me(e,t,n+1)}async function ge(e,t){if(null===t.argument)return new M$1(O);const n=await Y(e,t.argument);return new M$1(n)}async function ye(e,t){const n=t.id.name.toLowerCase();return e.globalScope[n]={valueset:!0,node:null,value:new _(t,e)},O}async function ve(e,t){const n=t.specifiers[0].local.name.toLowerCase(),r=e.libraryResolver.loadLibrary(n);let o=null;return e.libraryResolver._moduleSingletons?.has(r.uri)?o=e.libraryResolver._moduleSingletons.get(r.uri):(o=new z(r),await o.loadModule(e),e.libraryResolver._moduleSingletons?.set(r.uri,o)),e.globalScope[n]={value:o,valueset:!0,node:t},O}async function be(e,t){if(await Y(e,t.declaration),"FunctionDeclaration"===t.declaration.type)e.exports[t.declaration.id.name.toLowerCase()]="function";else if("VariableDeclaration"===t.declaration.type)for(const n of t.declaration.declarations)e.exports[n.id.name.toLowerCase()]="variable";return O}async function Se(e,t,n){return n>=t.declarations.length?O:(await Y(e,t.declarations[n]),n===t.declarations.length-1||await Se(e,t,n+1),O)}async function xe(e,t){let n=null;if(n=null===t.init?null:await Y(e,t.init),null!==e.localScope){if(n===O&&(n=null),"Identifier"!==t.id.type)throw new a(e,r.InvalidIdentifier,t);const r$1=t.id.name.toLowerCase();return null!=e.localScope&&(e.localScope[r$1]={value:n,valueset:!0,node:t.init}),O}if("Identifier"!==t.id.type)throw new a(e,r.InvalidIdentifier,t);const r$1=t.id.name.toLowerCase();return n===O&&(n=null),e.globalScope[r$1]={value:n,valueset:!0,node:t.init},O}async function Ie(e,t){const n$1=await Y(e,t.object);if(null===n$1)throw new a(e,r.MemberOfNull,t);if(!1===t.computed){if("Identifier"===t.property.type){if(n$1 instanceof N||H$1(n$1))return n$1.field(t.property.name);if(n$1 instanceof n)return d(n$1,t.property.name,e,t);if(n$1 instanceof z){if(!n$1.hasGlobal(t.property.name))throw new a(e,r.InvalidIdentifier,t);return n$1.global(t.property.name)}throw new a(e,r.InvalidMemberAccessKey,t)}throw new a(e,r.InvalidMemberAccessKey,t)}let l=await Y(e,t.property);if(n$1 instanceof N||H$1(n$1)){if(G(l))return n$1.field(l);throw new a(e,r.InvalidMemberAccessKey,t)}if(n$1 instanceof z){if(G(l))return n$1.global(l);throw new a(e,r.InvalidMemberAccessKey,t)}if(n$1 instanceof n){if(G(l))return d(n$1,l,e,t);throw new a(e,r.InvalidMemberAccessKey,t)}if(U(n$1)){if(E(l)&&isFinite(l)&&Math.floor(l)===l){if(l<0&&(l=n$1.length+l),l>=n$1.length||l<0)throw new a(e,r.OutOfBounds,t);return n$1[l]}throw new a(e,r.InvalidMemberAccessKey,t)}if(Q$1(n$1)){if(E(l)&&isFinite(l)&&Math.floor(l)===l){if(l<0&&(l=n$1.length()+l),l>=n$1.length()||l<0)throw new a(e,r.OutOfBounds,t);return n$1.get(l)}throw new a(e,r.InvalidMemberAccessKey,t)}if(G(n$1)){if(E(l)&&isFinite(l)&&Math.floor(l)===l){if(l<0&&(l=n$1.length+l),l>=n$1.length||l<0)throw new a(e,r.OutOfBounds,t);return n$1[l]}throw new a(e,r.InvalidMemberAccessKey,t)}throw new a(e,r.InvalidMemberAccessKey,t)}async function Fe(e,t){const n=await Y(e,t.argument);if(z$1(n)){if("!"===t.operator)return !n;if("-"===t.operator)return -1*ge$1(n);if("+"===t.operator)return 1*ge$1(n);if("~"===t.operator)return ~ge$1(n);throw new a(e,r.UnsupportedUnaryOperator,t)}if("-"===t.operator)return -1*ge$1(n);if("+"===t.operator)return 1*ge$1(n);if("~"===t.operator)return ~ge$1(n);throw new a(e,r.UnsupportedUnaryOperator,t)}async function Ce(e,t){const n=[];for(let r=0;r<t.elements.length;r++)n.push(await Y(e,t.elements[r]));for(let r$1=0;r$1<n.length;r$1++){if(_$1(n[r$1]))throw new a(e,r.NoFunctionInArray,t);n[r$1]===O&&(n[r$1]=null);}return n}async function Re(e,t){const n=[];n[0]=await Y(e,t.left),n[1]=await Y(e,t.right);const r$1=n[0],o=n[1];switch(t.operator){case"|":case"<<":case">>":case">>>":case"^":case"&":return _e(ge$1(r$1),ge$1(o),t.operator);case"==":return ce$1(r$1,o);case"!=":return !ce$1(r$1,o);case"<":case">":case"<=":case">=":return fe$1(r$1,o,t.operator);case"+":return G(r$1)||G(o)?me$1(r$1)+me$1(o):ge$1(r$1)+ge$1(o);case"-":return ge$1(r$1)-ge$1(o);case"*":return ge$1(r$1)*ge$1(o);case"/":return ge$1(r$1)/ge$1(o);case"%":return ge$1(r$1)%ge$1(o);default:throw new a(e,r.UnsupportedOperator,t)}}async function Ae(e,t){const n=await Y(e,t.left);let r$1=null;if(!z$1(n))throw new a(e,r.LogicalExpressionOnlyBoolean,t);switch(t.operator){case"||":if(!0===n)return n;if(r$1=await Y(e,t.right),z$1(r$1))return r$1;throw new a(e,r.LogicExpressionOrAnd,t);case"&&":if(!1===n)return n;if(r$1=await Y(e,t.right),z$1(r$1))return r$1;throw new a(e,r.LogicExpressionOrAnd,t);default:throw new a(e,r.LogicExpressionOrAnd,t)}}async function Me(e,t){const n=t.name.toLowerCase();if(null!=e.localScope&&void 0!==e.localScope[n]){const t=e.localScope[n];if(!0===t.valueset)return t.value;if(null!==t.d)return t.d;t.d=Y(e,t.node);const r=await t.d;return t.value=r,t.valueset=!0,r}if(void 0!==e.globalScope[n]){const t=e.globalScope[n];if(!0===t.valueset)return t.value;if(null!==t.d)return t.d;t.d=Y(e,t.node);const r=await t.d;return t.value=r,t.valueset=!0,r}throw new a(e,r.InvalidIdentifier,t)}async function je(e,t){if("MemberExpression"===t.callee.type){const n=await Y(e,t.callee.object);if(!(n instanceof z))throw new a(e,r.FunctionNotFound,t);const r$1=!1===t.callee.computed?t.callee.property.name:await Y(e,t.callee.property);if(!n.hasGlobal(r$1))throw new a(e,r.FunctionNotFound,t);const o=await n.global(r$1);if(!_$1(o))throw new a(e,r.CallNonFunction,t);return o.call(e,t)}if("Identifier"!==t.callee.type)throw new a(e,r.FunctionNotFound,t);if(null!=e.localScope&&void 0!==e.localScope[t.callee.name.toLowerCase()]){const n=e.localScope[t.callee.name.toLowerCase()];if(_$1(n.value))return n.value.call(e,t);throw new a(e,r.CallNonFunction,t)}if(void 0!==e.globalScope[t.callee.name.toLowerCase()]){const n=e.globalScope[t.callee.name.toLowerCase()];if(_$1(n.value))return n.value.call(e,t);throw new a(e,r.CallNonFunction,t)}throw new a(e,r.FunctionNotFound,t)}async function Le(e,t){return t.value?t.value.cooked:""}function ke(e,t,n){if(_$1(e))throw new a(t,r.NoFunctionInTemplateLiteral,n);return e}async function Ee(e,t){const n=[];for(let a=0;a<t.expressions.length;a++){const r=await Y(e,t.expressions[a]);n[a]=me$1(r);}let r="",o=0;for(const a of t.quasis)if(r+=a.value?a.value.cooked:"",!1===a.tail){r+=n[o]?ke(n[o],e,t):"",o++;}return r}const Ne={};async function Oe(e,t,n,r){const o=await Y(e,t.arguments[n]);if(ce$1(o,r))return Y(e,t.arguments[n+1]);const a=t.arguments.length-n;return 1===a?Y(e,t.arguments[n]):2===a?null:3===a?Y(e,t.arguments[n+2]):Oe(e,t,n+2,r)}async function Be(e,t,n,r$1){if(!0===r$1)return Y(e,t.arguments[n+1]);if(3===t.arguments.length-n)return Y(e,t.arguments[n+2]);const o=await Y(e,t.arguments[n+2]);if(!1===z$1(o))throw new a(e,r.ModuleExportNotFound,t.arguments[n+2]);return Be(e,t,n+2,o)}async function Pe(e,t,n,r$1){const o=e.body;if(n.length!==e.params.length)throw new a(t,r.WrongNumberOfParameters,null);for(let a=0;a<n.length;a++){const r=e.params[a];"Identifier"===r.type&&null!=t.localScope&&(t.localScope[r.name.toLowerCase()]={d:null,value:n[a],valueset:!0,node:null});}const l=await Y(t,o);if(l instanceof M$1)return l.value;if(l===R)throw new a(t,r.UnexpectedToken,r$1);if(l===J$1)throw new a(t,r.UnexpectedToken,r$1);return l instanceof x?l.value:l}C(Ne,V),Y$1(Ne,V),M(Ne,V),L(Ne,V),f(Ne,V),xn({functions:Ne,compiled:!1,signatures:null,evaluateIdentifier:null,mode:"async",standardFunction:V,standardFunctionAsync:H}),Ne.iif=async function(e,t){ae$1(null===t.arguments?[]:t.arguments,3,3,e,t);const n=await Y(e,t.arguments[0]);if(!1===z$1(n))throw new a(e,r.BooleanConditionRequired,t);return Y(e,n?t.arguments[1]:t.arguments[2])},Ne.defaultvalue=async function(e,t){ae$1(null===t.arguments?[]:t.arguments,2,3,e,t);const r=await Y(e,t.arguments[0]);if(3===t.arguments.length){const o=await Y(e,t.arguments[1]),a=p(r,o);return null!=a&&""!==a?a:Y(e,t.arguments[2])}return null==r||""===r?Y(e,t.arguments[1]):r},Ne.decode=async function(e,t){if(t.arguments.length<2)throw new a(e,r.WrongNumberOfParameters,t);if(2===t.arguments.length)return Y(e,t.arguments[1]);if((t.arguments.length-1)%2==0)throw new a(e,r.WrongNumberOfParameters,t);return Oe(e,t,1,await Y(e,t.arguments[0]))},Ne.when=async function(e,t){if(t.arguments.length<3)throw new a(e,r.WrongNumberOfParameters,t);if(t.arguments.length%2==0)throw new a(e,r.WrongNumberOfParameters,t);const n=await Y(e,t.arguments[0]);if(!1===z$1(n))throw new a(e,r.BooleanConditionRequired,t.arguments[0]);return Be(e,t,0,n)};const Ke={fixSpatialReference:Ze$1,parseArguments:W,standardFunction:V,standardFunctionAsync:H,evaluateIdentifier:Me};for(const We in Ne)Ne[We]={value:new e(Ne[We]),valueset:!0,node:null};const De=function(){};function Ge(e$1,t,n){const r=new De;null==e$1&&(e$1={}),null==t&&(t={});const a=new N({newline:"\n",tab:"\t",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});a.immutable=!1,r.textformatting={value:a,valueset:!0,node:null};for(const o in t)r[o]={value:new e(t[o]),native:!0,valueset:!0,node:null};for(const o in e$1)e$1[o]&&"esri.Graphic"===e$1[o].declaredClass?r[o]={value:D.createFromGraphic(e$1[o],n),valueset:!0,node:null}:r[o]={value:e$1[o],valueset:!0,node:null};return r}function Ue(e){console.log(e);}De.prototype=Ne,De.prototype.infinity={value:Number.POSITIVE_INFINITY,valueset:!0,node:null},De.prototype.pi={value:Math.PI,valueset:!0,node:null};const Ze=Ke;function qe(e$1){const t={mode:"async",compiled:!1,functions:{},signatures:[],standardFunction:V,standardFunctionAsync:H,evaluateIdentifier:Me};for(let n=0;n<e$1.length;n++)e$1[n].registerFunctions(t);for(const n in t.functions)Ne[n]={value:new e(t.functions[n]),valueset:!0,node:null},De.prototype[n]=Ne[n];for(let n=0;n<t.signatures.length;n++)o(t.signatures[n],"async");}async function Te(e,n){let r$1=n.spatialReference;null==r$1&&(r$1=new f$1({wkid:102100}));let o=null;e.usesModules&&(o=new s(new Map,e.loadedModules));const l=Ge(n.vars,n.customfunctions,n.timeZone),s$1={spatialReference:r$1,services:n.services,exports:{},libraryResolver:o,abortSignal:void 0===n.abortSignal||null===n.abortSignal?{aborted:!1}:n.abortSignal,globalScope:l,console:n.console??Ue,timeZone:n.timeZone??null,lrucache:n.lrucache,interceptor:n.interceptor,localScope:null,depthCounter:{depth:1}};let c=await Y(s$1,e);if(c instanceof M$1&&(c=c.value),c instanceof x&&(c=c.value),c===O&&(c=null),c===R)throw new a(s$1,r.IllegalResult,null);if(c===J$1)throw new a(s$1,r.IllegalResult,null);if(_$1(c))throw new a(s$1,r.IllegalResult,null);return c}qe([p$1]);

export { Te as executeScript, qe as extend, Ze as functionHelper };
