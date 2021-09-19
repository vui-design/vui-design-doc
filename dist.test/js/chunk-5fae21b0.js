(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5fae21b0"],{"0cbe":function(t,e,n){},1788:function(t,e,n){"use strict";n.r(e);var i=n("d58b"),l=n("240e"),a=n("1a42"),p={components:{Example:a.a},data:function(){return{code:'<template>\n  <vui-input v-model="value" placeholder="Basic usage" />\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: ""\n      };\n    }\n  };\n<\/script>\n',value:""}}},u=n("2877"),o=Object(u.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("example",{attrs:{code:t.code,id:"example-input-basic-usage"}},[n("template",{slot:"demo"},[n("vui-input",{attrs:{placeholder:"Basic usage"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),n("template",{slot:"title"},[t._v("基本用法")]),n("template",{slot:"description"},[n("p",[t._v("最简单的用法，可以使用 "),n("code",[t._v("v-model")]),t._v(" 双向绑定数据。")])])],2)}),[],!1,null,null,null).exports,r={components:{Example:a.a},data:function(){return{code:'<template>\n  <div class="example-input-prepend-append">\n    <vui-input prepend="https://github.com/u/" placeholder="Enter something..." />\n    <vui-input append="@qq.com" placeholder="Enter something..." />\n    <vui-input placeholder="Enter something...">\n      <template slot="prepend">https://</template>\n      <template slot="append">.com</template>\n    </vui-input>\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-input-prepend-append .vui-input:not(:first-child) { margin-top:24px; }\n</style>\n'}}},s=(n("c226"),Object(u.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("example",{attrs:{code:t.code,id:"example-input-prepend-append"}},[n("template",{slot:"demo"},[n("div",{staticClass:"example-input-prepend-append"},[n("vui-input",{attrs:{prepend:"https://github.com/u/",placeholder:"Enter something..."}}),n("vui-input",{attrs:{append:"@qq.com",placeholder:"Enter something..."}}),n("vui-input",{attrs:{placeholder:"Enter something..."}},[n("template",{slot:"prepend"},[t._v("https://")]),n("template",{slot:"append"},[t._v(".com")])],2)],1)]),n("template",{slot:"title"},[t._v("前置/后置标签")]),n("template",{slot:"description"},[n("p",[t._v("通过设置 "),n("code",[t._v("prepend")]),t._v(" 和 "),n("code",[t._v("append")]),t._v(" 或同名插槽设置前置/后置标签。")])])],2)}),[],!1,null,null,null).exports),d={components:{Example:a.a},data:function(){return{code:'<template>\n  <div class="example-input-prefix-suffix">\n    <vui-input prefix="mic" placeholder="Enter something..." />\n    <vui-input suffix="calendar" placeholder="Enter something..." />\n    <vui-input placeholder="Enter something...">\n      <vui-icon slot="prefix" type="group" />\n      <vui-tooltip slot="suffix" content="Extra Information">\n        <vui-icon type="info" />\n      </vui-tooltip>\n    </vui-input>\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-input-prefix-suffix .vui-input:not(:first-child) { margin-top:24px; }\n</style>\n'}}},v=(n("7f5a"),Object(u.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("example",{attrs:{code:this.code,id:"example-input-prefix-suffix"}},[e("template",{slot:"demo"},[e("div",{staticClass:"example-input-prefix-suffix"},[e("vui-input",{attrs:{prefix:"mic",placeholder:"Enter something..."}}),e("vui-input",{attrs:{suffix:"calendar",placeholder:"Enter something..."}}),e("vui-input",{attrs:{placeholder:"Enter something..."}},[e("vui-icon",{attrs:{slot:"prefix",type:"group"},slot:"prefix"}),e("vui-tooltip",{attrs:{slot:"suffix",content:"Extra Information"},slot:"suffix"},[e("vui-icon",{attrs:{type:"info"}})],1)],1)],1)]),e("template",{slot:"title"},[this._v("前缀/后缀图标")]),e("template",{slot:"description"},[e("p",[this._v("通过设置 "),e("code",[this._v("prefix")]),this._v(" 和 "),e("code",[this._v("suffix")]),this._v(" 或同名插槽设置前缀/后缀图标。")])])],2)}),[],!1,null,null,null).exports),c={components:{Example:a.a},data:function(){return{code:'<template>\n  <vui-input v-model="value" type="password" placeholder="Please enter password..." />\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: ""\n      };\n    }\n  };\n<\/script>\n',value:""}}},m=Object(u.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("example",{attrs:{code:t.code,id:"example-input-password"}},[n("template",{slot:"demo"},[n("vui-input",{attrs:{type:"password",placeholder:"Please enter password..."},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),n("template",{slot:"title"},[t._v("密码框")]),n("template",{slot:"description"},[n("p",[t._v("密码框，可以切换显示隐藏密码。")])])],2)}),[],!1,null,null,null).exports,_={components:{Example:a.a},data:function(){return{code:'<template>\n  <vui-input v-model="value" clearable placeholder="Enter something..." />\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: ""\n      };\n    }\n  };\n<\/script>\n',value:""}}},h=Object(u.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("example",{attrs:{code:t.code,id:"example-input-clearable"}},[n("template",{slot:"demo"},[n("vui-input",{attrs:{clearable:"",placeholder:"Enter something..."},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),n("template",{slot:"title"},[t._v("可清空")]),n("template",{slot:"description"},[n("p",[t._v("含有清空图标的输入框，点击图标清空所有内容。")])])],2)}),[],!1,null,null,null).exports,x={components:{Example:a.a},data:function(){return{code:'<template>\n  <div class="example-input-size">\n    <section>\n      <vui-radio-group type="button" v-model="size">\n        <vui-radio label="Small" value="small" />\n        <vui-radio label="Medium" value="medium" />\n        <vui-radio label="Large" value="large" />\n      </vui-radio-group>\n    </section>\n    <section>\n      <vui-input v-bind:size="size" placeholder="Enter something..." />\n      <vui-input v-bind:size="size" suffix="calendar" placeholder="Enter something..." />\n      <vui-input v-bind:size="size" append="@qq.com" placeholder="Enter something..." />\n    </section>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        size: "medium"\n      };\n    }\n  };\n<\/script>\n\n<style>\n  .example-input-size section + section{ margin-top:24px; }\n  .example-input-size .vui-input + .vui-input { margin-top:24px; }\n</style>\n',size:"medium"}}},f=(n("8663"),Object(u.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("example",{attrs:{code:t.code,id:"example-input-size"}},[n("template",{slot:"demo"},[n("div",{staticClass:"example-input-size"},[n("section",[n("vui-radio-group",{attrs:{type:"button"},model:{value:t.size,callback:function(e){t.size=e},expression:"size"}},[n("vui-radio",{attrs:{label:"Small",value:"small"}}),n("vui-radio",{attrs:{label:"Medium",value:"medium"}}),n("vui-radio",{attrs:{label:"Large",value:"large"}})],1)],1),n("section",[n("vui-input",{attrs:{size:t.size,placeholder:"Enter something..."}}),n("vui-input",{attrs:{size:t.size,suffix:"calendar",placeholder:"Enter something..."}}),n("vui-input",{attrs:{size:t.size,append:"@qq.com",placeholder:"Enter something..."}})],1)])]),n("template",{slot:"title"},[t._v("尺寸")]),n("template",{slot:"description"},[n("p",[t._v("提供三种尺寸：大、中（默认）、小。")])])],2)}),[],!1,null,null,null).exports),g={components:{Example:a.a},data:function(){return{code:'<template>\n  <div class="example-input-disabled">\n    <vui-input disabled placeholder="Enter something..." />\n    <vui-input disabled prepend="https://github.com/u/" placeholder="Enter something..." />\n    <vui-input disabled prefix="mic" placeholder="Enter something..." />\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-input-disabled .vui-input:not(:first-child) { margin-top:24px; }\n</style>\n'}}},b=(n("34aa"),Object(u.a)(g,(function(){var t=this.$createElement,e=this._self._c||t;return e("example",{attrs:{code:this.code,id:"example-input-disabled"}},[e("template",{slot:"demo"},[e("div",{staticClass:"example-input-disabled"},[e("vui-input",{attrs:{disabled:"",placeholder:"Enter something..."}}),e("vui-input",{attrs:{disabled:"",prepend:"https://github.com/u/",placeholder:"Enter something..."}}),e("vui-input",{attrs:{disabled:"",prefix:"mic",placeholder:"Enter something..."}})],1)]),e("template",{slot:"title"},[this._v("禁用状态")]),e("template",{slot:"description"},[e("p",[this._v("通过添加 "),e("code",[this._v("disabled")]),this._v(" 属性将文本框设为禁用状态。")])])],2)}),[],!1,null,null,null).exports),E={components:{Example:a.a},data:function(){return{code:'<template>\n  <div class="example-input-group">\n    <vui-input-group>\n      <vui-input placeholder="Enter something..." />\n      <vui-button>Search</vui-button>\n    </vui-input-group>\n    <vui-input-group compact>\n      <vui-input placeholder="Enter something..." />\n      <vui-button>Search</vui-button>\n    </vui-input-group>\n    <vui-input-group>\n      <vui-input value="0571" style="width: 80px;" />\n      <vui-input placeholder="Please enter phone number..." style="width: 220px;" />\n    </vui-input-group>\n    <vui-input-group compact>\n      <vui-input value="0571" style="width: 80px;" />\n      <vui-input placeholder="Please enter phone number..." style="width: 220px;" />\n    </vui-input-group>\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-input-group .vui-input-group:not(:first-child) { margin-top:24px; }\n</style>\n'}}},y=(n("58b3"),Object(u.a)(E,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("example",{attrs:{code:t.code,id:"example-input-group"}},[n("template",{slot:"demo"},[n("div",{staticClass:"example-input-group"},[n("vui-input-group",[n("vui-input",{attrs:{placeholder:"Enter something..."}}),n("vui-button",[t._v("Search")])],1),n("vui-input-group",{attrs:{compact:""}},[n("vui-input",{attrs:{placeholder:"Enter something..."}}),n("vui-button",[t._v("Search")])],1),n("vui-input-group",[n("vui-input",{staticStyle:{width:"80px"},attrs:{value:"0571"}}),n("vui-input",{staticStyle:{width:"220px"},attrs:{placeholder:"Please enter phone number..."}})],1),n("vui-input-group",{attrs:{compact:""}},[n("vui-input",{staticStyle:{width:"80px"},attrs:{value:"0571"}}),n("vui-input",{staticStyle:{width:"220px"},attrs:{placeholder:"Please enter phone number..."}})],1)],1)]),n("template",{slot:"title"},[t._v("复合型输入框")]),n("template",{slot:"description"},[n("p",[t._v("输入框的组合展现。设置 "),n("code",[t._v("compact")]),t._v(" 属性可以启用紧凑模式。")]),n("p",[t._v("复合型输入框中的组件宽度默认为自动适应，可以通过 "),n("code",[t._v("style")]),t._v(" 属性自行设置宽度。")])])],2)}),[],!1,null,null,null).exports),w={mixins:[i.a],components:{Document:l.a,ExampleInputBasicUsage:o,ExampleInputPrependAppend:s,ExampleInputPrefixSuffix:v,ExampleInputPassword:m,ExampleInputClearable:h,ExampleInputSize:f,ExampleInputDisabled:b,ExampleInputGroup:y}},S=Object(u.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("document",[n("h1",[t._v("Input 输入框")]),n("p",[t._v("通过鼠标或键盘输入内容，是最基础的表单域的包装。")]),n("h2",[t._v("何时使用")]),n("ul",[n("li",[t._v("需要用户输入表单域内容时；")]),n("li",[t._v("提供组合型输入框，带搜索的输入框，还可以进行大小选择。")])]),n("h2",[t._v("代码演示")])]),n("vui-row",{attrs:{gutter:20}},[n("vui-col",{attrs:{span:12}},[n("ExampleInputBasicUsage"),n("ExampleInputPrependAppend"),n("ExampleInputPrefixSuffix"),n("ExampleInputPassword")],1),n("vui-col",{attrs:{span:12}},[n("ExampleInputClearable"),n("ExampleInputSize"),n("ExampleInputDisabled"),n("ExampleInputGroup")],1)],1),n("document",[n("h2",{attrs:{id:"example-api"}},[t._v("API")]),n("h3",[t._v("Input 属性")]),n("table",{staticClass:"example-api-props"},[n("thead",[n("tr",[n("th",{attrs:{width:"120"}},[t._v("属性")]),n("th",[t._v("说明")]),n("th",{attrs:{width:"160"}},[t._v("类型")]),n("th",{attrs:{width:"100"}},[t._v("默认值")])])]),n("tbody",[n("tr",[n("td",[t._v("type")]),n("td",[t._v("输入框类型，同原生 "),n("code",[t._v("input")]),t._v(" 标签的 "),n("code",[t._v("type")]),t._v(" 属性")]),n("td",[t._v("String")]),n("td",[n("code",[t._v("text")])])]),n("tr",[n("td",[t._v("prepend")]),n("td",[t._v("设置前置标签")]),n("td",[t._v("String | Slot")]),n("td",[t._v("--")])]),n("tr",[n("td",[t._v("append")]),n("td",[t._v("设置后置标签")]),n("td",[t._v("String | Slot")]),n("td",[t._v("--")])]),n("tr",[n("td",[t._v("prefix")]),n("td",[t._v("设置前缀图标类型/图标")]),n("td",[t._v("String | Slot")]),n("td",[t._v("--")])]),n("tr",[n("td",[t._v("suffix")]),n("td",[t._v("设置后缀图标类型/图标")]),n("td",[t._v("String | Slot")]),n("td",[t._v("--")])]),n("tr",[n("td",[t._v("size")]),n("td",[t._v("输入框尺寸，可选值为 "),n("code",[t._v("small")]),t._v("、"),n("code",[t._v("medium")]),t._v("、"),n("code",[t._v("large")]),t._v(" 或者不设")]),n("td",[t._v("String")]),n("td",[n("code",[t._v("medium")])])]),n("tr",[n("td",[t._v("placeholder")]),n("td",[t._v("输入框占位文本")]),n("td",[t._v("String | Number")]),n("td",[t._v("--")])]),n("tr",[n("td",[t._v("value")]),n("td",[t._v("输入框内容，可以使用 "),n("code",[t._v("v-model")]),t._v(" 双向绑定数据")]),n("td",[t._v("String | Number")]),n("td",[t._v("--")])]),n("tr",[n("td",[t._v("maxLength")]),n("td",[t._v("最大输入长度")]),n("td",[t._v("String | Number")]),n("td",[t._v("--")])]),n("tr",[n("td",[t._v("clearable")]),n("td",[t._v("是否允许清空")]),n("td",[t._v("Boolean")]),n("td",[n("code",[t._v("false")])])]),n("tr",[n("td",[t._v("readonly")]),n("td",[t._v("设置文本框为只读状态")]),n("td",[t._v("Boolean")]),n("td",[n("code",[t._v("false")])])]),n("tr",[n("td",[t._v("disabled")]),n("td",[t._v("设置文本框为禁用状态")]),n("td",[t._v("Boolean")]),n("td",[n("code",[t._v("false")])])])])]),n("h3",[t._v("Input 事件")]),n("table",{staticClass:"example-api-events"},[n("thead",[n("tr",[n("th",{attrs:{width:"120"}},[t._v("事件名")]),n("th",[t._v("说明")]),n("th",{attrs:{width:"160"}},[t._v("类型")]),n("th",{attrs:{width:"100"}},[t._v("回调参数")])])]),n("tbody",[n("tr",[n("td",[t._v("mouseenter")]),n("td",[t._v("鼠标移入文本框时触发的事件回调函数")]),n("td",[t._v("Function")]),n("td",[n("code",[t._v("event")])])]),n("tr",[n("td",[t._v("mouseleave")]),n("td",[t._v("鼠标移出文本框时触发的事件回调函数")]),n("td",[t._v("Function")]),n("td",[n("code",[t._v("event")])])]),n("tr",[n("td",[t._v("focus")]),n("td",[t._v("文本框获取焦点时触发的事件回调函数")]),n("td",[t._v("Function")]),n("td",[n("code",[t._v("event")])])]),n("tr",[n("td",[t._v("blur")]),n("td",[t._v("文本框失去焦点时触发的事件回调函数")]),n("td",[t._v("Function")]),n("td",[n("code",[t._v("event")])])]),n("tr",[n("td",[t._v("keydown")]),n("td",[t._v("键盘按下时触发的事件回调函数")]),n("td",[t._v("Function")]),n("td",[n("code",[t._v("event")])])]),n("tr",[n("td",[t._v("keyup")]),n("td",[t._v("键盘弹起时触发的事件回调函数")]),n("td",[t._v("Function")]),n("td",[n("code",[t._v("event")])])]),n("tr",[n("td",[t._v("clear")]),n("td",[t._v("点击清空按钮时触发的事件回调函数")]),n("td",[t._v("Function")]),n("td",[n("code",[t._v("event")])])]),n("tr",[n("td",[t._v("input")]),n("td",[t._v("文本框内容输入时触发的事件回调函数，可以使用 "),n("code",[t._v("v-model")]),t._v(" 双向绑定数据")]),n("td",[t._v("Function")]),n("td",[n("code",[t._v("value")])])]),n("tr",[n("td",[t._v("change")]),n("td",[t._v("文本框内容变化时触发的事件回调函数")]),n("td",[t._v("Function")]),n("td",[n("code",[t._v("event")])])])])])])],1)}),[],!1,null,null,null);e.default=S.exports},"34aa":function(t,e,n){"use strict";n("9b5e")},"46e7":function(t,e,n){},"58b3":function(t,e,n){"use strict";n("6ebe")},"6ebe":function(t,e,n){},"7f5a":function(t,e,n){"use strict";n("46e7")},8663:function(t,e,n){"use strict";n("a8de")},"9b5e":function(t,e,n){},a8de:function(t,e,n){},c226:function(t,e,n){"use strict";n("0cbe")}}]);