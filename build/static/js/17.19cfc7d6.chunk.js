(this.webpackJsonpbetalab=this.webpackJsonpbetalab||[]).push([[17],{461:function(e,a,t){"use strict";var n,i=t(89),l=t(62).c.div(n||(n=Object(i.a)(["\n    width: 100%;\n    box-shadow: 0px 2px 6px #0000000A;\n    border-radius: 13px;\n    background: #FFFFFF 0% 0% no-repeat padding-box; \n    padding : 1rem 2rem;\n    height: 100%;\n \n    overflow: hidden ;\n"])));a.a=l},462:function(e,a,t){"use strict";var n,i=t(89),l=t(62).c.div(n||(n=Object(i.a)(["\n  padding: 1rem;\n"])));a.a=l},472:function(e,a,t){"use strict";t(459),t(471)},473:function(e,a,t){"use strict";t(459),t(471)},559:function(e,a,t){"use strict";var n,i,l,d,o,r=t(463),c=t(151),s={index:"Companies",add:"CompaniesNew",edit:"CompaniesEdit",show:"CompaniesShow"},u={api:{index:[{method:"get",params:{}},"companies"],add:[{method:"post",params:{}},"companies"],edit:[{method:"put",params:{}},"companies/"],show:[{method:"get",params:{}},"companies/"],delete:[{method:"delete",params:{}},"companies/"]},routes:{index:"".concat(c.b,"/").concat(null===(n=r.b[s.index])||void 0===n?void 0:n.path),indexTitle:s.index.replace(/([a-z])([A-Z])/g,"$1 $2"),indexKey:"home",add:"".concat(c.b,"/").concat(null===(i=r.b[s.add])||void 0===i?void 0:i.path),edit:"".concat(c.b,"/").concat(null===(l=r.b[s.edit])||void 0===l?void 0:l.path.slice(0,r.b[s.edit].path.length-3)),show:"".concat(c.b,"/").concat(null===(d=r.b[s.show])||void 0===d?void 0:d.path.slice(0,(null===(o=r.b[s.show])||void 0===o?void 0:o.path.length)-3))},titles:{add:"provenance.create",edit:"global.edit",show:"Details"}};a.a=u},691:function(e,a,t){"use strict";t.r(a);t(472);var n=t(486),i=(t(473),t(487)),l=(t(467),t(468)),d=t(460),o=(t(470),t(469)),r=t(0),c=t.n(r),s=t(915),u=(t(501),t(18)),m=t(461),p=t(462),b=t(500),v=t(464),h=t(150),g=t(42),E=t(155),f=t(559),x=t(118),y=o.a.Option,w={background:"white",color:"#1b5b7e",padding:".7rem 3rem",border:"1px solid #1b5b7e",marginLeft:"1rem"};a.default=s.a.create({name:"new-country"})((function(e){var a=Object(r.useState)(!1),t=Object(d.a)(a,2),O=t[0],_=t[1],j=Object(u.g)(),F=Object(r.useState)(null),k=Object(d.a)(F,2),S=k[0],N=k[1],C=Object(r.useState)(!1),z=Object(d.a)(C,2),A=z[0],T=z[1],q=e.form,D=q.getFieldDecorator,I=(q.resetFields,q.validateFields),P=Object(u.h)(),V=Object(g.b)(),G=Object(r.useState)([]),J=Object(d.a)(G,2),K=J[0],$=(J[1],Object(r.useState)(!1)),B=Object(d.a)($,2),L=(B[0],B[1]);Object(r.useEffect)((function(){var e,a,t,n,i;P.id&&(T(!0),h.b[null===f.a||void 0===f.a||null===(e=f.a.api)||void 0===e||null===(a=e.show)||void 0===a||null===(t=a[0])||void 0===t?void 0:t.method]("".concat(null===f.a||void 0===f.a||null===(n=f.a.api)||void 0===n||null===(i=n.show)||void 0===i?void 0:i[1]).concat(P.id),{headers:{}}).then((function(e){T(!1),N(e.data.data)})))}),[]);return V({type:"SET",payload:[{key:f.a.routes.indexKey,to:f.a.routes.index,title:f.a.routes.indexTitle},{key:P.id?f.a.titles.edit:f.a.titles.add,to:P.id?"".concat(f.a.routes.edit).concat(P.id):f.a.routes.add,title:P.id?f.a.titles.edit:f.a.titles.add}]}),c.a.createElement(p.a,null,c.a.createElement("div",{className:"new_user_container"},c.a.createElement(n.a,null,c.a.createElement(i.a,{span:24,style:{marginTop:"1rem"}},c.a.createElement(m.a,null,A?c.a.createElement(v.a,null):c.a.createElement(n.a,null,c.a.createElement(i.a,{span:24},c.a.createElement(s.a,{onSubmit:function(e){e.preventDefault(),I((function(e,a){var t,n,i,l,d,o,r,c,s,u,m=new FormData;for(var p in K[0]&&m.append("image",K[0]),a)m.append(p,a[p]);(L(!0),e)||(_(!0),x.b.promise(h.b[S?null===f.a||void 0===f.a||null===(t=f.a.api)||void 0===t||null===(n=t.edit)||void 0===n||null===(i=n[0])||void 0===i?void 0:i.method:null===f.a||void 0===f.a||null===(l=f.a.api)||void 0===l||null===(d=l.add)||void 0===d||null===(o=d[0])||void 0===o?void 0:o.method](S?"".concat(null===f.a||void 0===f.a||null===(r=f.a.api)||void 0===r||null===(c=r.edit)||void 0===c?void 0:c[1]).concat(null===P||void 0===P?void 0:P.id):null===f.a||void 0===f.a||null===(s=f.a.api)||void 0===s||null===(u=s.add)||void 0===u?void 0:u[1],a,{headers:{}}),{pending:"Pending",success:{render:function(e){return _(!1),j.push(f.a.routes.index),"\ud83d\udc4c ".concat(e.data.data.message)},icon:"\ud83d\udfe2"},error:{render:function(e){var a,t,n;return _(!1),"\ud83e\udd2f ".concat((null===e||void 0===e||null===(a=e.data)||void 0===a||null===(t=a.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.message)||"Backend Error Occured")}}}))}))},layout:"vertical",className:"login-form"},c.a.createElement(s.a.Item,{label:c.a.createElement(E.a,{id:"table.title.NameEn"}),hasFeedback:!0},D("name_en",{initialValue:S?S.name_en:"",rules:[{required:!0,message:c.a.createElement(E.a,{id:"table.title.NameEn"})}]})(c.a.createElement(l.a,{type:"text",size:"large"}))),c.a.createElement(s.a.Item,{label:c.a.createElement(E.a,{id:"table.title.NameAr"}),hasFeedback:!0},D("name_ar",{initialValue:S?S.name_ar:"",rules:[{required:!0,message:c.a.createElement(E.a,{id:"table.title.NameAr"})}]})(c.a.createElement(l.a,{type:"text",size:"large"}))),c.a.createElement(s.a.Item,{label:c.a.createElement(E.a,{id:"due_day_on_month"}),hasFeedback:!0},D("due_day_on_month",{initialValue:S?S.due_day_on_month:"",rules:[{required:!0,message:c.a.createElement(E.a,{id:"due_day_on_month"})}]})(c.a.createElement(l.a,{type:"text",size:"large"}))),c.a.createElement(s.a.Item,{label:c.a.createElement(E.a,{id:"stage"}),hasFeedback:!0},D("stage",{initialValue:S?S.stage:"",rules:[{required:!0,message:c.a.createElement(E.a,{id:"stage"})}]})(c.a.createElement(o.a,{optionFilterProp:"children",size:"large",allowClear:!0},c.a.createElement(y,{value:"P"},"P"),c.a.createElement(y,{value:"G"}," G ")))),c.a.createElement("div",{style:{display:"block",marginTop:"1.2rem",textAlign:"center"}},c.a.createElement(b.a,{styles:{padding:".7rem 4rem"},type:"submit"},O&&c.a.createElement(v.a,null),c.a.createElement("span",null," ",(P.id,c.a.createElement(E.a,{id:"global.submit"}))," ")),c.a.createElement(b.a,{type:"button",handleClick:function(){j.push(f.a.routes.index)},styles:w},c.a.createElement(E.a,{id:"global.cancel"})))))))))))}))}}]);
//# sourceMappingURL=17.19cfc7d6.chunk.js.map