(this["webpackJsonptodo-classes"]=this["webpackJsonptodo-classes"]||[]).push([[0],{10:function(t,e,n){t.exports={container:"Alert_container__3ahcp",delete:"Alert_delete__2VX7b",delete__title:"Alert_delete__title__harta",delete__buttons:"Alert_delete__buttons__6LTZE",delete__button:"Alert_delete__button__ZbJZj",delete__buttons_no:"Alert_delete__buttons_no__euBkN",edit:"Alert_edit__1SqhV",edit__title:"Alert_edit__title__32Zj0",edit__area:"Alert_edit__area__2CJuG",edit__count:"Alert_edit__count__ZXqZ5",edit__buttons:"Alert_edit__buttons__3AOuT",edit__button:"Alert_edit__button__18ZYp",edit__button_cancel:"Alert_edit__button_cancel__2Tmni"}},19:function(t,e,n){t.exports={LoginContainer:"Login_LoginContainer__3-Qc8",Login:"Login_Login__lQHEQ",form:"Login_form__QbI9j",active:"Login_active__2DOUj"}},20:function(t,e,n){t.exports={container:"Filters_container__2rkGN",img:"Filters_img__wDkAw",search:"Filters_search__zGaIj"}},22:function(t,e,n){t.exports={mainContainer:"Todos_mainContainer__2ufHC",Todos:"Todos_Todos__20deC",title:"Todos_title__2LB73",loader:"Todos_loader__n6Isc"}},23:function(t,e,n){t.exports={formItem:"Input_formItem__1p4CT",valid:"Input_valid__10PPZ",invalid:"Input_invalid__2Op8j"}},27:function(t,e,n){t.exports={btn:"Button_btn__1TmEl","btn-register":"Button_btn-register__1VdXB","btn-login":"Button_btn-login__20qTm"}},42:function(t,e,n){t.exports={main:"Layout_main__1vIFU"}},43:function(t,e,n){t.exports={add:"Add_add__1X7mS"}},44:function(t,e,n){t.exports={Rebuild:"Rebuild_Rebuild__1OJ9e"}},53:function(t,e,n){},54:function(t,e,n){},78:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(1),a=n.n(o),i=n(40),s=n.n(i),c=(n(53),n(54),n(2)),l=n(16),d=n(4),u=n(5),h=n(7),p=n(6),m=n(19),f=n.n(m),j=n(23),b=n.n(j),g=function(t){Object(h.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(d.a)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).cls=[b.a.formItem],t.htmlFor=Math.random(),t}return Object(u.a)(n,[{key:"isInvalid",value:function(t){var e=t.valid,n=t.touched,r=t.shouldValidate;return!e&&r&&n}},{key:"render",value:function(){var t=this.isInvalid(this.props);return Object(r.jsxs)("div",{className:this.cls.join(" ")+" ".concat(t?b.a.invalid:b.a.valid),children:[Object(r.jsx)("label",{htmlFor:this.htmlFor,children:this.props.label}),Object(r.jsx)("input",{id:this.htmlFor,type:this.props.type||"text",value:this.props.value,onChange:this.props.changeInputHandler,placeholder:this.props.placeholder}),t?Object(r.jsx)("span",{children:this.props.errorMessage}):null]})}}]),n}(o.Component),_=n(27),v=n.n(_),O=function(t){Object(h.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(d.a)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).cls=[v.a.btn,v.a[t.props.btnType]],t}return Object(u.a)(n,[{key:"render",value:function(){return Object(r.jsx)("button",{className:this.cls.join(" "),onClick:this.props.btnClick,disabled:this.props.disabled,children:this.props.text})}}]),n}(o.Component),x=window.localStorage,y="users",w="is_login";function T(){var t=JSON.parse(x.getItem(y));return t instanceof Array?t:null}function k(){x.setItem(w,"true")}function C(){x.removeItem(w)}function S(){return"true"===x.getItem(w)}function N(t){if(t.email&&t.password){var e=T();if(e instanceof Array){var n=e.filter((function(e){if(e.email===t.email&&e.password===t.password)return e}));return k(),!!n.length}return!1}return!1}function A(t){if(t.email&&t.password&&t.passwordConfirm){if(t.password===t.passwordConfirm){var e=T()||[];return e.filter((function(e){if(e.email===t.email)return e})).length?void alert("This user already exists!"):(e.push({email:t.email,password:t.password}),function(t){t instanceof Array&&x.setItem(y,JSON.stringify(t))}(e),k(),!0)}return!1}return!1}var I=n(41),L=n.n(I),H=function(t){Object(h.a)(n,t);var e=Object(p.a)(n);function n(){var t,r;Object(d.a)(this,n);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(r=e.call.apply(e,[this].concat(a))).keys={email:"email",password:"password",passwordConfirm:"passwordConfirm"},r.state={isFormValid:!1,activeForm:"login",formControls:(t={},Object(l.a)(t,r.keys.email,{value:"",type:"email",touched:!1,valid:!1,label:"Email",placeholder:"Write your email",errorMessage:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email",validation:{required:!0,email:!0}}),Object(l.a)(t,r.keys.password,{value:"",type:"password",touched:!1,valid:!1,label:"Password",placeholder:"Write your password",errorMessage:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",validation:{required:!0,minLength:6,maxLength:15}}),Object(l.a)(t,r.keys.passwordConfirm,{value:"",type:"password",touched:!1,valid:!1,label:"Confirm password",placeholder:"Confirm your password",errorMessage:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",validation:{required:!0,minLength:6,maxLength:15}}),t)},r.changeHandler=function(t,e){var n=t.target.value,o=!0,a=[r.keys.email,r.keys.password];"reg"===r.state.activeForm&&a.push(r.keys.passwordConfirm);var i=r.state.formControls;i[e].valid=r.validateControl(n,i[e].validation),a.forEach((function(t){o=i[t].valid&&o})),r.setState((function(t){return Object(c.a)(Object(c.a)({},t),{},{isFormValid:o,formControls:Object(c.a)(Object(c.a)({},t.formControls),{},Object(l.a)({},e,Object(c.a)(Object(c.a)({},t.formControls[e]),{},{value:n,touched:!0,valid:i[e].valid})))})}))},r.changeActiveForm=function(t){r.setState({activeForm:t}),Object.keys(r.state.formControls).map((function(t){r.setState((function(e){return Object(c.a)(Object(c.a)({},e),{},{isFormValid:!1,formControls:Object(c.a)(Object(c.a)({},e.formControls),{},Object(l.a)({},t,Object(c.a)(Object(c.a)({},e.formControls[t]),{},{value:"",touched:!1})))})}))}))},r.loginHandler=function(t){t.preventDefault(),N({email:r.state.formControls[r.keys.email].value.toString().trim(),password:r.state.formControls[r.keys.password].value.toString().trim()})?r.props.history.push({pathname:"/todos"}):alert("User not found!")},r.registerHandler=function(t){t.preventDefault(),A({email:r.state.formControls[r.keys.email].value.toString().trim(),password:r.state.formControls[r.keys.password].value.toString().trim(),passwordConfirm:r.state.formControls[r.keys.passwordConfirm].value.toString().trim()})&&r.props.history.push({pathname:"/todos"})},r}return Object(u.a)(n,[{key:"componentDidMount",value:function(){S()&&this.props.history.push({pathname:"/todos"})}},{key:"validateControl",value:function(t,e){if(!e)return!0;var n=!0;return e.required&&(n=""!==t.trim()&&n),e.email&&(n=L.a.email(t)&&n),e.minLength&&(n=t.length>=e.minLength&&n),e.maxLength&&(n=t.length<=e.maxLength&&n),n}},{key:"getInput",value:function(t){var e=this,n=this.state.formControls[t];return Object(r.jsx)(g,{type:n.type,value:n.value,changeInputHandler:function(n){return e.changeHandler(n,t)},label:n.label,placeholder:n.placeholder,valid:n.valid,errorMessage:n.errorMessage,touched:n.touched,shouldValidate:!!n.validation})}},{key:"render",value:function(){var t=this,e=Object(r.jsxs)(a.a.Fragment,{children:[this.getInput(this.keys.passwordConfirm),Object(r.jsx)(O,{text:"Register",btnType:"btn-register",btnClick:function(e){return t.registerHandler(e)},disabled:!this.state.isFormValid})]}),n=Object(r.jsx)(O,{text:"Login",btnType:"btn-login",btnClick:function(e){return t.loginHandler(e)},disabled:!this.state.isFormValid});return Object(r.jsx)("div",{className:f.a.LoginContainer,children:Object(r.jsx)("div",{className:f.a.Login,children:Object(r.jsxs)("form",{className:f.a.form,children:[Object(r.jsxs)("legend",{children:[Object(r.jsx)("span",{className:"login"===this.state.activeForm?f.a.active:null,onClick:this.changeActiveForm.bind(this,"login"),children:"Login"}),Object(r.jsx)("span",{className:"reg"===this.state.activeForm?f.a.active:null,onClick:this.changeActiveForm.bind(this,"reg"),children:"Register"})]}),this.getInput(this.keys.email),this.getInput(this.keys.password),"reg"===this.state.activeForm?e:n]})})})}}]),n}(o.Component),D=n(3),E=n(42),F=n.n(E),M=function(t){Object(h.a)(n,t);var e=Object(p.a)(n);function n(){return Object(d.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(r.jsx)("main",{className:F.a.main,children:this.props.children})}}]),n}(o.Component),R=n(15),P=n.n(R),V=n(18),B=n(47),J=n(22),U=n.n(J),Z=n(8),q=n.n(Z),Q=n.p+"static/media/up-arrow.571da108.svg",X=n.p+"static/media/down-arrow.0c86f414.svg",Y=n.p+"static/media/edit.c1401c13.svg",G=n.p+"static/media/check.ff0b2fb7.svg",z=n.p+"static/media/delete.dbbcd2ea.svg",W=function(t){Object(h.a)(n,t);var e=Object(p.a)(n);function n(){return Object(d.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"getDate",value:function(t){var e;return t=new Date(t),e="".concat(1===t.getDate().toString().length?"0"+t.getDate():t.getDate(),"."),e+="".concat(t.getMonth()+1===1?"0"+(t.getMonth()+1):t.getMonth()+1,"."),e+="".concat(t.getFullYear())}},{key:"getTime",value:function(t){return t=new Date(t),"".concat(t.getHours(),":").concat(t.getMinutes())}},{key:"render",value:function(){if(this.props.hide)return null;var t=this.props.date?this.props.date:Date.now(),e={date:this.getDate(t),time:this.getTime(t)},n=[q.a.text],o=[q.a.circle,q.a.unchecked];return this.props.completed&&(n.push(q.a.completed),o.push(q.a.checked)),Object(r.jsx)("div",{className:q.a.container,children:Object(r.jsxs)("div",{className:q.a.Todo,children:[Object(r.jsxs)("div",{className:q.a.date,children:[Object(r.jsx)("p",{children:e.date}),Object(r.jsx)("p",{children:e.time})]}),Object(r.jsx)("div",{className:q.a.priority,children:this.props.priority}),Object(r.jsxs)("div",{className:q.a.arrows,children:[Object(r.jsx)("img",{src:Q,className:q.a.arrow,alt:"Up Arrow",onClick:this.props.upPriorityHandler}),Object(r.jsx)("img",{src:X,className:q.a.arrow,alt:"Up Arrow",onClick:this.props.downPriorityHandler})]}),Object(r.jsx)("div",{className:n.join(" "),children:this.props.title}),Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:"".concat(q.a.circle," ").concat(q.a.edit),onClick:this.props.editHandler,children:Object(r.jsx)("img",{className:q.a.img,src:Y,alt:"Edit"})})}),Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:o.join(" "),onClick:this.props.checkHandler,children:Object(r.jsx)("img",{className:q.a.img,src:G,alt:"Check"})})}),Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:"".concat(q.a.circle," ").concat(q.a.delete),onClick:this.props.deleteHandler,children:Object(r.jsx)("img",{className:q.a.img,src:z,alt:"Remove"})})})]})})}}]),n}(o.Component),K=n(20),$=n.n(K),tt=n.p+"static/media/sort-priority.e2fa3673.svg",et=n.p+"static/media/sort-arrows.178654b9.svg",nt=n.p+"static/media/filter.9b318674.svg",rt=n.p+"static/media/search.a85101f2.svg",ot=function(t){Object(h.a)(n,t);var e=Object(p.a)(n);function n(){return Object(d.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(r.jsx)("div",{className:$.a.container,children:Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{children:Object(r.jsx)("img",{className:$.a.img,src:et,alt:"Sort by date",onClick:this.props.dateSortHandler,style:{marginLeft:"17px"}})}),Object(r.jsx)("div",{children:Object(r.jsx)("img",{className:$.a.img,src:tt,alt:"Sort by priority",onClick:this.props.prioritySortHandler,style:{marginLeft:"-25px"}})}),Object(r.jsxs)("div",{className:$.a.search,children:[Object(r.jsx)("img",{src:rt,alt:"Search Todo"}),Object(r.jsx)("input",{type:"text",onChange:this.props.searchHandler,style:{marginLeft:"-35px"}})]}),Object(r.jsx)("div",{children:Object(r.jsx)("img",{className:$.a.img,src:nt,alt:"Sort by checked",onClick:this.props.checkedSortHandler,style:{marginLeft:"-20px"}})})]})})}}]),n}(o.Component),at=n(43),it=n.n(at),st=function(t){Object(h.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(d.a)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).newTodoTitleValue="",t.myRef=a.a.createRef(),t.writeNewTodoTitle=function(e){t.newTodoTitleValue=e.nativeEvent.target.value.toString().trim()},t.clickHandler=function(){t.props.addTodoHandler(t.newTodoTitleValue),console.log(t.myRef),t.newTodoTitleValue="",t.myRef.current.value=""},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:it.a.add,children:[Object(r.jsx)("input",{type:"text",placeholder:"Task",onChange:this.writeNewTodoTitle,ref:this.myRef}),Object(r.jsx)("button",{onClick:this.clickHandler,children:"ADD"})]})}}]),n}(o.Component),ct=n(44),lt=n.n(ct),dt=n(45),ut=n.n(dt),ht=window.localStorage,pt="todos";function mt(){ht.removeItem(pt)}function ft(){return(ft=Object(V.a)(P.a.mark((function t(){return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){var e=gt();e instanceof Array&&e.length?(console.log("Storage Todos"),t(e)):jt().then((function(e){console.log("Server Todos"),_t(e),t(e)}))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function jt(){return bt.apply(this,arguments)}function bt(){return(bt=Object(V.a)(P.a.mark((function t(){var e;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://jsonplaceholder.typicode.com/todos",t.prev=1,t.next=4,ut.a.get("https://jsonplaceholder.typicode.com/todos");case 4:return e=t.sent,t.abrupt("return",e.data);case 8:return t.prev=8,t.t0=t.catch(1),console.log(t.t0),t.abrupt("return",[]);case 12:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function gt(){var t=JSON.parse(ht.getItem(pt));return t instanceof Array?t:[]}function _t(t){return vt.apply(this,arguments)}function vt(){return(vt=Object(V.a)(P.a.mark((function t(e){return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){e instanceof Array&&e.length&&(ht.setItem(pt,JSON.stringify(e)),console.log("Todos were saved!"),t())})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var Ot=function(t){Object(h.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(d.a)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).rebuild=function(){C(),mt(),t.props.history.push({pathname:"/"})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(r.jsx)("button",{className:lt.a.Rebuild,onClick:this.rebuild,children:"REBUILD"})}}]),n}(o.Component),xt=a.a.createContext(!1),yt=function(t){Object(h.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(d.a)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={todos:[]},t.sort={priority:!0,date:!1,completed:!1},t.searchToggle=!0,t.minLength=5,t.maxLength=100,t.showDeleteAlert=function(e){e&&t.context.showDeleteAlert(e)},t.showEditAlert=function(e,n){e&&n&&t.context.showEditAlert(e,n)},t.changePriority=function(e,n){if(e&&n){var r=t.state.todos.map((function(t){if(t.id===e){var r=t.priority+n;t.priority=r>1?r:1}return t}));r.length&&(t.saveAllTodosInStorage(r),t.setState((function(){return{todos:r}})))}},t.deleteTodo=function(e){if(e){var n=t.state.todos.filter((function(t){return t.id!==e}));t.saveAllTodosInStorage(n),t.setState((function(){return{todos:n}}))}},t.editTodo=function(e,n){if(e&&n){var r=t.state.todos.map((function(t){return t.id===e&&(t.title=n),t}));r.length&&(t.saveAllTodosInStorage(r),t.setState((function(){return{todos:r}})))}},t.checkedTodo=function(e){if(e){var n=t.state.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}));n.length&&(t.saveAllTodosInStorage(n),t.setState((function(){return{todos:n}})))}},t.sortTodos=function(e){var n=[];(n=t.sort[e]?t.state.todos.sort((function(t,n){return+t[e]<+n[e]?1:-1})):t.state.todos.sort((function(t,n){return+t[e]>+n[e]?1:-1}))).length&&(t.sort[e]=!t.sort[e],t.setState((function(){return{todos:n}})))},t.sortByPriority=function(){t.sortTodos("priority")},t.sortByDate=function(){t.sortTodos("date")},t.sortByChecked=function(){t.sortTodos("completed")},t.searchHandler=function(e){t.searchToggle&&(t.searchToggle=!1,setTimeout((function(){var n=e.nativeEvent.target.value.toString().trim();t.searchAfterTimeout(n),t.searchToggle=!0}),1e3))},t.searchAfterTimeout=function(e){var n=[];(n=e?t.state.todos.filter((function(t){return t.hide=!t.title.includes(e),t})):t.state.todos.filter((function(t){return t.hide=!1,t}))).length&&t.setState((function(){return{todos:n}}))},t.addNewTodo=function(e){var n=e.toString().trim().length;if(n<t.minLength||n>t.maxLength)alert("Invalid string length! The correct length is ".concat(t.minLength," to ").concat(t.maxLength," characters."));else{var r=[{completed:!1,date:Date.now(),hide:!1,priority:1,id:t.state.todos.length+1,title:e.toString().trim()}].concat(Object(B.a)(t.state.todos));r.length&&(t.saveAllTodosInStorage(r),t.setState((function(){return{todos:r}})))}},t.saveAllTodosInStorage=function(){var t=Object(V.a)(P.a.mark((function t(e){var n;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(n=e.map((function(t){return t.hide=!1,t}))).length&&_t(n);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this;S()?function(){return ft.apply(this,arguments)}().then((function(e){var n=e.map((function(t){return Object(c.a)(Object(c.a)({},t),{},{date:Date.now(),priority:t.priority||t.userId,hide:!1})}));t.setState((function(){return{todos:n}}))})):this.props.history.push({pathname:"/"})}},{key:"componentDidUpdate",value:function(){this.context.state.deleteId&&"delete"===this.context.state.type&&(this.deleteTodo(this.context.state.deleteId),this.context.completeDelete()),this.context.state.editId&&this.context.state.editText&&"edit"===this.context.state.type&&(this.editTodo(this.context.state.editId,this.context.state.editText),this.context.completeEdit())}},{key:"render",value:function(){var t=this;return Object(r.jsxs)("div",{className:U.a.mainContainer,children:[Object(r.jsx)("h1",{className:U.a.title,children:"TODO LIST"}),Object(r.jsx)(st,{addTodoHandler:this.addNewTodo}),Object(r.jsx)(ot,{prioritySortHandler:this.sortByPriority,dateSortHandler:this.sortByDate,checkedSortHandler:this.sortByChecked,searchHandler:this.searchHandler}),Object(r.jsx)(Ot,{history:this.props.history}),Object(r.jsx)("div",{className:U.a.Todos,children:this.state.todos.length?this.state.todos.map((function(e,n){return Object(r.jsx)(W,{title:e.title,completed:e.completed,priority:e.priority,deleteHandler:t.showDeleteAlert.bind(t,e.id),editHandler:t.showEditAlert.bind(t,e.id,e.title),checkHandler:t.checkedTodo.bind(t,e.id),upPriorityHandler:t.changePriority.bind(t,e.id,1),downPriorityHandler:t.changePriority.bind(t,e.id,-1),hide:e.hide,date:e.date},n)})):Object(r.jsx)("div",{className:U.a.loader,children:Object(r.jsx)("p",{children:"Loading..."})})})]})}}]),n}(o.Component);yt.contextType=xt;var wt=yt;var Tt=function(){return Object(r.jsx)(M,{children:Object(r.jsxs)(D.c,{children:[Object(r.jsx)(D.a,{path:"/todos",component:wt}),Object(r.jsx)(D.a,{path:"/",exact:!0,component:H})]})})},kt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,79)).then((function(e){var n=e.getCLS,r=e.getFID,o=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),r(t),o(t),a(t),i(t)}))},Ct=n(26),St=n(10),Nt=n.n(St),At=function(t){Object(h.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(d.a)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).myRef=a.a.createRef(),t.state={isShow:!1,type:"",message:"",deleteId:null,editId:null,editText:""},t.info={todoId:null,todoText:null},t.maxLength=100,t.minLength=5,t.showMessage=function(e){t.setState((function(t){return Object(c.a)(Object(c.a)({},t),{},{message:e})}))},t.showDeleteAlert=function(e){t.info.todoId=e,t.setState((function(t){return Object(c.a)(Object(c.a)({},t),{},{isShow:!0,type:"delete"})}))},t.showEditAlert=function(e,n){t.info={todoId:e,todoText:n},t.setState((function(t){return Object(c.a)(Object(c.a)({},t),{},{isShow:!0,type:"edit"})}))},t.changeTextHandler=function(e){var n=e.nativeEvent.target.value.toString().trim();t.info.todoText=n,t.myRef.current.innerHTML=t.maxLength-n.length},t.completeEdit=function(){t.info={todoId:null,todoText:null},t.setState((function(t){return Object(c.a)(Object(c.a)({},t),{},{isShow:!1,type:"",editId:null})}))},t.triggerEdit=function(){var e=t.info.todoText.length;e<t.minLength||e>t.maxLength?alert("Invalid string length! The correct length is ".concat(t.minLength," to ").concat(t.maxLength," characters.")):t.setState((function(e){return Object(c.a)(Object(c.a)({},e),{},{editId:t.info.todoId,editText:t.info.todoText})}))},t.triggerDelete=function(){t.setState((function(e){return Object(c.a)(Object(c.a)({},e),{},{deleteId:t.info.todoId})}))},t.completeDelete=function(){t.info.todoId=null,t.setState((function(t){return Object(c.a)(Object(c.a)({},t),{},{isShow:!1,type:"",deleteId:null})}))},t}return Object(u.a)(n,[{key:"componentDidUpdate",value:function(){"edit"===this.state.type&&this.myRef&&this.info.todoText&&(this.myRef.current.innerHTML=this.maxLength-this.info.todoText.length)}},{key:"render",value:function(){return Object(r.jsxs)(a.a.Fragment,{children:[Object(r.jsx)(xt.Provider,{value:{state:this.state,showMessage:this.showMessage,showDeleteAlert:this.showDeleteAlert,completeDelete:this.completeDelete,showEditAlert:this.showEditAlert,completeEdit:this.completeEdit},children:this.props.children}),this.state.isShow&&"delete"===this.state.type?Object(r.jsx)("div",{className:Nt.a.container,children:Object(r.jsxs)("div",{className:Nt.a.delete,children:[Object(r.jsx)("h2",{className:Nt.a.delete__title,children:"Delete item?"}),Object(r.jsxs)("div",{className:Nt.a.delete__buttons,children:[Object(r.jsx)("button",{className:Nt.a.delete__button,onClick:this.triggerDelete,children:"YES"}),Object(r.jsx)("button",{className:"".concat(Nt.a.delete__button," ").concat(Nt.a.delete__buttons_no),onClick:this.completeDelete,children:"NO"})]})]})}):null,this.state.isShow&&"edit"===this.state.type?Object(r.jsx)("div",{className:Nt.a.container,children:Object(r.jsxs)("div",{className:Nt.a.edit,children:[Object(r.jsx)("h2",{className:Nt.a.edit__title,children:"Edit text"}),Object(r.jsx)("textarea",{className:Nt.a.edit__area,defaultValue:this.info.todoText,onChange:this.changeTextHandler}),Object(r.jsxs)("span",{children:["Characters limit:",Object(r.jsx)("p",{className:Nt.a.edit__count,ref:this.myRef})]}),Object(r.jsxs)("div",{className:Nt.a.edit__buttons,children:[Object(r.jsx)("button",{className:Nt.a.edit__button+" "+Nt.a.edit__button_cancel,onClick:this.completeEdit,children:"CANCEL"}),Object(r.jsx)("button",{className:Nt.a.edit__button,onClick:this.triggerEdit,children:"SAVE"})]})]})}):null]})}}]),n}(o.Component);s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(Ct.a,{children:Object(r.jsx)(At,{children:Object(r.jsx)(Tt,{})})})}),document.getElementById("root")),kt()},8:function(t,e,n){t.exports={container:"Todo_container__3E4UN",Todo:"Todo_Todo__34bay",text:"Todo_text__2YzMQ",date:"Todo_date__j2uof",completed:"Todo_completed__3pdtJ",circle:"Todo_circle__1O0i2",edit:"Todo_edit__1AEL3",unchecked:"Todo_unchecked__2fjEK",checked:"Todo_checked__3HE98",delete:"Todo_delete__SyiX0",priority:"Todo_priority__18orr",img:"Todo_img__3A19U",arrows:"Todo_arrows__11J6l",arrow:"Todo_arrow__O8jgy"}}},[[78,1,2]]]);
//# sourceMappingURL=main.4830f8d3.chunk.js.map