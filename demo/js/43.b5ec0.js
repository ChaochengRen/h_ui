webpackJsonp([43],{751:function(e,t,a){var n=a(0)(a(828),a(884),null,null);e.exports=n.exports},828:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});for(var n=a(8),l=function(e){return e&&e.__esModule?e:{default:e}}(n),i=(a(2),[]),d=0;d<10;d++){var c={title:"children",loading:!1,children:[]};i.push(c)}t.default={data:function(){var e=this;return{bd:[],baseData:[{title:"parent",id:"1-0",children:[{title:"child1",id:"1-1",children:[{title:"child1-1-1",id:"1-1-1",leaf:!0},{title:"child1-1-2",id:"1-1-2",leaf:!0}]},{title:"child2",id:"1-2",children:[]}]}],baseData1:[{title:"parent",id:"1-0",expand:!0,children:[{title:"child1",id:"1-1",expand:!0,children:[{title:"child1-1-1",id:"1-1-1"},{title:"child1-1-2",id:"1-1-2"}]},{title:"child2",id:"1-2",children:[]}]}],baseData2:[{expand:!0,title:"parent 1",children:[{title:"parent 1-0",expand:!0,disabled:!0,children:[{title:"leaf",disableCheckbox:!0},{title:"leaf"}]},{title:"parent 1-1",expand:!0,checked:!0,children:[{title:'<span style="color: red">leaf</span>'}]}]}],baseData3:[{title:"parent",id:"1-0",expand:!0,children:[{title:"child1",id:"1-1",expand:!0,children:[{title:"child1-1-1",id:"1-1-1"},{title:"child1-1-2",id:"1-1-2"}]},{title:"child2",id:"1-2",children:[]}]}],data1:[{title:"parent 1",id:"1",expand:!0,hasPage:"true",children:[{title:"parent 1-1",id:"2",expand:!0,disabled:!0,children:[{title:"leaf 1-1-1",id:"3"},{title:"leaf 1-1-2",id:"4"}]},{title:"parent 1-2",id:"5",expand:!0,children:[{title:"leaf 1-2-1",id:"5"},{title:"leaf 1-2-1",id:"6"}]}]}],data2:[{title:"parent 1",expand:!1,children:[{title:"parent 1-1",expand:!1,checked:"true",children:[{title:"leaf 1-1-1",checked:"false",disabled:"false"},{title:"leaf 1-1-2"}]},{title:"parent 1-2",expand:!0,children:[{title:"leaf 1-2-1"},{title:"leaf 1-2-1"}]}]}],data3:[{title:"parent-autoload",loading:!1,autoLoad:"true",expand:!0,children:[]},{title:"parent112-autoload",expand:!1,loading:!1,autoLoad:!0,children:[]}],data11:[{title:"parent 1",expand:"true",children:[{title:"parent 1-1",expand:"false",children:[{title:"leaf 1-1-1"},{title:"leaf 1-1-2"}]},{title:"parent 1-2",expand:!0,children:[{title:"leaf 1-2-1"},{title:"leaf 1-2-1"}]}]}],data22:[{title:"parent 1",expand:!0,children:[{title:"parent 1-1",expand:!0,checked:!0,children:[{title:"leaf 1-1-1"},{title:"leaf 1-1-2"}]},{title:"parent 1-2",expand:!0,children:[{title:"leaf 1-2-1"},{title:"leaf 1-2-1"}]}]}],data33:[{title:"parent 1",expand:!0,children:[{title:"parent 1-1",expand:!0,children:[{title:"leaf 1-1-1"},{title:"leaf 1-1-2"}]},{title:"parent 1-2",expand:!0,children:[{title:"leaf 1-2-1"},{title:"leaf 1-2-1"}]}]}],data4:[{title:"parent 1",expand:!0,selected:"true",children:[{title:"parent 1-1",expand:!0,selected:"true",children:[{title:"leaf 1-1-1",disabled:"false"},{title:"leaf 1-1-2",disableCheckbox:"false"}]},{title:"parent 1-2",expand:!0,children:[{title:"leaf 1-2-1",checked:!0},{title:"leaf 1-2-1"}]}]}],data5:[{title:"parent 1",expand:!0,render:function(t,a){var n=(a.root,a.node,a.data);return t("span",{style:{display:"inline-block",width:"100%"}},[t("span",[t("h-icon",{props:{name:"android-folder-open"},style:{marginRight:"8px"}}),t("span",n.title)]),t("span",{style:{display:"inline-block",float:"right",marginRight:"32px"}},[t("h-button",{props:(0,l.default)({},e.buttonProps,{icon:"plus",type:"primary"}),style:{width:"52px"},on:{click:function(){e.append(n)}}})])])},children:[{title:"child 1-1",expand:!0,children:[{title:"leaf 1-1-1",expand:!0},{title:"leaf 1-1-2",expand:!0}]},{title:"child 1-2",expand:!0,children:[{title:"leaf 1-2-1",expand:!0},{title:"leaf 1-2-1",expand:!0}]}]}],buttonProps:{type:"ghost",size:"small"},test:[]}},methods:{loadData:function(e,t){setTimeout(function(){t([{title:"children",loading:!1,children:[],leaf:!0},{title:"children2",loading:!1,children:[]}])},1e3)},renderContent:function(e,t){var a=this,n=t.root,i=t.node,d=t.data;return e("span",{style:{display:"inline-block",width:"100%"}},[e("span",[e("h-icon",{props:{name:"ios-paper-outline"},style:{marginRight:"8px"}}),e("span",d.title)]),e("span",{style:{display:"inline-block",float:"right",marginRight:"32px"}},[e("h-button",{props:(0,l.default)({},this.buttonProps,{icon:"plus-round"}),style:{marginRight:"8px"},on:{click:function(){a.append(d)}}}),e("h-button",{props:(0,l.default)({},this.buttonProps,{icon:"minus-round"}),on:{click:function(){a.remove(n,i,d)}}})])])},append:function(e){var t=e.children||[];t.push({title:"appended node",expand:!0}),this.$set(e,"children",t)},remove:function(e,t,a){var n=e.find(function(e){return e===t}).parent,l=e.find(function(e){return e.nodeKey===n}).node,i=l.children.indexOf(a);l.children.splice(i,1)},handleSelectChange:function(e){},updateTree:function(e){e[0].children[0].checked=!0,e[0].children[0].children[0].checked=!0,e[0].children[0].children[1].checked=!0},handleChange:function(){},showChange:function(e){console.log(e)},showExpand:function(e){console.log(e)},checkChnage:function(e,t){console.log(e),console.log(t)},ok:function(){this.test=this.data1},select:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$refs.test.nodeSelect("id","3",e)},cancle:function(){this.test=[]}},mounted:function(){}}},884:function(e,t,a){"use strict";e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h-row",[a("h-col",{attrs:{span:"6"}},[a("h2",[e._v("基本用法")]),a("h-tree",{ref:"test",attrs:{data:e.test}})],1),e._v(" "),a("h-button",{on:{"on-click":e.ok}},[e._v("赋值")]),e._v(" "),a("h-button",{on:{"on-click":e.cancle}},[e._v("取消")]),e._v(" "),a("h-button",{on:{"on-click":e.select}},[e._v("选择")]),e._v(" "),a("h-button",{on:{"on-click":function(t){e.select(!1)}}},[e._v("取消选中")]),e._v(" "),a("h-col",{attrs:{span:"6"}},[a("h2",[e._v("显示勾选框")]),a("h-tree",{attrs:{data:e.data2,checkStrictly:"",isBoxRight:"",selectToCheck:"",multiple:"","show-checkbox":""},on:{"on-check-change":e.checkChnage,"on-toggle-expand":e.checkChnage,"on-mouseover":e.checkChnage}})],1),e._v(" "),a("h-col",{attrs:{span:"6"}},[a("h2",[e._v("异步加载")]),a("h-tree",{attrs:{data:e.data3,"load-data":e.loadData,"show-checkbox":""}})],1),e._v(" "),a("h-col",{attrs:{span:"6"}},[a("h2",[e._v("默认展开、选中、勾选和禁用")]),a("h-tree",{attrs:{data:e.data4,"show-checkbox":"",multiple:""}})],1)],1),e._v(" "),a("h-row",[a("h-col",{attrs:{span:"6"}},[a("h2",[e._v("多选")]),a("h-tree",{attrs:{data:e.data11,multiple:""}})],1),e._v(" "),a("h-col",{attrs:{span:"6"}},[a("h2",[e._v("父子组件不联动")]),a("h-tree",{attrs:{data:e.data22,"show-checkbox":"",checkStrictly:""},on:{"on-check-change":e.checkChnage}})],1),e._v(" "),a("h-col",{attrs:{span:"6"}},[a("h2",[e._v("不显示不确定性状态")]),a("h-tree",{attrs:{data:e.data33,"show-checkbox":"",showIndeterminate:""}})],1),e._v(" "),a("h-col",{attrs:{span:"6"}},[a("h2",[e._v("自定义节的内容")]),e._v(" "),a("h-tree",{attrs:{data:e.data5,render:e.renderContent}})],1)],1),e._v(" "),a("h-row",[a("h-col",{attrs:{span:"8"}},[e._v("\n      测试leaf\n      "),a("h-tree",{attrs:{data:e.baseData,"show-checkbox":""},on:{"on-check-change":e.handleChange,"on-toggle-expand":e.showExpand}})],1),e._v(" "),a("h-col",{attrs:{span:"8"}},[a("h-tree",{attrs:{data:e.baseData3,"show-checkbox":"",showIndeterminate:""}})],1),e._v(" "),a("h-col",{attrs:{span:"8"}},[a("h2",[e._v("123")]),e._v(" "),a("h-tree",{attrs:{data:e.baseData2},on:{"on-select-change":e.showChange}})],1)],1),e._v(" "),a("h-row",[a("h-col",{attrs:{span:"8"}},[a("h-tree",{attrs:{data:e.baseData1,"show-checkbox":"",checkStrictly:""}})],1),e._v(" "),a("h-col",{attrs:{span:"8"}},[a("h-tree",{attrs:{data:e.baseData2,"show-checkbox":""}})],1),e._v(" "),a("h-col",{attrs:{span:"8"}},[a("h-tree",{attrs:{data:e.baseData2},on:{"on-select-change":e.showChange}})],1)],1)],1)},staticRenderFns:[]}}});