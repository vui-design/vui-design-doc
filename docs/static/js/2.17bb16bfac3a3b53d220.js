webpackJsonp([2],{"3Cnu":function(e,t){},"7bj8":function(e,t){},G77Z:function(e,t){},MTyk:function(e,t){},Sudl:function(e,t){},T9L5:function(e,t){},gZ2W:function(e,t){},kmuj:function(e,t){},nkRF:function(e,t){},wQ3G:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r("xe5J"),a=r("Fy5V"),n=r("RLuK"),l={components:{Example:n.a},data:function(){return{code:'<template>\n  <div class="example-progress-line">\n    <vui-progress :percentage="30" />\n    <vui-progress :percentage="50" status="active" />\n    <vui-progress :percentage="70" status="exception" />\n    <vui-progress :percentage="100" />\n    <vui-progress :percentage="50" :showInfo="false" />\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-progress-line > .vui-progress:not(:first-child) { margin-top:15px; }\n</style>\n'}}},p={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Example",{attrs:{vertical:"",id:"example-progress-line"}},[r("template",{slot:"source"},[r("div",{staticClass:"example-progress-line"},[r("vui-progress",{attrs:{percentage:30}}),r("vui-progress",{attrs:{percentage:50,status:"active"}}),r("vui-progress",{attrs:{percentage:70,status:"exception"}}),r("vui-progress",{attrs:{percentage:100}}),r("vui-progress",{attrs:{percentage:50,showInfo:!1}})],1)]),r("template",{slot:"title"},[e._v("进度条")]),r("template",{slot:"describe"},[r("p",[e._v("处在不同状态下的进度条，当 "),r("code",[e._v("percentage")]),e._v(" 为 "),r("code",[e._v("100")]),e._v(" 时，自动将状态置为 "),r("code",[e._v("success")]),e._v("。")])]),r("template",{slot:"code"},[e._v(e._s(e.code))])],2)},staticRenderFns:[]};var o=r("VU/8")(l,p,!1,function(e){r("nkRF")},null,null).exports,c={components:{Example:n.a},data:function(){return{code:'<template>\n  <div class="example-progress-line-small">\n    <vui-progress size="small" :percentage="30" />\n    <vui-progress size="small" :percentage="50" status="active" />\n    <vui-progress size="small" :percentage="70" status="exception" />\n    <vui-progress size="small" :percentage="100" />\n    <vui-progress size="small" :percentage="50" :showInfo="false" />\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-progress-line-small > .vui-progress:not(:first-child) { margin-top:15px; }\n</style>\n'}}},i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("Example",{attrs:{vertical:"",id:"example-progress-line-small"}},[t("template",{slot:"source"},[t("div",{staticClass:"example-progress-line-small"},[t("vui-progress",{attrs:{size:"small",percentage:30}}),t("vui-progress",{attrs:{size:"small",percentage:50,status:"active"}}),t("vui-progress",{attrs:{size:"small",percentage:70,status:"exception"}}),t("vui-progress",{attrs:{size:"small",percentage:100}}),t("vui-progress",{attrs:{size:"small",percentage:50,showInfo:!1}})],1)]),t("template",{slot:"title"},[this._v("小型进度条")]),t("template",{slot:"describe"},[t("p",[this._v("适合放在较狭窄的区域内。")])]),t("template",{slot:"code"},[this._v(this._s(this.code))])],2)},staticRenderFns:[]};var v=r("VU/8")(c,i,!1,function(e){r("MTyk")},null,null).exports,d={components:{Example:n.a},data:function(){return{code:'<template>\n  <div class="example-progress-circle">\n    <vui-progress type="circle" :percentage="75" />\n    <vui-progress type="circle" :percentage="75" status="exception" />\n    <vui-progress type="circle" :percentage="100" />\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-progress-circle > .vui-progress:not(:first-child) { margin-left:15px; }\n</style>\n'}}},u={render:function(){var e=this.$createElement,t=this._self._c||e;return t("Example",{attrs:{vertical:"",id:"example-progress-circle"}},[t("template",{slot:"source"},[t("div",{staticClass:"example-progress-circle"},[t("vui-progress",{attrs:{type:"circle",percentage:75}}),t("vui-progress",{attrs:{type:"circle",percentage:75,status:"exception"}}),t("vui-progress",{attrs:{type:"circle",percentage:100}})],1)]),t("template",{slot:"title"},[this._v("进度环")]),t("template",{slot:"describe"},[t("p",[this._v("环形的进度。")])]),t("template",{slot:"code"},[this._v(this._s(this.code))])],2)},staticRenderFns:[]};var m=r("VU/8")(d,u,!1,function(e){r("gZ2W")},null,null).exports,g={components:{Example:n.a},data:function(){return{code:'<template>\n  <div class="example-progress-circle-small">\n    <vui-progress type="circle" size="small" :percentage="75" />\n    <vui-progress type="circle" size="small" :percentage="75" status="exception" />\n    <vui-progress type="circle" size="small" :percentage="100" />\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-progress-circle-small > .vui-progress:not(:first-child) { margin-left:15px; }\n</style>\n'}}},_={render:function(){var e=this.$createElement,t=this._self._c||e;return t("Example",{attrs:{vertical:"",id:"example-progress-circle-small"}},[t("template",{slot:"source"},[t("div",{staticClass:"example-progress-circle-small"},[t("vui-progress",{attrs:{type:"circle",size:"small",percentage:75}}),t("vui-progress",{attrs:{type:"circle",size:"small",percentage:75,status:"exception"}}),t("vui-progress",{attrs:{type:"circle",size:"small",percentage:100}})],1)]),t("template",{slot:"title"},[this._v("小型进度环")]),t("template",{slot:"describe"},[t("p",[this._v("适合放在较狭窄的区域内。")])]),t("template",{slot:"code"},[this._v(this._s(this.code))])],2)},staticRenderFns:[]};var x=r("VU/8")(g,_,!1,function(e){r("T9L5")},null,null).exports,h={components:{Example:n.a},data:function(){return{code:'<template>\n  <div class="example-progress-dashboard">\n    <vui-progress type="dashboard" :percentage="75" />\n    <vui-progress type="dashboard" :percentage="75" status="exception" />\n    <vui-progress type="dashboard" :percentage="100" />\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-progress-dashboard > .vui-progress:not(:first-child) { margin-left:15px; }\n</style>\n'}}},f={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Example",{attrs:{vertical:"",id:"example-progress-dashboard"}},[r("template",{slot:"source"},[r("div",{staticClass:"example-progress-dashboard"},[r("vui-progress",{attrs:{type:"dashboard",percentage:75}}),r("vui-progress",{attrs:{type:"dashboard",percentage:75,status:"exception"}}),r("vui-progress",{attrs:{type:"dashboard",percentage:100}})],1)]),r("template",{slot:"title"},[e._v("仪表盘")]),r("template",{slot:"describe"},[r("p",[e._v("通过设置 "),r("code",[e._v("type")]),e._v(" 为 "),r("code",[e._v("dashboard")]),e._v("，可以很方便地实现仪表盘样式的进度条。")])]),r("template",{slot:"code"},[e._v(e._s(e.code))])],2)},staticRenderFns:[]};var y=r("VU/8")(h,f,!1,function(e){r("3Cnu")},null,null).exports,b={components:{Example:n.a},data:function(){return{code:'<template>\n  <div class="example-progress-line-dynamic">\n    <vui-button-group>\n      <vui-button icon="minus" @click="handleDecrease" />\n      <vui-button icon="plus" @click="handleIncrease" />\n    </vui-button-group>\n    <vui-progress :percentage="percentage" />\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        percentage: 10\n      };\n    },\n    methods: {\n      handleDecrease() {\n        let percentage = this.percentage - 10;\n\n        if (percentage < 0) {\n          percentage = 0;\n        }\n\n        this.percentage = percentage;\n      },\n      handleIncrease() {\n        let percentage = this.percentage + 10;\n\n        if (percentage > 100) {\n          percentage = 100;\n        }\n\n        this.percentage = percentage;\n      }\n    }\n  };\n<\/script>\n\n<style>\n  .example-progress-line-dynamic > .vui-progress { margin-top:15px; }\n</style>\n',percentage:10}},methods:{handleDecrease:function(){var e=this.percentage-10;e<0&&(e=0),this.percentage=e},handleIncrease:function(){var e=this.percentage+10;e>100&&(e=100),this.percentage=e}}},E={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Example",{attrs:{vertical:"",id:"example-progress-dynamic"}},[r("template",{slot:"source"},[r("div",{staticClass:"example-progress-dynamic"},[r("vui-button-group",[r("vui-button",{attrs:{icon:"minus"},on:{click:e.handleDecrease}}),r("vui-button",{attrs:{icon:"plus"},on:{click:e.handleIncrease}})],1),r("vui-progress",{attrs:{percentage:e.percentage}}),r("vui-progress",{attrs:{type:"circle",percentage:e.percentage}}),r("vui-progress",{attrs:{type:"dashboard",percentage:e.percentage}})],1)]),r("template",{slot:"title"},[e._v("动态展示")]),r("template",{slot:"describe"},[r("p",[e._v("通过数据的联动和逻辑控制，实现动态效果。")])]),r("template",{slot:"code"},[e._v(e._s(e.code))])],2)},staticRenderFns:[]};var P=r("VU/8")(b,E,!1,function(e){r("7bj8")},null,null).exports,C={components:{Example:n.a},data:function(){return{code:'<template>\n  <div class="example-progress-format">\n    <vui-progress type="circle" :percentage="75" :format="format" />\n    <vui-progress type="circle" :percentage="100" :format="format" />\n  </div>\n</template>\n\n<script>\n  export default {\n    methods: {\n      format(percentage) {\n        return percentage < 100 ? (percentage + "Days") : "Done";\n      }\n    }\n  };\n<\/script>\n\n<style>\n  .example-progress-format > .vui-progress:not(:first-child) { margin-left:15px; }\n</style>\n'}},methods:{format:function(e){return e<100?e+" Days":"Done"}}},w={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Example",{attrs:{vertical:"",id:"example-progress-format"}},[r("template",{slot:"source"},[r("div",{staticClass:"example-progress-format"},[r("vui-progress",{attrs:{type:"circle",percentage:75,format:e.format}}),r("vui-progress",{attrs:{type:"circle",percentage:100,format:e.format}})],1)]),r("template",{slot:"title"},[e._v("自定义文字格式")]),r("template",{slot:"describe"},[r("p",[e._v("利用 "),r("code",[e._v("format")]),e._v(" 属性指定文字格式。")])]),r("template",{slot:"code"},[e._v(e._s(e.code))])],2)},staticRenderFns:[]};var z=r("VU/8")(C,w,!1,function(e){r("G77Z")},null,null).exports,F={components:{Example:n.a},data:function(){return{code:'<template>\n  <div class="example-progress-color">\n    <vui-progress :percentage="50" color="#722ed1" />\n    <vui-progress type="circle" :percentage="75" status="exception" color="#f8ac59" />\n    <vui-progress type="dashboard" :percentage="100" color="#1ab394" />\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-progress-color > .vui-progress-line { margin-bottom:15px; }\n  .example-progress-color > .vui-progress-circle { margin-right:15px; }\n  .example-progress-color > .vui-progress-dashboard {  }\n</style>\n'}}},k={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Example",{attrs:{vertical:"",id:"example-progress-color"}},[r("template",{slot:"source"},[r("div",{staticClass:"example-progress-color"},[r("vui-progress",{attrs:{percentage:50,color:"#722ed1"}}),r("vui-progress",{attrs:{type:"circle",percentage:75,status:"exception",color:"#f8ac59"}}),r("vui-progress",{attrs:{type:"dashboard",percentage:100,color:"#1ab394"}})],1)]),r("template",{slot:"title"},[e._v("自定义颜色")]),r("template",{slot:"describe"},[r("p",[e._v("通过 "),r("code",[e._v("color")]),e._v(" 自定义颜色（会覆盖 "),r("code",[e._v("status")]),e._v(" 状态下的默认颜色）。")])]),r("template",{slot:"code"},[e._v(e._s(e.code))])],2)},staticRenderFns:[]};var D=r("VU/8")(F,k,!1,function(e){r("kmuj")},null,null).exports,R={components:{Example:n.a},data:function(){return{code:'<template>\n  <div class="example-progress-linecap">\n    <vui-progress :percentage="50" linecap="square" />\n    <vui-progress type="circle" :percentage="75" status="exception" linecap="square" />\n    <vui-progress type="dashboard" :percentage="100" linecap="square" />\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-progress-linecap > .vui-progress-line { margin-bottom:15px; }\n  .example-progress-linecap > .vui-progress-circle { margin-right:15px; }\n  .example-progress-linecap > .vui-progress-dashboard {  }\n</style>\n'}}},S={render:function(){var e=this.$createElement,t=this._self._c||e;return t("Example",{attrs:{vertical:"",id:"example-progress-linecap"}},[t("template",{slot:"source"},[t("div",{staticClass:"example-progress-linecap"},[t("vui-progress",{attrs:{percentage:50,linecap:"square"}}),t("vui-progress",{attrs:{type:"circle",percentage:75,status:"exception",linecap:"square"}}),t("vui-progress",{attrs:{type:"dashboard",percentage:100,linecap:"square"}})],1)]),t("template",{slot:"title"},[this._v("线条边缘形状")]),t("template",{slot:"describe"},[t("p",[this._v("通过 "),t("code",[this._v("linecap")]),this._v(" 可以调整线条边缘形状。")])]),t("template",{slot:"code"},[this._v(this._s(this.code))])],2)},staticRenderFns:[]};var V=r("VU/8")(R,S,!1,function(e){r("Sudl")},null,null).exports,I={mixins:[s.a],components:{Markdown:a.a,ExampleProgressLine:o,ExampleProgressLineSmall:v,ExampleProgressCircle:m,ExampleProgressCircleSmall:x,ExampleProgressDashboard:y,ExampleProgressDynamic:P,ExampleProgressFormat:z,ExampleProgressColor:D,ExampleProgressLinecap:V}},U={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Markdown",[r("h1",[e._v("Progress 进度条")]),r("p",[e._v("展示操作的当前进度。")]),r("h2",[e._v("何时使用")]),r("p",[e._v("在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。")]),r("ul",[r("li",[e._v("当一个操作会打断当前界面，或者需要在后台运行，且耗时可能超过 2 秒时；")]),r("li",[e._v("当需要显示一个操作完成的百分比时。")])]),r("h2",[e._v("代码演示")])]),r("vui-row",{attrs:{gutter:20}},[r("vui-col",{attrs:{span:12}},[r("ExampleProgressLine"),r("ExampleProgressLineSmall"),r("ExampleProgressCircle"),r("ExampleProgressCircleSmall"),r("ExampleProgressDashboard")],1),r("vui-col",{attrs:{span:12}},[r("ExampleProgressDynamic"),r("ExampleProgressFormat"),r("ExampleProgressColor"),r("ExampleProgressLinecap")],1)],1),r("Markdown",[r("h2",{attrs:{id:"example-api"}},[e._v("API")]),r("h3",[e._v("Progress 共用属性")]),r("table",{staticClass:"example-api-props"},[r("thead",[r("tr",[r("th",{attrs:{width:"100"}},[e._v("属性")]),r("th",[e._v("说明")]),r("th",{attrs:{width:"150"}},[e._v("类型")]),r("th",{attrs:{width:"100"}},[e._v("默认值")])])]),r("tbody",[r("tr",[r("td",[e._v("type")]),r("td",[e._v("类型，可选值为 "),r("code",[e._v("line")]),e._v("、"),r("code",[e._v("circle")]),e._v("、"),r("code",[e._v("dashboard")]),e._v(" 或者不设")]),r("td",[e._v("String")]),r("td",[r("code",[e._v("line")])])]),r("tr",[r("td",[e._v("size")]),r("td",[e._v("尺寸，可选值为 "),r("code",[e._v("small")]),e._v("、"),r("code",[e._v("medium")]),e._v("、"),r("code",[e._v("large")]),e._v(" 或者不设")]),r("td",[e._v("String")]),r("td",[r("code",[e._v("medium")])])]),r("tr",[r("td",[e._v("percentage")]),r("td",[e._v("百分比，可选值 "),r("code",[e._v("0")]),e._v(" 至 "),r("code",[e._v("100")])]),r("td",[e._v("Number")]),r("td",[r("code",[e._v("0")])])]),r("tr",[r("td",[e._v("status")]),r("td",[e._v("状态，可选值 "),r("code",[e._v("normal")]),e._v("、"),r("code",[e._v("active")]),e._v("、"),r("code",[e._v("exception")]),e._v("、"),r("code",[e._v("success")]),e._v(" 或者不设，其中 "),r("code",[e._v("active")]),e._v(" 状态仅限 "),r("code",[e._v("line")]),e._v(" 类型下可用")]),r("td",[e._v("String")]),r("td",[r("code",[e._v("normal")])])]),r("tr",[r("td",[e._v("color")]),r("td",[e._v("自定义颜色，会覆盖 "),r("code",[e._v("status")]),e._v(" 状态下的默认颜色")]),r("td",[e._v("String")]),r("td",[e._v("--")])]),r("tr",[r("td",[e._v("format")]),r("td",[e._v("内容的模板函数，接收 "),r("code",[e._v("percentage")]),e._v(" 作为参数")]),r("td",[e._v("Function")]),r("td",[e._v("--")])]),r("tr",[r("td",[e._v("stroke")]),r("td",[e._v("线条尺寸，单位 "),r("code",[e._v("px")]),e._v("，默认值为 "),r("code",[e._v("{ small: 6, medium: 8, large: 10 }")])]),r("td",[e._v("Number")]),r("td",[e._v("--")])]),r("tr",[r("td",[e._v("linecap")]),r("td",[e._v("线条边缘形状，可选值为 "),r("code",[e._v("round")]),e._v("、"),r("code",[e._v("square")]),e._v(" 或者不设")]),r("td",[e._v("String")]),r("td",[r("code",[e._v("round")])])]),r("tr",[r("td",[e._v("showInfo")]),r("td",[e._v("是否显示进度数值或状态图标")]),r("td",[e._v("Boolean")]),r("td",[r("code",[e._v("true")])])])])]),r("h3",[e._v("Progress Circle 属性")]),r("table",{staticClass:"example-api-props"},[r("thead",[r("tr",[r("th",{attrs:{width:"100"}},[e._v("属性")]),r("th",[e._v("说明")]),r("th",{attrs:{width:"150"}},[e._v("类型")]),r("th",{attrs:{width:"100"}},[e._v("默认值")])])]),r("tbody",[r("tr",[r("td",[e._v("canvas")]),r("td",[e._v("画布尺寸，单位 "),r("code",[e._v("px")]),e._v("，默认值为 "),r("code",[e._v("{ small: 80, medium: 120, large: 160 }")])]),r("td",[e._v("Number")]),r("td",[e._v("--")])])])]),r("h3",[e._v("Progress Dashboard 属性")]),r("table",{staticClass:"example-api-props"},[r("thead",[r("tr",[r("th",{attrs:{width:"100"}},[e._v("属性")]),r("th",[e._v("说明")]),r("th",{attrs:{width:"150"}},[e._v("类型")]),r("th",{attrs:{width:"100"}},[e._v("默认值")])])]),r("tbody",[r("tr",[r("td",[e._v("canvas")]),r("td",[e._v("画布尺寸，单位 "),r("code",[e._v("px")]),e._v("，默认值为 "),r("code",[e._v("{ small: 80, medium: 120, large: 160 }")])]),r("td",[e._v("Number")]),r("td",[e._v("--")])])])])])],1)},staticRenderFns:[]},$=r("VU/8")(I,U,!1,null,null,null);t.default=$.exports}});
//# sourceMappingURL=2.17bb16bfac3a3b53d220.js.map