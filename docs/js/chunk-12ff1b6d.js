(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-12ff1b6d"],{1636:function(t,e,a){"use strict";a("4db6")},"33c5":function(t,e,a){"use strict";a("9c69")},"4db6":function(t,e,a){},"524a":function(t,e,a){},"9c69":function(t,e,a){},a0d0:function(t,e,a){"use strict";a("524a")},aa2d:function(t,e,a){},afea:function(t,e,a){"use strict";a.r(e);var n=a("d58b"),l=a("240e"),i=a("1a42"),o={components:{Example:i.a},data:function(){return{code:'<template>\n  <vui-pagination v-model="page" v-bind:total="50" />\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        page: 1\n      };\n    },\n    watch: {\n      page(value) {\n        console.log("page: " + value);\n      }\n    }\n  };\n<\/script>\n',page:1}},watch:{page:function(t){console.log("page: "+t)}}},p=a("2877"),s=Object(p.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("example",{attrs:{code:t.code,id:"example-pagination-basic-usage"}},[a("template",{slot:"demo"},[a("vui-pagination",{attrs:{total:50},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1),a("template",{slot:"title"},[t._v("基本用法")]),a("template",{slot:"description"},[a("p",[t._v("最简单的用法。")])])],2)}),[],!1,null,null,null).exports,d={components:{Example:i.a},data:function(){return{code:'<template>\n  <vui-pagination v-model="page" v-bind:total="500" />\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        page: 6\n      };\n    },\n    watch: {\n      page(value) {\n        console.log("page: " + value);\n      }\n    }\n  };\n<\/script>\n',page:6}},watch:{page:function(t){console.log("page: "+t)}}},v=Object(p.a)(d,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("example",{attrs:{code:t.code,id:"example-pagination-more"}},[a("template",{slot:"demo"},[a("vui-pagination",{attrs:{total:500},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1),a("template",{slot:"title"},[t._v("更多分页")]),a("template",{slot:"description"},[a("p",[t._v("更多分页，当页数过多时会自动折叠。")])])],2)}),[],!1,null,null,null).exports,g={components:{Example:i.a},data:function(){return{code:'<template>\n  <div class="example-pagination-total">\n    <vui-pagination v-bind:total="95" showTotal />\n    <vui-pagination v-bind:total="95" v-bind:showTotal="showTotal" />\n  </div>\n</template>\n\n<script>\n  export default {\n    methods: {\n      showTotal(total, range) {\n        return range[0] + "~" + range[1] + " / " + total;\n      }\n    }\n  };\n<\/script>\n\n<style>\n  .example-pagination-total .vui-pagination + .vui-pagination { margin-top:16px; }\n</style>\n'}},methods:{showTotal:function(t,e){return e[0]+"~"+e[1]+" / "+t}}},c=(a("a0d0"),Object(p.a)(g,(function(){var t=this.$createElement,e=this._self._c||t;return e("example",{attrs:{code:this.code,id:"example-pagination-total"}},[e("template",{slot:"demo"},[e("div",{staticClass:"example-pagination-total"},[e("vui-pagination",{attrs:{total:95,showTotal:""}}),e("vui-pagination",{attrs:{total:95,showTotal:this.showTotal}})],1)]),e("template",{slot:"title"},[this._v("总数")]),e("template",{slot:"description"},[e("p",[this._v("通过设置 "),e("code",[this._v("showTotal")]),this._v(" 展示总共有多少数据。 ")])])],2)}),[],!1,null,null,null).exports),r={components:{Example:i.a},data:function(){return{code:'<template>\n  <vui-pagination v-model="page" v-bind:total="100" prevPageText="上一页" nextPageText="下一页" />\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        page: 1\n      };\n    },\n    watch: {\n      page(value) {\n        console.log("page: " + value);\n      }\n    }\n  };\n<\/script>\n',page:1}},watch:{page:function(t){console.log("page: "+t)}}},m=Object(p.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("example",{attrs:{code:t.code,id:"example-pagination-flip-button"}},[a("template",{slot:"demo"},[a("vui-pagination",{attrs:{total:100,prevPageText:"上一页",nextPageText:"下一页"},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1),a("template",{slot:"title"},[t._v("翻页按钮文本")]),a("template",{slot:"description"},[a("p",[t._v("自定义翻页按钮的文本。")])])],2)}),[],!1,null,null,null).exports,u={components:{Example:i.a},data:function(){return{code:'<template>\n  <vui-pagination v-model="page" v-bind:total="500" showPageSizer v-on:changePageSize="handleChangePageSize" />\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        page: 3\n      };\n    },\n    watch: {\n      page(value) {\n        console.log("page: " + value);\n      }\n    },\n    methods: {\n      handleChangePageSize(value) {\n        console.log("pageSize: " + value);\n      }\n    }\n  };\n<\/script>\n',page:3}},watch:{page:function(t){console.log("page: "+t)}},methods:{handleChangePageSize:function(t){console.log("pageSize: "+t)}}},_=Object(p.a)(u,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("example",{attrs:{code:t.code,id:"example-pagination-page-size"}},[a("template",{slot:"demo"},[a("vui-pagination",{attrs:{total:500,showPageSizer:""},on:{changePageSize:t.handleChangePageSize},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1),a("template",{slot:"title"},[t._v("每页数量")]),a("template",{slot:"description"},[a("p",[t._v("可以切换每页显示的数量。")])])],2)}),[],!1,null,null,null).exports,h={components:{Example:i.a},data:function(){return{code:'<template>\n  <vui-pagination\n    v-model="page"\n    v-bind:total="500"\n    showPageElevator\n    v-on:change="handleChangePage"\n  />\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        page: 2\n      };\n    },\n    methods: {\n      handleChangePage(value) {\n        console.log("page: " + value);\n      }\n    }\n  };\n<\/script>\n',page:2}},methods:{handleChangePage:function(t){console.log("page: "+t)}}},x=Object(p.a)(h,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("example",{attrs:{code:t.code,id:"example-pagination-goto"}},[a("template",{slot:"demo"},[a("vui-pagination",{attrs:{total:500,showPageElevator:""},on:{change:t.handleChangePage},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1),a("template",{slot:"title"},[t._v("跳转")]),a("template",{slot:"description"},[a("p",[t._v("快速跳转到某一页。")])])],2)}),[],!1,null,null,null).exports,f={components:{Example:i.a},data:function(){return{code:'<template>\n  <div class="example-pagination-simple">\n    <vui-pagination v-bind:total="500" />\n    <vui-pagination v-bind:total="500" align="center" />\n    <vui-pagination v-bind:total="500" align="right" />\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-pagination-align .vui-pagination + .vui-pagination { margin-top:16px; }\n</style>\n'}}},b=(a("f7ee"),Object(p.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("example",{attrs:{code:this.code,id:"example-pagination-align"}},[e("template",{slot:"demo"},[e("div",{staticClass:"example-pagination-simple"},[e("vui-pagination",{attrs:{total:500}}),e("vui-pagination",{attrs:{total:500,align:"center"}}),e("vui-pagination",{attrs:{total:500,align:"right"}})],1)]),e("template",{slot:"title"},[this._v("对齐方式")]),e("template",{slot:"description"},[e("p",[this._v("通过 "),e("code",[this._v("align")]),this._v(" 属性设置分页的对齐方式。")])])],2)}),[],!1,null,null,null).exports),w={components:{Example:i.a},data:function(){return{code:'<template>\n  <div class="example-pagination-small">\n    <vui-pagination small v-bind:total="50" />\n    <vui-pagination small v-bind:total="50" showPageSizer showPageElevator />\n    <vui-pagination small v-bind:total="50" showTotal />\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-pagination-small .vui-pagination + .vui-pagination { margin-top:16px; }\n</style>\n'}}},P=(a("33c5"),Object(p.a)(w,(function(){var t=this.$createElement,e=this._self._c||t;return e("example",{attrs:{code:this.code,id:"example-pagination-small"}},[e("template",{slot:"demo"},[e("div",{staticClass:"example-pagination-small"},[e("vui-pagination",{attrs:{small:"",total:50}}),e("vui-pagination",{attrs:{small:"",total:50,showPageSizer:"",showPageElevator:""}}),e("vui-pagination",{attrs:{small:"",total:50,showTotal:""}})],1)]),e("template",{slot:"title"},[this._v("小型尺寸")]),e("template",{slot:"description"},[e("p",[this._v("启用 "),e("code",[this._v("small")]),this._v(" 属性使用小型尺寸，拥有普通的所有功能。")])])],2)}),[],!1,null,null,null).exports),S={components:{Example:i.a},data:function(){return{code:'<template>\n  <div class="example-pagination-simple">\n    <vui-pagination simple v-bind:total="50" />\n    <vui-pagination simple v-bind:total="50" showTotal />\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-pagination-simple .vui-pagination + .vui-pagination { margin-top:16px; }\n</style>\n'}}},E=(a("1636"),Object(p.a)(S,(function(){var t=this.$createElement,e=this._self._c||t;return e("example",{attrs:{code:this.code,id:"example-pagination-simple"}},[e("template",{slot:"demo"},[e("div",{staticClass:"example-pagination-simple"},[e("vui-pagination",{attrs:{simple:"",total:50}}),e("vui-pagination",{attrs:{simple:"",total:50,showTotal:""}})],1)]),e("template",{slot:"title"},[this._v("简洁版本")]),e("template",{slot:"description"},[e("p",[this._v("设置 "),e("code",[this._v("simple")]),this._v(" 属性即可使用简洁版本的分页，通过输入页码回车切换，或使用键盘的上下键来切换。")])])],2)}),[],!1,null,null,null).exports),O={components:{Example:i.a},data:function(){return{code:'<template>\n  <div class="example-pagination-hide-on-single-page">\n    <vui-switch v-model="hideOnSinglePage" />\n    <vui-pagination v-bind:total="8" v-bind:hideOnSinglePage="hideOnSinglePage" />\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        hideOnSinglePage: false\n      };\n    }\n  };\n<\/script>\n\n<style>\n  .example-pagination-hide-on-single-page .vui-pagination { margin-top:16px; }\n</style>\n',hideOnSinglePage:!1}}},z=(a("ce11"),Object(p.a)(O,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("example",{attrs:{code:t.code,id:"example-pagination-hide-on-single-page"}},[a("template",{slot:"demo"},[a("div",{staticClass:"example-pagination-hide-on-single-page"},[a("vui-switch",{model:{value:t.hideOnSinglePage,callback:function(e){t.hideOnSinglePage=e},expression:"hideOnSinglePage"}}),a("vui-pagination",{attrs:{total:8,hideOnSinglePage:t.hideOnSinglePage}})],1)]),a("template",{slot:"title"},[t._v("隐藏")]),a("template",{slot:"description"},[a("p",[t._v("当只有一页时，通过设置 "),a("code",[t._v("hideOnSinglePage")]),t._v(" 属性来隐藏分页。")])])],2)}),[],!1,null,null,null).exports),T={mixins:[n.a],components:{Document:l.a,ExampleBasicUsage:s,ExampleMore:v,ExampleTotal:c,ExampleFlipButton:m,ExamplePageSize:_,ExampleGoto:x,ExampleAlign:b,ExampleSmall:P,ExampleSimple:E,ExampleHideOnSinglePage:z}},C=Object(p.a)(T,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("document",[a("h1",[t._v("Pagination 分页")]),a("p",[t._v("采用分页的形式分隔长列表，每次只加载一个页面。")]),a("h2",[t._v("何时使用")]),a("ul",[a("li",[t._v("当加载/渲染所有数据将花费很多时间时；")]),a("li",[t._v("可切换页码浏览数据。")])]),a("h2",[t._v("代码演示")])]),a("example-basic-usage"),a("example-more"),a("example-total"),a("example-flip-button"),a("example-pageSize"),a("example-goto"),a("example-align"),a("example-small"),a("example-simple"),a("example-hide-on-single-page"),a("document",[a("h2",{attrs:{id:"example-api"}},[t._v("API")]),a("h3",[t._v("Pagination 属性")]),a("table",{staticClass:"example-api-props"},[a("thead",[a("tr",[a("th",{attrs:{width:"180"}},[t._v("属性")]),a("th",[t._v("说明")]),a("th",{attrs:{width:"200"}},[t._v("类型")]),a("th",{attrs:{width:"180"}},[t._v("默认值")])])]),a("tbody",[a("tr",[a("td",[t._v("small")]),a("td",[t._v("使用小型尺寸")]),a("td",[t._v("Boolean")]),a("td",[t._v("false")])]),a("tr",[a("td",[t._v("simple")]),a("td",[t._v("使用简洁版本")]),a("td",[t._v("Boolean")]),a("td",[t._v("false")])]),a("tr",[a("td",[t._v("align")]),a("td",[t._v("对齐方式，可选值为 "),a("code",[t._v("left")]),t._v("、"),a("code",[t._v("center")]),t._v("、"),a("code",[t._v("right")]),t._v(" 或者不设")]),a("td",[t._v("String")]),a("td",[t._v("left")])]),a("tr",[a("td",[t._v("total")]),a("td",[t._v("数据总数")]),a("td",[t._v("Number")]),a("td",[t._v("0")])]),a("tr",[a("td",[t._v("showTotal")]),a("td",[t._v("用于显示数据总数和当前数据范围")]),a("td",[t._v("Boolean | Function")]),a("td",[t._v("false")])]),a("tr",[a("td",[t._v("page")]),a("td",[t._v("当前页码，可以使用 "),a("code",[t._v("v-model")]),t._v(" 双向绑定数据")]),a("td",[t._v("Number")]),a("td",[t._v("1")])]),a("tr",[a("td",[t._v("pageSize")]),a("td",[t._v("每页条数")]),a("td",[t._v("Number")]),a("td",[t._v("10")])]),a("tr",[a("td",[t._v("pageSizeOptions")]),a("td",[t._v("用于指定 "),a("code",[t._v("pageSize")]),t._v(" 的可选列表")]),a("td",[t._v("Array")]),a("td",[t._v("[10, 20, 30, 40]")])]),a("tr",[a("td",[t._v("showPageSizer")]),a("td",[t._v("是否可以切换 "),a("code",[t._v("pageSize")])]),a("td",[t._v("Boolean")]),a("td",[t._v("false")])]),a("tr",[a("td",[t._v("showPageElevator")]),a("td",[t._v("是否可以快速跳转至某一页")]),a("td",[t._v("Boolean")]),a("td",[t._v("false")])]),a("tr",[a("td",[t._v("prevPageText")]),a("td",[t._v("替代图标显示的上一页文字")]),a("td",[t._v("String")]),a("td",[t._v("--")])]),a("tr",[a("td",[t._v("nextPageText")]),a("td",[t._v("替代图标显示的下一页文字")]),a("td",[t._v("String")]),a("td",[t._v("--")])]),a("tr",[a("td",[t._v("hideOnSinglePage")]),a("td",[t._v("当只有一页时是否隐藏分页")]),a("td",[t._v("Boolean")]),a("td",[t._v("false")])])])]),a("h3",[t._v("Pagination 事件")]),a("table",{staticClass:"example-api-events"},[a("thead",[a("tr",[a("th",{attrs:{width:"180"}},[t._v("事件名")]),a("th",[t._v("说明")]),a("th",{attrs:{width:"200"}},[t._v("类型")]),a("th",{attrs:{width:"180"}},[t._v("回调参数")])])]),a("tbody",[a("tr",[a("td",[t._v("input")]),a("td",[t._v("页码改变时触发的事件回调，可以使用 "),a("code",[t._v("v-model")]),t._v(" 双向绑定数据")]),a("td",[t._v("Function")]),a("td",[t._v("page")])]),a("tr",[a("td",[t._v("change")]),a("td",[t._v("页码改变时触发的事件回调")]),a("td",[t._v("Function")]),a("td",[t._v("page")])]),a("tr",[a("td",[t._v("changePageSize")]),a("td",[t._v("切换 "),a("code",[t._v("pageSize")]),t._v(" 时触发的事件回调")]),a("td",[t._v("Function")]),a("td",[t._v("pageSize")])])])])])],1)}),[],!1,null,null,null);e.default=C.exports},c2cb:function(t,e,a){},ce11:function(t,e,a){"use strict";a("c2cb")},f7ee:function(t,e,a){"use strict";a("aa2d")}}]);