(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{40:function(e,t,a){e.exports=a(71)},49:function(e,t,a){},50:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),c=a.n(o),i=a(39),s=(a(49),a(19)),l=a(6),m=Object(l.a)(),u=(a(50),a(9)),v=a(10),h=a(12),d=a(11),p=a(13),f=a(17),g=a.n(f),E=a(21),y=a.n(E),w=g.a.create({withCredentials:!0}),b=function(e,t){return j(e,"GET",t)},O=function(e,t){return j(e,"POST",t)},S=function(e,t){return j(e,"PUT",t)},C=function(e,t){return j(e,"DELETE",t)};function j(e){var t,a,n,r=arguments;return y.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return t=r.length>1&&void 0!==r[1]?r[1]:"get",a=r.length>2&&void 0!==r[2]?r[2]:null,r.length>3?r[3]:void 0,o.prev=3,o.next=6,y.a.awrap(w({url:"".concat("/api/").concat(e),method:t,data:a}));case 6:return n=o.sent,o.abrupt("return",n.data);case 10:throw o.prev=10,o.t0=o.catch(3),console.log("Had Issues ".concat(t,"ing to the backend, endpoint: ").concat(e,", \n        with data: ").concat(a)),console.dir(o.t0),o.t0.response&&401===o.t0.response.status&&m.push("/"),o.t0;case 16:case"end":return o.stop()}}),null,null,[[3,10]])}g.a.create({withCredentials:!0});var N={query:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return b("comment?filterBy=".concat(e))},getCommentById:function(e){return b("comment/".concat(e))},saveComment:function(e){return e._id?S("comment/".concat(e._id),e):O("comment/",e)},deleteComment:function(e){return C("comment".concat(e)).then((function(e){return e.data}))}};var k=a(18),B=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={gravatar:"https://he.gravatar.com/userimage/131942614/161c0e6bc0868e9a0253707495c1c546.jpeg",email:"",content:""},a.onSave=function(e){a.props.onSave(a.state),e.preventDefault(),a.setState({email:"",content:""})},a.inputChange=function(e){var t=e.target.name,n=e.target.value;null===n&&n.startsWith(" ")||a.setState(Object(k.a)({},t,n))},a}return Object(p.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){this.setFormatDataForEdit()}},{key:"componentDidUpdate",value:function(e){e.comment!==this.props.comment&&this.setFormatDataForEdit()}},{key:"setFormatDataForEdit",value:function(){var e=this.props.comment;e&&this.setState({email:e.email,content:e.content})}},{key:"render",value:function(){return r.a.createElement("div",{className:"form-container"},r.a.createElement("form",null,r.a.createElement("input",{type:"email",placeholder:"Email",name:"email",onChange:this.inputChange,value:this.state.email}),r.a.createElement("input",{type:"text",placeholder:"Message",name:"content",onChange:this.inputChange,value:this.state.content}),r.a.createElement("div",{className:"form-buttons"},r.a.createElement("button",{onClick:this.onSave,className:"submit-button"},"Submit"))))}}]),t}(n.Component);function D(e){return r.a.createElement("div",{className:"comment-preview"},r.a.createElement("div",{className:"comment-line flex"},r.a.createElement("div",{className:"comment-gravatar-preview"},r.a.createElement("img",{src:e.comment.gravatar,className:"gavatar-icon"})),r.a.createElement("div",{className:"email-and-msg"},r.a.createElement("div",{className:"comment-email-preview"},e.comment.email),r.a.createElement("div",{className:"comment-content-preview"},e.comment.content))))}function L(e){return r.a.createElement("div",{className:"list"},e.comments.map((function(e,t){return r.a.createElement(D,{key:t,comment:e})})))}var F=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={filterBy:""},a.changeInput=function(e){e.target.name;var t="number"===e.target.type?+e.target.value:e.target.value;a.props.onSetFilter(t);var n=t;a.setState({filterBy:n})},a}return Object(p.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{id:"search-comment"},r.a.createElement("input",{type:"text",name:"filterBy",placeholder:"Filter",value:this.state.filterBy,onChange:this.changeInput}))}}]),t}(n.Component),_=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={comments:[],filterBy:""},a.loadComments=function(){var e=a.state.filterBy;N.query(e).then((function(e){a.setState({comments:e})}))},a.onSetFilter=function(e){a.setState({filterBy:e},a.loadComments)},a.onSave=function(e){if(""!==e.email&&""!==e.content)if(a.validateEmail(e.email)||a.isMailInLowerCase(e.email)){N.saveComment(e);var t=a.state.comments;t.unshift(e),a.setState({comments:t})}else alert("Please enter valid email");else alert("Please enter mail and content")},a}return Object(p.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){this.loadComments()}},{key:"validateEmail",value:function(e){var t=/^[a-z]((?!\.\.)([a-z\.])){,28}[a-z0-9]@gmail.com$/i.test(String(e).toLowerCase()),a=/^[a-z]((?!\.\.)([\w\.])){3,30}[\w]@yahoo.com$/i.test(String(e).toLowerCase()),n=/[a-z]((?!\.\.)([\w\.])){0,62}[\w]@(outlook.com|hotmail.com)$/i.test(String(e).toLowerCase()),r=/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(String(e).toLowerCase());return t||a||n||r}},{key:"isMailInLowerCase",value:function(e){return e===e.toUpperCase()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"app-title"},"Feed"),r.a.createElement("p",{className:"app-description"},"Share your thoughts with the world!"),r.a.createElement("div",{className:"comments-container"},r.a.createElement("div",{className:"comment-form"},r.a.createElement(B,{onSave:this.onSave})),r.a.createElement("div",{className:"filter-container"},r.a.createElement(F,{filterBy:this.state.filterBy,onSetFilter:this.onSetFilter})),r.a.createElement(L,{comments:this.state.comments})))}}]),t}(n.Component);var I=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(s.b,{history:m},r.a.createElement(s.c,null,r.a.createElement(s.a,{component:_,path:"/",exact:!0}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T=a(8),x=a(38),A=a(24),M={isLoading:!1},z=Object(T.c)({system:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"LOADING_START":return Object(A.a)({},e,{isLoading:!0});case"LOADING_DONE":return Object(A.a)({},e,{isLoading:!1});default:return e}}}),P=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||T.d,$=Object(T.e)(z,P(Object(T.a)(x.a)));c.a.render(r.a.createElement(i.a,{store:$},r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[40,1,2]]]);
//# sourceMappingURL=main.479587d9.chunk.js.map