import{F as E,g_ as y,ek as B,g$ as T,eC as W,eD as a,eo as C,h0 as z,eI as G,eN as H,eF as R,eJ as Y,P as q,h1 as j,gZ as F,h2 as O,h3 as X,ew as V,ev as D,h4 as J,es as K}from"./main-CcTJZah4.js";import"./preload-helper-ExcqyqRp.js";class U extends E{_parseConfig(t){const o=y(this.$vApp.$pinia);t&&(o.arrowIcon=t.arrowIcon,o.poleIcon=t.poleIcon)}get config(){return super.config}}const Z="path",Q=12,ee="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z",te="#ff0000ff",oe=5,ae=6,se={style:Z,size:Q,path:ee,colour:te,xOffset:oe,yOffset:ae},re=["innerHTML"],ne=B({__name:"northarrow",setup(S){const t=T(),o=y(),e=W("iApi"),u=a(),n=C(()=>o.arrowIcon),M=C(()=>o.poleIcon),c=a(0),i=a(0),h=a(!1),P=a(`<svg xmlns="http://www.w3.org/2000/svg" fit=""  width="25" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" focusable="false">
                <g id="northarrow" transform="translate(-285.24 -142.234)">
                    <path id="path3770-7" d="M305.91 156.648a8.652 8.652 0 0 1-8.654 8.653 8.652 8.652 0 0 1-8.653-8.653 8.653 8.653 0 0 1 8.653-8.653 8.653 8.653 0 0 1 8.653 8.653z" fill="#fff" stroke="#fff" stroke-width=".895"/>
                    <path id="path3770" d="M304.982 156.648a7.725 7.725 0 0 1-7.726 7.726 7.725 7.725 0 0 1-7.726-7.726 7.725 7.725 0 0 1 7.726-7.726 7.725 7.725 0 0 1 7.726 7.726z" fill="none" stroke="#6d6d6d" stroke-width=".799"/>
                    <path id="path3774" d="M297.256 156.648v-8.525" fill="none" stroke="#000" stroke-width=".067"/>
                    <path d="M297.258 143.48l8.793 22.432-8.811-8.812-8.812 8.812z" id="path3778" fill="#fff" stroke="#fff" stroke-width=".912"/>
                    <path d="M297.256 144.805l7.726 19.568-7.726-7.726-7.726 7.726z" id="path3780" fill="#d6d6d6" stroke="#000" stroke-width=".266" stroke-linecap="square"/>
                    <path id="path6038" d="M297.256 144.666l-7.726 19.568 7.726-7.726" fill="#6d6d6d" stroke-width=".296" stroke-linecap="square"/>
                </g>
            </svg>`),k=a(!1),$=z([]),A=a([]);let _;G(()=>{const s=t.config.map;A.value=s.tileSchemas,n?.value&&(P.value=`<img width='25' src='${n.value}'>`),e.geo.map.esriView?.ready&&I(e.geo.map.getExtent()),$.push(e.event.on(H.MAP_EXTENTCHANGE,R(300,I)))}),Y(()=>{$.forEach(s=>e.event.off(s))});const I=async s=>{_=t.activeBasemapConfig;let p;for(const f of A.value)if(_?.tileSchemaId===f.id){p=f?.hasNorthPole;break}const l=e.$vApp.$el.querySelector(".inner-shell"),d=u.value.querySelector(".northarrow").getBoundingClientRect().width,v=e.$vApp.$el.querySelector(".appbar")?.clientWidth||0,x=s.sr;if(p||typeof p>"u"&&!x.isWebMercator()){const f=new q("pole",{x:-96,y:90}),N=await e.geo.proj.projectGeometry(x,f),g=e.geo.map.mapPointToScreenPoint(N);if(g.screenY<0){h.value=!0;const r={screenX:l.clientWidth/2,screenY:l.clientHeight};c.value=Math.atan((g.screenX-r.screenX)/(r.screenY-g.screenY))*180/Math.PI,i.value=l.clientWidth/2+l.clientHeight*Math.tan(c.value*Math.PI/180)-d/2,i.value=Math.max(v-d/2,Math.min(e.geo.map.getPixelWidth()-d/2,i.value))}else if(h.value=!1,!k.value){k.value=!0;let r;M.value?r={style:j.ICON,icon:M.value,height:16.5,width:16.5}:r=se;const m=e.geo.layer.createLayer({id:w,layerType:F.GRAPHIC,url:"",cosmetic:!0});e.geo.map.addLayer(m),m.loadPromise().then(()=>{const b=new O(N,"northpole"),L=new X(r);b.style=L,m.addGraphic(b)})}}else h.value=!0,c.value=0,i.value=v+(l.clientWidth-v-d)/2};return(s,p)=>(K(),V("div",{class:"absolute transition-all duration-300 ease-out",style:J({"transform-origin":"top center",transform:`rotate(${c.value}deg)`,left:`${i.value}px`,visibility:h.value?"visible":"hidden"}),ref_key:"el",ref:u},[D("span",{class:"northarrow",innerHTML:P.value},null,8,re)],4))}}),w="RampPoleMarker";class ce extends U{async added(){this._parseConfig(this.config);const t=this.$vApp.$watch(()=>this.config,n=>this._parseConfig(n)),{destroy:o,el:e}=this.mount(ne,{app:this.$element});this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(e.childNodes[0]),this.removed=()=>{t(),this.$iApi.geo.layer.getLayer(w)&&this.$iApi.geo.map.removeLayer(w),y(this.$vApp.$pinia).$reset(),o()}}}export{w as POLE_MARKER_LAYER_ID,ce as default};
