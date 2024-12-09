import { J as n, s as a, T as i } from "./main-DZxT3i7S.js";
import { p as c } from "./MeshVertexAttributes-Ckunuqz3.js";
import { B as l } from "./vertexSpaceConversion-Xm0UohEX.js";
async function v(e, t, r) {
  await Promise.resolve(), n(r);
  const o = l(e, t, { useEllipsoid: r?.useEllipsoid });
  if (!o) throw new a("meshUtils:convertVertexSpace()", "Failed to convert to provided vertex space due to projection errors");
  const s = e.cloneAndModifyVertexAttributes(new c({ ...o, uv: i(e.vertexAttributes.uv), color: i(e.vertexAttributes.color) }), t);
  return s.transform = null, s;
}
export {
  v as convertMeshVertexSpace
};
//# sourceMappingURL=convertMeshVertexSpace-C8UQov2v.js.map
