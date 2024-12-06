import { s, cL as z } from './main-jdFDoOPu.js';
import { N } from './MeshTransform-2R18FMnE.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const e="upload-assets",o=()=>new Error;class r extends s{constructor(){super(`${e}:unsupported`,"Layer does not support asset uploads.",o());}}let t$1 = class t extends s{constructor(){super(`${e}:no-glb-support`,"Layer does not support glb.",o());}};class n extends s{constructor(){super(`${e}:no-supported-source`,"No supported external source found",o());}}class u extends s{constructor(){super(`${e}:not-base-64`,"Expected gltf data in base64 format after conversion.",o());}}class p extends s{constructor(){super(`${e}:unable-to-prepare-options`,"Unable to prepare uploadAsset request options.",o());}}class a extends s{constructor(s,r){super(`${e}:bad-response`,`Bad response. Uploaded ${s} items and received ${r} results.`,o());}}class d extends s{constructor(s,r){super(`${e}-layer:upload-failed`,`Failed to upload mesh file ${s}. Error code: ${r?.code??"-1"}. Error message: ${r?.messages??"unknown"}`,o());}}class c extends s{constructor(s){super(`${e}-layer:unsupported-format`,`The service allowed us to upload an asset of FormatID ${s}, but it does not list it in its supported formats.`,o());}}class l extends s{constructor(){super(`${e}:convert3D-failed`,"convert3D failed.");}}class i extends s{constructor(){super("invalid-input:no-model","No supported model found");}}class m extends s{constructor(){super("invalid-input:multiple-models","Multiple supported models found");}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function t(t){const e=1/z(t,1);return 1!==e?new N({scale:[e,e,e]}):void 0}

export { a, t$1 as b, c, d, i, l, m, n, p, r, t, u };
