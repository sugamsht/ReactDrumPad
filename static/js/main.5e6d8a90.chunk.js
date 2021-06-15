(this.webpackJsonpdrum_machine=this.webpackJsonpdrum_machine||[]).push([[0],{15:function(e,r,s){},16:function(e,r,s){},18:function(e,r,s){"use strict";s.r(r);var t=s(1),o=s.n(t),a=s(6),c=s.n(a),n=(s(15),s(3)),i=(s(16),s(5)),d=s(0);function p(e){var r=e.power?{color:"#3BFF14"}:{color:"red"};return Object(d.jsxs)("div",{className:"Controls",children:[Object(d.jsx)("div",{className:"Controls__power",onClick:function(){e.onPowerChange()},children:Object(d.jsx)(i.a,{style:r})}),Object(d.jsxs)("div",{className:"Controls__volume",children:[Object(d.jsx)("input",{type:"range",value:e.volume,onInput:function(r){e.onVolumeChange(r.target.value)}}),Object(d.jsx)(i.b,{})]})]})}function l(e){return Object(d.jsxs)("div",{className:"Controls2",children:[Object(d.jsxs)("div",{className:"Controls2__bank",children:[Object(d.jsx)("span",{children:"BANK"}),Object(d.jsxs)("label",{className:"Controls2__switch",children:[Object(d.jsx)("input",{type:"checkbox",onChange:function(){e.onBankChange()}}),Object(d.jsx)("span",{className:"Controls2__switch__slider"})]})]}),Object(d.jsx)("div",{id:"display",className:"Controls2__display",children:Object(d.jsx)("span",{className:"Controls2__display__text",children:e.display})})]})}var m=s(7),u=s(8),h=s(2),y=s(10),k=s(9),g=function(e){Object(y.a)(s,e);var r=Object(k.a)(s);function s(e){var t;return Object(m.a)(this,s),(t=r.call(this,e)).playAudio=t.playAudio.bind(Object(h.a)(t)),t.handleKeyPress=t.handleKeyPress.bind(Object(h.a)(t)),t.changeColor=t.changeColor.bind(Object(h.a)(t)),t}return Object(u.a)(s,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyPress)}},{key:"playAudio",value:function(){if(this.props.power){var e=document.getElementById(this.props.keyTrigger);e.volume=this.props.clipVol/100,e.currentTime=0,e.play(),this.props.updateDisplay(this.props.clipId),this.changeColor()}}},{key:"handleKeyPress",value:function(e){this.props.power&&e.keyCode===this.props.keyCode&&this.playAudio()}},{key:"changeColor",value:function(){var e=document.getElementById(this.props.clipId);e.style.background=this.props.clipColor,e.style.boxShadow="inset 1px 1px 1px #000000",setTimeout((function(){e.style.background="white",e.style.boxShadow="inset 0 -0.5em 0 -0.35em rgba(0, 0, 0, 0.17)"}),800)}},{key:"render",value:function(){return Object(d.jsxs)("div",{id:this.props.clipId,className:"DrumPad drum-pad",onClick:this.playAudio,children:[Object(d.jsx)("span",{className:"DrumPad__text",children:this.props.keyTrigger}),Object(d.jsx)("audio",{id:this.props.keyTrigger,className:"DrumPad__audio clip",src:this.props.clipUrl})]})}}]),s}(o.a.Component),j=[{keyCode:81,keyTrigger:"Q",id:"Heater-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{keyCode:87,keyTrigger:"W",id:"Heater-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{keyCode:69,keyTrigger:"E",id:"Heater-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{keyCode:65,keyTrigger:"A",id:"Heater-4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{keyCode:83,keyTrigger:"S",id:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{keyCode:68,keyTrigger:"D",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{keyCode:90,keyTrigger:"Z",id:"Kick-n'-Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyCode:88,keyTrigger:"X",id:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}],C=[{keyCode:81,keyTrigger:"Q",id:"Chord-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"},{keyCode:87,keyTrigger:"W",id:"Chord-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"},{keyCode:69,keyTrigger:"E",id:"Chord-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"},{keyCode:65,keyTrigger:"A",id:"Shaker",url:"https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"},{keyCode:83,keyTrigger:"S",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"},{keyCode:68,keyTrigger:"D",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"},{keyCode:90,keyTrigger:"Z",id:"Punchy-Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"},{keyCode:88,keyTrigger:"X",id:"Side-Stick",url:"https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Snare",url:"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"}],b=["#FE2204","#FFA500","#FECE00","#B5DA01","#1DA50D","#376162","#4F6E95","#7C3BA5","#C199D3"];function f(e){var r=e.currentBank.map((function(r,s){return Object(d.jsx)(g,{keyCode:r.keyCode,keyTrigger:r.keyTrigger,clipId:r.id,clipUrl:r.url,clipColor:b[s],clipVol:e.clipVol,power:e.power,updateDisplay:e.updateDisplay})}));return Object(d.jsx)("div",{className:"PadBank",children:r})}function O(e){return Object(d.jsx)("div",{className:"Logo",children:Object(d.jsx)("span",{className:"Logo--rainbow-text",children:e.name})})}function _(){var e=Object(t.useState)(!0),r=Object(n.a)(e,2),s=r[0],o=r[1],a=Object(t.useState)(""),c=Object(n.a)(a,2),i=c[0],m=c[1],u=Object(t.useState)(j),h=Object(n.a)(u,2),y=h[0],k=h[1],g=Object(t.useState)(50),b=Object(n.a)(g,2),_=b[0],v=b[1];return Object(d.jsxs)("div",{id:"drum-machine",className:"App",children:[Object(d.jsx)(O,{name:"Drum Machine"}),Object(d.jsx)(p,{power:s,volume:_,onPowerChange:function(){o((function(e){return!e}))},onVolumeChange:function(e){v(e)}}),Object(d.jsx)(l,{onBankChange:function(){k(y===j?C:j),console.log(y)},display:i}),Object(d.jsx)(f,{power:s,updateDisplay:function(e){s&&(m(e),setTimeout((function(){m("")}),1500))},currentBank:y,clipVol:_})]})}var v=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,19)).then((function(r){var s=r.getCLS,t=r.getFID,o=r.getFCP,a=r.getLCP,c=r.getTTFB;s(e),t(e),o(e),a(e),c(e)}))};c.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(_,{})}),document.getElementById("root")),v()}},[[18,1,2]]]);
//# sourceMappingURL=main.5e6d8a90.chunk.js.map