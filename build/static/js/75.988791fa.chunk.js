(this.webpackJsonpisomorphic=this.webpackJsonpisomorphic||[]).push([[75],{1487:function(e,t,a){"use strict";a.r(t);a(660);var n=a(662),l=(a(670),a(672)),o=(a(661),a(663)),i=(a(1406),a(1415)),r=(a(940),a(1006)),d=(a(887),a(889)),m=a(206),c=(a(824),a(820)),s=a(0),u=a.n(s),p=a(19),v=a(650),b=a(651),E=a(653),f=a(207),_=a(740),h=a(42),I=a(209),y=a(705),g=a.n(y),Y=c.a.Meta;t.default=function(){var e,t,a,y,x,D,A,N,S,O,w,R,M,T,C,F,G,j=Object(s.useState)(void 0),k=Object(m.a)(j,2),P=k[0],U=k[1],L=Object(s.useState)(!1),H=Object(m.a)(L,2),J=H[0],z=H[1],B=Object(p.h)(),K=Object(h.b)();return Object(s.useEffect)((function(){z(!0),f.b[_.a.api.show[0].method]("".concat(_.a.api.show[1]).concat(B.id),{headers:{}}).then((function(e){z(!1),U(e.data.data)}))}),[]),K({type:"SET",payload:[{key:_.a.routes.indexKey,to:_.a.routes.index,title:_.a.routes.indexTitle},{key:_.a.titles.show,to:"".concat(_.a.routes.show).concat(B.id),title:_.a.titles.show}]}),u.a.createElement("div",{className:"user_details"},u.a.createElement(b.a,null,u.a.createElement("div",null,u.a.createElement("h1",{className:"page_title"}," ",null===P||void 0===P?void 0:P.name," "),u.a.createElement("div",{style:{marginTop:"1rem"}},u.a.createElement(v.a,null,J?u.a.createElement("div",{className:"text-center"},u.a.createElement(E.a,null)):u.a.createElement(n.a,{gutter:[16,16]},u.a.createElement(o.a,{span:12},u.a.createElement(d.a,{orientation:"left"},"User"),u.a.createElement(i.b,{itemLayout:"horizontal",dataSource:(null===P||void 0===P?void 0:P.user)&&[null===P||void 0===P?void 0:P.user],renderItem:function(e){return u.a.createElement(i.b.Item,null,u.a.createElement(i.b.Item.Meta,{avatar:u.a.createElement(r.a,{src:null===e||void 0===e?void 0:e.image}),title:u.a.createElement(I.b,{to:"/admin/clients/".concat(e.id)},e.name_en),description:u.a.createElement(u.a.Fragment,null,u.a.createElement("div",null,e.email),u.a.createElement("div",null,e.phone))}))}})),u.a.createElement(o.a,{span:24},u.a.createElement(d.a,{orientation:"left"},"Application Info"),u.a.createElement(l.b,{bordered:!0},u.a.createElement(l.b.Item,{span:2,label:"status".translate()},null===(e=_.b[null===P||void 0===P?void 0:P.status])||void 0===e?void 0:e[0]),u.a.createElement(l.b.Item,{span:2,label:"amount_finance".translate()},null===P||void 0===P?void 0:P.amount_finance," SAR"),u.a.createElement(l.b.Item,{span:2,label:"apr".translate()},(100*(null===P||void 0===P?void 0:P.apr)).toFixed(2),"%"),u.a.createElement(l.b.Item,{span:2,label:"installment_amount".translate()},null===P||void 0===P?void 0:P.installment_amount," SAR"),u.a.createElement(l.b.Item,{span:2,label:"interest_rate".translate()},(100*(null===P||void 0===P?void 0:P.interest_rate)).toFixed(2),"%"),u.a.createElement(l.b.Item,{span:2,label:"tenure".translate()},null===P||void 0===P?void 0:P.tenure," Months"),u.a.createElement(l.b.Item,{span:2,label:"sector".translate()},null===P||void 0===P?void 0:P.sector),u.a.createElement(l.b.Item,{span:2,label:"profit".translate()},null===P||void 0===P?void 0:P.profit," SAR"),u.a.createElement(l.b.Item,{span:2,label:"first_due_date".translate()},u.a.createElement("div",{style:{display:"flex",flexDirection:"column",gap:5}},u.a.createElement("div",null,g()(null===P||void 0===P?void 0:P.first_due_date).format("iYYYY-iM-iD")," H"),u.a.createElement("div",null,g()(null===P||void 0===P?void 0:P.first_due_date).format("YYYY-M-D")," G "))),u.a.createElement(l.b.Item,{span:2,label:"last_due_date".translate()},u.a.createElement("div",{style:{display:"flex",flexDirection:"column",gap:5}},u.a.createElement("div",null,g()(null===P||void 0===P?void 0:P.last_due_date).format("iYYYY-iM-iD")," H"),u.a.createElement("div",null,g()(null===P||void 0===P?void 0:P.last_due_date).format("YYYY-M-D")," G "))),u.a.createElement(l.b.Item,{label:"created_at".translate()},u.a.createElement("div",{style:{display:"flex",flexDirection:"column",gap:5}},u.a.createElement("div",null,g()(null===P||void 0===P?void 0:P.created_at).format("iYYYY-iM-iD")," H"),u.a.createElement("div",null,g()(null===P||void 0===P?void 0:P.created_at).format("YYYY-M-D")," G "))))),(null===P||void 0===P?void 0:P.documents.length)>0&&u.a.createElement(o.a,{span:24},u.a.createElement(d.a,{orientation:"left"},"Documents Info"),null===P||void 0===P||null===(t=P.documents)||void 0===t?void 0:t.map((function(e){return u.a.createElement(u.a.Fragment,null,u.a.createElement("a",{target:"_blank",href:(null===e||void 0===e?void 0:e.url)?e.url:"#"},u.a.createElement(c.a,{hoverable:!0,style:{width:200,display:"inline-block"},cover:u.a.createElement("img",{alt:e.type.replaceAll("_"," "),src:"https://s1.eestatic.com/2018/05/02/actualidad/actualidad_304233531_130193551_1024x576.jpg"})},u.a.createElement(Y,{title:e.type.replaceAll("_"," ")}))))}))),u.a.createElement(o.a,{span:24},u.a.createElement(d.a,{orientation:"left"},"Employment Info"),u.a.createElement(l.b,{bordered:!0},u.a.createElement(l.b.Item,{span:2,label:"total_monthly_salary".translate()},null===P||void 0===P||null===(a=P.employmentInformation)||void 0===a?void 0:a.total_monthly_salary," SAR"),u.a.createElement(l.b.Item,{span:2,label:"basic_monthly_salary".translate()},null===P||void 0===P||null===(y=P.employmentInformation)||void 0===y?void 0:y.basic_monthly_salary," SAR"),u.a.createElement(l.b.Item,{span:2,label:"salary_bank".translate()},null===P||void 0===P||null===(x=P.employmentInformation)||void 0===x?void 0:x.salary_bank),u.a.createElement(l.b.Item,{span:2,label:"salary".translate()},null===P||void 0===P||null===(D=P.employmentInformation)||void 0===D?void 0:D.salary," SAR"),u.a.createElement(l.b.Item,{span:2,label:"rent_amount".translate()},null===P||void 0===P||null===(A=P.employmentInformation)||void 0===A?void 0:A.rent_amount," SAR"),u.a.createElement(l.b.Item,{span:2,label:"occupation".translate()},null===P||void 0===P||null===(N=P.employmentInformation)||void 0===N?void 0:N.occupation),u.a.createElement(l.b.Item,{span:2,label:"mortgage_support_amount".translate()},null===P||void 0===P||null===(S=P.employmentInformation)||void 0===S?void 0:S.mortgage_support_amount," SAR"),u.a.createElement(l.b.Item,{span:2,label:"monthly_expenses".translate()},null===P||void 0===P||null===(O=P.employmentInformation)||void 0===O?void 0:O.monthly_expenses," SAR"),u.a.createElement(l.b.Item,{span:2,label:"months_in_service".translate()},null===P||void 0===P||null===(w=P.employmentInformation)||void 0===w?void 0:w.months_in_service),u.a.createElement(l.b.Item,{span:2,label:"IBAN".translate()},null===P||void 0===P||null===(R=P.employmentInformation)||void 0===R?void 0:R.iban),u.a.createElement(l.b.Item,{span:2,label:"house_type".translate()},0==(null===P||void 0===P||null===(M=P.employmentInformation)||void 0===M?void 0:M.house_type)?"Rent":"Own"),u.a.createElement(l.b.Item,{span:2,label:"having_mortgage_support".translate()},Boolean(null===P||void 0===P||null===(T=P.employmentInformation)||void 0===T?void 0:T.having_mortgage_support)+""),u.a.createElement(l.b.Item,{span:2,label:"employment_category".translate()},null===P||void 0===P||null===(C=P.employmentInformation)||void 0===C?void 0:C.employment_category),u.a.createElement(l.b.Item,{span:2,label:"created_at".translate()},u.a.createElement("div",{style:{display:"flex",flexDirection:"column",gap:5}},u.a.createElement("div",null,g()(null===P||void 0===P||null===(F=P.employmentInformation)||void 0===F?void 0:F.created_at).format("iYYYY-iM-iD")," H"),u.a.createElement("div",null,g()(null===P||void 0===P||null===(G=P.employmentInformation)||void 0===G?void 0:G.created_at).format("YYYY-M-D")," G "))))),u.a.createElement(o.a,{span:12})))))))}},650:function(e,t,a){"use strict";var n=a(205);function l(){var e=Object(n.a)(["\n    width: 100%;\n    box-shadow: 0px 2px 6px #0000000A;\n    border-radius: 13px;\n    background: #FFFFFF 0% 0% no-repeat padding-box; \n    padding : 1rem 2rem;\n    height: 100%;\n \n    overflow: hidden ;\n"]);return l=function(){return e},e}var o=a(117).c.div(l());t.a=o},651:function(e,t,a){"use strict";var n=a(205);function l(){var e=Object(n.a)(["\n  padding: 1rem;\n"]);return l=function(){return e},e}var o=a(117).c.div(l());t.a=o},740:function(e,t,a){"use strict";a.d(t,"b",(function(){return u}));var n,l,o,i,r,d=a(652),m=a(208),c={index:"Applications",add:"ApplicationsNew",edit:"ApplicationsEdit",show:"ApplicationsShow"},s={api:{index:[{method:"get",params:{}},"applications"],add:[{method:"post",params:{}},"applications"],edit:[{method:"put",params:{}},"applications/"],show:[{method:"get",params:{}},"applications/"],delete:[{method:"delete",params:{}},"applications/"],validate:[{method:"post",params:{}},"validate_applications/"]},routes:{index:"".concat(m.b,"/").concat(null===(n=d.b[c.index])||void 0===n?void 0:n.path),indexTitle:c.index.replace(/([a-z])([A-Z])/g,"$1 $2"),indexKey:"home",add:"".concat(m.b,"/").concat(null===(l=d.b[c.add])||void 0===l?void 0:l.path),edit:"".concat(m.b,"/").concat(null===(o=d.b[c.edit])||void 0===o?void 0:o.path.slice(0,d.b[c.edit].path.length-3)),show:"".concat(m.b,"/").concat(null===(i=d.b[c.show])||void 0===i?void 0:i.path.slice(0,(null===(r=d.b[c.show])||void 0===r?void 0:r.path.length)-3))},titles:{add:"Create",edit:"global.edit",show:"Details"},permissionName:"applications"},u={0:["DRAFT","black"],1:["DECLINED","red"],2:["CONFIRMED","green"],3:["PENDING CUSTOMER ACCEPTANCE","orange"],4:["PENDING DOCUMENTS UPLOAD","orange"],5:["PENDING DOCUMENTS VALIDATION","orange"],6:["PENDING DOCUMENTS SIGNATURE","orange"],7:["PENDING PROMISSORY NOTE SIGNATURE","orange"],8:["ACTIVE DEAL","green"],9:["CLOSED","red"],10:["REJECT","red"]};t.a=s}}]);
//# sourceMappingURL=75.988791fa.chunk.js.map