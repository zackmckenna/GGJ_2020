(this.webpackJsonpgamejam=this.webpackJsonpgamejam||[]).push([[0],{46:function(e,t,a){e.exports=a(79)},51:function(e,t,a){},52:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(39),c=a.n(r),o=(a(28),a(51),a(15)),m=a(16),s=a(5),i=(a(52),a(8)),u=a(14),p=a(40),h=a(84),d=function(e){e.players;var t=e.playerObjects,a=e.judgeIndex,r=e.parts,c=e.criteria,o=(e.judgeName,e.setGameState),m=e.gameState,u=Object(n.useState)(""),d=Object(s.a)(u,2),g=d[0],E=d[1],f=Object(n.useState)(""),b=Object(s.a)(f,2),y=b[0],M=b[1],B=Object(n.useState)(""),P=Object(s.a)(B,2),j=P[0],C=P[1];Object(n.useEffect)((function(){E(v()),M(S()),C(function(e,t){t=t||"/images/";var a=Math.floor(Math.random()*e.length),n=e[a];return"/GGJ_2020"+t+n}(O,"/images/scenarios/"))}),[]);var O=new Array("RDE-001C.BMP","KFR-010B.BMP","GBR-505C.BMP","GLB-031C.BMP","CTD-012C.BMP","DZI-323C.BMP","ISLANDS.BMP","GBR-504C.BMP","KFR-011B.BMP","FUTURGAL.BMP","KFR-007B.BMP","EDW-147C.BMP","MCG-508C.BMP","RHT-013C.BMP","MCG-411C.BMP","LAL-017C.BMP","GREENSHP.BMP","GBR-515C.BMP","DRM-00~1.BMP","DLN-101C.BMP","BHB-069B.BMP","MCG-518C.BMP","DLA-006C.BMP","BEL-102C.BMP","CWL-004B.BMP","LAL-016C.BMP","GBR-538B.BMP","HANGAR.BMP","MCG-413C.BMP","EDW-066B.BMP","AMC-103C.BMP","JLQ-253C.BMP","LTF-015B.BMP","RHT-016C.BMP","KFR-015C.BMP","CYH-010B.BMP","DLA-008C.BMP","LAL-014C.BMP","CWL-006B.BMP","DLN-105C.BMP","HRD-052C.BMP","HJL-016C.BMP","CHN-003C.BMP","KFR-008B.BMP","AMC-020C.BMP","HJL-017C.BMP","RBP-002C.BMP","GBR-025C.BMP","RMO-011C.BMP","KFR-013B.BMP");var S=function(){return r?r[Math.floor(Math.random()*r.length)].Name:"Error"},v=function(){return c?c[Math.floor(Math.random()*c.length)].Name:"Error"};return l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",null,"Client: ",l.a.createElement("span",{className:"text-primary font-weight-bold"},t[a].name)),l.a.createElement("img",{src:j,style:{maxHeight:"500px"},alt:"logo"}),l.a.createElement("h1",null,"I need a ",l.a.createElement("span",{className:"text-danger"},y)," that ",l.a.createElement("span",{className:"text-warning"},g),"."),l.a.createElement("div",null,l.a.createElement(i.b,{to:"/GGJ_2020/components"},l.a.createElement(h.a,{onClick:function(){return function(){console.log("clicked");var e="I need a ".concat(y," that ").concat(g);o(Object(p.a)({},m,{prompt:e})),console.log(t)}()}},"Start Bidding"))))},g=a(82),E=a(80),f=a(44),b=new Array("STATION.BMP","TEMPLE.BMP","ASTEROID.BMP");var y=function(e){e.handlePlayerChange,e.players;var t,a,n=e.setNameInput,r=e.nameInput,c=e.handleNameSubmit,o=(e.playerNames,e.playerObjects),m=e.setJudgeName,s=e.judgeIndex,u=e.handleToggleSound;return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Gornath Crafters Guild: ",l.a.createElement("i",null,"Bidding Challenge"),"!"),l.a.createElement("img",{src:(t=b,a="/images/intros/","/GGJ_2020"+(a=a||"/images/")+t[Math.floor(Math.random()*t.length)]),className:"App-logo",alt:"logo"}),l.a.createElement(h.a,{onClick:function(e){u()}},"Play/Pause Music"),l.a.createElement("p",null),l.a.createElement("code",null,"GGJ 2020"),l.a.createElement("p",null,"Welcome to Space Station Gornath! What brings you this deep into the Omega Quadrant? Anyways, the rough conditions and remoteness of this region make this output an oasis for explorers. Most visitors have a need for repairs and upgrades. Due to this need multiple repair shops have emerged in the station, of varying quality\u2026"),l.a.createElement("p",null,"In this game you will take turns being the ",l.a.createElement("u",null,"repair shop owners")," and ",l.a.createElement("u",null,"clients")," with particular needs. "),l.a.createElement("p",null,"As the ",l.a.createElement("u",null,"repair shop owner"),", the sale is all that matters - the almighty space buck is king. You will need to work with what you have to engineer a solution and out-sell the rival shops. "),l.a.createElement("p",null,"As the ",l.a.createElement("u",null,"client"),", you will decide which solution to purchase based on its ingenuity and how well it solves your problem. In these times, it doesn\u2019t take much to get a ship, and most pilots aren\u2019t experts in engineering."),l.a.createElement("p",null,"Get ready to craft some space stuff!"),l.a.createElement("p",null),l.a.createElement("p",null),o.length<=4?l.a.createElement(g.a,{onChange:function(e){return function(e){n(e.target.value)}(e)}},l.a.createElement(g.a.Group,{controlId:"formBasicEmail"},l.a.createElement(g.a.Label,null,"Add 3-5 Players:"),l.a.createElement(E.a,null,l.a.createElement(f.a,null,l.a.createElement(g.a.Control,{value:r,type:"text",placeholder:"player name"})),l.a.createElement(f.a,null,l.a.createElement(h.a,{type:"submit",onClick:function(e){e.preventDefault(),function(e){e.preventDefault(),c(e)}(e)}},"Add Player"))))):null,l.a.createElement("ul",null,o.map((function(e,t){return l.a.createElement("p",{key:t},e.name)}))),l.a.createElement(i.b,{to:"/GGJ_2020/prompt"},l.a.createElement(h.a,{onClick:function(){return console.log("clicked"),void m(o[s].name)}},"Start Game")),l.a.createElement("p",{align:"left"},l.a.createElement("p",null,"Game Instructions:"),l.a.createElement("ol",null,l.a.createElement("li",null,"Gather 3-5 players. Each player will need a few index card size pieces of paper and a pen."),l.a.createElement("li",null,"In each round of the game one player will be the \u201cclient\u201d and the other players will be the \u201ccrafters\u201d"),l.a.createElement("li",null,"The client will read the prompt and may make up a background story for why they need this item"),l.a.createElement("li",null,"Once \u201cBidding\u201d begins, all of the other players will be presented with a list of items available to them, and then have 2 minutes to make up a widget and prepare their pitch (it should be written on their paper). The pitch must have a:"),l.a.createElement("ol",null,l.a.createElement("li",null,"Name"),l.a.createElement("li",null,"Explanation/drawing of how it works, and how it meets the client\u2019s needs")),l.a.createElement("li",null,"Once the 2 minute countdown ends, the client will listen to each crafter\u2019s pitch. The client then awards the contract for the proposal that they feel is the most convincing."),l.a.createElement("li",null,"Play ends when players have had enough, and all players have been a judge the same amount of times"))))},M=a(81),B=a(83),P=function(e){var t=e.component;return t.Attachments?l.a.createElement(B.a,{className:"text-center",style:{height:"125px",width:"8rem"}},l.a.createElement(B.a.Img,{variant:"top",style:{maxHeight:"75%",objectFit:"contain"},src:t.Attachments[0].url}),l.a.createElement("div",{className:"text-center",style:{position:"absolute",bottom:"2px"}},l.a.createElement(B.a.Text,{style:{textShadow:"3px 3px 5px white",fontSize:"15px"},className:"text-dark"},t.Name))):l.a.createElement(l.a.Fragment,null)},j=function(e){var t=e.player,a=e.handleScoreClick;return console.log(t),l.a.createElement("div",{className:"border border-light"},l.a.createElement(g.a,null,l.a.createElement(g.a.Row,null,l.a.createElement(f.a,null,l.a.createElement("h5",{className:"text-nowrap"},t.name)),l.a.createElement(f.a,null,l.a.createElement("h5",{className:"text-nowrap"}," Score: ",t.score," ")),l.a.createElement(f.a,null,l.a.createElement(i.b,{to:"/GGJ_2020/prompt"},l.a.createElement(h.a,{className:"btn-success text-nowrap",onClick:function(){return a(t)}},"Award Contract"))))),l.a.createElement(M.a,{className:"border border-light"},l.a.createElement(E.a,null,l.a.createElement(f.a,{className:"col-4"},l.a.createElement(P,{component:t.components[0]})),l.a.createElement(f.a,{className:"col-4"},l.a.createElement(P,{component:t.components[1]})),l.a.createElement(f.a,{className:"col-4"},l.a.createElement(P,{component:t.components[2]}))),l.a.createElement(E.a,null,l.a.createElement(f.a,{className:"col-4"},l.a.createElement(P,{component:t.components[3]})),l.a.createElement(f.a,{className:"col-4"},l.a.createElement(P,{component:t.components[4]})),l.a.createElement(f.a,{className:"col-4"},l.a.createElement(P,{component:t.components[5]})))))},C=function(e){var t=e.seconds,a=Object(n.useState)(t),r=Object(s.a)(a,2),c=r[0],o=r[1];return Object(n.useEffect)((function(){if(c){var e=setInterval((function(){o(c-1)}),1e3);return function(){return clearInterval(e)}}}),[c]),l.a.createElement("h4",null,"Time Left: ",c)},O=function(e){var t=e.timerCounter,a=e.gameState,r=e.handleRestartGame,c=e.handleScoreClick,o=(e.handleRestartClick,e.players,e.playerNames,e.playerObjects),m=e.components,u=e.judgeIndex,p=Object(n.useState)([]),d=Object(s.a)(p,2);d[0],d[1];console.log(o),console.log(t);o.map((function(e){for(var t=new Set,a=0;a<6;a++){var n;do{n=Math.floor(Math.random()*m.length)}while(t.has(n));t.add(n),e.components[a]=m[n]}}));var g=function(e){return o[e]?u===e||u<e?o[e+1]?l.a.createElement(j,{handleScoreClick:c,player:o[e+1]}):void 0:l.a.createElement(j,{handleScoreClick:c,player:o[e]}):void 0};return l.a.createElement(l.a.Fragment,null,l.a.createElement(E.a,{className:"mb-3 border border-light"},l.a.createElement(f.a,{className:"text-nowrap"},l.a.createElement("h5",null,a.prompt)),l.a.createElement(f.a,{className:"text-nowrap"},l.a.createElement("h5",null,"Client: ",o[u].name)),l.a.createElement(f.a,null,l.a.createElement(C,{seconds:120})),l.a.createElement(f.a,{className:"text-nowrap"},l.a.createElement(i.b,{to:"/GGJ_2020/"},l.a.createElement(h.a,{className:"text-nowrap",onClick:function(){return r()}},"New Game")))),l.a.createElement(M.a,null,l.a.createElement(E.a,null,l.a.createElement(f.a,null,g(0)),l.a.createElement(f.a,null,g(1))),l.a.createElement(E.a,null,l.a.createElement(f.a,null,g(2)),l.a.createElement(f.a,null,g(3)))))},S=a(23),v=a.n(S),N=a(18),w=a(19),G=a(21),x=a(20),L=a(22),k=a(12),A=a.n(k),R=new Array("CHORDS1.mp3","CHORDS2.mp3","CHORDS3.mp3"),I=new Array("DRUMS1.mp3","DRUMS2.mp3","Drums3.mp3"),D=new Array("FX1.mp3","FX2.mp3","FX3.mp3");function F(e,t){return"/GGJ_2020"+(t=t||"/music/stems/")+e}var J=function(e){function t(){return Object(N.a)(this,t),Object(G.a)(this,Object(x.a)(t).apply(this,arguments))}return Object(L.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(A.a,{url:F(R[Math.floor(Math.random()*R.length)]),playStatus:A.a.status.PLAYING,onLoading:this.handleSongLoading,onPlaying:this.handleSongPlaying,onFinishedPlaying:this.handleSongFinishedPlaying,loop:!0}),l.a.createElement(A.a,{url:F(I[Math.floor(Math.random()*I.length)]),playStatus:A.a.status.PLAYING,onLoading:this.handleSongLoading,onPlaying:this.handleSongPlaying,onFinishedPlaying:this.handleSongFinishedPlaying,loop:!0}),l.a.createElement(A.a,{url:F(D[Math.floor(Math.random()*D.length)]),playStatus:A.a.status.PLAYING,onLoading:this.handleSongLoading,onPlaying:this.handleSongPlaying,onFinishedPlaying:this.handleSongFinishedPlaying,loop:!0}))}}]),t}(l.a.Component);var T=function(){var e=Object(n.useState)(0),t=Object(s.a)(e,2),a=t[0],r=(t[1],Object(n.useState)([])),c=Object(s.a)(r,2),p=c[0],h=c[1],g=Object(n.useState)(0),E=Object(s.a)(g,2),f=E[0],b=E[1],M=Object(n.useState)("No judge yet"),B=Object(s.a)(M,2),P=B[0],j=B[1],C=Object(n.useState)([]),S=Object(s.a)(C,2),N=S[0],w=S[1],G=Object(n.useState)([]),x=Object(s.a)(G,2),L=x[0],k=x[1],A=Object(n.useState)([]),R=Object(s.a)(A,2),I=R[0],D=R[1],F=Object(n.useState)([]),T=Object(s.a)(F,2),H=T[0],_=T[1],K=Object(n.useState)(""),W=Object(s.a)(K,2),Y=W[0],U=W[1],X=Object(n.useState)(0),z=Object(s.a)(X,2),Q=(z[0],z[1]),q=Object(n.useState)(!1),Z=Object(s.a)(q,2),V=Z[0],$=Z[1],ee=Object(n.useState)([]),te=Object(s.a)(ee,2),ae=te[0],ne=te[1];Object(n.useEffect)((function(){ne({prompt:""}),v.a.get("https://guarded-ridge-39330.herokuapp.com/api/airtable/parts").then((function(e){console.log("Parts",e.data),e.data.map((function(e){var t=e;k((function(e){return[].concat(Object(m.a)(e),[t])}))}))})),v.a.get("https://guarded-ridge-39330.herokuapp.com/api/airtable/components").then((function(e){console.log("Components",e.data),e.data.map((function(e){var t=e;D((function(e){return[].concat(Object(m.a)(e),[t])}))}))})),v.a.get("https://guarded-ridge-39330.herokuapp.com/api/airtable/criteria").then((function(e){console.log("Criteria",e.data),e.data.map((function(e){if(e.Name){var t=e;_((function(e){return[].concat(Object(m.a)(e),[t])}))}}))}))}),[]);var le=function(e){re(),p[f]&&j(p[f].name),console.log(e);var t=p;t.map((function(t){t===e&&t.score++})),h(t)},re=function(){f>=p.length-1?b(0):b(f+1)},ce=function(e){console.log(e),e.preventDefault();var t=p.map((function(e){return e.name}));if(console.log(t),""!==Y&&!t.includes(Y)){var a={name:Y,components:[],score:0};h([].concat(Object(m.a)(p),[a])),w((function(e){return[].concat(Object(m.a)(e),[Y])})),U(""),e.target.value="",console.log("Player Objects:",p),console.log(ae)}},oe=function(){h([])},me=function(){$(!V)};return l.a.createElement("div",{className:"App"},V?l.a.createElement(J,null):null,l.a.createElement("header",{className:"App-header"},l.a.createElement(i.a,null,l.a.createElement(u.c,null,l.a.createElement(u.a,{exact:!0,path:"/GGJ_2020/",render:function(){return l.a.createElement(y,{players:a,nameInput:Y,setNameInput:U,handleNameSubmit:ce,playerNames:N,playerObjects:p,setJudgeName:j,judgeIndex:f,handleToggleSound:me,gameState:ae})}}),l.a.createElement(u.a,{path:"/GGJ_2020/prompt",render:function(){return l.a.createElement(d,{players:a,parts:L,criteria:H,playerNames:N,playerObjects:p,setTimeLeft:Q,judgeName:P,judgeIndex:f,gameState:ae,setGameState:ne})}}),l.a.createElement(u.a,{path:"/GGJ_2020/components",render:function(){var e;return l.a.createElement(O,(e={players:a,playerNames:N,components:I,playerObjects:p,judgeIndex:f,judgeName:P},Object(o.a)(e,"judgeIndex",f),Object(o.a)(e,"handleRestartGame",oe),Object(o.a)(e,"gameState",ae),Object(o.a)(e,"handleScoreClick",le),e))}})))))};l.a.Component;c.a.render(l.a.createElement(i.a,null,l.a.createElement(T,null)),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.1bf1a3e8.chunk.js.map