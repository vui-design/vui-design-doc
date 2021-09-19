(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-20383c95"],{"0c1a":function(e,t,s){"use strict";s("e98c")},"1f8b":function(e,t,s){"use strict";s("e99b")},6738:function(e,t,s){"use strict";s.r(t);var r=s("d58b"),a=s("240e"),n=s("1a42"),p={components:{Example:n.a},data:function(){return{code:'<template>\n  <div class="example-progress-line">\n    <vui-progress :percentage="30" />\n    <vui-progress :percentage="50" status="active" />\n    <vui-progress :percentage="70" status="exception" />\n    <vui-progress :percentage="100" />\n    <vui-progress :percentage="50" :showInfo="false" />\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-progress-line > .vui-progress:not(:first-child) { margin-top:15px; }\n</style>\n'}}},c=(s("67bb"),s("2877")),o=Object(c.a)(p,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("example",{attrs:{code:e.code,id:"example-progress-line"}},[s("template",{slot:"demo"},[s("div",{staticClass:"example-progress-line"},[s("vui-progress",{attrs:{percentage:30}}),s("vui-progress",{attrs:{percentage:50,status:"active"}}),s("vui-progress",{attrs:{percentage:70,status:"exception"}}),s("vui-progress",{attrs:{percentage:100}}),s("vui-progress",{attrs:{percentage:50,showInfo:!1}})],1)]),s("template",{slot:"title"},[e._v("进度条")]),s("template",{slot:"description"},[s("p",[e._v("处在不同状态下的进度条，当 "),s("code",[e._v("percentage")]),e._v(" 为 "),s("code",[e._v("100")]),e._v(" 时，自动将状态置为 "),s("code",[e._v("success")]),e._v("。")])])],2)}),[],!1,null,null,null).exports,l={components:{Example:n.a},data:function(){return{code:'<template>\n  <div class="example-progress-line-small">\n    <vui-progress size="small" :percentage="30" />\n    <vui-progress size="small" :percentage="50" status="active" />\n    <vui-progress size="small" :percentage="70" status="exception" />\n    <vui-progress size="small" :percentage="100" />\n    <vui-progress size="small" :percentage="50" :showInfo="false" />\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-progress-line-small > .vui-progress:not(:first-child) { margin-top:15px; }\n</style>\n'}}},i=(s("f8a9"),Object(c.a)(l,(function(){var e=this.$createElement,t=this._self._c||e;return t("example",{attrs:{code:this.code,id:"example-progress-line-small"}},[t("template",{slot:"demo"},[t("div",{staticClass:"example-progress-line-small"},[t("vui-progress",{attrs:{size:"small",percentage:30}}),t("vui-progress",{attrs:{size:"small",percentage:50,status:"active"}}),t("vui-progress",{attrs:{size:"small",percentage:70,status:"exception"}}),t("vui-progress",{attrs:{size:"small",percentage:100}}),t("vui-progress",{attrs:{size:"small",percentage:50,showInfo:!1}})],1)]),t("template",{slot:"title"},[this._v("小型进度条")]),t("template",{slot:"description"},[t("p",[this._v("适合放在较狭窄的区域内。")])])],2)}),[],!1,null,null,null).exports),d={components:{Example:n.a},data:function(){return{code:'<template>\n  <div class="example-progress-circle">\n    <vui-progress type="circle" :percentage="75" />\n    <vui-progress type="circle" :percentage="75" status="exception" />\n    <vui-progress type="circle" :percentage="100" />\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-progress-circle > .vui-progress:not(:first-child) { margin-left:15px; }\n</style>\n'}}},v=(s("c902"),Object(c.a)(d,(function(){var e=this.$createElement,t=this._self._c||e;return t("example",{attrs:{code:this.code,id:"example-progress-circle"}},[t("template",{slot:"demo"},[t("div",{staticClass:"example-progress-circle"},[t("vui-progress",{attrs:{type:"circle",percentage:75}}),t("vui-progress",{attrs:{type:"circle",percentage:75,status:"exception"}}),t("vui-progress",{attrs:{type:"circle",percentage:100}})],1)]),t("template",{slot:"title"},[this._v("进度环")]),t("template",{slot:"description"},[t("p",[this._v("环形的进度。")])])],2)}),[],!1,null,null,null).exports),u={components:{Example:n.a},data:function(){return{code:'<template>\n  <div class="example-progress-circle-small">\n    <vui-progress type="circle" size="small" :percentage="75" />\n    <vui-progress type="circle" size="small" :percentage="75" status="exception" />\n    <vui-progress type="circle" size="small" :percentage="100" />\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-progress-circle-small > .vui-progress:not(:first-child) { margin-left:15px; }\n</style>\n'}}},m=(s("e8ff"),Object(c.a)(u,(function(){var e=this.$createElement,t=this._self._c||e;return t("example",{attrs:{code:this.code,id:"example-progress-circle-small"}},[t("template",{slot:"demo"},[t("div",{staticClass:"example-progress-circle-small"},[t("vui-progress",{attrs:{type:"circle",size:"small",percentage:75}}),t("vui-progress",{attrs:{type:"circle",size:"small",percentage:75,status:"exception"}}),t("vui-progress",{attrs:{type:"circle",size:"small",percentage:100}})],1)]),t("template",{slot:"title"},[this._v("小型进度环")]),t("template",{slot:"description"},[t("p",[this._v("适合放在较狭窄的区域内。")])])],2)}),[],!1,null,null,null).exports),g={components:{Example:n.a},data:function(){return{code:'<template>\n  <div class="example-progress-dashboard">\n    <vui-progress type="dashboard" :percentage="75" />\n    <vui-progress type="dashboard" :percentage="75" status="exception" />\n    <vui-progress type="dashboard" :percentage="100" />\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-progress-dashboard > .vui-progress:not(:first-child) { margin-left:15px; }\n</style>\n'}}},_=(s("0c1a"),Object(c.a)(g,(function(){var e=this.$createElement,t=this._self._c||e;return t("example",{attrs:{code:this.code,id:"example-progress-dashboard"}},[t("template",{slot:"demo"},[t("div",{staticClass:"example-progress-dashboard"},[t("vui-progress",{attrs:{type:"dashboard",percentage:75}}),t("vui-progress",{attrs:{type:"dashboard",percentage:75,status:"exception"}}),t("vui-progress",{attrs:{type:"dashboard",percentage:100}})],1)]),t("template",{slot:"title"},[this._v("仪表盘")]),t("template",{slot:"description"},[t("p",[this._v("通过设置 "),t("code",[this._v("type")]),this._v(" 为 "),t("code",[this._v("dashboard")]),this._v("，可以很方便地实现仪表盘样式的进度条。")])])],2)}),[],!1,null,null,null).exports),h={components:{Example:n.a},data:function(){return{code:'<template>\n  <div class="example-progress-line-dynamic">\n    <vui-button-group>\n      <vui-button icon="minus" @click="handleDecrease" />\n      <vui-button icon="plus" @click="handleIncrease" />\n    </vui-button-group>\n    <vui-progress :percentage="percentage" />\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        percentage: 10\n      };\n    },\n    methods: {\n      handleDecrease() {\n        let percentage = this.percentage - 10;\n\n        if (percentage < 0) {\n          percentage = 0;\n        }\n\n        this.percentage = percentage;\n      },\n      handleIncrease() {\n        let percentage = this.percentage + 10;\n\n        if (percentage > 100) {\n          percentage = 100;\n        }\n\n        this.percentage = percentage;\n      }\n    }\n  };\n<\/script>\n\n<style>\n  .example-progress-line-dynamic > .vui-progress { margin-top:15px; }\n</style>\n',percentage:10}},methods:{handleDecrease:function(){var e=this.percentage-10;e<0&&(e=0),this.percentage=e},handleIncrease:function(){var e=this.percentage+10;e>100&&(e=100),this.percentage=e}}},x=(s("a5c9"),Object(c.a)(h,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("example",{attrs:{code:e.code,id:"example-progress-dynamic"}},[s("template",{slot:"demo"},[s("div",{staticClass:"example-progress-dynamic"},[s("vui-button-group",[s("vui-button",{attrs:{icon:"minus"},on:{click:e.handleDecrease}}),s("vui-button",{attrs:{icon:"plus"},on:{click:e.handleIncrease}})],1),s("vui-progress",{attrs:{percentage:e.percentage}}),s("vui-progress",{attrs:{type:"circle",percentage:e.percentage}}),s("vui-progress",{attrs:{type:"dashboard",percentage:e.percentage}})],1)]),s("template",{slot:"title"},[e._v("动态展示")]),s("template",{slot:"description"},[s("p",[e._v("通过数据的联动和逻辑控制，实现动态效果。")])])],2)}),[],!1,null,null,null).exports),f={components:{Example:n.a},data:function(){return{code:'<template>\n  <div class="example-progress-format">\n    <vui-progress type="circle" :percentage="75" :format="format" />\n    <vui-progress type="circle" :percentage="100" :format="format" />\n  </div>\n</template>\n\n<script>\n  export default {\n    methods: {\n      format(percentage) {\n        return percentage < 100 ? (percentage + "Days") : "Done";\n      }\n    }\n  };\n<\/script>\n\n<style>\n  .example-progress-format > .vui-progress:not(:first-child) { margin-left:15px; }\n</style>\n'}},methods:{format:function(e){return e<100?"".concat(e," Days"):"Done"}}},b=(s("bc20"),Object(c.a)(f,(function(){var e=this.$createElement,t=this._self._c||e;return t("example",{attrs:{code:this.code,id:"example-progress-format"}},[t("template",{slot:"demo"},[t("div",{staticClass:"example-progress-format"},[t("vui-progress",{attrs:{type:"circle",percentage:75,format:this.format}}),t("vui-progress",{attrs:{type:"circle",percentage:100,format:this.format}})],1)]),t("template",{slot:"title"},[this._v("自定义文字格式")]),t("template",{slot:"description"},[t("p",[this._v("利用 "),t("code",[this._v("format")]),this._v(" 属性指定文字格式。")])])],2)}),[],!1,null,null,null).exports),y={components:{Example:n.a},data:function(){return{code:'<template>\n  <div class="example-progress-color">\n    <vui-progress :percentage="50" color="#722ed1" />\n    <vui-progress type="circle" :percentage="75" status="exception" color="#f8ac59" />\n    <vui-progress type="dashboard" :percentage="100" color="#1ab394" />\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-progress-color > .vui-progress-line { margin-bottom:15px; }\n  .example-progress-color > .vui-progress-circle { margin-right:15px; }\n  .example-progress-color > .vui-progress-dashboard {  }\n</style>\n'}}},E=(s("c60d"),Object(c.a)(y,(function(){var e=this.$createElement,t=this._self._c||e;return t("example",{attrs:{code:this.code,id:"example-progress-color"}},[t("template",{slot:"demo"},[t("div",{staticClass:"example-progress-color"},[t("vui-progress",{attrs:{percentage:50,color:"#722ed1"}}),t("vui-progress",{attrs:{type:"circle",percentage:75,status:"exception",color:"#f8ac59"}}),t("vui-progress",{attrs:{type:"dashboard",percentage:100,color:"#1ab394"}})],1)]),t("template",{slot:"title"},[this._v("自定义颜色")]),t("template",{slot:"description"},[t("p",[this._v("通过 "),t("code",[this._v("color")]),this._v(" 自定义颜色（会覆盖 "),t("code",[this._v("status")]),this._v(" 状态下的默认颜色）。")])])],2)}),[],!1,null,null,null).exports),P={components:{Example:n.a},data:function(){return{code:'<template>\n  <div class="example-progress-linecap">\n    <vui-progress :percentage="50" linecap="square" />\n    <vui-progress type="circle" :percentage="75" status="exception" linecap="square" />\n    <vui-progress type="dashboard" :percentage="100" linecap="square" />\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-progress-linecap > .vui-progress-line { margin-bottom:15px; }\n  .example-progress-linecap > .vui-progress-circle { margin-right:15px; }\n  .example-progress-linecap > .vui-progress-dashboard {  }\n</style>\n'}}},w=(s("1f8b"),Object(c.a)(P,(function(){var e=this.$createElement,t=this._self._c||e;return t("example",{attrs:{code:this.code,id:"example-progress-linecap"}},[t("template",{slot:"demo"},[t("div",{staticClass:"example-progress-linecap"},[t("vui-progress",{attrs:{percentage:50,linecap:"square"}}),t("vui-progress",{attrs:{type:"circle",percentage:75,status:"exception",linecap:"square"}}),t("vui-progress",{attrs:{type:"dashboard",percentage:100,linecap:"square"}})],1)]),t("template",{slot:"title"},[this._v("线条边缘形状")]),t("template",{slot:"description"},[t("p",[this._v("通过 "),t("code",[this._v("linecap")]),this._v(" 可以调整线条边缘形状。")])])],2)}),[],!1,null,null,null).exports),C={mixins:[r.a],components:{Document:a.a,ExampleProgressLine:o,ExampleProgressLineSmall:i,ExampleProgressCircle:v,ExampleProgressCircleSmall:m,ExampleProgressDashboard:_,ExampleProgressDynamic:x,ExampleProgressFormat:b,ExampleProgressColor:E,ExampleProgressLinecap:w}},z=Object(c.a)(C,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("document",[s("h1",[e._v("Progress 进度条")]),s("p",[e._v("展示操作的当前进度。")]),s("h2",[e._v("何时使用")]),s("p",[e._v("在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。")]),s("ul",[s("li",[e._v("当一个操作会打断当前界面，或者需要在后台运行，且耗时可能超过 2 秒时；")]),s("li",[e._v("当需要显示一个操作完成的百分比时。")])]),s("h2",[e._v("代码演示")])]),s("vui-row",{attrs:{gutter:20}},[s("vui-col",{attrs:{span:12}},[s("ExampleProgressLine"),s("ExampleProgressLineSmall"),s("ExampleProgressCircle"),s("ExampleProgressCircleSmall"),s("ExampleProgressDashboard")],1),s("vui-col",{attrs:{span:12}},[s("ExampleProgressDynamic"),s("ExampleProgressFormat"),s("ExampleProgressColor"),s("ExampleProgressLinecap")],1)],1),s("document",[s("h2",{attrs:{id:"example-api"}},[e._v("API")]),s("h3",[e._v("Progress 共用属性")]),s("table",{staticClass:"example-api-props"},[s("thead",[s("tr",[s("th",{attrs:{width:"100"}},[e._v("属性")]),s("th",[e._v("说明")]),s("th",{attrs:{width:"150"}},[e._v("类型")]),s("th",{attrs:{width:"100"}},[e._v("默认值")])])]),s("tbody",[s("tr",[s("td",[e._v("type")]),s("td",[e._v("类型，可选值为 "),s("code",[e._v("line")]),e._v("、"),s("code",[e._v("circle")]),e._v("、"),s("code",[e._v("dashboard")]),e._v(" 或者不设")]),s("td",[e._v("String")]),s("td",[s("code",[e._v("line")])])]),s("tr",[s("td",[e._v("size")]),s("td",[e._v("尺寸，可选值为 "),s("code",[e._v("small")]),e._v("、"),s("code",[e._v("medium")]),e._v("、"),s("code",[e._v("large")]),e._v(" 或者不设")]),s("td",[e._v("String")]),s("td",[s("code",[e._v("medium")])])]),s("tr",[s("td",[e._v("percentage")]),s("td",[e._v("百分比，可选值 "),s("code",[e._v("0")]),e._v(" 至 "),s("code",[e._v("100")])]),s("td",[e._v("Number")]),s("td",[s("code",[e._v("0")])])]),s("tr",[s("td",[e._v("status")]),s("td",[e._v("状态，可选值 "),s("code",[e._v("normal")]),e._v("、"),s("code",[e._v("active")]),e._v("、"),s("code",[e._v("exception")]),e._v("、"),s("code",[e._v("success")]),e._v(" 或者不设，其中 "),s("code",[e._v("active")]),e._v(" 状态仅限 "),s("code",[e._v("line")]),e._v(" 类型下可用")]),s("td",[e._v("String")]),s("td",[s("code",[e._v("normal")])])]),s("tr",[s("td",[e._v("color")]),s("td",[e._v("自定义颜色，会覆盖 "),s("code",[e._v("status")]),e._v(" 状态下的默认颜色")]),s("td",[e._v("String")]),s("td",[e._v("--")])]),s("tr",[s("td",[e._v("format")]),s("td",[e._v("内容的模板函数，接收 "),s("code",[e._v("percentage")]),e._v(" 作为参数")]),s("td",[e._v("Function")]),s("td",[e._v("--")])]),s("tr",[s("td",[e._v("stroke")]),s("td",[e._v("线条尺寸，单位 "),s("code",[e._v("px")]),e._v("，默认值为 "),s("code",[e._v("{ small: 6, medium: 8, large: 10 }")])]),s("td",[e._v("Number")]),s("td",[e._v("--")])]),s("tr",[s("td",[e._v("linecap")]),s("td",[e._v("线条边缘形状，可选值为 "),s("code",[e._v("round")]),e._v("、"),s("code",[e._v("square")]),e._v(" 或者不设")]),s("td",[e._v("String")]),s("td",[s("code",[e._v("round")])])]),s("tr",[s("td",[e._v("showInfo")]),s("td",[e._v("是否显示进度数值或状态图标")]),s("td",[e._v("Boolean")]),s("td",[s("code",[e._v("true")])])])])]),s("h3",[e._v("Progress Circle 属性")]),s("table",{staticClass:"example-api-props"},[s("thead",[s("tr",[s("th",{attrs:{width:"100"}},[e._v("属性")]),s("th",[e._v("说明")]),s("th",{attrs:{width:"150"}},[e._v("类型")]),s("th",{attrs:{width:"100"}},[e._v("默认值")])])]),s("tbody",[s("tr",[s("td",[e._v("canvas")]),s("td",[e._v("画布尺寸，单位 "),s("code",[e._v("px")]),e._v("，默认值为 "),s("code",[e._v("{ small: 80, medium: 120, large: 160 }")])]),s("td",[e._v("Number")]),s("td",[e._v("--")])])])]),s("h3",[e._v("Progress Dashboard 属性")]),s("table",{staticClass:"example-api-props"},[s("thead",[s("tr",[s("th",{attrs:{width:"100"}},[e._v("属性")]),s("th",[e._v("说明")]),s("th",{attrs:{width:"150"}},[e._v("类型")]),s("th",{attrs:{width:"100"}},[e._v("默认值")])])]),s("tbody",[s("tr",[s("td",[e._v("canvas")]),s("td",[e._v("画布尺寸，单位 "),s("code",[e._v("px")]),e._v("，默认值为 "),s("code",[e._v("{ small: 80, medium: 120, large: 160 }")])]),s("td",[e._v("Number")]),s("td",[e._v("--")])])])])])],1)}),[],!1,null,null,null);t.default=z.exports},"67bb":function(e,t,s){"use strict";s("e055")},6857:function(e,t,s){},7309:function(e,t,s){},"8a12":function(e,t,s){},a5c9:function(e,t,s){"use strict";s("6857")},bc20:function(e,t,s){"use strict";s("8a12")},c60d:function(e,t,s){"use strict";s("d0c9")},c902:function(e,t,s){"use strict";s("cbc7")},cbc7:function(e,t,s){},d0c9:function(e,t,s){},e055:function(e,t,s){},e8ff:function(e,t,s){"use strict";s("fe48")},e98c:function(e,t,s){},e99b:function(e,t,s){},f8a9:function(e,t,s){"use strict";s("7309")},fe48:function(e,t,s){}}]);