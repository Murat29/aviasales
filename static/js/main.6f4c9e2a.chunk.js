(this.webpackJsonpaviasales=this.webpackJsonpaviasales||[]).push([[0],Array(21).concat([function(e,t,n){},,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),a=n(6),r=n.n(a),s=(n(21),n(13)),o=n(4),u=n(3),l=[{title:"\u0411\u0435\u0437 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a",value:"0"},{title:"1 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430",value:"1"},{title:"2 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430",value:"2"},{title:"3 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430",value:"3"}],h=[{name:"cheap",title:"\u0421\u0430\u043c\u044b\u0439 \u0434\u0435\u0448\u0435\u0432\u044b\u0439",position:"l"},{name:"quick",title:"\u0421\u0430\u043c\u044b\u0439 \u0431\u044b\u0441\u0442\u0440\u044b\u0439"},{name:"optimal",title:"\u041e\u043f\u0442\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439",position:"r"}],d={radio:"cheap",checkboxes:l.map((function(e){return e.value}))},b=Object(u.c)({name:"filterTickets",initialState:d,reducers:{updataRadio:function(e,t){e.radio=t.payload},"mark\u0421heckbox":function(e,t){e.checkboxes.push(t.payload)},"remove\u0421heckbox":function(e,t){var n=e.checkboxes.indexOf(t.payload);e.checkboxes.splice(n,1)},markAllCheckbox:function(e){e.checkboxes=l.map((function(e){return e.value}))},"removeAll\u0421heckbox":function(e){e.checkboxes=[]}}}),j=b.reducer,f=b.actions,x=f.updataRadio,p=f.mark\u0421heckbox,k=f.remove\u0421heckbox,m=f.markAllCheckbox,O=f.removeAll\u0421heckbox,v=n(12),g=n.n(v),_=n(14),N=n(15),C=n(16),T=new(function(){function e(t){Object(N.a)(this,e),this.url=void 0,this.url=t.url}return Object(C.a)(e,[{key:"getSearchId",value:function(){return fetch(this.url+"/search",{method:"GET"}).then(this._getResponseData)}},{key:"getPackTickets",value:function(e){return fetch("".concat(this.url,"/tickets?searchId=").concat(e),{method:"GET"}).then(this._getResponseData)}},{key:"_getResponseData",value:function(e){return e.ok?e.json():(console.log(e.ok),Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))}}]),e}())({url:"https://front-test.beta.aviasales.ru"}),y=Object(u.b)("/tickets",Object(_.a)(g.a.mark((function e(){var t,n,c,i,a,r,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],n=0,e.next=4,T.getSearchId();case 4:c=e.sent,i=c.searchId;case 6:if(!(n<5)){e.next=23;break}return e.prev=7,e.next=10,T.getPackTickets(i);case 10:if(a=e.sent,r=a.tickets,s=a.stop,t=t.concat(r),!s){e.next=16;break}return e.abrupt("break",23);case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(7),n++;case 21:e.next=6;break;case 23:return e.abrupt("return",t);case 24:case"end":return e.stop()}}),e,null,[[7,18]])})))),w=Object(u.c)({name:"filterTickets",initialState:{tickets:[]},reducers:{},extraReducers:function(e){e.addCase(y.fulfilled,(function(e,t){e.tickets=t.payload}))}}).reducer,M=(n(27),n(1)),R=function(e){var t=e.handleChange,n=e.data,c=e.checked\u0421heckboxes;return Object(M.jsxs)("label",{className:"checkbox",children:[Object(M.jsx)("input",{onChange:function(e){return t(e)},className:"checkbox__invisible",type:"checkbox",checked:-1!==c.indexOf(n.value)||c.length===l.length,value:n.value}),Object(M.jsx)("span",{className:"checkbox__visible"}),n.title]})},S=(n(29),function(e){var t=e.children;return Object(M.jsx)("div",{className:"container",children:t})}),A=(n(30),function(e){var t=e.checked\u0421heckboxes,n=e.handle\u0421heckbox,c=e.handleCheckboxAll;return Object(M.jsx)(S,{children:Object(M.jsxs)("aside",{className:"filter",children:[Object(M.jsx)("p",{className:"filter__title",children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a"}),Object(M.jsx)(R,{handleChange:c,data:{title:"\u0412\u0441\u0435",value:"-1"},"checked\u0421heckboxes":t}),l.map((function(e){return Object(M.jsx)(R,{handleChange:n,data:e,"checked\u0421heckboxes":t},e.title)}))]})})}),I=(n(31),function(e){var t=e.currentValue,n=e.handleChange,c=e.name,i=e.title,a=e.position;return Object(M.jsxs)("label",{className:"input-radio",children:[Object(M.jsx)("input",{onChange:function(e){return n(e)},checked:t===c,className:"input-radio__invisible",type:"radio",name:c,value:c,tabIndex:1}),Object(M.jsx)("span",{className:"input-radio__visible  ".concat("l"===a&&"input-radio__invisible_position_left"," \n      ").concat("r"===a&&"input-radio__invisible_position_right"),children:i})]})}),D=(n(32),function(e){var t=e.radioValue,n=e.handleRadio;return Object(M.jsx)("div",{className:"tabs",children:h.map((function(e){return Object(M.jsx)(I,{handleChange:n,name:e.name,currentValue:t,title:e.title,position:e.position},e.name)}))})}),F=n.p+"static/media/logo.309a1b5d.svg",E=(n(33),function(){return Object(M.jsx)("header",{className:"header",children:Object(M.jsx)("img",{className:"header__logo",src:F,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f."})})}),P=(n(34),function(e){var t=e.children;return Object(M.jsx)("main",{className:"main",children:t})}),V=(n(35),function(e){var t=e.children;return Object(M.jsx)("div",{className:"column",children:t})}),q=(n(36),function(e){var t=e.children;return Object(M.jsx)("ul",{className:"tickets-list",children:t})}),B=(n(37),function(e){var t=e.title,n=e.text;return Object(M.jsxs)("div",{className:"cell",children:[Object(M.jsx)("p",{className:"cell__title",children:t}),n&&Object(M.jsx)("p",{className:"cell__text",children:n})]})}),G=(n(38),function(e){var t=e.isFirst,n=e.children;return Object(M.jsx)("div",{className:"row ".concat(t&&"row_first"),children:n})}),J=(n(39),function(e){var t=e.data,n=t.price,c=t.carrier,i=t.segments;return Object(M.jsxs)("li",{className:"ticket",children:[Object(M.jsxs)(G,{isFirst:!0,children:[Object(M.jsxs)("p",{className:"ticket__price",children:[n," \u0420"]}),Object(M.jsx)("img",{className:"ticket__logo",src:"https://pics.avs.io/99/36/".concat(c,".png"),alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u0430\u0432\u0438\u0430\u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438."})]}),i.map((function(e,t){return Object(M.jsxs)(G,{children:[Object(M.jsx)(B,{title:e.origin+"-"+e.destination,text:e.departureTime+"-"+e.arrivalTime}),Object(M.jsx)(B,{title:"\u0412 \u043f\u0443\u0442\u0438",text:e.duration}),Object(M.jsx)(B,{title:e.transplants,text:e.stops})]},t)}))]})});function L(e){return("0"+e.getHours()).slice(-2)+":"+("0"+e.getMinutes()).slice(-2)}function H(e){return e<60?e+"\u043c":e<1440?Math.floor(e/60)+"\u0447 "+e%60+"\u043c":Math.floor(e/1440)+"\u0434 "+Math.floor(e%1440/60)+"\u0447 "+e%60+"\u043c"}var z=function(e){var t=e.data,n=t.price,i=t.carrier,a=t.segments,r=Object(c.useMemo)((function(){return{price:n,carrier:i,segments:a.map((function(e){return{origin:e.origin,destination:e.destination,departureTime:L(new Date(e.date)),arrivalTime:(n=new Date(e.date),c=e.duration,n.setMinutes(n.getMinutes()+c),L(n)),stops:e.stops.join(","),transplants:(t=e.stops.length,0===t?"0 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a":1===t?"1 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430":t<5?t+" \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438":t+" \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a"),duration:H(e.duration)};var t,n,c}))}}),[i,n,a]);return Object(M.jsx)(S,{children:Object(M.jsx)(J,{data:r})})},K=(n(40),function(e){var t=e.title,n=e.onClick;return Object(M.jsx)("button",{onClick:n,className:"btn",children:t})});var Q=n(8);function U(e){return e.segments.reduce((function(e,t){return e+t.duration}),0)}n(41);var W=function(){var e=Object(o.c)((function(e){return e.tickets.tickets})),t=Object(o.c)((function(e){return e.filterTickets.radio})),n=Object(o.c)((function(e){return e.filterTickets.checkboxes})),i=Object(c.useState)(5),a=Object(s.a)(i,2),r=a[0],u=a[1],h=Object(c.useState)([]),d=Object(s.a)(h,2),b=d[0],j=d[1],f=Object(o.b)();Object(c.useEffect)((function(){j(function(e,t){switch(t){case"cheap":return Object(Q.a)(e).sort((function(e,t){return e.price-t.price}));case"quick":return Object(Q.a)(e).sort((function(e,t){return U(e)-U(t)}));case"optimal":return Object(Q.a)(e).sort((function(e,t){return e.price+4*U(e)-(t.price+4*U(t))}));default:return e}}(e,t))}),[e,t]);var v=Object(c.useMemo)((function(){return function(e,t,n){if(0===e.length)return e;for(var c=[],i=0;c.length<n&&i<e.length;i++)e[i].segments.every((function(e){return t.includes(""+e.stops.length)}))&&c.push(e[i]);return c}(b,n,r)}),[b,n,r]);return Object(c.useEffect)((function(){f(y())}),[]),Object(M.jsxs)("div",{className:"app",children:[Object(M.jsx)(E,{}),Object(M.jsxs)(P,{children:[Object(M.jsx)(A,{"checked\u0421heckboxes":n,"handle\u0421heckbox":function(e){var t=e.target,n=t.checked,c=t.value;f(n?p(c):k(c))},handleCheckboxAll:function(e){n.length<l.length?f(m()):f(O())}}),Object(M.jsxs)(V,{children:[Object(M.jsx)(D,{radioValue:t,handleRadio:function(e){f(x(e.target.value))}}),Object(M.jsx)(q,{children:v.map((function(e,t){return Object(M.jsx)(z,{data:e},t)}))}),Object(M.jsx)(K,{title:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0435\u0449\u0435 5 \u0431\u0438\u043b\u0435\u0442\u043e\u0432!",onClick:function(){u((function(e){return e+5}))}})]})]})]})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),a(e),r(e)}))},Y=n(2),Z=Object(Y.b)({filterTickets:j,tickets:w}),$=Object(u.a)({reducer:Z});r.a.render(Object(M.jsx)(i.a.StrictMode,{children:Object(M.jsx)(o.a,{store:$,children:Object(M.jsx)(W,{})})}),document.getElementById("root")),X()}]),[[42,1,2]]]);
//# sourceMappingURL=main.6f4c9e2a.chunk.js.map