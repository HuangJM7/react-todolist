(this["webpackJsonpreact-todolist"]=this["webpackJsonpreact-todolist"]||[]).push([[0],{146:function(e,t,n){e.exports=n(252)},151:function(e,t,n){},169:function(e,t,n){},222:function(e,t,n){},224:function(e,t,n){},225:function(e,t,n){},226:function(e,t,n){},227:function(e,t,n){},230:function(e,t,n){},231:function(e,t,n){},233:function(e,t,n){},234:function(e,t,n){},243:function(e,t,n){},244:function(e,t,n){},252:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(4),c=n.n(o),s=(n(151),n(48)),i=n(45),u=n(12),l=n.n(u),p=n(20),d=n(14),m=n(13),f=n(16),h=n(15),O=n(17),b=n(256),y=n(9),v=n(32),j=(n(58),n(132)),g=n.n(j),E=n(29),T="";T="/react-todolist/build";var w=Object(E.a)({basename:T}),k=g.a.create({baseURL:"https://gp-server.hunger-valley.com/",headers:{"t-app-id":"D6wiWSq4HHEr4r6byqNR4ZbW","t-app-secret":"7AzZnpadyu4Xbgq73tLmoGz9"}});k.interceptors.request.use((function(e){var t=localStorage.getItem("x-token");return t&&(e.headers.Authorization="Bearer ".concat(t)),e}),(function(e){return console.error(e),Promise.reject(e)})),k.interceptors.response.use((function(e){return e.headers["x-token"]&&localStorage.setItem("x-token",e.headers["x-token"]),e}),(function(e){return 401===e.response.status&&(console.log("\u91cd\u5b9a\u5411"),w.push("/LogIn")),Promise.reject(e)}));var D=k,P=(n(169),function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(f.a)(this,Object(h.a)(t).call(this,e))).onChange=function(e,t){var r={};r[e]=t,console.log(r),n.setState(r)},n.submit=Object(p.a)(l.a.mark((function e(){var t,r,a,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state,r=t.account,a=t.password,o=t.passwordConformation,e.prev=1,e.next=4,D.post("sign_up/user",{account:r,password:a,password_confirmation:o}).then((function(e){n.props.history.push("/")})).catch((function(e){console.log(e),alert(e),n.setState({password:"",passwordConformation:""})}));case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(1),alert(e.t0.account),n.setState({password:"",passwordConformation:""});case 10:case"end":return e.stop()}}),e,null,[[1,6]])}))),n.state={account:"",password:"",passwordConformation:""},n}return Object(O.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.account,a=t.password,o=t.passwordConformation;return r.createElement("div",{className:"signUp",id:"SignUp"},r.createElement("h1",null,"React todo-lis\u6ce8\u518c"),r.createElement(b.a,{id:"account",allowClear:!0,placeholder:"\u8f93\u5165\u7528\u6237\u540d ",prefix:r.createElement(y.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),value:n,onChange:function(t){e.onChange("account",t.target.value)}}),r.createElement(b.a.Password,{id:"password",value:a,placeholder:"\u8f93\u5165\u5bc6\u7801",onChange:function(t){e.onChange("password",t.target.value)}}),r.createElement(b.a.Password,{id:"passwordConformation",value:o,placeholder:"\u786e\u8ba4\u5bc6\u7801",onChange:function(t){e.onChange("passwordConformation",t.target.value)}}),r.createElement(v.a,{className:"SignUpButton",type:"primary",onClick:this.submit},"\u6ce8\u518c"),r.createElement("p",null,"\u5982\u679c\u4f60\u6709\u8d26\u53f7,\u8bf7  ",r.createElement(i.a,{to:"/LogIn"},"\u767b\u5f55")))}}]),t}(r.Component)),C=(n(222),function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(f.a)(this,Object(h.a)(t).call(this,e))).onChange=function(e,t){var r={};r[e]=t,n.setState(r)},n.submit=Object(p.a)(l.a.mark((function e(){var t,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state,r=t.account,a=t.password,e.prev=1,e.next=4,D.post("sign_in/user",{account:r,password:a}).then((function(){n.props.history.push("/")})).catch((function(e){console.log(e),alert("\u7528\u6237\u540d\u6216\u5bc6\u7801\u9519\u8bef"),n.setState({password:""})}));case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),e,null,[[1,6]])}))),n.state={account:"",password:""},n}return Object(O.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.account,a=t.password;return r.createElement("div",{className:"LogIn",id:"LogIn"},r.createElement("h1",null,"React todo-list\u767b\u5f55"),r.createElement(b.a,{allowClear:!0,placeholder:"\u8f93\u5165\u7528\u6237\u540d ",prefix:r.createElement(y.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),value:n,onChange:function(t){e.onChange("account",t.target.value)}}),r.createElement(b.a.Password,{value:a,onChange:function(t){e.onChange("password",t.target.value)},placeholder:"\u8f93\u5165\u5bc6\u7801"}),r.createElement(v.a,{className:"LogInButton",type:"primary",onClick:this.submit},"\u767b\u5f55"),r.createElement("p",null,"\u5982\u679c\u4f60\u6ca1\u6709\u8d26\u53f7,\u8bf7  ",r.createElement(i.a,{to:"/SignUp"},"\u6ce8\u518c")))}}]),t}(r.Component)),x=n(27),N=n(255),S=n(259),I=n(257),_=function(e){return{type:"UPDATE_TODO",payload:e}},M=n(22);function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var A=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(f.a)(this,Object(h.a)(t).call(this,e))).onKeyUp=function(e){13===e.keyCode&&n.addTodo()},n.addTodo=Object(p.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,""===n.state.description){e.next=6;break}return e.next=4,D.post("todos",{description:n.state.description});case 4:t=e.sent,n.props.addTodo(t.data.resource);case 6:e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(0),new Error(e.t0);case 11:n.setState({description:""});case 12:case"end":return e.stop()}}),e,null,[[0,8]])}))),n.state={description:""},n}return Object(O.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state.description,n=t?r.createElement(y.a,{type:"enter",onClick:this.addTodo}):r.createElement("span",null);return r.createElement("div",{className:"TodoInput",id:"TodoInput"},r.createElement(b.a,{placeholder:"\u6dfb\u52a0\u65b0\u4efb\u52a1",suffix:n,value:t,onChange:function(t){return e.setState({description:t.target.value})},onKeyUp:this.onKeyUp}))}}]),t}(r.Component),H={addTodo:function(e){return{type:"ADD_TODO",payload:e}}},L=Object(M.b)((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(n,!0).forEach((function(t){Object(x.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t)}),H)(A),B=n(260),F=n(2),R=n.n(F);n(224);function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var W=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(f.a)(this,Object(h.a)(t).call(this,e))).updateTodo=function(){var e=Object(p.a)(l.a.mark((function e(t){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.completed&&(t.completed_at=new Date),e.prev=1,e.next=4,D.put("todos/".concat(n.props.id),t);case 4:r=e.sent,n.props.updateTodo(r.data.resource),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(1),new Error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),n.editTodo=function(){n.props.editTodo(n.props.id)},n.onkeyUp=function(e){13===e.keyCode&&""!==n.state.editText&&n.updateTodo({description:n.state.editText})},n.onEnter=function(){""!==n.state.editText&&n.updateTodo({description:n.state.editText})},n.state={editText:n.props.description},n}return Object(O.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=r.createElement("span",{className:"editing"},r.createElement("input",{type:"text",value:this.state.editText,onChange:function(t){e.setState({editText:t.target.value})},onKeyUp:this.onkeyUp}),r.createElement("span",null,r.createElement(y.a,{type:"enter",onClick:this.onEnter}),r.createElement(y.a,{type:"delete",theme:"filled",onClick:function(t){e.updateTodo({deleted:!0})}}))),n=r.createElement("span",{className:"text",onDoubleClick:this.editTodo},this.props.description);return r.createElement("div",{className:R()({TodoItem:!0,editing:this.props.editing,completed:this.props.completed}),id:"TodoItem"},r.createElement(B.a,{style:{padding:"0 4px"},checked:this.props.completed,onChange:function(t){return e.updateTodo({completed:t.target.checked})}}),this.props.editing?t:n)}}]),t}(r.Component),q={editTodo:function(e){return{type:"EDIT_TODO",payload:e}},updateTodo:_},z=Object(M.b)((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(n,!0).forEach((function(t){Object(x.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t)}),q)(W);n(225);function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var J,Z=I.a.Panel,X=function(e){function t(e){return Object(d.a)(this,t),Object(f.a)(this,Object(h.a)(t).call(this,e))}return Object(O.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.createElement("div",{className:"Todos",id:"Todos"},r.createElement(L,null),r.createElement("main",null,this.unCompletedTodos.map((function(e){return r.createElement(z,Object.assign({key:e.id},e))})),r.createElement(I.a,{bordered:!1},r.createElement(Z,{header:"\u5df2\u5b8c\u6210\u4efb\u52a1",key:"1"},r.createElement("p",null,this.completedTodos.map((function(e){return r.createElement(z,Object.assign({key:e.id},e))})))))))}},{key:"unDeleteTodos",get:function(){return this.props.todos.filter((function(e){return!e.deleted}))}},{key:"unCompletedTodos",get:function(){return this.unDeleteTodos.filter((function(e){return!e.completed}))}},{key:"completedTodos",get:function(){return this.unDeleteTodos.filter((function(e){return e.completed}))}}]),t}(r.Component),Y={updateTodo:_},$=Object(M.b)((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(n,!0).forEach((function(t){Object(x.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({todos:e.todos},t)}),Y)(X),Q=n(258),V=(n(226),function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(f.a)(this,Object(h.a)(t).call(this,e))).state={countDown:n.props.timer},n}return Object(O.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;J=setInterval((function(){var t=e.state.countDown;e.setState({countDown:t-1e3}),document.title="".concat(e.countDown," - React todolist"),t<1e3&&(document.title="React todolist",e.props.onFinish(),clearInterval(J))}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(J)}},{key:"render",value:function(){var e=1-this.state.countDown/this.props.duration;return r.createElement("div",{className:"CountDown",id:"CountDown"},r.createElement("span",{className:"restTime"},this.countDown),r.createElement("div",{className:"progress",style:{width:"".concat(100*e,"%")}}))}},{key:"countDown",get:function(){var e=Math.floor(this.state.countDown/1e3/60),t=Math.floor(this.state.countDown/1e3%60);return"".concat(e<10?"0".concat(e):e,":").concat(t<10?"0".concat(t):t)}}]),t}(r.Component)),ee=(n(227),Q.a.confirm),te=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(f.a)(this,Object(h.a)(t).call(this,e))).onKeyUp=function(e){13===e.keyCode&&""!==n.state.description&&(n.updateTomato({description:n.state.description,ended_at:new Date}),n.setState({description:""}))},n.onFinish=function(){n.forceUpdate()},n.showConfirm=function(){ee({title:"\u60a8\u76ee\u524d\u6b63\u5728\u4e00\u4e2a\u756a\u8304\u5de5\u4f5c\u65f6\u95f4\u4e2d\uff0c\u8981\u653e\u5f03\u8fd9\u4e2a\u756a\u8304\u5417\uff1f",onOk:function(){n.abortTomato()},onCancel:function(){console.log("\u53d6\u6d88")},cancelText:"\u53d6\u6d88",okText:"\u786e\u5b9a"})},n.abortTomato=function(){n.updateTomato({aborted:!0}),document.title="React todolist"},n.updateTomato=function(){var e=Object(p.a)(l.a.mark((function e(t){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.put("tomatoes/".concat(n.props.unfinishedTomato.id),t);case 3:r=e.sent,n.props.updateTomato(r.data.resource),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),n.state={description:""},n}return Object(O.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=r.createElement("div",null);if(void 0===this.props.unfinishedTomato)t=r.createElement(v.a,{className:"startTomatoButton",onClick:function(){e.props.startTomato()}},"\u5f00\u59cb\u756a\u8304");else{var n=Date.parse(this.props.unfinishedTomato.started_at),a=this.props.unfinishedTomato.duration,o=(new Date).getTime();if(o-n>a)t=r.createElement("div",{className:"inputWrapper"},r.createElement(b.a,{value:this.state.description,placeholder:"\u8bf7\u8f93\u5165\u4f60\u521a\u521a\u5b8c\u6210\u7684\u4efb\u52a1",onChange:function(t){return e.setState({description:t.target.value})},onKeyUp:function(t){return e.onKeyUp(t)}}),r.createElement(y.a,{type:"close-circle",className:"abort",onClick:this.showConfirm}));else if(o-n<a){var c=a-o+n;t=r.createElement("div",{className:"countDownWrapper"},r.createElement(V,{timer:c,duration:a,onFinish:this.onFinish}),r.createElement(y.a,{type:"close-circle",className:"abort",onClick:this.showConfirm}))}}return r.createElement("div",{className:"TomatoAction",id:"TomatoAction"},t)}}]),t}(r.Component),ne=n(253),re=(n(230),function(e){return r.createElement("div",{className:"TomatoItem"},r.createElement("span",{className:"timeRange"},Object(ne.a)(new Date(e.started_at),"H:mm")," - ",Object(ne.a)(new Date(e.ended_at),"H:mm")),r.createElement("span",{className:"description"},e.description))}),ae=function(e){function t(e){return Object(d.a)(this,t),Object(f.a)(this,Object(h.a)(t).call(this,e))}return Object(O.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.dates.map((function(t){var n=e.props.finishedTomatoes[t];return r.createElement("div",{key:t,className:"dailyTomatoes"},r.createElement("div",{className:"title"},r.createElement("span",{className:"dateTime"},Object(ne.a)(new Date(t),"M\u6708dd\u65e5")),r.createElement("span",{className:"finishedCount"},"\u5b8c\u6210\u4e86",n.length,"\u4e2a\u756a\u8304")),n.map((function(e){return r.createElement(re,Object.assign({key:e.id},e))})))}));return r.createElement("div",{className:"TomatoList",id:"TomatoList"},t)}},{key:"dates",get:function(){return Object.keys(this.props.finishedTomatoes).sort((function(e,t){return Date.parse(t)-Date.parse(e)})).splice(0,3)}}]),t}(r.Component),oe=(n(231),n(66)),ce=n.n(oe);function se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var ie=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(f.a)(this,Object(h.a)(t).call(this,e))).startTomato=Object(p.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.post("tomatoes",{duration:15e5});case 3:t=e.sent,n.props.addTomato(t.data.resource),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),n}return Object(O.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.createElement("div",{className:"Tomatoes",id:"Tomatoes"},r.createElement(te,{startTomato:this.startTomato,unfinishedTomato:this.unfinishedTomato,updateTomato:this.props.updateTomato}),r.createElement(ae,{finishedTomatoes:this.finishedTomatoes}))}},{key:"unfinishedTomato",get:function(){return this.props.tomatoes.filter((function(e){return!e.description&&!e.ended_at&&!e.aborted}))[0]}},{key:"finishedTomatoes",get:function(){var e=this.props.tomatoes.filter((function(e){return e.description&&e.ended_at&&!e.aborted}));return ce.a.groupBy(e,(function(e){return Object(ne.a)(new Date(e.started_at),"yyyy-MM-dd")}))}}]),t}(r.Component),ue={addTomato:function(e){return{type:"ADD_TOMATO",payload:e}},updateTomato:function(e){return{type:"UPDATE_TOMATO",payload:e}}},le=Object(M.b)((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?se(n,!0).forEach((function(t){Object(x.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):se(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({tomatoes:e.tomatoes},t)}),ue)(ie),pe=n(47),de=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(f.a)(this,Object(h.a)(t).call(this,e))).point=function(){var e=Object.keys(n.props.data).sort((function(e,t){return Date.parse(e)-Date.parse(t)})),t=e[0];if(t){var r,a=(new Date).getTime()-Date.parse(t),o=0,c=e.map((function(e){var c=(Date.parse(e)-Date.parse(t))/a*240,s=60*(1-(o+=n.props.data[e].length)/n.props.totalFinishedCount);return r=s,"".concat(c,",").concat(s)}));return["0,60"].concat(Object(pe.a)(c),["240,".concat(r),"240,60"]).join(" ")}return"0,60 240,60"},n}return Object(O.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.createElement("div",{className:"Polygon",id:"Polygon"},r.createElement("svg",{viewBox:"0 0 240 60",preserveAspectRatio:"xMaxYMax meet"},r.createElement("polygon",{fill:"rgba(215,78,78,0.1)",stroke:"rgba(215,78,78,0.5)","stroke-width":"1",points:this.point()})))}}]),t}(r.Component),me=n(254);n(233);function fe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var he=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(f.a)(this,Object(h.a)(t).call(this,e))).updateTodo=function(){var e=Object(p.a)(l.a.mark((function e(t){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.put("todos/".concat(n.props.todo.id),t);case 3:r=e.sent,n.props.updateTodo(r.data.resource),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),n}return Object(O.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e,t,n,a=this;return"finished"===this.props.itemType?(t="HH:mm",n=this.props.todo.updated_at,e=r.createElement("div",{className:"action"},r.createElement("span",{onClick:function(){return a.updateTodo({finished:!1})}},"\u6062\u590d"),r.createElement("span",{onClick:function(){return a.updateTodo({deleted:!0})}},"\u5220\u9664"))):"deleted"===this.props.itemType&&(t="yyyy-MM-dd",n=this.props.todo.created_at,e=r.createElement("div",{className:"action"},r.createElement("span",{onClick:function(){return a.updateTodo({deleted:!1})}},"\u6062\u590d"))),r.createElement("div",{className:"TodoHistoryTodoItem",id:"TodoHistoryTodoItem"},r.createElement("div",{className:"text"},r.createElement("span",{className:"time"},Object(ne.a)(new Date(n),t)),r.createElement("span",{className:"description"},this.props.todo.description)),e)}}]),t}(r.Component),Oe={updateTodo:_},be=Object(M.b)((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?fe(n,!0).forEach((function(t){Object(x.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fe(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t)}),Oe)(he);n(234);function ye(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var ve=me.a.TabPane,je=function(e){function t(e){return Object(d.a)(this,t),Object(f.a)(this,Object(h.a)(t).call(this,e))}return Object(O.a)(t,e),Object(m.a)(t,[{key:"finishedTodos",get:function(){return this.props.todos.filter((function(e){return e.completed&&!e.deleted}))}},{key:"deletedTodos",get:function(){return this.props.todos.filter((function(e){return e.deleted}))}},{key:"dailyFinishedTodos",get:function(){return ce.a.groupBy(this.finishedTodos,(function(e){return Object(ne.a)(new Date(e.updated_at),"yyyy-MM-d")}))}},{key:"finishedDates",get:function(){return Object.keys(this.dailyFinishedTodos).sort((function(e,t){return Date.parse(t)-Date.parse(e)}))}}]),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.finishedDates.map((function(t){return r.createElement("div",{key:t,className:"dailyTodos"},r.createElement("div",{className:"summary"},r.createElement("p",{className:"date"},r.createElement("span",null,t),r.createElement("span",null,"\u5468\u4e94")),r.createElement("p",{className:"finishedCount"},"\u5b8c\u6210\u4e86",e.dailyFinishedTodos[t].length,"\u4e2a\u4efb\u52a1")),r.createElement("div",{className:"todoList"},e.dailyFinishedTodos[t].map((function(e){return r.createElement(be,{key:e.id,todo:e,itemType:"finished"})}))))})),n=this.deletedTodos.map((function(e){return r.createElement(be,{key:e.id,todo:e,itemType:"deleted"})}));return r.createElement(me.a,{defaultActiveKey:"1"},r.createElement(ve,{tab:"\u5df2\u5b8c\u6210\u4efb\u52a1",key:"1"},r.createElement("div",{className:"TodoHistory",id:"TodoHistory"},t)),r.createElement(ve,{tab:"\u5df2\u5220\u9664\u7684\u4efb\u52a1",key:"2"},r.createElement("div",{className:"TodoHistory",id:"TodoHistory"},n)))}}]),t}(r.Component),ge=Object(M.b)((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ye(n,!0).forEach((function(t){Object(x.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ye(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({todos:e.todos},t)}))(je);n(243);function Ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var Te=function(e){function t(e){return Object(d.a)(this,t),Object(f.a)(this,Object(h.a)(t).call(this,e))}return Object(O.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.createElement("div",{className:"Statistics",id:"Statistics"},r.createElement("ul",null,r.createElement("li",null,r.createElement("div",{className:"description"},r.createElement("span",{className:"title"},"\u7edf\u8ba1"),r.createElement("span",{className:"subtitle"},"\u7d2f\u8ba1\u5b8c\u6210\u4efb\u52a1"),r.createElement("span",{className:"quantity"},this.finishedTodos.length))),r.createElement("li",null,r.createElement("div",{className:"description"},r.createElement("span",{className:"title"},"\u756a\u8304\u5386\u53f2"),r.createElement("span",{className:"subtitle"},"\u7d2f\u8ba1\u5b8c\u6210\u756a\u8304"),r.createElement("span",{className:"quantity"},this.finishedTodos.length))),r.createElement("li",null,r.createElement("div",{className:"description"},r.createElement("span",{className:"title"},"\u4efb\u52a1\u5386\u53f2"),r.createElement("span",{className:"subtitle"},"\u7d2f\u8ba1\u5b8c\u6210\u4efb\u52a1"),r.createElement("span",{className:"quantity"},this.finishedTodos.length)),r.createElement(de,{data:this.dailyTodos,totalFinishedCount:this.finishedTodos.length}))),r.createElement(ge,null))}},{key:"finishedTodos",get:function(){return this.props.todos.filter((function(e){return e.completed&&!e.delete}))}},{key:"dailyTodos",get:function(){return ce.a.groupBy(this.finishedTodos,(function(e){return Object(ne.a)(new Date(e.updated_at),"yyyy-MM-d")}))}}]),t}(r.Component),we=Object(M.b)((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ee(n,!0).forEach((function(t){Object(x.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ee(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({todos:e.todos},t)}))(Te);n(244);function ke(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var De=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(f.a)(this,Object(h.a)(t).call(this,e))).getTodos=Object(p.a)(l.a.mark((function e(){var t,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.get("todos");case 3:t=e.sent,r=t.data.resources.map((function(e){return Object.assign({},e,{editing:!1})})),n.props.initTodos(r),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])}))),n.getTomatoes=Object(p.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.get("tomatoes");case 3:t=e.sent,console.log(t.data.resources),n.props.initTomatoes(t.data.resources),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])}))),n.getMe=Object(p.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.get("me");case 3:t=e.sent,n.setState({user:t.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("\u83b7\u53d6\u7528\u6237\u5931\u8d25");case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),n.logout=function(){localStorage.setItem("x-token",""),n.props.history.push("/LogIn")},n.state={user:{}},n}return Object(O.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){var e=Object(p.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getMe();case 2:return e.next=4,this.getTodos();case 4:return e.next=6,this.getTomatoes();case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=r.createElement(N.a,{style:{padding:"0 10px"}},r.createElement(N.a.Item,{key:"1"},r.createElement(y.a,{type:"setting"}),"  \u8bbe\u7f6e  "),r.createElement(N.a.Item,{key:"2",onClick:this.logout},r.createElement(y.a,{type:"logout"}),"  \u6ce8\u9500  "));return r.createElement("div",{className:"Home",id:"Home"},r.createElement("header",null,r.createElement("h2",{className:"logo"},"LOGO"),r.createElement(S.a.Button,{overlay:e,icon:r.createElement(y.a,{type:"down"})},r.createElement("span",null,r.createElement(y.a,{type:"user",style:{padding:5}}),this.state.user&&this.state.user.account))),r.createElement("main",null,r.createElement(le,null),r.createElement($,null)),r.createElement(we,null))}}]),t}(r.Component),Pe={initTodos:function(e){return{type:"INIT_TODOS",payload:e}},initTomatoes:function(e){return{type:"INIT_TOMATOES",payload:e}}},Ce=Object(M.b)((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ke(n,!0).forEach((function(t){Object(x.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ke(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({todos:e.todos},t)}),Pe)(De);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var xe=n(65),Ne=Object(xe.b)({todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return[].concat(Object(pe.a)(e),[t.payload]);case"INIT_TODOS":return Object(pe.a)(t.payload);case"UPDATE_TODO":return e.map((function(e){return e.id===t.payload.id?t.payload:e}));case"EDIT_TODO":return e.map((function(e){return e.id===t.payload?Object.assign({},e,{editing:!0}):Object.assign({},e,{editing:!1})}));default:return e}},tomatoes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TOMATO":return[t.payload].concat(Object(pe.a)(e));case"UPDATE_TOMATO":return e.map((function(e){return e.id===t.payload.id?t.payload:e}));case"INIT_TOMATOES":return Object(pe.a)(t.payload);default:return e}}}),Se=Object(xe.c)(Ne);c.a.render(a.a.createElement(M.a,{store:Se},a.a.createElement((function(){return a.a.createElement(s.b,{history:w},a.a.createElement("div",null,a.a.createElement("nav",null,a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(i.a,{to:"/"},"Home")),a.a.createElement("li",null,a.a.createElement(i.a,{to:"/SignUp"},"SignUp")),a.a.createElement("li",null,a.a.createElement(i.a,{to:"/LogIn"},"LogIn")))),a.a.createElement(s.c,null,a.a.createElement(s.a,{path:"/LogIn",component:C}),a.a.createElement(s.a,{path:"/SignUp",component:P}),a.a.createElement(s.a,{path:"/",component:Ce}))))}),null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[146,1,2]]]);
//# sourceMappingURL=main.206cabb7.chunk.js.map