import{C as ue,E as fe,g as pe,p as we,B as de,f as he,o as _,y as ge,e as P,s as me,a as z,_ as m,I as V,v as p,G as v,Y as y,L as K,b as ye,c as S,d as f,H as Y,h as A,n as h,W as D,i as G,j as O,k as be,m as L,l as ve,A as Se,D as J,q as xe,r as q,t as Ie,u as T,w as Q,U as X,x as $}from"./arcade-BtarM3S5.js";import{a as i,r as l,u as ee}from"./unitConversion-IFYN2jfA.js";import{registerFunctions as Fe}from"./geomasync-f27JxgES.js";import{cZ as k,O as ne,c_ as d,c$ as N,cO as C,d0 as H,d1 as ke}from"./main-D_jCcUNd.js";import"./preload-helper-ExcqyqRp.js";import"./ImmutableArray-BPVd6ESQ.js";import"./shared-DxPH1WpM.js";import"./TimeOnly-BfnZSHjj.js";import"./Field-Bc3jm0Qy.js";import"./fieldType-DdU3LEuk.js";import"./number-CW7Aa2f1.js";import"./featureConversionUtils-D7fsiKAJ.js";import"./OptimizedFeature-jM_20Y6K.js";import"./memoryEstimations-CE0MHqcd.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./FieldsIndex-B_iDwEMI.js";import"./timeZoneUtils-6sWpKbTj.js";import"./WhereClause-Cn1g6j8F.js";import"./uuid-Cl5lrJ4c.js";import"./portalUtils-C2tDslme.js";import"./operatorsWorkerConnection-DrHIap8L.js";import"./workers-C_FSogvH.js";import"./Queue-BTQW9uXn.js";import"./intl-Bp-1PIwe.js";async function j(n,e){const r=[];for(let o=0;o<e.arguments.length;o++)r.push(await u(n,e.arguments[o]));return r}async function F(n,e,r){return e.preparsed===!0?r(n,null,e.arguments):r(n,e,await j(n,e))}class Me extends Ie{constructor(e,r){super(),this.definition=null,this.context=null,this.definition=e,this.context=r}createFunction(e){return(...r)=>{const o={spatialReference:this.context.spatialReference,console:this.context.console,lrucache:this.context.lrucache,timeZone:this.context.timeZone??null,exports:this.context.exports,libraryResolver:this.context.libraryResolver,interceptor:this.context.interceptor,localScope:{},depthCounter:{depth:e.depthCounter+1},globalScope:this.context.globalScope};if(o.depthCounter.depth>64)throw new i(e,l.MaximumCallDepth,null);return Z(this.definition,o,r,null)}}call(e,r){return B(e,r,(o,a,t)=>{const s={spatialReference:e.spatialReference,services:e.services,console:e.console,libraryResolver:e.libraryResolver,exports:e.exports,lrucache:e.lrucache,timeZone:e.timeZone??null,interceptor:e.interceptor,localScope:{},abortSignal:e.abortSignal,globalScope:e.globalScope,depthCounter:{depth:e.depthCounter.depth+1}};if(s.depthCounter.depth>64)throw new i(e,l.MaximumCallDepth,r);return Z(this.definition,s,t,r)})}marshalledCall(e,r,o,a){return a(e,r,async(t,s,c)=>{const x={spatialReference:e.spatialReference,globalScope:o.globalScope,depthCounter:{depth:e.depthCounter.depth+1},libraryResolver:e.libraryResolver,exports:e.exports,console:e.console,abortSignal:e.abortSignal,lrucache:e.lrucache,timeZone:e.timeZone??null,interceptor:e.interceptor,localScope:{}};return c=c.map(b=>!v(b)||b instanceof q?b:T(b,e,a)),T(await Z(this.definition,x,c,r),o,a)})}}class M extends xe{constructor(e){super(),this.source=e}global(e){const r=this.executingContext.globalScope[h(e)];if(v(r.value)&&!(r.value instanceof q)){const o=new q;o.fn=r.value,o.parameterEvaluator=B,o.context=this.executingContext,r.value=o}return r.value}setGlobal(e,r){if(v(r))throw new i(null,l.AssignModuleFunction,null);this.executingContext.globalScope[h(e)]={value:r}}hasGlobal(e){return this.executingContext.exports[e]===void 0&&(e=h(e)),this.executingContext.exports[e]!==void 0}async loadModule(e){let r=e.spatialReference;r==null&&(r=new ne({wkid:102100})),this.moduleScope=se({},e.customfunctions,e.timeZone),this.executingContext={spatialReference:r,services:e.services,libraryResolver:new z(e.libraryResolver._moduleSingletons,this.source.syntax.loadedModules),exports:{},abortSignal:e.abortSignal===void 0||e.abortSignal===null?{aborted:!1}:e.abortSignal,globalScope:this.moduleScope,console:e.console??ce,lrucache:e.lrucache,timeZone:e.timeZone??null,interceptor:e.interceptor,localScope:null,depthCounter:{depth:1}},await W(this.executingContext,this.source.syntax)}}async function B(n,e,r){return e.preparsed===!0?r(n,null,e.arguments):r(n,e,await j(n,e))}async function u(n,e){e.breakpoint&&await e.breakpoint();try{switch(e.type){case"UpdateExpression":return await De(n,e);case"AssignmentExpression":return await Ke(n,e);case"TemplateLiteral":return await Ye(n,e);case"Identifier":return U(n,e);case"MemberExpression":return await je(n,e);case"Literal":return e.value;case"CallExpression":return await ze(n,e);case"UnaryExpression":return await We(n,e);case"BinaryExpression":return await Te(n,e);case"LogicalExpression":return await He(n,e);case"ArrayExpression":return await _e(n,e);case"ObjectExpression":return await Ce(n,e);default:throw new i(n,l.Unrecognized,e)}}catch(r){throw ee(n,e,r)}}async function g(n,e){e.breakpoint&&await e.breakpoint();try{switch(e.type){case"ImportDeclaration":return await qe(n,e);case"ExportNamedDeclaration":return await Pe(n,e);case"VariableDeclaration":return await te(n,e,0);case"BlockStatement":return await W(n,e);case"FunctionDeclaration":return await Le(n,e);case"ReturnStatement":return await Ge(n,e);case"IfStatement":return await Ze(n,e);case"ExpressionStatement":return await Ue(n,e);case"ForStatement":return await Oe(n,e);case"WhileStatement":return await Re(n,e);case"ForInStatement":return await Be(n,e);case"ForOfStatement":return await Ee(n,e);case"BreakStatement":return y;case"EmptyStatement":return p;case"ContinueStatement":return K;default:throw new i(n,l.Unrecognized,e)}}catch(r){throw ee(n,e,r)}}async function Ce(n,e){const r=[];for(let s=0;s<e.properties.length;s++){const c=e.properties[s],x=await u(n,c.value),b=c.key.type==="Identifier"?c.key.name:await u(n,c.key);r[s]={key:b,value:x}}const o={},a=new Map;for(let s=0;s<r.length;s++){const c=r[s];if(v(c.value))throw new i(n,l.NoFunctionInDictionary,e);if(d(c.key)===!1)throw new i(n,l.KeyMustBeString,e);let x=c.key.toString();const b=x.toLowerCase();a.has(b)?x=a.get(b):a.set(b,x),c.value===p?o[x]=null:o[x]=c.value}const t=new S(o);return t.immutable=!1,t}async function Re(n,e){let r=await u(n,e.test);if(r===!1)return p;if(r!==!0)throw new i(n,l.BooleanConditionRequired,e);for(;r===!0;){const o=await g(n,e.body);if(o===y)break;if(o instanceof m)return o;if(r=await u(n,e.test),r!==!0&&r!==!1)throw new i(n,l.BooleanConditionRequired,e)}return p}async function Oe(n,e){try{for(e.init!==null&&(e.init.type==="VariableDeclaration"?await g(n,e.init):await u(n,e.init));;){if(e.test!==null){const o=await u(n,e.test);if(n.abortSignal?.aborted===!0)throw new i(n,l.Cancelled,e);if(o===!1)break;if(o!==!0)throw new i(n,l.BooleanConditionRequired,e)}const r=await g(n,e.body);if(r===y)break;if(r instanceof m)return r;e.update!==null&&await u(n,e.update)}return p}catch(r){throw r}}async function E(n,e,r,o,a="i"){const t=r.length;for(let s=0;s<t;s++){if(a==="k"){if(s>=r.length)throw new i(n,l.OutOfBounds,e);o.value=r[s]}else o.value=s;const c=await g(n,e.body);if(c===y)break;if(c instanceof m)return c}return p}async function re(n,e,r,o,a="i"){const t=r.length();for(let s=0;s<t;s++){o.value=a==="k"?r.get(s):s;const c=await g(n,e.body);if(c===y)break;if(c instanceof m)return c}return p}async function oe(n,e,r,o){const a=r.iterator(n.abortSignal);let t;for(;(t=await a.next())!=null;){const s=J.createFromGraphicLikeObject(t.geometry,t.attributes,r,n.timeZone);s._underlyingGraphic=t,o.value=s;const c=await g(n,e.body);if(c===y)break;if(c instanceof m)return c}return p}async function Ae(n,e,r,o){for(const a of r.keys()){const t=r.field(a);o.value=new S({key:a,value:t});const s=await g(n,e.body);if(s===y)break;if(s instanceof m)return s}return p}async function Ne(n,e,r,o){for(const a of $(r)){const t=G(r,a,n,e,1);o.value=new S({key:a,value:t});const s=await g(n,e.body);if(s===y)break;if(s instanceof m)return s}return p}async function Be(n,e){const r=await u(n,e.right);e.left.type==="VariableDeclaration"&&await g(n,e.left);const o=h(e.left.type==="VariableDeclaration"?e.left.declarations[0].id:e.left);let a=null;if(n.localScope!=null&&n.localScope[o]!==void 0&&(a=n.localScope[o]),a===null&&n.globalScope[o]!==void 0&&(a=n.globalScope[o]),a===null)throw new i(n,l.InvalidIdentifier,e);return N(r)||d(r)?await E(n,e,r,a):A(r)?await re(n,e,r,a):r instanceof S||D(r)?await E(n,e,r.keys(),a,"k"):Q(r)?await oe(n,e,r,a):X(r)?await E(n,e,$(r),a,"k"):p}async function Ee(n,e){const r=await u(n,e.right);e.left.type==="VariableDeclaration"&&await g(n,e.left);const o=h(e.left.type==="VariableDeclaration"?e.left.declarations[0].id:e.left);let a=null;if(n.localScope!=null&&n.localScope[o]!==void 0&&(a=n.localScope[o]),a===null&&n.globalScope[o]!==void 0&&(a=n.globalScope[o]),a===null)throw new i(n,l.InvalidIdentifier,e);return N(r)||d(r)?await E(n,e,r,a,"k"):A(r)?await re(n,e,r,a,"k"):r instanceof S||D(r)?await Ae(n,e,r,a):Q(r)?await oe(n,e,r,a):X(r)?await Ne(n,e,r,a):p}async function De(n,e){const r=e.argument;if(r.type==="CallExpression")throw new i(n,l.NeverReach,e);if(r.type==="MemberExpression"){const t=await u(n,r.object);let s,c;if(r.computed===!0)s=await u(n,r.property);else{if(r.property.type!=="Identifier")throw new i(n,l.Unrecognized,e);s=r.property.name}if(N(t)){if(!C(s))throw new i(n,l.ArrayAccessorMustBeNumber,e);if(s<0&&(s=t.length+s),s<0||s>=t.length)throw new i(n,l.OutOfBounds,e);c=f(t[s]),t[s]=e.operator==="++"?c+1:c-1}else if(t instanceof S){if(d(s)===!1)throw new i(n,l.KeyAccessorMustBeString,e);if(t.hasField(s)!==!0)throw new i(n,l.FieldNotFound,e,{key:s});c=f(t.field(s)),t.setField(s,e.operator==="++"?c+1:c-1)}else if(t instanceof M){if(d(s)===!1)throw new i(n,l.ModuleAccessorMustBeString,e);if(t.hasGlobal(s)!==!0)throw new i(n,l.ModuleExportNotFound,e);c=f(t.global(s)),t.setGlobal(s,e.operator==="++"?c+1:c-1)}else{if(!Y(t))throw A(t)?new i(n,l.Immutable,e):new i(n,l.InvalidParameter,e);if(d(s)===!1)throw new i(n,l.KeyAccessorMustBeString,e);if(t.hasField(s)!==!0)throw new i(n,l.FieldNotFound,e,{key:s});c=f(t.field(s)),t.setField(s,e.operator==="++"?c+1:c-1)}return e.prefix===!1?c:e.operator==="++"?c+1:c-1}const o=h(r);let a;if(n.localScope!=null&&n.localScope[o]!==void 0)return a=f(n.localScope[o].value),n.localScope[o]={value:e.operator==="++"?a+1:a-1},e.prefix===!1?a:e.operator==="++"?a+1:a-1;if(n.globalScope[o]!==void 0)return a=f(n.globalScope[o].value),n.globalScope[o]={value:e.operator==="++"?a+1:a-1},e.prefix===!1?a:e.operator==="++"?a+1:a-1;throw new i(n,l.InvalidIdentifier,e)}function I(n,e,r,o,a){switch(e){case"=":return n===p?null:n;case"/=":return f(r)/f(n);case"*=":return f(r)*f(n);case"-=":return f(r)-f(n);case"+=":return d(r)||d(n)?O(r)+O(n):f(r)+f(n);case"%=":return f(r)%f(n);default:throw new i(a,l.UnsupportedOperator,o)}}async function Ke(n,e){const r=e.left;if(r.type==="MemberExpression"){const a=await u(n,r.object);let t;if(r.computed===!0)t=await u(n,r.property);else{if(r.property.type!=="Identifier")throw new i(n,l.InvalidIdentifier,e);t=r.property.name}const s=await u(n,e.right);if(N(a)){if(!C(t))throw new i(n,l.ArrayAccessorMustBeNumber,e);if(t<0&&(t=a.length+t),t<0||t>a.length)throw new i(n,l.OutOfBounds,e);if(t===a.length){if(e.operator!=="=")throw new i(n,l.OutOfBounds,e);a[t]=I(s,e.operator,a[t],e,n)}else a[t]=I(s,e.operator,a[t],e,n)}else if(a instanceof S){if(d(t)===!1)throw new i(n,l.KeyAccessorMustBeString,e);if(a.hasField(t)===!0)a.setField(t,I(s,e.operator,a.field(t),e,n));else{if(e.operator!=="=")throw new i(n,l.FieldNotFound,e,{key:t});a.setField(t,I(s,e.operator,null,e,n))}}else if(a instanceof M){if(d(t)===!1)throw new i(n,l.KeyAccessorMustBeString,e);if(a.hasGlobal(t)!==!0)throw new i(n,l.ModuleExportNotFound,e);a.setGlobal(t,I(s,e.operator,a.global(t),e,n))}else{if(!Y(a))throw A(a)?new i(n,l.Immutable,e):new i(n,l.InvalidParameter,e);if(d(t)===!1)throw new i(n,l.KeyAccessorMustBeString,e);if(a.hasField(t)===!0)a.setField(t,I(s,e.operator,a.field(t),e,n));else{if(e.operator!=="=")throw new i(n,l.FieldNotFound,e,{key:t});a.setField(t,I(s,e.operator,null,e,n))}}return p}const o=h(r);if(n.localScope!=null&&n.localScope[o]!==void 0){const a=await u(n,e.right);return n.localScope[o]={value:I(a,e.operator,n.localScope[o].value,e,n)},p}if(n.globalScope[o]!==void 0){const a=await u(n,e.right);return n.globalScope[o]={value:I(a,e.operator,n.globalScope[o].value,e,n)},p}throw new i(n,l.InvalidIdentifier,e)}async function Ue(n,e){const r=await u(n,e.expression);return r===p?p:new V(r)}async function Ze(n,e){const r=await u(n,e.test);if(r===!0)return g(n,e.consequent);if(r===!1)return e.alternate!==null?g(n,e.alternate):p;throw new i(n,l.BooleanConditionRequired,e)}async function W(n,e){return ae(n,e,0)}async function ae(n,e,r){if(r>=e.body.length)return p;const o=await g(n,e.body[r]);return o instanceof m||o===y||o===K||r===e.body.length-1?o:ae(n,e,r+1)}async function Ge(n,e){if(e.argument===null)return new m(p);const r=await u(n,e.argument);return new m(r)}async function Le(n,e){const r=h(e.id);return n.globalScope[r]={value:new Me(e,n)},p}async function qe(n,e){const r=h(e.specifiers[0].local),o=n.libraryResolver.loadLibrary(r);let a;return n.libraryResolver._moduleSingletons?.has(o.uri)?a=n.libraryResolver._moduleSingletons.get(o.uri):(a=new M(o),await a.loadModule(n),n.libraryResolver._moduleSingletons?.set(o.uri,a)),n.globalScope[r]={value:a},p}async function Pe(n,e){if(await g(n,e.declaration),e.declaration.type==="FunctionDeclaration")n.exports[h(e.declaration.id)]="function";else if(e.declaration.type==="VariableDeclaration")for(const r of e.declaration.declarations)n.exports[h(r.id)]="variable";return p}async function te(n,e,r){return r>=e.declarations.length?p:(await Ve(n,e.declarations[r]),r===e.declarations.length-1||await te(n,e,r+1),p)}async function Ve(n,e){let r=null;if(r=e.init===null?null:await u(n,e.init),n.localScope!==null){if(r===p&&(r=null),e.id.type!=="Identifier")throw new i(n,l.InvalidIdentifier,e);const a=h(e.id);return void(n.localScope!=null&&(n.localScope[a]={value:r}))}if(e.id.type!=="Identifier")throw new i(n,l.InvalidIdentifier,e);const o=h(e.id);r===p&&(r=null),n.globalScope[o]={value:r}}async function je(n,e){const r=await u(n,e.object);if(r===null)throw new i(n,l.MemberOfNull,e);if(e.computed===!1){if(e.property.type==="Identifier"){if(r instanceof S||D(r))return r.field(e.property.name);if(r instanceof H)return G(r,e.property.name,n,e);if(r instanceof M){if(!r.hasGlobal(e.property.name))throw new i(n,l.InvalidIdentifier,e);return r.global(e.property.name)}throw new i(n,l.InvalidMemberAccessKey,e)}throw new i(n,l.InvalidMemberAccessKey,e)}let o=await u(n,e.property);if(r instanceof S||D(r)){if(d(o))return r.field(o);throw new i(n,l.InvalidMemberAccessKey,e)}if(r instanceof M){if(d(o))return r.global(o);throw new i(n,l.InvalidMemberAccessKey,e)}if(r instanceof H){if(d(o))return G(r,o,n,e);throw new i(n,l.InvalidMemberAccessKey,e)}if(N(r)){if(C(o)&&isFinite(o)&&Math.floor(o)===o){if(o<0&&(o=r.length+o),o>=r.length||o<0)throw new i(n,l.OutOfBounds,e);return r[o]}throw new i(n,l.InvalidMemberAccessKey,e)}if(A(r)){if(C(o)&&isFinite(o)&&Math.floor(o)===o){if(o<0&&(o=r.length()+o),o>=r.length()||o<0)throw new i(n,l.OutOfBounds,e);return r.get(o)}throw new i(n,l.InvalidMemberAccessKey,e)}if(d(r)){if(C(o)&&isFinite(o)&&Math.floor(o)===o){if(o<0&&(o=r.length+o),o>=r.length||o<0)throw new i(n,l.OutOfBounds,e);return r[o]}throw new i(n,l.InvalidMemberAccessKey,e)}throw new i(n,l.InvalidMemberAccessKey,e)}async function We(n,e){const r=await u(n,e.argument);if(k(r)){if(e.operator==="!")return!r;if(e.operator==="-")return-1*f(r);if(e.operator==="+")return 1*f(r);if(e.operator==="~")return~f(r);throw new i(n,l.UnsupportedUnaryOperator,e)}if(e.operator==="-")return-1*f(r);if(e.operator==="+")return 1*f(r);if(e.operator==="~")return~f(r);throw new i(n,l.UnsupportedUnaryOperator,e)}async function _e(n,e){const r=[];for(let o=0;o<e.elements.length;o++)r.push(await u(n,e.elements[o]));for(let o=0;o<r.length;o++){if(v(r[o]))throw new i(n,l.NoFunctionInArray,e);r[o]===p&&(r[o]=null)}return r}async function Te(n,e){const r=await u(n,e.left),o=await u(n,e.right);switch(e.operator){case"|":case"<<":case">>":case">>>":case"^":case"&":return ve(f(r),f(o),e.operator);case"==":return L(r,o);case"!=":return!L(r,o);case"<":case">":case"<=":case">=":return be(r,o,e.operator);case"+":return d(r)||d(o)?O(r)+O(o):f(r)+f(o);case"-":return f(r)-f(o);case"*":return f(r)*f(o);case"/":return f(r)/f(o);case"%":return f(r)%f(o);default:throw new i(n,l.UnsupportedOperator,e)}}async function He(n,e){const r=await u(n,e.left);if(!k(r))throw new i(n,l.LogicalExpressionOnlyBoolean,e);switch(e.operator){case"||":{if(r===!0)return r;const o=await u(n,e.right);if(k(o))return o;throw new i(n,l.LogicExpressionOrAnd,e)}case"&&":{if(r===!1)return r;const o=await u(n,e.right);if(k(o))return o;throw new i(n,l.LogicExpressionOrAnd,e)}default:throw new i(n,l.LogicExpressionOrAnd,e)}}function U(n,e){const r=h(e);if(n.localScope!=null&&n.localScope[r]!==void 0)return n.localScope[r].value;if(n.globalScope[r]!==void 0)return n.globalScope[r].value;throw new i(n,l.InvalidIdentifier,e)}async function ze(n,e){if(e.callee.type==="MemberExpression"){const o=await u(n,e.callee.object);if(!(o instanceof M))throw new i(n,l.FunctionNotFound,e);const a=e.callee.computed===!1?e.callee.property.name:await u(n,e.callee.property);if(!o.hasGlobal(a))throw new i(n,l.FunctionNotFound,e);const t=o.global(a);if(!v(t))throw new i(n,l.CallNonFunction,e);return t.call(n,e)}if(e.callee.type!=="Identifier")throw new i(n,l.FunctionNotFound,e);const r=h(e.callee);if(n.localScope!=null&&n.localScope[r]!==void 0){const o=n.localScope[r];if(v(o.value))return o.value.call(n,e);throw new i(n,l.CallNonFunction,e)}if(n.globalScope[r]!==void 0){const o=n.globalScope[r];if(v(o.value))return o.value.call(n,e);throw new i(n,l.CallNonFunction,e)}throw new i(n,l.FunctionNotFound,e)}async function Ye(n,e){let r="",o=0;for(const a of e.quasis)if(r+=a.value?a.value.cooked:"",a.tail===!1){if(e.expressions[o]){const t=await u(n,e.expressions[o]);if(v(t))throw new i(n,l.NoFunctionInTemplateLiteral,e);r+=O(t)}o++}return r}const w={};async function ie(n,e,r,o){const a=await u(n,e.arguments[r]);if(L(a,o))return u(n,e.arguments[r+1]);const t=e.arguments.length-r;return t===1?u(n,e.arguments[r]):t===2?null:t===3?u(n,e.arguments[r+2]):ie(n,e,r+2,o)}async function le(n,e,r,o){if(o===!0)return u(n,e.arguments[r+1]);if(e.arguments.length-r===3)return u(n,e.arguments[r+2]);const a=await u(n,e.arguments[r+2]);if(k(a)===!1)throw new i(n,l.ModuleExportNotFound,e.arguments[r+2]);return le(n,e,r+2,a)}async function Z(n,e,r,o){const a=n.body;if(r.length!==n.params.length)throw new i(e,l.WrongNumberOfParameters,null);for(let s=0;s<r.length;s++){const c=n.params[s];c.type==="Identifier"&&e.localScope!=null&&(e.localScope[h(c)]={value:r[s]})}const t=await g(e,a);if(t instanceof m)return t.value;if(t===y)throw new i(e,l.UnexpectedToken,o);if(t===K)throw new i(e,l.UnexpectedToken,o);return t instanceof V?t.value:t}ue(w,F),fe(w,F),pe(w,F,U),we(w,F),de(w,F),he(w,F),Fe({functions:w,compiled:!1,signatures:null,evaluateIdentifier:null,mode:"async",standardFunction:F,standardFunctionAsync:B}),w.iif=async function(n,e){_(e.arguments===null?[]:e.arguments,3,3,n,e);const r=await u(n,e.arguments[0]);if(k(r)===!1)throw new i(n,l.BooleanConditionRequired,e);return u(n,r?e.arguments[1]:e.arguments[2])},w.defaultvalue=async function(n,e){_(e.arguments===null?[]:e.arguments,2,3,n,e);const r=await u(n,e.arguments[0]);if(e.arguments.length===3){const o=await u(n,e.arguments[1]),a=ge(r,o);return a!=null&&a!==""?a:u(n,e.arguments[2])}return r==null||r===""?u(n,e.arguments[1]):r},w.decode=async function(n,e){if(e.arguments.length<2)throw new i(n,l.WrongNumberOfParameters,e);if(e.arguments.length===2)return u(n,e.arguments[1]);if((e.arguments.length-1)%2==0)throw new i(n,l.WrongNumberOfParameters,e);return ie(n,e,1,await u(n,e.arguments[0]))},w.when=async function(n,e){if(e.arguments.length<3)throw new i(n,l.WrongNumberOfParameters,e);if(e.arguments.length%2==0)throw new i(n,l.WrongNumberOfParameters,e);const r=await u(n,e.arguments[0]);if(k(r)===!1)throw new i(n,l.BooleanConditionRequired,e.arguments[0]);return le(n,e,0,r)};const Je={fixSpatialReference:Se,parseArguments:j,standardFunction:F,standardFunctionAsync:B,evaluateIdentifier:U};for(const n in w)w[n]={value:new P(w[n])};const R=function(){};function se(n,e,r){const o=new R;n==null&&(n={}),e==null&&(e={});const a=new S({newline:`
`,tab:"	",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});a.immutable=!1,o.textformatting={value:a};for(const t in e)o[t]={value:new P(e[t])};for(const t in n)o[t]={value:ke(n[t])?J.createFromGraphic(n[t],r):n[t]};return o}function ce(n){console.log(n)}R.prototype=w,R.prototype.infinity={value:Number.POSITIVE_INFINITY},R.prototype.pi={value:Math.PI};const In=Je;function Qe(n){const e={mode:"async",compiled:!1,functions:{},signatures:[],standardFunction:F,standardFunctionAsync:B,evaluateIdentifier:U};for(let r=0;r<n.length;r++)n[r].registerFunctions(e);for(const r in e.functions)w[r]={value:new P(e.functions[r])},R.prototype[r]=w[r];for(let r=0;r<e.signatures.length;r++)me(e.signatures[r],"async")}async function Fn(n,e){let r=e.spatialReference;r==null&&(r=new ne({wkid:102100}));let o=null;n.usesModules&&(o=new z(new Map,n.loadedModules));const a=se(e.vars,e.customfunctions,e.timeZone),t={spatialReference:r,services:e.services,exports:{},libraryResolver:o,abortSignal:e.abortSignal===void 0||e.abortSignal===null?{aborted:!1}:e.abortSignal,globalScope:a,console:e.console??ce,timeZone:e.timeZone??null,lrucache:e.lrucache,interceptor:e.interceptor,localScope:null,depthCounter:{depth:1}},s=await W(t,n);if(s instanceof m||s instanceof V){const c=s.value;if(c===p)return null;if(v(c))throw new i(t,l.IllegalResult,null);return c}if(s===p)return null;throw s===y?new i(t,l.IllegalResult,null):s===K?new i(t,l.IllegalResult,null):new i(t,l.NeverReach,null)}Qe([ye]);export{Fn as executeScript,Qe as extend,In as functionHelper};
