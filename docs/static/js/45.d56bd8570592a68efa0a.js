webpackJsonp([45],{cT8h:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("xe5J"),a=o("Fy5V"),s=o("RLuK"),i={components:{Example:s.a},data:function(){return{code:"<template>\n  <div>\n    Scroll down to see the bottom-right gray button.\n    <vui-backtop />\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n"}}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("Example",{attrs:{id:"example-backtop-basic-usage"}},[e("template",{slot:"source"},[e("div",[this._v("\n\t\t\tScroll down to see the bottom-right gray button.\n\t\t\t"),e("vui-backtop")],1)]),e("template",{slot:"title"},[this._v("基本用法")]),e("template",{slot:"describe"},[e("p",[this._v("最简单的用法。")])]),e("template",{slot:"code"},[this._v(this._s(this.code))])],2)},staticRenderFns:[]},d=o("VU/8")(i,r,!1,null,null,null).exports,c={components:{Example:s.a},data:function(){return{code:'<template>\n  <div>\n    Scroll down to see the bottom-right blue button.\n    <vui-backtop v-bind:bottom="100">\n      <div class="btn-backtop">TOP</div>\n    </vui-backtop>\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .btn-backtop { width:40px; height:40px; border-radius:2px; background-color:#2d8cf0; color:#fff; font-size:14px; text-align:center; line-height:40px; }\n</style>\n'}}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("Example",{attrs:{id:"example-backtop-custom"}},[e("template",{slot:"source"},[e("div",[this._v("\n\t\t\tScroll down to see the bottom-right blue button.\n\t\t\t"),e("vui-backtop",{attrs:{bottom:100}},[e("div",{staticClass:"btn-backtop"},[this._v("TOP")])])],1)]),e("template",{slot:"title"},[this._v("自定义样式")]),e("template",{slot:"describe"},[e("p",[this._v("可以自定义回到顶部按钮的样式。")])]),e("template",{slot:"code"},[this._v(this._s(this.code))])],2)},staticRenderFns:[]};var l=o("VU/8")(c,v,!1,function(t){o("yrKF")},null,null).exports,_={mixins:[n.a],components:{Markdown:a.a,BacktopBasicUsage:d,BacktopCustom:l}},p={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("Markdown",[o("h1",[t._v("Backtop 回到顶部")]),o("p",[t._v("返回页面顶部的操作按钮。")]),o("h2",[t._v("何时使用")]),o("ul",[o("li",[t._v("当页面内容区域比较长时；")]),o("li",[t._v("当用户需要频繁返回顶部查看相关内容时。")])]),o("h2",[t._v("代码演示")])]),o("vui-row",{attrs:{gutter:20}},[o("vui-col",{attrs:{span:12}},[o("BacktopBasicUsage")],1),o("vui-col",{attrs:{span:12}},[o("BacktopCustom")],1)],1),o("Markdown",[o("h2",{attrs:{id:"example-api"}},[t._v("API")]),o("h3",[t._v("Backtop 属性")]),o("table",{staticClass:"example-api-props"},[o("thead",[o("tr",[o("th",{attrs:{width:"120"}},[t._v("属性")]),o("th",[t._v("说明")]),o("th",{attrs:{width:"220"}},[t._v("类型")]),o("th",{attrs:{width:"100"}},[t._v("默认值")])])]),o("tbody",[o("tr",[o("td",[t._v("threshold")]),o("td",[t._v("滚动高度达到此参数值才出现 "),o("code",[t._v("Backtop")]),t._v(" 按钮")]),o("td",[t._v("Number")]),o("td",[o("code",[t._v("400")])])]),o("tr",[o("td",[t._v("right")]),o("td",[t._v("控制 "),o("code",[t._v("Backtop")]),t._v(" 按钮的显示位置，距离页面右侧边距")]),o("td",[t._v("Number | String")]),o("td",[o("code",[t._v("40")])])]),o("tr",[o("td",[t._v("bottom")]),o("td",[t._v("控制 "),o("code",[t._v("Backtop")]),t._v(" 按钮的显示位置，距离页面底部边距")]),o("td",[t._v("Number | String")]),o("td",[o("code",[t._v("40")])])]),o("tr",[o("td",[t._v("duration")]),o("td",[t._v("回到顶部滚动动画持续时间，单位毫秒")]),o("td",[t._v("Number")]),o("td",[o("code",[t._v("500")])])]),o("tr",[o("td",[t._v("scrollContainer")]),o("td",[t._v("设置需要监听滚动事件的元素，值可以为 "),o("code",[t._v("DOM")]),t._v(" 元素选择器，或 "),o("code",[t._v("DOM")]),t._v(" 元素本身，或一个返回对应 "),o("code",[t._v("DOM")]),t._v(" 元素的函数，默认为 "),o("code",[t._v("window")]),t._v(" 对象")]),o("td",[t._v("String | HTMLElement | Function")]),o("td",[t._v("--")])])])]),o("h3",[t._v("Backtop 事件")]),o("table",{staticClass:"example-api-events"},[o("thead",[o("tr",[o("th",{attrs:{width:"120"}},[t._v("事件名")]),o("th",[t._v("说明")]),o("th",{attrs:{width:"220"}},[t._v("类型")]),o("th",{attrs:{width:"100"}},[t._v("回调参数")])])]),o("tbody",[o("tr",[o("td",[t._v("click")]),o("td",[t._v("点击按钮时触发的事件回调函数")]),o("td",[t._v("Function")]),o("td",[o("code",[t._v("event")])])])])])])],1)},staticRenderFns:[]},u=o("VU/8")(_,p,!1,null,null,null);e.default=u.exports},yrKF:function(t,e){}});
//# sourceMappingURL=45.d56bd8570592a68efa0a.js.map