(this.webpackJsonpisomorphic=this.webpackJsonpisomorphic||[]).push([[47],{1479:function(e,t,a){"use strict";a.r(t);a(704);var n=a(710),c=a(20),o=a(206),l=(a(657),a(656)),r=a(0),i=a.n(r),d=a(207),u=a(668),s=a(42),m=a(654),p=a(683),v=a(699),b=a(766),h=a(161),f=a(687),g=a(713),O=a(209),E=a(705),j=a.n(E),y=l.a.Option;t.default=function(){var e=Object(r.useState)(0),t=Object(o.a)(e,2),a=t[0],E=t[1],x=Object(s.c)((function(e){return e.Auth.idToken})),w=[{uniq:"contactType",type:"select",icon:i.a.createElement(p.c,null),placeholder:["\u0627\u0644\u0628\u0644\u062f","Contact Type"],key:"country_id",data:{isOnline:!0,url:"contactTypes",params:{},options:[Object(c.a)({id:null},"title_en","All")],optionName:"title_en"}},{icon:i.a.createElement(p.a,null),type:"select",placeholder:["Status","Status"],key:"status",data:{isOnline:!1,options:[Object(c.a)({id:null},"name_en","All"),Object(c.a)({id:1},"name_en","Open"),Object(c.a)({id:3},"name_en","Closed"),Object(c.a)({id:2},"name_en","Under Process")],optionName:"name_en"}},{uniq:"fromTO",type:"dateFromTo",icon:i.a.createElement(v.b,null),placeholder:{ar:["\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0628\u062f\u0621"," \u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0627\u0646\u062a\u0647\u0627\u0621"],en:["start date","end date"]},key:["from","to"],data:{isOnline:!1}}];return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{fetcher:a,action:!1,indexRequest:b.a.api.index,Breadcrumb:{type:"SET",payload:[{key:b.a.routes.indexKey,to:b.a.routes.index,title:b.a.routes.indexTitle}]},filters:w,attachExport:!0,deleteRow:{status:Object(f.a)("contacts","delete"),deleteRecord:function(e){var t,a,n,c=e.id;h.b.promise(d.b[null===(t=b.a.api.delete)||void 0===t||null===(a=t[0])||void 0===a?void 0:a.method]("".concat(null===(n=b.a.api.delete)||void 0===n?void 0:n[1]).concat(c),{headers:{Authorization:"Bearer ".concat(x)}}),{pending:"Pending",success:{render:function(e){return E((function(e){return!e})),console.log(e.data),"\ud83d\udc4c ".concat(e.data.data.message)},icon:"\ud83d\udfe2"},error:{render:function(e){var t,a,n;return"\ud83e\udd2f ".concat((null===e||void 0===e||null===(t=e.data)||void 0===t||null===(a=t.response)||void 0===a||null===(n=a.data)||void 0===n?void 0:n.message)||"Backend Error Occured")}}})}},generalCols:Object(m.a)([{key:"date",content:function(e,t){return i.a.createElement("div",{style:{display:"flex",flexDirection:"column",gap:5}},i.a.createElement(n.a,{color:"cyan"},j()(e).format("iYYYY-iM-iD")," H"),i.a.createElement(n.a,{color:"blue"},j()(e).format("YYYY-M-D")," G "))}},"time",{key:"Customer Name",content:function(e,t){return i.a.createElement("div",null,i.a.createElement(O.b,{to:"".concat(g.a.routes.show).concat(t.user_id)},t.user_name))}},"contactType","message",{key:"status",content:function(e,t){return i.a.createElement("div",null,b.b[e])}},{title:"Action",key:"status",content:function(e,t){return 3!=e&&i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{style:{width:130},value:e,onChange:function(e){return function(e,t){console.log({id:e},{value:t});var a={status:t};h.b.promise(d.b.post("contactUs/".concat(e,"/changeStatus"),a,{headers:{Authorization:"Bearer ".concat(x)}}),{pending:"Pending",success:{render:function(e){return E((function(e){return!e})),console.log(e.data),"\ud83d\udc4c ".concat(e.data.data.message)},icon:"\ud83d\udfe2"},error:{render:function(e){var t,a,n;return"\ud83e\udd2f ".concat((null===e||void 0===e||null===(t=e.data)||void 0===t||null===(a=t.response)||void 0===a||null===(n=a.data)||void 0===n?void 0:n.message)||"Backend Error Occured")}}})}(t.id,e)}},i.a.createElement(y,{value:1},b.b[1]),i.a.createElement(y,{value:2},b.b[2]),i.a.createElement(y,{value:3},b.b[3])))}}]),options:[]}))}},654:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(0),c=a.n(n),o=(a(655),function(e){return e.map((function(e){return{title:(null===e||void 0===e?void 0:e.title)?e.title.translate():(null===e||void 0===e?void 0:e.key)?e.key.translate():e.translate(),dataIndex:(null===e||void 0===e?void 0:e.key)?e.key:e,key:(null===e||void 0===e?void 0:e.key)?e.key:e,align:e.align?e.align:"left",render:(null===e||void 0===e?void 0:e.content)?function(t,a){return c.a.createElement("div",{className:"text-overflow"},e.content(t,a))}:function(e){return c.a.createElement("div",{className:"text-overflow"},e)}}}))})},655:function(e,t,a){},666:function(e,t,a){},667:function(e,t,a){},668:function(e,t,a){"use strict";var n=a(59),c=(a(678),a(677)),o=(a(680),a(685)),l=a(206),r=a(20),i=a(1),d=(a(691),a(694)),u=(a(674),a(673)),s=a(118),m=(a(657),a(656)),p=(a(692),a(695)),v=a(0),b=a.n(v),h=a(207),f=a(19),g=(a(665),a(697),a(698)),O=(a(666),a(653)),E=function(e){e.styles;var t=e.columns,a=e.dataSource,n=e.loading,c=e.pagination,o=e.footerContent,l=Object(s.a)(e,["styles","columns","dataSource","loading","pagination","footerContent"]);Object(f.g)();return b.a.createElement(g.a,Object.assign({style:{width:"100%"},footer:function(){return b.a.createElement("div",{style:{display:"flex"}},"".concat((null===o||void 0===o?void 0:o[0])?o[0]:0," "),o[1])},dataSource:a,columns:t,pagination:c,loading:{indicator:b.a.createElement(O.a,null),spinning:n}},l))},j=a(1449),y=a(1414),x=a(1450),w=a(1452),C=a(1451),k=(a(667),function(e){var t=e.children,a=e.onChange,n=e.styles,c=e.value,o=e.name,l=e.type,r=e.placeholder,d=(e.divStyels,Object(s.a)(e,["children","onChange","styles","value","name","type","placeholder","divStyels"]));return b.a.createElement(b.a.Fragment,null,t,b.a.createElement("input",Object.assign({className:"custom-input",style:Object(i.a)({},n),name:o},d,{type:l,value:c,placeholder:r,onChange:a})))}),S=a(209),R=a(693),U=a.n(R),F=a(42),Y=(a(210),a(205));function N(){var e=Object(Y.a)(["\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n"]);return N=function(){return e},e}var T=a(117).c.div(N()),A=function(e){return b.a.createElement(T,Object.assign({className:null!=e.className?"".concat(e.className," isoLayoutContentWrapper"):"isoLayoutContentWrapper"},e),e.children)},D=function(e){var t=e.placeholder,a=e.onChange,n=Object(s.a)(e,["placeholder","onChange"]);return b.a.createElement(b.a.Fragment,null,b.a.createElement(k,Object.assign({name:"numberSearch",placeholder:t,onChange:a},n)))},L=a(689),_=p.a.RangePicker,z=m.a.Option,q={};t.a=function(e){var t=e.fetcher,a=e.indexRequest,p=e.Breadcrumb,g=e.addRowURL,O=e.editRowURL,k=e.showRowURL,R=e.deleteRow,Y=e.generalCols,N=e.options,T=e.filters,B=e.action,P=e.attachOtherContent,M=e.attachExport,V=Object(s.a)(e,["fetcher","indexRequest","Breadcrumb","addRowURL","editRowURL","showRowURL","deleteRow","generalCols","options","filters","action","attachOtherContent","attachExport"]),I={title:"numbers".translate(),dataIndex:"id",key:"id",width:"60px",render:function(e,t,a){return b.a.createElement("a",{href:""}," ",a+1+ye," ")}},$=Object(L.a)(),K=$.width,W=($.height,[{title:"Actions",dataIndex:"id",key:"id",render:function(e,t,a){return b.a.createElement("div",{style:{color:"#646D82",cursor:"pointer"},className:"d-flex"},O&&b.a.createElement(S.b,{to:"".concat(O).concat(t.id)},b.a.createElement(u.a,{shape:"circle",style:{margin:" 2px"}},b.a.createElement(j.a,null))),k&&b.a.createElement(S.b,{to:"".concat(k).concat(e)},b.a.createElement(u.a,{shape:"circle",style:{margin:" 2px"}},b.a.createElement(y.a,null))),(null===R||void 0===R?void 0:R.status)?b.a.createElement(d.a,{placement:"top",title:"You Want to Delete this ?",okText:"Delete",onConfirm:function(){return R.deleteRecord(t)},cancelText:"cancel"},b.a.createElement(u.a,{shape:"circle",style:{margin:" 2px"}},b.a.createElement(x.a,{style:{color:"mediumvioletred"}}))):"")}}]);function J(e){var t=e.uniq;Q((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(r.a)({},t,!H[t]))}))}var Z=Object(v.useState)({}),G=Object(l.a)(Z,2),H=G[0],Q=G[1],X=Object(v.useState)(T),ee=Object(l.a)(X,2),te=ee[0],ae=ee[1],ne=function(e){var t=e.placeholder,a=e.key;return b.a.createElement(D,{style:{width:200},placeholder:"ar"==Ae?t[0]:t[1],onChange:function(e){var t;(null===(t=e.target)||void 0===t?void 0:t.value)?Ne((function(t){return Object(i.a)(Object(i.a)({},t),{},Object(r.a)({},a,e.target.value))})):delete Ye[a]&&Ne((function(e){return Object(i.a)({},e)})),xe(0),Se.current=1}})},ce=function(e){var t=e.placeholder,a=e.key;return b.a.createElement(_,{style:{width:230},placeholder:"ar"==Ae?null===t||void 0===t?void 0:t.ar:null===t||void 0===t?void 0:t.en,onChange:function(e){if(e){var t=U()(e[0]).format("YYYY-MM-DD"),n=U()(e[1]).format("YYYY-MM-DD");Ne((function(e){var c;return Object(i.a)(Object(i.a)({},e),{},(c={},Object(r.a)(c,null===a||void 0===a?void 0:a[0],t),Object(r.a)(c,null===a||void 0===a?void 0:a[1],n),c))})),xe(0),Se.current=1}else delete Ye[a[0]],delete Ye[a[1]],Ne((function(e){return Object(i.a)({},e)})),xe(0),Se.current=1}})},oe=function(e,t){var a,n,c=e.placeholder,o=e.key,l=e.data,d=e.multiple;return b.a.createElement(m.a,{mode:d,style:{width:200},showSearch:!0,value:d?void 0:Ye[o],onChange:function(e){e?Ne((function(t){return Object(i.a)(Object(i.a)({},t),{},Object(r.a)({},o,e))})):(delete Ye[o],Ne((function(e){return Object(i.a)({},e)}))),xe(0),Se.current=1},placeholder:"ar"==Ae?c[0]:c[1],optionFilterProp:"children"},null===(a=te[t].data)||void 0===a||null===(n=a.options)||void 0===n?void 0:n.map((function(e){return b.a.createElement(z,{value:e.id},e[null===l||void 0===l?void 0:l.optionName])})))},le=function(){return de&&T.map((function(e,t){return b.a.createElement(b.a.Fragment,null,b.a.createElement(b.a.Fragment,null,"search"==e.type&&function(e){return b.a.createElement(b.a.Fragment,null,b.a.createElement(c.a,{title:"ar"==Ae?null===e||void 0===e?void 0:e.placeholder[0]:null===e||void 0===e?void 0:e.placeholder[1],color:"#6be3de",placement:"bottom"},b.a.createElement(o.a,{content:ne(e),trigger:"click",visible:H[e.uniq],onVisibleChange:function(){return J(e)},placement:"topLeft"},b.a.createElement(u.a,{className:"closed-input",shape:"circle"},e.icon))))}(e)),b.a.createElement(b.a.Fragment,null,"dateFromTo"==e.type&&function(e){return b.a.createElement(b.a.Fragment,null,b.a.createElement(c.a,{title:"ar"==Ae?null===e||void 0===e?void 0:e.placeholder[0]:null===e||void 0===e?void 0:e.placeholder[1],color:"#6be3de",placement:"bottom"},b.a.createElement(o.a,{content:ce(e),trigger:"click",visible:H[e.uniq],onVisibleChange:function(){return J(e)},placement:"topLeft"},b.a.createElement(u.a,{className:"closed-input",shape:"circle"},b.a.createElement("span",{role:"img","aria-label":"plus",class:"anticon anticon-plus"},e.icon)))))}(e)),b.a.createElement(b.a.Fragment,null,"select"==e.type&&function(e,t){return b.a.createElement(b.a.Fragment,null,b.a.createElement(c.a,{title:"ar"==Ae?null===e||void 0===e?void 0:e.placeholder[0]:null===e||void 0===e?void 0:e.placeholder[1],color:"#6be3de",placement:"bottom"},b.a.createElement(o.a,{content:oe(e,t),trigger:"click",visible:H[e.uniq],onVisibleChange:function(){return J(e)},placement:"topLeft"},b.a.createElement(u.a,{className:"closed-input",shape:"circle"},b.a.createElement("span",{role:"img","aria-label":"plus",class:"anticon anticon-plus"},e.icon)))))}(e,t)))}))},re=Object(v.useState)(!1),ie=Object(l.a)(re,2),de=ie[0],ue=ie[1];Object(v.useEffect)((function(){T&&T.forEach((function(e,t){var a,c;(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.isOnline)&&function(e,t,a){var c=e.url,o=e.params;h.b.get(c,{headers:{Authorization:"Bearer ".concat(Te)},params:o}).then((function(e){T[t].data.options=[].concat(Object(n.a)(T[t].data.options),Object(n.a)(e.data.data)),ae(T),a&&ue(a)})).catch((function(e){}))}(e.data,t,t+1==T.length),!(null===e||void 0===e||null===(c=e.data)||void 0===c?void 0:c.isOnline)&&t+1==T.length&&ue(!0)}))}),[K]);var se=Object(v.useState)([]),me=Object(l.a)(se,2),pe=me[0],ve=me[1],be=Object(v.useState)(!1),he=Object(l.a)(be,2),fe=he[0],ge=he[1],Oe=Object(f.g)(),Ee=Object(v.useState)(0),je=Object(l.a)(Ee,2),ye=je[0],xe=je[1],we=Object(F.b)(),Ce=Object(v.useState)({}),ke=Object(l.a)(Ce,2),Se=ke[0],Re=ke[1],Ue=Object(v.useState)(q),Fe=Object(l.a)(Ue,2),Ye=Fe[0],Ne=Fe[1];Object(v.useEffect)((function(){T.forEach((function(e){var t,a,n;q[e.key]=(null===(t=e.data)||void 0===t?void 0:t.defaultSelectValue)||0==(null===(a=e.data)||void 0===a?void 0:a.defaultSelectValue)?null===(n=e.data)||void 0===n?void 0:n.defaultSelectValue:null}))}),[]);var Te=Object(F.c)((function(e){return e.Auth.idToken})),Ae=localStorage.getItem("lang");Object(v.useEffect)((function(){!function(e,t){var a=t.method,n=t.params,c=Object(i.a)(Object(i.a)({skip:ye},n),Ye);ge(!0),h.b[a](e,{headers:{Authorization:"Bearer ".concat(Te)},params:c}).then((function(t){"withdraws"===e&&(t.data.data=t.data.data.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{key:e.id})}))),ve(t.data),Se.pageSize=10,Re({total:t.data.count,pageSize:10}),ge(!1)})).catch((function(e){ge(!1)}))}(null===a||void 0===a?void 0:a[1],null===a||void 0===a?void 0:a[0])}),[Ye,ye,t]);var De=function(e){var t=Object(i.a)({},e);t.current=e.current,Re(t),xe(10*(t.current-1))};we(p);var Le=Object(v.useState)([Y[0]]),_e=Object(l.a)(Le,2),ze=(_e[0],_e[1]),qe=([].concat(Object(n.a)(Y),Object(n.a)(N)),Object(v.useState)(0)),Be=Object(l.a)(qe,2),Pe=Be[0];Be[1];return Object(v.useEffect)((function(){ze([Y[Pe]])}),[Pe]),pe&&Se&&b.a.createElement(A,null,M&&b.a.createElement(u.a,{style:{margin:10},type:"primary",icon:b.a.createElement(C.a,null),onClick:function(){var e=Object(i.a)(Object(i.a)(Object(i.a)({},null===a||void 0===a?void 0:a[0].params),Ye),{},{token:"".concat(Te)});Object.entries(e).map((function(t){var a=Object(l.a)(t,2),n=a[0];a[1]||delete e[n]}));var t=new URLSearchParams(e);window.open("".concat(h.a,"/").concat(null===a||void 0===a?void 0:a[1],"/export").concat(t.toString()&&"?").concat(t.toString()),"_blank").focus()}},"Export"),P,0==B?b.a.createElement(b.a.Fragment,null,b.a.createElement(E,Object.assign({title:function(){return b.a.createElement(b.a.Fragment,null,b.a.createElement("div",{style:{margin:"10px",display:"flex",justifyContent:"space-between"}},b.a.createElement("div",null,g&&b.a.createElement(c.a,{title:"ar"==Ae?"\u0627\u0636\u0627\u0641\u0629":"Add",color:"#6be3de",placement:"bottom"},b.a.createElement(u.a,{onClick:function(){return Oe.push(g)},shape:"circle",type:"primary",style:{margin:" 2px"}},b.a.createElement(w.a,null))),le())))},footerContent:[pe.count,null===a||void 0===a?void 0:a[1].translate()],pagination:Object(i.a)(Object(i.a)({},Se),{},{position:["bottomCenter"]}),loading:fe,showSizeChanger:!1,columns:[I].concat(Object(n.a)(Y),Object(n.a)(N)),onChange:De,dataSource:pe.data,scroll:{x:900}},V))):b.a.createElement(b.a.Fragment,null,b.a.createElement(E,{add:g,title:function(){return b.a.createElement(b.a.Fragment,null,b.a.createElement("div",{style:{margin:"10px",display:"flex",justifyContent:"space-between"}},b.a.createElement("div",null,g&&b.a.createElement(c.a,{title:"ar"==Ae?"\u0627\u0636\u0627\u0641\u0629":"Add",color:"#6be3de",placement:"bottom"},b.a.createElement(u.a,{onClick:function(){return Oe.push(g)},shape:"circle",type:"primary",style:{margin:" 2px"}},b.a.createElement(w.a,null))),le())))},footerContent:[pe.count,null===a||void 0===a?void 0:a[1].translate()],pagination:Object(i.a)(Object(i.a)({},Se),{},{position:["bottomCenter"]}),loading:fe,showSizeChanger:!1,columns:[I].concat(Object(n.a)(Y),Object(n.a)(N),W),onChange:De,dataSource:pe.data,scroll:{x:900}})))}},713:function(e,t,a){"use strict";a.d(t,"b",(function(){return m}));var n,c,o,l,r,i=a(652),d=a(208),u={index:"clients",add:"clientsNew",edit:"clientsEdit",show:"clientsShow"},s={api:{index:[{method:"get",params:{}},"users"],add:[{method:"post",params:{}},"users"],edit:[{method:"put",params:{}},"users/"],show:[{method:"get",params:{}},"users/"],delete:[{method:"delete",params:{}},"users/"]},routes:{index:"".concat(d.b,"/").concat(null===(n=i.b[u.index])||void 0===n?void 0:n.path),indexTitle:u.index.replace(/([a-z])([A-Z])/g,"$1 $2"),indexKey:"home",add:"".concat(d.b,"/").concat(null===(c=i.b[u.add])||void 0===c?void 0:c.path),edit:"".concat(d.b,"/").concat(null===(o=i.b[u.edit])||void 0===o?void 0:o.path.slice(0,i.b[u.edit].path.length-3)),show:"".concat(d.b,"/").concat(null===(l=i.b[u.show])||void 0===l?void 0:l.path.slice(0,(null===(r=i.b[u.show])||void 0===r?void 0:r.path.length)-3))},titles:{add:"Create",edit:"global.edit",show:"Details"}},m={1:"active",0:"not active"};t.a=s},766:function(e,t,a){"use strict";a.d(t,"b",(function(){return m}));var n,c,o,l,r,i=a(652),d=a(208),u={index:"ContactUs",add:"ContactUsNew",edit:"ContactUsEdit",show:"ContactUsShow"},s={api:{index:[{method:"get",params:{}},"contactUs"],add:[{method:"post",params:{}},"contactUs"],edit:[{method:"put",params:{}},"contactUs/"],show:[{method:"get",params:{}},"contactUs/"],delete:[{method:"delete",params:{}},"contactUs/"]},routes:{index:"".concat(d.b,"/").concat(null===(n=i.b[u.index])||void 0===n?void 0:n.path),indexTitle:u.index.replace(/([a-z])([A-Z])/g,"$1 $2"),indexKey:"home",add:"".concat(d.b,"/").concat(null===(c=i.b[u.add])||void 0===c?void 0:c.path),edit:"".concat(d.b,"/").concat(null===(o=i.b[u.edit])||void 0===o?void 0:o.path.slice(0,i.b[u.edit].path.length-3)),show:"".concat(d.b,"/").concat(null===(l=i.b[u.show])||void 0===l?void 0:l.path.slice(0,(null===(r=i.b[u.show])||void 0===r?void 0:r.path.length)-3))},titles:{add:"Create",edit:"global.edit",show:"Details"}},m={1:"Open",3:"Closed",2:"Under Process"};t.a=s}}]);
//# sourceMappingURL=47.2b939201.chunk.js.map