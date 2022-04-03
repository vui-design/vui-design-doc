(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-00424a53"],{"0c1a":function(e,t,s){"use strict";s("e98c")},"2ce5":function(e,t,s){},4597:function(e,t,s){},"5ede":function(e,t,s){"use strict";s("c50d")},6738:function(e,t,s){"use strict";s.r(t);var r=s("d58b"),n=s("240e"),a=s("1a42"),i={components:{Example:a.a},data:function(){return{code:'<template>\n  <div class="example-progress-line">\n    <vui-progress v-bind:percentage="30" />\n    <vui-progress v-bind:percentage="50" status="active" />\n    <vui-progress v-bind:percentage="70" status="exception" />\n    <vui-progress v-bind:percentage="100" />\n    <vui-progress v-bind:percentage="50" v-bind:showInfo="false" />\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-progress-line .vui-progress + .vui-progress { margin-top:16px; }\n</style>\n'}}},p=(s("67bb"),s("2877")),o=Object(p.a)(i,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("example",{attrs:{code:e.code,id:"example-progress-line"}},[s("template",{slot:"demo"},[s("div",{staticClass:"example-progress-line"},[s("vui-progress",{attrs:{percentage:30}}),s("vui-progress",{attrs:{percentage:50,status:"active"}}),s("vui-progress",{attrs:{percentage:70,status:"exception"}}),s("vui-progress",{attrs:{percentage:100}}),s("vui-progress",{attrs:{percentage:50,showInfo:!1}})],1)]),s("template",{slot:"title"},[e._v("进度条")]),s("template",{slot:"description"},[s("p",[e._v("处在不同状态下的进度条，当 "),s("code",[e._v("percentage")]),e._v(" 为 "),s("code",[e._v("100")]),e._v(" 时，自动将状态置为 "),s("code",[e._v("success")]),e._v("。")])])],2)}),[],!1,null,null,null).exports,l={components:{Example:a.a},data:function(){return{code:'<template>\n  <div class="example-progress-line-small">\n    <vui-progress size="small" v-bind:percentage="30" />\n    <vui-progress size="small" v-bind:percentage="50" status="active" />\n    <vui-progress size="small" v-bind:percentage="70" status="exception" />\n    <vui-progress size="small" v-bind:percentage="100" />\n    <vui-progress size="small" v-bind:percentage="50" v-bind:showInfo="false" />\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-progress-line-small { width: 240px; }\n  .example-progress-line-small .vui-progress + .vui-progress { margin-top:16px; }\n</style>\n'}}},c=(s("f8a9"),Object(p.a)(l,(function(){var e=this.$createElement,t=this._self._c||e;return t("example",{attrs:{code:this.code,id:"example-progress-line-small"}},[t("template",{slot:"demo"},[t("div",{staticClass:"example-progress-line-small"},[t("vui-progress",{attrs:{size:"small",percentage:30}}),t("vui-progress",{attrs:{size:"small",percentage:50,status:"active"}}),t("vui-progress",{attrs:{size:"small",percentage:70,status:"exception"}}),t("vui-progress",{attrs:{size:"small",percentage:100}}),t("vui-progress",{attrs:{size:"small",percentage:50,showInfo:!1}})],1)]),t("template",{slot:"title"},[this._v("小型进度条")]),t("template",{slot:"description"},[t("p",[this._v("适合放在较狭窄的区域内。")])])],2)}),[],!1,null,null,null).exports),v={components:{Example:a.a},data:function(){return{code:'<template>\n  <div class="example-progress-circle">\n    <vui-progress type="circle" v-bind:percentage="75" />\n    <vui-progress type="circle" v-bind:percentage="75" status="exception" />\n    <vui-progress type="circle" v-bind:percentage="100" />\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-progress-circle { display:flex; justify-content:flex-start; align-items:center; }\n  .example-progress-circle .vui-progress + .vui-progress { margin-left:16px; }\n</style>\n'}}},d=(s("c902"),Object(p.a)(v,(function(){var e=this.$createElement,t=this._self._c||e;return t("example",{attrs:{code:this.code,id:"example-progress-circle"}},[t("template",{slot:"demo"},[t("div",{staticClass:"example-progress-circle"},[t("vui-progress",{attrs:{type:"circle",percentage:75}}),t("vui-progress",{attrs:{type:"circle",percentage:75,status:"exception"}}),t("vui-progress",{attrs:{type:"circle",percentage:100}})],1)]),t("template",{slot:"title"},[this._v("进度环")]),t("template",{slot:"description"},[t("p",[this._v("环形的进度。")])])],2)}),[],!1,null,null,null).exports),u={components:{Example:a.a},data:function(){return{code:'<template>\n  <div class="example-progress-circle-small">\n    <vui-progress type="circle" size="small" v-bind:percentage="75" />\n    <vui-progress type="circle" size="small" v-bind:percentage="75" status="exception" />\n    <vui-progress type="circle" size="small" v-bind:percentage="100" />\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-progress-circle-small { display:flex; justify-content:flex-start; align-items:center; }\n  .example-progress-circle-small .vui-progress + .vui-progress { margin-left:16px; }\n</style>\n'}}},m=(s("e8ff"),Object(p.a)(u,(function(){var e=this.$createElement,t=this._self._c||e;return t("example",{attrs:{code:this.code,id:"example-progress-circle-small"}},[t("template",{slot:"demo"},[t("div",{staticClass:"example-progress-circle-small"},[t("vui-progress",{attrs:{type:"circle",size:"small",percentage:75}}),t("vui-progress",{attrs:{type:"circle",size:"small",percentage:75,status:"exception"}}),t("vui-progress",{attrs:{type:"circle",size:"small",percentage:100}})],1)]),t("template",{slot:"title"},[this._v("小型进度环")]),t("template",{slot:"description"},[t("p",[this._v("适合放在较狭窄的区域内。")])])],2)}),[],!1,null,null,null).exports),g={components:{Example:a.a},data:function(){return{code:'<template>\n  <div class="example-progress-dashboard">\n    <vui-progress type="dashboard" v-bind:percentage="75" />\n    <vui-progress type="dashboard" v-bind:percentage="75" status="exception" />\n    <vui-progress type="dashboard" v-bind:percentage="100" />\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-progress-dashboard { display:flex; justify-content:flex-start; align-items:center; }\n  .example-progress-dashboard .vui-progress + .vui-progress { margin-left:16px; }\n</style>\n'}}},_=(s("0c1a"),Object(p.a)(g,(function(){var e=this.$createElement,t=this._self._c||e;return t("example",{attrs:{code:this.code,id:"example-progress-dashboard"}},[t("template",{slot:"demo"},[t("div",{staticClass:"example-progress-dashboard"},[t("vui-progress",{attrs:{type:"dashboard",percentage:75}}),t("vui-progress",{attrs:{type:"dashboard",percentage:75,status:"exception"}}),t("vui-progress",{attrs:{type:"dashboard",percentage:100}})],1)]),t("template",{slot:"title"},[this._v("仪表盘")]),t("template",{slot:"description"},[t("p",[this._v("通过设置 "),t("code",[this._v("type")]),this._v(" 为 "),t("code",[this._v("dashboard")]),this._v("，可以很方便地实现仪表盘样式的进度条。")])])],2)}),[],!1,null,null,null).exports),x={components:{Example:a.a},data:function(){return{code:'<template>\n  <div class="example-progress-dynamic">\n    <vui-button-group>\n      <vui-button icon="minus" v-on:click="handleDecrease" />\n      <vui-button icon="plus" v-on:click="handleIncrease" />\n    </vui-button-group>\n    <vui-progress v-bind:percentage="percentage" />\n    <vui-space block>\n      <vui-progress type="circle" v-bind:percentage="percentage" />\n      <vui-progress type="dashboard" v-bind:percentage="percentage" />\n    </vui-space>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        percentage: 10\n      };\n    },\n    methods: {\n      handleDecrease() {\n        let percentage = this.percentage - 10;\n\n        if (percentage < 0) {\n          percentage = 0;\n        }\n\n        this.percentage = percentage;\n      },\n      handleIncrease() {\n        let percentage = this.percentage + 10;\n\n        if (percentage > 100) {\n          percentage = 100;\n        }\n\n        this.percentage = percentage;\n      }\n    }\n  };\n<\/script>\n\n<style>\n  .example-progress-dynamic .vui-progress-line { margin-top:16px; margin-bottom:16px; }\n</style>\n',percentage:10}},methods:{handleDecrease:function(){var e=this.percentage-10;e<0&&(e=0),this.percentage=e},handleIncrease:function(){var e=this.percentage+10;e>100&&(e=100),this.percentage=e}}},h=(s("a5c9"),Object(p.a)(x,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("example",{attrs:{code:e.code,id:"example-progress-dynamic"}},[s("template",{slot:"demo"},[s("div",{staticClass:"example-progress-dynamic"},[s("vui-button-group",[s("vui-button",{attrs:{icon:"minus"},on:{click:e.handleDecrease}}),s("vui-button",{attrs:{icon:"plus"},on:{click:e.handleIncrease}})],1),s("vui-progress",{attrs:{percentage:e.percentage}}),s("vui-space",{attrs:{block:""}},[s("vui-progress",{attrs:{type:"circle",percentage:e.percentage}}),s("vui-progress",{attrs:{type:"dashboard",percentage:e.percentage}})],1)],1)]),s("template",{slot:"title"},[e._v("动态展示")]),s("template",{slot:"description"},[s("p",[e._v("通过数据的联动和逻辑控制，实现动态效果。")])])],2)}),[],!1,null,null,null).exports),f={components:{Example:a.a},data:function(){return{code:'<template>\n  <div class="example-progress-formatter">\n    <vui-progress type="circle" v-bind:percentage="75" v-bind:formatter="formatter" />\n    <vui-progress type="circle" v-bind:percentage="100" v-bind:formatter="formatter" />\n  </div>\n</template>\n\n<script>\n  export default {\n    methods: {\n      formatter(percentage) {\n        return percentage < 100 ? (percentage + "Days") : "Done";\n      }\n    }\n  };\n<\/script>\n\n<style>\n  .example-progress-formatter { display:flex; justify-content:flex-start; align-items:center; }\n  .example-progress-formatter .vui-progress + .vui-progress { margin-left:16px; }\n</style>\n'}},methods:{formatter:function(e){return e<100?"".concat(e," Days"):"Done"}}},b=(s("fc00"),Object(p.a)(f,(function(){var e=this.$createElement,t=this._self._c||e;return t("example",{attrs:{code:this.code,id:"example-progress-formatter"}},[t("template",{slot:"demo"},[t("div",{staticClass:"example-progress-formatter"},[t("vui-progress",{attrs:{type:"circle",percentage:75,formatter:this.formatter}}),t("vui-progress",{attrs:{type:"circle",percentage:100,formatter:this.formatter}})],1)]),t("template",{slot:"title"},[this._v("自定义文字格式")]),t("template",{slot:"description"},[t("p",[this._v("利用 "),t("code",[this._v("formatter")]),this._v(" 属性指定文字格式。")])])],2)}),[],!1,null,null,null).exports),y={components:{Example:a.a},data:function(){return{code:'<template>\n  <div class="example-progress-stroke-color">\n    <vui-progress v-bind:percentage="50" strokeColor="#722ed1" />\n    <vui-space block>\n      <vui-progress type="circle" v-bind:percentage="75" status="exception" strokeColor="#f8ac59" />\n      <vui-progress type="dashboard" v-bind:percentage="100" strokeColor="#1ab394" />\n    </vui-space>\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-progress-stroke-color .vui-progress-line { margin-bottom:16px; }\n</style>\n'}}},k=(s("5ede"),Object(p.a)(y,(function(){var e=this.$createElement,t=this._self._c||e;return t("example",{attrs:{code:this.code,id:"example-progress-stroke-color"}},[t("template",{slot:"demo"},[t("div",{staticClass:"example-progress-stroke-color"},[t("vui-progress",{attrs:{percentage:50,strokeColor:"#722ed1"}}),t("vui-space",{attrs:{block:""}},[t("vui-progress",{attrs:{type:"circle",percentage:75,status:"exception",strokeColor:"#f8ac59"}}),t("vui-progress",{attrs:{type:"dashboard",percentage:100,strokeColor:"#1ab394"}})],1)],1)]),t("template",{slot:"title"},[this._v("自定义颜色")]),t("template",{slot:"description"},[t("p",[this._v("通过 "),t("code",[this._v("strokeColor")]),this._v(" 自定义颜色（会覆盖 "),t("code",[this._v("status")]),this._v(" 状态下的默认颜色）。")])])],2)}),[],!1,null,null,null).exports),E={components:{Example:a.a},data:function(){return{code:'<template>\n  <div class="example-progress-stroke-linecap">\n    <vui-progress v-bind:percentage="50" strokeLinecap="square" />\n    <vui-space block>\n      <vui-progress type="circle" v-bind:percentage="75" status="exception" strokeLinecap="square" />\n      <vui-progress type="dashboard" v-bind:percentage="100" strokeLinecap="square" />\n    </vui-space>\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-progress-stroke-linecap .vui-progress-line { margin-bottom:16px; }\n</style>\n'}}},C=(s("bd46"),Object(p.a)(E,(function(){var e=this.$createElement,t=this._self._c||e;return t("example",{attrs:{code:this.code,id:"example-progress-stroke-linecap"}},[t("template",{slot:"demo"},[t("div",{staticClass:"example-progress-stroke-linecap"},[t("vui-progress",{attrs:{percentage:50,strokeLinecap:"square"}}),t("vui-space",{attrs:{block:""}},[t("vui-progress",{attrs:{type:"circle",percentage:75,status:"exception",strokeLinecap:"square"}}),t("vui-progress",{attrs:{type:"dashboard",percentage:100,strokeLinecap:"square"}})],1)],1)]),t("template",{slot:"title"},[this._v("线条边缘形状")]),t("template",{slot:"description"},[t("p",[this._v("通过 "),t("code",[this._v("strokeLinecap")]),this._v(" 可以调整线条边缘形状。")])])],2)}),[],!1,null,null,null).exports),w={mixins:[r.a],components:{Document:n.a,ExampleLine:o,ExampleLineSmall:c,ExampleCircle:d,ExampleCircleSmall:m,ExampleDashboard:_,ExampleDynamic:h,ExampleFormatter:b,ExampleStrokeColor:k,ExampleStrokeLinecap:C}},z=Object(p.a)(w,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("document",[s("h1",[e._v("Progress 进度条")]),s("p",[e._v("展示操作的当前进度。")]),s("h2",[e._v("何时使用")]),s("p",[e._v("在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。")]),s("ul",[s("li",[e._v("当一个操作会打断当前界面，或者需要在后台运行，且耗时可能超过 2 秒时；")]),s("li",[e._v("当需要显示一个操作完成的百分比时。")])]),s("h2",[e._v("代码演示")])]),s("vui-row",{attrs:{gutter:16}},[s("vui-col",{attrs:{span:12}},[s("example-line"),s("example-line-small"),s("example-circle"),s("example-circle-small"),s("example-dashboard")],1),s("vui-col",{attrs:{span:12}},[s("example-dynamic"),s("example-formatter"),s("example-stroke-color"),s("example-stroke-linecap")],1)],1),s("document",[s("h2",{attrs:{id:"example-api"}},[e._v("API")]),s("h3",[e._v("Progress 共用属性")]),s("table",{staticClass:"example-api-props"},[s("thead",[s("tr",[s("th",{attrs:{width:"140"}},[e._v("属性")]),s("th",[e._v("说明")]),s("th",{attrs:{width:"160"}},[e._v("类型")]),s("th",{attrs:{width:"140"}},[e._v("默认值")])])]),s("tbody",[s("tr",[s("td",[e._v("type")]),s("td",[e._v("类型，可选值为 "),s("code",[e._v("line")]),e._v("、"),s("code",[e._v("circle")]),e._v("、"),s("code",[e._v("dashboard")]),e._v(" 或者不设")]),s("td",[e._v("String")]),s("td",[e._v("line")])]),s("tr",[s("td",[e._v("size")]),s("td",[e._v("尺寸，可选值为 "),s("code",[e._v("small")]),e._v("、"),s("code",[e._v("medium")]),e._v("、"),s("code",[e._v("large")]),e._v(" 或者不设")]),s("td",[e._v("String")]),s("td",[e._v("medium")])]),s("tr",[s("td",[e._v("percentage")]),s("td",[e._v("百分比，可选值 "),s("code",[e._v("0")]),e._v(" 至 "),s("code",[e._v("100")])]),s("td",[e._v("Number")]),s("td",[e._v("0")])]),s("tr",[s("td",[e._v("status")]),s("td",[e._v("状态，可选值 "),s("code",[e._v("normal")]),e._v("、"),s("code",[e._v("active")]),e._v("、"),s("code",[e._v("exception")]),e._v("、"),s("code",[e._v("success")]),e._v(" 或者不设，其中 "),s("code",[e._v("active")]),e._v(" 状态仅限 "),s("code",[e._v("line")]),e._v(" 类型下可用")]),s("td",[e._v("String")]),s("td",[e._v("normal")])]),s("tr",[s("td",[e._v("trackColor")]),s("td",[e._v("轨道的颜色")]),s("td",[e._v("String")]),s("td",[e._v("--")])]),s("tr",[s("td",[e._v("strokeColor")]),s("td",[e._v("进度条的颜色，会覆盖 "),s("code",[e._v("status")]),e._v(" 状态下的默认颜色")]),s("td",[e._v("String")]),s("td",[e._v("--")])]),s("tr",[s("td",[e._v("strokeWidth")]),s("td",[e._v("进度条的宽度，单位 "),s("code",[e._v("px")]),e._v("，默认值为 "),s("code",[e._v("{ small: 6, medium: 8, large: 10 }")])]),s("td",[e._v("Number")]),s("td",[e._v("--")])]),s("tr",[s("td",[e._v("strokeLinecap")]),s("td",[e._v("进度条的边缘形状，可选值为 "),s("code",[e._v("round")]),e._v("、"),s("code",[e._v("square")]),e._v(" 或者不设")]),s("td",[e._v("String")]),s("td",[e._v("round")])]),s("tr",[s("td",[e._v("formatter")]),s("td",[e._v("内容的模板函数，接收 "),s("code",[e._v("percentage")]),e._v(" 作为参数")]),s("td",[e._v("Function")]),s("td",[e._v("--")])]),s("tr",[s("td",[e._v("showInfo")]),s("td",[e._v("是否显示进度数值或状态图标")]),s("td",[e._v("Boolean")]),s("td",[e._v("true")])])])]),s("h3",[e._v("Progress Circle 属性")]),s("table",{staticClass:"example-api-props"},[s("thead",[s("tr",[s("th",{attrs:{width:"140"}},[e._v("属性")]),s("th",[e._v("说明")]),s("th",{attrs:{width:"160"}},[e._v("类型")]),s("th",{attrs:{width:"140"}},[e._v("默认值")])])]),s("tbody",[s("tr",[s("td",[e._v("width")]),s("td",[e._v("进度环的画布宽度，单位 "),s("code",[e._v("px")]),e._v("，默认值为 "),s("code",[e._v("{ small: 80, medium: 120, large: 160 }")])]),s("td",[e._v("Number")]),s("td",[e._v("--")])])])]),s("h3",[e._v("Progress Dashboard 属性")]),s("table",{staticClass:"example-api-props"},[s("thead",[s("tr",[s("th",{attrs:{width:"140"}},[e._v("属性")]),s("th",[e._v("说明")]),s("th",{attrs:{width:"160"}},[e._v("类型")]),s("th",{attrs:{width:"140"}},[e._v("默认值")])])]),s("tbody",[s("tr",[s("td",[e._v("width")]),s("td",[e._v("仪表盘的画布宽度，单位 "),s("code",[e._v("px")]),e._v("，默认值为 "),s("code",[e._v("{ small: 80, medium: 120, large: 160 }")])]),s("td",[e._v("Number")]),s("td",[e._v("--")])]),s("tr",[s("td",[e._v("gapDegree")]),s("td",[e._v("仪表盘的缺口角度，可选值 "),s("code",[e._v("0")]),e._v(" 至 "),s("code",[e._v("295")])]),s("td",[e._v("Number")]),s("td",[e._v("75")])])])])])],1)}),[],!1,null,null,null);t.default=z.exports},"67bb":function(e,t,s){"use strict";s("e055")},6857:function(e,t,s){},7309:function(e,t,s){},a5c9:function(e,t,s){"use strict";s("6857")},bd46:function(e,t,s){"use strict";s("4597")},c50d:function(e,t,s){},c902:function(e,t,s){"use strict";s("cbc7")},cbc7:function(e,t,s){},e055:function(e,t,s){},e8ff:function(e,t,s){"use strict";s("fe48")},e98c:function(e,t,s){},f8a9:function(e,t,s){"use strict";s("7309")},fc00:function(e,t,s){"use strict";s("2ce5")},fe48:function(e,t,s){}}]);