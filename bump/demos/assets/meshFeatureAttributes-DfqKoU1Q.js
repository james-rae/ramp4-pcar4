import{bx as o}from"./main-CdIhtOSF.js";import{N as r}from"./MeshTransform-DEh-N832.js";function l(t,a,i=n){return new o({x:t[i.originX],y:t[i.originY],z:t[i.originZ],spatialReference:a})}function c(t,a=n){return new r({translation:[t[a.translationX],-t[a.translationZ],t[a.translationY]],rotationAxis:[t[a.rotationX],-t[a.rotationZ],t[a.rotationY]],rotationAngle:t[a.rotationDeg],scale:[t[a.scaleX],t[a.scaleZ],t[a.scaleY]]})}const n={originX:"originX",originY:"originY",originZ:"originZ",translationX:"translationX",translationY:"translationY",translationZ:"translationZ",scaleX:"scaleX",scaleY:"scaleY",scaleZ:"scaleZ",rotationX:"rotationX",rotationY:"rotationY",rotationZ:"rotationZ",rotationDeg:"rotationDeg"};export{c as i,l as n};
