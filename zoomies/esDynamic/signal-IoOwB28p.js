import{aS as s,aQ as i,aR as u}from"./main-DFutu5rJ.js";class l{constructor(t,a){this._observable=new i,this._value=t,this._equalityFunction=a}get value(){return u(this._observable),this._value}set value(t){this._equalityFunction(t,this._value)||(this._value=t,this._observable.notify())}mutate(t){t(this._value),this._observable.notify()}}function o(e,t=s){return new l(e,t)}export{o as r};
