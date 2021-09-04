webpackJsonp([34],{Y59B:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("q77b"),n=i("6WqV"),r=i("RLuK"),u={components:{Example:r.a},data:function(){return{code:'<template>\n  <vui-page-header\n    style="border: 1px solid #e6e6e6;"\n    title="Title"\n    subTitle="This is a subtitle"\n    v-on:back="handleBack"\n  />\n</template>\n\n<script>\n  export default {\n    methods: {\n      handleBack() {\n        this.$router.back();\n      }\n    }\n  };\n<\/script>\n'}},methods:{handleBack:function(){this.$router.back()}}},s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("example",{attrs:{code:this.code,id:"example-page-header-basic-usage"}},[t("template",{slot:"demo"},[t("vui-page-header",{staticStyle:{border:"1px solid #f0f0f0"},attrs:{title:"Title",subTitle:"This is a subtitle"},on:{back:this.handleBack}})],1),t("template",{slot:"title"},[this._v("基本用法")]),t("template",{slot:"description"},[t("p",[this._v("标准页头，适合使用在需要简单描述的场景。")])])],2)},staticRenderFns:[]},o=i("VU/8")(u,s,!1,null,null,null).exports,v={components:{Example:r.a},data:function(){return{code:'<template>\n  <div class="example-page-header-ghost">\n    <vui-page-header title="Title" subTitle="This is a subtitle" v-bind:ghost="false" v-on:back="handleBack">\n      <vui-space slot="extra" v-bind:size="10">\n        <vui-button>Action 1</vui-button>\n        <vui-button>Action 2</vui-button>\n        <vui-button type="primary">Action 3</vui-button>\n      </vui-space>\n      <vui-descriptions>\n        <vui-description label="UserName">Chillyme</vui-description>\n        <vui-description label="Telephone">18012341234</vui-description>\n        <vui-description label="Live">Hangzhou, Zhejiang</vui-description>\n        <vui-description label="Address" :span="2">\n          No. 01, Wenyi Road, Xihu District, Hangzhou, Zhejiang, China\n        </vui-description>\n        <vui-description label="Remark">Empty</vui-description>\n      </vui-descriptions>\n    </vui-page-header>\n  </div>\n</template>\n\n<script>\n  export default {\n    methods: {\n      handleBack() {\n        this.$router.back();\n      }\n    }\n  };\n<\/script>\n\n<style>\n  .example-page-header-ghost { background-color:#fafafa; padding:20px; }\n</style>\n'}},methods:{handleBack:function(){this.$router.back()}}},d={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("example",{attrs:{code:e.code,id:"example-page-header-ghost"}},[i("template",{slot:"demo"},[i("div",{staticClass:"example-page-header-ghost"},[i("vui-page-header",{attrs:{title:"Title",subTitle:"This is a subtitle",ghost:!1},on:{back:e.handleBack}},[i("vui-space",{attrs:{slot:"extra",size:10},slot:"extra"},[i("vui-button",[e._v("Action 1")]),i("vui-button",[e._v("Action 2")]),i("vui-button",{attrs:{type:"primary"}},[e._v("Action 3")])],1),i("vui-descriptions",[i("vui-description",{attrs:{label:"UserName"}},[e._v("Chillyme")]),i("vui-description",{attrs:{label:"Telephone"}},[e._v("18012341234")]),i("vui-description",{attrs:{label:"Live"}},[e._v("Hangzhou, Zhejiang")]),i("vui-description",{attrs:{label:"Address",span:2}},[e._v("\n\t\t\t\t\t\tNo. 01, Wenyi Road, Xihu District, Hangzhou, Zhejiang, China\n\t\t\t\t\t")]),i("vui-description",{attrs:{label:"Remark"}},[e._v("Empty")])],1)],1)],1)]),i("template",{slot:"title"},[e._v("白底模式")]),i("template",{slot:"description"},[i("p",[e._v("默认 "),i("code",[e._v("PageHeader")]),e._v(" 是透明底色的。在某些情况下，"),i("code",[e._v("PageHeader")]),e._v(" 需要自己的背景颜色。")])])],2)},staticRenderFns:[]};var l=i("VU/8")(v,d,!1,function(e){i("bCaj")},null,null).exports,c={components:{Example:r.a},data:function(){return{code:'<template>\n  <vui-page-header\n    style="border: 1px solid #f0f0f0;"\n    title="Title"\n    subTitle="This is a subtitle"\n  >\n    <vui-breadcrumb slot="breadcrumb">\n      <vui-breadcrumb-item>Home</vui-breadcrumb-item>\n      <vui-breadcrumb-item>Components</vui-breadcrumb-item>\n      <vui-breadcrumb-item>Navigation</vui-breadcrumb-item>\n      <vui-breadcrumb-item>PageHeader</vui-breadcrumb-item>\n    </vui-breadcrumb>\n  </vui-page-header>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n'}}},m={render:function(){var e=this.$createElement,t=this._self._c||e;return t("example",{attrs:{code:this.code,id:"example-page-header-breadcrumb"}},[t("template",{slot:"demo"},[t("vui-page-header",{staticStyle:{border:"1px solid #f0f0f0"},attrs:{title:"Title",subTitle:"This is a subtitle"}},[t("vui-breadcrumb",{attrs:{slot:"breadcrumb"},slot:"breadcrumb"},[t("vui-breadcrumb-item",[this._v("Home")]),t("vui-breadcrumb-item",[this._v("Components")]),t("vui-breadcrumb-item",[this._v("Navigation")]),t("vui-breadcrumb-item",[this._v("PageHeader")])],1)],1)],1),t("template",{slot:"title"},[this._v("含面包屑")]),t("template",{slot:"description"},[t("p",[this._v("含面包屑的页头，适合层级比较深的页面，让用户可以快速导航。")])])],2)},staticRenderFns:[]},b=i("VU/8")(c,m,!1,null,null,null).exports,p={components:{Example:r.a},data:function(){return{code:'<template>\n  <div class="example-page-header-more">\n    <vui-page-header title="Title" subTitle="This is a subtitle" v-bind:ghost="false">\n      <vui-breadcrumb slot="breadcrumb">\n        <vui-breadcrumb-item>Home</vui-breadcrumb-item>\n        <vui-breadcrumb-item>Components</vui-breadcrumb-item>\n        <vui-breadcrumb-item>Navigation</vui-breadcrumb-item>\n        <vui-breadcrumb-item>PageHeader</vui-breadcrumb-item>\n      </vui-breadcrumb>\n      <vui-space slot="extra" v-bind:size="10">\n        <vui-button>Action 1</vui-button>\n        <vui-button>Action 2</vui-button>\n        <vui-button type="primary">Action 3</vui-button>\n      </vui-space>\n      <vui-descriptions>\n        <vui-description label="UserName">Chillyme</vui-description>\n        <vui-description label="Telephone">18012341234</vui-description>\n        <vui-description label="Live">Hangzhou, Zhejiang</vui-description>\n        <vui-description label="Address" v-bind:span="2">\n          No. 01, Wenyi Road, Xihu District, Hangzhou, Zhejiang, China\n        </vui-description>\n        <vui-description label="Remark">Empty</vui-description>\n      </vui-descriptions>\n    </vui-page-header>\n    <vui-page-header title="Title" subTitle="This is a subtitle" v-bind:ghost="false">\n      <vui-breadcrumb slot="breadcrumb">\n        <vui-breadcrumb-item>Home</vui-breadcrumb-item>\n        <vui-breadcrumb-item>Components</vui-breadcrumb-item>\n        <vui-breadcrumb-item>Navigation</vui-breadcrumb-item>\n        <vui-breadcrumb-item>PageHeader</vui-breadcrumb-item>\n      </vui-breadcrumb>\n      <template slot="tags">\n        <vui-tag color="blue">Blue Tag</vui-tag>\n      </template>\n      <vui-space slot="extra" v-bind:size="10">\n        <vui-button>Action 1</vui-button>\n        <vui-button>Action 2</vui-button>\n        <vui-button type="primary">Action 3</vui-button>\n      </vui-space>\n      <vui-row v-bind:gutter="16">\n        <vui-col v-bind:span="4">\n          <vui-statistic value="Pending" title="Status" />\n        </vui-col>\n        <vui-col v-bind:span="4">\n          <vui-statistic v-bind:value="123.4" v-bind:precision="2" prefix="$" title="Price" />\n        </vui-col>\n        <vui-col v-bind:span="4">\n          <vui-statistic v-bind:value="1234.5" v-bind:precision="2" prefix="$" title="Balance" />\n        </vui-col>\n      </vui-row>\n    </vui-page-header>\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-page-header-more { background-color:#f6f6f6; padding:20px; }\n  .example-page-header-more .vui-page-header + .vui-page-header { margin-top:20px; }\n</style>\n'}}},h={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("example",{attrs:{code:e.code,id:"example-page-header-more"}},[i("template",{slot:"demo"},[i("div",{staticClass:"example-page-header-more"},[i("vui-page-header",{attrs:{title:"Title",subTitle:"This is a subtitle",ghost:!1}},[i("vui-breadcrumb",{attrs:{slot:"breadcrumb"},slot:"breadcrumb"},[i("vui-breadcrumb-item",[e._v("Home")]),i("vui-breadcrumb-item",[e._v("Components")]),i("vui-breadcrumb-item",[e._v("Navigation")]),i("vui-breadcrumb-item",[e._v("PageHeader")])],1),i("vui-space",{attrs:{slot:"extra",size:10},slot:"extra"},[i("vui-button",[e._v("Action 1")]),i("vui-button",[e._v("Action 2")]),i("vui-button",{attrs:{type:"primary"}},[e._v("Action 3")])],1),i("vui-descriptions",[i("vui-description",{attrs:{label:"UserName"}},[e._v("Chillyme")]),i("vui-description",{attrs:{label:"Telephone"}},[e._v("18012341234")]),i("vui-description",{attrs:{label:"Live"}},[e._v("Hangzhou, Zhejiang")]),i("vui-description",{attrs:{label:"Address",span:2}},[e._v("\n\t\t\t\t\t\tNo. 01, Wenyi Road, Xihu District, Hangzhou, Zhejiang, China\n\t\t\t\t\t")]),i("vui-description",{attrs:{label:"Remark"}},[e._v("Empty")])],1)],1),i("vui-page-header",{attrs:{title:"Title",subTitle:"This is a subtitle",ghost:!1}},[i("vui-breadcrumb",{attrs:{slot:"breadcrumb"},slot:"breadcrumb"},[i("vui-breadcrumb-item",[e._v("Home")]),i("vui-breadcrumb-item",[e._v("Components")]),i("vui-breadcrumb-item",[e._v("Navigation")]),i("vui-breadcrumb-item",[e._v("PageHeader")])],1),i("template",{slot:"tags"},[i("vui-tag",{attrs:{color:"blue"}},[e._v("Blue Tag")])],1),i("vui-space",{attrs:{slot:"extra",size:10},slot:"extra"},[i("vui-button",[e._v("Action 1")]),i("vui-button",[e._v("Action 2")]),i("vui-button",{attrs:{type:"primary"}},[e._v("Action 3")])],1),i("vui-row",{attrs:{gutter:16}},[i("vui-col",{attrs:{span:4}},[i("vui-statistic",{attrs:{value:"Pending",title:"Status"}})],1),i("vui-col",{attrs:{span:4}},[i("vui-statistic",{attrs:{value:123.4,precision:2,prefix:"$",title:"Price"}})],1),i("vui-col",{attrs:{span:4}},[i("vui-statistic",{attrs:{value:1234.5,precision:2,prefix:"$",title:"Balance"}})],1)],1)],2)],1)]),i("template",{slot:"title"},[e._v("多种形态")]),i("template",{slot:"description"},[i("p",[e._v("使用操作区，并自定义子节点，适合使用在需要展示一些复杂的信息，帮助用户快速了解这个页面的信息和操作。")])])],2)},staticRenderFns:[]};var g=i("VU/8")(p,h,!1,function(e){i("hsO+")},null,null).exports,_=i("cZSK"),x={components:{Example:r.a,Browser:_.a},data:function(){return{code:'<template>\n  <vui-page-header\n    avatar="https://dummyimage.com/32x32/2d8cf0/fff"\n    title="Title"\n    subTitle="This is a subtitle"\n  >\n    <vui-breadcrumb slot="breadcrumb">\n      <vui-breadcrumb-item>Home</vui-breadcrumb-item>\n      <vui-breadcrumb-item>Components</vui-breadcrumb-item>\n      <vui-breadcrumb-item>Navigation</vui-breadcrumb-item>\n      <vui-breadcrumb-item>PageHeader</vui-breadcrumb-item>\n    </vui-breadcrumb>\n    <template slot="tags">\n      <vui-tag color="red">Red Tag</vui-tag>\n      <vui-tag color="blue">Blue Tag</vui-tag>\n    </template>\n    <vui-space slot="extra" v-bind:size="10">\n      <vui-button>Action 1</vui-button>\n      <vui-button>Action 2</vui-button>\n      <vui-button type="primary">Action 3</vui-button>\n    </vui-space>\n    <vui-descriptions>\n      <vui-description label="UserName">Chillyme</vui-description>\n      <vui-description label="Telephone">18012341234</vui-description>\n      <vui-description label="Live">Hangzhou, Zhejiang</vui-description>\n      <vui-description label="Address" v-bind:span="2">\n        No. 01, Wenyi Road, Xihu District, Hangzhou, Zhejiang, China\n      </vui-description>\n      <vui-description label="Remark">Empty</vui-description>\n    </vui-descriptions>\n    <vui-menu slot="footer" mode="horizontal" selectedName="1">\n      <vui-menu-item name="1" title="Navigation 1" />\n      <vui-menu-item name="2" title="Navigation 2" />\n    </vui-menu>\n  </vui-page-header>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n'}}},f={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("example",{attrs:{code:e.code,id:"example-page-header-content"}},[i("template",{slot:"demo"},[i("browser",[i("vui-page-header",{attrs:{avatar:"https://dummyimage.com/32x32/2d8cf0/fff",title:"Title",subTitle:"This is a subtitle"}},[i("vui-breadcrumb",{attrs:{slot:"breadcrumb"},slot:"breadcrumb"},[i("vui-breadcrumb-item",[e._v("Home")]),i("vui-breadcrumb-item",[e._v("Components")]),i("vui-breadcrumb-item",[e._v("Navigation")]),i("vui-breadcrumb-item",[e._v("PageHeader")])],1),i("template",{slot:"tags"},[i("vui-tag",{attrs:{color:"red"}},[e._v("Red Tag")]),i("vui-tag",{attrs:{color:"blue"}},[e._v("Blue Tag")])],1),i("vui-space",{attrs:{slot:"extra",size:10},slot:"extra"},[i("vui-button",[e._v("Action 1")]),i("vui-button",[e._v("Action 2")]),i("vui-button",{attrs:{type:"primary"}},[e._v("Action 3")])],1),i("vui-descriptions",[i("vui-description",{attrs:{label:"UserName"}},[e._v("Chillyme")]),i("vui-description",{attrs:{label:"Telephone"}},[e._v("18012341234")]),i("vui-description",{attrs:{label:"Live"}},[e._v("Hangzhou, Zhejiang")]),i("vui-description",{attrs:{label:"Address",span:2}},[e._v("\n\t\t\t\t\t\tNo. 01, Wenyi Road, Xihu District, Hangzhou, Zhejiang, China\n\t\t\t\t\t")]),i("vui-description",{attrs:{label:"Remark"}},[e._v("Empty")])],1),i("vui-menu",{attrs:{slot:"footer",mode:"horizontal",selectedName:"1"},slot:"footer"},[i("vui-menu-item",{attrs:{name:"1",title:"Navigation 1"}}),i("vui-menu-item",{attrs:{name:"2",title:"Navigation 2"}})],1)],2)],1)],1),i("template",{slot:"title"},[e._v("组合示例")]),i("template",{slot:"description"},[i("p",[e._v("使用了 "),i("code",[e._v("PageHeader")]),e._v(" 提供的所有能力。")])])],2)},staticRenderFns:[]},T=i("VU/8")(x,f,!1,null,null,null).exports,y={mixins:[a.a],components:{Document:n.a,ExamplePageHeaderBasicUsage:o,ExamplePageHeaderGhost:l,ExamplePageHeaderBreadcrumb:b,ExamplePageHeaderMore:g,ExamplePageHeaderContent:T}},H={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("document",[i("h1",[e._v("PageHeader 页头")]),i("p",[e._v("页头位于页容器中，页容器顶部，起到了内容概览和引导页级操作的作用。包括由面包屑、标题、页面内容简介、页面级操作、页面级导航等组成。")]),i("h2",[e._v("何时使用")]),i("p",[e._v("当需要使用户快速理解当前页是什么，以及方便用户使用页面功能时使用，通常也可被用作页面间导航。")]),i("h2",[e._v("代码演示")])]),i("ExamplePageHeaderBasicUsage"),i("ExamplePageHeaderGhost"),i("ExamplePageHeaderBreadcrumb"),i("ExamplePageHeaderMore"),i("ExamplePageHeaderContent"),i("document",[i("h2",{attrs:{id:"example-api"}},[e._v("API")]),i("h3",[e._v("PageHeader 属性")]),i("table",{staticClass:"example-api-props"},[i("thead",[i("tr",[i("th",{attrs:{width:"130"}},[e._v("属性")]),i("th",[e._v("说明")]),i("th",{attrs:{width:"140"}},[e._v("类型")]),i("th",{attrs:{width:"100"}},[e._v("默认值")])])]),i("tbody",[i("tr",[i("td",[e._v("breadcrumb")]),i("td",[e._v("面包屑配置。为数组类型时，数组项为 "),i("code",[e._v("Object")]),e._v(" 类型，详细的项目属性请参考 "),i("code",[e._v("BreadcrumbItem")]),e._v(" 组件")]),i("td",[e._v("Array | Slot")]),i("td",[e._v("--")])]),i("tr",[i("td",[e._v("backIcon")]),i("td",[e._v("自定义后退按钮图标类型/图标")]),i("td",[e._v("String | Slot")]),i("td",[e._v("--")])]),i("tr",[i("td",[e._v("avatar")]),i("td",[e._v("标题左侧的头像地址/头像")]),i("td",[e._v("String | Slot")]),i("td",[e._v("--")])]),i("tr",[i("td",[e._v("title")]),i("td",[e._v("标题")]),i("td",[e._v("String | Slot")]),i("td",[e._v("--")])]),i("tr",[i("td",[e._v("subTitle")]),i("td",[e._v("副标题")]),i("td",[e._v("String | Slot")]),i("td",[e._v("--")])]),i("tr",[i("td",[e._v("tags")]),i("td",[e._v("标题右侧的 "),i("code",[e._v("Tag")]),e._v(" 列表。为数组类型时，数组项为 "),i("code",[e._v("Object")]),e._v(" 类型，如 "),i("code",[e._v('[{ color: "red", title: "Tag" }]')])]),i("td",[e._v("Array | Slot")]),i("td",[e._v("--")])]),i("tr",[i("td",[e._v("extra")]),i("td",[e._v("操作区，位于标题行的行尾")]),i("td",[e._v("Slot")]),i("td",[e._v("--")])]),i("tr",[i("td",[e._v("footer")]),i("td",[i("code",[e._v("PageHeader")]),e._v(" 的页脚，一般用于渲染横向导航菜单")]),i("td",[e._v("Slot")]),i("td",[e._v("--")])]),i("tr",[i("td",[e._v("ghost")]),i("td",[i("code",[e._v("PageHeader")]),e._v(" 的背景类型，将会改变背景颜色")]),i("td",[e._v("Boolean")]),i("td",[i("code",[e._v("true")])])])])]),i("h3",[e._v("PageHeader 事件")]),i("table",{staticClass:"example-api-events"},[i("thead",[i("tr",[i("th",{attrs:{width:"130"}},[e._v("事件名")]),i("th",[e._v("说明")]),i("th",{attrs:{width:"140"}},[e._v("类型")]),i("th",{attrs:{width:"100"}},[e._v("回调参数")])])]),i("tbody",[i("tr",[i("td",[e._v("back")]),i("td",[e._v("返回按钮的点击事件回调函数")]),i("td",[e._v("Function")]),i("td",[i("code",[e._v("event")])])])])])])],1)},staticRenderFns:[]},A=i("VU/8")(y,H,!1,null,null,null);t.default=A.exports},bCaj:function(e,t){},"hsO+":function(e,t){}});
//# sourceMappingURL=34.f651d087b755d4ef8d5f.js.map