(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-a3538a3a"],{"754f":function(e,t,n){"use strict";n.r(t);var a=n("d58b"),l=n("240e"),i=n("1a42"),s={components:{Example:i.a},data:function(){return{code:'<template>\n  <vui-tabs>\n    <vui-tab-panel key="tab1" title="Tab 1">\n      Content of Tab Panel 1\n    </vui-tab-panel>\n    <vui-tab-panel key="tab2" title="Tab 2">\n      Content of Tab Panel 2\n    </vui-tab-panel>\n    <vui-tab-panel key="tab3" title="Tab 3">\n      Content of Tab Panel 3\n    </vui-tab-panel>\n  </vui-tabs>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n'}}},o=n("2877"),d=Object(o.a)(s,(function(){var e=this.$createElement,t=this._self._c||e;return t("example",{attrs:{code:this.code,id:"example-tabs-basic-usage"}},[t("template",{slot:"demo"},[t("vui-tabs",{attrs:{destroyOnHide:""}},[t("vui-tab-panel",{key:"tab1",attrs:{title:"Tab 1"}},[this._v(" Content of Tab Panel 1 ")]),t("vui-tab-panel",{key:"tab2",attrs:{title:"Tab 2"}},[this._v(" Content of Tab Panel 2 ")]),t("vui-tab-panel",{key:"tab3",attrs:{title:"Tab 3"}},[this._v(" Content of Tab Panel 3 ")])],1)],1),t("template",{slot:"title"},[this._v("基本用法")]),t("template",{slot:"description"},[t("p",[this._v("基本用法，默认激活第一项。")])])],2)}),[],!1,null,null,null).exports,p={components:{Example:i.a},data:function(){return{code:'<template>\n  <vui-tabs type="card">\n    <vui-tab-panel key="tab1" title="Tab 1">\n      Content of Tab Panel 1\n    </vui-tab-panel>\n    <vui-tab-panel key="tab2" title="Tab 2">\n      Content of Tab Panel 2\n    </vui-tab-panel>\n    <vui-tab-panel key="tab3" title="Tab 3">\n      Content of Tab Panel 3\n    </vui-tab-panel>\n  </vui-tabs>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n'}}},v=Object(o.a)(p,(function(){var e=this.$createElement,t=this._self._c||e;return t("example",{attrs:{code:this.code,id:"example-tabs-card"}},[t("template",{slot:"demo"},[t("vui-tabs",{attrs:{type:"card"}},[t("vui-tab-panel",{key:"tab1",attrs:{title:"Tab 1"}},[this._v(" Content of Tab Panel 1 ")]),t("vui-tab-panel",{key:"tab2",attrs:{title:"Tab 2"}},[this._v(" Content of Tab Panel 2 ")]),t("vui-tab-panel",{key:"tab3",attrs:{title:"Tab 3"}},[this._v(" Content of Tab Panel 3 ")])],1)],1),t("template",{slot:"title"},[this._v("卡片样式")]),t("template",{slot:"description"},[t("p",[this._v("卡片样式的页签，一般用于容器顶部。")])])],2)}),[],!1,null,null,null).exports,b={components:{Example:i.a},data:function(){return{code:'<template>\n  <vui-tabs>\n    <vui-tab-panel key="tab1" icon="apps" title="Tab 1">\n      Content of Tab Panel 1\n    </vui-tab-panel>\n    <vui-tab-panel key="tab2" icon="bar-chart" title="Tab 2">\n      Content of Tab Panel 2\n    </vui-tab-panel>\n    <vui-tab-panel key="tab3" icon="pie-chart" title="Tab 3">\n      Content of Tab Panel 3\n    </vui-tab-panel>\n  </vui-tabs>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n'}}},c=Object(o.a)(b,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("example",{attrs:{code:e.code,id:"example-tabs-icon"}},[n("template",{slot:"demo"},[n("vui-tabs",[n("vui-tab-panel",{key:"tab1",attrs:{icon:"apps",title:"Tab 1"}},[e._v(" Content of Tab Panel 1 ")]),n("vui-tab-panel",{key:"tab2",attrs:{icon:"bar-chart",title:"Tab 2"}},[e._v(" Content of Tab Panel 2 ")]),n("vui-tab-panel",{key:"tab3",attrs:{icon:"pie-chart",title:"Tab 3"}},[e._v(" Content of Tab Panel 3 ")])],1)],1),n("template",{slot:"title"},[e._v("图标")]),n("template",{slot:"description"},[n("p",[e._v("通过设置 "),n("code",[e._v("icon")]),e._v(" 属性，可以为页签添加一个图标")])])],2)}),[],!1,null,null,null).exports,r={components:{Example:i.a},data:function(){return{code:'<template>\n  <vui-tabs>\n    <vui-tab-panel key="tab1" title="Tab 1">\n      Content of Tab Panel 1\n    </vui-tab-panel>\n    <vui-tab-panel key="tab2" title="Tab 2" disabled>\n      Content of Tab Panel 2\n    </vui-tab-panel>\n    <vui-tab-panel key="tab3" title="Tab 3">\n      Content of Tab Panel 3\n    </vui-tab-panel>\n  </vui-tabs>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n'}}},u=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("example",{attrs:{code:e.code,id:"example-tabs-disabled"}},[n("template",{slot:"demo"},[n("vui-tabs",[n("vui-tab-panel",{key:"tab1",attrs:{title:"Tab 1"}},[e._v(" Content of Tab Panel 1 ")]),n("vui-tab-panel",{key:"tab2",attrs:{title:"Tab 2",disabled:""}},[e._v(" Content of Tab Panel 2 ")]),n("vui-tab-panel",{key:"tab3",attrs:{title:"Tab 3"}},[e._v(" Content of Tab Panel 3 ")])],1)],1),n("template",{slot:"title"},[e._v("禁用")]),n("template",{slot:"description"},[n("p",[e._v("添加 "),n("code",[e._v("disabled")]),e._v(" 属性可以禁用页签。")])])],2)}),[],!1,null,null,null).exports,_={components:{Example:i.a},data:function(){return{code:'<template>\n  <vui-tabs>\n    <vui-tab-panel key="tab1">\n      <template slot="title">\n        <span style="margin-right: 8px; vertical-align: middle;">Tab 1</span>\n        <vui-badge status="error" />\n      </template>\n      Content of Tab Panel 1\n    </vui-tab-panel>\n    <vui-tab-panel key="tab2" title="Tab 2">Content of Tab Panel 2</vui-tab-panel>\n    <vui-tab-panel key="tab3" title="Tab 3">Content of Tab Panel 3</vui-tab-panel>\n  </vui-tabs>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n'}}},m=Object(o.a)(_,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("example",{attrs:{code:e.code,id:"example-tabs-custom-title"}},[n("template",{slot:"demo"},[n("vui-tabs",[n("vui-tab-panel",{key:"tab1"},[n("template",{slot:"title"},[n("span",{staticStyle:{"margin-right":"8px","vertical-align":"middle"}},[e._v("Tab 1")]),n("vui-badge",{attrs:{status:"error"}})],1),e._v(" Content of Tab Panel 1 ")],2),n("vui-tab-panel",{key:"tab2",attrs:{title:"Tab 2"}},[e._v("Content of Tab Panel 2")]),n("vui-tab-panel",{key:"tab3",attrs:{title:"Tab 3"}},[e._v("Content of Tab Panel 3")])],1)],1),n("template",{slot:"title"},[e._v("自定义标题")]),n("template",{slot:"description"},[n("p",[e._v("可以通过具名 "),n("code",[e._v("slot")]),e._v(" 来实现自定义页签标题。")])])],2)}),[],!1,null,null,null).exports,y={components:{Example:i.a},data:function(){return{code:'<template>\n  <vui-tabs type="card">\n    <vui-tab-panel key="tab1" title="Tab 1">\n      Content of Tab Panel 1\n    </vui-tab-panel>\n    <vui-tab-panel key="tab2" title="Tab 2">\n      Content of Tab Panel 2\n    </vui-tab-panel>\n    <vui-tab-panel key="tab3" title="Tab 3">\n      Content of Tab Panel 3\n    </vui-tab-panel>\n    <vui-button size="small" slot="extra">Extra</vui-button>\n  </vui-tabs>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n'}}},h=Object(o.a)(y,(function(){var e=this.$createElement,t=this._self._c||e;return t("example",{attrs:{code:this.code,id:"example-tabs-extra"}},[t("template",{slot:"demo"},[t("vui-tabs",{attrs:{type:"card"}},[t("vui-tab-panel",{key:"tab1",attrs:{title:"Tab 1"}},[this._v(" Content of Tab Panel 1 ")]),t("vui-tab-panel",{key:"tab2",attrs:{title:"Tab 2"}},[this._v(" Content of Tab Panel 2 ")]),t("vui-tab-panel",{key:"tab3",attrs:{title:"Tab 3"}},[this._v(" Content of Tab Panel 3 ")]),t("vui-button",{attrs:{slot:"extra",size:"small"},slot:"extra"},[this._v("Extra")])],1)],1),t("template",{slot:"title"},[this._v("附加内容")]),t("template",{slot:"description"},[t("p",[this._v("可以在页签右侧添加附加内容。")])])],2)}),[],!1,null,null,null).exports,x={components:{Example:i.a},data:function(){for(var e=[],t=1;t<4;t++){var n={key:"tab"+t,title:"Tab "+t,content:"Content of Tab panel "+t};e.push(n)}return{code:'<template>\n  <div class="example-tabs-size">\n    <vui-radio-group type="button" v-model="size">\n      <vui-radio label="Small" value="small" />\n      <vui-radio label="Medium" value="medium" />\n      <vui-radio label="Large" value="large" />\n    </vui-radio-group>\n    <vui-tabs v-bind:size="size">\n      <vui-tab-panel v-for="panel in panels" v-bind:key="panel.key" v-bind:title="panel.title">\n        {{panel.content}}\n      </vui-tab-panel>\n    </vui-tabs>\n    <vui-tabs type="card" v-bind:size="size">\n      <vui-tab-panel v-for="panel in panels" v-bind:key="panel.key" v-bind:title="panel.title">\n        {{panel.content}}\n      </vui-tab-panel>\n    </vui-tabs>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      let panels = [];\n      let index = 1;\n\n      for (; index < 4; index++) {\n        let panel = {\n          key: "tab" + index,\n          title: "Tab " + index,\n          content: "Content of Tab panel " + index\n        };\n\n        panels.push(panel);\n      }\n\n      return {\n        size: "medium",\n        panels: panels\n      };\n    }\n  };\n<\/script>\n\n<style>\n  .example-tabs-size {  }\n  .example-tabs-size .vui-tabs { margin-top:20px; }\n</style>\n',size:"medium",panels:e}}},f=(n("f230"),Object(o.a)(x,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("example",{attrs:{code:e.code,id:"example-tabs-size"}},[n("template",{slot:"demo"},[n("div",{staticClass:"example-tabs-size"},[n("vui-radio-group",{attrs:{type:"button"},model:{value:e.size,callback:function(t){e.size=t},expression:"size"}},[n("vui-radio",{attrs:{label:"Small",value:"small"}}),n("vui-radio",{attrs:{label:"Medium",value:"medium"}}),n("vui-radio",{attrs:{label:"Large",value:"large"}})],1),n("vui-tabs",{attrs:{size:e.size}},e._l(e.panels,(function(t){return n("vui-tab-panel",{key:t.key,attrs:{title:t.title}},[e._v(" "+e._s(t.content)+" ")])})),1),n("vui-tabs",{attrs:{type:"card",size:e.size}},e._l(e.panels,(function(t){return n("vui-tab-panel",{key:t.key,attrs:{title:t.title}},[e._v(" "+e._s(t.content)+" ")])})),1)],1)]),n("template",{slot:"title"},[e._v("页签尺寸")]),n("template",{slot:"description"},[n("p",[e._v("大号用在页头区域，小号则建议用在弹出框等较狭窄的容器内。")])])],2)}),[],!1,null,null,null).exports),T={components:{Example:i.a},data:function(){for(var e=[],t=1;t<4;t++){var n={key:"tab"+t,title:"Tab "+t,content:"Content of Tab panel "+t};e.push(n)}return{code:'<template>\n  <vui-tabs type="card" v-model="activeKey" addable v-on:add="handleAdd">\n    <vui-tab-panel v-for="panel in panels" v-bind:key="panel.key" v-bind:title="panel.title">\n      {{panel.content}}\n    </vui-tab-panel>\n  </vui-tabs>\n</template>\n\n<script>\n  export default {\n    data() {\n      let panels = [];\n      let index = 1;\n\n      for (; index < 4; index++) {\n        let panel = {\n          key: "tab" + index,\n          title: "Tab " + index,\n          content: "Content of Tab panel " + index\n        };\n\n        panels.push(panel);\n      }\n\n      return {\n        panels: panels,\n        activeKey: panels[0].key,\n        index: index\n      };\n    },\n    methods: {\n      handleAdd() {\n        this.panels.push({\n          key: "tab" + this.index,\n          title: "Tab " + this.index,\n          content: "Content of Tab panel " + this.index\n        });\n        this.activeKey = "tab" + this.index;\n        this.index++;\n      }\n    }\n  };\n<\/script>\n',panels:e,activeKey:e[0].key,index:t}},methods:{handleAdd:function(){this.panels.push({key:"tab"+this.index,title:"Tab "+this.index,content:"Content of Tab panel "+this.index}),this.activeKey="tab"+this.index,this.index++}}},k=Object(o.a)(T,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("example",{attrs:{code:e.code,id:"example-tabs-addable"}},[n("template",{slot:"demo"},[n("vui-tabs",{attrs:{type:"card",addable:""},on:{add:e.handleAdd},model:{value:e.activeKey,callback:function(t){e.activeKey=t},expression:"activeKey"}},e._l(e.panels,(function(t){return n("vui-tab-panel",{key:t.key,attrs:{title:t.title}},[e._v(" "+e._s(t.content)+" ")])})),1)],1),n("template",{slot:"title"},[e._v("动态添加")]),n("template",{slot:"description"},[n("p",[e._v("结合 "),n("code",[e._v("addable")]),e._v(" 属性和 "),n("code",[e._v("add")]),e._v(" 事件实现动态添加页签。")])])],2)}),[],!1,null,null,null).exports,C=(n("159b"),n("4de4"),{components:{Example:i.a},data:function(){for(var e=[],t=1;t<4;t++){var n={key:"tab"+t,title:"Tab "+t,content:"Content of Tab panel "+t};1===t&&(n.closable=!1),e.push(n)}return{code:'<template>\n  <vui-tabs type="card" v-model="activeKey" closable v-on:close="handleClose">\n    <vui-tab-panel v-for="panel in panels" v-bind:key="panel.key" v-bind:title="panel.title" v-bind:closable="panel.closable">\n      {{panel.content}}\n    </vui-tab-panel>\n  </vui-tabs>\n</template>\n\n<script>\n  export default {\n    data() {\n      let panels = [];\n      let index = 1;\n\n      for (; index < 4; index++) {\n        let panel = {\n          key: "tab" + index,\n          title: "Tab " + index,\n          content: "Content of Tab panel " + index\n        };\n\n        if (index === 1) {\n          panel.closable = false;\n        }\n\n        panels.push(panel);\n      }\n\n      return {\n        panels: panels,\n        activeKey: panels[0].key\n      };\n    },\n    methods: {\n      handleClose(key) {\n        let activeKey = this.activeKey;\n        let lastIndex;\n\n        this.panels.forEach((panel, index) => {\n          if (panel.key === key) {\n            lastIndex = index - 1;\n          }\n        });\n\n        let panels = this.panels.filter(panel => panel.key !== key);\n\n        if (panels.length && activeKey === key) {\n          if (lastIndex >= 0) {\n            activeKey = panels[lastIndex].key;\n          }\n          else {\n            activeKey = panels[0].key;\n          }\n        }\n\n        this.panels = panels;\n        this.activeKey = activeKey;\n      }\n    }\n  };\n<\/script>\n',panels:e,activeKey:e[0].key}},methods:{handleClose:function(e){var t,n=this.activeKey;this.panels.forEach((function(n,a){n.key===e&&(t=a-1)}));var a=this.panels.filter((function(t){return t.key!==e}));a.length&&n===e&&(n=t>=0?a[t].key:a[0].key),this.panels=a,this.activeKey=n}}}),K=Object(o.a)(C,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("example",{attrs:{code:e.code,id:"example-tabs-closable"}},[n("template",{slot:"demo"},[n("vui-tabs",{attrs:{type:"card",closable:""},on:{close:e.handleClose},model:{value:e.activeKey,callback:function(t){e.activeKey=t},expression:"activeKey"}},e._l(e.panels,(function(t){return n("vui-tab-panel",{key:t.key,attrs:{title:t.title,closable:t.closable}},[e._v(" "+e._s(t.content)+" ")])})),1)],1),n("template",{slot:"title"},[e._v("动态关闭")]),n("template",{slot:"description"},[n("p",[e._v("结合 "),n("code",[e._v("closable")]),e._v(" 属性和 "),n("code",[e._v("close")]),e._v(" 事件实现动态关闭页签。")]),n("p",[e._v("可以显式设置某个 "),n("code",[e._v("TabPanel")]),e._v(" 的 "),n("code",[e._v("closable")]),e._v(" 属性为 "),n("code",[e._v("false")]),e._v("，禁止其关闭。")])])],2)}),[],!1,null,null,null).exports,E={components:{Example:i.a},data:function(){for(var e=[],t=1;t<4;t++){var n={key:"tab"+t,title:"Tab "+t,content:"Content of Tab panel "+t};1===t&&(n.closable=!1),e.push(n)}return{code:'<template>\n  <vui-tabs type="card" v-model="activeKey" editable v-on:add="handleAdd" v-on:close="handleClose">\n    <vui-tab-panel v-for="panel in panels" v-bind:key="panel.key" v-bind:title="panel.title" v-bind:closable="panel.closable">\n      {{panel.content}}\n    </vui-tab-panel>\n  </vui-tabs>\n</template>\n\n<script>\n  export default {\n    data() {\n      let panels = [];\n      let index = 1;\n\n      for (; index < 4; index++) {\n        let panel = {\n          key: "tab" + index,\n          title: "Tab " + index,\n          content: "Content of Tab panel " + index\n        };\n\n        if (index === 1) {\n          panel.closable = false;\n        }\n\n        panels.push(panel);\n      }\n\n      return {\n        panels: panels,\n        activeKey: panels[0].key,\n        index: index\n      };\n    },\n    methods: {\n      handleAdd() {\n        this.panels.push({\n          key: "tab" + this.index,\n          title: "Tab " + this.index,\n          content: "Content of Tab panel " + this.index\n        });\n        this.activeKey = "tab" + this.index;\n        this.index++;\n      },\n      handleClose(key) {\n        let activeKey = this.activeKey;\n        let lastIndex;\n\n        this.panels.forEach((panel, index) => {\n          if (panel.key === key) {\n            lastIndex = index - 1;\n          }\n        });\n\n        let panels = this.panels.filter(panel => panel.key !== key);\n\n        if (panels.length && activeKey === key) {\n          if (lastIndex >= 0) {\n            activeKey = panels[lastIndex].key;\n          }\n          else {\n            activeKey = panels[0].key;\n          }\n        }\n\n        this.panels = panels;\n        this.activeKey = activeKey;\n      }\n    }\n  };\n<\/script>\n',panels:e,activeKey:e[0].key,index:t}},methods:{handleAdd:function(){this.panels.push({key:"tab"+this.index,title:"Tab "+this.index,content:"Content of Tab panel "+this.index}),this.activeKey="tab"+this.index,this.index++},handleClose:function(e){var t,n=this.activeKey;this.panels.forEach((function(n,a){n.key===e&&(t=a-1)}));var a=this.panels.filter((function(t){return t.key!==e}));a.length&&n===e&&(n=t>=0?a[t].key:a[0].key),this.panels=a,this.activeKey=n}}},g=Object(o.a)(E,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("example",{attrs:{code:e.code,id:"example-tabs-editable"}},[n("template",{slot:"demo"},[n("vui-tabs",{attrs:{type:"card",editable:""},on:{add:e.handleAdd,close:e.handleClose},model:{value:e.activeKey,callback:function(t){e.activeKey=t},expression:"activeKey"}},e._l(e.panels,(function(t){return n("vui-tab-panel",{key:t.key,attrs:{title:t.title,closable:t.closable}},[e._v(" "+e._s(t.content)+" ")])})),1)],1),n("template",{slot:"title"},[e._v("动态增减")]),n("template",{slot:"description"},[n("p",[e._v("同时具有添加和关闭功能。")])])],2)}),[],!1,null,null,null).exports,P={components:{Example:i.a},data:function(){for(var e=[],t=1;t<4;t++){var n={key:"tab"+t,title:"Tab "+t,content:"Content of Tab panel "+t};1===t&&(n.closable=!1),e.push(n)}return{code:'<template>\n  <div class="example-tabs-custom-add-trigger">\n    <vui-button v-on:click="handleAdd">Add</vui-button>\n    <vui-tabs type="card" v-model="activeKey" closable v-on:close="handleClose">\n      <vui-tab-panel v-for="panel in panels" v-bind:key="panel.key" v-bind:title="panel.title" v-bind:closable="panel.closable">\n        {{panel.content}}\n      </vui-tab-panel>\n    </vui-tabs>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      let panels = [];\n      let index = 1;\n\n      for (; index < 4; index++) {\n        let panel = {\n          key: "tab" + index,\n          title: "Tab " + index,\n          content: "Content of Tab panel " + index\n        };\n\n        if (index === 1) {\n          panel.closable = false;\n        }\n\n        panels.push(panel);\n      }\n\n      return {\n        panels: panels,\n        activeKey: panels[0].key,\n        index: index\n      };\n    },\n    methods: {\n      handleAdd() {\n        this.panels.push({\n          key: "tab" + this.index,\n          title: "Tab " + this.index,\n          content: "Content of Tab panel " + this.index\n        });\n        this.activeKey = "tab" + this.index;\n        this.index++;\n      },\n      handleClose(key) {\n        let activeKey = this.activeKey;\n        let lastIndex;\n\n        this.panels.forEach((panel, index) => {\n          if (panel.key === key) {\n            lastIndex = index - 1;\n          }\n        });\n\n        let panels = this.panels.filter(panel => panel.key !== key);\n\n        if (panels.length && activeKey === key) {\n          if (lastIndex >= 0) {\n            activeKey = panels[lastIndex].key;\n          }\n          else {\n            activeKey = panels[0].key;\n          }\n        }\n\n        this.panels = panels;\n        this.activeKey = activeKey;\n      }\n    }\n  };\n<\/script>\n\n<style>\n  .example-tabs-custom-add-trigger {  }\n  .example-tabs-custom-add-trigger .vui-tabs { margin-top:20px; }\n</style>\n',panels:e,activeKey:e[0].key,index:t}},methods:{handleAdd:function(){this.panels.push({key:"tab"+this.index,title:"Tab "+this.index,content:"Content of Tab panel "+this.index}),this.activeKey="tab"+this.index,this.index++},handleClose:function(e){var t,n=this.activeKey;this.panels.forEach((function(n,a){n.key===e&&(t=a-1)}));var a=this.panels.filter((function(t){return t.key!==e}));a.length&&n===e&&(n=t>=0?a[t].key:a[0].key),this.panels=a,this.activeKey=n}}},z=(n("827f"),Object(o.a)(P,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("example",{attrs:{code:e.code,id:"example-tabs-custom-add-trigger"}},[n("template",{slot:"demo"},[n("div",{staticClass:"example-tabs-custom-add-trigger"},[n("vui-button",{on:{click:e.handleAdd}},[e._v("Add")]),n("vui-tabs",{attrs:{type:"card",closable:""},on:{close:e.handleClose},model:{value:e.activeKey,callback:function(t){e.activeKey=t},expression:"activeKey"}},e._l(e.panels,(function(t){return n("vui-tab-panel",{key:t.key,attrs:{title:t.title,closable:t.closable}},[e._v(" "+e._s(t.content)+" ")])})),1)],1)]),n("template",{slot:"title"},[e._v("自定义添加触发器")]),n("template",{slot:"description"},[n("p",[e._v("通过给自定义触发器绑定事件实现动态添加页签。")])])],2)}),[],!1,null,null,null).exports),A={mixins:[a.a],components:{Document:l.a,ExampleTabsBasicUsage:d,ExampleTabsCard:v,ExampleTabsIcon:c,ExampleTabsDisabled:u,ExampleTabsCustomTitle:m,ExampleTabsExtra:h,ExampleTabsSize:f,ExampleTabsAddable:k,ExampleTabsClosable:K,ExampleTabsEditable:g,ExampleTabsCustomAddTrigger:z}},S=Object(o.a)(A,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("document",[n("h1",[e._v("Tabs 标签页")]),n("p",[e._v("选项卡切换组件。")]),n("h2",[e._v("何时使用")]),n("p",[e._v("常用于平级区域大块内容的的收纳和展现，保持界面整洁。")]),n("p",[e._v("Vui 依次提供了三级选项卡，分别用于不同的场景。")]),n("ul",[n("li",[e._v("卡片式的页签，提供可关闭的样式，常用于容器顶部；")]),n("li",[e._v("标准线条式页签，用于容器内部的主功能切换，这是最常用的 Tabs；")]),n("li",[n("router-link",{attrs:{to:"radio"}},[e._v("RadioButton")]),e._v(" 可作为更次级的页签来使用。")],1)]),n("h2",[e._v("代码演示")])]),n("vui-row",{attrs:{gutter:16}},[n("vui-col",{attrs:{span:12}},[n("ExampleTabsBasicUsage"),n("ExampleTabsCard"),n("ExampleTabsIcon"),n("ExampleTabsDisabled"),n("ExampleTabsCustomTitle"),n("ExampleTabsExtra")],1),n("vui-col",{attrs:{span:12}},[n("ExampleTabsSize"),n("ExampleTabsAddable"),n("ExampleTabsClosable"),n("ExampleTabsEditable"),n("ExampleTabsCustomAddTrigger")],1)],1),n("document",[n("h2",{attrs:{id:"example-api"}},[e._v("API")]),n("h3",[e._v("Tabs 属性")]),n("table",{staticClass:"example-api-props"},[n("thead",[n("tr",[n("th",{attrs:{width:"140"}},[e._v("属性")]),n("th",[e._v("说明")]),n("th",{attrs:{width:"200"}},[e._v("类型")]),n("th",{attrs:{width:"100"}},[e._v("默认值")])])]),n("tbody",[n("tr",[n("td",[e._v("type")]),n("td",[e._v("页签基本样式，可选值为 "),n("code",[e._v("line")]),e._v("、"),n("code",[e._v("card")]),e._v(" 或者不设")]),n("td",[e._v("String")]),n("td",[n("code",[e._v("line")])])]),n("tr",[n("td",[e._v("size")]),n("td",[e._v("页签尺寸，可选值为 "),n("code",[e._v("small")]),e._v("、"),n("code",[e._v("medium")]),e._v("、"),n("code",[e._v("large")]),e._v(" 或者不设")]),n("td",[e._v("String")]),n("td",[n("code",[e._v("medium")])])]),n("tr",[n("td",[e._v("activeKey")]),n("td",[e._v("当前激活面板的 "),n("code",[e._v("key")]),e._v(" 值属性，可以使用 "),n("code",[e._v("v-model")]),e._v(" 双向绑定数据")]),n("td",[e._v("String")]),n("td",[e._v("--")])]),n("tr",[n("td",[e._v("extra")]),n("td",[e._v("页签右侧附加内容")]),n("td",[e._v("String | Number | Slot")]),n("td",[e._v("--")])]),n("tr",[n("td",[e._v("addable")]),n("td",[e._v("是否可以添加页签")]),n("td",[e._v("Boolean")]),n("td",[n("code",[e._v("false")])])]),n("tr",[n("td",[e._v("closable")]),n("td",[e._v("是否允许关闭页签")]),n("td",[e._v("Boolean")]),n("td",[n("code",[e._v("false")])])]),n("tr",[n("td",[e._v("editable")]),n("td",[e._v("是否可以动态增减页签，即同时具有添加和关闭功能")]),n("td",[e._v("Boolean")]),n("td",[n("code",[e._v("false")])])]),n("tr",[n("td",[e._v("destroyOnHide")]),n("td",[e._v("隐藏时销毁 TabPanel 的子元素")]),n("td",[e._v("Boolean")]),n("td",[n("code",[e._v("false")])])]),n("tr",[n("td",[e._v("headerStyle")]),n("td",[e._v("用于设置标签页头部的样式")]),n("td",[e._v("String | Object")]),n("td",[e._v("--")])]),n("tr",[n("td",[e._v("bodyStyle")]),n("td",[e._v("用于设置标签页内容部分的样式")]),n("td",[e._v("String | Object")]),n("td",[e._v("--")])])])]),n("h3",[e._v("Tabs 事件")]),n("table",{staticClass:"example-api-events"},[n("thead",[n("tr",[n("th",{attrs:{width:"140"}},[e._v("事件名")]),n("th",[e._v("说明")]),n("th",{attrs:{width:"200"}},[e._v("类型")]),n("th",{attrs:{width:"100"}},[e._v("回调参数")])])]),n("tbody",[n("tr",[n("td",[e._v("add")]),n("td",[e._v("添加页签时触发，仅在 "),n("code",[e._v("addable")]),e._v(" 或 "),n("code",[e._v("editable")]),e._v(" 属性为 "),n("code",[e._v("true")]),e._v(" 时有效")]),n("td",[e._v("Function")]),n("td",[e._v("--")])]),n("tr",[n("td",[e._v("close")]),n("td",[e._v("关闭页签时触发，仅在 "),n("code",[e._v("closable")]),e._v(" 或 "),n("code",[e._v("editable")]),e._v(" 属性为 "),n("code",[e._v("true")]),e._v(" 时有效")]),n("td",[e._v("Function")]),n("td",[n("code",[e._v("key")])])]),n("tr",[n("td",[e._v("input")]),n("td",[e._v("切换页签时触发，可以使用 "),n("code",[e._v("v-model")]),e._v(" 双向绑定数据")]),n("td",[e._v("Function")]),n("td",[n("code",[e._v("key")])])]),n("tr",[n("td",[e._v("change")]),n("td",[e._v("切换页签时触发")]),n("td",[e._v("Function")]),n("td",[n("code",[e._v("key")])])])])]),n("h3",[e._v("TabPanel 属性")]),n("table",{staticClass:"example-api-props"},[n("thead",[n("tr",[n("th",{attrs:{width:"140"}},[e._v("属性")]),n("th",[e._v("说明")]),n("th",{attrs:{width:"200"}},[e._v("类型")]),n("th",{attrs:{width:"100"}},[e._v("默认值")])])]),n("tbody",[n("tr",[n("td",[e._v("key")]),n("td",[e._v("当前页签唯一标识，对应父级 "),n("code",[e._v("Tabs")]),e._v(" 组件的 "),n("code",[e._v("activeKey")]),e._v(" 值，默认页签索引")]),n("td",[e._v("String | Number")]),n("td",[e._v("--")])]),n("tr",[n("td",[e._v("icon")]),n("td",[e._v("当前页签图标类型/图标")]),n("td",[e._v("String | Slot")]),n("td",[e._v("--")])]),n("tr",[n("td",[e._v("title")]),n("td",[e._v("当前页签标题")]),n("td",[e._v("String | Number | Slot")]),n("td",[e._v("--")])]),n("tr",[n("td",[e._v("closable")]),n("td",[e._v("是否允许关闭当前页签，默认继承 "),n("code",[e._v("Tabs")]),e._v(" 的 "),n("code",[e._v("closable")]),e._v(" 属性")]),n("td",[e._v("Boolean")]),n("td",[e._v("--")])]),n("tr",[n("td",[e._v("disabled")]),n("td",[e._v("是否禁用当前页签")]),n("td",[e._v("Boolean")]),n("td",[n("code",[e._v("false")])])])])])])],1)}),[],!1,null,null,null);t.default=S.exports},"77b7":function(e,t,n){},"827f":function(e,t,n){"use strict";n("77b7")},a872:function(e,t,n){},f230:function(e,t,n){"use strict";n("a872")}}]);