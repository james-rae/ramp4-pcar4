import{I as p}from"./InterleavedLayout-C9ed4uw5.js";import{f as l,u as c,p as u,E as f,d,m}from"./edgeProcessing-fUKFibQr.js";import"./BufferView-CU-ahYdJ.js";import"./vec2-DGVIkCvT.js";import"./common-DQOJ18NT.js";import"./vec32-Wf-7vQga.js";import"./main-DVcB5zI_.js";import"./preload-helper-ExcqyqRp.js";import"./vec42-CKs01hkn.js";import"./types-D0PSWh4d.js";import"./Util-C4yWdKVH.js";import"./vec2f64-B7N_6o8F.js";import"./vec4f64-CMoMXWBi.js";import"./deduplicate-D0S022xz.js";import"./Indices-B4DWR4By.js";import"./VertexAttribute-BdZWZuT1.js";import"./glUtil-BuljoYCz.js";import"./enums-Dk3osxpS.js";import"./VertexElementDescriptor-BOD-G50G.js";function o(e,t){return t.push(e.buffer),{buffer:e.buffer,layout:new p(e.layout)}}class G{async extract(t){const i=a(t),r=l(i),n=[i.data.buffer];return{result:g(r,n),transferList:n}}async extractComponentsEdgeLocations(t){const i=a(t),r=c(i.data,i.skipDeduplicate,i.indices,i.indicesLength),n=u(r,w),s=[];return{result:o(n.regular.instancesData,s),transferList:s}}async extractEdgeLocations(t){const i=a(t),r=c(i.data,i.skipDeduplicate,i.indices,i.indicesLength),n=u(r,L),s=[];return{result:o(n.regular.instancesData,s),transferList:s}}}function a(e){return{data:f.createView(e.dataBuffer),indices:e.indicesType==="Uint32Array"?new Uint32Array(e.indices):e.indicesType==="Uint16Array"?new Uint16Array(e.indices):e.indices,indicesLength:e.indicesLength,writerSettings:e.writerSettings,skipDeduplicate:e.skipDeduplicate}}function g(e,t){return t.push(e.regular.lodInfo.lengths.buffer),t.push(e.silhouette.lodInfo.lengths.buffer),{regular:{instancesData:o(e.regular.instancesData,t),lodInfo:{lengths:e.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:o(e.silhouette.instancesData,t),lodInfo:{lengths:e.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:e.averageEdgeLength}}class h{allocate(t){return d.createBuffer(t)}trim(t,i){return t.slice(0,i)}write(t,i,r){t.position0.setVec(i,r.position0),t.position1.setVec(i,r.position1)}}class y{allocate(t){return m.createBuffer(t)}trim(t,i){return t.slice(0,i)}write(t,i,r){t.position0.setVec(i,r.position0),t.position1.setVec(i,r.position1),t.componentIndex.set(i,r.componentIndex)}}const L=new h,w=new y;export{G as default};