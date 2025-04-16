import { aS as o$1 } from './main-CGBWc59Z.js';
import './preload-helper-dJJaZANz.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
var r,e,t,i={exports:{}};r=i,e="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,t=function(n={}){var r,t,i=void 0!==n?n:{};i.ready=new Promise(((n,e)=>{r=n,t=e;}));var o=Object.assign({},i),a="object"==typeof window,u="function"==typeof importScripts;"object"==typeof process&&"object"==typeof process.versions&&process.versions.node;var c,f="";function s(n){return i.locateFile?i.locateFile(n,f):f+n}(a||u)&&(u?f=self.location.href:"undefined"!=typeof document&&document.currentScript&&(f=document.currentScript.src),e&&(f=e),f=0!==f.indexOf("blob:")?f.substr(0,f.replace(/[?#].*/,"").lastIndexOf("/")+1):"",u&&(c=n=>{var r=new XMLHttpRequest;return r.open("GET",n,!1),r.responseType="arraybuffer",r.send(null),new Uint8Array(r.response)}));var l,d,p=i.print||console.log.bind(console),v=i.printErr||console.warn.bind(console);Object.assign(i,o),o=null,i.arguments&&i.arguments,i.thisProgram&&i.thisProgram,i.quit&&i.quit,i.wasmBinary&&(l=i.wasmBinary),i.noExitRuntime,"object"!=typeof WebAssembly&&D("no native wasm support detected");var h,m,g,y,_,w,b,A,T,C=!1;function P(){var n=d.buffer;i.HEAP8=h=new Int8Array(n),i.HEAP16=g=new Int16Array(n),i.HEAP32=_=new Int32Array(n),i.HEAPU8=m=new Uint8Array(n),i.HEAPU16=y=new Uint16Array(n),i.HEAPU32=w=new Uint32Array(n),i.HEAPF32=b=new Float32Array(n),i.HEAPF64=A=new Float64Array(n);}var E=[],W=[],k=[];function j(){if(i.preRun)for("function"==typeof i.preRun&&(i.preRun=[i.preRun]);i.preRun.length;)S(i.preRun.shift());Z(E);}function F(){Z(W);}function R(){if(i.postRun)for("function"==typeof i.postRun&&(i.postRun=[i.postRun]);i.postRun.length;)U(i.postRun.shift());Z(k);}function S(n){E.unshift(n);}function x(n){W.unshift(n);}function U(n){k.unshift(n);}var I=0,O=null;function H(n){I++,i.monitorRunDependencies&&i.monitorRunDependencies(I);}function z(n){if(I--,i.monitorRunDependencies&&i.monitorRunDependencies(I),0==I&&O){var r=O;O=null,r();}}function D(n){i.onAbort&&i.onAbort(n),v(n="Aborted("+n+")"),C=!0,n+=". Build with -sASSERTIONS for more info.";var r=new WebAssembly.RuntimeError(n);throw t(r),r}var V,M="data:application/octet-stream;base64,";function B(n){return n.startsWith(M)}function q(n){try{if(n==V&&l)return new Uint8Array(l);if(c)return c(n);throw "both async and sync fetching of the wasm failed"}catch(v){D(v);}}function N(n){return l||!a&&!u||"function"!=typeof fetch?Promise.resolve().then((()=>q(n))):fetch(n,{credentials:"same-origin"}).then((r=>{if(!r.ok)throw "failed to load wasm binary file at '"+n+"'";return r.arrayBuffer()})).catch((()=>q(n)))}function L(n,r,e){return N(n).then((n=>WebAssembly.instantiate(n,r))).then((n=>n)).then(e,(n=>{v("failed to asynchronously prepare wasm: "+n),D(n);}))}function G(n,r,e,t){return n||"function"!=typeof WebAssembly.instantiateStreaming||B(r)||"function"!=typeof fetch?L(r,e,t):fetch(r,{credentials:"same-origin"}).then((n=>WebAssembly.instantiateStreaming(n,e).then(t,(function(n){return v("wasm streaming compile failed: "+n),v("falling back to ArrayBuffer instantiation"),L(r,e,t)}))))}function X(){var n={env:Fr,wasi_snapshot_preview1:Fr};function r(n,r){var e=n.exports;return i.asm=e,d=i.asm.memory,P(),T=i.asm.__indirect_function_table,x(i.asm.__wasm_call_ctors),z(),e}function e(n){r(n.instance);}if(H(),i.instantiateWasm)try{return i.instantiateWasm(n,r)}catch(o){v("Module.instantiateWasm callback failed with error: "+o),t(o);}return G(l,V,n,e).catch(t),{}}function Z(n){for(;n.length>0;)n.shift()(i);}B(V="i3s.wasm")||(V=s(V));var $=[];function J(n){var r=$[n];return r||(n>=$.length&&($.length=n+1),$[n]=r=T.get(n)),r}function K(n,r){J(n)(r);}function Q(n){this.excPtr=n,this.ptr=n-24,this.set_type=function(n){w[this.ptr+4>>2]=n;},this.get_type=function(){return w[this.ptr+4>>2]},this.set_destructor=function(n){w[this.ptr+8>>2]=n;},this.get_destructor=function(){return w[this.ptr+8>>2]},this.set_caught=function(n){n=n?1:0,h[this.ptr+12|0]=n;},this.get_caught=function(){return 0!=h[this.ptr+12|0]},this.set_rethrown=function(n){n=n?1:0,h[this.ptr+13|0]=n;},this.get_rethrown=function(){return 0!=h[this.ptr+13|0]},this.init=function(n,r){this.set_adjusted_ptr(0),this.set_type(n),this.set_destructor(r);},this.set_adjusted_ptr=function(n){w[this.ptr+16>>2]=n;},this.get_adjusted_ptr=function(){return w[this.ptr+16>>2]},this.get_exception_ptr=function(){if(Ir(this.get_type()))return w[this.excPtr>>2];var n=this.get_adjusted_ptr();return 0!==n?n:this.excPtr};}function Y(n,r,e){throw new Q(n).init(r,e),n}var nn={};function rn(n){for(;n.length;){var r=n.pop();n.pop()(r);}}function en(n){return this.fromWireType(_[n>>2])}var tn={},on={},an={},un=48,cn=57;function fn(n){if(void 0===n)return "_unknown";var r=(n=n.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return r>=un&&r<=cn?"_"+n:n}function sn(n,r){return n=fn(n),{[n]:function(){return r.apply(this,arguments)}}[n]}function ln(n,r){var e=sn(r,(function(n){this.name=r,this.message=n;var e=new Error(n).stack;void 0!==e&&(this.stack=this.toString()+"\n"+e.replace(/^Error(:[^\n]*)?\n/,""));}));return e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},e}var dn=void 0;function pn(n){throw new dn(n)}function vn(n,r,e){function t(r){var t=e(r);t.length!==n.length&&pn("Mismatched type converter count");for(var i=0;i<n.length;++i)Tn(n[i],t[i]);}n.forEach((function(n){an[n]=r;}));var i=new Array(r.length),o=[],a=0;r.forEach(((n,r)=>{on.hasOwnProperty(n)?i[r]=on[n]:(o.push(n),tn.hasOwnProperty(n)||(tn[n]=[]),tn[n].push((()=>{i[r]=on[n],++a===o.length&&t(i);})));})),0===o.length&&t(i);}function hn(n){var r=nn[n];delete nn[n];var e=r.rawConstructor,t=r.rawDestructor,i=r.fields;vn([n],i.map((n=>n.getterReturnType)).concat(i.map((n=>n.setterArgumentType))),(n=>{var o={};return i.forEach(((r,e)=>{var t=r.fieldName,a=n[e],u=r.getter,c=r.getterContext,f=n[e+i.length],s=r.setter,l=r.setterContext;o[t]={read:n=>a.fromWireType(u(c,n)),write:(n,r)=>{var e=[];s(l,n,f.toWireType(e,r)),rn(e);}};})),[{name:r.name,fromWireType:function(n){var r={};for(var e in o)r[e]=o[e].read(n);return t(n),r},toWireType:function(n,r){for(var i in o)if(!(i in r))throw new TypeError('Missing field:  "'+i+'"');var a=e();for(i in o)o[i].write(a,r[i]);return null!==n&&n.push(t,a),a},argPackAdvance:8,readValueFromPointer:en,destructorFunction:t}]}));}function mn(n,r,e,t,i){}function gn(n){switch(n){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+n)}}function yn(){for(var n=new Array(256),r=0;r<256;++r)n[r]=String.fromCharCode(r);_n=n;}var _n=void 0;function wn(n){for(var r="",e=n;m[e];)r+=_n[m[e++]];return r}var bn=void 0;function An(n){throw new bn(n)}function Tn(n,r,e={}){if(!("argPackAdvance"in r))throw new TypeError("registerType registeredInstance requires argPackAdvance");var t=r.name;if(n||An('type "'+t+'" must have a positive integer typeid pointer'),on.hasOwnProperty(n)){if(e.ignoreDuplicateRegistrations)return;An("Cannot register type '"+t+"' twice");}if(on[n]=r,delete an[n],tn.hasOwnProperty(n)){var i=tn[n];delete tn[n],i.forEach((n=>n()));}}function Cn(n,r,e,t,i){var o=gn(e);Tn(n,{name:r=wn(r),fromWireType:function(n){return !!n},toWireType:function(n,r){return r?t:i},argPackAdvance:8,readValueFromPointer:function(n){var t;if(1===e)t=h;else if(2===e)t=g;else {if(4!==e)throw new TypeError("Unknown boolean type size: "+r);t=_;}return this.fromWireType(t[n>>o])},destructorFunction:null});}function Pn(){this.allocated=[void 0],this.freelist=[],this.get=function(n){return this.allocated[n]},this.allocate=function(n){let r=this.freelist.pop()||this.allocated.length;return this.allocated[r]=n,r},this.free=function(n){this.allocated[n]=void 0,this.freelist.push(n);};}var En=new Pn;function Wn(n){n>=En.reserved&&0==--En.get(n).refcount&&En.free(n);}function kn(){for(var n=0,r=En.reserved;r<En.allocated.length;++r)void 0!==En.allocated[r]&&++n;return n}function jn(){En.allocated.push({value:void 0},{value:null},{value:!0},{value:!1}),En.reserved=En.allocated.length,i.count_emval_handles=kn;}var Fn={toValue:n=>(n||An("Cannot use deleted val. handle = "+n),En.get(n).value),toHandle:n=>{switch(n){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:return En.allocate({refcount:1,value:n})}}};function Rn(n,r){Tn(n,{name:r=wn(r),fromWireType:function(n){var r=Fn.toValue(n);return Wn(n),r},toWireType:function(n,r){return Fn.toHandle(r)},argPackAdvance:8,readValueFromPointer:en,destructorFunction:null});}function Sn(n,r){switch(r){case 2:return function(n){return this.fromWireType(b[n>>2])};case 3:return function(n){return this.fromWireType(A[n>>3])};default:throw new TypeError("Unknown float type: "+n)}}function xn(n,r,e){var t=gn(e);Tn(n,{name:r=wn(r),fromWireType:function(n){return n},toWireType:function(n,r){return r},argPackAdvance:8,readValueFromPointer:Sn(r,t),destructorFunction:null});}function Un(n,r,e,t,i,o){var a=r.length;a<2&&An("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var u=null!==r[1]&&null!==e,c=!1,f=1;f<r.length;++f)if(null!==r[f]&&void 0===r[f].destructorFunction){c=!0;break}var s="void"!==r[0].name,l=a-2,d=new Array(l),p=[],v=[];return function(){var e;arguments.length!==l&&An("function "+n+" called with "+arguments.length+" arguments, expected "+l+" args!"),v.length=0,p.length=u?2:1,p[0]=i,u&&(e=r[1].toWireType(v,this),p[1]=e);for(var o=0;o<l;++o)d[o]=r[o+2].toWireType(v,arguments[o]),p.push(d[o]);function a(n){if(c)rn(v);else for(var t=u?1:2;t<r.length;t++){var i=1===t?e:d[t-2];null!==r[t].destructorFunction&&r[t].destructorFunction(i);}if(s)return r[0].fromWireType(n)}return a(t.apply(null,p))}}function In(n,r,e){if(void 0===n[r].overloadTable){var t=n[r];n[r]=function(){return n[r].overloadTable.hasOwnProperty(arguments.length)||An("Function '"+e+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+n[r].overloadTable+")!"),n[r].overloadTable[arguments.length].apply(this,arguments)},n[r].overloadTable=[],n[r].overloadTable[t.argCount]=t;}}function On(n,r,e){i.hasOwnProperty(n)?((void 0===e||void 0!==i[n].overloadTable&&void 0!==i[n].overloadTable[e])&&An("Cannot register public name '"+n+"' twice"),In(i,n,n),i.hasOwnProperty(e)&&An("Cannot register multiple overloads of a function with the same number of arguments ("+e+")!"),i[n].overloadTable[e]=r):(i[n]=r,void 0!==e&&(i[n].numArguments=e));}function Hn(n,r){for(var e=[],t=0;t<n;t++)e.push(w[r+4*t>>2]);return e}function zn(n,r,e){i.hasOwnProperty(n)||pn("Replacing nonexistant public symbol"),void 0!==i[n].overloadTable&&void 0!==e?i[n].overloadTable[e]=r:(i[n]=r,i[n].argCount=e);}function Dn(n,r,e){var t=i["dynCall_"+n];return e&&e.length?t.apply(null,[r].concat(e)):t.call(null,r)}function Vn(n,r,e){return n.includes("j")?Dn(n,r,e):J(r).apply(null,e)}function Mn(n,r){var e=[];return function(){return e.length=0,Object.assign(e,arguments),Vn(n,r,e)}}function Bn(n,r){function e(){return n.includes("j")?Mn(n,r):J(r)}n=wn(n);var t=e();return "function"!=typeof t&&An("unknown function pointer with signature "+n+": "+r),t}var qn=void 0;function Nn(n){var r=xr(n),e=wn(r);return Sr(r),e}function Ln(n,r){var e=[],t={};function i(n){t[n]||on[n]||(an[n]?an[n].forEach(i):(e.push(n),t[n]=!0));}throw r.forEach(i),new qn(n+": "+e.map(Nn).join([", "]))}function Gn(n,r,e,t,i,o,a){var u=Hn(r,e);n=wn(n),i=Bn(t,i),On(n,(function(){Ln("Cannot call "+n+" due to unbound types",u);}),r-1),vn([],u,(function(e){var t=[e[0],null].concat(e.slice(1));return zn(n,Un(n,t,null,i,o),r-1),[]}));}function Xn(n,r,e){switch(r){case 0:return e?function(n){return h[n]}:function(n){return m[n]};case 1:return e?function(n){return g[n>>1]}:function(n){return y[n>>1]};case 2:return e?function(n){return _[n>>2]}:function(n){return w[n>>2]};default:throw new TypeError("Unknown integer type: "+n)}}function Zn(n,r,e,t,i){r=wn(r);var o=gn(e),a=n=>n;if(0===t){var u=32-8*e;a=n=>n<<u>>>u;}var c=r.includes("unsigned"),f=(n,r)=>{};Tn(n,{name:r,fromWireType:a,toWireType:c?function(n,r){return f(r,this.name),r>>>0}:function(n,r){return f(r,this.name),r},argPackAdvance:8,readValueFromPointer:Xn(r,o,0!==t),destructorFunction:null});}function $n(n,r,e){var t=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][r];function i(n){var r=w,e=r[n>>=2],i=r[n+1];return new t(r.buffer,i,e)}Tn(n,{name:e=wn(e),fromWireType:i,argPackAdvance:8,readValueFromPointer:i},{ignoreDuplicateRegistrations:!0});}function Jn(n,r,e,t){if(!(t>0))return 0;for(var i=e,o=e+t-1,a=0;a<n.length;++a){var u=n.charCodeAt(a);if(u>=55296&&u<=57343&&(u=65536+((1023&u)<<10)|1023&n.charCodeAt(++a)),u<=127){if(e>=o)break;r[e++]=u;}else if(u<=2047){if(e+1>=o)break;r[e++]=192|u>>6,r[e++]=128|63&u;}else if(u<=65535){if(e+2>=o)break;r[e++]=224|u>>12,r[e++]=128|u>>6&63,r[e++]=128|63&u;}else {if(e+3>=o)break;r[e++]=240|u>>18,r[e++]=128|u>>12&63,r[e++]=128|u>>6&63,r[e++]=128|63&u;}}return r[e]=0,e-i}function Kn(n,r,e){return Jn(n,m,r,e)}function Qn(n){for(var r=0,e=0;e<n.length;++e){var t=n.charCodeAt(e);t<=127?r++:t<=2047?r+=2:t>=55296&&t<=57343?(r+=4,++e):r+=3;}return r}var Yn="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function nr(n,r,e){for(var t=r+e,i=r;n[i]&&!(i>=t);)++i;if(i-r>16&&n.buffer&&Yn)return Yn.decode(n.subarray(r,i));for(var o="";r<i;){var a=n[r++];if(128&a){var u=63&n[r++];if(192!=(224&a)){var c=63&n[r++];if((a=224==(240&a)?(15&a)<<12|u<<6|c:(7&a)<<18|u<<12|c<<6|63&n[r++])<65536)o+=String.fromCharCode(a);else {var f=a-65536;o+=String.fromCharCode(55296|f>>10,56320|1023&f);}}else o+=String.fromCharCode((31&a)<<6|u);}else o+=String.fromCharCode(a);}return o}function rr(n,r){return n?nr(m,n,r):""}function er(n,r){var e="std::string"===(r=wn(r));Tn(n,{name:r,fromWireType:function(n){var r,t=w[n>>2],i=n+4;if(e)for(var o=i,a=0;a<=t;++a){var u=i+a;if(a==t||0==m[u]){var c=rr(o,u-o);void 0===r?r=c:(r+=String.fromCharCode(0),r+=c),o=u+1;}}else {var f=new Array(t);for(a=0;a<t;++a)f[a]=String.fromCharCode(m[i+a]);r=f.join("");}return Sr(n),r},toWireType:function(n,r){var t;r instanceof ArrayBuffer&&(r=new Uint8Array(r));var i="string"==typeof r;i||r instanceof Uint8Array||r instanceof Uint8ClampedArray||r instanceof Int8Array||An("Cannot pass non-string to std::string"),t=e&&i?Qn(r):r.length;var o=Rr(4+t+1),a=o+4;if(w[o>>2]=t,e&&i)Kn(r,a,t+1);else if(i)for(var u=0;u<t;++u){var c=r.charCodeAt(u);c>255&&(Sr(a),An("String has UTF-16 code units that do not fit in 8 bits")),m[a+u]=c;}else for(u=0;u<t;++u)m[a+u]=r[u];return null!==n&&n.push(Sr,o),o},argPackAdvance:8,readValueFromPointer:en,destructorFunction:function(n){Sr(n);}});}var tr="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function ir(n,r){for(var e=n,t=e>>1,i=t+r/2;!(t>=i)&&y[t];)++t;if((e=t<<1)-n>32&&tr)return tr.decode(m.subarray(n,e));for(var o="",a=0;!(a>=r/2);++a){var u=g[n+2*a>>1];if(0==u)break;o+=String.fromCharCode(u);}return o}function or(n,r,e){if(void 0===e&&(e=2147483647),e<2)return 0;for(var t=r,i=(e-=2)<2*n.length?e/2:n.length,o=0;o<i;++o){var a=n.charCodeAt(o);g[r>>1]=a,r+=2;}return g[r>>1]=0,r-t}function ar(n){return 2*n.length}function ur(n,r){for(var e=0,t="";!(e>=r/4);){var i=_[n+4*e>>2];if(0==i)break;if(++e,i>=65536){var o=i-65536;t+=String.fromCharCode(55296|o>>10,56320|1023&o);}else t+=String.fromCharCode(i);}return t}function cr(n,r,e){if(void 0===e&&(e=2147483647),e<4)return 0;for(var t=r,i=t+e-4,o=0;o<n.length;++o){var a=n.charCodeAt(o);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&n.charCodeAt(++o)),_[r>>2]=a,(r+=4)+4>i)break}return _[r>>2]=0,r-t}function fr(n){for(var r=0,e=0;e<n.length;++e){var t=n.charCodeAt(e);t>=55296&&t<=57343&&++e,r+=4;}return r}function sr(n,r,e){var t,i,o,a,u;e=wn(e),2===r?(t=ir,i=or,a=ar,o=()=>y,u=1):4===r&&(t=ur,i=cr,a=fr,o=()=>w,u=2),Tn(n,{name:e,fromWireType:function(n){for(var e,i=w[n>>2],a=o(),c=n+4,f=0;f<=i;++f){var s=n+4+f*r;if(f==i||0==a[s>>u]){var l=t(c,s-c);void 0===e?e=l:(e+=String.fromCharCode(0),e+=l),c=s+r;}}return Sr(n),e},toWireType:function(n,t){"string"!=typeof t&&An("Cannot pass non-string to C++ string type "+e);var o=a(t),c=Rr(4+o+r);return w[c>>2]=o>>u,i(t,c+4,o+r),null!==n&&n.push(Sr,c),c},argPackAdvance:8,readValueFromPointer:en,destructorFunction:function(n){Sr(n);}});}function lr(n,r,e,t,i,o){nn[n]={name:wn(r),rawConstructor:Bn(e,t),rawDestructor:Bn(i,o),fields:[]};}function dr(n,r,e,t,i,o,a,u,c,f){nn[n].fields.push({fieldName:wn(r),getterReturnType:e,getter:Bn(t,i),getterContext:o,setterArgumentType:a,setter:Bn(u,c),setterContext:f});}function pr(n,r){Tn(n,{isVoid:!0,name:r=wn(r),argPackAdvance:0,fromWireType:function(){},toWireType:function(n,r){}});}function vr(n){n>4&&(En.get(n).refcount+=1);}var hr={};function mr(n){var r=hr[n];return void 0===r?wn(n):r}function gr(n){return Fn.toHandle(mr(n))}function yr(n,r){var e=on[n];return void 0===e&&An(r+" has unknown type "+Nn(n)),e}function _r(n,r){var e=(n=yr(n,"_emval_take_value")).readValueFromPointer(r);return Fn.toHandle(e)}function wr(){D("");}function br(n,r,e){m.copyWithin(n,r,r+e);}function Ar(){return 2147483648}function Tr(n){var r=d.buffer;try{return d.grow(n-r.byteLength+65535>>>16),P(),1}catch(e){}}function Cr(n){var r=m.length;n>>>=0;var e=Ar();if(n>e)return !1;let t=(n,r)=>n+(r-n%r)%r;for(var i=1;i<=4;i*=2){var o=r*(1+.2/i);if(o=Math.min(o,n+100663296),Tr(Math.min(e,t(Math.max(n,o),65536))))return !0}return !1}function Pr(n){return 52}function Er(n,r,e,t,i){return 70}var Wr=[null,[],[]];function kr(n,r){var e=Wr[n];0===r||10===r?((1===n?p:v)(nr(e,0)),e.length=0):e.push(r);}function jr(n,r,e,t){for(var i=0,o=0;o<e;o++){var a=w[r>>2],u=w[r+4>>2];r+=8;for(var c=0;c<u;c++)kr(n,m[a+c]);i+=u;}return w[t>>2]=i,0}dn=i.InternalError=ln(Error,"InternalError"),yn(),bn=i.BindingError=ln(Error,"BindingError"),jn(),qn=i.UnboundTypeError=ln(Error,"UnboundTypeError");var Fr={__call_sighandler:K,__cxa_throw:Y,_embind_finalize_value_object:hn,_embind_register_bigint:mn,_embind_register_bool:Cn,_embind_register_emval:Rn,_embind_register_float:xn,_embind_register_function:Gn,_embind_register_integer:Zn,_embind_register_memory_view:$n,_embind_register_std_string:er,_embind_register_std_wstring:sr,_embind_register_value_object:lr,_embind_register_value_object_field:dr,_embind_register_void:pr,_emval_decref:Wn,_emval_incref:vr,_emval_new_cstring:gr,_emval_take_value:_r,abort:wr,emscripten_memcpy_big:br,emscripten_resize_heap:Cr,fd_close:Pr,fd_seek:Er,fd_write:jr};X();var Rr=function(){return (Rr=i.asm.malloc).apply(null,arguments)},Sr=function(){return (Sr=i.asm.free).apply(null,arguments)},xr=function(){return (xr=i.asm.__getTypeName).apply(null,arguments)};i.__embind_initialize_bindings=function(){return (i.__embind_initialize_bindings=i.asm._embind_initialize_bindings).apply(null,arguments)};var Ur,Ir=function(){return (Ir=i.asm.__cxa_is_pointer_type).apply(null,arguments)};function Or(){function n(){Ur||(Ur=!0,i.calledRun=!0,C||(F(),r(i),i.onRuntimeInitialized&&i.onRuntimeInitialized(),R()));}I>0||(j(),I>0||(i.setStatus?(i.setStatus("Running..."),setTimeout((function(){setTimeout((function(){i.setStatus("");}),1),n();}),1)):n()));}if(i.dynCall_vij=function(){return (i.dynCall_vij=i.asm.dynCall_vij).apply(null,arguments)},i.dynCall_jiji=function(){return (i.dynCall_jiji=i.asm.dynCall_jiji).apply(null,arguments)},O=function n(){Ur||Or(),Ur||(O=n);},i.preInit)for("function"==typeof i.preInit&&(i.preInit=[i.preInit]);i.preInit.length>0;)i.preInit.pop()();return Or(),n.ready},r.exports=t;const o=o$1(i.exports),a=Object.freeze(Object.defineProperty({__proto__:null,default:o},Symbol.toStringTag,{value:"Module"}));

export { a as i };
