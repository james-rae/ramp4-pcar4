import { a5 as s, b$ as n } from "./main-DZxT3i7S.js";
import { b as i } from "./MeshLocalVertexSpace-DrcjSCL-.js";
import { B as a } from "./vertexSpaceConversion-Xm0UohEX.js";
function m(t, r) {
  const o = a(t, i.absolute);
  if (!o) return null;
  let e = o.position;
  return s(t.spatialReference, r) || (e = new Float64Array(o.position.length), n(o.position, t.spatialReference, 0, e, r, 0)) ? e : null;
}
export {
  m as projectMeshVertexPositions
};
//# sourceMappingURL=projectMeshVertexPositions-DHegKCic.js.map
