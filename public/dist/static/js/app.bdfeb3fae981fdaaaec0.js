webpackJsonp([1],{"70y6":function(t,s){},"H++e":function(t,s){},"I+31":function(t,s,e){t.exports=e.p+"static/img/red-logo.02d51f5.png"},MToG:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("7+uW"),o=e("/ocq"),i=e("mvHQ"),n=e.n(i),r={name:"Comments",props:["comment"],methods:{editComment:function(t){t._id;this.$store.dispatch("editComment",t),console.log(t),$("#"+t._id).dropdown("toggle")},deleteComment:function(t){this.$store.dispatch("deleteComment",t)}},computed:{user:function(){return this.$store.state.user}}},d={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"comments"},[e("p",{staticClass:"commentBody"},[e("strong",[t._v(t._s(t.user.userName)+":")]),t._v(" "+t._s(t.comment.comment)+"\n        "),e("span",{staticClass:"editComment"},[e("div",{staticClass:"dropdown"},[e("i",{staticClass:"fas fa-edit dropdown-toggle m-1",attrs:{id:t.comment._id,"data-toggle":"dropdown"}}),t._v(" "),e("div",{staticClass:"dropdown-menu"},[e("form",{staticClass:"px-4 py-3",on:{submit:function(s){s.preventDefault(),t.editComment(t.comment)}}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"comment"}},[t._v("Comment")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment.comment,expression:"comment.comment"}],staticClass:"form-control",attrs:{type:"text",id:"comment",placeholder:"Comment",rows:"3"},domProps:{value:t.comment.comment},on:{input:function(s){s.target.composing||t.$set(t.comment,"comment",s.target.value)}}})]),t._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Edit Comment")])])])]),t._v(" "),e("i",{staticClass:"fas fa-times-circle m-1",on:{click:function(s){t.deleteComment(t.comment)}}})])])])},staticRenderFns:[]};var c={name:"Tasks",props:["task"],mounted:function(){this.$store.dispatch("getComments",this.task._id)},data:function(){return{comment:{comment:"",boardId:this.task.boardId,listId:this.task.listId,taskId:this.task._id}}},methods:{createComment:function(t){this.$store.dispatch("createComment",this.comment),this.comment={}},editTask:function(t){this.$store.dispatch("editTask",t),$("#edit-task").dropdown("toggle")},deleteTask:function(t){this.$store.dispatch("deleteTask",t),$("#task-modal").modal("hide")},changeList:function(t){t.dataTransfer.setData("text/javascript",n()(this.task))}},computed:{user:function(){return this.$store.state.user},comments:function(){return this.$store.state.comments[this.task._id]},lists:function(){return this.$store.state.boardLists},board:function(){return this.$store.state.boardLists}},components:{Comments:e("VU/8")(r,d,!1,function(t){e("70y6")},"data-v-54539468",null).exports}},l={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"tasks"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header",attrs:{"data-toggle":"modal","data-target":"#"+t.task._id,draggable:"true",task:t.task,id:"task-modal"},on:{"!dragstart":function(s){t.changeList(s)}}},[e("h5",[t._v(t._s(t.task.title))])]),t._v(" "),e("div",{staticClass:"modal",attrs:{tabindex:"-1",role:"dialog",id:t.task._id}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"dropdown"},[e("div",{staticClass:"modal-header"},[e("i",{staticClass:"fas fa-edit dropdown-toggle m-1",attrs:{id:"edit-task","data-toggle":"dropdown"}}),t._v(" "),e("div",{staticClass:"dropdown-menu dropdown-menu-right"},[e("form",{staticClass:"px-4 py-3",on:{submit:function(s){s.preventDefault(),t.editTask(t.task)}}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"task-title"}},[t._v("Title")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.task.title,expression:"task.title"}],staticClass:"form-control",attrs:{type:"text",id:"task-title",placeholder:"Title"},domProps:{value:t.task.title},on:{input:function(s){s.target.composing||t.$set(t.task,"title",s.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"task-description"}},[t._v("Description")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.task.description,expression:"task.description"}],staticClass:"form-control",attrs:{type:"text",id:"task-description",placeholder:"Description",rows:"3"},domProps:{value:t.task.description},on:{input:function(s){s.target.composing||t.$set(t.task,"description",s.target.value)}}})]),t._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Edit Task")])])]),t._v(" "),e("i",{staticClass:"fas fa-times-circle m-1",on:{click:function(s){t.deleteTask(t.task)}}})])]),t._v(" "),e("div",{staticClass:"modal-body"},[e("h5",[t._v(t._s(t.task.title))]),t._v(" "),e("p",[t._v(t._s(t.task.description))])]),t._v(" "),e("div",{staticClass:"comments"},[e("form",{staticClass:"px-4 py-3",on:{submit:function(s){s.preventDefault(),t.createComment(s)}}},[e("div",{staticClass:"form-group"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment.comment,expression:"comment.comment"}],staticClass:"form-control",attrs:{type:"text",id:"comment-comment",placeholder:"New Comment",rows:"3"},domProps:{value:t.comment.comment},on:{input:function(s){s.target.composing||t.$set(t.comment,"comment",s.target.value)}}})]),t._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Add Comment")])])])]),t._v(" "),e("div",{staticClass:"modal-footer"},t._l(t.comments,function(t){return e("div",{key:t._id},[e("Comments",{attrs:{comment:t}})],1)}))])])])])])},staticRenderFns:[]};var m={name:"Lists",props:["list"],mounted:function(){this.$store.dispatch("getTasks",this.list._id)},data:function(){return{task:{boardId:this.list.boardId,listId:this.list._id}}},methods:{createTask:function(t){this.$store.dispatch("createTask",this.task)},deleteList:function(t){this.$store.dispatch("deleteList",t)},showDropdown:function(){document.getElementById("createListDropdown").classList.remove("hideCreateTask"),document.getElementById("addTaskForm").reset()},hideDropdown:function(t){console.log(t),document.getElementById("createListDropdown").classList.add("hideCreateTask")},editList:function(t){this.$store.dispatch("editList",t),$("#"+t._id).dropdown("toggle")},changeList:function(t){var s=JSON.parse(t.dataTransfer.getData("text/javascript"));this.$store.dispatch("changeList",{task:this.task,movingTask:s})}},computed:{user:function(){return this.$store.state.user},tasks:function(){return this.$store.state.tasks[this.list._id]},board:function(){return this.$store.state.activeBoard}},components:{Tasks:e("VU/8")(c,l,!1,function(t){e("Pb6n")},"data-v-5fd40d4b",null).exports}},u={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"lists card",attrs:{droppable:"true",ondragover:"event.preventDefault()"},on:{"!drop":function(s){t.changeList(s)}}},[e("div",{staticClass:"card-header"},[e("h3",[t._v(t._s(t.list.title))]),t._v(" "),e("div",{staticClass:"listIcons"},[e("i",{staticClass:"fas fa-times-circle delete-button",on:{click:function(s){t.deleteList(t.list)}}}),t._v(" "),e("div",{staticClass:"dropdown"},[e("i",{staticClass:"fas fa-edit dropdown-toggle edit-button ",attrs:{id:t.list._id,"data-toggle":"dropdown"}}),t._v(" "),e("div",{staticClass:"dropdown-menu dropdown-menu-right"},[e("form",{staticClass:"px-4 py-3",on:{submit:function(s){s.preventDefault(),t.editList(t.list)}}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"list-title"}},[t._v("Title")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.list.title,expression:"list.title"}],staticClass:"form-control",attrs:{type:"text",id:"list-title",placeholder:"Title"},domProps:{value:t.list.title},on:{input:function(s){s.target.composing||t.$set(t.list,"title",s.target.value)}}})]),t._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Edit List")])])])])])]),t._v(" "),t._l(t.tasks,function(t){return e("div",{key:t._id,staticClass:"taskTitle"},[e("Tasks",{attrs:{task:t}})],1)}),t._v(" "),e("form",{staticClass:"addTaskForm",attrs:{id:"addTaskForm"},on:{submit:function(s){s.preventDefault(),t.createTask(s)}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.task.title,expression:"task.title"}],staticClass:"form-control formBox",attrs:{type:"text",id:"task-title",placeholder:"New Task"},domProps:{value:t.task.title},on:{input:function(s){s.target.composing||t.$set(t.task,"title",s.target.value)}}}),t._v(" "),t._m(0)])],2)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("button",{staticClass:"btn",attrs:{type:"submit"}},[s("i",{staticClass:"fas fa-plus"})])}]};var p=e("VU/8")(m,u,!1,function(t){e("x48Q")},"data-v-555a09c0",null).exports,v={name:"Navbar",methods:{logout:function(){this.$store.dispatch("logout")}},computed:{user:function(){return this.$store.state.user},boards:function(){return this.$store.state.boards}},components:{Boards:b}},f={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"navbar container-fluid"},[a("div",[a("img",{attrs:{src:e("I+31"),height:"80"}}),t._v(" "),a("router-link",{attrs:{to:{name:"Home"}}},["Home"!=t.$route.name?a("button",{staticClass:"btn homeBtn"},[t._v("Home")]):t._e()]),t._v(" "),a("div",{staticClass:"dropdown dropright d-inline-flex"},["Home"!=t.$route.name?a("button",{staticClass:"btn chooseBoard dropdown-toggle m-1",attrs:{type:"button","data-toggle":"dropdown"}},[t._v("\n                Change Board\n            ")]):t._e(),t._v(" "),a("div",{staticClass:"dropdown-menu"},t._l(t.boards,function(s){return a("a",{staticClass:"dropdown-item"},[a("router-link",{staticClass:"link",attrs:{to:{name:"Board",params:{boardId:s._id}}}},[a("p",[a("strong",[t._v(t._s(s.title))])])])],1)}))])],1),t._v(" "),a("button",{staticClass:"btn logout m-1",on:{click:t.logout}},[a("b",[t._v("Logout")])])])},staticRenderFns:[]};var h=e("VU/8")(v,f,!1,function(t){e("PHT4")},"data-v-ef4ae4d6",null).exports,g={name:"Boards",props:["boardId"],mounted:function(){this.$store.dispatch("authenticate"),this.$store.dispatch("getLists",this.$route.params.boardId)},data:function(){return{list:{boardId:this.$route.params.boardId}}},methods:{createList:function(t){this.$store.dispatch("createList",this.list),$("#add-list").dropdown("toggle")}},computed:{user:function(){return this.$store.state.user},board:function(){return this.$store.state.activeBoard},lists:function(){return this.$store.state.boardLists}},watch:{boardId:function(t,s){this.$store.dispatch("getLists",t)}},components:{Lists:p,Navbar:h}},_={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"boards"},[e("navbar"),t._v(" "),e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12 d-flex justify-content-end"},[e("h3",[t._v(t._s(t.board.title))]),t._v(" "),e("div",{staticClass:"dropdown dropleft"},[e("button",{staticClass:"btn addListBtn dropdown-toggle m-2",attrs:{type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n                        Add A List\n                    ")]),t._v(" "),e("div",{staticClass:"dropdown-menu"},[e("form",{staticClass:"px-4 py-3",on:{submit:function(s){s.preventDefault(),t.createList(s)}}},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.list.title,expression:"list.title"}],staticClass:"form-control",attrs:{type:"text",id:"list-title",placeholder:"Title"},domProps:{value:t.list.title},on:{input:function(s){s.target.composing||t.$set(t.list,"title",s.target.value)}}})]),t._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Add List")])])])])])]),t._v(" "),e("div",{staticClass:"row"},t._l(t.lists,function(t){return e("div",{staticClass:"col-3"},[e("lists",{attrs:{list:t}})],1)}))])],1)},staticRenderFns:[]};var b=e("VU/8")(g,_,!1,function(t){e("w70Z")},"data-v-22b5f316",null).exports,C={name:"Home",mounted:function(){this.$store.dispatch("getBoards",this.user._id)},data:function(){return{board:{}}},methods:{logout:function(){this.$store.dispatch("logout")},createBoard:function(){this.$store.dispatch("createBoard",this.board),$("#addBoard").dropdown("toggle")},editBoard:function(t){this.$store.dispatch("editBoard",t),$("#"+t._id).dropdown("toggle")},deleteBoard:function(t){this.$store.dispatch("deleteBoard",t)}},computed:{user:function(){return this.$store.state.user},boards:function(){return this.$store.state.boards}},components:{Boards:b,Navbar:h}},k={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"home"},[e("navbar"),t._v(" "),e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12 d-flex justify-content-end"},[e("div",{staticClass:"dropdown dropleft"},[e("button",{staticClass:"btn addBoardBtn dropdown-toggle m-2",attrs:{type:"button",id:"addBoard","data-toggle":"dropdown"}},[t._v("\n            Add A Board\n          ")]),t._v(" "),e("div",{staticClass:"dropdown-menu",attrs:{id:"addBoard"}},[e("form",{staticClass:"px-4 py-3",on:{submit:function(s){s.preventDefault(),t.createBoard(s)}}},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.board.title,expression:"board.title"}],staticClass:"form-control",attrs:{type:"text",id:"board-title",placeholder:"Title"},domProps:{value:t.board.title},on:{input:function(s){s.target.composing||t.$set(t.board,"title",s.target.value)}}})]),t._v(" "),e("button",{staticClass:"btn dropdownBtn",attrs:{type:"submit"}},[t._v("Add Board")])])])])])]),t._v(" "),e("div",{staticClass:"row boardsSection"},[e("div",{staticClass:"col-4"},[e("div",{staticClass:"card boardCard"},[t._m(0),t._v(" "),e("div",{staticClass:"card-body"},[e("ul",{staticClass:"list-group list-group-flush"},t._l(t.boards,function(s){return e("li",{staticClass:"list-group-item"},[e("router-link",{staticClass:"link",attrs:{to:{name:"Board",params:{boardId:s._id}}}},[e("strong",[t._v(t._s(s.title))])]),t._v(" "),e("i",{staticClass:"fas fa-times-circle",on:{click:function(e){t.deleteBoard(s)}}}),t._v(" "),e("div",{staticClass:"dropdown"},[e("i",{staticClass:"fas fa-edit dropdown-toggle",attrs:{id:s._id,"data-toggle":"dropdown"}}),t._v(" "),e("div",{staticClass:"dropdown-menu",attrs:{id:"board._id"}},[e("form",{staticClass:"px-4 py-3",on:{submit:function(e){e.preventDefault(),t.editBoard(s)}}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"board-title"}},[t._v("Title")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:s.title,expression:"board.title"}],staticClass:"form-control",attrs:{type:"text",id:"board-title",placeholder:"Title"},domProps:{value:s.title},on:{input:function(e){e.target.composing||t.$set(s,"title",e.target.value)}}})]),t._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Edit Board")])])])])],1)}))])])]),t._v(" "),e("div",{staticClass:"col-4"},[e("div",{staticClass:"card boardCard"},[t._m(1),t._v(" "),e("div",{staticClass:"card-body"},[e("ul",{staticClass:"list-group list-group-flush"},t._l(t.boards,function(s){return e("li",{staticClass:"list-group-item"},[e("router-link",{staticClass:"link",attrs:{to:{name:"Board",params:{boardId:s._id}}}},[e("strong",[t._v(t._s(s.title))])])],1)}))])])])])])],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"card-header"},[s("h3",[this._v("My Boards")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"card-header"},[s("h3",[this._v("Collaboration Boards")])])}]};var w=e("VU/8")(C,k,!1,function(t){e("Sz2g")},"data-v-7d752483",null).exports,y={name:"Login",data:function(){return{user:{},createdUser:{}}},methods:{login:function(){this.$store.dispatch("login",this.user),$("#login").modal("hide")},createUser:function(){this.$store.dispatch("createUser",this.createdUser),$("#signup").modal("hide")}}},x={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"login"},[e("div",{staticClass:"container-fluid"},[t._m(0),t._v(" "),e("div",[e("div",{staticClass:"modal fade",attrs:{id:"signUp",tabindex:"-1",role:"dialog"}},[e("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("form",{on:{submit:function(s){s.preventDefault(),t.createUser(t.createdUser)}}},[e("div",{staticClass:"modal-body"},[e("div",{staticClass:"m-2"},[e("i",{staticClass:"fas mar-right fa-1x fa-user"}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.createdUser.userName,expression:"createdUser.userName"}],attrs:{type:"text",name:"username",placeholder:" Username",required:""},domProps:{value:t.createdUser.userName},on:{input:function(s){s.target.composing||t.$set(t.createdUser,"userName",s.target.value)}}})]),t._v(" "),e("div",{staticClass:"m-2"},[e("i",{staticClass:"far mar-right fa-1x fa-envelope"}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.createdUser.email,expression:"createdUser.email"}],attrs:{type:"email",name:"userEmail",placeholder:"Email",required:""},domProps:{value:t.createdUser.email},on:{input:function(s){s.target.composing||t.$set(t.createdUser,"email",s.target.value)}}})]),t._v(" "),e("div",{staticClass:"m-2"},[e("i",{staticClass:"far mar-right fa-1x fa-edit"}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.createdUser.password,expression:"createdUser.password"}],attrs:{type:"password",name:"password",placeholder:" Password"},domProps:{value:t.createdUser.password},on:{input:function(s){s.target.composing||t.$set(t.createdUser,"password",s.target.value)}}})])]),t._v(" "),t._m(1)])])])]),t._v(" "),e("div",{staticClass:"modal fade",attrs:{id:"login",tabindex:"-1",role:"dialog"}},[e("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("form",{on:{submit:function(s){s.preventDefault(),t.login(t.user)}}},[e("div",{staticClass:"modal-body"},[e("div",{staticClass:"m-2"},[e("i",{staticClass:"far mar-right fa-1x fa-envelope"}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],attrs:{type:"text",name:"userEmail",placeholder:" Email",required:""},domProps:{value:t.user.email},on:{input:function(s){s.target.composing||t.$set(t.user,"email",s.target.value)}}})]),t._v(" "),e("div",{staticClass:"m-2"},[e("i",{staticClass:"far mar-right fa-1x fa-edit"}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],attrs:{type:"password",name:"password",placeholder:" Password"},domProps:{value:t.user.password},on:{input:function(s){s.target.composing||t.$set(t.user,"password",s.target.value)}}})])]),t._v(" "),t._m(2)])])])])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("img",{attrs:{src:e("I+31"),height:"200"}}),this._v(" "),s("p",[s("strong",[this._v("Please sign up or login to continue.")])]),this._v(" "),s("button",{staticClass:"btn btn-lg signUpBtn m-2",attrs:{type:"button","data-toggle":"modal","data-target":"#signUp"}},[s("b",[this._v("Sign Up")])]),this._v(" "),s("button",{staticClass:"btn btn-lg loginBtn m-2",attrs:{type:"button","data-toggle":"modal","data-target":"#login"}},[s("b",[this._v("Login")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-lg submitBtn",attrs:{type:"submit"}},[s("b",[this._v("Create User")])]),this._v(" "),s("button",{staticClass:"btn btn-lg btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[s("b",[this._v("close")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-lg submitBtn",attrs:{type:"submit"}},[s("b",[this._v("Login")])]),this._v(" "),s("button",{staticClass:"btn btn-lg btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[s("b",[this._v("close")])])])}]};var B=e("VU/8")(y,x,!1,function(t){e("H++e")},"data-v-3768359a",null).exports;a.a.use(o.a);var L=new o.a({routes:[{path:"/",name:"Home",component:w},{path:"/Login",name:"Login",component:B},{path:"/Board/:boardId/lists",name:"Board",component:b,props:!0}]}),T={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]};var I=e("VU/8")({name:"App",mounted:function(){this.$store.dispatch("authenticate")}},T,!1,function(t){e("MToG")},null,null).exports,U=e("NYxO"),N=e("mtWM"),E=e.n(N),P=!window.location.host.includes("localhost")?"//vue-kanban-partner-project.herokuapp.com/":"//localhost:3000/",D=E.a.create({baseURL:P+"api/",withCredentials:!0,timeout:3e3}),H=E.a.create({baseURL:P+"auth/",withCredentials:!0,timeout:3e3});a.a.use(U.a);var F=new U.a.Store({state:{user:{},boards:[],activeBoard:{},lists:[],boardLists:[],tasks:{},comments:{}},mutations:{updateUser:function(t,s){t.user=s},setLists:function(t,s){t.lists.push(s)},setTasks:function(t,s){a.a.set(t.tasks,s.id,s.task)},setBoardLists:function(t,s){t.boardLists=s},setBoards:function(t,s){t.boards.push(s)},displayBoards:function(t,s){t.boards=s},setComments:function(t,s){a.a.set(t.comments,s.id,s.comment)}},actions:{createComment:function(t,s){t.commit;var e=t.dispatch;D.post("comments",s).then(function(t){e("getComments",s.taskId)}).catch(function(t){console.log(t)})},getComments:function(t,s){var e=t.commit;t.dispatch;D.get("tasks/"+s+"/comments").then(function(t){e("setComments",{id:s,comment:t.data})}).catch(function(t){console.log(t)})},editComment:function(t,s){t.commit;var e=t.dispatch;D.put("comments/"+s._id,s).then(function(t){e("getComments",s.taskId)}).catch(function(t){console.log(t)})},deleteComment:function(t,s){t.commit;var e=t.dispatch;D.delete("comments/"+s._id).then(function(t){e("getComments",s.taskId)}).catch(function(t){console.log(t)})},createList:function(t,s){var e=t.commit,a=t.dispatch;D.post("lists",s).then(function(t){e("setLists",t.data),a("getLists",s.boardId)}).catch(function(t){console.log(t)})},getLists:function(t,s){var e=t.commit;t.dispatch;D.get("boards/"+s+"/lists").then(function(t){e("setBoardLists",t.data)}).catch(function(t){console.log(t)})},editList:function(t,s){t.commit;var e=t.dispatch;D.put("lists/"+s._id,s).then(function(t){e("getLists",s.boardId)}).catch(function(t){console.log(t)})},deleteList:function(t,s){t.commit;var e=t.dispatch;D.delete("lists/"+s._id).then(function(t){e("getLists",s.boardId)}).catch(function(t){console.log(t)})},createTask:function(t,s){t.commit;var e=t.dispatch;D.post("tasks",s).then(function(t){e("getTasks",s.listId)}).catch(function(t){console.log(t)})},getTasks:function(t,s){var e=t.commit;t.dispatch;D.get("lists/"+s+"/tasks").then(function(t){e("setTasks",{id:s,task:t.data})}).catch(function(t){console.log(t)})},editTask:function(t,s){t.commit;var e=t.dispatch;D.put("/tasks/"+s._id,s).then(function(t){e("getTasks",s.listId)}).catch(function(t){console.log(t)})},deleteTask:function(t,s){t.commit;var e=t.dispatch;D.delete("tasks/"+s._id).then(function(t){e("getTasks",s.listId)}).catch(function(t){console.log(t)})},changeList:function(t,s){t.commit;var e=t.dispatch;D.put("/tasks/"+s.movingTask._id,{listId:s.task.listId}).then(function(t){e("getTasks",s.movingTask.listId),e("getTasks",s.task.listId)}).catch(function(t){console.log(t)})},createBoard:function(t,s){var e=t.commit;t.dispatch;D.post("boards",s).then(function(t){e("setBoards",t.data)}).catch(function(t){console.log(t)})},editBoard:function(t,s){t.commit;var e=t.dispatch;D.put(s.userId+"/boards/"+s._id,s).then(function(t){e("getBoards",s.userId)}).catch(function(t){console.log(t)})},deleteBoard:function(t,s){t.commit;var e=t.dispatch;D.delete(s.userId+"/boards/"+s._id).then(function(t){e("getBoards",s.userId)}).catch(function(t){console.log(t)})},getBoards:function(t,s){var e=t.commit;t.dispatch;D.get(s+"/boards").then(function(t){e("displayBoards",t.data)}).catch(function(t){console.log(t)})},createUser:function(t,s){var e=t.commit;t.dispatch;H.post("register",s).then(function(t){e("updateUser",t.data.user),L.push({name:"Home"})}).catch(function(t){console.log(t)})},login:function(t,s){var e=t.commit;t.dispatch;H.post("login",s).then(function(t){e("updateUser",t.data.user),L.push({name:"Home"})}).catch(function(t){console.log("Invalid Username or Password")})},authenticate:function(t,s){var e=t.commit,a=t.dispatch;H.get("authenticate",s).then(function(t){e("updateUser",t.data),a("getBoards",t.data._id)}).catch(function(t){console.log(t),L.push({name:"Login"})})},logout:function(t,s){var e=t.commit,a=t.dispatch;H.delete("logout").then(function(t){e("updateUser",{}),a("authenticate",s)}).catch(function(t){console.log(t)})}}});a.a.config.productionTip=!1,new a.a({el:"#app",router:L,store:F,components:{App:I},template:"<App/>"})},PHT4:function(t,s){},Pb6n:function(t,s){},Sz2g:function(t,s){},w70Z:function(t,s){},x48Q:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.bdfeb3fae981fdaaaec0.js.map