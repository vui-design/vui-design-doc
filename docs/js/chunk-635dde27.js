(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-635dde27"],{"754f":function(t,e,a){"use strict";a.r(e);var n=a("d58b"),l=a("240e"),i=a("1a42"),s={components:{Example:i.a},data:function(){return{code:'<template>\n  <vui-tabs>\n    <vui-tab-panel key="tab1" title="Tab 1">\n      Content of Tab Panel 1\n    </vui-tab-panel>\n    <vui-tab-panel key="tab2" title="Tab 2">\n      Content of Tab Panel 2\n    </vui-tab-panel>\n    <vui-tab-panel key="tab3" title="Tab 3">\n      Content of Tab Panel 3\n    </vui-tab-panel>\n  </vui-tabs>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n'}}},o=a("2877"),b=Object(o.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("example",{attrs:{code:this.code,id:"example-tabs-basic-usage"}},[e("template",{slot:"demo"},[e("vui-tabs",[e("vui-tab-panel",{key:"tab1",attrs:{title:"Tab 1"}},[this._v(" Content of Tab Panel 1 ")]),e("vui-tab-panel",{key:"tab2",attrs:{title:"Tab 2"}},[this._v(" Content of Tab Panel 2 ")]),e("vui-tab-panel",{key:"tab3",attrs:{title:"Tab 3"}},[this._v(" Content of Tab Panel 3 ")])],1)],1),e("template",{slot:"title"},[this._v("基本用法")]),e("template",{slot:"description"},[e("p",[this._v("基本用法，默认激活第一项。")])])],2)}),[],!1,null,null,null).exports,d={components:{Example:i.a},data:function(){return{code:'<template>\n  <vui-tabs type="card">\n    <vui-tab-panel key="tab1" title="Tab 1">\n      Content of Tab Panel 1\n    </vui-tab-panel>\n    <vui-tab-panel key="tab2" title="Tab 2">\n      Content of Tab Panel 2\n    </vui-tab-panel>\n    <vui-tab-panel key="tab3" title="Tab 3">\n      Content of Tab Panel 3\n    </vui-tab-panel>\n  </vui-tabs>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n'}}},v=Object(o.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("example",{attrs:{code:this.code,id:"example-tabs-card"}},[e("template",{slot:"demo"},[e("vui-tabs",{attrs:{type:"card"}},[e("vui-tab-panel",{key:"tab1",attrs:{title:"Tab 1"}},[this._v(" Content of Tab Panel 1 ")]),e("vui-tab-panel",{key:"tab2",attrs:{title:"Tab 2"}},[this._v(" Content of Tab Panel 2 ")]),e("vui-tab-panel",{key:"tab3",attrs:{title:"Tab 3"}},[this._v(" Content of Tab Panel 3 ")])],1)],1),e("template",{slot:"title"},[this._v("卡片样式")]),e("template",{slot:"description"},[e("p",[this._v("卡片样式的页签，一般用于容器顶部。")])])],2)}),[],!1,null,null,null).exports,c={components:{Example:i.a},data:function(){return{code:'<template>\n  <vui-tabs>\n    <vui-tab-panel key="tab1" icon="apps" title="Tab 1">\n      Content of Tab Panel 1\n    </vui-tab-panel>\n    <vui-tab-panel key="tab2" icon="bar-chart" title="Tab 2">\n      Content of Tab Panel 2\n    </vui-tab-panel>\n    <vui-tab-panel key="tab3" icon="pie-chart" title="Tab 3">\n      Content of Tab Panel 3\n    </vui-tab-panel>\n  </vui-tabs>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n'}}},r=Object(o.a)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("example",{attrs:{code:t.code,id:"example-tabs-icon"}},[a("template",{slot:"demo"},[a("vui-tabs",[a("vui-tab-panel",{key:"tab1",attrs:{icon:"apps",title:"Tab 1"}},[t._v(" Content of Tab Panel 1 ")]),a("vui-tab-panel",{key:"tab2",attrs:{icon:"bar-chart",title:"Tab 2"}},[t._v(" Content of Tab Panel 2 ")]),a("vui-tab-panel",{key:"tab3",attrs:{icon:"pie-chart",title:"Tab 3"}},[t._v(" Content of Tab Panel 3 ")])],1)],1),a("template",{slot:"title"},[t._v("图标")]),a("template",{slot:"description"},[a("p",[t._v("设置 "),a("code",[t._v("icon")]),t._v(" 属性，可以为页签添加一个图标")])])],2)}),[],!1,null,null,null).exports,p={components:{Example:i.a},data:function(){return{code:'<template>\n  <vui-tabs>\n    <vui-tab-panel key="tab1" title="Tab 1">\n      Content of Tab Panel 1\n    </vui-tab-panel>\n    <vui-tab-panel key="tab2" title="Tab 2" disabled>\n      Content of Tab Panel 2\n    </vui-tab-panel>\n    <vui-tab-panel key="tab3" title="Tab 3">\n      Content of Tab Panel 3\n    </vui-tab-panel>\n  </vui-tabs>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n'}}},u=Object(o.a)(p,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("example",{attrs:{code:t.code,id:"example-tabs-disabled"}},[a("template",{slot:"demo"},[a("vui-tabs",[a("vui-tab-panel",{key:"tab1",attrs:{title:"Tab 1"}},[t._v(" Content of Tab Panel 1 ")]),a("vui-tab-panel",{key:"tab2",attrs:{title:"Tab 2",disabled:""}},[t._v(" Content of Tab Panel 2 ")]),a("vui-tab-panel",{key:"tab3",attrs:{title:"Tab 3"}},[t._v(" Content of Tab Panel 3 ")])],1)],1),a("template",{slot:"title"},[t._v("禁用")]),a("template",{slot:"description"},[a("p",[t._v("添加 "),a("code",[t._v("disabled")]),t._v(" 属性可以禁用页签。")])])],2)}),[],!1,null,null,null).exports,_={components:{Example:i.a},data:function(){return{code:'<template>\n  <vui-tabs>\n    <vui-tab-panel key="tab1">\n      <template slot="title">\n        <span style="margin-right: 8px; vertical-align: middle;">Tab 1</span>\n        <vui-badge status="error" />\n      </template>\n      Content of Tab Panel 1\n    </vui-tab-panel>\n    <vui-tab-panel key="tab2" title="Tab 2">Content of Tab Panel 2</vui-tab-panel>\n    <vui-tab-panel key="tab3" title="Tab 3">Content of Tab Panel 3</vui-tab-panel>\n  </vui-tabs>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n'}}},m=Object(o.a)(_,(function(){var t=this.$createElement,e=this._self._c||t;return e("example",{attrs:{code:this.code,id:"example-tabs-custom-title"}},[e("template",{slot:"demo"},[e("vui-tabs",[e("vui-tab-panel",{key:"tab1"},[e("template",{slot:"title"},[e("span",{staticStyle:{"margin-right":"8px","vertical-align":"middle"}},[this._v("Tab 1")]),e("vui-badge",{attrs:{status:"error"}})],1),this._v(" Content of Tab Panel 1 ")],2),e("vui-tab-panel",{key:"tab2",attrs:{title:"Tab 2"}},[this._v("Content of Tab Panel 2")]),e("vui-tab-panel",{key:"tab3",attrs:{title:"Tab 3"}},[this._v("Content of Tab Panel 3")])],1)],1),e("template",{slot:"title"},[this._v("自定义标题")]),e("template",{slot:"description"},[e("p",[this._v("可以通过具名插槽来实现自定义页签标题。")])])],2)}),[],!1,null,null,null).exports,h={components:{Example:i.a},data:function(){return{code:'<template>\n  <vui-tabs type="card">\n    <vui-link slot="extra" type="primary" block>Link</vui-link>\n    <vui-tab-panel key="tab1" title="Tab 1">\n      Content of Tab Panel 1\n    </vui-tab-panel>\n    <vui-tab-panel key="tab2" title="Tab 2">\n      Content of Tab Panel 2\n    </vui-tab-panel>\n    <vui-tab-panel key="tab3" title="Tab 3">\n      Content of Tab Panel 3\n    </vui-tab-panel>\n  </vui-tabs>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n'}}},x=Object(o.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("example",{attrs:{code:this.code,id:"example-tabs-extra"}},[e("template",{slot:"demo"},[e("vui-tabs",{attrs:{type:"card"}},[e("vui-link",{attrs:{slot:"extra",type:"primary",block:""},slot:"extra"},[this._v("Link")]),e("vui-tab-panel",{key:"tab1",attrs:{title:"Tab 1"}},[this._v(" Content of Tab Panel 1 ")]),e("vui-tab-panel",{key:"tab2",attrs:{title:"Tab 2"}},[this._v(" Content of Tab Panel 2 ")]),e("vui-tab-panel",{key:"tab3",attrs:{title:"Tab 3"}},[this._v(" Content of Tab Panel 3 ")])],1)],1),e("template",{slot:"title"},[this._v("附加内容")]),e("template",{slot:"description"},[e("p",[this._v("可以在页签右侧添加附加内容。")])])],2)}),[],!1,null,null,null).exports,y={components:{Example:i.a},data:function(){for(var t=[],e=1;e<4;e++){var a={key:"tab"+e,title:"Tab "+e,content:"Content of Tab panel "+e};t.push(a)}return{code:'<template>\n  <div class="example-tabs-size">\n    <vui-radio-group type="button" v-model="size">\n      <vui-radio value="small" label="Small" />\n      <vui-radio value="medium" label="Medium" />\n      <vui-radio value="large" label="Large" />\n    </vui-radio-group>\n    <vui-tabs v-bind:size="size">\n      <vui-tab-panel v-for="tab in tabs" v-bind:key="tab.key" v-bind:title="tab.title">\n        {{tab.content}}\n      </vui-tab-panel>\n    </vui-tabs>\n    <vui-tabs type="card" v-bind:size="size">\n      <vui-tab-panel v-for="tab in tabs" v-bind:key="tab.key" v-bind:title="tab.title">\n        {{tab.content}}\n      </vui-tab-panel>\n    </vui-tabs>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      let tabs = [];\n      let index = 1;\n\n      for (; index < 4; index++) {\n        let tab = {\n          key: "tab" + index,\n          title: "Tab " + index,\n          content: "Content of Tab panel " + index\n        };\n\n        tabs.push(tab);\n      }\n\n      return {\n        size: "medium",\n        tabs: tabs\n      };\n    }\n  };\n<\/script>\n\n<style>\n  .example-tabs-size {  }\n  .example-tabs-size .vui-tabs { margin-top:24px; }\n</style>\n',size:"medium",tabs:t}}},f=(a("f230"),Object(o.a)(y,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("example",{attrs:{code:t.code,id:"example-tabs-size"}},[a("template",{slot:"demo"},[a("div",{staticClass:"example-tabs-size"},[a("vui-radio-group",{attrs:{type:"button"},model:{value:t.size,callback:function(e){t.size=e},expression:"size"}},[a("vui-radio",{attrs:{value:"small",label:"Small"}}),a("vui-radio",{attrs:{value:"medium",label:"Medium"}}),a("vui-radio",{attrs:{value:"large",label:"Large"}})],1),a("vui-tabs",{attrs:{size:t.size}},t._l(t.tabs,(function(e){return a("vui-tab-panel",{key:e.key,attrs:{title:e.title}},[t._v(" "+t._s(e.content)+" ")])})),1),a("vui-tabs",{attrs:{type:"card",size:t.size}},t._l(t.tabs,(function(e){return a("vui-tab-panel",{key:e.key,attrs:{title:e.title}},[t._v(" "+t._s(e.content)+" ")])})),1)],1)]),a("template",{slot:"title"},[t._v("页签尺寸")]),a("template",{slot:"description"},[a("p",[t._v("大号用在页头区域，小号则建议用在弹出框等较狭窄的容器内。")])])],2)}),[],!1,null,null,null).exports),k={components:{Example:i.a},data:function(){for(var t=[],e=1;e<4;e++){var a={key:"tab"+e,title:"Tab "+e,content:"Content of Tab panel "+e};t.push(a)}return{code:'<template>\n  <vui-tabs type="card" v-model="activeKey" addable v-on:add="handleAdd">\n    <vui-tab-panel v-for="tab in tabs" v-bind:key="tab.key" v-bind:title="tab.title">\n      {{tab.content}}\n    </vui-tab-panel>\n  </vui-tabs>\n</template>\n\n<script>\n  export default {\n    data() {\n      let tabs = [];\n      let index = 1;\n\n      for (; index < 4; index++) {\n        let tab = {\n          key: "tab" + index,\n          title: "Tab " + index,\n          content: "Content of Tab panel " + index\n        };\n\n        tabs.push(tab);\n      }\n\n      return {\n        tabs: tabs,\n        activeKey: tabs[0].key,\n        index: index\n      };\n    },\n    methods: {\n      handleAdd() {\n        this.tabs.push({\n          key: "tab" + this.index,\n          title: "Tab " + this.index,\n          content: "Content of Tab panel " + this.index\n        });\n        this.activeKey = "tab" + this.index;\n        this.index++;\n      }\n    }\n  };\n<\/script>\n',tabs:t,activeKey:t[0].key,index:e}},methods:{handleAdd:function(){this.tabs.push({key:"tab"+this.index,title:"Tab "+this.index,content:"Content of Tab panel "+this.index}),this.activeKey="tab"+this.index,this.index++}}},T=Object(o.a)(k,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("example",{attrs:{code:t.code,id:"example-tabs-addable"}},[a("template",{slot:"demo"},[a("vui-tabs",{attrs:{type:"card",addable:""},on:{add:t.handleAdd},model:{value:t.activeKey,callback:function(e){t.activeKey=e},expression:"activeKey"}},t._l(t.tabs,(function(e){return a("vui-tab-panel",{key:e.key,attrs:{title:e.title}},[t._v(" "+t._s(e.content)+" ")])})),1)],1),a("template",{slot:"title"},[t._v("动态添加")]),a("template",{slot:"description"},[a("p",[t._v("结合 "),a("code",[t._v("addable")]),t._v(" 属性和 "),a("code",[t._v("add")]),t._v(" 事件实现动态添加页签。")])])],2)}),[],!1,null,null,null).exports,C=(a("4de4"),a("d3b7"),{components:{Example:i.a},data:function(){for(var t=[],e=1;e<4;e++){var a={key:"tab"+e,title:"Tab "+e,content:"Content of Tab panel "+e};1===e&&(a.closable=!1),t.push(a)}return{code:'<template>\n  <vui-tabs type="card" v-model="activeKey" closable v-on:close="handleClose">\n    <vui-tab-panel v-for="tab in tabs" v-bind:key="tab.key" v-bind:title="tab.title" v-bind:closable="tab.closable">\n      {{tab.content}}\n    </vui-tab-panel>\n  </vui-tabs>\n</template>\n\n<script>\n  export default {\n    data() {\n      let tabs = [];\n      let index = 1;\n\n      for (; index < 4; index++) {\n        let panel = {\n          key: "tab" + index,\n          title: "Tab " + index,\n          content: "Content of Tab panel " + index\n        };\n\n        if (index === 1) {\n          panel.closable = false;\n        }\n\n        tabs.push(panel);\n      }\n\n      return {\n        tabs: tabs,\n        activeKey: tabs[0].key\n      };\n    },\n    methods: {\n      handleClose(key) {\n        this.tabs = this.tabs.filter(tab => tab.key !== key);\n      }\n    }\n  };\n<\/script>\n',tabs:t,activeKey:t[0].key}},methods:{handleClose:function(t){this.tabs=this.tabs.filter((function(e){return e.key!==t}))}}}),P=Object(o.a)(C,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("example",{attrs:{code:t.code,id:"example-tabs-closable"}},[a("template",{slot:"demo"},[a("vui-tabs",{attrs:{type:"card",closable:""},on:{close:t.handleClose},model:{value:t.activeKey,callback:function(e){t.activeKey=e},expression:"activeKey"}},t._l(t.tabs,(function(e){return a("vui-tab-panel",{key:e.key,attrs:{title:e.title,closable:e.closable}},[t._v(" "+t._s(e.content)+" ")])})),1)],1),a("template",{slot:"title"},[t._v("动态关闭")]),a("template",{slot:"description"},[a("p",[t._v("结合 "),a("code",[t._v("closable")]),t._v(" 属性和 "),a("code",[t._v("close")]),t._v(" 事件实现动态关闭页签。")]),a("p",[t._v("可以显式设置某个 "),a("code",[t._v("TabPanel")]),t._v(" 的 "),a("code",[t._v("closable")]),t._v(" 属性为 "),a("code",[t._v("false")]),t._v("，禁止其关闭。")])])],2)}),[],!1,null,null,null).exports,g={components:{Example:i.a},data:function(){for(var t=[],e=1;e<4;e++){var a={key:"tab"+e,title:"Tab "+e,content:"Content of Tab panel "+e};1===e&&(a.closable=!1),t.push(a)}return{code:'<template>\n  <div class="example-tabs-editable">\n    <vui-tabs v-model="activeKey" addable closable v-on:add="handleAdd" v-on:close="handleClose">\n      <vui-tab-panel v-for="tab in tabs" v-bind:key="tab.key" v-bind:title="tab.title">\n        {{tab.content}}\n      </vui-tab-panel>\n    </vui-tabs>\n    <vui-tabs type="card" v-model="activeKey" addable closable v-on:add="handleAdd" v-on:close="handleClose">\n      <vui-tab-panel v-for="tab in tabs" v-bind:key="tab.key" v-bind:title="tab.title">\n        {{tab.content}}\n      </vui-tab-panel>\n    </vui-tabs>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      let tabs = [];\n      let index = 1;\n\n      for (; index < 4; index++) {\n        let tab = {\n          key: "tab" + index,\n          title: "Tab " + index,\n          content: "Content of Tab panel " + index\n        };\n\n        if (index === 1) {\n          tab.closable = false;\n        }\n\n        tabs.push(tab);\n      }\n\n      return {\n        tabs: tabs,\n        activeKey: tabs[0].key,\n        index: index\n      };\n    },\n    methods: {\n      handleAdd() {\n        this.tabs.push({\n          key: "tab" + this.index,\n          title: "Tab " + this.index,\n          content: "Content of Tab panel " + this.index\n        });\n        this.activeKey = "tab" + this.index;\n        this.index++;\n      },\n      handleClose(key) {\n        this.tabs = this.tabs.filter(tab => tab.key !== key);\n      }\n    }\n  };\n<\/script>\n\n<style>\n  .example-tabs-editable .vui-tabs + .vui-tabs { margin-top:24px; }\n</style>\n',tabs:t,activeKey:t[0].key,index:e}},methods:{handleAdd:function(){this.tabs.push({key:"tab"+this.index,title:"Tab "+this.index,content:"Content of Tab panel "+this.index}),this.activeKey="tab"+this.index,this.index++},handleClose:function(t){this.tabs=this.tabs.filter((function(e){return e.key!==t}))}}},E=(a("b0ca"),Object(o.a)(g,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("example",{attrs:{code:t.code,id:"example-tabs-editable"}},[a("template",{slot:"demo"},[a("div",{staticClass:"example-tabs-editable"},[a("vui-tabs",{attrs:{addable:"",closable:""},on:{add:t.handleAdd,close:t.handleClose},model:{value:t.activeKey,callback:function(e){t.activeKey=e},expression:"activeKey"}},t._l(t.tabs,(function(e){return a("vui-tab-panel",{key:e.key,attrs:{title:e.title}},[t._v(" "+t._s(e.content)+" ")])})),1),a("vui-tabs",{attrs:{type:"card",addable:"",closable:""},on:{add:t.handleAdd,close:t.handleClose},model:{value:t.activeKey,callback:function(e){t.activeKey=e},expression:"activeKey"}},t._l(t.tabs,(function(e){return a("vui-tab-panel",{key:e.key,attrs:{title:e.title}},[t._v(" "+t._s(e.content)+" ")])})),1)],1)]),a("template",{slot:"title"},[t._v("动态增减")]),a("template",{slot:"description"},[a("p",[t._v("同时具有添加和关闭功能。")])])],2)}),[],!1,null,null,null).exports),K={components:{Example:i.a},data:function(){for(var t=[],e=1;e<4;e++){var a={key:"tab"+e,title:"Tab "+e,content:"Content of Tab panel "+e};1===e&&(a.closable=!1),t.push(a)}return{code:'<template>\n  <vui-tabs type="card" v-model="activeKey" closable v-on:close="handleClose">\n    <vui-link slot="extra" type="primary" icon="plus" block v-on:click="handleAdd">Add</vui-link>\n    <vui-tab-panel v-for="tab in tabs" v-bind:key="tab.key" v-bind:title="tab.title" v-bind:closable="tab.closable">\n      {{tab.content}}\n    </vui-tab-panel>\n  </vui-tabs>\n</template>\n\n<script>\n  export default {\n    data() {\n      let tabs = [];\n      let index = 1;\n\n      for (; index < 4; index++) {\n        let tab = {\n          key: "tab" + index,\n          title: "Tab " + index,\n          content: "Content of Tab panel " + index\n        };\n\n        if (index === 1) {\n          tab.closable = false;\n        }\n\n        tabs.push(tab);\n      }\n\n      return {\n        tabs: tabs,\n        activeKey: tabs[0].key,\n        index: index\n      };\n    },\n    methods: {\n      handleAdd() {\n        this.tabs.push({\n          key: "tab" + this.index,\n          title: "Tab " + this.index,\n          content: "Content of Tab panel " + this.index\n        });\n        this.activeKey = "tab" + this.index;\n        this.index++;\n      },\n      handleClose(key) {\n        this.tabs = this.tabs.filter(tab => tab.key !== key);\n      }\n    }\n  };\n<\/script>\n',tabs:t,activeKey:t[0].key,index:e}},methods:{handleAdd:function(){this.tabs.push({key:"tab"+this.index,title:"Tab "+this.index,content:"Content of Tab panel "+this.index}),this.activeKey="tab"+this.index,this.index++},handleClose:function(t){this.tabs=this.tabs.filter((function(e){return e.key!==t}))}}},z=Object(o.a)(K,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("example",{attrs:{code:t.code,id:"example-tabs-custom-add-trigger"}},[a("template",{slot:"demo"},[a("vui-tabs",{attrs:{type:"card",closable:""},on:{close:t.handleClose},model:{value:t.activeKey,callback:function(e){t.activeKey=e},expression:"activeKey"}},[a("vui-link",{attrs:{slot:"extra",type:"primary",icon:"plus",block:""},on:{click:t.handleAdd},slot:"extra"},[t._v("Add")]),t._l(t.tabs,(function(e){return a("vui-tab-panel",{key:e.key,attrs:{title:e.title,closable:e.closable}},[t._v(" "+t._s(e.content)+" ")])}))],2)],1),a("template",{slot:"title"},[t._v("自定义添加触发器")]),a("template",{slot:"description"},[a("p",[t._v("通过给自定义触发器绑定事件实现动态添加页签。")])])],2)}),[],!1,null,null,null).exports,A={mixins:[n.a],components:{Document:l.a,ExampleBasicUsage:b,ExampleCard:v,ExampleIcon:r,ExampleDisabled:u,ExampleCustomTitle:m,ExampleExtra:x,ExampleSize:f,ExampleAddable:T,ExampleClosable:P,ExampleEditable:E,ExampleCustomAddTrigger:z}},S=Object(o.a)(A,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("document",[a("h1",[t._v("Tabs 标签页")]),a("p",[t._v("选项卡切换组件。")]),a("h2",[t._v("何时使用")]),a("p",[t._v("常用于平级区域大块内容的的收纳和展现，保持界面整洁。")]),a("p",[t._v("Vui Design 依次提供了三级选项卡，分别用于不同的场景。")]),a("ul",[a("li",[t._v("卡片式的页签，提供可关闭的样式，常用于容器顶部；")]),a("li",[t._v("标准线条式页签，用于容器内部的主功能切换，这是最常用的 Tabs；")]),a("li",[a("router-link",{attrs:{to:"radio"}},[t._v("RadioButton")]),t._v(" 可作为更次级的页签来使用。")],1)]),a("h2",[t._v("代码演示")])]),a("vui-row",{attrs:{gutter:16}},[a("vui-col",{attrs:{span:12}},[a("example-basic-usage"),a("example-card"),a("example-icon"),a("example-disabled"),a("example-customTitle"),a("example-extra")],1),a("vui-col",{attrs:{span:12}},[a("example-size"),a("example-addable"),a("example-closable"),a("example-editable"),a("example-custom-add-trigger")],1)],1),a("document",[a("h2",{attrs:{id:"example-api"}},[t._v("API")]),a("h3",[t._v("Tabs 属性")]),a("table",{staticClass:"example-api-props"},[a("thead",[a("tr",[a("th",{attrs:{width:"140"}},[t._v("属性")]),a("th",[t._v("说明")]),a("th",{attrs:{width:"240"}},[t._v("类型")]),a("th",{attrs:{width:"140"}},[t._v("默认值")])])]),a("tbody",[a("tr",[a("td",[t._v("type")]),a("td",[t._v("页签基本样式，可选值为 "),a("code",[t._v("line")]),t._v("、"),a("code",[t._v("card")]),t._v(" 或者不设")]),a("td",[t._v("String")]),a("td",[t._v("line")])]),a("tr",[a("td",[t._v("size")]),a("td",[t._v("页签尺寸，可选值为 "),a("code",[t._v("small")]),t._v("、"),a("code",[t._v("medium")]),t._v("、"),a("code",[t._v("large")]),t._v(" 或者不设")]),a("td",[t._v("String")]),a("td",[t._v("medium")])]),a("tr",[a("td",[t._v("activeKey")]),a("td",[t._v("当前激活面板的 "),a("code",[t._v("key")]),t._v(" 值属性，可以使用 "),a("code",[t._v("v-model")]),t._v(" 双向绑定数据")]),a("td",[t._v("String")]),a("td",[t._v("--")])]),a("tr",[a("td",[t._v("extra")]),a("td",[t._v("页签右侧附加内容")]),a("td",[t._v("String | Number | Slot")]),a("td",[t._v("--")])]),a("tr",[a("td",[t._v("addable")]),a("td",[t._v("是否可以添加页签")]),a("td",[t._v("Boolean")]),a("td",[t._v("false")])]),a("tr",[a("td",[t._v("closable")]),a("td",[t._v("是否允许关闭页签")]),a("td",[t._v("Boolean")]),a("td",[t._v("false")])]),a("tr",[a("td",[t._v("destroyOnHide")]),a("td",[t._v("隐藏时销毁 TabPanel 的子元素")]),a("td",[t._v("Boolean")]),a("td",[t._v("false")])]),a("tr",[a("td",[t._v("headerStyle")]),a("td",[t._v("用于设置页签页头部的样式")]),a("td",[t._v("String | Object")]),a("td",[t._v("--")])]),a("tr",[a("td",[t._v("bodyStyle")]),a("td",[t._v("用于设置页签页内容部分的样式")]),a("td",[t._v("String | Object")]),a("td",[t._v("--")])])])]),a("h3",[t._v("Tabs 事件")]),a("table",{staticClass:"example-api-events"},[a("thead",[a("tr",[a("th",{attrs:{width:"140"}},[t._v("事件名")]),a("th",[t._v("说明")]),a("th",{attrs:{width:"240"}},[t._v("类型")]),a("th",{attrs:{width:"140"}},[t._v("回调参数")])])]),a("tbody",[a("tr",[a("td",[t._v("input")]),a("td",[t._v("切换页签时触发的事件回调函数，可以使用 "),a("code",[t._v("v-model")]),t._v(" 双向绑定数据")]),a("td",[t._v("Function")]),a("td",[t._v("key")])]),a("tr",[a("td",[t._v("change")]),a("td",[t._v("切换页签时触发的事件回调函数")]),a("td",[t._v("Function")]),a("td",[t._v("key")])]),a("tr",[a("td",[t._v("add")]),a("td",[t._v("添加页签时触发的事件回调函数，仅在 "),a("code",[t._v("addable")]),t._v(" 属性为 "),a("code",[t._v("true")]),t._v(" 时有效")]),a("td",[t._v("Function")]),a("td",[t._v("--")])]),a("tr",[a("td",[t._v("close")]),a("td",[t._v("关闭页签时触发的事件回调函数，仅在 "),a("code",[t._v("closable")]),t._v(" 属性为 "),a("code",[t._v("true")]),t._v(" 时有效")]),a("td",[t._v("Function")]),a("td",[t._v("key")])])])]),a("h3",[t._v("TabPanel 属性")]),a("table",{staticClass:"example-api-props"},[a("thead",[a("tr",[a("th",{attrs:{width:"140"}},[t._v("属性")]),a("th",[t._v("说明")]),a("th",{attrs:{width:"240"}},[t._v("类型")]),a("th",{attrs:{width:"140"}},[t._v("默认值")])])]),a("tbody",[a("tr",[a("td",[t._v("key")]),a("td",[t._v("当前页签唯一标识，对应父级 "),a("code",[t._v("Tabs")]),t._v(" 组件的 "),a("code",[t._v("activeKey")]),t._v(" 值")]),a("td",[t._v("String | Number")]),a("td",[t._v("--")])]),a("tr",[a("td",[t._v("icon")]),a("td",[t._v("当前页签图标类型/图标")]),a("td",[t._v("String | Slot")]),a("td",[t._v("--")])]),a("tr",[a("td",[t._v("title")]),a("td",[t._v("当前页签标题")]),a("td",[t._v("String | Number | Slot")]),a("td",[t._v("--")])]),a("tr",[a("td",[t._v("closable")]),a("td",[t._v("是否允许关闭当前页签，默认继承 "),a("code",[t._v("Tabs")]),t._v(" 的 "),a("code",[t._v("closable")]),t._v(" 属性")]),a("td",[t._v("Boolean")]),a("td",[t._v("--")])]),a("tr",[a("td",[t._v("disabled")]),a("td",[t._v("是否禁用当前页签")]),a("td",[t._v("Boolean")]),a("td",[t._v("false")])])])])])],1)}),[],!1,null,null,null);e.default=S.exports},a872:function(t,e,a){},b0ca:function(t,e,a){"use strict";a("c650")},c650:function(t,e,a){},f230:function(t,e,a){"use strict";a("a872")}}]);