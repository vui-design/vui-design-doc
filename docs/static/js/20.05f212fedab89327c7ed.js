webpackJsonp([20],{ONmf:function(t,e){},bWPM:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("q77b"),r=a("Fy5V"),i=a("RLuK"),d={components:{VuiDocExample:i.a},data:function(){return{code:'<template>\n  <vui-card icon="menu-unfold" title="Card title">\n    <p>Card content...</p>\n    <p>Card content...</p>\n    <p>Card content...</p>\n    <a href="javascript:;" slot="extra">More</a>\n  </vui-card>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n'}}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("vui-doc-example",{attrs:{code:this.code,id:"example-card-basic-usage"}},[e("template",{slot:"demo"},[e("vui-card",{attrs:{icon:"menu-unfold",title:"Card title"}},[e("p",[this._v("Card content...")]),e("p",[this._v("Card content...")]),e("p",[this._v("Card content...")]),e("a",{attrs:{slot:"extra",href:"javascript:;"},slot:"extra"},[this._v("More")])])],1),e("template",{slot:"title"},[this._v("基本用法")]),e("template",{slot:"description"},[e("p",[this._v("自定义图标、标题、主体和附加内容，可以完全自由控制各个部分，也可以结合其它组件一起使用，较为灵活。")])])],2)},staticRenderFns:[]},l=a("VU/8")(d,o,!1,null,null,null).exports,c={components:{VuiDocExample:i.a},data:function(){return{code:"<template>\n  <vui-card>\n    <p>Card content...</p>\n    <p>Card content...</p>\n    <p>Card content...</p>\n  </vui-card>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n"}}},s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("vui-doc-example",{attrs:{code:this.code,id:"example-card-simple"}},[e("template",{slot:"demo"},[e("vui-card",[e("p",[this._v("Card content...")]),e("p",[this._v("Card content...")]),e("p",[this._v("Card content...")])])],1),e("template",{slot:"title"},[this._v("简洁卡片")]),e("template",{slot:"description"},[e("p",[this._v("只含有主体内容。")])])],2)},staticRenderFns:[]},v=a("VU/8")(c,s,!1,null,null,null).exports,p={components:{VuiDocExample:i.a},data:function(){return{code:'<template>\n  <div class="example-card-no-border">\n    <vui-card v-bind:bordered="false" title="Card title">\n      <p>Card content...</p>\n      <p>Card content...</p>\n      <p>Card content...</p>\n    </vui-card>\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-card-borderless { background-color:#f6f6f6; padding:20px; }\n</style>\n'}}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("vui-doc-example",{attrs:{code:this.code,id:"example-card-no-border"}},[e("template",{slot:"demo"},[e("div",{staticClass:"example-card-no-border"},[e("vui-card",{attrs:{bordered:!1,title:"Card title"}},[e("p",[this._v("Card content...")]),e("p",[this._v("Card content...")]),e("p",[this._v("Card content...")])])],1)]),e("template",{slot:"title"},[this._v("无外边框")]),e("template",{slot:"description"},[e("p",[this._v("建议在灰色背景的容器中使用无外边框的卡片。")])])],2)},staticRenderFns:[]};var m=a("VU/8")(p,u,!1,function(t){a("x24j")},null,null).exports,_={components:{VuiDocExample:i.a},data:function(){return{code:'<template>\n  <div class="example-card-shadow">\n    <vui-row v-bind:gutter="16">\n      <vui-col v-bind:span="12">\n        <vui-card v-bind:bordered="false" shadow="hover" title="Card title">\n          <p>Card content...</p>\n          <p>Card content...</p>\n          <p>Card content...</p>\n        </vui-card>\n      </vui-col>\n      <vui-col v-bind:span="12">\n        <vui-card v-bind:bordered="false" shadow="always" title="Card title">\n          <p>Card content...</p>\n          <p>Card content...</p>\n          <p>Card content...</p>\n        </vui-card>\n      </vui-col>\n    </vui-row>\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-card-shadow { background-color:#f6f6f6; padding:16px; }\n</style>\n'}}},h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("vui-doc-example",{attrs:{code:t.code,id:"example-card-shadow"}},[a("template",{slot:"demo"},[a("div",{staticClass:"example-card-shadow"},[a("vui-row",{attrs:{gutter:16}},[a("vui-col",{attrs:{span:12}},[a("vui-card",{attrs:{bordered:!1,shadow:"hover",title:"Card title"}},[a("p",[t._v("Card content...")]),a("p",[t._v("Card content...")]),a("p",[t._v("Card content...")])])],1),a("vui-col",{attrs:{span:12}},[a("vui-card",{attrs:{bordered:!1,shadow:"always",title:"Card title"}},[a("p",[t._v("Card content...")]),a("p",[t._v("Card content...")]),a("p",[t._v("Card content...")])])],1)],1)],1)]),a("template",{slot:"title"},[t._v("卡片阴影")]),a("template",{slot:"description"},[a("p",[a("code",[t._v("hover")]),t._v(" 表示鼠标移入时显示阴影，"),a("code",[t._v("always")]),t._v(" 表示始终显示阴影。")])])],2)},staticRenderFns:[]};var x=a("VU/8")(_,h,!1,function(t){a("fJ2k")},null,null).exports,C={components:{VuiDocExample:i.a},data:function(){return{code:'<template>\n  <div class="example-card-loading">\n    <vui-switch v-model="loading" />\n    <vui-card v-bind:loading="loading">\n      <vui-card-meta title="Card title">\n        <vui-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />\n        <template slot="description">This is the description</template>\n      </vui-card-meta>\n    </vui-card>\n    <vui-card>\n      <vui-skeleton v-bind:loading="loading" animated avatar>\n        <vui-card-meta title="Card title">\n          <vui-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />\n          <template slot="description">This is the description</template>\n        </vui-card-meta>\n      </vui-skeleton>\n      <template slot="actions">\n        <vui-icon type="edit" />\n        <vui-icon type="dustbin" />\n        <vui-icon type="more-x" />\n      </template>\n    </vui-card>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        loading: true\n      };\n    }\n  };\n<\/script>\n\n<style>\n  .example-card-loading .vui-card { margin-top:20px; }\n</style>\n',loading:!0}}},g={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("vui-doc-example",{attrs:{code:t.code,id:"example-card-loading"}},[a("template",{slot:"demo"},[a("div",{staticClass:"example-card-loading"},[a("vui-switch",{model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}}),a("vui-card",{attrs:{loading:t.loading}},[a("vui-card-meta",{attrs:{title:"Card title"}},[a("vui-avatar",{attrs:{slot:"avatar",src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"},slot:"avatar"}),a("template",{slot:"description"},[t._v("This is the description")])],2)],1),a("vui-card",[a("vui-skeleton",{attrs:{loading:t.loading,animated:"",avatar:""}},[a("vui-card-meta",{attrs:{title:"Card title"}},[a("vui-avatar",{attrs:{slot:"avatar",src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"},slot:"avatar"}),a("template",{slot:"description"},[t._v("This is the description")])],2)],1),a("template",{slot:"actions"},[a("vui-icon",{attrs:{type:"edit"}}),a("vui-icon",{attrs:{type:"dustbin"}}),a("vui-icon",{attrs:{type:"more-x"}})],1)],2)],1)]),a("template",{slot:"title"},[t._v("加载状态")]),a("template",{slot:"description"},[a("p",[t._v("数据读入前会有文本块样式。")])])],2)},staticRenderFns:[]};var f=a("VU/8")(C,g,!1,function(t){a("ONmf")},null,null).exports,y={components:{VuiDocExample:i.a},data:function(){return{code:'<template>\n  <vui-card title="Card title">\n    <vui-card-grid style="width: 25%;">Content...</vui-card-grid>\n    <vui-card-grid style="width: 25%;">Content...</vui-card-grid>\n    <vui-card-grid style="width: 25%;">Content...</vui-card-grid>\n    <vui-card-grid style="width: 25%;">Content...</vui-card-grid>\n    <vui-card-grid style="width: 25%;">Content...</vui-card-grid>\n    <vui-card-grid style="width: 25%;">Content...</vui-card-grid>\n    <vui-card-grid style="width: 25%;">Content...</vui-card-grid>\n    <vui-card-grid style="width: 25%;">Content...</vui-card-grid>\n  </vui-card>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n'}}},b={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("vui-doc-example",{attrs:{code:t.code,id:"example-card-grid"}},[a("template",{slot:"demo"},[a("vui-card",{attrs:{title:"Card title"}},[a("vui-card-grid",{staticStyle:{width:"25%"}},[t._v("Content...")]),a("vui-card-grid",{staticStyle:{width:"25%"}},[t._v("Content...")]),a("vui-card-grid",{staticStyle:{width:"25%"}},[t._v("Content...")]),a("vui-card-grid",{staticStyle:{width:"25%"}},[t._v("Content...")]),a("vui-card-grid",{staticStyle:{width:"25%"}},[t._v("Content...")]),a("vui-card-grid",{staticStyle:{width:"25%"}},[t._v("Content...")]),a("vui-card-grid",{staticStyle:{width:"25%"}},[t._v("Content...")]),a("vui-card-grid",{staticStyle:{width:"25%"}},[t._v("Content...")])],1)],1),a("template",{slot:"title"},[t._v("内容区隔")]),a("template",{slot:"description"},[a("p",[t._v("常见的卡片内容区隔模式。")])])],2)},staticRenderFns:[]},w=a("VU/8")(y,b,!1,null,null,null).exports,S={components:{VuiDocExample:i.a},data:function(){return{code:'<template>\n  <vui-card style="width: 302px;">\n    <img slot="cover" src="https://dummyimage.com/300x200/ececec/595959" />\n    <vui-card-meta title="Card title">\n      <vui-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />\n      <template slot="description">This is the description</template>\n    </vui-card-meta>\n    <template slot="actions">\n      <vui-icon type="edit" />\n      <vui-icon type="dustbin" />\n      <vui-icon type="more-x" />\n    </template>\n  </vui-card>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n'}}},E={render:function(){var t=this.$createElement,e=this._self._c||t;return e("vui-doc-example",{attrs:{code:this.code,id:"example-card-flexible-content"}},[e("template",{slot:"demo"},[e("vui-card",{staticStyle:{width:"302px"}},[e("img",{attrs:{slot:"cover",src:"https://dummyimage.com/300x200/ececec/595959"},slot:"cover"}),e("vui-card-meta",{attrs:{title:"Card title"}},[e("vui-avatar",{attrs:{slot:"avatar",src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"},slot:"avatar"}),e("template",{slot:"description"},[this._v("This is the description")])],2),e("template",{slot:"actions"},[e("vui-icon",{attrs:{type:"edit"}}),e("vui-icon",{attrs:{type:"dustbin"}}),e("vui-icon",{attrs:{type:"more-x"}})],1)],2)],1),e("template",{slot:"title"},[this._v("更多内容配置")]),e("template",{slot:"description"},[e("p",[this._v("支持封面、头像、标题、描述信息以及操作区的卡片。")])])],2)},staticRenderFns:[]},V=a("VU/8")(S,E,!1,null,null,null).exports,j={mixins:[n.a],components:{VuiDocMarkdown:r.a,ExampleCardBasicUsage:l,ExampleCardSimple:v,ExampleCardNoBorder:m,ExampleCardShadow:x,ExampleCardLoading:f,ExampleCardGrid:w,ExampleCardFlexibleContent:V}},D={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("vui-doc-markdown",[a("h1",[t._v("Card 卡片")]),a("p",[t._v("通用卡片容器。")]),a("h2",[t._v("何时使用")]),a("p",[t._v("基础容器，可以承载文字、列表、图片、段落，常用于后台概览页面。")]),a("h2",[t._v("代码演示")])]),a("vui-row",{attrs:{gutter:16}},[a("vui-col",{attrs:{span:12}},[a("ExampleCardBasicUsage"),a("ExampleCardSimple"),a("ExampleCardNoBorder"),a("ExampleCardShadow")],1),a("vui-col",{attrs:{span:12}},[a("ExampleCardLoading"),a("ExampleCardGrid"),a("ExampleCardFlexibleContent")],1)],1),a("vui-doc-markdown",[a("h2",{attrs:{id:"example-api"}},[t._v("API")]),a("h3",[t._v("Card 属性")]),a("table",{staticClass:"example-api-props"},[a("thead",[a("tr",[a("th",{attrs:{width:"80"}},[t._v("属性")]),a("th",[t._v("说明")]),a("th",{attrs:{width:"150"}},[t._v("类型")]),a("th",{attrs:{width:"80"}},[t._v("默认值")])])]),a("tbody",[a("tr",[a("td",[t._v("icon")]),a("td",[t._v("卡片图标类型/图标，位于标题左侧")]),a("td",[t._v("String | Slot")]),a("td",[t._v("--")])]),a("tr",[a("td",[t._v("title")]),a("td",[t._v("卡片标题")]),a("td",[t._v("String | Slot")]),a("td",[t._v("--")])]),a("tr",[a("td",[t._v("extra")]),a("td",[t._v("卡片右上角的操作区域")]),a("td",[t._v("String | Slot")]),a("td",[t._v("--")])]),a("tr",[a("td",[t._v("cover")]),a("td",[t._v("卡片封面地址/封面，位于标题栏下方")]),a("td",[t._v("String | Slot")]),a("td",[t._v("--")])]),a("tr",[a("td",[t._v("actions")]),a("td",[t._v("卡片操作组，位于底部")]),a("td",[t._v("Slot")]),a("td",[t._v("--")])]),a("tr",[a("td",[t._v("footer")]),a("td",[t._v("卡片底部内容")]),a("td",[t._v("Slot")]),a("td",[t._v("--")])]),a("tr",[a("td",[t._v("bordered")]),a("td",[t._v("是否含有边框")]),a("td",[t._v("Boolean")]),a("td",[a("code",[t._v("true")])])]),a("tr",[a("td",[t._v("shadow")]),a("td",[t._v("卡片阴影，可选值为 "),a("code",[t._v("never")]),t._v("、"),a("code",[t._v("hover")]),t._v("、"),a("code",[t._v("always")]),t._v(" 或者不设")]),a("td",[t._v("String")]),a("td",[a("code",[t._v("never")])])]),a("tr",[a("td",[t._v("loading")]),a("td",[t._v("当卡片内容还在加载中时，可以用 "),a("code",[t._v("loading")]),t._v(" 展示一个占位")]),a("td",[t._v("Boolean")]),a("td",[a("code",[t._v("false")])])]),a("tr",[a("td",[t._v("headerStyle")]),a("td",[t._v("自定义标题区域样式")]),a("td",[t._v("String | Object")]),a("td",[t._v("--")])]),a("tr",[a("td",[t._v("bodyStyle")]),a("td",[t._v("自定义内容区域样式")]),a("td",[t._v("String | Object")]),a("td",[t._v("--")])]),a("tr",[a("td",[t._v("footerStyle")]),a("td",[t._v("自定义底部区域样式")]),a("td",[t._v("String | Object")]),a("td",[t._v("--")])])])]),a("h3",[t._v("CardMeta 属性")]),a("table",{staticClass:"example-api-props"},[a("thead",[a("tr",[a("th",{attrs:{width:"80"}},[t._v("属性")]),a("th",[t._v("说明")]),a("th",{attrs:{width:"150"}},[t._v("类型")]),a("th",{attrs:{width:"80"}},[t._v("默认值")])])]),a("tbody",[a("tr",[a("td",[t._v("avatar")]),a("td",[t._v("头像地址/头像/图标")]),a("td",[t._v("String | Slot")]),a("td",[t._v("--")])]),a("tr",[a("td",[t._v("title")]),a("td",[t._v("标题")]),a("td",[t._v("String | Slot")]),a("td",[t._v("--")])]),a("tr",[a("td",[t._v("description")]),a("td",[t._v("描述内容")]),a("td",[t._v("String | Slot")]),a("td",[t._v("--")])])])])])],1)},staticRenderFns:[]},k=a("VU/8")(j,D,!1,null,null,null);e.default=k.exports},fJ2k:function(t,e){},x24j:function(t,e){}});
//# sourceMappingURL=20.05f212fedab89327c7ed.js.map