(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d225f1b"],{e70c:function(e,t,n){"use strict";n.r(t);var l=n("d58b"),d=n("240e"),a=n("1a42"),i={components:{Example:a.a},data:function(){return{code:'<template>\n  <vui-cascade-transfer\n    valueKey="id"\n    checkedStrategy="children"\n    v-bind:value="value"\n    v-bind:options="options"\n    v-bind:title="getPanelTitle"\n    v-bind:formatter="getOptionLabel"\n    v-bind:showChildrenCount="true"\n    v-bind:searchable="true"\n    v-on:change="handleChange"\n  />\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: [],\n        options: [\n          {\n            id: 1,\n            label: "Item1"\n          },\n          {\n            id: 2,\n            label: "Item2",\n            children: [\n              {\n                id: 21,\n                label: "Item2-1"\n              },\n              {\n                id: 22,\n                label: "Item2-2",\n                children: [\n                  {\n                    id: 221,\n                    label: "Item2-2-1"\n                  },\n                  {\n                    id: 222,\n                    label: "Item2-2-2"\n                  },\n                  {\n                    id: 223,\n                    label: "Item2-2-3"\n                  },\n                  {\n                    id: 224,\n                    label: "Item2-2-4"\n                  }\n                ]\n              },\n              {\n                id: 23,\n                label: "Item2-3"\n              },\n              {\n                id: 24,\n                label: "Item2-4"\n              },\n              {\n                id: 25,\n                label: "Item2-5"\n              }\n            ]\n          },\n          {\n            id: 3,\n            label: "Item3"\n          },\n          {\n            id: 4,\n            label: "Item4",\n            children: [\n              {\n                id: 41,\n                label: "Item4-1"\n              },\n              {\n                id: 42,\n                label: "Item4-2"\n              }\n            ]\n          },\n          {\n            id: 5,\n            label: "Item5",\n            children: [\n              {\n                id: 51,\n                label: "Item5-1"\n              }\n            ]\n          },\n          {\n            id: 6,\n            label: "Item6",\n            children: [\n              {\n                id: 61,\n                label: "Item6-1"\n              },\n              {\n                id: 62,\n                label: "Item6-2"\n              },\n              {\n                id: 63,\n                label: "Item6-3"\n              },\n              {\n                id: 64,\n                label: "Item6-4"\n              }\n            ]\n          }\n        ]\n      };\n    },\n    methods: {\n      getPanelTitle(props) {\n        if (props.type === "source") {\n          return props.level === 1 ? "全选" : props.parent.label;\n        }\n        else if (props.type === "target") {\n          return "已选";\n        }\n      },\n      getOptionLabel(props) {\n        if (props.type === "source") {\n          return props.option.label + " (" + props.option.id + ")";\n        }\n        else if (props.type === "target") {\n          return props.option.label + " (" + props.option.id + ")";\n        }\n      },\n      handleChange(value) {\n        this.value = value;\n      }\n    }\n  };\n<\/script>\n',value:[],options:[{id:1,label:"Item1"},{id:2,label:"Item2",children:[{id:21,label:"Item2-1"},{id:22,label:"Item2-2",children:[{id:221,label:"Item2-2-1"},{id:222,label:"Item2-2-2"},{id:223,label:"Item2-2-3"},{id:224,label:"Item2-2-4"}]},{id:23,label:"Item2-3"},{id:24,label:"Item2-4"},{id:25,label:"Item2-5"}]},{id:3,label:"Item3"},{id:4,label:"Item4",children:[{id:41,label:"Item4-1"},{id:42,label:"Item4-2"}]},{id:5,label:"Item5",children:[{id:51,label:"Item5-1"}]},{id:6,label:"Item6",children:[{id:61,label:"Item6-1"},{id:62,label:"Item6-2"},{id:63,label:"Item6-3"},{id:64,label:"Item6-4"}]}]}},methods:{getPanelTitle:function(e){return"source"===e.type?e.level>1?e.parent.label:"全选":"target"===e.type?"已选":void 0},getOptionLabel:function(e){return"source"===e.type||"target"===e.type?e.option.label+" ("+e.option.id+")":void 0},handleChange:function(e){this.value=e}}},o=n("2877"),r=Object(o.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("example",{attrs:{code:e.code,id:"example-cascade-transfer-basic-usage"}},[n("template",{slot:"demo"},[n("vui-cascade-transfer",{attrs:{valueKey:"id",checkedStrategy:"children",value:e.value,options:e.options,title:e.getPanelTitle,formatter:e.getOptionLabel,showChildrenCount:!0,searchable:!0},on:{change:e.handleChange}})],1),n("template",{slot:"title"},[e._v("基本用法")]),n("template",{slot:"description"},[n("p",[e._v("最基本的用法。")])])],2)}),[],!1,null,null,null).exports,v={mixins:[l.a],components:{Document:d.a,ExampleBasicUsage:r}},_=Object(o.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("document",[n("h1",[e._v("CascadeTransfer 级联穿梭框")]),n("p",[e._v("双栏级联穿梭选择框。")]),n("h2",[e._v("何时使用")]),n("ul",[n("li",[e._v("需要在多个可选项中进行多选时。")]),n("li",[e._v("相较于 "),n("code",[e._v("Select")]),e._v("，级联穿梭框占据更大的空间，可以展示可选项的更多信息。")])]),n("p",[e._v("级联穿梭选择框用直观的方式在两栏中移动元素，完成选择行为。")]),n("p",[e._v("选择一个或以上的选项后，可以把选中的选项移动到另一栏。其中，左边一栏为 "),n("code",[e._v("source")]),e._v("，右边一栏为 "),n("code",[e._v("target")]),e._v("，API 的设计也反映了这两个概念。")]),n("h2",[e._v("代码演示")])]),n("example-basic-usage"),n("document",[n("h2",{attrs:{id:"example-api"}},[e._v("API")]),n("h3",[e._v("CascadeTransfer 属性")]),n("table",{staticClass:"example-api-props"},[n("thead",[n("tr",[n("th",{attrs:{width:"200"}},[e._v("属性")]),n("th",[e._v("说明")]),n("th",{attrs:{width:"220"}},[e._v("类型")]),n("th",{attrs:{width:"220"}},[e._v("默认值")])])]),n("tbody",[n("tr",[n("td",[e._v("value")]),n("td",[e._v("选中项的 "),n("code",[e._v("value")]),e._v(" 值集合，显示在右侧一栏中，可以使用 "),n("code",[e._v("v-model")]),e._v(" 双向绑定数据")]),n("td",[e._v("Array")]),n("td",[e._v("[]")])]),n("tr",[n("td",[e._v("options")]),n("td",[e._v("可选项数据源，其中的数据将会被渲染到左侧一栏中")]),n("td",[e._v("Array")]),n("td",[e._v("[]")])]),n("tr",[n("td",[e._v("valueKey")]),n("td",[e._v("指定选项的 "),n("code",[e._v("value")]),e._v(" 值属性名")]),n("td",[e._v("String")]),n("td",[e._v("value")])]),n("tr",[n("td",[e._v("childrenKey")]),n("td",[e._v("指定选项的 "),n("code",[e._v("children")]),e._v(" 子选项属性名")]),n("td",[e._v("String")]),n("td",[e._v("children")])]),n("tr",[n("td",[e._v("title")]),n("td",[e._v("面板标题")]),n("td",[e._v("Function")]),n("td",[e._v('props => ""')])]),n("tr",[n("td",[e._v("formatter")]),n("td",[e._v("选项数据渲染函数，接收 "),n("code",[e._v("options")]),e._v(" 中的数据项作为参数")]),n("td",[e._v("Function | Scoped Slot")]),n("td",[e._v("option => option.label")])]),n("tr",[n("td",[e._v("checkedStrategy")]),n("td",[e._v("定义选中项回填的方式。为 "),n("code",[e._v("parent")]),e._v(" 时只显示父节点（当父节点下所有子节点都选中时），为 "),n("code",[e._v("children")]),e._v(" 时只显示选中的子节点")]),n("td",[e._v("String")]),n("td",[e._v("parent")])]),n("tr",[n("td",[e._v("showTargetPanel")]),n("td",[e._v("是否显示右侧栏")]),n("td",[e._v("Boolean")]),n("td",[e._v("true")])]),n("tr",[n("td",[e._v("showSelectAll")]),n("td",[e._v("是否显示全选勾选框")]),n("td",[e._v("Boolean")]),n("td",[e._v("true")])]),n("tr",[n("td",[e._v("showClear")]),n("td",[e._v("是否显示清空按钮")]),n("td",[e._v("Boolean")]),n("td",[e._v("true")])]),n("tr",[n("td",[e._v("showChildrenCount")]),n("td",[e._v("是否显示子选项数量")]),n("td",[e._v("Boolean")]),n("td",[e._v("false")])]),n("tr",[n("td",[e._v("searchable")]),n("td",[e._v("是否支持搜索")]),n("td",[e._v("Boolean")]),n("td",[e._v("false")])]),n("tr",[n("td",[e._v("filterOptionProp")]),n("td",[e._v("搜索时按 "),n("code",[e._v("option")]),e._v(" 的指定属性进行筛选，在设置了自定义 "),n("code",[e._v("filter")]),e._v(" 函数时可忽略此属性")]),n("td",[e._v("String")]),n("td",[e._v("label")])]),n("tr",[n("td",[e._v("filter")]),n("td",[e._v("自定义搜索函数，接收 "),n("code",[e._v("keyword")]),e._v("、"),n("code",[e._v("option")]),e._v(" 两个参数，若 "),n("code",[e._v("option")]),e._v(" 符合筛选条件，应返回 "),n("code",[e._v("true")]),e._v("，反之返回 "),n("code",[e._v("false")])]),n("td",[e._v("Function")]),n("td",[e._v("--")])]),n("tr",[n("td",[e._v("disabled")]),n("td",[e._v("是否禁用")]),n("td",[e._v("Boolean")]),n("td",[e._v("false")])]),n("tr",[n("td",[e._v("locale")]),n("td",[e._v("默认文案设置，目前包括清空按钮、搜索输入框占位文本、暂无数据等相关文案")]),n("td",[e._v("Object")]),n("td",[n("pre",{staticStyle:{margin:"0"}},[e._v('{\n  clear: "清空",\n  search: "请输入搜索内容",\n  notFound: "暂无数据"\n}\n')])])])])])])],1)}),[],!1,null,null,null);t.default=_.exports}}]);