(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e2ddfb2"],{5530:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r("b64b"),r("a4d3"),r("4de4"),r("d3b7"),r("e439"),r("159b"),r("dbb4");function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}},"62e8":function(e,t,r){"use strict";r("ac8d")},"7e1e":function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"c",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r("5530");r("d9e2");function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t,r){return t&&a(e.prototype,t),r&&a(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}r("d3b7");var l=r("1e62"),c=r.n(l),s={baseUrl:{dev:"/api/",pro:""}},u=s.baseUrl.pro,f=function(){function e(t){o(this,e),this.baseUrl=t}return i(e,[{key:"getInsideConfig",value:function(){var e={baseUrl:this.baseUrl,header:{}};return e}},{key:"interceptors",value:function(e){e.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),e.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)}))}},{key:"request",value:function(e){var t=c.a.create();return e=Object(n["a"])(Object(n["a"])({},this.getInsideConfig()),e),this.interceptors(t),t(e)}}]),e}(),p=new f(u),d=function(){return p.request({url:"/home/getData"})},b=function(e){return p.request({url:"/user/getUser",method:"get",params:e})},m=function(e){return p.request({url:"/permission/getMenu",method:"post",data:e})}},ac8d:function(e,t,r){},b64b:function(e,t,r){var n=r("23e7"),o=r("7b0b"),a=r("df75"),i=r("d039"),l=i((function(){a(1)}));n({target:"Object",stat:!0,forced:l},{keys:function(e){return a(o(e))}})},b707:function(e,t,r){"use strict";r("db4b")},db4b:function(e,t,r){},dbb4:function(e,t,r){var n=r("23e7"),o=r("83ab"),a=r("56ef"),i=r("fc6a"),l=r("06cf"),c=r("8418");n({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(e){var t,r,n=i(e),o=l.f,s=a(n),u={},f=0;while(s.length>f)r=o(n,t=s[f++]),void 0!==r&&c(u,t,r);return u}})},e382:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"manage"},[r("el-dialog",{attrs:{title:"add"===e.operateType?"新增用户":"更新用户",visible:e.isShow},on:{"update:visible":function(t){e.isShow=t}}},[r("common-form",{ref:"form",attrs:{formLabel:e.operateFormLabel,form:e.operateForm,inline:!0}}),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.isShow=!1}}},[e._v("取消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.confirm}},[e._v("确认")])],1)],1),r("div",{staticClass:"manage-header"},[r("el-button",{attrs:{type:"primary"},on:{click:e.addUser}},[e._v("+ 新增")]),r("common-form",{ref:"form",attrs:{formLabel:e.formLabel,form:e.searchForm,inline:!0}},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.getList(e.searchForm.keyword)}}},[e._v("搜索")])],1)],1),r("common-table",{attrs:{tableData:e.tableData,tableLabel:e.tableLabel,config:e.config},on:{changePage:function(t){return e.getList()},edit:e.editUser,del:e.delUser}})],1)},o=[],a=r("5530"),i=(r("d81d"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"100px",inline:e.inline}},[e._l(e.formLabel,(function(t){return r("el-form-item",{key:t.label,attrs:{label:t.label}},["input"===t.type?r("el-input",{attrs:{placeholder:"请输入"+t.label},model:{value:e.form[t.model],callback:function(r){e.$set(e.form,t.model,r)},expression:"form[item.model]"}}):e._e(),"switch"===t.type?r("el-switch",{model:{value:e.form[t.model],callback:function(r){e.$set(e.form,t.model,r)},expression:"form[item.model]"}}):e._e(),"date"===t.type?r("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",type:"date",placeholder:"选择日期"},model:{value:e.form[t.model],callback:function(r){e.$set(e.form,t.model,r)},expression:"form[item.model]"}}):e._e(),"select"===t.type?r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form[t.model],callback:function(r){e.$set(e.form,t.model,r)},expression:"form[item.model]"}},e._l(t.opts,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1):e._e()],1)})),r("el-form-item",[e._t("default")],2)],2)}),l=[],c={name:"CommonForm",props:{formLabel:Array,form:Object,inline:Boolean}},s=c,u=r("2877"),f=Object(u["a"])(s,i,l,!1,null,null,null),p=f.exports,d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"common-table"},[r("el-table",{attrs:{data:e.tableData,height:"90%",stripe:""}},[e._l(e.tableLabel,(function(t){return r("el-table-column",{key:t.prop,attrs:{"show-overflow-tooltip":"",label:t.label,width:t.width?t.width:125},scopedSlots:e._u([{key:"default",fn:function(n){return[r("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(n.row[t.prop]))])]}}],null,!0)})})),r("el-table-column",{attrs:{label:"操作","min-width":"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{size:"mini"},on:{click:function(r){return e.handleEdit(t.row)}}},[e._v("编辑")]),r("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(r){return e.handleDelete(t.row)}}},[e._v("删除")])]}}])})],2),r("el-pagination",{staticClass:"pager",attrs:{layout:"prev, pager, next",total:e.config.total,"current-page":e.config.page,"page-size":20},on:{"update:currentPage":function(t){return e.$set(e.config,"page",t)},"update:current-page":function(t){return e.$set(e.config,"page",t)},"current-change":e.changePage}})],1)},b=[],m={name:"CommonTable",props:{tableData:Array,tableLabel:Array,config:Object},methods:{handleEdit:function(e){this.$emit("edit",e)},handleDelete:function(e){this.$emit("del",e)},changePage:function(e){this.$emit("changePage",e)}}},h=m,g=(r("b707"),Object(u["a"])(h,d,b,!1,null,"f1044380",null)),y=g.exports,v=r("7e1e"),w={name:"user",components:{CommonForm:p,CommonTable:y},data:function(){return{operateType:"add",isShow:!1,operateFormLabel:[{model:"name",label:"姓名",type:"input"},{model:"age",label:"年龄",type:"input"},{model:"sex",label:"性别",type:"select",opts:[{label:"男",value:1},{label:"女",value:0}]},{model:"birth",label:"出生日期",type:"date"},{model:"addr",label:"地址",type:"input"}],operateForm:{name:"",addr:"",age:"",birth:"",sex:""},formLabel:[{model:"keyword",label:"",type:"input"}],searchForm:{keyword:""},tableData:[],tableLabel:[{prop:"name",label:"姓名"},{prop:"age",label:"年龄"},{prop:"sexLabel",label:"性别"},{prop:"birth",label:"出生日期",width:200},{prop:"addr",label:"地址",width:320}],config:{page:1,total:30}}},methods:{confirm:function(){var e=this;"edit"===this.operateType?this.$http.post("/user/edit",this.operateForm).then((function(t){console.log(t),e.isShow=!1,e.getList()})):this.$http.post("/user/add",this.operateForm).then((function(t){console.log(t),e.isShow=!1,e.getList()}))},addUser:function(){this.isShow=!0,this.operateType="add",this.operateForm={name:"",addr:"",age:"",birth:"",sex:""}},editUser:function(e){this.operateType="edit",this.isShow=!0,this.operateForm=Object(a["a"])({},e)},delUser:function(e){var t=this;this.$confirm("此操作将永久删除文件，是否继续？","提示",{confirmButtonText:"确认",cacelButtonText:"取消",type:"warning"}).then((function(){var r=e.id;t.$http.post("user/del",{params:{id:r}}).then((function(){t.$message({type:"success",message:"删除成功"}),t.getList()}))}))},getList:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.config.loading=!0,t&&(this.config.page=1),Object(v["c"])({page:this.config.page,name:t}).then((function(t){var r=t.data;e.tableData=r.list.map((function(e){return e.sexLabel=0===e.sex?"女":"男",e})),e.config.total=r.count,e.config.loading=!1}))}},created:function(){this.getList()}},O=w,j=(r("62e8"),Object(u["a"])(O,n,o,!1,null,"20b8c73d",null));t["default"]=j.exports},e439:function(e,t,r){var n=r("23e7"),o=r("d039"),a=r("fc6a"),i=r("06cf").f,l=r("83ab"),c=o((function(){i(1)})),s=!l||c;n({target:"Object",stat:!0,forced:s,sham:!l},{getOwnPropertyDescriptor:function(e,t){return i(a(e),t)}})}}]);
//# sourceMappingURL=chunk-1e2ddfb2.6991e88d.js.map