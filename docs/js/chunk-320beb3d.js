(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-320beb3d"],{"1d11":function(e,t,s){"use strict";s.r(t);var n=s("d58b"),o=s("240e"),a=s("1a42"),i={components:{Example:a.a},data:function(){return{code:'<template>\n  <vui-button type="primary" @click="showNormalMessage">Normal</vui-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      showNormalMessage() {\n        this.$message.open("This is a normal message");\n      }\n    }\n  };\n<\/script>\n'}},methods:{showNormalMessage:function(){this.$message.open("This is a normal message")}}},c=s("2877"),l=Object(c.a)(i,(function(){var e=this.$createElement,t=this._self._c||e;return t("example",{attrs:{code:this.code,id:"example-message-basic-usage"}},[t("template",{slot:"demo"},[t("vui-button",{attrs:{type:"primary"},on:{click:this.showNormalMessage}},[this._v("Normal")])],1),t("template",{slot:"title"},[this._v("基本用法")]),t("template",{slot:"description"},[t("p",[this._v("基本用法，适用于简短的警告提示。")])])],2)}),[],!1,null,null,null).exports,r={components:{Example:a.a},data:function(){return{code:'<template>\n  <div class="example-message-type">\n    <vui-button type="info" @click="showInfoMessage">Info</vui-button>\n    <vui-button type="warning" @click="showWarningMessage">Warning</vui-button>\n    <vui-button type="success" @click="showSuccessMessage">Success</vui-button>\n    <vui-button type="error" @click="showErrorMessage">Error</vui-button>\n  </div>\n</template>\n\n<script>\n  export default {\n    methods: {\n      showInfoMessage() {\n        this.$message.info("This is a info message");\n      },\n      showWarningMessage() {\n        this.$message.warning("This is a warning message");\n      },\n      showSuccessMessage() {\n        this.$message.success("This is a success message");\n      },\n      showErrorMessage() {\n        this.$message.error("This is a error message");\n      }\n    }\n  };\n<\/script>\n'}},methods:{showInfoMessage:function(){this.$message.info("This is a info message")},showWarningMessage:function(){this.$message.warning("This is a warning message")},showSuccessMessage:function(){this.$message.success("This is a success message")},showErrorMessage:function(){this.$message.error("This is a error message")}}},u=(s("6e53"),Object(c.a)(r,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("example",{attrs:{code:e.code,id:"example-message-type"}},[s("template",{slot:"demo"},[s("div",{staticClass:"example-message-type"},[s("vui-button",{attrs:{type:"info"},on:{click:e.showInfoMessage}},[e._v("Info")]),s("vui-button",{attrs:{type:"warning"},on:{click:e.showWarningMessage}},[e._v("Warning")]),s("vui-button",{attrs:{type:"success"},on:{click:e.showSuccessMessage}},[e._v("Success")]),s("vui-button",{attrs:{type:"error"},on:{click:e.showErrorMessage}},[e._v("Error")])],1)]),s("template",{slot:"title"},[e._v("提示类型")]),s("template",{slot:"description"},[s("p",[e._v("不同的提示类型："),s("code",[e._v("info")]),e._v("、"),s("code",[e._v("warning")]),e._v("、"),s("code",[e._v("success")]),e._v("、"),s("code",[e._v("error")]),e._v("。")])])],2)}),[],!1,null,null,null).exports),d={components:{Example:a.a},data:function(){return{code:'<template>\n  <vui-button type="primary" @click="showLoadingMessage">Loading</vui-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      showLoadingMessage() {\n        const loading = this.$message.loading({\n          content: "Action in progress..",\n          duration: 0\n        });\n\n        setTimeout(() => {\n          loading.close();\n          this.$message.success("Action succeeded");\n        }, 3000);\n      }\n    }\n  };\n<\/script>\n'}},methods:{showLoadingMessage:function(){var e=this,t=this.$message.loading({content:"Action in progress..",duration:0});setTimeout((function(){t.close(),e.$message.success("Action succeeded")}),3e3)}}},v=Object(c.a)(d,(function(){var e=this.$createElement,t=this._self._c||e;return t("example",{attrs:{code:this.code,id:"example-message-loading"}},[t("template",{slot:"demo"},[t("vui-button",{attrs:{type:"primary"},on:{click:this.showLoadingMessage}},[this._v("Loading")])],1),t("template",{slot:"title"},[this._v("加载中")]),t("template",{slot:"description"},[t("p",[this._v("进行全局 loading，异步自行移除。")])])],2)}),[],!1,null,null,null).exports,m={components:{Example:a.a},data:function(){return{code:'<template>\n  <vui-button type="primary" @click="showDurationMessage">Customized duration</vui-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      showDurationMessage() {\n        this.$message.info({\n          content: "I\'ll be gone in 10 seconds..",\n          duration: 10\n        });\n      }\n    }\n  };\n<\/script>\n'}},methods:{showDurationMessage:function(){this.$message.info({content:"I'll be gone in 10 seconds..",duration:10})}}},p=Object(c.a)(m,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("example",{attrs:{code:e.code,id:"example-message-duration"}},[s("template",{slot:"demo"},[s("vui-button",{attrs:{type:"primary"},on:{click:e.showDurationMessage}},[e._v("Customized duration")])],1),s("template",{slot:"title"},[e._v("修改延时")]),s("template",{slot:"description"},[s("p",[e._v("自定义停留时长为 "),s("code",[e._v("10s")]),e._v("，默认为 "),s("code",[e._v("3s")]),e._v("。取消自动关闭只需将 "),s("code",[e._v("duration")]),e._v(" 设为 "),s("code",[e._v("0")]),e._v(" 即可。")])])],2)}),[],!1,null,null,null).exports,g={components:{Example:a.a},data:function(){return{code:'<template>\n  <vui-button type="primary" @click="showClosableMessage">Closable</vui-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      showClosableMessage() {\n        this.$message.info({\n          content: "This is a message that can be closed manually",\n          duration: 10,\n          closable: true\n        });\n      }\n    }\n  };\n<\/script>\n'}},methods:{showClosableMessage:function(){this.$message.info({content:"This is a message that can be closed manually",duration:10,closable:!0})}}},_=Object(c.a)(g,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("example",{attrs:{code:e.code,id:"example-message-closable"}},[s("template",{slot:"demo"},[s("vui-button",{attrs:{type:"primary"},on:{click:e.showClosableMessage}},[e._v("Closable")])],1),s("template",{slot:"title"},[e._v("可关闭")]),s("template",{slot:"description"},[s("p",[e._v("将参数设置为一个对象，并指定 "),s("code",[e._v("closable")]),e._v(" 为 "),s("code",[e._v("true")]),e._v(" 后可以手动关闭提示，完整参数详见下述 API 文档。")])])],2)}),[],!1,null,null,null).exports,h={components:{Example:a.a},data:function(){return{code:'<template>\n  <div class="example-message-more-content">\n    <vui-button type="primary" @click="showVNodeMessage">VNode</vui-button>\n    <vui-button type="primary" @click="showFunctionMessage">Function</vui-button>\n  </div>\n</template>\n\n<script>\n  export default {\n    methods: {\n      showVNodeMessage() {\n        const content = (\n          <div>The message content is <span style="color: #2d8cf0;">VNode</span> virtual node.</div>\n        );\n\n        this.$message.info({\n          content\n        });\n      },\n      showFunctionMessage() {\n        this.$message.info({\n          content(h) {\n            return h("div", null, "I was returned by a function.");\n          }\n        });\n      }\n    }\n  };\n<\/script>\n\n<style>\n  .example-message-more-content .vui-button + .vui-button { margin-left:10px; }\n</style>\n'}},methods:{showVNodeMessage:function(){var e=this.$createElement,t=e("div",["The message content is ",e("span",{style:"color: #2d8cf0;"},["VNode"])," virtual node."]);this.$message.info({content:t})},showFunctionMessage:function(){this.$message.info({content:function(e){return e("div",null,"I was returned by a function.")}})}}},f=(s("3bc3"),Object(c.a)(h,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("example",{attrs:{code:e.code,id:"example-message-more-content"}},[s("template",{slot:"demo"},[s("div",{staticClass:"example-message-more-content"},[s("vui-button",{attrs:{type:"primary"},on:{click:e.showVNodeMessage}},[e._v("VNode")]),s("vui-button",{attrs:{type:"primary"},on:{click:e.showFunctionMessage}},[e._v("Function")])],1)]),s("template",{slot:"title"},[e._v("更多内容")]),s("template",{slot:"description"},[s("p",[e._v("选项 "),s("code",[e._v("content")]),e._v(" 支持传入 VNode 虚拟节点。")]),s("p",[e._v("另外，您也可以将它设置为一个回调函数，该函数接收 "),s("code",[e._v("createElement")]),e._v(" 作为参数，您所需要做的就是在函数内部返回提示内容即可。")])])],2)}),[],!1,null,null,null).exports),b={mixins:[n.a],components:{Document:o.a,ExampleMessageBasicUsage:l,ExampleMessageType:u,ExampleMessageLoading:v,ExampleMessageDuration:p,ExampleMessageClosable:_,ExampleMessageMoreContent:f}},w=Object(c.a)(b,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("document",[s("h1",[e._v("Message 消息提示")]),s("p",[e._v("全局展示操作反馈信息。")]),s("h2",[e._v("何时使用")]),s("ul",[s("li",[e._v("可提供信息、警告、成功和失败等反馈信息。")]),s("li",[e._v("顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。")])]),s("h2",[e._v("代码演示")])]),s("vui-row",{attrs:{gutter:20}},[s("vui-col",{attrs:{span:12}},[s("ExampleMessageBasicUsage"),s("ExampleMessageType"),s("ExampleMessageLoading")],1),s("vui-col",{attrs:{span:12}},[s("ExampleMessageDuration"),s("ExampleMessageClosable"),s("ExampleMessageMoreContent")],1)],1),s("document",[s("h2",{attrs:{id:"example-api"}},[e._v("API")]),s("p",[s("code",[e._v("Vui")]),e._v(" 为 "),s("code",[e._v("Vue.prototype")]),e._v(" 添加了全局方法 "),s("code",[e._v("$message")]),e._v("，可以直接通过以下方式来使用：")]),s("ul",[s("li",[s("code",[e._v("this.$message.open(options)")])]),s("li",[s("code",[e._v("this.$message.info(options)")])]),s("li",[s("code",[e._v("this.$message.warning(options)")])]),s("li",[s("code",[e._v("this.$message.success(options)")])]),s("li",[s("code",[e._v("this.$message.error(options)")])]),s("li",[s("code",[e._v("this.$message.loading(options)")])])]),s("p",[e._v("以上方式隐式的创建及维护 Vue 组件，参数 "),s("code",[e._v("options")]),e._v(" 可以是字符串、函数或对象。当为字符串或函数时，仅仅表示提示内容或返回内容的函数；当为对象时，具体说明如下：")]),s("table",{staticClass:"example-api-props"},[s("thead",[s("tr",[s("th",{attrs:{width:"100"}},[e._v("选项")]),s("th",[e._v("说明")]),s("th",{attrs:{width:"200"}},[e._v("类型")]),s("th",{attrs:{width:"100"}},[e._v("默认值")])])]),s("tbody",[s("tr",[s("td",[e._v("type")]),s("td",[e._v("提示类型，可选值为 "),s("code",[e._v("info")]),e._v("、"),s("code",[e._v("warning")]),e._v("、"),s("code",[e._v("success")]),e._v("、"),s("code",[e._v("error")]),e._v("、"),s("code",[e._v("loading")]),e._v(" 或者不设")]),s("td",[e._v("String")]),s("td",[s("code",[e._v("info")])])]),s("tr",[s("td",[e._v("content")]),s("td",[e._v("提示内容")]),s("td",[e._v("String | VNode | Function")]),s("td",[e._v("--")])]),s("tr",[s("td",[e._v("icon")]),s("td",[e._v("自定义图标类型")]),s("td",[e._v("String")]),s("td",[e._v("--")])]),s("tr",[s("td",[e._v("closable")]),s("td",[e._v("是否显示关闭按钮")]),s("td",[e._v("Boolean")]),s("td",[s("code",[e._v("false")])])]),s("tr",[s("td",[e._v("closeText")]),s("td",[e._v("关闭按钮文本，仅在 "),s("code",[e._v("closable")]),e._v(" 为 "),s("code",[e._v("true")]),e._v(" 时有效")]),s("td",[e._v("String")]),s("td",[e._v("--")])]),s("tr",[s("td",[e._v("duration")]),s("td",[e._v("停留时长，单位秒。设为 "),s("code",[e._v("0")]),e._v(" 时不会自动关闭")]),s("td",[e._v("Number")]),s("td",[s("code",[e._v("3")])])]),s("tr",[s("td",[e._v("open")]),s("td",[e._v("提示打开时触发的回调函数")]),s("td",[e._v("Function")]),s("td",[e._v("--")])]),s("tr",[s("td",[e._v("afterOpen")]),s("td",[e._v("提示完全打开时（打开动画完成后）触发的事件回调")]),s("td",[e._v("Function")]),s("td",[e._v("--")])]),s("tr",[s("td",[e._v("close")]),s("td",[e._v("提示关闭时触发的事件回调")]),s("td",[e._v("Function")]),s("td",[e._v("--")])]),s("tr",[s("td",[e._v("afterClose")]),s("td",[e._v("提示完全关闭时（关闭动画完成后）触发的事件回调")]),s("td",[e._v("Function")]),s("td",[e._v("--")])])])]),s("p",[e._v("以上方法调用后，均会返回一个引用，可以通过该引用更新和关闭消息提示。")]),s("ul",[s("li",[s("code",[e._v("message.update(options)")])]),s("li",[s("code",[e._v("message.close()")])])]),s("p",[e._v("其中 "),s("code",[e._v("message.upadte")]),e._v(" 方法的参数 "),s("code",[e._v("options")]),e._v(" 同 "),s("code",[e._v("this.$message[type]")]),e._v(" 方法一致。")])])],1)}),[],!1,null,null,null);t.default=w.exports},"3bc3":function(e,t,s){"use strict";s("cb8f")},"6e53":function(e,t,s){"use strict";s("e404")},cb8f:function(e,t,s){},e404:function(e,t,s){}}]);