(this.webpackJsonpcandy=this.webpackJsonpcandy||[]).push([[0],{79:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n,s=a(0),c=a(1),i=a.n(c),o=a(23),r=a.n(o),l=a(2),d=a(3),h=a(4),u=a(6),j=a(5),b=a(7),p=a(10),m=a(19),O=a.n(m),v=(n=window.candy.base_api_url||"/candy/api/v1/",function(){function e(t){Object(d.a)(this,e),this.endpoint=n+t+"/"}return Object(h.a)(e,[{key:"createEntity",value:function(e,t){var a=this;return new Promise((function(n,s){O.a.post(a.endpoint+"?"+t,e).then((function(e){n(e)})).catch((function(e){s(e)}))}))}},{key:"deleteEntity",value:function(e,t){return O.a.delete(this.endpoint+e+"/?"+t)}},{key:"updateEntity",value:function(e,t,a){return O.a.patch(this.endpoint+e+"/?"+a,t)}},{key:"getList",value:function(e){return void 0===e&&(e=""),O.a.get(this.endpoint+"?"+e)}},{key:"getOne",value:function(e,t){var a=this;return void 0===t&&(t=""),new Promise((function(n,s){O.a.get(a.endpoint+e+"/?"+t).then((function(e){n(e)})).catch((function(e){s(e)}))}))}}]),e}()),x={home:"/:base_url/",app_index:"/:base_url/:app_label/",model_list:"/:base_url/:app_label/:model_name/",model_add:"/:base_url/:app_label/:model_name/add/",model_edit:"/:base_url/:app_label/:model_name/:id(\\d+)/edit/"},f=a(14),g=a(38);function k(e){return e?e.charAt(0).toUpperCase()+e.substr(1).toLowerCase():""}function y(){for(var e=[],t=0;t<arguments.length;t++){var a=t<0||arguments.length<=t?void 0:arguments[t];a.length>1&&a.endsWith("/")&&(a=a.substr(0,a.length-1)),t>0&&a.startsWith("/")&&(a=a.substr(1,a.length)),"/"==a&&(a=""),e.push(a)}var n=e.join("/");return n.endsWith("/")||(n+="/"),n}var C={};function N(e,t){var a=C[e];return"undefined"===typeof a&&(a=Object(g.a)(e),C[e]=a),a(t)}function w(e){var t=e.args,a=Object(f.a)(e,["args"]);return a.to=N(a.to,t),Object(s.jsx)(p.b,Object(l.a)(Object(l.a)({},a),{},{children:a.children}))}function _(e){var t=e.args,a=Object(f.a)(e,["args"]);return a.to=N(a.to,t),Object(s.jsx)(p.c,Object(l.a)(Object(l.a)({},a),{},{children:a.children}))}function S(e){var t="bi bi-"+e.name;return e.className&&(t=t+" "+e.className),Object(s.jsx)("i",{className:t})}var T=a(18),R=a(8);function E(e){var t=e.className,a=Object(f.a)(e,["className"]);return t||(t=""),Object(s.jsx)("div",Object(l.a)({className:"loader circle "+t},a))}var L=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).handleClickOutside=function(e){n.container.current&&!n.container.current.contains(e.target)&&n.state.shown&&n.setState({shown:!1})},n.state={selected:e.selectedIndex||0,shown:!1,selectedOnce:!1},n.getBtnClass=n.getBtnClass.bind(Object(R.a)(n)),n.toggleMenu=n.toggleMenu.bind(Object(R.a)(n)),n.container=i.a.createRef(),n}return Object(h.a)(a,[{key:"getBtnClass",value:function(){var e=this.state.shown?" dropup":" dropdown";return"btn "+this.props.className+e}},{key:"toggleMenu",value:function(){this.setState({shown:!this.state.shown})}},{key:"onOptionClick",value:function(e,t){!1===this.props.autoChange?this.setState({shown:!1}):this.setState({selectedOnce:!0,selected:t,shown:!1}),this.props.onChange&&this.props.onChange(e,t)}},{key:"componentDidUpdate",value:function(e,t){this.props.selectedIndex!==e.selectedIndex&&this.state.selected!==this.props.selectedIndex&&this.setState({selected:this.props.selectedIndex})}},{key:"componentDidMount",value:function(){document.addEventListener("mousedown",this.handleClickOutside)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClickOutside)}},{key:"render",value:function(){var e=this,t=this.props.placement||"",a=null;return this.state.shown&&(a=Object(s.jsx)("div",{className:this.state.shown?"dropdown-menu show "+t:"dropdown-menu "+t,children:this.props.options.map((function(t,a){return Object(s.jsx)("button",{type:"button",className:e.state.selected===a?"dropdown-item active":"dropdown-item",onClick:t.onSelect?t.onSelect:function(n){return e.onOptionClick(t,a)},children:t.label},a)}))},"menu")),Object(s.jsxs)("div",{className:this.state.shown?"dropdown-container show":"dropdown-container",ref:this.container,children:[Object(s.jsxs)("button",{className:this.getBtnClass(),type:"button",onClick:this.toggleMenu,children:[this.props.icon," ",this.state.selectedOnce?this.props.options[this.state.selected].selectLabel:this.props.children]}),Object(s.jsx)(T.CSSTransitionGroup,{transitionName:"dropdown-menu",transitionEnterTimeout:100,transitionLeaveTimeout:100,children:a})]})}}]),a}(i.a.Component);var D=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).toggleNav=function(e){n.setState({open:!n.state.open}),document.body.classList.toggle("nav-open")},n.handleLinkClick=function(e){n.state.open&&n.toggleNav()},n.state={open:!1},n}return Object(h.a)(a,[{key:"componentDidUpdate",value:function(e,t){this.props.instance!==e.instance&&this.state.open&&(this.setState({open:!1}),document.body.classList.remove("nav-open"))}},{key:"componentWillUnmount",value:function(){document.body.classList.remove("nav-open")}},{key:"render",value:function(){var e=this,t=this.props.match.params.base_url;return Object(s.jsxs)("div",{children:[Object(s.jsx)(T.CSSTransitionGroup,{transitionName:"overlay",transitionEnterTimeout:100,transitionLeaveTimeout:150,children:this.state.open&&Object(s.jsx)("div",{className:"overlay",onClick:this.handleLinkClick},"overlay")||null}),Object(s.jsxs)("div",{className:"nav top-nav",children:[Object(s.jsxs)(w,{to:x.home,args:{base_url:t},className:"logo",children:[Object(s.jsx)("img",{src:"/static/django_candy/img/logo-nav.png",alt:window.candy.site_name,className:"d-none d-sm-block"}),Object(s.jsx)("img",{src:"/static/django_candy/img/logo-nav-mobile.png",alt:window.candy.site_name,className:"d-block d-sm-none"})]})," "," ",Object(s.jsx)("button",{className:"toggle-nav d-md-none",onClick:this.toggleNav,children:this.state.open?Object(s.jsx)(S,{name:"x"}):Object(s.jsx)(S,{name:"list"})}),Object(s.jsx)("ul",{className:"d-none d-md-block",children:Object(s.jsx)("li",{children:Object(s.jsxs)(L,{className:"default",placement:"right",selectedIndex:-1,options:[{label:"Logout",onSelect:function(e){return null}}],children:[Object(s.jsx)(S,{name:"person",className:"nav-user-icon"})," username"]})})})]}),Object(s.jsx)("div",{className:this.state.open?"nav side-nav open":"nav side-nav",id:this.props.id,children:Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsx)(_,{exact:!0,to:x.home,args:{base_url:t},onClick:this.handleLinkClick,children:"Home"})},"home"),this.props.sideMenu.map((function(a){return[Object(s.jsx)("li",{children:Object(s.jsx)("span",{className:"menu-header",children:k(a.verbose_name)})},a.app_label),a.models.map((function(n){return Object(s.jsx)("li",{children:Object(s.jsx)(_,{to:x.model_list,args:{base_url:t,app_label:a.app_label,model_name:n.name.toLowerCase()},onClick:e.handleLinkClick,children:k(n.menu_label)})},n.app_label+"."+n.name)}))]}))]})})]})}}]),a}(c.Component);function P(e){return Object(s.jsx)("div",{className:"nav sub-nav",children:Object(s.jsx)("ul",{children:c.Children.map(e.children,(function(e){return e?Object(s.jsx)("li",{children:e}):null}))})})}function U(e){var t=e.title,a=e.location.pathname,n=null,c=new URLSearchParams(e.location.search).get("_list_filters")||"";return Object(b.e)(a,e.edit_url)?t+=" / Edit":Object(b.e)(a,e.add_url)&&(t+=" / Add New"),(Object(b.e)(a,e.edit_url)||Object(b.e)(a,e.add_url))&&(n=Object(s.jsxs)(w,{to:e.list_url+c,args:{base_url:e.match.params.base_url,app_label:e.match.params.app_label,model_name:e.match.params.model_name},children:[Object(s.jsx)(S,{name:"arrow-left"})," View All"]})),document.title=e.title+" | "+window.candy.site_name,Object(s.jsx)("div",{className:"header",children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-12 col-md-5",children:Object(s.jsx)("h3",{children:t})}),Object(s.jsx)("div",{className:"col-12 col-md-7",children:!e.hideSubnav&&Object(s.jsxs)(P,{children:[n,e.permissions.can_add?Object(s.jsxs)(w,{className:"active",to:e.add_url,args:{base_url:e.match.params.base_url,app_label:e.match.params.app_label,model_name:e.match.params.model_name},children:[Object(s.jsx)(S,{name:"plus"})," Add New"]}):null,Object(s.jsxs)("button",{className:"btn",onClick:e.onRefresh,children:[Object(s.jsx)(S,{name:"arrow-clockwise"})," Refresh"]})]})})]})})}function M(e){var t=e.label,a=e.helpText,n=e.error,c=e.required,i=e.inputRef,o=Object(f.a)(e,["label","helpText","error","required","inputRef"]),r="";a&&(r=Object(s.jsx)("span",{className:"help-text",children:a}));var d="";return n&&(d=Object(s.jsx)("span",{className:"help-text",children:n})),o.className||(o.className="form-control"),i&&(o.ref=i),Object(s.jsxs)("div",{className:n?"form-group error":"form-group",children:[t?Object(s.jsxs)("label",{children:[t," ",c&&Object(s.jsx)("span",{className:"required-label",children:"*"})]}):null,Object(s.jsx)("input",Object(l.a)({},o)),d,r]})}c.Component;function I(e){var t=e.label,a=Object(f.a)(e,["label"]);return Object(s.jsx)("div",{className:"custom-control custom-"+a.type,children:Object(s.jsxs)("label",{className:"custom-control-label",children:[t,Object(s.jsx)("input",Object(l.a)({className:"custom-control-input"},a)),Object(s.jsx)("div",{className:"custom-control-indicator"})]})})}c.Component;c.Component;function A(e){var t=Object(s.jsx)("th",{className:"checkbox-col",children:Object(s.jsx)(I,{type:"checkbox",checked:e.checked,onChange:e.onCheckChange,disabled:!e.isCheckable})}),a=e.thWidths||[];return Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[t,e.th.map((function(e,t){var n=a[t],c=n?"thcol-"+n:null;return Object(s.jsx)("th",{className:c,children:e},e)})),e.hasActions?Object(s.jsx)("th",{className:a.length>e.th.length&&"thcol-"+a[e.th.length],children:"Actions"},"actions"):null]})})}function W(e){var t=Object(s.jsx)("td",{className:"checkbox-col",children:Object(s.jsx)(I,{type:"checkbox",checked:e.checked,onChange:e.onCheckChange,disabled:!e.isCheckable})});return Object(s.jsxs)("tr",{className:e.flash?"flash":null,children:[t,e.children]})}var F=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).getTableRowURI=function(){var e=window.location.search;return e.length?n.props.tableRowURI+"?_list_filters="+encodeURIComponent(e):n.props.tableRowURI},n.renderForMobile=function(){var e=!!n.props.tableRowActions,t=n.props.tableColCls||[],a=n.props.data.map((function(a){for(var c=[],i=0;i<n.props.tableCols.length;i++){var o="col_"+i+"_"+a.id,r=n.props.tableTh[i],l=a[n.props.tableCols[i]];"boolean"===typeof l&&(l=l?Object(s.jsx)(S,{name:"check-circle",className:"table-col-icon text-success"}):Object(s.jsx)(S,{name:"x-circle",className:"table-col-icon text-error"}));var d=t[i];d||(d=0===i?"col-12":"col-6"),c.push(Object(s.jsxs)("div",{className:d,children:[Object(s.jsx)("span",{className:"col-label",children:r}),Object(s.jsx)("span",{className:0===i?"item-title":"",children:l})]},o))}var h=null;return e&&(h=Object(s.jsx)("div",{className:"col-12 actions-col",children:n.props.tableRowActions(a)})),n.props.tableRowURI?Object(s.jsx)("div",{children:Object(s.jsxs)(w,{to:n.getTableRowURI(),args:{id:a.id},className:"table-item-card",children:[Object(s.jsx)("div",{className:"row",children:c}),Object(s.jsx)("div",{className:"caret",children:Object(s.jsx)(S,{name:"chevron-right"})})]})},a.id):Object(s.jsx)("div",{children:Object(s.jsx)("div",{className:"table-item-card",children:Object(s.jsxs)("div",{className:"row",children:[c,h]})})},a.id)}));return Object(s.jsx)("div",{children:a})},n.state={headChecked:!1,rowsChecked:[]},n.handleHeadCheck=n.handleHeadCheck.bind(Object(R.a)(n)),n.handleRowCheck=n.handleRowCheck.bind(Object(R.a)(n)),n}return Object(h.a)(a,[{key:"handleHeadCheck",value:function(e){var t=[];!0===e.target.checked&&(t=this.props.data.map((function(e){return e.id}))),this.props.tableCheckCallback(t),this.setState({headChecked:e.target.checked,rowsChecked:[]})}},{key:"handleRowCheck",value:function(e,t){var a=this.state.rowsChecked;if(e.target.checked)a.push(t),this.setState({rowsChecked:a});else{var n=a.indexOf(t);if(n>-1)a.splice(n,1),this.setState({rowsChecked:a});else if(this.state.headChecked){for(var s=0;s<this.props.data.length;s++){var c=this.props.data[s].id;c!==t&&a.push(c)}this.setState({rowsChecked:a,headChecked:!1})}}this.props.tableCheckCallback(a)}},{key:"render",value:function(){var e,t=this,a=window.innerWidth<576;if(this.props.data.length<1)return Object(s.jsx)("div",{className:"well",children:Object(s.jsx)("h1",{children:"Nothing here"})});if(a)return this.renderForMobile();var n=!!this.props.tableRowActions,c=!!this.props.tableCheckable;this.props.tableTh&&(e=Object(s.jsx)(A,{th:this.props.tableTh,checked:this.state.headChecked,onCheckChange:this.handleHeadCheck,hasActions:n,isCheckable:c,thWidths:this.props.tableThWidths}));for(var i=this.props.flashRows||[],o=[],r=function(e){for(var a=t.props.data[e],r=[],l=0;l<t.props.tableCols.length;l++){var d="col_"+l+"_"+a.id;if(t.props.tableRowURI&&0===l)r.push(Object(s.jsx)("td",{children:Object(s.jsx)(w,{to:t.getTableRowURI(),args:{id:a.id},children:a[t.props.tableCols[l]]})},d));else{var h=a[t.props.tableCols[l]];"boolean"===typeof h&&(h=h?Object(s.jsx)(S,{name:"check-circle",className:"table-col-icon text-success"}):Object(s.jsx)(S,{name:"x-circle",className:"table-col-icon text-error"})),r.push(Object(s.jsx)("td",{children:h},d))}}var u=null;n&&(u=Object(s.jsx)("td",{children:t.props.tableRowActions(a)})),o.push(Object(s.jsxs)(W,{checked:t.state.headChecked||t.state.rowsChecked.indexOf(a.id)>-1,onCheckChange:function(e){return t.handleRowCheck(e,a.id)},isCheckable:c,flash:i.includes(e),children:[r,u]},a.id))},l=0;l<this.props.data.length;l++)r(l);return Object(s.jsxs)("table",{children:[e,Object(s.jsx)("tbody",{children:o})]})}}]),a}(c.Component),B=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(e){return Object(d.a)(this,a),t.call(this,e)}return Object(h.a)(a,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"toolbar",children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-12 col-md-4",children:Object(s.jsx)(V,{})}),Object(s.jsx)("div",{className:"col-12 col-md-8 text-right toolbar-buttons",children:Object(s.jsx)(H,{})})]})})}}]),a}(c.Component),q=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).handleFocus=function(e){n.setState({focussed:!0}),n.input.current.focus()},n.handleBlur=function(e){n.setState({focussed:!1}),n.input.current.blur()},n.state={searchVal:"",activeQuery:"",focussed:!1},n.handleSearchChange=n.handleSearchChange.bind(Object(R.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(R.a)(n)),n.clearSearch=n.clearSearch.bind(Object(R.a)(n)),n.updateSearch=n.updateSearch.bind(Object(R.a)(n)),n.input=i.a.createRef(),n}return Object(h.a)(a,[{key:"handleSearchChange",value:function(e){this.setState({searchVal:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault()}},{key:"updateSearch",value:function(){var e=this.state.searchVal,t=new URLSearchParams(this.props.location.search);""===e?t.delete("q"):t.set("q",e),t.delete("page"),this.setState({activeQuery:e}),this.props.history.push(this.props.location.pathname+"?"+t.toString())}},{key:"clearSearch",value:function(e){var t=this;this.setState({searchVal:"",activeQuery:""},(function(){return t.updateSearch()}))}},{key:"componentDidMount",value:function(){var e=new URLSearchParams(this.props.location.search).get("q")||"";""!==e&&this.setState({searchVal:e,activeQuery:e})}},{key:"render",value:function(){return Object(s.jsx)("form",{onSubmit:this.handleSubmit,children:Object(s.jsxs)("div",{className:"input-group",children:[Object(s.jsx)("div",{className:"input-group-prepend",children:Object(s.jsx)("span",{className:this.state.focussed?"input-group-text focussed":"input-group-text",onClick:this.handleFocus,children:Object(s.jsx)(S,{name:"search"})})}),Object(s.jsx)("input",{type:"text",name:"q",className:"form-control icon-prepend",placeholder:"Search...",autoFocus:this.state.focussed,onFocus:this.handleFocus,onBlur:this.handleBlur,ref:this.input,value:this.state.searchVal,onChange:this.handleSearchChange})]})})}}]),a}(c.Component),V=Object(b.f)(q);function H(){return Object(s.jsxs)("button",{className:"btn default dropdown",children:[Object(s.jsx)(S,{name:"sliders"})," Filters"]})}var Q=new(function(){function e(){Object(d.a)(this,e),this.toasts=new Set}return Object(h.a)(e,[{key:"register",value:function(e){var t=this;return this.toasts.add(e),function(){return t.unregister(e)}}},{key:"unregister",value:function(e){var t=this;this.toasts.forEach((function(a){a===e&&t.toasts.delete(e)}))}},{key:"success",value:function(e){this.toasts.forEach((function(t){t.showToast(e,"success")}))}},{key:"error",value:function(e){this.toasts.forEach((function(t){t.showToast(e,"error")}))}},{key:"showLoader",value:function(){this.toasts.forEach((function(e){e.showLoaderToast()}))}},{key:"hideLoader",value:function(){this.toasts.forEach((function(e){e.hideLoaderToast()}))}},{key:"showConnectionError",value:function(e){this.toasts.forEach((function(t){t.showConnectionError(e)}))}},{key:"hideConnectionError",value:function(){}},{key:"hideAll",value:function(){this.toasts.forEach((function(e){e.hideAll()}))}},{key:"hideError",value:function(){this.toasts.forEach((function(e){e.hideError()}))}}]),e}()),G=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).timer=null,n.toastService=Q,n.state={message:null,type:null,loader:!1,connectionError:!1,retryCallback:null},n.showToast=n.showToast.bind(Object(R.a)(n)),n.showLoaderToast=n.showLoaderToast.bind(Object(R.a)(n)),n.hideLoaderToast=n.hideLoaderToast.bind(Object(R.a)(n)),n.hasToast=n.hasToast.bind(Object(R.a)(n)),n.unregister=n.toastService.register(Object(R.a)(n)),n.closeToast=n.closeToast.bind(Object(R.a)(n)),n.closeConnectionErrorToast=n.closeConnectionErrorToast.bind(Object(R.a)(n)),n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){this.unregister()}},{key:"showToast",value:function(e,t){clearTimeout(this.timer),this.setState({message:e,type:t,loader:!1,connectionError:!1,retryCallback:null}),"success"===t&&(this.timer=setTimeout(this.closeToast,5e3))}},{key:"showLoaderToast",value:function(){this.setState({loader:!0,connectionError:!1,retryCallback:null})}},{key:"hideLoaderToast",value:function(){this.setState({loader:!1})}},{key:"showConnectionError",value:function(e){this.setState({loader:!1,message:null,type:null,connectionError:!0,retryCallback:e})}},{key:"hideError",value:function(){this.hasToast()&&"error"===this.state.type&&this.setState({message:null,type:null,loader:!1})}},{key:"hideAll",value:function(){this.hasToast()&&this.setState({message:null,type:null,loader:!1})}},{key:"hasToast",value:function(){return!!(this.state.loader||this.state.message||this.connectionError)}},{key:"_componentDidUpdate",value:function(){this.hasToast&&(clearTimeout(this.timer),this.timer=setTimeout(this.props.hideToast,5e3))}},{key:"closeToast",value:function(e){this.setState({message:null,type:null})}},{key:"closeConnectionErrorToast",value:function(e){this.setState({message:null,type:null,connectionError:!1})}},{key:"render",value:function(){var e=null;this.state.loader?e=Object(s.jsx)(z,{},"loader"):this.state.connectionError&&(e=Object(s.jsx)(K,{onRetry:this.state.retryCallback,onClose:this.closeConnectionErrorToast},"connerror"));var t=null;return this.state.message&&!this.state.connectionError&&(t=Object(s.jsx)(J,{message:this.state.message,type:this.state.type,onClose:this.closeToast},"toast")),Object(s.jsx)("div",{className:"toast-container",children:Object(s.jsxs)(T.CSSTransitionGroup,{transitionName:"toast-animate",transitionEnterTimeout:100,transitionLeaveTimeout:100,component:"div",className:"toast-container",children:[e,t]})})}}]),a}(c.Component);function J(e){var t="";e.type&&(t=e.type);var a=null;return"success"===t?a=Object(s.jsx)(S,{name:"check"}):"error"===t&&(a=Object(s.jsx)(S,{name:"exclamation-octagon"})),Object(s.jsxs)("div",{className:"toast "+t,children:[Object(s.jsx)("div",{className:"icon",children:a}),Object(s.jsx)("div",{className:"message",children:e.message}),Object(s.jsx)("div",{className:"close",children:Object(s.jsx)("button",{onClick:e.onClose,children:"\xd7"})})]})}function z(){return Object(s.jsx)("div",{className:"toast loader-toast",children:Object(s.jsxs)("div",{className:"message",children:[Object(s.jsx)(E,{})," Loading"]})})}function K(e){return Object(s.jsxs)("div",{className:"toast error",children:[Object(s.jsx)("div",{className:"icon with-btn",children:Object(s.jsx)(S,{name:"exclamation-octagon"})}),Object(s.jsxs)("div",{className:"message",children:["Check your internet connection."," ",Object(s.jsx)("button",{className:"btn link",onClick:e.onRetry,children:"Try again"})]}),Object(s.jsx)("div",{className:"close",children:Object(s.jsx)("button",{onClick:e.onClose,children:"\xd7"})})]})}function X(){return Object(s.jsx)("div",{className:"placeholder ph-input"})}function Y(){return Object(s.jsx)("div",{className:"placeholder ph-button"})}function Z(){return Object(s.jsxs)("div",{className:"skeleton-table table-container",children:[Object(s.jsxs)("div",{className:"row header",children:[Object(s.jsx)("div",{className:"col-md-4 col-12",children:Object(s.jsx)(X,{})}),Object(s.jsx)("div",{className:"col-md-8 col-12 text-right d-none d-md-block",children:Object(s.jsx)(Y,{})}),Object(s.jsx)("div",{className:"col-md-8 col-12 d-md-none",children:Object(s.jsx)(Y,{})})]}),[1,2,3,4,5,6,7,8,9].map((function(e){return Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-md-1 col-12 d-none d-md-block",children:Object(s.jsx)("div",{className:"placeholder ph-checkbox"})}),Object(s.jsx)("div",{className:"col-md-6 col-12 d-none d-md-block",children:Object(s.jsx)("div",{className:"placeholder ph-line"})}),Object(s.jsx)("div",{className:"col-md-2 col-12",children:Object(s.jsx)("div",{className:"placeholder ph-line"})}),Object(s.jsx)("div",{className:"col-md-3 col-12",children:Object(s.jsx)("div",{className:"placeholder ph-line"})})]},e)}))]})}var $=a(40);var ee=Object(b.f)((function(e){var t=e.total_count,a=e.per_page,n=e.currentPage,c=Math.ceil(t/a);(n>c||n<1)&&(n=1);var i,o,r=new URLSearchParams(e.location.search);1===n?i=Object(s.jsx)("span",{children:Object(s.jsx)(S,{name:"chevron-left"})}):(r.set("page",n-1),i=Object(s.jsx)(p.b,{to:{search:r.toString()},onClick:e.onPageClick,children:Object(s.jsx)(S,{name:"chevron-left"})})),n===c||0===c?o=Object(s.jsx)("span",{children:Object(s.jsx)(S,{name:"chevron-right"})}):(r.set("page",n+1),o=Object(s.jsx)(p.b,{to:{search:r.toString()},onClick:e.onPageClick,children:Object(s.jsx)(S,{name:"chevron-right"})}));var l=[];if(c<8)for(var d=1;d<=c;d++)d===n?l.push(Object(s.jsx)("span",{className:"active",children:d},d)):(r.set("page",d),l.push(Object(s.jsx)(p.b,{to:{search:r.toString()},onClick:e.onPageClick,children:d},d)));else{var h=new Set;h.add(1),1===n?(h.add(2),h.add(3)):n===c?(h.add(c-2),h.add(c-1)):(h.add(n-1),h.add(n),h.add(n+1)),h.add(c);var u,j=Object($.a)(h);try{for(j.s();!(u=j.n()).done;){var b=u.value;1!==b&&(h.has(b-1)||l.push(Object(s.jsx)("span",{children:"..."},b-1))),b===n?l.push(Object(s.jsx)("span",{className:"active",children:b},b)):(r.set("page",b),l.push(Object(s.jsx)(p.b,{to:{search:r.toString()},onClick:e.onPageClick,children:b},b)))}}catch(m){j.e(m)}finally{j.f()}}return Object(s.jsxs)("div",{className:"pagination",children:[i,l,o,Object(s.jsxs)("span",{children:["(Total: ",t,")"]})]})}));function te(e){return Object(s.jsxs)("div",{className:"splash",children:[Object(s.jsx)("img",{src:"/static/django_candy/img/logo-splash.png",alt:window.candy.site_name}),Object(s.jsx)(E,{})]})}function ae(e){return Object(s.jsxs)("div",{className:"splash text-center",children:[Object(s.jsx)("img",{src:"/static/django_candy/img/error-splash.png",alt:"Error"}),Object(s.jsx)("h2",{children:e.msg||"Something went wrong. Try again"}),e.retryCallback?Object(s.jsx)("p",{children:Object(s.jsx)("button",{className:"btn link",onClick:e.retryCallback,children:e.retryBtnText||"Try Again"})}):null]})}function ne(e){return Object(s.jsxs)("div",{className:"main",children:[Object(s.jsx)(U,{hideSubnav:!0,title:"404 Page not found",location:e.location}),Object(s.jsx)("div",{className:"content",children:Object(s.jsx)("p",{className:"lead",children:"The requested page doesn't exist."})})]})}var se=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).list_url=y(n.props.match.url,"/"),n.add_url=y(n.props.match.url,"/add/"),n.edit_url=y(n.props.match.url,"/:id/edit/"),n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e,t){}},{key:"render",value:function(){var e=this,t={can_add:!0},a=this.props.match.params.app_label,n=this.props.match.params.model_name;if(!this.props.initData.apps.hasOwnProperty(a))return Object(s.jsx)(ne,{location:this.props.location});var i=this.props.initData.apps[a];if(!i.models.hasOwnProperty(n))return Object(s.jsx)(ne,{location:this.props.location});var o=i.models[n];return Object(s.jsxs)("div",{className:"main",children:[Object(s.jsx)(b.a,{render:function(a){return Object(s.jsx)(U,Object(l.a)(Object(l.a)({},a),{},{title:k(o.verbose_name_plural),list_url:x.model_list,edit_url:x.model_edit,add_url:x.model_add,onRefresh:e.refreshPage,permissions:t}))}}),Object(s.jsxs)(b.c,{children:[Object(s.jsx)(b.a,{path:x.model_list,exact:!0,render:function(e){return Object(c.createElement)(ce,Object(l.a)(Object(l.a)({},e),{},{model:o,key:o.endpoint}))}}),Object(s.jsx)(b.a,{path:x.model_add,exact:!0,render:function(e){return Object(s.jsx)(ie,Object(l.a)(Object(l.a)({},e),{},{model:o}))}}),Object(s.jsx)(b.a,{path:x.model_edit,exact:!0,render:function(e){return Object(s.jsx)(oe,Object(l.a)(Object(l.a)({},e),{},{model:o}))}}),Object(s.jsxs)(b.a,{children:[Object(s.jsx)("p",{children:"404 Page Not Found."}),Object(s.jsx)("p",{children:"This page doesn't exist."})]})]})]})}}]),a}(c.Component),ce=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).getCurrentPage=function(){var e=new URLSearchParams(n.props.location.search);return Number(e.get("page"))||1},n.state={data:null,loading:!0,limit:20},n.api_endpoint=n.props.model.endpoint,n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.scrollTo(0,0),Q.showLoader(),new v(this.api_endpoint).getList().then((function(t){e.setState({data:t.data,loading:!1}),Q.hideAll()})).catch((function(t){console.log(t),e.setState({loading:!1}),Q.error("Something went wrong. Try again.")}))}},{key:"componentDidUpdate",value:function(e,t,a){}},{key:"componentWillUnmount",value:function(){Q.hideLoader()}},{key:"render",value:function(){return this.state.loading?Object(s.jsx)("div",{className:"content",children:Object(s.jsx)(Z,{})}):Object(s.jsxs)("div",{className:"content",children:[Object(s.jsxs)("div",{className:"table-container",children:[Object(s.jsx)(B,{}),Object(s.jsx)("div",{className:"table-outer",children:Object(s.jsx)(F,{data:this.state.data.results,tableCols:this.props.model.list_display,tableTh:this.props.model.list_display_labels,tableColCls:[],tableThWidths:[],tableRowURI:":id/edit/",tableRowActions:null,tableCheckable:!0,tableCheckCallback:function(){return null}})})]}),Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-12",children:Object(s.jsx)(ee,{total_count:this.state.data.count,per_page:this.state.data.count,currentPage:this.getCurrentPage()})})})]})}}]),a}(c.Component);function ie(e){return Object(s.jsx)("h2",{children:":TODO:"})}function oe(e){return Object(s.jsx)("h2",{children:":TODO:"})}var re=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(e){return Object(d.a)(this,a),t.call(this,e)}return Object(h.a)(a,[{key:"render",value:function(){var e=this,t=this.props.match.params.app_label;if(!this.props.initData.apps.hasOwnProperty(t))return Object(s.jsx)(ne,{location:this.props.location});var a=this.props.initData.apps[t];return Object(s.jsxs)("div",{className:"main",children:[Object(s.jsx)(U,{hideSubnav:!0,title:a.verbose_name,location:this.props.location}),Object(s.jsx)("div",{className:"content",children:Object.keys(a.models).map((function(n){var c=a.models[n];return Object(s.jsx)("div",{children:Object(s.jsx)(w,{to:x.model_list,args:{base_url:e.props.match.params.base_url,app_label:t,model_name:c.name},children:k(c.verbose_name_plural)})},t+"."+c.name)}))})]})}}]),a}(c.Component);function le(e){return Object(s.jsxs)("div",{className:"main",children:[Object(s.jsx)(U,{title:"Home",hideSubnav:!0,location:e.location}),Object(s.jsx)("div",{className:"content"})]})}a(79);var de=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).getInitData=function(){new v("init").getList().then((function(e){n.setState({loading:!1,initData:e.data,errorMsg:null})})).catch((function(e){console.log(e),n.setState({loading:!1,errorMsg:"Something went wrong"})}))},n.retryApi=function(){n.setState({loading:!0}),n.getInitData()},n.state={loading:!0,initData:null,errorMsg:null},window.hasOwnProperty("candy")||(window.candy={site_name:"Candy",base_admin_url:"/candy/"}),n.base_admin_url=window.candy.base_admin_url,n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){"/"===this.props.location.pathname&&this.props.history.replace(this.base_admin_url),this.props.location.pathname.startsWith(this.base_admin_url)||"/"===this.props.location.pathname?this.getInitData():this.setState({loading:!1})}},{key:"render",value:function(){var e=this;return this.state.loading?Object(s.jsx)(te,{}):this.state.errorMsg?Object(s.jsx)(ae,{msg:this.state.errorMsg,retryCallback:this.retryApi}):this.props.location.pathname.startsWith(this.base_admin_url)?Object(s.jsxs)("div",{className:"container-fluid",children:[Object(s.jsx)(G,{}),Object(s.jsx)(D,{sideMenu:this.state.initData.side_menu,topMenu:this.state.initData.top_menu,location:this.props.location,match:this.props.match,history:this.props.history}),Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-12 px-0",children:Object(s.jsxs)(b.c,{children:[Object(s.jsx)(b.a,{path:x.home,exact:!0,render:function(e){return Object(s.jsx)(le,Object(l.a)({},e))}}),Object(s.jsx)(b.a,{path:x.app_index,exact:!0,render:function(t){return Object(s.jsx)(re,Object(l.a)(Object(l.a)({},t),{},{initData:e.state.initData}))}}),Object(s.jsx)(b.a,{path:x.model_list,render:function(t){return Object(s.jsx)(se,Object(l.a)(Object(l.a)({},t),{},{initData:e.state.initData}))}})]})})})]}):Object(s.jsx)(ae,{msg:"404 Page not found"})}}]),a}(c.Component),he=Object(b.f)(de);function ue(e){var t=e.props;return Object(s.jsxs)(p.a,{children:[Object(s.jsx)(b.a,{path:"/:base_url?",render:function(){return Object(s.jsx)(he,Object(l.a)({},t))}}),Object(s.jsxs)("div",{className:"footer",children:["version ","0.7.0-pre-alpha"]})]})}var je=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,81)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),c(e),i(e)}))};r.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(ue,{})}),document.getElementById("root")),je()}},[[80,1,2]]]);
//# sourceMappingURL=main.4c478b76.chunk.js.map