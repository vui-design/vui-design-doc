(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1d7a8c96"],{"0de8":function(t,e,n){"use strict";n.r(e);var o=n("d58b"),a=n("240e"),i=n("1a42"),s={components:{Example:i.a},data:function(){return{code:'<template>\n  <div class="example-affix-basic-usage">\n    <section>\n      <vui-affix v-bind:offsetTop="top">\n        <vui-button type="primary" v-on:click="addTop">Affix top</vui-button>\n      </vui-affix>\n    </section>\n    <section>\n      <vui-affix v-bind:offsetBottom="bottom">\n        <vui-button type="primary" v-on:click="addBottom">Affix bottom</vui-button>\n      </vui-affix>\n    </section>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        top: 10,\n        bottom: 10\n      };\n    },\n    methods: {\n      addTop() {\n        this.top += 10;\n      },\n      addBottom() {\n        this.bottom += 10;\n      }\n    }\n  };\n<\/script>\n\n<style>\n  .example-affix-basic-usage section + section { margin-top:16px; }\n</style>\n',top:10,bottom:10}},methods:{addTop:function(){this.top+=10},addBottom:function(){this.bottom+=10}}},c=(n("bfb5"),n("2877")),l=Object(c.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("example",{attrs:{code:t.code,id:"example-affix-basic-usage"}},[n("template",{slot:"demo"},[n("div",{staticClass:"example-affix-basic-usage"},[n("section",[n("vui-affix",{attrs:{offsetTop:t.top}},[n("vui-button",{attrs:{type:"primary"},on:{click:t.addTop}},[t._v("Affix top")])],1)],1),n("section",[n("vui-affix",{attrs:{offsetBottom:t.bottom}},[n("vui-button",{attrs:{type:"primary"},on:{click:t.addBottom}},[t._v("Affix bottom")])],1)],1)])]),n("template",{slot:"title"},[t._v("基本用法")]),n("template",{slot:"description"},[n("p",[t._v("最简单的用法。")])])],2)}),[],!1,null,null,null).exports,r={components:{Example:i.a},data:function(){return{code:'<template>\n  <vui-affix v-bind:offsetTop="top" v-on:change="handleChange">\n    <vui-button>100px to affix top</vui-button>\n  </vui-affix>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        top: 100\n      };\n    },\n    methods: {\n      handleChange(affixed) {\n        console.log(affixed);\n      }\n    }\n  };\n<\/script>\n',top:100}},methods:{handleChange:function(t){console.log(t)}}},f=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("example",{attrs:{code:t.code,id:"example-affix-change"}},[n("template",{slot:"demo"},[n("vui-affix",{attrs:{offsetTop:t.top},on:{change:t.handleChange}},[n("vui-button",[t._v("100px to affix top")])],1)],1),n("template",{slot:"title"},[t._v("监听状态变化")]),n("template",{slot:"description"},[n("p",[t._v("通过 "),n("code",[t._v("change")]),t._v(" 事件监听固定状态的变化。")])])],2)}),[],!1,null,null,null).exports,p={components:{Example:i.a},data:function(){return{code:'<template>\n    <div ref="container" class="example-affix-container">\n      <div class="example-affix-container-content">\n        <vui-affix v-bind:getScrollContainer="getScrollContainer">\n          <vui-button type="primary">Fixed at the top of container</vui-button>\n        </vui-affix>\n      </div>\n    </div>\n</template>\n\n<script>\n  export default {\n    methods: {\n      getScrollContainer() {\n        return this.$refs.container;\n      }\n    }\n  };\n<\/script>\n\n<style>\n  .example-affix-container { height:200px; overflow-y:auto; }\n  .example-affix-container-content { height:400px; padding:40px 0; }\n</style>\n'}},methods:{getScrollContainer:function(){return this.$refs.container}}},d=(n("6af6"),Object(c.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("example",{attrs:{code:t.code,id:"example-affix-container"}},[n("template",{slot:"demo"},[n("div",{ref:"container",staticClass:"example-affix-container"},[n("div",{staticClass:"example-affix-container-content"},[n("vui-affix",{attrs:{getScrollContainer:t.getScrollContainer}},[n("vui-button",{attrs:{type:"primary"}},[t._v("Fixed at the top of container")])],1)],1)])]),n("template",{slot:"title"},[t._v("滚动容器")]),n("template",{slot:"description"},[n("p",[t._v("使用 "),n("code",[t._v("getScrollContainer")]),t._v(" 设置 "),n("code",[t._v("Affix")]),t._v(" 需要监听其滚动事件的元素，默认为 "),n("code",[t._v("window")]),t._v(" 对象。")])])],2)}),[],!1,null,null,null).exports),v={mixins:[o.a],components:{Document:a.a,ExampleBasicUsage:l,ExampleChange:f,ExampleContainer:d}},u=Object(c.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("document",[n("h1",[t._v("Affix 固钉")]),n("p",[t._v("将页面元素钉在可视范围。")]),n("h2",[t._v("何时使用")]),n("p",[t._v("当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。")]),n("p",[t._v("页面可视范围过小时，慎用此功能以免遮挡页面内容。")]),n("h2",[t._v("代码演示")])]),n("vui-row",{attrs:{gutter:16}},[n("vui-col",{attrs:{span:12}},[n("example-basic-usage"),n("example-change")],1),n("vui-col",{attrs:{span:12}},[n("example-container")],1)],1),n("document",[n("h2",{attrs:{id:"example-api"}},[t._v("API")]),n("h3",[t._v("Affix 属性")]),n("table",{staticClass:"example-api-props"},[n("thead",[n("tr",[n("th",{attrs:{width:"180"}},[t._v("属性")]),n("th",[t._v("说明")]),n("th",{attrs:{width:"140"}},[t._v("类型")]),n("th",{attrs:{width:"160"}},[t._v("默认值")])])]),n("tbody",[n("tr",[n("td",[t._v("getScrollContainer")]),n("td",[t._v("设置 "),n("code",[t._v("Affix")]),t._v(" 需要监听其滚动事件的元素，值为一个返回对应 "),n("code",[t._v("DOM")]),t._v(" 元素的函数")]),n("td",[t._v("Function")]),n("td",[n("code",[t._v("() => window")])])]),n("tr",[n("td",[t._v("offsetTop")]),n("td",[t._v("距离窗口顶部达到指定偏移量后触发")]),n("td",[t._v("Number")]),n("td",[t._v("--")])]),n("tr",[n("td",[t._v("offsetBottom")]),n("td",[t._v("距离窗口底部达到指定偏移量后触发")]),n("td",[t._v("Number")]),n("td",[t._v("--")])])])]),n("h3",[t._v("Affix 事件")]),n("table",{staticClass:"example-api-props"},[n("thead",[n("tr",[n("th",{attrs:{width:"180"}},[t._v("事件名")]),n("th",[t._v("说明")]),n("th",{attrs:{width:"140"}},[t._v("类型")]),n("th",{attrs:{width:"160"}},[t._v("回调参数")])])]),n("tbody",[n("tr",[n("td",[t._v("change")]),n("td",[t._v("固定状态改变时触发的事件回调函数")]),n("td",[t._v("Function")]),n("td",[n("code",[t._v("affixed")])])])])])])],1)}),[],!1,null,null,null);e.default=u.exports},"3f51":function(t,e,n){},"66ae":function(t,e,n){},"6af6":function(t,e,n){"use strict";n("66ae")},bfb5:function(t,e,n){"use strict";n("3f51")}}]);