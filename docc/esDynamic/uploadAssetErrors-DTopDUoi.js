import{s}from"./main-DnRb_GMc.js";const o="upload-assets",t=()=>new Error;class n extends s{constructor(){super(`${o}:unsupported`,"Layer does not support asset uploads.",t())}}class u extends s{constructor(){super(`${o}:no-glb-support`,"Layer does not support glb.",t())}}class p extends s{constructor(){super(`${o}:no-supported-source`,"No supported external source found",t())}}class d extends s{constructor(){super(`${o}:not-base-64`,"Expected gltf data in base64 format after conversion.",t())}}class l extends s{constructor(){super(`${o}:unable-to-prepare-options`,"Unable to prepare uploadAsset request options.",t())}}class c extends s{constructor(r,a){super(`${o}:bad-response`,`Bad response. Uploaded ${r} items and received ${a} results.`,t())}}class i extends s{constructor(r,a){super(`${o}-layer:upload-failed`,`Failed to upload mesh file ${r}. Error code: ${a?.code??"-1"}. Error message: ${a?.messages??"unknown"}`,t())}}class m extends s{constructor(r){super(`${o}-layer:unsupported-format`,`The service allowed us to upload an asset of FormatID ${r}, but it does not list it in its supported formats.`,t())}}class $ extends s{constructor(){super(`${o}:convert3D-failed`,"convert3D failed.")}}class f extends s{constructor(){super("invalid-input:no-model","No supported model found")}}class x extends s{constructor(){super("invalid-input:multiple-models","Multiple supported models found")}}export{c as a,m as c,i as d,f as i,$ as l,x as m,p as n,l as p,n as r,u as t,d as u};