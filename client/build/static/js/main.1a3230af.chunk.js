(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],{106:function(e,a,t){"use strict";(function(e){t.d(a,"a",(function(){return G}));var n=t(31),r=t(22),c=t(0),o=t.n(c),i=t(3),l=t(23),s=t(53),u=t(238),m=t(54),p=t(235),d=t(37),f=t(77),h=t(122),g=t(76),b=t(55),v=t(236),E=t(229),O=t(230),w=t(231),y=t(234),j=t(115),x=t.n(j),k=t(109),C=t.n(k),N=t(227),P=t(228),S=t(112),I=t.n(S),B=t(114),D=t.n(B),R=t(73),z=t.n(R),F=t(113),L=t.n(F),T=t(32),V=t.n(T),A=t(24),U=t(64);function W(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function H(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?W(t,!0).forEach((function(a){Object(n.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):W(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function G(){var a=Object(U.a)(),t=o.a.useState(!0),c=Object(r.a)(t,2),j=c[0],k=c[1],S=o.a.useState(!0),B=Object(r.a)(S,2),R=B[0],F=B[1],T=o.a.useState(!1),W=Object(r.a)(T,2),G=W[0],_=W[1],J=o.a.useState(!0),M=Object(r.a)(J,2),q=M[0],K=M[1],Q=o.a.useState({}),X=Object(r.a)(Q,2),Y=X[0],Z=X[1],$=o.a.useState([]),ee=Object(r.a)($,2),ae=ee[0],te=ee[1],ne=o.a.useState(!0),re=Object(r.a)(ne,2),ce=re[0],oe=re[1],ie=o.a.useState(""),le=Object(r.a)(ie,2),se=le[0],ue=le[1],me=o.a.useState({}),pe=Object(r.a)(me,2),de=pe[0],fe=pe[1],he=o.a.useState(!1),ge=Object(r.a)(he,2),be=ge[0],ve=ge[1];V.a.validate(V.a.get())&&!G&&Object(A.e)().then((function(e){fe(e),K(e.isVerified)})).then(_(!0)).catch();var Ee="",Oe="",we="",ye="",je="";function xe(){k(!0)}function ke(){k(!1)}function Ce(){Z({}),F(!R)}function Ne(e){return"username"===e.name&&Y.username?o.a.createElement(s.a,{component:"button",color:"error",variant:"body2",onClick:G?null:Ce},Y.username):"email"===e.name&&Y.email?o.a.createElement(s.a,{component:"button",color:"error",variant:"body2",onClick:G?null:Ce},Y.email||1):"password"===e.name&&Y.password?o.a.createElement(s.a,{component:"button",color:"error",variant:"body2",onClick:G?null:Ce},Y.password):null}function Pe(){ue(ye),Object(A.f)(ye).then((function(e){te(e)}))}var Se=function(e){var a=e.contact,t=o.a.useState({firstName:a.firstName,lastName:a.lastName,email:a.email,phone:a.phone}),c=Object(r.a)(t,2),i=c[0],s=c[1],u=function(e){return function(a){s(H({},i,Object(n.a)({},e,a.target.value)))}},p=Object(U.a)(),f=o.a.useState(null),h=Object(r.a)(f,2),v=h[0],E=h[1],O=function(){E(null)},w=Boolean(v),y=w?"simple-popover":void 0;return o.a.createElement("div",null,o.a.createElement(m.a,{size:"small",className:p.contactDeleteButton,"aria-label":"edit"},o.a.createElement(z.a,{onClick:function(e){E(e.currentTarget),console.log(v)}})),o.a.createElement(g.a,{id:y,open:w,anchorEl:v,onClose:O,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"}},o.a.createElement("div",{className:p.div1},o.a.createElement(d.a,{variant:"h6",className:p.typography},"Edit Contact"),o.a.createElement(l.a,{label:"First name",type:"text",margin:"normal",value:i.firstName,onChange:u("firstName")}),o.a.createElement(l.a,{label:"Last name",type:"text",margin:"normal",value:i.lastName,onChange:u("lastName")}),o.a.createElement(l.a,{label:"Phone number",type:"text",margin:"normal",value:i.phone,onChange:u("phone")}),o.a.createElement(l.a,{label:"Email",type:"text",margin:"normal",value:i.email,onChange:u("email")}),o.a.createElement(b.a,{variant:"contained",color:"primary",onClick:function(){var a={firstName:i.firstName,lastName:i.lastName,email:i.email,phone:i.phone};console.log(a),Object(A.h)(e.contact._id,a).then((function(e){O(),Object(A.f)(se).then((function(e){te(e)})).catch(),oe(!ce)})).catch()}},"Commit"))))};function Ie(){Object(A.j)(je).then((function(e){return K(e)})).catch()}var Be=e.browser&&/iPad|iPhone|iPod/.test(navigator.userAgent);return o.a.createElement("div",{className:a.root},o.a.createElement(E.a,null),o.a.createElement(O.a,{position:"fixed",className:Object(i.a)(a.appBar,Object(n.a)({},a.appBarShift,j))},o.a.createElement(w.a,null,o.a.createElement(d.a,{variant:"h6",noWrap:!0,className:a.title},"COP 4331 Contact Manager"),o.a.createElement((function(e){return G&&R?o.a.createElement("div",{className:a.search},o.a.createElement(u.a,{placeholder:"Search",classes:{root:a.inputRoot,input:a.inputInput},inputProps:{"aria-label":"search"},onChange:function(e){ye=e.target.value}})):null}),null),o.a.createElement((function(){return G&&R?o.a.createElement(m.a,{size:"small",className:a.searchButton,"aria-label":"search",onClick:Pe},o.a.createElement(C.a,null)):null}),null),o.a.createElement("div",{className:a.grow}),o.a.createElement((function(){var e=o.a.useState(null),t=Object(r.a)(e,2),n=t[0],c=t[1],i="",s="",u="",m="",p=function(){c(null)},f=Boolean(n),v=f?"simple-popover":void 0;return G?o.a.createElement("div",null,o.a.createElement(h.a,{color:"primary","aria-label":"add",className:a.fab,onClick:function(e){c(e.currentTarget),console.log(n)}},o.a.createElement(D.a,null)),o.a.createElement(g.a,{id:v,open:f,anchorEl:n,onClose:p,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"}},o.a.createElement("div",{className:a.div1},o.a.createElement(d.a,{variant:"h6",className:a.typography},"Add New Contact"),o.a.createElement(l.a,{label:"First name",type:"text",margin:"normal",onChange:function(e){i=e.target.value}}),o.a.createElement(l.a,{label:"Last name",type:"text",margin:"normal",onChange:function(e){s=e.target.value}}),o.a.createElement(l.a,{label:"Phone number",type:"text",margin:"normal",onChange:function(e){m=e.target.value}}),o.a.createElement(l.a,{label:"Email",type:"text",margin:"normal",onChange:function(e){u=e.target.value}}),o.a.createElement(b.a,{variant:"contained",color:"primary",onClick:function(){var e,a={firstName:i,lastName:s,email:u,phone:m};i&&s?m?Object(A.c)(a).then(p).catch():e="Please enter a phone number":e="Please enter name",console.log(e)}},"ADD")))):null}),null),o.a.createElement(m.a,{color:"inherit","aria-label":"open drawer",edge:"end",onClick:xe,className:Object(i.a)(j&&a.hide)},o.a.createElement(x.a,null)))),o.a.createElement("main",{className:Object(i.a)(a.content,Object(n.a)({},a.contentShift,j))},o.a.createElement("div",{className:a.drawerHeader}),o.a.createElement((function(e){return ce&&console.log(ce),G&&R?(ae||[]).map((function(e,t){return o.a.createElement("div",{className:a.expansionWidith,key:e._id},o.a.createElement(p.a,null,o.a.createElement(N.a,{expandIcon:o.a.createElement(I.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},o.a.createElement(d.a,{className:a.expansionHeading},e.firstName," ",e.lastName),o.a.createElement("div",{className:a.grow})),o.a.createElement(f.a,null),o.a.createElement(P.a,null,o.a.createElement(d.a,{className:a.grow},"Email: ",e.email," ",o.a.createElement("br",null),"Phone: ",e.phone),o.a.createElement(Se,{contact:e}),o.a.createElement(m.a,{size:"small",className:a.contactDeleteButton,"aria-label":"delete"},o.a.createElement(L.a,{onClick:function(a){return t=e._id,void Object(A.d)(t).then((function(e){Object(A.f)(se).then((function(e){te(e)})).catch(),oe(!ce)})).catch();var t}})))))})):null}),null),o.a.createElement((function(e){return!q&&G&&R?o.a.createElement(v.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:j,ContentProps:{"aria-describedby":"message-id"},className:a.emailBackgound,message:o.a.createElement("span",{id:"message-id"},"Enter your email verification code")},o.a.createElement("div",null,o.a.createElement("span",{vartiant:"h6",className:a.title,id:"message-id"},"Enter your email verification code"),o.a.createElement(l.a,{id:"outlined-name",label:"Email Verify Code",className:a.emailTextField,margin:"normal",variant:"outlined",onChange:function(e){je=e.target.value,console.log(je)},InputProps:{className:a.emailCodeInput}}),o.a.createElement(b.a,{vartiant:"contained",className:a.button,onClick:Ie},"Verify"))):null}),null)),o.a.createElement(y.a,{disableBackdropTransition:!Be,disableDiscovery:Be,className:a.drawer,variant:"persistent",anchor:"right",open:j,onOpen:xe,onClose:ke,classes:{paper:a.drawerPaper}},o.a.createElement("div",{className:a.drawerHeader},o.a.createElement(d.a,{variant:"h6",noWrap:!0,className:a.title,onClick:ke},G?"Welcome":R?"Please Login":"Please Create an Account"),o.a.createElement("div",{className:a.grow}),o.a.createElement((function(e){!be&&ce||console.log(ce);var a=o.a.useState({username:de.username,email:de.email}),t=Object(r.a)(a,2),c=t[0],i=t[1],s=function(e){return function(a){i(H({},c,Object(n.a)({},e,a.target.value)))}},u=Object(U.a)(),m=o.a.useState(null),p=Object(r.a)(m,2),f=p[0],v=p[1],E=function(){v(null)},O=Boolean(f),w=O?"simple-popover":void 0;return G?o.a.createElement("div",null,o.a.createElement(h.a,{color:"secondary",size:"small","aria-label":"edit",className:u.fab,onClick:function(e){v(e.currentTarget),console.log(f)}},o.a.createElement(z.a,null)),o.a.createElement(g.a,{id:w,open:O,anchorEl:f,onClose:E,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"}},o.a.createElement("div",{className:u.div1},o.a.createElement(d.a,{variant:"h6",className:u.typography},"Edit User Info"),o.a.createElement(l.a,{label:"Username",type:"text",margin:"normal",value:c.username,onChange:s("username")}),o.a.createElement(l.a,{label:"Email",type:"text",margin:"normal",value:c.email,onChange:s("email")}),o.a.createElement(b.a,{variant:"contained",color:"primary",onClick:function(){var e={username:c.username,email:c.email};console.log(e),Object(A.i)(e).then((function(e){Object(A.e)().then((function(e){fe(e),_(!0)})).catch(),E()})).catch()}},"Commit")))):null}),null)),o.a.createElement(f.a,null),o.a.createElement((function(e){return G?null:o.a.createElement(l.a,{id:"outlined-Username-input",label:"username",className:a.textField,type:"username",name:"username",autoComplete:"username",margin:"normal",variant:"outlined",onChange:function(e){Oe=e.target.value}})}),null),o.a.createElement(Ne,{name:"username"}),o.a.createElement((function(e){return G||R?null:o.a.createElement(l.a,{id:"outlined-email-input",label:"email",className:a.textField,type:"email",name:"email",autoComplete:"email",margin:"normal",variant:"outlined",onChange:function(e){we=e.target.value}})}),null),o.a.createElement(Ne,{name:"email"}),o.a.createElement((function(e){return G?null:o.a.createElement(l.a,{id:"outlined-password-input",label:"Password",className:a.textField,type:"password",autoComplete:"current-password",margin:"normal",variant:"outlined",onChange:function(e){Ee=e.target.value}})}),null),o.a.createElement(Ne,{name:"password"}),o.a.createElement((function(e){return G&&R?[{label:"Username",name:"username",val:de.username},{label:"Email",name:"email",val:de.email}].map((function(e){return o.a.createElement(l.a,{id:"standard-read-only-input",label:e.label,defaultValue:e.val,className:a.textField,margin:"normal",InputProps:{readOnly:!0}})})):null}),null),o.a.createElement((function(e){if(G&&R){var t=de.isVerified;return q&&(t="True"),o.a.createElement(l.a,{id:"standard-read-only-input",label:"Verified Email",defaultValue:t,className:a.textField,margin:"normal",InputProps:{readOnly:!0}})}return null}),null),o.a.createElement((function(e){return G&&R&&!q?o.a.createElement(s.a,{component:"button",variant:"body2",onClick:Object(A.g)()},"Click here to verify your email"):null}),null),o.a.createElement(b.a,{variant:"contained",color:"primary",className:a.button,onClick:function(){Z({}),G?(fe({}),_(!1),V.a.forget()):R?Object(A.a)(Oe,Ee).then((function(e){Object.keys(e.Error).length?Z(e.Error):(console.log("logging in"),Object(A.e)().then((function(e){fe(e),K(e.isVerified)})).then(_(!0)),ve(!be),window.location.reload(!1))})).catch((function(e){Z({password:"Incorrect Password"})})):Object(A.b)(Oe,we,Ee).then((function(e){Object.keys(e.Error).length?Z(e.Error):(console.log("Registered"),F(!0))})).catch()}},G?"Logout":R?"Login":"Register"),o.a.createElement(f.a,null),o.a.createElement(s.a,{component:"button",variant:"body2",onClick:G?null:Ce},G?"":R?"Dont have an account? Register":"Already have an account? Login")))}}).call(this,t(81))},130:function(e,a,t){e.exports=t(224)},224:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(10),o=t.n(c),i=t(103),l=t(104),s=t(119),u=t(105),m=t(120),p=t(116),d=t(36),f=t(106),h=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(d.a,{exact:!0,path:"/",component:f.a})))}}]),a}(n.Component);o.a.render(r.a.createElement(h,null),document.getElementById("root"))},24:function(e,a,t){"use strict";t.d(a,"a",(function(){return p})),t.d(a,"b",(function(){return f})),t.d(a,"e",(function(){return h})),t.d(a,"i",(function(){return g})),t.d(a,"g",(function(){return b})),t.d(a,"j",(function(){return v})),t.d(a,"c",(function(){return E})),t.d(a,"f",(function(){return O})),t.d(a,"h",(function(){return w})),t.d(a,"d",(function(){return y}));var n=t(9),r=t.n(n),c=t(17),o=t(107),i=t(15),l=t.n(i),s=t(32),u=t.n(s),m=u.a.get();l.a.defaults.headers.common.Authorization="Bearer ".concat(m);var p=function(){var e=Object(c.a)(r.a.mark((function e(a,t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n={Error:{}},a){e.next=5;break}n.Error.username="Please enter your username",e.next=7;break;case 5:return e.next=7,l.a.get("user/username/".concat(a)).then(function(){var e=Object(c.a)(r.a.mark((function e(c){var o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.data.exists){e.next=4;break}n.Error.username="Username does not exist",e.next=11;break;case 4:if(t){e.next=8;break}n.Error.password="Please enter your password",e.next=11;break;case 8:return o={username:a,password:t},e.next=11,l.a.post("user/login",o).then((function(e){e.data.token&&(u.a.validate(e.data.token)?u.a.keep(e.data.token):u.a.forget())})).catch((function(e){return n.Error.password="Incorect Password",n}));case 11:return e.abrupt("return",n);case 12:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()).catch((function(e){console.log(";("),console.error(e)}));case 7:return O(),e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(r.a.mark((function e(a){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("user/username/".concat(a)).then((function(e){t=!!e.data.exists&&e.data.exists})).catch((function(e){return console.log}));case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),f=function(){var e=Object(c.a)(r.a.mark((function e(a,t,n){var i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i={Error:{}},a){e.next=5;break}i.Error.username="Please enter your username",e.next=7;break;case 5:return e.next=7,l.a.get("user/username/".concat(a)).then(function(){var e=Object(c.a)(r.a.mark((function e(c){var s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!c.data.exists){e.next=4;break}i.Error.username="Username is taken",e.next=15;break;case 4:if(t&&Object(o.isEmail)(t)){e.next=8;break}i.Error.email="Please enter a valid email",e.next=15;break;case 8:if(n){e.next=12;break}i.Error.password="Please enter a password",e.next=15;break;case 12:return s={username:a,email:t,password:n},e.next=15,l.a.post("user/register",s).then((function(e){console.log("succcess")})).catch((function(e){return i.Error.password="Incorect Password",i}));case 15:return e.abrupt("return",i);case 16:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()).catch((function(e){console.log(";("),console.error(e)}));case 7:return e.abrupt("return",i);case 8:case"end":return e.stop()}}),e)})));return function(a,t,n){return e.apply(this,arguments)}}(),h=function(){var e=Object(c.a)(r.a.mark((function e(){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("/user").then((function(e){console.log(e.data),a=e.data})).catch();case 2:return e.abrupt("return",a);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(c.a)(r.a.mark((function e(a){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t={Error:{}},!a.username){e.next=4;break}return e.next=4,d(a.username).then(function(){var e=Object(c.a)(r.a.mark((function e(n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=7;break}return t.Error="Username already taken",a.username=void 0,e.next=5,l.a.put("/user",a).then((function(e){console.log(e.data),t.data=e.data})).catch();case 5:e.next=9;break;case 7:return e.next=9,l.a.put("/user",a).then((function(e){console.log(e.data),t.data=e.data})).catch();case 9:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()).catch();case 4:return e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),b=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("/user/verify").then((function(e){console.log(e.data)})).catch();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(c.a)(r.a.mark((function e(a){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.put("/user/verify",{code:a}).then((function(e){console.log(!!e.data.n),t=!!e.data.n})).catch();case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),E=function(){var e=Object(c.a)(r.a.mark((function e(a){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.post("/contacts",a).then((function(e){console.log(e.data),t=e.data})).catch();case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),O=function(){var e=Object(c.a)(r.a.mark((function e(a){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.post("/contacts/search",{search:a}).then((function(e){console.log(e.data),t=e.data})).catch((function(e){return console.log}));case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),w=function(){var e=Object(c.a)(r.a.mark((function e(a,t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.put("/contacts/id/".concat(a),t).then((function(e){console.log(e.data),n=e.data})).catch((function(e){return console.log}));case 2:return e.abrupt("return",n);case 3:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),y=function(){var e=Object(c.a)(r.a.mark((function e(a){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.delete("/contacts/id/".concat(a)).then((function(e){console.log(e.data),t=e.data})).catch((function(e){return console.log}));case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},64:function(e,a,t){"use strict";var n=t(31),r=t(72),c=t(237),o=t(11),i=t(225);function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(t,!0).forEach((function(a){Object(n.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var u=Object(r.a)((function(e){return Object(c.a)({root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(300,"px)"),transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginRight:300},title:{flexGrow:0},hide:{display:"none"},drawer:{width:300,flexShrink:0},drawerPaper:{width:300},drawerHeader:s({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar,{justifyContent:"flex-start"}),textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1)},button:{margin:e.spacing(1)},content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginRight:-300},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginRight:0},search:Object(n.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(o.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(o.c)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),grow:{flexGrow:1},searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputInput:Object(n.a)({padding:e.spacing(1,1,1,1),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:200}),expansionWidith:{width:"100%"},expansionHeading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular},fab:{margin:e.spacing(1)},extendedIcon:{marginRight:e.spacing(1)},contactDeleteButton:{margin:e.spacing(0)},emailTextField:{marginLeft:e.spacing(1),marginRight:e.spacing(1)},emailCodeInput:{color:"white"},emailBackgound:{backgroundColor:i.a[600]},div1:{padding:e.spacing(1,1,1,7),width:300}})}));a.a=u}},[[130,1,2]]]);
//# sourceMappingURL=main.1a3230af.chunk.js.map