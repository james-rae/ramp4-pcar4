import{k as y,a_ as u,A as m,fW as T,q as t,bl as c,u as n,C as d,aY as p,z as r,v as o,br as I}from"./main-CUxU9bWS.js";const h=y()({esriTimeUnitsMilliseconds:"milliseconds",esriTimeUnitsSeconds:"seconds",esriTimeUnitsMinutes:"minutes",esriTimeUnitsHours:"hours",esriTimeUnitsDays:"days",esriTimeUnitsWeeks:"weeks",esriTimeUnitsMonths:"months",esriTimeUnitsYears:"years",esriTimeUnitsDecades:"decades",esriTimeUnitsCenturies:"centuries",esriTimeUnitsUnknown:void 0});let s=class extends u(m){constructor(l){super(l),this.unit="milliseconds",this.value=0}toMilliseconds(){return T(this.value,this.unit,"milliseconds")}};t([c(h,{nonNullable:!0})],s.prototype,"unit",void 0),t([n({type:Number,json:{write:!0},nonNullable:!0})],s.prototype,"value",void 0),s=t([d("esri.time.TimeInterval")],s);const v=s;function a(l,e){return v.fromJSON({value:l,unit:e})}let i=class extends u(m){constructor(l){super(l),this.cumulative=!1,this.endField=null,this.fullTimeExtent=null,this.hasLiveData=!1,this.interval=null,this.startField=null,this.timeZone=null,this.trackIdField=null,this.useTime=!0,this.stops=null}readFullTimeExtent(l,e){return e.timeExtent&&Array.isArray(e.timeExtent)&&e.timeExtent.length===2?p.fromArray(e.timeExtent):null}writeFullTimeExtent(l,e){l?.start!=null&&l.end!=null?e.timeExtent=l.toArray():e.timeExtent=null}readInterval(l,e){return e.timeInterval&&e.timeIntervalUnits?a(e.timeInterval,e.timeIntervalUnits):e.defaultTimeInterval&&e.defaultTimeIntervalUnits?a(e.defaultTimeInterval,e.defaultTimeIntervalUnits):null}writeInterval(l,e){e.timeInterval=l?.toJSON().value??null,e.timeIntervalUnits=l?.toJSON().unit??null}};t([n({type:Boolean,json:{name:"exportOptions.timeDataCumulative",write:!0}})],i.prototype,"cumulative",void 0),t([n({type:String,json:{name:"endTimeField",write:{enabled:!0,allowNull:!0}}})],i.prototype,"endField",void 0),t([n({type:p,json:{write:{enabled:!0,allowNull:!0}}})],i.prototype,"fullTimeExtent",void 0),t([r("fullTimeExtent",["timeExtent"])],i.prototype,"readFullTimeExtent",null),t([o("fullTimeExtent")],i.prototype,"writeFullTimeExtent",null),t([n({type:Boolean,json:{write:!0}})],i.prototype,"hasLiveData",void 0),t([n({type:v,json:{write:{enabled:!0,allowNull:!0}}})],i.prototype,"interval",void 0),t([r("interval",["timeInterval","timeIntervalUnits","defaultTimeInterval","defaultTimeIntervalUnits"])],i.prototype,"readInterval",null),t([o("interval")],i.prototype,"writeInterval",null),t([n({type:String,json:{name:"startTimeField",write:{enabled:!0,allowNull:!0}}})],i.prototype,"startField",void 0),t([n(I("timeReference",!0))],i.prototype,"timeZone",void 0),t([n({type:String,json:{write:{enabled:!0,allowNull:!0}}})],i.prototype,"trackIdField",void 0),t([n({type:Boolean,json:{name:"exportOptions.useTime",write:!0}})],i.prototype,"useTime",void 0),t([n({type:[Date],json:{read:!1}})],i.prototype,"stops",void 0),i=t([d("esri.layers.support.TimeInfo")],i);const x=i;export{x as d,h as e,v as l};