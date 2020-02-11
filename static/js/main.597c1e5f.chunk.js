(this.webpackJsonpgamejam=this.webpackJsonpgamejam||[]).push([[0],{46:function(e,t,a){e.exports=a(79)},51:function(e,t,a){},52:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(34),c=a.n(r),o=(a(23),a(51),a(15)),m=a(16),u=a(5),s=(a(52),a(8)),i=a(14),p=a(35),d=a(85),h=function(e){e.players;var t=e.playerObjects,a=e.judgeIndex,r=e.parts,c=e.criteria,o=(e.judgeName,e.setGameState),m=e.gameState,i=e.handleRestartSound,h=Object(n.useState)(""),E=Object(u.a)(h,2),f=E[0],g=E[1],b=Object(n.useState)(""),M=Object(u.a)(b,2),B=M[0],j=M[1],S=Object(n.useState)(""),C=Object(u.a)(S,2),O=C[0],y=C[1];Object(n.useEffect)((function(){g(v()),j(N()),y(w(P,"/images/scenarios/")),i()}),[]);var P=new Array("RDE-001C.BMP","KFR-010B.BMP","GBR-505C.BMP","GLB-031C.BMP","CTD-012C.BMP","DZI-323C.BMP","ISLANDS.BMP","GBR-504C.BMP","KFR-011B.BMP","FUTURGAL.BMP","KFR-007B.BMP","EDW-147C.BMP","MCG-508C.BMP","RHT-013C.BMP","MCG-411C.BMP","LAL-017C.BMP","GREENSHP.BMP","GBR-515C.BMP","DRM-00~1.BMP","DLN-101C.BMP","BHB-069B.BMP","MCG-518C.BMP","DLA-006C.BMP","BEL-102C.BMP","CWL-004B.BMP","LAL-016C.BMP","GBR-538B.BMP","HANGAR.BMP","MCG-413C.BMP","EDW-066B.BMP","AMC-103C.BMP","JLQ-253C.BMP","LTF-015B.BMP","RHT-016C.BMP","KFR-015C.BMP","CYH-010B.BMP","DLA-008C.BMP","LAL-014C.BMP","CWL-006B.BMP","DLN-105C.BMP","HRD-052C.BMP","HJL-016C.BMP","CHN-003C.BMP","KFR-008B.BMP","AMC-020C.BMP","HJL-017C.BMP","RBP-002C.BMP","GBR-025C.BMP","RMO-011C.BMP","KFR-013B.BMP");function w(e,t){return"/GGJ_2020"+(t=t||"/images/")+e[Math.floor(Math.random()*e.length)]}var N=function(){return r?r[Math.floor(Math.random()*r.length)].Name:"Error"},v=function(){return c?c[Math.floor(Math.random()*c.length)].Name:"Error"};return l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",null,"Client: ",l.a.createElement("span",{className:"text-primary font-weight-bold"},t[a].name),"        ",l.a.createElement(d.a,{className:"btn-danger",onClick:function(){return g(v()),j(N()),void y(w(P,"/images/scenarios/"))}},"Remix Prompt")),l.a.createElement("img",{src:O,style:{maxHeight:"500px"},alt:"logo"}),l.a.createElement("h1",null,"I need a ",l.a.createElement("span",{className:"text-danger"},B)," that ",l.a.createElement("span",{className:"text-warning"},f),"."),l.a.createElement("div",null,l.a.createElement(s.b,{to:"/GGJ_2020/components"},l.a.createElement(d.a,{onClick:function(){return function(){console.log("clicked");var e="I need a ".concat(B," that ").concat(f);o(Object(p.a)({},m,{prompt:e})),console.log(t)}()}},"Start Bidding"))))},E=a(80),f=a(83),g=a(81),b=a(39),M=new Array("STATION.BMP","TEMPLE.BMP","ASTEROID.BMP");var B=function(e){var t,a,n=e.setNameInput,r=e.nameInput,c=e.handleNameSubmit,o=(e.playerNames,e.playerObjects),m=e.setJudgeName,u=e.judgeIndex,i=e.handleToggleSound;return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Gornath Crafters Guild: ",l.a.createElement("i",null,"Bidding Challenge"),"!"),l.a.createElement("img",{src:(t=M,a="/images/intros/","/GGJ_2020"+(a=a||"/images/")+t[Math.floor(Math.random()*t.length)]),className:"App-logo",alt:"logo"}),l.a.createElement(E.a,null,l.a.createElement(d.a,{className:"mr-5",onClick:function(e){i()}},"Play/Pause Music"),l.a.createElement(d.a,{onClick:function(e){document.fullScreenElement&&null!==document.fullScreenElement||!document.mozFullScreen&&!document.webkitIsFullScreen?document.documentElement.requestFullScreen?document.documentElement.requestFullScreen():document.documentElement.mozRequestFullScreen?document.documentElement.mozRequestFullScreen():document.documentElement.webkitRequestFullScreen&&document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT):document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()}},"Fullscreen")),l.a.createElement("p",null),l.a.createElement("code",null,"GGJ 2020"),l.a.createElement("p",null,"Welcome to Space Station Gornath! What brings you this deep into the Omega Quadrant? Anyways, the rough conditions and remoteness of this region make this output an oasis for explorers. Most visitors have a need for repairs and upgrades. Due to this need multiple repair shops have emerged in the station, of varying quality\u2026"),l.a.createElement("p",null,"In this game you will take turns being the ",l.a.createElement("u",null,"repair shop owners")," and ",l.a.createElement("u",null,"clients")," with particular needs. "),l.a.createElement("p",null,"As the ",l.a.createElement("u",null,"repair shop owner"),", the sale is all that matters - the almighty space buck is king. You will need to work with what you have to engineer a solution and out-sell the rival shops. "),l.a.createElement("p",null,"As the ",l.a.createElement("u",null,"client"),", you will decide which solution to purchase based on its ingenuity and how well it solves your problem. In these times, it doesn\u2019t take much to get a ship, and most pilots aren\u2019t experts in engineering."),l.a.createElement("p",null,"Get ready to craft some space stuff!"),l.a.createElement("p",null),l.a.createElement("p",null),o.length<=4?l.a.createElement(f.a,{onChange:function(e){return function(e){n(e.target.value)}(e)}},l.a.createElement(f.a.Group,{controlId:"formBasicEmail"},l.a.createElement(f.a.Label,null,"Add 3-5 Players:"),l.a.createElement(g.a,null,l.a.createElement(b.a,null,l.a.createElement(f.a.Control,{value:r,type:"text",placeholder:"player name"})),l.a.createElement(b.a,null,l.a.createElement(d.a,{type:"submit",onClick:function(e){e.preventDefault(),function(e){e.preventDefault(),c(e)}(e)}},"Add Player"))))):null,l.a.createElement("ul",null,o.map((function(e,t){return l.a.createElement("p",{key:t},e.name)}))),l.a.createElement(s.b,{to:"/GGJ_2020/prompt"},l.a.createElement(d.a,{onClick:function(){return console.log("clicked"),void m(o[u].name)}},"Start Game")),l.a.createElement("p",{align:"left"},l.a.createElement("p",null,"Game Instructions:"),l.a.createElement("ol",null,l.a.createElement("li",null,"Gather 3-5 players. Each player will need a few index card size pieces of paper and a pen."),l.a.createElement("li",null,"In each round of the game one player will be the \u201cclient\u201d and the other players will be the \u201ccrafters\u201d"),l.a.createElement("li",null,"The client will read the prompt and may make up a background story for why they need this item"),l.a.createElement("li",null,"Once \u201cBidding\u201d begins, all of the other players will be presented with a list of items available to them, and then have 2 minutes to make up a widget and prepare their pitch (it should be written on their paper). The pitch must have a:"),l.a.createElement("ol",null,l.a.createElement("li",null,"Name"),l.a.createElement("li",null,"Explanation/drawing of how it works, and how it meets the client\u2019s needs")),l.a.createElement("li",null,"Once the 2 minute countdown ends, the client will listen to each crafter\u2019s pitch. The client then awards the contract for the proposal that they feel is the most convincing."),l.a.createElement("li",null,"Play ends when players have had enough, and all players have been a judge the same amount of times"))))},j=a(82),S=a(84),C=function(e){var t=e.component;return t.Attachments?l.a.createElement(S.a,{className:"text-center",style:{height:"125px",width:"8rem"}},l.a.createElement(S.a.Img,{variant:"top",style:{maxHeight:"75%",objectFit:"contain"},src:t.Attachments[0].url}),l.a.createElement("div",{className:"text-center",style:{position:"absolute",bottom:"2px"}},l.a.createElement(S.a.Text,{style:{textShadow:"3px 3px 5px white",fontSize:"15px"},className:"text-dark"},t.Name))):l.a.createElement(l.a.Fragment,null)},O=function(e){var t=e.player,a=e.handleScoreClick;return console.log(t),l.a.createElement("div",{className:"border border-light"},l.a.createElement(f.a,null,l.a.createElement(f.a.Row,null,l.a.createElement(b.a,null,l.a.createElement("h5",{className:"text-nowrap"},t.name)),l.a.createElement(b.a,null,l.a.createElement("h5",{className:"text-nowrap"}," Score: ",t.score," ")),l.a.createElement(b.a,null,l.a.createElement(s.b,{to:"/GGJ_2020/prompt"},l.a.createElement(d.a,{className:"btn-success text-nowrap",onClick:function(){return a(t)}},"Award Contract"))))),l.a.createElement(j.a,{className:"border border-light"},l.a.createElement(g.a,{xs:4},l.a.createElement(b.a,{xs:2,className:"col-4"},l.a.createElement(C,{component:t.components[0]})),l.a.createElement(b.a,{xs:2,className:"col-4"},l.a.createElement(C,{component:t.components[1]})),l.a.createElement(b.a,{xs:2,className:"col-4"},l.a.createElement(C,{component:t.components[2]}))),l.a.createElement(g.a,{xs:4},l.a.createElement(b.a,{xs:2,className:"col-4"},l.a.createElement(C,{component:t.components[3]})),l.a.createElement(b.a,{xs:2,className:"col-4"},l.a.createElement(C,{component:t.components[4]})),l.a.createElement(b.a,{xs:2,className:"col-4"},l.a.createElement(C,{component:t.components[5]})))))},y=function(e){var t=e.seconds,a=Object(n.useState)(t),r=Object(u.a)(a,2),c=r[0],o=r[1];return Object(n.useEffect)((function(){if(c){var e=setInterval((function(){o(c-1)}),1e3);return function(){return clearInterval(e)}}}),[c]),l.a.createElement("h4",null,"Time Left: ",c)},P=function(e){var t=e.timerCounter,a=e.gameState,r=e.handleRestartGame,c=e.handleScoreClick,o=(e.handleRestartClick,e.players,e.playerNames,e.playerObjects),m=e.components,i=e.judgeIndex,p=Object(n.useState)([]),h=Object(u.a)(p,2);h[0],h[1];console.log(o),console.log(t);o.map((function(e){for(var t=new Set,a=0;a<6;a++){var n;do{n=Math.floor(Math.random()*m.length)}while(t.has(n));t.add(n),e.components[a]=m[n]}}));var E=function(e){return o[e]?i===e||i<e?o[e+1]?l.a.createElement(O,{handleScoreClick:c,player:o[e+1]}):void 0:l.a.createElement(O,{handleScoreClick:c,player:o[e]}):void 0};return l.a.createElement(l.a.Fragment,null,l.a.createElement(g.a,{className:"mb-3 border border-light"},l.a.createElement(b.a,{className:"text-nowrap"},l.a.createElement("h5",null,a.prompt)),l.a.createElement(b.a,{className:"text-nowrap"},l.a.createElement("h5",null,"Client: ",o[i].name)),l.a.createElement(b.a,null,l.a.createElement(y,{seconds:120})),l.a.createElement(b.a,{className:"text-nowrap"},l.a.createElement(s.b,{to:"/GGJ_2020/"},l.a.createElement(d.a,{className:"text-nowrap",onClick:function(){return r()}},"New Game")))),l.a.createElement(j.a,null,l.a.createElement(g.a,null,l.a.createElement(b.a,null,E(0)),l.a.createElement(b.a,null,E(1))),l.a.createElement(g.a,null,l.a.createElement(b.a,null,E(2)),l.a.createElement(b.a,null,E(3)))))},w=a(18),N=a.n(w),v=a(12),G=a.n(v),x=new Array("CHORDS1.mp3","CHORDS2.mp3","CHORDS3.mp3"),R=new Array("DRUMS1.mp3","DRUMS2.mp3","Drums3.mp3"),k=new Array("FX1.mp3","FX2.mp3","FX3.mp3");function A(e,t){return"/GGJ_2020"+(t=t||"/music/stems/")+e}var F=function(){var e=Object(n.useState)(A(x[Math.floor(Math.random()*x.length)])),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(A(R[Math.floor(Math.random()*R.length)])),o=Object(u.a)(c,2),m=o[0],s=o[1],i=Object(n.useState)(A(k[Math.floor(Math.random()*k.length)])),p=Object(u.a)(i,2),d=p[0],h=p[1];return Object(n.useEffect)((function(){r(A(x[Math.floor(Math.random()*x.length)])),s(A(R[Math.floor(Math.random()*R.length)])),h(A(k[Math.floor(Math.random()*k.length)]))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(G.a,{url:a,playStatus:G.a.status.PLAYING,loop:!0}),l.a.createElement(G.a,{url:m,playStatus:G.a.status.PLAYING,loop:!0}),l.a.createElement(G.a,{url:d,playStatus:G.a.status.PLAYING,loop:!0}))};var I=function(){var e=Object(n.useState)(0),t=Object(u.a)(e,2),a=t[0],r=(t[1],Object(n.useState)([])),c=Object(u.a)(r,2),p=c[0],d=c[1],E=Object(n.useState)(0),f=Object(u.a)(E,2),g=f[0],b=f[1],M=Object(n.useState)("No judge yet"),j=Object(u.a)(M,2),S=j[0],C=j[1],O=Object(n.useState)([]),y=Object(u.a)(O,2),w=y[0],v=y[1],G=Object(n.useState)([]),x=Object(u.a)(G,2),R=x[0],k=x[1],A=Object(n.useState)([]),I=Object(u.a)(A,2),L=I[0],D=I[1],T=Object(n.useState)([]),J=Object(u.a)(T,2),H=J[0],_=J[1],q=Object(n.useState)(""),z=Object(u.a)(q,2),K=z[0],W=z[1],Y=Object(n.useState)(0),U=Object(u.a)(Y,2),X=(U[0],U[1]),Q=Object(n.useState)(!1),Z=Object(u.a)(Q,2),V=Z[0],$=Z[1],ee=Object(n.useState)([]),te=Object(u.a)(ee,2),ae=te[0],ne=te[1];Object(n.useEffect)((function(){ne({prompt:""}),N.a.get("https://guarded-ridge-39330.herokuapp.com/api/airtable/parts").then((function(e){e.data.map((function(e){var t=e;k((function(e){return[].concat(Object(m.a)(e),[t])}))}))})),N.a.get("https://guarded-ridge-39330.herokuapp.com/api/airtable/components").then((function(e){e.data.map((function(e){var t=e;D((function(e){return[].concat(Object(m.a)(e),[t])}))}))})),N.a.get("https://guarded-ridge-39330.herokuapp.com/api/airtable/criteria").then((function(e){e.data.map((function(e){if(e.Name){var t=e;_((function(e){return[].concat(Object(m.a)(e),[t])}))}}))}))}),[]);var le=function(e){re(),p[g]&&C(p[g].name),console.log(e);var t=p;t.map((function(t){t===e&&t.score++})),d(t)},re=function(){g>=p.length-1?b(0):b(g+1)},ce=function(e){e.preventDefault();var t=p.map((function(e){return e.name}));if(""!==K&&!t.includes(K)){var a={name:K,components:[],score:0};d([].concat(Object(m.a)(p),[a])),v((function(e){return[].concat(Object(m.a)(e),[K])})),W(""),e.target.value=""}},oe=function(){d([])},me=function(){$(!V)},ue=function(){V&&0==g&&($(!1),setTimeout((function(){$(!0)}),500))};return l.a.createElement("div",{className:"App"},V?l.a.createElement(F,null):null,l.a.createElement("header",{className:"App-header"},l.a.createElement(s.a,null,l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/GGJ_2020/",render:function(){return l.a.createElement(B,{players:a,nameInput:K,setNameInput:W,handleNameSubmit:ce,playerNames:w,playerObjects:p,setJudgeName:C,judgeIndex:g,handleToggleSound:me,gameState:ae})}}),l.a.createElement(i.a,{path:"/GGJ_2020/prompt",render:function(){return l.a.createElement(h,{players:a,parts:R,criteria:H,playerNames:w,playerObjects:p,setTimeLeft:X,judgeName:S,judgeIndex:g,gameState:ae,setGameState:ne,handleRestartSound:ue})}}),l.a.createElement(i.a,{path:"/GGJ_2020/components",render:function(){var e;return l.a.createElement(P,(e={players:a,playerNames:w,components:L,playerObjects:p,judgeIndex:g,judgeName:S},Object(o.a)(e,"judgeIndex",g),Object(o.a)(e,"handleRestartGame",oe),Object(o.a)(e,"gameState",ae),Object(o.a)(e,"handleScoreClick",le),e))}})))))},L=a(40),D=a(41),T=a(44),J=a(43),H=a(45);l.a.Component;c.a.render(l.a.createElement(s.a,null,l.a.createElement(I,null)),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.597c1e5f.chunk.js.map