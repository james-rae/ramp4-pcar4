import{a$ as h}from"./main-DFutu5rJ.js";import{d as v,g as A}from"./arcgisLayerUrl-DdfHAL_R.js";function e(t,s,r){return!!g(t,s,r)}function c(t,s,r){return g(t,s,r)}function g(t,s,r){return t&&t.hasOwnProperty(s)?t[s]:r}const S={name:"supportsName",size:"supportsSize",contentType:"supportsContentType",keywords:"supportsKeywords",exifInfo:"supportsExifInfo"};function Q(t){const s=t?.supportedSpatialAggregationStatistics?.map(r=>r.toLowerCase());return{envelope:!!s?.includes("envelopeaggregate"),centroid:!!s?.includes("centroidaggregate"),convexHull:!!s?.includes("convexhullaggregate")}}function d(t,s){return!!t?.supportedOperationsWithCacheHint?.map(r=>r.toLowerCase())?.includes(s.toLowerCase())}function f(t){const s=t?.supportedStatisticTypes?.map(r=>r.toLowerCase());return{count:!!s?.includes("count"),sum:!!s?.includes("sum"),min:!!s?.includes("min"),max:!!s?.includes("max"),avg:!!s?.includes("avg"),var:!!s?.includes("var"),stddev:!!s?.includes("stddev"),percentileContinuous:!!s?.includes("percentile_continuous"),percentileDiscrete:!!s?.includes("percentile_discrete"),envelope:!!s?.includes("envelopeaggregate"),centroid:!!s?.includes("centroidaggregate"),convexHull:!!s?.includes("convexhullaggregate")}}function x(t,s){return{analytics:R(t),attachment:F(t),data:B(t),metadata:T(t),operations:D(t.capabilities,t,s),query:E(t,s),queryBins:b(t),queryRelated:w(t),queryTopFeatures:M(t),editing:I(t)}}function R(t){return{supportsCacheHint:d(t.advancedQueryCapabilities,"queryAnalytics")}}function F(t){const s=t.attachmentProperties,r={supportsName:!1,supportsSize:!1,supportsContentType:!1,supportsKeywords:!1,supportsExifInfo:!1,supportsCacheHint:d(t.advancedQueryCapabilities,"queryAttachments"),supportsResize:e(t,"supportsAttachmentsResizing",!1)};return s&&Array.isArray(s)&&s.forEach(p=>{const o=S[p.name];o&&(r[o]=!!p.isEnabled)}),r}function B(t){return{isVersioned:e(t,"isDataVersioned",!1),isBranchVersioned:e(t,"isDataBranchVersioned",!1),supportsAttachment:e(t,"hasAttachments",!1),supportsM:e(t,"hasM",!1),supportsZ:e(t,"hasZ",!1)}}function T(t){return{supportsAdvancedFieldProperties:e(t,"supportsFieldDescriptionProperty",!1)}}function D(t,s,r){const p=t?t.toLowerCase().split(",").map(C=>C.trim()):[],o=r?v(r):null,y=p.includes(o!=null&&o.serverType==="MapServer"?"data":"query"),u=p.includes("editing")&&!s.datesInUnknownTimezone;let n=u&&p.includes("create"),i=u&&p.includes("delete"),a=u&&p.includes("update");const m=p.includes("changetracking"),l=s.advancedQueryCapabilities;return u&&!(n||i||a)&&(n=i=a=!0),{supportsCalculate:e(s,"supportsCalculate",!1),supportsTruncate:e(s,"supportsTruncate",!1),supportsValidateSql:e(s,"supportsValidateSql",!1),supportsAdd:n,supportsDelete:i,supportsEditing:u,supportsChangeTracking:m,supportsQuery:y,supportsQueryAnalytics:e(l,"supportsQueryAnalytic",!1),supportsQueryAttachments:e(l,"supportsQueryAttachments",!1),supportsQueryBins:e(l,"supportsQueryBins",!1),supportsQueryTopFeatures:e(l,"supportsTopFeaturesQuery",!1),supportsResizeAttachments:e(s,"supportsAttachmentsResizing",!1),supportsSync:p.includes("sync"),supportsUpdate:a,supportsExceedsLimitStatistics:e(s,"supportsExceedsLimitStatistics",!1),supportsAsyncConvert3D:e(s,"supportsAsyncConvert3D",!1)}}function E(t,s){const r=t.advancedQueryCapabilities,p=t.ownershipBasedAccessControlForFeatures,o=t.archivingInfo,y=t.currentVersion,u=s?.includes("MapServer"),n=!u||y>=h("mapserver-pbf-version-support"),i=A(s),a=new Set((t.supportedQueryFormats??"").split(",").map(m=>m.toLowerCase().trim()));return{maxRecordCount:c(t,"maxRecordCount",void 0),maxRecordCountFactor:c(t,"maxRecordCountFactor",void 0),standardMaxRecordCount:c(t,"standardMaxRecordCount",void 0),supportedSpatialAggregationStatistics:Q(r),supportsCacheHint:e(r,"supportsQueryWithCacheHint",!1)||d(r,"query"),supportsCentroid:e(r,"supportsReturningGeometryCentroid",!1),supportsCompactGeometry:i,supportsDefaultSpatialReference:e(r,"supportsDefaultSR",!1),supportsDisjointSpatialRelationship:e(r,"supportsDisjointSpatialRel",!1),supportsDistance:e(r,"supportsQueryWithDistance",!1),supportsDistinct:e(r,"supportsDistinct",t.supportsAdvancedQueries),supportsExtent:e(r,"supportsReturningQueryExtent",!1),supportsFormatPBF:n&&a.has("pbf"),supportsFullTextSearch:e(r,"supportsFullTextSearch",!1),supportsGeometryProperties:e(r,"supportsReturningGeometryProperties",!1),supportsHavingClause:e(r,"supportsHavingClause",!1),supportsHistoricMoment:e(o,"supportsQueryWithHistoricMoment",!1),supportsMaxRecordCountFactor:e(r,"supportsMaxRecordCountFactor",!1),supportsOrderBy:e(r,"supportsOrderBy",t.supportsAdvancedQueries),supportsPagination:e(r,"supportsPagination",!1),supportsPercentileStatistics:e(r,"supportsPercentileStatistics",!1),supportsQuantization:e(t,"supportsCoordinatesQuantization",!1),supportsQuantizationEditMode:e(t,"supportsQuantizationEditMode",!1),supportsQueryByAnonymous:e(p,"allowAnonymousToQuery",!0),supportsQueryByOthers:e(p,"allowOthersToQuery",!0),supportsQueryGeometry:e(t,"supportsReturningQueryGeometry",!1),supportsResultType:e(r,"supportsQueryWithResultType",!1),supportsSpatialAggregationStatistics:e(r,"supportsSpatialAggregationStatistics",!1),supportsSqlExpression:e(r,"supportsSqlExpression",!1),supportsStandardizedQueriesOnly:e(t,"useStandardizedQueries",!1),supportsStatistics:e(r,"supportsStatistics",t.supportsStatistics),supportsTopFeaturesQuery:e(r,"supportsTopFeaturesQuery",!1),tileMaxRecordCount:c(t,"tileMaxRecordCount",void 0)}}function w(t){const s=t.advancedQueryCapabilities,r=e(s,"supportsAdvancedQueryRelated",!1);return{supportsPagination:e(s,"supportsQueryRelatedPagination",!1),supportsCount:r,supportsOrderBy:r,supportsCacheHint:d(s,"queryRelated")}}function M(t){return{supportsCacheHint:d(t.advancedQueryCapabilities,"queryTopFilter")}}function b(t){const s=t?t.queryBinsCapabilities:void 0;return{supportsDate:e(s,"supportsDateBin",!1),supportsFixedInterval:e(s,"supportsFixedIntervalBin",!1),supportsAutoInterval:e(s,"supportsAutoIntervalBin",!1),supportsFixedBoundaries:e(s,"supportsFixedBoundariesBin",!1),supportedStatistics:f(s)}}function I(t){const s=t.ownershipBasedAccessControlForFeatures,r=t?t.advancedEditingCapabilities:void 0;return{supportsGeometryUpdate:e(t,"allowGeometryUpdates",!0),supportsGlobalId:e(t,"supportsApplyEditsWithGlobalIds",!1),supportsReturnServiceEditsInSourceSpatialReference:e(t,"supportsReturnServiceEditsInSourceSR",!1),supportsRollbackOnFailure:e(t,"supportsRollbackOnFailureParameter",!1),supportsUpdateWithoutM:e(t,"allowUpdateWithoutMValues",!1),supportsUploadWithItemId:e(t,"supportsAttachmentsByUploadId",!1),supportsDeleteByAnonymous:e(s,"allowAnonymousToDelete",!0),supportsDeleteByOthers:e(s,"allowOthersToDelete",!0),supportsUpdateByAnonymous:e(s,"allowAnonymousToUpdate",!0),supportsUpdateByOthers:e(s,"allowOthersToUpdate",!0),supportsAsyncApplyEdits:e(r,"supportsAsyncApplyEdits",!1),zDefault:c(t,"zDefault",void 0)}}function q(t){return{operations:{supportsAppend:e(t,"supportsAppend",!1),supportsCoverageQuery:t?.playbackInfo?.klv["0601"]??!1,supportsExportClip:e(t,"supportsExportClip",!1),supportsExportFrameset:e(t,"supportsExportFrameset",!1),supportsMensuration:e(t,"supportsMensuration",!1),supportsUpdate:e(t,"supportsUpdate",!1)}}}export{q as A,x as i};
