webpackJsonp([35],{JwJQ:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e("xe5J"),a=e("Fy5V"),n=e("RLuK"),r='\n<template>\n  <vui-row :gutter="16">\n    <vui-col :span="12">\n      <vui-statistic title="Active Users" :value="110888" />\n    </vui-col>\n    <vui-col :span="12">\n      <vui-statistic title="Account Balance (CNY)" :value="110888" :precision="2" />\n    </vui-col>\n  </vui-row>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n'.trim(),l={components:{Example:n.a},data:function(){return{code:r}}},c={render:function(){var t=this.$createElement,i=this._self._c||t;return i("Example",{attrs:{vertical:"",id:"example-statistic-basic-usage"}},[i("template",{slot:"source"},[i("vui-row",{attrs:{gutter:16}},[i("vui-col",{attrs:{span:12}},[i("vui-statistic",{attrs:{title:"Active Users",value:110888}})],1),i("vui-col",{attrs:{span:12}},[i("vui-statistic",{attrs:{title:"Account Balance (CNY)",value:110888,precision:2}})],1)],1)],1),i("template",{slot:"title"},[this._v("基本用法")]),i("template",{slot:"describe"},[i("p",[this._v("简单展示。")])]),i("template",{slot:"code"},[this._v(this._s(this.code))])],2)},staticRenderFns:[]},o=e("VU/8")(l,c,!1,null,null,null).exports,u='\n<template>\n  <vui-row :gutter="16">\n    <vui-col :span="12">\n      <vui-statistic title="Feedback" :value="1024">\n        <vui-icon type="thumb-up" slot="prefix" />\n      </vui-statistic>\n    </vui-col>\n    <vui-col :span="12">\n      <vui-statistic title="Unmerged" :value="70">\n        <template slot="suffix">/ 100</template>\n      </vui-statistic>\n    </vui-col>\n  </vui-row>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n'.trim(),v={components:{Example:n.a},data:function(){return{code:u}}},p={render:function(){var t=this.$createElement,i=this._self._c||t;return i("Example",{attrs:{vertical:"",id:"example-statistic-icon-and-unit"}},[i("template",{slot:"source"},[i("vui-row",{attrs:{gutter:16}},[i("vui-col",{attrs:{span:12}},[i("vui-statistic",{attrs:{title:"Feedback",value:1024}},[i("vui-icon",{attrs:{slot:"prefix",type:"thumb-up"},slot:"prefix"})],1)],1),i("vui-col",{attrs:{span:12}},[i("vui-statistic",{attrs:{title:"Unmerged",value:70}},[i("template",{slot:"suffix"},[this._v("/ 100")])],2)],1)],1)],1),i("template",{slot:"title"},[this._v("图标/单位")]),i("template",{slot:"describe"},[i("p",[this._v("通过前缀和后缀添加图标/单位。")])]),i("template",{slot:"code"},[this._v(this._s(this.code))])],2)},staticRenderFns:[]},d=e("VU/8")(v,p,!1,null,null,null).exports,m='\n<template>\n  <div class="example-statistic-card">\n    <vui-row :gutter="16">\n      <vui-col :span="12">\n        <vui-card borderless>\n          <vui-statistic class="demo1" title="Active" suffix="%" :value="11.5" :precision="2">\n            <vui-icon type="arrow-up" slot="prefix" />\n          </vui-statistic>\n        </vui-card>\n      </vui-col>\n      <vui-col :span="12">\n        <vui-card borderless>\n          <vui-statistic class="demo2" title="Idle" suffix="%" :value="9.5" :precision="2">\n            <vui-icon type="arrow-down" slot="prefix" />\n          </vui-statistic>\n        </vui-card>\n      </vui-col>\n    </vui-row>\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-statistic-card { background-color:#ececec; padding:20px; }\n\n  .example-statistic-card .demo1 .vui-statistic-main { color:#53a653; }\n  .example-statistic-card .demo2 .vui-statistic-main { color:#d54d5b; }\n</style>\n'.trim(),_={components:{Example:n.a},data:function(){return{code:m}}},x={render:function(){var t=this.$createElement,i=this._self._c||t;return i("Example",{attrs:{vertical:"",id:"example-statistic-card"}},[i("template",{slot:"source"},[i("div",{staticClass:"example-statistic-card"},[i("vui-row",{attrs:{gutter:16}},[i("vui-col",{attrs:{span:12}},[i("vui-card",{attrs:{bordered:!1}},[i("vui-statistic",{staticClass:"demo1",attrs:{title:"Active",suffix:"%",value:11.5,precision:2}},[i("vui-icon",{attrs:{slot:"prefix",type:"arrow-up"},slot:"prefix"})],1)],1)],1),i("vui-col",{attrs:{span:12}},[i("vui-card",{attrs:{bordered:!1}},[i("vui-statistic",{staticClass:"demo2",attrs:{title:"Idle",suffix:"%",value:9.5,precision:2}},[i("vui-icon",{attrs:{slot:"prefix",type:"arrow-down"},slot:"prefix"})],1)],1)],1)],1)],1)]),i("template",{slot:"title"},[this._v("在卡片中使用")]),i("template",{slot:"describe"},[i("p",[this._v("在卡片中展示统计数值。")])]),i("template",{slot:"code"},[this._v(this._s(this.code))])],2)},staticRenderFns:[]};var f=e("VU/8")(_,x,!1,function(t){e("LjpD")},null,null).exports,h={mixins:[s.a],components:{Markdown:a.a,ExampleStatisticBasicUsage:o,ExampleStatisticIconAndUnit:d,ExampleStatisticCard:f}},w={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("Markdown",[e("h1",[t._v("Statistic 统计数值")]),e("p",[t._v("展示统计数值。")]),e("h2",[t._v("何时使用")]),e("ul",[e("li",[t._v("当需要突出某个或某组数字时；")]),e("li",[t._v("当需要展示带描述的统计类数据时使用。")])]),e("h2",[t._v("代码演示")])]),e("vui-row",{attrs:{gutter:20}},[e("vui-col",{attrs:{span:12}},[e("ExampleStatisticBasicUsage"),e("ExampleStatisticIconAndUnit")],1),e("vui-col",{attrs:{span:12}},[e("ExampleStatisticCard")],1)],1),e("Markdown",[e("h2",{attrs:{id:"example-api"}},[t._v("API")]),e("h3",[t._v("Statistic 属性")]),e("table",{staticClass:"example-api-props"},[e("thead",[e("tr",[e("th",{attrs:{width:"100"}},[t._v("属性")]),e("th",[t._v("说明")]),e("th",{attrs:{width:"150"}},[t._v("类型")]),e("th",{attrs:{width:"100"}},[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("title")]),e("td",[t._v("数值标题说明")]),e("td",[t._v("String")]),e("td",[t._v("--")])]),e("tr",[e("td",[t._v("prefix")]),e("td",[t._v("数值前缀，一般通过此属性设置图标")]),e("td",[t._v("String | Slot")]),e("td",[t._v("--")])]),e("tr",[e("td",[t._v("suffix")]),e("td",[t._v("数值后缀，一般通过此属性设置单位")]),e("td",[t._v("String | Slot")]),e("td",[t._v("--")])]),e("tr",[e("td",[t._v("value")]),e("td",[t._v("数值")]),e("td",[t._v("String | Number")]),e("td",[t._v("--")])]),e("tr",[e("td",[t._v("precision")]),e("td",[t._v("数值精度，即小数点后保留多少位")]),e("td",[t._v("Number")]),e("td",[t._v("--")])]),e("tr",[e("td",[t._v("formatter")]),e("td",[t._v("自定义数值展示，如 "),e("code",[t._v("(h, value) => VNode")])]),e("td",[t._v("Function")]),e("td",[t._v("--")])])])])])],1)},staticRenderFns:[]},b=e("VU/8")(h,w,!1,null,null,null);i.default=b.exports},LjpD:function(t,i){}});
//# sourceMappingURL=35.c9e431be2c4c5604a95a.js.map