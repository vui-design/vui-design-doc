webpackJsonp([21],{KDiP:function(t,e){},g221:function(t,e){},oKvn:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o("xe5J"),n=o("Fy5V"),v=o("RLuK"),p={components:{Example:v.a},data:function(){return{code:'<template>\n  <vui-popover title="Title" content="This is a popover.">\n    <vui-button>Hover me</vui-button>\n  </vui-popover>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n'}}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("Example",{attrs:{vertical:"",id:"example-popover-basic-usage"}},[e("template",{slot:"source"},[e("vui-popover",{attrs:{title:"Title",content:"This is a popover."}},[e("vui-button",[this._v("Hover me")])],1)],1),e("template",{slot:"title"},[this._v("基本用法")]),e("template",{slot:"describe"},[e("p",[this._v("最简单的用法，浮层的大小由内容区域决定。")])]),e("template",{slot:"code"},[this._v(this._s(this.code))])],2)},staticRenderFns:[]},r=o("VU/8")(p,l,!1,null,null,null).exports,a={components:{Example:v.a},data:function(){return{code:'<template>\n  <div class="example-popover-placement">\n    <div class="top">\n      <vui-popover placement="top-start" title="Title" content="This is a popover.">\n        <vui-button>TL</vui-button>\n      </vui-popover>\n      <vui-popover placement="top" title="Title" content="This is a popover.">\n        <vui-button>T</vui-button>\n      </vui-popover>\n      <vui-popover placement="top-end" title="Title" content="This is a popover.">\n        <vui-button>TR</vui-button>\n      </vui-popover>\n    </div>\n    <div class="middle">\n      <div class="middle-left">\n        <vui-popover placement="left-start" title="Title" content="This is a popover.">\n          <vui-button block>LT</vui-button>\n        </vui-popover>\n        <vui-popover placement="left" title="Title" content="This is a popover.">\n          <vui-button block>L</vui-button>\n        </vui-popover>\n        <vui-popover placement="left-end" title="Title" content="This is a popover.">\n          <vui-button block>LB</vui-button>\n        </vui-popover>\n      </div>\n      <div class="middle-right">\n        <vui-popover placement="right-start" title="Title" content="This is a popover.">\n          <vui-button block>RT</vui-button>\n        </vui-popover>\n        <vui-popover placement="right" title="Title" content="This is a popover.">\n          <vui-button block>R</vui-button>\n        </vui-popover>\n        <vui-popover placement="right-end" title="Title" content="This is a popover.">\n          <vui-button block>RB</vui-button>\n        </vui-popover>\n      </div>\n    </div>\n    <div class="bottom">\n      <vui-popover placement="bottom-start" title="Title" content="This is a popover.">\n        <vui-button>BL</vui-button>\n      </vui-popover>\n      <vui-popover placement="bottom" title="Title" content="This is a popover.">\n        <vui-button>B</vui-button>\n      </vui-popover>\n      <vui-popover placement="bottom-end" title="Title" content="This is a popover.">\n        <vui-button>BR</vui-button>\n      </vui-popover>\n    </div>\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-popover-placement .top { text-align:center; }\n  .example-popover-placement .top .vui-popover { margin:0 5px; }\n  .example-popover-placement .top .vui-button { width:60px; }\n\n  .example-popover-placement .middle { width:340px; height:132px; margin:5px auto; }\n\n  .example-popover-placement .middle-left { float:left; width:60px; }\n  .example-popover-placement .middle-left .vui-popover { margin:5px 0; }\n  .example-popover-placement .middle-left .vui-button { width:60px; }\n\n  .example-popover-placement .middle-right { float:right; width:60px; }\n  .example-popover-placement .middle-right .vui-popover { margin:5px 0; }\n  .example-popover-placement .middle-right .vui-button { width:60px; }\n\n  .example-popover-placement .bottom { text-align:center; }\n  .example-popover-placement .bottom .vui-popover { margin:0 5px; }\n  .example-popover-placement .bottom .vui-button { width:60px; }\n</style>\n'}}},s={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Example",{attrs:{vertical:"",id:"example-popover-placement"}},[o("template",{slot:"source"},[o("div",{staticClass:"example-popover-placement"},[o("div",{staticClass:"top"},[o("vui-popover",{attrs:{placement:"top-start",title:"Title",content:"This is a popover."}},[o("vui-button",[t._v("TL")])],1),o("vui-popover",{attrs:{placement:"top",title:"Title",content:"This is a popover."}},[o("vui-button",[t._v("T")])],1),o("vui-popover",{attrs:{placement:"top-end",title:"Title",content:"This is a popover."}},[o("vui-button",[t._v("TR")])],1)],1),o("div",{staticClass:"middle"},[o("div",{staticClass:"middle-left"},[o("vui-popover",{attrs:{placement:"left-start",title:"Title",content:"This is a popover."}},[o("vui-button",{attrs:{block:""}},[t._v("LT")])],1),o("vui-popover",{attrs:{placement:"left",title:"Title",content:"This is a popover."}},[o("vui-button",{attrs:{block:""}},[t._v("L")])],1),o("vui-popover",{attrs:{placement:"left-end",title:"Title",content:"This is a popover."}},[o("vui-button",{attrs:{block:""}},[t._v("LB")])],1)],1),o("div",{staticClass:"middle-right"},[o("vui-popover",{attrs:{placement:"right-start",title:"Title",content:"This is a popover."}},[o("vui-button",{attrs:{block:""}},[t._v("RT")])],1),o("vui-popover",{attrs:{placement:"right",title:"Title",content:"This is a popover."}},[o("vui-button",{attrs:{block:""}},[t._v("R")])],1),o("vui-popover",{attrs:{placement:"right-end",title:"Title",content:"This is a popover."}},[o("vui-button",{attrs:{block:""}},[t._v("RB")])],1)],1)]),o("div",{staticClass:"bottom"},[o("vui-popover",{attrs:{placement:"bottom-start",title:"Title",content:"This is a popover."}},[o("vui-button",[t._v("BL")])],1),o("vui-popover",{attrs:{placement:"bottom",title:"Title",content:"This is a popover."}},[o("vui-button",[t._v("B")])],1),o("vui-popover",{attrs:{placement:"bottom-end",title:"Title",content:"This is a popover."}},[o("vui-button",[t._v("BR")])],1)],1)])]),o("template",{slot:"title"},[t._v("位置")]),o("template",{slot:"describe"},[o("p",[t._v("位置有 "),o("code",[t._v("12")]),t._v(" 个方向。")])]),o("template",{slot:"code"},[t._v(t._s(t.code))])],2)},staticRenderFns:[]};var c=o("VU/8")(a,s,!1,function(t){o("KDiP")},null,null).exports,u={components:{Example:v.a},data:function(){return{code:'<template>\n  <div class="example-popover-trigger">\n    <vui-popover title="Title" content="This is a popover.">\n      <vui-button>Hover me</vui-button>\n    </vui-popover>\n    <vui-popover trigger="focus" title="Title" content="This is a popover.">\n      <vui-button>Focus me</vui-button>\n    </vui-popover>\n    <vui-popover trigger="click" title="Title" content="This is a popover.">\n      <vui-button>Click me</vui-button>\n    </vui-popover>\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-popover-trigger .vui-popover + .vui-popover { margin-left:10px; }\n</style>\n'}}},d={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Example",{attrs:{vertical:"",id:"example-popover-trigger"}},[o("template",{slot:"source"},[o("div",{staticClass:"example-popover-trigger"},[o("vui-popover",{attrs:{title:"Title",content:"This is a popover."}},[o("vui-button",[t._v("Hover me")])],1),o("vui-popover",{attrs:{trigger:"focus",title:"Title",content:"This is a popover."}},[o("vui-button",[t._v("Focus me")])],1),o("vui-popover",{attrs:{trigger:"click",title:"Title",content:"This is a popover."}},[o("vui-button",[t._v("Click me")])],1)],1)]),o("template",{slot:"title"},[t._v("触发方式")]),o("template",{slot:"describe"},[o("p",[t._v("鼠标移入、聚集、点击。")])]),o("template",{slot:"code"},[t._v(t._s(t.code))])],2)},staticRenderFns:[]};var m=o("VU/8")(u,d,!1,function(t){o("g221")},null,null).exports,_={components:{Example:v.a},data:function(){return{code:'<template>\n  <vui-popover trigger="click" title="Title" v-model="visible">\n    <vui-button>Click me</vui-button>\n    <div slot="content">\n      <a href="javascript:;" v-on:click="handleClose">Click to close the popover.</a>\n    </div>\n  </vui-popover>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        visible: false\n      };\n    },\n    methods: {\n      handleClose() {\n        this.visible = false;\n      }\n    }\n  };\n<\/script>\n',visible:!1}},methods:{handleClose:function(){this.visible=!1}}},b={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Example",{attrs:{vertical:"",id:"example-popover-control"}},[o("template",{slot:"source"},[o("vui-popover",{attrs:{trigger:"click",title:"Title"},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[o("vui-button",[t._v("Click me")]),o("div",{attrs:{slot:"content"},slot:"content"},[o("a",{attrs:{href:"javascript:;"},on:{click:t.handleClose}},[t._v("Click to close the popover.")])])],1)],1),o("template",{slot:"title"},[t._v("从浮层内关闭")]),o("template",{slot:"describe"},[o("p",[t._v("使用 "),o("code",[t._v("visible")]),t._v(" 属性控制浮层显示，支持 "),o("code",[t._v("v-model")]),t._v(" 双向绑定数据。")])]),o("template",{slot:"code"},[t._v(t._s(t.code))])],2)},staticRenderFns:[]},h=o("VU/8")(_,b,!1,null,null,null).exports,T={mixins:[i.a],components:{Markdown:n.a,ExamplePopoverBasicUsage:r,ExamplePopoverPlacement:c,ExamplePopoverTrigger:m,ExamplePopoverControl:h}},x={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("Markdown",[o("h1",[t._v("Popover 气泡卡片")]),o("p",[t._v("点击/鼠标移入元素，弹出气泡式的卡片浮层")]),o("h2",[t._v("何时使用")]),o("ul",[o("li",[t._v("当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现。")]),o("li",[t._v("和 "),o("code",[t._v("Tooltip")]),t._v(" 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等。")])]),o("h2",[t._v("代码演示")])]),o("vui-row",{attrs:{gutter:20}},[o("vui-col",{attrs:{span:12}},[o("ExamplePopoverBasicUsage"),o("ExamplePopoverTrigger"),o("ExamplePopoverControl")],1),o("vui-col",{attrs:{span:12}},[o("ExamplePopoverPlacement")],1)],1),o("Markdown",[o("h2",{attrs:{id:"example-api"}},[t._v("API")]),o("h3",[t._v("Popover 属性")]),o("table",{staticClass:"example-api-props"},[o("thead",[o("tr",[o("th",{attrs:{width:"140"}},[t._v("属性")]),o("th",[t._v("说明")]),o("th",{attrs:{width:"150"}},[t._v("类型")]),o("th",{attrs:{width:"160"}},[t._v("默认值")])])]),o("tbody",[o("tr",[o("td",[t._v("trigger")]),o("td",[t._v("触发方式，可选值为 "),o("code",[t._v("hover")]),t._v("、"),o("code",[t._v("focus")]),t._v("、"),o("code",[t._v("click")]),t._v(" 或者不设")]),o("td",[t._v("String")]),o("td",[o("code",[t._v("hover")])])]),o("tr",[o("td",[t._v("visible")]),o("td",[t._v("是否可见，可以使用 "),o("code",[t._v("v-model")]),t._v(" 双向绑定")]),o("td",[t._v("Boolean")]),o("td",[o("code",[t._v("false")])])]),o("tr",[o("td",[t._v("title")]),o("td",[t._v("卡片标题")]),o("td",[t._v("String | Slot")]),o("td",[t._v("--")])]),o("tr",[o("td",[t._v("content")]),o("td",[t._v("卡片内容")]),o("td",[t._v("String | Slot")]),o("td",[t._v("--")])]),o("tr",[o("td",[t._v("minWidth")]),o("td",[t._v("卡片的最小宽度")]),o("td",[t._v("String | Number")]),o("td",[o("code",[t._v("150")])])]),o("tr",[o("td",[t._v("maxWidth")]),o("td",[t._v("卡片的最大宽度")]),o("td",[t._v("String | Number")]),o("td",[t._v("--")])]),o("tr",[o("td",[t._v("placement")]),o("td",[t._v("弹出位置，可选值为 "),o("code",[t._v("top")]),t._v("、"),o("code",[t._v("top-start")]),t._v("、"),o("code",[t._v("top-end")]),t._v("、"),o("code",[t._v("bottom")]),t._v("、"),o("code",[t._v("bottom-start")]),t._v("、"),o("code",[t._v("bottom-end")]),t._v("、"),o("code",[t._v("left")]),t._v("、"),o("code",[t._v("left-start")]),t._v("、"),o("code",[t._v("left-end")]),t._v("、"),o("code",[t._v("right")]),t._v("、"),o("code",[t._v("right-start")]),t._v("、"),o("code",[t._v("right-end")]),t._v(" 或者不设")]),o("td",[t._v("String")]),o("td",[o("code",[t._v("top")])])]),o("tr",[o("td",[t._v("getPopupContainer")]),o("td",[t._v("浮层渲染父节点，默认渲染到 "),o("code",[t._v("body")]),t._v(" 上")]),o("td",[t._v("Function")]),o("td",[o("code",[t._v("() => document.body")])])])])]),o("h3",[t._v("Popover 事件")]),o("table",{staticClass:"example-api-events"},[o("thead",[o("tr",[o("th",{attrs:{width:"140"}},[t._v("事件名")]),o("th",[t._v("说明")]),o("th",{attrs:{width:"150"}},[t._v("类型")]),o("th",{attrs:{width:"160"}},[t._v("回调参数")])])]),o("tbody",[o("tr",[o("td",[t._v("input")]),o("td",[t._v("可见状态发生变化时触发的事件回调，可以使用 "),o("code",[t._v("v-model")]),t._v(" 双向绑定")]),o("td",[t._v("Function")]),o("td",[o("code",[t._v("visible")])])]),o("tr",[o("td",[t._v("change")]),o("td",[t._v("可见状态发生变化时触发的事件回调")]),o("td",[t._v("Function")]),o("td",[o("code",[t._v("visible")])])])])])])],1)},staticRenderFns:[]},g=o("VU/8")(T,x,!1,null,null,null);e.default=g.exports}});
//# sourceMappingURL=21.977cb51a446bcc87f5fe.js.map