webpackJsonp([6],{A83D:function(e,t){},HMv9:function(e,t){},QVN0:function(e,t){},YdYs:function(e,t){},cFKN:function(e,t){},jjhC:function(e,t){},oMhS:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l("q77b"),a=l("6WqV"),i=l("RLuK"),r={components:{Example:i.a},data:function(){return{code:'<template>\n  <div class="example-slider-basic-usage">\n    <section>\n      <div>Disabled:</div>\n      <vui-switch v-model="disabled" />\n    </section>\n    <vui-slider v-model="value1" v-bind:disabled="disabled" />\n    <vui-slider v-model="value2" range v-bind:disabled="disabled" />\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        disabled: false,\n        value1: 30,\n        value2: [20, 50]\n      };\n    }\n  };\n<\/script>\n\n<style>\n  .example-slider-basic-usage section { display:flex; align-items:center; }\n  .example-slider-basic-usage section .vui-switch { margin-left:4px; }\n  .example-slider-basic-usage .vui-slider { margin-top:24px; }\n</style>\n',disabled:!1,value1:30,value2:[20,50]}}},s={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("example",{attrs:{code:e.code,id:"example-slider-basic-usage"}},[l("template",{slot:"demo"},[l("div",{staticClass:"example-slider-basic-usage"},[l("section",[l("div",[e._v("Disabled:")]),l("vui-switch",{model:{value:e.disabled,callback:function(t){e.disabled=t},expression:"disabled"}})],1),l("vui-slider",{attrs:{disabled:e.disabled},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}}),l("vui-slider",{attrs:{range:"",disabled:e.disabled},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}})],1)]),l("template",{slot:"title"},[e._v("基本用法")]),l("template",{slot:"description"},[l("p",[e._v("基本用法。当 "),l("code",[e._v("range")]),e._v(" 为 "),l("code",[e._v("true")]),e._v(" 时，启用双滑块。当 "),l("code",[e._v("disabled")]),e._v(" 为 "),l("code",[e._v("true")]),e._v(" 时，滑块处于不可用状态。")])])],2)},staticRenderFns:[]};var v=l("VU/8")(r,s,!1,function(e){l("cFKN")},null,null).exports,o={components:{Example:i.a},data:function(){return{code:'<template>\n  <div class="example-slider-input-number">\n    <section>\n      <vui-slider v-model="value1" v-bind:min="1" v-bind:max="20" />\n      <vui-input-number v-model="value1" v-bind:min="1" v-bind:max="20" />\n    </section>\n    <section>\n      <vui-slider v-model="value2" v-bind:min="0" v-bind:max="1" v-bind:step="0.01" />\n      <vui-input-number v-model="value2" v-bind:min="0" v-bind:max="1" v-bind:step="0.01" v-bind:precision="2" />\n    </section>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value1: 0,\n        value2: 0\n      };\n    }\n  };\n<\/script>\n\n<style>\n  .example-slider-input-number section { display:flex; align-items:center; }\n  .example-slider-input-number section + section { margin-top:24px; }\n  .example-slider-input-number section .vui-slider { flex:1; }\n  .example-slider-input-number section .vui-input-number { width:80px; margin-left:16px; }\n</style>\n',value1:0,value2:0}}},d={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("example",{attrs:{code:e.code,id:"example-slider-input-number"}},[l("template",{slot:"demo"},[l("div",{staticClass:"example-slider-input-number"},[l("section",[l("vui-slider",{attrs:{min:1,max:20},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}}),l("vui-input-number",{attrs:{min:1,max:20},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}})],1),l("section",[l("vui-slider",{attrs:{min:0,max:1,step:.01},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}}),l("vui-input-number",{attrs:{min:0,max:1,step:.01,precision:2},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}})],1)])]),l("template",{slot:"title"},[e._v("带输入框的滑块")]),l("template",{slot:"description"},[l("p",[e._v("和 "),l("router-link",{attrs:{to:"/components/input-number"}},[e._v("数字输入框")]),e._v(" 组件保持同步。")],1)])],2)},staticRenderFns:[]};var u=l("VU/8")(o,d,!1,function(e){l("jjhC")},null,null).exports,c={components:{Example:i.a},data:function(){return{code:'<template>\n  <div class="example-slider-icon">\n    <vui-icon type="emotion-unhappy" v-bind:style="prevStyle" />\n    <vui-slider v-model="value" v-bind:min="min" v-bind:max="max" />\n    <vui-icon type="emotion-happy" v-bind:style="nextStyle"/>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        min: 0,\n        max: 20,\n        value: 0\n      };\n    },\n    computed: {\n      prevStyle() {\n        const { max, min, value } = this;\n        const middle = (max - min) / 2;\n\n        return {\n          color: value <= middle ? "" : "#bfbfbf"\n        };\n      },\n      nextStyle() {\n        const { max, min, value } = this;\n        const middle = (max - min) / 2;\n\n        return {\n          color: value >= middle ? "" : "#bfbfbf"\n        };\n      }\n    }\n  };\n<\/script>\n\n<style>\n  .example-slider-icon { display:flex; align-items:center; }\n  .example-slider-icon .vui-slider { flex:1; margin:0 16px; }\n</style>\n',min:0,max:20,value:0}},computed:{prevStyle:function(){var e=this.max,t=this.min;return{color:this.value<=(e-t)/2?"":"#bfbfbf"}},nextStyle:function(){var e=this.max,t=this.min;return{color:this.value>=(e-t)/2?"":"#bfbfbf"}}}},p={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("example",{attrs:{code:e.code,id:"example-slider-icon"}},[l("template",{slot:"demo"},[l("div",{staticClass:"example-slider-icon"},[l("vui-icon",{style:e.prevStyle,attrs:{type:"emotion-unhappy"}}),l("vui-slider",{attrs:{min:e.min,max:e.max},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),l("vui-icon",{style:e.nextStyle,attrs:{type:"emotion-happy"}})],1)]),l("template",{slot:"title"},[e._v("带图标的滑块")]),l("template",{slot:"description"},[l("p",[e._v("滑块左右两侧可以设置图标来表达业务含义。")])])],2)},staticRenderFns:[]};var m=l("VU/8")(c,p,!1,function(e){l("QVN0")},null,null).exports,_={components:{Example:i.a},data:function(){return{code:'<template>\n  <div class="example-slider-with-tooltip">\n    <vui-slider v-model="value1" v-bind:tooltip="tooltip1" />\n    <vui-slider v-model="value2" v-bind:tooltip="tooltip2" />\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value1: 0,\n        value2: 0,\n        tooltip1: {\n          color: "light",\n          formatter: value => value + "%"\n        },\n        tooltip2: null\n      };\n    }\n  };\n<\/script>\n\n<style>\n  .example-slider-with-tooltip .vui-slider + .vui-slider { margin-top:24px; }\n</style>\n',value1:0,value2:0,tooltip1:{color:"light",formatter:function(e){return e+"%"}},tooltip2:null}}},x={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("example",{attrs:{code:e.code,id:"example-slider-tooltip"}},[l("template",{slot:"demo"},[l("div",{staticClass:"example-slider-tooltip"},[l("vui-slider",{attrs:{tooltip:e.tooltip1},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}}),l("vui-slider",{attrs:{tooltip:e.tooltip2},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}})],1)]),l("template",{slot:"title"},[e._v("自定义提示")]),l("template",{slot:"description"},[l("p",[e._v("利用 "),l("code",[e._v("tooltip")]),e._v(" 属性格式化 "),l("router-link",{attrs:{to:"/components/tooltip"}},[e._v("文字提示")]),e._v(" 的内容，"),l("code",[e._v("tooltip")]),e._v(" 为 "),l("code",[e._v("null")]),e._v(" 时隐藏 "),l("router-link",{attrs:{to:"/components/tooltip"}},[e._v("文字提示")]),e._v("。")],1)])],2)},staticRenderFns:[]};var b=l("VU/8")(_,x,!1,function(e){l("HMv9")},null,null).exports,f={components:{Example:i.a},data:function(){return{code:'<template>\n  <vui-slider v-model="value" v-bind:tooltip="tooltip" />\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: 30,\n        tooltip: {\n          trigger: "always",\n          formatter: value => value + "%"\n        }\n      };\n    }\n  };\n<\/script>\n',value:30,tooltip:{trigger:"always",formatter:function(e){return e+"%"}}}}},h={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("example",{attrs:{code:e.code,id:"example-slider-tooltip-visible"}},[l("template",{slot:"demo"},[l("vui-slider",{attrs:{tooltip:e.tooltip},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),l("template",{slot:"title"},[e._v("控制 Tooltip 显示")]),l("template",{slot:"description"},[l("p",[e._v("当 "),l("code",[e._v("tooltip.trigger")]),e._v(" 为 "),l("code",[e._v("always")]),e._v(" 时，将始终显示 "),l("router-link",{attrs:{to:"/components/tooltip"}},[e._v("文字提示")]),e._v("。")],1)])],2)},staticRenderFns:[]},k=l("VU/8")(f,h,!1,null,null,null).exports,g='\n<template>\n  <div class="example-avatar-basic-usage">\n    <section>\n      <vui-avatar icon="user" v-bind:size="64" />\n      <vui-avatar icon="user" size="large" />\n      <vui-avatar icon="user" />\n      <vui-avatar icon="user" size="small" />\n    </section>\n    <section>\n      <vui-avatar icon="user" shape="square" v-bind:size="64" />\n      <vui-avatar icon="user" shape="square" size="large" />\n      <vui-avatar icon="user" shape="square" />\n      <vui-avatar icon="user" shape="square" size="small" />\n    </section>\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-avatar-basic-usage section + section { margin-top:20px; }\n  .example-avatar-basic-usage .vui-avatar + .vui-avatar { margin-left:20px; }\n</style>\n'.trim(),y={components:{Example:i.a},data:function(){return{code:g,value1:37,value2:[26,37],value3:37,value4:[26,37],value5:37,value6:37,marks:{0:"0°C",26:"26°C",37:"37°C",100:{style:{color:"#ff4d4f"},label:"100°C"}}}}},S={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("example",{attrs:{code:e.code,id:"example-slider-marks"}},[l("template",{slot:"demo"},[l("div",{staticClass:"example-slider-marks"},[l("section",[l("h4",[e._v("included=true")]),l("vui-slider",{attrs:{marks:e.marks},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}}),l("vui-slider",{attrs:{range:"",marks:e.marks},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}})],1),l("section",[l("h4",[e._v("included=false")]),l("vui-slider",{attrs:{included:!1,marks:e.marks},model:{value:e.value3,callback:function(t){e.value3=t},expression:"value3"}}),l("vui-slider",{attrs:{range:"",included:!1,marks:e.marks},model:{value:e.value4,callback:function(t){e.value4=t},expression:"value4"}})],1),l("section",[l("h4",[e._v("step & marks")]),l("vui-slider",{attrs:{step:10,marks:e.marks},model:{value:e.value5,callback:function(t){e.value5=t},expression:"value5"}})],1),l("section",[l("h4",[e._v("step=null")]),l("vui-slider",{attrs:{step:null,marks:e.marks},model:{value:e.value6,callback:function(t){e.value6=t},expression:"value6"}})],1)])]),l("template",{slot:"title"},[e._v("基本用法")]),l("template",{slot:"describe"},[l("p",[e._v("基本用法。当 "),l("code",[e._v("range")]),e._v(" 为 "),l("code",[e._v("true")]),e._v(" 时，渲染为双滑块。当 "),l("code",[e._v("disabled")]),e._v(" 为 "),l("code",[e._v("true")]),e._v(" 时，滑块处于不可用状态。")])])],2)},staticRenderFns:[]};var E=l("VU/8")(y,S,!1,function(e){l("YdYs")},null,null).exports,C={components:{Example:i.a},data:function(){return{code:'<template>\n  <div class="example-slider-vertical">\n    <vui-slider v-model="value1" vertical />\n    <vui-slider v-model="value2" vertical range />\n    <vui-slider v-model="value3" vertical range v-bind:marks="marks3" v-bind:tooltip="tooltip3" />\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value1: 30,\n        value2: [20, 50],\n        value3: [26, 38],\n        marks3: {\n          0: "0°C",\n          26: "26°C",\n          37: "37°C",\n          100: {\n            style: {\n              color: "#ff4d4f"\n            },\n            label: "100°C"\n          }\n        },\n        tooltip3: {\n          formatter: value => value + "°C"\n        }\n      };\n    }\n  };\n<\/script>\n\n<style>\n  .example-slider-vertical { display:flex; justify-content:space-around; align-items:flex-end; }\n  .example-slider-vertical .vui-slider { height:240px; }\n</style>\n',value1:30,value2:[20,50],value3:[26,38],marks3:{0:"0°C",26:"26°C",37:"37°C",100:{style:{color:"#ff4d4f"},label:"100°C"}},tooltip3:{formatter:function(e){return e+"°C"}}}}},w={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("example",{attrs:{code:e.code,id:"example-slider-vertical"}},[l("template",{slot:"demo"},[l("div",{staticClass:"example-slider-vertical"},[l("vui-slider",{attrs:{vertical:""},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}}),l("vui-slider",{attrs:{vertical:"",range:""},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}}),l("vui-slider",{attrs:{vertical:"",range:"",marks:e.marks3,tooltip:e.tooltip3},model:{value:e.value3,callback:function(t){e.value3=t},expression:"value3"}})],1)]),l("template",{slot:"title"},[e._v("垂直")]),l("template",{slot:"description"},[l("p",[e._v("垂直方向的 Slider。")])])],2)},staticRenderFns:[]};var V=l("VU/8")(C,w,!1,function(e){l("A83D")},null,null).exports,N={mixins:[n.a],components:{Document:a.a,ExampleSliderBasicUsage:v,ExampleSliderInputNumber:u,ExampleSliderIcon:m,ExampleSliderTooltip:b,ExampleSliderTooltipVisible:k,ExampleSliderMarks:E,ExampleSliderVertical:V}},F={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("document",[l("h1",[e._v("Slider 滑动输入条")]),l("p",[e._v("滑动型输入器，展示当前值和可选范围。")]),l("h2",[e._v("何时使用")]),l("p",[e._v("当用户需要在数值区间/自定义区间内进行选择时，可为连续或离散值。")]),l("h2",[e._v("代码演示")])]),l("vui-row",{attrs:{gutter:20}},[l("vui-col",{attrs:{span:12}},[l("ExampleSliderBasicUsage"),l("ExampleSliderInputNumber"),l("ExampleSliderIcon"),l("ExampleSliderTooltip"),l("ExampleSliderTooltipVisible")],1),l("vui-col",{attrs:{span:12}},[l("ExampleSliderMarks"),l("ExampleSliderVertical")],1)],1),l("document",[l("h2",{attrs:{id:"example-api"}},[e._v("API")]),l("h3",[e._v("Slider 属性")]),l("table",{staticClass:"example-api-props"},[l("thead",[l("tr",[l("th",{attrs:{width:"140"}},[e._v("属性")]),l("th",[e._v("说明")]),l("th",{attrs:{width:"150"}},[e._v("类型")]),l("th",{attrs:{width:"314"}},[e._v("默认值")])])]),l("tbody",[l("tr",[l("td",[e._v("vertical")]),l("td",[e._v("是否使用垂直模式")]),l("td",[e._v("Boolean")]),l("td",[l("code",[e._v("false")])])]),l("tr",[l("td",[e._v("value")]),l("td",[e._v("当前取值，可以使用 "),l("code",[e._v("v-model")]),e._v(" 双向绑定数据。当 "),l("code",[e._v("range")]),e._v(" 为 "),l("code",[e._v("false")]),e._v(" 时，使用 "),l("code",[e._v("Number")]),e._v("，否则用 "),l("code",[e._v("[Number, Number]")])]),l("td",[e._v("Number | Array")]),l("td",[e._v("--")])]),l("tr",[l("td",[e._v("range")]),l("td",[e._v("是否开启双滑块模式")]),l("td",[e._v("Boolean")]),l("td",[l("code",[e._v("false")])])]),l("tr",[l("td",[e._v("included")]),l("td",[e._v("值为 "),l("code",[e._v("true")]),e._v(" 时表示值为包含关系，"),l("code",[e._v("false")]),e._v(" 表示并列")]),l("td",[e._v("Boolean")]),l("td",[l("code",[e._v("true")])])]),l("tr",[l("td",[e._v("min")]),l("td",[e._v("最小值")]),l("td",[e._v("Number")]),l("td",[l("code",[e._v("0")])])]),l("tr",[l("td",[e._v("max")]),l("td",[e._v("最大值")]),l("td",[e._v("Number")]),l("td",[l("code",[e._v("100")])])]),l("tr",[l("td",[e._v("step")]),l("td",[e._v("步长，取值必须大于 "),l("code",[e._v("0")]),e._v("，并且可被 "),l("code",[e._v("max - min")]),e._v(" 整除。当 "),l("code",[e._v("marks")]),e._v(" 不为空对象时，可以设置 "),l("code",[e._v("step")]),e._v(" 为 "),l("code",[e._v("null")]),e._v("，此时 "),l("code",[e._v("Slider")]),e._v(" 的可选值仅有 "),l("code",[e._v("marks")]),e._v(" 标记出来的部分")]),l("td",[e._v("Number")]),l("td",[l("code",[e._v("1")])])]),l("tr",[l("td",[e._v("showSteps")]),l("td",[e._v("是否显示间断点，建议在间断点不密集时使用")]),l("td",[e._v("Boolean")]),l("td",[l("code",[e._v("false")])])]),l("tr",[l("td",[e._v("marks")]),l("td",[e._v("刻度标记，"),l("code",[e._v("key")]),e._v(" 的类型必须为 "),l("code",[e._v("Number")]),e._v(" 且取值范围在闭区间 "),l("code",[e._v("[min, max]")]),e._v(" 内，每个标签可以单独设置样式")]),l("td",[e._v("Object")]),l("td",[e._v("--")])]),l("tr",[l("td",[e._v("tooltip")]),l("td",[e._v("是否显示 "),l("code",[e._v("Tooltip")]),e._v(" 文字提示，值为 "),l("code",[e._v("null")]),e._v(" 时不显示")]),l("td",[e._v("Object")]),l("td",[l("code",{staticStyle:{"white-space":"pre"}},[e._v('{\n  trigger: "focus",\n  formatter: value => value,\n  color: "dark",\n  placement: "top",\n  getPopupContainer: () => document.body\n}\n')])])])])]),l("h3",[e._v("Slider 事件")]),l("table",{staticClass:"example-api-events"},[l("thead",[l("tr",[l("th",{attrs:{width:"140"}},[e._v("事件名")]),l("th",[e._v("说明")]),l("th",{attrs:{width:"150"}},[e._v("类型")]),l("th",{attrs:{width:"314"}},[e._v("回调参数")])])]),l("tbody",[l("tr",[l("td",[e._v("input")]),l("td",[e._v("滑动输入条数值变化时触发的事件回调函数，可以使用 "),l("code",[e._v("v-model")]),e._v(" 双向绑定数据")]),l("td",[e._v("Function")]),l("td",[l("code",[e._v("value")])])]),l("tr",[l("td",[e._v("change")]),l("td",[e._v("滑动输入条数值变化时触发的事件回调函数")]),l("td",[e._v("Function")]),l("td",[l("code",[e._v("value")])])])])])])],1)},staticRenderFns:[]},U=l("VU/8")(N,F,!1,null,null,null);t.default=U.exports}});
//# sourceMappingURL=6.42bffef646cb4418216c.js.map