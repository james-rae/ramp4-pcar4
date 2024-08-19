import{K as f,N as y,O as v,an as Y,f_ as g,dC as S,cY as R,bA as $,M as j}from"./main.efb50b2c.js";let x=class extends Y{get affectsPixelSize(){return!1}forwardTransform(e){return e}inverseTransform(e){return e}};f([y()],x.prototype,"affectsPixelSize",null),f([y({json:{write:!0}})],x.prototype,"spatialReference",void 0),x=f([v("esri.layers.support.rasterTransforms.BaseRasterTransform")],x);const T=x;let d=class extends T{constructor(){super(...arguments),this.type="gcs-shift",this.tolerance=1e-8}forwardTransform(e){return(e=e.clone()).type==="point"?(e.x>180+this.tolerance&&(e.x-=360),e):(e.xmin>=180-this.tolerance?(e.xmax-=360,e.xmin-=360):e.xmax>180+this.tolerance&&(e.xmin=-180,e.xmax=180),e)}inverseTransform(e){return(e=e.clone()).type==="point"?(e.x<-this.tolerance&&(e.x+=360),e):(e.xmin<-this.tolerance&&(e.xmin+=360,e.xmax+=360),e)}};f([g({GCSShiftXform:"gcs-shift"})],d.prototype,"type",void 0),f([y()],d.prototype,"tolerance",void 0),d=f([v("esri.layers.support.rasterTransforms.GCSShiftTransform")],d);const M=d;let C=class extends T{constructor(){super(...arguments),this.type="identity"}};f([g({IdentityXform:"identity"})],C.prototype,"type",void 0),C=f([v("esri.layers.support.rasterTransforms.IdentityTransform")],C);const z=C;function w(e,s,o){const{x:t,y:n}=s;if(o<2)return{x:e[0]+t*e[2]+n*e[4],y:e[1]+t*e[3]+n*e[5]};if(o===2){const p=t*t,X=n*n,O=t*n;return{x:e[0]+t*e[2]+n*e[4]+p*e[6]+O*e[8]+X*e[10],y:e[1]+t*e[3]+n*e[5]+p*e[7]+O*e[9]+X*e[11]}}const r=t*t,l=n*n,u=t*n,i=r*t,m=r*n,h=t*l,a=n*l;return{x:e[0]+t*e[2]+n*e[4]+r*e[6]+u*e[8]+l*e[10]+i*e[12]+m*e[14]+h*e[16]+a*e[18],y:e[1]+t*e[3]+n*e[5]+r*e[7]+u*e[9]+l*e[11]+i*e[13]+m*e[15]+h*e[17]+a*e[19]}}function I(e,s,o){const{xmin:t,ymin:n,xmax:r,ymax:l,spatialReference:u}=s;let i=[];if(o<2)i.push({x:t,y:l}),i.push({x:r,y:l}),i.push({x:t,y:n}),i.push({x:r,y:n});else{let a=10;for(let p=0;p<a;p++)i.push({x:t,y:n+(l-n)*p/(a-1)}),i.push({x:r,y:n+(l-n)*p/(a-1)});a=8;for(let p=1;p<=a;p++)i.push({x:t+(r-t)*p/a,y:n}),i.push({x:t+(r-t)*p/a,y:l})}i=i.map(a=>w(e,a,o));const m=i.map(a=>a.x),h=i.map(a=>a.y);return new j({xmin:Math.min.apply(null,m),xmax:Math.max.apply(null,m),ymin:Math.min.apply(null,h),ymax:Math.max.apply(null,h),spatialReference:u})}function F(e){const[s,o,t,n,r,l]=e,u=t*l-r*n,i=r*n-t*l;return[(r*o-s*l)/u,(t*o-s*n)/i,l/u,n/i,-r/u,-t/i]}let c=class extends T{constructor(){super(...arguments),this.polynomialOrder=1,this.type="polynomial"}readForwardCoefficients(e,s){const{coeffX:o,coeffY:t}=s;if(!o?.length||!t?.length||o.length!==t.length)return null;const n=[];for(let r=0;r<o.length;r++)n.push(o[r]),n.push(t[r]);return n}writeForwardCoefficients(e,s,o){const t=[],n=[];for(let r=0;r<e?.length;r++)r%2==0?t.push(e[r]):n.push(e[r]);s.coeffX=t,s.coeffY=n}get inverseCoefficients(){let e=this._get("inverseCoefficients");const s=this._get("forwardCoefficients");return!e&&s&&this.polynomialOrder<2&&(e=F(s)),e}set inverseCoefficients(e){this._set("inverseCoefficients",e)}readInverseCoefficients(e,s){const{inverseCoeffX:o,inverseCoeffY:t}=s;if(!o?.length||!t?.length||o.length!==t.length)return null;const n=[];for(let r=0;r<o.length;r++)n.push(o[r]),n.push(t[r]);return n}writeInverseCoefficients(e,s,o){const t=[],n=[];for(let r=0;r<e?.length;r++)r%2==0?t.push(e[r]):n.push(e[r]);s.inverseCoeffX=t,s.inverseCoeffY=n}get affectsPixelSize(){return this.polynomialOrder>0}forwardTransform(e){if(e.type==="point"){const s=w(this.forwardCoefficients,e,this.polynomialOrder);return new $({x:s.x,y:s.y,spatialReference:e.spatialReference})}return I(this.forwardCoefficients,e,this.polynomialOrder)}inverseTransform(e){if(e.type==="point"){const s=w(this.inverseCoefficients,e,this.polynomialOrder);return new $({x:s.x,y:s.y,spatialReference:e.spatialReference})}return I(this.inverseCoefficients,e,this.polynomialOrder)}};f([y({json:{write:!0}})],c.prototype,"polynomialOrder",void 0),f([y()],c.prototype,"forwardCoefficients",void 0),f([S("forwardCoefficients",["coeffX","coeffY"])],c.prototype,"readForwardCoefficients",null),f([R("forwardCoefficients")],c.prototype,"writeForwardCoefficients",null),f([y({json:{write:!0}})],c.prototype,"inverseCoefficients",null),f([S("inverseCoefficients",["inverseCoeffX","inverseCoeffY"])],c.prototype,"readInverseCoefficients",null),f([R("inverseCoefficients")],c.prototype,"writeInverseCoefficients",null),f([y()],c.prototype,"affectsPixelSize",null),f([g({PolynomialXform:"polynomial"})],c.prototype,"type",void 0),c=f([v("esri.layers.support.rasterTransforms.PolynomialTransform")],c);const _=c,P={GCSShiftXform:M,IdentityXform:z,PolynomialXform:_},G=Object.keys(P);function k(e){const s=e?.type;return!e||G.includes(s)}function A(e){if(!e?.type)return null;const o=P[e?.type];if(o){const t=new o;return t.read(e),t}return null}export{M as c,k as f,A as i,_ as m};
