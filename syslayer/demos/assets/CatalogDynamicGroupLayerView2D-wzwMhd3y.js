import{B as i,D as a,N as f,V,e7 as b,fx as F,a9 as U,eS as x,n as _,bC as w}from"./main-D_jCcUNd.js";import{S as H,y as I}from"./LayerView-MMU4ldM6.js";import"./preload-helper-ExcqyqRp.js";import"./Container-BpX60Pq3.js";import"./MapView-g0EvuRBu.js";import"./Cyclical-DmWGgGDQ.js";import"./CollectionFlattener-B_TcI2U7.js";import"./workers-C_FSogvH.js";import"./Queue-BTQW9uXn.js";import"./intl-Bp-1PIwe.js";import"./projection-DswCNHiF.js";import"./projectBuffer-B9jUCpdF.js";import"./TileInfo-nWFqg-Nu.js";import"./TileKey-DZd6gJy7.js";import"./themeUtils-B7nSQ0Ik.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-DBlsBnyG.js";import"./signal-0dLFd0qC.js";import"./Map-CtrtHDNc.js";import"./Basemap-BlwSpYU2.js";import"./loadAll-jEhlaiuJ.js";import"./PortalItem-BEvvM5w1.js";import"./writeUtils-2a1LQLfC.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-CiVQetHb.js";import"./common-DQOJ18NT.js";import"./TablesMixin-CzW1oJ3Z.js";import"./Layer-DXHV-tnm.js";import"./TimeExtent-BsjGA75b.js";import"./GraphicsCollection-SQSumPVA.js";import"./HeightModelInfo-DCYyjFn0.js";import"./timeZoneUtils-6sWpKbTj.js";import"./ReactiveMap-CTiM5K9q.js";import"./Query-C_GHDF0q.js";import"./Field-Bc3jm0Qy.js";import"./fieldType-DdU3LEuk.js";import"./HighlightDefaults-BD5B09pE.js";import"./ViewingMode-HRfKv6NR.js";import"./vec2-maR1OrZI.js";import"./vec2f64-DohEyf3f.js";import"./Tile-Dc7il-nh.js";import"./TileKey-qlE8xjYB.js";import"./quickselect-QQC62dOK.js";import"./normalizeUtils-Gz60uU0X.js";import"./normalizeUtilsCommon-BboKzpCl.js";import"./utils-DlXSLgCK.js";import"./utils-3tCdmWBq.js";import"./mat3-CruJiiUv.js";import"./vec2f32-BbH2jxlN.js";import"./Scheduler-B-hxYQ24.js";import"./vec32-CQFqDiXA.js";import"./unitBezier-B1N-tmtC.js";import"./definitions-CPtb4TQS.js";import"./enums-Dk3osxpS.js";import"./Texture-DFHwtOk1.js";import"./getDataTypeBytes-DflDeYgv.js";import"./imageUtils-CV8e604h.js";import"./capabilities-Du2wdNlQ.js";import"./Version-ZDKFRu5V.js";import"./ColorBackground-nWWlmpr0.js";import"./parser-Dom1EsDx.js";import"./layerViewUtils-D4drLXgd.js";const y=Symbol(),O=n=>{let e=class extends n{constructor(){super(...arguments),this.layerViews=new V,this._debouncedUpdate=b(async()=>{const{layer:r,parent:s}=this,o=s?.footprintLayerView;let p=[];const m=this._createQuery();if(m&&o){const{features:u}=await o.queryFeatures(m);this.suspended||(p=u.map(h=>r.acquireLayer(h)))}this.removeHandles(y),this.addHandles(p,y)})}get creatingLayerViews(){return this.view?.layerViewManager.isCreatingLayerViewsForLayer(this.layer)??!1}isUpdating(){return this.creatingLayerViews||this.layer.updating||this.layerViews.some(r=>r.updating)}enableLayerUpdates(){return F([this._updatingHandles.addWhen(()=>this.parent?.footprintLayerView?.dataUpdating===!1,()=>this.updateLayers()),this._updatingHandles.add(()=>[this.layer.maximumVisibleSublayers,this.layer.parent?.orderBy,this.parent?.footprintLayerView?.filter,this.parent?.footprintLayerView?.timeExtent,this.suspended],()=>this.updateLayers()),U(()=>this.removeHandles(y))])}updateLayers(){this.suspended?this.removeHandles(y):this._updatingHandles.addPromise(x(this._debouncedUpdate()).catch(r=>{_.getLogger(this).error(r)}))}_createQuery(){const r=this.parent?.footprintLayerView,s=this.layer?.parent;if(!r||!s||s.destroyed)return null;const{layer:{maximumVisibleSublayers:o},view:{scale:p}}=this;if(!o)return null;const{itemTypeField:m,itemSourceField:u,itemNameField:h,minScaleField:c,maxScaleField:L,objectIdField:v,orderBy:S}=s,$=w(`${c} IS NULL OR ${p} <= ${c} OR ${c} = 0`,`${L} IS NULL OR ${p} >= ${L}`),d=S?.find(l=>l.field&&!l.valueExpression),t=r.createQuery();if(t.returnGeometry=!1,t.num=o,t.outFields=[v,u,h],t.where=w(t.where,$),this.unsupportedItemTypes!=null){const l=`${m} NOT IN (${this.unsupportedItemTypes.map(C=>`'${C}'`)})`;t.where=w(t.where,l)}return d?.field&&(t.orderByFields=[`${d.field} ${d.order==="descending"?"DESC":"ASC"}`],t.outFields.push(d.field)),t}};return i([a({readOnly:!0})],e.prototype,"creatingLayerViews",null),i([a()],e.prototype,"layer",void 0),i([a()],e.prototype,"layerViews",void 0),i([a({readOnly:!0})],e.prototype,"unsupportedItemTypes",void 0),i([a()],e.prototype,"parent",void 0),i([a({readOnly:!0})],e.prototype,"isUpdating",null),e=i([f("esri.views.layers.CatalogDynamicGroupLayerView")],e),e};let g=class extends O(H(I)){constructor(){super(...arguments),this.unsupportedItemTypes=["Scene Service"],this.layerViews=new V}attach(){this.addAttachHandles([this.layerViews.on("after-changes",()=>this._updateStageChildren()),this.enableLayerUpdates()])}detach(){this.container.removeAllChildren()}update(n){this.updateLayers()}viewChange(){}moveEnd(){this.requestUpdate()}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((n,e)=>this.container.addChildAt(n.container,e))}};g=i([f("esri.views.2d.layers.CatalogDynamicGroupLayerView2D")],g);const Qe=g;export{Qe as default};
