import{n as e}from"./glsl-C_vcLKq5.js";import{t}from"./ShaderBuilder-Dbznn42u.js";import{t as n}from"./Float4PassUniform-Cyw5dChF.js";import{a as r}from"./AlphaCutoff-BoD_j2b5.js";import{n as i}from"./View.glsl-CGAOvWrI.js";import{t as a}from"./OutputColorHighlightOLID.glsl-B5FQ4pak.js";import{t as o}from"./Transform.glsl-nN-wu1Z0.js";import{t as s}from"./VertexColor.glsl-C0HvtpG6.js";function c(c){let l=new t,{vertex:u,fragment:d,varyings:f}=l;return l.fragment.include(r,c),l.include(o),l.include(s,c),l.include(a,c),i(u,c),l.attributes.add(`position`,`vec3`),f.add(`vpos`,`vec3`,{invariant:!0}),u.main.add(e`vpos = position;
forwardVertexColor();
gl_Position = transformPosition(proj, view, vpos);`),c.hasVertexColors||d.uniforms.add(new n(`constantColor`,e=>e.color)),d.main.add(e`
    discardBySlice(vpos);
    vec4 color = ${c.hasVertexColors?`vColor`:`constantColor`};
    outputColorHighlightOLID(applySlice(color, vpos), color.rgb);
  `),l}var l=Object.freeze(Object.defineProperty({__proto__:null,build:c},Symbol.toStringTag,{value:`Module`}));export{l as n,c as t};