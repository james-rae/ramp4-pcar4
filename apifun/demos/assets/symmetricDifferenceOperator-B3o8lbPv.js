import{c2 as O}from"./main-CcTJZah4.js";import{b as R,j as P,a as l,e as q,L as k}from"./Transformation2D-DZfKTQC6.js";import{n as y,w as I,aM as $,P as v,C as A}from"./ProjectionTransformation-BpVP6XuM.js";import"./jsonConverter-BWKGkJid.js";import{s as g,t as X}from"./SimpleGeometryCursor-B92kdZ15.js";import{getSpatialReference as b,toGeometry as C,fromSpatialReference as M,fromGeometry as d}from"./apiConverter-CAoEv1Jc.js";class Y{getOperatorType(){return 10003}supportsCurves(){return!0}accelerateGeometry(e,n,o){return!1}canAccelerateGeometry(e){return!1}executeMany(e,n,o,r){return new Z(e,n,o,r)}execute(e,n,o,r){const i=new g([e]),c=new g([n]),s=this.executeMany(i,c,o,r).next();return s||R("null output"),s}}function z(t,e,n,o){const r=t.getDimension(),i=e.getDimension();if(r!==i)return r>i?t:e;if(t.isEmpty())return e;if(e.isEmpty())return t;const c=new y,s=new y,u=new y;t.queryEnvelope(c),e.queryEnvelope(s),u.setCoords({env2D:c}),u.mergeEnvelope2D(s);const a=I(n,u,!0),f=t.getGeometryType(),p=e.getGeometryType();return f===l.enumPoint&&p===l.enumPoint?L(t,e,a):f===l.enumPoint&&p===l.enumMultiPoint?w(e,t,a):f===l.enumMultiPoint&&p===l.enumPoint?w(t,e,a):$(t,e,n,o)}function L(t,e,n,o){const r=v(n),i=r*r,c=t.getXY(),s=e.getXY(),u=new A({vd:t.getDescription()});return q.sqrDistance(c,s)>i&&(u.add(t),u.add(e)),u}function w(t,e,n,o){const r=t.getImpl().getAttributeStreamRef(0),i=t.getPointCount(),c=e.getXY(),s=t.createInstance(),u=v(n),a=new y;if(t.queryEnvelope(a),a.inflateCoords(u,u),a.contains(c)){const f=u*u;let p=!1;const h=k(i,!1);for(let m=0;m<i;m++){const T=r.read(2*m),j=r.read(2*m+1),x=T-c.x,G=j-c.y;x*x+G*G<=f&&(p=!0,h[m]=!0)}if(p)for(let m=0;m<i;m++)h[m]||s.addPoints(t,m,m+1);else s.addPoints(t,0,i),s.add(e)}else s.addPoints(t,0,i),s.add(e);return s}class Z extends X{constructor(e,n,o,r){super(),this.m_progressTracker=r,this.m_index=-1,this.m_inputGeoms=e,this.m_spatialReference=o,this.m_rightGeom=n.next(),this.m_bEmpty=!this.m_rightGeom,P(this.m_rightGeom)}tock(){return!0}getRank(){return 1}next(){if(this.m_bEmpty)return null;const e=this.m_inputGeoms.next();return e?(P(e),this.m_index=this.m_inputGeoms.getGeometryID(),z(e,this.m_rightGeom,this.m_spatialReference,this.m_progressTracker)):null}getGeometryID(){return this.m_index}}const _=new Y;function B(t,e,n){return _.execute(t,e,n,null)}function F(t,e,n){const o=_.executeMany(new g(t),new g([e]),n,null);return Array.from(o)}function H(){return _.supportsCurves()}function D(t,e){const n=b(t);return C(B(d(t),d(e),M(n)),n)}function E(t,e){const n=t.map(d),o=b(t);return F(n,d(e),M(o)).map(r=>C(r,o)).filter(O)}const S=H(),W=Object.freeze(Object.defineProperty({__proto__:null,execute:D,executeMany:E,supportsCurves:S},Symbol.toStringTag,{value:"Module"})),ee=Object.freeze(Object.defineProperty({__proto__:null,execute:D,executeMany:E,supportsCurves:S},Symbol.toStringTag,{value:"Module"}));export{W as i,ee as s};
