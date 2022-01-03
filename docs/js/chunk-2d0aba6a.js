(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d0aba6a"],{"15d4":function(e,t,a){"use strict";a.r(t);var i=a("d58b"),n=a("240e"),l=a("1a42"),v={components:{Example:l.a},data:function(){return{code:'<template>\n  <div class="example-time-basic-usage">\n    <vui-time v-bind:value="value1" />\n    <br />\n    <vui-time v-bind:value="value2" />\n    <br />\n    <vui-time v-bind:value="value3" />\n    <br />\n    <vui-time v-bind:value="value4" />\n    <br />\n    <vui-time v-bind:value="value5" />\n    <br />\n    <vui-time v-bind:value="value6" />\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value1: new Date("2014-01-01"),\n        value2: "2019-04-01",\n        value3: new Date().getTime() - 5 * 24 * 60 * 60 * 1000,\n        value4: new Date().getTime() - 5 * 60 * 60 * 1000,\n        value5: new Date().getTime() - 5 * 60 * 1000,\n        value6: new Date().getTime()\n      };\n    }\n  };\n<\/script>\n',value1:new Date("2014-01-01"),value2:"2019-04-01",value3:(new Date).getTime()-432e6,value4:(new Date).getTime()-18e6,value5:(new Date).getTime()-3e5,value6:(new Date).getTime()}}},u=a("2877"),r=Object(u.a)(v,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("example",{attrs:{code:e.code,id:"example-time-basic-usage"}},[a("template",{slot:"demo"},[a("div",{staticClass:"example-time-basic-usage"},[a("vui-time",{attrs:{value:e.value1}}),a("br"),a("vui-time",{attrs:{value:e.value2}}),a("br"),a("vui-time",{attrs:{value:e.value3}}),a("br"),a("vui-time",{attrs:{value:e.value4}}),a("br"),a("vui-time",{attrs:{value:e.value5}}),a("br"),a("vui-time",{attrs:{value:e.value6}})],1)]),a("template",{slot:"title"},[e._v("基本用法")]),a("template",{slot:"description"},[a("p",[e._v("设置一个 "),a("code",[e._v("Date")]),e._v(" 对象、日期字符串或时间戳，可自动转换为相对于此时此刻的时间描述。")])])],2)}),[],!1,null,null,null).exports,s={components:{Example:l.a},data:function(){return{code:'<template>\n  <div class="example-time-type">\n    <vui-time v-bind:value="value" />\n    <br />\n    <vui-time type="date" v-bind:value="value" />\n    <br />\n    <vui-time type="datetime" v-bind:value="value" />\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: new Date().getTime() - 5 * 24 * 60 * 60 * 1000\n      };\n    }\n  };\n<\/script>\n',value:(new Date).getTime()-432e6}}},m=Object(u.a)(s,(function(){var e=this.$createElement,t=this._self._c||e;return t("example",{attrs:{code:this.code,id:"example-time-type"}},[t("template",{slot:"demo"},[t("div",{staticClass:"example-time-type"},[t("vui-time",{attrs:{value:this.value}}),t("br"),t("vui-time",{attrs:{type:"date",value:this.value}}),t("br"),t("vui-time",{attrs:{type:"datetime",value:this.value}})],1)]),t("template",{slot:"title"},[this._v("显示类型")]),t("template",{slot:"description"},[t("p",[this._v("可以根据情况，设置不同的显示类型。")])])],2)}),[],!1,null,null,null).exports,d={components:{Example:l.a},data:function(){return{code:'<template>\n  <div class="example-time-interval">\n    <vui-time v-bind:value="value" v-bind:interval="interval" />\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: new Date().getTime(),\n        interval: 5 * 60\n      };\n    }\n  };\n<\/script>\n',value:(new Date).getTime(),interval:300}}},p=Object(u.a)(d,(function(){var e=this.$createElement,t=this._self._c||e;return t("example",{attrs:{code:this.code,id:"example-time-interval"}},[t("template",{slot:"demo"},[t("div",{staticClass:"example-time-interval"},[t("vui-time",{attrs:{value:this.value,interval:this.interval}})],1)]),t("template",{slot:"title"},[this._v("更新间隔")]),t("template",{slot:"description"},[t("p",[this._v("设置自动更新间隔，默认为 "),t("code",[this._v("60")]),this._v(" 秒。")])])],2)}),[],!1,null,null,null).exports,c={mixins:[i.a],components:{Document:n.a,ExampleBasicUsage:r,ExampleType:m,ExampleInterval:p}},o=Object(u.a)(c,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("document",[a("h1",[e._v("Time 相对时间")]),a("p",[e._v("用于表示几分钟前、几小时前等相对于此时此刻的时间描述。")]),a("h2",[e._v("何时使用")]),a("p",[e._v("使用相对时间标记一条信息或资讯的发布时间。")]),a("h2",[e._v("代码演示")])]),a("vui-row",{attrs:{gutter:20}},[a("vui-col",{attrs:{span:12}},[a("example-basic-usage")],1),a("vui-col",{attrs:{span:12}},[a("example-type"),a("example-interval")],1)],1),a("document",[a("h2",{attrs:{id:"example-api"}},[e._v("API")]),a("h3",[e._v("Time 属性")]),a("table",{staticClass:"example-api-props"},[a("thead",[a("tr",[a("th",{attrs:{width:"140"}},[e._v("属性")]),a("th",[e._v("说明")]),a("th",{attrs:{width:"220"}},[e._v("类型")]),a("th",{attrs:{width:"140"}},[e._v("默认值")])])]),a("tbody",[a("tr",[a("td",[e._v("type")]),a("td",[e._v("显示类型，可选值为 "),a("code",[e._v("relative")]),e._v("、"),a("code",[e._v("date")]),e._v("、"),a("code",[e._v("datetime")]),e._v(" 或者不设")]),a("td",[e._v("String")]),a("td",[e._v("relative")])]),a("tr",[a("td",[e._v("value")]),a("td",[e._v("需要对比的时间，可以是日期字符串、时间戳或 "),a("code",[e._v("Date")]),e._v(" 对象")]),a("td",[e._v("String | Number | Date")]),a("td",[e._v("--")])]),a("tr",[a("td",[e._v("interval")]),a("td",[e._v("自动更新间隔，单位：秒")]),a("td",[e._v("Number")]),a("td",[e._v("60")])])])])])],1)}),[],!1,null,null,null);t.default=o.exports}}]);