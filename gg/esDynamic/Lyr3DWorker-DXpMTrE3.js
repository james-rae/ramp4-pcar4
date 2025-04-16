import{cx as M}from"./main-DTtQVgOw.js";var p,N,g,f,m,d,S,b,U,I,L,D,h,x,s;(function(t){t.U8="U8",t.I8="I8",t.U16="U16",t.I16="I16",t.U32="U32",t.I32="I32",t.F32="F32",t.F64="F64",t.Utf8String="Utf8String",t.NotSet="NotSet"})(p||(p={})),function(t){t.Png="Png",t.Jpeg="Jpeg",t.Dds="Dds",t.Raw="Raw",t.Dxt1="Dxt1",t.Dxt5="Dxt5",t.Bc7="Bc7",t.Basis="Basis",t.Etc1="Etc1",t.Etc2="Etc2",t.Astc="Astc",t.Pvrtc="Pvrtc",t.NotSet="NotSet"}(N||(N={})),function(t){t.Position="Position",t.Normal="Normal",t.TexCoord="TexCoord",t.Color="Color",t.Tangent="Tangent",t.FeatureIndex="FeatureIndex",t.UvRegion="UvRegion",t.FeatureVariable="FeatureVariable",t.NotSet="NotSet"}(g||(g={})),function(t){t.Opaque="Opaque",t.Mask="Mask",t.Blend="Blend"}(f||(f={})),function(t){t.None="None",t.Mask="Mask",t.Alpha="Alpha",t.PreMultAlpha="PreMultAlpha",t.NotSet="NotSet"}(m||(m={})),function(t){t.Points="Points",t.Lines="Lines",t.LineStrip="LineStrip",t.Triangles="Triangles",t.TriangleStrip="TriangleStrip",t.NotSet="NotSet"}(d||(d={})),function(t){t.None="None",t.WrapXBit="WrapXBit",t.WrapYBit="WrapYBit",t.WrapXy="WrapXy",t.NotSet="NotSet"}(S||(S={})),function(t){t.Linear="Linear",t.Nearest="Nearest",t.NotSet="NotSet"}(b||(b={})),function(t){t.Linear="Linear",t.Nearest="Nearest",t.NearestMipmapNearest="NearestMipmapNearest",t.LinearMipmapNearest="LinearMipmapNearest",t.NearestMipmapLinear="NearestMipmapLinear",t.LinearMipmapLinear="LinearMipmapLinear",t.NotSet="NotSet"}(U||(U={})),function(t){t.FeatureId="FeatureId",t.GlobalUid="GlobalUid",t.UnspecifiedDateTime="UnspecifiedDateTime",t.EcmaIso8601DateTime="EcmaIso8601DateTime",t.EcmaIso8601DateOnly="EcmaIso8601DateOnly",t.TimeOnly="TimeOnly",t.TimeStamp="TimeStamp",t.ColorRgb="ColorRgb",t.ColorRgba="ColorRgba",t.Unrecognized="Unrecognized",t.NotSet="NotSet"}(I||(I={})),function(t){t.Texture="Texture",t.VertexAtrb="VertexAtrb",t.Implicit="Implicit",t.NotSet="NotSet"}(L||(L={})),function(t){t.Front="Front",t.Back="Back",t.None="None",t.NotSet="NotSet"}(D||(D={})),function(t){t.Pbr="Pbr",t.Unlit="Unlit"}(h||(h={})),function(t){t.Rgb8="Rgb8",t.Rgba8="Rgba8",t.R8="R8",t.Bgr8="Bgr8",t.Bgra8="Bgra8",t.Rg8="Rg8",t.Ga8="Ga8",t.Etc1="Etc1",t.Etc2="Etc2",t.Dxt1="Dxt1",t.Dxt5="Dxt5",t.Bc7="Bc7",t.NotSet="NotSet"}(x||(x={})),function(t){t[t.Succeeded=0]="Succeeded",t[t.Failed=1]="Failed",t[t.MissingInputs=2]="MissingInputs"}(s||(s={}));function R(){return new Promise(t=>import("./lyr3DWorker-CjfSsd8Z.js").then(a=>a.l).then(({default:a})=>{const n=a({locateFile:T,onRuntimeInitialized:()=>t(n)})})).catch(t=>{throw t})}function T(t){return M(`esri/libs/lyr3d/${t}`)}let o,r;async function y(t){if(await B(),t.inputs.length<1)return{result:{status:s.Failed,error:"",jobDescJson:"",data:new Uint8Array(0),missingInputUrls:[]},transferList:[]};const a={ptrs:[],sizes:[]};for(const i of t.inputs){const u=r._malloc(i.byteLength);new Uint8Array(r.HEAPU8.buffer,u,i.byteLength).set(new Uint8Array(i)),a.ptrs.push(u),a.sizes.push(i.byteLength)}const n=r.process(t.jobDescJson,a,t.isMissingResourceCase),c=n.status===s.Succeeded&&n.data,l=n.status===s.MissingInputs&&n.missingInputUrls.length>0;if(c){const i=n.data.slice();n.data=i}else l&&(n.jobDescJson=n.jobDescJson.slice(),n.originalInputs=t.inputs.slice());for(let i=0;i<a.ptrs.length;++i)r._free(a.ptrs[i]);const e=[];if(c)e.push(n.data.buffer);else if(l)for(const i of t.inputs)e.push(i);return{result:n,transferList:e}}function F(){r&&(r.uninitialize_lyr3d_worker_wasm(),r=null)}function B(){return r?Promise.resolve():(o||(o=R().then(t=>{r=t,r.initialize_lyr3d_worker_wasm(),o=null})),o)}export{F as destroyWasm,B as initialize,y as process};
