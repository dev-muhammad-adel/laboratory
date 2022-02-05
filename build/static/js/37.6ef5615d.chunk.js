(this.webpackJsonpisomorphic=this.webpackJsonpisomorphic||[]).push([[37],{1002:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(720);function o(e){return Object(n.a)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"4 7 4 4 20 4 20 7"}},{tag:"line",attr:{x1:"9",y1:"20",x2:"15",y2:"20"}},{tag:"line",attr:{x1:"12",y1:"4",x2:"12",y2:"20"}}]})(e)}},1516:function(e,t,a){"use strict";a.r(t);a(704);var n,o,c,l,r,i=a(710),d=a(20),u=a(206),s=(a(657),a(656)),m=a(0),p=a.n(m),v=a(207),b=a(668),h=a(42),f=a(654),g=a(683),O=a(773),j=a(1002),E=a(209),y=a(652),x=a(208),w={index:"userRequests",add:"userRequestsNew",edit:"userRequestsEdit",show:"userRequestsShow"},C={api:{index:[{method:"get",params:{}},"userRequests"],add:[{method:"post",params:{}},"userRequests"],edit:[{method:"put",params:{}},"userRequests/"],show:[{method:"get",params:{}},"userRequests/"],delete:[{method:"delete",params:{}},"userRequests/"]},routes:{index:"".concat(x.b,"/").concat(null===(n=y.b[w.index])||void 0===n?void 0:n.path),indexTitle:w.index.replace(/([a-z])([A-Z])/g,"$1 $2"),indexKey:"home",add:"".concat(x.b,"/").concat(null===(o=y.b[w.add])||void 0===o?void 0:o.path),edit:"".concat(x.b,"/").concat(null===(c=y.b[w.edit])||void 0===c?void 0:c.path.slice(0,y.b[w.edit].path.length-3)),show:"".concat(x.b,"/").concat(null===(l=y.b[w.show])||void 0===l?void 0:l.path.slice(0,(null===(r=y.b[w.show])||void 0===r?void 0:r.path.length)-3))},titles:{add:"Create",edit:"global.edit",show:"Details"},permissionName:"applications"},k={0:"pending",1:"accept",2:"reject"},R={0:"Top Up",1:"Early Termination",2:"Clearance Letter"};console.log(C.routes.indexTitle);var S=C,L=a(713),N=a(161),q=a(687),_=a(705),F=a.n(_),Y=s.a.Option;t.default=function(){var e=Object(m.useState)(0),t=Object(u.a)(e,2),a=t[0],n=t[1],o=Object(h.c)((function(e){return e.Auth.idToken})),c=[{uniq:"user_id",type:"select",icon:p.a.createElement(g.i,null),placeholder:["user","user"],key:"user_id",data:{isOnline:!0,url:"users",params:{},options:[Object(d.a)({id:null},"name_en","All")],optionName:"name_en"}},{uniq:"status",type:"select",icon:p.a.createElement(O.a,null),placeholder:["status","status"],key:"status",data:{isOnline:!1,options:[Object(d.a)({id:null},"name_en","All"),Object(d.a)({id:0},"name_en",k[0]),Object(d.a)({id:1},"name_en",k[1]),Object(d.a)({id:2},"name_en",k[2])],optionName:"name_en"}},{uniq:"type",type:"select",icon:p.a.createElement(j.a,null),placeholder:["type","type"],key:"type",data:{isOnline:!1,options:[Object(d.a)({id:null},"name_en","All"),Object(d.a)({id:0},"name_en",R[0]),Object(d.a)({id:1},"name_en",R[1]),Object(d.a)({id:2},"name_en",R[2])],optionName:"name_en"}}];return p.a.createElement(p.a.Fragment,null,p.a.createElement(b.a,{fetcher:a,indexRequest:S.api.index,Breadcrumb:{type:"SET",payload:[{key:S.routes.indexKey,to:S.routes.index,title:S.routes.indexTitle}]},addRowURL:!!Object(q.a)(S.permissionName,"create")&&S.routes.add,filters:c,editRowURL:!!Object(q.a)(S.permissionName,"update")&&S.routes.edit,deleteRow:{status:Object(q.a)(S.permissionName,"delete"),deleteRecord:function(e){var t,a,c,l=e.id;N.b.promise(v.b[null===(t=S.api.delete)||void 0===t||null===(a=t[0])||void 0===a?void 0:a.method]("".concat(null===(c=S.api.delete)||void 0===c?void 0:c[1]).concat(l),{headers:{Authorization:"Bearer ".concat(o)}}),{pending:"Pending",success:{render:function(e){return n((function(e){return!e})),console.log(e.data),"\ud83d\udc4c ".concat(e.data.data.message)},icon:"\ud83d\udfe2"},error:{render:function(e){var t,a,n;return"\ud83e\udd2f ".concat((null===e||void 0===e||null===(t=e.data)||void 0===t||null===(a=t.response)||void 0===a||null===(n=a.data)||void 0===n?void 0:n.message)||"Backend Error Occured")}}})}},action:Object(q.a)(S.permissionName,"delete")||Object(q.a)(S.permissionName,"update")||!1,generalCols:Object(f.a)([{key:"date",content:function(e,t){return p.a.createElement("div",{style:{display:"flex",flexDirection:"column",gap:5}},p.a.createElement(i.a,{color:"cyan"},F()(e).format("iYYYY-iM-iD")," H"),p.a.createElement(i.a,{color:"blue"},F()(e).format("YYYY-M-D")," G "))}},"time",{key:"name",content:function(e,t){var a=t.first_name,n=t.second_name,o=t.grand_father_name,c=t.family_name,l=t.id;return p.a.createElement("div",null,p.a.createElement(E.b,{to:"".concat(L.a.routes.show).concat(l)},"".concat(a," ").concat(n," ").concat(o," ").concat(c)))}},"email","phone",{key:"type",content:function(e){return p.a.createElement("div",null,R[e])}},{key:"status",content:function(e){return p.a.createElement("div",null,k[e])}},{title:"Action",key:"status",content:function(e,t){return 0==e&&p.a.createElement(p.a.Fragment,null,p.a.createElement(s.a,{style:{width:100},value:0==e?k[e]:""+e,onChange:function(e){return function(e,t){console.log({id:e},{value:t});var a={status:t};N.b.promise(v.b.post("userRequests/".concat(e,"/changeStatus"),a,{headers:{Authorization:"Bearer ".concat(o)}}),{pending:"Pending",success:{render:function(e){return n((function(e){return!e})),console.log(e.data),"\ud83d\udc4c ".concat(e.data.data.message)},icon:"\ud83d\udfe2"},error:{render:function(e){var t,a,n;return"\ud83e\udd2f ".concat((null===e||void 0===e||null===(t=e.data)||void 0===t||null===(a=t.response)||void 0===a||null===(n=a.data)||void 0===n?void 0:n.message)||"Backend Error Occured")}}})}(t.id,e)}},p.a.createElement(Y,{value:"1"},k[1]),p.a.createElement(Y,{value:"2"},k[2])))}}]),options:[]}))}},654:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0),o=a.n(n),c=(a(655),function(e){return e.map((function(e){return{title:(null===e||void 0===e?void 0:e.title)?e.title.translate():(null===e||void 0===e?void 0:e.key)?e.key.translate():e.translate(),dataIndex:(null===e||void 0===e?void 0:e.key)?e.key:e,key:(null===e||void 0===e?void 0:e.key)?e.key:e,align:e.align?e.align:"left",render:(null===e||void 0===e?void 0:e.content)?function(t,a){return o.a.createElement("div",{className:"text-overflow"},e.content(t,a))}:function(e){return o.a.createElement("div",{className:"text-overflow"},e)}}}))})},655:function(e,t,a){},666:function(e,t,a){},667:function(e,t,a){},668:function(e,t,a){"use strict";var n=a(59),o=(a(678),a(677)),c=(a(680),a(685)),l=a(206),r=a(20),i=a(1),d=(a(691),a(694)),u=(a(674),a(673)),s=a(118),m=(a(657),a(656)),p=(a(692),a(695)),v=a(0),b=a.n(v),h=a(207),f=a(19),g=(a(665),a(697),a(698)),O=(a(666),a(653)),j=function(e){e.styles;var t=e.columns,a=e.dataSource,n=e.loading,o=e.pagination,c=e.footerContent,l=Object(s.a)(e,["styles","columns","dataSource","loading","pagination","footerContent"]);Object(f.g)();return b.a.createElement(g.a,Object.assign({style:{width:"100%"},footer:function(){return b.a.createElement("div",{style:{display:"flex"}},"".concat((null===c||void 0===c?void 0:c[0])?c[0]:0," "),c[1])},dataSource:a,columns:t,pagination:o,loading:{indicator:b.a.createElement(O.a,null),spinning:n}},l))},E=a(1449),y=a(1414),x=a(1450),w=a(1452),C=a(1451),k=(a(667),function(e){var t=e.children,a=e.onChange,n=e.styles,o=e.value,c=e.name,l=e.type,r=e.placeholder,d=(e.divStyels,Object(s.a)(e,["children","onChange","styles","value","name","type","placeholder","divStyels"]));return b.a.createElement(b.a.Fragment,null,t,b.a.createElement("input",Object.assign({className:"custom-input",style:Object(i.a)({},n),name:c},d,{type:l,value:o,placeholder:r,onChange:a})))}),R=a(209),S=a(693),L=a.n(S),N=a(42),q=(a(210),a(205));function _(){var e=Object(q.a)(["\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n"]);return _=function(){return e},e}var F=a(117).c.div(_()),Y=function(e){return b.a.createElement(F,Object.assign({className:null!=e.className?"".concat(e.className," isoLayoutContentWrapper"):"isoLayoutContentWrapper"},e),e.children)},A=function(e){var t=e.placeholder,a=e.onChange,n=Object(s.a)(e,["placeholder","onChange"]);return b.a.createElement(b.a.Fragment,null,b.a.createElement(k,Object.assign({name:"numberSearch",placeholder:t,onChange:a},n)))},D=a(689),T=p.a.RangePicker,B=m.a.Option,z={};t.a=function(e){var t=e.fetcher,a=e.indexRequest,p=e.Breadcrumb,g=e.addRowURL,O=e.editRowURL,k=e.showRowURL,S=e.deleteRow,q=e.generalCols,_=e.options,F=e.filters,U=e.action,M=e.attachOtherContent,V=e.attachExport,P=Object(s.a)(e,["fetcher","indexRequest","Breadcrumb","addRowURL","editRowURL","showRowURL","deleteRow","generalCols","options","filters","action","attachOtherContent","attachExport"]),W={title:"numbers".translate(),dataIndex:"id",key:"id",width:"60px",render:function(e,t,a){return b.a.createElement("a",{href:""}," ",a+1+ye," ")}},I=Object(D.a)(),$=I.width,K=(I.height,[{title:"Actions",dataIndex:"id",key:"id",render:function(e,t,a){return b.a.createElement("div",{style:{color:"#646D82",cursor:"pointer"},className:"d-flex"},O&&b.a.createElement(R.b,{to:"".concat(O).concat(t.id)},b.a.createElement(u.a,{shape:"circle",style:{margin:" 2px"}},b.a.createElement(E.a,null))),k&&b.a.createElement(R.b,{to:"".concat(k).concat(e)},b.a.createElement(u.a,{shape:"circle",style:{margin:" 2px"}},b.a.createElement(y.a,null))),(null===S||void 0===S?void 0:S.status)?b.a.createElement(d.a,{placement:"top",title:"You Want to Delete this ?",okText:"Delete",onConfirm:function(){return S.deleteRecord(t)},cancelText:"cancel"},b.a.createElement(u.a,{shape:"circle",style:{margin:" 2px"}},b.a.createElement(x.a,{style:{color:"mediumvioletred"}}))):"")}}]);function Z(e){var t=e.uniq;Q((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(r.a)({},t,!H[t]))}))}var J=Object(v.useState)({}),G=Object(l.a)(J,2),H=G[0],Q=G[1],X=Object(v.useState)(F),ee=Object(l.a)(X,2),te=ee[0],ae=ee[1],ne=function(e){var t=e.placeholder,a=e.key;return b.a.createElement(A,{style:{width:200},placeholder:"ar"==Ye?t[0]:t[1],onChange:function(e){var t;(null===(t=e.target)||void 0===t?void 0:t.value)?_e((function(t){return Object(i.a)(Object(i.a)({},t),{},Object(r.a)({},a,e.target.value))})):delete qe[a]&&_e((function(e){return Object(i.a)({},e)})),xe(0),Re.current=1}})},oe=function(e){var t=e.placeholder,a=e.key;return b.a.createElement(T,{style:{width:230},placeholder:"ar"==Ye?null===t||void 0===t?void 0:t.ar:null===t||void 0===t?void 0:t.en,onChange:function(e){if(e){var t=L()(e[0]).format("YYYY-MM-DD"),n=L()(e[1]).format("YYYY-MM-DD");_e((function(e){var o;return Object(i.a)(Object(i.a)({},e),{},(o={},Object(r.a)(o,null===a||void 0===a?void 0:a[0],t),Object(r.a)(o,null===a||void 0===a?void 0:a[1],n),o))})),xe(0),Re.current=1}else delete qe[a[0]],delete qe[a[1]],_e((function(e){return Object(i.a)({},e)})),xe(0),Re.current=1}})},ce=function(e,t){var a,n,o=e.placeholder,c=e.key,l=e.data,d=e.multiple;return b.a.createElement(m.a,{mode:d,style:{width:200},showSearch:!0,value:d?void 0:qe[c],onChange:function(e){e?_e((function(t){return Object(i.a)(Object(i.a)({},t),{},Object(r.a)({},c,e))})):(delete qe[c],_e((function(e){return Object(i.a)({},e)}))),xe(0),Re.current=1},placeholder:"ar"==Ye?o[0]:o[1],optionFilterProp:"children"},null===(a=te[t].data)||void 0===a||null===(n=a.options)||void 0===n?void 0:n.map((function(e){return b.a.createElement(B,{value:e.id},e[null===l||void 0===l?void 0:l.optionName])})))},le=function(){return de&&F.map((function(e,t){return b.a.createElement(b.a.Fragment,null,b.a.createElement(b.a.Fragment,null,"search"==e.type&&function(e){return b.a.createElement(b.a.Fragment,null,b.a.createElement(o.a,{title:"ar"==Ye?null===e||void 0===e?void 0:e.placeholder[0]:null===e||void 0===e?void 0:e.placeholder[1],color:"#6be3de",placement:"bottom"},b.a.createElement(c.a,{content:ne(e),trigger:"click",visible:H[e.uniq],onVisibleChange:function(){return Z(e)},placement:"topLeft"},b.a.createElement(u.a,{className:"closed-input",shape:"circle"},e.icon))))}(e)),b.a.createElement(b.a.Fragment,null,"dateFromTo"==e.type&&function(e){return b.a.createElement(b.a.Fragment,null,b.a.createElement(o.a,{title:"ar"==Ye?null===e||void 0===e?void 0:e.placeholder[0]:null===e||void 0===e?void 0:e.placeholder[1],color:"#6be3de",placement:"bottom"},b.a.createElement(c.a,{content:oe(e),trigger:"click",visible:H[e.uniq],onVisibleChange:function(){return Z(e)},placement:"topLeft"},b.a.createElement(u.a,{className:"closed-input",shape:"circle"},b.a.createElement("span",{role:"img","aria-label":"plus",class:"anticon anticon-plus"},e.icon)))))}(e)),b.a.createElement(b.a.Fragment,null,"select"==e.type&&function(e,t){return b.a.createElement(b.a.Fragment,null,b.a.createElement(o.a,{title:"ar"==Ye?null===e||void 0===e?void 0:e.placeholder[0]:null===e||void 0===e?void 0:e.placeholder[1],color:"#6be3de",placement:"bottom"},b.a.createElement(c.a,{content:ce(e,t),trigger:"click",visible:H[e.uniq],onVisibleChange:function(){return Z(e)},placement:"topLeft"},b.a.createElement(u.a,{className:"closed-input",shape:"circle"},b.a.createElement("span",{role:"img","aria-label":"plus",class:"anticon anticon-plus"},e.icon)))))}(e,t)))}))},re=Object(v.useState)(!1),ie=Object(l.a)(re,2),de=ie[0],ue=ie[1];Object(v.useEffect)((function(){F&&F.forEach((function(e,t){var a,o;(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.isOnline)&&function(e,t,a){var o=e.url,c=e.params;h.b.get(o,{headers:{Authorization:"Bearer ".concat(Fe)},params:c}).then((function(e){F[t].data.options=[].concat(Object(n.a)(F[t].data.options),Object(n.a)(e.data.data)),ae(F),a&&ue(a)})).catch((function(e){}))}(e.data,t,t+1==F.length),!(null===e||void 0===e||null===(o=e.data)||void 0===o?void 0:o.isOnline)&&t+1==F.length&&ue(!0)}))}),[$]);var se=Object(v.useState)([]),me=Object(l.a)(se,2),pe=me[0],ve=me[1],be=Object(v.useState)(!1),he=Object(l.a)(be,2),fe=he[0],ge=he[1],Oe=Object(f.g)(),je=Object(v.useState)(0),Ee=Object(l.a)(je,2),ye=Ee[0],xe=Ee[1],we=Object(N.b)(),Ce=Object(v.useState)({}),ke=Object(l.a)(Ce,2),Re=ke[0],Se=ke[1],Le=Object(v.useState)(z),Ne=Object(l.a)(Le,2),qe=Ne[0],_e=Ne[1];Object(v.useEffect)((function(){F.forEach((function(e){var t,a,n;z[e.key]=(null===(t=e.data)||void 0===t?void 0:t.defaultSelectValue)||0==(null===(a=e.data)||void 0===a?void 0:a.defaultSelectValue)?null===(n=e.data)||void 0===n?void 0:n.defaultSelectValue:null}))}),[]);var Fe=Object(N.c)((function(e){return e.Auth.idToken})),Ye=localStorage.getItem("lang");Object(v.useEffect)((function(){!function(e,t){var a=t.method,n=t.params,o=Object(i.a)(Object(i.a)({skip:ye},n),qe);ge(!0),h.b[a](e,{headers:{Authorization:"Bearer ".concat(Fe)},params:o}).then((function(t){"withdraws"===e&&(t.data.data=t.data.data.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{key:e.id})}))),ve(t.data),Re.pageSize=10,Se({total:t.data.count,pageSize:10}),ge(!1)})).catch((function(e){ge(!1)}))}(null===a||void 0===a?void 0:a[1],null===a||void 0===a?void 0:a[0])}),[qe,ye,t]);var Ae=function(e){var t=Object(i.a)({},e);t.current=e.current,Se(t),xe(10*(t.current-1))};we(p);var De=Object(v.useState)([q[0]]),Te=Object(l.a)(De,2),Be=(Te[0],Te[1]),ze=([].concat(Object(n.a)(q),Object(n.a)(_)),Object(v.useState)(0)),Ue=Object(l.a)(ze,2),Me=Ue[0];Ue[1];return Object(v.useEffect)((function(){Be([q[Me]])}),[Me]),pe&&Re&&b.a.createElement(Y,null,V&&b.a.createElement(u.a,{style:{margin:10},type:"primary",icon:b.a.createElement(C.a,null),onClick:function(){var e=Object(i.a)(Object(i.a)(Object(i.a)({},null===a||void 0===a?void 0:a[0].params),qe),{},{token:"".concat(Fe)});Object.entries(e).map((function(t){var a=Object(l.a)(t,2),n=a[0];a[1]||delete e[n]}));var t=new URLSearchParams(e);window.open("".concat(h.a,"/").concat(null===a||void 0===a?void 0:a[1],"/export").concat(t.toString()&&"?").concat(t.toString()),"_blank").focus()}},"Export"),M,0==U?b.a.createElement(b.a.Fragment,null,b.a.createElement(j,Object.assign({title:function(){return b.a.createElement(b.a.Fragment,null,b.a.createElement("div",{style:{margin:"10px",display:"flex",justifyContent:"space-between"}},b.a.createElement("div",null,g&&b.a.createElement(o.a,{title:"ar"==Ye?"\u0627\u0636\u0627\u0641\u0629":"Add",color:"#6be3de",placement:"bottom"},b.a.createElement(u.a,{onClick:function(){return Oe.push(g)},shape:"circle",type:"primary",style:{margin:" 2px"}},b.a.createElement(w.a,null))),le())))},footerContent:[pe.count,null===a||void 0===a?void 0:a[1].translate()],pagination:Object(i.a)(Object(i.a)({},Re),{},{position:["bottomCenter"]}),loading:fe,showSizeChanger:!1,columns:[W].concat(Object(n.a)(q),Object(n.a)(_)),onChange:Ae,dataSource:pe.data,scroll:{x:900}},P))):b.a.createElement(b.a.Fragment,null,b.a.createElement(j,{add:g,title:function(){return b.a.createElement(b.a.Fragment,null,b.a.createElement("div",{style:{margin:"10px",display:"flex",justifyContent:"space-between"}},b.a.createElement("div",null,g&&b.a.createElement(o.a,{title:"ar"==Ye?"\u0627\u0636\u0627\u0641\u0629":"Add",color:"#6be3de",placement:"bottom"},b.a.createElement(u.a,{onClick:function(){return Oe.push(g)},shape:"circle",type:"primary",style:{margin:" 2px"}},b.a.createElement(w.a,null))),le())))},footerContent:[pe.count,null===a||void 0===a?void 0:a[1].translate()],pagination:Object(i.a)(Object(i.a)({},Re),{},{position:["bottomCenter"]}),loading:fe,showSizeChanger:!1,columns:[W].concat(Object(n.a)(q),Object(n.a)(_),K),onChange:Ae,dataSource:pe.data,scroll:{x:900}})))}},713:function(e,t,a){"use strict";a.d(t,"b",(function(){return m}));var n,o,c,l,r,i=a(652),d=a(208),u={index:"clients",add:"clientsNew",edit:"clientsEdit",show:"clientsShow"},s={api:{index:[{method:"get",params:{}},"users"],add:[{method:"post",params:{}},"users"],edit:[{method:"put",params:{}},"users/"],show:[{method:"get",params:{}},"users/"],delete:[{method:"delete",params:{}},"users/"]},routes:{index:"".concat(d.b,"/").concat(null===(n=i.b[u.index])||void 0===n?void 0:n.path),indexTitle:u.index.replace(/([a-z])([A-Z])/g,"$1 $2"),indexKey:"home",add:"".concat(d.b,"/").concat(null===(o=i.b[u.add])||void 0===o?void 0:o.path),edit:"".concat(d.b,"/").concat(null===(c=i.b[u.edit])||void 0===c?void 0:c.path.slice(0,i.b[u.edit].path.length-3)),show:"".concat(d.b,"/").concat(null===(l=i.b[u.show])||void 0===l?void 0:l.path.slice(0,(null===(r=i.b[u.show])||void 0===r?void 0:r.path.length)-3))},titles:{add:"Create",edit:"global.edit",show:"Details"}},m={1:"active",0:"not active"};t.a=s},773:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(720);function o(e){return Object(n.a)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",stroke:"#000",strokeWidth:"2",d:"M2,3.99079514 C2,2.89130934 2.89821238,2 3.99079514,2 L20.0092049,2 C21.1086907,2 22,2.89821238 22,3.99079514 L22,20.0092049 C22,21.1086907 21.1017876,22 20.0092049,22 L3.99079514,22 C2.89130934,22 2,21.1017876 2,20.0092049 L2,3.99079514 Z M12,15 L12,14 C12,13 12,12.5 13,12 C14,11.5 15,11 15,9.5 C15,8.5 14,7 12,7 C10,7 9,8.26413718 9,10 M12,16 L12,18"}}]})(e)}}}]);
//# sourceMappingURL=37.6ef5615d.chunk.js.map