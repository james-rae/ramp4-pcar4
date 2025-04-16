import{d5 as L}from"./main-DeRV24Di.js";var D,x={},G={},B={};function O(){if(D)return B;D=1,Object.defineProperty(B,"__esModule",{value:!0}),B.loop=B.conditional=B.parse=void 0;var g=function a(d,o){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},c=arguments.length>3&&arguments[3]!==void 0?arguments[3]:s;if(Array.isArray(o))o.forEach(function(h){return a(d,h,s,c)});else if(typeof o=="function")o(d,s,c,a);else{var f=Object.keys(o)[0];Array.isArray(o[f])?(c[f]={},a(d,o[f],s,c[f])):c[f]=o[f](d,s,c,a)}return s};B.parse=g;var u=function(a,d){return function(o,s,c,f){d(o,s,c)&&f(o,a,s,c)}};B.conditional=u;var t=function(a,d){return function(o,s,c,f){for(var h=[],e=o.pos;d(o,s,c);){var r={};if(f(o,a,s,r),o.pos===e)break;e=o.pos,h.push(r)}return h}};return B.loop=t,B}var T,P,v={};function R(){if(T)return v;T=1,Object.defineProperty(v,"__esModule",{value:!0}),v.readBits=v.readArray=v.readUnsigned=v.readString=v.peekBytes=v.readBytes=v.peekByte=v.readByte=v.buildStream=void 0;var g=function(e){return{data:e,pos:0}};v.buildStream=g;var u=function(){return function(e){return e.data[e.pos++]}};v.readByte=u;var t=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return function(r){return r.data[r.pos+e]}};v.peekByte=t;var a=function(e){return function(r){return r.data.subarray(r.pos,r.pos+=e)}};v.readBytes=a;var d=function(e){return function(r){return r.data.subarray(r.pos,r.pos+e)}};v.peekBytes=d;var o=function(e){return function(r){return Array.from(a(e)(r)).map(function(n){return String.fromCharCode(n)}).join("")}};v.readString=o;var s=function(e){return function(r){var n=a(2)(r);return e?(n[1]<<8)+n[0]:(n[0]<<8)+n[1]}};v.readUnsigned=s;var c=function(e,r){return function(n,i,l){for(var m=typeof r=="function"?r(n,i,l):r,p=a(e),y=new Array(m),w=0;w<m;w++)y[w]=p(n);return y}};v.readArray=c;var f=function(e,r,n){for(var i=0,l=0;l<n;l++)i+=e[r+l]&&Math.pow(2,n-l-1);return i},h=function(e){return function(r){for(var n=u()(r),i=new Array(8),l=0;l<8;l++)i[7-l]=!!(n&1<<l);return Object.keys(e).reduce(function(m,p){var y=e[p];return y.length?m[p]=f(i,y.index,y.length):m[p]=i[y.index],m},{})}};return v.readBits=h,v}function N(){return P||(P=1,function(g){Object.defineProperty(g,"__esModule",{value:!0}),g.default=void 0;var u=O(),t=R(),a={blocks:function(e){for(var r=0,n=[],i=e.data.length,l=0,m=(0,t.readByte)()(e);m!==r&&m;m=(0,t.readByte)()(e)){if(e.pos+m>=i){var p=i-e.pos;n.push((0,t.readBytes)(p)(e)),l+=p;break}n.push((0,t.readBytes)(m)(e)),l+=m}for(var y=new Uint8Array(l),w=0,b=0;b<n.length;b++)y.set(n[b],w),w+=n[b].length;return y}},d=(0,u.conditional)({gce:[{codes:(0,t.readBytes)(2)},{byteSize:(0,t.readByte)()},{extras:(0,t.readBits)({future:{index:0,length:3},disposal:{index:3,length:3},userInput:{index:6},transparentColorGiven:{index:7}})},{delay:(0,t.readUnsigned)(!0)},{transparentColorIndex:(0,t.readByte)()},{terminator:(0,t.readByte)()}]},function(e){var r=(0,t.peekBytes)(2)(e);return r[0]===33&&r[1]===249}),o=(0,u.conditional)({image:[{code:(0,t.readByte)()},{descriptor:[{left:(0,t.readUnsigned)(!0)},{top:(0,t.readUnsigned)(!0)},{width:(0,t.readUnsigned)(!0)},{height:(0,t.readUnsigned)(!0)},{lct:(0,t.readBits)({exists:{index:0},interlaced:{index:1},sort:{index:2},future:{index:3,length:2},size:{index:5,length:3}})}]},(0,u.conditional)({lct:(0,t.readArray)(3,function(e,r,n){return Math.pow(2,n.descriptor.lct.size+1)})},function(e,r,n){return n.descriptor.lct.exists}),{data:[{minCodeSize:(0,t.readByte)()},a]}]},function(e){return(0,t.peekByte)()(e)===44}),s=(0,u.conditional)({text:[{codes:(0,t.readBytes)(2)},{blockSize:(0,t.readByte)()},{preData:function(e,r,n){return(0,t.readBytes)(n.text.blockSize)(e)}},a]},function(e){var r=(0,t.peekBytes)(2)(e);return r[0]===33&&r[1]===1}),c=(0,u.conditional)({application:[{codes:(0,t.readBytes)(2)},{blockSize:(0,t.readByte)()},{id:function(e,r,n){return(0,t.readString)(n.blockSize)(e)}},a]},function(e){var r=(0,t.peekBytes)(2)(e);return r[0]===33&&r[1]===255}),f=(0,u.conditional)({comment:[{codes:(0,t.readBytes)(2)},a]},function(e){var r=(0,t.peekBytes)(2)(e);return r[0]===33&&r[1]===254}),h=[{header:[{signature:(0,t.readString)(3)},{version:(0,t.readString)(3)}]},{lsd:[{width:(0,t.readUnsigned)(!0)},{height:(0,t.readUnsigned)(!0)},{gct:(0,t.readBits)({exists:{index:0},resolution:{index:1,length:3},sort:{index:4},size:{index:5,length:3}})},{backgroundColorIndex:(0,t.readByte)()},{pixelAspectRatio:(0,t.readByte)()}]},(0,u.conditional)({gct:(0,t.readArray)(3,function(e,r){return Math.pow(2,r.lsd.gct.size+1)})},function(e,r){return r.lsd.gct.exists}),{frames:(0,u.loop)([d,c,f,o,s],function(e){var r=(0,t.peekByte)()(e);return r===33||r===44})}];g.default=h}(G)),G}var E,I={};function Q(){if(E)return I;E=1,Object.defineProperty(I,"__esModule",{value:!0}),I.deinterlace=void 0;var g=function(u,t){for(var a=new Array(u.length),d=u.length/t,o=function(r,n){var i=u.slice(n*t,(n+1)*t);a.splice.apply(a,[r*t,t].concat(i))},s=[0,4,2,1],c=[8,8,4,2],f=0,h=0;h<4;h++)for(var e=s[h];e<d;e+=c[h])o(e,f),f++;return a};return I.deinterlace=g,I}var q,V,S={};function W(){if(q)return S;q=1,Object.defineProperty(S,"__esModule",{value:!0}),S.lzw=void 0;var g=function(u,t,a){var d,o,s,c,f,h,e,r,n,i,l,m,p,y,w,b,k=4096,C=-1,j=a,F=new Array(a),M=new Array(k),A=new Array(k),U=new Array(k+1);for(f=(o=1<<(i=u))+1,d=o+2,e=C,s=(1<<(c=i+1))-1,r=0;r<o;r++)M[r]=0,A[r]=r;for(l=m=p=y=w=b=0,n=0;n<j;){if(y===0){if(m<c){l+=t[b]<<m,m+=8,b++;continue}if(r=l&s,l>>=c,m-=c,r>d||r==f)break;if(r==o){s=(1<<(c=i+1))-1,d=o+2,e=C;continue}if(e==C){U[y++]=A[r],e=r,p=r;continue}for(h=r,r==d&&(U[y++]=p,r=e);r>o;)U[y++]=A[r],r=M[r];p=255&A[r],U[y++]=p,d<k&&(M[d]=e,A[d]=p,!(++d&s)&&d<k&&(c++,s+=d)),e=h}y--,F[w++]=U[y],n++}for(n=w;n<j;n++)F[n]=0;return F};return S.lzw=g,S}function X(){if(V)return x;V=1,Object.defineProperty(x,"__esModule",{value:!0}),x.decompressFrames=x.decompressFrame=x.parseGIF=void 0;var g=o(N()),u=O(),t=R(),a=Q(),d=W();function o(e){return e&&e.__esModule?e:{default:e}}var s=function(e){var r=new Uint8Array(e);return(0,u.parse)((0,t.buildStream)(r),g.default)};x.parseGIF=s;var c=function(e){for(var r=e.pixels.length,n=new Uint8ClampedArray(4*r),i=0;i<r;i++){var l=4*i,m=e.pixels[i],p=e.colorTable[m]||[0,0,0];n[l]=p[0],n[l+1]=p[1],n[l+2]=p[2],n[l+3]=m!==e.transparentIndex?255:0}return n},f=function(e,r,n){if(e.image){var i=e.image,l=i.descriptor.width*i.descriptor.height,m=(0,d.lzw)(i.data.minCodeSize,i.data.blocks,l);i.descriptor.lct.interlaced&&(m=(0,a.deinterlace)(m,i.descriptor.width));var p={pixels:m,dims:{top:e.image.descriptor.top,left:e.image.descriptor.left,width:e.image.descriptor.width,height:e.image.descriptor.height}};return i.descriptor.lct&&i.descriptor.lct.exists?p.colorTable=i.lct:p.colorTable=r,e.gce&&(p.delay=10*(e.gce.delay||10),p.disposalType=e.gce.extras.disposal,e.gce.extras.transparentColorGiven&&(p.transparentIndex=e.gce.transparentColorIndex)),n&&(p.patch=c(p)),p}console.warn("gif frame does not have associated image.")};x.decompressFrame=f;var h=function(e,r){return e.frames.filter(function(n){return n.image}).map(function(n){return f(n,e.gct,r)})};return x.decompressFrames=h,x}var H=X();let _,z,J;function Y(g,u){return _??=document.createElement("canvas"),_.width=g,_.height=u,_.getContext("2d",{willReadFrequently:!0})}async function Z(g,u){const t=H.parseGIF(g),a=H.decompressFrames(t,!0),{width:d,height:o}=t.lsd,s=Y(d,o),c=[],f=[];let h=0;for(const e of a){const r=L(e.delay||100);f.push(r),h+=r;const n=$(new ImageData(e.patch,e.dims.width,e.dims.height)),i=e.disposalType===3?s.getImageData(e.dims.left,e.dims.top,e.dims.width,e.dims.height):void 0;s.drawImage(n,e.dims.left,e.dims.top);const l=s.getImageData(0,0,d,o);c.push(l),e.disposalType===1||(e.disposalType===2?s.clearRect(e.dims.left,e.dims.top,e.dims.width,e.dims.height):e.disposalType===3&&s.putImageData(i,e.dims.left,e.dims.top))}return{frameCount:a.length,duration:h,frameDurations:f,getFrame:e=>c[e],width:d,height:o}}function $(g){return z??=document.createElement("canvas"),J??=z.getContext("2d",{willReadFrequently:!0}),z.width=g.width,z.height=g.height,J.putImageData(g,0,0),z}const ee=[71,73,70];function K(g){const u=new Uint8Array(g);return!ee.some((t,a)=>t!==u[a])}function re(g){if(!K(g))return!1;const u=new DataView(g),t=u.getUint8(10);let a=13+(128&t?3*2**(1+(7&t)):0),d=0,o=!1;for(;!o;){switch(u.getUint8(a++)){case 33:if(!s())return!1;break;case 44:c();break;case 59:o=!0;break;default:return!1}if(d>1)return!0}function s(){switch(u.getUint8(a++)){case 249:f();break;case 1:h();break;case 254:e();break;case 255:r();break;default:return!1}return!0}function c(){d++,a+=8;const i=u.getUint8(a++);a+=128&i?3*2**(1+(7&i)):0,a++,n()}function f(){a++,a+=4,n()}function h(){d++,a++,a+=12,n()}function e(){n()}function r(){a++,a+=8,a+=3,n()}function n(){let i;for(;i=u.getUint8(a++);)a+=i}return!1}export{re as isAnimatedGIF,K as isGIF,Z as parseGif};
