import{c2 as c}from"./main-D_jCcUNd.js";import{t as i,s as p}from"./SimpleGeometryCursor-B92kdZ15.js";import{j as f}from"./Transformation2D-DZfKTQC6.js";import{getSpatialReference as u,toGeometry as m,fromGeometry as a}from"./apiConverter-CNRXrEwL.js";import"./preload-helper-ExcqyqRp.js";import"./ProjectionTransformation-BzHRnDvu.js";import"./jsonConverter-Bep-Se61.js";class l{getOperatorType(){return 10303}supportsCurves(){return!0}accelerateGeometry(t,e,n){return!1}canAccelerateGeometry(t){return!1}executeMany(t,e,n){return new y(t,e,n)}execute(t,e,n){const o=t.clone();return o.applyTransformation(e),o}}class y extends i{constructor(t,e,n){super(),this.m_index=-1,this.m_transformation=e.clone(),this.m_inputGeometryCursor=t}next(){let t;if(t=this.m_inputGeometryCursor.next()){f(t),this.m_index=this.m_inputGeometryCursor.getGeometryID();const e=t.clone();return e.applyTransformation(this.m_transformation),e}return null}getGeometryID(){return this.m_index}tock(){return!0}getRank(){return 1}}const s=new l;function x(r,t){return s.execute(r,t,null)}function G(r,t){const e=s.executeMany(new p(r),t,null);return Array.from(e)}function h(){return s.supportsCurves()}function T(r,t){const e=u(r);return m(x(a(r),t.transform),e)}function $(r,t){const e=r.map(a),n=u(r);return G(e,t.transform).map(o=>m(o,n)).filter(c)}const k=h();export{T as execute,$ as executeMany,k as supportsCurves};
