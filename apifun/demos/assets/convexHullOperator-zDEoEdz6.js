import{M as i,v as p,_ as s}from"./operatorConvexHull-b73htj3c.js";import{fromGeometry as c,toGeometry as r,fromGeometries as f,fromGeometryToGXGeometry as u}from"./jsonConverter-BWKGkJid.js";import"./SimpleGeometryCursor-B92kdZ15.js";import"./Transformation2D-DZfKTQC6.js";import"./ProjectionTransformation-BpVP6XuM.js";import"./main-CcTJZah4.js";import"./preload-helper-ExcqyqRp.js";function B(e){const o=c(e);return r(i(o.getGeometry()),o.getSpatialReference())}function C(e,o={}){const{merge:t=!1}=o,[m,n]=f(e);return p(m,t).map(a=>r(a,n))}function P(e){return s(u(e))}export{B as execute,C as executeMany,P as isConvex};
