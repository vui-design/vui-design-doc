webpackJsonp([34],{Zz6a:function(t,i){},lcr4:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e("q77b"),a=e("Fy5V"),n=e("RLuK"),r={components:{VuiDocExample:n.a},data:function(){return{code:'<template>\n  <div class="example-list-simple">\n    <vui-list header="Header" footer="Footer" size="small" bordered>\n      <vui-list-item>Racing car sprays burning fuel into crowd.</vui-list-item>\n      <vui-list-item>Japanese princess to wed commoner.</vui-list-item>\n      <vui-list-item>Australian walks 100km after outback crash.</vui-list-item>\n      <vui-list-item>Man charged over missing wedding girl.</vui-list-item>\n      <vui-list-item>Los Angeles battles huge wildfires.</vui-list-item>\n    </vui-list>\n    <vui-list header="Header" footer="Footer" bordered>\n      <vui-list-item>Racing car sprays burning fuel into crowd.</vui-list-item>\n      <vui-list-item>Japanese princess to wed commoner.</vui-list-item>\n      <vui-list-item>Australian walks 100km after outback crash.</vui-list-item>\n      <vui-list-item>Man charged over missing wedding girl.</vui-list-item>\n      <vui-list-item>Los Angeles battles huge wildfires.</vui-list-item>\n    </vui-list>\n    <vui-list header="Header" footer="Footer" size="large" bordered>\n      <vui-list-item>Racing car sprays burning fuel into crowd.</vui-list-item>\n      <vui-list-item>Japanese princess to wed commoner.</vui-list-item>\n      <vui-list-item>Australian walks 100km after outback crash.</vui-list-item>\n      <vui-list-item>Man charged over missing wedding girl.</vui-list-item>\n      <vui-list-item>Los Angeles battles huge wildfires.</vui-list-item>\n    </vui-list>\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-list-simple .vui-list + .vui-list { margin-top:20px; }\n</style>\n'}}},l={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("vui-doc-example",{attrs:{code:t.code,id:"example-list-simple"}},[e("template",{slot:"demo"},[e("div",{staticClass:"example-list-simple"},[e("vui-list",{attrs:{header:"Header",footer:"Footer",size:"small",bordered:""}},[e("vui-list-item",[t._v("Racing car sprays burning fuel into crowd.")]),e("vui-list-item",[t._v("Japanese princess to wed commoner.")]),e("vui-list-item",[t._v("Australian walks 100km after outback crash.")]),e("vui-list-item",[t._v("Man charged over missing wedding girl.")]),e("vui-list-item",[t._v("Los Angeles battles huge wildfires.")])],1),e("vui-list",{attrs:{header:"Header",footer:"Footer",bordered:""}},[e("vui-list-item",[t._v("Racing car sprays burning fuel into crowd.")]),e("vui-list-item",[t._v("Japanese princess to wed commoner.")]),e("vui-list-item",[t._v("Australian walks 100km after outback crash.")]),e("vui-list-item",[t._v("Man charged over missing wedding girl.")]),e("vui-list-item",[t._v("Los Angeles battles huge wildfires.")])],1),e("vui-list",{attrs:{header:"Header",footer:"Footer",size:"large",bordered:""}},[e("vui-list-item",[t._v("Racing car sprays burning fuel into crowd.")]),e("vui-list-item",[t._v("Japanese princess to wed commoner.")]),e("vui-list-item",[t._v("Australian walks 100km after outback crash.")]),e("vui-list-item",[t._v("Man charged over missing wedding girl.")]),e("vui-list-item",[t._v("Los Angeles battles huge wildfires.")])],1)],1)]),e("template",{slot:"title"},[t._v("简单列表")]),e("template",{slot:"description"},[e("p",[t._v("列表拥有大、中、小三种尺寸，默认为中型尺寸。")]),e("p",[t._v("可通过设置 "),e("code",[t._v("header")]),t._v(" 和 "),e("code",[t._v("footer")]),t._v("，来自定义列表头部和尾部。")])])],2)},staticRenderFns:[]};var o=e("VU/8")(r,l,!1,function(t){e("Zz6a")},null,null).exports,d={components:{VuiDocExample:n.a},data:function(){return{code:'<template>\n  <vui-list>\n    <vui-list-item v-for="(item, index) in data" v-bind:key="index">\n      <vui-list-item-meta v-bind:avatar="item.avatar" v-bind:description="item.description">\n        <a slot="title" href="javascript:;">{{item.title}}</a>\n      </vui-list-item-meta>\n    </vui-list-item>\n  </vui-list>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        data: [\n          {\n            avatar: "https://dummyimage.com/32x32/2d8cf0/fff",\n            title: "List Item Title 1",\n            description: "This is the description of the list item, which may be very long!"\n          },\n          {\n            avatar: "https://dummyimage.com/32x32/2d8cf0/fff",\n            title: "List Item Title 2",\n            description: "This is the description of the list item, which may be very long!"\n          },\n          {\n            avatar: "https://dummyimage.com/32x32/2d8cf0/fff",\n            title: "List Item Title 3",\n            description: "This is the description of the list item, which may be very long!"\n          },\n          {\n            avatar: "https://dummyimage.com/32x32/2d8cf0/fff",\n            title: "List Item Title 4",\n            description: "This is the description of the list item, which may be very long!"\n          }\n        ]\n      };\n    }\n  };\n<\/script>\n',data:[{avatar:"https://dummyimage.com/32x32/2d8cf0/fff",title:"List Item Title 1",description:"This is the description of the list item, which may be very long!"},{avatar:"https://dummyimage.com/32x32/2d8cf0/fff",title:"List Item Title 2",description:"This is the description of the list item, which may be very long!"},{avatar:"https://dummyimage.com/32x32/2d8cf0/fff",title:"List Item Title 3",description:"This is the description of the list item, which may be very long!"},{avatar:"https://dummyimage.com/32x32/2d8cf0/fff",title:"List Item Title 4",description:"This is the description of the list item, which may be very long!"}]}}},m={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("vui-doc-example",{attrs:{code:t.code,id:"example-list-basic-usage"}},[e("template",{slot:"demo"},[e("vui-list",t._l(t.data,function(i,s){return e("vui-list-item",{key:s},[e("vui-list-item-meta",{attrs:{avatar:i.avatar,description:i.description}},[e("a",{attrs:{slot:"title",href:"javascript:;"},slot:"title"},[t._v(t._s(i.title))])])],1)}),1)],1),e("template",{slot:"title"},[t._v("基础列表")]),e("template",{slot:"description"},[e("p",[t._v("基础列表。")])])],2)},staticRenderFns:[]},c=e("VU/8")(d,m,!1,null,null,null).exports,v={components:{VuiDocExample:n.a},data:function(){return{code:'<template>\n  <vui-list>\n    <vui-list-item v-for="(item, index) in data" v-bind:key="index">\n      <vui-list-item-meta v-bind:avatar="item.avatar" v-bind:description="item.description">\n        <a slot="title" href="javascript:;">{{item.title}}</a>\n      </vui-list-item-meta>\n      <template slot="actions">\n        <a href="javascript:;">Edit</a>\n        <a href="javascript:;">More</a>\n      </template>\n    </vui-list-item>\n    <template slot="more">\n      <vui-spin v-if="loading" />\n      <a href="javascript:;" v-else v-on:click="handleLoadMore">loading more</a>\n    </template>\n  </vui-list>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        loading: false,\n        data: [\n          {\n            avatar: "https://dummyimage.com/32x32/2d8cf0/fff",\n            title: "List Item Title",\n            description: "This is the description of the list item, which may be very long!"\n          },\n          {\n            avatar: "https://dummyimage.com/32x32/2d8cf0/fff",\n            title: "List Item Title",\n            description: "This is the description of the list item, which may be very long!"\n          },\n          {\n            avatar: "https://dummyimage.com/32x32/2d8cf0/fff",\n            title: "List Item Title",\n            description: "This is the description of the list item, which may be very long!"\n          },\n          {\n            avatar: "https://dummyimage.com/32x32/2d8cf0/fff",\n            title: "List Item Title",\n            description: "This is the description of the list item, which may be very long!"\n          }\n        ]\n      };\n    },\n    methods: {\n      handleLoadMore() {\n        this.loading = true;\n\n        setTimeout(() => {\n          const data = [\n            {\n              avatar: "https://dummyimage.com/32x32/2d8cf0/fff",\n              title: "List Item Title",\n              description: "This is the description of the list item, which may be very long!"\n            },\n            {\n              avatar: "https://dummyimage.com/32x32/2d8cf0/fff",\n              title: "List Item Title",\n              description: "This is the description of the list item, which may be very long!"\n            },\n            {\n              avatar: "https://dummyimage.com/32x32/2d8cf0/fff",\n              title: "List Item Title",\n              description: "This is the description of the list item, which may be very long!"\n            },\n            {\n              avatar: "https://dummyimage.com/32x32/2d8cf0/fff",\n              title: "List Item Title",\n              description: "This is the description of the list item, which may be very long!"\n            }\n          ];\n\n          this.loading = false;\n          this.data = this.data.concat(data);\n        }, 1000);\n      }\n    }\n  };\n<\/script>\n',loading:!1,data:[{avatar:"https://dummyimage.com/32x32/2d8cf0/fff",title:"List Item Title",description:"This is the description of the list item, which may be very long!"},{avatar:"https://dummyimage.com/32x32/2d8cf0/fff",title:"List Item Title",description:"This is the description of the list item, which may be very long!"},{avatar:"https://dummyimage.com/32x32/2d8cf0/fff",title:"List Item Title",description:"This is the description of the list item, which may be very long!"},{avatar:"https://dummyimage.com/32x32/2d8cf0/fff",title:"List Item Title",description:"This is the description of the list item, which may be very long!"}]}},methods:{handleLoadMore:function(){var t=this;this.loading=!0,setTimeout(function(){t.loading=!1,t.data=t.data.concat([{avatar:"https://dummyimage.com/32x32/2d8cf0/fff",title:"List Item Title",description:"This is the description of the list item, which may be very long!"},{avatar:"https://dummyimage.com/32x32/2d8cf0/fff",title:"List Item Title",description:"This is the description of the list item, which may be very long!"},{avatar:"https://dummyimage.com/32x32/2d8cf0/fff",title:"List Item Title",description:"This is the description of the list item, which may be very long!"},{avatar:"https://dummyimage.com/32x32/2d8cf0/fff",title:"List Item Title",description:"This is the description of the list item, which may be very long!"}])},1e3)}}},h={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("vui-doc-example",{attrs:{code:t.code,id:"example-list-load-more"}},[e("template",{slot:"demo"},[e("vui-list",[t._l(t.data,function(i,s){return e("vui-list-item",{key:s},[e("vui-list-item-meta",{attrs:{avatar:i.avatar,description:i.description}},[e("a",{attrs:{slot:"title",href:"javascript:;"},slot:"title"},[t._v(t._s(i.title))])]),e("template",{slot:"actions"},[e("a",{attrs:{href:"javascript:;"}},[t._v("Edit")]),e("a",{attrs:{href:"javascript:;"}},[t._v("More")])])],2)}),e("template",{slot:"more"},[t.loading?e("vui-spin"):e("a",{attrs:{href:"javascript:;"},on:{click:t.handleLoadMore}},[t._v("loading more")])],1)],2)],1),e("template",{slot:"title"},[t._v("加载更多")]),e("template",{slot:"description"},[e("p",[t._v("加载更多。")])])],2)},staticRenderFns:[]},p=e("VU/8")(v,h,!1,null,null,null).exports,u={components:{VuiDocExample:n.a},data:function(){return{code:'<template>\n  <vui-list layout="vertical" size="large">\n    <vui-list-item v-for="(item, index) in data" v-bind:key="index">\n      <vui-list-item-meta v-bind:avatar="item.avatar" v-bind:description="item.description" >\n        <a slot="title" href="javascript:;">{{item.title}}</a>\n      </vui-list-item-meta>\n      <article>{{item.content}}</article>\n      <template slot="actions">\n        <a href="javascript:;">\n          <vui-icon type="star" style="margin-right: 4px;" />{{item.collection}}\n        </a>\n        <a href="javascript:;">\n          <vui-icon type="thumb-up" style="margin-right: 4px;" />{{item.like}}\n        </a>\n        <a href="javascript:;">\n          <vui-icon type="chat-ellipsis" style="margin-right: 4px;" />{{item.comment}}\n        </a>\n      </template>\n      <img slot="extra" width="280" height="166" v-bind:src="item.image" />\n    </vui-list-item>\n  </vui-list>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        data: [\n          {\n            avatar: "https://dummyimage.com/32x32/2d8cf0/fff",\n            title: "List Item Title",\n            description: "This is the description of the list item, which may be very long!",\n            content: "The official guide assumes intermediate level knowledge of HTML, CSS, and JavaScript. If you are totally new to frontend development, it might not be the best idea to jump right into a framework as your first step - grasp the basics then come back!",\n            collection: 100,\n            like: 666,\n            comment: 888,\n            image: "https://dummyimage.com/280x166/ececec/595959"\n          },\n          {\n            avatar: "https://dummyimage.com/32x32/2d8cf0/fff",\n            title: "List Item Title",\n            description: "This is the description of the list item, which may be very long!",\n            content: "The official guide assumes intermediate level knowledge of HTML, CSS, and JavaScript. If you are totally new to frontend development, it might not be the best idea to jump right into a framework as your first step - grasp the basics then come back!",\n            collection: 100,\n            like: 666,\n            comment: 888,\n            image: "https://dummyimage.com/280x166/ececec/595959"\n          }\n        ]\n      };\n    }\n  };\n<\/script>\n',data:[{avatar:"https://dummyimage.com/32x32/2d8cf0/fff",title:"List Item Title",description:"This is the description of the list item, which may be very long!",content:"The official guide assumes intermediate level knowledge of HTML, CSS, and JavaScript. If you are totally new to frontend development, it might not be the best idea to jump right into a framework as your first step - grasp the basics then come back!",collection:100,like:666,comment:888,image:"https://dummyimage.com/280x166/ececec/595959"},{avatar:"https://dummyimage.com/32x32/2d8cf0/fff",title:"List Item Title",description:"This is the description of the list item, which may be very long!",content:"The official guide assumes intermediate level knowledge of HTML, CSS, and JavaScript. If you are totally new to frontend development, it might not be the best idea to jump right into a framework as your first step - grasp the basics then come back!",collection:100,like:666,comment:888,image:"https://dummyimage.com/280x166/ececec/595959"}]}}},f={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("vui-doc-example",{attrs:{code:t.code,id:"example-list-vertical"}},[e("template",{slot:"demo"},[e("vui-list",{attrs:{layout:"vertical",size:"large"}},t._l(t.data,function(i,s){return e("vui-list-item",{key:s},[e("vui-list-item-meta",{attrs:{avatar:i.avatar,description:i.description}},[e("a",{attrs:{slot:"title",href:"javascript:;"},slot:"title"},[t._v(t._s(i.title))])]),e("article",[t._v(t._s(i.content))]),e("template",{slot:"actions"},[e("a",{attrs:{href:"javascript:;"}},[e("vui-icon",{staticStyle:{"margin-right":"4px"},attrs:{type:"star"}}),t._v(t._s(i.collection)+"\n\t\t\t\t\t")],1),e("a",{attrs:{href:"javascript:;"}},[e("vui-icon",{staticStyle:{"margin-right":"4px"},attrs:{type:"thumb-up"}}),t._v(t._s(i.like)+"\n\t\t\t\t\t")],1),e("a",{attrs:{href:"javascript:;"}},[e("vui-icon",{staticStyle:{"margin-right":"4px"},attrs:{type:"chat-ellipsis"}}),t._v(t._s(i.comment)+"\n\t\t\t\t\t")],1)]),e("img",{attrs:{slot:"extra",width:"280",height:"166",src:i.image},slot:"extra"})],2)}),1)],1),e("template",{slot:"title"},[t._v("竖排列表样式")]),e("template",{slot:"description"},[e("p",[t._v("通过设置 "),e("code",[t._v("layout")]),t._v(" 属性为 "),e("code",[t._v("vertical")]),t._v(" 可实现竖排列表样式。")])])],2)},staticRenderFns:[]},_=e("VU/8")(u,f,!1,null,null,null).exports,g={components:{VuiDocExample:n.a},data:function(){return{code:'<template>\n  <vui-list v-bind:grid="grid" v-bind:data="data">\n    <vui-list-item slot="item" slot-scope="item, index">\n      <vui-card v-bind:title="item.title">{{item.description}}</vui-card>\n    </vui-list-item>\n  </vui-list>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        grid: {\n          gutter: 16,\n          columns: 4\n        },\n        data: [\n          {\n            title: "List Item Title",\n            description: "This is the description!"\n          },\n          {\n            title: "List Item Title",\n            description: "This is the description!"\n          },\n          {\n            title: "List Item Title",\n            description: "This is the description!"\n          },\n          {\n            title: "List Item Title",\n            description: "This is the description!"\n          },\n          {\n            title: "List Item Title",\n            description: "This is the description!"\n          },\n          {\n            title: "List Item Title",\n            description: "This is the description!"\n          },\n          {\n            title: "List Item Title",\n            description: "This is the description!"\n          },\n          {\n            title: "List Item Title",\n            description: "This is the description!"\n          }\n        ]\n      };\n    }\n  };\n<\/script>\n',grid:{gutter:16,columns:4},data:[{title:"List Item Title",description:"This is the description!"},{title:"List Item Title",description:"This is the description!"},{title:"List Item Title",description:"This is the description!"},{title:"List Item Title",description:"This is the description!"},{title:"List Item Title",description:"This is the description!"},{title:"List Item Title",description:"This is the description!"},{title:"List Item Title",description:"This is the description!"},{title:"List Item Title",description:"This is the description!"}]}}},y={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("vui-doc-example",{attrs:{code:t.code,id:"example-list-grid"}},[e("template",{slot:"demo"},[e("vui-list",{attrs:{grid:t.grid,data:t.data},scopedSlots:t._u([{key:"item",fn:function(i,s){return e("vui-list-item",{},[e("vui-card",{attrs:{title:i.title}},[t._v(t._s(i.description))])],1)}}])})],1),e("template",{slot:"title"},[t._v("栅格列表")]),e("template",{slot:"description"},[e("p",[t._v("可以通过设置 "),e("code",[t._v("List")]),t._v(" 的 "),e("code",[t._v("grid")]),t._v(" 属性来实现栅格列表，"),e("code",[t._v("columns")]),t._v(" 可设置期望显示的列数。")])])],2)},staticRenderFns:[]},b=e("VU/8")(g,y,!1,null,null,null).exports,T={mixins:[s.a],components:{VuiDocMarkdown:a.a,ExampleListSimple:o,ExampleListBasicUsage:c,ExampleListLoadMore:p,ExampleListVertical:_,ExampleListGrid:b}},x={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("vui-doc-markdown",[e("h1",[t._v("List 列表")]),e("p",[t._v("通用列表。")]),e("h2",[t._v("何时使用")]),e("p",[t._v("最基础的列表展示，可承载文字、列表、图片、段落，常用于后台数据展示页面。")]),e("h2",[t._v("代码演示")])]),e("ExampleListSimple"),e("ExampleListBasicUsage"),e("ExampleListLoadMore"),e("ExampleListVertical"),e("ExampleListGrid"),e("vui-doc-markdown",[e("h2",{attrs:{id:"example-api"}},[t._v("API")]),e("h3",[t._v("List 属性")]),e("table",{staticClass:"example-api-props"},[e("thead",[e("tr",[e("th",{attrs:{width:"100"}},[t._v("属性")]),e("th",[t._v("说明")]),e("th",{attrs:{width:"150"}},[t._v("类型")]),e("th",{attrs:{width:"100"}},[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("header")]),e("td",[t._v("列表底部内容")]),e("td",[t._v("String | Slot")]),e("td",[t._v("--")])]),e("tr",[e("td",[t._v("footer")]),e("td",[t._v("列表头部内容")]),e("td",[t._v("String | Slot")]),e("td",[t._v("--")])]),e("tr",[e("td",[t._v("layout")]),e("td",[t._v("设置 "),e("code",[t._v("ListItem")]),t._v(" 项目布局，可选值为 "),e("code",[t._v("horizontal")]),t._v("、"),e("code",[t._v("vertical")]),t._v(" 或者不设")]),e("td",[t._v("String")]),e("td",[e("code",[t._v("horizontal")])])]),e("tr",[e("td",[t._v("size")]),e("td",[t._v("尺寸，可选值为 "),e("code",[t._v("small")]),t._v("、"),e("code",[t._v("medium")]),t._v("、"),e("code",[t._v("large")]),t._v(" 或者不设")]),e("td",[t._v("String")]),e("td",[e("code",[t._v("medium")])])]),e("tr",[e("td",[t._v("bordered")]),e("td",[t._v("是否显示边框")]),e("td",[t._v("Boolean")]),e("td",[e("code",[t._v("false")])])]),e("tr",[e("td",[t._v("split")]),e("td",[t._v("是否显示分割线")]),e("td",[t._v("Boolean")]),e("td",[e("code",[t._v("true")])])]),e("tr",[e("td",[t._v("grid")]),e("td",[t._v("列表栅格配置，详见示例〔栅格列表〕")]),e("td",[t._v("Object")]),e("td",[t._v("--")])]),e("tr",[e("td",[t._v("item")]),e("td",[t._v("栅格模式下的项目插槽，详见示例〔栅格列表〕")]),e("td",[t._v("Slot")]),e("td",[t._v("--")])]),e("tr",[e("td",[t._v("data")]),e("td",[t._v("列表数据，只在栅格模式下有效，详见示例〔栅格列表〕")]),e("td",[t._v("Array")]),e("td",[t._v("--")])])])]),e("h3",[t._v("ListGrid 属性")]),e("table",{staticClass:"example-api-props"},[e("thead",[e("tr",[e("th",{attrs:{width:"100"}},[t._v("属性")]),e("th",[t._v("说明")]),e("th",{attrs:{width:"150"}},[t._v("类型")]),e("th",{attrs:{width:"100"}},[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("columns")]),e("td",[t._v("列数，可选值为 "),e("code",[t._v("1")]),t._v("、"),e("code",[t._v("2")]),t._v("、"),e("code",[t._v("3")]),t._v("、"),e("code",[t._v("4")]),t._v("、"),e("code",[t._v("6")]),t._v("、"),e("code",[t._v("8")]),t._v("、"),e("code",[t._v("12")]),t._v("、"),e("code",[t._v("24")]),t._v(" 或者不设")]),e("td",[t._v("Number")]),e("td",[e("code",[t._v("4")])])]),e("tr",[e("td",[t._v("gutter")]),e("td",[t._v("栅格间隔")]),e("td",[t._v("Number")]),e("td",[e("code",[t._v("16")])])])])]),e("h3",[t._v("ListItem 属性")]),e("table",{staticClass:"example-api-props"},[e("thead",[e("tr",[e("th",{attrs:{width:"100"}},[t._v("属性")]),e("th",[t._v("说明")]),e("th",{attrs:{width:"150"}},[t._v("类型")]),e("th",{attrs:{width:"100"}},[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("actions")]),e("td",[t._v("列表操作组，根据 "),e("code",[t._v("List")]),t._v(" 组件 "),e("code",[t._v("layout")]),t._v(" 属性值的不同，位置在卡片底部或者右侧")]),e("td",[t._v("Number")]),e("td",[e("code",[t._v("4")])])]),e("tr",[e("td",[t._v("extra")]),e("td",[t._v("额外内容，通常用在 "),e("code",[t._v("layout")]),t._v(" 为 "),e("code",[t._v("vertical")]),t._v(" 的情况下展示右侧内容")]),e("td",[t._v("Number")]),e("td",[e("code",[t._v("16")])])])])]),e("h3",[t._v("ListItemMeta 属性")]),e("table",{staticClass:"example-api-props"},[e("thead",[e("tr",[e("th",{attrs:{width:"100"}},[t._v("属性")]),e("th",[t._v("说明")]),e("th",{attrs:{width:"150"}},[t._v("类型")]),e("th",{attrs:{width:"100"}},[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("avatar")]),e("td",[t._v("列表元素的图标")]),e("td",[t._v("String | Slot")]),e("td",[t._v("--")])]),e("tr",[e("td",[t._v("title")]),e("td",[t._v("列表元素的标题")]),e("td",[t._v("String | Slot")]),e("td",[t._v("--")])]),e("tr",[e("td",[t._v("description")]),e("td",[t._v("列表元素的描述内容")]),e("td",[t._v("String | Slot")]),e("td",[t._v("--")])])])])])],1)},staticRenderFns:[]},w=e("VU/8")(T,x,!1,null,null,null);i.default=w.exports}});
//# sourceMappingURL=34.c9b67938af80e34c1cd4.js.map