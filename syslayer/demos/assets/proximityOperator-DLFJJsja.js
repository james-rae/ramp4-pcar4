import"./Transformation2D-DZfKTQC6.js";import"./ProjectionTransformation-BzHRnDvu.js";import{e3 as d,e4 as y}from"./main-D_jCcUNd.js";import"./jsonConverter-Bep-Se61.js";import{m as N}from"./OperatorProximity-CFkj3oZ6.js";import{toPoint as S,getSpatialReference as c,fromGeometry as p,fromPoint as u}from"./apiConverter-CNRXrEwL.js";function g(e,i,r=!1){const n=S(e.m_coordinate,c(i)),o=e.m_distance,t=e.isEmpty(),s=e.m_bRightSide;return{coordinate:n,distance:o,isEmpty:t,...r&&{isRightSide:s},vertexIndex:e.m_vertexIndex}}const m=new N;function _(e,i,r={}){const{calculateLeftRightSide:n=!1,testPolygonInterior:o=!0,unit:t}=r,s=m.getNearestCoordinate(p(e),u(i).getXY(),o,n);if(t&&s.m_distance){const a=c(e);s.m_distance=d(s.m_distance,a,t)}return g(s,e,n)}function f(e,i,r={}){const{unit:n}=r,o=m.getNearestVertex(p(e),u(i).getXY());if(n&&o.m_distance){const t=c(e);o.m_distance=d(o.m_distance,t,n)}return g(o,e)}function l(e,i,r,n,o={}){const{unit:t}=o,s=c(e);return t&&r&&(r=y(r,t,s)),m.getNearestVertices(p(e),u(i).getXY(),r,n).map(a=>(t&&a.m_distance&&(a.m_distance=d(a.m_distance,s,t)),g(a,e)))}const x=m.supportsCurves(),j=Object.freeze(Object.defineProperty({__proto__:null,getNearestCoordinate:_,getNearestVertex:f,getNearestVertices:l,supportsCurves:x},Symbol.toStringTag,{value:"Module"})),I=Object.freeze(Object.defineProperty({__proto__:null,getNearestCoordinate:_,getNearestVertex:f,getNearestVertices:l,supportsCurves:x},Symbol.toStringTag,{value:"Module"}));export{j as g,I as p};
