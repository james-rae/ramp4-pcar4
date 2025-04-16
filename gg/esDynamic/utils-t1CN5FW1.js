import{a7 as f,d4 as s}from"./main-DTtQVgOw.js";import{d as m}from"./enums-DxQQJdPW.js";import{e as d}from"./grouping-DiYC9SGX.js";function l(t){return s(t.frameDurations.reduce((r,n)=>r+n,0))}function _(t){const{width:r,height:n}=t,o=t.frameDurations.reverse(),a=e=>{const i=t.frameDurations.length-1-e;return t.getFrame(i)};return{frameCount:t.frameCount,duration:t.duration,frameDurations:o,getFrame:a,width:r,height:n}}function F(t,r){const{width:n,height:o,getFrame:a}=t,e=r/t.duration,i=t.frameDurations.map(u=>s(u*e));return{frameCount:t.frameCount,duration:t.duration,frameDurations:i,getFrame:a,width:n,height:o}}function p(t,r){const{width:n,height:o,getFrame:a}=t,e=t.frameDurations.slice(),i=e.shift();return e.unshift(s(i+r)),{frameCount:t.frameCount,duration:t.duration+r,frameDurations:e,getFrame:a,width:n,height:o}}function c(t,r){const{width:n,height:o,getFrame:a}=t,e=t.frameDurations.slice(),i=e.pop();return e.push(s(i+r)),{frameCount:t.frameCount,duration:t.duration+r,frameDurations:e,getFrame:a,width:n,height:o}}class g{constructor(r,n,o,a){this._animation=r,this._repeatType=o,this._onFrameData=a,this._direction=1,this._currentFrame=0,this.timeToFrame=this._animation.frameDurations[this._currentFrame];let e=0;for(;n>e;)e+=this.timeToFrame,this.nextFrame();const i=this._animation.getFrame(this._currentFrame);this._onFrameData(i)}nextFrame(){if(this._currentFrame+=this._direction,this._direction>0){if(this._currentFrame===this._animation.frameDurations.length)switch(this._repeatType){case m.None:this._currentFrame-=this._direction;break;case m.Loop:this._currentFrame=0;break;case m.Oscillate:this._currentFrame-=this._direction,this._direction=-1}}else if(this._currentFrame===-1)switch(this._repeatType){case m.None:this._currentFrame-=this._direction;break;case m.Loop:this._currentFrame=this._animation.frameDurations.length-1;break;case m.Oscillate:this._currentFrame-=this._direction,this._direction=1}this.timeToFrame=this._animation.frameDurations[this._currentFrame];const r=this._animation.getFrame(this._currentFrame);this._onFrameData(r)}}function D(t,r,n,o){let a,{repeatType:e}=r;if(e==null&&(e=m.Loop),r.reverseAnimation===!0&&(t=_(t)),r.duration!=null&&(t=F(t,s(1e3*r.duration))),r.repeatDelay!=null){const i=1e3*r.repeatDelay;e===m.Loop?t=c(t,s(i)):e===m.Oscillate&&(t=p(c(t,s(i/2)),s(i/2)))}if(r.startTimeOffset!=null)a=s(1e3*r.startTimeOffset);else if(r.randomizeStartTime!=null){const i=r.randomizeStartSeed!=null?r.randomizeStartSeed:82749913,u=d(n,i);a=s(u*l(t))}else a=s(0);return new g(t,a,e,o)}function T(t,r,n,o){const a=r.playAnimation==null||r.playAnimation,e=D(t,r,n,o);let i,u=e.timeToFrame;function h(){i=a?setTimeout(()=>{e.nextFrame(),u=e.timeToFrame,h()},u):void 0}return h(),f(()=>a&&clearTimeout(i))}export{T as c};
