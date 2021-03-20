webpackJsonp([11],{UZxD:function(t,a){},Zaj1:function(t,a){},ckpI:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=e("q77b"),n=e("Fy5V"),s=e("RLuK"),i='\n<template>\n  <div class="example-avatar-basic-usage">\n    <section>\n      <vui-avatar icon="user" v-bind:size="64" />\n      <vui-avatar icon="user" size="large" />\n      <vui-avatar icon="user" />\n      <vui-avatar icon="user" size="small" />\n    </section>\n    <section>\n      <vui-avatar icon="user" shape="square" v-bind:size="64" />\n      <vui-avatar icon="user" shape="square" size="large" />\n      <vui-avatar icon="user" shape="square" />\n      <vui-avatar icon="user" shape="square" size="small" />\n    </section>\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-avatar-basic-usage section + section { margin-top:20px; }\n  .example-avatar-basic-usage .vui-avatar + .vui-avatar { margin-left:20px; }\n</style>\n'.trim(),v={components:{VuiDocExample:s.a},data:function(){return{code:i}}},o={render:function(){var t=this.$createElement,a=this._self._c||t;return a("vui-doc-example",{attrs:{code:this.code,id:"example-avatar-basic-usage"}},[a("template",{slot:"demo"},[a("div",{staticClass:"example-avatar-basic-usage"},[a("section",[a("vui-avatar",{attrs:{icon:"user",size:64}}),a("vui-avatar",{attrs:{icon:"user",size:"large"}}),a("vui-avatar",{attrs:{icon:"user"}}),a("vui-avatar",{attrs:{icon:"user",size:"small"}})],1),a("section",[a("vui-avatar",{attrs:{icon:"user",shape:"square",size:64}}),a("vui-avatar",{attrs:{icon:"user",shape:"square",size:"large"}}),a("vui-avatar",{attrs:{icon:"user",shape:"square"}}),a("vui-avatar",{attrs:{icon:"user",shape:"square",size:"small"}})],1)])]),a("template",{slot:"title"},[this._v("基本用法")]),a("template",{slot:"description"},[a("p",[this._v("头像有三种尺寸，两种形状可选；其中尺寸支持自定义数值。")])])],2)},staticRenderFns:[]};var c=e("VU/8")(v,o,!1,function(t){e("UZxD")},null,null).exports,l='\n<template>\n  <div class="example-avatar-type">\n    <vui-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />\n    <vui-avatar icon="user" />\n    <vui-avatar>U</vui-avatar>\n    <vui-avatar>USER</vui-avatar>\n    <vui-avatar icon="user" style="background-color: #52c41a;" />\n    <vui-avatar style="background-color: #fde3cf; color: #f56a00;">U</vui-avatar>\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-avatar-type .vui-avatar + .vui-avatar { margin-left:20px; }\n</style>\n'.trim(),u={components:{VuiDocExample:s.a},data:function(){return{code:l}}},d={render:function(){var t=this.$createElement,a=this._self._c||t;return a("vui-doc-example",{attrs:{code:this.code,id:"example-avatar-type"}},[a("template",{slot:"demo"},[a("div",{staticClass:"example-avatar-type"},[a("vui-avatar",{attrs:{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}}),a("vui-avatar",{attrs:{icon:"user"}}),a("vui-avatar",[this._v("U")]),a("vui-avatar",[this._v("USER")]),a("vui-avatar",{staticStyle:{"background-color":"#52c41a"},attrs:{icon:"user"}}),a("vui-avatar",{staticStyle:{"background-color":"#fde3cf",color:"#f56a00"}},[this._v("U")])],1)]),a("template",{slot:"title"},[this._v("类型")]),a("template",{slot:"description"},[a("p",[this._v("支持三种类型：图片、图标以及字符，其中图标和字符可以自定义颜色及背景色。")])])],2)},staticRenderFns:[]};var p=e("VU/8")(u,d,!1,function(t){e("tDTE")},null,null).exports,m='\n<template>\n  <div class="example-avatar-badge">\n    <vui-badge v-bind:count="10">\n      <vui-avatar shape="square" icon="user" />\n    </vui-badge>\n    <vui-badge v-bind:count="10" dot>\n      <vui-avatar shape="square" icon="user" />\n    </vui-badge>\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-avatar-badge .vui-badge + .vui-badge { margin-left:20px; }\n</style>\n'.trim(),_={components:{VuiDocExample:s.a},data:function(){return{code:m}}},h={render:function(){var t=this.$createElement,a=this._self._c||t;return a("vui-doc-example",{attrs:{code:this.code,id:"example-avatar-badge"}},[a("template",{slot:"demo"},[a("div",{staticClass:"example-avatar-badge"},[a("vui-badge",{attrs:{count:10}},[a("vui-avatar",{attrs:{shape:"square",icon:"user"}})],1),a("vui-badge",{attrs:{count:10,dot:""}},[a("vui-avatar",{attrs:{shape:"square",icon:"user"}})],1)],1)]),a("template",{slot:"title"},[this._v("带徽标的头像")]),a("template",{slot:"description"},[a("p",[this._v("通常用于消息提示。")])])],2)},staticRenderFns:[]};var g=e("VU/8")(_,h,!1,function(t){e("nGt0")},null,null).exports,x='\n<template>\n  <div class="example-avatar-dynamic">\n    <vui-avatar v-bind:style="{backgroundColor: color}">{{user}}</vui-avatar>\n    <vui-button size="small" v-on:click="handleChange">Change</vui-button>\n  </div>\n</template>\n\n<script>\n  const colors = ["#f56a00", "#7265e6", "#ffbf00", "#00a2ae"];\n  const users = ["U", "Lucy", "Tom", "Edward"];\n\n  export default {\n    components: {\n      Example\n    },\n    data() {\n      return {\n        color: colors[0],\n        user: users[0]\n      };\n    },\n    methods: {\n      handleChange() {\n        const index = users.indexOf(this.user);\n\n        this.color = index < colors.length - 1 ? colors[index + 1] : colors[0];\n        this.user = index < users.length - 1 ? users[index + 1] : users[0];\n      }\n    }\n  };\n<\/script>\n\n<style>\n  .example-avatar-badge .vui-badge + .vui-badge { margin-left:20px; }\n</style>\n'.trim(),b=["#f56a00","#7265e6","#ffbf00","#00a2ae"],f=["U","Lucy","Tom","Edward"],y={components:{VuiDocExample:s.a},data:function(){return{code:x,color:b[0],user:f[0]}},methods:{handleChange:function(){var t=f.indexOf(this.user);this.color=t<b.length-1?b[t+1]:b[0],this.user=t<f.length-1?f[t+1]:f[0]}}},E={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("vui-doc-example",{attrs:{code:t.code,id:"example-avatar-dynamic"}},[e("template",{slot:"demo"},[e("div",{staticClass:"example-avatar-dynamic"},[e("vui-avatar",{style:{backgroundColor:t.color}},[t._v(t._s(t.user))]),e("vui-button",{attrs:{size:"small"},on:{click:t.handleChange}},[t._v("Change")])],1)]),e("template",{slot:"title"},[t._v("自动调整字符大小")]),e("template",{slot:"description"},[e("p",[t._v("对于字符型的头像，当字符串较长时，字体大小可以根据头像宽度自动调整。")])])],2)},staticRenderFns:[]};var k=e("VU/8")(y,E,!1,function(t){e("fRbX")},null,null).exports,U='\n<template>\n  <div class="example-avatar-group">\n    <vui-avatar-group>\n      <vui-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />\n      <vui-avatar style="background-color: #f56a00">U</vui-avatar>\n      <vui-tooltip content="User Name">\n        <vui-avatar icon="user" style="background-color: #52c41a" />\n      </vui-tooltip>\n      <vui-avatar icon="group" style="background-color: #2d8cf0" />\n    </vui-avatar-group>\n    <vui-avatar-group v-bind:maxCount="2">\n      <vui-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />\n      <vui-avatar style="background-color: #f56a00">U</vui-avatar>\n      <vui-tooltip content="User Name">\n        <vui-avatar icon="user" style="background-color: #52c41a" />\n      </vui-tooltip>\n      <vui-avatar icon="group" style="background-color: #2d8cf0" />\n    </vui-avatar-group>\n  </div>\n</template>\n\n<script>\n  export default {\n\n  };\n<\/script>\n\n<style>\n  .example-avatar-group .vui-avatar-group + .vui-avatar-group { margin-left:20px; }\n</style>\n'.trim(),C={components:{VuiDocExample:s.a},data:function(){return{code:U}}},z={render:function(){var t=this.$createElement,a=this._self._c||t;return a("vui-doc-example",{attrs:{code:this.code,id:"example-avatar-group"}},[a("template",{slot:"demo"},[a("div",{staticClass:"example-avatar-group"},[a("vui-avatar-group",[a("vui-avatar",{attrs:{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}}),a("vui-avatar",{staticStyle:{"background-color":"#f56a00"}},[this._v("U")]),a("vui-tooltip",{attrs:{content:"User Name"}},[a("vui-avatar",{staticStyle:{"background-color":"#52c41a"},attrs:{icon:"user"}})],1),a("vui-avatar",{staticStyle:{"background-color":"#2d8cf0"},attrs:{icon:"group"}})],1),a("vui-avatar-group",{attrs:{maxCount:2}},[a("vui-avatar",{attrs:{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}}),a("vui-avatar",{staticStyle:{"background-color":"#f56a00"}},[this._v("U")]),a("vui-tooltip",{attrs:{content:"User Name"}},[a("vui-avatar",{staticStyle:{"background-color":"#52c41a"},attrs:{icon:"user"}})],1),a("vui-avatar",{staticStyle:{"background-color":"#2d8cf0"},attrs:{icon:"group"}})],1)],1)]),a("template",{slot:"title"},[this._v("头像组合")]),a("template",{slot:"description"},[a("p",[this._v("头像组合展现。")])])],2)},staticRenderFns:[]};var q=e("VU/8")(C,z,!1,function(t){e("Zaj1")},null,null).exports,A={mixins:[r.a],components:{VuiDocMarkdown:n.a,ExampleAvatarBasicUsage:c,ExampleAvatarType:p,ExampleAvatarBadge:g,ExampleAvatarDynamic:k,ExampleAvatarGroup:q}},S={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("vui-doc-markdown",[e("h1",[t._v("Avatar 头像")]),e("p",[t._v("用来代表用户或事物，支持图片、图标或字符展示。")]),e("h2",[t._v("代码演示")])]),e("vui-row",{attrs:{gutter:16}},[e("vui-col",{attrs:{span:12}},[e("ExampleAvatarBasicUsage"),e("ExampleAvatarType")],1),e("vui-col",{attrs:{span:12}},[e("ExampleAvatarBadge"),e("ExampleAvatarDynamic"),e("ExampleAvatarGroup")],1)],1),e("vui-doc-markdown",[e("h2",{attrs:{id:"example-api"}},[t._v("API")]),e("h3",[t._v("Avatar 属性")]),e("table",{staticClass:"example-api-props"},[e("thead",[e("tr",[e("th",{attrs:{width:"150"}},[t._v("属性")]),e("th",[t._v("说明")]),e("th",{attrs:{width:"150"}},[t._v("类型")]),e("th",{attrs:{width:"100"}},[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("src")]),e("td",[t._v("图片类头像的资源地址")]),e("td",[t._v("String")]),e("td",[t._v("--")])]),e("tr",[e("td",[t._v("replacement")]),e("td",[t._v("当图片资源地址为空时的替代图片，可用于设置默认头像")]),e("td",[t._v("String")]),e("td",[t._v("--")])]),e("tr",[e("td",[t._v("alt")]),e("td",[t._v("图片类头像无法显示时的替代文本")]),e("td",[t._v("String")]),e("td",[t._v("--")])]),e("tr",[e("td",[t._v("icon")]),e("td",[t._v("头像的图标类型/图标")]),e("td",[t._v("String | Slot")]),e("td",[t._v("--")])]),e("tr",[e("td",[t._v("shape")]),e("td",[t._v("头像的形状，可选值为 "),e("code",[t._v("circle")]),t._v("、"),e("code",[t._v("square")]),t._v(" 或者不设")]),e("td",[t._v("String")]),e("td",[e("code",[t._v("circle")])])]),e("tr",[e("td",[t._v("size")]),e("td",[t._v("头像的尺寸，预设值为 "),e("code",[t._v("small")]),t._v("、"),e("code",[t._v("medium")]),t._v("、"),e("code",[t._v("large")]),t._v("，可以设置为具体的数值")]),e("td",[t._v("String | Number")]),e("td",[e("code",[t._v("medium")])])])])]),e("h3",[t._v("Avatar 事件")]),e("table",{staticClass:"example-api-events"},[e("thead",[e("tr",[e("th",{attrs:{width:"150"}},[t._v("事件名")]),e("th",[t._v("说明")]),e("th",{attrs:{width:"150"}},[t._v("类型")]),e("th",{attrs:{width:"100"}},[t._v("回调参数")])])]),e("tbody",[e("tr",[e("td",[t._v("error")]),e("td",[t._v("图片类头像加载失败的事件回调")]),e("td",[t._v("Function")]),e("td",[e("code",[t._v("event")])])])])]),e("h3",[t._v("AvatarGroup 属性")]),e("table",{staticClass:"example-api-props"},[e("thead",[e("tr",[e("th",{attrs:{width:"150"}},[t._v("属性")]),e("th",[t._v("说明")]),e("th",{attrs:{width:"150"}},[t._v("类型")]),e("th",{attrs:{width:"100"}},[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("shape")]),e("td",[t._v("设置头像组合的形状，可选值为 "),e("code",[t._v("circle")]),t._v("、"),e("code",[t._v("square")]),t._v(" 或者不设")]),e("td",[t._v("String")]),e("td",[e("code",[t._v("circle")])])]),e("tr",[e("td",[t._v("size")]),e("td",[t._v("设置头像组合的尺寸，预设值为 "),e("code",[t._v("small")]),t._v("、"),e("code",[t._v("medium")]),t._v("、"),e("code",[t._v("large")]),t._v("，可以设置为具体的数值")]),e("td",[t._v("String | Number")]),e("td",[e("code",[t._v("medium")])])]),e("tr",[e("td",[t._v("maxCount")]),e("td",[t._v("显示的最大头像个数")]),e("td",[t._v("Number")]),e("td",[t._v("--")])]),e("tr",[e("td",[t._v("maxTooltipTheme")]),e("td",[t._v("多余头像气泡主题，可选值为 "),e("code",[t._v("light")]),t._v("、"),e("code",[t._v("dark")]),t._v(" 或者不设")]),e("td",[t._v("String")]),e("td",[e("code",[t._v("light")])])]),e("tr",[e("td",[t._v("maxTooltipPlacement")]),e("td",[t._v("多余头像气泡弹出位置，可选值为 "),e("code",[t._v("top")]),t._v("、"),e("code",[t._v("bottom")]),t._v(" 或者不设")]),e("td",[t._v("String")]),e("td",[e("code",[t._v("top")])])])])])])],1)},staticRenderFns:[]},V=e("VU/8")(A,S,!1,null,null,null);a.default=V.exports},fRbX:function(t,a){},nGt0:function(t,a){},tDTE:function(t,a){}});
//# sourceMappingURL=11.8297862a6683e1a30dcf.js.map