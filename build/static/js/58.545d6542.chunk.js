(this.webpackJsonpisomorphic=this.webpackJsonpisomorphic||[]).push([[58],{1502:function(e,t,a){"use strict";a.r(t);var n=a(20),c=a(206),l=a(0),o=a.n(l),r=a(207),i=a(668),d=a(42),u=a(654),s=a(706),m=a(778),p=a(161),v=a(687);a(705);t.default=function(){var e,t=Object(l.useState)(0),a=Object(c.a)(t,2),b=a[0],h=a[1],f=Object(d.c)((function(e){return e.Auth.idToken})),g=[{uniq:"q",type:"search",icon:o.a.createElement(s.a,null),placeholder:["\u0628\u062d\u062b","Search ..."],key:"q",online:{status:!0,url:"url",params:""},hide:{onValue:"new",hiddenFilters:["city_id","fromTO"]}}];return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,(e={fetcher:b,action:!1,indexRequest:m.a.api.index,Breadcrumb:{type:"SET",payload:[{key:m.a.routes.indexKey,to:m.a.routes.index,title:m.a.routes.indexTitle}]},addRowURL:!!Object(v.a)("social","create")&&m.a.routes.add,filters:g,editRowURL:!!Object(v.a)("social","update")&&m.a.routes.edit,deleteRow:{status:Object(v.a)("social","delete"),deleteRecord:function(e){var t,a,n,c=e.id;p.b.promise(r.b[null===(t=m.a.api.delete)||void 0===t||null===(a=t[0])||void 0===a?void 0:a.method]("".concat(null===(n=m.a.api.delete)||void 0===n?void 0:n[1]).concat(c),{headers:{Authorization:"Bearer ".concat(f)}}),{pending:"Pending",success:{render:function(e){return h((function(e){return!e})),console.log(e.data),"\ud83d\udc4c ".concat(e.data.data.message)},icon:"\ud83d\udfe2"},error:{render:function(e){var t,a,n;return"\ud83e\udd2f ".concat((null===e||void 0===e||null===(t=e.data)||void 0===t||null===(a=t.response)||void 0===a||null===(n=a.data)||void 0===n?void 0:n.message)||"Backend Error Occured")}}})}}},Object(n.a)(e,"action",Object(v.a)("social","delete")||Object(v.a)("social","update")||!1),Object(n.a)(e,"generalCols",Object(u.a)([{key:"key",content:function(e,t){return o.a.createElement("div",null,e.replace("_"," "))}},{key:"value",content:function(e,t){return o.a.createElement("a",{href:e,target:"_blank"},e)}}])),Object(n.a)(e,"options",[]),e)))}},654:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(0),c=a.n(n),l=(a(655),function(e){return e.map((function(e){return{title:(null===e||void 0===e?void 0:e.title)?e.title.translate():(null===e||void 0===e?void 0:e.key)?e.key.translate():e.translate(),dataIndex:(null===e||void 0===e?void 0:e.key)?e.key:e,key:(null===e||void 0===e?void 0:e.key)?e.key:e,align:e.align?e.align:"left",render:(null===e||void 0===e?void 0:e.content)?function(t,a){return c.a.createElement("div",{className:"text-overflow"},e.content(t,a))}:function(e){return c.a.createElement("div",{className:"text-overflow"},e)}}}))})},655:function(e,t,a){},666:function(e,t,a){},667:function(e,t,a){},668:function(e,t,a){"use strict";var n=a(59),c=(a(678),a(677)),l=(a(680),a(685)),o=a(206),r=a(20),i=a(1),d=(a(691),a(694)),u=(a(674),a(673)),s=a(118),m=(a(657),a(656)),p=(a(692),a(695)),v=a(0),b=a.n(v),h=a(207),f=a(19),g=(a(665),a(697),a(698)),O=(a(666),a(653)),j=function(e){e.styles;var t=e.columns,a=e.dataSource,n=e.loading,c=e.pagination,l=e.footerContent,o=Object(s.a)(e,["styles","columns","dataSource","loading","pagination","footerContent"]);Object(f.g)();return b.a.createElement(g.a,Object.assign({style:{width:"100%"},footer:function(){return b.a.createElement("div",{style:{display:"flex"}},"".concat((null===l||void 0===l?void 0:l[0])?l[0]:0," "),l[1])},dataSource:a,columns:t,pagination:c,loading:{indicator:b.a.createElement(O.a,null),spinning:n}},o))},E=a(1449),y=a(1414),x=a(1450),w=a(1452),k=a(1451),C=(a(667),function(e){var t=e.children,a=e.onChange,n=e.styles,c=e.value,l=e.name,o=e.type,r=e.placeholder,d=(e.divStyels,Object(s.a)(e,["children","onChange","styles","value","name","type","placeholder","divStyels"]));return b.a.createElement(b.a.Fragment,null,t,b.a.createElement("input",Object.assign({className:"custom-input",style:Object(i.a)({},n),name:l},d,{type:o,value:c,placeholder:r,onChange:a})))}),S=a(209),R=a(693),F=a.n(R),L=a(42),N=(a(210),a(205));function q(){var e=Object(N.a)(["\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n"]);return q=function(){return e},e}var A=a(117).c.div(q()),T=function(e){return b.a.createElement(A,Object.assign({className:null!=e.className?"".concat(e.className," isoLayoutContentWrapper"):"isoLayoutContentWrapper"},e),e.children)},U=function(e){var t=e.placeholder,a=e.onChange,n=Object(s.a)(e,["placeholder","onChange"]);return b.a.createElement(b.a.Fragment,null,b.a.createElement(C,Object.assign({name:"numberSearch",placeholder:t,onChange:a},n)))},Y=a(689),z=p.a.RangePicker,D=m.a.Option,B={};t.a=function(e){var t=e.fetcher,a=e.indexRequest,p=e.Breadcrumb,g=e.addRowURL,O=e.editRowURL,C=e.showRowURL,R=e.deleteRow,N=e.generalCols,q=e.options,A=e.filters,V=e.action,I=e.attachOtherContent,M=e.attachExport,P=Object(s.a)(e,["fetcher","indexRequest","Breadcrumb","addRowURL","editRowURL","showRowURL","deleteRow","generalCols","options","filters","action","attachOtherContent","attachExport"]),_={title:"numbers".translate(),dataIndex:"id",key:"id",width:"60px",render:function(e,t,a){return b.a.createElement("a",{href:""}," ",a+1+ye," ")}},W=Object(Y.a)(),J=W.width,K=(W.height,[{title:"Actions",dataIndex:"id",key:"id",render:function(e,t,a){return b.a.createElement("div",{style:{color:"#646D82",cursor:"pointer"},className:"d-flex"},O&&b.a.createElement(S.b,{to:"".concat(O).concat(t.id)},b.a.createElement(u.a,{shape:"circle",style:{margin:" 2px"}},b.a.createElement(E.a,null))),C&&b.a.createElement(S.b,{to:"".concat(C).concat(e)},b.a.createElement(u.a,{shape:"circle",style:{margin:" 2px"}},b.a.createElement(y.a,null))),(null===R||void 0===R?void 0:R.status)?b.a.createElement(d.a,{placement:"top",title:"You Want to Delete this ?",okText:"Delete",onConfirm:function(){return R.deleteRecord(t)},cancelText:"cancel"},b.a.createElement(u.a,{shape:"circle",style:{margin:" 2px"}},b.a.createElement(x.a,{style:{color:"mediumvioletred"}}))):"")}}]);function $(e){var t=e.uniq;Q((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(r.a)({},t,!H[t]))}))}var Z=Object(v.useState)({}),G=Object(o.a)(Z,2),H=G[0],Q=G[1],X=Object(v.useState)(A),ee=Object(o.a)(X,2),te=ee[0],ae=ee[1],ne=function(e){var t=e.placeholder,a=e.key;return b.a.createElement(U,{style:{width:200},placeholder:"ar"==Te?t[0]:t[1],onChange:function(e){var t;(null===(t=e.target)||void 0===t?void 0:t.value)?qe((function(t){return Object(i.a)(Object(i.a)({},t),{},Object(r.a)({},a,e.target.value))})):delete Ne[a]&&qe((function(e){return Object(i.a)({},e)})),xe(0),Se.current=1}})},ce=function(e){var t=e.placeholder,a=e.key;return b.a.createElement(z,{style:{width:230},placeholder:"ar"==Te?null===t||void 0===t?void 0:t.ar:null===t||void 0===t?void 0:t.en,onChange:function(e){if(e){var t=F()(e[0]).format("YYYY-MM-DD"),n=F()(e[1]).format("YYYY-MM-DD");qe((function(e){var c;return Object(i.a)(Object(i.a)({},e),{},(c={},Object(r.a)(c,null===a||void 0===a?void 0:a[0],t),Object(r.a)(c,null===a||void 0===a?void 0:a[1],n),c))})),xe(0),Se.current=1}else delete Ne[a[0]],delete Ne[a[1]],qe((function(e){return Object(i.a)({},e)})),xe(0),Se.current=1}})},le=function(e,t){var a,n,c=e.placeholder,l=e.key,o=e.data,d=e.multiple;return b.a.createElement(m.a,{mode:d,style:{width:200},showSearch:!0,value:d?void 0:Ne[l],onChange:function(e){e?qe((function(t){return Object(i.a)(Object(i.a)({},t),{},Object(r.a)({},l,e))})):(delete Ne[l],qe((function(e){return Object(i.a)({},e)}))),xe(0),Se.current=1},placeholder:"ar"==Te?c[0]:c[1],optionFilterProp:"children"},null===(a=te[t].data)||void 0===a||null===(n=a.options)||void 0===n?void 0:n.map((function(e){return b.a.createElement(D,{value:e.id},e[null===o||void 0===o?void 0:o.optionName])})))},oe=function(){return de&&A.map((function(e,t){return b.a.createElement(b.a.Fragment,null,b.a.createElement(b.a.Fragment,null,"search"==e.type&&function(e){return b.a.createElement(b.a.Fragment,null,b.a.createElement(c.a,{title:"ar"==Te?null===e||void 0===e?void 0:e.placeholder[0]:null===e||void 0===e?void 0:e.placeholder[1],color:"#6be3de",placement:"bottom"},b.a.createElement(l.a,{content:ne(e),trigger:"click",visible:H[e.uniq],onVisibleChange:function(){return $(e)},placement:"topLeft"},b.a.createElement(u.a,{className:"closed-input",shape:"circle"},e.icon))))}(e)),b.a.createElement(b.a.Fragment,null,"dateFromTo"==e.type&&function(e){return b.a.createElement(b.a.Fragment,null,b.a.createElement(c.a,{title:"ar"==Te?null===e||void 0===e?void 0:e.placeholder[0]:null===e||void 0===e?void 0:e.placeholder[1],color:"#6be3de",placement:"bottom"},b.a.createElement(l.a,{content:ce(e),trigger:"click",visible:H[e.uniq],onVisibleChange:function(){return $(e)},placement:"topLeft"},b.a.createElement(u.a,{className:"closed-input",shape:"circle"},b.a.createElement("span",{role:"img","aria-label":"plus",class:"anticon anticon-plus"},e.icon)))))}(e)),b.a.createElement(b.a.Fragment,null,"select"==e.type&&function(e,t){return b.a.createElement(b.a.Fragment,null,b.a.createElement(c.a,{title:"ar"==Te?null===e||void 0===e?void 0:e.placeholder[0]:null===e||void 0===e?void 0:e.placeholder[1],color:"#6be3de",placement:"bottom"},b.a.createElement(l.a,{content:le(e,t),trigger:"click",visible:H[e.uniq],onVisibleChange:function(){return $(e)},placement:"topLeft"},b.a.createElement(u.a,{className:"closed-input",shape:"circle"},b.a.createElement("span",{role:"img","aria-label":"plus",class:"anticon anticon-plus"},e.icon)))))}(e,t)))}))},re=Object(v.useState)(!1),ie=Object(o.a)(re,2),de=ie[0],ue=ie[1];Object(v.useEffect)((function(){A&&A.forEach((function(e,t){var a,c;(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.isOnline)&&function(e,t,a){var c=e.url,l=e.params;h.b.get(c,{headers:{Authorization:"Bearer ".concat(Ae)},params:l}).then((function(e){A[t].data.options=[].concat(Object(n.a)(A[t].data.options),Object(n.a)(e.data.data)),ae(A),a&&ue(a)})).catch((function(e){}))}(e.data,t,t+1==A.length),!(null===e||void 0===e||null===(c=e.data)||void 0===c?void 0:c.isOnline)&&t+1==A.length&&ue(!0)}))}),[J]);var se=Object(v.useState)([]),me=Object(o.a)(se,2),pe=me[0],ve=me[1],be=Object(v.useState)(!1),he=Object(o.a)(be,2),fe=he[0],ge=he[1],Oe=Object(f.g)(),je=Object(v.useState)(0),Ee=Object(o.a)(je,2),ye=Ee[0],xe=Ee[1],we=Object(L.b)(),ke=Object(v.useState)({}),Ce=Object(o.a)(ke,2),Se=Ce[0],Re=Ce[1],Fe=Object(v.useState)(B),Le=Object(o.a)(Fe,2),Ne=Le[0],qe=Le[1];Object(v.useEffect)((function(){A.forEach((function(e){var t,a,n;B[e.key]=(null===(t=e.data)||void 0===t?void 0:t.defaultSelectValue)||0==(null===(a=e.data)||void 0===a?void 0:a.defaultSelectValue)?null===(n=e.data)||void 0===n?void 0:n.defaultSelectValue:null}))}),[]);var Ae=Object(L.c)((function(e){return e.Auth.idToken})),Te=localStorage.getItem("lang");Object(v.useEffect)((function(){!function(e,t){var a=t.method,n=t.params,c=Object(i.a)(Object(i.a)({skip:ye},n),Ne);ge(!0),h.b[a](e,{headers:{Authorization:"Bearer ".concat(Ae)},params:c}).then((function(t){"withdraws"===e&&(t.data.data=t.data.data.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{key:e.id})}))),ve(t.data),Se.pageSize=10,Re({total:t.data.count,pageSize:10}),ge(!1)})).catch((function(e){ge(!1)}))}(null===a||void 0===a?void 0:a[1],null===a||void 0===a?void 0:a[0])}),[Ne,ye,t]);var Ue=function(e){var t=Object(i.a)({},e);t.current=e.current,Re(t),xe(10*(t.current-1))};we(p);var Ye=Object(v.useState)([N[0]]),ze=Object(o.a)(Ye,2),De=(ze[0],ze[1]),Be=([].concat(Object(n.a)(N),Object(n.a)(q)),Object(v.useState)(0)),Ve=Object(o.a)(Be,2),Ie=Ve[0];Ve[1];return Object(v.useEffect)((function(){De([N[Ie]])}),[Ie]),pe&&Se&&b.a.createElement(T,null,M&&b.a.createElement(u.a,{style:{margin:10},type:"primary",icon:b.a.createElement(k.a,null),onClick:function(){var e=Object(i.a)(Object(i.a)(Object(i.a)({},null===a||void 0===a?void 0:a[0].params),Ne),{},{token:"".concat(Ae)});Object.entries(e).map((function(t){var a=Object(o.a)(t,2),n=a[0];a[1]||delete e[n]}));var t=new URLSearchParams(e);window.open("".concat(h.a,"/").concat(null===a||void 0===a?void 0:a[1],"/export").concat(t.toString()&&"?").concat(t.toString()),"_blank").focus()}},"Export"),I,0==V?b.a.createElement(b.a.Fragment,null,b.a.createElement(j,Object.assign({title:function(){return b.a.createElement(b.a.Fragment,null,b.a.createElement("div",{style:{margin:"10px",display:"flex",justifyContent:"space-between"}},b.a.createElement("div",null,g&&b.a.createElement(c.a,{title:"ar"==Te?"\u0627\u0636\u0627\u0641\u0629":"Add",color:"#6be3de",placement:"bottom"},b.a.createElement(u.a,{onClick:function(){return Oe.push(g)},shape:"circle",type:"primary",style:{margin:" 2px"}},b.a.createElement(w.a,null))),oe())))},footerContent:[pe.count,null===a||void 0===a?void 0:a[1].translate()],pagination:Object(i.a)(Object(i.a)({},Se),{},{position:["bottomCenter"]}),loading:fe,showSizeChanger:!1,columns:[_].concat(Object(n.a)(N),Object(n.a)(q)),onChange:Ue,dataSource:pe.data,scroll:{x:900}},P))):b.a.createElement(b.a.Fragment,null,b.a.createElement(j,{add:g,title:function(){return b.a.createElement(b.a.Fragment,null,b.a.createElement("div",{style:{margin:"10px",display:"flex",justifyContent:"space-between"}},b.a.createElement("div",null,g&&b.a.createElement(c.a,{title:"ar"==Te?"\u0627\u0636\u0627\u0641\u0629":"Add",color:"#6be3de",placement:"bottom"},b.a.createElement(u.a,{onClick:function(){return Oe.push(g)},shape:"circle",type:"primary",style:{margin:" 2px"}},b.a.createElement(w.a,null))),oe())))},footerContent:[pe.count,null===a||void 0===a?void 0:a[1].translate()],pagination:Object(i.a)(Object(i.a)({},Se),{},{position:["bottomCenter"]}),loading:fe,showSizeChanger:!1,columns:[_].concat(Object(n.a)(N),Object(n.a)(q),K),onChange:Ue,dataSource:pe.data,scroll:{x:900}})))}},706:function(e,t,a){"use strict";var n=a(0),c=a(701),l=a(676),o=function(e,t){return n.createElement(l.a,Object.assign({},e,{ref:t,icon:c.a}))};o.displayName="SearchOutlined",t.a=n.forwardRef(o)},778:function(e,t,a){"use strict";var n,c,l,o,r,i=a(652),d=a(208),u={index:"socials",add:"socialsNew",edit:"socialsEdit",show:"socialsShow"},s={api:{index:[{method:"get",params:{}},"socials"],add:[{method:"post",params:{}},"socials"],edit:[{method:"put",params:{}},"socials/"],show:[{method:"get",params:{}},"socials/"],delete:[{method:"delete",params:{}},"socials/"]},routes:{index:"".concat(d.b,"/").concat(null===(n=i.b[u.index])||void 0===n?void 0:n.path),indexTitle:u.index.replace(/([a-z])([A-Z])/g,"$1 $2"),indexKey:"home",add:"".concat(d.b,"/").concat(null===(c=i.b[u.add])||void 0===c?void 0:c.path),edit:"".concat(d.b,"/").concat(null===(l=i.b[u.edit])||void 0===l?void 0:l.path.slice(0,i.b[u.edit].path.length-3)),show:"".concat(d.b,"/").concat(null===(o=i.b[u.show])||void 0===o?void 0:o.path.slice(0,(null===(r=i.b[u.show])||void 0===r?void 0:r.path.length)-3))},titles:{add:"Create",edit:"global.edit",show:"Details"}};t.a=s}}]);
//# sourceMappingURL=58.545d6542.chunk.js.map