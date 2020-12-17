webpackJsonp([52],{mGuC:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("xe5J"),l=n("Fy5V"),r=n("RLuK"),u={components:{Example:r.a},data:function(){return{code:'<template>\n  <vui-input-number :min="1" :max="10" v-model="value" />\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: 1\n      };\n    },\n    watch: {\n      value(value) {\n        console.log(value);\n      }\n    }\n  };\n<\/script>\n',value:1}},watch:{value:function(e){console.log(e)}}},v={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Example",{attrs:{vertical:"",id:"example-input-number-basic-usage"}},[n("template",{slot:"source"},[n("vui-input-number",{attrs:{min:1,max:10},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),n("template",{slot:"title"},[e._v("基本用法")]),n("template",{slot:"describe"},[n("p",[e._v("最简单的用法，可以通过输入、鼠标点击或键盘的上下键来改变数值大小。使用 "),n("code",[e._v("v-model")]),e._v(" 双向绑定数据。")])]),n("template",{slot:"code"},[e._v(e._s(e.code))])],2)},staticRenderFns:[]},o=n("VU/8")(u,v,!1,null,null,null).exports,i={components:{Example:r.a},data:function(){return{code:'<template>\n  <vui-input-number :min="0" :max="10" :step="0.1" v-model="value" />\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: 0\n      };\n    },\n    watch: {\n      value(value) {\n        console.log(value);\n      }\n    }\n  };\n<\/script>\n',value:0}},watch:{value:function(e){console.log(e)}}},d={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Example",{attrs:{vertical:"",id:"example-input-number-digit"}},[n("template",{slot:"source"},[n("vui-input-number",{attrs:{min:0,max:10,step:.1},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),n("template",{slot:"title"},[e._v("小数")]),n("template",{slot:"describe"},[n("p",[e._v("和原生的数字输入框一样，"),n("code",[e._v("value")]),e._v(" 的精度由 "),n("code",[e._v("step")]),e._v(" 的小数位数决定。")])]),n("template",{slot:"code"},[e._v(e._s(e.code))])],2)},staticRenderFns:[]},s=n("VU/8")(i,d,!1,null,null,null).exports,c={components:{Example:r.a},data:function(){return{code:'<template>\n  <div class="example-input-number-formatter">\n    <vui-input-number :min="0" :formatter="formatter1" :parser="parser1" v-model="value1" />\n    <vui-input-number :min="0" :max="100" :formatter="formatter2" :parser="parser2" v-model="value2" />\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value1: 1010,\n        value2: 60\n      };\n    },\n    watch: {\n      value1(value) {\n        console.log(value);\n      },\n      value2(value) {\n        console.log(value);\n      }\n    },\n    methods: {\n      formatter1(value) {\n        return ("$ " + value).replace(/\\B(?=(\\d{3})+(?!\\d))/g, ",");\n      },\n      parser1(value) {\n        return value.replace(/\\$\\s?|(,*)/g, "");\n      },\n      formatter2(value) {\n        return return value + "%";\n      },\n      parser2(value) {\n        return value.replace("%", "");\n      }\n    }\n  };\n<\/script>\n',value1:1010,value2:60}},watch:{value1:function(e){console.log(e)},value2:function(e){console.log(e)}},methods:{formatter1:function(e){return("$ "+e).replace(/\B(?=(\d{3})+(?!\d))/g,",")},parser1:function(e){return e.replace(/\$\s?|(,*)/g,"")},formatter2:function(e){return e+"%"},parser2:function(e){return e.replace("%","")}}},m={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Example",{attrs:{vertical:"",id:"example-input-number-formatter"}},[n("template",{slot:"source"},[n("div",{staticClass:"example-input-number-formatter"},[n("vui-input-number",{attrs:{min:0,formatter:e.formatter1,parser:e.parser1},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}}),n("vui-input-number",{attrs:{min:0,max:100,formatter:e.formatter2,parser:e.parser2},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}})],1)]),n("template",{slot:"title"},[e._v("格式化展示")]),n("template",{slot:"describe"},[n("p",[e._v("通过 "),n("code",[e._v("formatter")]),e._v(" 格式化数字，以展示具有具体含义的数据，往往需要配合 "),n("code",[e._v("parser")]),e._v(" 一起使用。")])]),n("template",{slot:"code"},[e._v(e._s(e.code))])],2)},staticRenderFns:[]};var p=n("VU/8")(c,m,!1,function(e){n("thj/")},null,null).exports,_={components:{Example:r.a},data:function(){return{code:'<template>\n  <div class="example-input-number-size">\n    <section>\n      <vui-radio-group type="button" v-model="size">\n        <vui-radio label="Small" value="small" />\n        <vui-radio label="Medium" value="medium" />\n        <vui-radio label="Large" value="large" />\n      </vui-radio-group>\n    </section>\n    <section style="margin-top: 15px;">\n      <vui-input-number :size="size" v-model="value" />\n    </section>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        size: "medium",\n        value: 1\n      };\n    },\n    watch: {\n      size(value) {\n        console.log(value);\n      },\n      value(value) {\n        console.log(value);\n      }\n    }\n  };\n<\/script>\n',size:"medium",value:1}},watch:{size:function(e){console.log(e)},value:function(e){console.log(e)}}},b={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Example",{attrs:{vertical:"",id:"example-input-number-size"}},[n("template",{slot:"source"},[n("div",{staticClass:"example-input-number-size"},[n("section",[n("vui-radio-group",{attrs:{type:"button"},model:{value:e.size,callback:function(t){e.size=t},expression:"size"}},[n("vui-radio",{attrs:{label:"Small",value:"small"}}),n("vui-radio",{attrs:{label:"Medium",value:"medium"}}),n("vui-radio",{attrs:{label:"Large",value:"large"}})],1)],1),n("section",{staticStyle:{"margin-top":"15px"}},[n("vui-input-number",{attrs:{size:e.size},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)])]),n("template",{slot:"title"},[e._v("尺寸")]),n("template",{slot:"describe"},[n("p",[e._v("三种大小的数字输入框。")])]),n("template",{slot:"code"},[e._v(e._s(e.code))])],2)},staticRenderFns:[]},f=n("VU/8")(_,b,!1,null,null,null).exports,x={components:{Example:r.a},data:function(){return{code:'<template>\n  <vui-input-number :min="1" :max="10" v-model="value" disabled />\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: 1\n      };\n    },\n    watch: {\n      value(value) {\n        console.log(value);\n      }\n    }\n  };\n<\/script>\n',value:1}},watch:{value:function(e){console.log(e)}}},h={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Example",{attrs:{vertical:"",id:"example-input-number-disabled"}},[n("template",{slot:"source"},[n("vui-input-number",{attrs:{min:1,max:10,disabled:""},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),n("template",{slot:"title"},[e._v("禁用")]),n("template",{slot:"describe"},[n("p",[e._v("通过添加 "),n("code",[e._v("disabled")]),e._v(" 属性将数字输入框设为禁用状态。")])]),n("template",{slot:"code"},[e._v(e._s(e.code))])],2)},staticRenderFns:[]},g=n("VU/8")(x,h,!1,null,null,null).exports,E={mixins:[a.a],components:{Markdown:l.a,ExampleInputNumberBasicUsage:o,ExampleInputNumberDigit:s,ExampleInputNumberFormatter:p,ExampleInputNumberSize:f,ExampleInputNumberDisabled:g}},w={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Markdown",[n("h1",[e._v("InputNumber 数字输入框")]),n("p",[e._v("通过鼠标或键盘输入内容，是最基础的表单域的包装。")]),n("h2",[e._v("何时使用")]),n("ul",[n("li",[e._v("需要用户输入表单域内容时；")]),n("li",[e._v("提供组合型输入框，带搜索的输入框，还可以进行大小选择。")])]),n("h2",[e._v("代码演示")])]),n("vui-row",{attrs:{gutter:20}},[n("vui-col",{attrs:{span:12}},[n("ExampleInputNumberBasicUsage"),n("ExampleInputNumberDigit"),n("ExampleInputNumberFormatter")],1),n("vui-col",{attrs:{span:12}},[n("ExampleInputNumberSize"),n("ExampleInputNumberDisabled")],1)],1),n("Markdown",[n("h2",{attrs:{id:"example-api"}},[e._v("API")]),n("h3",[e._v("InputNumber 属性")]),n("table",{staticClass:"example-api-props"},[n("thead",[n("tr",[n("th",{attrs:{width:"100"}},[e._v("属性")]),n("th",[e._v("说明")]),n("th",{attrs:{width:"150"}},[e._v("类型")]),n("th",{attrs:{width:"100"}},[e._v("默认值")])])]),n("tbody",[n("tr",[n("td",[e._v("size")]),n("td",[e._v("输入框尺寸，可选值为 "),n("code",[e._v("small")]),e._v("、"),n("code",[e._v("medium")]),e._v("、"),n("code",[e._v("large")]),e._v(" 或者不设")]),n("td",[e._v("String")]),n("td",[n("code",[e._v("medium")])])]),n("tr",[n("td",[e._v("placeholder")]),n("td",[e._v("输入框占位文本")]),n("td",[e._v("String")]),n("td",[e._v("--")])]),n("tr",[n("td",[e._v("value")]),n("td",[e._v("输入框内容，可以使用 "),n("code",[e._v("v-model")]),e._v(" 双向绑定数据")]),n("td",[e._v("Number")]),n("td",[e._v("--")])]),n("tr",[n("td",[e._v("min")]),n("td",[e._v("最小值")]),n("td",[e._v("Number")]),n("td",[n("code",[e._v("-Infinity")])])]),n("tr",[n("td",[e._v("max")]),n("td",[e._v("最大值")]),n("td",[e._v("Number")]),n("td",[n("code",[e._v("Infinity")])])]),n("tr",[n("td",[e._v("step")]),n("td",[e._v("每次改变的步伐，可以是小数")]),n("td",[e._v("Number")]),n("td",[n("code",[e._v("1")])])]),n("tr",[n("td",[e._v("precision")]),n("td",[e._v("数值精度，必须为 "),n("code",[e._v("0")]),e._v(" 或大于 "),n("code",[e._v("0")]),e._v(" 的整数")]),n("td",[e._v("Number")]),n("td",[e._v("--")])]),n("tr",[n("td",[e._v("formatter")]),n("td",[e._v("指定输入框展示值的格式")]),n("td",[e._v("Function")]),n("td",[e._v("--")])]),n("tr",[n("td",[e._v("parser")]),n("td",[e._v("指定从 "),n("code",[e._v("formatter")]),e._v(" 里转换回数字的方式，和 "),n("code",[e._v("formatter")]),e._v(" 搭配使用")]),n("td",[e._v("Function")]),n("td",[e._v("--")])]),n("tr",[n("td",[e._v("readonly")]),n("td",[e._v("设置输入框为只读状态")]),n("td",[e._v("Boolean")]),n("td",[n("code",[e._v("false")])])]),n("tr",[n("td",[e._v("disabled")]),n("td",[e._v("设置输入框为禁用状态")]),n("td",[e._v("Boolean")]),n("td",[n("code",[e._v("false")])])])])]),n("h3",[e._v("InputNumber 事件")]),n("table",{staticClass:"example-api-events"},[n("thead",[n("tr",[n("th",{attrs:{width:"100"}},[e._v("事件名")]),n("th",[e._v("说明")]),n("th",{attrs:{width:"150"}},[e._v("类型")]),n("th",{attrs:{width:"100"}},[e._v("回调参数")])])]),n("tbody",[n("tr",[n("td",[e._v("focus")]),n("td",[e._v("输入框获取焦点时触发的事件回调")]),n("td",[e._v("Function")]),n("td",[n("code",[e._v("event")])])]),n("tr",[n("td",[e._v("blur")]),n("td",[e._v("输入框失去焦点时触发的事件回调")]),n("td",[e._v("Function")]),n("td",[n("code",[e._v("event")])])]),n("tr",[n("td",[e._v("keydown")]),n("td",[e._v("键盘按下时触发的事件回调")]),n("td",[e._v("Function")]),n("td",[n("code",[e._v("event")])])]),n("tr",[n("td",[e._v("keyup")]),n("td",[e._v("键盘弹起时触发的事件回调")]),n("td",[e._v("Function")]),n("td",[n("code",[e._v("event")])])]),n("tr",[n("td",[e._v("input")]),n("td",[e._v("输入框数值变化时触发的事件回调，可以使用 "),n("code",[e._v("v-model")]),e._v(" 双向绑定数据")]),n("td",[e._v("Function")]),n("td",[n("code",[e._v("value")])])]),n("tr",[n("td",[e._v("change")]),n("td",[e._v("输入框数值变化时触发的事件回调")]),n("td",[e._v("Function")]),n("td",[n("code",[e._v("value")])])])])])])],1)},staticRenderFns:[]},z=n("VU/8")(E,w,!1,null,null,null);t.default=z.exports},"thj/":function(e,t){}});
//# sourceMappingURL=52.080928c62ee28976a75f.js.map