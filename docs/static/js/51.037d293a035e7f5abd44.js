webpackJsonp([51],{"5OF/":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("xe5J"),n=i("Fy5V"),r=i("RLuK"),o={components:{Example:r.a},data:function(){return{code:'<template>\n  <div class="example-divider-basic-usage">\n    <p>Be careful how you judge people, most of all friends. You don’t sum up a man’s life in one moment.</p>\n    <vui-divider />\n    <p>That was my way of getting through difficult times of low confidence – hard work.</p>\n    <vui-divider dashed />\n    <p>There is not a heart but has its moments of longing, yearning for something better, nobler and holier than it knows before.</p>\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n'}}},d={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("Example",{attrs:{vertical:"",id:"example-divider-basic-usage"}},[i("template",{slot:"source"},[i("div",{staticClass:"example-divider-basic-usage"},[i("p",[e._v("Be careful how you judge people, most of all friends. You don’t sum up a man’s life in one moment.")]),i("vui-divider"),i("p",[e._v("That was my way of getting through difficult times of low confidence – hard work.")]),i("vui-divider",{attrs:{dashed:""}}),i("p",[e._v("There is not a heart but has its moments of longing, yearning for something better, nobler and holier than it knows before.")])],1)]),i("template",{slot:"title"},[e._v("基本用法")]),i("template",{slot:"describe"},[i("p",[e._v("基本用法，支持虚线样式。")])]),i("template",{slot:"code"},[e._v(e._s(e.code))])],2)},staticRenderFns:[]},l=i("VU/8")(o,d,!1,null,null,null).exports,s={components:{Example:r.a},data:function(){return{code:'<template>\n  <div class="example-divider-vertical">\n    Text\n    <vui-divider type="vertical" />\n    <a href="javascript:;">Link</a>\n    <vui-divider type="vertical" />\n    <a href="javascript:;">Link</a>\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n'}}},v={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("Example",{attrs:{vertical:"",id:"example-divider-vertical"}},[i("template",{slot:"source"},[i("div",{staticClass:"example-divider-vertical"},[e._v("\n\t\t\tText\n\t\t\t"),i("vui-divider",{attrs:{type:"vertical"}}),i("a",{attrs:{href:"javascript:;"}},[e._v("Link")]),i("vui-divider",{attrs:{type:"vertical"}}),i("a",{attrs:{href:"javascript:;"}},[e._v("Link")])],1)]),i("template",{slot:"title"},[e._v("垂直方向")]),i("template",{slot:"describe"},[i("p",[e._v("使用 "),i("code",[e._v('type="vertical"')]),e._v(" 设置行内垂直方向的分割线。")])]),i("template",{slot:"code"},[e._v(e._s(e.code))])],2)},staticRenderFns:[]},p=i("VU/8")(s,v,!1,null,null,null).exports,c={components:{Example:r.a},data:function(){return{code:'<template>\n  <div class="example-divider-with-text">\n    <p>Be careful how you judge people, most of all friends. You don’t sum up a man’s life in one moment.</p>\n    <vui-divider>Text</vui-divider>\n    <p>That was my way of getting through difficult times of low confidence – hard work.</p>\n    <vui-divider orientation="left">Left Text</vui-divider>\n    <p>There is not a heart but has its moments of longing, yearning for something better, nobler and holier than it knows before.</p>\n    <vui-divider orientation="right">Right Text</vui-divider>\n    <p>It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things.</p>\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n'}}},h={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("Example",{attrs:{vertical:"",id:"example-divider-with-text"}},[i("template",{slot:"source"},[i("div",{staticClass:"example-divider-with-text"},[i("p",[e._v("Be careful how you judge people, most of all friends. You don’t sum up a man’s life in one moment.")]),i("vui-divider",[e._v("Text")]),i("p",[e._v("That was my way of getting through difficult times of low confidence – hard work.")]),i("vui-divider",{attrs:{orientation:"left"}},[e._v("Left Text")]),i("p",[e._v("There is not a heart but has its moments of longing, yearning for something better, nobler and holier than it knows before.")]),i("vui-divider",{attrs:{orientation:"right"}},[e._v("Right Text")]),i("p",[e._v("It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things.")])],1)]),i("template",{slot:"title"},[e._v("带文本的分割线")]),i("template",{slot:"describe"},[i("p",[e._v("分割线中可以加入文本，使用 "),i("code",[e._v("orientation")]),e._v(" 指定文本位置。")])]),i("template",{slot:"code"},[e._v(e._s(e.code))])],2)},staticRenderFns:[]},u=i("VU/8")(c,h,!1,null,null,null).exports,m={mixins:[a.a],components:{Markdown:n.a,ExampleDividerBasicUsage:l,ExampleDividerVertical:p,ExampleDividerWithText:u}},_={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("Markdown",[i("h1",[e._v("Divider 分割线")]),i("p",[e._v("区隔内容的分割线。")]),i("h2",[e._v("何时使用")]),i("ul",[i("li",[e._v("对不同章节的文本段落进行分割。")]),i("li",[e._v("对行内文字/链接进行分割，例如表格的操作列。")])]),i("h2",[e._v("代码演示")])]),i("vui-row",{attrs:{gutter:20}},[i("vui-col",{attrs:{span:12}},[i("ExampleDividerBasicUsage"),i("ExampleDividerVertical")],1),i("vui-col",{attrs:{span:12}},[i("ExampleDividerWithText")],1)],1),i("Markdown",[i("h2",{attrs:{id:"example-api"}},[e._v("API")]),i("h3",[e._v("Divider 属性")]),i("table",{staticClass:"example-api-props"},[i("thead",[i("tr",[i("th",{attrs:{width:"80"}},[e._v("属性")]),i("th",[e._v("说明")]),i("th",{attrs:{width:"150"}},[e._v("类型")]),i("th",{attrs:{width:"80"}},[e._v("默认值")])])]),i("tbody",[i("tr",[i("td",[e._v("type")]),i("td",[e._v("分割线类型，可选值为 "),i("code",[e._v("horizontal")]),e._v("、"),i("code",[e._v("vertical")]),e._v(" 或者不设")]),i("td",[e._v("String")]),i("td",[i("code",[e._v("horizontal")])])]),i("tr",[i("td",[e._v("dashed")]),i("td",[e._v("是否使用虚线样式的分割线")]),i("td",[e._v("Boolean")]),i("td",[i("code",[e._v("false")])])]),i("tr",[i("td",[e._v("orientation")]),i("td",[e._v("分割线文本的位置，可选值为 "),i("code",[e._v("left")]),e._v("、"),i("code",[e._v("center")]),e._v("、"),i("code",[e._v("right")]),e._v(" 或者不设")]),i("td",[e._v("String")]),i("td",[i("code",[e._v("center")])])])])]),i("h3",[e._v("Divider 插槽")]),i("table",{staticClass:"example-api-props"},[i("thead",[i("tr",[i("th",{attrs:{width:"80"}},[e._v("名称")]),i("th",[e._v("说明")])])]),i("tbody",[i("tr",[i("td",[e._v("default")]),i("td",[e._v("分割线文本，仅在 "),i("code",[e._v("type")]),e._v(" 为 "),i("code",[e._v("horizontal")]),e._v(" 时有效")])])])])])],1)},staticRenderFns:[]},f=i("VU/8")(m,_,!1,null,null,null);t.default=f.exports}});
//# sourceMappingURL=51.037d293a035e7f5abd44.js.map