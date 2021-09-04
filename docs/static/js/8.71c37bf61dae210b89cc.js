webpackJsonp([8],{"44hM":function(t,n){},H8He:function(t,n){},U7df:function(t,n){},aI1g:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("q77b"),s=e("6WqV"),a=e("RLuK"),l={components:{Example:a.a},data:function(){return{code:"<template>\n  <vui-spin />\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n"}}},p={render:function(){var t=this.$createElement,n=this._self._c||t;return n("example",{attrs:{code:this.code,id:"example-spin-basic-usage"}},[n("template",{slot:"demo"},[n("vui-spin")],1),n("template",{slot:"title"},[this._v("基本用法")]),n("template",{slot:"description"},[n("p",[this._v("一个简单的加载状态。")])])],2)},staticRenderFns:[]},o=e("VU/8")(l,p,!1,null,null,null).exports,r={components:{Example:a.a},data:function(){return{code:'<template>\n  <div class="example-spin-size">\n    <vui-spin size="small" />\n    <vui-spin />\n    <vui-spin size="large" />\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-spin-size > .vui-spin { margin-right:20px; }\n</style>\n'}}},d={render:function(){var t=this.$createElement,n=this._self._c||t;return n("example",{attrs:{code:this.code,id:"example-spin-size"}},[n("template",{slot:"demo"},[n("div",{staticClass:"example-spin-size"},[n("vui-spin",{attrs:{size:"small"}}),n("vui-spin"),n("vui-spin",{attrs:{size:"large"}})],1)]),n("template",{slot:"title"},[this._v("各种尺寸")]),n("template",{slot:"description"},[n("p",[this._v("建议将小型尺寸用于文本加载，默认尺寸用于卡片容器级加载，大型尺寸用于页面级加载。")])])],2)},staticRenderFns:[]};var c=e("VU/8")(r,d,!1,function(t){e("44hM")},null,null).exports,v={components:{Example:a.a},data:function(){return{code:'<template>\n    <div class="example-spin-inside">\n      <vui-spin />\n    </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-spin-inside { border-radius:2px; background-color:#fafafa; padding:50px; text-align:center; }\n</style>\n'}}},u={render:function(){var t=this.$createElement,n=this._self._c||t;return n("example",{attrs:{code:this.code,id:"example-spin-inside"}},[n("template",{slot:"demo"},[n("div",{staticClass:"example-spin-inside"},[n("vui-spin")],1)]),n("template",{slot:"title"},[this._v("容器")]),n("template",{slot:"description"},[n("p",[this._v("放入一个容器中。")])])],2)},staticRenderFns:[]};var m=e("VU/8")(v,u,!1,function(t){e("H8He")},null,null).exports,_={components:{Example:a.a},data:function(){return{code:'<template>\n  <div class="example-spin-nested">\n    <vui-switch v-model="spinning" />\n    <vui-spin v-bind:spinning="spinning">\n      <vui-alert\n        type="info"\n        message="Alert message title"\n        description="Further details about the context of this alert."\n      />\n    </vui-spin>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        spinning: false\n      };\n    }\n  };\n<\/script>\n\n<style>\n  .example-spin-nested .vui-spin { margin-top:20px; }\n</style>\n',spinning:!1}}},h={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("example",{attrs:{code:t.code,id:"example-spin-nested"}},[e("template",{slot:"demo"},[e("div",{staticClass:"example-spin-nested"},[e("vui-switch",{model:{value:t.spinning,callback:function(n){t.spinning=n},expression:"spinning"}}),e("vui-spin",{attrs:{spinning:t.spinning}},[e("vui-alert",{attrs:{type:"info",message:"Alert message title",description:"Further details about the context of this alert."}})],1)],1)]),e("template",{slot:"title"},[t._v("卡片加载中")]),e("template",{slot:"description"},[e("p",[t._v("可以直接把内容内嵌到 "),e("code",[t._v("Spin")]),t._v(" 中，将现有容器变为加载状态。")])])],2)},staticRenderFns:[]};var x=e("VU/8")(_,h,!1,function(t){e("yysK")},null,null).exports,g={components:{Example:a.a},data:function(){return{code:'<template>\n  <div class="example-spin-delay">\n    <vui-switch v-model="spinning" />\n    <vui-spin v-bind:delay="delay" v-bind:spinning="spinning">\n      <vui-alert\n        type="info"\n        message="Alert message title"\n        description="Further details about the context of this alert."\n      />\n    </vui-spin>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        delay: 500,\n        spinning: false\n      };\n    }\n  };\n<\/script>\n\n<style>\n  .example-spin-delay .vui-spin { margin-top:20px; }\n</style>\n',delay:500,spinning:!1}}},f={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("example",{attrs:{code:t.code,id:"example-spin-delay"}},[e("template",{slot:"demo"},[e("div",{staticClass:"example-spin-delay"},[e("vui-switch",{model:{value:t.spinning,callback:function(n){t.spinning=n},expression:"spinning"}}),e("vui-spin",{attrs:{delay:t.delay,spinning:t.spinning}},[e("vui-alert",{attrs:{type:"info",message:"Alert message title",description:"Further details about the context of this alert."}})],1)],1)]),e("template",{slot:"title"},[t._v("延迟")]),e("template",{slot:"description"},[e("p",[t._v("延迟显示 "),e("code",[t._v("spinning")]),t._v(" 效果，当 "),e("code",[t._v("spinning")]),t._v(" 状态在 "),e("code",[t._v("delay")]),t._v(" 时间内结束，则不显示 "),e("code",[t._v("spinning")]),t._v(" 状态。")])])],2)},staticRenderFns:[]};var y=e("VU/8")(g,f,!1,function(t){e("xSlk")},null,null).exports,S={components:{Example:a.a},data:function(){return{code:'<template>\n  <div class="example-spin-indicator">\n    <vui-spin>\n      <vui-icon slot="indicator" type="loading-filled" style="font-size: 24px" />\n    </vui-spin>\n    <vui-spin v-bind:indicator="indicator" />\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        indicator(h) {\n          return h("vui-icon", {\n            props: {\n              type: "loading-spinner"\n            },\n            style: {\n              fontSize: "24px"\n            }\n          });\n        }\n      };\n    }\n  };\n<\/script>\n\n<style>\n  .example-spin-indicator > .vui-spin { margin-right:20px; }\n</style>\n',indicator:function(t){return t("vui-icon",{props:{type:"loading-spinner"},style:{fontSize:"24px"}})}}}},b={render:function(){var t=this.$createElement,n=this._self._c||t;return n("example",{attrs:{code:this.code,id:"example-spin-indicator"}},[n("template",{slot:"demo"},[n("div",{staticClass:"example-spin-indicator"},[n("vui-spin",[n("vui-icon",{staticStyle:{"font-size":"24px"},attrs:{slot:"indicator",type:"loading-filled"},slot:"indicator"})],1),n("vui-spin",{attrs:{indicator:this.indicator}})],1)]),n("template",{slot:"title"},[this._v("自定义指示符")]),n("template",{slot:"description"},[n("p",[this._v("使用自定义指示符。")])])],2)},staticRenderFns:[]};var E=e("VU/8")(S,b,!1,function(t){e("dbuZ")},null,null).exports,w={components:{Example:a.a},data:function(){return{code:'<template>\n    <div class="example-spin-message">\n      <vui-spin message="Loading...">\n        <vui-alert\n          type="info"\n          message="Alert message title"\n          description="Further details about the context of this alert."\n        />\n      </vui-spin>\n    </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n'}}},F={render:function(){var t=this.$createElement,n=this._self._c||t;return n("example",{attrs:{code:this.code,id:"example-spin-message"}},[n("template",{slot:"demo"},[n("div",{staticClass:"example-spin-message"},[n("vui-spin",{attrs:{message:"Loading..."}},[n("vui-alert",{attrs:{type:"info",message:"Alert message title",description:"Further details about the context of this alert."}})],1)],1)]),n("template",{slot:"title"},[this._v("自定义消息文案")]),n("template",{slot:"description"},[n("p",[this._v("通过 "),n("code",[this._v("message")]),this._v(" 属性设置消息文案。")])])],2)},staticRenderFns:[]},z=e("VU/8")(w,F,!1,null,null,null).exports,k={components:{Example:a.a},data:function(){return{code:'<template>\n  <div class="example-spin-fullscreen">\n    <vui-button type="primary" v-on:click="showShowSpin">全屏加载，3秒后关闭</vui-button>\n    <vui-button outline v-on:click="showShowCustomSpin">自定义指示符</vui-button>\n  </div>\n</template>\n\n<script>\n  export default {\n    methods: {\n      showShowSpin() {\n        const spin = this.$spin.spinning();\n\n        setTimeout(() => spin.cancel(), 3000);\n      },\n      showShowCustomSpin() {\n        const spin = this.$spin.spinning({\n          indicator(h) {\n            const props = {\n              type: "loading-spinner"\n            };\n            const style = {\n              fontSize: "34px"\n            };\n\n            return h("vui-icon", { props, style });\n          },\n          background: "rgba(0, 0, 0, 0.5)"\n        });\n\n        setTimeout(() => spin.cancel(), 3000);\n      }\n    }\n  };\n<\/script>\n\n<style>\n  .example-spin-fullscreen > .vui-button { margin-right:10px; }\n</style>\n'}},methods:{showShowSpin:function(){var t=this.$spin.spinning();setTimeout(function(){return t.cancel()},3e3)},showShowCustomSpin:function(){var t=this.$spin.spinning({indicator:function(t){return t("vui-icon",{props:{type:"loading-spinner"},style:{fontSize:"34px"}})},background:"rgba(0, 0, 0, 0.5)"});setTimeout(function(){return t.cancel()},3e3)}}},$={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("example",{attrs:{code:t.code,id:"example-spin-fullscreen"}},[e("template",{slot:"demo"},[e("div",{staticClass:"example-spin-fullscreen"},[e("vui-button",{attrs:{type:"primary"},on:{click:t.showShowSpin}},[t._v("全屏加载，3秒后关闭")]),e("vui-button",{attrs:{outline:""},on:{click:t.showShowCustomSpin}},[t._v("自定义指示符")])],1)]),e("template",{slot:"title"},[t._v("全屏加载")]),e("template",{slot:"description"},[e("p",[t._v("全屏加载方式，可以使用 "),e("code",[t._v("Vue")]),t._v(" 的 "),e("code",[t._v("createElement")]),t._v(" 函数自定义指示符，"),e("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/render-function.html",target:"_blank"}},[t._v("学习渲染函数 & JSX")]),t._v("。")])])],2)},staticRenderFns:[]};var C=e("VU/8")(k,$,!1,function(t){e("U7df")},null,null).exports,U={mixins:[i.a],components:{Document:s.a,ExampleSpinBasicUsage:o,ExampleSpinSize:c,ExampleSpinInside:m,ExampleSpinNested:x,ExampleSpinDelay:y,ExampleSpinIndicator:E,ExampleSpinMessage:z,ExampleSpinFullscreen:C}},V={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("document",[e("h1",[t._v("Spin 加载中")]),e("p",[t._v("用于页面和区块的加载中状态。")]),e("h2",[t._v("何时使用")]),e("p",[t._v("页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。")]),e("h2",[t._v("代码演示")])]),e("vui-row",{attrs:{gutter:16}},[e("vui-col",{attrs:{span:12}},[e("ExampleSpinBasicUsage"),e("ExampleSpinSize"),e("ExampleSpinInside"),e("ExampleSpinNested")],1),e("vui-col",{attrs:{span:12}},[e("ExampleSpinDelay"),e("ExampleSpinIndicator"),e("ExampleSpinMessage"),e("ExampleSpinFullscreen")],1)],1),e("document",[e("h2",{attrs:{id:"example-api"}},[t._v("API")]),e("h3",[t._v("Spin 属性")]),e("table",{staticClass:"example-api-props"},[e("thead",[e("tr",[e("th",{attrs:{width:"80"}},[t._v("属性")]),e("th",[t._v("说明")]),e("th",{attrs:{width:"120"}},[t._v("类型")]),e("th",{attrs:{width:"80"}},[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("size")]),e("td",[t._v("尺寸，可选值为 "),e("code",[t._v("small")]),t._v("、"),e("code",[t._v("medium")]),t._v("、"),e("code",[t._v("large")]),t._v(" 或者不设")]),e("td",[t._v("String")]),e("td",[e("code",[t._v("medium")])])]),e("tr",[e("td",[t._v("spinning")]),e("td",[t._v("是否为加载中状态")]),e("td",[t._v("Boolean")]),e("td",[e("code",[t._v("true")])])]),e("tr",[e("td",[t._v("delay")]),e("td",[t._v("延迟显示加载效果的时间，单位毫秒（防止闪烁）")]),e("td",[t._v("Number")]),e("td",[t._v("--")])]),e("tr",[e("td",[t._v("indicator")]),e("td",[t._v("自定义加载指示符")]),e("td",[t._v("Function | Slot")]),e("td",[t._v("--")])]),e("tr",[e("td",[t._v("message")]),e("td",[t._v("自定义消息文案")]),e("td",[t._v("String | Slot")]),e("td",[t._v("--")])])])]),e("h3",[t._v("全局方法")]),e("p",[t._v("除了标准组件的使用方式，"),e("code",[t._v("Vui Design")]),t._v(" 还精心封装了一个实例方法，用来创建一次性的全屏加载提示。实例以隐式创建 "),e("code",[t._v("Spin")]),t._v(" 组件的方式在全局显示一个加载提示，并在取消时移除。您可以直接通过调用以下方法来使用：")]),e("ul",[e("li",[e("code",[t._v("const spin = this.$spin.spinning(options)")])])]),e("p",[t._v("以上方法隐式的创建及维护组件，参数 "),e("code",[t._v("options")]),t._v(" 可以是字符串或对象。当为字符串时，仅仅表示消息文案；当为对象时，具体说明如下：")]),e("table",{staticClass:"example-api-props"},[e("thead",[e("tr",[e("th",{attrs:{width:"80"}},[t._v("属性")]),e("th",[t._v("说明")]),e("th",{attrs:{width:"120"}},[t._v("类型")]),e("th",{attrs:{width:"80"}},[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("size")]),e("td",[t._v("尺寸，可选值为 "),e("code",[t._v("small")]),t._v("、"),e("code",[t._v("medium")]),t._v("、"),e("code",[t._v("large")]),t._v(" 或者不设")]),e("td",[t._v("String")]),e("td",[e("code",[t._v("large")])])]),e("tr",[e("td",[t._v("delay")]),e("td",[t._v("延迟显示加载效果的时间，单位毫秒（防止闪烁）")]),e("td",[t._v("Number")]),e("td",[t._v("--")])]),e("tr",[e("td",[t._v("indicator")]),e("td",[t._v("自定义加载指示符")]),e("td",[t._v("Function")]),e("td",[t._v("--")])]),e("tr",[e("td",[t._v("message")]),e("td",[t._v("自定义消息文案")]),e("td",[t._v("String")]),e("td",[t._v("--")])]),e("tr",[e("td",[t._v("background")]),e("td",[t._v("自定义遮罩背景")]),e("td",[t._v("String")]),e("td",[t._v("--")])])])]),e("p",[t._v("以上方法调用后，会返回一个引用，可以通过该引用取消对应的 "),e("code",[t._v("Spin")]),t._v(" 组件的加载状态，详见上述示例。")]),e("ul",[e("li",[e("code",[t._v("spin.cancel()")])])])])],1)},staticRenderFns:[]},R=e("VU/8")(U,V,!1,null,null,null);n.default=R.exports},dbuZ:function(t,n){},xSlk:function(t,n){},yysK:function(t,n){}});
//# sourceMappingURL=8.71c37bf61dae210b89cc.js.map