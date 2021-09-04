webpackJsonp([3],{"+lTB":function(t,n){},"/kfA":function(t,n){},HVyI:function(t,n){},IcOw:function(t,n){},Ku9T:function(t,n){},M4ud:function(t,n){},RjDL:function(t,n){},"Z+JE":function(t,n){},dzfi:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("q77b"),i=e("6WqV"),u=e("RLuK"),a={components:{Example:u.a},data:function(){return{code:'<template>\n  <div class="example-button-type">\n    <vui-button type="primary">Primary</vui-button>\n    <vui-button type="info">Info</vui-button>\n    <vui-button type="warning">Warning</vui-button>\n    <vui-button type="success">Success</vui-button>\n    <vui-button type="error">Error</vui-button>\n    <vui-button>Default</vui-button>\n    <vui-button type="dashed">Dashed</vui-button>\n    <vui-button type="text">Text</vui-button>\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-button-type .vui-button { margin:0 16px 16px 0; }\n</style>\n'}}},v={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("example",{attrs:{code:t.code,id:"example-button-type"}},[e("template",{slot:"demo"},[e("div",{staticClass:"example-button-type"},[e("vui-button",{attrs:{type:"primary"}},[t._v("Primary")]),e("vui-button",{attrs:{type:"info"}},[t._v("Info")]),e("vui-button",{attrs:{type:"warning"}},[t._v("Warning")]),e("vui-button",{attrs:{type:"success"}},[t._v("Success")]),e("vui-button",{attrs:{type:"error"}},[t._v("Error")]),e("vui-button",[t._v("Default")]),e("vui-button",{attrs:{type:"dashed"}},[t._v("Dashed")]),e("vui-button",{attrs:{type:"text"}},[t._v("Text")])],1)]),e("template",{slot:"title"},[t._v("按钮类型")]),e("template",{slot:"description"},[e("p",[t._v("按钮包含八种类型。一般情况下，我们将 "),e("code",[t._v("primary")]),t._v(" 类型用于主按钮，而次按钮使用 "),e("code",[t._v("default")]),t._v(" 类型，建议主按钮在同一个操作区域最多出现一次。")])])],2)},staticRenderFns:[]};var r=e("VU/8")(a,v,!1,function(t){e("k3dn")},null,null).exports,s={components:{Example:u.a},data:function(){return{code:'<template>\n  <div class="example-button-ghost">\n    <vui-button type="primary" ghost>Primary</vui-button>\n    <vui-button type="info" ghost>Info</vui-button>\n    <vui-button type="warning" ghost>Warning</vui-button>\n    <vui-button type="success" ghost>Success</vui-button>\n    <vui-button type="error" ghost>Error</vui-button>\n    <vui-button ghost>Default</vui-button>\n    <vui-button type="dashed" ghost>Dashed</vui-button>\n    <vui-button type="text" ghost>Text</vui-button>\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-button-ghost { background-color:#bec8c8; padding:8px 16px; }\n  .example-button-ghost .vui-button { margin:8px 16px 8px 0; }\n</style>\n'}}},d={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("example",{attrs:{code:t.code,id:"example-button-ghost"}},[e("template",{slot:"demo"},[e("div",{staticClass:"example-button-ghost"},[e("vui-button",{attrs:{type:"primary",ghost:""}},[t._v("Primary")]),e("vui-button",{attrs:{type:"info",ghost:""}},[t._v("Info")]),e("vui-button",{attrs:{type:"warning",ghost:""}},[t._v("Warning")]),e("vui-button",{attrs:{type:"success",ghost:""}},[t._v("Success")]),e("vui-button",{attrs:{type:"error",ghost:""}},[t._v("Error")]),e("vui-button",{attrs:{ghost:""}},[t._v("Default")]),e("vui-button",{attrs:{type:"dashed",ghost:""}},[t._v("Dashed")]),e("vui-button",{attrs:{type:"text",ghost:""}},[t._v("Text")])],1)]),e("template",{slot:"title"},[t._v("幽灵按钮")]),e("template",{slot:"description"},[e("p",[t._v("幽灵按钮将按钮的内容反色，背景变为透明，常用在有色背景上。")])])],2)},staticRenderFns:[]};var l=e("VU/8")(s,d,!1,function(t){e("/kfA")},null,null).exports,p={components:{Example:u.a},data:function(){return{code:'<template>\n  <div class="example-button-block">\n    <vui-button type="primary" block>Primary</vui-button>\n    <vui-button block>Default</vui-button>\n    <vui-button type="dashed" block>Dashed</vui-button>\n    <vui-button type="text" block>Text</vui-button>\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-button-block .vui-button + .vui-button { margin-top:16px; }\n</style>\n'}}},c={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("example",{attrs:{code:t.code,id:"example-button-block"}},[e("template",{slot:"demo"},[e("div",{staticClass:"example-button-block"},[e("vui-button",{attrs:{type:"primary",block:""}},[t._v("Primary")]),e("vui-button",{attrs:{block:""}},[t._v("Default")]),e("vui-button",{attrs:{type:"dashed",block:""}},[t._v("Dashed")]),e("vui-button",{attrs:{type:"text",block:""}},[t._v("Text")])],1)]),e("template",{slot:"title"},[t._v("Block 按钮")]),e("template",{slot:"description"},[e("p",[t._v("开启 "),e("code",[t._v("block")]),t._v(" 属性将使按钮撑满其父元素宽度。")])])],2)},staticRenderFns:[]};var b=e("VU/8")(p,c,!1,function(t){e("RjDL")},null,null).exports,_={components:{Example:u.a},data:function(){return{code:'<template>\n  <div class="example-button-icon-and-shape">\n    <section>\n      <vui-button type="primary" icon="search">Search</vui-button>\n      <vui-button type="primary" icon="search" shape="round">Search</vui-button>\n      <vui-button type="primary" icon="search" shape="circle" />\n      <vui-button type="primary" shape="round">\n        More<vui-icon type="more-x" />\n      </vui-button>\n      <vui-button type="primary" shape="circle">\n        <vui-icon type="more-x" />\n      </vui-button>\n    </section>\n    <section>\n      <vui-button icon="search">Search</vui-button>\n      <vui-button icon="search" shape="round">Search</vui-button>\n      <vui-button icon="search" shape="circle" />\n      <vui-button shape="round">\n        More<vui-icon type="more-x" />\n      </vui-button>\n      <vui-button shape="circle">\n        <vui-icon type="more-x" />\n      </vui-button>\n    </section>\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-button-icon-and-shape > section:not(:last-child) { margin-bottom:16px; }\n  .example-button-icon-and-shape > section > .vui-button { margin-right:16px; }\n</style>\n'}}},m={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("example",{attrs:{code:t.code,id:"example-button-icon-and-shape"}},[e("template",{slot:"demo"},[e("div",{staticClass:"example-button-icon-and-shape"},[e("section",[e("vui-button",{attrs:{type:"primary",icon:"search"}},[t._v("Search")]),e("vui-button",{attrs:{type:"primary",icon:"search",shape:"round"}},[t._v("Search")]),e("vui-button",{attrs:{type:"primary",icon:"search",shape:"circle"}}),e("vui-button",{attrs:{type:"primary",shape:"round"}},[t._v("\n          More"),e("vui-icon",{attrs:{type:"more-x"}})],1),e("vui-button",{attrs:{type:"primary",shape:"circle"}},[e("vui-icon",{attrs:{type:"more-x"}})],1)],1),e("section",[e("vui-button",{attrs:{icon:"search"}},[t._v("Search")]),e("vui-button",{attrs:{icon:"search",shape:"round"}},[t._v("Search")]),e("vui-button",{attrs:{icon:"search",shape:"circle"}}),e("vui-button",{attrs:{shape:"round"}},[t._v("\n          More"),e("vui-icon",{attrs:{type:"more-x"}})],1),e("vui-button",{attrs:{shape:"circle"}},[e("vui-icon",{attrs:{type:"more-x"}})],1)],1)])]),e("template",{slot:"title"},[t._v("图标以及形状")]),e("template",{slot:"description"},[e("p",[t._v("如果需要在 "),e("code",[t._v("Button")]),t._v(" 内插入一个图标，可以设置 "),e("code",[t._v("icon")]),t._v(" 属性，或者直接在 "),e("code",[t._v("Button")]),t._v(" 内使用 "),e("code",[t._v("Icon")]),t._v(" 组件。")]),e("p",[t._v("使用 "),e("code",[t._v("Button")]),t._v(" 的 "),e("code",[t._v("icon")]),t._v(" 属性，图标将被插入到按钮左侧，如果需要自定义位置，请使用 "),e("code",[t._v("Icon")]),t._v(" 组件。")]),e("p",[t._v("属性 "),e("code",[t._v("shape")]),t._v(" 用于设置按钮形状，可选值为 "),e("code",[t._v("round")]),t._v("、"),e("code",[t._v("circle")]),t._v("，或者不设。")])])],2)},staticRenderFns:[]};var h=e("VU/8")(_,m,!1,function(t){e("HVyI")},null,null).exports,y={components:{Example:u.a},data:function(){return{code:'<template>\n  <div class="example-button-size">\n    <section>\n      <vui-radio-group type="button" v-model="size">\n        <vui-radio label="Small" value="small" />\n        <vui-radio label="Medium" value="medium" />\n        <vui-radio label="Large" value="large" />\n      </vui-radio-group>\n    </section>\n    <section>\n      <vui-button type="primary" v-bind:size="size">Primary</vui-button>\n      <vui-button v-bind:size="size">Default</vui-button>\n      <vui-button type="dashed" v-bind:size="size">Dashed</vui-button>\n      <vui-button type="text" v-bind:size="size">Text</vui-button>\n    </section>\n    <section>\n      <vui-button type="primary" icon="download-package" v-bind:size="size">Download</vui-button>\n      <vui-button type="primary" icon="download-package" shape="round" v-bind:size="size">Download</vui-button>\n      <vui-button type="primary" icon="download-package" shape="circle" v-bind:size="size" />\n    </section>\n    <section>\n      <vui-button-group type="primary" v-bind:size="size">\n        <vui-button>\n          <vui-icon type="chevron-left" />Backward\n        </vui-button>\n        <vui-button>\n          Forward<vui-icon type="chevron-right" />\n        </vui-button>\n      </vui-button-group>\n    </section>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        size: "medium"\n      };\n    }\n  };\n<\/script>\n\n<style>\n  .example-button-size > section:not(:last-child) { margin-bottom:16px; }\n  .example-button-size > section > .vui-button { margin-right:16px; }\n</style>\n',size:"medium"}}},g={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("example",{attrs:{code:t.code,id:"example-button-size"}},[e("template",{slot:"demo"},[e("div",{staticClass:"example-button-size"},[e("section",[e("vui-radio-group",{attrs:{type:"button"},model:{value:t.size,callback:function(n){t.size=n},expression:"size"}},[e("vui-radio",{attrs:{label:"Small",value:"small"}}),e("vui-radio",{attrs:{label:"Medium",value:"medium"}}),e("vui-radio",{attrs:{label:"Large",value:"large"}})],1)],1),e("section",[e("vui-button",{attrs:{type:"primary",size:t.size}},[t._v("Primary")]),e("vui-button",{attrs:{size:t.size}},[t._v("Default")]),e("vui-button",{attrs:{type:"dashed",size:t.size}},[t._v("Dashed")]),e("vui-button",{attrs:{type:"text",size:t.size}},[t._v("Text")])],1),e("section",[e("vui-button",{attrs:{type:"primary",icon:"download-package",size:t.size}},[t._v("Download")]),e("vui-button",{attrs:{type:"primary",icon:"download-package",shape:"round",size:t.size}},[t._v("Download")]),e("vui-button",{attrs:{type:"primary",icon:"download-package",shape:"circle",size:t.size}})],1),e("section",[e("vui-button-group",{attrs:{type:"primary",size:t.size}},[e("vui-button",[e("vui-icon",{attrs:{type:"chevron-left"}}),t._v("Backward\n          ")],1),e("vui-button",[t._v("\n            Forward"),e("vui-icon",{attrs:{type:"chevron-right"}})],1)],1)],1)])]),e("template",{slot:"title"},[t._v("按钮尺寸")]),e("template",{slot:"description"},[e("p",[t._v("按钮有小、中、大三种尺寸。")]),e("p",[t._v("通过设置 "),e("code",[t._v("size")]),t._v(" 为 "),e("code",[t._v("small")]),t._v(" 或 "),e("code",[t._v("large")]),t._v(" 以使用小型或大型按钮。若不设置 "),e("code",[t._v("size")]),t._v("，则默认为中型尺寸。")])])],2)},staticRenderFns:[]};var x=e("VU/8")(y,g,!1,function(t){e("Z+JE")},null,null).exports,f={components:{Example:u.a},data:function(){return{code:'<template>\n  <div class="example-button-loading">\n    <section>\n      <vui-button\n        type="primary"\n        icon="dustbin"\n        v-bind:loading="loading2"\n        v-on:click="handleClick2"\n      >Click me</vui-button>\n      <vui-button\n        type="primary"\n        v-bind:loading="loading1"\n        v-on:click="handleClick1"\n      >Click me</vui-button>\n      <vui-button type="primary" loading>Loading...</vui-button>\n    </section>\n    <section>\n      <vui-button type="primary" shape="circle" loading />\n      <vui-button shape="circle" loading />\n    </section>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        loading1: false,\n        loading2: false\n      };\n    },\n    methods: {\n      handleClick1() {\n        this.loading1 = true;\n      },\n      handleClick2() {\n        this.loading2 = true;\n      },\n    }\n  };\n<\/script>\n\n<style>\n  .example-button-loading > section:not(:last-child) { margin-bottom:16px; }\n  .example-button-loading > section > .vui-button { margin-right:16px; }\n</style>\n',loading1:!1,loading2:!1}},methods:{handleClick1:function(){this.loading1=!0},handleClick2:function(){this.loading2=!0}}},k={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("example",{attrs:{code:t.code,id:"example-button-loading"}},[e("template",{slot:"demo"},[e("div",{staticClass:"example-button-loading"},[e("section",[e("vui-button",{attrs:{type:"primary",icon:"dustbin",loading:t.loading2},on:{click:t.handleClick2}},[t._v("Click me")]),e("vui-button",{attrs:{type:"primary",loading:t.loading1},on:{click:t.handleClick1}},[t._v("Click me")]),e("vui-button",{attrs:{type:"primary",loading:""}},[t._v("Loading...")])],1),e("section",[e("vui-button",{attrs:{type:"primary",shape:"circle",loading:""}}),e("vui-button",{attrs:{shape:"circle",loading:""}})],1)])]),e("template",{slot:"title"},[t._v("加载状态")]),e("template",{slot:"description"},[e("p",[t._v("添加 "),e("code",[t._v("loading")]),t._v(" 属性即可让按钮处于加载状态。")])])],2)},staticRenderFns:[]};var z=e("VU/8")(f,k,!1,function(t){e("+lTB")},null,null).exports,w={components:{Example:u.a},data:function(){return{code:'<template>\n  <div class="example-button-disabled">\n    <section>\n      <vui-button type="primary">Primary</vui-button>\n      <vui-button type="primary" disabled>Primary(disabled)</vui-button>\n    </section>\n    <section>\n      <vui-button>Default</vui-button>\n      <vui-button disabled>Default(disabled)</vui-button>\n    </section>\n    <section>\n      <vui-button type="dashed">Dashed</vui-button>\n      <vui-button type="dashed" disabled>Dashed(disabled)</vui-button>\n    </section>\n    <section>\n      <vui-button type="text">Text</vui-button>\n      <vui-button type="text" disabled>Text(disabled)</vui-button>\n    </section>\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-button-disabled > section:not(:last-child) { margin-bottom:16px; }\n  .example-button-disabled > section > .vui-button { margin-right:16px; }\n</style>\n'}}},C={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("example",{attrs:{code:t.code,id:"example-button-disabled"}},[e("template",{slot:"demo"},[e("div",{staticClass:"example-button-disabled"},[e("section",[e("vui-button",{attrs:{type:"primary"}},[t._v("Primary")]),e("vui-button",{attrs:{type:"primary",disabled:""}},[t._v("Primary(disabled)")])],1),e("section",[e("vui-button",[t._v("Default")]),e("vui-button",{attrs:{disabled:""}},[t._v("Default(disabled)")])],1),e("section",[e("vui-button",{attrs:{type:"dashed"}},[t._v("Dashed")]),e("vui-button",{attrs:{type:"dashed",disabled:""}},[t._v("Dashed(disabled)")])],1),e("section",[e("vui-button",{attrs:{type:"text"}},[t._v("Text")]),e("vui-button",{attrs:{type:"text",disabled:""}},[t._v("Text(disabled)")])],1)])]),e("template",{slot:"title"},[t._v("禁用状态")]),e("template",{slot:"description"},[e("p",[t._v("添加 "),e("code",[t._v("disabled")]),t._v(" 属性即可让按钮处于禁用状态。")])])],2)},staticRenderFns:[]};var E=e("VU/8")(w,C,!1,function(t){e("IcOw")},null,null).exports,S={components:{Example:u.a},data:function(){return{code:'<template>\n  <div class="example-button-link">\n    <section>\n      <h4>A Link</h4>\n      <vui-button type="primary" href="https://cn.vuejs.org/">Vue.js</vui-button>\n      <vui-button type="primary" href="https://github.com/" target="_blank">Github</vui-button>\n      <vui-button href="/">Home</vui-button>\n      <vui-button href="/guide" target="_blank">Guide</vui-button>\n      <vui-button href="/components">Components</vui-button>\n    </section>\n    <section>\n      <h4>Router Link</h4>\n      <vui-button to="/">Home</vui-button>\n      <vui-button to="/guide" target="_blank">Guide</vui-button>\n      <vui-button to="/components">Components</vui-button>\n    </section>\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-button-link > section > h4 { margin-bottom:16px; }\n  .example-button-link > section > .vui-button { margin:0 16px 16px 0; }\n</style>\n'}}},D={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("example",{attrs:{code:t.code,id:"example-button-link"}},[e("template",{slot:"demo"},[e("div",{staticClass:"example-button-link"},[e("section",[e("h4",[t._v("A Link")]),e("vui-button",{attrs:{type:"primary",href:"https://cn.vuejs.org/"}},[t._v("Vue.js")]),e("vui-button",{attrs:{type:"primary",href:"https://github.com/",target:"_blank"}},[t._v("Github")]),e("vui-button",{attrs:{href:"/"}},[t._v("Home")]),e("vui-button",{attrs:{href:"/guide",target:"_blank"}},[t._v("Guide")]),e("vui-button",{attrs:{href:"/components"}},[t._v("Components")])],1),e("section",[e("h4",[t._v("Router Link")]),e("vui-button",{attrs:{to:"/"}},[t._v("Home")]),e("vui-button",{attrs:{to:"/guide",target:"_blank"}},[t._v("Guide")]),e("vui-button",{attrs:{to:"/components"}},[t._v("Components")])],1)])]),e("template",{slot:"title"},[t._v("链接按钮")]),e("template",{slot:"description"},[e("p",[t._v("属性 "),e("code",[t._v("href")]),t._v(" 用于设置按钮点击后的跳转地址，指定此属性后按钮的点击行为将和普通 "),e("code",[t._v("a")]),t._v(" 链接保持一致。")]),e("p",[t._v("当需要支持用户在具有路由功能的应用中导航（同 "),e("code",[t._v("<router-link />")]),t._v(" 组件）时，请通过 "),e("code",[t._v("to")]),t._v(" 属性指定目标地址。")])])],2)},staticRenderFns:[]};var B=e("VU/8")(S,D,!1,function(t){e("Ku9T")},null,null).exports,L={components:{Example:u.a},data:function(){return{code:'<template>\n  <div class="example-button-group">\n    <section>\n      <h4>Basic</h4>\n      <vui-button-group type="primary">\n        <vui-button>Cancel</vui-button>\n        <vui-button>OK</vui-button>\n      </vui-button-group>\n      <vui-button-group disabled>\n        <vui-button>Cancel</vui-button>\n        <vui-button>OK</vui-button>\n      </vui-button-group>\n      <vui-button-group>\n        <vui-button>Cancel</vui-button>\n        <vui-button>OK</vui-button>\n      </vui-button-group>\n    </section>\n    <section>\n      <h4>Shape And Icon</h4>\n      <vui-button-group type="primary">\n        <vui-button>\n          <vui-icon type="left" />Backward\n        </vui-button>\n        <vui-button>\n          Forward<vui-icon type="right" />\n        </vui-button>\n      </vui-button-group>\n      <vui-button-group type="primary" shape="round">\n        <vui-button icon="left" />\n        <vui-button icon="right" />\n      </vui-button-group>\n      <vui-button-group shape="round">\n        <vui-button icon="left" />\n        <vui-button icon="right" />\n      </vui-button-group>\n    </section>\n    <section>\n      <h4>Size</h4>\n      <div>\n        <vui-button-group size="small">\n          <vui-button>L</vui-button>\n          <vui-button>M</vui-button>\n          <vui-button>R</vui-button>\n        </vui-button-group>\n      </div>\n      <div style="margin-top: 10px;">\n        <vui-button-group>\n          <vui-button>L</vui-button>\n          <vui-button>M</vui-button>\n          <vui-button>R</vui-button>\n        </vui-button-group>\n      </div>\n      <div style="margin-top: 10px;">\n        <vui-button-group size="large">\n          <vui-button>L</vui-button>\n          <vui-button>M</vui-button>\n          <vui-button>R</vui-button>\n        </vui-button-group>\n      </div>\n    </section>\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-button-group > section:not(:last-child) { margin-bottom:20px; }\n  .example-button-group > section > h4 { margin-bottom:10px; }\n  .example-button-group > section > .vui-button-group { margin-right:10px; }\n</style>\n'}}},R={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("example",{attrs:{code:t.code,id:"example-button-group"}},[e("template",{slot:"demo"},[e("div",{staticClass:"example-button-group"},[e("section",[e("h4",[t._v("Basic")]),e("vui-button-group",{attrs:{type:"primary"}},[e("vui-button",[t._v("Cancel")]),e("vui-button",[t._v("OK")])],1),e("vui-button-group",{attrs:{disabled:""}},[e("vui-button",[t._v("Cancel")]),e("vui-button",[t._v("OK")])],1),e("vui-button-group",[e("vui-button",[t._v("Cancel")]),e("vui-button",[t._v("OK")])],1)],1),e("section",[e("h4",[t._v("Shape And Icon")]),e("vui-button-group",{attrs:{type:"primary"}},[e("vui-button",[e("vui-icon",{attrs:{type:"chevron-left"}}),t._v("Backward\n          ")],1),e("vui-button",[t._v("\n            Forward"),e("vui-icon",{attrs:{type:"chevron-right"}})],1)],1),e("vui-button-group",{attrs:{type:"primary",shape:"round"}},[e("vui-button",{attrs:{icon:"chevron-left"}}),e("vui-button",{attrs:{icon:"chevron-right"}})],1),e("vui-button-group",{attrs:{shape:"round"}},[e("vui-button",{attrs:{icon:"chevron-left"}}),e("vui-button",{attrs:{icon:"chevron-right"}})],1)],1),e("section",[e("h4",[t._v("Size")]),e("div",[e("vui-button-group",{attrs:{size:"small"}},[e("vui-button",[t._v("L")]),e("vui-button",[t._v("M")]),e("vui-button",[t._v("R")])],1)],1),e("div",{staticStyle:{"margin-top":"10px"}},[e("vui-button-group",[e("vui-button",[t._v("L")]),e("vui-button",[t._v("M")]),e("vui-button",[t._v("R")])],1)],1),e("div",{staticStyle:{"margin-top":"10px"}},[e("vui-button-group",{attrs:{size:"large"}},[e("vui-button",[t._v("L")]),e("vui-button",[t._v("M")]),e("vui-button",[t._v("R")])],1)],1)])])]),e("template",{slot:"title"},[t._v("按钮组合")]),e("template",{slot:"description"},[e("p",[t._v("可以将多个 "),e("code",[t._v("Button")]),t._v(" 放入 "),e("code",[t._v("ButtonGroup")]),t._v(" 容器中，实现按钮组合。")]),e("p",[t._v("通过 "),e("code",[t._v("shape")]),t._v(" 属性设置按钮组合的形状，"),e("code",[t._v("size")]),t._v(" 属性用于设置尺寸。")])])],2)},staticRenderFns:[]};var T=e("VU/8")(L,R,!1,function(t){e("M4ud")},null,null).exports,M={mixins:[o.a],components:{Document:i.a,ExampleType:r,ExampleGhost:l,ExampleBlock:b,ExampleIconAndShape:h,ExampleSize:x,ExampleLoading:z,ExampleDisabled:E,ExampleLink:B,ExampleGroup:T}},V={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("document",[e("h1",[t._v("Button 按钮")]),e("p",[t._v("按钮用于开始一个即时操作。")]),e("h2",[t._v("何时使用")]),e("p",[t._v("标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。")]),e("h2",[t._v("代码演示")])]),e("vui-row",{attrs:{gutter:16}},[e("vui-col",{attrs:{span:12}},[e("example-type"),e("example-ghost"),e("example-block"),e("example-icon-and-shape"),e("example-size")],1),e("vui-col",{attrs:{span:12}},[e("example-loading"),e("example-disabled"),e("example-link"),e("example-group")],1)],1),e("document",[e("h2",{attrs:{id:"example-api"}},[t._v("API")]),e("h3",[t._v("Button 属性")]),e("table",{staticClass:"example-api-props"},[e("thead",[e("tr",[e("th",{attrs:{width:"120"}},[t._v("属性")]),e("th",[t._v("说明")]),e("th",{attrs:{width:"140"}},[t._v("类型")]),e("th",{attrs:{width:"120"}},[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("htmlType")]),e("td",[t._v("设置按钮的原生 "),e("code",[t._v("type")]),t._v(" 属性，可选值请参考 "),e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/button#attr-type",target:"_blank"}},[t._v("HTML 标准")])]),e("td",[t._v("String")]),e("td",[e("code",[t._v("button")])])]),e("tr",[e("td",[t._v("type")]),e("td",[t._v("设置按钮类型，可选值为 "),e("code",[t._v("default")]),t._v("、"),e("code",[t._v("primary")]),t._v("、"),e("code",[t._v("info")]),t._v("、"),e("code",[t._v("warning")]),t._v("、"),e("code",[t._v("success")]),t._v("、"),e("code",[t._v("error")]),t._v("、"),e("code",[t._v("dashed")]),t._v("、"),e("code",[t._v("text")]),t._v(" 或者不设")]),e("td",[t._v("String")]),e("td",[e("code",[t._v("default")])])]),e("tr",[e("td",[t._v("block")]),e("td",[t._v("设置按钮为块级元素，宽度撑满父元素")]),e("td",[t._v("Boolean")]),e("td",[e("code",[t._v("false")])])]),e("tr",[e("td",[t._v("ghost")]),e("td",[t._v("幽灵属性，使按钮背景透明")]),e("td",[t._v("Boolean")]),e("td",[e("code",[t._v("false")])])]),e("tr",[e("td",[t._v("shape")]),e("td",[t._v("设置按钮形状，可选值为 "),e("code",[t._v("round")]),t._v("、"),e("code",[t._v("circle")]),t._v(" 或者不设")]),e("td",[t._v("String")]),e("td",[t._v("--")])]),e("tr",[e("td",[t._v("size")]),e("td",[t._v("设置按钮尺寸，可选值为 "),e("code",[t._v("small")]),t._v("、"),e("code",[t._v("medium")]),t._v("、"),e("code",[t._v("large")]),t._v(" 或者不设")]),e("td",[t._v("String")]),e("td",[e("code",[t._v("medium")])])]),e("tr",[e("td",[t._v("loading")]),e("td",[t._v("设置按钮为加载状态")]),e("td",[t._v("Boolean")]),e("td",[e("code",[t._v("false")])])]),e("tr",[e("td",[t._v("disabled")]),e("td",[t._v("设置按钮为禁用状态")]),e("td",[t._v("Boolean")]),e("td",[e("code",[t._v("false")])])]),e("tr",[e("td",[t._v("icon")]),e("td",[t._v("设置按钮图标类型")]),e("td",[t._v("String")]),e("td",[t._v("--")])]),e("tr",[e("td",[t._v("href")]),e("td",[t._v("设置按钮点击后的跳转地址，指定此属性后按钮的行为和 "),e("code",[t._v("a")]),t._v(" 链接一致")]),e("td",[t._v("String")]),e("td",[t._v("--")])]),e("tr",[e("td",[t._v("to")]),e("td",[t._v("设置按钮点击后的跳转地址，指定此属性后按钮的行为和 "),e("code",[t._v("<router-link />")]),t._v(" 组件一致")]),e("td",[t._v("String | Object")]),e("td",[t._v("--")])]),e("tr",[e("td",[t._v("replace")]),e("td",[t._v("同 "),e("code",[t._v("<router-link />")]),t._v(" 组件的 "),e("code",[t._v("replace")]),t._v(" 属性，详细说明请参考 "),e("a",{attrs:{href:"https://router.vuejs.org/zh/api/#replace",target:"_blank"}},[t._v("Vue Router API")])]),e("td",[t._v("Boolean")]),e("td",[e("code",[t._v("false")])])]),e("tr",[e("td",[t._v("append")]),e("td",[t._v("同 "),e("code",[t._v("<router-link />")]),t._v(" 组件的 "),e("code",[t._v("append")]),t._v(" 属性，详细说明请参考 "),e("a",{attrs:{href:"https://router.vuejs.org/zh/api/#append",target:"_blank"}},[t._v("Vue Router API")])]),e("td",[t._v("Boolean")]),e("td",[e("code",[t._v("false")])])]),e("tr",[e("td",[t._v("target")]),e("td",[t._v("相当于 "),e("code",[t._v("a")]),t._v(" 链接的 "),e("code",[t._v("target")]),t._v(" 属性，可选值请参考 "),e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a#attr-target",target:"_blank"}},[t._v("HTML 标准")])]),e("td",[t._v("String")]),e("td",[t._v("--")])])])]),e("h3",[t._v("Button 事件")]),e("table",{staticClass:"example-api-events"},[e("thead",[e("tr",[e("th",{attrs:{width:"120"}},[t._v("事件名")]),e("th",[t._v("说明")]),e("th",{attrs:{width:"140"}},[t._v("类型")]),e("th",{attrs:{width:"120"}},[t._v("回调参数")])])]),e("tbody",[e("tr",[e("td",[t._v("click")]),e("td",[t._v("点击按钮时触发的事件回调函数")]),e("td",[t._v("Function")]),e("td",[e("code",[t._v("event")])])])])]),e("h3",[t._v("ButtonGroup 属性")]),e("table",{staticClass:"example-api-props"},[e("thead",[e("tr",[e("th",{attrs:{width:"120"}},[t._v("属性")]),e("th",[t._v("说明")]),e("th",{attrs:{width:"140"}},[t._v("类型")]),e("th",{attrs:{width:"120"}},[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("type")]),e("td",[t._v("设置按钮组合类型，可选值为 "),e("code",[t._v("default")]),t._v("、"),e("code",[t._v("primary")]),t._v("、"),e("code",[t._v("info")]),t._v("、"),e("code",[t._v("warning")]),t._v("、"),e("code",[t._v("success")]),t._v("、"),e("code",[t._v("error")]),t._v("、"),e("code",[t._v("dashed")]),t._v(" 或者不设")]),e("td",[t._v("String")]),e("td",[e("code",[t._v("default")])])]),e("tr",[e("td",[t._v("shape")]),e("td",[t._v("设置按钮组合形状，可选值为 "),e("code",[t._v("round")]),t._v(" 或者不设")]),e("td",[t._v("String")]),e("td",[t._v("--")])]),e("tr",[e("td",[t._v("size")]),e("td",[t._v("设置按钮组合尺寸，可选值为 "),e("code",[t._v("small")]),t._v("、"),e("code",[t._v("medium")]),t._v("、"),e("code",[t._v("large")]),t._v(" 或者不设")]),e("td",[t._v("String")]),e("td",[t._v("--")])]),e("tr",[e("td",[t._v("disabled")]),e("td",[t._v("设置按钮组合为禁用状态")]),e("td",[t._v("Boolean")]),e("td",[e("code",[t._v("false")])])])])])])],1)},staticRenderFns:[]},I=e("VU/8")(M,V,!1,null,null,null);n.default=I.exports},k3dn:function(t,n){}});
//# sourceMappingURL=3.c9778b03890af40b2510.js.map