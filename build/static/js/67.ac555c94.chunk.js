(this.webpackJsonpisomorphic=this.webpackJsonpisomorphic||[]).push([[67],{1481:function(e,t,n){"use strict";n.r(t);n(670);var a=n(672),c=n(206),o=n(0),l=n.n(o),r=n(19),i=n(650),s=n(651),d=n(653),m=n(207),u=n(766),b=n(42);t.default=function(){var e=Object(o.useState)(void 0),t=Object(c.a)(e,2),n=t[0],p=t[1],v=Object(o.useState)(!1),h=Object(c.a)(v,2),f=h[0],y=h[1],E=Object(r.h)(),x=Object(b.b)();return Object(o.useEffect)((function(){y(!0),m.b[u.a.api.show[0].method]("".concat(u.a.api.show[1]).concat(E.id),{headers:{}}).then((function(e){y(!1),p(e.data.data)}))}),[]),x({type:"SET",payload:[{key:u.a.routes.indexKey,to:u.a.routes.index,title:u.a.routes.indexTitle},{key:u.a.titles.show,to:"".concat(u.a.routes.show).concat(E.id),title:u.a.titles.show}]}),l.a.createElement("div",{className:"user_details"},l.a.createElement(s.a,null,l.a.createElement("div",null,l.a.createElement("h1",{className:"page_title"}," ",null===n||void 0===n?void 0:n.name," "),l.a.createElement("div",{style:{marginTop:"1rem"}},l.a.createElement(i.a,null,f?l.a.createElement("div",{className:"text-center"},l.a.createElement(d.a,null)):l.a.createElement(a.b,null,l.a.createElement(a.b.Item,{label:"Image"},(null===n||void 0===n?void 0:n.image)?l.a.createElement("img",{style:{width:100,height:100},src:n.image}):"__"),l.a.createElement(a.b.Item,{label:"title_en".translate()},null===n||void 0===n?void 0:n.title_en),l.a.createElement(a.b.Item,{label:"title_en".translate()},null===n||void 0===n?void 0:n.title_ar),l.a.createElement(a.b.Item,{label:"content_en".translate()},null===n||void 0===n?void 0:n.content_en),l.a.createElement(a.b.Item,{label:"content_ar".translate()},null===n||void 0===n?void 0:n.content_ar)))))))}},650:function(e,t,n){"use strict";var a=n(205);function c(){var e=Object(a.a)(["\n    width: 100%;\n    box-shadow: 0px 2px 6px #0000000A;\n    border-radius: 13px;\n    background: #FFFFFF 0% 0% no-repeat padding-box; \n    padding : 1rem 2rem;\n    height: 100%;\n \n    overflow: hidden ;\n"]);return c=function(){return e},e}var o=n(117).c.div(c());t.a=o},651:function(e,t,n){"use strict";var a=n(205);function c(){var e=Object(a.a)(["\n  padding: 1rem;\n"]);return c=function(){return e},e}var o=n(117).c.div(c());t.a=o},670:function(e,t,n){"use strict";n(649),n(671)},671:function(e,t,n){},672:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var a=n(52),c=n(119),o=n(658),l=n(0),r=n(28),i=n.n(r),s=n(684),d=n(688),m=n(211),u=n(85),b=n(10);function p(e){return void 0!==e&&null!==e}var v=function(e){var t,n=e.itemPrefixCls,c=e.component,o=e.span,r=e.className,s=e.style,d=e.labelStyle,m=e.contentStyle,u=e.bordered,b=e.label,v=e.content,h=e.colon,f=c;return u?l.createElement(f,{className:i()((t={},Object(a.a)(t,"".concat(n,"-item-label"),p(b)),Object(a.a)(t,"".concat(n,"-item-content"),p(v)),t),r),style:s,colSpan:o},p(b)&&l.createElement("span",{style:d},b),p(v)&&l.createElement("span",{style:m},v)):l.createElement(f,{className:i()("".concat(n,"-item"),r),style:s,colSpan:o},l.createElement("div",{className:"".concat(n,"-item-container")},b&&l.createElement("span",{className:i()("".concat(n,"-item-label"),Object(a.a)({},"".concat(n,"-item-no-colon"),!h)),style:d},b),v&&l.createElement("span",{className:i()("".concat(n,"-item-content")),style:m},v)))};function h(e,t,n){var a=t.colon,c=t.prefixCls,o=t.bordered,r=n.component,i=n.type,s=n.showLabel,d=n.showContent,m=n.labelStyle,u=n.contentStyle;return e.map((function(e,t){var n=e.props,p=n.label,h=n.children,f=n.prefixCls,y=void 0===f?c:f,E=n.className,x=n.style,j=n.labelStyle,O=n.contentStyle,w=n.span,g=void 0===w?1:w,N=e.key;return"string"===typeof r?l.createElement(v,{key:"".concat(i,"-").concat(N||t),className:E,style:x,labelStyle:Object(b.a)(Object(b.a)({},m),j),contentStyle:Object(b.a)(Object(b.a)({},u),O),span:g,colon:a,component:r,itemPrefixCls:y,bordered:o,label:s?p:null,content:d?h:null}):[l.createElement(v,{key:"label-".concat(N||t),className:E,style:Object(b.a)(Object(b.a)(Object(b.a)({},m),x),j),span:1,colon:a,component:r[0],itemPrefixCls:y,bordered:o,label:p}),l.createElement(v,{key:"content-".concat(N||t),className:E,style:Object(b.a)(Object(b.a)(Object(b.a)({},u),x),O),span:2*g-1,component:r[1],itemPrefixCls:y,bordered:o,content:h})]}))}var f=function(e){var t=l.useContext(x),n=e.prefixCls,a=e.vertical,c=e.row,o=e.index,r=e.bordered;return a?l.createElement(l.Fragment,null,l.createElement("tr",{key:"label-".concat(o),className:"".concat(n,"-row")},h(c,e,Object(b.a)({component:"th",type:"label",showLabel:!0},t))),l.createElement("tr",{key:"content-".concat(o),className:"".concat(n,"-row")},h(c,e,Object(b.a)({component:"td",type:"content",showContent:!0},t)))):l.createElement("tr",{key:o,className:"".concat(n,"-row")},h(c,e,Object(b.a)({component:r?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},t)))},y=function(e){return e.children},E=n(669),x=l.createContext({}),j={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function O(e,t,n){var a=e;return(void 0===t||t>n)&&(a=Object(E.a)(e,{span:n}),Object(m.a)(void 0===t,"Descriptions","Sum of column `span` in a line not match `column` of Descriptions.")),a}function w(e){var t,n=e.prefixCls,r=e.title,m=e.extra,b=e.column,p=void 0===b?j:b,v=e.colon,h=void 0===v||v,y=e.bordered,E=e.layout,w=e.children,g=e.className,N=e.style,C=e.size,S=e.labelStyle,k=e.contentStyle,_=l.useContext(u.b),U=_.getPrefixCls,F=_.direction,I=U("descriptions",n),P=l.useState({}),T=Object(c.a)(P,2),D=T[0],L=T[1],z=function(e,t){if("number"===typeof e)return e;if("object"===Object(o.a)(e))for(var n=0;n<d.b.length;n++){var a=d.b[n];if(t[a]&&void 0!==e[a])return e[a]||j[a]}return 3}(p,D);l.useEffect((function(){var e=d.a.subscribe((function(e){"object"===Object(o.a)(p)&&L(e)}));return function(){d.a.unsubscribe(e)}}),[]);var A=function(e,t){var n=Object(s.a)(e).filter((function(e){return e})),a=[],c=[],o=t;return n.forEach((function(e,l){var r,i=null===(r=e.props)||void 0===r?void 0:r.span,s=i||1;if(l===n.length-1)return c.push(O(e,i,o)),void a.push(c);s<o?(o-=s,c.push(e)):(c.push(O(e,s,o)),a.push(c),o=t,c=[])})),a}(w,z);return l.createElement(x.Provider,{value:{labelStyle:S,contentStyle:k}},l.createElement("div",{className:i()(I,(t={},Object(a.a)(t,"".concat(I,"-").concat(C),C&&"default"!==C),Object(a.a)(t,"".concat(I,"-bordered"),!!y),Object(a.a)(t,"".concat(I,"-rtl"),"rtl"===F),t),g),style:N},(r||m)&&l.createElement("div",{className:"".concat(I,"-header")},r&&l.createElement("div",{className:"".concat(I,"-title")},r),m&&l.createElement("div",{className:"".concat(I,"-extra")},m)),l.createElement("div",{className:"".concat(I,"-view")},l.createElement("table",null,l.createElement("tbody",null,A.map((function(e,t){return l.createElement(f,{key:t,index:t,colon:h,prefixCls:I,vertical:"vertical"===E,bordered:y,row:e})})))))))}w.Item=y;t.b=w},766:function(e,t,n){"use strict";n.d(t,"b",(function(){return u}));var a,c,o,l,r,i=n(652),s=n(208),d={index:"ContactUs",add:"ContactUsNew",edit:"ContactUsEdit",show:"ContactUsShow"},m={api:{index:[{method:"get",params:{}},"contactUs"],add:[{method:"post",params:{}},"contactUs"],edit:[{method:"put",params:{}},"contactUs/"],show:[{method:"get",params:{}},"contactUs/"],delete:[{method:"delete",params:{}},"contactUs/"]},routes:{index:"".concat(s.b,"/").concat(null===(a=i.b[d.index])||void 0===a?void 0:a.path),indexTitle:d.index.replace(/([a-z])([A-Z])/g,"$1 $2"),indexKey:"home",add:"".concat(s.b,"/").concat(null===(c=i.b[d.add])||void 0===c?void 0:c.path),edit:"".concat(s.b,"/").concat(null===(o=i.b[d.edit])||void 0===o?void 0:o.path.slice(0,i.b[d.edit].path.length-3)),show:"".concat(s.b,"/").concat(null===(l=i.b[d.show])||void 0===l?void 0:l.path.slice(0,(null===(r=i.b[d.show])||void 0===r?void 0:r.path.length)-3))},titles:{add:"Create",edit:"global.edit",show:"Details"}},u={1:"Open",3:"Closed",2:"Under Process"};t.a=m}}]);
//# sourceMappingURL=67.ac555c94.chunk.js.map