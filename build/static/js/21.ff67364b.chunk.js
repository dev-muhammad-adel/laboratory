(this.webpackJsonpisomorphic=this.webpackJsonpisomorphic||[]).push([[21],{1500:function(e,a,t){"use strict";t.r(a);t(660);var n=t(662),i=(t(661),t(663)),l=(t(681),t(686)),o=t(206),d=(t(657),t(656)),c=t(0),r=t.n(c),u=t(1507),s=(t(682),t(19)),m=t(650),p=t(651),v=t(665),b=t(653),h=t(207),g=t(42),E=t(210),f=t(777),x=t(161),O=(d.a.Option,{background:"white",color:"#1b5b7e",padding:".7rem 3rem",border:"1px solid #1b5b7e",marginLeft:"1rem"});a.default=u.a.create({name:"new-country"})((function(e){var a=Object(c.useState)(!1),t=Object(o.a)(a,2),d=t[0],w=t[1],y=Object(s.g)(),j=Object(c.useState)(null),F=Object(o.a)(j,2),k=F[0],S=F[1],N=Object(c.useState)(!1),_=Object(o.a)(N,2),A=_[0],T=_[1],D=e.form,z=D.getFieldDecorator,q=(D.resetFields,D.validateFields),I=Object(s.h)(),J=Object(g.b)(),K=Object(c.useState)([]),V=Object(o.a)(K,2),$=V[0],B=(V[1],Object(c.useState)(!1)),C=Object(o.a)(B,2),L=(C[0],C[1]);Object(c.useEffect)((function(){var e,a,t,n,i;I.id&&(T(!0),h.b[null===f.a||void 0===f.a||null===(e=f.a.api)||void 0===e||null===(a=e.show)||void 0===a||null===(t=a[0])||void 0===t?void 0:t.method]("".concat(null===f.a||void 0===f.a||null===(n=f.a.api)||void 0===n||null===(i=n.show)||void 0===i?void 0:i[1]).concat(I.id),{headers:{}}).then((function(e){T(!1),S(e.data.data)})))}),[]);return J({type:"SET",payload:[{key:f.a.routes.indexKey,to:f.a.routes.index,title:f.a.routes.indexTitle},{key:I.id?f.a.titles.edit:f.a.titles.add,to:I.id?"".concat(f.a.routes.edit).concat(I.id):f.a.routes.add,title:I.id?f.a.titles.edit:f.a.titles.add}]}),r.a.createElement(p.a,null,r.a.createElement("div",{className:"new_user_container"},r.a.createElement(n.a,null,r.a.createElement(i.a,{span:24,style:{marginTop:"1rem"}},r.a.createElement(m.a,null,A?r.a.createElement(b.a,null):r.a.createElement(n.a,null,r.a.createElement(i.a,{span:24},r.a.createElement(u.a,{onSubmit:function(e){e.preventDefault(),q((function(e,a){var t,n,i,l,o,d,c,r,u,s,m=new FormData;for(var p in $[0]&&m.append("image",$[0]),a)m.append(p,a[p]);(L(!0),e)||(w(!0),x.b.promise(h.b[k?null===f.a||void 0===f.a||null===(t=f.a.api)||void 0===t||null===(n=t.edit)||void 0===n||null===(i=n[0])||void 0===i?void 0:i.method:null===f.a||void 0===f.a||null===(l=f.a.api)||void 0===l||null===(o=l.add)||void 0===o||null===(d=o[0])||void 0===d?void 0:d.method](k?"".concat(null===f.a||void 0===f.a||null===(c=f.a.api)||void 0===c||null===(r=c.edit)||void 0===r?void 0:r[1]).concat(null===I||void 0===I?void 0:I.id):null===f.a||void 0===f.a||null===(u=f.a.api)||void 0===u||null===(s=u.add)||void 0===s?void 0:s[1],a,{headers:{}}),{pending:"Pending",success:{render:function(e){return w(!1),y.push(f.a.routes.index),"\ud83d\udc4c ".concat(e.data.data.message)},icon:"\ud83d\udfe2"},error:{render:function(e){var a,t,n;return w(!1),"\ud83e\udd2f ".concat((null===e||void 0===e||null===(a=e.data)||void 0===a||null===(t=a.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.message)||"Backend Error Occured")}}}))}))},layout:"vertical",className:"login-form"},r.a.createElement(u.a.Item,{label:r.a.createElement(E.a,{id:"table.title.NameEn"}),hasFeedback:!0},z("name_en",{initialValue:k?k.name_en:"",rules:[{required:!0,message:r.a.createElement(E.a,{id:"table.title.NameEn"})}]})(r.a.createElement(l.a,{type:"text",size:"large"}))),r.a.createElement(u.a.Item,{label:r.a.createElement(E.a,{id:"table.title.NameAr"}),hasFeedback:!0},z("name_ar",{initialValue:k?k.name_ar:"",rules:[{required:!0,message:r.a.createElement(E.a,{id:"table.title.NameAr"})}]})(r.a.createElement(l.a,{type:"text",size:"large"}))),r.a.createElement("div",{style:{display:"block",marginTop:"1.2rem",textAlign:"center"}},r.a.createElement(v.a,{styles:{padding:".7rem 4rem"},type:"submit"},d&&r.a.createElement(b.a,null),r.a.createElement("span",null," ",(I.id,r.a.createElement(E.a,{id:"global.submit"}))," ")),r.a.createElement(v.a,{type:"button",handleClick:function(){y.push(f.a.routes.index)},styles:O},r.a.createElement(E.a,{id:"global.cancel"})))))))))))}))},650:function(e,a,t){"use strict";var n=t(205);function i(){var e=Object(n.a)(["\n    width: 100%;\n    box-shadow: 0px 2px 6px #0000000A;\n    border-radius: 13px;\n    background: #FFFFFF 0% 0% no-repeat padding-box; \n    padding : 1rem 2rem;\n    height: 100%;\n \n    overflow: hidden ;\n"]);return i=function(){return e},e}var l=t(117).c.div(i());a.a=l},651:function(e,a,t){"use strict";var n=t(205);function i(){var e=Object(n.a)(["\n  padding: 1rem;\n"]);return i=function(){return e},e}var l=t(117).c.div(i());a.a=l},660:function(e,a,t){"use strict";t(649),t(659)},661:function(e,a,t){"use strict";t(649),t(659)},662:function(e,a,t){"use strict";var n=t(1008);a.a=n.a},663:function(e,a,t){"use strict";var n=t(842);a.a=n.a},777:function(e,a,t){"use strict";var n,i,l,o,d,c=t(652),r=t(208),u={index:"Occupations",add:"OccupationsNew",edit:"OccupationsEdit",show:"OccupationsShow"},s={api:{index:[{method:"get",params:{}},"occupations"],add:[{method:"post",params:{}},"occupations"],edit:[{method:"put",params:{}},"occupations/"],show:[{method:"get",params:{}},"occupations/"],delete:[{method:"delete",params:{}},"occupations/"]},routes:{index:"".concat(r.b,"/").concat(null===(n=c.b[u.index])||void 0===n?void 0:n.path),indexTitle:u.index.replace(/([a-z])([A-Z])/g,"$1 $2"),indexKey:"home",add:"".concat(r.b,"/").concat(null===(i=c.b[u.add])||void 0===i?void 0:i.path),edit:"".concat(r.b,"/").concat(null===(l=c.b[u.edit])||void 0===l?void 0:l.path.slice(0,c.b[u.edit].path.length-3)),show:"".concat(r.b,"/").concat(null===(o=c.b[u.show])||void 0===o?void 0:o.path.slice(0,(null===(d=c.b[u.show])||void 0===d?void 0:d.path.length)-3))},titles:{add:"provenance.create",edit:"global.edit",show:"Details"}};a.a=s}}]);
//# sourceMappingURL=21.ff67364b.chunk.js.map