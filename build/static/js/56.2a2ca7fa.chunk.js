(this.webpackJsonpisomorphic=this.webpackJsonpisomorphic||[]).push([[56],{1461:function(e,t,a){"use strict";a.r(t);var n=a(20),c=(a(704),a(710)),o=a(206),l=a(0),r=a.n(l),i=a(207),d=a(668),u=a(42),s=a(654),m=a(706),p=a(761),v=a(161),b=a(687),f=a(705),h=a.n(f);t.default=function(){var e,t=Object(l.useState)(0),a=Object(o.a)(t,2),f=a[0],g=a[1],O=Object(u.c)((function(e){return e.Auth.idToken})),j=[{uniq:"q",type:"search",icon:r.a.createElement(m.a,null),placeholder:["\u0628\u062d\u062b","Search ..."],key:"q",online:{status:!0,url:"url",params:""},hide:{onValue:"new",hiddenFilters:["city_id","fromTO"]}}];return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,(e={fetcher:f,action:!1,indexRequest:p.a.api.index,Breadcrumb:{type:"SET",payload:[{key:p.a.routes.indexKey,to:p.a.routes.index,title:p.a.routes.indexTitle}]},addRowURL:!!Object(b.a)("permissions","create")&&p.a.routes.add,filters:j,editRowURL:!!Object(b.a)("permissions","update")&&p.a.routes.edit,deleteRow:{status:Object(b.a)("permissions","delete"),deleteRecord:function(e){var t,a,n,c=e.id;v.b.promise(i.b[null===(t=p.a.api.delete)||void 0===t||null===(a=t[0])||void 0===a?void 0:a.method]("".concat(null===(n=p.a.api.delete)||void 0===n?void 0:n[1]).concat(c),{headers:{Authorization:"Bearer ".concat(O)}}),{pending:"Pending",success:{render:function(e){return g((function(e){return!e})),console.log(e.data),"\ud83d\udc4c ".concat(e.data.data.message)},icon:"\ud83d\udfe2"},error:{render:function(e){var t,a,n;return"\ud83e\udd2f ".concat((null===e||void 0===e||null===(t=e.data)||void 0===t||null===(a=t.response)||void 0===a||null===(n=a.data)||void 0===n?void 0:n.message)||"Backend Error Occured")}}})}}},Object(n.a)(e,"action",Object(b.a)("permissions","delete")||Object(b.a)("permissions","update")||!1),Object(n.a)(e,"generalCols",Object(s.a)([{key:"name",content:function(e,t){return r.a.createElement("div",null,e.replace("_"," "))}},"description",{key:"created_at",content:function(e,t){return r.a.createElement("div",{style:{display:"flex",flexDirection:"column",gap:5}},r.a.createElement(c.a,{color:"cyan"},h()(e).format("iYYYY-iM-iD")," H"),r.a.createElement(c.a,{color:"blue"},h()(e).format("YYYY-M-D")," G "))}}])),Object(n.a)(e,"options",[]),e)))}},654:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(0),c=a.n(n),o=(a(655),function(e){return e.map((function(e){return{title:(null===e||void 0===e?void 0:e.title)?e.title.translate():(null===e||void 0===e?void 0:e.key)?e.key.translate():e.translate(),dataIndex:(null===e||void 0===e?void 0:e.key)?e.key:e,key:(null===e||void 0===e?void 0:e.key)?e.key:e,align:e.align?e.align:"left",render:(null===e||void 0===e?void 0:e.content)?function(t,a){return c.a.createElement("div",{className:"text-overflow"},e.content(t,a))}:function(e){return c.a.createElement("div",{className:"text-overflow"},e)}}}))})},655:function(e,t,a){},666:function(e,t,a){},667:function(e,t,a){},668:function(e,t,a){"use strict";var n=a(59),c=(a(678),a(677)),o=(a(680),a(685)),l=a(206),r=a(20),i=a(1),d=(a(691),a(694)),u=(a(674),a(673)),s=a(118),m=(a(657),a(656)),p=(a(692),a(695)),v=a(0),b=a.n(v),f=a(207),h=a(19),g=(a(665),a(697),a(698)),O=(a(666),a(653)),j=function(e){e.styles;var t=e.columns,a=e.dataSource,n=e.loading,c=e.pagination,o=e.footerContent,l=Object(s.a)(e,["styles","columns","dataSource","loading","pagination","footerContent"]);Object(h.g)();return b.a.createElement(g.a,Object.assign({style:{width:"100%"},footer:function(){return b.a.createElement("div",{style:{display:"flex"}},"".concat((null===o||void 0===o?void 0:o[0])?o[0]:0," "),o[1])},dataSource:a,columns:t,pagination:c,loading:{indicator:b.a.createElement(O.a,null),spinning:n}},l))},E=a(1449),y=a(1414),x=a(1450),w=a(1452),C=a(1451),S=(a(667),function(e){var t=e.children,a=e.onChange,n=e.styles,c=e.value,o=e.name,l=e.type,r=e.placeholder,d=(e.divStyels,Object(s.a)(e,["children","onChange","styles","value","name","type","placeholder","divStyels"]));return b.a.createElement(b.a.Fragment,null,t,b.a.createElement("input",Object.assign({className:"custom-input",style:Object(i.a)({},n),name:o},d,{type:l,value:c,placeholder:r,onChange:a})))}),k=a(209),R=a(693),F=a.n(R),Y=a(42),L=(a(210),a(205));function N(){var e=Object(L.a)(["\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n"]);return N=function(){return e},e}var D=a(117).c.div(N()),q=function(e){return b.a.createElement(D,Object.assign({className:null!=e.className?"".concat(e.className," isoLayoutContentWrapper"):"isoLayoutContentWrapper"},e),e.children)},A=function(e){var t=e.placeholder,a=e.onChange,n=Object(s.a)(e,["placeholder","onChange"]);return b.a.createElement(b.a.Fragment,null,b.a.createElement(S,Object.assign({name:"numberSearch",placeholder:t,onChange:a},n)))},T=a(689),U=p.a.RangePicker,z=m.a.Option,B={};t.a=function(e){var t=e.fetcher,a=e.indexRequest,p=e.Breadcrumb,g=e.addRowURL,O=e.editRowURL,S=e.showRowURL,R=e.deleteRow,L=e.generalCols,N=e.options,D=e.filters,V=e.action,M=e.attachOtherContent,I=e.attachExport,P=Object(s.a)(e,["fetcher","indexRequest","Breadcrumb","addRowURL","editRowURL","showRowURL","deleteRow","generalCols","options","filters","action","attachOtherContent","attachExport"]),_={title:"numbers".translate(),dataIndex:"id",key:"id",width:"60px",render:function(e,t,a){return b.a.createElement("a",{href:""}," ",a+1+ye," ")}},W=Object(T.a)(),J=W.width,K=(W.height,[{title:"Actions",dataIndex:"id",key:"id",render:function(e,t,a){return b.a.createElement("div",{style:{color:"#646D82",cursor:"pointer"},className:"d-flex"},O&&b.a.createElement(k.b,{to:"".concat(O).concat(t.id)},b.a.createElement(u.a,{shape:"circle",style:{margin:" 2px"}},b.a.createElement(E.a,null))),S&&b.a.createElement(k.b,{to:"".concat(S).concat(e)},b.a.createElement(u.a,{shape:"circle",style:{margin:" 2px"}},b.a.createElement(y.a,null))),(null===R||void 0===R?void 0:R.status)?b.a.createElement(d.a,{placement:"top",title:"You Want to Delete this ?",okText:"Delete",onConfirm:function(){return R.deleteRecord(t)},cancelText:"cancel"},b.a.createElement(u.a,{shape:"circle",style:{margin:" 2px"}},b.a.createElement(x.a,{style:{color:"mediumvioletred"}}))):"")}}]);function $(e){var t=e.uniq;Q((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(r.a)({},t,!Z[t]))}))}var G=Object(v.useState)({}),H=Object(l.a)(G,2),Z=H[0],Q=H[1],X=Object(v.useState)(D),ee=Object(l.a)(X,2),te=ee[0],ae=ee[1],ne=function(e){var t=e.placeholder,a=e.key;return b.a.createElement(A,{style:{width:200},placeholder:"ar"==qe?t[0]:t[1],onChange:function(e){var t;(null===(t=e.target)||void 0===t?void 0:t.value)?Ne((function(t){return Object(i.a)(Object(i.a)({},t),{},Object(r.a)({},a,e.target.value))})):delete Le[a]&&Ne((function(e){return Object(i.a)({},e)})),xe(0),ke.current=1}})},ce=function(e){var t=e.placeholder,a=e.key;return b.a.createElement(U,{style:{width:230},placeholder:"ar"==qe?null===t||void 0===t?void 0:t.ar:null===t||void 0===t?void 0:t.en,onChange:function(e){if(e){var t=F()(e[0]).format("YYYY-MM-DD"),n=F()(e[1]).format("YYYY-MM-DD");Ne((function(e){var c;return Object(i.a)(Object(i.a)({},e),{},(c={},Object(r.a)(c,null===a||void 0===a?void 0:a[0],t),Object(r.a)(c,null===a||void 0===a?void 0:a[1],n),c))})),xe(0),ke.current=1}else delete Le[a[0]],delete Le[a[1]],Ne((function(e){return Object(i.a)({},e)})),xe(0),ke.current=1}})},oe=function(e,t){var a,n,c=e.placeholder,o=e.key,l=e.data,d=e.multiple;return b.a.createElement(m.a,{mode:d,style:{width:200},showSearch:!0,value:d?void 0:Le[o],onChange:function(e){e?Ne((function(t){return Object(i.a)(Object(i.a)({},t),{},Object(r.a)({},o,e))})):(delete Le[o],Ne((function(e){return Object(i.a)({},e)}))),xe(0),ke.current=1},placeholder:"ar"==qe?c[0]:c[1],optionFilterProp:"children"},null===(a=te[t].data)||void 0===a||null===(n=a.options)||void 0===n?void 0:n.map((function(e){return b.a.createElement(z,{value:e.id},e[null===l||void 0===l?void 0:l.optionName])})))},le=function(){return de&&D.map((function(e,t){return b.a.createElement(b.a.Fragment,null,b.a.createElement(b.a.Fragment,null,"search"==e.type&&function(e){return b.a.createElement(b.a.Fragment,null,b.a.createElement(c.a,{title:"ar"==qe?null===e||void 0===e?void 0:e.placeholder[0]:null===e||void 0===e?void 0:e.placeholder[1],color:"#6be3de",placement:"bottom"},b.a.createElement(o.a,{content:ne(e),trigger:"click",visible:Z[e.uniq],onVisibleChange:function(){return $(e)},placement:"topLeft"},b.a.createElement(u.a,{className:"closed-input",shape:"circle"},e.icon))))}(e)),b.a.createElement(b.a.Fragment,null,"dateFromTo"==e.type&&function(e){return b.a.createElement(b.a.Fragment,null,b.a.createElement(c.a,{title:"ar"==qe?null===e||void 0===e?void 0:e.placeholder[0]:null===e||void 0===e?void 0:e.placeholder[1],color:"#6be3de",placement:"bottom"},b.a.createElement(o.a,{content:ce(e),trigger:"click",visible:Z[e.uniq],onVisibleChange:function(){return $(e)},placement:"topLeft"},b.a.createElement(u.a,{className:"closed-input",shape:"circle"},b.a.createElement("span",{role:"img","aria-label":"plus",class:"anticon anticon-plus"},e.icon)))))}(e)),b.a.createElement(b.a.Fragment,null,"select"==e.type&&function(e,t){return b.a.createElement(b.a.Fragment,null,b.a.createElement(c.a,{title:"ar"==qe?null===e||void 0===e?void 0:e.placeholder[0]:null===e||void 0===e?void 0:e.placeholder[1],color:"#6be3de",placement:"bottom"},b.a.createElement(o.a,{content:oe(e,t),trigger:"click",visible:Z[e.uniq],onVisibleChange:function(){return $(e)},placement:"topLeft"},b.a.createElement(u.a,{className:"closed-input",shape:"circle"},b.a.createElement("span",{role:"img","aria-label":"plus",class:"anticon anticon-plus"},e.icon)))))}(e,t)))}))},re=Object(v.useState)(!1),ie=Object(l.a)(re,2),de=ie[0],ue=ie[1];Object(v.useEffect)((function(){D&&D.forEach((function(e,t){var a,c;(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.isOnline)&&function(e,t,a){var c=e.url,o=e.params;f.b.get(c,{headers:{Authorization:"Bearer ".concat(De)},params:o}).then((function(e){D[t].data.options=[].concat(Object(n.a)(D[t].data.options),Object(n.a)(e.data.data)),ae(D),a&&ue(a)})).catch((function(e){}))}(e.data,t,t+1==D.length),!(null===e||void 0===e||null===(c=e.data)||void 0===c?void 0:c.isOnline)&&t+1==D.length&&ue(!0)}))}),[J]);var se=Object(v.useState)([]),me=Object(l.a)(se,2),pe=me[0],ve=me[1],be=Object(v.useState)(!1),fe=Object(l.a)(be,2),he=fe[0],ge=fe[1],Oe=Object(h.g)(),je=Object(v.useState)(0),Ee=Object(l.a)(je,2),ye=Ee[0],xe=Ee[1],we=Object(Y.b)(),Ce=Object(v.useState)({}),Se=Object(l.a)(Ce,2),ke=Se[0],Re=Se[1],Fe=Object(v.useState)(B),Ye=Object(l.a)(Fe,2),Le=Ye[0],Ne=Ye[1];Object(v.useEffect)((function(){D.forEach((function(e){var t,a,n;B[e.key]=(null===(t=e.data)||void 0===t?void 0:t.defaultSelectValue)||0==(null===(a=e.data)||void 0===a?void 0:a.defaultSelectValue)?null===(n=e.data)||void 0===n?void 0:n.defaultSelectValue:null}))}),[]);var De=Object(Y.c)((function(e){return e.Auth.idToken})),qe=localStorage.getItem("lang");Object(v.useEffect)((function(){!function(e,t){var a=t.method,n=t.params,c=Object(i.a)(Object(i.a)({skip:ye},n),Le);ge(!0),f.b[a](e,{headers:{Authorization:"Bearer ".concat(De)},params:c}).then((function(t){"withdraws"===e&&(t.data.data=t.data.data.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{key:e.id})}))),ve(t.data),ke.pageSize=10,Re({total:t.data.count,pageSize:10}),ge(!1)})).catch((function(e){ge(!1)}))}(null===a||void 0===a?void 0:a[1],null===a||void 0===a?void 0:a[0])}),[Le,ye,t]);var Ae=function(e){var t=Object(i.a)({},e);t.current=e.current,Re(t),xe(10*(t.current-1))};we(p);var Te=Object(v.useState)([L[0]]),Ue=Object(l.a)(Te,2),ze=(Ue[0],Ue[1]),Be=([].concat(Object(n.a)(L),Object(n.a)(N)),Object(v.useState)(0)),Ve=Object(l.a)(Be,2),Me=Ve[0];Ve[1];return Object(v.useEffect)((function(){ze([L[Me]])}),[Me]),pe&&ke&&b.a.createElement(q,null,I&&b.a.createElement(u.a,{style:{margin:10},type:"primary",icon:b.a.createElement(C.a,null),onClick:function(){var e=Object(i.a)(Object(i.a)(Object(i.a)({},null===a||void 0===a?void 0:a[0].params),Le),{},{token:"".concat(De)});Object.entries(e).map((function(t){var a=Object(l.a)(t,2),n=a[0];a[1]||delete e[n]}));var t=new URLSearchParams(e);window.open("".concat(f.a,"/").concat(null===a||void 0===a?void 0:a[1],"/export").concat(t.toString()&&"?").concat(t.toString()),"_blank").focus()}},"Export"),M,0==V?b.a.createElement(b.a.Fragment,null,b.a.createElement(j,Object.assign({title:function(){return b.a.createElement(b.a.Fragment,null,b.a.createElement("div",{style:{margin:"10px",display:"flex",justifyContent:"space-between"}},b.a.createElement("div",null,g&&b.a.createElement(c.a,{title:"ar"==qe?"\u0627\u0636\u0627\u0641\u0629":"Add",color:"#6be3de",placement:"bottom"},b.a.createElement(u.a,{onClick:function(){return Oe.push(g)},shape:"circle",type:"primary",style:{margin:" 2px"}},b.a.createElement(w.a,null))),le())))},footerContent:[pe.count,null===a||void 0===a?void 0:a[1].translate()],pagination:Object(i.a)(Object(i.a)({},ke),{},{position:["bottomCenter"]}),loading:he,showSizeChanger:!1,columns:[_].concat(Object(n.a)(L),Object(n.a)(N)),onChange:Ae,dataSource:pe.data,scroll:{x:900}},P))):b.a.createElement(b.a.Fragment,null,b.a.createElement(j,{add:g,title:function(){return b.a.createElement(b.a.Fragment,null,b.a.createElement("div",{style:{margin:"10px",display:"flex",justifyContent:"space-between"}},b.a.createElement("div",null,g&&b.a.createElement(c.a,{title:"ar"==qe?"\u0627\u0636\u0627\u0641\u0629":"Add",color:"#6be3de",placement:"bottom"},b.a.createElement(u.a,{onClick:function(){return Oe.push(g)},shape:"circle",type:"primary",style:{margin:" 2px"}},b.a.createElement(w.a,null))),le())))},footerContent:[pe.count,null===a||void 0===a?void 0:a[1].translate()],pagination:Object(i.a)(Object(i.a)({},ke),{},{position:["bottomCenter"]}),loading:he,showSizeChanger:!1,columns:[_].concat(Object(n.a)(L),Object(n.a)(N),K),onChange:Ae,dataSource:pe.data,scroll:{x:900}})))}},706:function(e,t,a){"use strict";var n=a(0),c=a(701),o=a(676),l=function(e,t){return n.createElement(o.a,Object.assign({},e,{ref:t,icon:c.a}))};l.displayName="SearchOutlined",t.a=n.forwardRef(l)},761:function(e,t,a){"use strict";var n,c,o,l,r,i=a(652),d=a(208),u={index:"permissions",add:"permissionsNew",edit:"permissionsEdit",show:"permissionsShow"},s={api:{index:[{method:"get",params:{}},"permissions"],add:[{method:"post",params:{}},"permissions"],edit:[{method:"put",params:{}},"permissions/"],show:[{method:"get",params:{}},"permissions/"],delete:[{method:"delete",params:{}},"permissions/"]},routes:{index:"".concat(d.b,"/").concat(null===(n=i.b[u.index])||void 0===n?void 0:n.path),indexTitle:u.index.replace(/([a-z])([A-Z])/g,"$1 $2"),indexKey:"home",add:"".concat(d.b,"/").concat(null===(c=i.b[u.add])||void 0===c?void 0:c.path),edit:"".concat(d.b,"/").concat(null===(o=i.b[u.edit])||void 0===o?void 0:o.path.slice(0,i.b[u.edit].path.length-3)),show:"".concat(d.b,"/").concat(null===(l=i.b[u.show])||void 0===l?void 0:l.path.slice(0,(null===(r=i.b[u.show])||void 0===r?void 0:r.path.length)-3))},titles:{add:"Create",edit:"global.edit",show:"Details"}};t.a=s}}]);
//# sourceMappingURL=56.2a2ca7fa.chunk.js.map