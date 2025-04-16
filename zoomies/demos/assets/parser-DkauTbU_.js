import{bf as Be,gy as De,s as b,gz as Le,gA as Ue,gB as Ge,gC as He}from"./main-vIJpOdvB.js";import{e as $t}from"./mat4f32-DcsiF_Rp.js";import{r as P,s as j}from"./mat4-DddAqSdm.js";const Ke=(r,n)=>{const a=P(r,n,0,0,0,0,n,0,0,0,0,n,0,0,0,0,1);return j(a,a)},Qe=(r,n)=>{const a=P(r,n,0,0,.5-.5*n,0,n,0,.5-.5*n,0,0,n,.5-.5*n,0,0,0,1);return j(a,a)},Ve=(r,n)=>{const a=1-n,e=P(r,.2126+.7874*a,.7152-.7152*a,.0722-.0722*a,0,.2126-.2126*a,.7152+.2848*a,.0722-.0722*a,0,.2126-.2126*a,.7152-.7152*a,.0722+.9278*a,0,0,0,0,1);return j(e,e)},We=(r,n)=>{const a=Math.sin(n*Math.PI/180),e=Math.cos(n*Math.PI/180),f=P(r,.213+.787*e-.213*a,.715-.715*e-.715*a,.072-.072*e+.928*a,0,.213-.213*e+.143*a,.715+.285*e+.14*a,.072-.072*e-.283*a,0,.213-.213*e-.787*a,.715-.715*e+.715*a,.072+.928*e+.072*a,0,0,0,0,1);return j(f,f)},Ze=(r,n)=>{const a=1-2*n,e=P(r,a,0,0,n,0,a,0,n,0,0,a,n,0,0,0,1);return j(e,e)},tr=(r,n)=>{const a=P(r,.213+.787*n,.715-.715*n,.072-.072*n,0,.213-.213*n,.715+.285*n,.072-.072*n,0,.213-.213*n,.715-.715*n,.072+.928*n,0,0,0,0,1);return j(a,a)},er=(r,n)=>{const a=1-n,e=P(r,.393+.607*a,.769-.769*a,.189-.189*a,0,.349-.349*a,.686+.314*a,.168-.168*a,0,.272-.272*a,.534-.534*a,.131+.869*a,0,0,0,0,1);return j(e,e)};class U{constructor(n,a,e){this.strength=n,this.radius=a,this.threshold=e,this.type="bloom"}interpolate(n,a,e){this.strength=M(n.strength,a.strength,e),this.radius=M(n.radius,a.radius,e),this.threshold=M(n.threshold,a.threshold,e)}clone(){return new U(this.strength,this.radius,this.threshold)}toJSON(){return{type:"bloom",radius:Y(this.radius),strength:this.strength,threshold:this.threshold}}}let Ft=class Ct{constructor(n){this.radius=n,this.type="blur"}interpolate(n,a,e){this.radius=Math.round(M(n.radius,a.radius,e))}clone(){return new Ct(this.radius)}toJSON(){return{type:"blur",radius:Y(this.radius)}}};class T{constructor(n,a){this.type=n,this.amount=a,this.type!=="invert"&&this.type!=="grayscale"&&this.type!=="sepia"||(this.amount=Math.min(this.amount,1))}get colorMatrix(){return this._colorMatrix||this._updateMatrix(),this._colorMatrix}interpolate(n,a,e){this.amount=M(n.amount,a.amount,e),this._updateMatrix()}clone(){return new T(this.type,this.amount)}toJSON(){return{type:this.type,amount:this.amount}}_updateMatrix(){const n=this._colorMatrix||$t();switch(this.type){case"brightness":this._colorMatrix=Ke(n,this.amount);break;case"contrast":this._colorMatrix=Qe(n,this.amount);break;case"grayscale":this._colorMatrix=Ve(n,this.amount);break;case"invert":this._colorMatrix=Ze(n,this.amount);break;case"saturate":this._colorMatrix=tr(n,this.amount);break;case"sepia":this._colorMatrix=er(n,this.amount)}}}let Et=class Ot{constructor(n,a,e,f){this.offsetX=n,this.offsetY=a,this.blurRadius=e,this.color=f,this.type="drop-shadow"}interpolate(n,a,e){this.offsetX=M(n.offsetX,a.offsetX,e),this.offsetY=M(n.offsetY,a.offsetY,e),this.blurRadius=M(n.blurRadius,a.blurRadius,e),this.color[0]=Math.round(M(n.color[0],a.color[0],e)),this.color[1]=Math.round(M(n.color[1],a.color[1],e)),this.color[2]=Math.round(M(n.color[2],a.color[2],e)),this.color[3]=M(n.color[3],a.color[3],e)}clone(){return new Ot(this.offsetX,this.offsetY,this.blurRadius,[...this.color])}toJSON(){const n=[...this.color];return n[3]*=255,{type:"drop-shadow",xoffset:Y(this.offsetX),yoffset:Y(this.offsetY),blurRadius:Y(this.blurRadius),color:n}}},_t=class Rt{constructor(n){this.angle=n,this.type="hue-rotate"}get colorMatrix(){return this._colorMatrix||this._updateMatrix(),this._colorMatrix}interpolate(n,a,e){this.angle=M(n.angle,a.angle,e),this._updateMatrix()}clone(){return new Rt(this.angle)}toJSON(){return{type:"hue-rotate",angle:this.angle}}_updateMatrix(){const n=this._colorMatrix||$t();this._colorMatrix=We(n,this.angle)}};class G{constructor(n){this.amount=n,this.type="opacity",this.amount=Math.min(this.amount,1)}interpolate(n,a,e){this.amount=M(n.amount,a.amount,e)}clone(){return new G(this.amount)}toJSON(){return{type:"opacity",amount:this.amount}}}function M(r,n,a){return r+(n-r)*a}function Y(r){return Math.round(1e3*Be(r))/1e3}function rr(r){switch(r.type){case"grayscale":case"sepia":case"invert":return new T(r.type,0);case"saturate":case"brightness":case"contrast":return new T(r.type,1);case"opacity":return new G(1);case"hue-rotate":return new _t(0);case"blur":return new Ft(0);case"drop-shadow":return new Et(0,0,0,[...De("transparent")]);case"bloom":return new U(0,0,1)}}function nr(r,n){const a=r.length>n.length?r:n;return(r.length>n.length?n:r).every((e,f)=>e.type===a[f].type)}function ur(r,n){const a=r.length>n.length?r:n,e=r.length>n.length?n:r;for(let f=e.length;f<a.length;f++)e.push(rr(a[f]))}function Er(r){const n=r[0];return!!n&&"type"in n}function ar(r,n){function a(){this.constructor=r}a.prototype=n.prototype,r.prototype=new a}function z(r,n,a,e){var f=Error.call(this,r);return Object.setPrototypeOf&&Object.setPrototypeOf(f,z.prototype),f.expected=n,f.found=a,f.location=e,f.name="SyntaxError",f}function V(r,n,a){return a=a||" ",r.length>n?r:(n-=r.length,r+(a+=a.repeat(n)).slice(0,n))}function or(r,n){var a,e={},f=(n=n!==void 0?n:{}).grammarSource,F={start:bt},k=bt,N="none",I=")",p=",",d="(",C="%",v="px",et="cm",rt="mm",nt="in",ut="pt",at="pc",ot="deg",st="rad",it="grad",ct="turn",kt="#",Nt=".",Pt="e",lt=/^[ \t\n\r]/,ft=/^[a-z\-]/,ht=/^[0-9a-fA-F]/,pt=/^[+\-]/,R=/^[0-9]/,jt=_("none"),It=w("none",!1),qt=w(")",!1),gt=w(",",!1),zt=_("whitespace"),mt=X([" ","	",`
`,"\r"],!1,!1),Jt=_("function"),Xt=w("(",!1),Yt=_("identifier"),dt=X([["a","z"],"-"],!1,!1),Tt=_("percentage"),Bt=w("%",!1),Dt=_("length"),Lt=w("px",!1),Ut=w("cm",!1),Gt=w("mm",!1),Ht=w("in",!1),Kt=w("pt",!1),Qt=w("pc",!1),Vt=_("angle"),Wt=w("deg",!1),Zt=w("rad",!1),te=w("grad",!1),ee=w("turn",!1),re=_("number"),ne=_("color"),ue=w("#",!1),yt=X([["0","9"],["a","f"],["A","F"]],!1,!1),vt=X(["+","-"],!1,!1),S=X([["0","9"]],!1,!1),ae=w(".",!1),oe=w("e",!1),se=function(){return[]},ie=function(t,o){return{type:"function",name:t,parameters:o||[]}},ce=function(t,o){return o.length>0?Te(t,o,3):[t]},le=function(t){return{type:"quantity",value:t.value,unit:t.unit}},fe=function(t){return{type:"color",colorType:t.type,value:t.value}},he=function(t){return t},pe=function(){return L()},ge=function(t){return{value:t,unit:"%"}},me=function(t){return{value:t,unit:"px"}},de=function(t){return{value:t,unit:"cm"}},ye=function(t){return{value:t,unit:"mm"}},ve=function(t){return{value:t,unit:"in"}},we=function(t){return{value:t,unit:"pt"}},xe=function(t){return{value:t,unit:"pc"}},be=function(t){return{value:t,unit:"deg"}},Ae=function(t){return{value:t,unit:"rad"}},Me=function(t){return{value:t,unit:"grad"}},$e=function(t){return{value:t,unit:"turn"}},Fe=function(t){return{value:t,unit:null}},Ce=function(){return{type:"hex",value:L()}},Ee=function(t){return{type:"function",value:t}},Oe=function(){return{type:"named",value:L()}},_e=function(){return parseFloat(L())},u=0|n.peg$currPos,g=u,q=[{line:1,column:1}],E=u,D=n.peg$maxFailExpected||[],i=0|n.peg$silentFails;if(n.startRule){if(!(n.startRule in F))throw new Error(`Can't start parsing from rule "`+n.startRule+'".');k=F[n.startRule]}function L(){return r.substring(g,u)}function w(t,o){return{type:"literal",text:t,ignoreCase:o}}function X(t,o,s){return{type:"class",parts:t,inverted:o,ignoreCase:s}}function Re(){return{type:"end"}}function _(t){return{type:"other",description:t}}function wt(t){var o,s=q[t];if(s)return s;if(t>=q.length)o=q.length-1;else for(o=t;!q[--o];);for(s={line:(s=q[o]).line,column:s.column};o<t;)r.charCodeAt(o)===10?(s.line++,s.column=1):s.column++,o++;return q[t]=s,s}function xt(t,o,s){var c=wt(t),h=wt(o);return{source:f,start:{offset:t,line:c.line,column:c.column},end:{offset:o,line:h.line,column:h.column}}}function l(t){u<E||(u>E&&(E=u,D=[]),D.push(t))}function Se(t,o,s){return new z(z.buildMessage(t,o),t,o,s)}function bt(){var t;return(t=ke())===e&&(t=Ne()),t}function ke(){var t,o;return i++,t=u,x(),r.substr(u,4)===N?(o=N,u+=4):(o=e,i===0&&l(It)),o!==e?(x(),g=t,t=se()):(u=t,t=e),i--,t===e&&i===0&&l(jt),t}function Ne(){var t,o;if(t=[],(o=K())!==e)for(;o!==e;)t.push(o),o=K();else t=e;return t}function K(){var t,o,s,c;return t=u,x(),(o=je())!==e?(x(),(s=Pe())===e&&(s=null),x(),r.charCodeAt(u)===41?(c=I,u++):(c=e,i===0&&l(qt)),c!==e?(x(),g=t,t=ie(o,s)):(u=t,t=e)):(u=t,t=e),t}function Pe(){var t,o,s,c,h,m,y,A;if(t=u,(o=Q())!==e){for(s=[],c=u,h=x(),r.charCodeAt(u)===44?(m=p,u++):(m=e,i===0&&l(gt)),m===e&&(m=null),y=x(),(A=Q())!==e?c=h=[h,m,y,A]:(u=c,c=e);c!==e;)s.push(c),c=u,h=x(),r.charCodeAt(u)===44?(m=p,u++):(m=e,i===0&&l(gt)),m===e&&(m=null),y=x(),(A=Q())!==e?c=h=[h,m,y,A]:(u=c,c=e);g=t,t=ce(o,s)}else u=t,t=e;return t}function Q(){var t,o;return t=u,(o=Ie())===e&&(o=qe())===e&&(o=ze())===e&&(o=Je()),o!==e&&(g=t,o=le(o)),(t=o)===e&&(t=u,(o=Xe())!==e&&(g=t,o=fe(o)),t=o),t}function x(){var t,o;for(i++,t=[],o=r.charAt(u),lt.test(o)?u++:(o=e,i===0&&l(mt));o!==e;)t.push(o),o=r.charAt(u),lt.test(o)?u++:(o=e,i===0&&l(mt));return i--,o=e,i===0&&l(zt),t}function je(){var t,o,s;return i++,t=u,(o=At())!==e?(r.charCodeAt(u)===40?(s=d,u++):(s=e,i===0&&l(Xt)),s!==e?(g=t,t=he(o)):(u=t,t=e)):(u=t,t=e),i--,t===e&&(o=e,i===0&&l(Jt)),t}function At(){var t,o,s;if(i++,t=u,o=[],s=r.charAt(u),ft.test(s)?u++:(s=e,i===0&&l(dt)),s!==e)for(;s!==e;)o.push(s),s=r.charAt(u),ft.test(s)?u++:(s=e,i===0&&l(dt));else o=e;return o!==e&&(g=t,o=pe()),i--,(t=o)===e&&(o=e,i===0&&l(Yt)),t}function Ie(){var t,o,s;return i++,t=u,x(),(o=$())!==e?(r.charCodeAt(u)===37?(s=C,u++):(s=e,i===0&&l(Bt)),s!==e?(g=t,t=ge(o)):(u=t,t=e)):(u=t,t=e),i--,t===e&&i===0&&l(Tt),t}function qe(){var t,o,s;return i++,t=u,x(),(o=$())!==e?(r.substr(u,2)===v?(s=v,u+=2):(s=e,i===0&&l(Lt)),s!==e?(g=t,t=me(o)):(u=t,t=e)):(u=t,t=e),t===e&&(t=u,x(),(o=$())!==e?(r.substr(u,2)===et?(s=et,u+=2):(s=e,i===0&&l(Ut)),s!==e?(g=t,t=de(o)):(u=t,t=e)):(u=t,t=e),t===e&&(t=u,x(),(o=$())!==e?(r.substr(u,2)===rt?(s=rt,u+=2):(s=e,i===0&&l(Gt)),s!==e?(g=t,t=ye(o)):(u=t,t=e)):(u=t,t=e),t===e&&(t=u,x(),(o=$())!==e?(r.substr(u,2)===nt?(s=nt,u+=2):(s=e,i===0&&l(Ht)),s!==e?(g=t,t=ve(o)):(u=t,t=e)):(u=t,t=e),t===e&&(t=u,x(),(o=$())!==e?(r.substr(u,2)===ut?(s=ut,u+=2):(s=e,i===0&&l(Kt)),s!==e?(g=t,t=we(o)):(u=t,t=e)):(u=t,t=e),t===e&&(t=u,x(),(o=$())!==e?(r.substr(u,2)===at?(s=at,u+=2):(s=e,i===0&&l(Qt)),s!==e?(g=t,t=xe(o)):(u=t,t=e)):(u=t,t=e)))))),i--,t===e&&i===0&&l(Dt),t}function ze(){var t,o,s;return i++,t=u,(o=$())!==e?(r.substr(u,3)===ot?(s=ot,u+=3):(s=e,i===0&&l(Wt)),s!==e?(g=t,t=be(o)):(u=t,t=e)):(u=t,t=e),t===e&&(t=u,(o=$())!==e?(r.substr(u,3)===st?(s=st,u+=3):(s=e,i===0&&l(Zt)),s!==e?(g=t,t=Ae(o)):(u=t,t=e)):(u=t,t=e),t===e&&(t=u,(o=$())!==e?(r.substr(u,4)===it?(s=it,u+=4):(s=e,i===0&&l(te)),s!==e?(g=t,t=Me(o)):(u=t,t=e)):(u=t,t=e),t===e&&(t=u,(o=$())!==e?(r.substr(u,4)===ct?(s=ct,u+=4):(s=e,i===0&&l(ee)),s!==e?(g=t,t=$e(o)):(u=t,t=e)):(u=t,t=e)))),i--,t===e&&(o=e,i===0&&l(Vt)),t}function Je(){var t,o;return i++,t=u,x(),(o=$())!==e?(g=t,t=Fe(o)):(u=t,t=e),i--,t===e&&i===0&&l(re),t}function Xe(){var t,o,s,c;if(i++,t=u,r.charCodeAt(u)===35?(o=kt,u++):(o=e,i===0&&l(ue)),o!==e){if(s=[],c=r.charAt(u),ht.test(c)?u++:(c=e,i===0&&l(yt)),c!==e)for(;c!==e;)s.push(c),c=r.charAt(u),ht.test(c)?u++:(c=e,i===0&&l(yt));else s=e;s!==e?(g=t,t=Ce()):(u=t,t=e)}else u=t,t=e;return t===e&&(t=u,(o=K())!==e&&(g=t,o=Ee(o)),(t=o)===e&&(t=u,(o=At())!==e&&(g=t,o=Oe()),t=o)),i--,t===e&&(o=e,i===0&&l(ne)),t}function $(){var t,o,s,c,h,m,y,A;for(t=u,o=r.charAt(u),pt.test(o)?u++:(o=e,i===0&&l(vt)),o===e&&(o=null),s=u,c=[],h=r.charAt(u),R.test(h)?u++:(h=e,i===0&&l(S));h!==e;)c.push(h),h=r.charAt(u),R.test(h)?u++:(h=e,i===0&&l(S));if(r.charCodeAt(u)===46?(h=Nt,u++):(h=e,i===0&&l(ae)),h!==e){if(m=[],y=r.charAt(u),R.test(y)?u++:(y=e,i===0&&l(S)),y!==e)for(;y!==e;)m.push(y),y=r.charAt(u),R.test(y)?u++:(y=e,i===0&&l(S));else m=e;m!==e?s=c=[c,h,m]:(u=s,s=e)}else u=s,s=e;if(s===e)if(s=[],c=r.charAt(u),R.test(c)?u++:(c=e,i===0&&l(S)),c!==e)for(;c!==e;)s.push(c),c=r.charAt(u),R.test(c)?u++:(c=e,i===0&&l(S));else s=e;if(s!==e){if(c=u,r.charCodeAt(u)===101?(h=Pt,u++):(h=e,i===0&&l(oe)),h!==e){if(m=r.charAt(u),pt.test(m)?u++:(m=e,i===0&&l(vt)),m===e&&(m=null),y=[],A=r.charAt(u),R.test(A)?u++:(A=e,i===0&&l(S)),A!==e)for(;A!==e;)y.push(A),A=r.charAt(u),R.test(A)?u++:(A=e,i===0&&l(S));else y=e;y!==e?c=h=[h,m,y]:(u=c,c=e)}else u=c,c=e;c===e&&(c=null),g=t,t=_e()}else u=t,t=e;return t}function Ye(t,o){return t.map(function(s){return s[o]})}function Te(t,o,s){return[t].concat(Ye(o,s))}if(a=k(),n.peg$library)return{peg$result:a,peg$currPos:u,peg$FAILED:e,peg$maxFailExpected:D,peg$maxFailPos:E};if(a!==e&&u===r.length)return a;throw a!==e&&u<r.length&&l(Re()),Se(D,E<r.length?r.charAt(E):null,E<r.length?xt(E,E+1):xt(E,E))}function Or(r){if(!r||r.length===0)return null;if(typeof r=="string"){const a=Mt(r);return a&&a.length!==0?a:null}const n=r.map(a=>{if(!Number.isFinite(a.scale)||a.scale<=0)throw new b("effect:invalid-scale","scale must be finite and greater than 0",{stop:a});return{scale:a.scale,effects:Mt(a.value)}});n.sort((a,e)=>e.effects.length-a.effects.length);for(let a=0;a<n.length-1;a++){if(!nr(n[a].effects,n[a+1].effects))throw new b("effect:interpolation-impossible","Cannot interpolate by scale between 2 lists of mixed effects",{a:n[a].effects,b:n[a+1].effects});ur(n[a].effects,n[a+1].effects)}return n.sort((a,e)=>e.scale-a.scale),n}function Mt(r){let n;if(!r)return[];try{n=or(r)}catch(a){throw new b("effect:invalid-syntax","Invalid effect syntax",{value:r,error:a})}return n.map(a=>sr(a))}function sr(r){try{switch(r.name){case"grayscale":case"sepia":case"saturate":case"invert":case"brightness":case"contrast":return ir(r);case"opacity":return cr(r);case"hue-rotate":return lr(r);case"blur":return fr(r);case"drop-shadow":return hr(r);case"bloom":return pr(r)}}catch(n){throw n.details.filter=r,n}throw new b("effect:unknown-effect",`Effect '${r.name}' is not supported`,{effect:r})}function ir(r){let n=1;return J(r.parameters,1),r.parameters.length===1&&(n=O(r.parameters[0])),new T(r.name,n)}function cr(r){let n=1;return J(r.parameters,1),r.parameters.length===1&&(n=O(r.parameters[0])),new G(n)}function lr(r){let n=0;return J(r.parameters,1),r.parameters.length===1&&(n=wr(r.parameters[0])),new _t(n)}function fr(r){let n=0;return J(r.parameters,1),r.parameters.length===1&&(n=tt(r.parameters[0]),B(n,r.parameters[0])),new Ft(n)}function hr(r){const n=[];let a=null;for(const e of r.parameters)if(e.type==="color"){if(n.length&&Object.freeze(n),a)throw new b("effect:type-error","Accepts only one color",{});a=xr(e)}else{const f=tt(e);if(Object.isFrozen(n))throw new b("effect:type-error","<length> parameters not consecutive",{lengths:n});n.push(f),n.length===3&&B(f,e)}if(n.length<2||n.length>3)throw new b("effect:type-error",`Expected <length>{2,3}, Actual: <length>{${n.length}}`,{lengths:n});return new Et(n[0],n[1],n[2]||0,a||St("black"))}function pr(r){let n=1,a=0,e=0;return J(r.parameters,3),r.parameters[0]&&(n=O(r.parameters[0])),r.parameters[1]&&(a=tt(r.parameters[1]),B(a,r.parameters[1])),r.parameters[2]&&(e=O(r.parameters[2])),new U(n,a,e)}function J(r,n){if(r.length>n)throw new b("effect:type-error",`Function supports up to ${n} parameters, Actual: ${r.length}`,{parameters:r})}function H(r){if(r.type==="color")return"<color>";if(r.unit){if(r.unit in Z)return"<length>";if(r.unit in W)return"<angle>";if(r.unit==="%")return"<percentage>"}return"<double>"}function B(r,n){if(r<0)throw new b("effect:type-error",`Negative values are not allowed, Actual: ${r}`,{term:n})}function gr(r){if(r.type!=="quantity"||r.unit!==null)throw new b("effect:type-error",`Expected <double>, Actual: ${H(r)}`,{term:r})}function mr(r){if(r.type!=="quantity"||r.unit!==null&&r.unit!=="%")throw new b("effect:type-error",`Expected <double> or <percentage>, Actual: ${H(r)}`,{term:r})}ar(z,Error),z.prototype.format=function(r){var n="Error: "+this.message;if(this.location){var a,e=null;for(a=0;a<r.length;a++)if(r[a].source===this.location.source){e=r[a].text.split(/\r\n|\n|\r/g);break}var f=this.location.start,F=this.location.source&&typeof this.location.source.offset=="function"?this.location.source.offset(f):f,k=this.location.source+":"+F.line+":"+F.column;if(e){var N=this.location.end,I=V("",F.line.toString().length," "),p=e[f.line-1],d=(f.line===N.line?N.column:p.length+1)-f.column||1;n+=`
 --> `+k+`
`+I+` |
`+F.line+" | "+p+`
`+I+" | "+V("",f.column-1," ")+V("",d,"^")}else n+=`
 at `+k}return n},z.buildMessage=function(r,n){var a={literal:function(p){return'"'+f(p.text)+'"'},class:function(p){var d=p.parts.map(function(C){return Array.isArray(C)?F(C[0])+"-"+F(C[1]):F(C)});return"["+(p.inverted?"^":"")+d.join("")+"]"},any:function(){return"any character"},end:function(){return"end of input"},other:function(p){return p.description}};function e(p){return p.charCodeAt(0).toString(16).toUpperCase()}function f(p){return p.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(d){return"\\x0"+e(d)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(d){return"\\x"+e(d)})}function F(p){return p.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(d){return"\\x0"+e(d)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(d){return"\\x"+e(d)})}function k(p){return a[p.type](p)}function N(p){var d,C,v=p.map(k);if(v.sort(),v.length>0){for(d=1,C=1;d<v.length;d++)v[d-1]!==v[d]&&(v[C]=v[d],C++);v.length=C}switch(v.length){case 1:return v[0];case 2:return v[0]+" or "+v[1];default:return v.slice(0,-1).join(", ")+", or "+v[v.length-1]}}function I(p){return p?'"'+f(p)+'"':"end of input"}return"Expected "+N(r)+" but "+I(n)+" found."};const W={deg:1,grad:.9,rad:180/Math.PI,turn:360};function dr(r){if(r.type!=="quantity"||!(r.value===0&&r.unit===null||r.unit&&W[r.unit]!=null))throw new b("effect:type-error",`Expected <angle>, Actual: ${H(r)}`,{term:r})}const Z={px:1,cm:96/2.54,mm:96/2.54/10,in:96,pc:16,pt:96/72};function yr(r){if(r.type!=="quantity"||!(r.value===0&&r.unit===null||r.unit&&Z[r.unit]!=null))throw new b("effect:type-error",`Expected <length>, Actual: ${H(r)}`,{term:r})}function O(r){mr(r);const n=r.value;return B(n,r),r.unit==="%"?.01*n:n}function vr(r){return gr(r),B(r.value,r),r.value}function wr(r){return dr(r),r.value*W[r.unit]||0}function tt(r){return yr(r),r.value*Z[r.unit]||0}function xr(r){switch(r.colorType){case"hex":return Le(r.value);case"named":return St(r.value);case"function":return Mr(r.value)}}function St(r){if(!Ue(r))throw new b("effect:unknown-color",`color '${r}' isn't valid`,{namedColor:r});return Ge(r)}const br=/^rgba?/i,Ar=/^hsla?/i;function Mr(r){if(J(r.parameters,4),br.test(r.name))return[O(r.parameters[0]),O(r.parameters[1]),O(r.parameters[2]),r.parameters[3]?O(r.parameters[3]):1];if(Ar.test(r.name))return He(vr(r.parameters[0]),O(r.parameters[1]),O(r.parameters[2]),r.parameters[3]?O(r.parameters[3]):1);throw new b("effect:syntax-error",`Invalid color function '${r.name}'`,{colorFunction:r})}export{Or as d,ur as e,Er as l,nr as t};
