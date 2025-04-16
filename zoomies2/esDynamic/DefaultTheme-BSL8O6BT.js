import{ar as R,a8 as i,as as c,at as n,r,Q as m,au as u}from"./Theme-P78qssDo.js";function o(g,s,a,d){g.set(s,a.get(d)),a.on(d,p=>{g.set(s,p)})}class h extends R{setupDefaultRules(){super.setupDefaultRules();const s=this._root.language,a=this._root.interfaceColors,d=this._root.horizontalLayout,p=this._root.verticalLayout,e=this.rule.bind(this);e("InterfaceColors").setAll({stroke:i.fromHex(15066597),fill:i.fromHex(15987699),primaryButton:i.fromHex(6788316),primaryButtonHover:i.fromHex(6779356),primaryButtonDown:i.fromHex(6872182),primaryButtonActive:i.fromHex(6872182),primaryButtonDisabled:i.fromHex(14342874),primaryButtonTextDisabled:i.fromHex(16777215),primaryButtonText:i.fromHex(16777215),primaryButtonStroke:i.fromHex(16777215),secondaryButton:i.fromHex(14277081),secondaryButtonHover:i.fromHex(10724259),secondaryButtonDown:i.fromHex(9276813),secondaryButtonActive:i.fromHex(15132390),secondaryButtonText:i.fromHex(0),secondaryButtonStroke:i.fromHex(16777215),grid:i.fromHex(0),background:i.fromHex(16777215),alternativeBackground:i.fromHex(0),text:i.fromHex(0),alternativeText:i.fromHex(16777215),disabled:i.fromHex(11382189),positive:i.fromHex(5288704),negative:i.fromHex(11730944)});{const t=e("ColorSet");t.setAll({passOptions:{hue:.05,saturation:0,lightness:0},colors:[i.fromHex(6797276)],step:1,reuse:!1,startIndex:0}),t.setPrivate("currentStep",0),t.setPrivate("currentPass",0)}e("Entity").setAll({stateAnimationDuration:0,stateAnimationEasing:c(u)}),e("Component").setAll({interpolationDuration:0,interpolationEasing:c(u)}),e("Sprite").setAll({visible:!0,scale:1,opacity:1,rotation:0,position:"relative",tooltipX:n,tooltipY:n,tooltipPosition:"fixed",isMeasured:!0}),e("Sprite").states.create("default",{visible:!0,opacity:1}),e("Container").setAll({interactiveChildren:!0,setStateOnChildren:!1}),e("Graphics").setAll({strokeWidth:1}),e("Chart").setAll({width:r,height:r,interactiveChildren:!1}),e("ZoomableContainer").setAll({width:r,height:r,wheelable:!0,pinchZoom:!0,maxZoomLevel:32,minZoomLevel:1,zoomStep:2,animationEasing:c(u),animationDuration:600,maxPanOut:.4}),e("Sprite",["horizontal","center"]).setAll({centerX:n,x:n}),e("Sprite",["vertical","center"]).setAll({centerY:n,y:n}),e("Container",["horizontal","layout"]).setAll({layout:d}),e("Container",["vertical","layout"]).setAll({layout:p}),e("Pattern").setAll({repetition:"repeat",width:50,height:50,rotation:0,fillOpacity:1}),e("LinePattern").setAll({gap:6,colorOpacity:1,width:49,height:49}),e("RectanglePattern").setAll({gap:6,checkered:!1,centered:!0,maxWidth:5,maxHeight:5,width:48,height:48,strokeWidth:0}),e("CirclePattern").setAll({gap:5,checkered:!1,centered:!1,radius:3,strokeWidth:0,width:45,height:45}),e("GrainPattern").setAll({width:200,height:200,colors:[i.fromHex(0)],size:1,horizontalGap:0,verticalGap:0,density:1,minOpacity:0,maxOpacity:.2});{const t=e("PatternSet");t.setAll({step:1}),o(t,"color",a,"stroke")}e("LinearGradient").setAll({rotation:90}),e("Legend").setAll({fillField:"fill",strokeField:"stroke",nameField:"name",layout:m.new(this._root,{}),layer:30,clickTarget:"itemContainer"}),e("Container",["legend","item","itemcontainer"]).setAll({paddingLeft:5,paddingRight:5,paddingBottom:5,paddingTop:5,layout:d,setStateOnChildren:!0,interactiveChildren:!1,ariaChecked:!0,focusable:!0,ariaLabel:s.translate("Press ENTER to toggle"),role:"checkbox"});{const t=e("Rectangle",["legend","item","background"]);t.setAll({fillOpacity:0}),o(t,"fill",a,"background")}e("Container",["legend","marker"]).setAll({setStateOnChildren:!0,centerY:n,paddingLeft:0,paddingRight:0,paddingBottom:0,paddingTop:0,width:18,height:18}),e("RoundedRectangle",["legend","marker","rectangle"]).setAll({width:r,height:r,cornerRadiusBL:3,cornerRadiusTL:3,cornerRadiusBR:3,cornerRadiusTR:3});{const t=e("RoundedRectangle",["legend","marker","rectangle"]).states.create("disabled",{});o(t,"fill",a,"disabled"),o(t,"stroke",a,"disabled")}e("Label",["legend","label"]).setAll({centerY:n,marginLeft:5,paddingRight:0,paddingLeft:0,paddingTop:0,paddingBottom:0,populateText:!0}),o(e("Label",["legend","label"]).states.create("disabled",{}),"fill",a,"disabled"),e("Label",["legend","value","label"]).setAll({centerY:n,marginLeft:5,paddingRight:0,paddingLeft:0,paddingTop:0,paddingBottom:0,width:50,centerX:r,populateText:!0}),o(e("Label",["legend","value","label"]).states.create("disabled",{}),"fill",a,"disabled"),e("HeatLegend").setAll({stepCount:1}),e("RoundedRectangle",["heatlegend","marker"]).setAll({cornerRadiusTR:0,cornerRadiusBR:0,cornerRadiusTL:0,cornerRadiusBL:0}),e("RoundedRectangle",["vertical","heatlegend","marker"]).setAll({height:r,width:15}),e("RoundedRectangle",["horizontal","heatlegend","marker"]).setAll({width:r,height:15}),e("HeatLegend",["vertical"]).setAll({height:r}),e("HeatLegend",["horizontal"]).setAll({width:r}),e("Label",["heatlegend","start"]).setAll({paddingLeft:5,paddingRight:5,paddingTop:5,paddingBottom:5}),e("Label",["heatlegend","end"]).setAll({paddingLeft:5,paddingRight:5,paddingTop:5,paddingBottom:5});{const t=e("Label");t.setAll({paddingTop:8,paddingBottom:8,paddingLeft:10,paddingRight:10,fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',fontSize:"1em",populateText:!1}),o(t,"fill",a,"text")}e("RadialLabel").setAll({textType:"regular",centerY:n,centerX:n,inside:!1,radius:0,baseRadius:r,orientation:"auto",textAlign:"center"}),e("EditableLabel").setAll({editOn:"click",themeTags:["editablelabel"],multiLine:!0}),e("RoundedRectangle",["editablelabel","background"]).setAll({fillOpacity:0,fill:i.fromHex(0),cornerRadiusBL:3,cornerRadiusBR:3,cornerRadiusTL:3,cornerRadiusTR:3,strokeOpacity:0,stroke:i.fromHex(0)}),e("RoundedRectangle",["editablelabel","background"]).states.create("active",{strokeOpacity:.2}),e("RoundedRectangle").setAll({cornerRadiusTL:8,cornerRadiusBL:8,cornerRadiusTR:8,cornerRadiusBR:8}),e("PointedRectangle").setAll({pointerBaseWidth:15,pointerLength:10,cornerRadius:8}),e("Slice").setAll({shiftRadius:0,dRadius:0,dInnerRadius:0});{const t=e("Tick");t.setAll({strokeOpacity:.15,isMeasured:!1,length:4.5,position:"absolute",crisp:!0}),o(t,"stroke",a,"grid")}e("Bullet").setAll({locationX:.5,locationY:.5}),e("Tooltip").setAll({position:"absolute",getFillFromSprite:!0,getStrokeFromSprite:!1,autoTextColor:!0,paddingTop:9,paddingBottom:8,paddingLeft:10,paddingRight:10,marginBottom:5,pointerOrientation:"vertical",centerX:n,centerY:n,animationEasing:c(u),exportable:!1}),e("Polygon").setAll({animationEasing:c(u)}),e("PointedRectangle",["tooltip","background"]).setAll({strokeOpacity:.9,cornerRadius:4,pointerLength:4,pointerBaseWidth:8,fillOpacity:.9,stroke:i.fromHex(16777215)});{const t=e("Label",["tooltip"]);t.setAll({role:"tooltip",populateText:!0,paddingRight:0,paddingTop:0,paddingLeft:0,paddingBottom:0}),o(t,"fill",a,"alternativeText")}e("Button").setAll({paddingTop:8,paddingBottom:8,paddingLeft:10,paddingRight:10,interactive:!0,layout:d,interactiveChildren:!1,setStateOnChildren:!0,focusable:!0}),e("Button").states.create("hover",{}),e("Button").states.create("down",{stateAnimationDuration:0}),e("Button").states.create("active",{}),e("Button").states.create("disabled",{forceInactive:!0});{const t=e("RoundedRectangle",["button","background"]);o(t,"fill",a,"primaryButton"),o(t,"stroke",a,"primaryButtonStroke")}o(e("RoundedRectangle",["button","background"]).states.create("hover",{}),"fill",a,"primaryButtonHover"),o(e("RoundedRectangle",["button","background"]).states.create("down",{stateAnimationDuration:0}),"fill",a,"primaryButtonDown"),o(e("RoundedRectangle",["button","background"]).states.create("active",{}),"fill",a,"primaryButtonActive"),o(e("RoundedRectangle",["button","background"]).states.create("disabled",{}),"fill",a,"primaryButtonDisabled"),o(e("Graphics",["button","icon"]).states.create("disabled",{}),"fill",a,"primaryButtonTextDisabled"),o(e("Label",["button"]).states.create("disabled",{}),"fill",a,"primaryButtonTextDisabled");{const t=e("Graphics",["button","icon"]);t.setAll({forceInactive:!0}),o(t,"stroke",a,"primaryButtonText")}o(e("Label",["button"]),"fill",a,"primaryButtonText"),e("Button",["zoom"]).setAll({paddingTop:18,paddingBottom:18,paddingLeft:12,paddingRight:12,centerX:46,centerY:-10,y:0,x:r,role:"button",ariaLabel:s.translate("Zoom Out"),layer:30});{const t=e("RoundedRectangle",["background","button","zoom"]);t.setAll({cornerRadiusBL:40,cornerRadiusBR:40,cornerRadiusTL:40,cornerRadiusTR:40}),o(t,"fill",a,"primaryButton")}o(e("RoundedRectangle",["background","button","zoom"]).states.create("hover",{}),"fill",a,"primaryButtonHover"),o(e("RoundedRectangle",["background","button","zoom"]).states.create("down",{stateAnimationDuration:0}),"fill",a,"primaryButtonDown");{const t=e("Graphics",["icon","button","zoom"]);t.setAll({crisp:!0,strokeOpacity:.7,draw:l=>{l.moveTo(0,0),l.lineTo(12,0)}}),o(t,"stroke",a,"primaryButtonText")}e("Button",["resize"]).setAll({paddingTop:9,paddingBottom:9,paddingLeft:13,paddingRight:13,draggable:!0,centerX:n,centerY:n,position:"absolute",role:"slider",ariaValueMin:"0",ariaValueMax:"100",ariaLabel:s.translate("Use up and down arrows to move selection")});{const t=e("RoundedRectangle",["background","resize","button"]);t.setAll({cornerRadiusBL:40,cornerRadiusBR:40,cornerRadiusTL:40,cornerRadiusTR:40}),o(t,"fill",a,"secondaryButton"),o(t,"stroke",a,"secondaryButtonStroke")}o(e("RoundedRectangle",["background","resize","button"]).states.create("hover",{}),"fill",a,"secondaryButtonHover"),o(e("RoundedRectangle",["background","resize","button"]).states.create("down",{stateAnimationDuration:0}),"fill",a,"secondaryButtonDown");{const t=e("Graphics",["resize","button","icon"]);t.setAll({interactive:!1,crisp:!0,strokeOpacity:.5,draw:l=>{l.moveTo(0,.5),l.lineTo(0,12.5),l.moveTo(4,.5),l.lineTo(4,12.5)}}),o(t,"stroke",a,"secondaryButtonText")}e("Button",["resize","vertical"]).setAll({rotation:90,cursorOverStyle:"ns-resize"}),e("Button",["resize","horizontal"]).setAll({cursorOverStyle:"ew-resize"}),e("Button",["play"]).setAll({paddingTop:13,paddingBottom:13,paddingLeft:14,paddingRight:14,ariaLabel:s.translate("Play"),toggleKey:"active"});{const t=e("RoundedRectangle",["play","background"]);t.setAll({strokeOpacity:.5,cornerRadiusBL:100,cornerRadiusBR:100,cornerRadiusTL:100,cornerRadiusTR:100}),o(t,"fill",a,"primaryButton")}{const t=e("Graphics",["play","icon"]);t.setAll({stateAnimationDuration:0,dx:1,draw:l=>{l.moveTo(0,-5),l.lineTo(8,0),l.lineTo(0,5),l.lineTo(0,-5)}}),o(t,"fill",a,"primaryButtonText")}e("Graphics",["play","icon"]).states.create("default",{stateAnimationDuration:0}),e("Graphics",["play","icon"]).states.create("active",{stateAnimationDuration:0,draw:t=>{t.moveTo(-4,-5),t.lineTo(-1,-5),t.lineTo(-1,5),t.lineTo(-4,5),t.lineTo(-4,-5),t.moveTo(4,-5),t.lineTo(1,-5),t.lineTo(1,5),t.lineTo(4,5),t.lineTo(4,-5)}}),e("Button",["switch"]).setAll({paddingTop:4,paddingBottom:4,paddingLeft:4,paddingRight:4,ariaLabel:s.translate("Press ENTER to toggle"),toggleKey:"active",width:40,height:24,layout:null});{const t=e("RoundedRectangle",["switch","background"]);t.setAll({strokeOpacity:.5,cornerRadiusBL:100,cornerRadiusBR:100,cornerRadiusTL:100,cornerRadiusTR:100}),o(t,"fill",a,"primaryButton")}{const t=e("Circle",["switch","icon"]);t.setAll({radius:8,centerY:0,centerX:0,dx:0}),o(t,"fill",a,"primaryButtonText")}e("Graphics",["switch","icon"]).states.create("active",{dx:16}),e("Scrollbar").setAll({start:0,end:1,layer:30,animationEasing:c(u)}),e("Scrollbar",["vertical"]).setAll({marginRight:13,marginLeft:13,minWidth:12,height:r}),e("Scrollbar",["horizontal"]).setAll({marginTop:13,marginBottom:13,minHeight:12,width:r}),this.rule("Button",["scrollbar"]).setAll({exportable:!1});{const t=e("RoundedRectangle",["scrollbar","main","background"]);t.setAll({cornerRadiusTL:8,cornerRadiusBL:8,cornerRadiusTR:8,cornerRadiusBR:8,fillOpacity:.8}),o(t,"fill",a,"fill")}{const t=e("RoundedRectangle",["scrollbar","thumb"]);t.setAll({role:"slider",ariaLive:"polite",position:"absolute",draggable:!0}),o(t,"fill",a,"secondaryButton")}o(e("RoundedRectangle",["scrollbar","thumb"]).states.create("hover",{}),"fill",a,"secondaryButtonHover"),o(e("RoundedRectangle",["scrollbar","thumb"]).states.create("down",{stateAnimationDuration:0}),"fill",a,"secondaryButtonDown"),e("RoundedRectangle",["scrollbar","thumb","vertical"]).setAll({x:n,width:r,centerX:n,ariaLabel:s.translate("Use up and down arrows to move selection")}),e("RoundedRectangle",["scrollbar","thumb","horizontal"]).setAll({y:n,centerY:n,height:r,ariaLabel:s.translate("Use left and right arrows to move selection")});{const t=e("PointedRectangle",["axis","tooltip","background"]);t.setAll({cornerRadius:0}),o(t,"fill",a,"alternativeBackground")}e("Label",["axis","tooltip"]).setAll({role:void 0}),e("Label",["axis","tooltip","y"]).setAll({textAlign:"right"}),e("Label",["axis","tooltip","y","opposite"]).setAll({textAlign:"left"}),e("Label",["axis","tooltip","x"]).setAll({textAlign:"center"}),e("Tooltip",["categoryaxis"]).setAll({labelText:"{category}"}),e("Star").setAll({spikes:5,innerRadius:5,radius:10}),e("Tooltip",["stock"]).setAll({paddingTop:6,paddingBottom:5,paddingLeft:7,paddingRight:7}),e("PointedRectangle",["tooltip","stock","axis"]).setAll({pointerLength:0,pointerBaseWidth:0,cornerRadius:3}),e("Label",["tooltip","stock"]).setAll({fontSize:"0.8em"}),e("SpriteResizer").setAll({rotationStep:10,isMeasured:!1}),e("Container",["resizer","grip"]).states.create("hover",{});{const t=e("RoundedRectangle",["resizer","grip"]);t.setAll({strokeOpacity:.7,strokeWidth:1,fillOpacity:1,width:12,height:12}),o(t,"fill",a,"background"),o(t,"stroke",a,"alternativeBackground")}{const t=e("RoundedRectangle",["resizer","grip","outline"]);t.setAll({strokeOpacity:0,fillOpacity:0,width:20,height:20}),t.states.create("hover",{fillOpacity:.3}),o(t,"fill",a,"alternativeBackground")}e("RoundedRectangle",["resizer","grip","left"]).setAll({cornerRadiusBL:0,cornerRadiusBR:0,cornerRadiusTL:0,cornerRadiusTR:0}),e("RoundedRectangle",["resizer","grip","right"]).setAll({cornerRadiusBL:0,cornerRadiusBR:0,cornerRadiusTL:0,cornerRadiusTR:0});{const t=e("Rectangle",["resizer","rectangle"]);t.setAll({strokeDasharray:[2,2],strokeOpacity:.5,strokeWidth:1}),o(t,"stroke",a,"alternativeBackground")}e("Graphics",["button","plus","icon"]).setAll({x:n,y:n,draw:t=>{t.moveTo(-4,0),t.lineTo(4,0),t.moveTo(0,-4),t.lineTo(0,4)}}),e("Graphics",["button","minus","icon"]).setAll({x:n,y:n,draw:t=>{t.moveTo(-4,0),t.lineTo(4,0)}}),e("Graphics",["button","home","icon"]).setAll({x:n,y:n,svgPath:"M 8 -1 L 6 -1 L 6 7 L 2 7 L 2 1 L -2 1 L -2 7 L -6 7 L -6 -1 L -8 -1 L 0 -9 L 8 -1 Z M 8 -1"}),e("Button",["zoomtools"]).setAll({marginTop:1,marginBottom:2}),e("ZoomTools").setAll({x:r,centerX:r,y:r,centerY:r,paddingRight:10,paddingBottom:10})}}export{o as l,h as s};
