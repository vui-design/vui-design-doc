webpackJsonp([25],{CsJA:function(t,e){},GgaC:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("q77b"),l=n("Fy5V"),i=n("RLuK"),s={components:{VuiDocExample:i.a},data:function(){return{code:'<template>\n  <vui-tabs>\n    <vui-tab-panel key="tab1" title="Tab 1">\n      Content of Tab Panel 1\n    </vui-tab-panel>\n    <vui-tab-panel key="tab2" title="Tab 2">\n      Content of Tab Panel 2\n    </vui-tab-panel>\n    <vui-tab-panel key="tab3" title="Tab 3">\n      Content of Tab Panel 3\n    </vui-tab-panel>\n  </vui-tabs>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n'}}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("vui-doc-example",{attrs:{code:this.code,id:"example-tabs-basic-usage"}},[e("template",{slot:"demo"},[e("vui-tabs",{attrs:{destroyOnHide:""}},[e("vui-tab-panel",{key:"tab1",attrs:{title:"Tab 1"}},[this._v("\n\t\t\t\tContent of Tab Panel 1\n\t\t\t")]),e("vui-tab-panel",{key:"tab2",attrs:{title:"Tab 2"}},[this._v("\n\t\t\t\tContent of Tab Panel 2\n\t\t\t")]),e("vui-tab-panel",{key:"tab3",attrs:{title:"Tab 3"}},[this._v("\n\t\t\t\tContent of Tab Panel 3\n\t\t\t")])],1)],1),e("template",{slot:"title"},[this._v("基本用法")]),e("template",{slot:"description"},[e("p",[this._v("基本用法，默认激活第一项。")])])],2)},staticRenderFns:[]},d=n("VU/8")(s,o,!1,null,null,null).exports,v={components:{VuiDocExample:i.a},data:function(){return{code:'<template>\n  <vui-tabs type="card">\n    <vui-tab-panel key="tab1" title="Tab 1">\n      Content of Tab Panel 1\n    </vui-tab-panel>\n    <vui-tab-panel key="tab2" title="Tab 2">\n      Content of Tab Panel 2\n    </vui-tab-panel>\n    <vui-tab-panel key="tab3" title="Tab 3">\n      Content of Tab Panel 3\n    </vui-tab-panel>\n  </vui-tabs>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n'}}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("vui-doc-example",{attrs:{code:this.code,id:"example-tabs-card"}},[e("template",{slot:"demo"},[e("vui-tabs",{attrs:{type:"card"}},[e("vui-tab-panel",{key:"tab1",attrs:{title:"Tab 1"}},[this._v("\n\t\t\t\tContent of Tab Panel 1\n\t\t\t")]),e("vui-tab-panel",{key:"tab2",attrs:{title:"Tab 2"}},[this._v("\n\t\t\t\tContent of Tab Panel 2\n\t\t\t")]),e("vui-tab-panel",{key:"tab3",attrs:{title:"Tab 3"}},[this._v("\n\t\t\t\tContent of Tab Panel 3\n\t\t\t")])],1)],1),e("template",{slot:"title"},[this._v("卡片样式")]),e("template",{slot:"description"},[e("p",[this._v("卡片样式的页签，一般用于容器顶部。")])])],2)},staticRenderFns:[]},r=n("VU/8")(v,p,!1,null,null,null).exports,c={components:{VuiDocExample:i.a},data:function(){return{code:'<template>\n  <vui-tabs>\n    <vui-tab-panel key="tab1" icon="apps" title="Tab 1">\n      Content of Tab Panel 1\n    </vui-tab-panel>\n    <vui-tab-panel key="tab2" icon="bar-chart" title="Tab 2">\n      Content of Tab Panel 2\n    </vui-tab-panel>\n    <vui-tab-panel key="tab3" icon="pie-chart" title="Tab 3">\n      Content of Tab Panel 3\n    </vui-tab-panel>\n  </vui-tabs>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n'}}},b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vui-doc-example",{attrs:{code:t.code,id:"example-tabs-icon"}},[n("template",{slot:"demo"},[n("vui-tabs",[n("vui-tab-panel",{key:"tab1",attrs:{icon:"apps",title:"Tab 1"}},[t._v("\n\t\t\t\tContent of Tab Panel 1\n\t\t\t")]),n("vui-tab-panel",{key:"tab2",attrs:{icon:"bar-chart",title:"Tab 2"}},[t._v("\n\t\t\t\tContent of Tab Panel 2\n\t\t\t")]),n("vui-tab-panel",{key:"tab3",attrs:{icon:"pie-chart",title:"Tab 3"}},[t._v("\n\t\t\t\tContent of Tab Panel 3\n\t\t\t")])],1)],1),n("template",{slot:"title"},[t._v("图标")]),n("template",{slot:"description"},[n("p",[t._v("通过设置 "),n("code",[t._v("icon")]),t._v(" 属性，可以为页签添加一个图标")])])],2)},staticRenderFns:[]},u=n("VU/8")(c,b,!1,null,null,null).exports,_={components:{VuiDocExample:i.a},data:function(){return{code:'<template>\n  <vui-tabs>\n    <vui-tab-panel key="tab1" title="Tab 1">\n      Content of Tab Panel 1\n    </vui-tab-panel>\n    <vui-tab-panel key="tab2" title="Tab 2" disabled>\n      Content of Tab Panel 2\n    </vui-tab-panel>\n    <vui-tab-panel key="tab3" title="Tab 3">\n      Content of Tab Panel 3\n    </vui-tab-panel>\n  </vui-tabs>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n'}}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vui-doc-example",{attrs:{code:t.code,id:"example-tabs-disabled"}},[n("template",{slot:"demo"},[n("vui-tabs",[n("vui-tab-panel",{key:"tab1",attrs:{title:"Tab 1"}},[t._v("\n\t\t\t\tContent of Tab Panel 1\n\t\t\t")]),n("vui-tab-panel",{key:"tab2",attrs:{title:"Tab 2",disabled:""}},[t._v("\n\t\t\t\tContent of Tab Panel 2\n\t\t\t")]),n("vui-tab-panel",{key:"tab3",attrs:{title:"Tab 3"}},[t._v("\n\t\t\t\tContent of Tab Panel 3\n\t\t\t")])],1)],1),n("template",{slot:"title"},[t._v("禁用")]),n("template",{slot:"description"},[n("p",[t._v("添加 "),n("code",[t._v("disabled")]),t._v(" 属性可以禁用页签。")])])],2)},staticRenderFns:[]},y=n("VU/8")(_,m,!1,null,null,null).exports,h={components:{VuiDocExample:i.a},data:function(){return{code:'<template>\n  <vui-tabs>\n    <vui-tab-panel key="tab1">\n      <template slot="title">\n        <span style="margin-right: 8px; vertical-align: middle;">Tab 1</span>\n        <vui-badge status="error" />\n      </template>\n      Content of Tab Panel 1\n    </vui-tab-panel>\n    <vui-tab-panel key="tab2" title="Tab 2">Content of Tab Panel 2</vui-tab-panel>\n    <vui-tab-panel key="tab3" title="Tab 3">Content of Tab Panel 3</vui-tab-panel>\n  </vui-tabs>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n'}}},x={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vui-doc-example",{attrs:{code:t.code,id:"example-tabs-custom-title"}},[n("template",{slot:"demo"},[n("vui-tabs",[n("vui-tab-panel",{key:"tab1"},[n("template",{slot:"title"},[n("span",{staticStyle:{"margin-right":"8px","vertical-align":"middle"}},[t._v("Tab 1")]),n("vui-badge",{attrs:{status:"error"}})],1),t._v("\n\t\t\t\tContent of Tab Panel 1\n\t\t\t")],2),n("vui-tab-panel",{key:"tab2",attrs:{title:"Tab 2"}},[t._v("Content of Tab Panel 2")]),n("vui-tab-panel",{key:"tab3",attrs:{title:"Tab 3"}},[t._v("Content of Tab Panel 3")])],1)],1),n("template",{slot:"title"},[t._v("自定义标题")]),n("template",{slot:"description"},[n("p",[t._v("可以通过具名 "),n("code",[t._v("slot")]),t._v(" 来实现自定义页签标题。")])])],2)},staticRenderFns:[]},f=n("VU/8")(h,x,!1,null,null,null).exports,T={components:{VuiDocExample:i.a},data:function(){return{code:'<template>\n  <vui-tabs type="card">\n    <vui-tab-panel key="tab1" title="Tab 1">\n      Content of Tab Panel 1\n    </vui-tab-panel>\n    <vui-tab-panel key="tab2" title="Tab 2">\n      Content of Tab Panel 2\n    </vui-tab-panel>\n    <vui-tab-panel key="tab3" title="Tab 3">\n      Content of Tab Panel 3\n    </vui-tab-panel>\n    <vui-button size="small" slot="extra">Extra</vui-button>\n  </vui-tabs>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n'}}},k={render:function(){var t=this.$createElement,e=this._self._c||t;return e("vui-doc-example",{attrs:{code:this.code,id:"example-tabs-extra"}},[e("template",{slot:"demo"},[e("vui-tabs",{attrs:{type:"card"}},[e("vui-tab-panel",{key:"tab1",attrs:{title:"Tab 1"}},[this._v("\n\t\t\t\tContent of Tab Panel 1\n\t\t\t")]),e("vui-tab-panel",{key:"tab2",attrs:{title:"Tab 2"}},[this._v("\n\t\t\t\tContent of Tab Panel 2\n\t\t\t")]),e("vui-tab-panel",{key:"tab3",attrs:{title:"Tab 3"}},[this._v("\n\t\t\t\tContent of Tab Panel 3\n\t\t\t")]),e("vui-button",{attrs:{slot:"extra",size:"small"},slot:"extra"},[this._v("Extra")])],1)],1),e("template",{slot:"title"},[this._v("附加内容")]),e("template",{slot:"description"},[e("p",[this._v("可以在页签右侧添加附加内容。")])])],2)},staticRenderFns:[]},C=n("VU/8")(T,k,!1,null,null,null).exports,K={components:{VuiDocExample:i.a},data:function(){for(var t=[],e=1;e<4;e++){var n={key:"tab"+e,title:"Tab "+e,content:"Content of Tab panel "+e};t.push(n)}return{code:'<template>\n  <div class="example-tabs-size">\n    <vui-radio-group type="button" v-model="size">\n      <vui-radio label="Small" value="small" />\n      <vui-radio label="Medium" value="medium" />\n      <vui-radio label="Large" value="large" />\n    </vui-radio-group>\n    <vui-tabs v-bind:size="size">\n      <vui-tab-panel v-for="panel in panels" v-bind:key="panel.key" v-bind:title="panel.title">\n        {{panel.content}}\n      </vui-tab-panel>\n    </vui-tabs>\n    <vui-tabs type="card" v-bind:size="size">\n      <vui-tab-panel v-for="panel in panels" v-bind:key="panel.key" v-bind:title="panel.title">\n        {{panel.content}}\n      </vui-tab-panel>\n    </vui-tabs>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      let panels = [];\n      let index = 1;\n\n      for (; index < 4; index++) {\n        let panel = {\n          key: "tab" + index,\n          title: "Tab " + index,\n          content: "Content of Tab panel " + index\n        };\n\n        panels.push(panel);\n      }\n\n      return {\n        size: "medium",\n        panels: panels\n      };\n    }\n  };\n<\/script>\n\n<style>\n  .example-tabs-size {  }\n  .example-tabs-size .vui-tabs { margin-top:20px; }\n</style>\n',size:"medium",panels:t}}},E={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vui-doc-example",{attrs:{code:t.code,id:"example-tabs-size"}},[n("template",{slot:"demo"},[n("div",{staticClass:"example-tabs-size"},[n("vui-radio-group",{attrs:{type:"button"},model:{value:t.size,callback:function(e){t.size=e},expression:"size"}},[n("vui-radio",{attrs:{label:"Small",value:"small"}}),n("vui-radio",{attrs:{label:"Medium",value:"medium"}}),n("vui-radio",{attrs:{label:"Large",value:"large"}})],1),n("vui-tabs",{attrs:{size:t.size}},t._l(t.panels,function(e){return n("vui-tab-panel",{key:e.key,attrs:{title:e.title}},[t._v("\n\t\t\t\t\t"+t._s(e.content)+"\n\t\t\t\t")])}),1),n("vui-tabs",{attrs:{type:"card",size:t.size}},t._l(t.panels,function(e){return n("vui-tab-panel",{key:e.key,attrs:{title:e.title}},[t._v("\n\t\t\t\t\t"+t._s(e.content)+"\n\t\t\t\t")])}),1)],1)]),n("template",{slot:"title"},[t._v("页签尺寸")]),n("template",{slot:"description"},[n("p",[t._v("大号用在页头区域，小号则建议用在弹出框等较狭窄的容器内。")])])],2)},staticRenderFns:[]};var g=n("VU/8")(K,E,!1,function(t){n("CsJA")},null,null).exports,P={components:{VuiDocExample:i.a},data:function(){for(var t=[],e=1;e<4;e++){var n={key:"tab"+e,title:"Tab "+e,content:"Content of Tab panel "+e};t.push(n)}return{code:'<template>\n  <vui-tabs type="card" v-model="activeKey" addable v-on:add="handleAdd">\n    <vui-tab-panel v-for="panel in panels" v-bind:key="panel.key" v-bind:title="panel.title">\n      {{panel.content}}\n    </vui-tab-panel>\n  </vui-tabs>\n</template>\n\n<script>\n  export default {\n    data() {\n      let panels = [];\n      let index = 1;\n\n      for (; index < 4; index++) {\n        let panel = {\n          key: "tab" + index,\n          title: "Tab " + index,\n          content: "Content of Tab panel " + index\n        };\n\n        panels.push(panel);\n      }\n\n      return {\n        panels: panels,\n        activeKey: panels[0].key,\n        index: index\n      };\n    },\n    methods: {\n      handleAdd() {\n        this.panels.push({\n          key: "tab" + this.index,\n          title: "Tab " + this.index,\n          content: "Content of Tab panel " + this.index\n        });\n        this.activeKey = "tab" + this.index;\n        this.index++;\n      }\n    }\n  };\n<\/script>\n',panels:t,activeKey:t[0].key,index:e}},methods:{handleAdd:function(){this.panels.push({key:"tab"+this.index,title:"Tab "+this.index,content:"Content of Tab panel "+this.index}),this.activeKey="tab"+this.index,this.index++}}},V={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vui-doc-example",{attrs:{code:t.code,id:"example-tabs-addable"}},[n("template",{slot:"demo"},[n("vui-tabs",{attrs:{type:"card",addable:""},on:{add:t.handleAdd},model:{value:t.activeKey,callback:function(e){t.activeKey=e},expression:"activeKey"}},t._l(t.panels,function(e){return n("vui-tab-panel",{key:e.key,attrs:{title:e.title}},[t._v("\n\t\t\t\t"+t._s(e.content)+"\n\t\t\t")])}),1)],1),n("template",{slot:"title"},[t._v("动态添加")]),n("template",{slot:"description"},[n("p",[t._v("结合 "),n("code",[t._v("addable")]),t._v(" 属性和 "),n("code",[t._v("add")]),t._v(" 事件实现动态添加页签。")])])],2)},staticRenderFns:[]},z=n("VU/8")(P,V,!1,null,null,null).exports,A={components:{VuiDocExample:i.a},data:function(){for(var t=[],e=1;e<4;e++){var n={key:"tab"+e,title:"Tab "+e,content:"Content of Tab panel "+e};1===e&&(n.closable=!1),t.push(n)}return{code:'<template>\n  <vui-tabs type="card" v-model="activeKey" closable v-on:close="handleClose">\n    <vui-tab-panel v-for="panel in panels" v-bind:key="panel.key" v-bind:title="panel.title" v-bind:closable="panel.closable">\n      {{panel.content}}\n    </vui-tab-panel>\n  </vui-tabs>\n</template>\n\n<script>\n  export default {\n    data() {\n      let panels = [];\n      let index = 1;\n\n      for (; index < 4; index++) {\n        let panel = {\n          key: "tab" + index,\n          title: "Tab " + index,\n          content: "Content of Tab panel " + index\n        };\n\n        if (index === 1) {\n          panel.closable = false;\n        }\n\n        panels.push(panel);\n      }\n\n      return {\n        panels: panels,\n        activeKey: panels[0].key\n      };\n    },\n    methods: {\n      handleClose(key) {\n        let activeKey = this.activeKey;\n        let lastIndex;\n\n        this.panels.forEach((panel, index) => {\n          if (panel.key === key) {\n            lastIndex = index - 1;\n          }\n        });\n\n        let panels = this.panels.filter(panel => panel.key !== key);\n\n        if (panels.length && activeKey === key) {\n          if (lastIndex >= 0) {\n            activeKey = panels[lastIndex].key;\n          }\n          else {\n            activeKey = panels[0].key;\n          }\n        }\n\n        this.panels = panels;\n        this.activeKey = activeKey;\n      }\n    }\n  };\n<\/script>\n',panels:t,activeKey:t[0].key}},methods:{handleClose:function(t){var e=this.activeKey,n=void 0;this.panels.forEach(function(e,a){e.key===t&&(n=a-1)});var a=this.panels.filter(function(e){return e.key!==t});a.length&&e===t&&(e=n>=0?a[n].key:a[0].key),this.panels=a,this.activeKey=e}}},S={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vui-doc-example",{attrs:{code:t.code,id:"example-tabs-closable"}},[n("template",{slot:"demo"},[n("vui-tabs",{attrs:{type:"card",closable:""},on:{close:t.handleClose},model:{value:t.activeKey,callback:function(e){t.activeKey=e},expression:"activeKey"}},t._l(t.panels,function(e){return n("vui-tab-panel",{key:e.key,attrs:{title:e.title,closable:e.closable}},[t._v("\n\t\t\t\t"+t._s(e.content)+"\n\t\t\t")])}),1)],1),n("template",{slot:"title"},[t._v("动态关闭")]),n("template",{slot:"description"},[n("p",[t._v("结合 "),n("code",[t._v("closable")]),t._v(" 属性和 "),n("code",[t._v("close")]),t._v(" 事件实现动态关闭页签。")]),n("p",[t._v("可以显式设置某个 "),n("code",[t._v("TabPanel")]),t._v(" 的 "),n("code",[t._v("closable")]),t._v(" 属性为 "),n("code",[t._v("false")]),t._v("，禁止其关闭。")])])],2)},staticRenderFns:[]},F=n("VU/8")(A,S,!1,null,null,null).exports,U={components:{VuiDocExample:i.a},data:function(){for(var t=[],e=1;e<4;e++){var n={key:"tab"+e,title:"Tab "+e,content:"Content of Tab panel "+e};1===e&&(n.closable=!1),t.push(n)}return{code:'<template>\n  <vui-tabs type="card" v-model="activeKey" editable v-on:add="handleAdd" v-on:close="handleClose">\n    <vui-tab-panel v-for="panel in panels" v-bind:key="panel.key" v-bind:title="panel.title" v-bind:closable="panel.closable">\n      {{panel.content}}\n    </vui-tab-panel>\n  </vui-tabs>\n</template>\n\n<script>\n  export default {\n    data() {\n      let panels = [];\n      let index = 1;\n\n      for (; index < 4; index++) {\n        let panel = {\n          key: "tab" + index,\n          title: "Tab " + index,\n          content: "Content of Tab panel " + index\n        };\n\n        if (index === 1) {\n          panel.closable = false;\n        }\n\n        panels.push(panel);\n      }\n\n      return {\n        panels: panels,\n        activeKey: panels[0].key,\n        index: index\n      };\n    },\n    methods: {\n      handleAdd() {\n        this.panels.push({\n          key: "tab" + this.index,\n          title: "Tab " + this.index,\n          content: "Content of Tab panel " + this.index\n        });\n        this.activeKey = "tab" + this.index;\n        this.index++;\n      },\n      handleClose(key) {\n        let activeKey = this.activeKey;\n        let lastIndex;\n\n        this.panels.forEach((panel, index) => {\n          if (panel.key === key) {\n            lastIndex = index - 1;\n          }\n        });\n\n        let panels = this.panels.filter(panel => panel.key !== key);\n\n        if (panels.length && activeKey === key) {\n          if (lastIndex >= 0) {\n            activeKey = panels[lastIndex].key;\n          }\n          else {\n            activeKey = panels[0].key;\n          }\n        }\n\n        this.panels = panels;\n        this.activeKey = activeKey;\n      }\n    }\n  };\n<\/script>\n',panels:t,activeKey:t[0].key,index:e}},methods:{handleAdd:function(){this.panels.push({key:"tab"+this.index,title:"Tab "+this.index,content:"Content of Tab panel "+this.index}),this.activeKey="tab"+this.index,this.index++},handleClose:function(t){var e=this.activeKey,n=void 0;this.panels.forEach(function(e,a){e.key===t&&(n=a-1)});var a=this.panels.filter(function(e){return e.key!==t});a.length&&e===t&&(e=n>=0?a[n].key:a[0].key),this.panels=a,this.activeKey=e}}},I={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vui-doc-example",{attrs:{code:t.code,id:"example-tabs-editable"}},[n("template",{slot:"demo"},[n("vui-tabs",{attrs:{type:"card",editable:""},on:{add:t.handleAdd,close:t.handleClose},model:{value:t.activeKey,callback:function(e){t.activeKey=e},expression:"activeKey"}},t._l(t.panels,function(e){return n("vui-tab-panel",{key:e.key,attrs:{title:e.title,closable:e.closable}},[t._v("\n\t\t\t\t"+t._s(e.content)+"\n\t\t\t")])}),1)],1),n("template",{slot:"title"},[t._v("动态增减")]),n("template",{slot:"description"},[n("p",[t._v("同时具有添加和关闭功能。")])])],2)},staticRenderFns:[]},w=n("VU/8")(U,I,!1,null,null,null).exports,D={components:{VuiDocExample:i.a},data:function(){for(var t=[],e=1;e<4;e++){var n={key:"tab"+e,title:"Tab "+e,content:"Content of Tab panel "+e};1===e&&(n.closable=!1),t.push(n)}return{code:'<template>\n  <div class="example-tabs-custom-add-trigger">\n    <vui-button v-on:click="handleAdd">Add</vui-button>\n    <vui-tabs type="card" v-model="activeKey" closable v-on:close="handleClose">\n      <vui-tab-panel v-for="panel in panels" v-bind:key="panel.key" v-bind:title="panel.title" v-bind:closable="panel.closable">\n        {{panel.content}}\n      </vui-tab-panel>\n    </vui-tabs>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      let panels = [];\n      let index = 1;\n\n      for (; index < 4; index++) {\n        let panel = {\n          key: "tab" + index,\n          title: "Tab " + index,\n          content: "Content of Tab panel " + index\n        };\n\n        if (index === 1) {\n          panel.closable = false;\n        }\n\n        panels.push(panel);\n      }\n\n      return {\n        panels: panels,\n        activeKey: panels[0].key,\n        index: index\n      };\n    },\n    methods: {\n      handleAdd() {\n        this.panels.push({\n          key: "tab" + this.index,\n          title: "Tab " + this.index,\n          content: "Content of Tab panel " + this.index\n        });\n        this.activeKey = "tab" + this.index;\n        this.index++;\n      },\n      handleClose(key) {\n        let activeKey = this.activeKey;\n        let lastIndex;\n\n        this.panels.forEach((panel, index) => {\n          if (panel.key === key) {\n            lastIndex = index - 1;\n          }\n        });\n\n        let panels = this.panels.filter(panel => panel.key !== key);\n\n        if (panels.length && activeKey === key) {\n          if (lastIndex >= 0) {\n            activeKey = panels[lastIndex].key;\n          }\n          else {\n            activeKey = panels[0].key;\n          }\n        }\n\n        this.panels = panels;\n        this.activeKey = activeKey;\n      }\n    }\n  };\n<\/script>\n\n<style>\n  .example-tabs-custom-add-trigger {  }\n  .example-tabs-custom-add-trigger .vui-tabs { margin-top:20px; }\n</style>\n',panels:t,activeKey:t[0].key,index:e}},methods:{handleAdd:function(){this.panels.push({key:"tab"+this.index,title:"Tab "+this.index,content:"Content of Tab panel "+this.index}),this.activeKey="tab"+this.index,this.index++},handleClose:function(t){var e=this.activeKey,n=void 0;this.panels.forEach(function(e,a){e.key===t&&(n=a-1)});var a=this.panels.filter(function(e){return e.key!==t});a.length&&e===t&&(e=n>=0?a[n].key:a[0].key),this.panels=a,this.activeKey=e}}},R={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vui-doc-example",{attrs:{code:t.code,id:"example-tabs-custom-add-trigger"}},[n("template",{slot:"demo"},[n("div",{staticClass:"example-tabs-custom-add-trigger"},[n("vui-button",{on:{click:t.handleAdd}},[t._v("Add")]),n("vui-tabs",{attrs:{type:"card",closable:""},on:{close:t.handleClose},model:{value:t.activeKey,callback:function(e){t.activeKey=e},expression:"activeKey"}},t._l(t.panels,function(e){return n("vui-tab-panel",{key:e.key,attrs:{title:e.title,closable:e.closable}},[t._v("\n\t\t\t\t\t"+t._s(e.content)+"\n\t\t\t\t")])}),1)],1)]),n("template",{slot:"title"},[t._v("自定义添加触发器")]),n("template",{slot:"description"},[n("p",[t._v("通过给自定义触发器绑定事件实现动态添加页签。")])])],2)},staticRenderFns:[]};var $=n("VU/8")(D,R,!1,function(t){n("SUm7")},null,null).exports,B={mixins:[a.a],components:{VuiDocMarkdown:l.a,ExampleTabsBasicUsage:d,ExampleTabsCard:r,ExampleTabsIcon:u,ExampleTabsDisabled:y,ExampleTabsCustomTitle:f,ExampleTabsExtra:C,ExampleTabsSize:g,ExampleTabsAddable:z,ExampleTabsClosable:F,ExampleTabsEditable:w,ExampleTabsCustomAddTrigger:$}},O={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("vui-doc-markdown",[n("h1",[t._v("Tabs 标签页")]),n("p",[t._v("选项卡切换组件。")]),n("h2",[t._v("何时使用")]),n("p",[t._v("常用于平级区域大块内容的的收纳和展现，保持界面整洁。")]),n("p",[t._v("Vui 依次提供了三级选项卡，分别用于不同的场景。")]),n("ul",[n("li",[t._v("卡片式的页签，提供可关闭的样式，常用于容器顶部；")]),n("li",[t._v("标准线条式页签，用于容器内部的主功能切换，这是最常用的 Tabs；")]),n("li",[n("router-link",{attrs:{to:"radio"}},[t._v("RadioButton")]),t._v(" 可作为更次级的页签来使用。")],1)]),n("h2",[t._v("代码演示")])]),n("vui-row",{attrs:{gutter:16}},[n("vui-col",{attrs:{span:12}},[n("ExampleTabsBasicUsage"),n("ExampleTabsCard"),n("ExampleTabsIcon"),n("ExampleTabsDisabled"),n("ExampleTabsCustomTitle"),n("ExampleTabsExtra")],1),n("vui-col",{attrs:{span:12}},[n("ExampleTabsSize"),n("ExampleTabsAddable"),n("ExampleTabsClosable"),n("ExampleTabsEditable"),n("ExampleTabsCustomAddTrigger")],1)],1),n("vui-doc-markdown",[n("h2",{attrs:{id:"example-api"}},[t._v("API")]),n("h3",[t._v("Tabs 属性")]),n("table",{staticClass:"example-api-props"},[n("thead",[n("tr",[n("th",{attrs:{width:"140"}},[t._v("属性")]),n("th",[t._v("说明")]),n("th",{attrs:{width:"200"}},[t._v("类型")]),n("th",{attrs:{width:"100"}},[t._v("默认值")])])]),n("tbody",[n("tr",[n("td",[t._v("type")]),n("td",[t._v("页签基本样式，可选值为 "),n("code",[t._v("line")]),t._v("、"),n("code",[t._v("card")]),t._v(" 或者不设")]),n("td",[t._v("String")]),n("td",[n("code",[t._v("line")])])]),n("tr",[n("td",[t._v("size")]),n("td",[t._v("页签尺寸，可选值为 "),n("code",[t._v("small")]),t._v("、"),n("code",[t._v("medium")]),t._v("、"),n("code",[t._v("large")]),t._v(" 或者不设")]),n("td",[t._v("String")]),n("td",[n("code",[t._v("medium")])])]),n("tr",[n("td",[t._v("activeKey")]),n("td",[t._v("当前激活面板的 "),n("code",[t._v("key")]),t._v(" 值属性，可以使用 "),n("code",[t._v("v-model")]),t._v(" 双向绑定数据")]),n("td",[t._v("String")]),n("td",[t._v("--")])]),n("tr",[n("td",[t._v("extra")]),n("td",[t._v("页签右侧附加内容")]),n("td",[t._v("String | Number | Slot")]),n("td",[t._v("--")])]),n("tr",[n("td",[t._v("addable")]),n("td",[t._v("是否可以添加页签")]),n("td",[t._v("Boolean")]),n("td",[n("code",[t._v("false")])])]),n("tr",[n("td",[t._v("closable")]),n("td",[t._v("是否允许关闭页签")]),n("td",[t._v("Boolean")]),n("td",[n("code",[t._v("false")])])]),n("tr",[n("td",[t._v("editable")]),n("td",[t._v("是否可以动态增减页签，即同时具有添加和关闭功能")]),n("td",[t._v("Boolean")]),n("td",[n("code",[t._v("false")])])]),n("tr",[n("td",[t._v("destroyOnHide")]),n("td",[t._v("隐藏时销毁 TabPanel 的子元素")]),n("td",[t._v("Boolean")]),n("td",[n("code",[t._v("false")])])]),n("tr",[n("td",[t._v("headerStyle")]),n("td",[t._v("用于设置标签页头部的样式")]),n("td",[t._v("String | Object")]),n("td",[t._v("--")])]),n("tr",[n("td",[t._v("bodyStyle")]),n("td",[t._v("用于设置标签页内容部分的样式")]),n("td",[t._v("String | Object")]),n("td",[t._v("--")])])])]),n("h3",[t._v("Tabs 事件")]),n("table",{staticClass:"example-api-events"},[n("thead",[n("tr",[n("th",{attrs:{width:"140"}},[t._v("事件名")]),n("th",[t._v("说明")]),n("th",{attrs:{width:"200"}},[t._v("类型")]),n("th",{attrs:{width:"100"}},[t._v("回调参数")])])]),n("tbody",[n("tr",[n("td",[t._v("add")]),n("td",[t._v("添加页签时触发，仅在 "),n("code",[t._v("addable")]),t._v(" 或 "),n("code",[t._v("editable")]),t._v(" 属性为 "),n("code",[t._v("true")]),t._v(" 时有效")]),n("td",[t._v("Function")]),n("td",[t._v("--")])]),n("tr",[n("td",[t._v("close")]),n("td",[t._v("关闭页签时触发，仅在 "),n("code",[t._v("closable")]),t._v(" 或 "),n("code",[t._v("editable")]),t._v(" 属性为 "),n("code",[t._v("true")]),t._v(" 时有效")]),n("td",[t._v("Function")]),n("td",[n("code",[t._v("key")])])]),n("tr",[n("td",[t._v("input")]),n("td",[t._v("切换页签时触发，可以使用 "),n("code",[t._v("v-model")]),t._v(" 双向绑定数据")]),n("td",[t._v("Function")]),n("td",[n("code",[t._v("key")])])]),n("tr",[n("td",[t._v("change")]),n("td",[t._v("切换页签时触发")]),n("td",[t._v("Function")]),n("td",[n("code",[t._v("key")])])])])]),n("h3",[t._v("TabPanel 属性")]),n("table",{staticClass:"example-api-props"},[n("thead",[n("tr",[n("th",{attrs:{width:"140"}},[t._v("属性")]),n("th",[t._v("说明")]),n("th",{attrs:{width:"200"}},[t._v("类型")]),n("th",{attrs:{width:"100"}},[t._v("默认值")])])]),n("tbody",[n("tr",[n("td",[t._v("key")]),n("td",[t._v("当前页签唯一标识，对应父级 "),n("code",[t._v("Tabs")]),t._v(" 组件的 "),n("code",[t._v("activeKey")]),t._v(" 值，默认页签索引")]),n("td",[t._v("String | Number")]),n("td",[t._v("--")])]),n("tr",[n("td",[t._v("icon")]),n("td",[t._v("当前页签图标类型/图标")]),n("td",[t._v("String | Slot")]),n("td",[t._v("--")])]),n("tr",[n("td",[t._v("title")]),n("td",[t._v("当前页签标题")]),n("td",[t._v("String | Number | Slot")]),n("td",[t._v("--")])]),n("tr",[n("td",[t._v("closable")]),n("td",[t._v("是否允许关闭当前页签，默认继承 "),n("code",[t._v("Tabs")]),t._v(" 的 "),n("code",[t._v("closable")]),t._v(" 属性")]),n("td",[t._v("Boolean")]),n("td",[t._v("--")])]),n("tr",[n("td",[t._v("disabled")]),n("td",[t._v("是否禁用当前页签")]),n("td",[t._v("Boolean")]),n("td",[n("code",[t._v("false")])])])])])])],1)},staticRenderFns:[]},M=n("VU/8")(B,O,!1,null,null,null);e.default=M.exports},SUm7:function(t,e){}});
//# sourceMappingURL=25.a09c7d9e3bc0b84efa50.js.map