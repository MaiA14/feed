(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{42:function(e,t,n){e.exports=n(74)},51:function(e,t,n){},52:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),o=n.n(c),i=n(41),m=(n(51),n(20)),l=n(6),s=Object(l.a)(),u=(n(52),n(9)),v=n(10),h=n(12),d=n(11),p=n(13),f=(n(53),n(18)),E=n.n(f),g=n(22),y=n.n(g),b=E.a.create({withCredentials:!0}),O=function(e,t){return N(e,"GET",t)},w=function(e,t){return N(e,"POST",t)},S=function(e,t){return N(e,"PUT",t)},j=function(e,t){return N(e,"DELETE",t)};function N(e){var t,n,a,r=arguments;return y.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return t=r.length>1&&void 0!==r[1]?r[1]:"get",n=r.length>2&&void 0!==r[2]?r[2]:null,r.length>3?r[3]:void 0,c.prev=3,c.next=6,y.a.awrap(b({url:"".concat("/api/").concat(e),method:t,data:n}));case 6:return a=c.sent,c.abrupt("return",a.data);case 10:throw c.prev=10,c.t0=c.catch(3),console.log("Had Issues ".concat(t,"ing to the backend, endpoint: ").concat(e,", \n        with data: ").concat(n)),console.dir(c.t0),c.t0.response&&401===c.t0.response.status&&s.push("/"),c.t0;case 16:case"end":return c.stop()}}),null,null,[[3,10]])}E.a.create({withCredentials:!0});var C={query:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return O("comment?filterBy=".concat(e))},getCommentById:function(e){return O("comment/".concat(e))},saveComment:function(e){return e._id?S("comment/".concat(e._id),e):w("comment/",e)},deleteComment:function(e){return j("comment".concat(e)).then((function(e){return e.data}))}};var k=n(19),B=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={gravatar:"https://he.gravatar.com/userimage/131942614/161c0e6bc0868e9a0253707495c1c546.jpeg",email:"",content:""},n.onSave=function(){n.props.onSave(n.state),n.setState({email:"",content:""})},n.inputChange=function(e){var t=e.target.name,a=e.target.value;null===a&&a.startsWith(" ")||n.setState(Object(k.a)({},t,a))},n}return Object(p.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){this.setFormatDataForEdit()}},{key:"componentDidUpdate",value:function(e){e.comment!==this.props.comment&&this.setFormatDataForEdit()}},{key:"setFormatDataForEdit",value:function(){var e=this.props.comment;e&&this.setState({email:e.email,content:e.content})}},{key:"render",value:function(){return r.a.createElement("div",{className:"form-container"},r.a.createElement("form",null,r.a.createElement("input",{type:"email",placeholder:"Email",name:"email",onChange:this.inputChange,value:this.state.email}),r.a.createElement("input",{type:"text",placeholder:"Message",name:"content",onChange:this.inputChange,value:this.state.content}),r.a.createElement("div",{className:"form-buttons"},r.a.createElement("button",{onClick:this.onSave,className:"submit-button"},"Submit"))))}}]),t}(a.Component);function D(e){return r.a.createElement("div",{className:"comment-preview"},r.a.createElement("div",{className:"comment-line flex"},r.a.createElement("div",{className:"comment-gravatar-preview"},r.a.createElement("img",{src:e.comment.gravatar,className:"gavatar-icon"})),r.a.createElement("div",{className:"email-and-msg"},r.a.createElement("div",{className:"comment-email-preview"},e.comment.email),r.a.createElement("div",{className:"comment-content-preview"},e.comment.content))))}function F(e){return r.a.createElement("div",{className:"list"},e.comments.map((function(e,t){return r.a.createElement(D,{key:t,comment:e})})))}var _=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={filterBy:""},n.changeInput=function(e){e.target.name;var t="number"===e.target.type?+e.target.value:e.target.value;n.props.onSetFilter(t);var a=t;n.setState({filterBy:a})},n}return Object(p.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{id:"search-comment"},r.a.createElement("input",{type:"text",name:"filterBy",placeholder:"Filter",value:this.state.filterBy,onChange:this.changeInput}))}}]),t}(a.Component),A=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={comments:[],filterBy:""},n.loadComments=function(){var e=n.state.filterBy;C.query(e).then((function(e){n.setState({comments:e})}))},n.onSetFilter=function(e){n.setState({filterBy:e},n.loadComments)},n.onSave=function(e){if(""!==e.email&&""!==e.content)if(n.validateEmail(e.email)){C.saveComment(e);var t=n.state.comments;t.push(e),n.setState({comments:t})}else alert("Please enter valid email");else alert("Please enter mail and content")},n}return Object(p.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){this.loadComments()}},{key:"validateEmail",value:function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"app-title"},"Feed"),r.a.createElement("p",{className:"app-description"},"Share your thoughts with the world!"),r.a.createElement("div",{className:"comments-container"},r.a.createElement("div",{className:"comment-form"},r.a.createElement(B,{onSave:this.onSave})),r.a.createElement("div",{className:"filter-container"},r.a.createElement(_,{filterBy:this.state.filterBy,onSetFilter:this.onSetFilter})),r.a.createElement(F,{comments:this.state.comments})))}}]),t}(a.Component);var I=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m.b,{history:s},r.a.createElement(m.c,null,r.a.createElement(m.a,{component:A,path:"/",exact:!0}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=n(8),T=n(40),x=n(25),P={isLoading:!1},M=Object(L.c)({system:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"LOADING_START":return Object(x.a)({},e,{isLoading:!0});case"LOADING_DONE":return Object(x.a)({},e,{isLoading:!1});default:return e}}}),G=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||L.d,U=Object(L.e)(M,G(Object(L.a)(T.a)));o.a.render(r.a.createElement(i.a,{store:U},r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[42,1,2]]]);
//# sourceMappingURL=main.b686dc40.chunk.js.map