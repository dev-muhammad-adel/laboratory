(this.webpackJsonpisomorphic=this.webpackJsonpisomorphic||[]).push([[26],{1465:function(e,a,t){"use strict";t.r(a);t(660);var n=t(662),l=(t(661),t(663)),o=(t(884),t(904)),i=(t(681),t(686)),r=t(1),d=(t(727),t(732)),s=t(206),c=(t(1007),t(1003)),u=(t(657),t(656)),m=t(0),p=t.n(m),v=(t(682),t(19)),h=t(650),b=t(651),g=t(665),E=t(653),f=t(207),w=t(42),y=t(210),x=t(1519),O=t(762),j=t(161),F=u.a.Option,P=c.a.Dragger,k={background:"white",color:"#02a79f ",padding:".7rem 3rem",border:"1px solid #02a79f ",marginLeft:"1rem"};a.default=function(e){var a,t=Object(m.useState)(!1),c=Object(s.a)(t,2),T=c[0],_=c[1],I=Object(v.g)(),S=Object(m.useState)(null),q=Object(s.a)(S,2),N=q[0],A=q[1],C=Object(v.h)(),D=Object(m.useState)(null===C||void 0===C?void 0:C.id),B=Object(s.a)(D,2),J=B[0],K=B[1],L=Object(m.useState)(!1),R=Object(s.a)(L,2),U=R[0],V=R[1],W=Object(m.useState)([]),$=Object(s.a)(W,2),z=$[0],Z=$[1],G=Object(w.b)();localStorage.getItem("lang");Object(m.useEffect)((function(){f.b.get("roles",{headers:{}}).then((function(e){V(e.data.data)}))}),[]),Object(m.useEffect)((function(){var e,a,t,n,l;C.id&&f.b[null===O.a||void 0===O.a||null===(e=O.a.api)||void 0===e||null===(a=e.show)||void 0===a||null===(t=a[0])||void 0===t?void 0:t.method]("".concat(null===O.a||void 0===O.a||null===(n=O.a.api)||void 0===n||null===(l=n.show)||void 0===l?void 0:l[1]).concat(C.id),{headers:{}}).then((function(e){A(e.data.data),K(!1)}))}),[]),G({type:"SET",payload:[{key:O.a.routes.indexKey,to:O.a.routes.index,title:O.a.routes.indexTitle},{key:C.id?O.a.titles.edit:O.a.titles.add,to:C.id?"".concat(O.a.routes.edit).concat(C.id):O.a.routes.add,title:C.id?O.a.titles.edit:O.a.titles.add}]});var H=d.a.useForm(),M=Object(s.a)(H,1)[0];return p.a.createElement(b.a,null,p.a.createElement("div",{className:"new_user_container"},p.a.createElement(n.a,null,p.a.createElement(l.a,{span:24,style:{marginTop:"1rem"}},p.a.createElement(h.a,null,J?p.a.createElement(E.a,null):p.a.createElement(n.a,null,p.a.createElement(l.a,{span:24},p.a.createElement(d.a,{form:M,layout:"vertical",name:"register",onFinish:function(e){var a,t,n,l,o,i,r,d,s,c;C&&!e.password_confirmation&&delete e.password_confirmation,C&&!e.password&&delete e.password,console.log("Received values of form: ",e),_(!0);var u=new FormData;for(var m in C&&u.append("_method","PUT"),z[0]&&u.append("image",z[0]),e.roles.map((function(e){return u.append("roles[]",e)})),delete e.roles,e)u.append(m,e[m]);j.b.promise(f.b[N?null===O.a||void 0===O.a||null===(a=O.a.api)||void 0===a||null===(t=a.add)||void 0===t||null===(n=t[0])||void 0===n?void 0:n.method:null===O.a||void 0===O.a||null===(l=O.a.api)||void 0===l||null===(o=l.add)||void 0===o||null===(i=o[0])||void 0===i?void 0:i.method](N?"".concat(null===O.a||void 0===O.a||null===(r=O.a.api)||void 0===r||null===(d=r.edit)||void 0===d?void 0:d[1]).concat(null===C||void 0===C?void 0:C.id):null===O.a||void 0===O.a||null===(s=O.a.api)||void 0===s||null===(c=s.add)||void 0===c?void 0:c[1],u,{headers:{}}),{pending:"Pending",success:{render:function(e){return _(!1),I.push(O.a.routes.index),"\ud83d\udc4c ".concat(e.data.data.message)},icon:"\ud83d\udfe2"},error:{render:function(e){var a,t,n;return _(!1),"\ud83e\udd2f ".concat((null===e||void 0===e||null===(a=e.data)||void 0===a||null===(t=a.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.message)||"Backend Error Occured")}}})},initialValues:C?Object(r.a)(Object(r.a)({},N),{},{roles:null===N||void 0===N||null===(a=N.roles)||void 0===a?void 0:a.map((function(e){return+e.id}))}):{is_active:1},scrollToFirstError:!0,autoComplete:!1},p.a.createElement(d.a.Item,{name:"name",label:"name",tooltip:"What do you want others to call you?",rules:[{required:!C,message:"Please input your name!",whitespace:!0}]},p.a.createElement(i.a,null)),p.a.createElement(d.a.Item,{name:"email",label:"E-mail",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!C,message:"Please input your E-mail!"}]},p.a.createElement(i.a,null)),p.a.createElement(d.a.Item,{name:"is_active",label:"is_active".translate(),rules:[{required:!C,message:"Please select a status!"}]},p.a.createElement(u.a,{placeholder:"select status"},p.a.createElement(F,{value:1},"Active"),p.a.createElement(F,{value:0},"Not Active"))),p.a.createElement(d.a.Item,{name:"password",label:"Password",rules:[{required:!C,message:"Please input your password!"}],hasFeedback:!0},p.a.createElement(i.a.Password,null)),p.a.createElement(d.a.Item,{name:"password_confirmation",label:"Confirm Password",dependencies:["password"],hasFeedback:!0,rules:[{required:!C,message:"Please confirm your password!"},function(e){var a=e.getFieldValue;return{validator:function(e,t){return t&&a("password")!==t?Promise.reject(new Error("The two passwords that you entered do not match!")):Promise.resolve()}}}]},p.a.createElement(i.a.Password,null)),p.a.createElement(d.a.Item,{name:"roles",label:"roles".translate(),rules:[{required:!C,message:"Please select a role!"}]},p.a.createElement(u.a,{mode:"multiple",placeholder:"select a role"},U&&(null===U||void 0===U?void 0:U.map((function(e){var a=e.id,t=e.name;return p.a.createElement(F,{value:+a},t)}))))),p.a.createElement(P,{beforeUpload:function(e){return Z([e]),!1},fileList:z,multiple:!1,listType:"picture-card",progress:{strokeColor:{"0%":"#108ee9","100%":"#87d068"},strokeWidth:4,format:function(e){return"".concat(parseFloat(e.toFixed(1)),"%")}},onRemove:function(e){Z([])},style:{display:"inline-flex",marginBottom:"10px",opacity:z.length>=1?"50%":"100%",pointerEvents:z.length>=1?"none":"auto"}},p.a.createElement("p",{className:"ant-upload-drag-icon"},p.a.createElement(x.a,{style:{color:"#1b5b7e"}})),p.a.createElement("p",{className:"ant-upload-text"},p.a.createElement(y.a,{id:"upload_image"})),p.a.createElement("p",{className:"ant-upload-hint"})),(null===N||void 0===N?void 0:N.image)&&p.a.createElement("div",{style:{width:"fit-content",border:"1px solid #c4c1c1",padding:"10px",alignItems:"center",display:"flex"}},p.a.createElement(o.a,{width:100,height:100,src:null===N||void 0===N?void 0:N.image})),p.a.createElement(d.a.Item,null,p.a.createElement("div",{style:{display:"block",marginTop:"1.2rem",textAlign:"center"}},p.a.createElement(g.a,{styles:{padding:".7rem 4rem"},type:"submit"},T&&p.a.createElement(E.a,null),p.a.createElement("span",null," ",(C.id,p.a.createElement(y.a,{id:"global.submit"}))," ")),p.a.createElement(g.a,{type:"button",handleClick:function(){I.push(O.a.routes.index)},styles:k},p.a.createElement(y.a,{id:"global.cancel"}))))))))))))}},650:function(e,a,t){"use strict";var n=t(205);function l(){var e=Object(n.a)(["\n    width: 100%;\n    box-shadow: 0px 2px 6px #0000000A;\n    border-radius: 13px;\n    background: #FFFFFF 0% 0% no-repeat padding-box; \n    padding : 1rem 2rem;\n    height: 100%;\n \n    overflow: hidden ;\n"]);return l=function(){return e},e}var o=t(117).c.div(l());a.a=o},651:function(e,a,t){"use strict";var n=t(205);function l(){var e=Object(n.a)(["\n  padding: 1rem;\n"]);return l=function(){return e},e}var o=t(117).c.div(l());a.a=o},762:function(e,a,t){"use strict";t.d(a,"b",(function(){return m}));var n,l,o,i,r,d=t(652),s=t(208),c={index:"admins",add:"adminsNew",edit:"adminsEdit",show:"adminsShow"},u={api:{index:[{method:"get",params:{}},"admins"],add:[{method:"post",params:{}},"admins"],edit:[{method:"post",params:{}},"admins/"],show:[{method:"get",params:{}},"admins/"],delete:[{method:"delete",params:{}},"admins/"]},routes:{index:"".concat(s.b,"/").concat(null===(n=d.b[c.index])||void 0===n?void 0:n.path),indexTitle:c.index.replace(/([a-z])([A-Z])/g,"$1 $2"),indexKey:"home",add:"".concat(s.b,"/").concat(null===(l=d.b[c.add])||void 0===l?void 0:l.path),edit:"".concat(s.b,"/").concat(null===(o=d.b[c.edit])||void 0===o?void 0:o.path.slice(0,d.b[c.edit].path.length-3)),show:"".concat(s.b,"/").concat(null===(i=d.b[c.show])||void 0===i?void 0:i.path.slice(0,(null===(r=d.b[c.show])||void 0===r?void 0:r.path.length)-3))},titles:{add:"Create",edit:"global.edit",show:"Details"}},m={1:"active",0:"not active"};a.a=u}}]);
//# sourceMappingURL=26.3eedcb21.chunk.js.map