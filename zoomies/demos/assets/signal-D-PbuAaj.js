import{aU as a,aS as i,aT as u}from"./main-vIJpOdvB.js";class l{constructor(t,s){this._observable=new i,this._value=t,this._equalityFunction=s}get value(){return u(this._observable),this._value}set value(t){this._equalityFunction(t,this._value)||(this._value=t,this._observable.notify())}mutate(t){t(this._value),this._observable.notify()}}function r(e,t=a){return new l(e,t)}export{r};
