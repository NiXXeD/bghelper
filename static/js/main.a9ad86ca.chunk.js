(this.webpackJsonpbghelper=this.webpackJsonpbghelper||[]).push([[0],{134:function(e,t,a){e.exports=a(162)},161:function(e,t,a){},162:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(12),o=a.n(l),c=a(107),i=a(220),s=a(53),u=a(42),m=a(8),d=a(27),b=a.n(d),p=a(214),h=a(241),g=a(218),f=n.a.createContext({}),E=a(240);var v=b()({appBar:{display:"flex",flexDirection:"row",maxHeight:48},spacer:{flex:1},toolbar:{minHeight:48},title:{wordWrap:"none"}}),y=function(e){var t=e.tabs,a=e.title,l=v(),o=Object(r.useState)(0),c=Object(m.a)(o,2),i=c[0],s=c[1],u=Object(r.useContext)(f),d=u.setTitle,b=u.clearTitle;return Object(r.useEffect)((function(){return d(a),function(){return b()}}),[b,d,a]),n.a.createElement(n.a.Fragment,null,n.a.createElement(p.a,{position:"static",color:"default",className:l.appBar},n.a.createElement(h.a,{value:i,onChange:function(e,t){return s(t)},variant:"scrollable",scrollButtons:"auto"},t.map((function(e,t){var a=e.label;return n.a.createElement(g.a,{key:t,label:a})})))),t.map((function(e,t){var a=e.content;return n.a.createElement(E.a,{key:t,display:i===t?"block":"none"},a)})))},C=a(25),x=a(226),O=a(227),k=a(35),S=a(225),j=a(221);var w=function(e){var t=e.children,a=e.width,r=void 0===a?300:a,l=e.maxWidth,o={width:r,maxWidth:void 0===l?r:l,margin:16};return n.a.createElement(j.a,{style:o},t)},B=a(224),P=a(222),z=a(244);var N=b()({checkbox:{display:"block"}}),T=function(e){var t=e.className,a=e.label,r=e.checked,l=e.onChange,o=N().checkbox+(t?" "+t:"");return n.a.createElement(P.a,{label:a,className:o,control:n.a.createElement(z.a,{checked:r,onChange:function(e){var t=e.target;return l(t.checked)}})})};var A=function(e){var t=e.size,a=t?{height:t,width:t}:{flex:1};return n.a.createElement("div",{style:a})},M=a(110);var F=Object(M.a)({subheading:{marginTop:16}}),R=function(e){var t=e.className,a=e.label,r=e.value,l=e.dense,o=F(),c=(t||"")+(l?"":" "+o.subheading);return n.a.createElement("div",{className:c},n.a.createElement(k.a,{variant:"subtitle1",color:"textSecondary",component:"div"},a),n.a.createElement(k.a,{variant:"body2",component:"div"},r))},D=[{name:"Polar Bears",type:"animalHouses",game:"base"},{name:"Gobi Bears",type:"animalHouses",game:"base"},{name:"Koalas",type:"animalHouses",game:"base"},{name:"Pandas",type:"animalHouses",game:"base"},{name:"Green Areas",type:"greenTiles",game:"base"},{name:"Long Food Street",type:"greenTiles",game:"base"},{name:"Long River",type:"greenTiles",game:"base"},{name:"Enclosures",type:"enclosures",game:"base"},{name:"Animal Houses",type:"animalHouse",game:"base"},{name:"Twice is Nice",type:"bearStatues",game:"base"},{name:"Construction Freeze",type:"enclosures",game:"badNewsBears"},{name:"Enclosure Planning",type:"enclosures",game:"badNewsBears"},{name:"Toilets Apart",type:"greenTiles",game:"badNewsBears"},{name:"Food Street Connections",type:"greenTiles",game:"badNewsBears"},{name:"Rivers in Corners",type:"greenTiles",game:"badNewsBears"},{name:"Playgrounds with Statues",type:"bearStatues",game:"badNewsBears"}];var $={baseGame:!0,badNewsBears:!0,variety:!0},H=function(){var e=Object(r.useState)($.baseGame),t=Object(m.a)(e,2),a=t[0],l=t[1],o=Object(r.useState)($.badNewsBears),c=Object(m.a)(o,2),i=c[0],s=c[1],u=Object(r.useState)($.variety),d=Object(m.a)(u,2),b=d[0],p=d[1],h=Object(r.useState)(null),g=Object(m.a)(h,2),f=g[0],E=g[1];return n.a.createElement(w,null,n.a.createElement(B.a,{title:"Achievement Selector"}),n.a.createElement(S.a,null,n.a.createElement(R,{dense:!0,label:"Options",value:n.a.createElement(n.a.Fragment,null,n.a.createElement(T,{label:"Base Game",checked:a,onChange:l}),n.a.createElement(T,{label:"Bad News Bears",checked:i,onChange:s}),n.a.createElement(T,{label:"Variety",checked:b,onChange:p}))}),n.a.createElement(R,{label:"Selected Achievements",value:n.a.createElement(n.a.Fragment,null,!f&&n.a.createElement(k.a,null,"Press ",n.a.createElement("i",null,"Randomize")," below to randomly select achievements!"),f&&n.a.createElement(n.a.Fragment,null,f.map((function(e,t){return n.a.createElement(R,{key:t,label:"Achievement ".concat(t+1),value:e.name})})),n.a.createElement(A,{size:16}),n.a.createElement(k.a,{variant:"caption",color:"textSecondary"},"Don't forget to remove the lowest value achievement for 2 player games!")))})),n.a.createElement(x.a,null,n.a.createElement(O.a,{color:"secondary",onClick:function(){l($.baseGame),s($.badNewsBears),p($.variety),E(null)}},"Reset"),n.a.createElement(A,null),n.a.createElement(O.a,{color:"primary",disabled:!a&&!i,onClick:function(){for(var e=[],t=Object(C.a)(D).filter((function(e){return a&&"base"===e.game||i&&"badNewsBears"===e.game})),r=function(){var a=Math.floor(Math.random()*Math.floor(t.length)),r=t.splice(a,1),n=Object(m.a)(r,1)[0];b&&!e.every((function(e){return e.type!==n.type}))||e.push(n)};e.length<3&&t.length>0;)r();E(e)}},"Randomize")))},G=a(230),I=a(166),W=a(172),L=a(167),Y=a(177),K=a(229),U=a(175);var Q=Object(M.a)({select:{marginBottom:16},helperText:{cursor:"default",userSelect:"none"}}),J=function(e){var t=e.label,a=e.value,r=e.onChange,l=e.items,o=e.error,c=e.errorText,i=e.helperText,s=Q();return n.a.createElement(I.a,{className:s.select},n.a.createElement(Y.a,{htmlFor:t},t),n.a.createElement(U.a,{value:a,onChange:function(e){var t=e.target;return r(t.value)},input:n.a.createElement(L.a,{id:t}),MenuProps:{MenuListProps:{style:{maxHeight:256}}}},l.map((function(e,t){var a=e.label,r=e.value;return n.a.createElement(K.a,{key:t,value:r},a)}))),!o&&i&&n.a.createElement(W.a,{className:s.helperText},i),o&&n.a.createElement(W.a,{error:!0,className:s.helperText},c))};var X=Object(M.a)({col:{display:"flex",flexDirection:"column"}}),q=function(e){var t=e.children,a=e.width,r=X(),l=a?{width:a}:null;return n.a.createElement("div",{className:r.col,style:l},t)};var V=Object(M.a)({row:{display:"flex",flexDirection:"row"}}),_=function(e){var t=e.children,a=V();return n.a.createElement("div",{className:a.row},t)},Z={2:{toilets:10,playgrounds:10,foodStreets:8,rivers:8,animalHouses:"2, 4, 6",bearStatues:"Evens; 2 - 16",monorailTowers:14,monorailCars:"2 each; 10, 8, 6, 5, 4, 3",grizzlyToilets:18,grizzlyAnimalHouses:"2, 4, 6, 8",grizzlyBearStatues:"Evens; 2 - 20",players:["Toilet","Playground"]},3:{toilets:10,playgrounds:10,foodStreets:12,rivers:12,animalHouses:"2 - 6",bearStatues:"3 - 14",monorailTowers:21,monorailCars:"3 each; 10, 8, 6, 5, 4, 3",grizzlyToilets:18,grizzlyAnimalHouses:"2 - 7",grizzlyBearStatues:"3 - 17",players:["Toilet","Playground","Playground"]},4:{toilets:10,playgrounds:10,foodStreets:16,rivers:16,animalHouses:"1 - 7",bearStatues:"1 - 16",monorailTowers:28,monorailCars:"4 each; 10, 8, 6, 5, 4, 3",grizzlyToilets:18,grizzlyAnimalHouses:"1 - 8",grizzlyBearStatues:"1 - 20",players:["Toilet","Playground","Playground","Food Street"]}};var ee=Object.keys(Z).map((function(e){return{label:"".concat(e," players"),value:e}})),te=function(){var e=Object(r.useState)(2),t=Object(m.a)(e,2),a=t[0],l=t[1],o=Object(r.useState)(!0),c=Object(m.a)(o,2),i=c[0],s=c[1],u=Object(r.useState)(!0),d=Object(m.a)(u,2),b=d[0],p=d[1],h=Z[a];return n.a.createElement(w,{width:350},n.a.createElement(B.a,{title:"Setup Reference"}),n.a.createElement(S.a,null,n.a.createElement(G.a,null,n.a.createElement(J,{label:"Players",value:a,onChange:l,items:ee}),n.a.createElement(_,null,n.a.createElement(T,{label:"Monorails",checked:i,onChange:s}),n.a.createElement(A,{size:16}),n.a.createElement(T,{label:"Grizzlies",checked:b,onChange:p})),n.a.createElement(_,null,n.a.createElement(R,{label:"Starting Tile",value:n.a.createElement(_,null,n.a.createElement(q,{width:140},n.a.createElement("span",null,n.a.createElement("b",null,"P1:"),"\xa0Toilet"),a>2&&n.a.createElement("span",null,n.a.createElement("b",null,"P3:"),"\xa0Playground")),n.a.createElement(q,{width:140},n.a.createElement("span",null,n.a.createElement("b",null,"P2:"),"\xa0Playground"),a>3&&n.a.createElement("span",null,n.a.createElement("b",null,"P4:"),"\xa0Food Street")))})),n.a.createElement(_,null,n.a.createElement(q,{width:140},n.a.createElement(R,{label:"Toilets",value:b?h.grizzlyToilets:h.toilets}),n.a.createElement(R,{label:"Playgrounds",value:h.playgrounds}),n.a.createElement(R,{label:"Animal Houses",value:b?h.grizzlyAnimalHouses:h.animalHouses}),i&&n.a.createElement(R,{label:"Monorail Towers",value:h.monorailTowers})),n.a.createElement(A,{size:24}),n.a.createElement(q,{width:140},n.a.createElement(R,{label:"Food Streets",value:h.foodStreets}),n.a.createElement(R,{label:"Rivers",value:h.rivers}),n.a.createElement(R,{label:"Bear Statues",value:b?h.grizzlyBearStatues:h.bearStatues}),i&&n.a.createElement(R,{label:"Monorail Cars",value:h.monorailCars}))))))};var ae=function(){var e=[{label:"Setup",content:n.a.createElement(te,null)},{label:"Achievements",content:n.a.createElement(H,null)}];return n.a.createElement(y,{title:"B\xe4renpark",tabs:e})},re=a(56),ne=a(231);var le=Object(M.a)({textField:{marginBottom:16},helperText:{cursor:"default",userSelect:"none"}}),oe=function(e){var t=e.label,a=e.value,r=e.onChange,l=e.type,o=e.error,c=e.errorText,i=e.helperText,s=le();return n.a.createElement(I.a,{className:s.textField},n.a.createElement(ne.a,{label:t,value:a,type:l,onChange:function(e){var t=e.target;return r(t.value)}}),!o&&i&&n.a.createElement(W.a,{className:s.helperText},i),o&&n.a.createElement(W.a,{error:!0,className:s.helperText},c))};var ce=function(e){var t=Object(C.a)(new Array(36)).map((function(e,t){return t-5})).map((function(e){return{label:"$".concat(e),value:e}}));return n.a.createElement(J,Object.assign({label:"Unit Price",items:t,helperText:"Final sale price of goods sold."},e))};var ie=Object(M.a)((function(e){return{container:{marginRight:16,marginBottom:16,width:"100%",display:"inline-block",right:0},subheader:{textAlign:"right",color:e.palette.text.secondary},dollars:{fontSize:"38px",fontWeight:"bold",color:"darkgreen",textAlign:"right"}}})),se=function(e){var t=e.value,a=void 0===t?0:t,r=ie();return n.a.createElement("div",{className:r.container},n.a.createElement("div",{className:r.subheader},"Profit"),n.a.createElement("div",{className:r.dollars},"$".concat(a)))};var ue={unitPrice:10,normalSales:0,gardenOrParkSales:0,gardenAndParkSales:0,frySales:0,marketingBonuses:0,cfo:!1},me=function(e){var t=e.modules,a=Object(r.useState)(ue.unitPrice),l=Object(m.a)(a,2),o=l[0],c=l[1],i=Object(r.useState)(ue.normalSales),s=Object(m.a)(i,2),u=s[0],d=s[1],b=Object(r.useState)(ue.gardenOrParkSales),p=Object(m.a)(b,2),h=p[0],g=p[1],f=Object(r.useState)(ue.gardenAndParkSales),E=Object(m.a)(f,2),v=E[0],y=E[1],C=Object(r.useState)(ue.marketingBonuses),k=Object(m.a)(C,2),j=k[0],P=k[1],z=Object(r.useState)(ue.frySales),N=Object(m.a)(z,2),A=N[0],M=N[1],F=Object(r.useState)(ue.cfo),R=Object(m.a)(F,2),D=R[0],$=R[1],H=D?1.5:1,I=u*o,W=h*o*2,L=v*o*3,Y=10*A,K=5*j,U=Math.ceil(H*(I+W+L+K+Y));return n.a.createElement(w,{width:"auto",maxWidth:375},n.a.createElement(B.a,{title:"Bulk Sale Calculator"}),n.a.createElement(S.a,null,n.a.createElement(G.a,null,n.a.createElement(ce,{value:o,onChange:c}),n.a.createElement(oe,{type:"number",label:"Normal Sales",value:u,onChange:d,helperText:"Regular demand, Coffee, Kimchi, Sushi, and/or Noodles."}),n.a.createElement(oe,{type:"number",label:"Either Garden or Park Sales",value:h,onChange:g,helperText:"Items sold on either Garden or Park (not both)."}),t.lobbyists&&n.a.createElement(oe,{type:"number",label:"Both Garden and Park Sales",value:v,onChange:y,helperText:"Items sold on both Garden and Park."}),n.a.createElement(oe,{type:"number",label:"Marketing Bonuses",value:j,onChange:P,helperText:"Bonuses from first sale milestones."}),t.fryChefs&&n.a.createElement(oe,{type:"number",label:"Fry Sales",value:A,onChange:M,helperText:"Number of fries sold."}),n.a.createElement(T,{label:"CFO Bonus",checked:D,onChange:$}))),n.a.createElement(x.a,null,n.a.createElement(O.a,{color:"secondary",onClick:function(){c(ue.unitPrice),d(ue.normalSales),g(ue.gardenOrParkSales),y(ue.gardenAndParkSales),P(ue.marketingBonuses),M(ue.frySales),$(ue.cfo)}},"Reset"),n.a.createElement(se,{value:U})))};var de=Object(C.a)(new Array(26)).map((function(e,t){return{label:"".concat(t," item(s) sold"),value:t}})),be=Object(C.a)(new Array(26)).map((function(e,t){return{label:"".concat(t," bonus(es)"),value:t}})),pe={bonusItemsSold:0,cfo:!1,garden:!1,park:!1,itemsSold:1,coffeeSold:0,specialItemsSold:0,friesSold:0,unitPrice:10},he=function(e){var t=e.modules,a=Object(r.useState)(pe.bonusItemsSold),l=Object(m.a)(a,2),o=l[0],c=l[1],i=Object(r.useState)(pe.cfo),s=Object(m.a)(i,2),u=s[0],d=s[1],b=Object(r.useState)(pe.garden),p=Object(m.a)(b,2),h=p[0],g=p[1],f=Object(r.useState)(pe.park),E=Object(m.a)(f,2),v=E[0],y=E[1],C=Object(r.useState)(pe.itemsSold),k=Object(m.a)(C,2),j=k[0],P=k[1],z=Object(r.useState)(pe.specialItemsSold),N=Object(m.a)(z,2),A=N[0],M=N[1],F=Object(r.useState)(pe.friesSold),R=Object(m.a)(F,2),D=R[0],$=R[1],H=Object(r.useState)(pe.unitPrice),I=Object(m.a)(H,2),W=I[0],L=I[1],Y=!h&&j>3,K=o>j,U=W*j,Q=5*o,X=1+(h?1:0)+(v?1:0),q=u?1.5:1,V=Math.ceil((U*X+Q)*q);return n.a.createElement(w,null,n.a.createElement(B.a,{title:"Single Sale Calculator"}),n.a.createElement(S.a,null,n.a.createElement(G.a,null,n.a.createElement(ce,{value:W,onChange:L}),n.a.createElement(J,{label:"Items Sold",value:j,onChange:P,items:de,error:Y,errorText:"Items sold must be at most 3 for regular house.",helperText:"Regular demand items sold."}),n.a.createElement(J,{label:"Marketing Bonuses",value:o,onChange:c,items:be,error:K,errorText:"Marketing bonuses may not exceed items sold.",helperText:"Bonuses from first sale milestones."}),(t.coffee||t.kimchi||t.sushi||t.noodles)&&n.a.createElement(J,{label:"Special Items Sold",value:A,onChange:M,items:de,helperText:"Includes Coffee, Kimchi, Sushi, and Noodles."}),t.fryChefs&&n.a.createElement(J,{label:"Fries Sold",value:D,onChange:$,items:de,helperText:"Includes Coffee, Kimchi, Sushi, and Noodles."}),n.a.createElement(T,{label:"Garden House",checked:h,onChange:g}),t.lobbyists&&n.a.createElement(T,{label:"Park Bonus",checked:v,onChange:y}),n.a.createElement(T,{label:"CFO Bonus",checked:u,onChange:d}))),n.a.createElement(x.a,null,n.a.createElement(O.a,{color:"secondary",onClick:function(){c(pe.bonusItemsSold),d(pe.cfo),g(pe.garden),y(pe.park),P(pe.itemsSold),M(pe.specialItemsSold),$(pe.friesSold),L(pe.unitPrice)}},"Reset"),n.a.createElement(se,{value:V})))},ge=a(232),fe={base:[{color:"#AF95C2",title:"to hire 3 people in 1 turn",text:"+2 Management Trainees."},{color:"#BDB6B3",title:"to train someone",text:"$15 discount on salaries."},{color:"#98C2C9",title:"billboard placed",text:"No salaries for marketeers; Eternal marketing."},{color:"#AF95C2",title:"to throw away drink/food",text:"Get a freezer that stores 10 items."},{color:"#95A968",title:"burger produced",text:"+1 Burger Cook."},{color:"#98C2C9",title:"burger marketed",text:"+$5 for every burger sold."},{color:"#AF95C2",title:"waitress played",text:"Each waitress +$2."},{color:"#95A968",title:"pizza produced",text:"+1 Pizza Cook."},{color:"#98C2C9",title:"pizza marketed",text:"+$5 for every pizza sold."},{color:"#AF95C2",title:"to have $20",text:"May see bank reserve cards."},{color:"#A9CB94",title:"Errand Boy played",text:"All buyers get +1 drink from each source."},{color:"#98C2C9",title:"drink marketed",text:"+$5 for every drink sold."},{color:"#AF95C2",title:"to have $100",text:"Your CEO counts as CFO (+50% to cash earned). May not have CFO."},{color:"#A9CB94",title:"Cart Operator played",text:"Buyers get range +1."},{color:"#98C2C9",title:"airplane campaign",text:"Count +2 open slots when determining order of play."},{color:"#EAA791",title:"to lower prices",text:"Price -$1."},{color:"#BDB6B3",title:"to pay $20 or more in salaries",text:"May use multiple trainers on the same person."},{color:"#98C2C9",title:"radio campaign",text:"Your radios market 2 goods per turn instead of 1."}],hardChoices:[{color:"#AF95C2",title:"to hire 3 people in 1 turn",text:"+2 Management Trainees.",maxRound:3},{color:"#BDB6B3",title:"to train someone",text:"$15 discount on salaries."},{color:"#98C2C9",title:"billboard placed",text:"No salaries for marketeers; Eternal marketing."},{color:"#AF95C2",title:"to throw away drink/food",text:"Get a freezer that stores 10 items."},{color:"#95A968",title:"burger produced",text:"+1 Burger Cook."},{color:"#98C2C9",title:"burger marketed",text:"+$5 for every burger sold.",maxRound:2},{color:"#AF95C2",title:"waitress played",text:"Each waitress +$2."},{color:"#95A968",title:"pizza produced",text:"+1 Pizza Cook."},{color:"#98C2C9",title:"pizza marketed",text:"+$5 for every pizza sold.",maxRound:2},{color:"#AF95C2",title:"to have $20",text:"May see bank reserve cards."},{color:"#A9CB94",title:"Errand Boy played",text:"All buyers get +1 drink from each source."},{color:"#98C2C9",title:"drink marketed",text:"+$5 for every drink sold.",maxRound:2},{color:"#AF95C2",title:"to have $100",text:"Your CEO counts as CFO (+50% to cash earned). May not have CFO."},{color:"#A9CB94",title:"Cart Operator played",text:"Buyers get range +1."},{color:"#98C2C9",title:"airplane campaign",text:"Count +2 open slots when determining order of play."},{color:"#EAA791",title:"to lower prices",text:"Price -$1."},{color:"#BDB6B3",title:"to pay $20 or more in salaries",text:"May use multiple trainers on the same person."},{color:"#98C2C9",title:"radio campaign",text:"Your radios market 2 goods per turn instead of 1."}],expansion:[{color:"#98C2C9",title:"marketeer used",text:"$5 for every good your marketeers market; Distance -2.",maxRound:2},{color:"#98C2C9",title:"marketing trainee used",text:"+1 Kitchen Trainee and +1 Errand Boy."},{color:"#98C2C9",title:"campaign manager used",text:"This turn, may place 1 marketing tile with same type, duration and range."},{color:"#98C2C9",title:"brand manager used",text:"This turn, may place 2 different goods on 1 plane."},{color:"#98C2C9",title:"brand director used",text:"Your radio is permanent."},{color:"#EAA791",title:"burger sold",text:"Your CEO always has 4 slots (regardless of reserve cards)."},{color:"#EAA791",title:"pizza sold",text:"Place radio (pizza, 2 turns) on tile of each house that bought pizza."},{color:"#EAA791",title:"lemonade sold",text:"Any employee can be trained on the job, preserving color."},{color:"#EAA791",title:"beer sold",text:"May pay salary with food or drink."},{color:"#EAA791",title:"coke sold",text:"Get a freezer that stores 10 items."},{color:"#A9CB94",title:"cart operator used",text:"Double amount of drinks hauled by cart/truck/zeppelin."},{color:"#BDB6B3",title:"recruiting girl used",text:"Get a free executive vice president; Pay no salary for him.",maxRound:2},{color:"#BDB6B3",title:"trainer used",text:"+1 trainer; No longer need to fire employees if broke.",maxRound:2},{color:"#BDB6B3",title:"discount manager used",text:"Remove $100 from the bank each round you discount by $3 or more.."},{color:"#AF95C2",title:"house built",text:"May use multiple trainers on the same person."},{color:"#AF95C2",title:"waitress used",text:"Your salaries are $3 each."},{color:"#934a34",title:"new restaurant",text:"Place a permanent mailbox in restaurant area."}],ketchup:[{color:"#cc0000",title:"demand fulfulled by someone else",text:"Distance -1."}]};var Ee=Object(M.a)({milestone:{margin:4,width:155,height:155,userSelect:"none",cursor:"pointer",border:"1px solid black",borderRadius:10},container:{margin:4,height:145,display:"flex",flexDirection:"column"},title:{textAlign:"center",fontWeight:600,textTransform:"uppercase",marginBottom:12,color:"#000"},text:{textAlign:"center",fontSize:"small",color:"#000"},maxRound:{width:145,textAlign:"center",fontWeight:"bold",fontSize:"small",color:"#f00"},checkmark:{fontSize:"xx-large",color:"#0f0",position:"absolute",marginTop:115,marginLeft:7},x:{fontSize:"xx-large",color:"#f00",position:"absolute",marginTop:115,marginLeft:7}}),ve=function(e){var t=e.index,a=e.milestone,r=e.onChange,l=e.value,o=Ee(),c=a.color,i=a.title,s=a.text,u=a.maxRound;return n.a.createElement("div",{className:o.milestone,style:{backgroundColor:c},onClick:function(){return r(t,l&&"available"!==l?"mine"===l?"unavailable":"available":"mine")}},"mine"===l&&n.a.createElement("div",{className:o.checkmark},"\u2713"),"unavailable"===l&&n.a.createElement("div",{className:o.x},"\u2717"),n.a.createElement("div",{className:o.container},n.a.createElement("div",{className:o.title},"First ",i),n.a.createElement("div",{className:o.text},s),n.a.createElement(A,null),u&&n.a.createElement("div",{className:o.maxRound},"Remove after ",n.a.createElement("br",null),"round ",u)))};var ye=Object(M.a)({content:{padding:8}}),Ce=function(e){var t=e.modules,a=e.data,l=e.onDataChanged,o=ye(),c=Object(r.useState)(a.milestones||[]),i=Object(m.a)(c,2),s=i[0],u=i[1],d=Object(r.useMemo)((function(){return[].concat(Object(C.a)(t.hardChoices||t.newMilestones?[]:fe.base),Object(C.a)(t.hardChoices&&!t.newMilestones?fe.hardChoices:[]),Object(C.a)(t.newMilestones?fe.expansion:[]),Object(C.a)(t.ketchup?fe.ketchup:[]))}),[t]),b=Object(r.useCallback)((function(){l("milestoneType",{newMilestones:t.newMilestones,ketchup:t.ketchup})}),[t,l]),p=function(e,t){var a=Object(C.a)(s);a[e]=t,u(a),l("milestones",a),b()},h=Object(r.useCallback)((function(){u([]),l("milestones",[]),b()}),[l,b]);return Object(r.useEffect)((function(){var e=a.milestoneType,r=void 0===e?{}:e,n=r.newMilestones!==t.newMilestones,l=r.ketchup!==t.ketchup;(n||l)&&h()}),[a,t,h]),n.a.createElement(w,{width:"auto",maxWidth:845},n.a.createElement(B.a,{title:"Milestone Tracker"}),n.a.createElement(S.a,{className:o.content},n.a.createElement(ge.a,{container:!0},d.map((function(e,t){return n.a.createElement(ve,{key:t,index:t,milestone:e,value:s[t],onChange:p})})))),n.a.createElement(x.a,null,n.a.createElement(O.a,{color:"secondary",onClick:h},"Reset")))};function xe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var Oe=b()({checkbox:{minWidth:225}}),ke=function(e){var t=e.label,a=e.prop,r=e.modules,l=e.setModules,o=Oe();return n.a.createElement(T,{className:o.checkbox,label:t,checked:r[a]||!1,onChange:function(e){return l(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?xe(a,!0).forEach((function(t){Object(re.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):xe(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},r,Object(re.a)({},a,e)))}})},Se=[{label:"New Districts",prop:"newDistricts"},{label:"Lobbyists",prop:"lobbyists"},{label:"New Milestones",prop:"newMilestones"},{label:"Coffee",prop:"coffee"},{label:"Kimchi",prop:"kimchi"},{label:"Sushi",prop:"sushi"},{label:"Noodles",prop:"noodles"},{label:"Ketchup",prop:"ketchup"},{label:"Fry Chefs",prop:"fryChefs"},{label:"Night Shift Managers",prop:"nightShiftManagers"},{label:"Mass Marketers",prop:"massMarketers"},{label:"Rural Marketers",prop:"ruralMarketers"},{label:"Gourmet Food Critics",prop:"gourmetFoodCritics"},{label:"Movie Stars",prop:"movieStars"},{label:"Reserve Prices",prop:"reservePrices"},{label:"Hard Choices",prop:"hardChoices"}];var je=b()({description:{margin:"0 16px 0 16px"},container:{display:"flex",flexDirection:"row"},leftColumn:{minWidth:225,marginRight:12},rightColumn:{minWidth:225}}),we=function(e){var t=e.modules,a=e.onModulesChanged,r=je();return n.a.createElement(w,{width:"auto",maxWidth:500},n.a.createElement(B.a,{title:"Expansion Modules"}),n.a.createElement(R,{className:r.description,dense:!0,label:"Description",value:"Select which modules are in play. This will allow the other helpers to show the correct information. Changing these may reset data in other helpers."}),n.a.createElement(S.a,null,n.a.createElement(ge.a,{container:!0},Se.map((function(e){var r=e.label,l=e.prop;return n.a.createElement(ke,{key:r,modules:t,setModules:a,label:r,prop:l})})))),n.a.createElement(x.a,null,n.a.createElement(O.a,{color:"secondary",onClick:function(){return a({})}},"Reset")))},Be=a(97),Pe=a.n(Be),ze={2:{mapSize:"3 x 3",employees:"1",billboards:"#2, #3, #12, #15, #16",reserve:"$100"},3:{mapSize:"3 x 4",employees:"1",billboards:"#2, #3, #15, #16",reserve:"$150"},4:{mapSize:"4 x 4",employees:"2",billboards:"#3, #16",reserve:"$200"},5:{mapSize:"4 x 5",employees:"3",billboards:"None",reserve:"$250"},6:{mapSize:"4x6 (use New Districts)",employees:"3",billboards:"None",reserve:"$300"}};var Ne=Object.keys(ze).map((function(e){return{label:"".concat(e," players"),value:e}})),Te=Object(M.a)({card:{margin:16,maxWidth:275}}),Ae=function(){var e=Te(),t=Object(r.useState)(2),a=Object(m.a)(t,2),l=a[0],o=a[1],c=ze[l];return n.a.createElement(Pe.a,{className:e.card},n.a.createElement(B.a,{title:"Setup Reference"}),n.a.createElement(S.a,null,n.a.createElement(G.a,null,n.a.createElement(J,{label:"Players",value:l,onChange:o,items:Ne}),n.a.createElement(R,{label:"Map Size",value:c.mapSize}),n.a.createElement(R,{label:"1x Employees",value:c.employees}),n.a.createElement(R,{label:"Billboards Removed",value:c.billboards}),n.a.createElement(R,{label:"Reserve",value:c.reserve}))))};function Me(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var Fe="foodChainMagnateData";var Re=[{name:"B\xe4renpark",path:"/barenpark",component:ae},{name:"Food Chain Magnate",path:"/foodChainMagnate",component:function(){var e=Object(r.useState)((function(){try{var e=localStorage.getItem(Fe);return JSON.parse(e)||{}}catch(t){console.warn("Error loading local storage data: ",t),localStorage.removeItem(Fe)}return{}})),t=Object(m.a)(e,2),a=t[0],l=void 0===a?{}:a,o=t[1],c=Object(r.useState)(l.modules||{}),i=Object(m.a)(c,2),s=i[0],u=i[1],d=Object(r.useCallback)((function(e,t){var a=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Me(a,!0).forEach((function(t){Object(re.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Me(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},l,Object(re.a)({},e,t));o(a);var r=JSON.stringify(a);localStorage.setItem(Fe,r)}),[l]),b=Object(r.useCallback)((function(e){u(e),d("modules",e)}),[d]),p=[{label:"Milestones",alwaysRender:!1,content:n.a.createElement(Ce,{data:l,onDataChanged:d,modules:s})},{label:"Single House Sales",content:n.a.createElement(he,{modules:s})},{label:"Bulk House Sales",content:n.a.createElement(me,{modules:s})},{label:"Setup",content:n.a.createElement(Ae,{modules:s})},{label:"Modules",content:n.a.createElement(we,{data:l,onDataChanged:d,onDataUpdate:d,modules:s,onModulesChanged:b})}];return n.a.createElement(y,{title:"Food Chain Magnate",tabs:p})}},{name:"Quacks of Quedlinberg",path:"/quacksOfQuedlinberg",component:function(){var e=[{label:"Setup",content:n.a.createElement("div",null)}];return n.a.createElement(y,{title:"Quacks of Quedlinberg",tabs:e})}},{name:"Roll Player",path:"/rollPlayer",component:function(){var e=[{label:"Setup",content:n.a.createElement("div",null)}];return n.a.createElement(y,{title:"Roll Player",tabs:e})}},{name:"Unearth",path:"/unearth",component:function(){var e=[{label:"Setup",content:n.a.createElement("div",null)}];return n.a.createElement(y,{title:"Unearth",tabs:e})}}];var De=function(){return n.a.createElement(w,null,n.a.createElement(B.a,{title:"Welcome!"}),n.a.createElement(S.a,null,n.a.createElement(k.a,null,"Welcome to BGHelper! Select a game in the menu to the left or search for one above.")))},$e=a(233),He=a(235),Ge=a(223),Ie=a(103),We=a.n(Ie),Le=a(243),Ye=a(98),Ke=a.n(Ye);var Ue=b()((function(e){return{closed:{transition:"transform .2s",transform:"rotate(180deg)",color:"".concat(e.palette.text.primary," !important")},open:{transition:"transform .2s",transform:"rotate(0deg)",color:"".concat(e.palette.text.primary," !important")}}})),Qe=function(e){var t=e.open,a=Ue();return n.a.createElement(Ke.a,{className:t?a.open:a.closed})},Je=a(99),Xe=a.n(Je),qe=a(228),Ve=a(171),_e=a(236),Ze=a(237),et=a(105),tt=a.n(et),at=a(104),rt=a.n(at),nt=a(106),lt=a.n(nt),ot=a(239),ct=a(238),it=a(102),st=a.n(it),ut=a(234),mt=a(242);var dt=["INPUT","TEXTAREA","SELECT"],bt=b()({autocomplete:{width:300},dialogPaper:{overflowY:"visible"},dialogRoot:{top:"48px !important",bottom:"unset !important"},popup:{zIndex:1301}}),pt=function(){var e=bt(),t=Object(u.e)(),a=Object(r.useState)(!1),l=Object(m.a)(a,2),o=l[0],c=l[1],i=Object(r.useState)(null),s=Object(m.a)(i,2),d=s[0],b=s[1],p=function(){return c(!0)},h=function(){return c(!1)},g=Object(r.useRef)(null),f=Object(r.useCallback)((function(e){"."!==e.key||dt.includes(e.target.tagName)||p()}),[]);return Object(r.useEffect)((function(){o&&g&&g.current&&setTimeout((function(){return g.current.focus()}),125)}),[o,g]),Object(r.useEffect)((function(){return document.addEventListener("keyup",f),function(){return document.removeEventListener("keyup",f)}}),[f]),n.a.createElement(n.a.Fragment,null,n.a.createElement($e.a,{title:"Site Search"},n.a.createElement(Ge.a,{onClick:p},n.a.createElement(st.a,null))),n.a.createElement(ut.a,{keepMounted:!0,open:o,onClose:h,classes:{paper:e.dialogPaper,root:e.dialogRoot}},n.a.createElement(mt.a,{className:e.autocomplete,autoComplete:!0,autoHightlight:!0,clearOnEscape:!0,options:Re,value:d,onChange:function(e,a){a&&(t.push(a.path),b(null),h())},onClose:h,getOptionLabel:function(e){return e.name},renderInput:function(e){return n.a.createElement(ne.a,Object.assign({},e,{label:"Site Search",variant:"outlined",fullWidth:!0,inputRef:g}))},classes:{popup:e.popup}})))};var ht=Object(M.a)((function(e){return{drawerPaper:{width:225},toolbar:{paddingLeft:8,paddingRight:8},title:{paddingLeft:12,flex:1},nested:{paddingLeft:e.spacing(4)},link:{textDecoration:"none",color:"inherit"}}})),gt=function(){var e=ht(),t=Object(r.useContext)(f).title,a=Object(r.useState)(null),l=Object(m.a)(a,2),o=l[0],c=l[1],i=Object(r.useState)(!1),u=Object(m.a)(i,2),d=u[0],b=u[1],h=function(){return b(!0)},g=function(){return b(!1)},E=function(e){return function(){return c(o===e?null:e)}};return n.a.createElement(n.a.Fragment,null,n.a.createElement(p.a,{position:"static"},n.a.createElement(He.a,{className:e.toolbar},n.a.createElement(Ge.a,{className:e.menuButton,onClick:h},n.a.createElement(We.a,null)),n.a.createElement(k.a,{variant:"h6",className:e.title},t),n.a.createElement(pt,null),n.a.createElement($e.a,{title:"Contribute on GitHub!"},n.a.createElement(Ge.a,{target:"_blank",href:"https://github.com/NiXXeD/bghelper"},n.a.createElement("img",{alt:"github link",width:"24",height:"24",src:Xe.a}))))),n.a.createElement(Le.a,{open:d,onOpen:h,onClose:g,classes:{paper:e.drawerPaper}},n.a.createElement(s.b,{className:e.link,to:"/"},n.a.createElement(Ve.a,{button:!0,onClick:g},n.a.createElement(_e.a,null,n.a.createElement(rt.a,null)),n.a.createElement(Ze.a,{primary:"Home"}))),n.a.createElement(ct.a,null),n.a.createElement(qe.a,null,n.a.createElement(Ve.a,{button:!0,onClick:E("games")},n.a.createElement(_e.a,null,n.a.createElement(tt.a,null)),n.a.createElement(Ze.a,{primary:"Games"}),n.a.createElement(Qe,{open:"games"===o})),n.a.createElement(ot.a,{in:"games"===o,timeout:"auto"},Re.map((function(t){var a=t.path,r=t.name;return n.a.createElement(s.b,{key:a,className:e.link,to:a},n.a.createElement(Ve.a,{className:e.nested,button:!0,onClick:g},n.a.createElement(Ze.a,{primary:r})))}))),n.a.createElement(Ve.a,{button:!0,onClick:E("utils")},n.a.createElement(_e.a,null,n.a.createElement(lt.a,null)),n.a.createElement(Ze.a,{primary:"Utilities"}),n.a.createElement(Qe,{open:"utils"===o})),n.a.createElement(ot.a,{in:"utils"===o,timeout:"auto"},n.a.createElement(Ve.a,{className:e.nested,button:!0,onClick:g},n.a.createElement(Ze.a,{primary:"TBD"}))))))};var ft="Board Game Helper",Et=function(e){var t=e.children,a=Object(r.useState)(ft),l=Object(m.a)(a,2),o=l[0],c=l[1],i=Object(r.useCallback)((function(){return c(ft)}),[]),s=Object(r.useMemo)((function(){return{title:o,setTitle:c,clearTitle:i}}),[o,i]);return n.a.createElement(f.Provider,{value:s},t)},vt=Object(c.a)({palette:{type:"dark"}});var yt,Ct=function(){return n.a.createElement(s.a,null,n.a.createElement(i.a,{theme:vt},n.a.createElement(Et,null,n.a.createElement("div",null,n.a.createElement(gt,null),n.a.createElement(u.a,{exact:!0,path:"/"},n.a.createElement(De,null)),Re.map((function(e){var t=e.path,a=e.component;return n.a.createElement(u.a,{exact:!0,path:t,key:t},n.a.createElement(a,null))}))))))};a(161),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(Ct,null),document.getElementById("root")),yt=Ct,o.a.render(n.a.createElement(yt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){return e.unregister()}))},99:function(e,t,a){e.exports=a.p+"static/media/github.7337e417.svg"}},[[134,1,2]]]);
//# sourceMappingURL=main.a9ad86ca.chunk.js.map