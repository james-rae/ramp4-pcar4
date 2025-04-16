import{E as J}from"./MapView-BzwjjI_-.js";import{B as g,t as Xt,s as Wt,n as Dt,cC as te}from"./main-CcTJZah4.js";import{p as ee,w as ne}from"./Texture-CAz7g1Ei.js";import"./enums-Dk3osxpS.js";import"./FramebufferObject-C6BEdWzA.js";import{r as re}from"./ProgramTemplate-yV363Sym.js";import{i as ie}from"./ShaderBuilder-dsjoC4CY.js";let Ae=class{constructor(){this.drawPhase=J.MAP|J.HITTEST|J.HIGHLIGHT|J.DEBUG}startup(){}shutdown(t){}};function se(n){return n.split(" ").map((t,e)=>e>0?t.charAt(0).toUpperCase()+t.slice(1):t).join("")}function oe(n,t){const e=[];for(e.push(t);e.length;){const r=e.pop();if(typeof r=="object"&&!n.has(r.uid)){n.add(r.uid);for(const i of r.children)e.push(i)}}}let M=class ht{constructor(){this.uid=ht.NodeCount++,this._debugName=null,this._isMutable=!1,this.isImplicit=!1}get isMutable(){return this._isMutable}setMutable(){return this._isMutable=!0,this}setDebugName(t){return t=se(t),this._debugName=t,this.isImplicit&&this.children[0]instanceof ht&&this.children[0].setDebugName(t),this}get debugInfo(){return{name:this._debugName??""}}cloneInto(t){t._debugName=this._debugName,t._isMutable=this._isMutable,t.isImplicit=this.isImplicit,t.uid=this.uid}};function c(n){return typeof n=="object"?n.clone():n}M.NodeCount=0;let y=class extends M{constructor(){super(...arguments),this.shaderType="primitive-node"}},ce=class zt extends M{constructor(t){super(),this.child=t,this.shaderType="scope-node"}get children(){return[this.child]}clone(){const t=new zt(c(this.child));return this.cloneInto(t),t}},ae=class Lt extends M{constructor(t,e,r){super(),this.property=t,this.target=e,this.returnType=r,this.shaderType="property-access-node"}get children(){const t=[this.target];return typeof this.property!="string"&&t.push(this.property),t}clone(){const t=new Lt(this.property,c(this.target),this.returnType);return this.cloneInto(t),t}};class Mt extends M{constructor(t,e,r,i){super(),this.x=t,this.y=e,this.target=r,this.returnType=i,this.shaderType="property-access-2d-node"}get children(){return[this.target,this.x,this.y]}clone(){const t=new Mt(this.x,this.y,c(this.target),this.returnType);return this.cloneInto(t),t}}class St extends M{constructor(t,e,r){super(),this.condition=t,this.ifTrue=e,this.ifFalse=r,this.shaderType="condition-node"}get children(){return[this.condition,this.ifTrue,this.ifFalse]}clone(){const t=c(this.ifTrue),e=this.ifFalse?c(this.ifFalse):null,r=new St(this.condition,t,e);return this.cloneInto(r),r}}let ue=class Gt extends M{constructor(t,e,r,i){super(),this.captureList=t,this.returnType=e,this.generator=i,this.shaderType="block-node",r&&(this.subgraph=new ce(r))}get children(){return Object.keys(this.captureList).map(t=>this.captureList[t]).concat(this.subgraph??[])}clone(){const t={};for(const r in this.captureList)t[r]=c(this.captureList[r]);const e=new Gt(t,this.returnType,this.subgraph?c(this.subgraph.child):this.subgraph,this.generator);return this.cloneInto(e),e}},C=class Ht extends M{constructor(t,e,r,i,s,o=!1){super(),this.token=t,this._children=e,this.isInfix=r,this.isPropertyAccess=i,this.returnType=s,this.isTernary=o,this.shaderType="function-node"}get children(){return this._children}clone(){const t=new Ht(this.token,this._children.map(c),this.isInfix,this.isPropertyAccess,this.returnType,this.isTernary);return this.cloneInto(t),t}};var G,pt,lt,ft,yt,mt,gt,bt,wt,vt,$t,xt,_t,It;function de(n){switch(n.type){case"bool":case"bvec2":case"bvec3":case"bvec4":return x;case"float":case"vec2":case"vec3":case"vec4":return p;case"int":case"ivec2":case"ivec3":case"ivec4":return f;case"uint":case"uvec2":case"uvec3":case"uvec4":return R;default:throw new Error("Unable to handle type")}}function he(n){const t=[["float","vec2","vec3","vec4"],["int","ivec2","ivec3","ivec4"],["uint","uvec2","uvec3","uvec4"],["bool","bvec2","bvec3","bvec4"]];for(const e of t)if(e.includes(n))return e.map(r=>fe[r]);throw new Error("Unable to find type family")}function Rt(n){return new Proxy(n,{get(t,e){if(e==="constructor")return new Proxy(t.constructor,{construct:(r,i,s)=>Rt(new r(...i))});if(e in t)return t[e];if(typeof e=="string"){const r=he(n.type);return $(n,e,r[e.length-1])}}})}function I(n){return new Proxy(n,{construct:(t,e,r)=>Rt(new t(...e))})}function pe(n){return new Proxy(n,{get(t,e){if(e in t)return t[e];if(typeof e=="string"){const r=parseInt(e,10);if(!isNaN(r))return $(n,`[${r}]`,n.elementType.constructor)}}})}function le(n){return new Proxy(n,{construct:(t,e,r)=>pe(new t(...e))})}let Tt=class extends Error{},X=G=class extends y{constructor(n,t){super(),this.elementType=n,this.size=t,this.children=[],this.type="array"}clone(){const n=new G(this.elementType,this.size);return super.cloneInto(n),n}get(n,t){const e=new f(n),r=t!=null?new f(t):null;return r!=null?dt(this,e,r,de(this.elementType.constructor)):$(this,e,this.elementType.constructor)}last(){return this.get(this.size-1)}first(){return this.get(0)}findIndex(n,t,e){return ge(this,n,t,e)}glslFindIndex(n,t,e){return be(this,n,t,e)}static ofType(n,t){const e={construct:(r,i)=>new G(new n,t)};return new Proxy(G,e)}};X.type="array",X=G=g([le],X);class ut extends y{constructor(t,e,r,i=!1){super(),this.elementType=t,this.xSize=e,this.ySize=r,this.isRowMajor=i,this.children=[],this.type="array-2d"}clone(){const t=new ut(this.elementType,this.xSize,this.ySize,this.isRowMajor);return super.cloneInto(t),t}get size(){return this.xSize*this.ySize}get(t,e){return this.isRowMajor?this._getRowMajor(t,e):this._getColumnMajor(t,e)}_getColumnMajor(t,e){const r=new f(t);return $(this,new f(e).add(r.multiply(this.xSize)),this.elementType.constructor)}_getRowMajor(t,e){const r=new f(t),i=new f(e);return $(this,r.add(i.multiply(this.ySize)),this.elementType.constructor)}static ofType(t,e,r,i=!1){return new Proxy(X,{construct:(s,o)=>new ut(new t,e,r,i)})}}ut.type="array-2d";class Ct extends y{constructor(){super(...arguments),this.type="sampler2D",this.children=[]}clone(){const t=new Ct;return t.children=this.children.map(c),super.cloneInto(t),t}}Ct.type="sampler2D";let p=class E extends y{constructor(t){super(),this.type="float",this.children=[t]}clone(){const t=new E(c(this.children[0]));return super.cloneInto(t),t}multiply(t){return N(this,typeof t=="number"?m(t,E):t)}divide(t){return Q(this,typeof t=="number"?m(t,E):t)}add(t){return A(this,typeof t=="number"?m(t,E):t)}subtract(t){return Y(this,typeof t=="number"?m(t,E):t)}};p.type="float";let K=pt=class extends y{constructor(n,t){super(),this.type="vec2",this.children=[n,t].filter(e=>e!=null)}clone(){const n=new pt(c(this.children[0]),c(this.children[1]));return super.cloneInto(n),n}get 0(){return $(this,"[0]",p)}get 1(){return $(this,"[1]",p)}get 2(){throw new Tt}get 3(){throw new Tt}multiply(n){return N(this,typeof n=="number"?m(n,p):n)}divide(n){return Q(this,typeof n=="number"?m(n,p):n)}add(n){return A(this,typeof n=="number"?m(n,p):n)}subtract(n){return Y(this,typeof n=="number"?m(n,p):n)}};K.type="vec2",K=pt=g([I],K);let H=lt=class extends y{constructor(n,t,e){super(),this.type="vec3",this.children=[n,t,e].filter(r=>r!=null)}get 0(){return $(this,"[0]",p)}get 1(){return $(this,"[1]",p)}get 2(){return $(this,"[2]",p)}get 3(){throw new Tt}clone(){const n=new lt(c(this.children[0]),c(this.children[1]),c(this.children[2]));return super.cloneInto(n),n}multiply(n){return N(this,typeof n=="number"?m(n,p):n)}divide(n){return Q(this,typeof n=="number"?m(n,p):n)}add(n){return A(this,typeof n=="number"?m(n,p):n)}subtract(n){return Y(this,typeof n=="number"?m(n,p):n)}};H.type="vec3",H=lt=g([I],H);let P=ft=class extends y{constructor(n,t,e,r){super(),this.type="vec4",this.children=[n,t,e,r].filter(i=>i!=null)}clone(){const n=new ft(c(this.children[0]),c(this.children[1]),c(this.children[2]),c(this.children[3]));return super.cloneInto(n),n}get 0(){return $(this,"[0]",p)}get 1(){return $(this,"[1]",p)}get 2(){return $(this,"[2]",p)}get 3(){return $(this,"[3]",p)}multiply(n){return N(this,typeof n=="number"?m(n,p):n)}divide(n){return Q(this,typeof n=="number"?m(n,p):n)}add(n){return A(this,typeof n=="number"?m(n,p):n)}subtract(n){return Y(this,typeof n=="number"?m(n,p):n)}};P.type="vec4",P=ft=g([I],P);let R=yt=class extends y{constructor(n){super(),this.type="uint",this.children=[n]}clone(){const n=new yt(c(this.children[0]));return super.cloneInto(n),n}};R.type="uint",R=yt=g([I],R);let W=mt=class extends y{constructor(n,t){super(),this.type="uvec2",this.children=[n,t].filter(e=>e!=null)}clone(){const n=new mt(c(this.children[0]),c(this.children[1]));return super.cloneInto(n),n}};W.type="uvec2",W=mt=g([I],W);let tt=gt=class extends y{constructor(n,t,e){super(),this.type="uvec3",this.children=[n,t,e].filter(r=>r!=null)}clone(){const n=new gt(c(this.children[0]),c(this.children[1]),c(this.children[2]));return super.cloneInto(n),n}};tt.type="uvec3",tt=gt=g([I],tt);let et=bt=class extends y{constructor(n,t,e,r){super(),this.type="uvec4",this.children=[n,t,e,r].filter(i=>i!=null)}clone(){const n=new bt(c(this.children[0]),c(this.children[1]),c(this.children[2]),c(this.children[3]));return super.cloneInto(n),n}};et.type="uvec4",et=bt=g([I],et);class x extends y{constructor(t){super(),this.type="bool",this.children=[t]}and(t){return xe(this,t)}or(t){return ve(this,t)}clone(){const t=new x(c(this.children[0]));return super.cloneInto(t),t}}x.type="bool";let nt=wt=class extends y{constructor(n,t){super(),this.type="bvec2",this.children=[n,t].filter(e=>e!=null)}all(){return Ft(this)}any(){return Et(this)}clone(){const n=new wt(c(this.children[0]),c(this.children[1]));return super.cloneInto(n),n}};nt.type="bvec2",nt=wt=g([I],nt);let rt=vt=class extends y{constructor(n,t,e){super(),this.type="bvec3",this.children=[n,t,e].filter(r=>r!=null)}all(){return Ft(this)}any(){return Et(this)}clone(){const n=new vt(c(this.children[0]),c(this.children[1]),c(this.children[2]));return super.cloneInto(n),n}};function m(n,t){return typeof n=="number"?new t(n):n}rt.type="bvec3",rt=vt=g([I],rt);let it=$t=class extends y{constructor(n,t,e,r){super(),this.type="bvec4",this.children=[n,t,e,r].filter(i=>i!=null)}all(){return Ft(this)}any(){return Et(this)}clone(){const n=new $t(c(this.children[0]),c(this.children[1]),c(this.children[2]),c(this.children[3]));return super.cloneInto(n),n}};it.type="bvec4",it=$t=g([I],it);class f extends y{constructor(t){super(),this.type="int",this.children=[t]}multiply(t){return N(this,m(t,f))}add(t){return A(this,m(t,f))}subtract(t){return Y(this,m(t,f))}divide(t){return Q(this,m(t,f))}clone(){const t=new f(c(this.children[0]));return super.cloneInto(t),t}}f.type="int";let st=xt=class extends y{constructor(n,t){super(),this.type="ivec2",this.children=[n,t].filter(e=>e!=null)}clone(){const n=new xt(c(this.children[0]),c(this.children[1]));return super.cloneInto(n),n}};st.type="ivec2",st=xt=g([I],st);let ot=_t=class extends y{constructor(n,t,e){super(),this.type="ivec3",this.children=[n,t,e].filter(r=>r!=null)}clone(){const n=new _t(c(this.children[0]),c(this.children[1]),c(this.children[2]));return super.cloneInto(n),n}};ot.type="ivec3",ot=_t=g([I],ot);let ct=It=class extends y{constructor(n,t,e,r){super(),this.type="ivec4",this.children=[n,t,e,r].filter(i=>i!=null)}clone(){const n=new It(c(this.children[0]),c(this.children[1]),c(this.children[2]),c(this.children[3]));return super.cloneInto(n),n}};ct.type="ivec4",ct=It=g([I],ct);class Pt extends y{constructor(t,e,r,i){super(),this.type="mat2",this.children=[t,e,r,i]}clone(){const t=new Pt(c(this.children[0]),c(this.children[1]),c(this.children[2]),c(this.children[3]));return super.cloneInto(t),t}get(t,e){return dt(this,new f(t),new f(e),p)}multiply(t){return N(this,t)}}Pt.type="mat2";class U extends y{static identity(){return new U(1,0,0,0,1,0,0,0,1)}static fromRotation(t){const e=Te(t),r=Ie(t);return new U(r,e,0,me(e),r,0,0,0,1)}constructor(t,e,r,i,s,o,d,u,a){super(),this.type="mat3",this.children=[t,e,r,i,s,o,d,u,a]}add(t){return A(this,t)}multiply(t){return N(this,t)}get(t,e){return dt(this,new f(t),new f(e),p)}clone(){const t=new U(c(this.children[0]),c(this.children[1]),c(this.children[2]),c(this.children[3]),c(this.children[4]),c(this.children[5]),c(this.children[6]),c(this.children[7]),c(this.children[8]));return super.cloneInto(t),t}}U.type="mat3";class q extends y{static identity(){return new q(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)}constructor(t,e,r,i,s,o,d,u,a,h,l,w,S,O,j,Z){super(),this.type="mat4",this.children=[t,e,r,i,s,o,d,u,a,h,l,w,S,O,j,Z]}static fromColumns(t,e,r,i){return new q(t.x,t.y,t.z,t.w,e.x,e.y,e.z,e.w,r.x,r.y,r.z,r.w,i.x,i.y,i.z,i.w)}multiply(t){return N(this,t)}get(t,e){return dt(this,new f(t),new f(e),p)}clone(){const t=new q(c(this.children[0]),c(this.children[1]),c(this.children[2]),c(this.children[3]),c(this.children[4]),c(this.children[5]),c(this.children[6]),c(this.children[7]),c(this.children[8]),c(this.children[9]),c(this.children[10]),c(this.children[11]),c(this.children[12]),c(this.children[13]),c(this.children[14]),c(this.children[15]));return super.cloneInto(t),t}}q.type="mat4";const fe={float:p,vec2:K,vec3:H,vec4:P,int:f,ivec2:st,ivec3:ot,ivec4:ct,uint:R,uvec2:W,uvec3:tt,uvec4:et,bool:x,bvec2:nt,bvec3:rt,bvec4:it},De=(...n)=>new f(...n),ye=(...n)=>new p(...n),ze=(...n)=>new K(...n),Le=(...n)=>new H(...n),Ge=(...n)=>new P(...n),He=(...n)=>new U(...n);function $(n,t,e){const r=new e(new ae(t,n,e));return r.isImplicit=!0,r}function dt(n,t,e,r){const i=new r(new Mt(t,e,n,r));return i.isImplicit=!0,i}function _(n,t,e,r=null){if(r){const s=new r,o=new r(new C(n,[t,e],!0,!1,s));return o.isImplicit=!0,o}if(t.type==="float"||t.type==="int"){const s=new e.constructor(new C(n,[t,e],!0,!1,e.constructor));return s.isImplicit=!0,s}if((t.type==="mat2"||t.type==="mat3"||t.type==="mat4")&&e.type!=="float"){const s=new e.constructor(new C(n,[t,e],!0,!1,e.constructor));return s.isImplicit=!0,s}const i=new t.constructor(new C(n,[t,e],!0,!1,t.constructor));return i.isImplicit=!0,i}function v(n,t,e=t.constructor){const r=new e(new C(n,[t],!1,!1,e));return r.isImplicit=!0,r}function T(n,t,e,r=t.constructor){const i=new r(new C(n,[t,e],!1,!1,r));return i.isImplicit=!0,i}function kt(n,t,e,r,i=t.constructor){const s=new i(new C(n,[t,e,r],!1,!1,i));return s.isImplicit=!0,s}function me(n){return N(n,ye(-1))}function qt(n,t,e,r){return new t(new ue(n,t,e,r))}function ge(n,t,e=0,r=n.size){const i=new f(e).setMutable().setDebugName("FindIndexIterator"),s=t(n.get(i)).setDebugName("FindIndexPredicate");return qt({iter:i},f,s,({out:d,iter:u,subgraph:a})=>`
${d} = -1;

for (; ${u} < ${r}; ${u}++) {

${a.body}

  if (${a.varName}) {
    ${d} = ${u};
    break;
  }

}
`).setDebugName("FindIndexBlock")}function be(n,t,e=0,r=n.size){return qt({array:n},f,null,({out:s,array:o})=>`
${s} = -1;
for (int i = ${e}; i < ${r}; i++) {
  bool condition;
  ${t({array:o,i:"i",out:"condition"})}
  if (condition) {
    ${s} = i;
    break;
  }
}
`).setDebugName("GlslFindIndexBlock")}function we(n,t,e){const r=typeof t=="function"?t():t,i=typeof e=="function"?e():e,s=new r.constructor(new St(n,r,i));return s.isImplicit=!0,s}function Re(...n){const t=n.map(([d,u])=>typeof u=="function"?[d,u()]:[d,u]),e=t[0][1].constructor,r=t.findIndex(d=>d[0]===!0);if(r===-1)throw new Error("A cond must have a fallthrough case with `true`/; ");const i=t.slice(0,r),s=t[r][1],o=new e(i.reduceRight((d,u)=>we(u[0],u[1],d),s));return o.isImplicit=!0,o}function N(n,t){return _("*",n,t)}function Q(n,t){return _("/",n,t)}function A(n,t){return _("+",n,t)}function Y(n,t){return _("-",n,t)}function qe(n,t){return _("%",n,t)}function Qe(n,t){return _(">>",n,t)}function Ye(n,t){return _("&",n,t)}function Ze(n,t){return _("==",n,t,x)}function Je(n,t){return _("<",n,t,x)}function Xe(n,t){return _("<=",n,t,x)}function We(n,t){return _(">",n,t,x)}function tn(n,t){return _(">=",n,t,x)}function ve(...n){return n.length<=1?n[0]:n.slice(1).reduce((t,e)=>$e(t,e),n[0])}function $e(n,t){return _("||",n,t,x)}function xe(...n){return n.length<=1?n[0]:n.slice(1).reduce((t,e)=>_e(t,e),n[0])}function _e(n,t){return _("&&",n,t,x)}function en(n){return v("abs",n)}function Ft(n){return v("all",n,x)}function Et(n){return v("any",n,x)}function nn(n,t){return t==null?v("atan",n):T("atan",n,t,n.constructor)}function rn(n){return v("ceil",n)}function sn(n,t,e){return kt("clamp",n,t,e,n.constructor)}function Ie(n){return v("cos",n)}function on(n,t){return T("distance",n,t,p)}function cn(n,t){return T("dot",n,t,p)}function an(n){return v("floor",n)}function un(n){return v("fract",n)}function dn(n){return v("length",n,p)}function hn(n,t){return T("max",n,t)}function pn(n,t){return T("min",n,t)}function ln(n,t,e){return kt("mix",n,t,e)}function fn(n,t){return T("mod",n,t)}function yn(n){return v("normalize",n)}function mn(n){return n.type==="bool"?v("!",n):v("not",n)}function gn(n,t){return T("pow",n,t)}function bn(n){return v("round",n)}function Te(n){return v("sin",n)}function wn(n,t,e){return kt("smoothstep",n,t,e)}function vn(n){return v("sqrt",n)}function $n(n,t){return T("step",n,t,t.constructor)}function xn(n,t){return T("texture",n,t,P)}const D=5;function b(n,t,e){const r=t.split(`
`);for(const i of r)if(i.trim().length){{let s="";e!=null&&(s+=`/*id:${e??"000"}*/   `),n.body+=s.padEnd(14)}n.body+=" ".repeat(n.indent)+i+`
`}}class Bt{write(t){for(const e of t.rootOutputNodes())t.shouldPruneOutputNode(e)||(e.variableName=this._write(t,e.node));return t}_createVarName(t,e){let r="";return typeof e!="boolean"&&typeof e!="number"&&e.debugInfo.name&&(r=`${e.debugInfo.name}_`),`${r}v${t.varCount++}`}_write(t,e,r=!1){if(typeof e=="number"||typeof e=="boolean")return e.toString();let i=t.getEmit(e);if(i)return i;switch(e.shaderType){case"scope-node":i=this._writeScopeNode(t,e);break;case"primitive-node":i=this._writePrimitiveNode(t,e,r);break;case"function-node":i=this._writeFunctionNode(t,e);break;case"property-access-node":i=this._writePropertyAccessNode(t,e);break;case"property-access-2d-node":i=this._writePropertyAccess2DNode(t,e);break;case"text-node":i=e.text;break;case"block-node":i=this._writeBlockNode(t,e);break;case"condition-node":i=this._writeConditionNode(t,e)}return t.setEmit(e,i),i}_writeScopeNode(t,e){const r=new e.child.constructor;r.setDebugName(e.debugInfo.name);const i=this._write(t,r,!0);return b(t,`{ /*ScopeStart: ${e.uid} ${e.debugInfo.name}*/`),t.indent+=2,b(t,`${i} = ${this._write(t,e.child)};`),t.indent-=2,b(t,`} /*ScopeEnd: ${e.uid} ${e.debugInfo.name}*/`),i}_writeConditionNode(t,e){const r=new e.ifTrue.constructor,i=this._write(t,r,!0);b(t,`if (${this._write(t,e.condition)}) {`),t.indent+=2;const s=t.createSubgraphContext(),o=this._write(s,e.ifTrue);if(t.body+=s.body,o&&b(t,`${i} = ${o};`),t.indent-=2,b(t,"}"),e.ifFalse){b(t,"else {"),t.indent+=2;const d=t.createSubgraphContext(),u=this._write(d,e.ifFalse);t.body+=d.body,u&&b(t,`${i} = ${u};`),t.indent-=2,b(t,"}")}return i}_writeBlockNode(t,e){const{captureList:r,generator:i,returnType:s}=e,o={};for(const h in r){if(!r[h])continue;const l=this._write(t,r[h]);o[h]=l}const d=new s,u=this._write(t,d,!0);if(o.out=u,e.subgraph){const h=t.createSubgraphContext(),l=this._write(h,e.subgraph.child),w=h.body;o.subgraph={varName:l,body:w}}const a=i(o);return b(t,`{
`),t.indent+=2,b(t,a),t.indent-=2,b(t,`}
`),u}_writePropertyAccessNode(t,e){const r=this._write(t,e.target);return typeof e.property=="string"&&e.property.includes("[")?`${r}${e.property}`:typeof e.property!="string"?`${r}[${this._write(t,e.property)}]`:`${r}.${e.property}`}_writePropertyAccess2DNode(t,e){return`${this._write(t,e.target)}[${this._write(t,e.x)}][${this._write(t,e.y)}]`}_writeFunctionNode(t,e){const r=e.returnType.type;if(e.isInfix){const[o,d]=e.children.map(a=>this._write(t,a)),u=this._createVarName(t,e);return b(t,`${r.padEnd(D)} ${u} = ${o} ${e.token} ${d};`,e.uid),u}const i=e.children.map(o=>this._write(t,o)).join(", "),s=this._createVarName(t,e);return b(t,`${r.padEnd(D)} ${s} = ${e.token}(${i});`,e.uid),s}_writePrimitiveNode(t,e,r=!1){const i=t.getInput(e);if(i)return i.isUsed=!0,i.variableName;const s=e.children.length===1&&e.children[0]?.type===e.type;if(!e.isMutable&&(e.isImplicit||s))return this._write(t,e.children[0]);const o=this._createVarName(t,e);if(r)return b(t,`${e.type.padEnd(D)} ${o};`,e.uid),o;const d=!e.debugInfo.name&&!e.isMutable;if(d&&e.type==="float"&&typeof e.children[0]=="number")return Number.isInteger(e.children[0])?e.children[0].toFixed(1):e.children[0].toString();if(d&&e.type==="int"&&typeof e.children[0]=="number"&&Number.isInteger(e.children[0]))return e.children[0].toString();const u=e.children.map(a=>this._write(t,a)).join(", ");return e.type==="array"?(b(t,`${e.type.padEnd(D)} ${o} = [${u}];`,e.uid),o):d?`${e.type}(${u})`:(b(t,`${e.type.padEnd(D)} ${o} = ${e.type}(${u});`,e.uid),o)}}let k=class Qt{constructor(t,e,r){this.variableName=t,this.variableInputType=e,this.node=r,this.type="shader-input",this.isUsed=!1}clone(){return new Qt(this.variableName,this.variableInputType,c(this.node))}},F=class Yt{constructor(t,e,r){this.outVariableName=t,this.outVariableType=e,this.node=r,this.type="shader-output"}clone(){const t=new Yt(this.outVariableName,this.outVariableType,c(this.node));return t.variableName=this.variableName,t}};class V{static createVertex(t,e,r,i,s,o){const d=[];for(const a in t){const h=t[a],l=r.get(a);l?d.push(new k(l,"builtin",h)):d.push(new k("a_"+a,"in",h))}for(const a of i){const h=a.uniformHydrated;d.push(new k(a.uniformName,"uniform",h))}const u=[];for(const a in e){const h=e[a];a==="glPosition"?u.push(new F("gl_Position","builtin",h)):a==="glPointSize"?u.push(new F("gl_PointSize","builtin",h)):u.push(new F("v_"+a,"out",h))}return new V(d,u,s,o)}static createFragment(t,e,r,i,s,o){const d=[],u=Array.from(s.rootOutputNodes());for(const h in t){const l=t[h],w=r.get(h);if(w){d.push(new k(w,"builtin",l));continue}const S=u.find(O=>O.node===l);S&&d.push(new k(S.outVariableName,"in",l))}for(const h of i){const l=h.uniformHydrated;d.push(new k(h.uniformName,"uniform",l))}const a=[];for(const h in e){const l=e[h],w=r.get(h);h==="discard"?a.push(new F(null,"discard",l)):w?a.push(new F(w,"builtin",l)):a.push(new F(h,"out",l))}return new V(d,a,o)}constructor(t,e,r,i){this.type="shader-graph-context",this.indent=0,this.body="",this.varCount=0,this._inputShaderTypesByNodeUid=new Map,this._nodeEmitMap=new Map;for(const s of t)this._inputShaderTypesByNodeUid.set(s.node.uid,s);this._outputShaderTypes=e,this._transformFeedbackBindings=r,this._transformFeedbackNames=new Set(r.map(s=>"v_"+s.propertyKey)),this._usedInFragmentShader=i}shouldPruneOutputNode(t){return!!this._usedInFragmentShader&&t.outVariableType!=="builtin"&&!this._transformFeedbackNames.has(t.outVariableName)&&!this._usedInFragmentShader.has(t.node.uid)}setEmit(t,e){this._nodeEmitMap.set(t.uid,e)}getEmit(t){return this._nodeEmitMap.get(t.uid)}inputs(){return this._inputShaderTypesByNodeUid.values()}getInput(t){return this._inputShaderTypesByNodeUid.get(t.uid)}*rootOutputNodes(){for(const t of this._outputShaderTypes)yield t}*nodes(){const t=[];for(const e of this._outputShaderTypes.values())t.push(e.node);for(;t.length;){const e=t.pop();typeof e!="number"&&typeof e!="boolean"&&t.push(...e.children.filter(Boolean)),yield e}}*nodesOfTypeOrFunction(){for(const t of this.nodes())typeof t!="number"&&typeof t!="boolean"&&(yield t)}createSubgraphContext(){const t=this.clone();return t.body="",t.indent=this.indent+2,t._nodeEmitMap=new Map(this._nodeEmitMap),t}clone(){const t=new V([],this._outputShaderTypes,this._transformFeedbackBindings,this._usedInFragmentShader);return t._inputShaderTypesByNodeUid=this._inputShaderTypesByNodeUid,t.indent=this.indent,t.body=this.body,t.varCount=this.varCount,t._nodeEmitMap=this._nodeEmitMap,t}insertVertexShader(t){t.vertex.code.add(""),this._insertInputs(t,"vertex"),t.vertex.code.add(""),t.vertex.code.add("// OUTPUTS: "),t.vertex.code.add("// --------------------------------------------------------- ");for(const e of this.rootOutputNodes()){const r=e.outVariableType==="builtin";this.shouldPruneOutputNode(e)||(r?t.vertex.code.add(`// ${e.outVariableType.padEnd(7)} ${e.node.type.padEnd(9)} ${e.outVariableName};`):t.vertex.code.add(`${e.outVariableType.padEnd(10)} ${e.node.type.padEnd(9)} ${e.outVariableName};`))}t.vertex.code.add(""),t.vertex.code.add("void main() {"),t.vertex.code.add("  "+this.body.split(`
`).join(`
  `));for(const e of this.rootOutputNodes())this.shouldPruneOutputNode(e)||t.vertex.code.add(`  ${e.outVariableName} = ${e.variableName};`);t.vertex.code.add("}")}insertFragmentShader(t){this._insertInputs(t,"fragment"),t.fragment.code.add(""),t.fragment.code.add("// OUTPUTS: "),t.fragment.code.add("// --------------------------------------------------------- ");let e=0;for(const r of this.rootOutputNodes())r.outVariableType==="builtin"?t.fragment.code.add(`// ${r.outVariableType.padEnd(7)} ${r.node.type.padEnd(9)} ${r.outVariableName};`):t.outputs.add(r.outVariableName,r.node.type,e++);t.fragment.code.add(""),t.fragment.code.add("void main() {"),t.fragment.code.add("  "+this.body.split(`
`).join(`
  `));for(const r of this.rootOutputNodes())r.outVariableType==="discard"?(t.fragment.code.add("  // TODO: Should ensure codegen for discard appears first in fragment shader"),t.fragment.code.add(`  if (${r.variableName}) {`),t.fragment.code.add("    discard;"),t.fragment.code.add("  }"),t.fragment.code.add("  ")):t.fragment.code.add(`  ${r.outVariableName} = ${r.variableName};`);t.fragment.code.add("}")}_insertInputs(t,e){t[e].code.add("// INPUTS: "),t[e].code.add("// --------------------------------------------------------- ");for(const r of this.inputs())r.isUsed&&r.variableInputType!=="builtin"&&(r.node.type==="array"?t[e].code.add(`${r.variableInputType.padEnd(10)} ${r.node.elementType.type.padEnd(9)} ${r.variableName}[${r.node.size}];`):r.node.type==="array-2d"?t[e].code.add(`${r.variableInputType.padEnd(10)} ${r.node.elementType.type.padEnd(9)} ${r.variableName}[${r.node.size}]; // Emulated 2D Array. Not supported by ES3.0`):t[e].code.add(`${r.variableInputType.padEnd(10)} ${r.node.type.padEnd(9)} ${r.variableName};`))}}function Ne(n,t,e){const r=new ee(t.width,t.height);return r.dataType=t.dataType,t.depth&&(r.depth=t.depth),t.flipped&&(r.flipped=t.flipped),t.hasMipmap&&(r.hasMipmap=t.hasMipmap),r.internalFormat=t.internalFormat,t.isImmutable&&(r.isImmutable=t.isImmutable),t.isOpaque&&(r.isOpaque=t.isOpaque),t.maxAnisotropy&&(r.maxAnisotropy=t.maxAnisotropy),r.pixelFormat=t.pixelFormat,t.preMultiplyAlpha&&(r.preMultiplyAlpha=t.preMultiplyAlpha),t.samplingMode&&(r.samplingMode=t.samplingMode),t.target&&(r.target=t.target),r.uniform=t.uniform,t.unpackAlignment&&(r.unpackAlignment=t.unpackAlignment),t.wrapMode&&(r.wrapMode=t.wrapMode),new ne(n,r,e)}const Me=()=>Dt.getLogger("esri.views.2d.engine.webgl.shaderGraph.typed.TypedShaderProgram");function z(n,t,e){const r=t.length;if(r!==e){const i=new Wt("Invalid Uniform",`Invalid length, expected ${e} but got ${r}`,{uniformName:n,values:t});Me().errorOnce(i)}}class Ot{constructor(t,e,r,i,s,o){this._program=null,this._vao=null,this._temporaryTextures=[],this.vertexShader=t,this.fragmentShader=e,this._locations=r,this._locationInfo=i,this._uniformBindings=s,this._transformFeedbackBindings=o}destroy(){this._program&&this._program.dispose(),this.cleanupTemporaryTextures()}get locations(){return this._locations}get locationInfo(){return this._locationInfo}setUniforms(t){this._uniforms=t}cleanupTemporaryTextures(){for(const t of this._temporaryTextures)t.dispose();this._temporaryTextures=[]}bind(t){const e=this._uniforms;if(!this._program){const i=new Map;for(const[o,d]of this._locations)i.set(o,d);const s=[];for(const o of this._transformFeedbackBindings??[]){const{index:d,propertyKey:u}=o;s[d]=`v_${u}`}this._program=new re(t,this.vertexShader,this.fragmentShader,i,new Map,s)}const r=this._program;t.useProgram(r);for(const i of this._uniformBindings){const{shaderModulePath:s,uniformName:o,uniformType:d,uniformArrayLength:u}=i,a=Xt(s,e);if(a==null){if(d==="sampler2D")continue;throw new Error(`Failed to find uniform value for ${s}`)}switch(d==="array"||d==="array-2d"?i.uniformArrayElementType:d){case"sampler2D":{const{unit:h,texture:l}=a;if(r.setUniform1i(o,h),"type"in l)t.bindTexture(l,h);else{const w=Ne(t,l.descriptor,l.data);t.bindTexture(w,h)}break}case"int":if(!u){r.setUniform1i(o,a);break}z(i.uniformName,a,u),r.setUniform1iv(o,a);break;case"float":if(!u){r.setUniform1f(o,a);break}z(i.uniformName,a,u),r.setUniform1fv(o,a);break;case"vec2":if(!u){r.setUniform2f(o,a[0],a[1]);break}z(i.uniformName,a,u),r.setUniform2fv(o,a.flat());break;case"vec3":if(!u){r.setUniform3f(o,a[0],a[1],a[2]);break}z(i.uniformName,a,u),r.setUniform3fv(o,a.flat());break;case"vec4":if(!u){r.setUniform4f(o,a[0],a[1],a[2],a[3]);break}z(i.uniformName,a,u),r.setUniform4fv(o,a.flat());break;case"mat3":r.setUniformMatrix3fv(o,a);break;case"mat4":r.setUniformMatrix4fv(o,a);break;default:throw new Error(`Unable to set uniform for type ${d}`)}}}}function L(n){return new n}function B(n,t,e){const r=n.constructor[t]??[];n.constructor.hasOwnProperty(t)||Object.defineProperty(n.constructor,t,{value:r.slice()}),n.constructor[t].push(e)}function _n(n,t){return(e,r)=>{B(e,"locations",{typeCtor:t,propertyKey:r,parameterIndex:null,index:n})}}const Se=n=>(t,e)=>{B(t,"builtins",{builtin:n,propertyKey:e})},In=n=>(t,e,r)=>{B(t,"inputs",{inputCtor:n,propertyKey:e,parameterIndex:r})},Tn=n=>(t,e)=>{B(t,"uniforms",{typeCtor:n,propertyKey:e})},Nn=n=>(t,e)=>{B(t,"options",{typeCtor:n,propertyKey:e})},Mn=(n,t)=>{B(n,"defines",{propertyKey:t})},Nt=(n,t)=>(e,r)=>{e.constructor.builtins.push({builtin:n,propertyKey:r,typeCtor:t})};class jt{}jt.builtins=[],g([Nt("gl_VertexID",f)],jt.prototype,"glVertexID",void 0);class Sn{}class at{}at.builtins=[],g([Nt("gl_FragCoord",P)],at.prototype,"glFragCoord",void 0),g([Nt("gl_PointCoord",K)],at.prototype,"glPointCoord",void 0);class Ce{}g([Se("gl_FragDepth")],Ce.prototype,"glFragDepth",void 0);class Cn{constructor(){this.type="uniform-group"}get _uniforms(){return this.constructor.uniforms??[]}}let Pn=class{constructor(){this.logShader=!1,this.computeAttributes={}}get vertexInput(){const t=this._shaderModuleClass.inputs.findLast(e=>e.propertyKey==="vertex"&&e.parameterIndex===0);if(!t)throw new Error("Unable to find vertex input parameter");return t}get computeInput(){return this._shaderModuleClass.inputs.findLast(t=>t.propertyKey==="vertex"&&t.parameterIndex===1)}get fragmentInput(){const t=this._shaderModuleClass.inputs.findLast(e=>e.propertyKey==="fragment");if(!t)throw new Error("Unable to find fragment input parameter");return t}get transformFeedbackBindings(){return this.fragmentInput.inputCtor.transformFeedbackBindings??[]}get locations(){return[...this.vertexInput.inputCtor.locations,...this.computeInput?.inputCtor.locations??[]]}get locationsMap(){const t=new Map,e=new Set;for(const r of this.locations)e.has(r.index)?Dt.getLogger("esri.views.2d.engine.webgl.shaderGraph.GraphShaderModule").warnOnce("mapview-rendering",`Unable to assigned attribute ${r.propertyKey} to ${r.index}. Index already in use`,{locationsMap:t}):(t.set(r.propertyKey,r.index),e.add(r.index));return t}get locationInfo(){if(!this._locationInfo){const t=this.locationsMap,e=Array.from(t.entries()).map(([s,o])=>`${s}.${o}`).join("."),r=te(e),i=this.computeAttributes;this._locationInfo={hash:r,stringHash:e,locations:t,computeAttributeMap:i}}return this._locationInfo}get renamedLocationsMap(){const t=new Map;for(const e of this.locations)t.set("a_"+e.propertyKey,e.index);return t}get optionPropertyKeys(){if(!this._optionPropertyKeys){const t=new Set;for(const e of this._options)t.add(e.propertyKey);this._optionPropertyKeys=t}return this._optionPropertyKeys}get _shaderModuleClass(){return this.constructor}get _defines(){return this._shaderModuleClass.defines??[]}get _options(){return this._shaderModuleClass.options??[]}get _uniforms(){return this._shaderModuleClass.uniforms??[]}getProgram(t,e,r,i){try{const{vertex:s,fragment:o,uniformBindings:d}=this._generateShaders(t,e,r,i);return new Ot(s,o,this.renamedLocationsMap,this.locationInfo,d,this.transformFeedbackBindings)}catch{return new Ot("","",this.renamedLocationsMap,this.locationInfo,[],this.transformFeedbackBindings)}}getDebugUniformClassInfo(t){const e=this._options.find(i=>i.propertyKey===t);if(e)return{type:"option",className:e.typeCtor};const r=this._uniforms.find(i=>i.propertyKey===t);if(!r)throw new Error(`Unable to find uniform class type for property: ${t}`);return{type:"required",className:r.typeCtor}}getShaderKey(t,e,r,i){const s=Object.keys(t).map(a=>`${a}.${t[a]}`).join("."),o=Object.keys(r).map(a=>`${a}.${r[a]}`).join("."),d=Object.keys(i).map(a=>`${a}.${i[a]}`).join("."),u=Object.keys(e).filter(a=>this.optionPropertyKeys.has(a)&&e[a]).join(".");return`${this.type}.${s}.${o}.${d}.${u}`}_generateShaders(t,e,r,i){const s=[];this._setDefines(r),this._setOptionalUniforms(s,e),this._setRequiredUniforms(s);const o=this._hydrateVertexInput(i),d=this._injectPackPrecisionFactor(o,t),u=this._hydrateComputeInput(),a=u&&this._injectComputePackPrecisionFactor(u,t),h=this.vertex(d,a),l=this._hydrateFragmentInput(h),w=this.fragment(l),S=new Set;for(const Zt in w){const Jt=w[Zt];oe(S,Jt)}const O=this._getVertexInputBuiltins(),j=V.createVertex({...o,...u},h,O,s,this.transformFeedbackBindings,S);new Bt().write(j);const Z=this._getFragmentInputBuiltins(w);Z.set("glPointCoord","gl_PointCoord");const Kt=V.createFragment(l,w,Z,s,j,this.transformFeedbackBindings);new Bt().write(Kt);const Ut=this._createShaderBuilder(j,Kt),Vt=Ut.generate("vertex"),At=Ut.generate("fragment");return this.logShader&&(console.log(Vt),console.log(At)),{vertex:Vt,fragment:At,uniformBindings:s}}_setDefines(t){for(const e in t)this[e]=t[e]}_setOptionalUniforms(t,e){for(const r of this._options)e[r.propertyKey]?this[r.propertyKey]=this._hydrateUniformGroup(t,r):this[r.propertyKey]=null}_setRequiredUniforms(t){for(const e of this._uniforms)this[e.propertyKey]=this._hydrateUniformGroup(t,e)}_hydrateUniformGroup(t,e){const r=new e.typeCtor;for(const i of r._uniforms??[]){const s=L(i.typeCtor),o=`u_${e.propertyKey}_${i.propertyKey}`,d=s.type,u=[e.propertyKey,i.propertyKey].join(".");if("type"in i.typeCtor&&i.typeCtor.type==="array"){const a=s;t.push({shaderModulePath:u,uniformName:o,uniformType:d,uniformArrayLength:a.size,uniformArrayElementType:a.elementType.type,uniformHydrated:s})}else if("type"in i.typeCtor&&i.typeCtor.type==="array-2d"){const a=s;t.push({shaderModulePath:u,uniformName:o,uniformType:d,uniformArrayLength:a.size,uniformArrayElementType:a.elementType.type,uniformHydrated:s})}else t.push({shaderModulePath:u,uniformName:o,uniformType:d,uniformHydrated:s});r[i.propertyKey]=s}return r}_hydrateVertexInput(t){const e=this.vertexInput.inputCtor,r=e.locations.reduce((i,s)=>t[s.propertyKey]===!1?i:{...i,[s.propertyKey]:L(s.typeCtor)},{});for(const{propertyKey:i,typeCtor:s}of e.builtins){const o=L(s);r[i]=o}return r}_hydrateComputeInput(){return this.computeInput==null?null:this.computeInput.inputCtor.locations.reduce((t,e)=>({...t,[e.propertyKey]:L(e.typeCtor)}),{})}_injectPackPrecisionFactor(t,e){const r={};for(const i in t){const s=t[i],o=e[i];if(o){if(s.type!=="float"&&s.type!=="vec2"&&s.type!=="vec3"&&s.type!=="vec4")throw new Error(`InternalError: packPrecisionFactor requires GenType, but found ${s.type}`);r[i]=s.divide(new p(o))}else r[i]=s}return r}_injectComputePackPrecisionFactor(t,e){const r={},i=new Map;for(const s in this.computeAttributes)for(const o of this.computeAttributes[s]??[])i.set(o,s);for(const s in t){const o=t[s],d=i.get(s);if(!d)continue;const u=e[d];if(u){if(o.type!=="float"&&o.type!=="vec2"&&o.type!=="vec3"&&o.type!=="vec4")throw new Error(`InternalError: packPrecisionFactor requires GenType, but found ${o.type}`);r[s]=o.divide(new p(u))}else r[s]=o}return r}_hydrateFragmentInput(t){const e={};for(const r in t)e[r]=t[r];for(const{propertyKey:r,typeCtor:i}of at.builtins){const s=L(i);e[r]=s}return e}_getVertexInputBuiltins(){const t=this.vertexInput.inputCtor,e=new Map;for(const{builtin:r,propertyKey:i}of t.builtins)e.set(i,r);return e}_getFragmentInputBuiltins(t){const e=t.constructor,r=new Map;for(const i of e.builtins??[])r.set(i.propertyKey,i.builtin);return r}_createShaderBuilder(t,e){const r=new ie;return this._insertDebugInfo(r),t.insertVertexShader(r),e.insertFragmentShader(r),r}_insertDebugInfo(t){t.vertex.code.add("// DEFINES: "),t.vertex.code.add("// --------------------------------------------------------- ");for(const e of this._defines)this[e.propertyKey]?t.vertex.code.add(`//   ${e.propertyKey}: true`):t.vertex.code.add(`//   ${e.propertyKey}: false`);t.vertex.code.add(""),t.vertex.code.add("// OPTIONS: "),t.vertex.code.add("// --------------------------------------------------------- ");for(const e of this._options)this[e.propertyKey]?t.vertex.code.add(`//   ${e.propertyKey}: true`):t.vertex.code.add(`//   ${e.propertyKey}: false`)}};export{tn as $,wn as A,ye as B,jt as C,N as D,un as E,fn as F,an as G,Le as H,Ge as I,ze as J,Mn as K,gn as L,dn as M,De as N,rn as O,Cn as P,Nn as Q,Sn as R,qe as S,Re as T,Ct as U,X as V,f as W,H as X,P as Y,bn as Z,p as _,K as a,ve as a0,q as a1,x as a2,me as a3,qt as a4,on as a5,xe as a6,mn as a7,yn as a8,Pt as a9,He as aa,Qe as ab,Ye as ac,Ot as ad,xn as b,ln as c,Ze as d,sn as e,en as f,Tn as g,_n as h,pn as i,Pn as j,Xe as k,We as l,In as m,Je as n,nn as o,cn as p,hn as q,U as r,$n as s,Ae as t,vn as u,at as v,Ce as w,Ie as x,Te as y,we as z};
