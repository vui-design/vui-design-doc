(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3e094fff"],{"56f1":function(t,e,i){"use strict";i("7e9a")},"7e9a":function(t,e,i){},f736:function(t,e,i){"use strict";i.r(e);var a=i("d58b"),s=i("240e"),n=i("1a42"),l={components:{Example:n.a},data:function(){return{code:'<template>\n  <div class="example-list-simple">\n    <vui-list header="Header" footer="Footer" size="small" bordered>\n      <vui-list-item>Racing car sprays burning fuel into crowd.</vui-list-item>\n      <vui-list-item>Japanese princess to wed commoner.</vui-list-item>\n      <vui-list-item>Australian walks 100km after outback crash.</vui-list-item>\n      <vui-list-item>Man charged over missing wedding girl.</vui-list-item>\n      <vui-list-item>Los Angeles battles huge wildfires.</vui-list-item>\n    </vui-list>\n    <vui-list header="Header" footer="Footer" bordered>\n      <vui-list-item>Racing car sprays burning fuel into crowd.</vui-list-item>\n      <vui-list-item>Japanese princess to wed commoner.</vui-list-item>\n      <vui-list-item>Australian walks 100km after outback crash.</vui-list-item>\n      <vui-list-item>Man charged over missing wedding girl.</vui-list-item>\n      <vui-list-item>Los Angeles battles huge wildfires.</vui-list-item>\n    </vui-list>\n    <vui-list header="Header" footer="Footer" size="large" bordered>\n      <vui-list-item>Racing car sprays burning fuel into crowd.</vui-list-item>\n      <vui-list-item>Japanese princess to wed commoner.</vui-list-item>\n      <vui-list-item>Australian walks 100km after outback crash.</vui-list-item>\n      <vui-list-item>Man charged over missing wedding girl.</vui-list-item>\n      <vui-list-item>Los Angeles battles huge wildfires.</vui-list-item>\n    </vui-list>\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-list-simple .vui-list + .vui-list { margin-top:24px; }\n</style>\n'}}},r=(i("56f1"),i("2877")),o=Object(r.a)(l,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("example",{attrs:{code:t.code,id:"example-list-simple"}},[i("template",{slot:"demo"},[i("div",{staticClass:"example-list-simple"},[i("vui-list",{attrs:{header:"Header",footer:"Footer",size:"small",bordered:""}},[i("vui-list-item",[t._v("Racing car sprays burning fuel into crowd.")]),i("vui-list-item",[t._v("Japanese princess to wed commoner.")]),i("vui-list-item",[t._v("Australian walks 100km after outback crash.")]),i("vui-list-item",[t._v("Man charged over missing wedding girl.")]),i("vui-list-item",[t._v("Los Angeles battles huge wildfires.")])],1),i("vui-list",{attrs:{header:"Header",footer:"Footer",bordered:""}},[i("vui-list-item",[t._v("Racing car sprays burning fuel into crowd.")]),i("vui-list-item",[t._v("Japanese princess to wed commoner.")]),i("vui-list-item",[t._v("Australian walks 100km after outback crash.")]),i("vui-list-item",[t._v("Man charged over missing wedding girl.")]),i("vui-list-item",[t._v("Los Angeles battles huge wildfires.")])],1),i("vui-list",{attrs:{header:"Header",footer:"Footer",size:"large",bordered:""}},[i("vui-list-item",[t._v("Racing car sprays burning fuel into crowd.")]),i("vui-list-item",[t._v("Japanese princess to wed commoner.")]),i("vui-list-item",[t._v("Australian walks 100km after outback crash.")]),i("vui-list-item",[t._v("Man charged over missing wedding girl.")]),i("vui-list-item",[t._v("Los Angeles battles huge wildfires.")])],1)],1)]),i("template",{slot:"title"},[t._v("简单列表")]),i("template",{slot:"description"},[i("p",[t._v("列表拥有大、中、小三种尺寸，默认为中型尺寸。")]),i("p",[t._v("可通过设置 "),i("code",[t._v("header")]),t._v(" 和 "),i("code",[t._v("footer")]),t._v("，来自定义列表头部和尾部。")])])],2)}),[],!1,null,null,null).exports,m={components:{Example:n.a},data:function(){return{code:'<template>\n  <vui-list>\n    <vui-list-item v-for="(item, index) in data" v-bind:key="index">\n      <vui-list-item-meta v-bind:avatar="item.avatar" v-bind:description="item.description">\n        <a slot="title" href="javascript:;">{{item.title}}</a>\n      </vui-list-item-meta>\n    </vui-list-item>\n  </vui-list>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        data: [\n          {\n            avatar: "https://dummyimage.com/32x32/2d8cf0/fff",\n            title: "List Item Title 1",\n            description: "This is the description of the list item, which may be very long!"\n          },\n          {\n            avatar: "https://dummyimage.com/32x32/2d8cf0/fff",\n            title: "List Item Title 2",\n            description: "This is the description of the list item, which may be very long!"\n          },\n          {\n            avatar: "https://dummyimage.com/32x32/2d8cf0/fff",\n            title: "List Item Title 3",\n            description: "This is the description of the list item, which may be very long!"\n          },\n          {\n            avatar: "https://dummyimage.com/32x32/2d8cf0/fff",\n            title: "List Item Title 4",\n            description: "This is the description of the list item, which may be very long!"\n          }\n        ]\n      };\n    }\n  };\n<\/script>\n',data:[{avatar:"https://dummyimage.com/32x32/2d8cf0/fff",title:"List Item Title 1",description:"This is the description of the list item, which may be very long!"},{avatar:"https://dummyimage.com/32x32/2d8cf0/fff",title:"List Item Title 2",description:"This is the description of the list item, which may be very long!"},{avatar:"https://dummyimage.com/32x32/2d8cf0/fff",title:"List Item Title 3",description:"This is the description of the list item, which may be very long!"},{avatar:"https://dummyimage.com/32x32/2d8cf0/fff",title:"List Item Title 4",description:"This is the description of the list item, which may be very long!"}]}}},d=Object(r.a)(m,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("example",{attrs:{code:t.code,id:"example-list-basic-usage"}},[i("template",{slot:"demo"},[i("vui-list",t._l(t.data,(function(e,a){return i("vui-list-item",{key:a},[i("vui-list-item-meta",{attrs:{avatar:e.avatar,description:e.description}},[i("a",{attrs:{slot:"title",href:"javascript:;"},slot:"title"},[t._v(t._s(e.title))])])],1)})),1)],1),i("template",{slot:"title"},[t._v("基础列表")]),i("template",{slot:"description"},[i("p",[t._v("基础列表。")])])],2)}),[],!1,null,null,null).exports,c=(i("99af"),{components:{Example:n.a},data:function(){return{code:'<template>\n  <vui-list>\n    <vui-list-item v-for="(item, index) in data" v-bind:key="index">\n      <vui-list-item-meta v-bind:avatar="item.avatar" v-bind:description="item.description">\n        <a slot="title" href="javascript:;">{{item.title}}</a>\n      </vui-list-item-meta>\n      <template slot="actions">\n        <a href="javascript:;">Edit</a>\n        <a href="javascript:;">More</a>\n      </template>\n    </vui-list-item>\n    <template slot="more">\n      <vui-spin v-if="loading" />\n      <a href="javascript:;" v-else v-on:click="handleLoadMore">loading more</a>\n    </template>\n  </vui-list>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        loading: false,\n        data: [\n          {\n            avatar: "https://dummyimage.com/32x32/2d8cf0/fff",\n            title: "List Item Title",\n            description: "This is the description of the list item, which may be very long!"\n          },\n          {\n            avatar: "https://dummyimage.com/32x32/2d8cf0/fff",\n            title: "List Item Title",\n            description: "This is the description of the list item, which may be very long!"\n          },\n          {\n            avatar: "https://dummyimage.com/32x32/2d8cf0/fff",\n            title: "List Item Title",\n            description: "This is the description of the list item, which may be very long!"\n          },\n          {\n            avatar: "https://dummyimage.com/32x32/2d8cf0/fff",\n            title: "List Item Title",\n            description: "This is the description of the list item, which may be very long!"\n          }\n        ]\n      };\n    },\n    methods: {\n      handleLoadMore() {\n        this.loading = true;\n\n        setTimeout(() => {\n          const data = [\n            {\n              avatar: "https://dummyimage.com/32x32/2d8cf0/fff",\n              title: "List Item Title",\n              description: "This is the description of the list item, which may be very long!"\n            },\n            {\n              avatar: "https://dummyimage.com/32x32/2d8cf0/fff",\n              title: "List Item Title",\n              description: "This is the description of the list item, which may be very long!"\n            },\n            {\n              avatar: "https://dummyimage.com/32x32/2d8cf0/fff",\n              title: "List Item Title",\n              description: "This is the description of the list item, which may be very long!"\n            },\n            {\n              avatar: "https://dummyimage.com/32x32/2d8cf0/fff",\n              title: "List Item Title",\n              description: "This is the description of the list item, which may be very long!"\n            }\n          ];\n\n          this.loading = false;\n          this.data = this.data.concat(data);\n        }, 1000);\n      }\n    }\n  };\n<\/script>\n',loading:!1,data:[{avatar:"https://dummyimage.com/32x32/2d8cf0/fff",title:"List Item Title",description:"This is the description of the list item, which may be very long!"},{avatar:"https://dummyimage.com/32x32/2d8cf0/fff",title:"List Item Title",description:"This is the description of the list item, which may be very long!"},{avatar:"https://dummyimage.com/32x32/2d8cf0/fff",title:"List Item Title",description:"This is the description of the list item, which may be very long!"},{avatar:"https://dummyimage.com/32x32/2d8cf0/fff",title:"List Item Title",description:"This is the description of the list item, which may be very long!"}]}},methods:{handleLoadMore:function(){var t=this;this.loading=!0,setTimeout((function(){t.loading=!1,t.data=t.data.concat([{avatar:"https://dummyimage.com/32x32/2d8cf0/fff",title:"List Item Title",description:"This is the description of the list item, which may be very long!"},{avatar:"https://dummyimage.com/32x32/2d8cf0/fff",title:"List Item Title",description:"This is the description of the list item, which may be very long!"},{avatar:"https://dummyimage.com/32x32/2d8cf0/fff",title:"List Item Title",description:"This is the description of the list item, which may be very long!"},{avatar:"https://dummyimage.com/32x32/2d8cf0/fff",title:"List Item Title",description:"This is the description of the list item, which may be very long!"}])}),1e3)}}}),v=Object(r.a)(c,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("example",{attrs:{code:t.code,id:"example-list-load-more"}},[i("template",{slot:"demo"},[i("vui-list",[t._l(t.data,(function(e,a){return i("vui-list-item",{key:a},[i("vui-list-item-meta",{attrs:{avatar:e.avatar,description:e.description}},[i("a",{attrs:{slot:"title",href:"javascript:;"},slot:"title"},[t._v(t._s(e.title))])]),i("template",{slot:"actions"},[i("a",{attrs:{href:"javascript:;"}},[t._v("Edit")]),i("a",{attrs:{href:"javascript:;"}},[t._v("More")])])],2)})),i("template",{slot:"more"},[t.loading?i("vui-spin"):i("a",{attrs:{href:"javascript:;"},on:{click:t.handleLoadMore}},[t._v("loading more")])],1)],2)],1),i("template",{slot:"title"},[t._v("加载更多")]),i("template",{slot:"description"},[i("p",[t._v("加载更多。")])])],2)}),[],!1,null,null,null).exports,h={components:{Example:n.a},data:function(){return{code:'<template>\n  <vui-list layout="vertical" size="large">\n    <vui-list-item v-for="(item, index) in data" v-bind:key="index">\n      <vui-list-item-meta v-bind:avatar="item.avatar" v-bind:description="item.description" >\n        <a slot="title" href="javascript:;">{{item.title}}</a>\n      </vui-list-item-meta>\n      <article>{{item.content}}</article>\n      <template slot="actions">\n        <a href="javascript:;">\n          <vui-icon type="star" style="margin-right: 4px;" />{{item.collection}}\n        </a>\n        <a href="javascript:;">\n          <vui-icon type="thumb-up" style="margin-right: 4px;" />{{item.like}}\n        </a>\n        <a href="javascript:;">\n          <vui-icon type="chat-ellipsis" style="margin-right: 4px;" />{{item.comment}}\n        </a>\n      </template>\n      <img slot="extra" width="280" height="166" v-bind:src="item.image" />\n    </vui-list-item>\n  </vui-list>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        data: [\n          {\n            avatar: "https://dummyimage.com/32x32/2d8cf0/fff",\n            title: "List Item Title",\n            description: "This is the description of the list item, which may be very long!",\n            content: "The official guide assumes intermediate level knowledge of HTML, CSS, and JavaScript. If you are totally new to frontend development, it might not be the best idea to jump right into a framework as your first step - grasp the basics then come back!",\n            collection: 100,\n            like: 666,\n            comment: 888,\n            image: "https://dummyimage.com/280x166/ececec/595959"\n          },\n          {\n            avatar: "https://dummyimage.com/32x32/2d8cf0/fff",\n            title: "List Item Title",\n            description: "This is the description of the list item, which may be very long!",\n            content: "The official guide assumes intermediate level knowledge of HTML, CSS, and JavaScript. If you are totally new to frontend development, it might not be the best idea to jump right into a framework as your first step - grasp the basics then come back!",\n            collection: 100,\n            like: 666,\n            comment: 888,\n            image: "https://dummyimage.com/280x166/ececec/595959"\n          }\n        ]\n      };\n    }\n  };\n<\/script>\n',data:[{avatar:"https://dummyimage.com/32x32/2d8cf0/fff",title:"List Item Title",description:"This is the description of the list item, which may be very long!",content:"The official guide assumes intermediate level knowledge of HTML, CSS, and JavaScript. If you are totally new to frontend development, it might not be the best idea to jump right into a framework as your first step - grasp the basics then come back!",collection:100,like:666,comment:888,image:"https://dummyimage.com/280x166/ececec/595959"},{avatar:"https://dummyimage.com/32x32/2d8cf0/fff",title:"List Item Title",description:"This is the description of the list item, which may be very long!",content:"The official guide assumes intermediate level knowledge of HTML, CSS, and JavaScript. If you are totally new to frontend development, it might not be the best idea to jump right into a framework as your first step - grasp the basics then come back!",collection:100,like:666,comment:888,image:"https://dummyimage.com/280x166/ececec/595959"}]}}},p=Object(r.a)(h,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("example",{attrs:{code:t.code,id:"example-list-vertical"}},[i("template",{slot:"demo"},[i("vui-list",{attrs:{layout:"vertical",size:"large"}},t._l(t.data,(function(e,a){return i("vui-list-item",{key:a},[i("vui-list-item-meta",{attrs:{avatar:e.avatar,description:e.description}},[i("a",{attrs:{slot:"title",href:"javascript:;"},slot:"title"},[t._v(t._s(e.title))])]),i("article",[t._v(t._s(e.content))]),i("template",{slot:"actions"},[i("a",{attrs:{href:"javascript:;"}},[i("vui-icon",{staticStyle:{"margin-right":"4px"},attrs:{type:"star"}}),t._v(t._s(e.collection)+" ")],1),i("a",{attrs:{href:"javascript:;"}},[i("vui-icon",{staticStyle:{"margin-right":"4px"},attrs:{type:"thumb-up"}}),t._v(t._s(e.like)+" ")],1),i("a",{attrs:{href:"javascript:;"}},[i("vui-icon",{staticStyle:{"margin-right":"4px"},attrs:{type:"chat-ellipsis"}}),t._v(t._s(e.comment)+" ")],1)]),i("img",{attrs:{slot:"extra",width:"280",height:"166",src:e.image},slot:"extra"})],2)})),1)],1),i("template",{slot:"title"},[t._v("竖排列表样式")]),i("template",{slot:"description"},[i("p",[t._v("通过设置 "),i("code",[t._v("layout")]),t._v(" 属性为 "),i("code",[t._v("vertical")]),t._v(" 可实现竖排列表样式。")])])],2)}),[],!1,null,null,null).exports,u={components:{Example:n.a},data:function(){return{code:'<template>\n  <vui-list v-bind:grid="grid" v-bind:data="data">\n    <vui-list-item slot="item" slot-scope="item, index">\n      <vui-card v-bind:title="item.title">{{item.description}}</vui-card>\n    </vui-list-item>\n  </vui-list>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        grid: {\n          gutter: 16,\n          column: 4\n        },\n        data: [\n          {\n            title: "Title 1",\n            description: "This is the description!"\n          },\n          {\n            title: "Title 2",\n            description: "This is the description!"\n          },\n          {\n            title: "Title 3",\n            description: "This is the description!"\n          },\n          {\n            title: "Title 4",\n            description: "This is the description!"\n          },\n          {\n            title: "Title 1",\n            description: "This is the description!"\n          },\n          {\n            title: "Title 2",\n            description: "This is the description!"\n          },\n          {\n            title: "Title 3",\n            description: "This is the description!"\n          },\n          {\n            title: "Title 4",\n            description: "This is the description!"\n          }\n        ]\n      };\n    }\n  };\n<\/script>\n',grid:{gutter:16,column:4},data:[{title:"Title 1",description:"This is the description!"},{title:"Title 2",description:"This is the description!"},{title:"Title 3",description:"This is the description!"},{title:"Title 4",description:"This is the description!"},{title:"Title 1",description:"This is the description!"},{title:"Title 2",description:"This is the description!"},{title:"Title 3",description:"This is the description!"},{title:"Title 4",description:"This is the description!"}]}}},f=Object(r.a)(u,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("example",{attrs:{code:t.code,id:"example-list-grid"}},[i("template",{slot:"demo"},[i("vui-list",{attrs:{grid:t.grid,data:t.data},scopedSlots:t._u([{key:"item",fn:function(e,a){return i("vui-list-item",{},[i("vui-card",{attrs:{title:e.title}},[t._v(t._s(e.description))])],1)}}])})],1),i("template",{slot:"title"},[t._v("栅格列表")]),i("template",{slot:"description"},[i("p",[t._v("可以通过设置 "),i("code",[t._v("List")]),t._v(" 的 "),i("code",[t._v("grid")]),t._v(" 属性来实现栅格列表，"),i("code",[t._v("column")]),t._v(" 可设置期望显示的列数。")])])],2)}),[],!1,null,null,null).exports,_={mixins:[a.a],components:{Document:s.a,ExampleSimple:o,ExampleBasicUsage:d,ExampleLoadMore:v,ExampleVertical:p,ExampleGrid:f}},g=Object(r.a)(_,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("document",[i("h1",[t._v("List 列表")]),i("p",[t._v("通用列表。")]),i("h2",[t._v("何时使用")]),i("p",[t._v("最基础的列表展示，可承载文字、列表、图片、段落，常用于后台数据展示页面。")]),i("h2",[t._v("代码演示")])]),i("example-simple"),i("example-basic-usage"),i("example-load-more"),i("example-vertical"),i("example-grid"),i("document",[i("h2",{attrs:{id:"example-api"}},[t._v("API")]),i("h3",[t._v("List 属性")]),i("table",{staticClass:"example-api-props"},[i("thead",[i("tr",[i("th",{attrs:{width:"140"}},[t._v("属性")]),i("th",[t._v("说明")]),i("th",{attrs:{width:"200"}},[t._v("类型")]),i("th",{attrs:{width:"140"}},[t._v("默认值")])])]),i("tbody",[i("tr",[i("td",[t._v("header")]),i("td",[t._v("列表底部内容")]),i("td",[t._v("String | Slot")]),i("td",[t._v("--")])]),i("tr",[i("td",[t._v("footer")]),i("td",[t._v("列表头部内容")]),i("td",[t._v("String | Slot")]),i("td",[t._v("--")])]),i("tr",[i("td",[t._v("layout")]),i("td",[t._v("设置 "),i("code",[t._v("ListItem")]),t._v(" 项目布局，可选值为 "),i("code",[t._v("horizontal")]),t._v("、"),i("code",[t._v("vertical")]),t._v(" 或者不设")]),i("td",[t._v("String")]),i("td",[t._v("horizontal")])]),i("tr",[i("td",[t._v("size")]),i("td",[t._v("尺寸，可选值为 "),i("code",[t._v("small")]),t._v("、"),i("code",[t._v("medium")]),t._v("、"),i("code",[t._v("large")]),t._v(" 或者不设")]),i("td",[t._v("String")]),i("td",[t._v("medium")])]),i("tr",[i("td",[t._v("bordered")]),i("td",[t._v("是否显示边框")]),i("td",[t._v("Boolean")]),i("td",[t._v("false")])]),i("tr",[i("td",[t._v("split")]),i("td",[t._v("是否显示分割线")]),i("td",[t._v("Boolean")]),i("td",[t._v("true")])]),i("tr",[i("td",[t._v("grid")]),i("td",[t._v("列表栅格配置，详见示例〔栅格列表〕")]),i("td",[t._v("Object")]),i("td",[t._v("--")])]),i("tr",[i("td",[t._v("item")]),i("td",[t._v("栅格模式下的项目插槽，详见示例〔栅格列表〕")]),i("td",[t._v("Slot")]),i("td",[t._v("--")])]),i("tr",[i("td",[t._v("data")]),i("td",[t._v("列表数据，只在栅格模式下有效，详见示例〔栅格列表〕")]),i("td",[t._v("Array")]),i("td",[t._v("--")])])])]),i("h3",[t._v("ListGrid 属性")]),i("table",{staticClass:"example-api-props"},[i("thead",[i("tr",[i("th",{attrs:{width:"140"}},[t._v("属性")]),i("th",[t._v("说明")]),i("th",{attrs:{width:"200"}},[t._v("类型")]),i("th",{attrs:{width:"140"}},[t._v("默认值")])])]),i("tbody",[i("tr",[i("td",[t._v("gutter")]),i("td",[t._v("栅格间隔")]),i("td",[t._v("Number")]),i("td",[t._v("16")])]),i("tr",[i("td",[t._v("column")]),i("td",[t._v("列数，可选值为 "),i("code",[t._v("1")]),t._v("、"),i("code",[t._v("2")]),t._v("、"),i("code",[t._v("3")]),t._v("、"),i("code",[t._v("4")]),t._v("、"),i("code",[t._v("6")]),t._v("、"),i("code",[t._v("8")]),t._v("、"),i("code",[t._v("12")]),t._v("、"),i("code",[t._v("24")]),t._v(" 或者不设")]),i("td",[t._v("Number")]),i("td",[t._v("4")])])])]),i("h3",[t._v("ListItem 属性")]),i("table",{staticClass:"example-api-props"},[i("thead",[i("tr",[i("th",{attrs:{width:"140"}},[t._v("属性")]),i("th",[t._v("说明")]),i("th",{attrs:{width:"200"}},[t._v("类型")]),i("th",{attrs:{width:"140"}},[t._v("默认值")])])]),i("tbody",[i("tr",[i("td",[t._v("actions")]),i("td",[t._v("列表操作组，根据 "),i("code",[t._v("List")]),t._v(" 组件 "),i("code",[t._v("layout")]),t._v(" 属性值的不同，位置在卡片底部或者右侧")]),i("td",[t._v("Slot")]),i("td",[t._v("--")])]),i("tr",[i("td",[t._v("extra")]),i("td",[t._v("额外内容，通常用在 "),i("code",[t._v("layout")]),t._v(" 为 "),i("code",[t._v("vertical")]),t._v(" 的情况下展示右侧内容")]),i("td",[t._v("Slot")]),i("td",[t._v("--")])])])]),i("h3",[t._v("ListItemMeta 属性")]),i("table",{staticClass:"example-api-props"},[i("thead",[i("tr",[i("th",{attrs:{width:"140"}},[t._v("属性")]),i("th",[t._v("说明")]),i("th",{attrs:{width:"200"}},[t._v("类型")]),i("th",{attrs:{width:"140"}},[t._v("默认值")])])]),i("tbody",[i("tr",[i("td",[t._v("avatar")]),i("td",[t._v("列表元素的头像")]),i("td",[t._v("String | Slot")]),i("td",[t._v("--")])]),i("tr",[i("td",[t._v("title")]),i("td",[t._v("列表元素的标题")]),i("td",[t._v("String | Slot")]),i("td",[t._v("--")])]),i("tr",[i("td",[t._v("description")]),i("td",[t._v("列表元素的描述内容")]),i("td",[t._v("String | Slot")]),i("td",[t._v("--")])])])])])],1)}),[],!1,null,null,null);e.default=g.exports}}]);