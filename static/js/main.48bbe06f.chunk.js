(this.webpackJsonpbghelper=this.webpackJsonpbghelper||[]).push([[0],{134:function(e,t,a){e.exports=a(162)},161:function(e,t,a){},162:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(12),o=a.n(l),c=a(106),s=a(219),i=a(51),u=a(41),m=a(7),d=a(27),p=a.n(d),b=a(213),h=a(240),f=a(217),g=n.a.createContext({}),y=a(239);var E=p()({appBar:{display:"flex",flexDirection:"row",maxHeight:48},spacer:{flex:1},toolbar:{minHeight:48},title:{wordWrap:"none"}}),v=function(e){var t=e.tabs,a=e.title,l=e.defaultTab,o=void 0===l?0:l,c=E(),s=Object(r.useState)(o),i=Object(m.a)(s,2),u=i[0],d=i[1],p=Object(r.useContext)(g),v=p.setTitle,C=p.clearTitle;return Object(r.useEffect)((function(){return v(a),function(){return C()}}),[C,v,a]),n.a.createElement(n.a.Fragment,null,n.a.createElement(b.a,{position:"static",color:"default",className:c.appBar},n.a.createElement(h.a,{value:u,onChange:function(e,t){return d(t)},variant:"scrollable",scrollButtons:"auto"},t.map((function(e,t){var a=e.label;return n.a.createElement(f.a,{key:t,label:a})})))),t.map((function(e,t){var a=e.content;return n.a.createElement(y.a,{key:t,display:u===t?"block":"none"},a)})))},C=a(24),k=a(225),x=a(226),O=a(34),S=a(224),j=a(107),w=a(220);var B=function(e){var t=e.children,a=e.width,r=void 0===a?300:a,l=e.maxWidth,o=void 0===l?r:l,c=Object(j.a)(e,["children","width","maxWidth"]),s={width:r,maxWidth:o,margin:16,transition:"width 1s"};return n.a.createElement(w.a,Object.assign({style:s},c),t)},P=a(223),N=a(221),z=a(243);var T=p()({checkbox:{display:"block"}}),A=function(e){var t=e.className,a=e.label,r=e.checked,l=e.onChange,o=T().checkbox+(t?" "+t:"");return n.a.createElement(N.a,{label:a,className:o,control:n.a.createElement(z.a,{checked:r,onChange:function(e){var t=e.target;return l(t.checked)}})})};var M=function(e){var t=e.size,a=t?{height:t,width:t}:{flex:1};return n.a.createElement("div",{style:a})},F=a(110);var R=Object(F.a)({subheading:{marginTop:16}}),D=function(e){var t=e.className,a=e.label,r=e.value,l=e.dense,o=R(),c=(t||"")+(l?"":" "+o.subheading);return n.a.createElement("div",{className:c},n.a.createElement(O.a,{variant:"subtitle1",color:"textSecondary",component:"div"},a),n.a.createElement(O.a,{variant:"body2",component:"div"},r))},I=[{name:"Polar Bears",type:"animalHouses",game:"base"},{name:"Gobi Bears",type:"animalHouses",game:"base"},{name:"Koalas",type:"animalHouses",game:"base"},{name:"Pandas",type:"animalHouses",game:"base"},{name:"Green Areas",type:"greenTiles",game:"base"},{name:"Long Food Street",type:"greenTiles",game:"base"},{name:"Long River",type:"greenTiles",game:"base"},{name:"Enclosures",type:"enclosures",game:"base"},{name:"Animal Houses",type:"animalHouse",game:"base"},{name:"Twice is Nice",type:"bearStatues",game:"base"},{name:"Construction Freeze",type:"enclosures",game:"badNewsBears"},{name:"Enclosure Planning",type:"enclosures",game:"badNewsBears"},{name:"Toilets Apart",type:"greenTiles",game:"badNewsBears"},{name:"Food Street Connections",type:"greenTiles",game:"badNewsBears"},{name:"Rivers in Corners",type:"greenTiles",game:"badNewsBears"},{name:"Playgrounds with Statues",type:"bearStatues",game:"badNewsBears"}];var $={baseGame:!0,badNewsBears:!0,variety:!0},H=function(){var e=Object(r.useState)($.baseGame),t=Object(m.a)(e,2),a=t[0],l=t[1],o=Object(r.useState)($.badNewsBears),c=Object(m.a)(o,2),s=c[0],i=c[1],u=Object(r.useState)($.variety),d=Object(m.a)(u,2),p=d[0],b=d[1],h=Object(r.useState)(null),f=Object(m.a)(h,2),g=f[0],y=f[1];return n.a.createElement(B,null,n.a.createElement(P.a,{title:"Achievement Selector"}),n.a.createElement(S.a,null,n.a.createElement(D,{dense:!0,label:"Options",value:n.a.createElement(n.a.Fragment,null,n.a.createElement(A,{label:"Base Game",checked:a,onChange:l}),n.a.createElement(A,{label:"Bad News Bears",checked:s,onChange:i}),n.a.createElement(A,{label:"Variety",checked:p,onChange:b}))}),n.a.createElement(D,{label:"Selected Achievements",value:n.a.createElement(n.a.Fragment,null,!g&&n.a.createElement(O.a,null,"Press ",n.a.createElement("i",null,"Randomize")," below to randomly select achievements!"),g&&n.a.createElement(n.a.Fragment,null,g.map((function(e,t){return n.a.createElement(D,{key:t,label:"Achievement ".concat(t+1),value:e.name})})),n.a.createElement(M,{size:16}),n.a.createElement(O.a,{variant:"caption",color:"textSecondary"},"Don't forget to remove the lowest value achievement for 2 player games!")))})),n.a.createElement(k.a,null,n.a.createElement(x.a,{color:"secondary",onClick:function(){l($.baseGame),i($.badNewsBears),b($.variety),y(null)}},"Reset"),n.a.createElement(M,null),n.a.createElement(x.a,{color:"primary",disabled:!a&&!s,onClick:function(){for(var e=[],t=Object(C.a)(I).filter((function(e){return a&&"base"===e.game||s&&"badNewsBears"===e.game})),r=function(){var a=Math.floor(Math.random()*Math.floor(t.length)),r=t.splice(a,1),n=Object(m.a)(r,1)[0];p&&!e.every((function(e){return e.type!==n.type}))||e.push(n)};e.length<3&&t.length>0;)r();y(e)}},"Randomize")))},G=a(229),W=a(166),L=a(172),K=a(167),Y=a(177),U=a(228),J=a(175);var X=Object(F.a)({select:{marginBottom:16},helperText:{cursor:"default",userSelect:"none"}}),V=function(e){var t=e.label,a=e.value,r=e.onChange,l=e.items,o=e.error,c=e.errorText,s=e.helperText,i=X();return n.a.createElement(W.a,{className:i.select},n.a.createElement(Y.a,{htmlFor:t},t),n.a.createElement(J.a,{value:a,onChange:function(e){var t=e.target;return r(t.value)},input:n.a.createElement(K.a,{id:t}),MenuProps:{MenuListProps:{style:{maxHeight:256}}}},l.map((function(e,t){var a=e.label,r=e.value;return n.a.createElement(U.a,{key:t,value:r},a)}))),!o&&s&&n.a.createElement(L.a,{className:i.helperText},s),o&&n.a.createElement(L.a,{error:!0,className:i.helperText},c))};var q=Object(F.a)({col:{display:"flex",flexDirection:"column"}}),_=function(e){var t=e.children,a=e.width,r=q(),l=a?{width:a}:null;return n.a.createElement("div",{className:r.col,style:l},t)};var Q=Object(F.a)({row:{display:"flex",flexDirection:"row"}}),Z=function(e){var t=e.children,a=Q();return n.a.createElement("div",{className:a.row},t)},ee={2:{toilets:10,playgrounds:10,foodStreets:8,rivers:8,animalHouses:"2, 4, 6",bearStatues:"Evens; 2 - 16",monorailTowers:14,monorailCars:"2 each; 10, 8, 6, 5, 4, 3",grizzlyToilets:18,grizzlyAnimalHouses:"2, 4, 6, 8",grizzlyBearStatues:"Evens; 2 - 20",players:["Toilet","Playground"]},3:{toilets:10,playgrounds:10,foodStreets:12,rivers:12,animalHouses:"2 - 6",bearStatues:"3 - 14",monorailTowers:21,monorailCars:"3 each; 10, 8, 6, 5, 4, 3",grizzlyToilets:18,grizzlyAnimalHouses:"2 - 7",grizzlyBearStatues:"3 - 17",players:["Toilet","Playground","Playground"]},4:{toilets:10,playgrounds:10,foodStreets:16,rivers:16,animalHouses:"1 - 7",bearStatues:"1 - 16",monorailTowers:28,monorailCars:"4 each; 10, 8, 6, 5, 4, 3",grizzlyToilets:18,grizzlyAnimalHouses:"1 - 8",grizzlyBearStatues:"1 - 20",players:["Toilet","Playground","Playground","Food Street"]}};var te=Object.keys(ee).map((function(e){return{label:"".concat(e," players"),value:e}})),ae=function(){var e=Object(r.useState)(2),t=Object(m.a)(e,2),a=t[0],l=t[1],o=Object(r.useState)(!0),c=Object(m.a)(o,2),s=c[0],i=c[1],u=Object(r.useState)(!0),d=Object(m.a)(u,2),p=d[0],b=d[1],h=ee[a];return n.a.createElement(B,{width:350},n.a.createElement(P.a,{title:"Setup Reference"}),n.a.createElement(S.a,null,n.a.createElement(G.a,null,n.a.createElement(V,{label:"Players",value:a,onChange:l,items:te}),n.a.createElement(Z,null,n.a.createElement(A,{label:"Monorails",checked:s,onChange:i}),n.a.createElement(M,{size:16}),n.a.createElement(A,{label:"Grizzlies",checked:p,onChange:b})),n.a.createElement(Z,null,n.a.createElement(D,{label:"Starting Tile",value:n.a.createElement(Z,null,n.a.createElement(_,{width:140},n.a.createElement("span",null,n.a.createElement("b",null,"P1:"),"\xa0Toilet"),a>2&&n.a.createElement("span",null,n.a.createElement("b",null,"P3:"),"\xa0Playground")),n.a.createElement(_,{width:140},n.a.createElement("span",null,n.a.createElement("b",null,"P2:"),"\xa0Playground"),a>3&&n.a.createElement("span",null,n.a.createElement("b",null,"P4:"),"\xa0Food Street")))})),n.a.createElement(Z,null,n.a.createElement(_,{width:140},n.a.createElement(D,{label:"Toilets",value:p?h.grizzlyToilets:h.toilets}),n.a.createElement(D,{label:"Playgrounds",value:h.playgrounds}),n.a.createElement(D,{label:"Animal Houses",value:p?h.grizzlyAnimalHouses:h.animalHouses}),s&&n.a.createElement(D,{label:"Monorail Towers",value:h.monorailTowers})),n.a.createElement(M,{size:24}),n.a.createElement(_,{width:140},n.a.createElement(D,{label:"Food Streets",value:h.foodStreets}),n.a.createElement(D,{label:"Rivers",value:h.rivers}),n.a.createElement(D,{label:"Bear Statues",value:p?h.grizzlyBearStatues:h.bearStatues}),s&&n.a.createElement(D,{label:"Monorail Cars",value:h.monorailCars}))))))};var re=function(){var e=[{label:"Setup",content:n.a.createElement(ae,null)},{label:"Achievements",content:n.a.createElement(H,null)}];return n.a.createElement(v,{title:"B\xe4renpark",tabs:e})},ne=a(54);function le(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var oe=function(e){var t=e.localStorageKey,a=e.onDataValidate,n=Object(r.useState)((function(){try{var e=localStorage.getItem(t)||"{}",r=JSON.parse(e)||{};return a&&!a(r)?(localStorage.removeItem(t),{}):r}catch(n){console.warn("Error loading local storage data: ",n),localStorage.removeItem(t)}return{}})),l=Object(m.a)(n,2),o=l[0],c=void 0===o?{}:o,s=l[1],i=Object(r.useCallback)((function(e,a){var r=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?le(a,!0).forEach((function(t){Object(ne.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):le(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},c,Object(ne.a)({},e,a));s(r);var n=JSON.stringify(r);localStorage.setItem(t,n)}),[c,t]);return{data:c,onDataUpdate:i}},ce=a(230);var se=Object(F.a)({textField:{marginBottom:16},helperText:{cursor:"default",userSelect:"none"}}),ie=function(e){var t=e.label,a=e.value,r=e.onChange,l=e.type,o=e.error,c=e.errorText,s=e.helperText,i=se();return n.a.createElement(W.a,{className:i.textField},n.a.createElement(ce.a,{label:t,value:a,type:l,onChange:function(e){var t=e.target;return r(t.value)}}),!o&&s&&n.a.createElement(L.a,{className:i.helperText},s),o&&n.a.createElement(L.a,{error:!0,className:i.helperText},c))};var ue=function(e){var t=Object(C.a)(new Array(36)).map((function(e,t){return t-5})).map((function(e){return{label:"$".concat(e),value:e}}));return n.a.createElement(V,Object.assign({label:"Unit Price",items:t,helperText:"Final sale price of goods sold."},e))};var me=Object(F.a)((function(e){return{container:{marginRight:16,marginBottom:16,width:"100%",display:"inline-block",right:0},subheader:{textAlign:"right",color:e.palette.text.secondary},dollars:{fontSize:"38px",fontWeight:"bold",color:"darkgreen",textAlign:"right"}}})),de=function(e){var t=e.value,a=void 0===t?0:t,r=me();return n.a.createElement("div",{className:r.container},n.a.createElement("div",{className:r.subheader},"Profit"),n.a.createElement("div",{className:r.dollars},"$".concat(a)))};var pe={unitPrice:10,normalSales:0,gardenOrParkSales:0,gardenAndParkSales:0,frySales:0,marketingBonuses:0,cfo:!1},be=function(e){var t=e.modules,a=Object(r.useState)(pe.unitPrice),l=Object(m.a)(a,2),o=l[0],c=l[1],s=Object(r.useState)(pe.normalSales),i=Object(m.a)(s,2),u=i[0],d=i[1],p=Object(r.useState)(pe.gardenOrParkSales),b=Object(m.a)(p,2),h=b[0],f=b[1],g=Object(r.useState)(pe.gardenAndParkSales),y=Object(m.a)(g,2),E=y[0],v=y[1],C=Object(r.useState)(pe.marketingBonuses),O=Object(m.a)(C,2),j=O[0],w=O[1],N=Object(r.useState)(pe.frySales),z=Object(m.a)(N,2),T=z[0],M=z[1],F=Object(r.useState)(pe.cfo),R=Object(m.a)(F,2),D=R[0],I=R[1],$=D?1.5:1,H=u*o,W=h*o*2,L=E*o*3,K=10*T,Y=5*j,U=Math.ceil($*(H+W+L+Y+K));return n.a.createElement(B,{width:"auto",maxWidth:375},n.a.createElement(P.a,{title:"Bulk Sale Calculator"}),n.a.createElement(S.a,null,n.a.createElement(G.a,null,n.a.createElement(ue,{value:o,onChange:c}),n.a.createElement(ie,{type:"number",label:"Normal Sales",value:u,onChange:d,helperText:"Regular demand, Coffee, Kimchi, Sushi, and/or Noodles."}),n.a.createElement(ie,{type:"number",label:"Either Garden or Park Sales",value:h,onChange:f,helperText:"Items sold on either Garden or Park (not both)."}),t.lobbyists&&n.a.createElement(ie,{type:"number",label:"Both Garden and Park Sales",value:E,onChange:v,helperText:"Items sold on both Garden and Park."}),n.a.createElement(ie,{type:"number",label:"Marketing Bonuses",value:j,onChange:w,helperText:"Bonuses from first sale milestones."}),t.fryChefs&&n.a.createElement(ie,{type:"number",label:"Fry Sales",value:T,onChange:M,helperText:"Number of fries sold."}),n.a.createElement(A,{label:"CFO Bonus",checked:D,onChange:I}))),n.a.createElement(k.a,null,n.a.createElement(x.a,{color:"secondary",onClick:function(){c(pe.unitPrice),d(pe.normalSales),f(pe.gardenOrParkSales),v(pe.gardenAndParkSales),w(pe.marketingBonuses),M(pe.frySales),I(pe.cfo)}},"Reset"),n.a.createElement(de,{value:U})))};var he=Object(C.a)(new Array(26)).map((function(e,t){return{label:"".concat(t," item(s) sold"),value:t}})),fe=Object(C.a)(new Array(26)).map((function(e,t){return{label:"".concat(t," bonus(es)"),value:t}})),ge={bonusItemsSold:0,cfo:!1,garden:!1,park:!1,itemsSold:1,coffeeSold:0,specialItemsSold:0,friesSold:0,unitPrice:10},ye=function(e){var t=e.modules,a=Object(r.useState)(ge.bonusItemsSold),l=Object(m.a)(a,2),o=l[0],c=l[1],s=Object(r.useState)(ge.cfo),i=Object(m.a)(s,2),u=i[0],d=i[1],p=Object(r.useState)(ge.garden),b=Object(m.a)(p,2),h=b[0],f=b[1],g=Object(r.useState)(ge.park),y=Object(m.a)(g,2),E=y[0],v=y[1],C=Object(r.useState)(ge.itemsSold),O=Object(m.a)(C,2),j=O[0],w=O[1],N=Object(r.useState)(ge.specialItemsSold),z=Object(m.a)(N,2),T=z[0],M=z[1],F=Object(r.useState)(ge.friesSold),R=Object(m.a)(F,2),D=R[0],I=R[1],$=Object(r.useState)(ge.unitPrice),H=Object(m.a)($,2),W=H[0],L=H[1],K=!h&&j>3,Y=o>j,U=W*j,J=5*o,X=1+(h?1:0)+(E?1:0),q=u?1.5:1,_=Math.ceil((U*X+J)*q);return n.a.createElement(B,null,n.a.createElement(P.a,{title:"Single Sale Calculator"}),n.a.createElement(S.a,null,n.a.createElement(G.a,null,n.a.createElement(ue,{value:W,onChange:L}),n.a.createElement(V,{label:"Items Sold",value:j,onChange:w,items:he,error:K,errorText:"Items sold must be at most 3 for regular house.",helperText:"Regular demand items sold."}),n.a.createElement(V,{label:"Marketing Bonuses",value:o,onChange:c,items:fe,error:Y,errorText:"Marketing bonuses may not exceed items sold.",helperText:"Bonuses from first sale milestones."}),(t.coffee||t.kimchi||t.sushi||t.noodles)&&n.a.createElement(V,{label:"Special Items Sold",value:T,onChange:M,items:he,helperText:"Includes Coffee, Kimchi, Sushi, and Noodles."}),t.fryChefs&&n.a.createElement(V,{label:"Fries Sold",value:D,onChange:I,items:he,helperText:"Includes Coffee, Kimchi, Sushi, and Noodles."}),n.a.createElement(A,{label:"Garden House",checked:h,onChange:f}),t.lobbyists&&n.a.createElement(A,{label:"Park Bonus",checked:E,onChange:v}),n.a.createElement(A,{label:"CFO Bonus",checked:u,onChange:d}))),n.a.createElement(k.a,null,n.a.createElement(x.a,{color:"secondary",onClick:function(){c(ge.bonusItemsSold),d(ge.cfo),f(ge.garden),v(ge.park),w(ge.itemsSold),M(ge.specialItemsSold),I(ge.friesSold),L(ge.unitPrice)}},"Reset"),n.a.createElement(de,{value:_})))},Ee=a(231),ve={base:[{color:"#BDB6B3",title:"to pay $20 or more in salaries",text:"May use multiple trainers on the same person."},{color:"#BDB6B3",title:"to train someone",text:"$15 discount on salaries."},{color:"#AF95C2",title:"to hire 3 people in 1 turn",text:"+2 Management Trainees."},{color:"#AF95C2",title:"to throw away drink/food",text:"Get a freezer that stores 10 items."},{color:"#AF95C2",title:"waitress played",text:"Each waitress +$2."},{color:"#AF95C2",title:"to have $20",text:"May see bank reserve cards."},{color:"#AF95C2",title:"to have $100",text:"Your CEO counts as CFO (+50% to cash earned). May not have CFO."},{color:"#95A968",title:"burger produced",text:"+1 Burger Cook."},{color:"#95A968",title:"pizza produced",text:"+1 Pizza Cook."},{color:"#98C2C9",title:"billboard placed",text:"No salaries for marketeers; Eternal marketing."},{color:"#98C2C9",title:"burger marketed",text:"+$5 for every burger sold."},{color:"#98C2C9",title:"pizza marketed",text:"+$5 for every pizza sold."},{color:"#98C2C9",title:"drink marketed",text:"+$5 for every drink sold."},{color:"#98C2C9",title:"airplane campaign",text:"Count +2 open slots when determining order of play."},{color:"#98C2C9",title:"radio campaign",text:"Your radios market 2 goods per turn instead of 1."},{color:"#A9CB94",title:"Errand Boy played",text:"All buyers get +1 drink from each source."},{color:"#A9CB94",title:"Cart Operator played",text:"Buyers get range +1."},{color:"#EAA791",title:"to lower prices",text:"Price -$1."}],hardChoices:[{color:"#AF95C2",title:"to hire 3 people in 1 turn",text:"+2 Management Trainees.",maxRound:3},{color:"#BDB6B3",title:"to train someone",text:"$15 discount on salaries."},{color:"#98C2C9",title:"billboard placed",text:"No salaries for marketeers; Eternal marketing."},{color:"#AF95C2",title:"to throw away drink/food",text:"Get a freezer that stores 10 items."},{color:"#95A968",title:"burger produced",text:"+1 Burger Cook."},{color:"#98C2C9",title:"burger marketed",text:"+$5 for every burger sold.",maxRound:2},{color:"#AF95C2",title:"waitress played",text:"Each waitress +$2."},{color:"#95A968",title:"pizza produced",text:"+1 Pizza Cook."},{color:"#98C2C9",title:"pizza marketed",text:"+$5 for every pizza sold.",maxRound:2},{color:"#AF95C2",title:"to have $20",text:"May see bank reserve cards."},{color:"#A9CB94",title:"Errand Boy played",text:"All buyers get +1 drink from each source."},{color:"#98C2C9",title:"drink marketed",text:"+$5 for every drink sold.",maxRound:2},{color:"#AF95C2",title:"to have $100",text:"Your CEO counts as CFO (+50% to cash earned). May not have CFO."},{color:"#A9CB94",title:"Cart Operator played",text:"Buyers get range +1."},{color:"#98C2C9",title:"airplane campaign",text:"Count +2 open slots when determining order of play."},{color:"#EAA791",title:"to lower prices",text:"Price -$1."},{color:"#BDB6B3",title:"to pay $20 or more in salaries",text:"May use multiple trainers on the same person."},{color:"#98C2C9",title:"radio campaign",text:"Your radios market 2 goods per turn instead of 1."}],newMilestones:[{color:"#98C2C9",title:"marketeer used",text:"$5 for every good your marketeers market; Distance -2.",maxRound:2},{color:"#98C2C9",title:"marketing trainee used",text:"+1 Kitchen Trainee and +1 Errand Boy."},{color:"#98C2C9",title:"campaign manager used",text:"This turn, may place 1 marketing tile with same type, duration and range."},{color:"#98C2C9",title:"brand manager used",text:"This turn, may place 2 different goods on 1 plane."},{color:"#98C2C9",title:"brand director used",text:"Your radio is permanent."},{color:"#95A968",title:"burger sold",text:"Your CEO always has 4 slots (regardless of reserve cards)."},{color:"#95A968",title:"pizza sold",text:"Place radio (pizza, 2 turns) on tile of each house that bought pizza."},{color:"#A9CB94",title:"lemonade sold",text:"Any employee can be trained on the job, preserving color."},{color:"#A9CB94",title:"beer sold",text:"May pay salary with food or drink."},{color:"#A9CB94",title:"coke sold",text:"Get a freezer that stores 10 items."},{color:"#A9CB94",title:"cart operator used",text:"Double amount of drinks hauled by cart/truck/zeppelin."},{color:"#BDB6B3",title:"recruiting girl used",text:"Get a free executive vice president; Pay no salary for him.",maxRound:2},{color:"#BDB6B3",title:"trainer used",text:"+1 trainer; No longer need to fire employees if broke.",maxRound:2},{color:"#EAA791",title:"discount manager used",text:"Remove $100 from the bank each round you discount by $3 or more.."},{color:"#AF95C2",title:"house built",text:"May use multiple trainers on the same person."},{color:"#AF95C2",title:"waitress used",text:"Your salaries are $3 each."},{color:"#cc0000",title:"new restaurant",text:"Place a permanent mailbox in restaurant area."}],ketchup:[{color:"#222222",fontColor:"#FFFFFF",title:"demand fulfulled by someone else",text:"Distance -1."}],lobbyists:[{color:"#AF95C2",title:"lobbyist used",text:"Add 1 tile to the city."}],coffee:[{color:"#8AC3A0",title:"coffee sold",text:"Build one coffee shop in the next clean up phase."}],ruralMarketers:[{color:"#98C2C9",title:"rural marketer used",text:"Place highway offramp."}]};var Ce=Object(F.a)({milestone:{margin:4,width:155,height:155,userSelect:"none",cursor:"pointer",border:"1px solid black",borderRadius:10},container:{margin:4,height:145,display:"flex",flexDirection:"column"},title:{textAlign:"center",fontWeight:600,textTransform:"uppercase",marginBottom:12,color:"#000"},text:{textAlign:"center",fontSize:"small",color:"#000"},maxRound:{width:145,textAlign:"center",fontWeight:"bold",fontSize:"small",color:"#f00"},checkmark:{fontSize:"xx-large",color:"#0f0",position:"absolute",marginTop:115,marginLeft:7},x:{fontSize:"xx-large",color:"#f00",position:"absolute",marginTop:115,marginLeft:7}}),ke=function(e){var t=e.index,a=e.milestone,r=e.onChange,l=e.value,o=Ce(),c=a.color,s=a.fontColor,i=void 0===s?"#000000":s,u=a.title,m=a.text,d=a.maxRound;return n.a.createElement("div",{className:o.milestone,style:{backgroundColor:c},onClick:function(){return r(t,l&&"available"!==l?"mine"===l?"unavailable":"available":"mine")}},"mine"===l&&n.a.createElement("div",{className:o.checkmark},"\u2713"),"unavailable"===l&&n.a.createElement("div",{className:o.x},"\u2717"),n.a.createElement("div",{className:o.container},n.a.createElement("div",{className:o.title,style:{color:i}},"First ",u),n.a.createElement("div",{className:o.text,style:{color:i}},m),n.a.createElement(M,null),d&&n.a.createElement("div",{className:o.maxRound},"Remove after ",n.a.createElement("br",null),"round ",d)))};var xe=["newMilestones","coffee","lobbyists","ruralMarketers","ketchup"],Oe=Object(F.a)({content:{padding:8}}),Se=function(e){var t=e.modules,a=e.data,l=e.onDataChanged,o=Oe(),c=Object(r.useState)(a.milestones||[]),s=Object(m.a)(c,2),i=s[0],u=s[1],d=Object(r.useMemo)((function(){return[].concat(Object(C.a)(t.hardChoices||t.newMilestones?[]:ve.base),Object(C.a)(t.hardChoices&&!t.newMilestones?ve.hardChoices:[]),Object(C.a)(xe.map((function(e){return t[e]?ve[e]:null})).filter((function(e){return e})).reduce((function(e,t){return[].concat(Object(C.a)(e),Object(C.a)(t))}),[]))).sort((function(e,t){return e.color.localeCompare(t.color)}))}),[t]),p=Object(r.useCallback)((function(){var e=xe.reduce((function(e,a){return e[a]=t[a],e}),{});l("milestoneType",e)}),[t,l]),b=function(e,t){var a=Object(C.a)(i);a[e]=t,u(a),l("milestones",a),p()},h=Object(r.useCallback)((function(){u([]),l("milestones",[]),p()}),[l,p]);return Object(r.useEffect)((function(){var e=a.milestoneType,r=void 0===e?{}:e;xe.some((function(e){return r[e]!==t[e]}))&&h()}),[a,t,h]),n.a.createElement(B,{width:"auto",maxWidth:845},n.a.createElement(P.a,{title:"Milestone Tracker"}),n.a.createElement(S.a,{className:o.content},n.a.createElement(Ee.a,{container:!0},d.map((function(e,t){return n.a.createElement(ke,{key:t,index:t,milestone:e,value:i[t],onChange:b})})))),n.a.createElement(k.a,null,n.a.createElement(x.a,{color:"secondary",onClick:h},"Reset")))};function je(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var we=p()({checkbox:{minWidth:225}}),Be=function(e){var t=e.label,a=e.prop,r=e.modules,l=e.setModules,o=we();return n.a.createElement(A,{className:o.checkbox,label:t,checked:r[a]||!1,onChange:function(e){return l(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?je(a,!0).forEach((function(t){Object(ne.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):je(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},r,Object(ne.a)({},a,e)))}})},Pe=[{label:"New Districts",prop:"newDistricts"},{label:"Lobbyists",prop:"lobbyists"},{label:"New Milestones",prop:"newMilestones"},{label:"Coffee",prop:"coffee"},{label:"Kimchi",prop:"kimchi"},{label:"Sushi",prop:"sushi"},{label:"Noodles",prop:"noodles"},{label:"Ketchup",prop:"ketchup"},{label:"Fry Chefs",prop:"fryChefs"},{label:"Night Shift Managers",prop:"nightShiftManagers"},{label:"Mass Marketers",prop:"massMarketers"},{label:"Rural Marketers",prop:"ruralMarketers"},{label:"Gourmet Food Critics",prop:"gourmetFoodCritics"},{label:"Movie Stars",prop:"movieStars"},{label:"Reserve Prices",prop:"reservePrices"},{label:"Hard Choices",prop:"hardChoices"}];var Ne=p()({description:{margin:"0 16px 0 16px"},container:{display:"flex",flexDirection:"row"},leftColumn:{minWidth:225,marginRight:12},rightColumn:{minWidth:225}}),ze=function(e){var t=e.modules,a=e.onModulesChanged,r=Ne();return n.a.createElement(B,{width:"auto",maxWidth:500},n.a.createElement(P.a,{title:"Expansion Modules"}),n.a.createElement(D,{className:r.description,dense:!0,label:"Description",value:"Select which modules are in play. This will allow the other helpers to show the correct information. Changing these may reset data in other helpers."}),n.a.createElement(S.a,null,n.a.createElement(Ee.a,{container:!0},Pe.map((function(e){var r=e.label,l=e.prop;return n.a.createElement(Be,{key:r,modules:t,setModules:a,label:r,prop:l})})))),n.a.createElement(k.a,null,n.a.createElement(x.a,{color:"secondary",onClick:function(){return a({})}},"Clear"),n.a.createElement(M,null),n.a.createElement(x.a,{onClick:function(){var e=Pe.reduce((function(e,a){var r=a.prop;return e[r]=!t[r],e}),{});a(e)}},"Invert"),n.a.createElement(x.a,{onClick:function(){var e=Pe.reduce((function(e,t){return e[t.prop]=!0,e}),{});a(e)}},"Select All")))},Te=a(232),Ae=a(222),Me=a(233),Fe=a(97),Re=a.n(Fe);var De=p()((function(e){return{closed:{transition:"transform .2s",transform:"rotate(180deg)",color:"".concat(e.palette.text.primary," !important")},open:{transition:"transform .2s",transform:"rotate(0deg)",color:"".concat(e.palette.text.primary," !important")}}})),Ie=function(e){var t=e.open,a=De();return n.a.createElement(Re.a,{className:t?a.open:a.closed})},$e={byPlayer:{2:{mapSize:"3 x 3",employees:"1",billboards:"#2, #3, #12, #15, #16",reserve:"$100"},3:{mapSize:"3 x 4",employees:"1",billboards:"#2, #3, #15, #16",reserve:"$150"},4:{mapSize:"4 x 4",employees:"2",billboards:"#3, #16",reserve:"$200"},5:{mapSize:"4 x 5",employees:"3",billboards:"None",reserve:"$250"},6:{mapSize:"4x6 (use New Districts)",employees:"3",billboards:"None",reserve:"$300"}},byModule:{newDistricts:"5 new map tiles (or 6 if you are playing with lobbyists).",lobbyists:"Lobbyist employee cards; \u201cFirst Lobbyist Used\u201d milestone cards; new road tiles; park tiles; road block markers; optionally, the new city map tile with two parks. If playing with 5 or 6 players, you will need to also use the new map tiles.",newMilestones:"Remove all the milestone cards from the base game. Instead, use the new milestone cards provided except ketchup, first coffee, first rural marketeer, and first lobbyist (unless you are also using these modules). Also, take 3 \u201cRemove after turn 2\u201d markers and the new airplane marketing tiles.",coffee:"Barista trainee, barista and lead barista employee cards; small restaurant (coffee shop) counters for each player; wooden coffee pieces; first coffee sold milestone; additional luxury manager employee card.",kimchi:"Kimchi master employee cards; wooden kimchi pieces; additional luxury manager employee card.",sushi:"Sushi cook and sushi chef employee cards; wooden sushi pieces; additional luxury manager",noodles:"Noodle cook and noodle chef employee cards; wooden noodle pieces; additional luxury manager employee card.",ketchup:"Ketchup milestone cards \u201cSomeone sells your demand\u201d.",fryChefs:"Fry Chef employee cards.",nightShiftManagers:"Night shift manager employee cards.",massMarketers:"Mass marketeer employee cards.",ruralMarketers:"Rural marketeer employee cards; \u201cFirst Rural Marketeer used\u201d milestone cards; rural area tile; giant billboard tiles; highway offramp tiles \u201cFreeway\u201d.",gourmetFoodCritics:"Gourmet food critic employee cards; gourmet guide marketing tiles.",movieStars:"Movie star employee cards. These are unique employees, there is only one of each available.",reservePrices:"3 new bank reserve cards per player. The bank reserve cards from the base game are not used.",hardChoices:"5 Milestone depletion markers."}};var He=Object.keys($e.byPlayer).map((function(e){return{label:"".concat(e," players"),value:e}})),Ge=Object(F.a)({expandButton:{marginLeft:"auto"},playerItem:{width:175}}),We=function(e){var t=e.modules,a=Ge(),l=Object(r.useState)(!1),o=Object(m.a)(l,2),c=o[0],s=o[1],i=Object(r.useState)(2),u=Object(m.a)(i,2),d=u[0],p=u[1],b=$e.byPlayer[d],h=b.mapSize,f=b.employees,g=b.billboards,y=b.reserve,E=Object(r.useMemo)((function(){return Pe.filter((function(e){var a=e.prop;return t[a]})).map((function(e){var t=e.label,a=e.prop;return{label:t,value:$e.byModule[a]}}))}),[t]);return n.a.createElement(B,{width:"auto",maxWidth:400},n.a.createElement(P.a,{title:"Setup Reference"}),n.a.createElement(S.a,null,n.a.createElement(G.a,null,n.a.createElement(V,{label:"Players",value:d,onChange:p,items:He})),n.a.createElement(Ee.a,{container:!0},n.a.createElement(D,{className:a.playerItem,label:"Map Size",value:h}),n.a.createElement(D,{className:a.playerItem,label:"1x Employees",value:f}),n.a.createElement(D,{className:a.playerItem,label:"Billboards Removed",value:g}),n.a.createElement(D,{className:a.playerItem,label:"Reserve",value:y}))),E.length>0&&n.a.createElement(k.a,null,n.a.createElement(Te.a,{title:"Expand for expansion setup information.",enterDelay:350},n.a.createElement(Ae.a,{className:a.expandButton,onClick:function(){return s(!c)}},n.a.createElement(Ie,{open:c})))),n.a.createElement(Me.a,{in:c,timeout:"auto",unmountOnExit:!0},n.a.createElement(S.a,null,E.map((function(e){var t=e.label,r=e.value;return n.a.createElement(D,{key:t,className:a.moduleItem,label:t,value:r})})))))};var Le="foodChainMagnateData",Ke=[{name:"B\xe4renpark",path:"/barenpark",component:re},{name:"Food Chain Magnate",path:"/foodChainMagnate",component:function(){var e=oe({localStorageKey:Le}),t=e.data,a=e.onDataUpdate,l=Object(r.useState)(t.modules||{}),o=Object(m.a)(l,2),c=o[0],s=o[1],i=Object(r.useCallback)((function(e){s(e),a("modules",e)}),[a]),u=[{label:"Milestones",alwaysRender:!1,content:n.a.createElement(Se,{data:t,onDataChanged:a,modules:c})},{label:"Single House Sales",content:n.a.createElement(ye,{modules:c})},{label:"Bulk House Sales",content:n.a.createElement(be,{modules:c})},{label:"Setup",content:n.a.createElement(We,{modules:c})},{label:"Modules",content:n.a.createElement(ze,{data:t,onDataChanged:a,onDataUpdate:a,modules:c,onModulesChanged:i})}];return n.a.createElement(v,{title:"Food Chain Magnate",tabs:u})}}];var Ye=function(){return n.a.createElement(B,null,n.a.createElement(P.a,{title:"Welcome!"}),n.a.createElement(S.a,null,n.a.createElement(O.a,null,"Welcome to BGHelper! Select a game in the menu to the left or search for one above.")))},Ue=a(235),Je=a(102),Xe=a.n(Je),Ve=a(242),qe=a(99),_e=a.n(qe),Qe=a(227),Ze=a(171),et=a(236),tt=a(237),at=a(104),rt=a.n(at),nt=a(103),lt=a.n(nt),ot=a(105),ct=a.n(ot),st=a(238),it=a(101),ut=a.n(it),mt=a(234),dt=a(241);var pt=["INPUT","TEXTAREA","SELECT"],bt=p()({autocomplete:{width:300},dialogPaper:{overflowY:"visible"},dialogRoot:{top:"48px !important",bottom:"unset !important"},popup:{zIndex:1301}}),ht=function(){var e=bt(),t=Object(u.e)(),a=Object(r.useState)(!1),l=Object(m.a)(a,2),o=l[0],c=l[1],s=Object(r.useState)(null),i=Object(m.a)(s,2),d=i[0],p=i[1],b=function(){return c(!0)},h=function(){return c(!1)},f=Object(r.useRef)(null),g=Object(r.useCallback)((function(e){"."!==e.key||pt.includes(e.target.tagName)||b()}),[]);return Object(r.useEffect)((function(){o&&f&&f.current&&setTimeout((function(){return f.current.focus()}),125)}),[o,f]),Object(r.useEffect)((function(){return document.addEventListener("keyup",g),function(){return document.removeEventListener("keyup",g)}}),[g]),n.a.createElement(n.a.Fragment,null,n.a.createElement(Te.a,{title:"Site Search"},n.a.createElement(Ae.a,{onClick:b},n.a.createElement(ut.a,null))),n.a.createElement(mt.a,{keepMounted:!0,open:o,onClose:h,classes:{paper:e.dialogPaper,root:e.dialogRoot}},n.a.createElement(dt.a,{className:e.autocomplete,autoComplete:!0,autoHightlight:!0,clearOnEscape:!0,options:Ke,value:d,onChange:function(e,a){a&&(t.push(a.path),p(null),h())},onClose:h,getOptionLabel:function(e){return e.name},renderInput:function(e){return n.a.createElement(ce.a,Object.assign({},e,{label:"Site Search",variant:"outlined",fullWidth:!0,inputRef:f}))},classes:{popup:e.popup}})))};var ft=Object(F.a)((function(e){return{drawerPaper:{width:225},toolbar:{paddingLeft:8,paddingRight:8},title:{paddingLeft:12,flex:1},nested:{paddingLeft:e.spacing(4)},link:{textDecoration:"none",color:"inherit"}}})),gt=function(){var e=ft(),t=Object(r.useContext)(g).title,a=Object(r.useState)(null),l=Object(m.a)(a,2),o=l[0],c=l[1],s=Object(r.useState)(!1),u=Object(m.a)(s,2),d=u[0],p=u[1],h=function(){return p(!0)},f=function(){return p(!1)},y=function(e){return function(){return c(o===e?null:e)}};return n.a.createElement(n.a.Fragment,null,n.a.createElement(b.a,{position:"static"},n.a.createElement(Ue.a,{className:e.toolbar},n.a.createElement(Ae.a,{className:e.menuButton,onClick:h},n.a.createElement(Xe.a,null)),n.a.createElement(O.a,{variant:"h6",className:e.title},t),n.a.createElement(ht,null),n.a.createElement(Te.a,{title:"Contribute on GitHub!"},n.a.createElement(Ae.a,{target:"_blank",href:"https://github.com/NiXXeD/bghelper"},n.a.createElement("img",{alt:"github link",width:"24",height:"24",src:_e.a}))))),n.a.createElement(Ve.a,{open:d,onOpen:h,onClose:f,classes:{paper:e.drawerPaper}},n.a.createElement(i.b,{className:e.link,to:"/"},n.a.createElement(Ze.a,{button:!0,onClick:f},n.a.createElement(et.a,null,n.a.createElement(lt.a,null)),n.a.createElement(tt.a,{primary:"Home"}))),n.a.createElement(st.a,null),n.a.createElement(Qe.a,null,n.a.createElement(Ze.a,{button:!0,onClick:y("games")},n.a.createElement(et.a,null,n.a.createElement(rt.a,null)),n.a.createElement(tt.a,{primary:"Games"}),n.a.createElement(Ie,{open:"games"===o})),n.a.createElement(Me.a,{in:"games"===o,timeout:"auto"},Ke.map((function(t){var a=t.path,r=t.name;return n.a.createElement(i.b,{key:a,className:e.link,to:a},n.a.createElement(Ze.a,{className:e.nested,button:!0,onClick:f},n.a.createElement(tt.a,{primary:r})))}))),n.a.createElement(Ze.a,{button:!0,onClick:y("utils")},n.a.createElement(et.a,null,n.a.createElement(ct.a,null)),n.a.createElement(tt.a,{primary:"Utilities"}),n.a.createElement(Ie,{open:"utils"===o})),n.a.createElement(Me.a,{in:"utils"===o,timeout:"auto"},n.a.createElement(Ze.a,{className:e.nested,button:!0,onClick:f},n.a.createElement(tt.a,{primary:"TBD"}))))))};var yt="Board Game Helper",Et=function(e){var t=e.children,a=Object(r.useState)(yt),l=Object(m.a)(a,2),o=l[0],c=l[1],s=Object(r.useCallback)((function(){return c(yt)}),[]),i=Object(r.useMemo)((function(){return{title:o,setTitle:c,clearTitle:s}}),[o,s]);return n.a.createElement(g.Provider,{value:i},t)},vt=Object(c.a)({palette:{type:"dark"}});var Ct,kt=function(){return n.a.createElement(i.a,null,n.a.createElement(s.a,{theme:vt},n.a.createElement(Et,null,n.a.createElement("div",null,n.a.createElement(gt,null),n.a.createElement(u.a,{exact:!0,path:"/"},n.a.createElement(Ye,null)),Ke.map((function(e){var t=e.path,a=e.component;return n.a.createElement(u.a,{exact:!0,path:t,key:t},n.a.createElement(a,null))}))))))};a(161),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(kt,null),document.getElementById("root")),Ct=kt,o.a.render(n.a.createElement(Ct,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){return e.unregister()}))},99:function(e,t,a){e.exports=a.p+"static/media/github.7337e417.svg"}},[[134,1,2]]]);
//# sourceMappingURL=main.48bbe06f.chunk.js.map