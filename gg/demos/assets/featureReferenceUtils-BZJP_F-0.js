import"./vec32-zaCIH5IA.js";import"./main-BnINupoD.js";import{b as i}from"./sphere-PuK9bi4-.js";import"./IntersectorInterfaces-BgX4KEwK.js";import"./mat4-pV3Yd6bK.js";import"./boundedPlane-D2JhHQSD.js";function y(t,l){return e(t)===e(l)}function e(t){if(t==null)return null;const l=t.layer!=null?t.layer.id:"";let r=null;return r=t.objectId!=null?t.objectId:t.layer!=null&&"objectIdField"in t.layer&&t.layer.objectIdField!=null&&t.attributes!=null?t.attributes[t.layer.objectIdField]:t.uid,r==null?null:`o-${l}-${r}`}const j={json:{write:{writer:u,target:{"feature.layerId":{type:[Number,String],isRequired:!0},"feature.objectId":{type:[Number,String],isRequired:!0}}},origins:{"web-scene":{read:n}}}};function u(t,l){t?.layer?.objectIdField!=null&&t.attributes!=null&&(l.feature={layerId:t.layer.id,objectId:t.attributes[t.layer.objectIdField]})}function n(t){if(t.layerId!=null&&t.objectId!=null)return{uid:null,layer:{id:t.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:t.objectId}}}i();export{j as b,y as c};
