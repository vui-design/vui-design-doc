(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5a956bf6"],{"0dae":function(e,t,a){"use strict";a("9288")},2973:function(e,t,a){},3061:function(e,t,a){"use strict";a("83c8")},"694b":function(e,t,a){"use strict";a.r(t);var n=a("d58b"),l=a("240e"),r=a("1a42"),o={components:{Example:r.a},data:function(){return{code:'<template>\n  <vui-rate v-model="value" />\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: 2\n      };\n    }\n  };\n<\/script>\n',value:2}}},c=a("2877"),i=Object(c.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("example",{attrs:{code:e.code,id:"example-rate-basic-usage"}},[a("template",{slot:"demo"},[a("vui-rate",{model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),a("template",{slot:"title"},[e._v("基本用法")]),a("template",{slot:"description"},[a("p",[e._v("最简单的用法。")])])],2)}),[],!1,null,null,null).exports,s={components:{Example:r.a},data:function(){return{code:'<template>\n  <vui-rate v-model="value" allowHalf />\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: 2.5\n      };\n    }\n  };\n<\/script>\n',value:2.5}}},u=Object(c.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("example",{attrs:{code:e.code,id:"example-rate-half"}},[a("template",{slot:"demo"},[a("vui-rate",{attrs:{allowHalf:""},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),a("template",{slot:"title"},[e._v("半星")]),a("template",{slot:"description"},[a("p",[e._v("支持选中半星。")])])],2)}),[],!1,null,null,null).exports,p={components:{Example:r.a},data:function(){return{code:'<template>\n  <div class="example-rate-text">\n    <vui-rate v-model="value" v-bind:tooltips="tooltips" />\n    <p>{{tooltips[value - 1]}}</p>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tooltips: ["terrible", "bad", "normal", "good", "wonderful"],\n        value: 3\n      };\n    }\n  };\n<\/script>\n\n<style>\n  .example-rate-text { display:flex; align-items:center; line-height:1; }\n  .example-rate-text p { margin-left:16px; }\n</style>\n',tooltips:["terrible","bad","normal","good","wonderful"],value:3}}},v=(a("8e79"),Object(c.a)(p,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("example",{attrs:{code:e.code,id:"example-rate-text"}},[a("template",{slot:"demo"},[a("div",{staticClass:"example-rate-text"},[a("vui-rate",{attrs:{tooltips:e.tooltips},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),a("p",[e._v(e._s(e.tooltips[e.value-1]))])],1)]),a("template",{slot:"title"},[e._v("文案提示")]),a("template",{slot:"description"},[a("p",[e._v("给评分组件加上文案提示。")])])],2)}),[],!1,null,null,null).exports),d={components:{Example:r.a},data:function(){return{code:'<template>\n  <div class="example-rate-clearable">\n    <section>\n      <vui-rate v-model="value1" />\n      <p>clearable: true</p>\n    </section>\n    <section>\n      <vui-rate v-model="value2" v-bind:clearable="false" />\n      <p>clearable: false</p>\n    </section>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value1: 3,\n        value2: 3\n      };\n    }\n  };\n<\/script>\n\n<style>\n  .example-rate-clearable section { display:flex; align-items:center; line-height:1; }\n  .example-rate-clearable section + section { margin-top:16px; }\n  .example-rate-clearable p { margin-left:16px; }\n</style>\n',value1:3,value2:3}}},m=(a("0dae"),Object(c.a)(d,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("example",{attrs:{code:e.code,id:"example-rate-clearable"}},[a("template",{slot:"demo"},[a("div",{staticClass:"example-rate-clearable"},[a("section",[a("vui-rate",{model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}}),a("p",[e._v("clearable: true")])],1),a("section",[a("vui-rate",{attrs:{clearable:!1},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}}),a("p",[e._v("clearable: false")])],1)])]),a("template",{slot:"title"},[e._v("清除")]),a("template",{slot:"description"},[a("p",[e._v("允许或者禁用清除。")])])],2)}),[],!1,null,null,null).exports),x={components:{Example:r.a},data:function(){return{code:'<template>\n  <vui-rate v-model="value" disabled />\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: 2\n      };\n    }\n  };\n<\/script>\n',value:2}}},h=Object(c.a)(x,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("example",{attrs:{code:e.code,id:"example-rate-disabled"}},[a("template",{slot:"demo"},[a("vui-rate",{attrs:{disabled:""},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),a("template",{slot:"title"},[e._v("只读")]),a("template",{slot:"description"},[a("p",[e._v("只读，无法进行鼠标交互。")])])],2)}),[],!1,null,null,null).exports,_={components:{Example:r.a},data:function(){return{code:'<template>\n  <div class="example-rate-character-function">\n    <section>\n      <vui-rate v-model="value1" v-bind:character="getRateCharacter1" />\n    </section>\n    <section>\n      <vui-rate v-model="value2" v-bind:character="getRateCharacter2" />\n    </section>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        value1: 2,\n        value2: 3\n      };\n    },\n    methods: {\n      getRateCharacter1(index) {\n        return index + 1;\n      },\n      getRateCharacter2(index) {\n        const h = this.$createElement;\n        const types = ["emotion-skull", "emotion-unhappy", "emotion-normal", "emotion-happy", "emotion"];\n        const attrs = {\n          props: {\n            type: types[index]\n          }\n        };\n\n        return h("vui-icon", attrs);\n      }\n    }\n  };\n<\/script>\n\n<style>\n  .example-rate-character-function section { display:flex; align-items:center; line-height:1; }\n  .example-rate-character-function section + section { margin-top:16px; }\n</style>\n',value1:2,value2:3}},methods:{getRateCharacter1:function(e){return e+1},getRateCharacter2:function(e){return(0,this.$createElement)("vui-icon",{props:{type:["emotion-skull","emotion-unhappy","emotion-normal","emotion-happy","emotion"][e]}})}}},f=(a("ee92"),Object(c.a)(_,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("example",{attrs:{code:e.code,id:"example-rate-character-function"}},[a("template",{slot:"demo"},[a("div",{staticClass:"example-rate-character-function"},[a("section",[a("vui-rate",{attrs:{character:e.getRateCharacter1},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}})],1),a("section",[a("vui-rate",{attrs:{character:e.getRateCharacter2},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}})],1)])]),a("template",{slot:"title"},[e._v("自定义字符")]),a("template",{slot:"description"},[a("p",[e._v("可以使用函数类型的 "),a("code",[e._v("character")]),e._v(" 属性自定义每一个字符。")])])],2)}),[],!1,null,null,null).exports),b={components:{Example:r.a},data:function(){return{code:'<template>\n  <div class="example-rate-character">\n    <section>\n      <vui-rate allowHalf>\n        <vui-icon slot="character" type="heart" />\n      </vui-rate>\n    </section>\n    <section>\n      <vui-rate allowHalf character="A" style="font-size: 28px;" />\n    </section>\n    <section>\n      <vui-rate allowHalf character="好" />\n    </section>\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-rate-character section { display:flex; align-items:center; line-height:1; }\n  .example-rate-character section + section { margin-top:16px; }\n</style>\n'}}},g=(a("3061"),Object(c.a)(b,(function(){var e=this.$createElement,t=this._self._c||e;return t("example",{attrs:{code:this.code,id:"example-rate-character"}},[t("template",{slot:"demo"},[t("div",{staticClass:"example-rate-character"},[t("section",[t("vui-rate",{attrs:{allowHalf:""}},[t("vui-icon",{attrs:{slot:"character",type:"heart"},slot:"character"})],1)],1),t("section",[t("vui-rate",{staticStyle:{"font-size":"28px"},attrs:{allowHalf:"",character:"A"}})],1),t("section",[t("vui-rate",{attrs:{allowHalf:"",character:"好"}})],1)])]),t("template",{slot:"title"},[this._v("其他字符")]),t("template",{slot:"description"},[t("p",[this._v("可以将星星替换为其他字符，比如字母，数字，字体图标甚至中文。")])])],2)}),[],!1,null,null,null).exports),y={mixins:[n.a],components:{Document:l.a,ExampleBasicUsage:i,ExampleHalf:u,ExampleText:v,ExampleClearable:m,ExampleDisabled:h,ExampleCharacterFunction:f,ExampleCharacter:g}},w=Object(c.a)(y,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("document",[a("h1",[e._v("Rate 评分")]),a("p",[e._v("评分组件。")]),a("h2",[e._v("何时使用")]),a("ul",[a("li",[e._v("对评价进行展示；")]),a("li",[e._v("对事物进行快速的评级操作。")])]),a("h2",[e._v("代码演示")])]),a("vui-row",{attrs:{gutter:16}},[a("vui-col",{attrs:{span:12}},[a("example-basic-usage"),a("example-half"),a("example-text"),a("example-clearable")],1),a("vui-col",{attrs:{span:12}},[a("example-disabled"),a("example-character-function"),a("example-character")],1)],1),a("document",[a("h2",{attrs:{id:"example-api"}},[e._v("API")]),a("h3",[e._v("Rate 属性")]),a("table",{staticClass:"example-api-props"},[a("thead",[a("tr",[a("th",{attrs:{width:"160"}},[e._v("属性")]),a("th",[e._v("说明")]),a("th",{attrs:{width:"240"}},[e._v("类型")]),a("th",{attrs:{width:"160"}},[e._v("默认值")])])]),a("tbody",[a("tr",[a("td",[e._v("value")]),a("td",[e._v("当前值，可以使用 "),a("code",[e._v("v-model")]),e._v(" 双向绑定数据")]),a("td",[e._v("Number")]),a("td",[e._v("--")])]),a("tr",[a("td",[e._v("count")]),a("td",[e._v("Star 总数")]),a("td",[e._v("Number")]),a("td",[e._v("5")])]),a("tr",[a("td",[e._v("character")]),a("td",[e._v("自定义字符")]),a("td",[e._v("String | Function | Slot")]),a("td",[e._v("--")])]),a("tr",[a("td",[e._v("tooltips")]),a("td",[e._v("自定义每项的提示信息")]),a("td",[e._v("Array")]),a("td",[e._v("--")])]),a("tr",[a("td",[e._v("allowHalf")]),a("td",[e._v("是否允许半选")]),a("td",[e._v("Boolean")]),a("td",[e._v("false")])]),a("tr",[a("td",[e._v("clearable")]),a("td",[e._v("是否允许再次点击取消评分")]),a("td",[e._v("Boolean")]),a("td",[e._v("true")])]),a("tr",[a("td",[e._v("disabled")]),a("td",[e._v("是否只读，无法进行交互")]),a("td",[e._v("Boolean")]),a("td",[e._v("false")])])])]),a("h3",[e._v("Rate 事件")]),a("table",{staticClass:"example-api-props"},[a("thead",[a("tr",[a("th",{attrs:{width:"160"}},[e._v("事件名")]),a("th",[e._v("说明")]),a("th",{attrs:{width:"240"}},[e._v("类型")]),a("th",{attrs:{width:"160"}},[e._v("回调参数")])])]),a("tbody",[a("tr",[a("td",[e._v("input")]),a("td",[e._v("评分改变时触发的事件回调函数，可以使用 "),a("code",[e._v("v-model")]),e._v(" 双向绑定数据")]),a("td",[e._v("Function")]),a("td",[e._v("value")])]),a("tr",[a("td",[e._v("change")]),a("td",[e._v("评分改变时触发的事件回调函数")]),a("td",[e._v("Function")]),a("td",[e._v("value")])])])])])],1)}),[],!1,null,null,null);t.default=w.exports},"83c8":function(e,t,a){},"8e79":function(e,t,a){"use strict";a("2973")},9288:function(e,t,a){},d7ed:function(e,t,a){},ee92:function(e,t,a){"use strict";a("d7ed")}}]);