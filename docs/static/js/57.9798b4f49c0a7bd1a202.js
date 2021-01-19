webpackJsonp([57],{"2l5/":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("q77b"),a=i("Fy5V"),o=i("RLuK"),r={components:{VuiDocExample:o.a},data:function(){return{code:'<template>\n  <div class="example-divider-basic-usage">\n    <p>Be careful how you judge people, most of all friends. You don’t sum up a man’s life in one moment.</p>\n    <vui-divider />\n    <p>That was my way of getting through difficult times of low confidence – hard work.</p>\n    <vui-divider dashed />\n    <p>There is not a heart but has its moments of longing, yearning for something better, nobler and holier than it knows before.</p>\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n'}}},d={render:function(){var e=this.$createElement,t=this._self._c||e;return t("vui-doc-example",{attrs:{code:this.code,jsFiddle:"3axb104s",id:"example-divider-basic-usage"}},[t("template",{slot:"demo"},[t("div",{staticClass:"example-divider-basic-usage"},[t("p",[this._v("Be careful how you judge people, most of all friends. You don’t sum up a man’s life in one moment.")]),t("vui-divider"),t("p",[this._v("That was my way of getting through difficult times of low confidence – hard work.")]),t("vui-divider",{attrs:{dashed:""}}),t("p",[this._v("There is not a heart but has its moments of longing, yearning for something better, nobler and holier than it knows before.")])],1)]),t("template",{slot:"title"},[this._v("基本用法")]),t("template",{slot:"description"},[t("p",[this._v("基本用法，支持虚线样式。")])])],2)},staticRenderFns:[]},l=i("VU/8")(r,d,!1,null,null,null).exports,s={components:{VuiDocExample:o.a},data:function(){return{code:'<template>\n  <div class="example-divider-vertical">\n    Text\n    <vui-divider type="vertical" />\n    <a href="javascript:;">Link</a>\n    <vui-divider type="vertical" />\n    <a href="javascript:;">Link</a>\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n'}}},v={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("vui-doc-example",{attrs:{code:e.code,jsFiddle:"Lqbejuo5",id:"example-divider-vertical"}},[i("template",{slot:"demo"},[i("div",{staticClass:"example-divider-vertical"},[e._v("\n\t\t\tText\n\t\t\t"),i("vui-divider",{attrs:{type:"vertical"}}),i("a",{attrs:{href:"javascript:;"}},[e._v("Link")]),i("vui-divider",{attrs:{type:"vertical"}}),i("a",{attrs:{href:"javascript:;"}},[e._v("Link")])],1)]),i("template",{slot:"title"},[e._v("垂直方向")]),i("template",{slot:"description"},[i("p",[e._v("使用 "),i("code",[e._v('type="vertical"')]),e._v(" 设置行内垂直方向的分割线。")])])],2)},staticRenderFns:[]},p=i("VU/8")(s,v,!1,null,null,null).exports,c={components:{VuiDocExample:o.a},data:function(){return{code:'<template>\n  <div class="example-divider-with-text">\n    <p>Be careful how you judge people, most of all friends. You don’t sum up a man’s life in one moment.</p>\n    <vui-divider>Text</vui-divider>\n    <p>That was my way of getting through difficult times of low confidence – hard work.</p>\n    <vui-divider orientation="left">Left Text</vui-divider>\n    <p>There is not a heart but has its moments of longing, yearning for something better, nobler and holier than it knows before.</p>\n    <vui-divider orientation="right">Right Text</vui-divider>\n    <p>It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things.</p>\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n'}}},u={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("vui-doc-example",{attrs:{code:e.code,jsFiddle:"14be5f7d",id:"example-divider-with-text"}},[i("template",{slot:"demo"},[i("div",{staticClass:"example-divider-with-text"},[i("p",[e._v("Be careful how you judge people, most of all friends. You don’t sum up a man’s life in one moment.")]),i("vui-divider",[e._v("Text")]),i("p",[e._v("That was my way of getting through difficult times of low confidence – hard work.")]),i("vui-divider",{attrs:{orientation:"left"}},[e._v("Left Text")]),i("p",[e._v("There is not a heart but has its moments of longing, yearning for something better, nobler and holier than it knows before.")]),i("vui-divider",{attrs:{orientation:"right"}},[e._v("Right Text")]),i("p",[e._v("It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things.")])],1)]),i("template",{slot:"title"},[e._v("带文本的分割线")]),i("template",{slot:"description"},[i("p",[e._v("分割线中可以加入文本，使用 "),i("code",[e._v("orientation")]),e._v(" 指定文本位置。")])])],2)},staticRenderFns:[]},h=i("VU/8")(c,u,!1,null,null,null).exports,m={mixins:[n.a],components:{VuiDocMarkdown:a.a,ExampleDividerBasicUsage:l,ExampleDividerVertical:p,ExampleDividerWithText:h}},f={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("vui-doc-markdown",[i("h1",[e._v("Divider 分割线")]),i("p",[e._v("区隔内容的分割线。")]),i("h2",[e._v("何时使用")]),i("ul",[i("li",[e._v("对不同章节的文本段落进行分割。")]),i("li",[e._v("对行内文字/链接进行分割，例如表格的操作列。")])]),i("h2",[e._v("代码演示")])]),i("vui-row",{attrs:{gutter:16}},[i("vui-col",{attrs:{span:12}},[i("ExampleDividerBasicUsage"),i("ExampleDividerVertical")],1),i("vui-col",{attrs:{span:12}},[i("ExampleDividerWithText")],1)],1),i("vui-doc-markdown",[i("h2",{attrs:{id:"example-api"}},[e._v("API")]),i("h3",[e._v("Divider 属性")]),i("table",{staticClass:"example-api-props"},[i("thead",[i("tr",[i("th",{attrs:{width:"80"}},[e._v("属性")]),i("th",[e._v("说明")]),i("th",{attrs:{width:"150"}},[e._v("类型")]),i("th",{attrs:{width:"80"}},[e._v("默认值")])])]),i("tbody",[i("tr",[i("td",[e._v("type")]),i("td",[e._v("分割线类型，可选值为 "),i("code",[e._v("horizontal")]),e._v("、"),i("code",[e._v("vertical")]),e._v(" 或者不设")]),i("td",[e._v("String")]),i("td",[i("code",[e._v("horizontal")])])]),i("tr",[i("td",[e._v("dashed")]),i("td",[e._v("是否使用虚线样式的分割线")]),i("td",[e._v("Boolean")]),i("td",[i("code",[e._v("false")])])]),i("tr",[i("td",[e._v("orientation")]),i("td",[e._v("分割线文本的位置，可选值为 "),i("code",[e._v("left")]),e._v("、"),i("code",[e._v("center")]),e._v("、"),i("code",[e._v("right")]),e._v(" 或者不设")]),i("td",[e._v("String")]),i("td",[i("code",[e._v("center")])])]),i("tr",[i("td",[e._v("gutter")]),i("td",[e._v("自定义分割线距离两侧内容的间隔")]),i("td",[e._v("String | Number")]),i("td",[e._v("--")])])])])])],1)},staticRenderFns:[]},_=i("VU/8")(m,f,!1,null,null,null);t.default=_.exports}});
//# sourceMappingURL=57.9798b4f49c0a7bd1a202.js.map