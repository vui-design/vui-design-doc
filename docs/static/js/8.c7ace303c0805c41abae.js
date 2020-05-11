webpackJsonp([8],{"0f1r":function(t,e){},"8xft":function(t,e){},FyUz:function(t,e){},IvL9:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("xe5J"),l=n("Fy5V"),a=n("RLuK"),p={components:{Example:a.a},data:function(){return{code:'<template>\n  <vui-input v-model="value" placeholder="Basic usage" />\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: ""\n      };\n    }\n  };\n<\/script>\n',value:""}}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("Example",{attrs:{vertical:"",id:"example-input-basic-usage"}},[e("template",{slot:"source"},[e("vui-datepicker",{staticStyle:{width:"200px"}})],1),e("template",{slot:"title"},[this._v("基本用法")]),e("template",{slot:"describe"},[e("p",[this._v("最简单的用法，可以使用 "),e("code",[this._v("v-model")]),this._v(" 双向绑定数据。")])]),e("template",{slot:"code"},[this._v(this._s(this.code))])],2)},staticRenderFns:[]},s=n("VU/8")(p,r,!1,null,null,null).exports,u={components:{Example:a.a},data:function(){return{code:'<template>\n  <div class="example-input-prepend-append">\n    <vui-input prepend="https://github.com/u/" placeholder="Enter something..." />\n    <vui-input append="@qq.com" placeholder="Enter something..." />\n    <vui-input placeholder="Enter something...">\n      <template slot="prepend">https://</template>\n      <template slot="append">.com</template>\n    </vui-input>\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-input-prepend-append > .vui-input:not(:first-child) { margin-top:20px; }\n</style>\n'}}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Example",{attrs:{vertical:"",id:"example-input-prepend-append"}},[n("template",{slot:"source"},[n("div",{staticClass:"example-input-prepend-append"},[n("vui-input",{attrs:{prepend:"https://github.com/u/",placeholder:"Enter something..."}}),n("vui-input",{attrs:{append:"@qq.com",placeholder:"Enter something..."}}),n("vui-input",{attrs:{placeholder:"Enter something..."}},[n("template",{slot:"prepend"},[t._v("https://")]),n("template",{slot:"append"},[t._v(".com")])],2)],1)]),n("template",{slot:"title"},[t._v("前置/后置标签")]),n("template",{slot:"describe"},[n("p",[t._v("通过设置 "),n("code",[t._v("prepend")]),t._v(" 和 "),n("code",[t._v("append")]),t._v(" 或同名插槽设置前置/后置标签。")])]),n("template",{slot:"code"},[t._v(t._s(t.code))])],2)},staticRenderFns:[]};var d=n("VU/8")(u,o,!1,function(t){n("0f1r")},null,null).exports,v={components:{Example:a.a},data:function(){return{code:'<template>\n  <div class="example-input-prefix-suffix">\n    <vui-input prefix="mic" placeholder="Enter something..." />\n    <vui-input suffix="calendar" placeholder="Enter something..." />\n    <vui-input placeholder="Enter something...">\n      <vui-icon slot="prefix" type="group" />\n      <vui-tooltip slot="suffix" content="Extra Information">\n        <vui-icon type="info" />\n      </vui-tooltip>\n    </vui-input>\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-input-prefix-suffix > .vui-input:not(:first-child) { margin-top:20px; }\n</style>\n'}}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Example",{attrs:{vertical:"",id:"example-input-prefix-suffix"}},[n("template",{slot:"source"},[n("div",{staticClass:"example-input-prefix-suffix"},[n("vui-input",{attrs:{prefix:"mic",placeholder:"Enter something..."}}),n("vui-input",{attrs:{suffix:"calendar",placeholder:"Enter something..."}}),n("vui-input",{attrs:{placeholder:"Enter something..."}},[n("vui-icon",{attrs:{slot:"prefix",type:"group"},slot:"prefix"}),n("vui-tooltip",{attrs:{slot:"suffix",content:"Extra Information"},slot:"suffix"},[n("vui-icon",{attrs:{type:"info"}})],1)],1)],1)]),n("template",{slot:"title"},[t._v("前缀/后缀图标")]),n("template",{slot:"describe"},[n("p",[t._v("通过设置 "),n("code",[t._v("prefix")]),t._v(" 和 "),n("code",[t._v("suffix")]),t._v(" 或同名插槽设置前缀/后缀图标。")])]),n("template",{slot:"code"},[t._v(t._s(t.code))])],2)},staticRenderFns:[]};var m=n("VU/8")(v,c,!1,function(t){n("8xft")},null,null).exports,_={components:{Example:a.a},data:function(){return{code:'<template>\n  <vui-input type="password" v-model="value" showPasswordToggler placeholder="Please enter password..." />\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: ""\n      };\n    }\n  };\n<\/script>\n',value:""}}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Example",{attrs:{vertical:"",id:"example-input-password"}},[n("template",{slot:"source"},[n("vui-input",{attrs:{type:"password",showPasswordToggler:"",placeholder:"Please enter password..."},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),n("template",{slot:"title"},[t._v("密码框")]),n("template",{slot:"describe"},[n("p",[t._v("密码框，开启 "),n("code",[t._v("showPasswordToggler")]),t._v(" 属性可以切换显示隐藏密码。")])]),n("template",{slot:"code"},[t._v(t._s(t.code))])],2)},staticRenderFns:[]},x=n("VU/8")(_,h,!1,null,null,null).exports,f={components:{Example:a.a},data:function(){return{code:'<template>\n  <vui-input v-model="value" clearable placeholder="Enter something..." />\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: ""\n      };\n    }\n  };\n<\/script>\n',value:""}}},g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Example",{attrs:{vertical:"",id:"example-input-clearable"}},[n("template",{slot:"source"},[n("vui-input",{attrs:{clearable:"",placeholder:"Enter something..."},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),n("template",{slot:"title"},[t._v("可清空")]),n("template",{slot:"describe"},[n("p",[t._v("含有清空图标的输入框，点击图标清空所有内容。")])]),n("template",{slot:"code"},[t._v(t._s(t.code))])],2)},staticRenderFns:[]},E=n("VU/8")(f,g,!1,null,null,null).exports,b={components:{Example:a.a},data:function(){return{code:'<template>\n  <div class="example-input-size">\n    <vui-input size="large" placeholder="大" />\n    <vui-input placeholder="默认" />\n    <vui-input size="small" placeholder="小" />\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-input-size > .vui-input { width:140px; margin-right:10px; }\n</style>\n',size:"medium"}}},y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Example",{attrs:{vertical:"",id:"example-input-size"}},[n("template",{slot:"source"},[n("div",{staticClass:"example-input-size"},[n("section",[n("vui-radio-group",{attrs:{type:"button"},model:{value:t.size,callback:function(e){t.size=e},expression:"size"}},[n("vui-radio",{attrs:{label:"Small",value:"small"}}),n("vui-radio",{attrs:{label:"Medium",value:"medium"}}),n("vui-radio",{attrs:{label:"Large",value:"large"}})],1)],1),n("section",[n("vui-input",{attrs:{size:t.size,placeholder:"Enter something..."}}),n("vui-input",{attrs:{size:t.size,suffix:"calendar",placeholder:"Enter something..."}}),n("vui-input",{attrs:{size:t.size,append:"@qq.com",placeholder:"Enter something..."}})],1)])]),n("template",{slot:"title"},[t._v("尺寸")]),n("template",{slot:"describe"},[n("p",[t._v("提供三种尺寸：大、中（默认）、小。")])]),n("template",{slot:"code"},[t._v(t._s(t.code))])],2)},staticRenderFns:[]};var w=n("VU/8")(b,y,!1,function(t){n("FyUz")},null,null).exports,S={components:{Example:a.a},data:function(){return{code:'<template>\n  <div class="example-input-disabled">\n    <vui-input placeholder="Enter something..." disabled />\n    <vui-input prepend="https://github.com/u/" placeholder="Enter something..." disabled />\n    <vui-input prefix="mic" placeholder="Enter something..." disabled />\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-input-disabled > .vui-input:not(:first-child) { margin-top:20px; }\n</style>\n'}}},I={render:function(){var t=this.$createElement,e=this._self._c||t;return e("Example",{attrs:{vertical:"",id:"example-input-disabled"}},[e("template",{slot:"source"},[e("div",{staticClass:"example-input-disabled"},[e("vui-input",{attrs:{placeholder:"Enter something...",disabled:""}}),e("vui-input",{attrs:{prepend:"https://github.com/u/",placeholder:"Enter something...",disabled:""}}),e("vui-input",{attrs:{prefix:"mic",placeholder:"Enter something...",disabled:""}})],1)]),e("template",{slot:"title"},[this._v("禁用状态")]),e("template",{slot:"describe"},[e("p",[this._v("通过添加 "),e("code",[this._v("disabled")]),this._v(" 属性将文本框设为禁用状态。")])]),e("template",{slot:"code"},[this._v(this._s(this.code))])],2)},staticRenderFns:[]};var z=n("VU/8")(S,I,!1,function(t){n("qdKg")},null,null).exports,F={components:{Example:a.a},data:function(){return{code:'<template>\n  <div class="example-input-group">\n    <vui-input-group>\n      <vui-input placeholder="Enter something..." />\n      <vui-button>Search</vui-button>\n    </vui-input-group>\n    <vui-input-group compact>\n      <vui-input placeholder="Enter something..." />\n      <vui-button>Search</vui-button>\n    </vui-input-group>\n    <vui-input-group>\n      <vui-input value="0571" style="width: 80px;" />\n      <vui-input placeholder="Please enter phone number..." style="width: 220px;" />\n    </vui-input-group>\n    <vui-input-group compact>\n      <vui-input value="0571" style="width: 80px;" />\n      <vui-input placeholder="Please enter phone number..." style="width: 220px;" />\n    </vui-input-group>\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-input-group > .vui-input-group:not(:first-child) { margin-top:20px; }\n</style>\n'}}},P={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Example",{attrs:{vertical:"",id:"example-input-group"}},[n("template",{slot:"source"},[n("div",{staticClass:"example-input-group"},[n("vui-input-group",[n("vui-input",{attrs:{placeholder:"Enter something..."}}),n("vui-button",[t._v("Search")])],1),n("vui-input-group",{attrs:{compact:""}},[n("vui-input",{attrs:{placeholder:"Enter something..."}}),n("vui-button",[t._v("Search")])],1),n("vui-input-group",[n("vui-input",{staticStyle:{width:"80px"},attrs:{value:"0571"}}),n("vui-input",{staticStyle:{width:"220px"},attrs:{placeholder:"Please enter phone number..."}})],1),n("vui-input-group",{attrs:{compact:""}},[n("vui-input",{staticStyle:{width:"80px"},attrs:{value:"0571"}}),n("vui-input",{staticStyle:{width:"220px"},attrs:{placeholder:"Please enter phone number..."}})],1)],1)]),n("template",{slot:"title"},[t._v("复合型输入框")]),n("template",{slot:"describe"},[n("p",[t._v("输入框的组合展现。设置 "),n("code",[t._v("compact")]),t._v(" 属性可以启用紧凑模式。")]),n("p",[t._v("复合型输入框中的组件宽度默认为自动适应，可以通过 "),n("code",[t._v("style")]),t._v(" 属性自行设置宽度。")])]),n("template",{slot:"code"},[t._v(t._s(t.code))])],2)},staticRenderFns:[]};var U=n("VU/8")(F,P,!1,function(t){n("dUIB")},null,null).exports,k={mixins:[i.a],components:{Markdown:l.a,ExampleInputBasicUsage:s,ExampleInputPrependAppend:d,ExampleInputPrefixSuffix:m,ExampleInputPassword:x,ExampleInputClearable:E,ExampleInputSize:w,ExampleInputDisabled:z,ExampleInputGroup:U}},R={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Markdown",[n("h1",[t._v("Input 输入框")]),n("p",[t._v("通过鼠标或键盘输入内容，是最基础的表单域的包装。")]),n("h2",[t._v("何时使用")]),n("ul",[n("li",[t._v("需要用户输入表单域内容时；")]),n("li",[t._v("提供组合型输入框，带搜索的输入框，还可以进行大小选择。")])]),n("h2",[t._v("代码演示")])]),n("vui-row",{attrs:{gutter:20}},[n("vui-col",{attrs:{span:12}},[n("ExampleInputBasicUsage"),n("ExampleInputPrependAppend"),n("ExampleInputPrefixSuffix"),n("ExampleInputPassword")],1),n("vui-col",{attrs:{span:12}},[n("ExampleInputClearable"),n("ExampleInputSize"),n("ExampleInputDisabled"),n("ExampleInputGroup")],1)],1),n("Markdown",[n("h2",{attrs:{id:"example-api"}},[t._v("API")]),n("h3",[t._v("Input 属性")]),n("table",{staticClass:"example-api-props"},[n("thead",[n("tr",[n("th",{attrs:{width:"100"}},[t._v("属性")]),n("th",[t._v("说明")]),n("th",{attrs:{width:"150"}},[t._v("类型")]),n("th",{attrs:{width:"100"}},[t._v("默认值")])])]),n("tbody",[n("tr",[n("td",[t._v("type")]),n("td",[t._v("输入框类型，同原生 "),n("code",[t._v("input")]),t._v(" 标签的 "),n("code",[t._v("type")]),t._v(" 属性")]),n("td",[t._v("String")]),n("td",[n("code",[t._v("text")])])]),n("tr",[n("td",[t._v("prepend")]),n("td",[t._v("设置前置标签")]),n("td",[t._v("String | Slot")]),n("td",[t._v("--")])]),n("tr",[n("td",[t._v("append")]),n("td",[t._v("设置后置标签")]),n("td",[t._v("String | Slot")]),n("td",[t._v("--")])]),n("tr",[n("td",[t._v("prefix")]),n("td",[t._v("设置前缀图标类型/图标")]),n("td",[t._v("String | Slot")]),n("td",[t._v("--")])]),n("tr",[n("td",[t._v("suffix")]),n("td",[t._v("设置后缀图标类型/图标")]),n("td",[t._v("String | Slot")]),n("td",[t._v("--")])]),n("tr",[n("td",[t._v("size")]),n("td",[t._v("输入框尺寸，可选值为 "),n("code",[t._v("small")]),t._v("、"),n("code",[t._v("medium")]),t._v("、"),n("code",[t._v("large")]),t._v(" 或者不设")]),n("td",[t._v("String")]),n("td",[n("code",[t._v("medium")])])]),n("tr",[n("td",[t._v("placeholder")]),n("td",[t._v("输入框占位文本")]),n("td",[t._v("String | Number")]),n("td",[t._v("--")])]),n("tr",[n("td",[t._v("value")]),n("td",[t._v("输入框内容，可以使用 "),n("code",[t._v("v-model")]),t._v(" 双向绑定数据")]),n("td",[t._v("String | Number")]),n("td",[t._v("--")])]),n("tr",[n("td",[t._v("maxLength")]),n("td",[t._v("最大输入长度")]),n("td",[t._v("String | Number")]),n("td",[t._v("--")])]),n("tr",[n("td",[t._v("clearable")]),n("td",[t._v("是否显示清空按钮")]),n("td",[t._v("Boolean")]),n("td",[n("code",[t._v("false")])])]),n("tr",[n("td",[t._v("togglable")]),n("td",[t._v("是否显示切换密码状态按钮，仅在 "),n("code",[t._v("type")]),t._v(" 为 "),n("code",[t._v("password")]),t._v(" 时有效")]),n("td",[t._v("Boolean")]),n("td",[n("code",[t._v("false")])])]),n("tr",[n("td",[t._v("readonly")]),n("td",[t._v("设置文本框为只读状态")]),n("td",[t._v("Boolean")]),n("td",[n("code",[t._v("false")])])]),n("tr",[n("td",[t._v("disabled")]),n("td",[t._v("设置文本框为禁用状态")]),n("td",[t._v("Boolean")]),n("td",[n("code",[t._v("false")])])])])]),n("h3",[t._v("Input 事件")]),n("table",{staticClass:"example-api-events"},[n("thead",[n("tr",[n("th",{attrs:{width:"100"}},[t._v("事件名")]),n("th",[t._v("说明")]),n("th",{attrs:{width:"150"}},[t._v("类型")]),n("th",{attrs:{width:"100"}},[t._v("回调参数")])])]),n("tbody",[n("tr",[n("td",[t._v("mouseenter")]),n("td",[t._v("鼠标移入文本框时触发的事件回调")]),n("td",[t._v("Function")]),n("td",[n("code",[t._v("event")])])]),n("tr",[n("td",[t._v("mouseleave")]),n("td",[t._v("鼠标移出文本框时触发的事件回调")]),n("td",[t._v("Function")]),n("td",[n("code",[t._v("event")])])]),n("tr",[n("td",[t._v("focus")]),n("td",[t._v("文本框获取焦点时触发的事件回调")]),n("td",[t._v("Function")]),n("td",[n("code",[t._v("event")])])]),n("tr",[n("td",[t._v("blur")]),n("td",[t._v("文本框失去焦点时触发的事件回调")]),n("td",[t._v("Function")]),n("td",[n("code",[t._v("event")])])]),n("tr",[n("td",[t._v("keydown")]),n("td",[t._v("键盘按下时触发的事件回调")]),n("td",[t._v("Function")]),n("td",[n("code",[t._v("event")])])]),n("tr",[n("td",[t._v("keyup")]),n("td",[t._v("键盘弹起时触发的事件回调")]),n("td",[t._v("Function")]),n("td",[n("code",[t._v("event")])])]),n("tr",[n("td",[t._v("change")]),n("td",[t._v("文本框内容变化时触发的事件回调")]),n("td",[t._v("Function")]),n("td",[n("code",[t._v("event")])])]),n("tr",[n("td",[t._v("clear")]),n("td",[t._v("点击清空按钮时触发的事件回调")]),n("td",[t._v("Function")]),n("td",[n("code",[t._v("event")])])]),n("tr",[n("td",[t._v("input")]),n("td",[t._v("文本框内容输入时触发的事件回调，可以使用 "),n("code",[t._v("v-model")]),t._v(" 双向绑定数据")]),n("td",[t._v("Function")]),n("td",[n("code",[t._v("value")])])])])])])],1)},staticRenderFns:[]},V=n("VU/8")(k,R,!1,null,null,null);e.default=V.exports},dUIB:function(t,e){},qdKg:function(t,e){}});
//# sourceMappingURL=8.c7ace303c0805c41abae.js.map