function i(n){const o=n.layer;return"floorInfo"in o&&o.floorInfo?.floorField&&"floors"in n.view?l(n.view.floors,o.floorInfo.floorField):null}function e(n,o){return"floorInfo"in o&&o.floorInfo?.floorField?l(n,o.floorInfo.floorField):null}function l(n,o){if(!n?.length)return null;const r=n.filter(f=>f!=="").map(f=>`'${f}'`);return r.push("''"),`${o} IN (${r.join(",")}) OR ${o} IS NULL`}export{e as n,i as o};
