import{e0 as a}from"./main-DZMdXZ8-.js";import{fromGeometryToGXGeometry as c,getSpatialReference as m}from"./jsonConverter-D8SxgGP4.js";function f(t,n={}){const{unit:o}=n;let e=c(t).calculateLength2D();const r=m(t);return e&&o&&r&&(e=a(e,r,o)),e}export{f as execute};
