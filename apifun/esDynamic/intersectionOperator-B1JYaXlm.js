import{b$ as f}from"./main-DeRV24Di.js";import{o as n,u as i}from"./operatorIntersection-BOlZAGtj.js";import{fromGeometry as G,toGeometry as m,fromGeometryToGXGeometry as a,fromGeometries as c}from"./jsonConverter-CQl8IXeu.js";function u(t,r){const o=G(t),e=o.getSpatialReference();return m(n(o.getGeometry(),a(r),e),e)}function p(t,r){const[o,e]=c(t);return i(o,a(r),e,7).map(s=>m(s,e)).filter(f)}export{u as execute,p as executeMany};
