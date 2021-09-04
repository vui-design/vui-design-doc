webpackJsonp([56],{TfcR:function(t,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=d("q77b"),v=d("6WqV"),_={components:{Example:d("RLuK").a},data:function(){return{code:'<template>\n  <vui-card icon="menu-unfold" title="Card title">\n    <p>Card content...</p>\n    <p>Card content...</p>\n    <p>Card content...</p>\n    <a href="javascript:;" slot="extra">More</a>\n  </vui-card>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n',data:[{title:"Node 1",key:"1",icon:"emotion-happy",children:[{title:"Node 1-1",key:"1-1",icon:"emotion-happy",children:[{title:"Node 1-1-1",key:"1-1-1",icon:"emotion-happy"},{title:"Node 1-1-2",key:"1-1-2",icon:"emotion-happy"}]},{title:"Node 1-2",key:"1-2",icon:"emotion-happy"},{title:"Node 1-3",key:"1-3",icon:"emotion-happy",children:[{title:"Node 1-3-1",key:"1-3-1",icon:"emotion-happy"},{title:"Node 1-3-2",key:"1-3-2",icon:"emotion-happy"}]},{title:"Node 1-4",key:"1-4",icon:"emotion-happy"}]},{title:"Node 2",key:"2",icon:"emotion-happy",children:[{title:"Node 2-1",key:"2-1",icon:"emotion-happy"},{title:"Node 2-2",key:"2-2",icon:"emotion-happy"}]}],expendedKeys:["1"]}}},n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("example",{attrs:{code:this.code,id:"example-tree-basic-usage"}},[e("template",{slot:"demo"},[e("vui-tree",{attrs:{showIcon:"",checkable:"",data:this.data,expendedKeys:this.expendedKeys}})],1),e("template",{slot:"title"},[this._v("基本用法")]),e("template",{slot:"description"},[e("p",[this._v("省市区级联。")])])],2)},staticRenderFns:[]},a=d("VU/8")(_,n,!1,null,null,null).exports,c={mixins:[o.a],components:{Document:v.a,ExampleTreeBasicUsage:a}},i={render:function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("div",[d("document",[d("h1",[t._v("Tree 树形控件")]),d("p",[t._v("多层次的结构列表。")]),d("h2",[t._v("何时使用")]),d("p",[t._v("文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构。使用 "),d("code",[t._v("Tree")]),t._v(" 组件可以完整展现其中的层级关系，并具有展开收起选择等交互功能。")]),d("h2",[t._v("代码演示")])]),d("vui-row",{attrs:{gutter:20}},[d("vui-col",{attrs:{span:12}},[d("ExampleTreeBasicUsage")],1),d("vui-col",{attrs:{span:12}})],1),d("document",[d("h2",{attrs:{id:"example-api"}},[t._v("API")]),d("h3",[t._v("Tree 属性")]),d("table",{staticClass:"example-api-props"},[d("thead",[d("tr",[d("th",{attrs:{width:"150"}},[t._v("属性")]),d("th",[t._v("说明")]),d("th",{attrs:{width:"160"}},[t._v("类型")]),d("th",{attrs:{width:"150"}},[t._v("默认值")])])]),d("tbody",[d("tr",[d("td",[t._v("size")]),d("td",[t._v("选择框尺寸，可选值为 "),d("code",[t._v("small")]),t._v("、"),d("code",[t._v("medium")]),t._v("、"),d("code",[t._v("large")]),t._v(" 或者不设")]),d("td",[t._v("String")]),d("td",[d("code",[t._v("medium")])])]),d("tr",[d("td",[t._v("placeholder")]),d("td",[t._v("选择框占位文本")]),d("td",[t._v("String")]),d("td",[d("code",[t._v("请选择...")])])]),d("tr",[d("td",[t._v("value")]),d("td",[t._v("指定选中项目的 "),d("code",[t._v("value")]),t._v(" 值集合，可以使用 "),d("code",[t._v("v-model")]),t._v(" 双向绑定数据")]),d("td",[t._v("Array")]),d("td",[d("code",[t._v("[]")])])]),d("tr",[d("td",[t._v("backfillOptionProp")]),d("td",[t._v("回填到选择框的 "),d("code",[t._v("Option")]),t._v(" 的属性值，可选值为 "),d("code",[t._v("label")]),t._v("、"),d("code",[t._v("value")]),t._v("、"),d("code",[t._v("children")]),t._v(" 或者不设")]),d("td",[t._v("String | Function")]),d("td",[d("code",[t._v("children")])])]),d("tr",[d("td",[t._v("maxTagCount")]),d("td",[t._v("多选模式下选择框中最多显示多少个 "),d("code",[t._v("tag")]),t._v(" 标签")]),d("td",[t._v("Number")]),d("td",[t._v("--")])]),d("tr",[d("td",[t._v("maxTagPlaceholder")]),d("td",[t._v("隐藏剩余 "),d("code",[t._v("tag")]),t._v(" 标签时显示的内容，参数为剩余数量")]),d("td",[t._v("Function")]),d("td",[t._v("--")])]),d("tr",[d("td",[t._v("allowCreate")]),d("td",[t._v("多选模式下是否允许用户创建新的项目")]),d("td",[t._v("Boolean")]),d("td",[d("code",[t._v("false")])])]),d("tr",[d("td",[t._v("searchable")]),d("td",[t._v("是否支持搜索")]),d("td",[t._v("Boolean")]),d("td",[d("code",[t._v("false")])])]),d("tr",[d("td",[t._v("filter")]),d("td",[t._v("是否根据输入关键字进行筛选。当其为一个函数时，会接收 "),d("code",[t._v("keyword")]),t._v("、"),d("code",[t._v("option")]),t._v(" 两个参数，当 "),d("code",[t._v("option")]),t._v(" 符合条件时，应返回 "),d("code",[t._v("true")]),t._v("，反之返回 "),d("code",[t._v("false")])]),d("td",[t._v("Boolean | Function")]),d("td",[d("code",[t._v("true")])])]),d("tr",[d("td",[t._v("filterOptionProp")]),d("td",[t._v("搜索时过滤对应的 "),d("code",[t._v("Option")]),t._v(" 属性，如设置为 "),d("code",[t._v("children")]),t._v(" 表示对内嵌内容进行搜索，可选值为 "),d("code",[t._v("label")]),t._v("、"),d("code",[t._v("value")]),t._v("、"),d("code",[t._v("children")]),t._v(" 或者不设")]),d("td",[t._v("String")]),d("td",[d("code",[t._v("children")])])]),d("tr",[d("td",[t._v("loading")]),d("td",[t._v("是否处于 "),d("code",[t._v("loading")]),t._v(" 状态（即当前是否正在进行远程搜索）")]),d("td",[t._v("Boolean")]),d("td",[d("code",[t._v("false")])])]),d("tr",[d("td",[t._v("loadingText")]),d("td",[t._v("远程搜索中的文字提示")]),d("td",[t._v("String")]),d("td",[d("code",[t._v("加载中...")])])]),d("tr",[d("td",[t._v("notFoundText")]),d("td",[t._v("选项为空时的文字提示")]),d("td",[t._v("String")]),d("td",[d("code",[t._v("暂无数据")])])]),d("tr",[d("td",[t._v("autoClearKeyword")]),d("td",[t._v("是否在选中选项后自动清空搜索关键字，只在多选模式下有效")]),d("td",[t._v("Boolean")]),d("td",[d("code",[t._v("true")])])]),d("tr",[d("td",[t._v("clearable")]),d("td",[t._v("是否允许清空已选选项")]),d("td",[t._v("Boolean")]),d("td",[d("code",[t._v("false")])])]),d("tr",[d("td",[t._v("disabled")]),d("td",[t._v("是否禁用")]),d("td",[t._v("Boolean")]),d("td",[d("code",[t._v("false")])])]),d("tr",[d("td",[t._v("placement")]),d("td",[t._v("选项弹出位置，可选值为 "),d("code",[t._v("top")]),t._v("、"),d("code",[t._v("top-start")]),t._v("、"),d("code",[t._v("top-end")]),t._v("、"),d("code",[t._v("bottom")]),t._v("、"),d("code",[t._v("bottom-start")]),t._v("、"),d("code",[t._v("bottom-end")]),t._v(" 或者不设")]),d("td",[t._v("String")]),d("td",[d("code",[t._v("bottom-start")])])]),d("tr",[d("td",[t._v("getPopupContainer")]),d("td",[t._v("指定选项弹框挂载的 HTML 节点")]),d("td",[t._v("Function")]),d("td",[d("code",[t._v("() => document.body")])])])])]),d("h3",[t._v("Tree 事件")]),d("table",{staticClass:"example-api-events"},[d("thead",[d("tr",[d("th",{attrs:{width:"150"}},[t._v("事件名")]),d("th",[t._v("说明")]),d("th",{attrs:{width:"160"}},[t._v("类型")]),d("th",{attrs:{width:"150"}},[t._v("回调参数")])])]),d("tbody",[d("tr",[d("td",[t._v("focus")]),d("td",[t._v("选择框获得光标时触发的事件回调")]),d("td",[t._v("Function")]),d("td",[t._v("--")])]),d("tr",[d("td",[t._v("blur")]),d("td",[t._v("选择框失去光标时触发的事件回调")]),d("td",[t._v("Function")]),d("td",[t._v("--")])]),d("tr",[d("td",[t._v("search")]),d("td",[t._v("搜索关键字发生变化时触发的事件回调")]),d("td",[t._v("Function")]),d("td",[d("code",[t._v("keyword")])])]),d("tr",[d("td",[t._v("input")]),d("td",[t._v("选中项发生变化时触发的事件回调，可以使用 "),d("code",[t._v("v-model")]),t._v(" 双向绑定数据")]),d("td",[t._v("Function")]),d("td",[d("code",[t._v("value")])])]),d("tr",[d("td",[t._v("change")]),d("td",[t._v("选中项发生变化时触发的事件回调")]),d("td",[t._v("Function")]),d("td",[d("code",[t._v("value")])])])])])])],1)},staticRenderFns:[]},r=d("VU/8")(c,i,!1,null,null,null);e.default=r.exports}});
//# sourceMappingURL=56.a2d5740dc2db8b902264.js.map