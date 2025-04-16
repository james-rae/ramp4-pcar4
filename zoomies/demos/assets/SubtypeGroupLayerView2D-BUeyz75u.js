import{q as a,C as n,aG as d,cU as u,b1 as l}from"./main-vIJpOdvB.js";import{r as g}from"./FeatureLayerView2D-BB6LY9lJ.js";import"./preload-helper-ExcqyqRp.js";import"./compilerUtils-Bb3nuaZ2.js";import"./Container-B7y66kXL.js";import"./MapView-hWvE-eny.js";import"./Cyclical-CBXgk0zM.js";import"./CollectionFlattener-BYkOQ07q.js";import"./workers-bcHhicnU.js";import"./projection-DUpEFq3L.js";import"./projectBuffer-aZ5NGnsM.js";import"./TileInfo-CUvN-OKb.js";import"./TileKey-DZd6gJy7.js";import"./themeUtils-DEe8suzU.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-CQ8xqsEr.js";import"./signal-D-PbuAaj.js";import"./Map-qqDUIE-e.js";import"./Basemap-B47iptDR.js";import"./loadAll-U-E2yCLR.js";import"./PortalItem-Bd16B4N_.js";import"./writeUtils-lEDU74_5.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-DddAqSdm.js";import"./common-DQOJ18NT.js";import"./TablesMixin-B1hxcQRC.js";import"./Layer-CTALTC0x.js";import"./TimeExtent-CvPeYCj0.js";import"./GraphicsCollection-CYKpx_ws.js";import"./HeightModelInfo-DfhxKHZT.js";import"./ReactiveMap-D6Uz0B4Z.js";import"./Query-c2ltiIPp.js";import"./Field-cqyKZlb5.js";import"./fieldType-Bz-x3gqO.js";import"./arcgisLayerUrl-f6zkGlVo.js";import"./ViewingMode-HRfKv6NR.js";import"./vec2f64-B7N_6o8F.js";import"./vec2-DGVIkCvT.js";import"./Tile-DmnJ15TJ.js";import"./TileKey-DOCG2GmL.js";import"./QueueProcessor-Du_2mIez.js";import"./quickselect-QQC62dOK.js";import"./normalizeUtils-CXoq44eX.js";import"./normalizeUtilsCommon-Dkn8-liH.js";import"./utils-De1xqMvB.js";import"./utils-Dx-maw32.js";import"./mat3-XZDRtl20.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-DJG9Pz3C.js";import"./vec32-gSPtxhar.js";import"./definitions-C0Jy3zs7.js";import"./enums-Dk3osxpS.js";import"./Texture-BIbIiVdY.js";import"./imageUtils-DXlpiZUP.js";import"./capabilities-A2uoe7dc.js";import"./Version-DZB84Nzg.js";import"./ColorBackground-hGDKSyKf.js";import"./parser-DkauTbU_.js";import"./featureConversionUtils-DdC5AzaX.js";import"./OptimizedFeature-CIptWNVu.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./FeatureFilter-BVb0WU2l.js";import"./timeSupport-D3z5Z__F.js";import"./FeatureSet-CVDRI1XC.js";import"./LayerView-BNboiUe4.js";import"./layerViewUtils-UlMXaOTl.js";import"./TechniqueInstance-Bj3rT0pi.js";import"./UpdateTracking2D-V4CU09gw.js";import"./BidiEngine-DNnuvc1i.js";import"./GeometryUtils--CmJvvbp.js";import"./enums-CmIX1y88.js";import"./utils-QWndGYJy.js";import"./Rect-CUzevAry.js";import"./LabelMetric-BCwI6-Xy.js";import"./Program-DmdLGaWn.js";import"./BufferObject-Dee41XAl.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BindType-BmZEZMMh.js";import"./Util-C4yWdKVH.js";import"./vec42-CKs01hkn.js";import"./vec4f64-CMoMXWBi.js";import"./TileContainer-YdTOMC5m.js";import"./WGLContainer-Cd6dAmGp.js";import"./VertexArrayObject-Bm0IsYWg.js";import"./ProgramTemplate-BOardkIo.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-BTt_i6C1.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./FeatureCommandQueue-NtZpr0z_.js";import"./constants-F8oTIn7N.js";import"./lengthUtils-BvR-RB4g.js";import"./CircularArray-CujHzHWW.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./OrderByInfo-CJ2vTvX-.js";import"./labelingInfo-DRm72JcS.js";import"./labelUtils-B-bTQKCj.js";import"./heatmapUtils-Bz5TUlyT.js";import"./SDFHelper-BwcKb_o9.js";import"./floatRGBA-By3bVRs-.js";import"./HighlightCounter-Czi-fdpx.js";import"./FeatureEffect-CM3-wYs7.js";import"./jsonUtils-Dr0es0IJ.js";import"./floorFilterUtils-DKzVzLpH.js";import"./popupUtils-Dv-dW1P7.js";import"./RefreshableLayerView-DBl_LffY.js";let i=class extends g{initialize(){this.addHandles([d(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(s=>s.renderer!=null),r=this._commandsQueue.updateTracking.updating,o=this._updatingRequiredFieldsPromise!=null,p=!this._workerProxy,m=this.dataUpdating,e=t&&(r||o||p||m);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${e}
  -> hasRenderer ${t}
  -> hasPendingCommand ${r}
  -> updatingRequiredFields ${o}
  -> updatingProxy ${p}
  -> updatingPipeline ${m}
`),e}};i=a([n("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const gt=i;export{gt as default};
