(this.webpackJsonpisomorphic=this.webpackJsonpisomorphic||[]).push([[63],{1483:function(e,t,n){"use strict";n.r(t);n(670);var a=n(672),c=n(206),l=n(0),o=n.n(l),r=n(19),i=n(650),s=n(651),d=n(653),m=n(207),u=n(767),b=n(42);t.default=function(){var e=Object(l.useState)(void 0),t=Object(c.a)(e,2),n=t[0],v=t[1],p=Object(l.useState)(!1),h=Object(c.a)(p,2),f=h[0],y=h[1],E=Object(r.h)(),x=Object(b.b)();return Object(l.useEffect)((function(){y(!0),m.b[u.a.api.show[0].method]("".concat(u.a.api.show[1]).concat(E.id),{headers:{}}).then((function(e){y(!1),v(e.data.data)}))}),[]),x({type:"SET",payload:[{key:u.a.routes.indexKey,to:u.a.routes.index,title:u.a.routes.indexTitle},{key:u.a.titles.show,to:"".concat(u.a.routes.show).concat(E.id),title:u.a.titles.show}]}),o.a.createElement("div",{className:"user_details"},o.a.createElement(s.a,null,o.a.createElement("div",null,o.a.createElement("h1",{className:"page_title"}," ",null===n||void 0===n?void 0:n.name," "),o.a.createElement("div",{style:{marginTop:"1rem"}},o.a.createElement(i.a,null,f?o.a.createElement("div",{className:"text-center"},o.a.createElement(d.a,null)):o.a.createElement(a.b,null,o.a.createElement(a.b.Item,{label:"address_en".translate()},null===n||void 0===n?void 0:n.address_en),o.a.createElement(a.b.Item,{label:"address_ar".translate()},null===n||void 0===n?void 0:n.address_ar),o.a.createElement(a.b.Item,{label:"email".translate()},null===n||void 0===n?void 0:n.email),o.a.createElement(a.b.Item,{label:"phone".translate()},null===n||void 0===n?void 0:n.phone),o.a.createElement(a.b.Item,{label:"latitude".translate()},null===n||void 0===n?void 0:n.latitude),o.a.createElement(a.b.Item,{label:"longitude".translate()},null===n||void 0===n?void 0:n.longitude),o.a.createElement(a.b.Item,{label:"country_name".translate()},null===n||void 0===n?void 0:n.country_name),o.a.createElement(a.b.Item,{label:"city_name".translate()},null===n||void 0===n?void 0:n.city_name),o.a.createElement(a.b.Item,{label:"region_name".translate()},null===n||void 0===n?void 0:n.region_name),o.a.createElement(a.b.Item,{label:"working_start".translate()},null===n||void 0===n?void 0:n.working_start),o.a.createElement(a.b.Item,{label:"working_end".translate()},null===n||void 0===n?void 0:n.working_end)))))))}},650:function(e,t,n){"use strict";var a=n(205);function c(){var e=Object(a.a)(["\n    width: 100%;\n    box-shadow: 0px 2px 6px #0000000A;\n    border-radius: 13px;\n    background: #FFFFFF 0% 0% no-repeat padding-box; \n    padding : 1rem 2rem;\n    height: 100%;\n \n    overflow: hidden ;\n"]);return c=function(){return e},e}var l=n(117).c.div(c());t.a=l},651:function(e,t,n){"use strict";var a=n(205);function c(){var e=Object(a.a)(["\n  padding: 1rem;\n"]);return c=function(){return e},e}var l=n(117).c.div(c());t.a=l},670:function(e,t,n){"use strict";n(649),n(671)},671:function(e,t,n){},672:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var a=n(52),c=n(119),l=n(658),o=n(0),r=n(28),i=n.n(r),s=n(684),d=n(688),m=n(211),u=n(85),b=n(10);function v(e){return void 0!==e&&null!==e}var p=function(e){var t,n=e.itemPrefixCls,c=e.component,l=e.span,r=e.className,s=e.style,d=e.labelStyle,m=e.contentStyle,u=e.bordered,b=e.label,p=e.content,h=e.colon,f=c;return u?o.createElement(f,{className:i()((t={},Object(a.a)(t,"".concat(n,"-item-label"),v(b)),Object(a.a)(t,"".concat(n,"-item-content"),v(p)),t),r),style:s,colSpan:l},v(b)&&o.createElement("span",{style:d},b),v(p)&&o.createElement("span",{style:m},p)):o.createElement(f,{className:i()("".concat(n,"-item"),r),style:s,colSpan:l},o.createElement("div",{className:"".concat(n,"-item-container")},b&&o.createElement("span",{className:i()("".concat(n,"-item-label"),Object(a.a)({},"".concat(n,"-item-no-colon"),!h)),style:d},b),p&&o.createElement("span",{className:i()("".concat(n,"-item-content")),style:m},p)))};function h(e,t,n){var a=t.colon,c=t.prefixCls,l=t.bordered,r=n.component,i=n.type,s=n.showLabel,d=n.showContent,m=n.labelStyle,u=n.contentStyle;return e.map((function(e,t){var n=e.props,v=n.label,h=n.children,f=n.prefixCls,y=void 0===f?c:f,E=n.className,x=n.style,j=n.labelStyle,w=n.contentStyle,O=n.span,g=void 0===O?1:O,S=e.key;return"string"===typeof r?o.createElement(p,{key:"".concat(i,"-").concat(S||t),className:E,style:x,labelStyle:Object(b.a)(Object(b.a)({},m),j),contentStyle:Object(b.a)(Object(b.a)({},u),w),span:g,colon:a,component:r,itemPrefixCls:y,bordered:l,label:s?v:null,content:d?h:null}):[o.createElement(p,{key:"label-".concat(S||t),className:E,style:Object(b.a)(Object(b.a)(Object(b.a)({},m),x),j),span:1,colon:a,component:r[0],itemPrefixCls:y,bordered:l,label:v}),o.createElement(p,{key:"content-".concat(S||t),className:E,style:Object(b.a)(Object(b.a)(Object(b.a)({},u),x),w),span:2*g-1,component:r[1],itemPrefixCls:y,bordered:l,content:h})]}))}var f=function(e){var t=o.useContext(x),n=e.prefixCls,a=e.vertical,c=e.row,l=e.index,r=e.bordered;return a?o.createElement(o.Fragment,null,o.createElement("tr",{key:"label-".concat(l),className:"".concat(n,"-row")},h(c,e,Object(b.a)({component:"th",type:"label",showLabel:!0},t))),o.createElement("tr",{key:"content-".concat(l),className:"".concat(n,"-row")},h(c,e,Object(b.a)({component:"td",type:"content",showContent:!0},t)))):o.createElement("tr",{key:l,className:"".concat(n,"-row")},h(c,e,Object(b.a)({component:r?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},t)))},y=function(e){return e.children},E=n(669),x=o.createContext({}),j={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function w(e,t,n){var a=e;return(void 0===t||t>n)&&(a=Object(E.a)(e,{span:n}),Object(m.a)(void 0===t,"Descriptions","Sum of column `span` in a line not match `column` of Descriptions.")),a}function O(e){var t,n=e.prefixCls,r=e.title,m=e.extra,b=e.column,v=void 0===b?j:b,p=e.colon,h=void 0===p||p,y=e.bordered,E=e.layout,O=e.children,g=e.className,S=e.style,N=e.size,k=e.labelStyle,C=e.contentStyle,_=o.useContext(u.b),I=_.getPrefixCls,F=_.direction,T=I("descriptions",n),P=o.useState({}),B=Object(c.a)(P,2),D=B[0],L=B[1],z=function(e,t){if("number"===typeof e)return e;if("object"===Object(l.a)(e))for(var n=0;n<d.b.length;n++){var a=d.b[n];if(t[a]&&void 0!==e[a])return e[a]||j[a]}return 3}(v,D);o.useEffect((function(){var e=d.a.subscribe((function(e){"object"===Object(l.a)(v)&&L(e)}));return function(){d.a.unsubscribe(e)}}),[]);var A=function(e,t){var n=Object(s.a)(e).filter((function(e){return e})),a=[],c=[],l=t;return n.forEach((function(e,o){var r,i=null===(r=e.props)||void 0===r?void 0:r.span,s=i||1;if(o===n.length-1)return c.push(w(e,i,l)),void a.push(c);s<l?(l-=s,c.push(e)):(c.push(w(e,s,l)),a.push(c),l=t,c=[])})),a}(O,z);return o.createElement(x.Provider,{value:{labelStyle:k,contentStyle:C}},o.createElement("div",{className:i()(T,(t={},Object(a.a)(t,"".concat(T,"-").concat(N),N&&"default"!==N),Object(a.a)(t,"".concat(T,"-bordered"),!!y),Object(a.a)(t,"".concat(T,"-rtl"),"rtl"===F),t),g),style:S},(r||m)&&o.createElement("div",{className:"".concat(T,"-header")},r&&o.createElement("div",{className:"".concat(T,"-title")},r),m&&o.createElement("div",{className:"".concat(T,"-extra")},m)),o.createElement("div",{className:"".concat(T,"-view")},o.createElement("table",null,o.createElement("tbody",null,A.map((function(e,t){return o.createElement(f,{key:t,index:t,colon:h,prefixCls:T,vertical:"vertical"===E,bordered:y,row:e})})))))))}O.Item=y;t.b=O},767:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return b}));var a,c,l,o,r,i=n(652),s=n(208),d={index:"Branches",add:"BranchesNew",edit:"BranchesEdit",show:"BranchesShow"},m={api:{index:[{method:"get",params:{}},"branches"],add:[{method:"post",params:{}},"branches"],edit:[{method:"put",params:{}},"branches/"],show:[{method:"get",params:{}},"branches/"],delete:[{method:"delete",params:{}},"branches/"]},routes:{index:"".concat(s.b,"/").concat(null===(a=i.b[d.index])||void 0===a?void 0:a.path),indexTitle:d.index.replace(/([a-z])([A-Z])/g,"$1 $2"),indexKey:"home",add:"".concat(s.b,"/").concat(null===(c=i.b[d.add])||void 0===c?void 0:c.path),edit:"".concat(s.b,"/").concat(null===(l=i.b[d.edit])||void 0===l?void 0:l.path.slice(0,i.b[d.edit].path.length-3)),show:"".concat(s.b,"/").concat(null===(o=i.b[d.show])||void 0===o?void 0:o.path.slice(0,(null===(r=i.b[d.show])||void 0===r?void 0:r.path.length)-3))},titles:{add:"Create",edit:"global.edit",show:"Details"}},u=[{id:1,name:"Sat"},{id:2,name:"Sun"},{id:3,name:"Mon"},{id:4,name:"Tues"},{id:5,name:"Wed"},{id:6,name:"Thur"},{id:7,name:"Fri"}],b={1:"Sat",2:"Sun",3:"Mon",4:"Tues",5:"Wed",6:"Thur",7:"Fri"};t.a=m}}]);
//# sourceMappingURL=63.f25b13c3.chunk.js.map