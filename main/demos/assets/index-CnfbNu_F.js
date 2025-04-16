import{F as E,gg as y,dM as B,gh as T,e2 as W,e3 as a,dQ as N,gi as z,e8 as G,ed as H,e5 as R,e9 as Y,P as j,gj as q,gf as X,gk as O,gl as F,dY as V,dX as U,gm as D,dU as K}from"./main-C45WTWFO.js";import"./preload-helper-ExcqyqRp.js";class Q extends E{_parseConfig(t){const o=y(this.$vApp.$pinia);t&&(o.arrowIcon=t.arrowIcon,o.poleIcon=t.poleIcon)}get config(){return super.config}}const J="path",Z=12,ee="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z",te="#ff0000ff",oe=5,ae=6,re={style:J,size:Z,path:ee,colour:te,xOffset:oe,yOffset:ae},se=["innerHTML"],ne=B({__name:"northarrow",setup(M){const t=T(),o=y(),e=W("iApi"),u=a(),n=N(()=>o.arrowIcon),S=N(()=>o.poleIcon),c=a(0),i=a(0),p=a(!1),P=a(`<svg xmlns="http://www.w3.org/2000/svg" fit=""  width="25" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" focusable="false">
                <g id="northarrow" transform="translate(-285.24 -142.234)">
                    <path id="path3770-7" d="M305.91 156.648a8.652 8.652 0 0 1-8.654 8.653 8.652 8.652 0 0 1-8.653-8.653 8.653 8.653 0 0 1 8.653-8.653 8.653 8.653 0 0 1 8.653 8.653z" fill="#fff" stroke="#fff" stroke-width=".895"/>
                    <path id="path3770" d="M304.982 156.648a7.725 7.725 0 0 1-7.726 7.726 7.725 7.725 0 0 1-7.726-7.726 7.725 7.725 0 0 1 7.726-7.726 7.725 7.725 0 0 1 7.726 7.726z" fill="none" stroke="#6d6d6d" stroke-width=".799"/>
                    <path id="path3774" d="M297.256 156.648v-8.525" fill="none" stroke="#000" stroke-width=".067"/>
                    <path d="M297.258 143.48l8.793 22.432-8.811-8.812-8.812 8.812z" id="path3778" fill="#fff" stroke="#fff" stroke-width=".912"/>
                    <path d="M297.256 144.805l7.726 19.568-7.726-7.726-7.726 7.726z" id="path3780" fill="#d6d6d6" stroke="#000" stroke-width=".266" stroke-linecap="square"/>
                    <path id="path6038" d="M297.256 144.666l-7.726 19.568 7.726-7.726" fill="#6d6d6d" stroke-width=".296" stroke-linecap="square"/>
                </g>
            </svg>`),k=a(!1),A=z([]),$=a([]);let _;G(()=>{const r=t.config.map;$.value=r.tileSchemas,n?.value&&(P.value=`<img width='25' src='${n.value}'>`),e.geo.map.esriView?.ready&&I(e.geo.map.getExtent()),A.push(e.event.on(H.MAP_EXTENTCHANGE,R(300,I)))}),Y(()=>{A.forEach(r=>e.event.off(r))});const I=async r=>{_=t.activeBasemapConfig;let h;for(const f of $.value)if(_?.tileSchemaId===f.id){h=f?.hasNorthPole;break}const l=e.$vApp.$el.querySelector(".inner-shell"),d=u.value.querySelector(".northarrow").getBoundingClientRect().width,g=e.$vApp.$el.querySelector(".appbar")?.clientWidth||0,x=r.sr;if(h||typeof h>"u"&&!x.isWebMercator()){const f=new j("pole",{x:-96,y:90}),b=await e.geo.proj.projectGeometry(x,f),v=e.geo.map.mapPointToScreenPoint(b);if(v.screenY<0){p.value=!0;const s={screenX:l.clientWidth/2,screenY:l.clientHeight};c.value=Math.atan((v.screenX-s.screenX)/(s.screenY-v.screenY))*180/Math.PI,i.value=l.clientWidth/2+l.clientHeight*Math.tan(c.value*Math.PI/180)-d/2,i.value=Math.max(g-d/2,Math.min(e.geo.map.getPixelWidth()-d/2,i.value))}else if(p.value=!1,!k.value){k.value=!0;let s;S.value?s={style:q.ICON,icon:S.value,height:16.5,width:16.5}:s=re;const m=e.geo.layer.createLayer({id:w,layerType:X.GRAPHIC,url:"",cosmetic:!0});e.geo.map.addLayer(m),m.loadPromise().then(()=>{const L=new O(b,"northpole"),C=new F(s);L.style=C,m.addGraphic(L)})}}else p.value=!0,c.value=0,i.value=g+(l.clientWidth-g-d)/2};return(r,h)=>(K(),V("div",{class:"absolute transition-all duration-300 ease-out",style:D({"transform-origin":"top center",transform:`rotate(${c.value}deg)`,left:`${i.value}px`,visibility:p.value?"visible":"hidden"}),ref_key:"el",ref:u},[U("span",{class:"northarrow",innerHTML:P.value},null,8,se)],4))}}),w="RampPoleMarker";class ce extends Q{async added(){this._parseConfig(this.config);const t=this.$vApp.$watch(()=>this.config,n=>this._parseConfig(n)),{destroy:o,el:e}=this.mount(ne,{app:this.$element});this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(e.childNodes[0]),this.removed=()=>{t(),this.$iApi.geo.layer.getLayer(w)&&this.$iApi.geo.map.removeLayer(w),y(this.$vApp.$pinia).$reset(),o()}}}export{w as POLE_MARKER_LAYER_ID,ce as default};
