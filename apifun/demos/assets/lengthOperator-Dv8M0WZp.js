import{e3 as i}from"./main-CcTJZah4.js";import{fromGeometryToGXGeometry as a,getSpatialReference as c}from"./jsonConverter-BWKGkJid.js";import"./preload-helper-ExcqyqRp.js";import"./Transformation2D-DZfKTQC6.js";import"./ProjectionTransformation-BpVP6XuM.js";import"./SimpleGeometryCursor-B92kdZ15.js";function G(t,m={}){const{unit:o}=m;let e=a(t).calculateLength2D();const r=c(t);return e&&o&&r&&(e=i(e,r,o)),e}export{G as execute};
